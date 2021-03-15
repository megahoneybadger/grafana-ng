import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { TextRenderMode, TextModel } from '../../text.m'

@Component({
  selector: 'editor-options',
  templateUrl: './options.html'
})
export class OptionsEditorComponent {

  availableModes = DropDownComponent.wrapEnum( TextRenderMode )
  mode: TextRenderMode = TextRenderMode.Markdown;
  content: string;

  get widget() : TextModel{
    return this.panel.widget;
  }
 
  constructor(@Inject( PANEL_TOKEN ) private panel: Panel){
    
    this.panel.widget = this.panel.widget ?? new TextModel();
  }

  ngOnInit(){

		
  }

 
}
