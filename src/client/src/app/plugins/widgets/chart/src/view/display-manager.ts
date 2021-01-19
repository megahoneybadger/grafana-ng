import { Inject, Injectable } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { AXIS_Y_LEFT, AXIS_Y_RIGHT, DataPointNullValueOption, DataSet } from '../chart.m';
import { ColorHelper } from 'uilib';

@Injectable()
export class DisplayManager {

	private get display() {
		return this
			.panel
			.widget
			.display;
	}

	private get options(){
		return this
			.panel
			.widget
			.component
			.control
			.chart
			.options;
	}

	private get datasets(){
		return this
		.panel
		.widget
		?.component
		?.datasets;
	}

	constructor ( @Inject( PANEL_TOKEN ) private panel: Panel ) {

	}

	setup(ds: DataSet) {
		this.setupLines( ds );
		this.setupPoints( ds );
		this.setupNullValue( ds );
	}

	private setupLines( ds: DataSet ) {
		const showLines = this.getShowLines( ds );
		const lineWidth = this.getLineWidth( ds );
		const fill = this.getFill( ds );

		let opacity = ( fill / 10);
		ds.fill = (/*showLines &&*/ fill > 0);
		ds.backgroundColor = this.getLineColor( ds, opacity );

		opacity = (showLines && lineWidth) ? 1 : 0;
		ds.borderColor = this.getLineColor( ds, opacity );
		ds.borderWidth = lineWidth;

		 ds.steppedLine = this.getStaircase( ds );

		if( this.getDashes( ds ) ){
			const len = this.getDashLength( ds );
			const space = this.getDashSpace( ds );
			ds.borderDash = [ len, space ]
		}
		else{
			ds.borderDash = undefined;
		}

		ds.order = this.getZIndex( ds );
		ds.legend = this.getLegend( ds );

		ds.yAxisID = ( 1 == this.getYAxis( ds ) ) ?	AXIS_Y_LEFT: AXIS_Y_RIGHT;

		const existing = this
			.datasets
			?.find( x => x.label == ds.label );

		if( existing ){
			ds.hidden = existing.hidden;
		}
	}

	private setupPoints( ds: DataSet ) {
		const showPoints = this.getShowPoints( ds );

		const opacity = showPoints ? 1 : 0
		const color = this.getLineColor( ds, opacity );

		ds.pointBorderColor = `${color}`;
		ds.pointBackgroundColor = `${color}`;

		ds.pointRadius = showPoints ? this.getPointRadius( ds ) : 0;
	}

	private setupNullValue( ds: DataSet ) {
		switch ( this.display.nullValue) {
			case DataPointNullValueOption.Connected:
				this.options.spanGaps = true;
				ds.data.forEach( p => p.y = p.isNull ? null : p.y );
				break;

			case DataPointNullValueOption.Null:
				this.options.spanGaps = false;
				ds.data.forEach( p => p.y = p.isNull ? null : p.y );
				break;

			case DataPointNullValueOption.NullAsZero:
				this.options.spanGaps = false;
				ds.data.forEach( p => p.y = p.isNull ? 0 : p.y );
				break;
		}
	}

	getShowLines(ds: DataSet): boolean{
		const o = this.getOverride( ds );

		return ( o && undefined != o.lines ) ? o.lines : this.display.showLines;
	}
	
	getLineWidth(ds: DataSet): number{
		const o = this.getOverride( ds );

		return ( o && undefined != o.lineWidth ) ? o.lineWidth : this.display.lineWidth;
	}

	getLineColor(ds: DataSet, opacity: number) : string{
		const o = this.getOverride( ds );

		const color = ColorHelper.colors[ds.index % ColorHelper.colors.length];
		const defaultColor = ColorHelper.hexToRgbString( color, opacity );

		const useOverride = ( o && undefined != o.color )
		let overrideColor: string;

		if( useOverride ){
			overrideColor = ColorHelper.hexToRgbString( o.color, opacity );
		}

		return ( useOverride ) ? overrideColor : defaultColor;
	}

	getFill( ds: DataSet ): number{
		const o = this.getOverride( ds );

		return ( o && undefined != o.lineFill ) ? o.lineFill : this.display.fill;
	}

	getStaircase( ds: DataSet ): boolean{
		const o = this.getOverride( ds );

		return ( o && undefined != o.staircase ) ? o.staircase : this.display.staircase;
	}

	getDashes( ds: DataSet ){
		const o = this.getOverride( ds );

		return ( o && undefined != o.dashes ) ? o.dashes : false;
	}

	getDashLength( ds: DataSet ): number{
		const o = this.getOverride( ds );

		return ( o && undefined != o.dashLength ) ? o.dashLength : 1;
	}

	getDashSpace( ds: DataSet ): number{
		const o = this.getOverride( ds );

		return ( o && undefined != o.dashSpace ) ? o.dashSpace : 1;
	}

	getShowPoints( ds: DataSet ) : boolean {
		const o = this.getOverride( ds );

		return ( o && undefined != o.points ) ? o.points : this.display.showPoints;
	}

	getPointRadius( ds: DataSet ) : number{
		const o = this.getOverride( ds );

		return ( o && undefined != o.pointRadius ) ? o.pointRadius : this.display.pointRadius;
	}

	getLegend( ds: DataSet ) : boolean{
		const o = this.getOverride( ds );

		return ( o && undefined != o.legend ) ? o.legend : true;
	}

	getZIndex( ds: DataSet ): number{
		const o = this.getOverride( ds );

		return ( o && undefined != o.zIndex ) ? o.zIndex : 0;
	}

	getYAxis( ds: DataSet ){
		const o = this.getOverride( ds );

		return ( o && undefined != o.yAxis ) ? o.yAxis : 1;
	}

	getOverride( ds: DataSet ){
		return this.getOverrideByLabel( ds.label );
	}

	getOverrideByLabel( label: string ){
		return this
			.display
			.overrides
			?.find( x => x.alias && new RegExp( x.alias ).test( label )  )
	}
}












