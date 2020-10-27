import { Injectable } from '@angular/core';
import { BaseChartExtension } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';
import { Threshold, ThresholdAxis, ThresholdColor, ThresholdOperator } from '../../chart.m';
import { OptionsProvider } from '../options-provider'

@Injectable()
export class ThresholdDrawerPlugin extends BaseChartExtension {

	get thresholds(): Threshold[]{
		return this
			.widget
			?.display
			.thresholds;
	}
	
	constructor( store: ChartStore ){
		super( store );
	}

	afterDatasetsDraw(chart, easing) {
		this
			.thresholds
			.forEach( t => new ThresholdDrawer( chart, t ).draw() );
	}
}

class ThresholdDrawer{
	get context(){
		return this.chart.chart.ctx;
	}

	constructor( private chart: any, private threshold: Threshold ){
		
	}

	draw(){
		if( this.threshold.value == undefined ){
			return;
		}

		const scaleYA = this.chart.scales[ OptionsProvider.AXIS_Y_LEFT ];
		const scaleYB = this.chart.scales[ OptionsProvider.AXIS_Y_RIGHT ];
		
		const scaleX = this.chart.scales['x-axis-0'];

		const scaleY = ( this.threshold.axis == ThresholdAxis.Right && scaleYB ) ?
			scaleYB : scaleYA;

		const offset = scaleY.getPixelForValue(this.threshold.value);

		const gt = ( this.threshold.operator == ThresholdOperator.Gt );

		const shouldIgnore = 
			( !gt && this.threshold.value < scaleY.min ) ||
			( gt && this.threshold.value > scaleY.max ) ||
			( !this.chart.data.datasets.length );

		if( shouldIgnore ){
			return;
		}

		// if( offset < 0 || offset > scaleY.bottom ){
		// 	return;
		// }

		//console.log( `${offset} | ${scaleY.bottom}` )  

		if( this.threshold.line ){
			const lineColor = this.getColor( false );
			this.renderLine( scaleX, lineColor, offset );
		}

		if( this.threshold.fill ){
			this.renderRectangle( scaleX, scaleY, offset );
		}
	}

	private renderLine(scaleX, color, offset ){
		this.context.beginPath();
		this.context.strokeStyle = color + "99";
		this.context.lineWidth = 2;
		this.context.moveTo( scaleX.left, offset);
		this.context.lineTo( scaleX.right, offset);
		this.context.stroke();
	}

	private renderRectangle( scaleX, scaleY, offset ){
		const color = this.getColor( true );

		const gt = ( this.threshold.operator == ThresholdOperator.Gt );
		this.context.fillStyle = color + "22"

		const x = scaleX.left;
		const w = scaleX.width;

		const topY = scaleY.getPixelForValue(scaleY.max);
		const bottomY = scaleY.getPixelForValue(scaleY.min);

		const y = gt ? topY : Math.max( topY, offset );
		let h = gt ? offset - scaleY.top : scaleY.bottom - offset;

		h = Math.min( bottomY - topY, h )

		this.context.fillRect( x, y,	w, h );	
	}

	private getColor(fill){
		switch( this.threshold.colorType ){
			case ThresholdColor.Critical:
				return '#ED2E18';

			case ThresholdColor.Ok:
				return '#10a345';

			case ThresholdColor.Warning:
				return '#f79520';
		}

		const defaultColor = '#ffffff';

		if( fill ){
			return this.threshold.fillColor ? this.threshold.fillColor : defaultColor;
		}

		return this.threshold.lineColor ? this.threshold.lineColor : defaultColor;
	}
}