import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';

@Component({
  selector: 'editor-general',
  templateUrl: './general.html'
})
export class GeneralEditorComponent {
 
  constructor(@Inject( PANEL_TOKEN ) public panel: Panel){
  }
}
