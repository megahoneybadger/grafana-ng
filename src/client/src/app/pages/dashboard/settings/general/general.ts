import { Component } from '@angular/core';
import { BaseDasboardComponent, DashboardStore } from 'common';

@Component({
  selector: 'settings-general',
  templateUrl: `./general.html`
})
export class GeneralSettingsComponent extends BaseDasboardComponent{

  constructor( store: DashboardStore){
      super( store );
  }
}

