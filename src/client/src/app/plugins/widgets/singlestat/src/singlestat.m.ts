import { Metrics, PanelLink, PanelLinkType } from "common";
import { ColorHelper, UnitType } from "uilib";
import { SinglestatPanelComponent } from "./singlestat.c";


export class SinglestatModel{
	
	component: SinglestatPanelComponent;
  metrics: Metrics;

  useDefaultSelector: boolean = true;

  selector: SinglestatSelector = new SinglestatSelector();
  thresholds: Array<SinglestatThreshold> = new Array<SinglestatThreshold>();

  gauge: GaugeSettings = new GaugeSettings();
  label: LabelSettings = new LabelSettings();
  sparkline: SparklineSettings = new SparklineSettings();

  mappings: Array<Mapping> = new Array<Mapping>();
}

export class SinglestatSelector{
  default: boolean = true;

  refId: string = 'A';
  field: string = 'field';
  reducer: SinglestatValueReducer = SinglestatValueReducer.Last;
}

export class GaugeSettings{ 
  show: boolean = false;
  
  angle: number = -0.1;
  lineWidth: number = 0.3;
  radius: number = 1.0;

  foreground: string =  `#${ColorHelper.colors[ 0 ]}`;
  background: string = '#262626';

  useThresholds: boolean = false;

  min: number = 0;
  max: number = 100;

  labels: GaugeLabelsSettings = new GaugeLabelsSettings();
  pointer: GaugePointerSettings = new GaugePointerSettings();
  ticks: GaugeTicksSettings = new GaugeTicksSettings();
  
}

export class GaugePointerSettings{

  type: GaugePointerType = GaugePointerType.Linear; 

  width: number = 0.025;
  length: number = 0.35;
  color: string = '#000000';
  thickness: number = 0.01;
}

export enum GaugePointerType{
  None = "none",
  Linear = "linear",
  Radial = "radial",
}

export class GaugeLabelsSettings{
  show: boolean = false;
  color: string = "#e3e3e3";
  fontSize: number = 100;
}

export class GaugeTicksSettings{
  show: boolean = false;

  divisions: number = 5;
  divWidth: number = 1;
  divLength: number = 1;
  divColor: string = "#333333";

  subDivisions: number = 10;
  subDivWidth: number = 1;
  subDivLength: number = 1;
  subDivColor: string = "#666666";
}

export class LabelSettings {
  show: boolean = true;
  
  fontSize?: number = 100;
  decimals?: number;
  noDataMessage?: string = "(no data)";
  unit: UnitType;
  background: boolean = false;
  foreground: boolean = true;

  prefix: string;
  prefixForeground: boolean = false;
  prefixFontSize: number = 100;
  
  postfix: string;
  postfixForeground: boolean = false;
  postfixFontSize: number = 100;

  position: LabelPosition = LabelPosition.Bottom;
  offset: number = 50;
}

export class SparklineSettings{
  show: boolean = false;

  stroke: number = 2;
  fill: number = 0;
  color: string = "#e24d42";

  pointCount: number = 5;
  interactive: boolean = false;
  spotRadius: number = 2;
  spotColor: string = "#e24d42";
  cursorColor: string = "orange";
  showTooltip: boolean = true;

  width: number = 20;
  height: number = 20;
}

export class SinglestatThreshold{
  value: number;
  color: string;
}

export enum LabelPosition{
  Bottom = "bottom",
  Top = "top",
  Middle = "middle"
}


export enum SinglestatValueReducer{
  First = "first",
  Last = "last",
  Min = "min",
  Max = "max",
  Average = "avg",
}



export enum MappingType{
  Discrete = "discrete",
  Range = "range"
}

export class Mapping {
  type: MappingType = MappingType.Range;

  from?: number;
  to?: number;
  value?: number;

  text: string;
}



export interface DataSet{
  refId: string;
  name: string;
  columns: string[];
  values: any;
}
