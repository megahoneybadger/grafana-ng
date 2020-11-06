import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { OptionsProvider } from './view/options-provider';
import { DisplayManager } from './view/display-manager';
import { ChartStore } from './base/chart.store';
import { UIChart } from 'primeng';
import { BaseChartComponent } from './base/chart-base';
import { ChartJsExtension, ExtensionsManager } from './view/drawers/extensions-manager';
import { TrackballDrawerPlugin } from './view/drawers/trackball';
import { ThresholdDrawerPlugin } from './view/drawers/thresholds';
import { TimeRegionsDrawerPlugin } from './view/drawers/time-regions';
import { DataProvider } from './data/data-provider';
import { DataConverter } from './data/data-converter';
import { AlertDrawerPlugin } from './view/drawers/alert';

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
    TimeRegionsDrawerPlugin,
    AlertDrawerPlugin
  ]
})
export class ChartComponent extends BaseChartComponent {
  
  options: any;
  plugins: ChartJsExtension[];
  @ViewChild( UIChart ) control;

  showAlertHandle: boolean = false;

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
