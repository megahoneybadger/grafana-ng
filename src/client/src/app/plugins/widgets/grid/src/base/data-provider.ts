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
	private readonly COL_VALUE_RAW = 'valueRaw';

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
				const col = columns[ colIndex ];
				const rule = this.dataFormatter.getRule( col );

				if( rule?.type == ColumnType.Hidden )
					continue;
				
				const colFormatted = this.dataFormatter.getColumnHeader( col, rule );
			
				if( col != this.COL_TIME ){
					schema.items.push( new GridSchemaItem( 
						colFormatted, `field${fieldIndex + colIndex}` ) );
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

			if( !hasTimeColumn ){
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

					container[ this.COL_VALUE_RAW ] = row[ j ];
				}
			}
		});

		this.dataChange.next( result );
	}

	private tryFireSchema( schema: GridSchema ){
		if( schema.items.length > 0 ){
			const rule = this.dataFormatter.getRule( this.COL_TIME );

			let colNameFormatted = this.dataFormatter.getColumnHeader( this.COL_TIME, rule );
			
			if( rule?.type != ColumnType.Hidden ){
				schema.items.unshift( new GridSchemaItem( colNameFormatted, this.COL_TIME ) );
			}
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
		this.bind( this.lastDataSet );
	}
}



