import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { TimeRegion } from '../../../chart.m';

@Component({
  selector: 'editor-time-regions',
  template: `
  <div class="gf-form-group">
    <h5>Time regions</h5>

    <div ng-class="{'thresholds-form-disabled': ctrl.disabled}">

      <editor-time-region *ngFor="let t of timeRegions; let i = index"
        [timeRegion]="t" 
        [index]="i"
        (removed)="onRemove( $event )">
      </editor-time-region>

      <div class="gf-form-button-row">
        <button class="btn btn-inverse" (click)="onAdd()" ng-disabled="ctrl.disabled">
          <i class="fa fa-plus"></i>&nbsp;Add Time Region
        </button>
      </div>
      
    </div>
  </div>`
})
export class TimeRegionsEditorComponent extends BaseChartEditorComponent {
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
  
  onAdd(){
    this.display.timeRegions = this.timeRegions ?? [];
    this.timeRegions.push( new TimeRegion() );
  }

  onRemove( t: TimeRegion  ){
    const index = this.timeRegions.indexOf( t )

    if( -1 !== index ){
      this.timeRegions.splice( index, 1 );
    }

    this.refresh();
  }
}
