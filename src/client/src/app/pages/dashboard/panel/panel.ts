import { Component, ComponentFactory, Injector, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { IPanel, Plugin, PluginStore } from 'common';
import { mergeMap, tap } from 'rxjs/operators';
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

  @Input() canResize: boolean;
  @Input() canMove: boolean;
  @Input() fullSize: boolean;

  @ViewChild(PanelWidgetAnchorDirective) widgetPlaceholder: PanelWidgetAnchorDirective;

  constructor( 
    private pluginStore: PluginStore,
    private pluginLoader: PluginLoader,
    private injector: Injector ){
  }

  createContent( p: IPanel ){
    this.panel = p;

    this
      .pluginStore
      .getWidget( this.panel.type )
      .pipe( 
        tap( p => this.plugin = p ),
        mergeMap( ( p: Plugin ) => this.pluginLoader.loadWidget( p )) )
      .subscribe( 
        cf => this.onCreateInstance( cf ),
        e => this.onInstantiationError( e ));
  }

  onCreateInstance( cf: ComponentFactory<any> ){
    // if( !p ){
    //   return;
    // }

    const vcr = this.widgetPlaceholder.viewContainerRef;
    vcr.clear();

    let injector = Injector.create({
       providers: [{ provide: 'panel', useValue: this.panel}],
       parent: this.injector
    })

    this.pluginInstance = vcr.createComponent(cf, 0, injector)?.instance;
  }

  onInstantiationError( e ){
    console.log( e );
    this.loadingPluginError = true 
  }
}
