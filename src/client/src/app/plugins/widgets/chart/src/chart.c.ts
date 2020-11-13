import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OptionsProvider } from './view/options-provider';
import { DisplayManager } from './view/display-manager';
import { ChartStore } from './base/chart.store';
import { UIChart } from 'primeng';
import { BaseChartComponent } from './base/chart-base';
import { ExtensionsManager } from './view/drawers/extensions-manager';
import { TrackballDrawerPlugin } from './view/drawers/trackball';
import { ThresholdDrawerPlugin } from './view/drawers/thresholds';
import { TimeRegionsDrawerPlugin } from './view/drawers/time-regions';
import { DataProvider } from './data/data-provider';
import { DataConverter } from './data/data-converter';
import { AlertDrawerPlugin } from './view/drawers/alert';
import { AnnotationDrawerPlugin } from './view/drawers/annotations';
import { MouseStore } from './base/mouse.store';
import { DragRangeDrawerPlugin } from './view/drawers/drag';

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
    MouseStore,
    
    ExtensionsManager,
    TrackballDrawerPlugin,
    ThresholdDrawerPlugin,
    TimeRegionsDrawerPlugin,
    AlertDrawerPlugin,
    AnnotationDrawerPlugin,
    DragRangeDrawerPlugin
  ]
})
export class ChartComponent extends BaseChartComponent {
  
  showAlertHandle: boolean = false;
  options: any;
  @ViewChild( UIChart ) control;

  constructor( 
    store: ChartStore,
    public plugins: ExtensionsManager ) {
      super( store )

      this.options = OptionsProvider.getOptions( this );
  }

  ngAfterViewInit(){
    this.widget.component = this;
  }

  ngOnDestroy(){
    this.store.destroy();
    this.plugins.destroy();
  }
}
