import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { BaseService } from './base-service';
import { Team, TeamMember, TeamModCommand } from '../models/teams';
import { AvatarHelper } from './avatar';

@Injectable()
export class TeamService extends BaseService{
  getTeams() : Observable<Team[]>{
    return this
      .http
      .get<Team[]>( `${this.baseUri}/teams`, this.headers );
	}

	getTeam( id: number ) : Observable<Team>{
    return this
      .http
      .get<Team>( `${this.baseUri}/teams/${id}`, this.headers )
      .pipe(
        tap( x => x.avatarUrl = AvatarHelper.getUrl( x.name )));
  }
  
  deleteTeam( id: number ) : Observable<any>{
		return this
      .http
      .delete( `${this.baseUri}/teams/${id}`, this.headers );
  }

	getTeamMembers( id: number ) : Observable<TeamMember[]>{
    return this
      .http
      .get<TeamMember[]>( `${this.baseUri}/teams/${id}/members`, this.headers ) 
  }
  
  createTeam( t : TeamModCommand ) : Observable<any>{
		return this
      .http
      .post( `${this.baseUri}/teams`, t, this.headers );
  }
  
  addTeamMember( teamId: number, userId: number ) : Observable<any>{
    return this
      .http
      .post( `${this.baseUri}/teams/${teamId}/members/${userId}`, {}, this.headers );
  }

  deleteTeamMember( m: TeamMember ) : Observable<any>{
    return this
      .http
      .delete( `${this.baseUri}/teams/${m.teamId}/members/${m.userId}`, this.headers );
  }

  getTeamPreferences( id: number ): Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/teams/${id}/preferences`, this.headers );
  }
  
  updateTeam( id: number, t: TeamModCommand ): Observable<any>{
    return this
      .http
      .put( `${this.baseUri}/teams/${id}`, t, this.headers );
	}
  
  




	

	// public updateTeamPreferences( id: number, prefs ): Observable<any>{
  //   return this
  //     .http
  //     .put( `${this.baseUri}/teams/${id}/preferences`, prefs, this.headers );
	// }

	


	
	


 
}