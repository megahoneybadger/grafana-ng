import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { WidgetConsumer } from '../../base/widget-consumer';
import { LabelPosition } from '../../singlestat.m';

@Component({
  selector: 'editor-label',
  templateUrl: './label.html'
})
export class LabelEditorComponent extends WidgetConsumer {
  
  get show(): boolean{
    return this.widget.label.show;
  }

  set show( s: boolean ){
    this.widget.label.show = s;
    
    // we need this trick in order gauge resize correctly
    setTimeout( () => this.component.refresh() );
  }

  availablePositions = DropDownComponent.wrapEnum(LabelPosition);
  LabelPositionRef = LabelPosition;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
    
  }
}
