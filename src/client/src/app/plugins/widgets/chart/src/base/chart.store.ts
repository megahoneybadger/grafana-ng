import { Inject, Injectable } from '@angular/core';
import { DashboardStore, Panel, PANEL_TOKEN, AnnotationStore, Dashboard } from 'common';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Chart, DataSet } from '../chart.m';
import { DataProvider } from './data-provider';
import { DisplayManager } from '../view/display-manager';
import { MouseStore } from './mouse.store';

@Injectable()
export class ChartStore {
	private data: BehaviorSubject<DataSet[]> = new BehaviorSubject(null);
	readonly data$: Observable<DataSet[]> = this.data.asObservable();

	dashboard: Dashboard;
	
	private dashboardSubs: Subscription;
	private annotSubs: Subscription;

	get widget(): Chart{
		return this.panel.widget;
	}

	constructor( 
		private dashboardStore: DashboardStore,
		public dataProvider: DataProvider,
		public display: DisplayManager,
		public annotationStore: AnnotationStore,
		public mouse: MouseStore,
		@Inject( PANEL_TOKEN ) public panel: Panel ){
			dataProvider
				.data$
				.subscribe( x => this.data.next( x?.datasets ?? [] ) );

			this.dashboardSubs = dashboardStore
				.dashboard$
				.subscribe( x => this.dashboard = x );

			this.annotSubs = annotationStore
				.annotationsUpdate$
				.subscribe( _ => this.refresh() );
	}

	destroy(){
		this.dashboardSubs?.unsubscribe();
		this.annotSubs?.unsubscribe();
		this.dataProvider.destroy();
		this.widget.component = undefined;
	}

	refresh(){
    this
      ?.widget
      .component
      ?.control
      ?.refresh();
  }
}
