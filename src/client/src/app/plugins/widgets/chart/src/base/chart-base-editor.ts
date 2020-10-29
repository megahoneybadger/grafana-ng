import { Directive } from '@angular/core';
import { Panel, TimeRangeMod } from 'common';
import { Axes, Chart, Display, Legend,
  SeriesOverride, Threshold, TimeRegion } from '../chart.m';

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

  get thresholds(): Threshold[]{
    return this.display.thresholds;
  }

  get timeRegions(): TimeRegion[]{
    return this.display.timeRegions;
  }

  get overrides(): SeriesOverride[]{
    return this.display.overrides;
  }

  get time(): TimeRangeMod{
    this.widget.time = this.widget.time ?? new TimeRangeMod();
    
    return this.widget.time;
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
      ?.control
      ?.refresh();
  }

  update(){
    const comp = this.widget.component;

    comp
      ?.datasets
      .forEach( x => comp.display.setup( x ) );

    this.refresh();
  }

  pull(){
    this
      .widget
      .component
      ?.store
      .dataProvider
      .update();
  }
}