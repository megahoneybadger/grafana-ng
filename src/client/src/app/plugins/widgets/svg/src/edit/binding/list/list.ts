import { Component, ElementRef, EventEmitter, Inject, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SVG, easing } from '@svgdotjs/svg.js';
import { Rect } from '@svgdotjs/svg.js';
import { Panel, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';
import { AutoCompleteComponent } from 'uilib';
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

  @ViewChildren( "elementItems" ) elementItems: QueryList<ElementRef> ;
  @ViewChild( "itemAutocomplete" ) itemAutocomplete: AutoCompleteComponent;

  elements$ = (pattern: string) =>  {
    return of( [...this.items.filter( x => x
      .element
      .node
      .id
      .toLowerCase()
      .includes( pattern ) )] );
  }

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }

  ngOnDestroy(){
    this.onItemClick( null );
    this.svg?.click( null );

    this.items?.forEach( x => (<any>x.element).css( "cursor", "default" ));
  }

  ngOnInit(){
    setTimeout( () => this.enableSvgElementSelection() );
  }

  enableSvgElementSelection(){
    //console.log( "enable editing links" );

    this.items = this.svg.find( '[id]' ).map( x => {
      const item = new ExplorerListItem();
      item.element = x;
      item.selected = false;

      x.css( "cursor", "pointer" );

      return item
    });

    if( this.settings?.ignore ){
      this.items = this
        .items
        .filter( x => !x.element.node.id.match( this.settings.ignore ));
    }
    //this.items = [ ...this.items, ...this.items, ...this.items, ...this.items ];

    this.svg.click( e => {
      const index = this.items.findIndex( x => x.element.node == e.target );
      const item = ( -1 == index ) ? undefined : this.items[ index ];
      this.onItemClick( item );
    } )
  }

  onItemClick( item: ExplorerListItem ){

    this.pick.emit( item?.element?.node.id )

    this.mask?.remove();

    this
      .items
      .filter( x => x !== item )
      .forEach( x => x.selected = false );

      
    this
      .itemAutocomplete
      .autocomplete
      .inputEL
      .nativeElement
      .value = item?.element?.node.id ?? '';

    if( !item ){
      return;
    }


    item.selected = !item.selected;

    const index = this.items.indexOf( item );
    
    this
      .elementItems
      .toArray()[ index ]
      ?.nativeElement
      .scrollIntoView();

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

      this
        .mask
        .move(box.x, box.y)
        .animate( 1000 )
        .ease( easing['-'] )
        .attr({ "stroke-dashoffset": 10 } )
        .loop( undefined, false )
  }
}

export class ExplorerListItem{
  element: any;
  selected: boolean;
}
