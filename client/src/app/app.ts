import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <sidemenu remove-host></sidemenu>
    <div class="main-view">
      <div class="scroll-canvas" page-scrollbar>
        very long string
      </div>
    </div>
    `,
  styleUrls: [ 'app.scss' ] 
})
export class AppComponent {
}
