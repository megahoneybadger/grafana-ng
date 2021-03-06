import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';

@Component({
  selector: 'gauge-editor-markers',
  templateUrl: './markers.html'
})
export class GaugeMarkersEditorComponent extends WidgetConsumer {

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }
}
