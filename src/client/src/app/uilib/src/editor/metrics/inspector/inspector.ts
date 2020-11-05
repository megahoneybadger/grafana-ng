import { Component, Inject, ViewChild } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN,
  PluginActivator, Series, TimeRange, TimeRangeStore } from 'common';
import { Subscription } from 'rxjs';
import { finalize, mergeMap } from 'rxjs/operators';
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
		private dsService: DataSourceService,
    @Inject( PANEL_TOKEN ) public panel: Panel,
    private time: TimeRangeStore){
      this.timeSubs = this
        .time
        .range$
        .pipe(
          mergeMap( _ => this.pluginActivator.createDataSourceMetricsBuilder( panel ) ),
          mergeMap( mb => mb.build( this.metrics, this.range )))
        .subscribe( 
          x => this.pull( x ),
          e => this.onError( e ));
  }

  ngOnDestroy(){
    this.timeSubs?.unsubscribe();
  }

  private pull( request: string){
		if (!request) {
			this.onData(request, []);
		} else {
			this.loading = true;

			this
				.dsService
				.proxy( this.metrics.dataSource, request)
				.pipe(
					finalize(() => this.loading = false ))
				.subscribe(
					x => this.onData( request, x ),
					e => this.onError( e.error?.details ?? "error: todo" ));
		}
  }
  
  onData( request: string, data: Series[] ){

    this.content = {
      request : {
        method: 'GET',
        url: `api/datasources/proxy/${this.metrics.dataSource}`,
        q: request
      },
      response : data
    }
  }

	onError(err) {
		
	}

  onCopyToClipboard(){

  }
}
