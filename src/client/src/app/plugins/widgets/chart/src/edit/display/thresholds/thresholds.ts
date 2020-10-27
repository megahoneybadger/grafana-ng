import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { Threshold } from '../../../chart.m';

@Component({
  selector: 'editor-thresholds',
  template: `
    <div class="gf-form-group">
      <h5>Thresholds</h5>

      <div ng-class="{'thresholds-form-disabled': ctrl.disabled}">

        <editor-threshold *ngFor="let t of thresholds; let i = index"
          [threshold]="t" 
          [index]="i"
          (removed)="onRemove( $event )">
        </editor-threshold>

        <div class="gf-form-button-row">
          <button class="btn btn-inverse" (click)="onAdd()" ng-disabled="ctrl.disabled">
            <i class="fa fa-plus"></i>&nbsp;Add Threshold
          </button>
        </div>
        
      </div>
    </div>`})
export class ThresholdsEditorComponent extends BaseChartEditorComponent {
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
  
  onAdd(){
    this.thresholds.push( new Threshold() );
  }

  onRemove( t: Threshold ){
    const index = this.thresholds.indexOf( t )

    if( -1 !== index ){
      this.thresholds.splice( index, 1 );
    }
  }
}
