import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseService{

  protected host = "http://localhost:5000"
  protected baseUri: string = `${this.host}/api`;
  protected signalrUri: string = `${this.host}/chatHub`;

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

  

  get<T>( url: string ): Observable<T>{
    return this.http.get<T>( `${this.baseUri}/${url}` , this.headers );
  }

  delete_<T>( url: string ): Observable<T>{
    return this.http.delete<T>( `${this.baseUri}/${url}`, this.headers );
  }

  post<T>( url: string, arg: any ): Observable<T>{
    return this
      .http
      .post<T>( `${this.baseUri}/${url}`, arg, this.headers );
  }
}




 