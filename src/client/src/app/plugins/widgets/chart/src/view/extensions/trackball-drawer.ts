import { Inject, Injectable } from '@angular/core';
import { ChartStore } from '../../base/chart.store';
import { PixelHelper } from '../render/pixel-helper';


@Injectable()
export class TrackballDrawerPlugin {

	constructor( private store: ChartStore ){

	}

	afterDatasetsDraw(chart, easing) {
		//console.log( "trackball plugin" )
		return;
		
		const context = chart.chart.ctx;

		const scaleX = chart.scales['x-axis-0'];
		
		//const scaleYA = chart.scales[ "A" ];
		const scaleYA = chart.scales[ "y-axis-0" ];

		var pos = this.getMousePos( chart.canvas, chart.trackball );

		console.log( pos );

		const shouldIgnore = 
			( !chart.trackball ) ||
			( 0 == chart.data.datasets.length ) ||
			( pos.x < scaleX.left || pos.x > scaleX.right );

		if( shouldIgnore ){
			return;
		}

		const lw = 0.8;
		const x = PixelHelper.alignPixel( chart, pos.x, lw )
		const y1 = PixelHelper.alignPixel( chart, scaleYA.top, lw )
		const y2 = PixelHelper.alignPixel( chart, scaleYA.bottom, lw )

		context.beginPath();
		context.strokeStyle = "#880015";
		context.lineWidth = lw;
		context.moveTo( x, y1 );
		context.lineTo( x, y2);
		context.stroke();
	}

	getMousePos(canvas, evt) {
		if( !evt ){
			return;
		}

    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
	}

}