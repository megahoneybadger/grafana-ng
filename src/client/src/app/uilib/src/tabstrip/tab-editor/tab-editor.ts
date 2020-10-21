import { Component, ContentChildren, QueryList, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import { TabComponent } from '../tab';

@Component({
  selector: 'ed-tabstrip-editor',
  templateUrl: './tab-editor.html',
  styleUrls: [ 'tab-editor.scss' ]
})
export class TabStripEditorComponent {
  
  @Input() megatabs: any;

  @ContentChildren(TabComponent) tabs: QueryList<TemplateRef<TabComponent>> 

  @Output() tabSelect = new EventEmitter<number>();
}

