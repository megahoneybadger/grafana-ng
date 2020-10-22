import { Inject, Injectable } from '@angular/core';
import { Panel } from 'common';
import { DataSet, PANEL_TOKEN } from '../../chart.m';
import { ColorHelper } from './color-helper';

@Injectable()
export class DisplayManager {

	private get display() {
		return this.panel.widget.display;
	}

	constructor ( @Inject( PANEL_TOKEN ) private panel: Panel ) {

	}

	setup(ds: DataSet) {
		//this.setupSecondaryYAxis();					

		this.setupLines( ds );
		this.setupPoints( ds );
		this.setupNullValue( ds );

		//this.chart.options.scales.yAxes[ 0 ].stacked = this.chart.widget.display.stack;
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

		// ds.yAxisID = ( 1 == this.getYAxis( ds ) ) ? 'A': 'B';
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
		switch (parseInt( this.display.nullValue )) {
			// case CartesianChart.NullValue.Connected:
			// 	this.chart.options.spanGaps = true;
			// 	ds.data.forEach( p => p.y = p.isNull ? null : p.y );
			// 	break;

			// case CartesianChart.NullValue.Null:
			// 	this.chart.options.spanGaps = false;
			// 	ds.data.forEach( p => p.y = p.isNull ? null : p.y );
			// 	break;

			// case CartesianChart.NullValue.NullAsZero:
			// 	this.chart.options.spanGaps = false;
			// 	ds.data.forEach( p => p.y = p.isNull ? 0 : p.y );
			// 	break;
		}
	}

	private setupOverrides(){
		// const needSecondaryYAxis = AxesManager.needSecondaryYAxis( this.chart.widget );

		// const actualSecondaryYAxisUsers = this
		// 	.datasets
		// 	.filter( x => x.yAxisID == 'B' )
		// 	.length
 
		// const yAxesCount = this.chart.options.scales.yAxes.length;
		
		// if( 2 == yAxesCount && !needSecondaryYAxis ){
		// 	this.chart.options.scales.yAxes.splice( 1, 1 );
		// } else if( /*1 == yAxesCount && needSecondaryYAxis*/ actualSecondaryYAxisUsers != needSecondaryYAxis ){
		// 	this.chart.destroy();
		// 	this.chart.needRebuild.emit();
		// 	this.chart = undefined;
		// 	return;
		// }

		// this.datasets.forEach(x => this.setup(x));
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

		const defaultColor = ColorHelper.getColorAsArgbFunc(ds, opacity)

		const useOverride = ( o && undefined != o.color )
		let overrideColor: string;

		if( useOverride ){
			var color = ColorHelper.parse( o.color );
			overrideColor = `rgba(${color.r},${color.g},${color.b},${opacity})`
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
		return this
			.display
			.overrides
			.find( x => x.alias && new RegExp( x.alias ).test( ds.label )  )
	}

}












