import { Metrics, PanelLink, PanelLinkType } from "common";
import { SvgPanelComponent } from "./svg.c";

export class SvgModel{
	content: string; 
	metrics: Metrics;
	rules: BindingRule[];
  links: SvgElementLink[];
  settings: SvgSettings = new SvgSettings();

	component: SvgPanelComponent;
}

export class BindingRule {
  static readonly VALUE_PLACEHOLDER = "$__value";
  
  id: string;

  type: BindingRuleType = BindingRuleType.If;

	query: BindingQuery = new BindingQuery();
	resolvers: BindingResolver[];
}

export class SvgElementLink{
  id: string;

  type: PanelLinkType = PanelLinkType.Dashboard;

  url: string;
  title: string;
  dashboard: string;
  
  // urlParams: string
  // includeTimeRange: boolean = false;
  // includeVariables: boolean = false;
  // openInNewTab: boolean = false;
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
  refId: string = 'A';
  field: string = 'field';
  reducer:  BindingReducer = BindingReducer.Last;
}

export class BindingEvaluator{
  operator: BindingEvalOperator = BindingEvalOperator.Eq;
  param: string = '';
}

export class BindingTarget{
  property: string = "property";
  value: string;
}

export class BindingResolver {
  evaluator: BindingEvaluator = new BindingEvaluator(); 
  target: BindingTarget = new BindingTarget();
}

export enum BindingEvalOperator{
  Eq = '=',
  Neq = '<>',
  Less = '<',
  Greater = '>',
}

export class SvgSettings{
  ignore: string = '^svg_[0-9]+$';
  stretch: boolean = true;
  preserveAspectRatio: AspectRatioAlignment = AspectRatioAlignment.xMidYMid;
}

export enum AspectRatioAlignment{
  none = "none",
  xMinYMin = "xMinYMin",
  xMidYMin = "xMidYMin",
  xMaxYMin = "xMaxYMin", 
  xMinYMid = "xMinYMid",
  xMidYMid = "xMidYMid",
  xMaxYMid = "xMaxYMid",  
  xMinYMax = "xMinYMax", 
  xMidYMax = "xMidYMax", 
  xMaxYMax = "xMaxYMax" 
}

export interface DataSet{
  refId: string;
  name: string;
  columns: string[];
  values: any;
}

