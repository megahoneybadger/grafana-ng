import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.s';
import { Role } from './security.m';

@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper = new JwtHelperService();

  constructor( 
    private authService: AuthService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    var token = localStorage.getItem( AuthService.JWT );

    const invalidToken = !( token && !this.jwtHelper.isTokenExpired(token));

    if( invalidToken ){
      this.logOut();
      return false;
    }

    const user = this.authService.decode( token );
    // console.log( user )
    //console.log( route );

    if( user.isRoot ){
      return true;
    }  

    
    if( true == route.data?.root ){
      if( user.isRoot ){
        return true;
      } else {
        this.logOut();
        return false;
      }
    }

    if( undefined != route.data?.role ){
      const role = route.data?.role;

      if( user.role == Role.Admin ){
        return true;
      } else if( user.role == Role.Editor && ( role == Role.Editor || role == Role.Viewer ) ){
        return true;
      } else {
        this.logOut();
        return false;
      }
    }

    return true;
  }

  logOut(){
    this.router.navigate( ["login"] );
  }
}