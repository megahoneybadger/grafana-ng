import { Moment } from 'common';
import { ChartComponent } from '../../chart.c';
import { AXIS_Y_LEFT, TooltipSortOrder } from '../../chart.m';
import { ColorHelper } from 'uilib';
import { AxisUnitHelper } from '../../edit/axes/y-axis/unit-helper';

declare var Chart: any;

export class TooltipBuilder {

	readonly ID = "chartjs-tooltip";
	readonly TOOLTIP_SELECTOR = "ed-tooltip";

	static build( comp: ChartComponent ){
		Chart.Tooltip.positioners.custom = (_, event) => {
			return {
				x: event.x,
				y: event.y
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
			custom: ( model ) => new TooltipBuilder( model, comp ).create()
		}
	}

	get root(){
		var tooltipEl = document.getElementById(this.ID);

		// Create element on first render
		if(!tooltipEl) {
			tooltipEl = document.createElement('div');
			tooltipEl.id = this.ID;

			tooltipEl.innerHTML = `<div class='graph-tooltip grafana-tooltip ${this.TOOLTIP_SELECTOR}'></div>`;

			document.body.appendChild(tooltipEl);
		}

		return tooltipEl;
	}

	constructor( private model, private component: ChartComponent ){

	}

	create(){
		var tooltipElement = this.root;

		// Hide if no tooltip
		if( this.model.opacity === 0 || this.component.nativeControl.showAnnotView || window.screen.width < 544 ) {
			tooltipElement.style.opacity = '0';
			return;
		}

		tooltipElement.classList.remove('above', 'below', 'no-transform');
		
		if (this.model.yAlign) {
			tooltipElement.classList.add(this.model.yAlign);
		} else {
			tooltipElement.classList.add('no-transform');
		}

		if (this.model.body) {
			this.createBody();
		}

		this.setPosition();
	}

	private setPosition(){
		var tooltipElement = this.root;
		
		const chart = this.component.control.chart;

		var position = chart
			.canvas
			.getBoundingClientRect();

		const elWidth = document
			.getElementsByClassName(this.TOOLTIP_SELECTOR)[ 0 ]
			.getBoundingClientRect()
			.width;

		const negMargin = ( this.model.caretX + elWidth > position.width ) ?
			elWidth +  2 * this.model.xPadding : 0;
		
		tooltipElement.style.opacity = '1';
		tooltipElement.style.position = 'absolute';
		tooltipElement.style.left = position.left + window.pageXOffset + this.model.caretX - negMargin + 'px';
		tooltipElement.style.top = position.top + window.pageYOffset + this.model.caretY + 'px';
		tooltipElement.style.fontFamily = this.model._bodyFontFamily;
		tooltipElement.style.padding = this.model.yPadding + 'px ' + this.model.xPadding + 'px';
		tooltipElement.style.pointerEvents = 'none';
	}

	private createBody(){
		var tooltipElement = this.root;
		var chart = this.component;
		var w = this.component.store.panel.widget;

		var titleLines = this.model.title || [];
		var innerHtml = '';

		titleLines.forEach(function(title) {
			const date = Date.parse( title );
			const time = Moment.format ( date );
			innerHtml += `<div class="graph-tooltip-time">${time}</div>`
		});

		const parsedBodyLines = this.sort();

		parsedBodyLines.forEach( (body, i) => {
			const { seriesName, value, color } = body;

			let seriesNameEl = `
				<div class="graph-tooltip-series-name">
					<i class="fa fa-minus" style="color:${color};"></i> ${seriesName}:
				</div>`

			const ds = chart
				.data
				.datasets
				.find( x => x.label == seriesName );

			const axis =   ( ds.yAxisID == AXIS_Y_LEFT ) ?	w.axes.leftY : w.axes.rightY;

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

		var tableRoot = tooltipElement.querySelector(`.${this.TOOLTIP_SELECTOR}`);
		tableRoot.innerHTML = innerHtml;
	}

	private sort() : Array<any>{
		function getBody(bodyItem) {
			return bodyItem.lines;
		}

		var bodyLines = this.model.body.map(getBody);

		const sortOrder = this
			.component
			.widget
			.display
			.tooltipSortOrder;

		const parsedBodyLines = [];
		
		bodyLines.forEach((body, i) => {
			var colors = this.model.labelColors[ i ];
			var color = ColorHelper.hexToRgbString( colors.backgroundColor);

			let index = body[ 0 ].lastIndexOf( ':' );
			const seriesName = body[ 0 ].substring( 0, index );
			const value = parseFloat(this.model.dataPoints[ i ].value);
			parsedBodyLines.push( {seriesName, value, color} );
		});

		switch( sortOrder ){
			case TooltipSortOrder.Increasing:
				parsedBodyLines.sort( (a, b) => a.value - b.value);
				break;

			case TooltipSortOrder.Decreasing:
				parsedBodyLines.sort( (a, b) => b.value - a.value);
				break;
		}


		const res = parsedBodyLines.filter( x => {
			return !this
				.component
				.display
				.getOverrideByLabel( x.seriesName )
				?.hideInTooltip;
		} )

		return res;
	}
}


