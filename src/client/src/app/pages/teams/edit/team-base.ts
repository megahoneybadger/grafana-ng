import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseComponent } from '../../base/base-component';
import { Directive } from '@angular/core';
import { Team, TeamService, TeamStore, PageNavigation } from 'common';

@Directive() 
export class TeamBaseComponent extends BaseComponent {
  navigation: PageNavigation; 
  team: Team;
  id: number;

  teamsSubs: Subscription;
  storeSubs: Subscription;

  constructor( 
    protected teamService: TeamService,
    protected activatedRoute: ActivatedRoute,
    protected store: TeamStore ) {
      super();
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
