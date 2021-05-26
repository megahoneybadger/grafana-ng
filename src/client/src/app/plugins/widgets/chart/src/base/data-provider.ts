import { EventEmitter, Inject, Injectable } from "@angular/core";
import { of, Subscription } from "rxjs";
import { concatMap, finalize, mergeMap, tap } from 'rxjs/operators';
import { Panel, TimeRangeStore, DataSourceService, PluginActivator,
	PANEL_TOKEN, TimeRange, Series, Moment } from 'common';
import { Chart, ChartData, DataSet } from '../chart.m';
import { DisplayManager } from '../view/display-manager';

@Injectable()
export class DataProvider {
	timeSubs: Subscription;

	data$ = new EventEmitter<ChartData>();

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

	constructor (
		private pluginActivator: PluginActivator,
		private dispay: DisplayManager,
		private time: TimeRangeStore,
		@Inject( PANEL_TOKEN ) private panel: Panel ) {

			this.panel.widget = this.panel.widget ?? new Chart();

			this.timeSubs = this
				.time
				.range$
				.pipe(
					tap( () => this.panel.loading = true ),
					mergeMap( _ => this.pluginActivator.createDataSourceDispatcher( panel ) ),
					mergeMap( r => r.dispatch( this.metrics, this.range )))
				.subscribe( 
					x => this.onData( x ),
					e => this.onError( e.error?.details ?? "failure to get data" ));
	}

	destroy(){
		this.timeSubs?.unsubscribe();
	}

	update(){
		this.time.tick();
	}

	private onData( x: Array<Series> ){
		this.panel.loading = false;
		this.panel.error = undefined;

		this.data$.emit( {
			datasets: this.toDataSets( x )
		} );
	}

	private onError(err) {
		this.panel.error = err;
		this.panel.loading = false;

		this.data$.emit( {
			datasets: []
		} );
	}
		
	private toDataSets(data: Series[]) : DataSet[] {
		if (!data || 0 === data.length) {
			return [];
		}

		//console.log( data );

		let dataSets = [];
		let totalIndex = 0;

		data.forEach(serie => {
			if( !serie.columns )
				return;

			const columns = serie.columns.slice(1);

			const arr = [...columns.map((el, index) =>
				this.toDataSet(serie, index + 1, totalIndex++))]
				.filter(x => x);

			dataSets = [...dataSets, ...arr];

			dataSets.forEach( x => this.dispay.setup( x ) )
		});

		return dataSets;
	}

	private toDataSet(serie: Series, index: number, totalIndex:number) : DataSet {
		const values = serie
			.values
			.map(x => {
				const isNull = (null == x[index]);

				return {
					x: Moment.valueOf( x[0] ),
					y: (isNull) ? x[index] : x[index],
					isNull: isNull,
				}
			})

		const filteredValues = values
			.map(p => p.y)
			.filter(p => null != p)
			.map(p => parseFloat(p));

		if (0 == filteredValues.length) {
			return;
		}

		const avg = (filteredValues.reduce((a, b) => a + b) / filteredValues.length)

		const allNulls = filteredValues.every(x => x == null);
		const allZeros = filteredValues.every(x => x == 0);

		const ds = {
			label: this.generateDataSetName(serie, index),
			data: values,
			lineTension: 0,
			min: Math.min(...filteredValues),
			max: Math.max(...filteredValues),
			total: filteredValues.reduce( ( a, b ) => a + b, 0 ),
			avg: avg,
			current: filteredValues.slice(-1)[0],
			allNulls: allNulls,
			allZeros: allZeros,
			index: totalIndex,
			pointRadius:0,
			borderColor: "#ff0000"
		}

		return ds;
	}

	private generateDataSetName( serie: Series, index: number ): string{
		let root = `${serie.name}.${serie.columns[ index ]}`;

		let tags = '';
		var keys = Object.keys(serie.tags);
		var keyIndex = 0;

		for(var key in serie.tags){
			tags += `${keyIndex > 0 ? ', ': ''}${key}: ${serie.tags[ key ]}` ;
			keyIndex++
		}

		// serie.tags.forEach( ( t, index ) => tags = `${tags}${index > 0 ? ',': ''} tag` )

		if( tags ){
			root = `${root} {${tags}}`;
		}

		return root;
	}
}