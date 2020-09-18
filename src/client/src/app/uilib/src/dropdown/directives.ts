import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: '[edDropDownValueTemplate]'
})
export class DropDownValueTemplate  {
  constructor(public templateRef: TemplateRef<any>) {
   
  }
}


@Directive({
  selector: '[edDropDownSelectedValueTemplate]'
})
export class DropDownSelectedValueTemplate  {
  constructor(public templateRef: TemplateRef<any>) {
   
  }
}

