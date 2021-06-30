import { Component, Input, forwardRef, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';

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
  @Input() labelClass:string;
  @Input() width: number;
  @Input() hint: string;
  @Input() maxlength: number;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
 
  @Input() placeholder: string = '';
  @Input() type: "text" | "password" | "number" = "text"; 

  @ContentChildren(TextBoxValidationTemplate)
    validationTemplates: QueryList<TextBoxValidationTemplate> 
  
  @Output() changed = new EventEmitter<string>();
  @Output() blur = new EventEmitter(); 

  get value(): any {
    return this._value;
  };
  
  @Input() set value(v: any) {
    if (v !== this._value) {

      let ev = v;
      
      if( this.type == "number" ){
        ev = ( v === "" ) ? undefined : +v;
      } 

      this._value = ev;

      this.onChange(ev);

      this.changed.emit( ev )
    }
  }

  getLabelWidth(){
    return {
      [`width-${this.labelWidth}`]: (this.labelWidth),
      [this.labelClass]: true
    }
  }

  getContentWidth(){
    return {
      [`width-${this.width}`]: (this.width)
    }
  }
}

