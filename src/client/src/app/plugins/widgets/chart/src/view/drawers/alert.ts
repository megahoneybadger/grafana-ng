import { Injectable } from '@angular/core';
import { AlertEvalType, AlertEvaluator } from 'common';
import { ColorHelper } from 'uilib';
import { BaseChartExtension } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';
import { AXIS_X, AXIS_Y_LEFT } from '../../chart.m';

@Injectable()
export class AlertDrawerPlugin extends BaseChartExtension {

	constructor( store: ChartStore ){
		super( store );
	}

	afterDatasetsDraw(chart, _) {
		const conditions = this
			.widget
			?.alert
			?.conditions;

		if( conditions?.length ){
			new AlertDrawer( chart, conditions[ 0 ].evaluator ).draw()
		}
	}
}

class AlertDrawer{

	static readonly LINE_COLOR = ColorHelper.hexToRgbString( 
		ColorHelper.ALERTING_COLOR, 0.6 )

	static readonly FILL_COLOR = ColorHelper.hexToRgbString( 
		ColorHelper.ALERTING_COLOR, ColorHelper.REGION_FILL_ALPHA )

	get context(){
		return this.chart.chart.ctx;
	}

	get scaleY(){
		return this.chart.scales[ AXIS_Y_LEFT ];
	}

	get scaleX(){
		return this.chart.scales[ AXIS_X ];
	}

	constructor( private chart: any, private evaluator: AlertEvaluator ){
		
	}

	draw(){
		const offset1 = this.scaleY.getPixelForValue(+this.evaluator.params[ 0 ]);
		const offset2 = this.scaleY.getPixelForValue(+this.evaluator.params[ 1 ]);

		const topY = this.scaleY.getPixelForValue(this.scaleY.max);
		const bottomY = this.scaleY.getPixelForValue(this.scaleY.min);

		switch( +this.evaluator.type ){
			case AlertEvalType.IsAbove:
				if( !( topY > offset1 || bottomY < offset1 ) ){
					this.renderLine( offset1 );
					this.renderRectangle( offset1, true );
				}
				break;

			case AlertEvalType.IsBelow:
				if( !( topY > offset1 || bottomY < offset1 ) ){
					this.renderLine( offset1 );
					this.renderRectangle( offset1, false );
				}
				break;

			case AlertEvalType.IsWithinRange:
				if( !( topY > offset1 || bottomY < offset1 || topY > offset2 || bottomY < offset2 ) ){
					this.renderLine( offset1 );
					this.renderLine( offset2 );
					this.renderRectangleBetween( offset1, offset2 );
				}
				break;

				case AlertEvalType.IsOutsideRange:
					if( !( topY > offset1 || bottomY < offset1 || topY > offset2 || bottomY < offset2 ) ){
						this.renderLine( offset1 );
						this.renderLine( offset2 );
						this.renderRectangle( offset1, false );
						this.renderRectangle( offset2, true );
					}
					break;
		}
	}

	private renderLine( offset: number ){
		this.context.beginPath();
			this.context.strokeStyle = AlertDrawer.LINE_COLOR;
		
		this.context.lineWidth = 2;
		this.context.moveTo( this.scaleX.left, offset);
		this.context.lineTo( this.scaleX.right, offset);
		this.context.stroke();
	}

	private renderRectangle( offset: number, gt: boolean ){
		this.context.fillStyle = AlertDrawer.FILL_COLOR 

		const x = this.scaleX.left;
		const w = this.scaleX.width;

		const topY = this.scaleY.getPixelForValue(this.scaleY.max);
		const bottomY = this.scaleY.getPixelForValue(this.scaleY.min);

		const y = gt ? topY : Math.max( topY, offset );
		let h = gt ? offset - this.scaleY.top : this.scaleY.bottom - offset;

		h = Math.min( bottomY - topY, h )

		this.context.fillRect( x, y, w, h );	
	}

	private renderRectangleBetween( offset1, offset2 ){
		this.context.fillStyle = AlertDrawer.FILL_COLOR;

		const x = this.scaleX.left;
		const w = this.scaleX.width;

		this.context.fillRect( x, offset1,	w, offset2 - offset1 );	
	}
}