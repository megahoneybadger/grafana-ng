import { Directive, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN, Series, Metrics } from 'common';
import { Observable } from 'rxjs';

import { InfluxMetricsBuilder } from '../../builder';

import { InfluxQuery, Tag, Field } from '../../metrics.m';

@Directive()
export class BaseQueryComponent {
  readonly REMOVE = '--remove--';
  
  @Input() query : InfluxQuery;
  @Output() change = new EventEmitter();
  queryAsString: string;

  get metrics(): Metrics{
    return this
      .panel
      .widget
      .metrics;
  }

  get dataSourceId(): number{
    return this.metrics.dataSource;
  }

  get tags() : Tag[]{
    return this.query.tags;
  }

  get fields(): Field[]{
    return this.query.fields;
  }

  constructor(
    @Inject( PANEL_TOKEN ) public panel: Panel,
    public dsService: DataSourceService){
  }

  proxy( command: string ) : Observable<Series[] > {
    return this
      .dsService
      .proxy( this.dataSourceId, command)
  }

  build(){
    new InfluxMetricsBuilder()
      .build( {targets: [this.query], dataSource: 0 }  )
      .subscribe( x =>{
        this.queryAsString = x
        this.onRebuild();
      });
  }

  onRebuild(){

  }
}