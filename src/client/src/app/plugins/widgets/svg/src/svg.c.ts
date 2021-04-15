import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { SVG } from '@svgdotjs/svg.js'
import { WidgetConsumer } from './base/base-panel';
import { DataProvider } from './base/data-provider';
import { RuleDispatcher } from './base/rule-dispatcher';

@Component({
  selector: 'widget',
  template: `<div class="full-height" #canvas></div>`,
  //template: `<perfect-scrollbar><div class="full-height" #canvas></div></perfect-scrollbar>`,
  providers:[
    DataProvider,
    RuleDispatcher
  ]
})
export class SvgPanelComponent extends WidgetConsumer {

  @ViewChild('canvas') public canvas: ElementRef;

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel, 
    public dp: DataProvider,
    public binder: RuleDispatcher ) {

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

    SVG( this.canvas.nativeElement )
      .clear()
      .svg( content );

    if( this.svg && this.settings.stretch ){
      const w = this.svg.width();
      const h = this.svg.height();

      this.svg.width( "100%" );
      this.svg.height( "100%" );
      this.svg.viewbox( 0, 0, w, h );
      this.svg.attr("preserveAspectRatio", 
        `${this.settings.preserveAspectRatio} meet` );
    }


  }
}
