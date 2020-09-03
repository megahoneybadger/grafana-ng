
import { Component, Input, TemplateRef, ContentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'ed-grid-column',
  templateUrl: './column.c.html',
})
export class ColumnComponent {

  @Input() field: string;
  @Input() title: string;
  @Input() width: number = 0;
  
  @ContentChild(TemplateRef) template: TemplateRef<HTMLElement>; 
  @ViewChild('default') defaultTemplate: TemplateRef<any>;

  ngAfterViewInit(){
    if( !this.template ){
      setTimeout( () => this.template = this.defaultTemplate, 0 );
      
    }
  }
}
