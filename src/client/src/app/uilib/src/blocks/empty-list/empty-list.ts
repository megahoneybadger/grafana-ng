import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ed-empty-list',
  templateUrl: './empty-list.html',
  styleUrls:[ 'empty-list.scss' ]
})
export class EmptyListComponent  {

  @Input() title: string;
  @Input() buttonIcon: string;
  @Input() buttonTitle: string;
  @Input() proTip: string;

  @Output() ready = new EventEmitter();
}
