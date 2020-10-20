import { EventEmitter, Inject, Injectable, Injector } from "@angular/core";
import { Subscription } from "rxjs";
import { finalize, mergeMap, tap } from 'rxjs/operators';
import { IPanel, TimeRangeStore, PluginLoader, PluginStore,
	QueryCompiler, DataSourceService, Plugin } from 'common';
import * as moment_ from 'moment';
const moment = moment_;

@Injectable()
export class DataProvider {
	request: string;

	data$ = new EventEmitter();
	error$ = new EventEmitter();

	timeSubs: Subscription;

	get metrics(){
		return this.panel?.widget?.metrics;
	}

	constructor (
		private pluginStore: PluginStore,
		private dsService: DataSourceService,
		private time: TimeRangeStore,
		private pluginLoader: PluginLoader,
		private injector: Injector,
		@Inject( 'panel' ) private panel: IPanel ) {

			this.timeSubs = this
				.time
				.range$
				.pipe(
					tap( _ => this.request = '' ),
					mergeMap( _ => this.pluginStore.getDataSource( "influx" ) ),
					mergeMap( ( p: Plugin ) => this.pluginLoader.loadDataSourceQueryCompiler( p, this.injector )),
					mergeMap( ( c: QueryCompiler ) => c.compile( this.metrics, time.range )))
				.subscribe( ( x: string ) => this.pull( x ));
	}

	destroy(){
		this.timeSubs?.unsubscribe();
	}

	pull( request: string){
		if (this.request === request) {
			return;
		}

		this.request = request;

		console.log( `pull: ${request}` );
		
		if (!request) {
			this.data$.emit([])
		} else {
			this.panel.loading = true;

			this
				.dsService
				.proxy( 6, request)
				.pipe(
					finalize(() => this.panel.loading = false ))
				.subscribe(
					x => this.data$.emit( x ),
					e => this.error$.emit(e.error));
		}
	}
}