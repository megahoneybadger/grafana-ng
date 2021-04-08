import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { SvgModel } from './svg.m';
import { SVG } from '@svgdotjs/svg.js'
import { WidgetConsumer } from './base/base-panel';
import { DataProvider } from './base/data-provider';
import { RuleDispatcher } from './base/rule-dispatcher';

@Component({
  selector: 'widget',
  template: `<perfect-scrollbar><div #canvas></div></perfect-scrollbar>`,
  providers:[
    DataProvider,
    RuleDispatcher
  ]
})
export class SvgPanelComponent extends WidgetConsumer {

  @ViewChild('canvas') public canvas: ElementRef;

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel, 
    private dp: DataProvider,
    private binder: RuleDispatcher ) {

      super( panel );

      if( this.widget.content ){
        this.content = JSON.parse( this.widget.content );
      }  
  }

  ngAfterViewInit(){
    this.widget.component = this;
    this.load( this.content );
  }

  ngOnDestroy(){
    this.widget.component = undefined;

    this.dp.destroy();
    this.binder.destroy();
  }

  load( content: string ){
    this.content = content;

    this.widget.content = JSON.stringify( content );

    const draw = SVG( this.canvas.nativeElement )
      .clear()
      .svg( content );
  }
}
