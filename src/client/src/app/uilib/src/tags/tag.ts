import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { TagColorHelper } from './tag-helper';

@Component({
  selector: 'ed-tag',
  styleUrls: [ './tag.scss' ],
  encapsulation:ViewEncapsulation.None, 
  template: `
    <span [ngStyle]="tagColorStyle" class="label label-tag" [ngClass]="{'pointer': canRemove}">
      <i class="fa fa-remove mr-1" *ngIf="canRemove"></i>{{label? label: text}}
    </span>`
})
export class TagComponent {
  @Input() text: string;
  @Input() canRemove: boolean = false;
  @Input() color: boolean = true;
  @Input() label: string;

  get tagColorStyle(){
    const sheme = TagColorHelper.getColor( this.text );

    return this.color ? {
      'background-color': sheme.color,
      'border-color': sheme.borderColor,
    } : {};
  }
}

