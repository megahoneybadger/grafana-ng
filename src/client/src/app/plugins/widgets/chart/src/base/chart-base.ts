import { Directive } from '@angular/core';
import { Annotation, Panel } from 'common';
import { Subscription } from 'rxjs';
import { ChartComponent } from '../chart.c';
import { Chart, ChartData, DataSet } from '../chart.m';
import { ChartStore } from './chart.store';

@Directive() 
export class BaseChartComponent {
  data: ChartData;
 
  dataSubs: Subscription;
  widgetSubs: Subscription;

  get dashboardId(): number{
    return this.store.dashboard.id;
  }

  get panel(): Panel{
    return this.store.panel;
  }

  get widget() : Chart {
    return this.store.widget;
  }

  get datasets() : DataSet[]{
    return this.data?.datasets;
  }
 
  get display(){
    return this.store.display;
  }

  get component(): ChartComponent{
    return this.widget.component;
  }

  get nativeControl() {
    return this.component.control.chart
  }

  get scales(){
    return this.nativeControl.scales;
  }

  get annotations() : Annotation[]{
    return this.panel.annotations;
  }

	constructor( public store: ChartStore ){
    this.dataSubs = store
      .data$
      .subscribe( x => this.data = { 
        datasets: x
      } );
  }
  
  ngOnDestroy(){
    this.dataSubs?.unsubscribe();
  }

  refresh(){
    this.store.refresh();
  }
}
