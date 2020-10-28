import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { SeriesOverride } from '../../../chart.m';

@Component({
  selector: 'editor-series-overrides',
  template: `
    <div class="gf-form-group">
      <h5>Series specific overrides </h5>

      <div>

        <editor-series-override *ngFor="let t of overrides; let i = index"
          [override]="t" 
          [index]="i"
          (removed)="onRemove( $event )">
        </editor-series-override>

        <div class="gf-form-button-row">
          <button class="btn btn-inverse" (click)="onAdd()">
            <i class="fa fa-plus"></i>&nbsp;Add Override
          </button>
        </div>
        
      </div>
    </div>`
})
export class SeriesOverridesEditorComponent extends BaseChartEditorComponent {
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );

    console.log( this.overrides );
  }

  onAdd(){
    this.overrides.push( new SeriesOverride() );
  }

  onRemove( t: SeriesOverride ){
    const index = this.overrides.indexOf( t )

    if( -1 !== index ){
      this.overrides.splice( index, 1 );
    }

    this.refresh();
  }
  
  
}
