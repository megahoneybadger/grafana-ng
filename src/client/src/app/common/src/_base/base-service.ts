import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}




 