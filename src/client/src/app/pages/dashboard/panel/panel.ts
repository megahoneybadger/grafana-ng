import { Component, Injector, ViewChild, ViewEncapsulation } from '@angular/core';
import { IPanel, Plugin, PluginStore } from 'common';
import {  } from 'src/app/common/src/public-api';
import { PluginLoader } from 'src/app/common/src/plugins/plugin-loader.s';
import { PanelWidgetAnchorDirective } from './anchors.dir';

@Component({
  selector: 'panel',
  templateUrl: './panel.html',
  styleUrls: [ './panel.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardPanelComponent {
  
  plugin: Plugin;
  panel: IPanel;
  pluginInstance: any;

  loadingPlugin: boolean;
  loadingPluginError: boolean;

  @ViewChild(PanelWidgetAnchorDirective) widgetPlaceholder: PanelWidgetAnchorDirective;

  get loading(): boolean{
    return false;
  }

  constructor( 
    private pluginStore: PluginStore,
    private pluginLoader: PluginLoader,
    private injector: Injector ){
  }

  createContent( p: IPanel ){
    this.panel = p;

    this
      .pluginStore
      .plugins$
      .subscribe( x => {
        const plugin = x.find( y => y.id == p.type || y.id == "chart" )

        setTimeout( () => this.createPluginInstance( plugin ), 0 )  
      } )
  }

  createPluginInstance( p: Plugin ){
    if( !p ){
      return;
    }

    this.plugin = p;

    this
      .pluginLoader
      .load( `${this.plugin.id}/${this.plugin.module}`, "widget" )
      .subscribe( 
        cf => {
          const vcr = this.widgetPlaceholder.viewContainerRef;
          vcr.clear();

          let injector = Injector.create({
             providers: [{ provide: 'panel', useValue: this.panel}],
             parent: this.injector
          })

          

          this.pluginInstance = vcr.createComponent(cf, 0, injector)?.instance;
        },
        e =>{
          console.log( e );
          this.loadingPluginError = true
        }  )
  }
}
