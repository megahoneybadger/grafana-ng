import { Component } from '@angular/core';
import { NavigationProvider } from 'src/app/core/services/navigation.s';

@Component({
  selector: 'sidebar-top',
  templateUrl: './top.html',
  styleUrls: ['./top.scss'],
  
})
export class SidebarTopComponent {
  
  constructor( private menuProvider: NavigationProvider ){
    
  }

 
}
