import { Component, EventEmitter, Output } from '@angular/core';
import { menuItems } from './func-items';
import * as _ from 'lodash';
import { ContextMenuComponent } from 'uilib';

@Component({
  selector: 'field-function-picker',
  template: `
    <div class="gf-form" >
      <a class="gf-form-label pointer" (click)="cm.show( $event )" >
        <i class="fa fa-plus" ></i>
      </a>
    </div>

    <ed-context-menu [items]="items" #cm></ed-context-menu>
  `
})
export class FieldFunctionPickerComponent   {
  items =	_.cloneDeep( menuItems ); 

  @Output() pick = new EventEmitter<any>();

  ngOnInit(){
    ContextMenuComponent.wrapItems( this.items, x => this.pick.emit( x.item ) )
  }
}