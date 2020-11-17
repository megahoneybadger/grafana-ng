import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'ed-empty-list',
  templateUrl: './empty-list.html',
  styleUrls:[ 'empty-list.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class EmptyListComponent  {

  @Input() title: string;
  @Input() buttonIcon: string;
  @Input() buttonTitle: string;
  @Input() proTip: string;

  @Output() ready = new EventEmitter();
}
