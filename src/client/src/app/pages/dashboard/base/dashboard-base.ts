import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dashboard, DashboardStore, Panel } from 'common';

@Component({
  selector: 'dashboard',
  template: `
    <dashboard-toolbar></dashboard-toolbar>
    <dashboard-grid-layout></dashboard-grid-layout>
  `
})
export class BaseDasboardComponent{
  dashboardStoreSubs: Subscription;
  dashboard: Dashboard;

  panelSubs: Subscription;
  panel: Panel;
  
  constructor( protected store : DashboardStore ){

      this.dashboardStoreSubs = store
        .dashboard$
        .subscribe( x=> {
          if( x ){
            this.dashboard = x;

            // onDashboardReady may occur before child constructor.
            setTimeout(x =>this.onDashboardReady(), 0);
          }
        });

      this.panelSubs = store
        .panel$
        .subscribe( x=> {
          if( x && this.panel != x ){
            this.panel = x;

            // onPanelReady may occur before child constructor.
            setTimeout(x =>this.onPanelReady(), 0);
          }
        });
  }

  ngOnDestroy(){
    console.log( "destroy BaseDasboardComponent" )
    this.dashboardStoreSubs?.unsubscribe();
    this.panelSubs?.unsubscribe();
  }

  onDashboardReady(){

  }

  onPanelReady(){

  }
}
