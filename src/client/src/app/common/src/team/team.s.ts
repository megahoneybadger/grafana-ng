import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Team, TeamMember, TeamModCommand } from './team.m';
import { AvatarHelper } from '../avatar/avatar';
import { Preferences, TextMessage } from '../settings/settings.m';
import { BaseService } from '../_base/base-service';

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
	
  createTeam( t : TeamModCommand ) : Observable<any>{
		return this
      .http
      .post( `${this.baseUri}/teams`, t, this.headers );
  }

  updateTeam( id: number, t: TeamModCommand ): Observable<TextMessage>{
    return this
      .http
      .put<TextMessage>( `${this.baseUri}/teams/${id}`, t, this.headers );
  }
  
  deleteTeam( id: number ) : Observable<any>{
		return this
      .http
      .delete<TextMessage>( `${this.baseUri}/teams/${id}`, this.headers );
  }

  getTeamMembers( id: number ) : Observable<TeamMember[]>{
    return this
      .http
      .get<TeamMember[]>( `${this.baseUri}/teams/${id}/members`, this.headers ) 
  }
  
  
  addTeamMember( teamId: number, userId: number ) : Observable<TextMessage>{
    return this
      .http
      .post<TextMessage>( `${this.baseUri}/teams/${teamId}/members/${userId}`, {}, this.headers );
  }

  deleteTeamMember( m: TeamMember ) : Observable<TextMessage>{
    return this
      .http
      .delete<TextMessage>( `${this.baseUri}/teams/${m.teamId}/members/${m.userId}`, this.headers );
  }

  getTeamPreferences( id: number ): Observable<Preferences>{
    return this
      .http
      .get<Preferences>( `${this.baseUri}/teams/${id}/preferences`, this.headers );
  }

  updateTeamPreferences( id: number, prefs: Preferences ): Observable<TextMessage>{
    return this
      .http
      .put<TextMessage>( `${this.baseUri}/teams/${id}/preferences`, prefs, this.headers );
	}
  
 
  
  




	

	

	


	
	


 
}