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
    const nan = 
      ( undefined == this.nvalue ) ||
      ( null == this.nvalue ) ||
      ( isNaN( this.nvalue ));

    if( nan || !this.widget.label.foreground ){
      return;
    }

    const thresholds = this.widget.thresholds;
    const arr = thresholds.sort( ( a, b ) => a.value - b.value );
    let color;
    
    for( let i = 0; i < arr.length; ++i ){
      const t = arr[ i ];
      const isFirst = ( i == 0 );
      const islast = ( i == arr.length - 1 );

      const shoulduse = 
        ( isFirst && t.value >= this.nvalue ) ||
        ( islast && t.value < this.nvalue ) ||
        ( !isFirst && !islast && t.value > arr[ i - 1 ].value && t.value <= arr[ i ].value );

      if( shoulduse ){
        color = t.color;
        break;
      } 
    }

    return color;
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
}

