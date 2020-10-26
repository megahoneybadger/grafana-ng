import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';

@Component({
  selector: 'editor-axis-x',
  templateUrl: './x-axis.html'
})
export class AxisXEditorComponent extends BaseChartEditorComponent {
   
  get axis(){
    return this.axes.x;
  }

  get chartAxis(){
    return this.options.scales.xAxes[ 0 ];
  }

  get show(): boolean{
    return this.axis.show;
  }

  set show( v: boolean ){
    this.axis.show = this.chartAxis.display = v;
    this.refresh();
  }

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
    
  }
}
