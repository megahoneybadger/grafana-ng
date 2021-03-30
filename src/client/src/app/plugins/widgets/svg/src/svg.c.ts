import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { SvgModel } from './svg.m';

@Component({
  selector: 'widget',
  template: `
    <p>
      svg works!
    </p>
  `,
  styles: [
  ]
})
export class SvgPanelComponent {

  constructor( @Inject( PANEL_TOKEN ) public panel: Panel) {
    this.panel.widget = this.panel.widget ?? new SvgModel();
  }

 
}
