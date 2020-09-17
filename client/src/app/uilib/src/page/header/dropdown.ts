import { Component, Input } from '@angular/core';

import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { DropDownComponent } from '../../dropdown/dropdown';
import { NavigationItem } from 'common';

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
        <i *ngIf="dataItem.value.icon" [ngClass]="[dataItem.value.icon]"  class="mr-2"></i>{{dataItem.value.text}}
      </ng-template>

      <ng-template edDropDownValueTemplate let-dataItem>
        <i *ngIf="dataItem.value.icon" [ngClass]="[dataItem.value.icon]"  class="mr-2"></i>{{dataItem.value.text}}
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

  constructor( public router: Router ){
  }

  onChanged( e ){
    this.router.navigate( [e.newValue.url] );
  }
}
