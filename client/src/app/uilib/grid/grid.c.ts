import { Component, Input, ContentChildren, QueryList, TemplateRef, ContentChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ColumnComponent } from './data-column/column.c';
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

  @ContentChildren(ColumnComponent) columns: QueryList<TemplateRef<ColumnComponent>> 
  @ContentChild(DeleteColumnComponent) deleteColumn: TemplateRef<DeleteColumnComponent>;
  
  getTrClass(){
    return {
      'highlight': this.highlight == true,
      'selectable': this.selectable == true,
    }
  }

  getTdStyle( c: ColumnComponent ){
    return {
      'width': (0 != c.width ) ? `${c.width}px` : null,
      //'display' : (0 != c.width ) ? 'inline-block' : 'table-cell'
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
