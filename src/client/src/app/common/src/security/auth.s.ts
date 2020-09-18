
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { OrgUser } from '../user/user.m';
import { Timezone } from '../settings/settings.m';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BaseService } from '../_base/base-service';


@Injectable()
export class AuthService extends BaseService{
  static readonly JWT : string = "jwt";
  jwtHelper = new JwtHelperService();

  private _user: BehaviorSubject<OrgUser> = new BehaviorSubject(undefined);
  public readonly user$: Observable<OrgUser> = this._user.asObservable();

  constructor( protected http: HttpClient ){
    super(http);

    const token = localStorage.getItem(AuthService.JWT);

    if( token ){
      this.updateToken(token);
    }
  }
  
  updateToken(token) {
    localStorage.setItem(AuthService.JWT, token);

    const user = this.decode( token );

    this._user.next(user);
  }

  decode(token: string) : OrgUser{
    const dt = this.jwtHelper.decodeToken(token)

    //console.log( dt );
    const tzKey = (<string>dt.tz).toLocaleLowerCase();
    

    var user = {
      id: dt.id,
      orgId: +dt.o,
      orgName: dt.on,
      login: dt.l,
      name: dt.n,
      email: dt.e,
      isRoot: (dt.root?.toLowerCase() == 'true'),
      timeZone: Timezone[tzKey as keyof typeof Timezone],
      //role = Role[dt.r as keyof typeof Role]
      role: "Admin"
    }

    return user;
  }

  login( user ) : Observable<any>{
    return this
      .http
      .post( `${this.baseUri}/users/login`, user, this.headers );
  }

  public logOut(){
    localStorage.removeItem( AuthService.JWT );
  }
}
