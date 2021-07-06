import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'editor-gauge',
  templateUrl: './gauge.html'
})
export class GaugeEditorComponent extends WidgetConsumer {

  index: number = 0;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

  }

  onShowGauge(){
    this.widget.gauge.show = true;

    // This is a fix for radial pointer.
    setTimeout( () => this.rebuild() );
  }
}
