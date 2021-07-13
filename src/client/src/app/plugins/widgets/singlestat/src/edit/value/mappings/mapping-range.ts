import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Mapping } from '../../../singlestat.m';
import { ValueBaseMappingComponent } from './mapping-base';

@Component({
  selector: 'value-mapping-range',
  template: `
    <div class="gf-form-inline">

      <ed-textbox 
        label="From"
        type="number"
        [(ngModel)]="mapping.from"
        width="6"
        (blur)="fetch()"
        (keyup.enter)="fetch()" >
      </ed-textbox>

      <ed-textbox 
        label="To"
        type="number"
        [(ngModel)]="mapping.to"
        width="6"
        (blur)="fetch()"
        (keyup.enter)="fetch()" >
      </ed-textbox>

      <ed-textbox 
        label="Text"
        [(ngModel)]="mapping.text"
        width="8"
        (blur)="fetch()"
        (keyup.enter)="fetch()" >
      </ed-textbox>

      <div class="gf-form" >
        <label class="gf-form-label pointer" (click)="onRemove()" >
          <i class="fa fa-trash"></i>
        </label>
      </div>

    </div>`
})
export class ValueRangeMappingComponent extends ValueBaseMappingComponent {

  @Input() mapping: Mapping;

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
    
  }
}
