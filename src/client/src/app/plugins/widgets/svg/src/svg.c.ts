import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { SvgModel } from './svg.m';
import { SVG } from '@svgdotjs/svg.js'
import { BaseSvgPanelComponent } from './edit/base';

@Component({
  selector: 'widget',
  template: `<perfect-scrollbar><div #canvas></div></perfect-scrollbar>`,
  styles: [
  ]
})
export class SvgPanelComponent extends BaseSvgPanelComponent {

  @ViewChild('canvas') canvas: ElementRef;

  constructor( @Inject( PANEL_TOKEN ) panel: Panel) {
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

    // const res = draw.findOne( '#r1' )
    // const all = draw.find( '[id]' )

    // //var click = function()
    
    

    // var over = function() {
    //   this.fill({ color: 'red' })
    // }

    
    // res.on('mouseover', function() {
    //   this.fill({ color: 'red' })
    // })
    // res.on('mouseout', function() {
    //   this.fill({ color: 'green' })
    // })

    // console.log( all );
  }
}
