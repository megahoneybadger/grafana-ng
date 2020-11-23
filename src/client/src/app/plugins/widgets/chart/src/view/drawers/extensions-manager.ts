import { Injectable } from '@angular/core';
import { ChartJsExtension } from '../../base/chart-base-extension';
import { AlertDrawerPlugin } from './alert';
import { AnnotationDrawerPlugin } from './annotations';
import { DragRangeDrawerPlugin } from './drag';
import { NoContentPlugin } from './no-content';
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
			this.drag,
			this.noContent,
		]
	}

	constructor( 
		private thresholds: ThresholdDrawerPlugin,
		private trackball: TrackballDrawerPlugin,
		private timeRegions: TimeRegionsDrawerPlugin,
		private alerts: AlertDrawerPlugin,
		private annotations: AnnotationDrawerPlugin,
		private drag: DragRangeDrawerPlugin,
		private noContent: NoContentPlugin ){

	}

	destroy(){
		this.list.forEach( x => x.finalize() );
	}
}
