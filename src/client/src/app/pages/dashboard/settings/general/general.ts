import { Component } from '@angular/core';
import { DashboardStore } from 'common';
import { BaseDasboardComponent } from '../../base/dashboard-base';

@Component({
  selector: 'settings-general',
  templateUrl: `./general.html`
})
export class GeneralSettingsComponent extends BaseDasboardComponent{

  constructor( store: DashboardStore){
      super( store );
  }

  onDashboardReady(){
    console.log( this.dashboard )
  }
}

