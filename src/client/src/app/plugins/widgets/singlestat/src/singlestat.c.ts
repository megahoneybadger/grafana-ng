import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DataProvider } from './base/data-provider';
import { WidgetConsumer } from './base/widget-consumer';
import ResizeObserver from 'resize-observer-polyfill';
import { GaugeComponent } from './view/gauge/gauge';
import { Gauge } from 'gaugeJS';

@Component({
  selector: 'widget',
  templateUrl: './singlestat.c.html',
  styleUrls:[ './singlestat.c.scss' ],
  providers:[
    DataProvider
  ]
})
export class SinglestatPanelComponent extends WidgetConsumer {

  @ViewChild('container') public container: ElementRef;
  @ViewChild('label') public labelHost: ElementRef;
  
  @ViewChild('gauge') public gaugeHost: GaugeComponent;

  sizeObserver: ResizeObserver;

  get gauge(): Gauge{
    return this.gaugeHost.gauge;
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dataProvider: DataProvider ) {
      super( panel );
  }

  ngAfterViewInit(){
    this.widget.component = this;

    this.sizeObserver = new ResizeObserver( x => this.refresh() );

    this.sizeObserver.observe( this.container.nativeElement);
    //this.sizeObserver.observe( (<any>this.labelHost).host.nativeElement );

    //console.log( this.labelHost );
    
    //this.sizeObserver.observe( (<ElementRef>this.gaugeHost).nativeElement);

    //setTimeout( () => this.refresh(), 50 );

  }

  ngOnDestroy(){
    this.widget.component = undefined;

    this.dataProvider.destroy();

    this.sizeObserver?.unobserve(this.container.nativeElement);
  }

  refresh(){
    this.gaugeHost?.rebuild()
  }
}

