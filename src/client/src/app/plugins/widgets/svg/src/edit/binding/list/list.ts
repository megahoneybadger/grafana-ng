import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { SVG, easing } from '@svgdotjs/svg.js';
import { Rect } from '@svgdotjs/svg.js';
import { Panel, PANEL_TOKEN } from 'common';
import { WidgetConsumer } from '../../../base/base-panel';

@Component({
  selector: 'svg-element-list',
  templateUrl: './list.html',
  styleUrls: [ './list.scss' ]
})
export class SvgElementListComponent extends WidgetConsumer {

  items: ExplorerListItem[];
  mask: Rect;
  filter: string;

  @Output() pick = new EventEmitter<string>();

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }

  ngOnDestroy(){
    this.onItemClick( null );
  }

  ngOnInit(){
    this.items = this.svg.find( '[id]' ).map( x => {
      const item = new ExplorerListItem();
      item.element = x;
      item.selected = false;

      return item
    });

    //this.items = [ ...this.items, ...this.items, ...this.items, ...this.items ];

    this.svg.click( e => {
      const index = this.items.findIndex( x => x.element.node == e.target );
      const item = ( -1 == index ) ? undefined : this.items[ index ];
      this.onItemClick( item );
    } )
    
  }

  onItemClick( item: ExplorerListItem ){

    this.pick.emit( item?.element.node.id )

    this.mask?.remove();

    this
      .items
      .filter( x => x !== item )
      .forEach( x => x.selected = false );

    if( !item ){
      return;
    }

    item.selected = !item.selected;

    this.createMask( item );
 
  }

  createMask( item: ExplorerListItem ){
    const box = item.element.bbox();

    this.mask = this
      .svg
      .rect(box.w, box.h)
      .fill( "#ff000000" )
      .stroke( {
        color:"#FF3333",
        width: 1,
        dashoffset: 0,
        dasharray: "1",
      } )

      this.mask.css( "vector-effect", "non-scaling-stroke" );
      //this.mask.css( "vector-effect", "non-scaling-stroke" );

      //vector-effect: non-scaling-stroke; stroke-width: 3px;

      this
        .mask
        .move(box.x, box.y)
        .animate( 1000 )
        .ease( easing['-'] )
        .attr({ "stroke-dashoffset": 10 } )
        .loop( undefined, false )

      // this
      //   .svg
      //   .rect( 5, 5 )
      //   .move( box.x - 5, box.y + box.w )
      //   .fill( "red" )
      //   .css( "vector-effect", "non-scaling-size" );
        
      
  }
}

export class ExplorerListItem{
  element: any;
  selected: boolean;
}
