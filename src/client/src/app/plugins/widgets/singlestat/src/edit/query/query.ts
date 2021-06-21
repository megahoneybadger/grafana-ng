import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { WidgetConsumer } from '../../base/widget-consumer';
import { GaugeValue, GaugeValueReducer } from '../../singlestat.m';

@Component({
	selector: 'metric-field-picker',
	templateUrl: `./query.html`
})
export class MetricFieldPickerComponent extends WidgetConsumer  {
	@Input() value: GaugeValue;
	@Output() pick = new EventEmitter(); 

	dataSubs: Subscription;

	itemsTarget = []
	itemsReducer = []
	itemsField = []
	columns = new Map<string, string[]>();

	constructor(
		@Inject( PANEL_TOKEN ) panel: Panel ){
			super( panel );
  }

	ngOnInit(){

		//this.value.field = this.value.field ?? 'field';
		
		this.itemsTarget = this
			.widget
			.metrics
			?.targets
			.map( x => { return { label: (<any>x).refId } } )

		this.itemsReducer =	Object
			.values( GaugeValueReducer )
			.map( x => { return { label: x } });

		this.dataSubs = this
			.component
			.binder
			.fieldsUpdate$
			.subscribe( x => {
				this.columns = new Map(x);
				this.rebuildFields();
			} );
	}

	rebuildFields(){
		const target = this.value?.refId;

		this.itemsField = ( this.columns?.has( target ) ) ?
			this.columns.get( target ).map( y => { return {label: y}} ) :	[ { label: 'field' }	]
	}

	ngOnDestroy(){
		this.dataSubs?.unsubscribe();
	}
}



