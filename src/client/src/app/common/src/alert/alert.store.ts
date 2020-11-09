import { Injectable } from '@angular/core';
import { DashboardStore } from '../dashboard/dashboard.store';

import { switchMap } from 'rxjs/operators';
import { TimeRangeStore } from '../time/time.store';
import { AlertService } from './alert.s';
import { Dashboard } from '../dashboard/dashboard.m';
import { AnnotationService } from '../annotations/annotation.s';

@Injectable()
export class AlertStore{
 
  constructor( 
    private time: TimeRangeStore,
    private dahsboardStore: DashboardStore,
    private alertService: AlertService,
    private annotService: AnnotationService ){

      time
        .range$
        .pipe( 
          switchMap( x => dahsboardStore.dashboard$ ))
        .subscribe( x => this.updatePanelsAlertState( x ) );
  }

  private updatePanelsAlertState( d: Dashboard ){
    const alertRuleCount = d
      ?.data
      .panels
      .filter( x => x.widget?.alert )
      .length;

    if( !alertRuleCount ){
      return;
    }

    this
      .alertService
      .getStatesForDashboard( d.id )
      .subscribe( x => x.forEach( e => {
        const panel = d
          .data
          .panels
          .find( p => p.id == e.panelId );

        if( panel ){
          panel.alertState = e.state;
        }
      }));
  }

}
