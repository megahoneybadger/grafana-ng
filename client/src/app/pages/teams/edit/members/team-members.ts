import { Component } from '@angular/core';
import { TeamService } from 'src/app/core/services/teams.s';
import { ActivatedRoute } from '@angular/router';
import { TeamBaseComponent } from '../team-base';
import { TeamStore } from 'src/app/core/stores/team.store';
import { TeamNavigation, Team } from 'src/app/core/models/teams';
import { ObservableEx } from 'src/app/uilib/load-or-error/load-wrapper';
import { tap, finalize } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.html',
	styleUrls: ['./team-members.scss'],
})
export class TeamMembersComponent extends TeamBaseComponent {

  filter: string;
  team: Team;
  teamMembersRequest: ObservableEx<User[]>;
  teamMembers: User[];

  constructor( 
    teamService: TeamService,
    activatedRoute: ActivatedRoute,
    store: TeamStore ) {
      super( teamService, activatedRoute, store );

      this.storeSubs = store
        .team$
        .subscribe( team => {
          this.navigation = TeamNavigation.build( team, 'members' );
          this.team = team;

          if( team.id ){
            this.teamMembersRequest = new ObservableEx( this
              .teamService
              .getTeamMembers( team.id )
              .pipe( 
                tap( x => {
                  this.teamMembers = [...x];
                  //this.rebuildAddCandidates();
                } )
               ) ) ;
          }
        });
  }

  
	onRemoveTeamMember( arg ){
		this.waiting = true;

		this
			.teamService
			.deleteTeamMember( arg.teamId, arg.userId )
			.pipe(
				finalize( () =>	this.waiting = false ))
			.subscribe( 
				x => {
					delete arg.confirmDeleteMembership;
					
					Notes.success( x.message );

					const index = this
						.teamMembers
						.findIndex( y => arg.userId == (<any>y).userId )

					if( -1 !== index ){
						this.teamMembers.splice( index, 1 );
						//this.rebuildAddCandidates();
					}
				}, 
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_TEAM_MEMBER	 ) )
	}
}
