import { Inject, Injectable } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { UIChart } from 'primeng';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chart, DataSet } from '../chart.m';
import { DataProvider } from '../view/data/data-provider';
import { DisplayManager } from '../view/render/display-manager';

@Injectable()
export class ChartStore {

	private widget: BehaviorSubject<Chart> = new BehaviorSubject(null);
	readonly widget$: Observable<Chart> = this.widget.asObservable();
	
	private data: BehaviorSubject<DataSet[]> = new BehaviorSubject(null);
	readonly data$: Observable<DataSet[]> = this.data.asObservable();
	
	private control_: BehaviorSubject<UIChart> = new BehaviorSubject(null);
	readonly control$: Observable<UIChart> = this.control_.asObservable();

	get control() : UIChart{
		return this.control_.value; 
	}

	set control( ctrl: UIChart ){
		this.widget.value.control = ctrl;
		this.control_.next( ctrl );
	}

	constructor( 
		public dataProvider: DataProvider,
		public display: DisplayManager,
		@Inject( PANEL_TOKEN ) public panel: Panel ){

			dataProvider
				.data$
				.subscribe( x => this.data.next( x?.datasets ?? [] ) );

			this.widget.next( panel.widget );
	}

	destroy(){
		this.dataProvider.destroy();
		this.widget.value.control = undefined;
	}
}
