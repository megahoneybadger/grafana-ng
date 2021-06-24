import { Metrics, PanelLink, PanelLinkType } from "common";
import { SinglestatPanelComponent } from "./singlestat.c";


export class SinglestatModel{
	
	component: SinglestatPanelComponent;
  metrics: Metrics;

  gauge: GaugeSettings = new GaugeSettings();
  value: ValueSettings = new ValueSettings();
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

export class ValueSettings {
  show: boolean = true;
  refId: string = 'A';
  field: string = 'field';
  reducer: GaugeValueReducer = GaugeValueReducer.Last;
  fontSize?: number = 100;
  decimals?: number;
  unit?: string;
  noDataMessage?: string = "(no data)";
}

export class GaugeColors{
  start: string;
  stop: string;
  background: string;
  thresholds: GaugeThreshold[];
}

export class GaugeThreshold{

}

export enum GaugeValueReducer{
  First = "first",
  Last = "last",
  Min = "min",
  Max = "max",
  Average = "avg",
}

export enum FontSize{
  Size_10 = "10%",
  Size_20 = "20%",
  Size_30 = "30%",
  Size_40 = "40%",
  Size_50 = "50%",
  Size_60 = "60%",
  Size_70 = "70%",
  Size_80 = "80%",
  Size_90 = "90%",
  Size_100 = "100%",
  Size_110 = "110%",
  Size_120 = "120%",
  Size_130 = "130%",
  Size_140 = "140%",
  Size_150 = "150%",
  Size_160 = "160%",
  Size_170 = "170%",
  Size_180 = "180%",
  Size_190 = "190%",
  Size_200 = "200%",
}


export interface DataSet{
  refId: string;
  name: string;
  columns: string[];
  values: any;
}
