import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN, TimeRangeStore } from 'common';

import * as _ from 'lodash';
import { RedisQuery } from '../metrics.m';

@Component({
  selector: 'metrics-designer',
  templateUrl: `./designer.html`
})
export class RedisMetricsDesignerComponent {

  get metrics():any{
    return this
      .panel
      .widget
      .metrics;
  }

  get targets(): RedisQuery[] {
    return this.metrics.targets;
  }

  get nextRefId(){
    let index = 0;

    while( true ){
      let candidate = String
        .fromCharCode(65 + index++)
        .toUpperCase();

      let p = Math.round( index / 25 );

      if( p > 0 ){
        candidate += p;
      }

      let duplicate = this.targets?.find( x => candidate == x.refId );

      if( !duplicate ){
        return candidate;
      }
    }
  }


  constructor(
    @Inject( PANEL_TOKEN ) public panel: Panel,
    private time: TimeRangeStore){
      
  }

  ngOnInit(){
    if( !this.targets?.length ){
      this.onAddQuery();
    }
  }

  onAddQuery(){
    const q = new RedisQuery();

    q.refId = this.nextRefId;
    //q.groupBy.push( new GroupByObject( GroupByOption.Time, [MetricVars.TIME_INTERVAL] ) );

    this.metrics.targets = this.targets ?? [];
    this.targets.push( q );
  }

  onRemove( t: RedisQuery ){
    const index = this.targets.indexOf( t );

    if( -1 !== index ){
      this.targets.splice( index, 1 );
      this.rebuild();
    }
  }

  onDuplicate( t: RedisQuery ){
    const copy = _.cloneDeep( t )
    copy.refId = this.nextRefId;
    this.targets.push( copy );
  }

  onMoveUp( t: RedisQuery ){
    const index = this.targets.indexOf( t );

    if( index <= 0 ){
      return;
    }
    
		this.targets.splice( index, 1);
		this.targets.splice( index - 1, 0, t )
  }

  onMoveDown( t: RedisQuery ){
    const index = this.targets.indexOf( t );

    if( -1 == index || index == this.targets.length - 1 ){
      return;
    }

    this.targets.splice( index, 1);
		this.targets.splice( index + 1, 0, t )
  }

  rebuild(){
    //this.time.tick();
    // ??
  }

  
}