import { Injectable } from '@angular/core';
import { ThresholdDrawerPlugin } from './thresholds';
import { TimeRegionsDrawerPlugin } from './time-regions';
import { TrackballDrawerPlugin } from './trackball';

@Injectable()
export class ExtensionsManager {
	
	get list() : ChartJsExtension[] {
		return [
			this.thresholds,
			this.timeRegions
		]
	}

	constructor( 
		private thresholds: ThresholdDrawerPlugin,
		private trackball: TrackballDrawerPlugin,
		private timeRegions: TimeRegionsDrawerPlugin ){

	}

	destroy(){
		this.list.forEach( x => x.destroy() );
	}
}

export interface ChartJsExtension{
	afterDatasetsDraw(chart, easing);
	destroy();
}