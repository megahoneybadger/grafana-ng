import { Inject, Injectable } from "@angular/core";
import { Panel, PANEL_TOKEN } from "common";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { BindingEvalOperator, BindingEvaluator, BindingReducer,
	 BindingRule, BindingRuleType, BindingTarget, BindingAnimation } from "../svg.m";
import { WidgetConsumer } from "./base-panel";
import { DataProvider } from "./data-provider";
import { DataSet } from "../svg.m";
import { Dom, easing, Runner } from "@svgdotjs/svg.js";
import { Element } from "@svgdotjs/svg.js";
import { Point } from "@svgdotjs/svg.js";
import { Matrix } from "@svgdotjs/svg.js";
import { MatrixLike } from "@svgdotjs/svg.js";
import { BindingBaseRuleComponent } from "../edit/binding/designer/rules/base-rule";

@Injectable()
export class RuleDispatcher extends WidgetConsumer {

	dataSubs: Subscription;
	runners = new Map<string, Runner>();

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
			const t = targets[ i ];

			if( d.columns ){
				const cols = [... d.columns]
					.filter( x => x != "time" );
				
				this.columns.set( t, cols );
			}

			for( let r of this.rules ){
				if( d.refId == r.query.refId ){
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

		let reducedValue = this.reduce( arr, r.query.reducer ) ?? '';
		const defRes = r.resolvers[ 0 ];

		switch( r.type )
		{
			case BindingRuleType.Map:
				const value = defRes
					.target
					.value
					?.replace( BindingRule.VALUE_PLACEHOLDER, reducedValue );
	
				this.tryResolve( r.id, defRes.target.property, value  );
				break;

			case BindingRuleType.If:
				if( this.evaluate( reducedValue, defRes.evaluator ) ){
					this.tryResolve( r.id, defRes.target.property, defRes.target.value, defRes.target )	
				}
				break;

			case BindingRuleType.Switch:
				r.resolvers.forEach( x => {
					if( this.evaluate( reducedValue, x.evaluator ) ){
						this.tryResolve( r.id, x.target.property, x.target.value )	
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

	private tryResolve( id: string, prop: string, value: any, target?: BindingTarget ){
		const targetElement = this.svg.findOne( `[id='${id}']` );

		if( !targetElement ){
			return;
		}

		if( target?.animation ){
			this.animate( <Element>targetElement, prop, target.animation );
		} else{
			this.resolve( targetElement, prop, value );
		}
	}

	private resolve( targetElement: Dom, prop: string, value: any ){
		console.log( "resolve" );
		const id = targetElement.node.id
		const bag = this.defaultProps.get( id ) ?? new Map<string, any>();
		this.defaultProps.set( id, bag );

		
		this.runners.get( id )?.unschedule();
		//this.runners.delete( id );

		if( !bag.has( prop ) ){
			if( prop == "text" ){
				bag.set( prop, targetElement.node.textContent );
			} else {
				bag.set( prop, targetElement.css( prop ) );
			}
		}

		if( prop == "text" ){
			targetElement.node.textContent = value;
		} else{
			targetElement.attr( prop, value );
		}

		this.affectedProps.add( `${id}_${prop}` );
	}

	private animate( element: Element, prop: string, anim: BindingAnimation  ){
		console.log( "animate" );
		const id = element.node.id
		
		this.runners.get( id )?.unschedule();

		let times = anim.times;

		if( anim.swing && times ){
			times = times * 2 - 1;
		}

		let runner = element
			.animate(anim.duration)
			.ease( easing['-'] )
			.loop( times, anim.swing )
			.after( x => console.log( "anim is over" ) );

		this.animateSetupFrom( element, prop, anim );

		this.animateSetupTo( runner, prop, anim );
		
		this.runners.set( id, runner );

		this.affectedProps.add( `${id}_${prop}` );
	}

	private animateSetupFrom( element: Element, prop: string, anim: BindingAnimation){
		if( undefined === anim.from ){
			return;
		}

		switch( prop ){
			case BindingBaseRuleComponent.PROP_OPACITY:
			case BindingBaseRuleComponent.PROP_FILL:
			case BindingBaseRuleComponent.PROP_STROKE:
				element.attr( { [prop]: anim.from })
				break;

			case BindingBaseRuleComponent.PROP_ANGLE:
				element.clear()
				break;
		
		}
	}

	private animateSetupTo( runner: Runner, prop: string, anim: BindingAnimation){
		switch( prop ){
			case BindingBaseRuleComponent.PROP_OPACITY:
			case BindingBaseRuleComponent.PROP_FILL:
			case BindingBaseRuleComponent.PROP_STROKE:
				runner = runner.attr({ [prop]: anim.to })
				break;

			case BindingBaseRuleComponent.PROP_ANGLE:
				runner = (<any>runner).rotate( anim.to )
				break;
		}
	}

	private compensate(){
		return;
		for (const [id, props] of this.defaultProps.entries()) {
			for (const [prop, value] of props.entries()) {
				if( !this.affectedProps.has( `${id}_${prop}` ) ){
					//console.log( "compensate" );
					this.tryResolve( id, prop, value );
				}
			}
		}
	}
}

