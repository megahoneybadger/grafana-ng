
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { map, mergeMap, skipWhile } from 'rxjs/operators';
import { DataSource } from './datasource.m';
import { DataSourceService } from './datasource.s';

@Injectable()
export class DataSourceStore{

  private _dataSources: BehaviorSubject<DataSource[]> = new BehaviorSubject([]);
  public readonly dataSources$: Observable<DataSource[]> = this._dataSources.asObservable();
  
  private _preLoad: BehaviorSubject<boolean> = new BehaviorSubject(false);
	private readonly preLoad$: Observable<boolean> = this._preLoad.asObservable();

  constructor( private dsService: DataSourceService ){
    console.log( 'created DataSourceStore' );

    this.preLoad();  
  }

  getDataSource( id: number ) : Observable<DataSource>{
    return this
      .preLoad$
      .pipe( 
        skipWhile( v => !v ),
        mergeMap( x => this.findDataSource( id ) ) );
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
      .findIndex( x => d.id == x.id );

    if( -1 != index ){
      this._dataSources.value.splice( index, 1 );
    }
  }

  update( d: DataSource ){
    const index = this
      ._dataSources
      .value
      .findIndex( x => d.id == x.id );

      if( -1 != index ){
        this._dataSources.value.splice( index, 1 );
        this.add( d );
      }
    
  }

  private findDataSource( id: number ) : Observable<DataSource>{
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

  private preLoad(){
    this
      .dsService
      .getDataSources()
      .subscribe( x => {
        this._dataSources.next( x )
        this._preLoad.next( true );
      }  );
  }
}
