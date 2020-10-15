import { Component, Output, EventEmitter, Input, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../../base/ng-model-cmp';

export enum CardsLayoutMode {
  Grid = 'grid',
  Tiles = 'tiles',
}

@Component({
  selector: 'ed-cards-layout-switcher',
  styleUrls: ['./layout-switcher.scss'],
  template:`
    <div class="layout-selector gf-form">
      <button [ngClass]="{ 'active': value === LayoutModeRef.Tiles }" (click)="value=LayoutModeRef.Tiles"	>
        <i class="fa fa-th" ></i>
      </button>
      <button [ngClass]="{ 'active': value === LayoutModeRef.Grid }" (click)="value=LayoutModeRef.Grid"	>
        <i class="fa fa-list" ></i>
      </button>
    </div>`,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CardsLayoutSwitcherComponent),  
        multi: true
      }
    ],
    encapsulation: ViewEncapsulation.None
  
})
export class CardsLayoutSwitcherComponent extends BaseNgModelComponent  {
  LayoutModeRef = CardsLayoutMode;
}
