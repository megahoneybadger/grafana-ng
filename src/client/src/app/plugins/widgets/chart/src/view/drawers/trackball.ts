import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseChartExtension, BaseDrawer } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';

@Injectable()
export class TrackballDrawerPlugin extends BaseChartExtension {

	trackball: MouseEvent;
	posSubs: Subscription;

	constructor( store: ChartStore ){
		super( store );

		this.posSubs = store
			.mouse
			.hover$
			.subscribe( x => this.trackball = x );
	}

	finalize(){
		super.finalize();
		this.posSubs.unsubscribe();
  }
	
	afterDatasetsDraw(chart, _) {
		if( this.trackball ){
			new TrackballDrawer( chart, this.trackball ).draw()
		}
	}
}

class TrackballDrawer extends BaseDrawer{

	get position(){
		const rect = this.canvas.getBoundingClientRect();
		
    return {
      x: this.trackball.clientX - rect.left,
      y: this.trackball.clientY - rect.top
    };
	}

	constructor( chart: any, private trackball: MouseEvent ){
		super( chart );
	}

	draw(){
		const context = this.context;
		const pos = this.position;

		const shouldIgnore = 
			( 0 == this.chart.data.datasets.length ) ||
			( pos.x < this.scaleX.left || pos.x > this.scaleX.right );

		if( shouldIgnore ){
			return;
		}

		const lw = 0.8;
		const x = this.alignPixel( pos.x, lw )
		const y1 = this.alignPixel( this.scaleY.top, lw )
		const y2 = this.alignPixel( this.scaleY.bottom, lw )

		context.beginPath();
		context.strokeStyle = "#880015";
		context.lineWidth = lw;
		context.moveTo( x, y1 );
		context.lineTo( x, y2);
		context.stroke();
	}
}