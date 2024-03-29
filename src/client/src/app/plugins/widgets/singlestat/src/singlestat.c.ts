import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DataProvider } from './base/data-provider';
import { WidgetConsumer } from './base/widget-consumer';
import ResizeObserver from 'resize-observer-polyfill';
import { GaugeComponent } from './view/gauge';
import { Gauge } from 'gaugeJS';
import { LabelPosition } from './singlestat.m';
import { SparklineComponent } from './view/sparkline/spark';

@Component({
  selector: 'widget',
  templateUrl: './singlestat.html',
  styleUrls:[ './singlestat.scss' ],
  providers:[
    DataProvider
  ]
})
export class SinglestatPanelComponent extends WidgetConsumer {

  @ViewChild('container') public container: ElementRef;
  @ViewChild('gauge') public gaugeHost: GaugeComponent;
  @ViewChild('spark') public sparkHost: SparklineComponent;
  LabelPositionRef = LabelPosition;

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
  }

  ngOnDestroy(){
    this.widget.component = undefined;

    this.dataProvider.destroy();

    this.sizeObserver?.unobserve(this.container.nativeElement);
  }

  refresh(){
    this.sparkHost?.rebuild();
    this.gaugeHost?.rebuild()
  }
}

