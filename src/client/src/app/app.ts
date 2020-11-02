import { Component } from '@angular/core';
import { Notes } from 'uilib';
import { PLUGIN_EXTERNALS_MAP } from './pages/base/plugin-externals';
declare const window: any;
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
    Object.keys(PLUGIN_EXTERNALS_MAP).forEach(externalKey =>
      window.define(externalKey, [], () => PLUGIN_EXTERNALS_MAP[externalKey])
    );
  }
}
