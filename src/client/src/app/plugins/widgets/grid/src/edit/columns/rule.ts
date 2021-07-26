import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { ColumnStyleRule, ColumnType } from '../../grid.m';
import { WidgetConsumer } from '../../base/widget-consumer';
import { DropDownComponent } from 'uilib';

@Component({
  selector: 'editor-column-rule',
  templateUrl: `./rule.html`
})
export class ColumnRuleEditorComponent extends WidgetConsumer  {

  @Input() rule: ColumnStyleRule;
  @Output() remove = new EventEmitter<ColumnStyleRule>();

  availableTypes = DropDownComponent.wrapEnum( ColumnType );
  ColumnTypeRef = ColumnType;

  itemsDateFormat =	[
    'YYYY-MM-DD HH:mm:ss',
    'YYYY-MM-DD HH:mm:ss.SSS',
    'YY/MM/DD h:mm:ss a',
    'MMMM D, YYYY LT',
    'YYYY-MM-DD',
  ]
  .map( x => { return {label: x } });

  get key(): string{
    return this.rule.key;
  }

  onSetKey( k: string ){
    this.rule.key = k;
    this.fetch();
  }

  get header(): string{
    return this.rule.header;
  }

  onSetHeader( h: string ){
    this.rule.header = h;
    this.fetch();
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

    this.widget.rules = this.widget.rules ?? new Array<ColumnStyleRule>();
  }

  ngOnInit(){

  }
}
