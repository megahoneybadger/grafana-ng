import { Component } from '@angular/core';
import { TrackballDrawerPlugin } from './view/extensions/trackball-drawer';
import { DataProvider } from './view/data/data-provider';
import { OptionsProvider } from './view/options-provider';
import { DataConverter } from './view/data/data-converter';
import { ChartData } from './chart.m';
import { DisplayManager } from './view/render/display-manager';

@Component({
  selector: 'widget',
  providers:[ 
    DataProvider,
    DataConverter,

    DisplayManager,
  ],
  template: `
    <p-chart 
      type="line"
      [data]="data"
      [options]="options"
      [plugins]="plugins"
      height="100%">
    </p-chart>
  `
})
export class ChartComponent {
  data: ChartData;
  options: any;

  plugins = [ new TrackballDrawerPlugin() ]

  constructor( private dataProvider: DataProvider ) {

    this
      .dataProvider
      .data$
      .subscribe( d => this.data = d  )

    this.options = OptionsProvider.getOptions();
  }

  ngOnDestroy(){
    this.dataProvider.destroy();
  }
}
