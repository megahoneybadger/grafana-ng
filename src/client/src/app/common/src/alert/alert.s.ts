import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { DashboardAlertState } from '../dashboard/dashboard.m';
import { AlertChannel, AlertStateFilter, EvaluatedAlertRule, PauseAlertResponse } from './alert.m';
import { TextMessage } from '../settings/settings.m';

@Injectable()
export class AlertService extends BaseService{
 
  getStatesForDashboard( dashboardId : number ) : Observable<DashboardAlertState[]>{
    return this.get<DashboardAlertState[]>( `alerts/states-for-dashboard/${dashboardId}` )
  }

  getStates( state : AlertStateFilter ) : Observable<EvaluatedAlertRule[]>{
    return this.get<EvaluatedAlertRule[]>( `alerts?state=${state}` )
  }

  pause( id:number ) : Observable<PauseAlertResponse>{
    return this.post<PauseAlertResponse>( `alerts/${id}/pause`, {} )
  }

  getNotifications() : Observable<AlertChannel[]>{
    return this.get<AlertChannel[]>( `alert-notifications` )
  }

  getNotification( id: number ) : Observable<AlertChannel>{
		return this.get<AlertChannel>( `alert-notifications/${id}` );
  }
  
  createNotification( c: AlertChannel ) : Observable<AlertChannel>{
		return this.post<AlertChannel>( `alert-notifications`, c );
  }

  deleteNotification( id: number ) : Observable<TextMessage>{
		return this.delete<TextMessage>( `alert-notifications/${id}` );
  }

  updateNotification( id: number, arg: AlertChannel ) : Observable<AlertChannel>{
		return this.put<AlertChannel>( `alert-notifications/${id}`, arg );
  }

  testNotification( c: AlertChannel ) : Observable<TextMessage>{
		return this.post<TextMessage>( `alert-notifications/test`, c );
  }
}
