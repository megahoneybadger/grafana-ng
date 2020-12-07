import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse }  from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
 @Injectable()
 export class HttpErrorInterceptor implements HttpInterceptor {
  constructor( private router: Router ){
     
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if( error.status == 401 ){
          //console.log( "router nav to login" );
          this.router.navigate([ '/login' ]);
        }
        return throwError(error);
      })
    );
  }
 }