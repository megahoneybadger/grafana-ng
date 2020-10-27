import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { TieredMenu } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ed-context-menu',
  templateUrl: './context-menu.html',
  styleUrls: [ 'context-menu.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ContextMenuComponent {
  @Input() prettySelection: boolean = false;
  @ViewChild( TieredMenu ) menu : TieredMenu

  @Input() items : MenuItem[] = []

  show( ev ){
    this.menu.show( ev );
  }
 
  hide(){
    this.menu.hide();
  }

  static wrapItems( arr: MenuItem[], command: (event?: any) => void){
    arr
      .map( x => x.items )
      .reduce((a, b) => a.concat(b))
      .forEach( x => x.command = command );
  }
}

