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
  private valueSubs : Subscription;

  AxisUnitHelperRef = AxisUnitHelper;

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

