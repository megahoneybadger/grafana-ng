import { TeamService } from 'src/app/core/services/teams.s';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/core/models/teams';
import { TeamStore } from 'src/app/core/stores/team.store';
import { PageNavigation } from 'src/app/core/models/nav';
import { Subscription } from 'rxjs';

export class TeamBaseComponent {
  navigation: PageNavigation; 
  team: Team;
  id: number;

  teamsSubs: Subscription;
  storeSubs: Subscription;

  constructor( 
    protected teamService: TeamService,
    protected activatedRoute: ActivatedRoute,
    protected store: TeamStore ) {
  }

  ngOnInit(){
    this.id = +this
			.activatedRoute
			.snapshot
      .params['id'];  
      
    this.teamsSubs = this
      .teamService
      .getTeam( this.id )
      .subscribe( team => this.store.add( team ) );
  }

  ngOnDestroy(){
    this.teamsSubs?.unsubscribe();
    this.storeSubs?.unsubscribe();
  }
}
