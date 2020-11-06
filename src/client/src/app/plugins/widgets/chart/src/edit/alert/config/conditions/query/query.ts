import { Component, Inject, Input } from '@angular/core';
import { AlertQuery, Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../../../base/chart-base-editor';


@Component({
	selector: 'alert-query-editor',
	templateUrl: `./query.html`
})
export class AlertQueryEditorComponent extends BaseChartEditorComponent  {
	@Input() query: AlertQuery;

	itemsTarget = []

	itemsFrom = [
		{label: '10s' },
		{label: '1m' },
		{label: '5m' },
		{label: '10m' },
		{label: '15m' },
		{label: '1h' },
		{label: '24h' },
		{label: '48h' }
	]

	itemsTo = [
		{label: 'now' },
		{label: 'now-1m' },
		{label: 'now-5m' },
		{label: 'now-10m' },
		{label: 'now-1h' }
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




