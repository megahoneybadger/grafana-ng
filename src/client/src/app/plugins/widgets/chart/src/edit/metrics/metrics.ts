import { Component, Inject } from '@angular/core';
import { Panel } from 'common';
import { PANEL_TOKEN } from '../../chart.m';


@Component({
  selector: 'editor-metrics',
  templateUrl: './metrics.html'
})
export class MetricsEditorComponent {
 
  constructor(@Inject( PANEL_TOKEN ) private panel: Panel){
    
  }
  ngOnInit(){
    console.log( 'create MetricsComponent' )
    console.log( this.panel );
  }

  ngOnDestroy(){
    console.log( 'detroy MetricsComponent' )
  }
}
