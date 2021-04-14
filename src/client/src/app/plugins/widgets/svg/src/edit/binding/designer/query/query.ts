import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingQuery, BindingReducer } from '../../../../svg.m';
import { WidgetConsumer } from '../../../../base/base-panel';
import { Subscription } from 'rxjs';

@Component({
	selector: 'binding-query-editor',
	templateUrl: `./query.html`
})
export class BindingQueryEditorComponent extends WidgetConsumer  {
	@Input() query: BindingQuery;
	@Output() change = new EventEmitter(); 

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
				const target = this.query?.target;

				this.itemsField = ( x?.has( target ) ) ?
						x.get( target ).map( y => {return {label: y}} ) :
						[ {label: 'field' }	]
			} );
	}

	ngOnDestroy(){
		this.dataSubs?.unsubscribe();
	}
}




