import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { TagColorHelper } from './tag-helper';

@Component({
  selector: 'ed-tag',
  encapsulation:ViewEncapsulation.None, 
  styleUrls: ['./tag.scss'],
  template: `
    <span [ngStyle]="TagColorHelperRef.getStyle( text )"
      class="label label-tag" [ngClass]="{'pointer': canRemove}">
      <i class="fa fa-tag mr-1" *ngIf="showIcon"></i>
      <i class="fa fa-remove mr-1" *ngIf="canRemove"></i>{{label? label: text}}
    </span>`
})
export class TagComponent {
  @Input() text: string;
  @Input() canRemove: boolean = false;
  @Input() color: boolean = true;
  @Input() label: string;
  @Input() showIcon: boolean = false;

  TagColorHelperRef = TagColorHelper;
}

