import { Component } from '@angular/core';
import { TeamService } from 'src/app/core/services/teams.s';
import { ActivatedRoute } from '@angular/router';
import { TeamBaseComponent } from '../team-base';
import { TeamStore } from 'src/app/core/stores/team.store';
import { TeamNavigation } from 'src/app/core/models/teams';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.html',
	styleUrls: ['./team-members.scss'],
})
export class TeamMembersComponent extends TeamBaseComponent {

  constructor( 
    teamService: TeamService,
    activatedRoute: ActivatedRoute,
    store: TeamStore ) {
      super( teamService, activatedRoute, store );

      this.storeSubs = store
        .team$
        .subscribe( team => this.navigation = TeamNavigation.build( team, 'members' ));
  
  }
  
}
