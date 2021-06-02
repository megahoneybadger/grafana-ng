import { Component, Inject, ViewChild } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN,
  PluginActivator, Series, TimeRange, TimeRangeStore, DispatcherLog, Metrics } from 'common';
import { EMPTY, Subscription } from 'rxjs';
import { catchError, finalize, mergeMap, tap } from 'rxjs/operators';

import { JsonExplorerComponent } from '../../../json-explorer/json-explorer'

@Component({
  selector: 'metrics-inpector',
  templateUrl: './inspector.html',
  styleUrls:[ './inspector.scss'],
})
export class MetricsInspectorComponent {
 
  allNodesExpanded: boolean = false;
  mocking: boolean = false;
  loading: boolean = false;
  timeSubs: Subscription;

  content:any;

  @ViewChild(JsonExplorerComponent) explorer;

  get metrics(){
		return this
			.panel
			?.widget
			?.metrics;
  }
  
  get range(): TimeRange{
		const range = <TimeRange>this.time.range.raw;
		const mod = this.panel?.widget?.time;

		return this
			.time
			.converter
			.modify( range, mod )
	}

  constructor(
    private pluginActivator: PluginActivator,
    @Inject( PANEL_TOKEN ) public panel: Panel,
    private time: TimeRangeStore){

      const log = new DispatcherLog();
      
      this.timeSubs = this
        .time
        .range$
        .pipe( 
          mergeMap( _ => this
            .pluginActivator
            .createDataSourceDispatcher( this.panel )
            .pipe( 
              catchError( e => EMPTY ), // keep stream alive
              tap( () => this.loading = true  ),
              mergeMap( r => r
                .dispatch( this.metrics, this.getRange( this.panel ), log )
                .pipe( 
                  finalize( () => this.loading = false ),
                  catchError( e => {
                    this.onError( e, log );
                    return EMPTY;
                  } ) ) ) ) ) )
        .subscribe( x => this.onData( x, log ));
  }

  private getRange( p: Panel ): TimeRange{
		const range = <TimeRange>this.time.range.raw;
		const mod = p?.widget?.time;

		return this
			.time
			.converter
			.modify( range, mod )
	}

  ngOnDestroy(){
    this.timeSubs?.unsubscribe();
  }
 
  onData( data: Series[], log?: DispatcherLog ){

    this.content = {
      request : {
        method: 'GET',
        url: this.getUrl( log?.proxy ),
        q: log?.argument
      },
      response : data
    }
  }

	onError(e, log?: DispatcherLog) {
    this.content = {
      request : {
        method: 'GET',
        url: this.getUrl( log?.proxy ),
        q: log?.argument
      },
      response : e
    }
	}

  private getUrl( proxy: boolean ) : string{
    return `/api/datasources/${proxy ? 'proxy' : 'query'}/${this.metrics.dataSource}`;
  }

  onCopyToClipboard(){
    const log = JSON.stringify( this.content  );
    navigator.clipboard.writeText(log);
  }
}
