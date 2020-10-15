import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NavigationItem } from 'common';

@Component({
  selector: 'ed-page-tabs-nav',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageTabsNavigationComponent {
  @Input() navigation: NavigationItem;

  get tabs()  {
    return this
      .navigation
      .children
      .filter( x => !x.hide );
  }
}
