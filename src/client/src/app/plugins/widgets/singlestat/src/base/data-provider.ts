import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import { Panel, TimeRangeStore, PluginActivator, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from "./widget-consumer";
import { DataSet, GaugeValueReducer, SinglestatModel } from "../singlestat.m";


@Injectable()
export class DataProvider extends WidgetConsumer {
	timeSubs: Subscription;

	private fieldsUpdate: BehaviorSubject<Map<string, string[]>> = new BehaviorSubject(undefined);
  readonly fields$: Observable<Map<string, string[]>> = this.fieldsUpdate.asObservable();

	private valueUpdate: BehaviorSubject<number> = new BehaviorSubject(null/*did not get any data yet**/);
  readonly value$: Observable<number> = this.valueUpdate.asObservable();

	get targets():string[]{
		return this
			.widget
			.metrics
			.targets
			.map( x => (<any>x).refId );
	}
  
	constructor (
		private pluginActivator: PluginActivator,
		private time: TimeRangeStore,
		@Inject( PANEL_TOKEN ) panel: Panel ) {

			super( panel );

			this.panel.widget = this.panel.widget ?? new SinglestatModel();

			this.timeSubs = this
				.time
				.range$
				.pipe( 
					mergeMap( _ => this
						.pluginActivator
						.dispatchDataSourceRequest( this.panel, _ => this.bind( [] ) ) ))
				.subscribe( x => this.bind( x ) );	
	}

	private bind( data: DataSet[] ){
		const columns = new Map<string, string[]>();
		const targets = [...this.targets];
		let targetData;
		
		const selector = this.widget.selector;

		let reducer = ( selector.default ) ? GaugeValueReducer.Last : selector.reducer;

		//console.log( "got data" );

		for( let i = 0; i < data.length; ++i ){
			const d = data[ i ];
			const t = targets[ i ];

			if( d.columns ){
				const cols = [... d.columns]
					.filter( x => x != "time" );
				
				columns.set( t, cols );
			}

			if( selector.default  ){
				const cols = d.columns?.filter( x => x != "time" );

				if( cols?.length > 0 && !targetData ){
					targetData = this.extractColumn( d, cols[ 0 ] );
				}
			} else {
				if( d.refId == selector.refId ){
					targetData = this.extractColumn( d, selector.field );
				}
			}
		}

		const v = this.reduce( targetData, reducer );

		this.valueUpdate.next( v );

		this.fieldsUpdate.next( new Map( columns ) );
	}

	private extractColumn( d, col: string ){
		const index = d.columns?.indexOf( col );
		let targetData = [];

		if( index != -1 ){
			targetData = d
				.values
				?.map( x => x[ index ] )
				.filter( x => x !== null );
		}

		return targetData;
	}

	private reduce( arr: any, reducer: GaugeValueReducer  ){
		if( !arr || !arr.length ){
			return;
		}
		
		switch( reducer ){
			case GaugeValueReducer.Last:
				const [last] = arr.slice(-1);
				return last;

			case GaugeValueReducer.First:
				const [first] = arr.slice(0);
				return first;

			case GaugeValueReducer.Max:
				return Math.max( ...arr );

			case GaugeValueReducer.Min:
				return Math.min( ...arr );

			 case GaugeValueReducer.Average:
				const sum = arr.reduce((a, b) => a + b, 0);
				return (sum / arr.length) || 0;
		}
	}

	destroy(){
		this.timeSubs?.unsubscribe();
	}

	update(){
		this.time.tick();
	}
}