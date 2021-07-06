import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../../base/widget-consumer';

@Component({
  selector: 'value-selector',
  templateUrl: './selector.html'
})
export class ValueSelectorComponent extends WidgetConsumer {

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

  }
}
