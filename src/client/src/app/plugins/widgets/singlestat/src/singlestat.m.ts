import { Metrics, PanelLink, PanelLinkType } from "common";
import { SinglestatPanelComponent } from "./singlestat.c";


export class SinglestatModel{
	
	component: SinglestatPanelComponent;

  metrics: Metrics;

  angle: number = 0;
  lineWidth: number = 0.2;
  radius: number = 1.0;
  animationSpeed: number = 32;

  colorStart: string = '#508642';
  colorStop: string = '#508642';
  colorBackground: string = '#f9ba8f';

  pointer: GaugePointer = new GaugePointer();
  value: GaugeValue = new GaugeValue();
}



export class GaugePointer{
  width: number = 0.035;
  length: number = 0.1;
  color: string = '#000000';
}

export class GaugeSettings{ 
  //angle: number = ;
  
  radius: number;
}

export class GaugeValue {
  refId: string = 'A';
  field: string = 'field';
  reducer: GaugeValueReducer = GaugeValueReducer.Last;
  decimals?: number;
  unit?: string;
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


export interface DataSet{
  refId: string;
  name: string;
  columns: string[];
  values: any;
}
