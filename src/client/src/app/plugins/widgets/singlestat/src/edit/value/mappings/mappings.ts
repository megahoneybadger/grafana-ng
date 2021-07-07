import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/widget-consumer';
import { Mapping, MappingType } from '../../../singlestat.m';

@Component({
  selector: 'value-editor-mappings',
  templateUrl: './mappings.html'
})
export class ValueMappingsEditorComponent extends WidgetConsumer {

  MappingTypeRef = MappingType;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
  }

  onAddMapping( type: MappingType ){
    const m = new Mapping();
    m.type = type;
    this.widget.mappings.push( m );
  }
}
