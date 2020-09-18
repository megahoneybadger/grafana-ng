import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationProvider } from 'common';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.html',
  styleUrls: ['./sidemenu.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidemenuComponent {
  constructor( public menuService: NavigationProvider ){
  }
}
