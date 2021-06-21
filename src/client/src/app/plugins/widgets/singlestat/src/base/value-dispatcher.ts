import { Inject, Injectable } from "@angular/core";
import { Panel, PANEL_TOKEN } from "common";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { DataProvider } from "./data-provider";
import { DataSet, GaugeValueReducer } from "../singlestat.m";
import { WidgetConsumer } from "./widget-consumer";



@Injectable()
export class ValueDispatcher extends WidgetConsumer {

	dataSubs: Subscription;

	private fieldsUpdate: BehaviorSubject<Map<string, string[]>> = new BehaviorSubject(undefined);
  readonly fieldsUpdate$: Observable<Map<string, string[]>> = this.fieldsUpdate.asObservable();

	get targets():string[]{
		return this
			.widget
			.metrics
			.targets
			.map( x => (<any>x).refId );
	}


	constructor( 
		@Inject( PANEL_TOKEN ) panel: Panel,
		private dp: DataProvider ){

			super( panel );

			this.dataSubs = dp
				.data$
				.subscribe( x => this.bind( x ) );
	}

	destroy(){
		this.dataSubs?.unsubscribe();
	}

	private bind( data: DataSet[] ){
		const columns = new Map<string, string[]>();
		const targets = [...this.targets];
		let targetData;

		for( let i = 0; i < data.length; ++i ){
			const d = data[ i ];
			const t = targets[ i ];

			if( d.columns ){
				const cols = [... d.columns]
					.filter( x => x != "time" );
				
				columns.set( t, cols );
			}

			if( d.refId == this.widget.value.refId ){
				const index = d.columns.indexOf( this.widget.value.field );

				if( index != -1 ){
					targetData = d
						.values
						?.map( x => x[ index ] )
						.filter( x => x !== null );
				}
			}
		}

		

		const v = this.reduce( targetData );

		if( undefined === v || null === v ){
			this.bindEmpty();
		} else{
			this.bindValue( v );
		}

		//console.log( columns );
		this.fieldsUpdate.next( new Map( columns ) );
	}

	private reduce( arr: any  ){
		if( !arr ){
			return;
		}
		
		switch( this.widget.value.reducer ){
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

	private bindEmpty(){
		this
			.widget
			.component
			.value
			.nativeElement
			.innerHTML = "(no data)"
	}

	private bindValue( v ){
		

		if( this.widget.value.decimals ){
			v = v.toFixed( this.widget.value.decimals );
		}

		this.gauge.set( v );
		this.gauge.setTextField(this.widget.component.value.nativeElement, this.widget.value.decimals);
		//this.gauge.setTextField(, this.widget.value.decimals);
		
		
	}

}

