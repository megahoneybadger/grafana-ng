import { Directive, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';

import { BindingEvalOperator, BindingReducer,
   BindingResolver, BindingRule, BindingTargetSetter } from '../../../../svg.m';
import { WidgetConsumer } from '../../../../base/base-panel';
import * as _ from 'lodash';

@Directive({
  //host: {'class': 'gf-form-inline'}
})
export class BindingBaseRuleComponent extends WidgetConsumer {

  static readonly PROP_FILL = "fill";
  static readonly PROP_STROKE = "stroke";
  static readonly PROP_STROKE_WIDTH = "stroke-width";
  static readonly PROP_OPACITY = "opacity";
  static readonly PROP_TEXT = "text";

  @Input() rule: BindingRule;
  @Output() change = new EventEmitter();

  BindingTargetSetterRef = BindingTargetSetter;

  get rules(): BindingRule[]{
    return this
      .widget
      ?.rules
      ?.filter( x => x.id == this.rule.id );
  }

  get reducers$() {
		return of( Object.values( BindingReducer ));
	}

  get evaluators$(){
    return of( Object.values( BindingEvalOperator ));
  }

  get properties$(){
    return of( [ 
      BindingBaseRuleComponent.PROP_FILL,
      BindingBaseRuleComponent.PROP_STROKE,
      BindingBaseRuleComponent.PROP_STROKE_WIDTH,
      BindingBaseRuleComponent.PROP_OPACITY,
      BindingBaseRuleComponent.PROP_TEXT
    ]);
  }

  isColorProperty( prop: string ) : boolean{
    switch( prop ){
      case BindingBaseRuleComponent.PROP_FILL:
      case BindingBaseRuleComponent.PROP_STROKE:
        return true;

      default: return false;
    }
  }

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }

  ngOnInit(){
    this.rule.resolvers = this.rule.resolvers ?? [];

    if( !this.rule.resolvers?.length ){
      this.rule.resolvers.push( new BindingResolver() );
    }
  }

  onRemoveRule(){
    const index = this
      .widget
      .rules
      .indexOf( this.rule );

    this.widget.rules.splice( index, 1 );

    this.change.emit()
  }

  onCopyRule(){
    const srule = JSON.stringify( this.rule );

    navigator.clipboard.writeText(srule);
  }
}
