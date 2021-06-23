import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { ValueDispatcher } from '../../base/value-dispatcher';
import { WidgetConsumer } from '../../base/widget-consumer';
import { Gauge } from 'gaugeJS';

@Component({
  selector: 'singlestat-gauge',
  template: '<canvas class="full-height green-border" #canvas ></canvas>',
  styleUrls:[ './gauge.scss' ],
})
export class GaugeComponent extends WidgetConsumer {
  
  @ViewChild('canvas') public canvas: ElementRef;
  private _gauge: Gauge;
  private subsValue : Subscription;
  private value: number;

  get gauge(): Gauge{
    return this._gauge;
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public binder: ValueDispatcher ) {
      super( panel );

      console.log( "create gauge" )

      this.subsValue = this
        .binder
        .value$
        .subscribe( x => this.onValueUpdate( x ) );
  }

  ngAfterViewInit(){
    this.create();
  }

  ngOnDestroy(){
    this.subsValue?.unsubscribe();
  }

  private onValueUpdate( v: number ){
    this.value = v;
    this.gauge?.set( v );
  }

  rebuild(){
    console.log( "rebuild" );
    this.clean();
    this.create();
  }

  private create(){
    if( !this.canvas ){
      return;
    }

    const wg = this.widget.gauge;

    var opts = {
      angle: wg.angle, 
      lineWidth: wg.lineWidth,
      radiusScale: wg.radius, 

      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false, 

      pointer: {
        strokeWidth: wg.pointer.width,
        length: wg.pointer.length,
        color: wg.pointer.color,
      },

      colorStart: wg.colorStart,
      colorStop: wg.colorStop,
      strokeColor: wg.colorBackground,

      generateGradient: true,
      highDpiSupport: false,     // High resolution support
    };

    
    var gauge = new Gauge(this.canvas.nativeElement).setOptions(opts); 
    this._gauge = gauge;

    gauge.minValue = 0; // set max gauge value
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed =  1;
    // gauge.setMinValue(0);  // set min value
    gauge.set(this.value); // set actual value

    //gauge.setTextField(this.value.nativeElement, 2);
  }

  private clean(){
    if( !this.canvas ){
      return;
    }

    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    canvas.removeAttribute("width");
    canvas.removeAttribute("height");
    canvas.removeAttribute("style");

    delete canvas.G__height
    delete canvas.G__width;
  }
}

