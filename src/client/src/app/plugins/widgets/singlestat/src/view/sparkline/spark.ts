import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { ColorHelper } from 'uilib';
import { DataProvider } from '../../base/data-provider';
import { WidgetConsumer } from '../../base/widget-consumer';
import sparkline from './spark-raw';

@Component({
  selector: 'singlestat-sparkline',
  template: `<svg class="sparkline spark-container" 
    width="100" 
    height="30" 
    [style.stroke]="sparkline.color"
    [style.fill]="fill"
    [attr.stroke-width]="sparkline.stroke" #spark></svg>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls:[ './spark.scss' ],
})
export class SparklineComponent extends WidgetConsumer {

  @ViewChild('spark') public canvas: ElementRef;
  values = []
  interval;

  get fill(){
    const c = ColorHelper.hexToRgb( this.sparkline.color );
    return `rgba(${c.r}, ${c.g}, ${c.b}, ${this.sparkline.fill / 10})`
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dataProvider: DataProvider ) {
      super( panel );

      
  }

  ngOnDestroy(){
    clearInterval(this.interval);
    //this.valueSubs?.unsubscribe();
  }

  ngAfterViewInit(){

    this.interval = setInterval( () => {

      this.shrink();

      this.values.push( this.getRandomInt( 10 ) );

      this.create();
    }, 1000 )

    
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  rebuild(){
    this.shrink();
    this.create();
  }

  private create(){
    const options = {
      interactive: this.sparkline.interactive,
      spotRadius: this.sparkline.radius,
    };

    sparkline(this.canvas.nativeElement, this.values, options );
  }

  private shrink(){
    if( this.values.length > this.sparkline.pointCount ){
      this.values.splice( 0, this.values.length - this.sparkline.pointCount );
    }
  }
}

