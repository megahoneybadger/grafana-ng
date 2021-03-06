import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { ColorHelper } from 'uilib';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { SinglestatThreshold } from '../../../singlestat.m';

@Component({
  selector: 'value-editor-thresholds',
  template: `
  <div class="gf-form-group" >

    <div *ngFor="let t of widget.thresholds; let i = index">
      <threshold [data]="t" [index]="i"></threshold>
    </div>

    <div class="gf-form">
      <label class="gf-form-label pointer" (click)="onAddThreshold()">
        <i class="fa fa-plus"></i> Add treshold
      </label>
    </div>
  </div>`
})
export class ValueThresholdsEditorComponent extends WidgetConsumer {

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }

  onAddThreshold(){
    const t = new SinglestatThreshold();

    this.widget.thresholds = this.thresholds ?? new Array<SinglestatThreshold>();

    const list = this.thresholds;
    const index = list.length %  ColorHelper.colors.length;
    t.color = `#${ColorHelper.colors[ index ]}`;

    if( list.length != 0 ){
      const last = [...list].pop();
      const v = last.value ?? 0;
      t.value = v + 10;
    } 

    list.push( t );
  }
}
