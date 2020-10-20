import { Component } from '@angular/core';
import { PluginLoader } from 'common';
import { TrackballDrawerPlugin } from './extensions/trackball-drawer';
import { DataProvider } from './services/data-provider';
import { SeriesManager } from './services/series-manager';

@Component({
  selector: 'widget',
  providers:[ 
    DataProvider,
    SeriesManager,
    PluginLoader
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
  data: any;
  options: any;

  plugins = [ new TrackballDrawerPlugin() ]

  constructor( 
    private dataProvider: DataProvider,
    private seriesManager: SeriesManager ) {

      seriesManager
        .dataSets$
        .subscribe( x => this.data = { datasets: x } );

        const axisYa = {
          id: 'A',
          gridLines: {
            color: 'rgba( 255,255,255, 0.1)',
            zeroLineWidth: 3,
          },
        }
    
        const axisYb = {
          id: 'B',
          position: 'right'
        }

      this.options = {
        maintainAspectRatio: false,
        animation: false,

        legend: {
          display: false
        },
        
        spanGaps: true,

        scales: {
          xAxes: [{
            type: 'time',
            gridLines: {
              color: 'rgba( 255,255,255, 0.1)',
            },
            ticks: {
              autoSkip: true,
              autoSkipPadding: 50,
              maxRotation: 0,
              minRotation: 0,
            },
            time: {
              displayFormats: {
                second: 'HH:mm:ss',
                minute: 'HH:mm',
                hour: 'HH:mm',
                day: 'M/D HH:mm',
                week: 'M/D',
                month: 'M/D',
                year: 'YYYY-M',
               },
  
               //stepSize: 30
            },
          
  
          
          }],
          yAxes: /*!AxesManager.needSecondaryYAxis(widget)*/true ? [axisYa] : [axisYa, axisYb]
          
        },
      };
  }

  ngOnDestroy(){
    this.dataProvider.destroy();
  }
 
}
