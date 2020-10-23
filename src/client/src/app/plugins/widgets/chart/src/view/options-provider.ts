import { ChartComponent } from '../chart.c';
import { TooltipBuilder } from './extensions/tooltip-builder';

declare var Chart: any;

export class OptionsProvider{
	

	static getOptions( comp: ChartComponent ){
		Chart.defaults.global.defaultFontColor = '#e3e3e3';
		Chart.defaults.global.defaultFontFamily = 'Roboto';
		Chart.defaults.global.defaultFontSize = 11;

		const axisYa = {
			id: 'A',
			gridLines: {
				color: 'rgba( 255,255,255, 0.1)',
				zeroLineWidth: 3,
			},
		}

		const axisYb = {
			id: 'B',
			position: 'right'
		}

		return {
			maintainAspectRatio: false,
			animation: false,

			tooltips: TooltipBuilder.build( comp ),

			legend: {
				display: false
			},
	
			spanGaps: true,

			scales: {
				xAxes: [{
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

						 //stepSize: 30
					},
				

				
				}],
				yAxes: /*!AxesManager.needSecondaryYAxis(widget)*/true ? [axisYa] : [axisYa, axisYb]
				
			},
		};
	}
}