import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TrackballDrawerPlugin } from './view/extensions/trackball-drawer';
import { DataProvider } from './view/data/data-provider';
import { OptionsProvider } from './view/options-provider';
import { DataConverter } from './view/data/data-converter';
import { DisplayManager } from './view/render/display-manager';
import { ChartStore } from './base/chart.store';
import { UIChart } from 'primeng';
import { BaseChartComponent } from './base/chart-base';

@Component({
  selector: 'widget',
  templateUrl:'./chart.html',
  styleUrls: ['./chart.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[
    DataProvider,
    DataConverter,
    DisplayManager,
    ChartStore
  ]
})
export class ChartComponent extends BaseChartComponent {
  
  options: any;
  plugins = [ new TrackballDrawerPlugin() ]
  @ViewChild( UIChart ) private ctrlChart;

  get legend(){
    return this.widget?.legend;
  }

  constructor( store: ChartStore ) {
    super( store )

    this.options = OptionsProvider.getOptions( this );
  }

  ngAfterViewInit(){
    this.store.control = this.ctrlChart;
  }

  ngOnDestroy(){
    this.store.destroy();
  }
}
