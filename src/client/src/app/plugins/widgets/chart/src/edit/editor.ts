import { Component } from '@angular/core';


@Component({
  selector: 'widget-editor',
  templateUrl: './editor.html',
  styleUrls:[ './editor.scss' ]
})
export class ChartEditorComponent {
 
  tabs = [ 
    {text:'General'},
    {text:'Metrics', active: true},
    {text: 'Axes'}
   ]
  constructor() {

  
  }
}
