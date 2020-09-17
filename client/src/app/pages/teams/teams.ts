import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BaseComponent } from '../base/base-component';
import { ErrorMessages, Notes, ObservableEx } from 'uilib';
import { Team, TeamService, TeamStore } from 'common';

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
    public router: Router,
		public activatedRoute: ActivatedRoute ){
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
