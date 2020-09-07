import { Component } from '@angular/core';
import { TeamBaseComponent } from '../team-base';
import { TeamService } from 'src/app/core/services/teams.s';
import { ActivatedRoute } from '@angular/router';
import { TeamStore } from 'src/app/core/stores/team.store';
import { TeamNavigation } from 'src/app/core/models/teams';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { Preferences } from 'src/app/core/models/settings';
import { finalize } from 'rxjs/operators';
import { checkTakenTeamName } from '../../pipes/team-name-taken';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';

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
    store: TeamStore ) {
      super( teamService, activatedRoute, store );

      this.formProfile = new FormGroup({
        'name': new FormControl( null, Validators.required,
          checkTakenTeamName.bind( this, teamService, true ) ),
        'email': new FormControl( null, Validators.email )
      });

      this.storeSubs = store
        .team$
        .subscribe( team => {
          this.navigation = TeamNavigation.build( team, 'settings' )
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
