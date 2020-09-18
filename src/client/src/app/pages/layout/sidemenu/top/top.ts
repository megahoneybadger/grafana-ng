import { Component } from '@angular/core';
import { NavigationItem, NavigationProvider } from 'common';

@Component({
  selector: 'sidebar-top',
  templateUrl: './top.html',
  
})
export class SidebarTopComponent {

  items: NavigationItem[];

  constructor( private menuProvider: NavigationProvider ){
    this.items = menuProvider.root;
  }
}
