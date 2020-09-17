import { Component, ContentChildren, QueryList, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { TabComponent } from './tab';

@Component({
  selector: 'ed-tabstrip',
  templateUrl: './tabstrip.html',
  styleUrls: [ 'tabstrip.scss' ]
})
export class TabStripComponent {
  
  @ContentChildren(TabComponent) tabs: QueryList<TemplateRef<TabComponent>> 

  @Input() orientation : string = "top";
  @Input() stickToGradientHeader: boolean = false;
  @Output() tabSelect = new EventEmitter<number>();
}

