import { Component } from '@angular/core';
import { Notes } from 'uilib';

@Component({
  selector: 'app-root',
  template: `
    <sidemenu remove-host></sidemenu>
    <ed-note></ed-note>
    <ed-module-loader></ed-module-loader>
    <div class="main-view">
      <div class="scroll-canvas" page-scrollbar>
        <router-outlet></router-outlet>
      </div>
    </div>
    `,
  host: {'class': 'grafana-app'},
})
export class AppComponent {
  constructor( private nd : Notes ){
  }
}
