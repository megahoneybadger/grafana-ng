import { Component, Input } from '@angular/core';
import { PageNavigation, NavigationHelper, NavigationProvider } from 'common';

@Component({
  selector: 'ed-page-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],

})
export class PageHeaderComponent {
  nav: PageNavigation;

  get main(){
    return this.nav?.main;
  }

  @Input() set navigation( n: string | PageNavigation ){
    this.nav = ( typeof n === "string") ? 
      NavigationHelper.createNavigationFromIndex( this.navProvider.index, n ) : n;
  }

  constructor(private navProvider: NavigationProvider) {
    
  }
}
