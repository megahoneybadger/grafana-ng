import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/core/services/teams.s';
import { Team } from 'src/app/core/models/teams';
import { tap } from 'rxjs/operators';
import { TeamStore } from 'src/app/core/stores/team.store';
import { ObservableEx } from 'src/app/uilib/load-or-error/load-wrapper';
import { BaseComponent } from '../base/base-component';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';

@Component({
  selector: 'teams',
  templateUrl: './teams.html',
})
export class TeamsComponent extends BaseComponent {
  teamsRequest: ObservableEx<Team[]>
  teams: Team[];
  filter: string;

  constructor( 
    private teamService: TeamService,
    private teamStore: TeamStore,
    private router: Router,
		private activatedRoute: ActivatedRoute ){
      super();
  }

  ngOnInit() {
    this.teamsRequest = new ObservableEx<Team[]>(this
			.teamService
			.getTeams()
			.pipe(
				tap(x => this.teams = [...x])));

    this.teamStore.reset()
  }

  onRemoveTeam( team: Team ){
    this
			.teamService
			.deleteTeam(team.id)
			.subscribe(
				x => {
					delete (<any>team).confirmDelete;
					Notes.success(x.message);

					const index = this
						.teams
						.findIndex(y => team.id == y.id );

					if (-1 !== index) {
						this.teams.splice(index, 1);
					}
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_TEAM ));
  }
}
