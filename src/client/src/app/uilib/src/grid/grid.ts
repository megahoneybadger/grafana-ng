import { Component, Input, ContentChildren, QueryList,
   ContentChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ColumnComponent } from './data-column/column';
import { DeleteColumnComponent } from './delete-column/delete-column';

@Component({
  selector: 'ed-grid',
  templateUrl: './grid.html',
  styleUrls: [ 'grid.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent {
  @Input() data;
  @Input() highlight: boolean = true;
  @Input() selectable: boolean = false;
  @Input() height: number = 0;

  @Output() selected = new EventEmitter<any>()

  @ContentChildren(ColumnComponent) columns: QueryList<ColumnComponent> 
  @ContentChild(DeleteColumnComponent) deleteColumn: DeleteColumnComponent;
  
  getTrClass(){
    return {
      'highlight': this.highlight == true,
      'selectable': this.selectable == true,
    }
  }

  getTdStyle( c: any ){
    return {
      'width': (0 != c.width ) ? `${c.width}px` : null
    }
  }

  getTdClass( c: any ){
    return {
      'selectable': this.selectable,
      [c.contentClass]: true
    }
  }

  getTableStyle(){
    return {
      'height': (0 != this.height ) ? `${this.height}px` : null
    }
  }

  onClick( item ){
    if( !this.selectable ){
      return;
    }

    this.selected.emit( item );
  }
}
