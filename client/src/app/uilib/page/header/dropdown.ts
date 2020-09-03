import { Component, Input } from '@angular/core';
import { NavigationItem } from 'src/app/core/models/nav';

import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { DropDownComponent } from '../../dropdown/dropdown.c';

@Component({
  selector: 'ed-page-dropdown-nav',
  template: `
  <div class="mb-3">
    <ed-dropdown 
      [data]="items"
      [(ngModel)]="selected"
      [noBorders]="true"
      width="20"
      (selectionChange)="onChanged($event)" #drop >

      <ng-template edDropDownSelectedValueTemplate let-dataItem>
        <ed-label-icon [icon]="dataItem.value.icon">{{dataItem.value.text}}</ed-label-icon>
      </ng-template>

      <ng-template edDropDownValueTemplate let-dataItem>
        <ed-label-icon [icon]="dataItem.value.icon">{{dataItem.value.text}}</ed-label-icon>
      </ng-template>
    </ed-dropdown>
  </div>
  `
})
export class PageDropdownNavigationComponent {
  items: SelectItem[]
  selected: any;

  @Input() set navigation( item:  NavigationItem ){
    this.items = DropDownComponent.wrapArray( item.children, "text" )

    this.selected = this.items.find( x => x.value.active )?.value;
  }

  constructor( private router: Router ){
  }

  onChanged( e ){
    this.router.navigate( [e.newValue.url] );
  }
}
