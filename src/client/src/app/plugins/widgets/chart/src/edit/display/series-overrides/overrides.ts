import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';

@Component({
  selector: 'editor-series-overrides',
  templateUrl: './overrides.html'
})
export class SeriesOverridesEditorComponent extends BaseChartEditorComponent {
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }
  
  ngOnInit(){
    console.log( 'create SeriesOverridesEditorComponent' )
  }

  ngOnDestroy(){
    console.log( 'detroy SeriesOverridesEditorComponent' )
  }
}
