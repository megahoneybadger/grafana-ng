import { Component, Inject } from '@angular/core';
import { Panel } from 'common';
import { PANEL_TOKEN } from '../../chart.m';

@Component({
  selector: 'editor-legend',
  templateUrl: './legend.html'
})
export class LegendEditorComponent {
 
  get legend(){
    return this.panel?.widget?.legend;
  }
  
  constructor(@Inject( PANEL_TOKEN ) private panel: Panel){
  }
}
