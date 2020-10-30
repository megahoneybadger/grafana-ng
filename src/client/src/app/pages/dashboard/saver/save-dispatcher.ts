
import { Component } from "@angular/core";
import { DashboardStore } from 'common';
import { BaseDasboardComponent } from '../base/dashboard-base';

@Component({
  selector: 'dashboard-saver',
  template: `
    <dashboard-save 
      *ngIf="saveOpen" 
      (closed)="saveOpen=false"
      (overwrite)="saveAsOverwriteOpen=true">
    </dashboard-save>
  `
})
export class DashboardSaveDispatcherComponent extends BaseDasboardComponent  {

  static readonly MSG_DB_SAVE_SUCCESS = "Dashboard saved";
  
  saveOpen: boolean;
  saveAsOpen: boolean;
  saveAsOverwriteOpen: boolean;

  constructor( store: DashboardStore ){
    super( store );
  }

  save(){
    if( this.dashboard.uid ){
      this.saveOpen = true;
    } else{
      console.log( 'save as dashboard' );
    }
  }
}
