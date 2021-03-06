import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import * as _ from 'lodash';
import { BindingBaseRuleComponent } from '../base-rule';

@Component({
  selector: 'binding-if-rule',
  templateUrl: './if-rule.html',
  host: {'class': 'gf-form-inline'}
})
export class BindingIfRuleComponent extends BindingBaseRuleComponent {

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }
}
