import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';

@Component({
  selector: 'editor-alert-history',
  templateUrl: './alert-history.html'
})
export class AlertHistoryEditorComponent extends BaseChartEditorComponent  {

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );

    

  }
}
