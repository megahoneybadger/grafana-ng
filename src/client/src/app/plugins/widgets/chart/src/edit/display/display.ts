import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';

@Component({
  selector: 'editor-display',
  templateUrl: './display.html'
})
export class DisplayEditorComponent extends BaseChartEditorComponent  {
 
  index: number = 0;

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );

  }
}
