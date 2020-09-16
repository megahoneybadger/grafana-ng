import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service';
import { NavigationProvider, NavigationHelper } from 'src/app/core/services/navigation.s';
import { BaseProfileComponent } from '../profile-base';
import { OrgUser } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/users.s';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorMessages, Notes } from 'uilib2';


@Component({
  selector: 'change-password',
  templateUrl: './change-pwd.html',
})
export class ProfileChangePasswordComponent extends BaseProfileComponent {
  public form: FormGroup;

	get oldPassword() {
		return this.form.get('oldPassword');
	}

	get newPassword() {
		return this.form.get('newPassword');
	}

	get confirmNewPassword() {
		return this.form.get('confirmNewPassword');
	}

  constructor(
    authService: AuthService,
    navProvider: NavigationProvider,
    userService: UserService,
    dsService: DashboardService,
    public router: Router ) {
      super(authService, navProvider, userService, dsService);
  }

  onUserLoaded( u: OrgUser ){
    this.navigation = NavigationHelper.createNavigationFromNode( 
      this.navProvider.profile( u ), "change-password" );

    this.form = new FormGroup({
      'oldPassword': new FormControl(null, Validators.required),
      'newPassword': new FormControl(null, Validators.required),
      'confirmNewPassword': new FormControl(null, Validators.required )
    });
  }

  onSubmit(){
    const {oldPassword, newPassword, confirmNewPassword} = this.form.value;

		if( newPassword !== confirmNewPassword ){
			Notes.error( "New password does not match" );
			return;
    }
    
    const arg = {
      oldPassword,
      newPassword
    };

		this.waiting = true;

		this
			.userService
			.changeCurrentUserPassword( arg )
			.pipe(
				finalize( () => {
					this.waiting = false;
					this.form.reset();
				} ) )
			.subscribe( 
				x => {
					Notes.success( x.message );
					this.router.navigate(['/profile'])
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CHANGE_USER_PASSWORD  ) )
  }
}
