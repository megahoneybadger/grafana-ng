import { Component, Input } from '@angular/core';
import { NavigationProvider, NavigationHelper } from 'src/app/core/services/navigation.s';
import { PageNavigation } from 'src/app/core/models/nav';

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
