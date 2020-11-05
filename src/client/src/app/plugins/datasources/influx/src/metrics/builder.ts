import { Component } from '@angular/core';
import { TimeRange, TimeRangeParser, TimeRangeStore,
  Timezone, MetricsBuilder, Metrics } from 'common';
import { AggrFuncGroup, AggrFuncHelper,
	Field, OrderByTime, GroupByOption, MetricVars, InfluxQuery } from './metrics.m';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'metrics-builder',
	template: ''
})
export class InfluxMetricsBuilder implements MetricsBuilder {

	constructor( private time: TimeRangeStore = undefined/* for timezone */ ){
		
  }

	build( metrics: Metrics, range?: TimeRange ) : Observable<string> {
		const array = [];

		metrics
      .targets
      .filter( x => !(<InfluxQuery>x).hidden )
			.forEach(t => {
				const gen = new Builder( this.time, t, range );

				if (!gen.invalid && !(<any>t).virgin) {
					array.push(gen.text);
				}
			});

		let request = array.join(';');

		return of( request );
	}
}

class Builder{
	get invalid(){
    const invalidQuery = 
      (!this.target) ||
      (!this.target.fields || 0 === this.target.fields.length );

    return invalidQuery;
	}
	
	get text() {
    return `SELECT ${this.getFieldsText()} FROM ${this.getMeasurementText()}`
  }

	constructor( 
		private time: TimeRangeStore,
		private target: any,
		private range?: TimeRange ){

	}

	getFieldsText() {
		let result = '';
		
    if (!this.target.fields) {
      return result;
    }

    this.target.fields.forEach(x => {
      if (result.length > 0) {
        result += ', ';
      }

      result += this.getFieldText( x );
    })

    return result;
	}
	
	
  getFieldText(field: Field) {
		 let result = '';
    let key = (!field.key) ? 'field' : field.key;

    const aggr = field.functions.find(x =>
      AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Aggregations ||
      AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Selectors);

    if (aggr) {
      result += aggr.name + ((aggr.param && aggr.param.value) ?
        `("${key}", ${aggr.param.value})` : `("${key}")`);
    } else {
      result = `"${key}"`;
    }

    const trans = field.functions.filter(x =>
      AggrFuncHelper.getGroup(x.name) === AggrFuncGroup.Transformations);

    trans.forEach(x => {
      const p = (x.param && x.param.value) ? `, ${x.param.value}` : ``;
      result = `${x.name}(${result}${p})`;
    })

    const math = field.functions.find(x =>
      AggrFuncHelper.getGroup(x.name) === AggrFuncGroup.Math);

    if (math) {
      result = `${result} ${math.param.value}`;
    }

    const alias = field.functions.find(x =>
      AggrFuncHelper.getGroup(x.name) === AggrFuncGroup.Alias);

    if (alias) {
      result = `${result} AS "${alias.param.value}"`;
    }

		return result;
	}
	
  getMeasurementText() {
    const meas = (!this.target.measurement) ? 'measurement' : this.target.measurement;

    let rp = (this.target.policy && this.target.policy.length > 0 && this.target.policy !== 'default') ?
      `"${this.target.policy}".` : '';

    let root = `${rp}"${meas}"`;
    let cond = '';

    let tagIndex = 0;

    if (this.target.tags) {
      this
        .target
        .tags
        .filter(x => x.key && x.value)
        .forEach(x => {
          if (tagIndex > 0) {
            cond += ` ${x.condition} `;
          }

          const value = isRegex( x.value ) ? x.value : `'${x.value}'`;
          cond += ` "${x.key}" ${x.operator} ${value}`;
          ++tagIndex;
        });
    }

    const timeFilter = ( this.range ) ?
      this.getTimeFilter() : MetricVars.TIME_FILTER;

    if (cond.length > 0) {
      root = `${root} WHERE (${cond}) and ${timeFilter}`
    }
    else{
      // TODO
      root = `${root} WHERE ${timeFilter}`
		}

		const groupBy = this.target.groupBy;
		const groupByTime = groupBy.find( x => x.type == GroupByOption.Time );
		const groupByFill = groupBy.find( x => x.type == GroupByOption.Fill );
    const groupByTag = groupBy.filter( x => x.type == GroupByOption.Tag );
    
    //console.log( groupBy );

		if( groupByTime ){
      const gb = ( this.range && groupByTime.params[ 0 ] == MetricVars.TIME_INTERVAL ) ?
        this.getOptimalAutoGroupBy() : groupByTime.params[ 0 ];
        
			root = `${root} GROUP BY time(${gb})`
		}

		if( groupByTag.length > 0 ){
			root = ( !groupByTime ) ? `${root} GROUP BY` : `${root},`; 

			groupByTag.forEach( (e,index) => {
				root = `${root}${index >0 ? ', ' : ' '} "${e.params[ 0 ]}"`
			} )
		}
		
		if( groupByFill ){
			root = `${root} FILL(${groupByFill.params[ 0 ]})`
		}

		if( this.target.order != OrderByTime.Asc ){
			root = `${root} ORDER BY time DESC`; 
		}
		
		if( this.target.limit > 0 ){
			root = `${root} LIMIT ${this.target.limit}`;
		}

		if( this.target.slimit > 0 ){
			root = `${root} SLIMIT ${this.target.slimit}`;
		}

    return root;
	}
	
  getOptimalAutoGroupBy() : string {
    const f = TimeRangeParser.toDateTime( this.range.from, false );
    const t = TimeRangeParser.toDateTime( this.range.to, true );

		if (5 > +t.diff( f, "minutes" ))
			return "200ms";

		if (15 > +t.diff( f, "minutes" ))
			return "1s";

		if (30 > t.diff( f, "minutes" ))
			return "2s";

		if (1 > t.diff( f, "hours" ))
			return "5s";		

		if (3 > t.diff( f, "hours" ))
			return "10s";		

		if (6 > t.diff( f, "hours" ))
			return "20s";		

		if (12 > t.diff( f, "hours" ))
			return "1m";		

		if (24 > t.diff( f, "hours" ))
			return "2m";		

		if (7 > t.diff( f, "days" ))
			return "10m";		

		if (31 > t.diff( f, "days" ))
			return "1h";		

		if (365 > t.diff( f, "days" ))
			return "12h";		

		 return "24h";
	}

  getTimeFilter() {
    const range = this.range;
    const tz = this.time.converter.timezone; //this.range.timezone;

    let from = this.getInfluxTime( range.from, false, tz);
    let to = this.getInfluxTime( range.to, true, tz);

    const fromIsAbsolute = from[from.length - 1] === 'ms';

    if (to === 'now()' && !fromIsAbsolute) {
      return 'time >= ' + from;
    }

    return 'time >= ' + from + ' and time <= ' + to;
	}
	
  getInfluxTime(date: any, roundUp: any, timezone: Timezone) {
    if (_.isString(date)) {
      if (date === 'now') {
        return 'now()';
      }

      const parts = /^now-(\d+)([dhms])$/.exec(date);

      if (parts) {
        const amount = parseInt(parts[1], 10);
        const unit = parts[2];
        return 'now() - ' + amount + unit;
      }

      date = TimeRangeParser.toDateTime(date, roundUp, timezone);
    }

    return date.valueOf() + 'ms';
  }

}

export function isRegex(expr) {
  let isValid = true;
  try {
    new RegExp(expr);

    isValid = ( expr.startsWith( '/' ) && expr.endsWith( '/' )  )
  } catch (e) {
    isValid = false;
  }

  return isValid;
}