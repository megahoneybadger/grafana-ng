import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { User } from 'common';


@Component({
  selector: 'ed-user-picker',
  templateUrl: './user-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserPickerComponent),  // replace name as appropriate
      multi: true
    }]
  
  })
export class UserPickerComponent extends BaseNgModelComponent {
  data: SelectItem[];

  @Input() loading: boolean = false;

  @Input() set users( u: User[] ){
    this.value = undefined;
    this.data = u?.map(x => { return { label: <any>x, value: x } })
  }

  @Output() selected = new EventEmitter<User>()
}

