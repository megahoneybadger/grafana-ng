import { TextMessage } from '../settings/settings.m';
import { DateTime } from '../time/time.m';
import * as _ from 'lodash';

export class AlertRule{
  name: string = "Panel Title alert";
  frequency: string = '1m';
  for: string = '5m';
  conditions : AlertCondition[];

  noDataOption: AlertNoDataOption = AlertNoDataOption.NoData;
  errorOption: AlertNoDataOption = AlertNoDataOption.Alerting;

  message: string;
  notifications : number[];
} 

export class EvaluatedAlertRule{
  id?: number;
  dashboardId: number;
  dashboardUid: string;
  dashboardTitle: string;
  panelId: number;

  name: string;
  url: string;
  evalData: any;

  state?: AlertState;
  newStateDate: DateTime;
}

export class AlertCondition {
  reducer: AlertReducer = AlertReducer.Avg;
  evaluator: AlertEvaluator = new AlertEvaluator();
  query: AlertQuery = new AlertQuery();
  operator: AlertOperator = AlertOperator.And;
}

export class AlertEvaluator{
  type: AlertEvalType = AlertEvalType.IsAbove;
  params: string[] = [];
}

export class AlertQuery{
  target: string = 'A';
  from: string = '10m';
  to: string = 'now';
}

export enum AlertNoDataOption{
  Alerting = "alerting",
  NoData = "noData",
  KeepLastState="keepLastState",
  Ok = "ok"
}

export enum AlertErrorOption{
  Alerting = "alerting",
  KeepLastState = "keepLastState",
}

export enum AlertOperator{
  And = "and",
  Or = "or"
}

export enum AlertReducer{
  Avg = "avg",
  Min = "min",
  Max = "max",
  Sum = "sum",
  Count = "count",
  Median = "median",
  Diff = "diff",
  PercentDiff = "percent_diff",
  CountNonNull = "count_not_null"
}

export enum AlertEvalType{
  IsBelow,
  IsAbove,
  IsOutsideRange,
  IsWithinRange,
  HasNoValue
}

export enum AlertState{
  NoData = "NoData",
  Paused = "Paused",
  Alerting = "Alerting",
  Ok = "Ok",
  Pending = "Pending",
  Unknown = "Unknown"
}

export enum AlertStateFilter{
	All,
	Ok,
	NotOK,
	Alerting,
	NoData,
  Paused,
  Pending,
}

export enum NotificationChannelType{
	Telegram = "telegram",
	Line = "line"
}

export interface PauseAlertResponse extends TextMessage{
  state: AlertState;
}

export class AlertHelper{
  static getStateClass( a: AlertState ) : string{
    switch( a ){
      case AlertState.Alerting:
        return 'alert-state-critical'; 

      case AlertState.Pending:
        return 'alert-state-warning'; 

      case AlertState.NoData:
        return 'alert-state-warning'; 

      case AlertState.Unknown:
      case AlertState.Paused:
        return 'alert-state-paused'; 

      default: return 'alert-state-ok';
    }
  }

  static getStateIconClass( a: AlertState ) : string{
    switch( a ){
      case AlertState.Alerting:
        return 'icon-gf icon-gf-critical'; 

      case AlertState.NoData:
        return 'fa fa-question'; 

      case AlertState.Pending:
        return 'fa fa-exclamation'; 

      case AlertState.Ok:
        return 'icon-gf icon-gf-online'; 

      case AlertState.Paused:
        return 'fa fa-pause'; 

      default: return 'fa fa-question';
    }
  }

  static getInfo( alert ) : string {
    if (_.isArray(alert.data)) { 
      return _.reduce( alert.data, (res, ev) => {
        if (ev.Metric !== undefined && ev.Value !== undefined) {
          const v = Math.round((ev.Value + Number.EPSILON) * 100) / 100;
          res.push(ev.Metric + '=' +v);
        }
    
        return res;
      }, [] )
      .join(', ');
    } 

    return alert.data?.error ? `Error: ${alert.data?.error}` : '';
  }
}

export interface AlertChannel{
  id: number;
  orgId: number;
  name: string;
  isDefault: boolean;
  type: NotificationChannelType;
}




