import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrgUser, CreateUserRequest, UpdateUserRequest, UpdateUserPasswordRequest, UserToken, UpdateCurrentUserPasswordRequest } from './user.m';
import { TextMessage, Preferences } from '../settings/settings.m';
import { UserOrgMembership } from '../org/org.m';
import { Team } from '../team/team.m';
import { BaseService } from '../_base/base-service';

@Injectable()
export class UserService extends BaseService{
  getUsers() : Observable<OrgUser[]>{
    return this
      .http
      .get<OrgUser[]>( `${this.baseUri}/users`, this.headers );
  }

  getUser( id: number ) : Observable<OrgUser>{
    return this
      .http
      .get<OrgUser>( `${this.baseUri}/users/${id}`, this.headers );
  }
  
  getUserOrgs( id: number ): Observable<UserOrgMembership[]>{
    return this
      .http
      .get<UserOrgMembership[]>( `${this.baseUri}/users/${id}/orgs`, this.headers );
  }

  getCurrentUserOrgs() : Observable<UserOrgMembership[]>{
    return this
      .http
      .get<UserOrgMembership[]>( `${this.baseUri}/user/orgs`, this.headers );
  }

  createUser( r: CreateUserRequest ): Observable<TextMessage>{
		return this
      .http
      .post<TextMessage>( `${this.baseUri}/admin/users`, r, this.headers );
  }
  
  updateUser( id: number, r: UpdateUserRequest ) : Observable<TextMessage>{
    return this
      .http
      .put<TextMessage>( `${this.baseUri}/users/${id}`, r, this.headers );
  }

  updateCurrentUser( r: UpdateUserRequest ) : Observable<UserToken>{
    return this
      .http
      .put<UserToken>( `${this.baseUri}/user`, r, this.headers );
	}

  deleteUser( id: number ) : Observable<TextMessage>{
		return this
      .http
      .delete<TextMessage>( `${this.baseUri}/admin/users/${id}`, this.headers );
  }
  
	changeCurrentUserPassword( r: UpdateCurrentUserPasswordRequest ) : Observable<TextMessage>{
		return this
      .http
      .put<TextMessage>( `${this.baseUri}/user/password`, r, this.headers );
	}

	changeUserPassword( id: number, r: UpdateUserPasswordRequest ) : Observable<TextMessage>{
		return this
      .http
      .put<TextMessage>( `${this.baseUri}/admin/users/${id}/password`, r, this.headers );
  }

  getUserPreferences( id: number ): Observable<Preferences>{
    return this
      .http
      .get<Preferences>( `${this.baseUri}/user/preferences`, this.headers );
	}

	updateUserPreferences( p: Preferences ): Observable<UserToken>{
    return this
      .http
      .put<UserToken>( `${this.baseUri}/user/preferences`, p, this.headers );
  }
  
  getCurrentUserTeams(): Observable<Team[]>{
    return this
      .http
      .get<Team[]>( `${this.baseUri}/user/teams`, this.headers );
  }

 



  public starDashboard( id: number ) : Observable<any>{
    return this
      .http
      .post( `${this.baseUri}/user/stars/dashboard/${id}`, {}, this.headers );
  }

  public unstarDashboard( id: number ) : Observable<any>{
    return this
      .http
      .delete( `${this.baseUri}/user/stars/dashboard/${id}`, this.headers );
  }
  
 

	
	
	


  
  public changeUserAdminPermissions( id: number, arg: any ) : Observable<any>{
		return this
      .http
      .put( `${this.baseUri}/admin/users/${id}/permissions`, arg, this.headers );
	}


	public getCurrentUser() : Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/user`, this.headers );
	}

	

  

  
  
  
  
  public switchCurrentUserOrg( orgId: number ): Observable<any>{
    return this
      .http
      .post( `${this.baseUri}/user/using/${orgId}/`, {}, this.headers );
	}



}