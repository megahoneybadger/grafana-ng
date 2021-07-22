import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { GridColumnStyleRule } from '../../grid.m';
import { WidgetConsumer } from '../../base/widget-consumer';

@Component({
  selector: 'editor-column-rule',
  templateUrl: `./rule.html`
})
export class ColumnRuleEditorComponent extends WidgetConsumer  {

  @Input() rule: GridColumnStyleRule;
  @Output() remove = new EventEmitter<GridColumnStyleRule>();

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    this.widget.rules = this.widget.rules ?? new Array<GridColumnStyleRule>();


  }

 
}
