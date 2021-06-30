import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { AxisUnitHelper } from 'uilib';
import { DataProvider } from '../../base/data-provider';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'singlestat-label',
  templateUrl: './label.html',
  styleUrls:[ './label.scss' ],
})
export class LabelComponent extends WidgetConsumer {
  
  value: string;
  nvalue: number;
  private valueSubs : Subscription;

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
    public dataProvider: DataProvider ) {
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
    const label = this.label;
    this.nvalue = v;

    if( undefined == v || null == v || isNaN( v )){
      this.value = label.noDataMessage;
    } else {
      
      let decimals = label.decimals ?? 2;
      decimals = Math.min( 7, decimals );

      this.value = AxisUnitHelper
        .getFormattedValue( v, label.unit, decimals )
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

  onClick(){
    console.log( 'click on prefix' );
  }
}

