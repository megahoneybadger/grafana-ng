import { Component, Inject } from '@angular/core';
import { Dom, Rect, Svg } from '@svgdotjs/svg.js';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseSvgPanelComponent } from '../base';

@Component({
  selector: 'objects-explorer',
  templateUrl: './explorer.html',
  styleUrls: [ './explorer.scss' ]
})
export class ObjectsExplorerComponent extends BaseSvgPanelComponent {

  items: ExplorerListItem[];
  mask: Rect;
  filter: string

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
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
    this.mask?.remove();

    this
      .items
      .filter( x => x !== item )
      .forEach( x => x.selected = false );

    if( !item ){
      return;
    }

    item.selected = !item.selected;

    if( !item.selected ){
      this.mask?.remove();
    } else {
      const box = item.element.bbox();
      
      this.mask = this.svg.rect(box.w, box.h).fill('#a0c6e8').opacity( 0.5 );
      this.mask.move(box.x, box.y);
    }
 
  }
}

export class ExplorerListItem{
  element: any;
  selected: boolean;
}
