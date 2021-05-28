import { Component, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN, DataSourceStore,
  DataSource, PluginActivator, TimeRangeStore } from 'common';
import { Subscription } from 'rxjs';
import { DropDownComponent } from '../../dropdowns/dropdown/dropdown';
import { MetricsDesignerAnchorDirective } from './anchor';
import * as _ from 'lodash';

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
  prevTargets = new Map();

  @ViewChild(MetricsDesignerAnchorDirective) anchor;
  loadingPluginError: boolean;
  loadingPlugin: boolean;

  get metricsDataSourceId() : number {
    return this
      .panel
      .widget
      ?.metrics
      ?.dataSource;
  }

  get metricsTargets() {
    return this
      .panel
      .widget
      ?.metrics
      ?.targets;
  }

  constructor(
    public pluginActivator: PluginActivator,
    public store: DataSourceStore,
    public time: TimeRangeStore,
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
    this.loadingPlugin = true;

    this.panel.widget.metrics = this.panel.widget.metrics ?? {  }
    
    const oldId = this.metricsDataSourceId;
    this.panel.widget.metrics.dataSource = d?.id

    this.anchor.viewContainerRef.clear();
    
    this
      .pluginActivator
      .createDataSourceMetricsDesigner( this.panel, this.anchor.viewContainerRef )
      .subscribe( 
        x => {
          this.loadingPlugin = false

          if( oldId != this.metricsDataSourceId ){
            this.prevTargets[ oldId ] = _.cloneDeep(this.metricsTargets);
            this.panel.widget.metrics.targets = this.prevTargets[ this.metricsDataSourceId ] ?? [];
            this.time.tick();
          }
        },
        _ => {
          this.anchor.viewContainerRef.clear();
          this.loadingPluginError = true;
          this.loadingPlugin = false;
        } );
  }
}
