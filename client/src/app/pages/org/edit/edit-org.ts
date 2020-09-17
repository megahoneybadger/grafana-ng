import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { finalize, tap } from 'rxjs/operators';
import { DropDownComponent, ErrorMessages,
	 Notes, ObservableEx, FadeInOutAnimation } from 'uilib';
import { Organization, OrgUser, Role, OrgService, AuthService } from 'common';

@Component({
  selector: 'admin-edit-org',
  templateUrl: './edit-org.html',
  animations: [FadeInOutAnimation],
})
export class AdminEditOrgComponent extends BaseComponent{
  form: FormGroup;

  orgId: number;
  org: Organization;
  users: OrgUser[];

  orgRequest :  ObservableEx<Organization>;
  usersRequest :  ObservableEx<OrgUser[]>;

  waitingDelete: boolean = false;
  waitingUpdate: boolean = false;
  updateUserId: number;
  
  availableRoles = DropDownComponent.wrapEnum( Role );
  
  get name() {
		return this.form.get('name');
  }
  
  constructor( 
		private orgService: OrgService,
		private activatedRoute: ActivatedRoute,
		private authService: AuthService ) {
      super();
      
      this.form = new FormGroup({
        'name': new FormControl( null, Validators.required )
      });
  }
  
  ngOnInit(){
		this.orgId = this
			.activatedRoute
			.snapshot
      .params['id'];  

    this.orgRequest = new ObservableEx<Organization>( 
      this
        .orgService
        .getOrg( this.orgId )
        .pipe(
          tap( x => { 
            this.org = x;

            this.form.patchValue({
              name: x.name,
            })
          } ) ) );

    this.usersRequest = new ObservableEx<OrgUser[]>( 
      this
        .orgService
        .getOrgMembers( this.orgId )
        .pipe(
          tap( x => this.users = [...x] ) ) );
  }

  onSubmit(){
		this.waiting = true;

		this
			.orgService
			.update( this.org.id, this.form.value )
			.pipe( 
				finalize( () => this.waiting = false ))
			.subscribe( 
				x => {
					Notes.success( x.message )

					if( x.token ){
						this.authService.updateToken( x.token );
					}
				},
				e => Notes.error(	e.error?.message ?? ErrorMessages.BAD_UPDATE_ORG ) );
  }
  
  onRoleChanged(value: any, user, ctrl: DropDownComponent): void {
    this.waitingUpdate = true;
    this.updateUserId = user.userId;
 
		var arg = {
			role: value.newValue
		}

		this
			.orgService
			.updateOrgMember( this.org.id, user.userId, arg )
			.pipe(
				finalize( () => {
					this.waitingUpdate = false;
					this.updateUserId = undefined;
				} ))
			.subscribe( 
				x => Notes.success( x.message ),
				e => {
					ctrl.forceValue( value.oldValue );
					Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_ORG_MEMBER );
				})

  }
  
  onRemoveMember(user) {
		this.waitingDelete = true;

		this
			.orgService
			.deleteOrgMember( this.org.id, user.userId)
			.pipe(
				finalize( () => this.waitingDelete = false ))
			.subscribe(
				x => {
					delete user.confirmDelete;
					Notes.success(x.message);

					const index = this
						.users
						.findIndex(y => user.userId == (<any>y).userId );

					if (-1 !== index) {
						this.users.splice(index, 1);
					}
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_ORG_MEMBER ))
	}
}
