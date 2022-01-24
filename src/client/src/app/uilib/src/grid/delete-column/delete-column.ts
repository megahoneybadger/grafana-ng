
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ed-grid-delete-column',
  templateUrl: './delete-column.html',
  styleUrls: ['delete-column.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteColumnComponent {
  @Input() width: number = 0;
  @Input() item: any;

  @Input() needConfirm: boolean = true;
  @Input() sliding: boolean = true;
 
  @Output() delete = new EventEmitter();

  onCancel() {
    event?.stopPropagation();
    delete this.item.confirmDelete;
  }

  onPreliminaryClick( e ){
    if( this.needConfirm ){
      console.log( 'onPreliminaryClick' );
      this.item.confirmDelete=true;
      e?.stopPropagation();
    } else {
      this.delete.emit();
    }
  }


}
