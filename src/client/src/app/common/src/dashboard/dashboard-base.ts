import { Subscription } from 'rxjs';

import { Directive } from '@angular/core';
import { DashboardStore } from './dashboard.store';
import { Dashboard, Panel } from './dashboard.m';

@Directive()
export class BaseDasboardComponent{
  dashboard: Dashboard;
  panel: Panel;

  panelSubs: Subscription;
  dashboardSubs: Subscription;
  errorSubs: Subscription;
  prebackendSubs: Subscription;
  
  constructor( protected store : DashboardStore ){

      this.dashboardSubs = store
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
          if( x ){
            this.panel = x;

            // onPanelReady may occur before child constructor.
            setTimeout(_ =>this.onPanelReady());
          }
        });

      this.errorSubs = store
        .error$
        .subscribe( x=> {
          if( x ){
            this.dashboard = this.panel = undefined;
            setTimeout(x =>this.onDashboardError(), 0);
          }
        });

      this.prebackendSubs = store
        .prebackend$
        .subscribe( x=> this.onPreBackEnd());
  }

  ngOnDestroy(){
    console.log( "destroy BaseDasboardComponent" )
    this.dashboardSubs?.unsubscribe();
    this.panelSubs?.unsubscribe();
    this.errorSubs?.unsubscribe();
    this.prebackendSubs.unsubscribe();
  }

  onDashboardReady(){

  }

  onDashboardError(){

  }

  onPanelReady(){

  }

  onPanelNotFound(){

  }

  onPreBackEnd(){

  }
}
