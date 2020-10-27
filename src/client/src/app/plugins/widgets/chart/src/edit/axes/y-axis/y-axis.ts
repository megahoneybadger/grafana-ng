import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ScaleType } from '../../../chart.m';
import { menuItems } from './units';
import * as _ from 'lodash';

@Component({
  selector: 'editor-axis-y',
  templateUrl: './y-axis.html'
})
export class AxisYEditorComponent extends BaseChartEditorComponent {
 
  @Input() left: boolean = true;

  units = _.cloneDeep( menuItems );
  scales = DropDownComponent.wrapEnum( ScaleType );

  get axis(){
    return this.left ? this.axes.leftY : this.axes.rightY;
  }

  get chartAxis(){
    return this.options.scales.yAxes[ this.left ? 0 : 1 ];
  }

  get show(): boolean{
    return this.axis.show;
  }

  set show( v: boolean ){
    this.axis.show = this.chartAxis.display = v;
    this.refresh();
  }

  get unit(): boolean{
    return this.axis.unit;
  }

  set unit( v: boolean ){
    this.axis.unit = v;

    this.refresh();
  }

  get scale(): ScaleType{
    return this.axis.scale;
  }

  set scale( v: ScaleType ){
    this.axis.scale = v;
    this.chartAxis.type = ( v == ScaleType.Linear ) ? "linear" : "logarithmic";

    this.refresh();
  }

  get label(): string{
    return this.axis.label;
  }

  set label( v: string ){
    this.axis.label = v;
    const sl = this.chartAxis.scaleLabel;

    if( v ){
      sl.display = true;
      sl.labelString = v;
    } else{
      sl.display = false;
      sl.labelString = undefined;
    }

    this.refresh();
  }

  get decimals(): number{
    return this.axis.decimals;
  }

  set decimals( v: number ){
    this.axis.decimals = v ? +v : undefined;

    this.refresh();
  }

  get min(): number{
    return this.axis.min;
  }

  set min( v: number ){
    this.axis.min = this.chartAxis.ticks.min = v ? +v : undefined;

    this.refresh();
  }

  get max(): number{
    return this.axis.max;
  }

  set max( v: number ){
    this.axis.max = this.chartAxis.ticks.max = v ? +v : undefined;

    this.refresh();
  }
  
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }

}
