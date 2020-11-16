import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartJsExtension, BaseDrawer } from '../../base/chart-base-extension';
import { ChartStore } from '../../base/chart.store';
import { DragRegion } from '../../base/mouse.store';

@Injectable()
export class DragRangeDrawerPlugin  extends ChartJsExtension {
	region: DragRegion;
	posSubs: Subscription;

	constructor( store: ChartStore ){
		super( store );

		this.posSubs = store
			.mouse
			.drag$
			.subscribe( x => this.region = x );
	}

	finalize(){
		super.finalize();
		this.posSubs.unsubscribe();
	}

	afterDatasetsDraw(chart, _) {
		if( this.region && this.region.start && this.region.end ){
			new DragRangeDrawer( chart, this.region ).draw()
		}
	}
}

class DragRangeDrawer extends BaseDrawer{

	constructor( chart: any, private region: DragRegion ){
		super( chart );
	
	}

	draw() {
		const os = Math.max( this.region.start.offsetX, this.scaleX.left );
		
		const oe = Math.max( this.scaleX.left,
			Math.min( this.region.end.offsetX, this.scaleX.right ));

		this.renderRectangle( os, oe );
	}

	private renderRectangle( offsetStart: number, offsetEnd: number ){
		const context = this.context;
		const color = "#ffffff";
		
		context.fillStyle = color + "22"
		context.strokeStyle = color + "30";

		const x = offsetStart;
		const w = offsetEnd - offsetStart;

		const y = this.minY;
		const h = this.maxY - this.minY;

		context.beginPath();
		context.setLineDash([])
		context.fillRect( x, y,	w, h );	
		context.rect( x, y,	w, h );
		context.stroke();
	}

	// public static zoomIn( chart, timeManager : TimeManager  ){
	// 	const scaleX = chart.scales['x-axis-0'];

	// 	const sx = chart.dragRegion.start.offsetX;
	// 	const ex = chart.dragRegion.end.offsetX;

	// 	const start = Math.min( sx, ex );
	// 	const end = Math.max( sx, ex );

	// 	const os = Math.max( start, scaleX.left );
	// 	const oe = Math.max( scaleX.left,	Math.min( end, scaleX.right ));

	// 	if( Math.abs( os - oe ) == 0 ){
	// 		return;
	// 	}

	// 	var from = scaleX.getValueForPixel( os );
	// 	var to = scaleX.getValueForPixel( oe );

	// 	const minsDiff = Math.abs( from.diff( to, "minutes" ) );

	// 	if( minsDiff < 1 ){
	// 		return;
	// 	}
		
	// 	timeManager.drag( from, to, 0 );
	// }

	// public static zoomOut( timeManager : TimeManager){
	// 	const range = timeManager.getRange();
		
	// 	const f = <any>range.from;
  //   const t = <any>range.to;

  //   const timespan = t.valueOf() - f.valueOf();
  //   const center = t.valueOf() - timespan / 2;

  //   const factor = 2;
  
  //   const to = center + (timespan * factor) / 2;
	// 	const from = center - (timespan * factor) / 2;
		
	// 	timeManager.drag( moment( from ), moment( to ), 0 );
	// }
}
