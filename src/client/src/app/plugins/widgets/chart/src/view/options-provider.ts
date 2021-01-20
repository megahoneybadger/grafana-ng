import { ChartComponent } from '../chart.c';
import { AXIS_X, AXIS_Y_LEFT, AXIS_Y_RIGHT, Chart as ChartModel, ScaleType } from '../chart.m';
import { TooltipBuilder } from './drawers/tooltip';
import { AxisUnitHelper } from '../edit/axes/y-axis/unit-helper';
import { Moment, TimeRangeParser, TimeRangeStore } from 'common';

declare var Chart: any;

export class OptionsProvider{

	static getOptions( comp: ChartComponent ){
		Chart.defaults.global.defaultFontColor = '#e3e3e3';
		Chart.defaults.global.defaultFontFamily = 'Roboto';
		Chart.defaults.global.defaultFontSize = 11;

		const w = comp.widget;

		return {
			maintainAspectRatio: false,
			animation: {
				duration: 0, // general animation time
			},
			hover: {
					animationDuration: 0, // duration of animations when hovering an item
			},
			responsiveAnimationDuration: 0, // animation duration after a resize
			elements: {
					line: {
							tension: 0, // disables bezier curves
					}
			},

			tooltips: TooltipBuilder.build( comp ),

			legend: {
				display: false
			},
	
			spanGaps: true,

			scales: {
				xAxes: [ this.getAxisX( w, comp.store.time )],
				yAxes: [ this.getAxisY( w, true ), this.getAxisY( w, false )] 
			},

			onHover: ( e ) => comp.store.mouse.move( e )
		};
	}

	private static getAxisX( w: ChartModel, time: TimeRangeStore ){
		return {
			id: AXIS_X,
			type: 'time',
			gridLines: {
				color: 'rgba( 255,255,255, 0.1)',
			},
			ticks: {
				autoSkip: true,
				autoSkipPadding: 50,
				maxRotation: 0,
				minRotation: 0,
			},
			time: {
				displayFormats: {
					second: 'HH:mm:ss',
					minute: 'HH:mm',
					hour: 'HH:mm',
					day: 'M/D HH:mm',
					week: 'M/D',
					month: 'M/D',
					year: 'YYYY-M',
				},
				// https://github.com/chartjs/Chart.js/issues/4334
				//parser: ( m ) => time.converter.toDateTimeString(m)
			},
			display: w.axes.x.show
		}
	}

	private static getAxisY(w: ChartModel, left: boolean){
		const wAxis = left ? w.axes.leftY : w.axes.rightY;
		const id = left ? AXIS_Y_LEFT : AXIS_Y_RIGHT;

		const axis = {
			id: id,
			display: wAxis.show,
			type: ( !wAxis.scale || wAxis.scale == ScaleType.Linear ) ? "linear" : "logarithmic",
			gridLines: {
				color: 'rgba( 255,255,255, 0.1)',
				zeroLineWidth: 3,
			},
			position: left ? "left" : "right",
			scaleLabel:{
				display: wAxis.label,
				labelString: wAxis.label,
			},
			ticks:{
				min: wAxis.min,
				max: wAxis.max,
				userCallback: (label, index, labels) => {
					if( labels.length > 8 && !( index % 2 ) ){
						return;
					}
					
					return AxisUnitHelper.getFormattedValue( label, wAxis.unit, wAxis.decimals );
				}
			},
			stacked: w.display.stack,
		}

		return axis;
	}
}
