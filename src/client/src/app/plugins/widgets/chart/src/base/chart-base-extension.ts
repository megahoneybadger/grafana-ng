import { Directive } from '@angular/core';
import { Subscription } from 'rxjs';
import { AXIS_X, AXIS_Y_LEFT, Chart } from '../chart.m';
import { ChartStore } from './chart.store';

@Directive() 
export class BaseChartExtension {

  widgetSubs: Subscription;
  widget: Chart;

  constructor( public store: ChartStore ){
    this.widgetSubs = store
      .widget$
      .subscribe( x => this.widget = x );
  }

  finalize(){
    //console.log( "destroy BaseChartExtension" )
    this.widgetSubs?.unsubscribe();
  }
}

export class BaseDrawer{
  get context(){
		return this.chart.chart.ctx;
  }

  get canvas(){
		return this.chart.canvas;
  }
 
	get scaleY(){
		return this.chart.scales[ AXIS_Y_LEFT ];
	}

	get scaleX(){
		return this.chart.scales[ AXIS_X ];
  }

  get minY(){
		return this.scaleY.top;
	}

	get maxY(){
		return this.scaleY.bottom;
	}
  
  constructor( public chart: any ){
    
  }

  alignPixel( pixel: number, width: number) {
		var devicePixelRatio = this.chart.currentDevicePixelRatio;
		var halfWidth = width / 2;
		return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
	};
}
