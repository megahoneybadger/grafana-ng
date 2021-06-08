import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import * as _ from 'lodash';
import { BindingBaseRuleComponent } from '../base-rule';
import { BindingAnimation } from '../../../../../svg.m';


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

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }

  onAddAnimation(){
    const anim =  new BindingAnimation();
    anim.duration = 1000;
    anim.swing = false;

    this.resolver.target.animation = this.resolver.target.animation ?? anim;
  }
}
