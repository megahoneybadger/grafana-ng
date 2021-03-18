import { Component, Inject, OnInit } from '@angular/core';
import { PANEL_TOKEN, Panel } from 'common';

@Component({
  selector: 'widget',
  template: `
  <div markdown [data]="panel?.widget?.content" class="markdown-html" style="height:100%" ></div> 
    `,
})
export class TextPanelComponent implements OnInit {

  // https://medium.com/@ofir3322/create-an-online-ide-with-angular-6-nodejs-part-1-163a939a7929

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel) { 
    
  }

  ngOnInit(): void {
  }

}




