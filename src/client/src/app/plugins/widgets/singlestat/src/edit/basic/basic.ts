import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Panel, PANEL_TOKEN } from 'common';

import { WidgetConsumer } from '../../base/widget-consumer';
import { GaugeColors } from '../../singlestat.m';

@Component({
  selector: 'gauge-editor-basic',
  templateUrl: './basic.html'
})
export class GaugeBasicEditorComponent extends WidgetConsumer {

  get angle() : number{
    return this.widget.angle * 100;
  }

  set angle( a: number ){
    this.widget.angle;

    this.gauge.setOptions({ 
      angle: a / 100
    })
  }

  get lineWidth() : number{
    return this.widget.lineWidth * 100;
  }

  set lineWidth( a: number ){
    this.widget.lineWidth;

    this.gauge.setOptions({ 
      lineWidth: a / 100
    })
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    //this.widget.colors = this.colors ?? new GaugeColors(); 
  }
}
