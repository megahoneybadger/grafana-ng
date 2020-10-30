import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AlertCondition, Panel, PANEL_TOKEN } from 'common';

import { BaseChartEditorComponent } from '../../../../base/chart-base-editor';

@Component({
  selector: 'editor-alert-condition',
  templateUrl: './cond.html'
})
export class AlertConditionEditorComponent extends BaseChartEditorComponent  {

  @Input() condition: AlertCondition;
  @Input() index: number = 0;

  @Output() removed = new EventEmitter<AlertCondition>();

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }

  
}
