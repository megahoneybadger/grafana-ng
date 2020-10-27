import { Directive } from '@angular/core';
import { Panel } from 'common';
import { Axes, Chart, Display, Legend } from '../chart.m';

@Directive() 
export class BaseChartEditorComponent {

  get widget() : Chart{
    return this.panel.widget;
  }

  get axes() : Axes {
    return this.widget?.axes;
  }

  get legend() : Legend{
    return this.widget?.legend;
  }

  get display() : Display{
    return this.widget?.display;
  }

  get thresholds(): any{
    return this.display.thresholds;
  }

  get options(){
    return this
      .widget
      .component
      .control
      .chart
      .options;
  }

  constructor( public panel: Panel){
  }

  refresh(){
    this
      .widget
      .component
      .control
      .refresh();
  }

  update(){
    const comp = this.widget.component;

    comp
      .datasets
      .forEach( x => comp.display.setup( x ) );

    this.refresh();
  }
}
