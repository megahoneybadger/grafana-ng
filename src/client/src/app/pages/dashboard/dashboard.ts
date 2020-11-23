import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnnotationStore, BaseDasboardComponent, DashboardSearchHelper, DashboardStore } from 'common';
import { ErrorMessages, Notes } from 'uilib';

@Component({
  selector: 'dashboard',
  template: `
    <dashboard-toolbar (add)="canvas.addPanel( $event )"></dashboard-toolbar>
    <dashboard-settings-bar ></dashboard-settings-bar>
    <dashboard-canvas #canvas></dashboard-canvas>`
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
