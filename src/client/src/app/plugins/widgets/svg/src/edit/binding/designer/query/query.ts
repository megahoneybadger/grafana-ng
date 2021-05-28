import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingQuery, BindingReducer } from '../../../../svg.m';
import { WidgetConsumer } from '../../../../base/base-panel';
import { Subscription } from 'rxjs';

@Component({
	selector: 'binding-metric-picker',
	templateUrl: `./query.html`
})
export class BindingMetricPickerComponent extends WidgetConsumer  {
	@Input() query: BindingQuery;
	@Output() change = new EventEmitter(); 

	get metric() : string{
		const separ = this.query.refId ? '.' : '';
		return `${this.query.refId}${separ}${this.query.field}`
	}

	set metric( v: string ){
		const index = v.indexOf( '.' );

		if( -1 != index ){
			this.query.refId = v.substring( 0, index  );
			this.query.field = v.substring( index + 1 );
		}
		else {
			this.query.refId = '';
			this.query.field = v;
		}
	}

	dataSubs: Subscription;

	itemsTarget = []
	itemsReducer = []
	itemsField = []

	constructor(
		@Inject( PANEL_TOKEN ) panel: Panel ){
			super( panel );
  }

	ngOnInit(){
		
		this.itemsTarget = this
			.widget
			.metrics
			?.targets
			.map( x => { return {label: (<any>x).refId } } )

		this.itemsReducer =	Object
			.values( BindingReducer )
			.map( x => { return {label: x } });

		this.dataSubs = this
			.component
			.binder
			.fieldsUpdate$
			.subscribe( x => {

				const res = [];

				x.forEach( (v, k) => 
					v.forEach( z => res.push( `${k}.${z}` ) ) ) 

				const target = this.query?.refId;

				this.itemsField = res.map( x => { return {label: x } } );

				// this.itemsField = ( x?.has( target ) ) ?
				// 		x.get( target ).map( y => {return {label: y}} ) :
				// 		[ {label: 'field' }	]
			} );
	}

	ngOnDestroy(){
		this.dataSubs?.unsubscribe();
	}
}




