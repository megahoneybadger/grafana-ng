
import { Component } from "@angular/core";
import { BaseDasboardComponent, DashboardStore } from 'common';

@Component({
  selector: 'dashboard-saver',
  template: `
    <dashboard-save 
      *ngIf="saveOpen" 
      (closed)="saveOpen=false"
      (overwrite)="saveAsOverwriteOpen=true">
    </dashboard-save>

    <dashboard-save-as 
      *ngIf="saveAsOpen" 
      (closed)="saveAsOpen=false"
      (overwrite)="saveAsOverwriteOpen=true">
    </dashboard-save-as>

    <dashboard-save-as-overwrite
      *ngIf="saveAsOverwriteOpen" 
      (closed)="saveAsOverwriteOpen=false">
    </dashboard-save-as-overwrite>
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
      this.saveAsOpen = true;
    }
  }
}
