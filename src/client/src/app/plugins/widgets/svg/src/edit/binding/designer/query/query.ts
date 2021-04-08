import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingQuery, BindingReducer } from '../../../../svg.m';
import { WidgetConsumer } from '../../../../base/base-panel';

@Component({
	selector: 'binding-query-editor',
	templateUrl: `./query.html`
})
export class BindingQueryEditorComponent extends WidgetConsumer  {
	@Input() query: BindingQuery;

	itemsTarget = []
	itemsReducer = []
	
	fields = [
		{label: 'default' }
	]

	constructor(@Inject( PANEL_TOKEN ) panel: Panel){
		super( panel );
		
		this.itemsTarget = this
			.widget
			.metrics
			.targets
			.map( x => { return {label: (<any>x).refId } } )

		this.itemsReducer =	Object
			.values( BindingReducer )
			.map( x => { return {label: x } });
  }
}




