import { ChartComponent } from './chart.c';
export declare const PANEL_TOKEN = "panel";
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
}
export interface DataPoint {
    x?: number;
    y?: number;
    isNull: boolean;
}
export interface RGB {
    r: number;
    g: number;
    b: number;
}
export interface Chart {
    legend: Legend;
    axes: Axes;
    display: Display;
    component: ChartComponent;
}
export interface Legend {
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
export interface Axes {
    leftY: Axis;
    rightY?: Axis;
    x: any;
}
export declare enum ScaleType {
    Linear = "linear",
    Log2 = "log2",
    Log10 = "log10",
    Log32 = "log32",
    Log1024 = "log1024"
}
export interface Axis {
    show: boolean;
    unit: any;
    scale: ScaleType;
    min?: number;
    max?: number;
    decimals?: number;
    label?: string;
}
export interface Display {
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
//# sourceMappingURL=chart.m.d.ts.map