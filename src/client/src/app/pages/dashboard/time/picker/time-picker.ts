import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTimeHelper, RawTimeRange, TimeStore } from 'common';


@Component({
  selector: 'ed-time-picker',
	templateUrl: './time-picker.html',
	styleUrls:[ './time-picker.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class TimePickerComponent {

	refreshIntervals = ['5s', '10s', '30s', '1m', '5m', '15m', '30m', '1h', '2h', '1d'];
	

	showDropdown: boolean = true;
	availableRanges = [];

	showFromCalendar: boolean = false;
	showToCalendar: boolean = false;
	
	form: FormGroup;

	get from() {
		return this.form.get('from');
  }

	constructor( private time: TimeStore ){
		this.form = new FormGroup({
			'from': new FormControl( null, [Validators.required, this.validateTime.bind( this )]),
			'to': new FormControl( null, [Validators.required, this.validateTime.bind( this )])
		});

		time
			.range$
			.subscribe( range =>{
				if( !range ){
					return;
				}

				const selected = DateTimeHelper.toLabel( range.raw );

				for( var i = 0; i < 4; ++i ) {
					this.availableRanges.push( 
						DateTimeHelper.getQuickRanges( selected )[ i ] );
				}

				const from = ( DateTimeHelper.isMathString( range.raw.from ) ) ?
					range.raw.from : this.time.absoluteTzDateTimeToString( range.raw.from )

				const to = ( DateTimeHelper.isMathString( range.raw.to ) ) ?
					range.raw.to : this.time.absoluteTzDateTimeToString( range.raw.to )
				
				this.form.patchValue({
					from: from,
					to: to,
				});
			});
	}

	onQuickRangeClicked( qr: RawTimeRange ){
		this.showDropdown = false;

    this.time.update( {
      from: qr.from,
      to: qr.to
    })
	}
	
	validateTime(c: FormControl) {
    return ( DateTimeHelper.isValid( c.value?.toLowerCase() ) ) ? null : { invalidTime: true };
	}
	
	@HostListener('document:keydown.escape', ['$event'])
  onEscPressed(event: KeyboardEvent) {
    this.showDropdown = false;
  }

}
