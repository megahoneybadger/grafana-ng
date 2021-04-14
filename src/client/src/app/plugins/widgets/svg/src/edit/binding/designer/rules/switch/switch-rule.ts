import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingCaseResolver } from '../../../../../svg.m';
import { BindingBaseRuleComponent } from '../base-rule';

@Component({
  selector: 'binding-switch-rule',
  templateUrl: './switch-rule.html'
})
export class BindingSwitchRuleComponent extends BindingBaseRuleComponent {

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }

  ngOnInit(){
    this.rule.caser = this.rule.caser ?? [];
  }

  onAddCase(){
    this.rule.caser.push( new BindingCaseResolver());
  }

  onRemoveCase( cr: BindingCaseResolver ){
    const index = this.rule.caser.indexOf( cr );
    this.rule.caser.splice( index, 1 );
  }
}
