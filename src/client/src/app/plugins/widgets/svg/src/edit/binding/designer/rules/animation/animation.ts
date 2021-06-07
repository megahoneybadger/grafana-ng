import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../../../base/base-panel';
import { BindingResolver } from '../../../../../svg.m';
import { BindingBaseRuleComponent } from '../base-rule';

@Component({
  selector: 'binding-animation',
  templateUrl: './animation.html',
  host: {'class': 'gf-form-inline'}
})
export class BindingAnimationComponent extends BindingBaseRuleComponent {
  
  get resolver(){
    return this
      .rule
      .resolvers[ 0 ];
  }

  get animation(){
    return this
      .resolver
      .target
      .animation;
  }

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }
  
  onRemoveAnimation(){
    this
      .resolver
      .target
      .animation = undefined;
  }
 
}
