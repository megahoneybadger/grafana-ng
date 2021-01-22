import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnotationStore, AuthGuard, BaseDasboardComponent, DashboardStore, PluginActivator } from 'common';
import { ErrorMessages, Notes } from 'uilib';
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

	showEditor: boolean = true;
	@Input() readOnly: boolean = false;

	constructor(
		store: DashboardStore,
		private annotStore: AnnotationStore,
		private router: Router,
		private activeRoute: ActivatedRoute,
		private pluginActivator: PluginActivator ) {
			super(store);

			this.showEditor = activeRoute
				.snapshot
				.data['editor']
	}

	onDashboardReady(){
		if( this.showEditor ){
			AuthGuard.canEditDashboard( this.dashboard, this.router );
		}
  }

	onPanelReady() {
		this
			.pluginActivator
			.createPanel( this.panel, this.panelAnchor.viewContainerRef, DashboardPanelComponent );

		if( this.showEditor ){
			this
				.pluginActivator
				.createWidgetEditor( this.panel, this.editorAnchor.viewContainerRef )
				.subscribe( 
					_ => {},
					e => this.loadingPluginError = true );
		}
	}

	onDashboardError(){
		Notes.error( ErrorMessages.BAD_GET_DASHBOARD );
		this.router.navigate( [DashboardStore.ROOT_MANAGEMENT] );
	}

	onPanelError() {
		Notes.error( ErrorMessages.BAD_GET_PANEL );
		this.router.navigate( [this.dashboard.url] );
	}

	onInstantiationError( e ){
    this.loadingPluginError = true 
  }
}

