import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import { Panel, TimeRangeStore, PluginActivator, PANEL_TOKEN, DataSet } from 'common';
import { WidgetConsumer } from "./widget-consumer";
import { GridModel, GridTransform, GridSchema, GridSchemaItem } from "../grid.m";



@Injectable()
export class DataProvider extends WidgetConsumer {
	timeSubs: Subscription;

	private readonly COL_TIME = 'time';
	private readonly COL_METRIC = 'metric';
	private readonly COL_VALUE = 'value';

	private schemaChange: BehaviorSubject<GridSchema> = new BehaviorSubject(null/*did not get any data yet**/);
  readonly schema$: Observable<GridSchema> = this.schemaChange.asObservable();

	private dataChange: BehaviorSubject<any> = new BehaviorSubject(null/*did not get any data yet**/);
  readonly data$: Observable<any> = this.dataChange.asObservable();

  
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
		switch( this.widget.transform ){
			case GridTransform.TimeSeriesToRows:
				this.buildSchemaToRows( data );
				this.buildDataToRows( data );
				break;

			case GridTransform.TimeSeriesToColumns:
				this.buildSchemaToColumns( data );
				this.buildDataToColumns( data );
				break;

			default:
				console.log( "todo" );
				break;
		}	
	}

	private buildSchemaToColumns( data: DataSet[] ){
		let fieldIndex = 0;
		var schema = new GridSchema();
		
		data.forEach(serie => {
			if( !serie.columns )
				return;

			const columns = serie.columns;
			const timeColIndex = columns.indexOf( this.COL_TIME );
			const hasTimeColumn = ( timeColIndex !== -1 );

			if( !hasTimeColumn ){
				return;
			}
		
			for( let colIndex = 0; colIndex < columns.length; ++colIndex ){
				let colName = columns[ colIndex ];

				if( colName != this.COL_TIME ){
					schema.items.push( new GridSchemaItem( 
						colName, `field${fieldIndex + colIndex}` ) );
				}
			}

			fieldIndex += columns.length - 1;
		});

		this.tryFireSchema( schema );
	}

	private buildDataToColumns(data: DataSet[]){
		var rows = new Map()
		let fieldIndex = 0;

		data.forEach(serie => {
			if( !serie.columns )
				return;

			const columns = serie.columns;
			const timeColIndex = columns.indexOf( this.COL_TIME );
			const hasTimeColumn = ( timeColIndex !== -1 );

			if( !hasTimeColumn ){
				return;
			}
			
			for( let i = 0; i < serie.values.length; ++i ){
				let row = serie.values[ i ];
				var time = row[ timeColIndex ];
			
				if( !rows.has( time ) ){
					rows.set( time, {} )
				}

				let container = rows.get( time )

				for( let j = 0; j < row.length; ++j ){
					const field = ( j == timeColIndex ) ? this.COL_TIME : `field${fieldIndex+j}`;
					container[ field ] = ( row[ j ] ) ? row[ j ].toFixed(2) : '-';
				}
			}

			fieldIndex += columns.length - 1;
		});

		const result = Array.from( rows.values() );
		this.dataChange.next( result );
	}

	private buildSchemaToRows( data: DataSet[] ){
		var schema = new GridSchema();
		let hasTime = false;
		
		data.forEach(serie => {
			if( !serie.columns )
				return;

			const columns = serie.columns;
			const timeColIndex = columns.indexOf( this.COL_TIME );
			const hasTimeColumn = ( timeColIndex !== -1 );

			if( !hasTimeColumn ){
				hasTime = true;
			}
		});

		if( hasTime ){
			schema.items.push( new GridSchemaItem( this.COL_TIME, this.COL_TIME ) );	
		}

		schema.items.push( new GridSchemaItem( this.COL_METRIC, this.COL_METRIC ) );
		schema.items.push( new GridSchemaItem( this.COL_VALUE, this.COL_VALUE ) );

		this.tryFireSchema( schema );
	}

	private buildDataToRows( data: DataSet[] ){
		var result = []

		data.forEach(serie => {
			if( !serie.columns )
				return;

			const columns = serie.columns;
			const timeColIndex = columns.indexOf( this.COL_TIME );
			const hasTimeColumn = ( timeColIndex !== -1 );
		
			for( let i = 0; i < serie.values.length; ++i ){
				let row = serie.values[ i ];

				for( let j = 0; j < row.length; ++j ){

					if( j == timeColIndex )
						continue;

					let container = {}
					result.push( container );

					if( hasTimeColumn ){
						container[ this.COL_TIME ] = row[ timeColIndex ];
					}

					container[ this.COL_METRIC ] = columns[ j ];
					container[ this.COL_VALUE ] = ( row[ j ] ) ? row[ j ] : "-";
				}
			}
		});
		
		this.dataChange.next( result );
	}

	private tryFireSchema( schema: GridSchema ){
		if( schema.items.length > 0 ){
			schema.items.unshift( new GridSchemaItem( this.COL_TIME, this.COL_TIME ) );
		}

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
		//this..next( this.valueUpdate.value );
	}
}



