import { Injectable } from '@angular/core';
import { AlertDrawerPlugin } from './alert';
import { AnnotationDrawerPlugin } from './annotations';
import { DragRangeDrawerPlugin } from './drag';
import { ThresholdDrawerPlugin } from './thresholds';
import { TimeRegionsDrawerPlugin } from './time-regions';
import { TrackballDrawerPlugin } from './trackball';

@Injectable()
export class ExtensionsManager {
	
	get list() : ChartJsExtension[] {
		return [
			this.thresholds,
			this.timeRegions,
			this.alerts,
			this.annotations,
			this.trackball,
			this.drag
		]
	}

	constructor( 
		private thresholds: ThresholdDrawerPlugin,
		private trackball: TrackballDrawerPlugin,
		private timeRegions: TimeRegionsDrawerPlugin,
		private alerts: AlertDrawerPlugin,
		private annotations: AnnotationDrawerPlugin,
		private drag: DragRangeDrawerPlugin ){

	}

	destroy(){
		this.list.forEach( x => x.finalize() );
	}
}

export interface ChartJsExtension{
	afterDatasetsDraw(chart, easing);
	finalize();
}