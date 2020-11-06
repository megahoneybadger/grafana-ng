import { Injectable } from '@angular/core';
import { AlertDrawerPlugin } from './alert';
import { ThresholdDrawerPlugin } from './thresholds';
import { TimeRegionsDrawerPlugin } from './time-regions';
import { TrackballDrawerPlugin } from './trackball';

@Injectable()
export class ExtensionsManager {
	
	get list() : ChartJsExtension[] {
		return [
			this.thresholds,
			this.timeRegions,
			this.alerts
		]
	}

	constructor( 
		private thresholds: ThresholdDrawerPlugin,
		private trackball: TrackballDrawerPlugin,
		private timeRegions: TimeRegionsDrawerPlugin,
		private alerts: AlertDrawerPlugin ){

	}

	destroy(){
		this.list.forEach( x => x.destroy() );
	}
}

export interface ChartJsExtension{
	afterDatasetsDraw(chart, easing);
	destroy();
}