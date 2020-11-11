import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { DashboardAlertState } from '../dashboard/dashboard.m';
import { AlertChannel, AlertStateFilter, EvaluatedAlertRule, PauseAlertResponse } from './alert.m';
import { TextMessage } from '../settings/settings.m';

@Injectable()
export class AlertService extends BaseService{
 
  getStatesForDashboard( dashboardId : number ) : Observable<DashboardAlertState[]>{
    return this
      .http
      .get<DashboardAlertState[]>( `${this.baseUri}/alerts/states-for-dashboard/${dashboardId}`, this.headers )
  }

  getStates( state : AlertStateFilter ) : Observable<EvaluatedAlertRule[]>{
    return this
      .http
      .get<EvaluatedAlertRule[]>( `${this.baseUri}/alerts?state=${state}`, this.headers )
  }

  pause( id:number ) : Observable<PauseAlertResponse>{
    return this
      .http
      .post<PauseAlertResponse>( `${this.baseUri}/alerts/${id}/pause`, {}, this.headers )
  }

  getNotifications() : Observable<AlertChannel[]>{
    return this
      .http
      .get<AlertChannel[]>( `${this.baseUri}/alert-notifications`, this.headers )
  }

  getNotification( id: number ) : Observable<AlertChannel>{
		return this
      .http
      .get<AlertChannel>( `${this.baseUri}/alert-notifications/${id}`, this.headers );
  }
  
  createNotification( c: AlertChannel ) : Observable<AlertChannel>{
		return this
      .http
      .post<AlertChannel>( `${this.baseUri}/alert-notifications`, c, this.headers );
  }

  deleteNotification( id: number ) : Observable<TextMessage>{
		return this
      .http
      .delete<TextMessage>( `${this.baseUri}/alert-notifications/${id}`, this.headers );
  }

  updateNotification( id: number, arg: AlertChannel ) : Observable<AlertChannel>{
		return this
      .http
      .put<AlertChannel>( `${this.baseUri}/alert-notifications/${id}`, arg, this.headers );
  }

  testNotification( c: AlertChannel ) : Observable<TextMessage>{
		return this
      .http
      .post<TextMessage>( `${this.baseUri}/alert-notifications/test`, c, this.headers );
  }
}
