import { Component, Input, ViewChild } from '@angular/core';
import { DashboardStore, PluginActivator } from 'common';
import { BaseDasboardComponent } from '../../base/dashboard-base';
import { PanelWidgetEditorAnchorDirective, PanelWidgetAnchorDirective } from '../anchors.dir';
import { DashboardPanelComponent } from '../panel';

@Component({
	selector: 'dashboard-panel-editor',
	templateUrl: './panel-editor.html',
	styleUrls: ['./panel-editor.scss']
})
export class DashboardPanelEditorComponent extends BaseDasboardComponent {
	
	@ViewChild(PanelWidgetAnchorDirective) panelAnchor;
	@ViewChild(PanelWidgetEditorAnchorDirective) editorAnchor;
	loadingPluginError: boolean;

	@Input() readOnly: boolean = false;

	constructor(
		store: DashboardStore,
		private pluginActivator: PluginActivator ) {
			super(store);
	}

	onPanelReady() {
		this
			.pluginActivator
			.createPanel( this.panel, this.panelAnchor.viewContainerRef, DashboardPanelComponent );

		this
			.pluginActivator
			.createWidgetEditor( this.panel, this.editorAnchor.viewContainerRef )
			.subscribe()
	}
	
	onInstantiationError( e ){
    console.log( e );
    this.loadingPluginError = true 
  }
}

