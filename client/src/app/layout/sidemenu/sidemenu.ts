import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { SideMenuService } from 'src/app/core/services/sidemenu';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.html',
  styleUrls: ['./sidemenu.scss'],
  
})
export class SidemenuComponent {


  constructor( private menuService: SideMenuService ){
    //this.menuService.opened$.subscribe( x => console.log( x ) );
  }
}
