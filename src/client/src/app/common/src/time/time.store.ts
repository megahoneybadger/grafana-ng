import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimeRangeParser } from './helpers/time-parser';
import { RawTimeRange, TimeRange } from './time.m';
import { DashboardStore } from '../dashboard/dashboard.store';
import { TimeRangeConverter } from './helpers/time-converter';

@Injectable()
export class TimeRangeStore {

  private _range: BehaviorSubject<TimeRange> = new BehaviorSubject( undefined );
  readonly range$: Observable<TimeRange> = this._range.asObservable();

  private lastQueryParams: RawTimeRange;
  
  private get rangeRaw(){
    return this._range?.value.raw ?? TimeRangeConverter.defaultRawRange;
  }

  get range() : TimeRange {
    if( !this._range.value )
      return;

    return this.converter.toRange( this.rangeRaw )
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
        .subscribe( qp => this.queryParamsUpdated( qp ));

      this
        .dasboardStore
        .dashboard$
        .subscribe( x => {
          if( x ){
            this.update( x.data.time, false )
          }
        })
  }

  tick(){
    this.fireRangeChange( this._range.value );
  }

  update( time: RawTimeRange, shouldUpdateQueryParams: boolean = true ){
    if( shouldUpdateQueryParams ){
      this.updateQueryParams( time );
    } else if( !this.lastQueryParams ) {
      //console.log( "time update when query params is empty" );
      this.fireRangeChange( this.converter.toRange( time ) );
    }
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
    const r = this.converter.deabsolutize( p );

    this.lastQueryParams = r ?? undefined ;
    
    if( r ){
      this.fireRangeChange( this.converter.toRange( this.lastQueryParams ));
    }
  }

  private fireRangeChange( r: TimeRange ){
    console.log( `fireRangeChange:{ from: ${r.raw.from}, to: ${r.raw.to} }` );
    this._range.next( r );
  }
}