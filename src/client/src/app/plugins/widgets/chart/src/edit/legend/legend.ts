import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';

@Component({
  selector: 'editor-legend',
  templateUrl: './legend.html'
})
export class LegendEditorComponent extends BaseChartEditorComponent {
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
}
