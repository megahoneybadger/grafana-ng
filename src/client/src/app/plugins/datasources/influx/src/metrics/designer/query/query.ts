import { Component, EventEmitter, Output } from '@angular/core';
import { BaseQueryComponent } from './query-base';

@Component({
  selector: 'query-editor',
  templateUrl: './query.html'
})
export class QueryEditorComponent extends BaseQueryComponent {

  contextMenuItems = [];

  opened: boolean = true;
  editMode: boolean = false;

  @Output() remove = new EventEmitter();
  @Output() moveUp = new EventEmitter();
  @Output() moveDown = new EventEmitter();
  @Output() duplicate = new EventEmitter();

  constructor(){
    super();
  }
  

  ngOnInit(){
    this.contextMenuItems = [
      {
        label: 'Toggle edit mode',
        command: ( _ ) => this.editMode != this.editMode
      },

      {
        label: 'Duplicate',
        command: ( _ ) => this.duplicate.emit()
      },

      {
        label: 'Move up',
        command: ( _ ) => this.moveUp.emit()
      },

      {
        label: 'Move down',
        command: ( _ ) => this.moveDown.emit()
      },
    ]
  }
}