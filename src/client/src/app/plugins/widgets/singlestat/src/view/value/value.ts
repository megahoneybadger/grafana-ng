import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { DataProvider } from '../../base/data-provider';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'singlestat-value',
  templateUrl: './value.html',
  styleUrls:[ './value.scss' ],
})
export class ValueLabelComponent extends WidgetConsumer {
  
  value: string;
  private valueSubs : Subscription;

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

    console.log( v + " " + isNaN( v ) );

    if( undefined == v || null == v || isNaN( v )){
      this.value = this.widget.value.noDataMessage;
    } else {
      
      let decimals = this.widget.value.decimals ?? 2;

      decimals = Math.min( 7, decimals );

      v = v.toFixed( decimals );

      this.value = `${v} kg`;
    }
  }
}

