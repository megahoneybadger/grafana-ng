import { Component, Input, forwardRef, TemplateRef, ContentChildren } from '@angular/core';

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
  @Input() tooltip: string;
  @Input() placeholder: string = '';

  @ContentChildren(TextBoxValidationTemplate)
    validationTemplates: TemplateRef<TextBoxValidationTemplate> 

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

