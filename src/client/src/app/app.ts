import { Component } from '@angular/core';
import { Notes } from 'uilib';
import { PLUGIN_EXTERNALS_MAP } from './pages/base/plugin-externals';
declare const window: any;
@Component({
  selector: 'app-root',
  template: `
    <ed-note></ed-note>
    <router-outlet></router-outlet>`,
  host: {'class': 'grafana-app'},
})
export class AppComponent {
  constructor( private nd : Notes ){
    Object.keys(PLUGIN_EXTERNALS_MAP).forEach(externalKey =>
      window.define(externalKey, [], () => PLUGIN_EXTERNALS_MAP[externalKey])
    );
  }
}
