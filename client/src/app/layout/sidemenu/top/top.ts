import { Component } from '@angular/core';
import { SideMenuService } from 'src/app/core/services/sidemenu';

@Component({
  selector: 'sidebar-top',
  templateUrl: './top.html',
  styleUrls: ['./top.scss'],
  
})
export class SidebarTopComponent {
  
  constructor( private menuProvider: SideMenuService ){
    
  }

 
}
