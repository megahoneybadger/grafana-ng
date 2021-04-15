import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { WidgetConsumer } from '../../base/base-panel';
import { AspectRatioAlignment } from '../../svg.m';

@Component({
  selector: 'editor-settings',
  templateUrl: './settings.html'
})
export class SvgSettingsComponent extends WidgetConsumer  {

  ratios = DropDownComponent.wrapEnum( AspectRatioAlignment );

  constructor( @Inject( PANEL_TOKEN ) panel: Panel  ){
    super( panel );     
  }

  onCheckStretch(){
    this.component.load( JSON.parse( this.widget.content));
    this.dataProvider.update();
  }
}
