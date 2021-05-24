import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { DataSource, Series } from "./datasource.m";
import { BaseService } from '../_base/base-service';
import { TextMessage } from '../settings/settings.m';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class DataSourceService extends BaseService{

  getDataSources() : Observable<DataSource[]>{
    return this.get<DataSource[]>( `datasources` );
  }

  getDataSource( id: number ) : Observable<DataSource>{
    return this.get<DataSource>( `datasources/${id}` );
  }

  create( x: DataSource ) :Observable<DataSource>{
    return this.post<DataSource>( `datasources`, x );
  }

  update( x: DataSource ) :Observable<DataSource>{
    return this.put<DataSource>( `datasources/${x.id}`, x );
  }

  remove( x: DataSource ) :Observable<TextMessage>{
    return this.delete<TextMessage>( `datasources/${x.id}` );
  }

  ping( x: DataSource ):Observable<any>{
    return this.get( `datasources/ping/${x.id}` );
  }

  proxy( dataSourceId: number, x: string ) : Observable<Series[]>{
    let params = new HttpParams().set('query', x);
    let { headers } = this.headers;

    return this
      .http
      .get<Series[]>( this.buildUrl( `datasources/proxy/${dataSourceId}` ), { params: params, headers: headers } );
  }
  
  query( dataSourceId: number, r: any ) : Observable<Series[]>{
    return this.post<Series[]>( `datasources/query/${dataSourceId}`, r );
  }

}

