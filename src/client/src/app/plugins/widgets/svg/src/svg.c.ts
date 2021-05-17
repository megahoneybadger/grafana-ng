import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { Panel, PanelLinkType, PANEL_TOKEN } from 'common';
import { SVG } from '@svgdotjs/svg.js'
import { WidgetConsumer } from './base/base-panel';
import { DataProvider } from './base/data-provider';
import { RuleDispatcher } from './base/rule-dispatcher';
import { Router } from '@angular/router';

@Component({
  selector: 'widget',
  template: `<div class="full-height" #canvas></div>`,
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
    public binder: RuleDispatcher,
    public router: Router ) {

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

   this.enableStretching();
   this.enableLinks();
  }

  enableStretching(){
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

  enableLinks(){

    this.svg?.find( '[id]' ).map( x => {
      const link = this
        .links
        .find( y => y.id == x.node.id );
        
      if( link ){
        x.css( "cursor", "pointer" );
      }
    });

    this.svg?.click( e => {
      const link = this
        .links
        .find( x => x.id == e.target.id );

      if( link ){

        if( link.type == PanelLinkType.Absolute ){
          window.location.href = link.url;
        } else{
          this.router.navigate( [ link.url ] );
        }
      }
    } )
  }

  disableLinks(){
    //console.log( 'disable links' );
    this
      .svg
      ?.click( null )
      ?.find( '[id]' )
      .map( x => x.css( "cursor", "default" ));
  }

  
}
