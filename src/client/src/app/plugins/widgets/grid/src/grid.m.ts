import { Metrics, PanelLink, PanelLinkType } from "common";
import { ColorHelper, UnitType } from "uilib";
import { GridPanelComponent } from "./grid.c";


export class GridModel{
	
	component: GridPanelComponent;
  metrics: Metrics;

  transform: GridTransform = GridTransform.TimeSeriesToRows;

	scroll: boolean = true;
	pageSize: number;
	fontSize: number;

	rules: Array<ColumnStyleRule> = new Array<ColumnStyleRule>();
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

export class ColumnStyleRule{
	key: string;
	header: string;
	
	renderAsLink: boolean = false;

	type: ColumnType = ColumnType.Number;

	// date
	format: string = "YYYY-MM-DD HH:mm:ss";

	//number
	unit: UnitType = UnitType.None;
	decimals: number = 2;

	//string
}

export enum ColumnType{
	Date = "date",
	String = "string",
	Number = "number",
	Hidden = "hidden"
}

