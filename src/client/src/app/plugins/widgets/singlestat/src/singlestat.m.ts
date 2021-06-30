import { Metrics, PanelLink, PanelLinkType } from "common";
import { UnitType } from "uilib";
import { SinglestatPanelComponent } from "./singlestat.c";


export class SinglestatModel{
	
	component: SinglestatPanelComponent;
  metrics: Metrics;

  useDefaultSelector: boolean = true;

  selector: SinglestatSelector = new SinglestatSelector();
  thresholds: Array<GaugeThreshold> = new Array<GaugeThreshold>();

  gauge: GaugeSettings = new GaugeSettings();
  label: LabelSettings = new LabelSettings();
}

export class SinglestatSelector{
  default: boolean = true;

  refId: string = 'A';
  field: string = 'field';
  reducer: GaugeValueReducer = GaugeValueReducer.Last;
}

export class GaugeSettings{ 
  show: boolean = false;
  
  angle: number = 0;
  lineWidth: number = 0.2;
  radius: number = 1.0;
  animationSpeed: number = 32;

  colorStart: string = '#508642';
  colorStop: string = '#508642';
  colorBackground: string = '#f9ba8f';

  pointer: GaugePointerSettings = new GaugePointerSettings();
}

export class GaugePointerSettings{
  width: number = 0.035;
  length: number = 0.1;
  color: string = '#000000';
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
}

export class GaugeThreshold{
  value: number;
  color: string;
}

export enum GaugeValueReducer{
  First = "first",
  Last = "last",
  Min = "min",
  Max = "max",
  Average = "avg",
}

export interface DataSet{
  refId: string;
  name: string;
  columns: string[];
  values: any;
}
