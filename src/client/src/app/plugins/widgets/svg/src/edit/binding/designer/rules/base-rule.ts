import { Directive, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';

import { BindingEvalOperator, BindingReducer,
  BindingResolveAction,
   BindingResolver, BindingRule, BindingTargetSetter } from '../../../../svg.m';
import { WidgetConsumer } from '../../../../base/base-panel';
import * as _ from 'lodash';

@Directive({
 
})
export class BindingBaseRuleComponent extends WidgetConsumer {

  static readonly PROP_FILL = "fill";
  static readonly PROP_STROKE = "stroke";
  static readonly PROP_STROKE_WIDTH = "stroke-width";
  static readonly PROP_OPACITY = "opacity";
  static readonly PROP_ANGLE = "angle";
  static readonly PROP_TEXT = "text";
  static readonly PROP_TRANSFORM = "transform";
  static readonly PROP_ZOOM = "zoom";
  static readonly PROP_X = "x";
  static readonly PROP_Y = "y";

  @Input() rule: BindingRule;

  get resolver(){
    return this
      .rule
      .resolvers[ 0 ];
  }

  get target(){
    return this.resolver?.target;
  }

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

  get actions$(){
    return of( Object.values( BindingResolveAction ));
  }

  get properties$(){
    return of( [ 
      BindingBaseRuleComponent.PROP_FILL,
      BindingBaseRuleComponent.PROP_STROKE,
      //BindingBaseRuleComponent.PROP_STROKE_WIDTH,
      BindingBaseRuleComponent.PROP_OPACITY,
      BindingBaseRuleComponent.PROP_ANGLE,
      BindingBaseRuleComponent.PROP_ZOOM,
      BindingBaseRuleComponent.PROP_TEXT,
      BindingBaseRuleComponent.PROP_X,
      BindingBaseRuleComponent.PROP_Y,
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
