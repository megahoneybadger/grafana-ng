import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[widget-anchor]'
})

export class PanelWidgetAnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[widget-editor-anchor]'
})

export class PanelWidgetEditorAnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}