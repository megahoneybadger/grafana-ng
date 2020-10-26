import { Directive } from '@angular/core';
import { Panel } from 'common';
import { Chart } from '../chart.m';

@Directive() 
export class BaseChartEditorComponent {

  get widget() : Chart{
    return this.panel.widget;
  }

  get axes(){
    return this.widget?.axes;
  }

  get legend(){
    return this.widget?.legend;
  }

  get options(){
    return this
      .widget
      .control
      .chart
      .options;
  }

  constructor( public panel: Panel){
  }

  refresh(){
    this
      .widget
      .control
      .refresh();
  }
}
