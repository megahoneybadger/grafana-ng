import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { ColorHelper } from 'uilib';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { ColumnStyleRule, GridThreshold } from '../../../grid.m';

@Component({
  selector: 'editor-thresholds',
  template: `
  <div class="gf-form-group" >

    <div *ngFor="let t of rule.thresholds; let i = index">
      <threshold [rule]="rule" [data]="t" [index]="i"></threshold>
    </div>

    <div class="gf-form">
      <label class="gf-form-label pointer" (click)="onAddThreshold()">
        <i class="fa fa-plus"></i> Add treshold
      </label>
    </div>
  </div>`
})
export class ThresholdsEditorComponent extends WidgetConsumer {

  @Input() rule: ColumnStyleRule;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }

  onAddThreshold(){
    const t = new GridThreshold();

    this.rule.thresholds = this.rule.thresholds ?? new Array<GridThreshold>();

    const list = this.rule.thresholds;
    const index = list.length %  ColorHelper.colors.length;
    t.color = `#${ColorHelper.colors[ index ]}`;

    if( list.length != 0 ){
      const last = [...list].pop();
      const v = last.value ?? 0;
      t.value = v + 10;
    } 

    list.push( t );
    this.fetch();
  }
}
