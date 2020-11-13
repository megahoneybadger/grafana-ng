import { Directive } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartComponent } from '../chart.c';
import { Chart, ChartData, DataSet } from '../chart.m';
import { ChartStore } from './chart.store';

@Directive() 
export class BaseChartComponent {
  data: ChartData;
  widget: Chart;

  get datasets():DataSet[]{
    return this.data?.datasets;
  }

  dataSubs: Subscription;
  widgetSubs: Subscription;

  get component(): ChartComponent{
    return this.widget.component;
  }

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
  }

  onWidgetReady(){

  }
  
  ngOnDestroy(){
    this.dataSubs?.unsubscribe();
    this.widgetSubs?.unsubscribe();
  }
}
