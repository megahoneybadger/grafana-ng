import { Component, Input, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'ed-validation-message',
  templateUrl: './validation.html',
  styleUrls: [ 'validation.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ValidationMessageComponent {
  @Input() offset: number = 5;

  getOffset(){
    return {
      [`offset-width-${this.offset}`]: true,
    }
  }
}




