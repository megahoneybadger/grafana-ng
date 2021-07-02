import { Component, Output, EventEmitter, forwardRef, ViewEncapsulation, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import * as _ from 'lodash';

@Component({
  selector: 'ed-font-size-picker',
  templateUrl: './font-size-picker.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FontSizePickerComponent),  // replace name as appropriate
      multi: true
    }]
  
  })
export class FontSizePickerComponent extends BaseNgModelComponent {

  availableFontSizes = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200 ]
  .map( x => {
    return {
      label: `${x}%`,
      value: x
    }
  } );

  @Output() pick = new EventEmitter<number>()

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

