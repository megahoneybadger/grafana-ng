import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BrowserModel } from './browser.m';

@Component({
  selector: 'widget',
  template: `
  <div markdown 
    [data]="content"
    class="markdown-html"
    style="height:100%" >
  </div>`,
})
export class BrowserPanelComponent {

  get url() : string{
    return this.panel?.widget?.url ?? '';
  }

  get content(){
    return `<iframe src="${this.url}" width="100%" height="100%"></iframe>`
  }

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel) {
    this.panel.widget = this.panel.widget ?? new BrowserModel();
  }
}
