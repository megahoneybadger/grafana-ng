import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseService{

  protected host = ""
  protected baseUri: string = `${this.host}/api`;

  get base(){
    return this.baseUri;
  }

  get headers(){
    return {
      headers:  new HttpHeaders({
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
        'Content-Type':  'application/json'
      })
    }
  }
  
  constructor( protected http: HttpClient ){
  }

  buildUrl( url: string ){
    return `${this.baseUri}/${url}`;
  }

  get<T>( url: string ): Observable<T>{
    return this
      .http
      .get<T>( this.buildUrl( url ), this.headers );
  }

  delete<T>( url: string ): Observable<T>{
    return this
      .http
      .delete<T>( this.buildUrl( url ), this.headers );
  }

  post<T>( url: string, arg: any ): Observable<T>{
    return this
      .http
      .post<T>( this.buildUrl( url ), arg, this.headers );
  }

  patch<T>( url: string, arg: any ): Observable<T>{
    return this
      .http
      .patch<T>( this.buildUrl( url ), arg, this.headers );
  }

  put<T>( url: string, arg: any ): Observable<T>{
    return this
      .http
      .put<T>( this.buildUrl( url ), arg, this.headers );
  }
}




 