import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { AxisUnitHelper, ColorHelper } from 'uilib';
import { DataProvider } from '../../base/data-provider';
import { WidgetConsumer } from '../../base/widget-consumer';
import sparkline from './spark-raw';

@Component({
  selector: 'singlestat-sparkline',
  template: `
    <svg class="sparkline" data-tooltip="bla bla"
      [attr.width]="width" 
      [attr.height]="sparkline.height" 
      [style.stroke]="sparkline.color"
      [style.fill]="fill"
      [attr.stroke-width]="sparkline.stroke" #spark>
    </svg>

    <span class="tooltip" #tip>{{tooltipValue}}</span>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls:[ './spark.scss' ],
  host: {'class': 'sparkline-host'}
})
export class SparklineComponent extends WidgetConsumer {

  @ViewChild('spark') public canvas: ElementRef;
  @ViewChild('tip') public tooltip: ElementRef;

  private valueSubs : Subscription;

  values = []
  tooltipValue: string;
  width: number;

  get fill(){
    const c = ColorHelper.hexToRgb( this.sparkline.color );
    return `rgba(${c.r}, ${c.g}, ${c.b}, ${this.sparkline.fill / 10})`
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dataProvider: DataProvider,
    private host: ElementRef ) {
      super( panel );

     
  }
  

  ngOnDestroy(){
    this.valueSubs?.unsubscribe();
    //this.valueSubs?.unsubscribe();
  }

  ngAfterViewInit(){
    this.valueSubs = this
      .dataProvider
      .value$
      .subscribe( x => this.onValueUpdate( x ) );
  }

  private onValueUpdate( v: any ){
    if( null === v || undefined === v || isNaN( v ) ){
      // this means no data recv yet
      return;
    }    

    this.shrink();

    this.values.push( v );

    this.create();
  }

  rebuild(){
    this.shrink();
    this.create();
  }

  private shrink(){
    if( this.values.length > this.sparkline.pointCount ){
      this.values.splice( 0, this.values.length - this.sparkline.pointCount );
    }
  }

  private create(){
    const rect = this.host.nativeElement.getBoundingClientRect();
    this.width = rect.width * this.sparkline.width / 100;

    const options = {
      interactive: this.sparkline.interactive,
      spotRadius: this.sparkline.spotRadius,
      onmousemove: ( ev, dp ) => this.onMouseMove( ev, dp ),
      onmouseout: _ => this.onMouseOut(),
    };

    sparkline(this.canvas.nativeElement, this.values, options );

    const spot = this
      .canvas
      .nativeElement
      .getElementsByClassName("sparkline--spot")[0]
    
    if( spot ){
      spot.style.fill=this.sparkline.spotColor;
      spot.style.stroke=this.sparkline.spotColor;
    }
    
    const cursor = this
      .canvas
      .nativeElement
      .getElementsByClassName("sparkline--cursor")[0];

    if( cursor ){
      cursor.style.stroke=this.sparkline.cursorColor;
    }
  }

  private onMouseMove( e, dp ){
    if( !this.sparkline.showTooltip ){
      return;
    }

    const label = this.label;
    let decimals = label.decimals ?? 2;
    decimals = Math.min( 7, decimals );

    this.tooltipValue = AxisUnitHelper.getFormattedValue( dp.value, label.unit, decimals )

    const rectHost = this.host.nativeElement.getBoundingClientRect();
    const rectCanvas = this.canvas.nativeElement.getBoundingClientRect();
    const shift = ( rectHost.width - rectCanvas.width ) / 2;

    const l = e.offsetX + shift + 5;
    const t = e.offsetY;

    this
      .tooltip
      .nativeElement
      .setAttribute('style', `left: ${l}px; top: ${t}px; display:block`);
  }

  private onMouseOut(){
    this
      .tooltip
      .nativeElement
      .setAttribute('style', `display: none`);
  }
}

