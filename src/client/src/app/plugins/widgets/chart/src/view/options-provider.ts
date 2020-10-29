import { ChartComponent } from '../chart.c';
import { AXIS_X, AXIS_Y_LEFT, AXIS_Y_RIGHT, Chart, ScaleType } from '../chart.m';
import { TooltipBuilder } from './drawers/tooltip';
import { AxisUnitHelper } from './helpers/unit-helper';

declare var Chart: any;

export class OptionsProvider{

	static getOptions( comp: ChartComponent ){
		Chart.defaults.global.defaultFontColor = '#e3e3e3';
		Chart.defaults.global.defaultFontFamily = 'Roboto';
		Chart.defaults.global.defaultFontSize = 11;

		const w = comp.widget;

		return {
			maintainAspectRatio: false,
			animation: false,

			tooltips: TooltipBuilder.build( comp ),

			legend: {
				display: false
			},
	
			spanGaps: true,

			scales: {
				xAxes: [this.getAxisX( w )],
				yAxes: [ this.getAxisY( w, true ), this.getAxisY( w, false )] 
				/*!AxesManager.needSecondaryYAxis(widget) true ? [axisYa] : [axisYa, axisYb]				*/
			},
		};
	}

	private static getAxisX( w: Chart ){
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
			},
			display: w.axes.x.show
		}
	}

	private static getAxisY(w: Chart, left: boolean){
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
