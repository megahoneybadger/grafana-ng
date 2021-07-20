import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import { Panel, TimeRangeStore, PluginActivator, PANEL_TOKEN, DataSet } from 'common';
import { WidgetConsumer } from "./widget-consumer";
import { GridModel, GridTransform, GridSchema, GridSchemaItem } from "../grid.m";



@Injectable()
export class DataProvider extends WidgetConsumer {
	timeSubs: Subscription;

	// private valueUpdate: BehaviorSubject<number> = new BehaviorSubject(null/*did not get any data yet**/);
  // readonly value$: Observable<number> = this.valueUpdate.asObservable();
	
	private schemaChange: BehaviorSubject<GridSchema> = new BehaviorSubject(null/*did not get any data yet**/);
  readonly schema$: Observable<GridSchema> = this.schemaChange.asObservable();

  
	constructor (
		private pluginActivator: PluginActivator,
		private time: TimeRangeStore,
		@Inject( PANEL_TOKEN ) panel: Panel ) {
			super( panel );

			this.panel.widget = this.panel.widget ?? new GridModel();

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
		if (!data || 0 === data.length) {
			return [];
		}

		switch( this.widget.transform ){
			case GridTransform.TimeSeriesToRows:
				this.bindToRows();
				break;

			case GridTransform.TimeSeriesToColumns:
				this.bindToColumns(data);
				break;

				default:
					console.log( "todo" );
					break;
		}

		// data.forEach(serie => {
		// 	if( !serie.columns )
		// 		return;

		// 	const columns = serie.columns;

		// 	console.log( columns )

		// 	// const arr = [...columns.map((el, index) =>
		// 	// 	this.toDataSet(serie, index + 1, totalIndex++))]
		// 	// 	.filter(x => x);

		// 	//dataSets = [...dataSets, ...arr];

		// 	//dataSets.forEach( x => this.dispay.setup( x ) )
		// });

	}

	private bindToColumns( data: DataSet[] ){

		var rows = new Map()
		let index = 0;
		var schema = new GridSchema();

		data.forEach(serie => {
			if( !serie.columns )
				return;

			const columns = serie.columns;
			var set = new Set();

			for( let c = 1; c < columns.length; ++c ){
				schema.items.push( new GridSchemaItem( columns[ c ], `field${index+c}` ) );
			}
			
			for( let i = 0; i < serie.values.length; ++i ){

				let row = serie.values[ i ];
				var time = row[ 0 ];

				if( !rows.has( time ) ){
					rows.set( time, {} )
				}

				let container = rows.get( time )

				for( let j = 0; j < row.length; ++j ){

					const field = ( j == 0 ) ? "time" : `field${index+j}`;
					

					container[ field ] = row[ j ];
				}
			}

			index += serie.columns.length - 1;
		});

		schema.items.unshift( new GridSchemaItem( "time", `time` ) );

		this.tryFireSchema( schema );

		const res = Array.from( rows.values() ); 

		return res;
	}

	private bindToRows(){

	}

	private tryFireSchema( schema: GridSchema ){
		const lastSchema = this.schemaChange.getValue();
		let shouldFire = false;

		try{
			if( !lastSchema || lastSchema.items.length != schema.items.length ){
				shouldFire = true;
				return;
			}

			for( let i = 0; i < schema.items.length; ++i ){
				shouldFire = 
					( schema.items[ i ].column != lastSchema.items[ i ].column ) ||
					( schema.items[ i ].field != lastSchema.items[ i ].field );

				if( shouldFire )
					break;
			}

		}
		finally {
			if( shouldFire ){
				this.schemaChange.next( schema );
			}
		}
	}

	destroy(){
		this.timeSubs?.unsubscribe();
	}

	update(){
		this.time.tick();
	}

	fetch(){
		//this.valueUpdate.next( this.valueUpdate.value );
	}
}



