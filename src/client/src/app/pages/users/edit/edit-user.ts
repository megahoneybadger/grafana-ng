import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { UserService, Role, Organization,
	 UserOrgMembership, OrgUser, OrgService } from 'common';

import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap, finalize } from 'rxjs/operators';
//import { SelectItem } from 'primeng/api';
import { DropDownComponent, ValueChangedEventArgs, FadeInOutAnimation,
	ErrorMessages, Notes, ObservableEx } from 'uilib';

@Component({
  selector: 'admin-edit-user',
  templateUrl: './edit-user.html',
  animations: [FadeInOutAnimation],
})
export class AdminEditUserComponent extends BaseComponent {
  availableOrgs: Organization[];
  orgsToAdd: any[];
  availableRoles = DropDownComponent.wrapEnum( Role );
  
  userOrgsRequest:  ObservableEx<UserOrgMembership[]>;
  userRequest :  ObservableEx<OrgUser>;

  user: OrgUser;
  userOrgs: UserOrgMembership[];
  
  formProfile: FormGroup;
  formPassword: FormGroup;
  formIsAdmin: FormGroup;
  formAddOrg: FormGroup;

  waitingProfile: boolean;
  waitingPassword: boolean;
  waitingIsAdmin: boolean;
  waitingAddMembership: boolean;
  waitingRemoveMembership: boolean;
  waitingRole: boolean;
  updateOrgId: number;

  get name() {
		return this.formProfile.get('name');
	}

	get email() {
		return this.formProfile.get('email');
	}

	get login() {
		return this.formProfile.get('login');
	}

	get password() {
		return this.formPassword.get('password');
	}

	get isAdmin() {
		return this.formIsAdmin.get('isAdmin');
  }
  
  constructor( 
		private userService: UserService,
		private orgService: OrgService,
		private activatedRoute: ActivatedRoute ) {
      super();
      
      this.formProfile = new FormGroup({
        'name': new FormControl( null, Validators.required ),
        'login': new FormControl( null, Validators.required ),
        'email': new FormControl( null, [Validators.required,Validators.email] )
      });
  
      this.formPassword = new FormGroup({
        'password': new FormControl( null, Validators.required )
      });
  
      this.formIsAdmin = new FormGroup({
        'isAdmin': new FormControl( null )
      });

      this.formAddOrg = new FormGroup({
        'org': new FormControl( null, Validators.required ),
        'role': new FormControl( null, Validators.required )
      });
  }
  
  ngOnInit(){
		const id = this
			.activatedRoute
			.snapshot
      .params['id'];  

    this
      .orgService
      .getOrgs()
      .subscribe( x => this.availableOrgs = [...x] );

    this.userRequest = new ObservableEx<OrgUser>( 
      this
        .userService
        .getUser( id )
        .pipe(
          tap( x => { 
            this.user = x;

            this.formProfile.patchValue({
              name: x.name,
              email: x.email,
              login: x.login
            })

            this.formIsAdmin.patchValue({
              isAdmin: x.isRoot
            })

          } ) ) );

    this.userOrgsRequest = new ObservableEx<UserOrgMembership[]>(
      this
        .userService
        .getUserOrgs( id )
        .pipe(
          tap( x => {
            this.userOrgs = [...x];
            this.rebuildOrgsToAdd();
          } ) ) );
  }

  onSubmitProfile(){
    this.waitingProfile = true;

		this
			.userService
			.updateUser( this.user.id, this.formProfile.value )
			.pipe( 
				finalize( () => this.waitingProfile = false ))
			.subscribe( 
				x => Notes.success( x.message ),
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_USER ) );
  }
  
  onSubmitPassword(){
		this.waitingPassword = true;

		this
			.userService
			.changeUserPassword( this.user.id, this.formPassword.value )
			.pipe( 
				finalize( () => {
					this.waitingPassword = false;
					this.formPassword.reset();
				} ))
			.subscribe( 
				x => Notes.success( x.message ),
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_PASSWORD_CHANGE ) );
  }

  onSubmitIsAdmin(){
    this.waitingIsAdmin = true;

		this
			.userService
			.changeUserAdminPermissions( this.user.id, this.formIsAdmin.value )
			.pipe( 
				finalize( () => this.waitingIsAdmin = false ))
			.subscribe( 
				x => Notes.success( x.message ),
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_ADMIN_PERM_CHANGE ) );
	}
  
	onAddMembership(){
    this.waitingAddMembership = true;

    const{ org, role } = this.formAddOrg.value;

		var arg = {
			loginOrEmail: this.user.login,
			role: role
		}
   
		this
			.orgService
			.addOrgMember( org.id, arg)
			.pipe(
				finalize( () =>  {
					this.waitingAddMembership = false;
          this.formAddOrg.reset();
          this.rebuildOrgsToAdd();
				} ))
			.subscribe(
				x => {
					Notes.success(x.message);

					this.userOrgs.push( {
						orgId: org.id,
						name: org.name,
						role: role
					} )
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_ADD_ORG_MEMBER ))
	}

  onRemoveMembership(org: UserOrgMembership) {
    this.waitingRemoveMembership = true;

		this
			.orgService
			.deleteOrgMember( org.orgId, this.user.id)
			.pipe(
				finalize( () =>  {
          this.waitingRemoveMembership = false;
          this.rebuildOrgsToAdd();
					delete (<any>org).confirmDelete;
				} ))
			.subscribe(
				x => {
					Notes.success(x.message);

					const index = this
						.userOrgs
						.findIndex(y => org.orgId == y.orgId );

					if (-1 !== index) {
						this.userOrgs.splice(index, 1);
					}
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_ORG_MEMBER ))
	}
  
  onRoleChanged(ea: ValueChangedEventArgs, org: UserOrgMembership, ctrl: DropDownComponent): void {
		this.updateOrgId = org.orgId;
    this.waitingRole = true;
 
		var arg = {
			role: ea.newValue
		}
		
		this
			.orgService
			.updateOrgMember( org.orgId, this.user.id, arg )
			.pipe(
				finalize( () => {
					this.waitingRole = false;
					this.updateOrgId = undefined;
				} ))
			.subscribe( 
				x => Notes.success( x.message ),
				e => {
					ctrl.forceValue( ea.oldValue );
					Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_ORG_MEMBER );
				})
  }
  
  rebuildOrgsToAdd(){
		const arr = this
			.availableOrgs
			?.filter( x => !this.userOrgs.find( y => y.orgId == x.id ) );

    this.orgsToAdd = DropDownComponent.wrapArray( arr, 'name' );
	}
}
