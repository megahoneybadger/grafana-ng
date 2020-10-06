import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService, FolderStore, NavigationHelper, NavigationProvider,
   PermissionAssignment, PermissionTarget, Role, TextMessage  } from 'common';
import { Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { PermissionRule, PermissionRuleHelper } from 'src/app/common/src/public-api';
import { ErrorMessages, FadeInOutAnimation, Notes, ObservableEx, PermissionPickerComponent } from 'uilib';
import { FolderBaseComponent } from '../folder-base';

@Component({
  selector: 'folder-perms',
  templateUrl: './folder-perms.html',
  animations: [FadeInOutAnimation],
})
export class FolderPermissionsComponent extends FolderBaseComponent {
  showPermissionPicker: boolean = false;

  permBindingsRequest : ObservableEx<PermissionRule[]>;
  permissions : PermissionRule[];
  PermissionTargetRef = PermissionTarget;
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
		this.permBindingsRequest = new ObservableEx<PermissionRule[]>( this
			.dbService
      .getFolderPermissions( this.folder.uid )
			.pipe( 
				map( x => x.map( y => PermissionRuleHelper.adjust( y ) ) ),
				tap( x => x.sort((a, b) => (a.sortRank > b.sortRank) ? -1 : 1) ),
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
      .subscribe( 
        x => {
          Notes.success( x.message );
          
          this.permissions.push( pb );

          this.permissions.sort( (a, b) => (a.sortRank > b.sortRank) ? -1 : 1 );
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_FOLDER_PERMS ))
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
      .subscribe( 
        x => {
          Notes.success( x.message );
          this.permissions.splice( index, 1 );
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_FOLDER_PERMS ))
  }
  
  onChangePermission( pr: PermissionRule ){
    const newPerms = this
      .permissions
      .map( x => PermissionRuleHelper.toAssignment( x ) )

    newPerms.splice( 0, 1 );

    this
      .updatePermissions( newPerms )
      .subscribe( 
        x => Notes.success( x.message ),
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_FOLDER_PERMS ))
  }

  updatePermissions( perms: PermissionAssignment[] ) : Observable<TextMessage>{
    this.waiting = true;

    return this
			.dbService
			.updateFolderPermissions( this.folder.uid, perms )
			.pipe(
				finalize( () => this.waiting = false ))
  }
}
