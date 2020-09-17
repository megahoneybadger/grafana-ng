import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ds-plugin-anchor]'
})

export class DataSourcePluginAnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}