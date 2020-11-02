import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { InfluxQuery } from '../metrics.m';

@Component({
  selector: 'metrics-designer',
  templateUrl: `./designer.html`
})
export class InfluxMetricsDesignerComponent {

  get metrics():any{
    return this
      .panel
      .widget
      .metrics;
  }

  constructor(@Inject( PANEL_TOKEN ) public panel: Panel){
  }

  onRemove( t: InfluxQuery ){
    const index = this.metrics.targets.indexOf( t );

    if( -1 !== index ){
      this.metrics.targets.splice( index, 1 );
    }
  }

  onMoveUp( t: InfluxQuery ){
    console.log( 'onMoveUp' );
  }

  onMoveDown( t: InfluxQuery ){
    console.log( 'onMoveDown' );
  }

  onDuplicate( t: InfluxQuery ){
    console.log( 'duplicate' );
  }
}