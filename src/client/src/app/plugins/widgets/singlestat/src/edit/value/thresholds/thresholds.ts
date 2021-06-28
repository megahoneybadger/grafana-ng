import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { GaugeThreshold } from '../../../singlestat.m';

@Component({
  selector: 'editor-thresholds',
  template: `
  <div class="gf-form-group">

    <div *ngFor="let t of widget.thresholds">
      <threshold [data]="t"></threshold>
    </div>

    <div class="gf-form">
      <label class="gf-form-label pointer" (click)="onAddThreshold()">
        <i class="fa fa-plus"></i>
      </label>
    </div>
  </div>`
})
export class ThresholdsEditorComponent extends WidgetConsumer {

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

  }


  onAddThreshold(){
    const t = new GaugeThreshold();

    this.widget.thresholds = this.widget.thresholds ?? new Array<GaugeThreshold>();
    this.widget.thresholds.push( t );
  }
}
