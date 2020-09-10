import { Component, Input, TemplateRef, ContentChild, ViewChild, Directive, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[edTabTitle]'})
export class TabTitleTemplate  {
  constructor(public templateRef: TemplateRef<any>) {
   
  }
}


@Directive({selector: '[edTabContent]'})
export class TabContentTemplate  {
  constructor(public templateRef: TemplateRef<any>) {
   
  }
}

@Component({
   selector: 'ed-tab',
   template: ''
})
export class TabComponent {
  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: any;
  
  @Input() header: string;

  @ContentChild(TabTitleTemplate) titleTemplate: TemplateRef<TabTitleTemplate> 
  @ContentChild(TabContentTemplate) contentTemplate: TemplateRef<TabContentTemplate> 

  
}


