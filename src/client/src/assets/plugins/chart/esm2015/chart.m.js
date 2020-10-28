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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0Lm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VBLE1BQU0sQ0FBTixJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDcEIsOEJBQWlCLENBQUE7SUFDakIsMEJBQWEsQ0FBQTtJQUNiLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0lBQ2YsZ0NBQW1CLENBQUE7QUFDcEIsQ0FBQyxFQU5XLFNBQVMsS0FBVCxTQUFTLFFBTXBCO0FBaUNELE1BQU0sT0FBTyxTQUFTO0lBQXRCO1FBQ0MsYUFBUSxHQUFzQixpQkFBaUIsQ0FBQyxFQUFFLENBQUM7UUFHbkQsY0FBUyxHQUFtQixjQUFjLENBQUMsUUFBUSxDQUFDO1FBRXBELFNBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUlyQixTQUFJLEdBQWtCLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUN0QiwwQkFBVyxDQUFBO0lBQ1gsZ0NBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQUhXLFdBQVcsS0FBWCxXQUFXLFFBR3RCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMzQixpQ0FBYSxDQUFBO0lBQ2IsNkNBQXlCLENBQUE7SUFDekIsNkNBQXlCLENBQUE7QUFDMUIsQ0FBQyxFQUpXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJM0I7QUFFRCxNQUFNLENBQU4sSUFBWSx3QkFJWDtBQUpELFdBQVksd0JBQXdCO0lBQ25DLG1EQUF1QixDQUFBO0lBQ3ZCLHlDQUFhLENBQUE7SUFDYixxREFBeUIsQ0FBQTtBQUMxQixDQUFDLEVBSlcsd0JBQXdCLEtBQXhCLHdCQUF3QixRQUluQztBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDNUIsOEJBQVMsQ0FBQTtJQUNULDhCQUFTLENBQUE7QUFDVixDQUFDLEVBSFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUc1QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBS1g7QUFMRCxXQUFZLGNBQWM7SUFDekIsbUNBQWlCLENBQUE7SUFDakIsdUNBQXFCLENBQUE7SUFDckIscUNBQW1CLENBQUE7SUFDbkIsMkJBQVMsQ0FBQTtBQUNWLENBQUMsRUFMVyxjQUFjLEtBQWQsY0FBYyxRQUt6QjtBQUVELE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDeEIsOEJBQWEsQ0FBQTtJQUNiLGdDQUFlLENBQUE7QUFDaEIsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBRUQsTUFBTSxPQUFPLFVBQVU7SUFBdkI7UUFDQyxjQUFTLEdBQW9CLGVBQWUsQ0FBQyxHQUFHLENBQUM7UUFFakQsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBSXJCLFlBQU8sR0FBa0IsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUMzQyxVQUFLLEdBQWtCLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFJMUMsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFOLElBQVksZUFPWDtBQVBELFdBQVksZUFBZTtJQUMxQixnQ0FBYSxDQUFBO0lBQ2IsOEJBQVcsQ0FBQTtJQUNYLGtDQUFlLENBQUE7SUFDZixnQ0FBYSxDQUFBO0lBQ2Isb0NBQWlCLENBQUE7SUFDakIsb0NBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQVBXLGVBQWUsS0FBZixlQUFlLFFBTzFCO0FBRUQsTUFBTSxDQUFOLElBQVksYUFTWDtBQVRELFdBQVksYUFBYTtJQUN4Qiw0QkFBVyxDQUFBO0lBQ1gsNEJBQVcsQ0FBQTtJQUNYLDRCQUFXLENBQUE7SUFDWCw0QkFBVyxDQUFBO0lBQ1gsNEJBQVcsQ0FBQTtJQUNYLDRCQUFXLENBQUE7SUFDWCw0QkFBVyxDQUFBO0lBQ1gsNEJBQVcsQ0FBQTtBQUNaLENBQUMsRUFUVyxhQUFhLEtBQWIsYUFBYSxRQVN4QjtBQUVELE1BQU0sT0FBTyxjQUFjO0NBRzFCO0FBRUQsTUFBTSxPQUFPLFlBQVk7SUFDeEIsWUFBb0IsSUFBMkIsRUFBUyxLQUFVO1FBQTlDLFNBQUksR0FBSixJQUFJLENBQXVCO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUVsRSxDQUFDO0NBQ0Q7QUFFRCxNQUFNLENBQU4sSUFBWSxZQWdCWDtBQWhCRCxXQUFZLFlBQVk7SUFDdkIsaURBQUssQ0FBQTtJQUNMLG1EQUFNLENBQUE7SUFDTiw2REFBVyxDQUFBO0lBQ1gsaURBQUssQ0FBQTtJQUNMLHVEQUFRLENBQUE7SUFDUix5REFBUyxDQUFBO0lBQ1QseURBQVMsQ0FBQTtJQUNULG1EQUFNLENBQUE7SUFDTiwyREFBVSxDQUFBO0lBQ1YseURBQVMsQ0FBQTtJQUNULG9EQUFNLENBQUE7SUFDTixrRUFBYSxDQUFBO0lBQ2Isa0RBQUssQ0FBQTtJQUNMLGtEQUFLLENBQUE7SUFDTCxvREFBTSxDQUFBO0FBQ1AsQ0FBQyxFQWhCVyxZQUFZLEtBQVosWUFBWSxRQWdCdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUNoYXJ0IH0gZnJvbSAncHJpbWVuZyc7XHJcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnREYXRhe1xyXG5cdGRhdGFzZXRzOiBEYXRhU2V0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNldHtcclxuXHRsYWJlbDogc3RyaW5nO1xyXG5cdGRhdGE6IERhdGFQb2ludFtdO1xyXG5cclxuXHRtaW4/OiBudW1iZXI7XHJcblx0bWF4PzogbnVtYmVyXHJcblx0YXZnPzogbnVtYmVyO1xyXG5cdGN1cnJlbnQ/OiBudW1iZXI7XHJcblxyXG5cdGFsbE51bGxzPzogYm9vbGVhbjtcclxuXHRhbGxaZXJvcz86IGJvb2xlYW47XHJcblxyXG5cdGluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vZGlzcGxheVxyXG5cdGZpbGw/OiBib29sZWFuO1xyXG5cdGJhY2tncm91bmRDb2xvcj86c3RyaW5nOyBcclxuXHRib3JkZXJDb2xvcj86IHN0cmluZztcclxuXHRib3JkZXJXaWR0aD86IG51bWJlcjtcclxuXHJcblx0cG9pbnRCb3JkZXJDb2xvcj86IHN0cmluZzsgXHJcblx0cG9pbnRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7IFxyXG5cdHBvaW50UmFkaXVzPzogbnVtYmVyOyBcclxuXHJcblx0c3RlcHBlZExpbmU/OiBib29sZWFuO1xyXG5cclxuXHRib3JkZXJEYXNoPzogbnVtYmVyW11cclxuXHJcblx0b3JkZXI/OiBudW1iZXI7XHJcblxyXG5cdGxlZ2VuZD86IGJvb2xlYW47XHJcblx0aGlkZGVuPzogYm9vbGVhbjtcclxuXHRzZWxlY3RlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVBvaW50e1xyXG5cdHg/OiBudW1iZXI7XHJcblx0eT86IG51bWJlcjtcclxuXHRpc051bGw6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnR7XHJcblx0bGVnZW5kOiBMZWdlbmQ7XHJcblx0YXhlczogQXhlcztcclxuXHRkaXNwbGF5OiBEaXNwbGF5O1xyXG5cclxuXHRjb21wb25lbnQ6IENoYXJ0Q29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExlZ2VuZHtcclxuXHRzaG93OiBib29sZWFuO1xyXG5cdHRhYmxlOiBib29sZWFuO1xyXG5cdHJpZ2h0OiBib29sZWFuO1xyXG5cclxuXHRtaW46IG51bWJlcjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRhdmc6IG51bWJlcjtcclxuXHRjdXJyZW50OiBudW1iZXI7XHJcblx0dG90YWw6IG51bWJlcjtcclxuXHRkZWNpbWFscz8gOiBudW1iZXI7XHJcblxyXG5cdGhpZGVPbmx5TnVsbHM6IGJvb2xlYW47XHJcblx0aGlkZU9ubHlaZXJvZXM6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXhlc3tcclxuXHRsZWZ0WTogQXhpcztcclxuXHRyaWdodFk/OiBBeGlzO1xyXG5cdHg6IGFueTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFNjYWxlVHlwZSB7XHJcblx0TGluZWFyID0gXCJsaW5lYXJcIixcclxuXHRMb2cyID0gXCJsb2cyXCIsXHJcblx0TG9nMTAgPSBcImxvZzEwXCIsXHJcblx0TG9nMzIgPSBcImxvZzMyXCIsXHJcblx0TG9nMTAyNCA9IFwibG9nMTAyNFwiXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXhpc3tcclxuXHRzaG93OiBib29sZWFuO1xyXG5cdHVuaXQ6YW55O1xyXG5cdHNjYWxlOiBTY2FsZVR5cGU7XHJcblx0bWluPzogbnVtYmVyO1xyXG5cdG1heD86IG51bWJlcjtcclxuXHRkZWNpbWFscz86IG51bWJlcjtcclxuXHRsYWJlbD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5e1xyXG5cdHNob3dMaW5lczogYm9vbGVhbjtcclxuXHRzaG93UG9pbnRzOiBib29sZWFuO1xyXG5cdHNob3dCYXJzOiBib29sZWFuO1xyXG5cclxuXHRmaWxsOiBudW1iZXI7XHJcblx0bGluZVdpZHRoOiBudW1iZXI7XHJcblx0cG9pbnRSYWRpdXM6IG51bWJlcjtcclxuXHJcblx0c3RhaXJjYXNlOiBib29sZWFuO1xyXG5cdHRvb2x0aXBNb2RlOiBUb29sdGlwTW9kZTtcclxuXHR0b29sdGlwU29ydE9yZGVyOiBUb29sdGlwU29ydE9yZGVyO1xyXG5cdFxyXG5cdHN0YWNrOiBib29sZWFuO1xyXG5cdG51bGxWYWx1ZTogRGF0YVBvaW50TnVsbFZhbHVlT3B0aW9uO1xyXG5cclxuXHR0aHJlc2hvbGRzOiBUaHJlc2hvbGRbXTtcclxuXHR0aW1lUmVnaW9uczogVGltZVJlZ2lvbltdO1xyXG5cdG92ZXJyaWRlczogU2VyaWVzT3ZlcnJpZGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRocmVzaG9sZHtcclxuXHRvcGVyYXRvcjogVGhyZXNob2xkT3BlcmF0b3IgPSBUaHJlc2hvbGRPcGVyYXRvci5HdDtcclxuXHR2YWx1ZT86IG51bWJlcjtcclxuXHJcblx0Y29sb3JUeXBlOiBUaHJlc2hvbGRDb2xvciA9IFRocmVzaG9sZENvbG9yLkNyaXRpY2FsO1xyXG5cclxuXHRmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHRsaW5lOiBib29sZWFuID0gdHJ1ZTtcclxuXHRmaWxsQ29sb3I6IGFueTtcclxuXHRsaW5lQ29sb3I6IGFueTtcclxuXHJcblx0YXhpczogVGhyZXNob2xkQXhpcyA9IFRocmVzaG9sZEF4aXMuTGVmdDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVG9vbHRpcE1vZGUge1xyXG5cdEFsbCA9IFwiYWxsXCIsXHJcblx0U2luZ2xlID0gXCJzaW5nbGVcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUb29sdGlwU29ydE9yZGVyIHtcclxuXHROb25lID0gXCJub25lXCIsXHJcblx0SW5jcmVhc2luZyA9IFwiaW5jcmVhc2luZ1wiLFxyXG5cdERlY3JlYXNpbmcgPSBcImRlY3JlYXNpbmdcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEYXRhUG9pbnROdWxsVmFsdWVPcHRpb24ge1xyXG5cdENvbm5lY3RlZCA9IFwiY29ubmVjdGVkXCIsXHJcblx0TnVsbCA9IFwibnVsbFwiLFxyXG5cdE51bGxBc1plcm8gPSBcIm51bGxBc1plcm9cIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaHJlc2hvbGRPcGVyYXRvciB7XHJcblx0R3QgPSBcImd0XCIsXHJcblx0THQgPSBcImx0XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRocmVzaG9sZENvbG9yIHtcclxuXHRDdXN0b20gPSBcImN1c3RvbVwiLFxyXG5cdENyaXRpY2FsID0gXCJjcml0aWNhbFwiLFxyXG5cdFdhcm5pbmcgPSBcIndhcm5pbmdcIixcclxuXHRPayA9IFwib2tcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaHJlc2hvbGRBeGlzIHtcclxuXHRMZWZ0ID0gXCJsZWZ0XCIsXHJcblx0UmlnaHQgPSBcInJpZ2h0XCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVSZWdpb257XHJcblx0Y29sb3JUeXBlOiBUaW1lUmVnaW9uQ29sb3IgPSBUaW1lUmVnaW9uQ29sb3IuUmVkO1xyXG5cclxuXHRmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHRsaW5lOiBib29sZWFuID0gdHJ1ZTtcclxuXHRmaWxsQ29sb3I6IHN0cmluZztcclxuXHRsaW5lQ29sb3I6IHN0cmluZztcclxuXHJcblx0ZnJvbURheTogVGltZVJlZ2lvbkRheSA9IFRpbWVSZWdpb25EYXkuQW55O1xyXG5cdHRvRGF5OiBUaW1lUmVnaW9uRGF5ID0gVGltZVJlZ2lvbkRheS5Bbnk7XHJcblxyXG5cdGZyb21UaW1lPzogc3RyaW5nO1xyXG5cdHRvVGltZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGltZVJlZ2lvbkNvbG9yIHtcclxuXHRHcmF5ID0gXCJncmF5XCIsXHJcblx0UmVkID0gXCJyZWRcIixcclxuXHRHcmVlbiA9IFwiZ3JlZW5cIixcclxuXHRCbHVlID0gXCJibHVlXCIsXHJcblx0WWVsbG93ID0gXCJ5ZWxsb3dcIixcclxuXHRDdXN0b20gPSBcImN1c3RvbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRpbWVSZWdpb25EYXkge1xyXG5cdEFueSA9IFwiYW55XCIsXHJcblx0TW9uID0gXCJtb25cIixcclxuXHRUdWUgPSBcInR1ZVwiLFxyXG5cdFdlZCA9IFwid2VkXCIsXHJcblx0VGh1ID0gXCJ0aHVcIixcclxuXHRGcmkgPSBcImZyaVwiLFxyXG5cdFNhdCA9IFwic2F0XCIsXHJcblx0U3VuID0gXCJzdW5cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VyaWVzT3ZlcnJpZGV7XHJcblx0YWxpYXM6IHN0cmluZztcclxuXHRpdGVtczogT3ZlcnJpZGVJdGVtW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVycmlkZUl0ZW17XHJcblx0Y29uc3RydWN0b3IoIHB1YmxpYyB0eXBlOiBPdmVycmlkZVR5cGUgfCBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogYW55ICl7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE92ZXJyaWRlVHlwZXtcclxuXHRMaW5lcyxcclxuXHRQb2ludHMsXHJcblx0UG9pbnRSYWRpdXMsXHJcblx0U3RhY2ssXHJcblx0TGluZUZpbGwsXHJcblx0TGluZVdpZHRoLFxyXG5cdFN0YWlyY2FzZSxcclxuXHREYXNoZXMsXHJcblx0RGFzaExlbmd0aCxcclxuXHREYXNoU3BhY2UsXHJcblx0TGVnZW5kLFxyXG5cdEhpZGVJblRvb2x0aXAsXHJcblx0Q29sb3IsXHJcblx0WUF4aXMsXHJcblx0WkluZGV4LFxyXG59Il19