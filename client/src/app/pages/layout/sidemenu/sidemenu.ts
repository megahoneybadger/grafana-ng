import { Component } from '@angular/core';
import { NavigationProvider } from 'src/app/core/services/navigation.s';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.html',
  styleUrls: ['./sidemenu.scss'],
  
})
export class SidemenuComponent {
  constructor( private menuService: NavigationProvider ){
  }
}
