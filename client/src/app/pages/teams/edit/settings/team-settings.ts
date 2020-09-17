import { Component } from '@angular/core';
import { TeamBaseComponent } from '../team-base';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { checkTakenTeamName } from '../../pipes/team-name-taken';
import { ErrorMessages, Notes } from 'uilib';
import { Preferences, TeamService, DashboardService, TeamStore } from 'common';
import { NavigationProvider } from 'common';
import { NavigationHelper } from 'common';

@Component({
  selector: 'team-settings',
  templateUrl: './team-settings.html',
})
export class TeamSettingsComponent extends TeamBaseComponent {

  formProfile: FormGroup;
  loaderPrefs$: Observable<[Preferences,any]>;

  waitingProfile: boolean = false;
  waitingPrefs: boolean = false;
  
  get name() {
		return this.formProfile.get('name');
	}

	get email() {
		return this.formProfile.get('email');
  }

  constructor( 
    teamService: TeamService,
    private dsService: DashboardService,
    activatedRoute: ActivatedRoute,
    store: TeamStore,
    private navProvider: NavigationProvider ) {
      super( teamService, activatedRoute, store );

      this.formProfile = new FormGroup({
        'name': new FormControl( null, Validators.required,
          checkTakenTeamName.bind( this, teamService, true ) ),
        'email': new FormControl( null, Validators.email )
      });

      this.storeSubs = store
        .team$
        .subscribe( team => {
          this.navigation = NavigationHelper.createNavigationFromNode( 
            this.navProvider.team( team ), "settings" );

          this.team = team;

          if( !team.id ){
            return;
          }

          this.formProfile.patchValue({
            name: this.team.name,
            email: this.team.email,
          });

          this.loaderPrefs$ = forkJoin(
            this.teamService.getTeamPreferences( this.team.id ),
            this.dsService.search( 'starred=true' ));
        } );
  }

  onSubmitProfile(){
    this.waitingProfile = true;
		const updatedTeam = this.formProfile.value;

		this
			.teamService
			.updateTeam( this.team.id, updatedTeam )
			.pipe( 
				finalize( () => this.waitingProfile = false ))
			.subscribe( 
				x => {
					Notes.success( x.message ),
					this.team.name = updatedTeam.name;
					this.team.email = updatedTeam.email;
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_TEAM ) );
  }

  onSubmitPreferences( p: Preferences ){
    this.waitingPrefs = true;
		
		this
			.teamService
			.updateTeamPreferences( this.team.id, p )
			.pipe( 
				finalize( () => this.waitingPrefs = false ))
			.subscribe( 
				x => Notes.success( x.message ),
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_TEAM_PREF	 ) );
  }
}
