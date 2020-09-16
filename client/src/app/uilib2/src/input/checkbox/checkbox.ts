import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';

@Component({
  selector: 'ed-checkbox',
  templateUrl: './checkbox.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),  
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class CheckBoxComponent extends BaseNgModelComponent {
  @Input() label: string;
  @Input() labelWidth:number;
  @Input() width: number;
  @Input() tooltip: string;

  @Input() disabled: boolean = false;

  @Output() checked = new EventEmitter<boolean>();

  get value(): any {
    return this._value;
  };
 
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      this.checked.emit( this._value );
    }
  }

  getLabelWidth(){
    return {
      [`width-${this.labelWidth}`]: (this.labelWidth)
    }
  }

  getContentWidth(){
    return {
      [`width-${this.width}`]: (this.width)
    }
  }
}

