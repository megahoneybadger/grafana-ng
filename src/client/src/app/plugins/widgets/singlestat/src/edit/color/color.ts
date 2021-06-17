import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { WidgetConsumer } from '../../base/widget-consumer';
import { GaugeColors } from '../../singlestat.m';

@Component({
  selector: 'gauge-editor-colors',
  templateUrl: './color.html'
})
export class GaugeColorsEditorComponent extends WidgetConsumer {

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    //this.widget.colors = this.colors ?? new GaugeColors(); 
  }

  onStartColorPick( color: string ){
    //this.gauge.options.colorStart = color;
    //this.gauge.render();

    this.gauge.setOptions({
      colorStart: color
    })
  }

  onStopColorPick( color: string ){
    this.gauge.setOptions({
      colorStop: color
    })
  }

  onStrokePick( color: string ){
    this.gauge.setOptions({
      strokeColor: color
    })
  }
}
