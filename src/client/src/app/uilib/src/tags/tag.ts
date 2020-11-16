import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { TagColorHelper } from './tag-helper';

@Component({
  selector: 'ed-tag',
  encapsulation:ViewEncapsulation.None, 
  template: `
    <span [ngStyle]="TagColorHelperRef.getStyle( text )"
      class="label label-tag" [ngClass]="{'pointer': canRemove}">
      <i class="fa fa-remove mr-1" *ngIf="canRemove"></i>{{label? label: text}}
    </span>`
})
export class TagComponent {
  @Input() text: string;
  @Input() canRemove: boolean = false;
  @Input() color: boolean = true;
  @Input() label: string;

  TagColorHelperRef = TagColorHelper;
}

