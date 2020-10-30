export const AXIS_X = "xAxis";
export const AXIS_Y_LEFT = "yAxisL";
export const AXIS_Y_RIGHT = "yAxisR";
export var ScaleType;
(function (ScaleType) {
    ScaleType["Linear"] = "linear";
    ScaleType["Log2"] = "log2";
    ScaleType["Log10"] = "log10";
    ScaleType["Log32"] = "log32";
    ScaleType["Log1024"] = "log1024";
})(ScaleType || (ScaleType = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0Lm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFpRnJDLE1BQU0sQ0FBTixJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDcEIsOEJBQWlCLENBQUE7SUFDakIsMEJBQWEsQ0FBQTtJQUNiLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0lBQ2YsZ0NBQW1CLENBQUE7QUFDcEIsQ0FBQyxFQU5XLFNBQVMsS0FBVCxTQUFTLFFBTXBCO0FBaUNELE1BQU0sT0FBTyxTQUFTO0lBQXRCO1FBQ0MsYUFBUSxHQUFzQixpQkFBaUIsQ0FBQyxFQUFFLENBQUM7UUFHbkQsY0FBUyxHQUFtQixjQUFjLENBQUMsUUFBUSxDQUFDO1FBRXBELFNBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUlyQixTQUFJLEdBQWtCLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUN0QiwwQkFBVyxDQUFBO0lBQ1gsZ0NBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQUhXLFdBQVcsS0FBWCxXQUFXLFFBR3RCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMzQixpQ0FBYSxDQUFBO0lBQ2IsNkNBQXlCLENBQUE7SUFDekIsNkNBQXlCLENBQUE7QUFDMUIsQ0FBQyxFQUpXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJM0I7QUFFRCxNQUFNLENBQU4sSUFBWSx3QkFJWDtBQUpELFdBQVksd0JBQXdCO0lBQ25DLG1EQUF1QixDQUFBO0lBQ3ZCLHlDQUFhLENBQUE7SUFDYixxREFBeUIsQ0FBQTtBQUMxQixDQUFDLEVBSlcsd0JBQXdCLEtBQXhCLHdCQUF3QixRQUluQztBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDNUIsOEJBQVMsQ0FBQTtJQUNULDhCQUFTLENBQUE7QUFDVixDQUFDLEVBSFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUc1QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBS1g7QUFMRCxXQUFZLGNBQWM7SUFDekIsbUNBQWlCLENBQUE7SUFDakIsdUNBQXFCLENBQUE7SUFDckIscUNBQW1CLENBQUE7SUFDbkIsMkJBQVMsQ0FBQTtBQUNWLENBQUMsRUFMVyxjQUFjLEtBQWQsY0FBYyxRQUt6QjtBQUVELE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDeEIsOEJBQWEsQ0FBQTtJQUNiLGdDQUFlLENBQUE7QUFDaEIsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBRUQsTUFBTSxPQUFPLFVBQVU7SUFBdkI7UUFDQyxjQUFTLEdBQW9CLGVBQWUsQ0FBQyxHQUFHLENBQUM7UUFFakQsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBSXJCLFlBQU8sR0FBa0IsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUMzQyxVQUFLLEdBQWtCLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFJMUMsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFOLElBQVksZUFPWDtBQVBELFdBQVksZUFBZTtJQUMxQixnQ0FBYSxDQUFBO0lBQ2IsOEJBQVcsQ0FBQTtJQUNYLGtDQUFlLENBQUE7SUFDZixnQ0FBYSxDQUFBO0lBQ2Isb0NBQWlCLENBQUE7SUFDakIsb0NBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQVBXLGVBQWUsS0FBZixlQUFlLFFBTzFCO0FBRUQsTUFBTSxDQUFOLElBQVksYUFTWDtBQVRELFdBQVksYUFBYTtJQUN4Qiw0QkFBVyxDQUFBO0lBQ1gsNEJBQVcsQ0FBQTtJQUNYLDRCQUFXLENBQUE7SUFDWCw0QkFBVyxDQUFBO0lBQ1gsNEJBQVcsQ0FBQTtJQUNYLDRCQUFXLENBQUE7SUFDWCw0QkFBVyxDQUFBO0lBQ1gsNEJBQVcsQ0FBQTtBQUNaLENBQUMsRUFUVyxhQUFhLEtBQWIsYUFBYSxRQVN4QjtBQUVELE1BQU0sT0FBTyxjQUFjO0NBRzFCO0FBRUQsTUFBTSxPQUFPLFlBQVk7SUFDeEIsWUFBb0IsSUFBMkIsRUFBUyxLQUFVO1FBQTlDLFNBQUksR0FBSixJQUFJLENBQXVCO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUVsRSxDQUFDO0NBQ0Q7QUFFRCxNQUFNLENBQU4sSUFBWSxZQWdCWDtBQWhCRCxXQUFZLFlBQVk7SUFDdkIsaURBQUssQ0FBQTtJQUNMLG1EQUFNLENBQUE7SUFDTiw2REFBVyxDQUFBO0lBQ1gsaURBQUssQ0FBQTtJQUNMLHVEQUFRLENBQUE7SUFDUix5REFBUyxDQUFBO0lBQ1QseURBQVMsQ0FBQTtJQUNULG1EQUFNLENBQUE7SUFDTiwyREFBVSxDQUFBO0lBQ1YseURBQVMsQ0FBQTtJQUNULG9EQUFNLENBQUE7SUFDTixrRUFBYSxDQUFBO0lBQ2Isa0RBQUssQ0FBQTtJQUNMLGtEQUFLLENBQUE7SUFDTCxvREFBTSxDQUFBO0FBQ1AsQ0FBQyxFQWhCVyxZQUFZLEtBQVosWUFBWSxRQWdCdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lUmFuZ2VNb2QsIEFsZXJ0UnVsZSB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jJztcclxuXHJcbmV4cG9ydCBjb25zdCBBWElTX1ggPSBcInhBeGlzXCI7XHJcbmV4cG9ydCBjb25zdCBBWElTX1lfTEVGVCA9IFwieUF4aXNMXCI7XHJcbmV4cG9ydCBjb25zdCBBWElTX1lfUklHSFQgPSBcInlBeGlzUlwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGF7XHJcblx0ZGF0YXNldHM6IERhdGFTZXRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhU2V0e1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0ZGF0YTogRGF0YVBvaW50W107XHJcblxyXG5cdG1pbj86IG51bWJlcjtcclxuXHRtYXg/OiBudW1iZXJcclxuXHRhdmc/OiBudW1iZXI7XHJcblx0Y3VycmVudD86IG51bWJlcjtcclxuXHJcblx0YWxsTnVsbHM/OiBib29sZWFuO1xyXG5cdGFsbFplcm9zPzogYm9vbGVhbjtcclxuXHJcblx0aW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly9kaXNwbGF5XHJcblx0ZmlsbD86IGJvb2xlYW47XHJcblx0YmFja2dyb3VuZENvbG9yPzpzdHJpbmc7IFxyXG5cdGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG5cdGJvcmRlcldpZHRoPzogbnVtYmVyO1xyXG5cclxuXHRwb2ludEJvcmRlckNvbG9yPzogc3RyaW5nOyBcclxuXHRwb2ludEJhY2tncm91bmRDb2xvcj86IHN0cmluZzsgXHJcblx0cG9pbnRSYWRpdXM/OiBudW1iZXI7IFxyXG5cclxuXHRzdGVwcGVkTGluZT86IGJvb2xlYW47XHJcblxyXG5cdGJvcmRlckRhc2g/OiBudW1iZXJbXVxyXG5cclxuXHRvcmRlcj86IG51bWJlcjtcclxuXHJcblx0bGVnZW5kPzogYm9vbGVhbjtcclxuXHRoaWRkZW4/OiBib29sZWFuO1xyXG5cdHNlbGVjdGVkPzogYm9vbGVhbjtcclxuXHJcblx0eUF4aXNJRD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnR7XHJcblx0eD86IG51bWJlcjtcclxuXHR5PzogbnVtYmVyO1xyXG5cdGlzTnVsbDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFydHtcclxuXHRsZWdlbmQ6IExlZ2VuZDtcclxuXHRheGVzOiBBeGVzO1xyXG5cdGRpc3BsYXk6IERpc3BsYXk7XHJcblx0dGltZTogVGltZVJhbmdlTW9kO1xyXG5cdGFsZXJ0OiBBbGVydFJ1bGU7XHJcblxyXG5cdGNvbXBvbmVudDogQ2hhcnRDb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGVnZW5ke1xyXG5cdHNob3c6IGJvb2xlYW47XHJcblx0dGFibGU6IGJvb2xlYW47XHJcblx0cmlnaHQ6IGJvb2xlYW47XHJcblxyXG5cdG1pbjogbnVtYmVyO1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdGF2ZzogbnVtYmVyO1xyXG5cdGN1cnJlbnQ6IG51bWJlcjtcclxuXHR0b3RhbDogbnVtYmVyO1xyXG5cdGRlY2ltYWxzPyA6IG51bWJlcjtcclxuXHJcblx0aGlkZU9ubHlOdWxsczogYm9vbGVhbjtcclxuXHRoaWRlT25seVplcm9lczogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBeGVze1xyXG5cdGxlZnRZOiBBeGlzO1xyXG5cdHJpZ2h0WT86IEF4aXM7XHJcblx0eDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTY2FsZVR5cGUge1xyXG5cdExpbmVhciA9IFwibGluZWFyXCIsXHJcblx0TG9nMiA9IFwibG9nMlwiLFxyXG5cdExvZzEwID0gXCJsb2cxMFwiLFxyXG5cdExvZzMyID0gXCJsb2czMlwiLFxyXG5cdExvZzEwMjQgPSBcImxvZzEwMjRcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF4aXN7XHJcblx0c2hvdzogYm9vbGVhbjtcclxuXHR1bml0OmFueTtcclxuXHRzY2FsZTogU2NhbGVUeXBlO1xyXG5cdG1pbj86IG51bWJlcjtcclxuXHRtYXg/OiBudW1iZXI7XHJcblx0ZGVjaW1hbHM/OiBudW1iZXI7XHJcblx0bGFiZWw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheXtcclxuXHRzaG93TGluZXM6IGJvb2xlYW47XHJcblx0c2hvd1BvaW50czogYm9vbGVhbjtcclxuXHRzaG93QmFyczogYm9vbGVhbjtcclxuXHJcblx0ZmlsbDogbnVtYmVyO1xyXG5cdGxpbmVXaWR0aDogbnVtYmVyO1xyXG5cdHBvaW50UmFkaXVzOiBudW1iZXI7XHJcblxyXG5cdHN0YWlyY2FzZTogYm9vbGVhbjtcclxuXHR0b29sdGlwTW9kZTogVG9vbHRpcE1vZGU7XHJcblx0dG9vbHRpcFNvcnRPcmRlcjogVG9vbHRpcFNvcnRPcmRlcjtcclxuXHRcclxuXHRzdGFjazogYm9vbGVhbjtcclxuXHRudWxsVmFsdWU6IERhdGFQb2ludE51bGxWYWx1ZU9wdGlvbjtcclxuXHJcblx0dGhyZXNob2xkczogVGhyZXNob2xkW107XHJcblx0dGltZVJlZ2lvbnM6IFRpbWVSZWdpb25bXTtcclxuXHRvdmVycmlkZXM6IFNlcmllc092ZXJyaWRlW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaHJlc2hvbGR7XHJcblx0b3BlcmF0b3I6IFRocmVzaG9sZE9wZXJhdG9yID0gVGhyZXNob2xkT3BlcmF0b3IuR3Q7XHJcblx0dmFsdWU/OiBudW1iZXI7XHJcblxyXG5cdGNvbG9yVHlwZTogVGhyZXNob2xkQ29sb3IgPSBUaHJlc2hvbGRDb2xvci5Dcml0aWNhbDtcclxuXHJcblx0ZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblx0bGluZTogYm9vbGVhbiA9IHRydWU7XHJcblx0ZmlsbENvbG9yOiBhbnk7XHJcblx0bGluZUNvbG9yOiBhbnk7XHJcblxyXG5cdGF4aXM6IFRocmVzaG9sZEF4aXMgPSBUaHJlc2hvbGRBeGlzLkxlZnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRvb2x0aXBNb2RlIHtcclxuXHRBbGwgPSBcImFsbFwiLFxyXG5cdFNpbmdsZSA9IFwic2luZ2xlXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVG9vbHRpcFNvcnRPcmRlciB7XHJcblx0Tm9uZSA9IFwibm9uZVwiLFxyXG5cdEluY3JlYXNpbmcgPSBcImluY3JlYXNpbmdcIixcclxuXHREZWNyZWFzaW5nID0gXCJkZWNyZWFzaW5nXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGF0YVBvaW50TnVsbFZhbHVlT3B0aW9uIHtcclxuXHRDb25uZWN0ZWQgPSBcImNvbm5lY3RlZFwiLFxyXG5cdE51bGwgPSBcIm51bGxcIixcclxuXHROdWxsQXNaZXJvID0gXCJudWxsQXNaZXJvXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGhyZXNob2xkT3BlcmF0b3Ige1xyXG5cdEd0ID0gXCJndFwiLFxyXG5cdEx0ID0gXCJsdFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaHJlc2hvbGRDb2xvciB7XHJcblx0Q3VzdG9tID0gXCJjdXN0b21cIixcclxuXHRDcml0aWNhbCA9IFwiY3JpdGljYWxcIixcclxuXHRXYXJuaW5nID0gXCJ3YXJuaW5nXCIsXHJcblx0T2sgPSBcIm9rXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGhyZXNob2xkQXhpcyB7XHJcblx0TGVmdCA9IFwibGVmdFwiLFxyXG5cdFJpZ2h0ID0gXCJyaWdodFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lUmVnaW9ue1xyXG5cdGNvbG9yVHlwZTogVGltZVJlZ2lvbkNvbG9yID0gVGltZVJlZ2lvbkNvbG9yLlJlZDtcclxuXHJcblx0ZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblx0bGluZTogYm9vbGVhbiA9IHRydWU7XHJcblx0ZmlsbENvbG9yOiBzdHJpbmc7XHJcblx0bGluZUNvbG9yOiBzdHJpbmc7XHJcblxyXG5cdGZyb21EYXk6IFRpbWVSZWdpb25EYXkgPSBUaW1lUmVnaW9uRGF5LkFueTtcclxuXHR0b0RheTogVGltZVJlZ2lvbkRheSA9IFRpbWVSZWdpb25EYXkuQW55O1xyXG5cclxuXHRmcm9tVGltZT86IHN0cmluZztcclxuXHR0b1RpbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRpbWVSZWdpb25Db2xvciB7XHJcblx0R3JheSA9IFwiZ3JheVwiLFxyXG5cdFJlZCA9IFwicmVkXCIsXHJcblx0R3JlZW4gPSBcImdyZWVuXCIsXHJcblx0Qmx1ZSA9IFwiYmx1ZVwiLFxyXG5cdFllbGxvdyA9IFwieWVsbG93XCIsXHJcblx0Q3VzdG9tID0gXCJjdXN0b21cIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaW1lUmVnaW9uRGF5IHtcclxuXHRBbnkgPSBcImFueVwiLFxyXG5cdE1vbiA9IFwibW9uXCIsXHJcblx0VHVlID0gXCJ0dWVcIixcclxuXHRXZWQgPSBcIndlZFwiLFxyXG5cdFRodSA9IFwidGh1XCIsXHJcblx0RnJpID0gXCJmcmlcIixcclxuXHRTYXQgPSBcInNhdFwiLFxyXG5cdFN1biA9IFwic3VuXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlcmllc092ZXJyaWRle1xyXG5cdGFsaWFzOiBzdHJpbmc7XHJcblx0aXRlbXM6IE92ZXJyaWRlSXRlbVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcnJpZGVJdGVte1xyXG5cdGNvbnN0cnVjdG9yKCBwdWJsaWMgdHlwZTogT3ZlcnJpZGVUeXBlIHwgc3RyaW5nLCBwdWJsaWMgdmFsdWU6IGFueSApe1xyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPdmVycmlkZVR5cGV7XHJcblx0TGluZXMsXHJcblx0UG9pbnRzLFxyXG5cdFBvaW50UmFkaXVzLFxyXG5cdFN0YWNrLFxyXG5cdExpbmVGaWxsLFxyXG5cdExpbmVXaWR0aCxcclxuXHRTdGFpcmNhc2UsXHJcblx0RGFzaGVzLFxyXG5cdERhc2hMZW5ndGgsXHJcblx0RGFzaFNwYWNlLFxyXG5cdExlZ2VuZCxcclxuXHRIaWRlSW5Ub29sdGlwLFxyXG5cdENvbG9yLFxyXG5cdFlBeGlzLFxyXG5cdFpJbmRleCxcclxufVxyXG5cclxuIl19