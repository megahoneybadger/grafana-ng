import { Component } from '@angular/core';
import { TeamBaseComponent } from '../team-base';
import { TeamService } from 'src/app/core/services/teams.s';
import { ActivatedRoute } from '@angular/router';
import { TeamStore } from 'src/app/core/stores/team.store';
import { TeamNavigation } from 'src/app/core/models/teams';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forkJoin, Observable, timer } from 'rxjs';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { DropDownComponent } from 'src/app/uilib/dropdown/dropdown.c';
import { SelectItem } from 'primeng/api';
import { Theme, Timezone } from 'src/app/core/models/settings';
import { switchMap, map, finalize } from 'rxjs/operators';
import { checkTakenTeamName } from '../../pipes/team-name-taken';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';

@Component({
  selector: 'team-settings',
  templateUrl: './team-settings.html',
	styleUrls: ['./team-settings.scss'],
})
export class TeamSettingsComponent extends TeamBaseComponent {

  formProfile: FormGroup;
  formPrefs: FormGroup;
  
  availableThemes = DropDownComponent.wrapEnum( Theme );
	availableTimeZones = DropDownComponent.wrapEnum( Timezone );
  availableDashboards: SelectItem[];

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
        'name': new FormControl( null, Validators.required, checkTakenTeamName.bind( this, teamService, true ) ),
        'email': new FormControl( null, Validators.email )
      });
  
      this.formPrefs = new FormGroup({
      	'theme': new FormControl( null ),
      	'homeDashboard': new FormControl( null ),
      	'timeZone': new FormControl( null ),
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

          forkJoin(
            this.teamService.getTeamPreferences( this.team.id ),
            this.dsService.search( 'starred=true' ))
          .subscribe( x => {
            const homeDashboardId = x[ 0 ].homeDashboardId;
  
            var defaultHomeDashboard = <any>{} /*new Dashboard()*/;
            defaultHomeDashboard.title = 'Default';
            defaultHomeDashboard.id = 0;
  
            const dashboards =  [ defaultHomeDashboard, ...x[ 1 ]]
            const homeDashboard = dashboards.find( x => x.id == homeDashboardId );
            this.availableDashboards = DropDownComponent.wrapArray( dashboards, 'title' )
  
            this.formPrefs.patchValue({
              theme: x[ 0 ].theme,
              timeZone:  x[ 0 ].timeZone,
              homeDashboard: homeDashboard ? homeDashboard : defaultHomeDashboard
            });
          } );
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

  onSubmitPreferences(){
    console.log( "onSubmitPreferences" )
  }
}
