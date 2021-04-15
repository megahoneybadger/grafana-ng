import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingResolver } from '../../../../../svg.m';
import { BindingBaseRuleComponent } from '../base-rule';

@Component({
  selector: 'binding-switch-rule',
  templateUrl: './switch-rule.html'
})
export class BindingSwitchRuleComponent extends BindingBaseRuleComponent {

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }
  
  onAddCase(){
    this.rule.resolvers.push( new BindingResolver() );
  }

  onRemoveCase( r: BindingResolver ){
    const index = this.rule.resolvers.indexOf( r );
    this.rule.resolvers.splice( index, 1 );
    this.change.emit()
  }
}
