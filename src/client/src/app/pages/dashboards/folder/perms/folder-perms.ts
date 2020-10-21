import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService, FolderStore, NavigationHelper, NavigationProvider,
   PermissionAssignment, PermissionRule, PermissionRuleHelper, Role, TextMessage  } from 'common';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { ErrorMessages, FadeInOutAnimation, Notes, ObservableEx } from 'uilib';
import { FolderBaseComponent } from '../folder-base';

@Component({
  selector: 'folder-perms',
  templateUrl: './folder-perms.html',
  animations: [FadeInOutAnimation],
})
export class FolderPermissionsComponent extends FolderBaseComponent {
  showPermissionPicker: boolean = false;

  permRulesRequest : ObservableEx<PermissionRule[]>;
  permissions : PermissionRule[];
  RoleRef = Role;

  constructor( 
    dbService: DashboardService,
    activatedRoute: ActivatedRoute,
    store: FolderStore,
    navProvider: NavigationProvider ) {
      super(dbService, activatedRoute, store, navProvider);

      this.storeSubs = store
        .folder$
        .subscribe( f => {
          this.folder = f;

          this.navigation = NavigationHelper.createNavigationFromNode( 
            this.navProvider.folder( f ), "folder-perms" );

          if( f.uid ){
            this.loadPermissions();
          }
        });
  }

  ngOnDestroy(){
    this.storeSubs?.unsubscribe();
	}

  loadPermissions(){
		this.permRulesRequest = new ObservableEx<PermissionRule[]>( this
			.dbService
      .getFolderPermissions( this.folder.uid )
			.pipe( 
				map( x => x.map( y => PermissionRuleHelper.adjust( y ) ) ),
				tap( x => PermissionRuleHelper.sort( x ) ),
				tap( x => this.permissions = [ PermissionRuleHelper.admin(), ...x] )));
  }

  onAddPermission( pb: PermissionRule ){
    console.log( pb )  ;
    const existingPerms = this
      .permissions
      .map( x => PermissionRuleHelper.toAssignment( x ) )

    const newAssignment = PermissionRuleHelper.toAssignment( pb );

    existingPerms.push( newAssignment )

    existingPerms.splice( 0, 1 )

    this
      .updatePermissions( existingPerms )
      .subscribe( x => {
        Notes.success( x.message );
        
        this.permissions.push( pb );

        PermissionRuleHelper.sort( this.permissions )
      })
  }

  onRemovePermission( pb: PermissionRule ){
    const index = this.permissions.indexOf( pb );

    const existingPerms = this
      .permissions
      .map( x => PermissionRuleHelper.toAssignment( x ) )

    existingPerms.splice( index, 1 )
    existingPerms.splice( 0, 1 )

    this
      .updatePermissions( existingPerms )
      .subscribe( x => {
        Notes.success( x.message );
        this.permissions.splice( index, 1 );
      })
  }
  
  onChangePermission( pr: PermissionRule ){
    const newPerms = this
      .permissions
      .map( x => PermissionRuleHelper.toAssignment( x ) )

    newPerms.splice( 0, 1 );

    this
      .updatePermissions( newPerms )
      .subscribe( x => Notes.success( x.message ));
  }

  updatePermissions( perms: PermissionAssignment[] ) : Observable<TextMessage>{
    this.waiting = true;

    return this
			.dbService
			.updateFolderPermissions( this.folder.uid, perms )
			.pipe(
        finalize( () => this.waiting = false ),
        catchError( e => {
          Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_FOLDER_PERMS );
          return throwError( e );
        }))
  }
}
