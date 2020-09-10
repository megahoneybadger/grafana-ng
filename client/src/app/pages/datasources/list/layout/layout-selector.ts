import { Component, Output, EventEmitter, Input } from '@angular/core';

export enum LayoutMode {
  Grid = 'grid',
  Tiles = 'tiles',
}

@Component({
  selector: 'datasources-layout-selector',
  styleUrls: ['./layout-selector.scss'],
  template:`
    <div class="layout-selector gf-form">
      <button [ngClass]="{ 'active': mode === LayoutModeRef.Tiles }" (click)="mode=LayoutModeRef.Tiles"	>
        <i class="fa fa-th" ></i>
      </button>
      <button [ngClass]="{ 'active': mode === LayoutModeRef.Grid }" (click)="mode=LayoutModeRef.Grid"	>
        <i class="fa fa-list" ></i>
      </button>
    </div>`
  
})
export class DataSourcesLayoutSelectorComponent {
  private _mode: LayoutMode;
  LayoutModeRef = LayoutMode;

  get mode(){
    return this._mode;
  }

  @Input() set mode( m: LayoutMode ){
    this._mode = m;
    this.modeChange.emit( m );
  }

  @Output() modeChange = new EventEmitter<LayoutMode>();
}
