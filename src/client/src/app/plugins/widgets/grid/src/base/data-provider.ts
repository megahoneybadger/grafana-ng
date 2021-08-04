import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import { Panel, TimeRangeStore, PluginActivator, PANEL_TOKEN, DataSet } from 'common';
import { WidgetConsumer } from "./widget-consumer";
import { GridModel, GridTransform, GridSchema, GridSchemaItem, ColumnType } from "../grid.m";
import { DataFormatter } from "./data-formatter";



@Injectable()
export class DataProvider extends WidgetConsumer {
	timeSubs: Subscription;

	private readonly COL_TIME = 'time';
	private readonly COL_METRIC = 'metric';
	private readonly COL_VALUE = 'value';
	private readonly COL_JSON = 'json';

	private schemaChange: BehaviorSubject<GridSchema> = new BehaviorSubject(null/*did not get any data yet**/);
  readonly schema$: Observable<GridSchema> = this.schemaChange.asObservable();

	private dataChange: BehaviorSubject<any> = new BehaviorSubject(null/*did not get any data yet**/);
  readonly data$: Observable<any> = this.dataChange.asObservable();

	private lastDataSet:  DataSet[];

  
	constructor (
		private pluginActivator: PluginActivator,
		private time: TimeRangeStore,
	  private dataFormatter: DataFormatter,
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
		this.lastDataSet = data;
		console.log( data );

		switch( this.widget.transform ){
			case GridTransform.TimeSeriesToRows:
				this.buildSchemaToRows( data );
				this.buildDataToRows( data );
				break;

			case GridTransform.TimeSeriesToColumns:
				this.buildSchemaToColumns( data );
				this.buildDataToColumns( data );
				break;

			case GridTransform.JSON:
				this.buildSchemaToJSON( data );
				this.buildDataToJSON( data );
				break;

			case GridTransform.Table:
				this.buildSchemaToTable( data );
				this.buildDataToTable( data );
				break;

			default:
				console.log( "todo" );
				break;
		}	
	}

