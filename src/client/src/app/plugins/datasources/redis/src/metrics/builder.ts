import { Component } from '@angular/core';
import { TimeRange, TimeRangeParser, TimeRangeStore,
  Timezone, MetricsBuilder, Metrics } from 'common';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'metrics-builder',
	template: ''
})
export class RedisMetricsBuilder implements MetricsBuilder {

	constructor( private time: TimeRangeStore = undefined/* for timezone */ ){
		
  }

	build( metrics: Metrics, range?: TimeRange ) : Observable<string> {
	

		return of( "todo" );
	}
}

