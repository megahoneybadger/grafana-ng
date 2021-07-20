import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { WidgetConsumer } from '../../base/widget-consumer';
import { GridTransform } from '../../grid.m';

@Component({
  selector: 'editor-display',
  templateUrl: './display.html'
})
export class GridDisplayEditorComponent extends WidgetConsumer  {

  availableTransforms = DropDownComponent.wrapEnum( GridTransform );

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )

  }
}
