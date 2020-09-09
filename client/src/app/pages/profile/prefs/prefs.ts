import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service';
import { BaseProfileComponent } from '../profile-base';
import { NavigationProvider, NavigationHelper } from 'src/app/core/services/navigation.s';
import { OrgUser } from 'src/app/core/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Preferences } from 'src/app/core/models/settings';
import { Observable, forkJoin } from 'rxjs';
import { UserService } from 'src/app/core/services/users.s';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { finalize, tap } from 'rxjs/operators';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';
import { FadeInOutAnimation } from 'src/app/uilib/animations';
import { ObservableEx } from 'src/app/uilib/load-or-error/load-wrapper';
import { Team } from 'src/app/core/models/teams';
import { Organization, UserOrgMembership } from 'src/app/core/models/organization';

@Component({
  selector: 'profile-prefs',
  templateUrl: './prefs.html',
  animations: [FadeInOutAnimation],
})
export class ProfilePreferencesComponent extends BaseProfileComponent {
  user: OrgUser;
  formProfile: FormGroup;
  
  waitingProfile: boolean;
  waitingPrefs: boolean;

  loaderPrefs$: Observable<[Preferences,any]>;
  teamsRequest: ObservableEx<Team[]>;
  orgsRequest: ObservableEx<UserOrgMembership[]>;
  
  get name() {
		return this.formProfile.get('name');
	}

	get email() {
		return this.formProfile.get('email');
	}

	get login() {
		return this.formProfile.get('login');
	}
  
  constructor(
    authService: AuthService,
    navProvider: NavigationProvider,
    userService: UserService,
		dsService: DashboardService ) {
      super(authService, navProvider, userService, dsService);
  }

  onUserLoaded( u: OrgUser ){
    this.user = u;

    this.formProfile = new FormGroup({
			'name': new FormControl(null, Validators.required),
			'email': new FormControl(null, [Validators.required, Validators.email]  ),
			'login': new FormControl(null, Validators.required )
    });
    
    this.navigation = NavigationHelper.createNavigationFromNode( 
      this.navProvider.profile( u ), "profile-settings" );

    this.formProfile.patchValue({
      name: u.name,
      email: u.email,
      login: u.login
    })
    
    this.loaderPrefs$ = forkJoin(
      this.userService.getUserPreferences( u.id ),
      this.dsService.search( 'starred=true' ));

    this.teamsRequest = new ObservableEx<Team[]>(this
      .userService
      .getCurrentUserTeams());

    this.orgsRequest = new ObservableEx<UserOrgMembership[]>(this
      .userService
      .getCurrentUserOrgs());
      
  }

  onSubmitProfile(){
    this.waitingProfile = true;

		this
			.userService
			.updateCurrentUser( this.formProfile.value )
			.pipe(
				finalize( () => this.waitingProfile = false ) )
			.subscribe( 
				x => {
					Notes.success( x.message );
					this.user.name = this.formProfile.value.name;
					this.user.email = this.formProfile.value.email;
					this.user.login = this.formProfile.value.login;

					this.authService.updateToken( x.token );
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_USER_PROF ) )
	}

  onSubmitPreferences( p: Preferences ){
    this.waitingPrefs = true;
		
    this
      .userService
      .updateUserPreferences( p )
      .pipe( 
        finalize( () => this.waitingPrefs = false ))
      .subscribe( 
        x => {
          Notes.success( x.message )
          this.authService.updateToken( x.token );
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_USER_PREF ) )
  }
}
