import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { ValueDispatcher } from '../../base/value-dispatcher';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'singlestat-value',
  templateUrl: './value.html',
  styleUrls:[ './value.scss' ],
})
export class ValueLabelComponent extends WidgetConsumer {
  
  value: string;
  private subsValue : Subscription;

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public binder: ValueDispatcher ) {
      super( panel );

      this.subsValue = this
        .binder
        .value$
        .subscribe( x => this.onValueUpdate( x ) );

  }

  ngOnDestroy(){
    this.subsValue?.unsubscribe();
  }

  onValueUpdate( v: any ) {
    if( undefined == v || null == v ){
      this.value = this.widget.value.noDataMessage;
    } else {
      
      let decimals = this.widget.value.decimals ?? 2;

      decimals = Math.min( 7, decimals );

      v = v.toFixed( decimals );

      this.value = `${v} kg`;
    }
  }
}

