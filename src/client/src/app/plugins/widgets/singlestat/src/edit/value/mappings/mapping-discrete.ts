import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { ValueBaseMappingComponent } from './mapping-base';

@Component({
  selector: 'value-mapping-discrete',
  template: `
    <div class="gf-form-inline">

      <ed-textbox 
        type="number"
        [(ngModel)]="mapping.value"
        width="6"
        label="Value"
        (blur)="pull()"
        (keyup.enter)="pull()" >
      </ed-textbox>
     
      <ed-textbox 
        label="Text"
        [(ngModel)]="mapping.text"
        width="8"
        (blur)="pull()"
        (keyup.enter)="pull()" >
      </ed-textbox>

      <div class="gf-form" >
        <label class="gf-form-label pointer" (click)="onRemove()" >
          <i class="fa fa-trash"></i>
        </label>
      </div>

    </div>`
})
export class ValueDiscreteMappingComponent extends ValueBaseMappingComponent {

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel ){
    super( panel )
    
  }
}
