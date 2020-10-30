import { Component, Input, forwardRef, TemplateRef, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { TextBoxValidationTemplate } from './directives';

@Component({
  selector: 'ed-textbox',
  templateUrl: './textbox.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextBoxComponent),  
      multi: true
    }
  ]
})
export class TextBoxComponent extends BaseNgModelComponent {
  @Input() label: string;
  @Input() labelWidth:number;
  @Input() width: number;
  @Input() hint: string;
  @Input() maxlength: number;
 
  @Input() placeholder: string = '';
  @Input() type: "text" | "password" | "number" = "text"; 

  @ContentChildren(TextBoxValidationTemplate)
    validationTemplates: QueryList<TextBoxValidationTemplate> 
  
  @Output() changed = new EventEmitter<string>();

  get value(): any {
    return this._value;
  };
  
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      this.changed.emit( v )
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

