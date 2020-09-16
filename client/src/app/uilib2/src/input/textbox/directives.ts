import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[edValidationTemplate]'
})
export class TextBoxValidationTemplate  {
  constructor(public templateRef: TemplateRef<any>) {
   
  }
}



