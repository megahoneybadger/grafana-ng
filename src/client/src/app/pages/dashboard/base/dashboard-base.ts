import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dashboard, DashboardStore, TimeRangeStore } from 'common';

@Component({
  selector: 'dashboard',
  template: `
    <dashboard-toolbar></dashboard-toolbar>
    <dashboard-grid-layout></dashboard-grid-layout>
  `
})
export class BaseDasboardComponent{
  dashboardStoreSubs: Subscription;
  timeStoreSubs: Subscription;

  protected dashboard: Dashboard;
  
  constructor( 
    protected dasboardStore : DashboardStore,
    protected time: TimeRangeStore ){

      this.dashboardStoreSubs = dasboardStore
        .dashboard$
        .subscribe( x=> {
          if( x ){
            this.dashboard = x;
            this.onDashboardReady();
          }
        });
  }

  ngOnDestroy(){
    console.log( "destroy BaseDasboardComponent" )
    this.dashboardStoreSubs?.unsubscribe();
    this.timeStoreSubs?.unsubscribe();
  }

  onDashboardReady(){

  }
}
