import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardService, DashboardStore, PermissionAssignment, PermissionRule,
  PermissionRuleHelper, Role, TextMessage } from 'common';
import { ErrorMessages, FadeInOutAnimation, Notes, ObservableEx } from 'uilib';
import { BaseDasboardComponent } from '../../base/dashboard-base';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { catchError, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'settings-permissions',
  templateUrl: `./perms.html`,
  encapsulation: ViewEncapsulation.None,
  animations: [FadeInOutAnimation],
})
export class VersionPermissionsComponent extends BaseDasboardComponent{

  showPermissionPicker: boolean = false;
  
  permRulesRequest : ObservableEx<PermissionRule[]>;
  permissions : PermissionRule[];
  RoleRef = Role;
  waiting : boolean;

  get assignments() : PermissionAssignment[]{
    const list = this
      .permissions
      .filter( x => !x.inherited )
      .map( x => PermissionRuleHelper.toAssignment( x ) )

    list.splice( 0, 1 )

    return list;
  }

  isImmutable( p: PermissionRule ):boolean{
    return p.role==Role.Admin || p.inherited;
  }

  constructor( 
    store: DashboardStore,
    private dbService: DashboardService,
    activatedRoute: ActivatedRoute  ){
      super( store );
  }

  onDashboardReady(){
    this.loadPermissions();
  }

  loadPermissions(){
		this.permRulesRequest = new ObservableEx<PermissionRule[]>( this
			.dbService
      .getDashboardPermissions( this.dashboard.id )
      .pipe( 
        map( x => x.map( y => PermissionRuleHelper.adjust( y ) ) ),
        tap( x => PermissionRuleHelper.sort( x ) ),
      	tap( x => this.permissions = [ PermissionRuleHelper.admin(), ...x] )));
	}
  
  onAddPermission( pb: PermissionRule ){
    const newPerms = [ 
      ...this.assignments,
      PermissionRuleHelper.toAssignment( pb ) ]

    this
      .updatePermissions( newPerms )
      .subscribe( x => {
        Notes.success( x.message );
        
        this.permissions.push( pb );

        PermissionRuleHelper.sort( this.permissions )
      })
  }

  onRemovePermission( pb: PermissionRule ){
    const index = this.permissions.indexOf( pb );

    const newPerms = this
      .permissions
      .filter( x => x != pb && !x.inherited )
      .map( x => PermissionRuleHelper.toAssignment( x ) );

    newPerms.splice( 0, 1 );

    this
      .updatePermissions( newPerms )
      .subscribe( x => {
        Notes.success( x.message );
        this.permissions.splice( index, 1 );
      })
  }
  
  onChangePermission( _: PermissionRule ){
    this
      .updatePermissions( this.assignments )
      .subscribe( x => Notes.success( x.message ));
  }

  updatePermissions( perms: PermissionAssignment[] ) : Observable<TextMessage>{
    this.waiting = true;

    console.log( perms );

    return this
			.dbService
			.updateDashboardPermissions( this.dashboard.id, perms )
			.pipe(
        finalize( () => this.waiting = false ),
        catchError( e => {
          Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_DB_PERMS );
          return throwError( e );
        }))
  }
}

