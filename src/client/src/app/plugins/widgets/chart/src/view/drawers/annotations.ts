import { Injectable } from '@angular/core';
import { AlertState, Annotation, Dashboard, Moment } from 'common';
import { ColorHelper } from 'uilib';
import { ChartJsExtension, BaseDrawer } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';
import { Chart } from '../../chart.m';

@Injectable()
export class AnnotationDrawerPlugin extends ChartJsExtension {
	
	constructor( store: ChartStore ){
		super( store );

	}

	afterDatasetsDraw(chart, _) {
		if( !chart.data.datasets?.length ){
			return;
		}

		this
			.panel
			.annotations
			.forEach( a => new AnnotationDrawer( chart, this.widget, this.dashboard, a ).draw() );
	}
}

class AnnotationDrawer extends BaseDrawer {

	constructor( 
		chart: any,
		private widget: Chart,
		private dashboard: Dashboard,
		private annotation: Annotation ){
			super( chart )
	}

	draw(){
		if( this.annotation.alert && !this.widget.alert ){
			return;
		}

		if( !this.annotation.timeEnd ){
			this.renderLineAnnotation();
		} else {
			this.renderRegionAnnotation();
		}
	}

	private get color(){
		if( this.annotation.alert ){
			const alert = this.annotation.alert;
			const state = AlertState[alert.currentState];

			switch( state ){
				case AlertState.Alerting:
					return ColorHelper.ALERTING_COLOR; 

				case AlertState.Ok:
					return ColorHelper.OK_COLOR; 

				case AlertState.Pending:
				case AlertState.NoData:
					return ColorHelper.PENDING_COLOR; 
			}
		}

		return this
			.dashboard
			.data
			?.annotationRules[ this.annotation.ruleIndex ]
			?.color ?? ColorHelper.DEFAULT_ANNOTATION_COLOR;;
	}

	renderLineAnnotation( ){
		var time = Moment.toDate(this.annotation.time);
		let offset = this.scaleX.getPixelForValue( time );

		if(! ( offset < this.scaleX.left || offset > this.scaleX.right ) ){
			this.renderLine( offset, this.color /*?? AnnotationsDrawerPlugin.COLOR*/ )
		}
	}

	renderLine( offset: number, color ){
		const lw = 0.8;
		const context = this.context;

		const x = this.alignPixel( offset, lw );
		const y1 = this.alignPixel( this.minY, lw );
		const y2 = this.alignPixel( this.maxY, lw );

		context.beginPath();
		context.strokeStyle = context.fillStyle = color;
		context.lineWidth = lw;
		context.setLineDash([3, 2]);
		context.moveTo( x, y1 );
		context.lineTo( x, y2 );
		context.stroke();

		context.beginPath();

		context.moveTo( x, y2 );
		context.lineTo( x + 5, y2 + 5 );
		context.lineTo( x - 5, y2 + 5 );
		context.lineTo( x, y2 );
		
		context.closePath();
		context.setLineDash([]);
		context.fill();

		this.annotation.rect = {
			x1: offset - 5,
			y1: this.maxY,
			x2: offset + 5,
			y2: this.maxY + 5
		}
	}

	renderRegionAnnotation(){
		var timeStart = Moment.toDate( this.annotation.time );
		var timeEnd = Moment.toDate( this.annotation.timeEnd );

		let os = this.scaleX.getPixelForValue( timeStart );
		let oe = this.scaleX.getPixelForValue( timeEnd );

		if( oe < this.scaleX.left || os > this.scaleX.right ){
			return;
		}

		os = Math.max( os, this.scaleX.left );
		oe = Math.max( this.scaleX.left,	Math.min( oe, this.scaleX.right ));

		this.renderRegion( os, oe, this.color /*?? AnnotationsDrawerPlugin.COLOR*/ )
	}

	renderRegion( os: number, oe: number, color ){
		const lw = 0.8;
		const x1 = this.alignPixel( os, lw );
		const x2 = this.alignPixel( oe, lw );
		const y1 = this.alignPixel( this.minY, lw );
		const y2 = this.alignPixel( this.maxY, lw );

		const context = this.context;

		context.strokeStyle = color;
		context.fillStyle = "#00d3ff" + '20'
		context.lineWidth = lw;
		context.setLineDash([3, 2]);

		context.beginPath();

		context.moveTo( x1, y1 );
		context.lineTo( x1, y2 );
		context.stroke();
		
		context.moveTo( x2, y1 );
		context.lineTo( x2, y2 );
		context.stroke();

		context.fillRect( x1, y1,	x2 - x1, y2 - y1 );	

		context.fillStyle = color ;
		context.fillRect( x1, y2,	x2 - x1, 5 );	
		context.setLineDash([]);
		context.closePath();

		this.annotation.rect = {
			x1: Math.min( os, oe ),
			y1: this.maxY,
			x2: Math.max( oe, os ),
			y2: this.maxY + 5
		}
	}
}