import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[designer-anchor]'
})

export class MetricsDesignerAnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}