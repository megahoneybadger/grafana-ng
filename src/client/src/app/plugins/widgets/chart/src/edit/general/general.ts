import { Component } from '@angular/core';

@Component({
  selector: 'editor-general',
  templateUrl: './general.html'
})
export class GeneralEditorComponent {
 
  ngOnInit(){
    console.log( 'create GeneralEditorComponent' )
  }

  ngOnDestroy(){
    console.log( 'detroy GeneralEditorComponent' )
  }
}
