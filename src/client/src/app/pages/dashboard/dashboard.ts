import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnnotationStore, DashboardSearchHelper, DashboardStore } from 'common';
import { ErrorMessages, Notes } from 'uilib';
import { BaseDasboardComponent } from './base/dashboard-base';

@Component({
  selector: 'dashboard',
  template: `
    <dashboard-toolbar></dashboard-toolbar>
    <dashboard-settings-bar></dashboard-settings-bar>
    <dashboard-canvas></dashboard-canvas>
  `
})
export class DashboardComponent extends BaseDasboardComponent{

  constructor( 
    store: DashboardStore,
    private annots: AnnotationStore,
    private router: Router ){
      super( store );
  }

  onDashboardReady(){
    DashboardSearchHelper.addRecent( this.dashboard.id )
  }

  onDashboardError(){
		Notes.error( ErrorMessages.BAD_GET_DASHBOARD );
		this.router.navigate( [DashboardStore.ROOT_MANAGEMENT] );
  }
}
