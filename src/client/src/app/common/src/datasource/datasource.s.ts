import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { DataSource } from "./datasource.m";
import { BaseService } from '../_base/base-service';


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

  update( x: DataSource ) :Observable<DataSource>{
    return this
      .http
      .put<DataSource>( `${this.baseUri}/datasources/${x.id}`, x, this.headers );
  }

  ping( x: DataSource ):Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/datasources/ping/${x.id}`, this.headers );
  }

  // public create( x: DataSource ) :Observable<DataSource>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/datasources`, x,this.headers )
  //     .pipe( 
  //       map( (x:any) => this.convertDataSource( x ) ) );
  // }

  

  // public delete( x: DataSource ) :Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/datasources/${x.id}`, this.headers );
  //     //.delete( `${this.baseUri}/datasources/1`, this.headers );
  // }

 

 

  // public proxy( dataSourceId: number, x: string ) : Observable<any>{
    
  //   let params = new HttpParams().set('query', x);
  //   let { headers } = this.headers;

  //   return this
  //     .http
  //     .get( `${this.baseUri}/datasources/proxy/${dataSourceId}`,  { params: params, headers: headers } );
  // }

  // private convertDataSources( records : any [] ) : DataSource[]{
  //   let list = new Array<DataSource>();

    

  //   records.forEach( x =>{
  //     let ds = this.convertDataSource( x );

  //     if( ds ){
  //       list.push( ds );
  //     }
  //   });

    

  //   return list;
  // }

  // private convertDataSource( x : any ) : DataSource{
  //   let ds = null;

  //   switch( x.type ){
  //     case "mysql":
  //       ds = new MySqlDataSource( x.name );
  //       break;

  //     case "influx":
  //       ds = new InfluxDdDataSource( x.name );
  //       break;
  //   }

  //   if( ds ){
  //     Object.assign( ds, x )
  //   }

  //   return ds;
  // }
}