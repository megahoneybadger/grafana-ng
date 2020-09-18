import { Component, Input } from '@angular/core';

@Component({
  selector: 'ed-label-icon',
  template: `
    <div class="ed-flex">
      <ed-icon [icon]="icon"></ed-icon>

      <div class="ml-2">
        <ng-content></ng-content>  
      </div>
    </div>
  `,
})
export class LabelIconComponent {
  @Input() icon: string;
}
