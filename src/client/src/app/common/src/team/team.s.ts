import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Team, TeamMember, TeamModCommand } from './team.m';
import { AvatarHelper } from '../avatar/avatar';
import { Preferences, TextMessage } from '../settings/settings.m';
import { BaseService } from '../_base/base-service';

@Injectable()
export class TeamService extends BaseService{

  private readonly ROOT : string = 'teams';

  getTeams() : Observable<Team[]>{
    return this.get<Team[]>( `${this.ROOT}` );
	}

	getTeam( id: number ) : Observable<Team>{
    return this
      .get<Team>( `${this.ROOT}/${id}` )
      .pipe(
        tap( x => x.avatarUrl = AvatarHelper.getUrl( x.name )));
  }
	
  createTeam( t : TeamModCommand ) : Observable<any>{
		return this.post( `${this.ROOT}`, t );
  }

  updateTeam( id: number, t: TeamModCommand ): Observable<TextMessage>{
    return this.put<TextMessage>( `${this.ROOT}/${id}`, t );
  }
  
  deleteTeam( id: number ) : Observable<any>{
		return this.delete<TextMessage>( `${this.ROOT}/${id}` );
  }

  getTeamMembers( id: number ) : Observable<TeamMember[]>{
    return this.get<TeamMember[]>( `${this.ROOT}/${id}/members` ) 
  }
  
  
  addTeamMember( teamId: number, userId: number ) : Observable<TextMessage>{
    return this.post<TextMessage>( `${this.ROOT}/${teamId}/members/${userId}`, {} );
  }

  deleteTeamMember( m: TeamMember ) : Observable<TextMessage>{
    return this.delete<TextMessage>( `${this.ROOT}/${m.teamId}/members/${m.userId}` );
  }

  getTeamPreferences( id: number ): Observable<Preferences>{
    return this.get<Preferences>( `${this.ROOT}/${id}/preferences` );
  }

  updateTeamPreferences( id: number, prefs: Preferences ): Observable<TextMessage>{
    return this.put<TextMessage>( `${this.ROOT}/${id}/preferences`, prefs );
	}
  
 
  
  




	

	

	


	
	


 
}