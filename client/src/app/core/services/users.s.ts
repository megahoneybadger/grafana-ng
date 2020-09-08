import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from './base-service';
import { User, OrgUser, CreateUserRequest, UpdateUserRequest, UpdateUserPasswordRequest } from '../models/user';
import { TextMessage } from '../models/settings';
import { UserOrgMembership } from '../models/organization';

@Injectable()
export class UserService extends BaseService{
  getUsers() : Observable<OrgUser[]>{
    return this
      .http
      .get<OrgUser[]>( `${this.baseUri}/users`, this.headers );
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

  deleteUser( id: number ) : Observable<TextMessage>{
		return this
      .http
      .delete<TextMessage>( `${this.baseUri}/admin/users/${id}`, this.headers );
  }
  
	changeCurrentUserPassword( r: UpdateUserPasswordRequest ) : Observable<TextMessage>{
		return this
      .http
      .put<TextMessage>( `${this.baseUri}/user/password`, r, this.headers );
	}

	changeUserPassword( id: number, r: UpdateUserPasswordRequest ) : Observable<TextMessage>{
		return this
      .http
      .put<TextMessage>( `${this.baseUri}/admin/users/${id}/password`, r, this.headers );
  }

  getUser( id: number ) : Observable<OrgUser>{
    return this
      .http
      .get<OrgUser>( `${this.baseUri}/users/${id}`, this.headers );
  }
  
  getUserOrgs( id: number ): Observable<UserOrgMembership>{
    return this
      .http
      .get<UserOrgMembership>( `${this.baseUri}/users/${id}/orgs`, this.headers );
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

	
	
	
  
  public updateCurrentUser( arg: any ) : Observable<any>{
    return this
      .http
      .put( `${this.baseUri}/user`, arg, this.headers );
	}
	
	public getUserPreferences( id: number ): Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/user/preferences`, this.headers );
	}

	public updateUserPreferences( id: number, prefs ): Observable<any>{
    return this
      .http
      .put( `${this.baseUri}/user/preferences`, prefs, this.headers );
	}

	public getUserTeams( id: number ): Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/user/teams`, this.headers );
  }

  

  public getCurrentUserOrgs() : Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/user/orgs`, this.headers );
  }
  
  
  
  public switchCurrentUserOrg( orgId: number ): Observable<any>{
    return this
      .http
      .post( `${this.baseUri}/user/using/${orgId}/`, {}, this.headers );
	}



}