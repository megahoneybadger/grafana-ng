export const AXIS_X = "xAxis";
export const AXIS_Y_LEFT = "yAxisL";
export const AXIS_Y_RIGHT = "yAxisR";
export class Chart {
    constructor() {
        this.legend = new Legend();
        this.axes = new Axes();
        this.display = new Display();
    }
}
export class Legend {
    constructor() {
        this.show = false;
        this.table = false;
        this.right = false;
    }
}
export class Axes {
    constructor() {
        this.leftY = new VerticalAxis();
        this.rightY = new VerticalAxis(false);
        this.x = new HorizontalAxis();
    }
}
export var ScaleType;
(function (ScaleType) {
    ScaleType["Linear"] = "linear";
    ScaleType["Log2"] = "log2";
    ScaleType["Log10"] = "log10";
    ScaleType["Log32"] = "log32";
    ScaleType["Log1024"] = "log1024";
})(ScaleType || (ScaleType = {}));
export class VerticalAxis {
    constructor(show = true) {
        this.show = show;
        this.scale = ScaleType.Linear;
    }
}
export class HorizontalAxis {
    constructor() {
        this.show = true;
    }
}
export class Display {
    constructor() {
        this.showLines = true;
        this.fill = 1;
        this.lineWidth = 1;
    }
}
export class Threshold {
    constructor() {
        this.operator = ThresholdOperator.Gt;
        this.colorType = ThresholdColor.Critical;
        this.fill = true;
        this.line = true;
        this.axis = ThresholdAxis.Left;
    }
}
export var TooltipMode;
(function (TooltipMode) {
    TooltipMode["All"] = "all";
    TooltipMode["Single"] = "single";
})(TooltipMode || (TooltipMode = {}));
export var TooltipSortOrder;
(function (TooltipSortOrder) {
    TooltipSortOrder["None"] = "none";
    TooltipSortOrder["Increasing"] = "increasing";
    TooltipSortOrder["Decreasing"] = "decreasing";
})(TooltipSortOrder || (TooltipSortOrder = {}));
export var DataPointNullValueOption;
(function (DataPointNullValueOption) {
    DataPointNullValueOption["Connected"] = "connected";
    DataPointNullValueOption["Null"] = "null";
    DataPointNullValueOption["NullAsZero"] = "nullAsZero";
})(DataPointNullValueOption || (DataPointNullValueOption = {}));
export var ThresholdOperator;
(function (ThresholdOperator) {
    ThresholdOperator["Gt"] = "gt";
    ThresholdOperator["Lt"] = "lt";
})(ThresholdOperator || (ThresholdOperator = {}));
export var ThresholdColor;
(function (ThresholdColor) {
    ThresholdColor["Custom"] = "custom";
    ThresholdColor["Critical"] = "critical";
    ThresholdColor["Warning"] = "warning";
    ThresholdColor["Ok"] = "ok";
})(ThresholdColor || (ThresholdColor = {}));
export var ThresholdAxis;
(function (ThresholdAxis) {
    ThresholdAxis["Left"] = "left";
    ThresholdAxis["Right"] = "right";
})(ThresholdAxis || (ThresholdAxis = {}));
export class TimeRegion {
    constructor() {
        this.colorType = TimeRegionColor.Red;
        this.fill = true;
        this.line = true;
        this.fromDay = TimeRegionDay.Any;
        this.toDay = TimeRegionDay.Any;
    }
}
export var TimeRegionColor;
(function (TimeRegionColor) {
    TimeRegionColor["Gray"] = "gray";
    TimeRegionColor["Red"] = "red";
    TimeRegionColor["Green"] = "green";
    TimeRegionColor["Blue"] = "blue";
    TimeRegionColor["Yellow"] = "yellow";
    TimeRegionColor["Custom"] = "custom";
})(TimeRegionColor || (TimeRegionColor = {}));
export var TimeRegionDay;
(function (TimeRegionDay) {
    TimeRegionDay["Any"] = "any";
    TimeRegionDay["Mon"] = "mon";
    TimeRegionDay["Tue"] = "tue";
    TimeRegionDay["Wed"] = "wed";
    TimeRegionDay["Thu"] = "thu";
    TimeRegionDay["Fri"] = "fri";
    TimeRegionDay["Sat"] = "sat";
    TimeRegionDay["Sun"] = "sun";
})(TimeRegionDay || (TimeRegionDay = {}));
export class SeriesOverride {
}
export class OverrideItem {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
export var OverrideType;
(function (OverrideType) {
    OverrideType[OverrideType["Lines"] = 0] = "Lines";
    OverrideType[OverrideType["Points"] = 1] = "Points";
    OverrideType[OverrideType["PointRadius"] = 2] = "PointRadius";
    OverrideType[OverrideType["Stack"] = 3] = "Stack";
    OverrideType[OverrideType["LineFill"] = 4] = "LineFill";
    OverrideType[OverrideType["LineWidth"] = 5] = "LineWidth";
    OverrideType[OverrideType["Staircase"] = 6] = "Staircase";
    OverrideType[OverrideType["Dashes"] = 7] = "Dashes";
    OverrideType[OverrideType["DashLength"] = 8] = "DashLength";
    OverrideType[OverrideType["DashSpace"] = 9] = "DashSpace";
    OverrideType[OverrideType["Legend"] = 10] = "Legend";
    OverrideType[OverrideType["HideInTooltip"] = 11] = "HideInTooltip";
    OverrideType[OverrideType["Color"] = 12] = "Color";
    OverrideType[OverrideType["YAxis"] = 13] = "YAxis";
    OverrideType[OverrideType["ZIndex"] = 14] = "ZIndex";
})(OverrideType || (OverrideType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0Lm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFpRHJDLE1BQU0sT0FBTyxLQUFLO0lBQWxCO1FBQ0MsV0FBTSxHQUFXLElBQUksTUFBTSxFQUFFLENBQUM7UUFDOUIsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFZLElBQUksT0FBTyxFQUFFLENBQUM7SUFNbEMsQ0FBQztDQUFBO0FBRUQsTUFBTSxPQUFPLE1BQU07SUFBbkI7UUFDQyxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsVUFBSyxHQUFZLEtBQUssQ0FBQztJQVd4QixDQUFDO0NBQUE7QUFFRCxNQUFNLE9BQU8sSUFBSTtJQUFqQjtRQUNDLFVBQUssR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QyxXQUFNLEdBQWtCLElBQUksWUFBWSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ2xELE1BQUMsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0NBQUE7QUFFRCxNQUFNLENBQU4sSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ3BCLDhCQUFpQixDQUFBO0lBQ2pCLDBCQUFhLENBQUE7SUFDYiw0QkFBZSxDQUFBO0lBQ2YsNEJBQWUsQ0FBQTtJQUNmLGdDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFOVyxTQUFTLEtBQVQsU0FBUyxRQU1wQjtBQUVELE1BQU0sT0FBTyxZQUFZO0lBRXhCLFlBQW9CLE9BQWdCLElBQUk7UUFB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YixhQUFhLFFBU3hCO0FBRUQsTUFBTSxPQUFPLGNBQWM7Q0FHMUI7QUFFRCxNQUFNLE9BQU8sWUFBWTtJQUN4QixZQUFvQixJQUEyQixFQUFTLEtBQVU7UUFBOUMsU0FBSSxHQUFKLElBQUksQ0FBdUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFLO0lBRWxFLENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBTixJQUFZLFlBZ0JYO0FBaEJELFdBQVksWUFBWTtJQUN2QixpREFBSyxDQUFBO0lBQ0wsbURBQU0sQ0FBQTtJQUNOLDZEQUFXLENBQUE7SUFDWCxpREFBSyxDQUFBO0lBQ0wsdURBQVEsQ0FBQTtJQUNSLHlEQUFTLENBQUE7SUFDVCx5REFBUyxDQUFBO0lBQ1QsbURBQU0sQ0FBQTtJQUNOLDJEQUFVLENBQUE7SUFDVix5REFBUyxDQUFBO0lBQ1Qsb0RBQU0sQ0FBQTtJQUNOLGtFQUFhLENBQUE7SUFDYixrREFBSyxDQUFBO0lBQ0wsa0RBQUssQ0FBQTtJQUNMLG9EQUFNLENBQUE7QUFDUCxDQUFDLEVBaEJXLFlBQVksS0FBWixZQUFZLFFBZ0J2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVSYW5nZU1vZCwgQWxlcnRSdWxlLCBNZXRyaWNzIH0gZnJvbSAnY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jJztcclxuXHJcbmV4cG9ydCBjb25zdCBBWElTX1ggPSBcInhBeGlzXCI7XHJcbmV4cG9ydCBjb25zdCBBWElTX1lfTEVGVCA9IFwieUF4aXNMXCI7XHJcbmV4cG9ydCBjb25zdCBBWElTX1lfUklHSFQgPSBcInlBeGlzUlwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGF7XHJcblx0ZGF0YXNldHM6IERhdGFTZXRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhU2V0e1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0ZGF0YTogRGF0YVBvaW50W107XHJcblxyXG5cdG1pbj86IG51bWJlcjtcclxuXHRtYXg/OiBudW1iZXJcclxuXHRhdmc/OiBudW1iZXI7XHJcblx0Y3VycmVudD86IG51bWJlcjtcclxuXHJcblx0YWxsTnVsbHM/OiBib29sZWFuO1xyXG5cdGFsbFplcm9zPzogYm9vbGVhbjtcclxuXHJcblx0aW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly9kaXNwbGF5XHJcblx0ZmlsbD86IGJvb2xlYW47XHJcblx0YmFja2dyb3VuZENvbG9yPzpzdHJpbmc7IFxyXG5cdGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG5cdGJvcmRlcldpZHRoPzogbnVtYmVyO1xyXG5cclxuXHRwb2ludEJvcmRlckNvbG9yPzogc3RyaW5nOyBcclxuXHRwb2ludEJhY2tncm91bmRDb2xvcj86IHN0cmluZzsgXHJcblx0cG9pbnRSYWRpdXM/OiBudW1iZXI7IFxyXG5cclxuXHRzdGVwcGVkTGluZT86IGJvb2xlYW47XHJcblxyXG5cdGJvcmRlckRhc2g/OiBudW1iZXJbXVxyXG5cclxuXHRvcmRlcj86IG51bWJlcjtcclxuXHJcblx0bGVnZW5kPzogYm9vbGVhbjtcclxuXHRoaWRkZW4/OiBib29sZWFuO1xyXG5cdHNlbGVjdGVkPzogYm9vbGVhbjtcclxuXHJcblx0eUF4aXNJRD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnR7XHJcblx0eD86IG51bWJlcjtcclxuXHR5PzogbnVtYmVyO1xyXG5cdGlzTnVsbDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJ0e1xyXG5cdGxlZ2VuZDogTGVnZW5kID0gbmV3IExlZ2VuZCgpO1xyXG5cdGF4ZXM6IEF4ZXMgPSBuZXcgQXhlcygpO1xyXG5cdGRpc3BsYXk6IERpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG5cdHRpbWU6IFRpbWVSYW5nZU1vZDtcclxuXHRhbGVydDogQWxlcnRSdWxlO1xyXG5cdG1ldHJpY3M6IE1ldHJpY3M7XHJcblxyXG5cdGNvbXBvbmVudDogQ2hhcnRDb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMZWdlbmR7XHJcblx0c2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHRhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblx0cmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0bWluOiBudW1iZXI7XHJcblx0bWF4OiBudW1iZXI7XHJcblx0YXZnOiBudW1iZXI7XHJcblx0Y3VycmVudDogbnVtYmVyO1xyXG5cdHRvdGFsOiBudW1iZXI7XHJcblx0ZGVjaW1hbHM/IDogbnVtYmVyO1xyXG5cclxuXHRoaWRlT25seU51bGxzOiBib29sZWFuO1xyXG5cdGhpZGVPbmx5WmVyb2VzOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXhlc3tcclxuXHRsZWZ0WTogVmVydGljYWxBeGlzID0gbmV3IFZlcnRpY2FsQXhpcygpO1xyXG5cdHJpZ2h0WT86IFZlcnRpY2FsQXhpcyA9IG5ldyBWZXJ0aWNhbEF4aXMoIGZhbHNlICk7XHJcblx0eDogSG9yaXpvbnRhbEF4aXMgPSBuZXcgSG9yaXpvbnRhbEF4aXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2NhbGVUeXBlIHtcclxuXHRMaW5lYXIgPSBcImxpbmVhclwiLFxyXG5cdExvZzIgPSBcImxvZzJcIixcclxuXHRMb2cxMCA9IFwibG9nMTBcIixcclxuXHRMb2czMiA9IFwibG9nMzJcIixcclxuXHRMb2cxMDI0ID0gXCJsb2cxMDI0XCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsQXhpc3tcclxuXHJcblx0Y29uc3RydWN0b3IoIHB1YmxpYyBzaG93OiBib29sZWFuID0gdHJ1ZSAgKXtcclxuXHJcblx0fVxyXG5cdC8vc2hvdzogYm9vbGVhbiA9IHRydWU7XHJcblx0dW5pdDphbnk7XHJcblx0c2NhbGU6IFNjYWxlVHlwZSA9IFNjYWxlVHlwZS5MaW5lYXI7XHJcblx0bWluPzogbnVtYmVyO1xyXG5cdG1heD86IG51bWJlcjtcclxuXHRkZWNpbWFscz86IG51bWJlcjtcclxuXHRsYWJlbD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvcml6b250YWxBeGlze1xyXG5cdHNob3c6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdG1pbj86IG51bWJlcjtcclxuXHRtYXg/OiBudW1iZXI7XHJcblx0bGFiZWw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNwbGF5e1xyXG5cdHNob3dMaW5lczogYm9vbGVhbiA9IHRydWU7XHJcblx0c2hvd1BvaW50czogYm9vbGVhbjtcclxuXHRzaG93QmFyczogYm9vbGVhbjtcclxuXHJcblx0ZmlsbDogbnVtYmVyID0gMTtcclxuXHRsaW5lV2lkdGg6IG51bWJlciA9IDE7XHJcblx0cG9pbnRSYWRpdXM6IG51bWJlcjtcclxuXHJcblx0c3RhaXJjYXNlOiBib29sZWFuO1xyXG5cdHRvb2x0aXBNb2RlOiBUb29sdGlwTW9kZTtcclxuXHR0b29sdGlwU29ydE9yZGVyOiBUb29sdGlwU29ydE9yZGVyO1xyXG5cdFxyXG5cdHN0YWNrOiBib29sZWFuO1xyXG5cdG51bGxWYWx1ZTogRGF0YVBvaW50TnVsbFZhbHVlT3B0aW9uO1xyXG5cclxuXHR0aHJlc2hvbGRzOiBUaHJlc2hvbGRbXTtcclxuXHR0aW1lUmVnaW9uczogVGltZVJlZ2lvbltdO1xyXG5cdG92ZXJyaWRlczogU2VyaWVzT3ZlcnJpZGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRocmVzaG9sZHtcclxuXHRvcGVyYXRvcjogVGhyZXNob2xkT3BlcmF0b3IgPSBUaHJlc2hvbGRPcGVyYXRvci5HdDtcclxuXHR2YWx1ZT86IG51bWJlcjtcclxuXHJcblx0Y29sb3JUeXBlOiBUaHJlc2hvbGRDb2xvciA9IFRocmVzaG9sZENvbG9yLkNyaXRpY2FsO1xyXG5cclxuXHRmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHRsaW5lOiBib29sZWFuID0gdHJ1ZTtcclxuXHRmaWxsQ29sb3I6IGFueTtcclxuXHRsaW5lQ29sb3I6IGFueTtcclxuXHJcblx0YXhpczogVGhyZXNob2xkQXhpcyA9IFRocmVzaG9sZEF4aXMuTGVmdDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVG9vbHRpcE1vZGUge1xyXG5cdEFsbCA9IFwiYWxsXCIsXHJcblx0U2luZ2xlID0gXCJzaW5nbGVcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUb29sdGlwU29ydE9yZGVyIHtcclxuXHROb25lID0gXCJub25lXCIsXHJcblx0SW5jcmVhc2luZyA9IFwiaW5jcmVhc2luZ1wiLFxyXG5cdERlY3JlYXNpbmcgPSBcImRlY3JlYXNpbmdcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEYXRhUG9pbnROdWxsVmFsdWVPcHRpb24ge1xyXG5cdENvbm5lY3RlZCA9IFwiY29ubmVjdGVkXCIsXHJcblx0TnVsbCA9IFwibnVsbFwiLFxyXG5cdE51bGxBc1plcm8gPSBcIm51bGxBc1plcm9cIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaHJlc2hvbGRPcGVyYXRvciB7XHJcblx0R3QgPSBcImd0XCIsXHJcblx0THQgPSBcImx0XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRocmVzaG9sZENvbG9yIHtcclxuXHRDdXN0b20gPSBcImN1c3RvbVwiLFxyXG5cdENyaXRpY2FsID0gXCJjcml0aWNhbFwiLFxyXG5cdFdhcm5pbmcgPSBcIndhcm5pbmdcIixcclxuXHRPayA9IFwib2tcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaHJlc2hvbGRBeGlzIHtcclxuXHRMZWZ0ID0gXCJsZWZ0XCIsXHJcblx0UmlnaHQgPSBcInJpZ2h0XCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVSZWdpb257XHJcblx0Y29sb3JUeXBlOiBUaW1lUmVnaW9uQ29sb3IgPSBUaW1lUmVnaW9uQ29sb3IuUmVkO1xyXG5cclxuXHRmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHRsaW5lOiBib29sZWFuID0gdHJ1ZTtcclxuXHRmaWxsQ29sb3I6IHN0cmluZztcclxuXHRsaW5lQ29sb3I6IHN0cmluZztcclxuXHJcblx0ZnJvbURheTogVGltZVJlZ2lvbkRheSA9IFRpbWVSZWdpb25EYXkuQW55O1xyXG5cdHRvRGF5OiBUaW1lUmVnaW9uRGF5ID0gVGltZVJlZ2lvbkRheS5Bbnk7XHJcblxyXG5cdGZyb21UaW1lPzogc3RyaW5nO1xyXG5cdHRvVGltZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGltZVJlZ2lvbkNvbG9yIHtcclxuXHRHcmF5ID0gXCJncmF5XCIsXHJcblx0UmVkID0gXCJyZWRcIixcclxuXHRHcmVlbiA9IFwiZ3JlZW5cIixcclxuXHRCbHVlID0gXCJibHVlXCIsXHJcblx0WWVsbG93ID0gXCJ5ZWxsb3dcIixcclxuXHRDdXN0b20gPSBcImN1c3RvbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRpbWVSZWdpb25EYXkge1xyXG5cdEFueSA9IFwiYW55XCIsXHJcblx0TW9uID0gXCJtb25cIixcclxuXHRUdWUgPSBcInR1ZVwiLFxyXG5cdFdlZCA9IFwid2VkXCIsXHJcblx0VGh1ID0gXCJ0aHVcIixcclxuXHRGcmkgPSBcImZyaVwiLFxyXG5cdFNhdCA9IFwic2F0XCIsXHJcblx0U3VuID0gXCJzdW5cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VyaWVzT3ZlcnJpZGV7XHJcblx0YWxpYXM6IHN0cmluZztcclxuXHRpdGVtczogT3ZlcnJpZGVJdGVtW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVycmlkZUl0ZW17XHJcblx0Y29uc3RydWN0b3IoIHB1YmxpYyB0eXBlOiBPdmVycmlkZVR5cGUgfCBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogYW55ICl7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE92ZXJyaWRlVHlwZXtcclxuXHRMaW5lcyxcclxuXHRQb2ludHMsXHJcblx0UG9pbnRSYWRpdXMsXHJcblx0U3RhY2ssXHJcblx0TGluZUZpbGwsXHJcblx0TGluZVdpZHRoLFxyXG5cdFN0YWlyY2FzZSxcclxuXHREYXNoZXMsXHJcblx0RGFzaExlbmd0aCxcclxuXHREYXNoU3BhY2UsXHJcblx0TGVnZW5kLFxyXG5cdEhpZGVJblRvb2x0aXAsXHJcblx0Q29sb3IsXHJcblx0WUF4aXMsXHJcblx0WkluZGV4LFxyXG59XHJcblxyXG4iXX0=