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
    return this.get<Team[]>( `teams` );
	}

	getTeam( id: number ) : Observable<Team>{
    return this
      .get<Team>( `$teams/${id}` )
      .pipe(
        tap( x => x.avatarUrl = AvatarHelper.getUrl( x.name )));
  }
	
  createTeam( t : TeamModCommand ) : Observable<any>{
		return this.post( `teams`, t );
  }

  updateTeam( id: number, t: TeamModCommand ): Observable<TextMessage>{
    return this.put<TextMessage>( `teams/${id}`, t );
  }
  
  deleteTeam( id: number ) : Observable<any>{
		return this.delete<TextMessage>( `teams/${id}` );
  }

  getTeamMembers( id: number ) : Observable<TeamMember[]>{
    return this.get<TeamMember[]>( `teams/${id}/members` ) 
  }
  
  
  addTeamMember( teamId: number, userId: number ) : Observable<TextMessage>{
    return this.post<TextMessage>( `teams/${teamId}/members/${userId}`, {} );
  }

  deleteTeamMember( m: TeamMember ) : Observable<TextMessage>{
    return this.delete<TextMessage>( `teams/${m.teamId}/members/${m.userId}` );
  }

  getTeamPreferences( id: number ): Observable<Preferences>{
    return this.get<Preferences>( `teams/${id}/preferences` );
  }

  updateTeamPreferences( id: number, prefs: Preferences ): Observable<TextMessage>{
    return this.put<TextMessage>( `teams/${id}/preferences`, prefs );
	}
  
 
  
  




	

	

	


	
	


 
}