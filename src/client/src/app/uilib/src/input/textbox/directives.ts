import { Directive, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[edValidationTemplate]'
})
export class TextBoxValidationTemplate  {
  constructor(public templateRef: TemplateRef<any>) {
   
  }
}

@Directive({
  selector: '[edAutoFocus]'
})
export class AutoFocusDirective implements OnInit {

  constructor(private elementRef: ElementRef) { };

  ngOnInit(): void {
    this.elementRef.nativeElement.focus()
  }

}



