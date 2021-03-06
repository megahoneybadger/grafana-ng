import { Directive, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN, Series, Metrics } from 'common';
import { Observable } from 'rxjs';
import { CommandHelper, RedisQuery } from '../../metrics.m';

@Directive()
export class BaseQueryComponent {
  readonly REMOVE = '--remove--';
	readonly ADD = '--add--';
  
  @Input() query : RedisQuery;
  @Output() change = new EventEmitter();
  @Output() rebuild = new EventEmitter();
  
  CommandHelperRef = CommandHelper;

  get metrics(): Metrics{
    return this
      .panel
      .widget
      .metrics;
  }

  get dataSourceId(): number{
    return this.metrics.dataSource;
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

  needRebuild(){
    this.rebuild.emit();
  }

  build( fireRebuild: boolean = true ){
    // new InfluxMetricsBuilder()
    //   .build( {targets: [this.query], dataSource: 0 }  )
    //   .subscribe( x =>{
    //     this.queryAsString = x

    //     if( fireRebuild ){
    //       this.onRebuild();
    //     }
    //   });
  }

  onRebuild(){

  }
}