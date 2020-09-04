import { Component, Input } from '@angular/core';
import { PageNavigation } from 'src/app/core/models/nav';

@Component({
  selector: 'ed-page',
  template: `
    <ed-page-header [navigation]="navigation"></ed-page-header>

    <div class="page-container page-body">
      <ng-content></ng-content>
    </div> `
})
export class PageComponent {
  @Input() navigation: string | PageNavigation;
  @Input() disabled: boolean = false;
}


