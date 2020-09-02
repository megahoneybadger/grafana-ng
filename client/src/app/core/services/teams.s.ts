import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { BaseService } from './base-service';
import { Team } from '../models/teams';
import { AvatarHelper } from './avatar';

@Injectable()
export class TeamService extends BaseService{
  getTeams() : Observable<Team[]>{
    return this
      .http
      .get<Team[]>( `${this.baseUri}/teams`, this.headers )
      .pipe(
        map( x => <Team[]>x ));
	}

	getTeam( id: number ) : Observable<Team>{
    return this
      .http
      .get<Team>( `${this.baseUri}/teams/${id}`, this.headers )
      .pipe(
        tap( x => x.avatarUrl = AvatarHelper.getUrl( x.email )));
	}

	// public getTeamMembers( id: number ) : Observable<User[]>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/teams/${id}/members`, this.headers )
  //     .pipe(
  //       map( x => <User[]>x ));
	// }

	// public getTeamPreferences( id: number ): Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/teams/${id}/preferences`, this.headers );
	// }

	// public updateTeam( id: number, team ): Observable<any>{
  //   return this
  //     .http
  //     .put( `${this.baseUri}/teams/${id}`, team, this.headers );
	// }

	// public updateTeamPreferences( id: number, prefs ): Observable<any>{
  //   return this
  //     .http
  //     .put( `${this.baseUri}/teams/${id}/preferences`, prefs, this.headers );
	// }

	// public deleteTeamMember( teamId: number, userId: number ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/teams/${teamId}/members/${userId}`, this.headers );
	// }

	// public addTeamMember( teamId: number, userId: number ) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/teams/${teamId}/members/${userId}`, {}, this.headers );
	// }
	
	// public createTeam( t ) : Observable<any>{
	// 	return this
  //     .http
  //     .post( `${this.baseUri}/teams`, t, this.headers );
	// }

	// public deleteTeam( id: number ) : Observable<any>{
	// 	return this
  //     .http
  //     .delete( `${this.baseUri}/teams/${id}`, this.headers );
  // }
 
}