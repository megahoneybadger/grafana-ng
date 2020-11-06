import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AlertCondition, AlertEvalType, AlertOperator, AlertReducer,
	Panel, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';

import { BaseChartEditorComponent } from '../../../../base/chart-base-editor';

@Component({
  selector: 'editor-alert-condition',
  templateUrl: './cond.html'
})
export class AlertConditionEditorComponent extends BaseChartEditorComponent  {

  @Input() condition: AlertCondition;
  @Input() index: number = 0;

  @Output() removed = new EventEmitter<AlertCondition>();

	AlertEvalTypeRef = [
		'is below',
		'is above',
		'is outside range',
		'is within range',
		'has no value'
	]
  
  get reducers$() {
		return of( Object.values( AlertReducer ));
	}
	
	get evaluators$(){
		return of( [...this.AlertEvalTypeRef].map( x => x.toUpperCase() ) );
	}

	get evaluator() : string {
		return this.AlertEvalTypeRef[ this.condition.evaluator.type ].toUpperCase();
	}

	get operators$() {
		return of( Object.values( AlertOperator ).map( x => x.toUpperCase() ) );
	}

	get evaluatorType() : AlertEvalType {
		return this.condition.evaluator.type;
	}

	get showEvalParamFrom(): boolean{
		return ( this.evaluatorType != AlertEvalType.HasNoValue );
	}

	get showEvalParamTo() : boolean{
		return ( this.evaluatorType == AlertEvalType.IsOutsideRange ) || 
			( this.evaluatorType == AlertEvalType.IsWithinRange ) ;
	}

	get evalParamFrom() :string {
		return this
			.condition
			.evaluator
			.params[ 0 ]
			?.toString();
	}

	set evalParamFrom( p: string ){
		let from: any = parseFloat( p );
		let to: any = parseFloat( this.evalParamTo );

		from = isNaN( from ) ? '' : from;
		to = isNaN( to ) ? '' : to;
	
		this.condition.evaluator.params = this.showEvalParamTo ? [ from, to ] : [ from ];

		this.refresh();
	}

	get evalParamTo() :string {
		return this
			.condition
			.evaluator
			.params[ 1 ]
			?.toString();
	}

	set evalParamTo( p: string ){
		let from: any = parseFloat( this.evalParamFrom );
		let to: any = parseFloat( p );

		from = isNaN( from ) ? '' : from;
		to = isNaN( to ) ? '' : to;

		this.condition.evaluator.params = [ from, to ];

		this.refresh();
	}

  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
	}

	onEvaluatorPick( e: string ){
		
		const index = this
			.AlertEvalTypeRef
			.indexOf( e.toLowerCase() );

		if( -1 == index || e == this.evaluator ){
			return;
		}

		this.condition.evaluator.type = index;
		const ev = this.condition.evaluator;
		const p = ev.params;

		switch( ev.type ){
			case AlertEvalType.IsAbove:
			case AlertEvalType.IsBelow:
				ev.params = [ p[ 0 ] ?? '' ];
				break;

			case AlertEvalType.HasNoValue:
				ev.params = [];
				break;

			default:
				ev.params = [ p[ 0 ] ?? '', p[ 1 ] ?? '' ];
				break;
		}

		this.refresh();
	}
}
