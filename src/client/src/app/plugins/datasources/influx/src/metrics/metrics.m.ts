export class InfluxQuery {
  measurement: string = '';
  policy: string = '';
  refId: string = '';
  tags = new Array<Tag>();
	fields = new Array<Field>();
	
	limit: number = undefined;
	slimit: number = undefined;

	// order = OrderByTime.Asc;
	// alias: string =  '';

	// groupBy = new Array<GroupByObject>();

  // virgin: boolean = false;
}

export interface Field {
  key: string;
  functions: FuncObject[];
}

export interface FuncObject {
  name: string;
  param: any;
}

export enum AggrFunc {
  Count = 'count',
  Distinct = 'distinct',
  Integral = 'integral',
  Mean = 'mean',
  Median = 'median',
  Mode = 'mode',
  Sum = 'sum',

  Bottom = 'bottom',
  First = 'first',
  Last = 'last',
  Max = 'max',
  Min = 'min',
  Percentile = 'percentile',
  Top = 'top',

  Derivative = 'derivative',
  Spread = 'spread',
  NonNegativeDerivative = 'non_negative_derivative',
  Difference = 'difference',
  NonNegativeDifference = 'non_negative_difference',
  MovingAverage = 'moving_average',
  CumulativeSum = 'cumulative_sum',
  Stddev = 'stddev',
  Elapsed = 'elapsed',

  HoltWinters = 'holt_winters',
  HoltWintersWithFit = 'holt_winters_with_fit',

  Math = 'math',
  Alias = 'alias',
}

export enum AggrFuncGroup {
  Aggregations,
  Selectors,
  Transformations,
  Predictors,
  Math,
  Alias
}


export class AggrFuncHelper {
  static getGroup(f: AggrFunc|string) {
    switch (f) {
      case AggrFunc.Count:
      case AggrFunc.Distinct:
      case AggrFunc.Integral:
      case AggrFunc.Mean:
      case AggrFunc.Median:
      case AggrFunc.Mode:
      case AggrFunc.Sum:
        return AggrFuncGroup.Aggregations;

      case AggrFunc.Bottom:
      case AggrFunc.First:
      case AggrFunc.Last:
      case AggrFunc.Max:
      case AggrFunc.Min:
      case AggrFunc.Percentile:
      case AggrFunc.Top:
        return AggrFuncGroup.Selectors;

      case AggrFunc.Derivative:
      case AggrFunc.Spread:
      case AggrFunc.NonNegativeDerivative:
      case AggrFunc.Difference:
      case AggrFunc.NonNegativeDifference:
      case AggrFunc.MovingAverage:
      case AggrFunc.CumulativeSum:
      case AggrFunc.Stddev:
      case AggrFunc.Elapsed:
        return AggrFuncGroup.Transformations;

      case AggrFunc.HoltWinters:
      case AggrFunc.HoltWintersWithFit:
        return AggrFuncGroup.Predictors;

      case AggrFunc.Math:
        return AggrFuncGroup.Math;

      case AggrFunc.Alias:
        return AggrFuncGroup.Alias;

    }
  }
}

export enum GroupByOption{
	Time,
	Fill,
	Tag
}

export enum GroupByTimeOptions{
  Dynamic = '$__interval',
  S1 = '1s',
  S10 = '10s',
  M1 = '1m',
  M5 = '5m',
  M10 = '10m',
  M15 = '15m',
  H1 = '1h',
}

export enum GroupByFillOptions{
	None = 'none',
	Null = 'null',
	Zero = '0',
	Prev = 'previous',
	Linear = 'linear'
}

export enum OrderByTime{
	Asc,
	Desc
}

export class MetricVars{
	static readonly TIME_FILTER = "$timeFilter";
	static readonly TIME_INTERVAL = "$__interval";
}

export class Tag{
  key: string = '';
  value: string = '';
  index: number = 0;
  operator: TagOperator = TagOperator.Eq;
  condition: TagCondition = TagCondition.And
}

export enum TagOperator{
  Eq = '=',
  Neq = '<>',
  Less = '<',
  Greater = '>',
  RegExEq = '=~',
  RegExNeq = '!~'
}

export enum TagCondition{
  And = 'AND',
  Or = 'OR'
}


