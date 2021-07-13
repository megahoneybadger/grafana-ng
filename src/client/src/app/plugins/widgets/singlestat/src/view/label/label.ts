import { Component, ElementRef, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { AxisUnitHelper } from 'uilib';
import { DataProvider } from '../../base/data-provider';
import { WidgetConsumer } from '../../base/widget-consumer';
import { MappingType } from '../../singlestat.m';

@Component({
  selector: 'singlestat-label',
  templateUrl: './label.html',
  styleUrls:[ './label.scss' ],
})
export class LabelComponent extends WidgetConsumer {
  
  value: string;
  nvalue: number;
  private valueSubs : Subscription;
  gotData: boolean;

  AxisUnitHelperRef = AxisUnitHelper;

  get foreground(){
    return ( !this.isNumberValue || !this.widget.label.foreground ) ? undefined : this.getColor();
  }

  get foregroundPostfix(){
    return ( !this.widget.label.postfixForeground ) ? undefined : this.getColor();
  }

  get foregroundPrefix(){
    return ( !this.widget.label.prefixForeground ) ? undefined : this.getColor();
  }

  get isNumberValue(){
    const nan = 
      ( undefined == this.nvalue ) ||
      ( null == this.nvalue ) ||
      ( isNaN( this.nvalue ));

    return !nan;
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dataProvider: DataProvider,
    private host: ElementRef ) {
      super( panel );

      this.valueSubs = this
        .dataProvider
        .value$
        .subscribe( x => this.onValueUpdate( x ) );

  }

  ngOnDestroy(){
    this.valueSubs?.unsubscribe();
  }

  onValueUpdate( v: any ) {
    if( null === v ){
      // this means no data recv yet
      return;
    }    
    const label = this.label;
    this.nvalue = v;

    if( !this.value ){
      // this is a resize label rendering fix:
      // if gauge and label render together they violate
      // container size during first rendring
      setTimeout( () => this.component?.gaugeHost?.rebuild() )
    }

    if( undefined === v || isNaN( v )){
      this.value = label.noDataMessage;
    } else {
      
      let decimals = label.decimals ?? 2;
      decimals = Math.min( 7, decimals );

      const mapValue = this.tryApplyMapping( v, decimals )

      this.value = ( mapValue !== undefined ) ?
        mapValue : AxisUnitHelper.getFormattedValue( v, label.unit, decimals )
    }

    this.changeBackground();
  }

  private tryApplyMapping( v, decimals: number ) {
    const mappings = this.widget.mappings;
    v = Math.trunc(v * Math.pow(10, decimals)) / Math.pow(10, decimals);

    for( let i = 0; i < mappings?.length; ++i ){
      const m = mappings[ i ];

      if( m.type == MappingType.Discrete ){
        if( v === m.value ){
          return m.text
        }
      } else {
        const shouldMap = 
          ( v >= m.from && m.to === undefined ) ||
          ( undefined === m.from && v < m.to ) ||
          ( v >= m.from && v < m.to );

        if( shouldMap ){
          return m.text
        }
      }
    }
  }

  getColor(){
    const thresholds = this.widget.thresholds;
    const arr = thresholds
      .filter( x => x.value !== undefined )
      .sort( ( a, b ) => b.value - a.value );

    let color;

    for( let i = 0; i < arr.length; ++i ){
      const t = arr[ i ];

      if( this.nvalue >= t.value ){
        color = t.color;
        break;
      }
    }

    if( !color && thresholds.length > 0 ){
      color = thresholds[ 0 ].color;
    }

    return color;
  }

  changeBackground(){
    const panelContainer = this
      .host
      .nativeElement
      .closest(".panel-container");

    if( !panelContainer ){
      return;
    }

    const color = this.getColor();

    if( this.widget.label.background && this.nvalue !== undefined && color ){
      panelContainer.style.background = color;
    } else {
      panelContainer?.style.removeProperty("background");
    }
  }
}

