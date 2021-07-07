import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { WidgetConsumer } from '../base/widget-consumer';
import { Gauge } from 'gaugeJS';
import { DataProvider } from '../base/data-provider';
import { GaugePointerType } from '../singlestat.m';

@Component({
  selector: 'singlestat-gauge',
  template: '<canvas class="full-height green-border" #canvas ></canvas>'
})
export class GaugeComponent extends WidgetConsumer {
  
  private readonly DEFAULT_MIN = 0;
  private readonly DEFAULT_MAX = 100;

  @ViewChild('canvas') public canvas: ElementRef;
  private _gauge: Gauge;
  private valueSubs : Subscription;
  private value: number;

  originalRenderFunc : Function;

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

      // monkey patching for rendering: we want to add radial pointer
      //this.originalRenderFunc = Gauge.prototype.render;
      // Gauge.prototype.render = () => {
      //   this.originalRenderFunc.apply( this._gauge );
  
      //   this.renderRadialPointer();
      // }
  }

  ngOnDestroy(){
    //Gauge.prototype.render = this.originalRenderFunc;
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

      limitMax: true,     // If false, max value increases automatically if value > maxValue
      limitMin: true, 

      pointer: this.getPointerOptions(),
      renderTicks: this.getTicksOptions(),

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
    this.setLabels();
    this.renderRadialPointer();
  }

  private getPointerOptions(){
    const wg = this.widget.gauge;

    return {
      strokeWidth:  this.widget.gauge.pointer.type === GaugePointerType.Linear ? wg.pointer.width: 0,
      length: wg.pointer.length,
      color: wg.pointer.color,
    };
  }

  private getTicksOptions(){
    const t = this.widget.gauge.ticks;

    if( !t.show ){
      return null;
    }

    return {
      divisions: t.divisions,
      divWidth: t.divWidth,
      divLength: t.divLength,
      divColor: t.divColor,

      subDivisions: t.subDivisions,
      subWidth: t.subDivWidth,
      subLength: t.subDivLength,
      subColor: t.subDivColor
    }
  }  

  private setStaticZones(){
    const shouldUseZones = 
      ( this.widget.gauge.useThresholds ) &&
      ( this.thresholds?.length > 1 );

    let zones = null;

    if( shouldUseZones ){
      zones = [];
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
    }

    this._gauge.setOptions({ 
      staticZones: zones
    })
  }

  private setLabels(){
    if( this.thresholds?.length <= 1 ){
      return
    }

    let max = this.widget.gauge.max ?? this.DEFAULT_MAX;
    let min = this.widget.gauge.min ?? this.DEFAULT_MIN;

    let labels = this
      .thresholds
      .filter( x => undefined !== x.value && x.value >= min && x.value <= max )
      .map( x => x.value );

    labels = [ 
      this.widget.gauge.min ?? this.DEFAULT_MIN,
      ...labels,
      this.widget.gauge.max ?? this.DEFAULT_MAX ]

    const size = 0.1 * this.widget.gauge.labels.fontSize;

    const labelSettings =  {
      font: `${size}px Roboto`,  // Specifies font
      labels: labels,
      color: this.widget.gauge.labels.color,  
      fractionDigits: 0 //this.widget.label.decimals ?? 0  
    }

    this._gauge.setOptions({ 
     staticLabels: this.widget.gauge.labels.show ? labelSettings : null
    })
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
  
  private renderRadialPointer(){

    if( this.widget.gauge.pointer.type !== GaugePointerType.Radial ){
      return;
    }

    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');

    const ref = this._gauge.options.staticZones;
    let markerZone;
    for (var j = 0, len = ref?.length; j < len; j++) {
      const zone = ref[j];

      if( this._gauge.displayedValue >= zone.min && this._gauge.displayedValue < zone.max ){
        markerZone = zone;
      }
    }

    let w = this.canvas.nativeElement.width / 2;
    let h = (this.canvas.nativeElement.height * this._gauge.paddingTop + this._gauge.availableHeight) - ((this._gauge.radius + this._gauge.lineWidth / 2) * this._gauge.extraPadding);

    if( !markerZone ){
      return;
    }

    ctx.save();
    ctx.translate(w, h);

    
    
    ctx.strokeStyle = markerZone.strokeStyle;

    const radius = this._gauge.radius * this._gauge.options.radiusScale;
    const displayedAngle = this._gauge.getAngle(this._gauge.displayedValue);

    const angle = this._gauge.options.angle;
    const startAngle = (1 + angle) * Math.PI;
    const endAngle = displayedAngle;
    
    const thickness = this._gauge.availableHeight * this.widget.gauge.pointer.thickness;
    
    let offset = 0.5 * ( ctx.lineWidth + thickness ) + 5;
    let barRadius = radius - offset;
    //console.log( `${radius} | ${ctx.lineWidth} | ${thickness} | ${barRadius} | ${offset}` );
    ctx.lineWidth = thickness;

    if( barRadius > 0 ){
      ctx.beginPath();
      ctx.arc(0, 0, barRadius, startAngle, endAngle, false);
      ctx.stroke();

      ctx.strokeStyle = "#262626";

      ctx.beginPath();
      ctx.arc(0, 0, barRadius, endAngle,  (2 - angle) * Math.PI, false);
      ctx.stroke();
    }

    ctx.restore();
  }
}

