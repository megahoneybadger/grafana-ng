
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
 
  @Output() public delete = new EventEmitter();

  onCancel() {
    event.stopPropagation();
    delete this.item.confirmDelete;
  }
}
