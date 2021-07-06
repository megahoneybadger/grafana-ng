import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { GaugeTicksSettings } from '../../../singlestat.m';

@Component({
  selector: 'gauge-editor-ticks',
  templateUrl: './ticks.html'
})
export class GaugeTicksEditorComponent extends WidgetConsumer {

  get ticks() : GaugeTicksSettings{
    return this.widget.gauge.ticks;
  }

  get divWidth(): number{
    return Math.trunc(this.ticks.divWidth * 100);
  }

  set divWidth( w: number ){
    w /= 100;
    this.ticks.divWidth= w;

    this.rebuild();
  }

  get divLength(): number{
    return Math.trunc(this.ticks.divLength * 100);
  }

  set divLength( l: number ){
    l /= 100;
    this.ticks.divLength= l;

    this.rebuild();
  }

  get subDivWidth(): number{
    return Math.trunc(this.ticks.subDivWidth * 100);
  }

  set subDivWidth( w: number ){
    w /= 100;
    this.ticks.subDivWidth= w;

    this.rebuild();
  }

  get subDivLength(): number{
    return Math.trunc(this.ticks.subDivLength * 100);
  }

  set subDivLength( w: number ){
    w /= 100;
    this.ticks.subDivLength = w;

    this.rebuild();
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    //this.widget.gauge.ticks = this.widget.gauge.ticks ?? new GaugeTicksSettings();
  }
}
