import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { DataSource } from "./datasource.m";
import { BaseService } from '../_base/base-service';
import { TextMessage } from '../settings/settings.m';

@Injectable()
export class DataSourceService extends BaseService{

  getDataSources() : Observable<DataSource[]>{
    return this
      .http
      .get<DataSource[]>( `${this.baseUri}/datasources`, this.headers );
  }

  getDataSource( id: number ) : Observable<DataSource>{
    return this
      .http
      .get<DataSource>( `${this.baseUri}/datasources/${id}`, this.headers );
  }

  create( x: DataSource ) :Observable<DataSource>{
    return this
      .http
      .post<DataSource>( `${this.baseUri}/datasources`, x,this.headers );
  }

  update( x: DataSource ) :Observable<DataSource>{
    return this
      .http
      .put<DataSource>( `${this.baseUri}/datasources/${x.id}`, x, this.headers );
  }

  delete( x: DataSource ) :Observable<TextMessage>{
    return this
      .http
      .delete<TextMessage>( `${this.baseUri}/datasources/${x.id}`, this.headers );
  }

  ping( x: DataSource ):Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/datasources/ping/${x.id}`, this.headers );
  }

  // public proxy( dataSourceId: number, x: string ) : Observable<any>{
    
  //   let params = new HttpParams().set('query', x);
  //   let { headers } = this.headers;

  //   return this
  //     .http
  //     .get( `${this.baseUri}/datasources/proxy/${dataSourceId}`,  { params: params, headers: headers } );
  // }

}