import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { WidgetConsumer } from '../../base/widget-consumer';
import {FontSize, GaugeValue, GaugeValueReducer} from '../../singlestat.m'

@Component({
  selector: 'gauge-editor-value',
  templateUrl: './value.html'
})
export class GaugeValueEditorComponent extends WidgetConsumer {

  
  availableFontSizes = [ 10, 30, 50, 70, 100, 110, 120, 150, 200 ]
    .map( x => {
      return {
        label: `${x}%`,
        value: x
      }
    } );

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    this.widget.value = this.widget.value ?? new GaugeValue(); 
    //this.widget.value.fontSize = FontSize.Size_100; 
  }

 
}
