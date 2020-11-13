import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrgUser, CreateUserRequest, UpdateUserRequest, 
  UpdateUserPasswordRequest, UserToken, UpdateCurrentUserPasswordRequest } from './user.m';
import { TextMessage, Preferences } from '../settings/settings.m';
import { UserOrgMembership } from '../org/org.m';
import { Team } from '../team/team.m';
import { BaseService } from '../_base/base-service';

@Injectable()
export class UserService extends BaseService{
  getUsers() : Observable<OrgUser[]>{
    return this.get<OrgUser[]>( `users` );
  }

  getUser( id: number ) : Observable<OrgUser>{
    return this.get<OrgUser>( `users/${id}` );
  }
  
  getUserOrgs( id: number ): Observable<UserOrgMembership[]>{
    return this.get<UserOrgMembership[]>( `users/${id}/orgs` );
  }

  getCurrentUserOrgs() : Observable<UserOrgMembership[]>{
    return this.get<UserOrgMembership[]>( `user/orgs` );
  }

  createUser( r: CreateUserRequest ): Observable<TextMessage>{
		return this.post<TextMessage>( `admin/users`, r );
  }
  
  updateUser( id: number, r: UpdateUserRequest ) : Observable<TextMessage>{
    return this.put<TextMessage>( `users/${id}`, r );
  }

  updateCurrentUser( r: UpdateUserRequest ) : Observable<UserToken>{
    return this.put<UserToken>( `user`, r );
	}

  deleteUser( id: number ) : Observable<TextMessage>{
		return this.delete<TextMessage>( `admin/users/${id}` );
  }
  
	changeCurrentUserPassword( r: UpdateCurrentUserPasswordRequest ) : Observable<TextMessage>{
		return this.put<TextMessage>( `user/password`, r );
	}

	changeUserPassword( id: number, r: UpdateUserPasswordRequest ) : Observable<TextMessage>{
		return this.put<TextMessage>( `admin/users/${id}/password`, r );
  }

  getUserPreferences( id: number ): Observable<Preferences>{
    return this.get<Preferences>( `user/preferences` );
	}

	updateUserPreferences( p: Preferences ): Observable<UserToken>{
    return this.put<UserToken>( `user/preferences`, p );
  }
  
  getCurrentUserTeams(): Observable<Team[]>{
    return this.get<Team[]>( `user/teams` );
  }

  starDashboard( id: number ) : Observable<any>{
    return this.post( `user/stars/dashboard/${id}`, {} );
  }

  unstarDashboard( id: number ) : Observable<any>{
    return this.delete( `user/stars/dashboard/${id}` );
  }
  
 

	
	
	


  
  public changeUserAdminPermissions( id: number, arg: any ) : Observable<any>{
		return this.put( `admin/users/${id}/permissions`, arg );
	}


	public getCurrentUser() : Observable<any>{
    return this.get( `user` );
	}

  
  
  public switchCurrentUserOrg( orgId: number ): Observable<any>{
    return this.post( `user/using/${orgId}/`, {} );
	}



}