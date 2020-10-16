import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IPanel, Plugin, PluginStore } from 'common';
import { PluginLoader } from 'src/app/plugins/loader/plugin-loader.s';
import { PanelWidgetAnchorDirective } from './anchors.dir';

@Component({
  selector: 'panel',
  templateUrl: './panel.html',
  styleUrls: [ './panel.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPanelComponent {
  
  panel: IPanel;
  plugin: Plugin;
  pluginInstance: any;

  loadingPlugin: boolean;
  loadingPluginError: boolean;

  @ViewChild(PanelWidgetAnchorDirective) widgetPlaceholder: PanelWidgetAnchorDirective;

  get loading(): boolean{
    return false;
  }

  constructor( 
    private pluginStore: PluginStore,
    private pluginLoader: PluginLoader ){
    
  }

  createContent( p: IPanel ){
    this.panel = p;

    this
      .pluginStore
      .plugins$
      .subscribe( x => {
        const plugin = x.find( y => y.id == p.type || y.id == "text" )

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
          this.pluginInstance = vcr.createComponent(cf)?.instance;
        },
        e =>{
          console.log( e );
          this.loadingPluginError = true
        }  )
  }
}
