import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../base/widget-consumer';
import {GaugePointer} from '../../singlestat.m'

@Component({
  selector: 'gauge-editor-display',
  templateUrl: './display.html'
})
export class GaugeDisplayEditorComponent extends WidgetConsumer {

  get angle() : number{
    return Math.trunc(this.widget.angle * 100);
  }

  set angle( a: number ){
    a /= 100;
    this.widget.angle = a;

    this.gauge.setOptions({ 
      angle: a
    })
  }

  get lineWidth() : number{
    return Math.trunc(this.widget.lineWidth * 100);
  }

  set lineWidth( w: number ){
    w /= 100;
    this.widget.lineWidth = w;

    this.gauge.setOptions({ 
      lineWidth: w
    })
  }

  get radius() : number{
    return Math.trunc(this.widget.radius * 100);
  }

  set radius( r: number ){
    r /= 100;
    this.widget.radius = r;

    this.gauge.setOptions({ 
      radiusScale: r
    })
  }

  get pointerLength() : number{
    return Math.trunc(this.widget.pointer.length * 100);
  }

  set pointerLength( r: number ){
    r /= 100;
    this.widget.pointer.length = r;

    this.gauge.setOptions({ 
      pointer:{
        length: r
      }
    })
  }

  get pointerWidth() : number{
    return Math.trunc(this.widget.pointer.width * 1000);
  }

  set pointerWidth( r: number ){

    
    r /= 1000;
    this.widget.pointer.width = r;

    this.gauge.setOptions({ 
      pointer:{
        strokeWidth: r
      }
    })
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    this.widget.pointer = this.widget.pointer ?? new GaugePointer(); 
  }

  ngOnInit(){
    console.log( this.widget );
  }
}
