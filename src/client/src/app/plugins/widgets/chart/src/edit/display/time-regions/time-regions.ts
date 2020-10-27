import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';

@Component({
  selector: 'editor-time-regions',
  templateUrl: './time-regions.html'
})
export class TimeRegionsEditorComponent extends BaseChartEditorComponent {
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
  
  ngOnInit(){
    console.log( 'create TimeRegionsEditorComponent' )
  }

  ngOnDestroy(){
    console.log( 'detroy TimeRegionsEditorComponent' )
  }
}
