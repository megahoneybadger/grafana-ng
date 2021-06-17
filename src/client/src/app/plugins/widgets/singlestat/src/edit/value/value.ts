import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { WidgetConsumer } from '../../base/widget-consumer';
import {GaugeValue, GaugeValueReducer} from '../../singlestat.m'

@Component({
  selector: 'gauge-editor-value',
  templateUrl: './value.html'
})
export class GaugeValueEditorComponent extends WidgetConsumer {

  availableReducers = DropDownComponent.wrapEnum( GaugeValueReducer );
  GaugeValueReducerRef = GaugeValueReducer;
  
  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    this.widget.value = this.widget.value ?? new GaugeValue(); 
  }

 
}
