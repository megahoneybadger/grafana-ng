import { Metrics } from "common";
import { SvgPanelComponent } from "./svg.c";

export class SvgModel{
	content: string; 
	metrics: Metrics;
	rules: BindingRule[];

	component: SvgPanelComponent;
}

export class BindingRule {
  id: string;

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

export class BindingResolver{
  property: string = "property";
  value: string;
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