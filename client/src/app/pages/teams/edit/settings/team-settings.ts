import { Component } from '@angular/core';
import { TeamBaseComponent } from '../team-base';
import { TeamService } from 'src/app/core/services/teams.s';
import { ActivatedRoute } from '@angular/router';
import { TeamStore } from 'src/app/core/stores/team.store';
import { TeamNavigation } from 'src/app/core/models/teams';

@Component({
  selector: 'team-settings',
  templateUrl: './team-settings.html',
	styleUrls: ['./team-settings.scss'],
})
export class TeamSettingsComponent extends TeamBaseComponent {

  constructor( 
    teamService: TeamService,
    activatedRoute: ActivatedRoute,
    store: TeamStore ) {
      super( teamService, activatedRoute, store );

      this.storeSubs = store
        .team$
        .subscribe( team => this.navigation = TeamNavigation.build( team, 'settings' ));
  
  }
  
}
