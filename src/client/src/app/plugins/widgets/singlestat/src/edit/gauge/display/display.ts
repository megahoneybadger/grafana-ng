import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';

@Component({
  selector: 'gauge-editor-display',
  templateUrl: './display.html'
})
export class GaugeDisplayEditorComponent extends WidgetConsumer {

  get angle() : number{
    return Math.trunc(this.widget.gauge.angle * 100);
  }

  set angle( a: number ){
    a /= 100;
    this.widget.gauge.angle = a;

    this.gauge.setOptions({ 
      angle: a
    })
  }

  get lineWidth() : number{
    return Math.trunc(this.widget.gauge.lineWidth * 100);
  }

  set lineWidth( w: number ){
    w /= 100;
    this.widget.gauge.lineWidth = w;

    this.gauge.setOptions({ 
      lineWidth: w
    })
  }

  get radius() : number{
    return Math.trunc(this.widget.gauge.radius * 100);
  }

  set radius( r: number ){
    r /= 100;
    this.widget.gauge.radius = r;

    this.gauge.setOptions({ 
      radiusScale: r
    })
  }

  get pointerLength() : number{
    return Math.trunc(this.widget.gauge.pointer.length * 100);
  }

  set pointerLength( r: number ){
    r /= 100;
    this.widget.gauge.pointer.length = r;

    this.gauge.setOptions({ 
      pointer:{
        length: r
      }
    })
  }

  get pointerWidth() : number{
    return Math.trunc(this.widget.gauge.pointer.width * 1000);
  }

  set pointerWidth( r: number ){
    r /= 1000;
    this.widget.gauge.pointer.width = r;

    this.gauge.setOptions({ 
      pointer:{
        strokeWidth: r
      }
    })
  }

  get show(): boolean{
    return this.widget.gauge.show;
  }

  set show( s: boolean ){
    this.widget.gauge.show = s;
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }
}
