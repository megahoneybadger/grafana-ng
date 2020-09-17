import { Component, Output, EventEmitter, Input } from '@angular/core';

export enum DataSourcesLayoutMode {
  Grid = 'grid',
  Tiles = 'tiles',
}

@Component({
  selector: 'datasources-layout-switcher',
  styleUrls: ['./layout-switcher.scss'],
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
export class DataSourcesLayoutSwitcherComponent {
  private _mode: DataSourcesLayoutMode;
  LayoutModeRef = DataSourcesLayoutMode;

  get mode(){
    return this._mode;
  }

  @Input() set mode( m: DataSourcesLayoutMode ){
    this._mode = m;
    this.modeChange.emit( m );
  }

  @Output() modeChange = new EventEmitter<DataSourcesLayoutMode>();
}
