import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'editor-value',
  template: `
  <ed-side-tabstrip [(ngModel)]="index">

    <ed-tab header="Display">
      <ng-template edTabContent>
        <value-editor-display></value-editor-display>
      </ng-template>
    </ed-tab>

    <ed-tab header="Label">
      <ng-template edTabContent>
        <value-editor-label></value-editor-label>
      </ng-template>
    </ed-tab>

  </ed-side-tabstrip>`
})
export class ValueEditorComponent extends WidgetConsumer {
  index: number = 0;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

  }
}
