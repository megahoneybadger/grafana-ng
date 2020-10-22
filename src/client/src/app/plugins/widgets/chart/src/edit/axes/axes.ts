import { Component } from '@angular/core';


@Component({
  selector: 'editor-axes',
  templateUrl: './axes.html'
})
export class AxesEditorComponent {
 
  ngOnInit(){
    console.log( 'create AxesEditorComponent' )
  }

  ngOnDestroy(){
    console.log( 'detroy AxesEditorComponent' )
  }
}
