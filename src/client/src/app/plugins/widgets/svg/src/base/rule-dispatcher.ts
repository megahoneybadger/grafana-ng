import { Inject, Injectable } from "@angular/core";
import { Panel, PANEL_TOKEN } from "common";
import { Subscription } from "rxjs";
import { BindingEvalType, BindingEvaluator, BindingReducer, BindingRule } from "../svg.m";
import { WidgetConsumer } from "./base-panel";
import { DataProvider } from "./data-provider";
import { DataSet } from "../svg.m";

@Injectable()
export class RuleDispatcher extends WidgetConsumer {

	dataSubs: Subscription;

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
				.subscribe( x => this.applyRules( x ) );
	}

	destroy(){
		this.dataSubs?.unsubscribe();
	}

	private applyRules( data: DataSet[] ){
		for( let i = 0; i < data.length; ++i ){
			const d = data[ i ];
			const t = this.targets[ i ];

			for( let r of this.rules ){
				if( t == r.query.target ){
					this.applyRule( d, r )
				}
			}
		}
	}

	private applyRule( d: DataSet, r: BindingRule ){
		const field = r.query.field;

		const colIndex = d.columns?.indexOf( field );

		if( colIndex == undefined || colIndex == -1 ){
			return;
		}

		const arr = d
			.values
			.map( x => x[ colIndex ] )
			.filter( x => x !== undefined && x !== null );

		const reducedValue = this.reduce( arr, r.query.reducer );

		if( this.evaluate( reducedValue, r.evaluator ) ){
			this.resolve( r )	
		}
	}

	private reduce( arr: Array<any>, r: BindingReducer ){
		switch( r ){
			case BindingReducer.Last:
				const [last] = arr.slice(-1);
				return last;

			case BindingReducer.First:
				const [first] = arr.slice(0);
				return first;

			case BindingReducer.Max:
				return Math.max( ...arr );

			case BindingReducer.Count:
				return arr.reduce((a, b) => a + b, 0);
		}
	}

	private evaluate( rv: any, e: BindingEvaluator ){
		if( rv === undefined ){
			return false;
		}

		switch( e.type ){
			case BindingEvalType.Eq:
				return rv == e.param;

			case BindingEvalType.Neq:
				return rv != e.param;

			case BindingEvalType.Less:
				return rv < e.param;

			case BindingEvalType.Greater:
				return rv > e.param;
		}
	}

	private resolve( r: BindingRule ){
		const targetElement = this.svg.findOne( `[id='${r.id}']` );

		if( !targetElement ){
			return;
		}

		targetElement.css( r.resolver.property, r.resolver.value );
	}
}