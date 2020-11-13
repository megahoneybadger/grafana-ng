import { Injectable } from '@angular/core';
import { DateTime, RawTimeRange, TimeRange, TimeRangeMod } from '../time.m';
import * as moment_ from "moment";

import { Timezone } from '../../settings/settings.m';
import { OrgUser } from '../../user/user.m';
import { AuthService } from '../../security/auth.s';
import { TimeRangeParser } from './time-parser';
import { quickRanges } from './quick-ranges';
import * as _ from 'lodash';

const moment = moment_;

const rangeIndex: any = {};

_.each(quickRanges, (frame: any) => {
	rangeIndex[frame.from + ' to ' + frame.to] = frame;
});

@Injectable()
export class TimeRangeConverter {
  private user: OrgUser;
  
  get isUtc() : boolean{
    return this.timezone == Timezone.utc;
  }

  get timezone(): Timezone{
    return this.user ? this.user.timeZone : Timezone.default;
  }

  static get defaultRawRange() : RawTimeRange{
    return {
      from: 'now-6h',
      to:'now'
     }
  }

  constructor( private authService: AuthService ){
    this
      .authService
      .user$
      .subscribe( x => this.user = x );

    console.log( "created TimeRangeConverter" )
  }

  toRange( time: RawTimeRange ) : TimeRange {
    return {
      from: TimeRangeParser.toDateTime( time.from, false, this.timezone ),
      to: TimeRangeParser.toDateTime( time.to, true, this.timezone ),
      raw: time
    };
  }

  toDateTimeString( d: any ){
    const m = moment( d );
    return ( ( this.isUtc ) ? m.utcOffset(0) : m )
      .format( TimeRangeParser.DEFAULT_DATE_TIME_FORMAT );
  }

  fromDateTimeString( s: any ){
    return <DateTime>( this.isUtc ? moment.utc( s ) : moment( s ))
  }

  toLabel( range: RawTimeRange ) : string {
    const option = rangeIndex[range.from.toString() + ' to ' + range.to.toString()];
    const tz = this.timezone;

		if (option) {
			return option.display;
		}

		if( TimeRangeParser.isDateTime(range.from) && TimeRangeParser.isDateTime(range.to)) {
			return TimeRangeParser.formatDate(range.from, tz) + ' to ' + TimeRangeParser.formatDate(range.to, tz);
		}

		if( TimeRangeParser.isDateTime(range.from)) {
			const toMoment = TimeRangeParser.toDateTime(range.to, true, tz);
			return toMoment ? TimeRangeParser.formatDate(range.from, tz) + ' to ' + toMoment.fromNow() : '';
		}

		if( TimeRangeParser.isDateTime(range.to)) {
			const from = TimeRangeParser.toDateTime(range.from, false, tz);
			return from ? from.fromNow() + ' to ' + TimeRangeParser.formatDate(range.to, tz) : '';
		}

		if (range.to.toString() === 'now') {
			const res = TimeRangeParser.toRange(range.from);
      return res.display;
		}

		return range.from.toString() + ' to ' + range.to.toString();
  }

  normalize( r: RawTimeRange ): RawTimeRange{
    const from = ( TimeRangeParser.isMathString( r.from ) ) ?
      r.from : this.fromDateTimeString( r.from )

    const to = ( TimeRangeParser.isMathString( r.to ) ) ?
      r.to : this.fromDateTimeString( r.to )
      
    return { from,  to };
  }

  denormalize( r: RawTimeRange ): RawTimeRange{
    const from = ( TimeRangeParser.isMathString( r.from ) ) ?
      r.from : this.toDateTimeString( r.from )

    const to = ( TimeRangeParser.isMathString( r.to ) ) ?
      r.to : this.toDateTimeString( r.to )
      
    return { from, to };
  }

  absolutize( r: RawTimeRange): RawTimeRange{
    const from = ( TimeRangeParser.isMathString( r.from ) ) ?
      r.from : TimeRangeParser.toDateTime( r.from ).valueOf();

    const to = ( TimeRangeParser.isMathString( r.to ) ) ?
      r.to : TimeRangeParser.toDateTime( r.to ).valueOf();

    return { from, to }
  }

  deabsolutize( r: RawTimeRange): RawTimeRange{
    if( !( r.from && r.to ) ){
      return;
    }
      
    let from, to;

    const nFrom = parseInt( <any>r.from );
    const nTo = parseInt( <any>r.to );

    if( TimeRangeParser.isValid( (<string>r.from).toLowerCase() ) ) {
      from = r.from; 
    } else if( !isNaN( nFrom ) ) {
      from = moment(nFrom)
    }

    if( TimeRangeParser.isValid( (<string>r.to).toLowerCase() ) ) {
      to = r.to; 
    } else if( !isNaN( nTo ) ) {
      to =  moment(nTo)
    }

    return ( from && to ) ? { from, to } : undefined;
  }

  modify( range: TimeRange, mod: TimeRangeMod, epoch: boolean = false ) : TimeRange{

    let tf = range.from;
    let tt = range.to;

    //console.log( 'mod' );

    if( mod?.from && !TimeRangeParser.isAbsTimeRange( range ) ){
      const range = TimeRangeParser.getOverriddenRelativeRange( mod.from );

      tf = <DateTime>range.from;
      tt = <DateTime>range.to
    }

    if( mod?.shift ){
      const range = TimeRangeParser.shiftRange( 
        {from: tf, to: tt}, this.timezone, mod.shift );

      tf = <DateTime>range.from;
      tt = <DateTime>range.to
    }

    if( epoch ){
      tf = TimeRangeParser
        .toDateTime( tf, false, this.timezone )
        .valueOf();

      tt = TimeRangeParser
        .toDateTime( tt, true, this.timezone )
        .valueOf();
    }

    return {
      from: tf,
      to: tt,
      raw: range
    }
  }

  toEpoch( m ){
    const s = moment( m ).format(TimeRangeParser.DEFAULT_DATE_TIME_FORMAT);

    return ( this.isUtc ) ? moment.utc( s ).valueOf() : moment( s ).valueOf();
  }
}