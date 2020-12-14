import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Preferences, TextMessage } from '../settings/settings.m';
import { Organization, CreateOrgRequest, UpdateOrgRequest, UpdateOrgMemberRequest } from './org.m';
import { UserToken, OrgUser } from '../user/user.m'
import { BaseService } from '../_base/base-service';

@Injectable()
export class OrgService extends BaseService{

  getPreferences() : Observable<Preferences>{
    return this.get<Preferences>( `org/preferences` );
  }

  updatePreferences( p: Preferences ) : Observable<UserToken>{
    return this.put<UserToken>( `org/preferences`, p );
  }

  updateCurrentProfile( r: UpdateOrgRequest ) : Observable<UserToken>{
    return this.put<UserToken>( `org`, r );
  }

  getOrgs() : Observable<Organization[]>{
    return this.get<Organization[]>( `orgs` );
  }

  getOrg( id: number ) : Observable<Organization>{
    return this.get<Organization>( `orgs/${id}` );
  }
  
  create( r: CreateOrgRequest ) : Observable<TextMessage>{
    return this.post<TextMessage>( `orgs`, r );
  }

  update( id: number, r: UpdateOrgRequest ) : Observable<UserToken>{
    return this.put<UserToken>( `orgs/${id}`, r );
  }

  remove( id: number ) : Observable<TextMessage>{
    return this.delete<TextMessage>( `orgs/${id}` );
  }
 
  getOrgMembers( id: number ) : Observable<OrgUser[]>{
    return this.get<OrgUser[]>( `orgs/${id}/members` );
  }

  addOrgMember( id: number, arg: any ) : Observable<TextMessage>{
    return this.post<TextMessage>( `orgs/${id}/users`, arg );
  }

  updateOrgMember( id: number, userId: number, r: UpdateOrgMemberRequest ) : Observable<TextMessage>{
    return this.patch<TextMessage>( `orgs/${id}/users/${userId}`, r );
  }

  deleteOrgMember( id: number, userId: number ) : Observable<TextMessage>{
    return this.delete<TextMessage>( `orgs/${id}/users/${userId}` );
  }

  getSettings() : Observable<any[]>{
    return this.get<any[]>( `admin/settings` );
  }

 
  // public getCurrentOrgMembers() : Observable<any>{
  //   return this
  //     .http
  //     .get( `org/users` );
  // }

  

  // public deleteCurrentOrgMember( userId: number ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `org/users/${userId}` );
  // }

 

  
  // public updateCurrentOrgMember( userId: number, arg: any ) : Observable<any>{
  //   return this
  //     .http
  //     .patch( `org/users/${userId}`, arg,  this.headers );
  // }
}