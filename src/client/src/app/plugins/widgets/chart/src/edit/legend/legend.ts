import { Component, Inject } from '@angular/core';
import { Panel } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import { PANEL_TOKEN } from '../../chart.m';

@Component({
  selector: 'editor-legend',
  templateUrl: './legend.html'
})
export class LegendEditorComponent extends BaseChartEditorComponent  {
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
}
