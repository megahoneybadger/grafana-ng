import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingBaseRuleComponent } from '../base-rule';

@Component({
  selector: 'binding-map-rule',
  templateUrl: './map-rule.html',
  host: {'class': 'gf-form-inline'}
})
export class BindingMapRuleComponent extends BindingBaseRuleComponent {

  get resolver(){
    return this
      .rule
      .resolvers[ 0 ]
      ?.target;
  }

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }
}
