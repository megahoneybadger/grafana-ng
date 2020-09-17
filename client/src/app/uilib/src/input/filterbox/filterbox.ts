import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';

@Component({
  selector: 'ed-filterbox',
  templateUrl: './filterbox.html',
  host: {'class': 'gf-form gf-form--grow'},
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterBoxComponent),  
      multi: true
    }
  ],
})
export class FilterBoxComponent extends BaseNgModelComponent {
  @Input() placeholder: string = '';
}
