import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';

@Component({
  selector: 'gauge-editor-labels',
  templateUrl: './labels.html'
})
export class GaugeLabelsEditorComponent extends WidgetConsumer {

 

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }
}
