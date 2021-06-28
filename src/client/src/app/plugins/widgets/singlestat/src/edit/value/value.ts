import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'editor-value',
  templateUrl: './value.html'
})
export class ValueEditorComponent extends WidgetConsumer {
  index: number = 1;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

  }
}
