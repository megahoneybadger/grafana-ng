import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';

@Component({
  selector: 'editor-axes',
  template: `
    <editor-axis-y ></editor-axis-y>
    <editor-axis-y [left]="false" ></editor-axis-y>
    <editor-axis-x></editor-axis-x>`
})
export class AxesEditorComponent extends BaseChartEditorComponent {
  
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
    
  }
} 
