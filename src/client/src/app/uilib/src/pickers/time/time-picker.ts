import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeRangeParser, getQuickRanges, RawTimeRange,
	 TimeRangeStore, DateTime, TimeRange } from 'common';
import { Subscription } from 'rxjs';

import * as moment_ from 'moment';
const moment = moment_;


@Component({
  selector: 'ed-time-range-picker',
	templateUrl: './time-picker.html',
	styleUrls:[ './time-picker.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class TimeRangePickerComponent {

	refreshIntervals = ['5s', '10s', '30s', '1m', '5m', '15m', '30m', '1h', '2h', '1d'];
	availableRanges = [];

	showDropdown: boolean = false;
	showFromCalendar: boolean = false;
	showToCalendar: boolean = false;
	
	form: FormGroup;
	rangeSubs : Subscription;
	isAbsoluteRange: boolean = false;

	constructor( public time: TimeRangeStore ){
		this.form = new FormGroup({
			'from': new FormControl( null, [Validators.required, this.validateTime.bind( this )]),
			'to': new FormControl( null, [Validators.required, this.validateTime.bind( this )]),
		});

		this.rangeSubs = time
			.range$
			.subscribe( range => this.onTimeRangeChange( range ));
	}
	
  ngOnDestroy(){
    this.rangeSubs?.unsubscribe();
	}
	
	onTimeRangeChange( range: TimeRange ){
		if( !range ){
			return;
		}

		const selected = this
			.time
			.converter
			.toLabel( range.raw );

		for( var i = 0; i < 4; ++i ) {
			this.availableRanges.push( getQuickRanges( selected )[ i ] );
		}
		
		this
			.form
			.patchValue( this
				.time
				.converter
				.denormalize( range.raw ));
		
		this.isAbsoluteRange = TimeRangeParser.isAbsTimeRange( range.raw )
	}

	onQuickRange( qr: RawTimeRange ){
		this.showDropdown = false;

    this.time.update( {
      from: qr.from,
      to: qr.to
    })
	}

	onSubmit(){
		const range = this
			.time
			.converter
			.normalize( this.form.value )

		this.time.update( range );

		this.showDropdown = false;
  }
	
	validateTime(c: FormControl) {
    return ( TimeRangeParser.isValid( c.value?.toLowerCase() ) ) ? null : { invalidTime: true };
	}
	
	@HostListener('document:keydown.escape')
  onEscPressed() {
    this.showDropdown = false;
	}
	
	onSelectCalendarFrom( e: DateTime ){
		this.form.patchValue({
      'from': TimeRangeParser.toDateTimeFormatString( e )
    }); 
 
    this.showFromCalendar = false;
	}

	onSelectCalendarTo( e: DateTime ){
		this.form.patchValue({
      'to': TimeRangeParser.toDateTimeFormatString( e )
    }); 
 
    this.showToCalendar = false;
	}

	onMoveAbsoluteRange(direction: number) {
    const range = this.time.range;

    const timespan = (range.to.valueOf() - range.from.valueOf()) / 2;
		let to, from;
		
    if (direction === -1) {
      to = range.to.valueOf() - timespan;
			from = range.from.valueOf() - timespan;
    } else if (direction === 1) {
      to = range.to.valueOf() + timespan;
      from = range.from.valueOf() + timespan;
      if (to > Date.now() && range.to.valueOf() < moment.now()) {
        to = Date.now();
        from = range.from.valueOf();
      }
    } else {
      to = range.to.valueOf();
      from = range.from.valueOf();
		}
		
		this.time.update( {
			from: <DateTime>moment.utc(from),
			to: <DateTime>moment.utc(to)
		})
  }
}
