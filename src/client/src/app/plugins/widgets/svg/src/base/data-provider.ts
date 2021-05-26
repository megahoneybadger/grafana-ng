import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import { Panel, TimeRangeStore, PluginActivator, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from "./base-panel";
import { DataSet, SvgModel } from "../svg.m";

@Injectable()
export class DataProvider extends WidgetConsumer {
	timeSubs: Subscription;

	data$ = new EventEmitter<DataSet[]>();
  
	constructor (
		private pluginActivator: PluginActivator,
		private time: TimeRangeStore,
		@Inject( PANEL_TOKEN ) panel: Panel ) {

			super( panel );

			this.panel.widget = this.panel.widget ?? new SvgModel();

			this.timeSubs = this
				.time
				.range$
				.pipe(
					mergeMap( _ => this.pluginActivator.dispatchDataSourceRequest( panel ) ) )
				.subscribe( x => this.data$.emit( x ));
	}

	destroy(){
		this.timeSubs?.unsubscribe();
	}

	update(){
		this.time.tick();
	}
}