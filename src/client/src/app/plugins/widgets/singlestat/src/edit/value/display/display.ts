import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';

@Component({
  selector: 'value-editor-display',
  template: `
  <div class="section gf-form-group" >
    <h5 class="section-heading">Selector</h5>
    <value-selector></value-selector>
  </div>

  <div class="section gf-form-group" >
    <h5 class="section-heading" >Thresholds</h5>
    <editor-thresholds></editor-thresholds>
  </div>`
})
export class  ValueDisplayEditorComponent extends WidgetConsumer {

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

  }
}
