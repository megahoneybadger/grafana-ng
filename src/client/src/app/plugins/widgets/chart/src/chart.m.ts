import { UIChart } from 'primeng';
import { ChartComponent } from './chart.c';

export interface ChartData{
	datasets: DataSet[];
}

export interface DataSet{
	label: string;
	data: DataPoint[];

	min?: number;
	max?: number
	avg?: number;
	current?: number;

	allNulls?: boolean;
	allZeros?: boolean;

	index: number;

	//display
	fill?: boolean;
	backgroundColor?:string; 
	borderColor?: string;
	borderWidth?: number;

	pointBorderColor?: string; 
	pointBackgroundColor?: string; 
	pointRadius?: number; 

	steppedLine?: boolean;

	borderDash?: number[]

	order?: number;

	legend?: boolean;
	hidden?: boolean;
	selected?: boolean;
}

export interface DataPoint{
	x?: number;
	y?: number;
	isNull: boolean;
}

export interface Chart{
	legend: Legend;
	axes: Axes;
	display: Display;

	component: ChartComponent;
}

export interface Legend{
	show: boolean;
	table: boolean;
	right: boolean;

	min: number;
	max: number;
	avg: number;
	current: number;
	total: number;
	decimals? : number;

	hideOnlyNulls: boolean;
	hideOnlyZeroes: boolean;
}

export interface Axes{
	leftY: Axis;
	rightY?: Axis;
	x: any;
}


export enum ScaleType {
	Linear = "linear",
	Log2 = "log2",
	Log10 = "log10",
	Log32 = "log32",
	Log1024 = "log1024"
}

export interface Axis{
	show: boolean;
	unit:any;
	scale: ScaleType;
	min?: number;
	max?: number;
	decimals?: number;
	label?: string;
}

export interface Display{
	showLines: boolean;
	showPoints: boolean;
	showBars: boolean;

	fill: number;
	lineWidth: number;
	pointRadius: number;

	staircase: boolean;
	tooltipMode: TooltipMode;
	tooltipSortOrder: TooltipSortOrder;
	
	stack: boolean;
	nullValue: DataPointNullValueOption;

	thresholds: Threshold[];
	timeRegions: TimeRegion[];
	overrides: SeriesOverride[];
}

export class Threshold{
	operator: ThresholdOperator = ThresholdOperator.Gt;
	value?: number;

	colorType: ThresholdColor = ThresholdColor.Critical;

	fill: boolean = true;
	line: boolean = true;
	fillColor: any;
	lineColor: any;

	axis: ThresholdAxis = ThresholdAxis.Left;
}

export enum TooltipMode {
	All = "all",
	Single = "single"
}

export enum TooltipSortOrder {
	None = "none",
	Increasing = "increasing",
	Decreasing = "decreasing"
}

export enum DataPointNullValueOption {
	Connected = "connected",
	Null = "null",
	NullAsZero = "nullAsZero"
}

export enum ThresholdOperator {
	Gt = "gt",
	Lt = "lt",
}

export enum ThresholdColor {
	Custom = "custom",
	Critical = "critical",
	Warning = "warning",
	Ok = "ok"
}

export enum ThresholdAxis {
	Left = "left",
	Right = "right"
}

export class TimeRegion{
	colorType: TimeRegionColor = TimeRegionColor.Red;

	fill: boolean = true;
	line: boolean = true;
	fillColor: string;
	lineColor: string;

	fromDay: TimeRegionDay = TimeRegionDay.Any;
	toDay: TimeRegionDay = TimeRegionDay.Any;

	fromTime?: string;
	toTime?: string;
}

export enum TimeRegionColor {
	Gray = "gray",
	Red = "red",
	Green = "green",
	Blue = "blue",
	Yellow = "yellow",
	Custom = "custom"
}

export enum TimeRegionDay {
	Any = "any",
	Mon = "mon",
	Tue = "tue",
	Wed = "wed",
	Thu = "thu",
	Fri = "fri",
	Sat = "sat",
	Sun = "sun"
}

export class SeriesOverride{
	alias: string;
	items: OverrideItem[];
}

export class OverrideItem{
	constructor( public type: OverrideType | string, public value: any ){
		
	}
}

export enum OverrideType{
	Lines,
	Points,
	PointRadius,
	Stack,
	LineFill,
	LineWidth,
	Staircase,
	Dashes,
	DashLength,
	DashSpace,
	Legend,
	HideInTooltip,
	Color,
	YAxis,
	ZIndex,
}