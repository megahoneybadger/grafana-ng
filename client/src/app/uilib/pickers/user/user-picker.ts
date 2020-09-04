import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { User } from 'src/app/core/models/user';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';

@Component({
  selector: 'ed-user-picker',
  templateUrl: './user-picker.html',
  styleUrls: [ './user-picker.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserPickerComponent),  // replace name as appropriate
      multi: true
    }]
  
  })
export class UserPickerComponent extends BaseNgModelComponent {
  data: SelectItem[];

  @Input() set users( u: User[] ){
    this.value = undefined;
    this.data = u.map(x => { return { label: <any>x, value: x } })
  }

  @Output() selected = new EventEmitter<User>()
}

