import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BaseComponent } from '../../base/base-component';
import { FadeInOutAnimation, ObservableEx, CardsLayoutMode } from 'uilib';
import { Plugin, PluginHelper, PluginService, PluginType } from 'common';

@Component({
  selector: 'plugins',
	templateUrl: './plugins.html',
	animations: [FadeInOutAnimation],
})
export class PluginsComponent extends BaseComponent {
  pluginsRequest: ObservableEx<Plugin[]>;
  plugins: Plugin[]
	filter: string;
	PluginHelperRef = PluginHelper;

	PluginTypeRef = PluginType;
	LayoutModeRef = CardsLayoutMode;

	layout =  CardsLayoutMode.Tiles;
	
	constructor( 
    public pluginService : PluginService,
    public router: Router,
		public activatedRoute: ActivatedRoute  ) {
		super();
			this.pluginsRequest = new ObservableEx<Plugin[]>( this
				.pluginService
				.getPlugins( )
				.pipe(        
					tap( x=> this.plugins = [...x] )))
  }
}
