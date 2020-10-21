import { Component, ComponentFactory, Injector, Input, ViewChild } from '@angular/core';
import { DashboardStore, Plugin, PluginLoader, PluginStore, TimeRangeStore } from 'common';
import { find, map, mergeMap, tap } from 'rxjs/operators';
import { BaseDasboardComponent } from '../base/dashboard-base';
import { PanelWidgetEditorAnchorDirective } from '../panel/anchors.dir';
import { DashboardPanelComponent } from '../panel/panel';

@Component({
	selector: 'dashboard-panel-editor',
	templateUrl: './panel-editor.html',
	styleUrls: ['./panel-editor.scss']
})
export class DashboardPanelEditorComponent extends BaseDasboardComponent {
	plugin: Plugin;

	@ViewChild(DashboardPanelComponent) panelComponent;
	@ViewChild(PanelWidgetEditorAnchorDirective) widgetEditorPlaceholder;
	@Input() readOnly: boolean = false;

	loadingPlugin: boolean;
  loadingPluginError: boolean;

	constructor(
		store: DashboardStore,
		private pluginLoader: PluginLoader,
		private pluginStore: PluginStore,
		private injector: Injector ) {
			super(store);
	}

	ngAfterViewInit() {
		console.log(this.panelComponent);
	}

	onPanelReady() {
		this.panelComponent.createContent( this.panel );

		this
			.pluginStore
			.getWidget( this.panel.type )
			.pipe( 
				tap( x => this.plugin = x ),
				mergeMap( ( p: Plugin ) => this.pluginLoader.loadWidgetEditor( p )) )
			.subscribe( 
				cf => this.onCreateInstance( cf ),
				e => this.onInstantiationError( e ));
	}

	onCreateInstance( cf: ComponentFactory<any> ){
		const vcr = this.widgetEditorPlaceholder.viewContainerRef;
		vcr.clear();

		let injector = Injector.create({
			providers: [{ provide: 'panel', useValue: this.panel}],
			parent: this.injector
		})

		vcr.createComponent(cf, 0, injector)?.instance;
	}
	
	onInstantiationError( e ){
    console.log( e );
    this.loadingPluginError = true 
  }
}

