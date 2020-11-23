import { TimeRangeMod, AlertRule, Metrics } from 'common';
import { ChartComponent } from './chart.c';
export declare const AXIS_X = "xAxis";
export declare const AXIS_Y_LEFT = "yAxisL";
export declare const AXIS_Y_RIGHT = "yAxisR";
export interface ChartData {
    datasets: DataSet[];
}
export interface DataSet {
    label: string;
    data: DataPoint[];
    min?: number;
    max?: number;
    avg?: number;
    current?: number;
    allNulls?: boolean;
    allZeros?: boolean;
    index: number;
    fill?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    pointBorderColor?: string;
    pointBackgroundColor?: string;
    pointRadius?: number;
    steppedLine?: boolean;
    borderDash?: number[];
    order?: number;
    legend?: boolean;
    hidden?: boolean;
    selected?: boolean;
    yAxisID?: string;
}
export interface DataPoint {
    x?: number;
    y?: number;
    isNull: boolean;
}
export declare class Chart {
    legend: Legend;
    axes: Axes;
    display: Display;
    time: TimeRangeMod;
    alert: AlertRule;
    metrics: Metrics;
    component: ChartComponent;
}
export declare class Legend {
    show: boolean;
    table: boolean;
    right: boolean;
    min: number;
    max: number;
    avg: number;
    current: number;
    total: number;
    decimals?: number;
    hideOnlyNulls: boolean;
    hideOnlyZeroes: boolean;
}
export declare class Axes {
    leftY: VerticalAxis;
    rightY?: VerticalAxis;
    x: HorizontalAxis;
}
export declare enum ScaleType {
    Linear = "linear",
    Log2 = "log2",
    Log10 = "log10",
    Log32 = "log32",
    Log1024 = "log1024"
}
export declare class VerticalAxis {
    show: boolean;
    constructor(show?: boolean);
    unit: any;
    scale: ScaleType;
    min?: number;
    max?: number;
    decimals?: number;
    label?: string;
}
export declare class HorizontalAxis {
    show: boolean;
    min?: number;
    max?: number;
    label?: string;
}
export declare class Display {
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
export declare class Threshold {
    operator: ThresholdOperator;
    value?: number;
    colorType: ThresholdColor;
    fill: boolean;
    line: boolean;
    fillColor: any;
    lineColor: any;
    axis: ThresholdAxis;
}
export declare enum TooltipMode {
    All = "all",
    Single = "single"
}
export declare enum TooltipSortOrder {
    None = "none",
    Increasing = "increasing",
    Decreasing = "decreasing"
}
export declare enum DataPointNullValueOption {
    Connected = "connected",
    Null = "null",
    NullAsZero = "nullAsZero"
}
export declare enum ThresholdOperator {
    Gt = "gt",
    Lt = "lt"
}
export declare enum ThresholdColor {
    Custom = "custom",
    Critical = "critical",
    Warning = "warning",
    Ok = "ok"
}
export declare enum ThresholdAxis {
    Left = "left",
    Right = "right"
}
export declare class TimeRegion {
    colorType: TimeRegionColor;
    fill: boolean;
    line: boolean;
    fillColor: string;
    lineColor: string;
    fromDay: TimeRegionDay;
    toDay: TimeRegionDay;
    fromTime?: string;
    toTime?: string;
}
export declare enum TimeRegionColor {
    Gray = "gray",
    Red = "red",
    Green = "green",
    Blue = "blue",
    Yellow = "yellow",
    Custom = "custom"
}
export declare enum TimeRegionDay {
    Any = "any",
    Mon = "mon",
    Tue = "tue",
    Wed = "wed",
    Thu = "thu",
    Fri = "fri",
    Sat = "sat",
    Sun = "sun"
}
export declare class SeriesOverride {
    alias: string;
    items: OverrideItem[];
}
export declare class OverrideItem {
    type: OverrideType | string;
    value: any;
    constructor(type: OverrideType | string, value: any);
}
export declare enum OverrideType {
    Lines = 0,
    Points = 1,
    PointRadius = 2,
    Stack = 3,
    LineFill = 4,
    LineWidth = 5,
    Staircase = 6,
    Dashes = 7,
    DashLength = 8,
    DashSpace = 9,
    Legend = 10,
    HideInTooltip = 11,
    Color = 12,
    YAxis = 13,
    ZIndex = 14
}
//# sourceMappingURL=chart.m.d.ts.map