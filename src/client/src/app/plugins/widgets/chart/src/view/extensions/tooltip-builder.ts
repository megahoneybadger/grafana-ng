import { Moment } from 'common';
import { ChartComponent } from '../../chart.c';
import { AxisUnitHelper } from '../axes/unit-helper';
import { ColorHelper } from '../render/color-helper';

declare var Chart: any;
declare var $: any;

export class TooltipBuilder {

	static readonly ID = "chartjs-tooltip";
	static readonly TOOLTIP_SELECTOR = "ed-tooltip";
	

	static build( comp: ChartComponent ){
		Chart.Tooltip.positioners.custom = function (elements, eventPosition) {
			/** @type {Chart.Tooltip} */
			var tooltip = this;

			return {
				x: eventPosition.x,
				y: eventPosition.y
			};
		};

		return {
			mode: 'index',
			position: "custom",
			axis: 'x',
			intersect: false,
			caretSize: 0,
			xPadding: 10,
			bodySpacing: 5,
			titleAlign: 'right',
			enabled: false,
			custom: ( model ) => TooltipBuilder.create(model, comp)
		}
	}

	private static create( tooltipModel, comp: ChartComponent ){
		
		var tooltipEl = TooltipBuilder.getRootElement();
		
		// Hide if no tooltip
		if( tooltipModel.opacity === 0 /*|| chart.showAnnotView*/ ) {
			tooltipEl.style.opacity = '0';
			return;
		}

		tooltipEl.classList.remove('above', 'below', 'no-transform');
		
		if (tooltipModel.yAlign) {
				tooltipEl.classList.add(tooltipModel.yAlign);
		} else {
				tooltipEl.classList.add('no-transform');
		}

		

		if (tooltipModel.body) {
			TooltipBuilder.createBody( tooltipModel, comp, tooltipEl );
		}

		

		TooltipBuilder.setPosition(tooltipModel, comp, tooltipEl );

		
	}

	private static setPosition(tooltipModel, comp: ChartComponent, tooltipEl){
		
		const chart = comp.control.chart;

		var position = chart
			.canvas
			.getBoundingClientRect();

		const elWidth = document
			.getElementsByClassName(TooltipBuilder.TOOLTIP_SELECTOR)[ 0 ]
			.getBoundingClientRect()
			.width;

		const negMargin = ( tooltipModel.caretX + elWidth > position.width ) ?
			elWidth +  2 * tooltipModel.xPadding : 0;
		
		tooltipEl.style.opacity = '1';
		tooltipEl.style.position = 'absolute';
		tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - negMargin + 'px';
		tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
		tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
		tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
		tooltipEl.style.pointerEvents = 'none';
	}

	private static createBody( tooltipModel, comp: ChartComponent, tooltipEl ){
		const chart = comp.control.chart;

		var titleLines = tooltipModel.title || [];
		var innerHtml = '';

		titleLines.forEach(function(title) {
			const date = Date.parse( title );
			const time = Moment.format ( date );
			innerHtml += `<div class="graph-tooltip-time">${time}</div>`
		});

		const parsedBodyLines = TooltipBuilder.sort( tooltipModel, chart );

		parsedBodyLines.forEach(function(body, i) {
			const { seriesName, value, colorFunc } = body;

			let seriesNameEl = `
				<div class="graph-tooltip-series-name">
					<i class="fa fa-minus" style="color:${colorFunc};"></i> ${seriesName}:
				</div>`

			const w = comp.store.panel.widget;

			const ds = chart
				.data
				.datasets
				.find( x => x.label == seriesName );

			const axis =  ( ds.yAxisID == 'A' ) ?	w.axes.leftY : w.axes.rightY;

			const decimals = w.legend.decimals ? w.legend.decimals : 1;

			const resValue = AxisUnitHelper.getFormattedValue( value, axis.unit, decimals )

			let valueEl = `<div class="graph-tooltip-value ">${resValue}</div>`;

			let item = `
				<div class="graph-tooltip-list-item">
					${seriesNameEl}
					${valueEl}
				</div>`

			innerHtml += item;
		});

		var tableRoot = tooltipEl.querySelector(`.${TooltipBuilder.TOOLTIP_SELECTOR}`);
		tableRoot.innerHTML = innerHtml;
	}

	private static sort( tooltipModel, chart ) : Array<any>{
		function getBody(bodyItem) {
			return bodyItem.lines;
		}

		var bodyLines = tooltipModel.body.map(getBody);

		// const sortOrder = +chart
		// 	.widget
		// 	.display
		// 	.tooltipSortOrder;

		const parsedBodyLines = [];
		
		bodyLines.forEach(function(body, i) {
			var colors = tooltipModel.labelColors[ i ];
			var color = ColorHelper.parse( colors.backgroundColor);
			var colorFunc = `rgba(${color.r},${color.g},${color.b},1)`

			let index = body[ 0 ].lastIndexOf( ':' );
			const seriesName = body[ 0 ].substring( 0, index );
			const value = parseFloat(tooltipModel.dataPoints[ i ].value);
			parsedBodyLines.push( {seriesName, value, colorFunc} );
		});

		// switch( sortOrder ){
		// 	// case CartesianChart.TooltipSortOrder.Increasing:
		// 	// 	parsedBodyLines.sort( (a, b) => a.value - b.value);
		// 	// 	break;

		// 	// case CartesianChart.TooltipSortOrder.Decreasing:
		// 	// 	parsedBodyLines.sort( (a, b) => b.value - a.value);
		// 	// 	break;
		// }

		return parsedBodyLines;
	}

	private static getRootElement(){
		var tooltipEl = document.getElementById(TooltipBuilder.ID);

			// Create element on first render
		if(!tooltipEl) {
			tooltipEl = document.createElement('div');
			tooltipEl.id = TooltipBuilder.ID;

			tooltipEl.innerHTML = `<div class='graph-tooltip grafana-tooltip ${TooltipBuilder.TOOLTIP_SELECTOR}'></div>`;

			document.body.appendChild(tooltipEl);
		}

		return tooltipEl;
	}
}


