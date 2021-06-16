import { Metrics, PanelLink, PanelLinkType } from "common";
import { SinglestatPanelComponent } from "./singlestat.c";


export class SinglestatModel{
	
	component: SinglestatPanelComponent;

  angle: number = 0.15;
  lineWidth: number = 0.2;

  colors: GaugeColors;
}

export class GaugeSettings{ 
  //angle: number = ;
  
  radius: number;
}

export interface ValueOptions{
  reducer: GaugeValueReducer;
  min?: number;
  max?: number;
  decimals?: number;
  unit?: string;
  displayName?: string;
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
  First,
  Current,
  Min,
  Max,
  Average,
}


export interface DataSet{
  refId: string;
  name: string;
  columns: string[];
  values: any;
}
