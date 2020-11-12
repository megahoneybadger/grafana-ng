
import { Component, Input, TemplateRef, ContentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'ed-grid-column',
  templateUrl: './column.html',
})
export class ColumnComponent {

  @Input() field: string;
  @Input() title: string;
  @Input() width: number = 0;

  @Input() contentClass: string = '';
  @Input() headerClass: string = '';
  
  @ContentChild(TemplateRef) template: TemplateRef<HTMLElement>; 
  @ViewChild('default') defaultTemplate: TemplateRef<any>;

  ngAfterViewInit(){
    if( !this.template ){
      setTimeout( () => this.template = this.defaultTemplate, 0 );
    }
  }
}
