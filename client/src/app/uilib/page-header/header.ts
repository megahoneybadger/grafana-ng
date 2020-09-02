import { Component, Input } from '@angular/core';
import { NavigationProvider } from 'src/app/core/services/navigation.s';
import { NavigationItem, NavigationIndex, PageNavigation } from 'src/app/core/models/nav';

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

  get node(){
    return this.nav?.node;
  }

  @Input() set navigationKey( key: string ){
    if( key ){
      this.nav =  this.build( this.navProvider.index, key )
    }
  }

  @Input() set navigation( n: PageNavigation ){
    this.nav = n;
  }

  constructor(private navProvider: NavigationProvider) {
  }


  build(navIndex: NavigationIndex, id: string, fallback?: PageNavigation): PageNavigation {
    if (navIndex[id]) {
      const node = navIndex[id];
      const main = {
        ...node.parent,
      };

      main.children = main.children.map(item => {
        return {
          ...item,
          active: item.url === node.url,
        };
      });

      return {
        node: node,
        main: main,
      };
    }

    if (fallback) {
      return fallback;
    }

    return this.buildNotFound();
  }

  buildNotFound(): PageNavigation {
    const node: NavigationItem = {
      id: 'not-found',
      text: 'Page not found',
      icon: 'fa fa-fw fa-warning',
      subTitle: '404 Error',
      url: 'not-found',
    };
  
    return {
      node: node,
      main: node,
    };
  }
}
