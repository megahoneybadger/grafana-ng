import { Component, Output, EventEmitter, forwardRef, ViewEncapsulation, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { menuItems } from './units';
import * as _ from 'lodash';

@Component({
  selector: 'ed-unit-picker',
  templateUrl: './unit-picker.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UnitPickerComponent),  // replace name as appropriate
      multi: true
    }]
  
  })
export class UnitPickerComponent extends BaseNgModelComponent {

  units = _.cloneDeep( menuItems );
  @Output() pick = new EventEmitter<string>()

  @Input() labelWidth:number;
  @Input() width: number;
  
  get value(): any {
    return this._value;
  };
  
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      if( undefined !== this.value ){
        this.pick.emit( this.value )
      }
    }
  }
}

