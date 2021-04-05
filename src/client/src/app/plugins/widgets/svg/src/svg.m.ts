import { Metrics } from "common";
import { SvgPanelComponent } from "./svg.c";

export class SvgModel{
	content: string; 
	metrics: Metrics;
	rules: BindingRule[];

	component: SvgPanelComponent;
}


// export class BindingRule{
// 	conditions: Array<BindingCondition> = new  Array<BindingCondition>();

// }

export class BindingRule {
  id: string;
	reducer:  BindingReducer = BindingReducer.First;
	query: BindingQuery = new BindingQuery();
	evaluator: BindingEvaluator = new BindingEvaluator();
	resolver: BindingResolver = new BindingResolver();
}

export enum BindingReducer{
  First = "first",
	Last = "last",
  Min = "min",
  Max = "max",
  Count = "count",
}

export class BindingQuery{
  target: string = 'A';
  field: string = 'default';
}

export class BindingEvaluator{
  type: BindingEvalType = BindingEvalType.Eq;
  param: string;
}

export class BindingResolver{
  property: string = "property";
  value: string;
}

export enum BindingEvalType{
  Eq = '=',
  Neq = '<>',
  Less = '<',
  Greater = '>',
}

export enum BindingOperator{
  And = "and",
  Or = "or"
}