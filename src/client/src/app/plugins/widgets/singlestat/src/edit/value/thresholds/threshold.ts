import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { GaugeThreshold } from '../../../singlestat.m';

@Component({
  selector: 'threshold',
  host: {'class': 'gf-form-inline'},
  template: `
  <ed-textbox	
    [(ngModel)]="data.value"
    label="Value"
    type="number"
    width="5" >
  </ed-textbox>

  <ed-color-picker [(ngModel)]="data.color"	></ed-color-picker>

  <div class="gf-form">
    <label class="gf-form-label pointer" (click)="onRemoveRule()" >
      <i class="fa fa-trash"></i>
    </label>
  </div>`,
  
})
export class ThresholdComponent extends WidgetConsumer {

  @Input() data : GaugeThreshold;
  @Output() change = new EventEmitter

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }

  onRemoveRule(){
    const index = this
      .widget
      .thresholds
      .indexOf( this.data );

    this.widget.thresholds.splice( index, 1 );

    this.change.emit()
  }
}
