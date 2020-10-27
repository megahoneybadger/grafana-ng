import { Injectable } from '@angular/core';
import { ThresholdDrawerPlugin } from './thresholds-drawer';
import { TrackballDrawerPlugin } from './trackball-drawer';

@Injectable()
export class ExtensionsManager {
	
	get list() : ChartJsExtension[] {
		return [
			this.thresholds
		]
	}

	constructor( 
		private thresholds: ThresholdDrawerPlugin,
		private trackball: TrackballDrawerPlugin ){

	}

	destroy(){
		this.list.forEach( x => x.destroy() );
	}
}

export interface ChartJsExtension{
	afterDatasetsDraw(chart, easing);
	destroy();
}