import { UIChart } from 'primeng';

export const PANEL_TOKEN = "panel";

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

export interface RGB{
	r: number;
	g: number;
	b: number;
}

export interface Chart{
	legend: Legend;
	axes: Axes;

	control: UIChart;
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