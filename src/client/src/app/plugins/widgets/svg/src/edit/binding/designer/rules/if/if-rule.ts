import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import * as _ from 'lodash';
import { BindingBaseRuleComponent } from '../base-rule';
import { BindingAnimation, BindingResolveAction } from '../../../../../svg.m';
import { AnimationRangeHelper } from '../animation/range-helper';


@Component({
  selector: 'binding-if-rule',
  templateUrl: './if-rule.html',
  host: {'class': 'gf-form-inline'}
})
export class BindingIfRuleComponent extends BindingBaseRuleComponent {

  get resolver(){
    return this
      .rule
      .resolvers[ 0 ];
  }

  get action() : BindingResolveAction{
    return this.resolver.target.animation ?
      BindingResolveAction.Animation : BindingResolveAction.Eq;
  }

  set action( a: BindingResolveAction ) {
    if( a == BindingResolveAction.Animation ){
      const  {from, to} = AnimationRangeHelper.getDefault( this.resolver.target.property );

      const anim =  new BindingAnimation();
      anim.duration = 1000;
      anim.swing = false;
      anim.from = from;
      anim.to = to;

      this.resolver.target.animation = this.resolver.target.animation ?? anim;
    } else{
      this.resolver.target.animation = undefined;
    }
  }

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }

  onAddAnimation(){
    
  }
}
