import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Preferences, TextMessage } from '../settings/settings.m';
import { Organization, CreateOrgRequest, UpdateOrgRequest, UpdateOrgMemberRequest } from './org.m';
import { UserToken, OrgUser } from '../user/user.m'
import { BaseService } from '../_base/base-service';

@Injectable()
export class OrgService extends BaseService{

  getPreferences() : Observable<Preferences>{
    return this
      .http
      .get<Preferences>( `${this.baseUri}/org/preferences`, this.headers );
  }

  updatePreferences( p: Preferences ) : Observable<UserToken>{
    return this
      .http
      .put<UserToken>( `${this.baseUri}/org/preferences`, p, this.headers );
  }

  updateCurrentProfile( r: UpdateOrgRequest ) : Observable<UserToken>{
    return this
      .http
      .put<UserToken>( `${this.baseUri}/org`, r, this.headers );
  }

  getOrgs() : Observable<Organization[]>{
    return this
      .http
      .get<Organization[]>( `${this.baseUri}/orgs`, this.headers );
  }

  getOrg( id: number ) : Observable<Organization>{
    return this
      .http
      .get<Organization>( `${this.baseUri}/orgs/${id}`, this.headers );
  }
  
  create( r: CreateOrgRequest ) : Observable<TextMessage>{
    return this
      .http
      .post<TextMessage>( `${this.baseUri}/orgs`, r, this.headers );
  }

  update( id: number, r: UpdateOrgRequest ) : Observable<UserToken>{
    return this
      .http
      .put<UserToken>( `${this.baseUri}/orgs/${id}`, r, this.headers );
  }

  delete( id: number ) : Observable<TextMessage>{
    return this
      .http
      .delete<TextMessage>( `${this.baseUri}/orgs/${id}`, this.headers );
  }
 
  getOrgMembers( id: number ) : Observable<OrgUser[]>{
    return this
      .http
      .get<OrgUser[]>( `${this.baseUri}/orgs/${id}/members`, this.headers );
  }

  addOrgMember( id: number, arg: any ) : Observable<TextMessage>{
    return this
      .http
      .post<TextMessage>( `${this.baseUri}/orgs/${id}/users`, arg, this.headers );
  }

  updateOrgMember( id: number, userId: number, r: UpdateOrgMemberRequest ) : Observable<TextMessage>{
    return this
      .http
      .patch<TextMessage>( `${this.baseUri}/orgs/${id}/users/${userId}`, r, this.headers );
  }

  deleteOrgMember( id: number, userId: number ) : Observable<TextMessage>{
    return this
      .http
      .delete<TextMessage>( `${this.baseUri}/orgs/${id}/users/${userId}`, this.headers );
  }

 
  // public getCurrentOrgMembers() : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/org/users`, this.headers );
  // }

  

  // public deleteCurrentOrgMember( userId: number ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/org/users/${userId}`, this.headers );
  // }

 

  
  // public updateCurrentOrgMember( userId: number, arg: any ) : Observable<any>{
  //   return this
  //     .http
  //     .patch( `${this.baseUri}/org/users/${userId}`, arg,  this.headers );
  // }
}