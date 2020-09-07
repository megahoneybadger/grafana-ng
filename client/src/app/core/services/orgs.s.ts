import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from './base-service';
import { Preferences, TextMessage } from '../models/settings';
import { OrgProfileUpdateRequest, Organization, CreateOrgRequest } from '../models/organization';
import { UserToken } from '../models/user'

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

  updateCurrentProfile( r: OrgProfileUpdateRequest ) : Observable<UserToken>{
    return this
      .http
      .put<UserToken>( `${this.baseUri}/org`, r, this.headers );
  }

  getOrgs() : Observable<Organization[]>{
    return this
      .http
      .get<Organization[]>( `${this.baseUri}/orgs`, this.headers );
  }
  
  create( r: CreateOrgRequest ) : Observable<TextMessage>{
    return this
      .http
      .post<TextMessage>( `${this.baseUri}/orgs`, r, this.headers );
  }

  // public getOrg( id: number ) : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/orgs/${id}`, this.headers );
  // }

 
 

  

  // public update( id: number, arg: any ) : Observable<any>{
  //   return this
  //     .http
  //     .put( `${this.baseUri}/orgs/${id}`, arg, this.headers );
  // }

  
  // public delete( id: number ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/orgs/${id}`, this.headers );
  // }

  // public getOrgMembers( id: number ) : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/orgs/${id}/members`, this.headers );
  // }

  // public getCurrentOrgMembers() : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/org/users`, this.headers );
  // }

  // public deleteOrgMember( id: number, userId: number ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/orgs/${id}/users/${userId}`, this.headers );
  // }

  // public deleteCurrentOrgMember( userId: number ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/org/users/${userId}`, this.headers );
  // }

  // public addOrgMember( id: number, arg: any ) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/orgs/${id}/users`, arg, this.headers );
  // }

  // public updateOrgMember( id: number, userId: number, arg: any ) : Observable<any>{
  //   return this
  //     .http
  //     .patch( `${this.baseUri}/orgs/${id}/users/${userId}`, arg,  this.headers );
  // }

  // public updateCurrentOrgMember( userId: number, arg: any ) : Observable<any>{
  //   return this
  //     .http
  //     .patch( `${this.baseUri}/org/users/${userId}`, arg,  this.headers );
  // }
}