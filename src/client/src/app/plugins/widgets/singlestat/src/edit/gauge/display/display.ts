import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { GaugePointerType } from '../../../singlestat.m';

@Component({
  selector: 'gauge-editor-display',
  templateUrl: './display.html'
})
export class GaugeDisplayEditorComponent extends WidgetConsumer {

  
  availablePointerTypes = DropDownComponent.wrapEnum(GaugePointerType);
  GaugePointerTypeRef = GaugePointerType;

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

    // radial pointer needs this call.
    this.rebuild();
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

  get pointerThickness() : number{
    return Math.trunc(this.widget.gauge.pointer.thickness * 100);
  }

  set pointerThickness( r: number ){
    r /= 100;
    this.widget.gauge.pointer.thickness = r;
    this.rebuild();
  }

  get show(): boolean{
    return this.widget.gauge.show;
  }

  set show( s: boolean ){
    this.widget.gauge.show = s;
  }

  get showColors(){
    return ( !this.widget.gauge.useThresholds ) || ( this.widget.thresholds.length <= 1 );
  }

  get pointerType(){
    return this.widget.gauge.pointer.type;
  }

  set pointerType( t: GaugePointerType ){
    this.widget.gauge.pointer.type = t;
  }

  get showLinearPointerSetting(){
    return ( this.pointerType == GaugePointerType.Linear );
  }

  get showRadialPointerSetting(){
    return ( this.pointerType == GaugePointerType.Radial );
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }
}
