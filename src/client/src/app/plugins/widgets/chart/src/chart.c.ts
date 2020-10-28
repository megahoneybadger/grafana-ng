import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataProvider } from './view/data/data-provider';
import { OptionsProvider } from './view/options-provider';
import { DataConverter } from './view/data/data-converter';
import { DisplayManager } from './view/display-manager';
import { ChartStore } from './base/chart.store';
import { UIChart } from 'primeng';
import { BaseChartComponent } from './base/chart-base';
import { ChartJsExtension, ExtensionsManager } from './view/drawers/extensions-manager';
import { TrackballDrawerPlugin } from './view/drawers/trackball';
import { ThresholdDrawerPlugin } from './view/drawers/thresholds';
import { TimeRegionsDrawerPlugin } from './view/drawers/time-regions';

@Component({
  selector: 'widget',
  templateUrl:'./chart.html',
  styleUrls: ['./chart.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[
    DataProvider,
    DataConverter,
    DisplayManager,
    ChartStore,
    
    ExtensionsManager,
    TrackballDrawerPlugin,
    ThresholdDrawerPlugin,
    TimeRegionsDrawerPlugin
  ]
})
export class ChartComponent extends BaseChartComponent {
  
  options: any;
  plugins: ChartJsExtension[];
  @ViewChild( UIChart ) control;

  get legend(){
    return this.widget?.legend;
  }

  constructor( store: ChartStore, private extensions: ExtensionsManager ) {
    super( store )

    this.options = OptionsProvider.getOptions( this );

    this.plugins = extensions.list;
  }

  ngAfterViewInit(){
    this.widget.component = this;
  }

  ngOnDestroy(){
    this.store.destroy();
    this.extensions.destroy();
  }
}
