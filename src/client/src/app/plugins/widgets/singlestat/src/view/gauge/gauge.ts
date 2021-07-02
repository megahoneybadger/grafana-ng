import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { WidgetConsumer } from '../../base/widget-consumer';
import { Gauge } from 'gaugeJS';
import { DataProvider } from '../../base/data-provider';

@Component({
  selector: 'singlestat-gauge',
  template: '<canvas class="full-height green-border" #canvas ></canvas>',
  styleUrls:[ './gauge.scss' ]
})
export class GaugeComponent extends WidgetConsumer {
  
  private readonly DEFAULT_MIN = 0;
  private readonly DEFAULT_MAX = 100;

  @ViewChild('canvas') public canvas: ElementRef;
  private _gauge: Gauge;
  private valueSubs : Subscription;
  private value: number;

  get gauge(): Gauge{
    return this._gauge;
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dataProvider: DataProvider ) {
      super( panel );

      this.valueSubs = this
        .dataProvider
        .value$
        .subscribe( v => {
          this.value = v;
          this.gauge?.set( v );
        } );
  }

  ngAfterViewInit(){
    this.create();
  }

  ngOnDestroy(){
    this.valueSubs?.unsubscribe();
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
        strokeWidth: /*wg.pointer.width*/0,
        length: wg.pointer.length,
        color: wg.pointer.color,
      },
      

      colorStart: wg.foreground,
      colorStop: wg.foreground,
      strokeColor: wg.background,

      generateGradient: true,
      highDpiSupport: false,     // High resolution support
    };

    var gauge = new Gauge(this.canvas.nativeElement).setOptions(opts); 
    this._gauge = gauge;

    gauge.animationSpeed =  1;
    gauge.minValue = this.widget.gauge.min ?? this.DEFAULT_MIN;  
    gauge.maxValue = this.widget.gauge.max ?? this.DEFAULT_MAX;  

    gauge.set(this.value); // set actual value

    this.setStaticZones()
  }

  private setStaticZones(){
    const shouldUseZones = 
      ( this.widget.gauge.useThresholds ) &&
      ( this.thresholds?.length > 1 );

    let zones = null;
    let labels = null;

    if( shouldUseZones ){
      zones = [];
      labels = [];
      let max = this.widget.gauge.max ?? this.DEFAULT_MAX;
      let min = this.widget.gauge.min ?? this.DEFAULT_MIN;
      let ormax = max;
      let ormin = min;

      for( let i = this.thresholds.length - 1; i >= 0; --i ){
        const t = this.thresholds[ i ];

        if( t.value < ormin || t.value > ormax )
          continue
  
        const zone = {
          strokeStyle: t.color,
          min: t.value ?? min,
          max: max
        }
  
        max = zone.min;
  
        zones.push( zone );
      }

      labels = this
        .thresholds
        .filter( x => undefined !== x.value && x.value >= ormin && x.value <= ormax )
        .map( x => x.value );

      labels = [ 
        this.widget.gauge.min ?? this.DEFAULT_MIN,
        ...labels,
        this.widget.gauge.max ?? this.DEFAULT_MAX ]
    }

    this._gauge.setOptions({ 
      staticZones: zones
    })

    if( labels ){
      const labelSettings =  {
        font: "10px sans-serif",  // Specifies font
        labels: labels,
        color: this.widget.gauge.labels.color,  
        fractionDigits: 0 //this.widget.label.decimals ?? 0  
      }

      this._gauge.setOptions({ 
       staticLabels: this.widget.gauge.labels.show ? labelSettings : null
      })
    }
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

