import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from './base-service';
import { User, OrgUser } from '../models/user';

@Injectable()
export class UserService extends BaseService{
  getUsers() : Observable<OrgUser[]>{
    return this
      .http
      .get<OrgUser[]>( `${this.baseUri}/users`, this.headers );
      
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

	public createUser( user: any ): Observable<any>{
		return this
      .http
      .post( `${this.baseUri}/admin/users`, user, this.headers );
	}
	
	public deleteUser( id: number ) : Observable<any>{
		return this
      .http
      .delete( `${this.baseUri}/admin/users/${id}`, this.headers );
	}

	public changeCurrentUserPassword( arg: any ) : Observable<any>{
		return this
      .http
      .put( `${this.baseUri}/user/password`, arg, this.headers );
	}

	public changeUserPassword( id: number, arg: any ) : Observable<any>{
		return this
      .http
      .put( `${this.baseUri}/admin/users/${id}/password`, arg, this.headers );
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

	public getUser( id: number ) : Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/users/${id}`, this.headers );
	}
	
	public updateUser( id: number, arg: any ) : Observable<any>{
    return this
      .http
      .put( `${this.baseUri}/users/${id}`, arg, this.headers );
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

  public getUserOrgs( id: number ): Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/users/${id}/orgs`, this.headers );
  }

  public getCurrentUserOrgs() : Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/user/orgs`, this.headers );
  }
  
  public getOrgs() : Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/orgs`, this.headers );
	}
  
  public switchCurrentUserOrg( orgId: number ): Observable<any>{
    return this
      .http
      .post( `${this.baseUri}/user/using/${orgId}/`, {}, this.headers );
	}



}