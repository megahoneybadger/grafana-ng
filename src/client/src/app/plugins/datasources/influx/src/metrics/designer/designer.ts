import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN, TimeRangeStore } from 'common';
import { InfluxQuery } from '../metrics.m';
import * as _ from 'lodash';

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

  constructor(
    @Inject( PANEL_TOKEN ) public panel: Panel,
    private time: TimeRangeStore){

  }

  onRemove( t: InfluxQuery,  ){
    const index = this.metrics.targets.indexOf( t );

    if( -1 !== index ){
      this.metrics.targets.splice( index, 1 );
      this.rebuild();
    }
  }

  onMoveUp( t: InfluxQuery ){
    
  }

  onMoveDown( t: InfluxQuery ){
    console.log( 'onMoveDown' );
  }

  onDuplicate( t: InfluxQuery ){
    this.metrics.targets.push( _.cloneDeep( t ) )
  }

  rebuild(){
    //console.log( this.metrics );
    this.time.tick();
  }
}