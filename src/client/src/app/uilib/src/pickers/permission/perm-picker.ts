import { Component, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { Permission } from 'common';
import { DropDownComponent } from '../../dropdowns/dropdown/dropdown';

@Component({
  selector: 'ed-permission-picker',
  templateUrl: './perm-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PermissionPickerComponent),
      multi: true
    }]
  })
export class PermissionPickerComponent extends BaseNgModelComponent {

  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  availablePermissions = DropDownComponent.wrapEnum( Permission );
  PermissionRef = Permission;
  
  @Output() selected = new EventEmitter<Permission>()

  get value(): any {
    return this._value;
  };
 
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      this.selected.emit( this._value );
    }
  }

  forceValue( v : any = undefined ){
    this._value = v;
    this.onChange(v);
  }
}

