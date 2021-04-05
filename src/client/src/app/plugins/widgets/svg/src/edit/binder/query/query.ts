import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingQuery } from '../../../svg.m';
import { BaseSvgPanelComponent } from '../../../base/base-panel';

@Component({
	selector: 'binding-query-editor',
	templateUrl: `./query.html`
})
export class BindingQueryEditorComponent extends BaseSvgPanelComponent  {
	@Input() query: BindingQuery;

	itemsTarget = []

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
  }
}




