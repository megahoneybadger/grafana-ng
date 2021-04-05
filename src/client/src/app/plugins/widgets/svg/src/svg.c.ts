import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { SvgModel } from './svg.m';
import { SVG } from '@svgdotjs/svg.js'
import { BaseSvgPanelComponent } from './base/base-panel';
import { DataProvider } from './base/data-provider';

@Component({
  selector: 'widget',
  template: `<perfect-scrollbar><div #canvas></div></perfect-scrollbar>`,
  providers:[
    DataProvider
  ]
})
export class SvgPanelComponent extends BaseSvgPanelComponent {

  @ViewChild('canvas') public canvas: ElementRef;

  constructor( @Inject( PANEL_TOKEN ) panel: Panel, private dp: DataProvider ) {
    super( panel );

    this.panel.widget = this.panel.widget ?? new SvgModel();
  }

  ngAfterViewInit(){
    this.widget.component = this;
    this.load( this.content );
  }

  ngOnDestroy(){
    this.widget.component = undefined;
  }

  load( content: string ){
    this.content = content;

    this.widget.content = JSON.stringify( content );

    const draw = SVG( this.canvas.nativeElement )
      .clear()
      .svg( content );
  }
}
