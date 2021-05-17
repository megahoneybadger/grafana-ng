import { Component, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN, DataSourceStore,
  DataSource, PluginActivator } from 'common';
//import { SelectItem } from 'primeng';
import { Subscription } from 'rxjs';
import { DropDownComponent } from '../../dropdowns/dropdown/dropdown';
import { MetricsDesignerAnchorDirective } from './anchor';

@Component({
  selector: 'editor-metrics',
  templateUrl: './metrics.html'
})
export class MetricsEditorComponent {
 
  openedOptions: boolean;
  openedHelp: boolean;
  openedInspector: boolean;
 
  dataSources: DataSource[];
  dsSubs: Subscription;
  data: any[];

  selected: DataSource;

  @ViewChild(MetricsDesignerAnchorDirective) anchor;
  loadingPluginError: boolean;

  get metricsDataSourceId() : number {
    return this
      .panel
      .widget
      ?.metrics
      ?.dataSource;
  }

  constructor(
    public pluginActivator: PluginActivator,
    public store: DataSourceStore,
    @Inject( PANEL_TOKEN ) public panel: Panel){
  }

  ngOnDestroy(){
    this.dsSubs?.unsubscribe();
  }

  ngOnInit(){
    this.dsSubs = this
      .store
      .dataSources$
      .subscribe( x => {
        this.dataSources = x;
        this.data = DropDownComponent.wrapArray( x, "name" );
        const defaultDataSource = x.length > 0 ? x[ 0 ] : undefined;

        this.selected = this
          .dataSources
          .find( x => x.id == this.metricsDataSourceId ) ?? defaultDataSource;

        setTimeout( ()=>  this.onDataSourceChange( this.selected ) );
      } );
  }

  onDataSourceChange( d: DataSource ){
    this.loadingPluginError = false;

    this.panel.widget.metrics = this.panel.widget.metrics ?? {  }

    this.panel.widget.metrics.dataSource = d?.id
    
    this
      .pluginActivator
      .createDataSourceMetricsDesigner( this.panel, this.anchor.viewContainerRef )
      .subscribe( 
        _ => {},
        _ => {
          this.anchor.viewContainerRef.clear();
          this.loadingPluginError = true;
        } );
  }
}
