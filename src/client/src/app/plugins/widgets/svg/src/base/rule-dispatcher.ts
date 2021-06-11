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

		this.tryRestoreNativeValues();

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

	private findTargetElement( id: string ) : Element{
		return <Element>this.svg.findOne( `[id='${id}']` );
	}

	private tryResolve( id: string, prop: string, value: any, target?: BindingTarget ){
		const element = this.findTargetElement( id );

		if( !element ){
			return;
		}

		this.savePropertyNativeValue( element, prop );

		// stop possible animation 
		this.runners.get( id )?.unschedule();

		if( target?.animation ){
			this.animate( element, prop, target.animation );
		} else{
			this.resolve( element, prop, value );
		}

		this.saveAffectedProperty( id, prop );
	}

	private resolve( element: Element, prop: string, value: any ){
		switch( prop ){
			case BindingBaseRuleComponent.PROP_OPACITY:
			case BindingBaseRuleComponent.PROP_FILL:
			case BindingBaseRuleComponent.PROP_STROKE:
				element.attr( prop, value );
				break;

			case BindingBaseRuleComponent.PROP_TRANSFORM:
				if( value === undefined || value === null ){
					element.node.removeAttribute( prop );
				} else{
					element.node.setAttribute( prop, value );
				}
				break;

			case BindingBaseRuleComponent.PROP_TEXT:
				element.node.textContent = value;
				break;

			case BindingBaseRuleComponent.PROP_ANGLE:
				// this is a trick to make rotation absolute (not relative)
				element.node.removeAttribute( BindingBaseRuleComponent.PROP_TRANSFORM);
				element.rotate( value );
				break;

			
			case BindingBaseRuleComponent.PROP_ZOOM:
				// todo
				break;
		}
	}

	private savePropertyNativeValue(element: Element, prop: string){

		const id = element.node.id
		const bag = this.defaultProps.get( id ) ?? new Map<string, any>();
		this.defaultProps.set( id, bag );

		switch( prop ){
			case BindingBaseRuleComponent.PROP_ANGLE:
			case BindingBaseRuleComponent.PROP_ZOOM:
				prop = BindingBaseRuleComponent.PROP_TRANSFORM;
				break;
		}

		if( bag.has( prop ) ){
			return;
		}

		switch( prop ){
			case BindingBaseRuleComponent.PROP_OPACITY:
			case BindingBaseRuleComponent.PROP_FILL:
			case BindingBaseRuleComponent.PROP_STROKE:
				bag.set( prop, element.attr( prop ) );
				break;

			case BindingBaseRuleComponent.PROP_TEXT:
				bag.set( prop, element.node.textContent );
				break;

			case  BindingBaseRuleComponent.PROP_TRANSFORM:
			case BindingBaseRuleComponent.PROP_ZOOM:
				bag.set( prop, element.attr( prop ) );
				break;
		}
	}

	private saveAffectedProperty(id: string, prop: string){

		switch( prop ){
			case BindingBaseRuleComponent.PROP_ANGLE:
			case BindingBaseRuleComponent.PROP_ZOOM:
				prop = BindingBaseRuleComponent.PROP_TRANSFORM;
				break;
		}

		this.affectedProps.add( `${id}_${prop}` );
	}

	private animate( element: Element, prop: string, anim: BindingAnimation  ){
		const id = element.node.id
		
		let times = anim.times;

		if( anim.swing && times ){
			times = times * 2 - 1;
		}

		this.runners.get( id )?.finish();

		this.animateSetupFrom( element, prop, anim );

		let runner = element
			.animate(anim.duration)
			.ease( easing['-'] )
			.loop( times, anim.swing )
			//.after( x => console.log( "anim is over" ) );

		this.animateSetupTo( runner, prop, anim );
		
		this.runners.set( id, runner );
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
				element.node.removeAttribute( BindingBaseRuleComponent.PROP_TRANSFORM);
				element.rotate( anim.from );
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

	private tryRestoreNativeValues(){
		

		for (const [id, props] of this.defaultProps.entries()) {
			const toDelete = [];

			for (const [prop, value] of props.entries()) {
				if( !this.affectedProps.has( `${id}_${prop}` ) ){
					console.log( `restore ${prop} with [${value}]` )
					this.resolve( this.findTargetElement( id ), prop, value );
					toDelete.push( prop );
				}
			}

			toDelete.forEach( x => props.delete( x ) );
		}
	}
}

