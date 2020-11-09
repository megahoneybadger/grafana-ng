import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { DashboardAlertState } from '../dashboard/dashboard.m';
import { AlertStateFilter } from './alert.m';

@Injectable()
export class AlertService extends BaseService{
 
  getStatesForDashboard( dashboardId : number ) : Observable<DashboardAlertState[]>{
    return this
      .http
      .get<DashboardAlertState[]>( `${this.baseUri}/alerts/states-for-dashboard/${dashboardId}`, this.headers )
  }

  getStates( state : AlertStateFilter ) : Observable<any>{
    return this
      .http
      .get( `${this.baseUri}/alerts?state=${state}`, this.headers )
  }

  // public pause( id:number ) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/alerts/${id}/pause`, {}, this.headers )
  // }

  // public getNotifications() : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/alert-notifications`, this.headers )
  // }

  
  // public deleteNotification( id: number ) : Observable<any>{
	// 	return this
  //     .http
  //     .delete( `${this.baseUri}/alert-notifications/${id}`, this.headers );
  // }
  
  // public createNotification( arg: any ) : Observable<any>{
	// 	return this
  //     .http
  //     .post( `${this.baseUri}/alert-notifications`, arg, this.headers );
  // }

  // public testNotification( arg: any ) : Observable<any>{
	// 	return this
  //     .http
  //     .post( `${this.baseUri}/alert-notifications/test`, arg, this.headers );
  // }

  // public updateNotification( id: number, arg: any ) : Observable<any>{
	// 	return this
  //     .http
  //     .put( `${this.baseUri}/alert-notifications/${id}`, arg, this.headers );
  // }
  
  // public getNotification( id: number ) : Observable<any>{
	// 	return this
  //     .http
  //     .get( `${this.baseUri}/alert-notifications/${id}`, this.headers );
	// }

  

}
