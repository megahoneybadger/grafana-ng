import { Component, Input, forwardRef } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextBoxComponent } from '../textbox/textbox';

@Component({
  selector: 'ed-textarea',
  templateUrl: './textarea.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),  
      multi: true
    }
  ]
})
export class TextAreaComponent extends TextBoxComponent {

  @Input() rows: number;
 
}

