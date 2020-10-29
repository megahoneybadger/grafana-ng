import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';

@Component({
  selector: 'editor-alert',
  templateUrl: './alert.html'
})
export class AlertEditorComponent extends BaseChartEditorComponent  {
 
  index: number = 0;

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );

    console.log( this.widget );
  }

  onClose(){
    this.index = 0;
  }

  onDelete(){
    // delete alert

    this.onClose();
  }
}
