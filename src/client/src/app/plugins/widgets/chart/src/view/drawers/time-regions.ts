import { Injectable } from '@angular/core';
import { Moment } from 'common';
import { BaseDrawer, ChartJsExtension } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';
import { AXIS_X, AXIS_Y_LEFT, TimeRegion, TimeRegionColor, TimeRegionDay } from '../../chart.m';

@Injectable()
export class TimeRegionsDrawerPlugin extends ChartJsExtension {
	
	constructor( store: ChartStore ){
		super( store );
	}

	afterDatasetsDraw(chart, _) {
		this
			.widget
			?.display
			?.timeRegions
			?.forEach( t => new TimeRegionDrawer( chart, t ).draw() );
	}
}

class TimeRegionDrawer extends BaseDrawer{

	constructor( chart: any, private timeRegion: TimeRegion ){
		super( chart );		
	}
	
	draw(){
		const shouldIgnore = ( 0 == this.chart.data.datasets.length );
		
		if( shouldIgnore ){
			return;
		}

		const scaleX = this.chart.scales[ AXIS_X ];

		const minX = Moment.create( scaleX.min );
		const maxX = Moment.create ( scaleX.max );

		this
			.getSpans( minX, maxX )
			.forEach( x => {
				let os = scaleX.getPixelForValue(x.start.toDate());
				let oe = scaleX.getPixelForValue(x.end.toDate());

				if(! ( oe <  scaleX.left || os > scaleX.right ) ){
					os = Math.max( os, scaleX.left );
					oe = Math.min( oe, scaleX.right );

					this.renderRegion( os, oe );
				}
			} )
	}

	private getSpans( min, max ){
		const borders = this.getSpanBorders( min, max );
		const time = this.getTime();

		return this.isSpecificDayOfWeek() ? 
			this.getSpansDayOfWeek( borders, time ) : 
			this.getSpansAny( borders, time )
	}

	private getTime(){
		const isSpecificDayOfWeek = this.isSpecificDayOfWeek();

		let inputFromTime = this.timeRegion.fromTime;
		let inputToTime = this.timeRegion.toTime;

		const timeFormat = "HH:mm";

		let tf = Moment.create(inputFromTime, timeFormat);
		let tt = Moment.create(inputToTime, timeFormat);

		if( !tf.isValid() && !tt.isValid() ){
			if( isSpecificDayOfWeek ){
				const midnight = Moment.create( "00:00", timeFormat );
				tf = midnight.clone();
				tt = midnight.clone();
			}
		} else if( tf.isValid() && !tt.isValid() ){
			tt = tf.clone();
		} else if( !tf.isValid() && tt.isValid() ){
			tf = tt.clone();
		}

		return {
			from: ( tf.isValid() ) ? tf.toDate() : undefined,
			to: ( tt.isValid() ) ? tt.toDate() : undefined
		}
	}
	private getSpansDayOfWeek( borders, time ){
		const max = borders.to;
		const min = borders.from;

		var current = min.clone();
		var res = [];

		var fromDayName = this.timeRegion.fromDay;//TimeRegionDay[  ]
		var toDayName = this.timeRegion.toDay;//TimeRegionDay[  ];
		
		while( current < max ){
			var start = current.clone().day( fromDayName );
			var end = start.clone().day( toDayName );
	
			if( end.isBefore( start ) ){
				end.add( 1, 'weeks' )
			}

			start.set({
				'hour' : time.from.getHours(),
				'minute'  : time.from.getMinutes()
			 });

			end.set({
				'hour' : time.to.getHours(),
				'minute'  : time.to.getMinutes()
			 });

			res.push( { start, end } )
	
			current.add( 1, 'weeks' );
		}

		return res;
	}

	private getSpansAny( borders, time ){
		const max = borders.to;
		const min = borders.from;

		var current = min.clone();
		var res = [];

		if( !time.from && !time.to ){
			return res;
		}

		while( current < max ){
			var start = current.clone().set({
				'hour' : time.from.getHours(),
				'minute'  : time.from.getMinutes()
			 });
	
			var end = current.clone().set({
				'hour' : time.to.getHours(),
				'minute'  : time.to.getMinutes()
			 });

			if( end.isBefore( start ) ){
				end.add( 1, 'days' );
			}

			res.push( { start, end } )
	
			current.add( 1, 'days' );
		}

		return res;
	}

	private getSpanBorders( min, max ){
		const margin = this.isSpecificDayOfWeek() ? 8 : 1;

		const from = min
			.clone()
			.subtract( margin, 'days' )
			.startOf( 'day' );

		const to = max
			.clone()
			.add( margin, 'days' )
			.endOf( 'day' );

		return { from, to }
	}

	private isSpecificDayOfWeek(){
		return ( this.timeRegion.fromDay != TimeRegionDay.Any ) ||
			( this.timeRegion.toDay != TimeRegionDay.Any );
	}

	private renderRegion( offsetStart, offsetEnd){

		const scaleYA = this.chart.scales[ AXIS_Y_LEFT ];
		const scaleX = this.chart.scales[ AXIS_X ];

		const minY = scaleYA.top;
		const maxY = scaleYA.bottom;

		if( this.timeRegion.line ){
			if( scaleX.left != offsetStart ){
				this.renderLine( minY, maxY, offsetStart );
			}
			
			if( scaleX.right != offsetEnd && offsetEnd != offsetStart){
				this.renderLine( minY, maxY, offsetEnd );
			}
		}

		if( this.timeRegion.fill && offsetEnd != offsetStart  ){
			this.renderRectangle( minY, maxY, offsetStart, offsetEnd );
		}
	}

	private renderLine( minY, maxY, offset ){
		const color = this.getColor( false );

		this.context.beginPath();
		this.context.strokeStyle = color + "99";
		this.context.lineWidth = 2;
		this.context.moveTo( offset, minY );
		this.context.lineTo( offset, maxY );
		this.context.stroke();
	}

	private renderRectangle( minY, maxY, offsetStart, offsetEnd  ){
		const color = this.getColor( true );
		
		this.context.fillStyle = color + "22"

		const x = offsetStart;
		const w = offsetEnd - offsetStart;

		const y = minY;
		const h = maxY - minY;

		this.context.fillRect( x, y,	w, h );	
	}

	private getColor( fill){
		switch( this.timeRegion.colorType ){
			case TimeRegionColor.Red:
				return '#ED2E18';

			case TimeRegionColor.Green:
				return '#10a345';

			case TimeRegionColor.Blue:
				return '#1f78c1';

			case TimeRegionColor.Yellow:
				return '#f79520';

			case TimeRegionColor.Gray:
				return '#fce2de';
		}

		const defaultColor = '#ffffff';

		if( fill ){
			return this.timeRegion.fillColor ? this.timeRegion.fillColor : defaultColor;
		}

		return this.timeRegion.lineColor ? this.timeRegion.lineColor : defaultColor;
	}


}
