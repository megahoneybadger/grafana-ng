import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimeRangeParser } from './helpers/time-parser';
import { RawTimeRange, TimeRange } from './time.m';
import { DashboardStore } from '../dashboard/dashboard.store';
import { TimeRangeConverter } from './helpers/time-converter';
import * as moment_ from 'moment';
const moment = moment_;

@Injectable()
export class TimeRangeStore {

  private _range: BehaviorSubject<TimeRange> = new BehaviorSubject( undefined );
  readonly range$: Observable<TimeRange> = this._range.asObservable();

  private refreshChange: BehaviorSubject<string> = new BehaviorSubject( undefined );
  readonly refresh$: Observable<string> = this.refreshChange.asObservable();

  private lastQueryParams: RawTimeRange;
  private _refresh: string;
  private timer;
  
  private get rangeRaw(){
    return this._range?.value.raw ?? TimeRangeConverter.defaultRawRange;
  }

  get range() : TimeRange {
    if( !this._range.value )
      return;

    return this.converter.toRange( this.rangeRaw )
  }

  get refresh(): string{
    return this._refresh;
  }

  get label() : string {
    if( !this._range.value )
      return '';

    const range = this.rangeRaw;

    const from = TimeRangeParser.isMathString( range.from ) ?
      range.from : TimeRangeParser.toDateTime( range.from );

    const to = TimeRangeParser.isMathString( range.to ) ?
      range.to : TimeRangeParser.toDateTime( range.to );

    return this.converter.toLabel( { from, to });
  }

  get hint(): RawTimeRange{
    if( !this._range.value )
      return;

    const from = TimeRangeParser
      .toDateTime( this._range.value.from, false, this.converter.timezone )
      .format(TimeRangeParser.DEFAULT_DATE_TIME_FORMAT);

    const to  = TimeRangeParser
      .toDateTime( this._range.value.to, true, this.converter.timezone )
      .format(TimeRangeParser.DEFAULT_DATE_TIME_FORMAT);

    return {
      from,
      to
    }
  }

  get converter(): TimeRangeConverter{
    return this.timeConverter;
  }

  constructor( 
    private dasboardStore: DashboardStore,
    private timeConverter: TimeRangeConverter,
    private router: Router,
    private activatedRoute: ActivatedRoute ){
      console.log( 'created TimeStore' );

      this
        .activatedRoute
        .queryParams
        .subscribe( qp => this.queryParamsUpdated( qp ) );

      this
        .dasboardStore
        .dashboard$
        .subscribe( x => {
          if( x ){
            this.update( x.data.time, x.data.refresh, false );
          }
        })
  }

  tick(){
    this.fireRangeChange( this._range.value );
  }

  update( time: RawTimeRange, refresh: string = this.refresh, shouldUpdateQueryParams: boolean = true ){
    if( shouldUpdateQueryParams ){
      this.updateQueryParams( time );
    } else if( !this.lastQueryParams ) {
      //console.log( "time update when query params is empty" );
      this.fireRangeChange( this.converter.toRange( time ) );
    }

    this.updateRefresh( refresh );
  }

  zoom( range: RawTimeRange ){
    const {from, to} = range;

    let f = TimeRangeParser.toDateTime( from );
		let t = TimeRangeParser.toDateTime( to );
		
		if( this.converter.isUtc ){
      const sf = moment( <any>from ).format( TimeRangeParser.MS_DATE_TIME_FORMAT );
      f = moment.utc( sf );

      const st = moment( <any>to ).format( TimeRangeParser.MS_DATE_TIME_FORMAT );
      t = moment.utc( st );
		}

		this.update( {
			from: f,
			to: t
		})
  }

  private updateQueryParams( r: RawTimeRange ){
    //console.log( "time update via query params" );
    const queryParams = this.converter.absolutize( r ); 

    this.router.navigate( [], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge', 
    });
  }

  private queryParamsUpdated( p ){
    let r = this.converter.deabsolutize( p );

    this.lastQueryParams = r ?? undefined;
    
    if( r ){
      this.fireRangeChange( this.converter.toRange( this.lastQueryParams ));
    }
  }

  private updateRefresh( r: string ){
    // if( r == this.refresh ){
    //   return;
    // }
    
    clearInterval( this.timer );
    this._refresh = r;

    //console.log( "stopped refresh interval" );

    if( r ){
      const interval = TimeRangeParser.toMilliseconds( r );
      console.log( `started refresh timer: ${interval}ms` )
      this.timer = setInterval( () => this.tick(), interval )
    }

    this.refreshChange.next( r );
  }

  private fireRangeChange( r: TimeRange ){
    console.log( `fireRangeChange:{ from: ${r.raw.from}, to: ${r.raw.to} }` );
    this._range.next( r );
  }
}