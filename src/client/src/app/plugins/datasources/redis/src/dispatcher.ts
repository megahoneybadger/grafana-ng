import { Component } from '@angular/core';
import { Metrics, TimeRange, DataSourceService,
  Series, IDataSourceDispatcher, TimeRangeStore } from 'common';

import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
	selector: 'ds-dispatcher',
	template: ''
})
export class RedisDispatcher implements IDataSourceDispatcher {

	constructor( private dsService: DataSourceService ){
  }

  dispatch( m: Metrics, range?: TimeRange ) : Observable<Series[]>{
    return this
      .dsService
      .query( m.dataSource, {
        from: range.from,
        to: range.to,
        queries:[ ...m.targets]
      } )
  }	
}

