import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';

import { BindingEvalType, BindingReducer, BindingRule, BindingRuleType } from '../../../svg.m';
import { WidgetConsumer } from '../../../base/base-panel';
import * as _ from 'lodash';

@Component({
  selector: 'binding-rule-designer',
  templateUrl: './designer.html'
})
export class BindingRuleDesignerComponent extends WidgetConsumer {

  @Input() id: string;
  index: number = 0;
  BindingRuleTypeRef = BindingRuleType;

  addMunuItems =	[
    { label: BindingRuleType.If },
    { label: BindingRuleType.Map },
    { label: BindingRuleType.Switch },
  ]; 

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

  ngOnInit(){
    const items = _.cloneDeep( this.addMunuItems );

    this.addMunuItems.forEach( x => 
      (<any>x).command = ( y ) => this.onAddRule( y.item.label ) )
  }

  onAddRule( t: BindingRuleType ){
    const rule = new BindingRule();
    rule.id = this.id;
    rule.type = t;

    this.widget.rules = this.widget.rules ?? new Array<BindingRule>();
    this.widget.rules.push( rule );
  }

  onRuleChangeDetected(){
    this.dataProvider.update();
  }
}
