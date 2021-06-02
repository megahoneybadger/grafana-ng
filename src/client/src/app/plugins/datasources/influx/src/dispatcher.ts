import { Component } from '@angular/core';
import { Metrics, TimeRange, DataSourceService,
  Series, IDataSourceDispatcher, TimeRangeStore, DispatcherLog } from 'common';
import {InfluxMetricsBuilder} from './metrics/builder'
import { Observable, of } from 'rxjs';

@Component({
	selector: 'ds-dispatcher',
	template: ''
})
export class InfluxDispatcher implements IDataSourceDispatcher {

	constructor( 
    private dsService: DataSourceService,
    private time: TimeRangeStore = undefined/* for timezone */ ){
  }

  dispatch( m: Metrics, range?: TimeRange, log?: DispatcherLog ) : Observable<Series[]>{

    const builder = new InfluxMetricsBuilder( this.time );

    const request = builder.build( m, range );

    if( request ){
			console.log( `[influx] ${request}` );
		}

    
    if( log ){
      log.argument =  request;
      log.proxy = true;
    }

    return ( request ) ?
      this.dsService.proxy( m.dataSource, request ) : of( [] );
  }	
}


