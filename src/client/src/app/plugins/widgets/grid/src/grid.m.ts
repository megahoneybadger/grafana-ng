import { Metrics, PanelLink, PanelLinkType } from "common";
import { ColorHelper, UnitType } from "uilib";
import { GridPanelComponent } from "./grid.c";


export class GridModel{
	
	component: GridPanelComponent;
  metrics: Metrics;

  transform: GridTransform = GridTransform.TimeSeriesToRows
}

export enum GridTransform {
	TimeSeriesToRows = "rows",
	TimeSeriesToColumns = "cols",
	TimeSeriesAggregations = "aggr",
	JSON = "json"
}

export class GridSchema{
	items: Array<GridSchemaItem> = [];
}

export class GridSchemaItem{
	constructor( public column: string, public field: string ){

	}
}

