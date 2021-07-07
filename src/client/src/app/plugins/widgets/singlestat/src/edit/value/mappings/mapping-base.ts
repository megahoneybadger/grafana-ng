import { Component, Directive, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { Mapping } from '../../../singlestat.m';

@Directive()
export class ValueBaseMappingComponent extends WidgetConsumer {

  @Input() mapping: Mapping;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }

  onRemove(){
    const index = this
    .widget
    .mappings
    .indexOf( this.mapping );

    this.widget.mappings.splice( index, 1 );

    this.pull();
  }
}
