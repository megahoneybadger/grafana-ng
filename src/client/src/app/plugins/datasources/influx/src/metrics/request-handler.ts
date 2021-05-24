import { Component } from '@angular/core';
import { Metrics, TimeRange, IRequestHandler, DataSourceService, Series } from 'common';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'request-handler',
	template: ''
})
export class InfluxRequestHandler implements IRequestHandler {

	constructor( private dsService: DataSourceService ){
  }

  handle( m: Metrics, range?: TimeRange ) : Observable<Series[]>{
    return this
      .dsService
      .query( m.dataSource, {
        from: range.from,
        to: range.to,
        queries:[ ...m.targets]
      } );
  }	
}
