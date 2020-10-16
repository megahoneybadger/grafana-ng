import { Component } from '@angular/core';
import { DashboardStore } from 'common';

@Component({
  selector: 'widget',
  template: `
    <p>
      chart works!
      <ed-progress></ed-progress>
      <button type="button" pButton >fuck</button>
    </p>
  `
})
export class ChartComponent {

  constructor( private store: DashboardStore ) {
  }
}
