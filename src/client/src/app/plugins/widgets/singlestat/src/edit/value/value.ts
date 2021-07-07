import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'editor-value',
  template: `
  <ed-side-tabstrip [(ngModel)]="index">

    <ed-tab header="Label">
      <ng-template edTabContent>
        <value-editor-label></value-editor-label>
      </ng-template>
    </ed-tab>

    <ed-tab header="Thresholds">
      <ng-template edTabContent>
        <value-editor-thresholds></value-editor-thresholds>
      </ng-template>

      <ng-template edTabTitle>
        Thresholds<span class="muted ml-1" *ngIf="widget.thresholds?.length">({{widget.thresholds.length}})</span>
      </ng-template>
    </ed-tab>

    <ed-tab header="Mappings">
      <ng-template edTabContent>
        <value-editor-mappings></value-editor-mappings>
      </ng-template>
    </ed-tab>

    <ed-tab header="Selector">
      <ng-template edTabContent>
        <value-selector></value-selector>
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
