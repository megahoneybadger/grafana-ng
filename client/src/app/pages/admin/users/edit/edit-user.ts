import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { UserService } from 'src/app/core/services/users.s';
import { OrgService } from 'src/app/core/services/orgs.s';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ObservableEx } from 'src/app/uilib/load-or-error/load-wrapper';
import { Organization } from 'src/app/core/models/organization';
import { OrgUser } from 'src/app/core/models/user';
import { tap, finalize } from 'rxjs/operators';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';

@Component({
  selector: 'admin-edit-user',
  templateUrl: './edit-user.html',
})
export class AdminEditUserComponent extends BaseComponent {
  availableOrgs: Organization[];
  
  userOrgsRequest:  ObservableEx<any>;
  userRequest :  ObservableEx<OrgUser>;

  user: OrgUser;
  
  formProfile: FormGroup;
  formPassword: FormGroup;
  formIsAdmin: FormGroup;

  waitingProfile: boolean;
  waitingPassword: boolean;
  waitingIsAdmin: boolean = false;


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
  }
  
  ngOnInit(){
		const id = this
			.activatedRoute
			.snapshot
      .params['id'];  

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
}
