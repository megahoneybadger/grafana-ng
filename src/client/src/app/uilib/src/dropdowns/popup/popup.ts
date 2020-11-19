import { Component, Input, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'ed-popup',
  templateUrl: './popup.html',
  styleUrls: [ 'popup.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent {
  private _visible: boolean = false;
  private _offset: PopupOffset;

  @Input() anchor: any;
  @Input() anchorAlign: Alignment;
  @Input() shadow: boolean = false;

  @Input() set offset( o: PopupOffset ){
    this._offset = o;

    if( this.offsetElement ){
     
      //this.panel?.hide();
      //this.visible = true;

      
      //setTimeout( () => this.visible = true );
      
    }
  }

  get offset(): PopupOffset{
    return this._offset;
  }

  offsetElement: any;
 
  @Output() visibleChange = new EventEmitter();
  @ViewChild( 'op' ) panel : OverlayPanel;

  @Output() hide = new EventEmitter();
  @Output() show = new EventEmitter();
  @Input() showTransitionOptions: string = "0s";

  @Input() set visible( v: boolean ){
    if( v === undefined /*|| v == this._visible*/ ){
      return;
    }

    if( v ){
      this._visible = v;
      let anch = this.anchor;

      if( this.anchorAlign ){
       this._offset = this.getAnchorAlignedOffset();
      }

      if( this.offset ){
        this.offsetElement = document.createElement('div');
        document.body.appendChild(this.offsetElement);

        this
          .offsetElement
          .style
          .cssText = `position:absolute;top:${this.offset.top}px;left:${this.offset.left}px`;
        
        anch = this.offsetElement;
      }

      this.panel?.show( undefined, anch );
    } else {
      this.panel?.hide();
    }

    this.visibleChange.emit( v );
  }

  get visible(){
    return this._visible;
  }

  onShow(){
    this.show.emit();
    //console.log( this.panel );
  }

  onHide(){
    if( this.offsetElement ){
      document.body.removeChild( this.offsetElement );
      this.offsetElement = undefined;
    }

    this._visible = false;
    this.visibleChange.emit( false );
    this.hide.emit();
  }

  getAnchorAlignedOffset(){
    var rect = this.anchor.getBoundingClientRect();

    let left = rect.left;
    let top = rect.top;

    switch(this.anchorAlign.horizontal){
      case "right":
        left = rect.left + rect.width
        break;
    }

    switch(this.anchorAlign.vertical){
      case "top":
        top = rect.top
        break;

      case "bottom":
        top = rect.top + rect.height
        break;
    }

    return {
      left: left,
      top: top,
    }
  }
}


export interface Alignment{
  horizontal: string;
  vertical: string;
}

export interface PopupOffset{
  left: number;
  top: number;
}


