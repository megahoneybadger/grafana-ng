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
  dashboardErrorSubs: Subscription;
  panelErrorSubs: Subscription;
  dashboardSwitchSubs: Subscription;

  get canEdit(){
    return ( this.dashboard?.meta.canEdit && this.dashboard.data.editable );
  }
  
  constructor( protected store : DashboardStore ){

      this.dashboardSubs = store
        .dashboard$
        .subscribe( x=> {
          if( x ){
            this.dashboard = x;

            this.onDashboardReadySync();

            // onDashboardReady may occur before child constructor.
            setTimeout(x => this.onDashboardReady(), 0);
          }
        });

      this.panelSubs = store
        .panel$
        .subscribe( x=> {
          if( x ){
            this.panel = x;

            // onPanelReady may occur before child constructor.
            setTimeout(_ => this.onPanelReady());
          }
        });

      this.dashboardErrorSubs = store
        .dashboardError$
        .subscribe( x=> {
          if( x ){
            this.dashboard = this.panel = undefined;
            setTimeout(x =>this.onDashboardError(), 0);
          }
        });

      this.dashboardErrorSubs = store
        .panelError$
        .subscribe( x=> {
          if( x ){
            this.panel = undefined;
            setTimeout(x => this.onPanelError(), 0);
          }
        });

      this.dashboardSwitchSubs = store
        .dashboardSwitch$
        .subscribe( x => {
          if( x ){
            this.onDashboardSwitch()
          }
        });
  }

  ngOnDestroy(){
    //console.log( "destroy BaseDasboardComponent" )
    this.dashboardSubs?.unsubscribe();
    this.panelSubs?.unsubscribe();
    this.dashboardErrorSubs?.unsubscribe();
    this.dashboardSwitchSubs?.unsubscribe();
  }

  onDashboardSwitch(){

  }

  onDashboardReady(){

  }

  onDashboardReadySync(){

  }

  onDashboardError(){

  }

  onPanelReady(){

  }

  onPanelError(){

  }
}
