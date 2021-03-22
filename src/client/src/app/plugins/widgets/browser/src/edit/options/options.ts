import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BrowserModel } from '../../browser.m'

@Component({
  selector: 'editor-options',
  templateUrl: './options.html'
})
export class OptionsEditorComponent {

  get widget() : BrowserModel{
    return this.panel.widget;
  }
 
  constructor(@Inject( PANEL_TOKEN ) public panel: Panel){
  }

  onChangeUrl(url: string){
    this.widget.url = url;
  }
}
