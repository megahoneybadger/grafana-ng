import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';

import {Gauge} from 'gaugeJS';
import { DataProvider } from './base/data-provider';
import { ValueDispatcher } from './base/value-dispatcher';
import { WidgetConsumer } from './base/widget-consumer';

@Component({
  selector: 'widget',
  templateUrl: './singlestat.c.html',
  styleUrls:[ './singlestat.c.scss' ],
  providers:[
    DataProvider,
    ValueDispatcher
  ]
})
export class SinglestatPanelComponent extends WidgetConsumer {

  @ViewChild('canvas') public canvas: ElementRef;
  @ViewChild('gaugeValue') public value: ElementRef;

  private _gauge: Gauge;

  get gauge(): Gauge{
    return this._gauge;
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public binder: ValueDispatcher,
    public dataProvider: DataProvider ) {
      super( panel );
  }

  ngAfterViewInit(){

    this.widget.component = this;
    return;

    console.log( this.widget );

    var opts = {
      angle: this.widget.angle, 
      lineWidth: this.widget.lineWidth,
      radiusScale: this.widget.radius, 

      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false, 

      animationSpeed: this.widget.animationSpeed,
      
      pointer: {
        strokeWidth: this.widget.pointer.width,
        length: this.widget.pointer.length,
        color: this.widget.pointer.color,
      },

      colorStart: this.widget.colorStart,
      colorStop: this.widget.colorStop,
      strokeColor: this.widget.colorBackground,

      generateGradient: true,
      highDpiSupport: false,     // High resolution support
    };

    
    var gauge = new Gauge(this.canvas.nativeElement).setOptions(opts); 
    this._gauge = gauge;

    gauge.minValue = 0; // set max gauge value
    gauge.maxValue = 300; // set max gauge value
    gauge.animationSpeed =  this.widget.animationSpeed;
    // gauge.setMinValue(0);  // set min value
    //gauge.set(250); // set actual value

    this.widget.component = this;

    gauge.setTextField(this.value.nativeElement, 2);
  }

  ngOnDestroy(){
    this.widget.component = undefined;

    this.dataProvider.destroy();
    this.binder.destroy();
  }

  onValueClick(){
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    canvas.removeAttribute("width");
    canvas.removeAttribute("height");
    canvas.removeAttribute("style");

    delete canvas.G__height
    delete canvas.G__width;

    setTimeout( () => {
      this.ngAfterViewInit()
      this.dataProvider.update();
    }, 1000 );

    //this.gauge.render();
    
  }
}

