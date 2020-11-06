
export class AlertRule{
  name: string = "Panel Title alert";
  frequency: string = '1m';
  for: string = '5m';
  conditions : AlertCondition[];

  noDataOption: AlertNoDataOption = AlertNoDataOption.NoData;
	errorOption: AlertNoDataOption = AlertNoDataOption.Alerting;
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


