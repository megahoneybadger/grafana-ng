import { Inject, Injectable } from "@angular/core";
import { Panel, PANEL_TOKEN } from "common";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { BindingEvalOperator, BindingEvaluator, BindingReducer, BindingRule, BindingRuleType } from "../svg.m";
import { WidgetConsumer } from "./base-panel";
import { DataProvider } from "./data-provider";
import { DataSet } from "../svg.m";

@Injectable()
export class RuleDispatcher extends WidgetConsumer {

	dataSubs: Subscription;

	private fieldsUpdate: BehaviorSubject<Map<string, string[]>> = new BehaviorSubject(undefined);
  readonly fieldsUpdate$: Observable<Map<string, string[]>> = this.fieldsUpdate.asObservable();

	private columns: Map<string, string[]>;
	private affectedProps: Set<string>;
	private defaultProps = new Map<string, Map<string,any>>();

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
		this.columns = new Map<string, string[]>();
		this.affectedProps = new Set<string>();
		const targets = [...this.targets];

		for( let i = 0; i < data.length; ++i ){
			const d = data[ i ];
			const t = this.targets[ i ];

			if( d.columns ){
				const cols = [... d.columns]
					.filter( x => x != "time" );
				
				this.columns.set( t, cols );
			}

			for( let r of this.rules ){
				if( t == r.query.refId ){
					this.applyRule( d, r )
				}
			}
		}

		this.compensate();

		this.fieldsUpdate.next( new Map( this.columns ) );
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
		const defRes = r.resolvers[ 0 ];

		switch( r.type )
		{
			case BindingRuleType.Map:
				const value = defRes
					.target
					.value
					?.replace( BindingRule.VALUE_PLACEHOLDER, reducedValue );
	
				this.resolve( r.id, defRes.target.property, value );
				break;

			case BindingRuleType.If:
				if( this.evaluate( reducedValue, defRes.evaluator ) ){
					this.resolve( r.id, defRes.target.property, defRes.target.value )	
				}
				break;

			case BindingRuleType.Switch:
				r.resolvers.forEach( x => {
					if( this.evaluate( reducedValue, x.evaluator ) ){
						this.resolve( r.id, x.target.property, x.target.value )	
					}	
				} )
				break;
			
		}
	}

	private reduce( arr: Array<any>, r: BindingReducer ){
		switch( r ){
			case BindingReducer.Last:
				const [last] = arr.slice(-1);
				return last;

			case BindingReducer.First:
				const [first] = arr.slice(0);
				//console.log( arr )
				return first;

			case BindingReducer.Max:
				return Math.max( ...arr );

			case BindingReducer.Min:
				return Math.min( ...arr );

			case BindingReducer.Count:
				return arr.reduce((a, b) => a + b, 0);
		}
	}

	private evaluate( rv: any, e: BindingEvaluator ){
		if( rv === undefined ){
			return false;
		}

		switch( e.operator ){
			case BindingEvalOperator.Eq:
				return rv == e.param;

			case BindingEvalOperator.Neq:
				return rv != e.param;

			case BindingEvalOperator.Less:
				return rv < e.param;

			case BindingEvalOperator.Greater:
				return rv > e.param;
		}
	}

	private resolve( id: string, prop: string, value: any ){
		const targetElement = this.svg.findOne( `[id='${id}']` );

		if( !targetElement ){
			return;
		}

		const bag = this.defaultProps.get( id ) ?? new Map<string, any>()
		this.defaultProps.set( id, bag );

		if( !bag.has( prop ) ){
			if( prop == "text" ){
				bag.set( prop, targetElement.node.textContent );
			} else{
				bag.set( prop, targetElement.css( prop ) );
			}
		}

		if( prop == "text" ){
			targetElement.node.textContent = value;
		} else{
			targetElement.css( prop, value );
		}

		this.affectedProps.add( `${id}_${prop}` );

		this.animate( id );
	}

	private animate(id: string){
		// const targetElement = this.svg.findOne( `[id='${id}']` );

		// if( id != "dispAlert" ){
		// 	return;
		// }

		// console.log( "need to animate alarm" );

		// (<Path>targetElement)
		// 	.animate( 1000 )
		// 	.ease( easing['-'] )
		// 	.attr({ "opacity": 1 } )
			
			//.loop( undefined, true )
	}

	private compensate(){
		for (const [id, props] of this.defaultProps.entries()) {
			for (const [prop, value] of props.entries()) {
				if( !this.affectedProps.has( `${id}_${prop}` ) ){
					this.resolve( id, prop, value );
				}
			}
		}
	}
}

