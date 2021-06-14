import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import * as _ from 'lodash';
import { BindingAnimation, BindingResolveAction } from '../../../../../svg.m';
import { AnimationRangeHelper } from './animation/range-helper';
import { BindingBaseRuleComponent } from '../base-rule';

@Component({
  selector: 'binding-target-editor',
  templateUrl: './target.html',
  host: {'class': 'gf-form-inline'}
})
export class BindingTargetEditorComponent extends BindingBaseRuleComponent {


  get action() : BindingResolveAction {
    return this.resolver.target.animation ?
      BindingResolveAction.Animation :
      BindingResolveAction.Eq;
  }

  set action( a: BindingResolveAction ) {
    if( a == BindingResolveAction.Animation ){
      const  {from, to} = AnimationRangeHelper.getDefault( this.target.property );

      const anim =  new BindingAnimation();
      anim.duration = 1000;
      anim.swing = false;
      anim.from = from;
      anim.to = to;

      this.target.animation = this.target.animation ?? anim;
    } else {
      this.target.animation = undefined;
    }
  }

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }

  onValueChange( v ){
    
  }
}
