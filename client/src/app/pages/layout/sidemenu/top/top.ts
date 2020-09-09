import { Component } from '@angular/core';
import { NavigationProvider } from 'src/app/core/services/navigation.s';
import { NavigationItem } from 'src/app/core/models/nav';

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
