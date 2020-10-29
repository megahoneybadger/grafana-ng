import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ThresholdOperator, ThresholdColor, ThresholdAxis, Threshold } from '../../../chart.m';

@Component({
  selector: 'editor-threshold',
  templateUrl: './threshold.html'
})
export class ThresholdEditorComponent extends BaseChartEditorComponent {

  @Input() threshold: Threshold;
  @Input() index: number;

  @Output() removed = new EventEmitter<Threshold>();

  availableOperatorValues = DropDownComponent.wrapEnum( ThresholdOperator );

  availableColorValues = DropDownComponent.wrapEnum( ThresholdColor );

  availableAxisValues = DropDownComponent.wrapEnum( ThresholdAxis );
  
  get value(){
    return this.threshold.value;
  }

  set value( value ){
    const v = +value;
    this.threshold.value = isNaN( v ) || !value ? undefined : v;
  }

  get showCustomColors(){
		return ( ThresholdColor.Custom == this.threshold.colorType );
	}
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
}
