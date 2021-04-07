import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { finalize, mergeMap } from 'rxjs/operators';
import { Panel, TimeRangeStore, DataSourceService, PluginActivator,
	PANEL_TOKEN, TimeRange, Series, Moment } from 'common';
import { BindingRule, SvgModel } from "../svg.m";
import { SvgPanelComponent } from "dist/app/assets/plugins/svg/svg.c";
import { SVG, Svg } from "@svgdotjs/svg.js";
import { WidgetConsumer } from "./base-panel";
import { DataSet } from "../svg.m";

@Injectable()
export class DataProvider extends WidgetConsumer {
	timeSubs: Subscription;

	data$ = new EventEmitter<DataSet[]>();

	get range(): TimeRange{
		const range = <TimeRange>this.time.range.raw;
		const mod = this.panel?.widget?.time;

		return this
			.time
			.converter
			.modify( range, mod )
	}
  
	constructor (
		private pluginActivator: PluginActivator,
		private dsService: DataSourceService,
		private time: TimeRangeStore,
		@Inject( PANEL_TOKEN ) panel: Panel ) {

			super( panel );

			//this.panel.widget = this.panel.widget ?? new SvgModel();

			console.log( "svg data provider" )

			this.timeSubs = this
				.time
				.range$
				.pipe(
					mergeMap( _ => this.pluginActivator.createDataSourceMetricsBuilder( panel ) ),
					mergeMap( mb => mb.build( this.metrics, this.range )))
				.subscribe( 
					x => this.pull( <string>x ),
					e => this.onError( e ));
	}

	destroy(){
		this.timeSubs?.unsubscribe();
	}

	update(){
		this.time.tick();
	}

	private pull( request: string){

		if( request ){
			console.log( `pull: ${request}` );
		}
		
		if (!request) {
			this.onData([])
		} else {
			this.panel.loading = true;

			this
				.dsService
				.proxy( this.metrics.dataSource, request)
				.pipe(
					finalize(() => this.panel.loading = false ))
				.subscribe(
					x => this.onData( x ),
					e => this.onError( e.error?.details ?? "error: todo" ));
		}
	}

	private onData( x ){
		this.panel.error = undefined;

		this.data$.emit( x );
	}

	private onError(err) {
		console.log( err );

		this.panel.error = err;

		this.data$.emit( [] );
	}
}