	private buildSchemaToColumns( data: DataSet[] ){
		let fieldIndex = 0;
		var schema = new GridSchema();
		let hasTime = false;
		
		data.forEach(serie => {
			if( !serie.columns )
				return;

			const columns = serie.columns;
			const timeColIndex = columns.indexOf( this.COL_TIME );
			const hasTimeColumn = ( timeColIndex !== -1 );

			if( !hasTimeColumn ){
				return;
			}

			hasTime = true;

			for( let colIndex = 0; colIndex < columns.length; ++colIndex ){
				let col = columns[ colIndex ];
				const rule = this.dataFormatter.getRule( col );

				if( rule?.type == ColumnType.Hidden )
					continue;
			
				if( col != this.COL_TIME ){
					const colFormatted = this
						.dataFormatter
						.getColumnHeader( col, rule );
					
					schema.items.push( new GridSchemaItem( 
						colFormatted, `field${fieldIndex + colIndex}` ) );
				}
			}

			fieldIndex += columns.length - 1;
		});

		if( hasTime ){
			const nschema = new GridSchema();
			this.addColumnToSchema( nschema, this.COL_TIME );
			nschema.items = [ ...nschema.items, ...schema.items ];
			schema = nschema;
		}

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

			const rules = this.dataFormatter.getRules( columns );
			
			for( let i = 0; i < serie.values.length; ++i ){
				let row = serie.values[ i ];
				var time = row[ timeColIndex ];
			
				if( !rows.has( time ) ){
					rows.set( time, {} )
				}

				let container = rows.get( time )

				for( let j = 0; j < row.length; ++j ){
					const field = ( j == timeColIndex ) ? this.COL_TIME : `field${fieldIndex+j}`;
					const col = columns[ j ];

					container[ field ] = this
						.dataFormatter
						.getValue( rules.get( col ), row[ j ] );
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

			if( hasTimeColumn ){
				hasTime = true;
			}
		});

		const items = []

		if( hasTime ){
			items.push( new GridSchemaItem( this.COL_TIME, this.COL_TIME ) );	
		}

		items.push( new GridSchemaItem( this.COL_METRIC, this.COL_METRIC ) );
		items.push( new GridSchemaItem( this.COL_VALUE, this.COL_VALUE ) );

		for( let colIndex = 0; colIndex < items.length; ++colIndex ){
			const item = items[ colIndex ];
			const col = item.column;
			const rule = this.dataFormatter.getRule( col );

			if( rule?.type == ColumnType.Hidden )
				continue;

			schema.items.push( item )
			
			item.column = this.dataFormatter.getColumnHeader( col, rule );
		}

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

			const rules = this.dataFormatter.getRules( 
				[ this.COL_TIME, this.COL_METRIC, this.COL_VALUE ] );
		
			for( let i = 0; i < serie.values.length; ++i ){
				let row = serie.values[ i ];

				for( let j = 0; j < row.length; ++j ){

					if( j == timeColIndex )
						continue;

					let container = {}
					result.push( container );

					if( hasTimeColumn ){
						container[ this.COL_TIME ] = this
							.dataFormatter
							.getValue( rules.get( this.COL_TIME ), row[ timeColIndex ] ) ;
					}

					container[ this.COL_METRIC ] = this
						.dataFormatter
						.getValue( rules.get( this.COL_METRIC ), columns[ j ] );

					container[ this.COL_VALUE ] = this
						.dataFormatter
						.getValue( rules.get( this.COL_VALUE ), row[ j ] );
				}
			}
		});

		this.dataChange.next( result );
	}

	private buildSchemaToJSON( data: DataSet[] ){
		var schema = new GridSchema();
		const col = this.COL_JSON;

		const rule = this.dataFormatter.getRule( col );

		if( rule?.type != ColumnType.Hidden ){
			const item = new GridSchemaItem( col, col )

			item.column = this.dataFormatter.getColumnHeader( col, rule );

			schema.items.push( item )
		}

		this.tryFireSchema( schema );
	}

	private buildDataToJSON( data: DataSet[] ){
		var result = []

		data.forEach(serie => {
			if( !serie.columns )
				return;

			const rules = this.dataFormatter.getRules( [ this.COL_JSON ] );
		
			for( let i = 0; i < serie.values.length; ++i ){
				let row = serie.values[ i ];
				const text = JSON.stringify( row );

				let container = {}
				result.push( container );

				container[ this.COL_JSON ] = this
					.dataFormatter
					.getValue( rules.get( this.COL_JSON ), text );
			}
		});

		this.dataChange.next( result );
	}

	private buildSchemaToTable( data: DataSet[] ){
		var schema = new GridSchema();
		const set = new Set<string>();
		
		data.forEach(serie => serie
			.columns
			?.forEach( x => set.add( x )));

		Array
			.from( set )
			.forEach( c => this.addColumnToSchema( schema, c ) );

		this.tryFireSchema( schema );
	}

	private buildDataToTable( data: DataSet[] ){
		var result = []

		data.forEach(serie => {
			if( !serie.columns )
				return;

			const rules = this.dataFormatter.getRules( [ ...serie.columns ] );
		
			for( let i = 0; i < serie.values.length; ++i ){
				let row = serie.values[ i ];

				let container = {}
				result.push( container )

				for( let j = 0; j < row.length; ++j ){
					const col = serie.columns[ j ];

					container[ col ] = this
						.dataFormatter
						.getValue( rules.get( col ), row[ j ] );
				}
			}
		});

		this.dataChange.next( result );
	}

	private addColumnToSchema(schema: GridSchema, col: string ){
		const rule = this.dataFormatter.getRule( col );

		let colNameFormatted = this
			.dataFormatter
			.getColumnHeader( col, rule );
			
		if( rule?.type != ColumnType.Hidden ){
			schema
				.items
				.push( new GridSchemaItem( colNameFormatted, col ) );
		}
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
		this.bind( this.lastDataSet );
	}
}



