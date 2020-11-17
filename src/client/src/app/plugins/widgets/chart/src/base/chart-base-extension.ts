import { Directive } from '@angular/core';
import { Dashboard, Panel } from 'common';
import { AXIS_X, AXIS_Y_LEFT, Chart } from '../chart.m';
import { ChartStore } from './chart.store';

@Directive() 
export class ChartJsExtension {

  get widget() : Chart{
    return this.store.widget;
	}

	get dashboard(): Dashboard{
		return this.store.dashboard;
	}
	
	get panel() : Panel{
    return this.store.panel;
  }
  
  constructor( public store: ChartStore ){
  
	}
	
	afterDatasetsDraw(chart, easing){

	}

  finalize(){
    
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
