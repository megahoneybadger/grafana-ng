import { Directive } from '@angular/core';
import { UIChart } from 'primeng';
import { Subscription } from 'rxjs';
import { Chart, ChartData, DataSet } from '../chart.m';
import { ChartStore } from './chart.store';

@Directive() 
export class BaseChartComponent {
  data: ChartData;
  widget: Chart;
  control: UIChart;

  get datasets():DataSet[]{
    return this.data?.datasets;
  }

  dataSubs: Subscription;
  widgetSubs: Subscription;
  ctrlSubs: Subscription;

  get display(){
    return this.store.display;
  }

	constructor( public store: ChartStore ){

    this.dataSubs = store
      .data$
      .subscribe( x => this.data = { 
        datasets: x
      } );

    this.widgetSubs = store
      .widget$
      .subscribe( x => {
        this.widget = x;

        if( x ){
          this.onWidgetReady();
        }
       } );

    this.ctrlSubs = store
      .control$
      .subscribe( x => {
        this.control = x;

        if( x ){
          this.onControlReady();
        }
      } );
  }

  onWidgetReady(){

  }

  onControlReady(){

  }
  
  ngOnDestroy(){
    this.dataSubs?.unsubscribe();
    this.widgetSubs?.unsubscribe();
    this.ctrlSubs?.unsubscribe();
  }
}
