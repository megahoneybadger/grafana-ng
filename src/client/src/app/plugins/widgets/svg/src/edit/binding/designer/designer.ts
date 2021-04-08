import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';

import { BindingEvalType, BindingReducer, BindingRule } from '../../../svg.m';
import { WidgetConsumer } from '../../../base/base-panel';

@Component({
  selector: 'binding-rule-designer',
  templateUrl: './designer.html'
})
export class BindingRuleDesignerComponent extends WidgetConsumer {

  @Input() id: string;
  index: number = 0;

  get rules(): BindingRule[]{
    return this
      .widget
      ?.rules
      ?.filter( x => x.id == this.id );
  }

  get reducers$() {
		return of( Object.values( BindingReducer ));
	}

  get evaluators$(){
    return of( Object.values( BindingEvalType ));
  }

  get resolvers$(){
    return of( [ "fill", "stroke", "stroke-width", "opacity" ]);
  }

  isColorProperty( r: BindingRule ) : boolean{
    return ( r.resolver.property == "fill" );
  }

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }

  onAddRule(){
    const rule = new BindingRule();
    rule.id = this.id;

    this.widget.rules = this.widget.rules ?? new Array<BindingRule>();
    this.widget.rules.push( rule );
  }

  onRemoveRule( rule: BindingRule ){
    const index = this
      .widget
      .rules
      .indexOf( rule );

    this.widget.rules.splice( index, 1 );
  }
}
