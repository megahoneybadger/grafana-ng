import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN, Panel } from 'common';
import { TextModel } from './text.m';

@Component({
  selector: 'widget',
  template: `
  <div markdown 
    [data]="panel?.widget?.content"
    class="markdown-html"
    style="height:100%" >
  </div>
  `,
})
export class TextPanelComponent {
  
  constructor( @Inject( PANEL_TOKEN ) public panel: Panel) { 
    this.panel.widget = this.panel.widget ?? new TextModel();
  }
}




