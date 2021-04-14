import { Metrics } from "common";
import { SvgPanelComponent } from "./svg.c";

export class SvgModel{
	content: string; 
	metrics: Metrics;
	rules: BindingRule[];

	component: SvgPanelComponent;
}

export class BindingRule {
  static readonly VALUE_PLACEHOLDER = "$__value";
  
  id: string;

  type: BindingRuleType = BindingRuleType.If;

	query: BindingQuery = new BindingQuery();


	evaluator: BindingEvaluator = new BindingEvaluator();
	resolver: BindingResolver = new BindingResolver();
  caser: BindingCaseResolver[];
}

export enum BindingRuleType{
  If = "if",
  Switch = "switch",
  Map = "map"
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
  field: string = 'field';
  reducer:  BindingReducer = BindingReducer.Last;
}

export class BindingEvaluator{
  type: BindingEvalType = BindingEvalType.Eq;
  param: string;
}

export enum BindingEvalType{
  Eq = '=',
  Neq = '<>',
  Less = '<',
  Greater = '>',
}

export class BindingResolver {
  property: string = "property";
  value: string;
}

export class BindingCaseResolver extends BindingResolver {
  param: string;
}

export enum BindingOperator{
  And = "and",
  Or = "or"
}

export interface DataSet{
  name: string;
  columns: string[];
  values: any;
}