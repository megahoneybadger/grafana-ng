
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { DataSource } from './datasource.m';
import { DataSourceService } from './datasource.s';

@Injectable()
export class DataSourceStore{

  private _dataSources: BehaviorSubject<DataSource[]> = new BehaviorSubject([]);
	public readonly dataSources$: Observable<DataSource[]> = this._dataSources.asObservable();

  constructor( private dsService: DataSourceService ){
    console.log( 'created DataSourceStore' );

    this
      .dsService
      .getDataSources()
      .subscribe( x => this._dataSources.next( x ) );
  }

  getDataSource( id: number ) : Observable<DataSource>{
    return this
      .dataSources$
      .pipe( 
        map( list => {
          const d = list.find( y => y.id == id );

          if( !d )
            throw new Error(`Failure to find data source id [${id}]`);
          
          return d;
        }))
  }

  add( d: DataSource ){
    this
      ._dataSources
      .value
      .push( d );
  }

  remove( d: DataSource ){
    const index = this
      ._dataSources
      .value
      .indexOf( d );

    if( -1 != index ){
      this._dataSources.value.splice( index, 1 );
    }
  }

  update( d: DataSource ){
    this.remove( d );
    this.add( d );
  }
}
