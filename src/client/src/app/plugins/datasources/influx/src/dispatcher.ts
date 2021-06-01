import { Component } from '@angular/core';
import { Metrics, TimeRange, DataSourceService,
  Series, IDataSourceDispatcher, TimeRangeStore } from 'common';
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

  dispatch( m: Metrics, range?: TimeRange ) : Observable<Series[]>{

    const builder = new InfluxMetricsBuilder( this.time );

    const request = builder.build( m, range );

    if( request ){
			console.log( `[influx] ${request}` );
		}

    return ( request ) ?
      this.dsService.proxy( m.dataSource, request ) : of( [] );
  }	
}


