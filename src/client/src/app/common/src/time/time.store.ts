import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../security/auth.s';
import { Timezone } from '../settings/settings.m';
import { OrgUser } from '../user/user.m';
import { DateTimeHelper } from './time-helper';
import { RawTimeRange, TimeRange } from './time.m';
import * as moment_ from "moment";

import { DashboardStore } from '../dashboard/dashboard.store';
const moment = moment_;

@Injectable()
export class TimeStore {

  private _range: BehaviorSubject<TimeRange> = new BehaviorSubject( undefined );
  public readonly range$: Observable<TimeRange> = this._range.asObservable();

  private user: OrgUser;
  private lastQueryParams;
  
  get isUtc() : boolean{
    return this.user.timeZone == Timezone.utc;
  }

  get timezone(): Timezone{
    return this.user ? this.user.timeZone : Timezone.default;
  }

  get rangeRaw(){
    return this._range?.value.raw ?? DateTimeHelper.getDefaultRange();
  }

  get range() : TimeRange{
    if( !this._range.value )
      return;

    return this.toRange( this.rangeRaw )
  }

  get label() : string {
    if( !this._range.value )
      return '';

    const range = this.rangeRaw;

    const from = DateTimeHelper.isMathString( range.from ) ?
      range.from : DateTimeHelper.toDateTime( range.from );

    const to = DateTimeHelper.isMathString( range.to ) ?
      range.to : DateTimeHelper.toDateTime( range.to );

    return DateTimeHelper.toLabel( {
      from: from,
      to: to
    }, this.timezone );
  }

  get hint(): RawTimeRange{
    if( !this._range.value )
      return;

    const from = DateTimeHelper
      .toDateTime( this._range.value.from, false, this.timezone )
      .format(DateTimeHelper.DEFAULT_DATE_TIME_FORMAT);

    const to  = DateTimeHelper
      .toDateTime( this._range.value.to, true, this.timezone )
      .format(DateTimeHelper.DEFAULT_DATE_TIME_FORMAT);

    return {
      from,
      to
    }
  }

  constructor( 
    private dasboardStore: DashboardStore,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute ){
      console.log( 'created TimeStore' );

      this
        .authService
        .user$
        .subscribe( x => this.user = x );

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
    this._range.next( this._range.value );
  }

  update( time: RawTimeRange, shouldUpdateQueryParams: boolean = true ){
    
    if( shouldUpdateQueryParams ){
      this.updateQueryParams( time );
    } else if( !this.lastQueryParams ) {
      //console.log( "time update when query params is empty" );
      this._range.next( this.toRange( time ) );
    }
  }

  private updateQueryParams( range: RawTimeRange ){
    //console.log( "time update via query params" );
    const queryParams = {
      from: ( DateTimeHelper.isMathString( range.from ) ) ?
        range.from : DateTimeHelper.toDateTime( range.from ).valueOf(),

      to: ( DateTimeHelper.isMathString( range.to ) ) ?
        range.to : DateTimeHelper.toDateTime( range.to ).valueOf(),
    }; 

    this.router.navigate( [], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge', 
    });
  }

  private queryParamsUpdated( p ){
    this.lastQueryParams = undefined;

    if( p.from && p.to ){
      let from, to;
      const nFrom = parseInt( p.from );
      const nTo = parseInt( p.to );

      if( DateTimeHelper.isValid( p.from.toLowerCase() ) ) {
        from = p.from; 
      } else if( !isNaN( nFrom ) ) {
        from =  moment(nFrom)
      }

      if( DateTimeHelper.isValid( p.to.toLowerCase() ) ) {
        to = p.to; 
      } else if( !isNaN( nTo ) ) {
        to =  moment(nTo)
      }
      
      if( from && to ){
        this.lastQueryParams = {
          from: from,
          to: to,
        };

        this._range.next( this.toRange( this.lastQueryParams ));
      }
    }
  }

  private toRange( time: RawTimeRange ): TimeRange{
    return {
      from: DateTimeHelper.toDateTime( time.from, false, this.timezone ),
      to: DateTimeHelper.toDateTime( time.to, true, this.timezone ),
      raw: time
    };
  }

  absoluteTzDateTimeToString( d  ){
    const m = moment( d );
    return ( ( this.isUtc ) ? m.utcOffset(0) : m )
      .format( DateTimeHelper.DEFAULT_DATE_TIME_FORMAT );
  }

  stringToAbsoluteTzDateTime( s: string ){
    return this.isUtc ? moment.utc( s ) : moment( s )
  }
}