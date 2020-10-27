import { Directive } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chart, Threshold} from '../chart.m';
import { ChartStore } from './chart.store';

@Directive() 
export class BaseChartExtension {

  widgetSubs: Subscription;
  widget: Chart;

  constructor( public store: ChartStore ){
    this.widgetSubs = store
      .widget$
      .subscribe( x => this.widget = x );
  }

  destroy(){
    //console.log( "destroy BaseChartExtension" )
    this.widgetSubs?.unsubscribe();
  }
}
