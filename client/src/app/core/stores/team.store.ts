import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Team } from 'src/app/core/models/teams';

@Injectable()
export class TeamStore {

  private _team: BehaviorSubject<Team> = new BehaviorSubject(TeamStore.stub);
	public readonly team$: Observable<Team> = this._team.asObservable();
	
  static get stub(): Team{
    return {
      avatarUrl: 'assets/img/user_profile.png',
      id: 0,
      name: 'Loading',
      email: 'loading',
      memberCount: 0,
    }
  }

	add( t: Team ){
		this._team.next( t );
  }
  
  reset(){
		this._team.next( TeamStore.stub );
	}
}