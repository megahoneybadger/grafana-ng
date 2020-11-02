export class InfluxQuery {
    constructor() {
        this.measurement = '';
        this.policy = '';
        this.refId = '';
        this.tags = new Array();
        this.fields = new Array();
        this.limit = undefined;
        this.slimit = undefined;
        // order = OrderByTime.Asc;
        // alias: string =  '';
        // groupBy = new Array<GroupByObject>();
        // virgin: boolean = false;
    }
}
export var AggrFunc;
(function (AggrFunc) {
    AggrFunc["Count"] = "count";
    AggrFunc["Distinct"] = "distinct";
    AggrFunc["Integral"] = "integral";
    AggrFunc["Mean"] = "mean";
    AggrFunc["Median"] = "median";
    AggrFunc["Mode"] = "mode";
    AggrFunc["Sum"] = "sum";
    AggrFunc["Bottom"] = "bottom";
    AggrFunc["First"] = "first";
    AggrFunc["Last"] = "last";
    AggrFunc["Max"] = "max";
    AggrFunc["Min"] = "min";
    AggrFunc["Percentile"] = "percentile";
    AggrFunc["Top"] = "top";
    AggrFunc["Derivative"] = "derivative";
    AggrFunc["Spread"] = "spread";
    AggrFunc["NonNegativeDerivative"] = "non_negative_derivative";
    AggrFunc["Difference"] = "difference";
    AggrFunc["NonNegativeDifference"] = "non_negative_difference";
    AggrFunc["MovingAverage"] = "moving_average";
    AggrFunc["CumulativeSum"] = "cumulative_sum";
    AggrFunc["Stddev"] = "stddev";
    AggrFunc["Elapsed"] = "elapsed";
    AggrFunc["HoltWinters"] = "holt_winters";
    AggrFunc["HoltWintersWithFit"] = "holt_winters_with_fit";
    AggrFunc["Math"] = "math";
    AggrFunc["Alias"] = "alias";
})(AggrFunc || (AggrFunc = {}));
export var AggrFuncGroup;
(function (AggrFuncGroup) {
    AggrFuncGroup[AggrFuncGroup["Aggregations"] = 0] = "Aggregations";
    AggrFuncGroup[AggrFuncGroup["Selectors"] = 1] = "Selectors";
    AggrFuncGroup[AggrFuncGroup["Transformations"] = 2] = "Transformations";
    AggrFuncGroup[AggrFuncGroup["Predictors"] = 3] = "Predictors";
    AggrFuncGroup[AggrFuncGroup["Math"] = 4] = "Math";
    AggrFuncGroup[AggrFuncGroup["Alias"] = 5] = "Alias";
})(AggrFuncGroup || (AggrFuncGroup = {}));
export class AggrFuncHelper {
    static getGroup(f) {
        switch (f) {
            case AggrFunc.Count:
            case AggrFunc.Distinct:
            case AggrFunc.Integral:
            case AggrFunc.Mean:
            case AggrFunc.Median:
            case AggrFunc.Mode:
            case AggrFunc.Sum:
                return AggrFuncGroup.Aggregations;
            case AggrFunc.Bottom:
            case AggrFunc.First:
            case AggrFunc.Last:
            case AggrFunc.Max:
            case AggrFunc.Min:
            case AggrFunc.Percentile:
            case AggrFunc.Top:
                return AggrFuncGroup.Selectors;
            case AggrFunc.Derivative:
            case AggrFunc.Spread:
            case AggrFunc.NonNegativeDerivative:
            case AggrFunc.Difference:
            case AggrFunc.NonNegativeDifference:
            case AggrFunc.MovingAverage:
            case AggrFunc.CumulativeSum:
            case AggrFunc.Stddev:
            case AggrFunc.Elapsed:
                return AggrFuncGroup.Transformations;
            case AggrFunc.HoltWinters:
            case AggrFunc.HoltWintersWithFit:
                return AggrFuncGroup.Predictors;
            case AggrFunc.Math:
                return AggrFuncGroup.Math;
            case AggrFunc.Alias:
                return AggrFuncGroup.Alias;
        }
    }
}
export var GroupByOption;
(function (GroupByOption) {
    GroupByOption[GroupByOption["Time"] = 0] = "Time";
    GroupByOption[GroupByOption["Fill"] = 1] = "Fill";
    GroupByOption[GroupByOption["Tag"] = 2] = "Tag";
})(GroupByOption || (GroupByOption = {}));
export var GroupByTimeOptions;
(function (GroupByTimeOptions) {
    GroupByTimeOptions["Dynamic"] = "$__interval";
    GroupByTimeOptions["S1"] = "1s";
    GroupByTimeOptions["S10"] = "10s";
    GroupByTimeOptions["M1"] = "1m";
    GroupByTimeOptions["M5"] = "5m";
    GroupByTimeOptions["M10"] = "10m";
    GroupByTimeOptions["M15"] = "15m";
    GroupByTimeOptions["H1"] = "1h";
})(GroupByTimeOptions || (GroupByTimeOptions = {}));
export var GroupByFillOptions;
(function (GroupByFillOptions) {
    GroupByFillOptions["None"] = "none";
    GroupByFillOptions["Null"] = "null";
    GroupByFillOptions["Zero"] = "0";
    GroupByFillOptions["Prev"] = "previous";
    GroupByFillOptions["Linear"] = "linear";
})(GroupByFillOptions || (GroupByFillOptions = {}));
export var OrderByTime;
(function (OrderByTime) {
    OrderByTime[OrderByTime["Asc"] = 0] = "Asc";
    OrderByTime[OrderByTime["Desc"] = 1] = "Desc";
})(OrderByTime || (OrderByTime = {}));
export class MetricVars {
}
MetricVars.TIME_FILTER = "$timeFilter";
MetricVars.TIME_INTERVAL = "$__interval";
export class Tag {
    constructor() {
        this.key = '';
        this.value = '';
        this.index = 0;
        this.operator = TagOperator.Eq;
        this.condition = TagCondition.And;
    }
}
export var TagOperator;
(function (TagOperator) {
    TagOperator["Eq"] = "=";
    TagOperator["Neq"] = "<>";
    TagOperator["Less"] = "<";
    TagOperator["Greater"] = ">";
    TagOperator["RegExEq"] = "=~";
    TagOperator["RegExNeq"] = "!~";
})(TagOperator || (TagOperator = {}));
export var TagCondition;
(function (TagCondition) {
    TagCondition["And"] = "AND";
    TagCondition["Or"] = "OR";
})(TagCondition || (TagCondition = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljcy5tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL21ldHJpY3MubS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sV0FBVztJQUF4QjtRQUNFLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztRQUU1QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFFM0IsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUV2Qix3Q0FBd0M7UUFFdkMsMkJBQTJCO0lBQzdCLENBQUM7Q0FBQTtBQVlELE1BQU0sQ0FBTixJQUFZLFFBZ0NYO0FBaENELFdBQVksUUFBUTtJQUNsQiwyQkFBZSxDQUFBO0lBQ2YsaUNBQXFCLENBQUE7SUFDckIsaUNBQXFCLENBQUE7SUFDckIseUJBQWEsQ0FBQTtJQUNiLDZCQUFpQixDQUFBO0lBQ2pCLHlCQUFhLENBQUE7SUFDYix1QkFBVyxDQUFBO0lBRVgsNkJBQWlCLENBQUE7SUFDakIsMkJBQWUsQ0FBQTtJQUNmLHlCQUFhLENBQUE7SUFDYix1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHFDQUF5QixDQUFBO0lBQ3pCLHVCQUFXLENBQUE7SUFFWCxxQ0FBeUIsQ0FBQTtJQUN6Qiw2QkFBaUIsQ0FBQTtJQUNqQiw2REFBaUQsQ0FBQTtJQUNqRCxxQ0FBeUIsQ0FBQTtJQUN6Qiw2REFBaUQsQ0FBQTtJQUNqRCw0Q0FBZ0MsQ0FBQTtJQUNoQyw0Q0FBZ0MsQ0FBQTtJQUNoQyw2QkFBaUIsQ0FBQTtJQUNqQiwrQkFBbUIsQ0FBQTtJQUVuQix3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QTtJQUNWLHVDQUFpQixDQUFBO0lBQ2pCLHVDQUFpQixDQUFBO0FBQ2xCLENBQUMsRUFOVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBTTdCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUN0QiwyQ0FBRyxDQUFBO0lBQ0gsNkNBQUksQ0FBQTtBQUNMLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0QjtBQUVELE1BQU0sT0FBTyxVQUFVOztBQUNOLHNCQUFXLEdBQUcsYUFBYSxDQUFDO0FBQzVCLHdCQUFhLEdBQUcsYUFBYSxDQUFDO0FBRy9DLE1BQU0sT0FBTyxHQUFHO0lBQWhCO1FBQ0UsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFnQixXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLGNBQVMsR0FBaUIsWUFBWSxDQUFDLEdBQUcsQ0FBQTtJQUM1QyxDQUFDO0NBQUE7QUFFRCxNQUFNLENBQU4sSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ3JCLHVCQUFRLENBQUE7SUFDUix5QkFBVSxDQUFBO0lBQ1YseUJBQVUsQ0FBQTtJQUNWLDRCQUFhLENBQUE7SUFDYiw2QkFBYyxDQUFBO0lBQ2QsOEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLDJCQUFXLENBQUE7SUFDWCx5QkFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEluZmx1eFF1ZXJ5IHtcbiAgbWVhc3VyZW1lbnQ6IHN0cmluZyA9ICcnO1xuICBwb2xpY3k6IHN0cmluZyA9ICcnO1xuICByZWZJZDogc3RyaW5nID0gJyc7XG4gIHRhZ3MgPSBuZXcgQXJyYXk8VGFnPigpO1xuXHRmaWVsZHMgPSBuZXcgQXJyYXk8RmllbGQ+KCk7XG5cdFxuXHRsaW1pdDogbnVtYmVyID0gdW5kZWZpbmVkO1xuXHRzbGltaXQ6IG51bWJlciA9IHVuZGVmaW5lZDtcblxuXHQvLyBvcmRlciA9IE9yZGVyQnlUaW1lLkFzYztcblx0Ly8gYWxpYXM6IHN0cmluZyA9ICAnJztcblxuXHQvLyBncm91cEJ5ID0gbmV3IEFycmF5PEdyb3VwQnlPYmplY3Q+KCk7XG5cbiAgLy8gdmlyZ2luOiBib29sZWFuID0gZmFsc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xuICBrZXk6IHN0cmluZztcbiAgZnVuY3Rpb25zOiBGdW5jT2JqZWN0W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY09iamVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFyYW06IGFueTtcbn1cblxuZXhwb3J0IGVudW0gQWdnckZ1bmMge1xuICBDb3VudCA9ICdjb3VudCcsXG4gIERpc3RpbmN0ID0gJ2Rpc3RpbmN0JyxcbiAgSW50ZWdyYWwgPSAnaW50ZWdyYWwnLFxuICBNZWFuID0gJ21lYW4nLFxuICBNZWRpYW4gPSAnbWVkaWFuJyxcbiAgTW9kZSA9ICdtb2RlJyxcbiAgU3VtID0gJ3N1bScsXG5cbiAgQm90dG9tID0gJ2JvdHRvbScsXG4gIEZpcnN0ID0gJ2ZpcnN0JyxcbiAgTGFzdCA9ICdsYXN0JyxcbiAgTWF4ID0gJ21heCcsXG4gIE1pbiA9ICdtaW4nLFxuICBQZXJjZW50aWxlID0gJ3BlcmNlbnRpbGUnLFxuICBUb3AgPSAndG9wJyxcblxuICBEZXJpdmF0aXZlID0gJ2Rlcml2YXRpdmUnLFxuICBTcHJlYWQgPSAnc3ByZWFkJyxcbiAgTm9uTmVnYXRpdmVEZXJpdmF0aXZlID0gJ25vbl9uZWdhdGl2ZV9kZXJpdmF0aXZlJyxcbiAgRGlmZmVyZW5jZSA9ICdkaWZmZXJlbmNlJyxcbiAgTm9uTmVnYXRpdmVEaWZmZXJlbmNlID0gJ25vbl9uZWdhdGl2ZV9kaWZmZXJlbmNlJyxcbiAgTW92aW5nQXZlcmFnZSA9ICdtb3ZpbmdfYXZlcmFnZScsXG4gIEN1bXVsYXRpdmVTdW0gPSAnY3VtdWxhdGl2ZV9zdW0nLFxuICBTdGRkZXYgPSAnc3RkZGV2JyxcbiAgRWxhcHNlZCA9ICdlbGFwc2VkJyxcblxuICBIb2x0V2ludGVycyA9ICdob2x0X3dpbnRlcnMnLFxuICBIb2x0V2ludGVyc1dpdGhGaXQgPSAnaG9sdF93aW50ZXJzX3dpdGhfZml0JyxcblxuICBNYXRoID0gJ21hdGgnLFxuICBBbGlhcyA9ICdhbGlhcycsXG59XG5cbmV4cG9ydCBlbnVtIEFnZ3JGdW5jR3JvdXAge1xuICBBZ2dyZWdhdGlvbnMsXG4gIFNlbGVjdG9ycyxcbiAgVHJhbnNmb3JtYXRpb25zLFxuICBQcmVkaWN0b3JzLFxuICBNYXRoLFxuICBBbGlhc1xufVxuXG5cbmV4cG9ydCBjbGFzcyBBZ2dyRnVuY0hlbHBlciB7XG4gIHN0YXRpYyBnZXRHcm91cChmOiBBZ2dyRnVuY3xzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGYpIHtcbiAgICAgIGNhc2UgQWdnckZ1bmMuQ291bnQ6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkRpc3RpbmN0OlxuICAgICAgY2FzZSBBZ2dyRnVuYy5JbnRlZ3JhbDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTWVhbjpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTWVkaWFuOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5Nb2RlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5TdW06XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLkFnZ3JlZ2F0aW9ucztcblxuICAgICAgY2FzZSBBZ2dyRnVuYy5Cb3R0b206XG4gICAgICBjYXNlIEFnZ3JGdW5jLkZpcnN0OlxuICAgICAgY2FzZSBBZ2dyRnVuYy5MYXN0OlxuICAgICAgY2FzZSBBZ2dyRnVuYy5NYXg6XG4gICAgICBjYXNlIEFnZ3JGdW5jLk1pbjpcbiAgICAgIGNhc2UgQWdnckZ1bmMuUGVyY2VudGlsZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuVG9wOlxuICAgICAgICByZXR1cm4gQWdnckZ1bmNHcm91cC5TZWxlY3RvcnM7XG5cbiAgICAgIGNhc2UgQWdnckZ1bmMuRGVyaXZhdGl2ZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuU3ByZWFkOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5Ob25OZWdhdGl2ZURlcml2YXRpdmU6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkRpZmZlcmVuY2U6XG4gICAgICBjYXNlIEFnZ3JGdW5jLk5vbk5lZ2F0aXZlRGlmZmVyZW5jZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTW92aW5nQXZlcmFnZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuQ3VtdWxhdGl2ZVN1bTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuU3RkZGV2OlxuICAgICAgY2FzZSBBZ2dyRnVuYy5FbGFwc2VkOlxuICAgICAgICByZXR1cm4gQWdnckZ1bmNHcm91cC5UcmFuc2Zvcm1hdGlvbnM7XG5cbiAgICAgIGNhc2UgQWdnckZ1bmMuSG9sdFdpbnRlcnM6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkhvbHRXaW50ZXJzV2l0aEZpdDpcbiAgICAgICAgcmV0dXJuIEFnZ3JGdW5jR3JvdXAuUHJlZGljdG9ycztcblxuICAgICAgY2FzZSBBZ2dyRnVuYy5NYXRoOlxuICAgICAgICByZXR1cm4gQWdnckZ1bmNHcm91cC5NYXRoO1xuXG4gICAgICBjYXNlIEFnZ3JGdW5jLkFsaWFzOlxuICAgICAgICByZXR1cm4gQWdnckZ1bmNHcm91cC5BbGlhcztcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZW51bSBHcm91cEJ5T3B0aW9ue1xuXHRUaW1lLFxuXHRGaWxsLFxuXHRUYWdcbn1cblxuZXhwb3J0IGVudW0gR3JvdXBCeVRpbWVPcHRpb25ze1xuICBEeW5hbWljID0gJyRfX2ludGVydmFsJyxcbiAgUzEgPSAnMXMnLFxuICBTMTAgPSAnMTBzJyxcbiAgTTEgPSAnMW0nLFxuICBNNSA9ICc1bScsXG4gIE0xMCA9ICcxMG0nLFxuICBNMTUgPSAnMTVtJyxcbiAgSDEgPSAnMWgnLFxufVxuXG5leHBvcnQgZW51bSBHcm91cEJ5RmlsbE9wdGlvbnN7XG5cdE5vbmUgPSAnbm9uZScsXG5cdE51bGwgPSAnbnVsbCcsXG5cdFplcm8gPSAnMCcsXG5cdFByZXYgPSAncHJldmlvdXMnLFxuXHRMaW5lYXIgPSAnbGluZWFyJ1xufVxuXG5leHBvcnQgZW51bSBPcmRlckJ5VGltZXtcblx0QXNjLFxuXHREZXNjXG59XG5cbmV4cG9ydCBjbGFzcyBNZXRyaWNWYXJze1xuXHRzdGF0aWMgcmVhZG9ubHkgVElNRV9GSUxURVIgPSBcIiR0aW1lRmlsdGVyXCI7XG5cdHN0YXRpYyByZWFkb25seSBUSU1FX0lOVEVSVkFMID0gXCIkX19pbnRlcnZhbFwiO1xufVxuXG5leHBvcnQgY2xhc3MgVGFne1xuICBrZXk6IHN0cmluZyA9ICcnO1xuICB2YWx1ZTogc3RyaW5nID0gJyc7XG4gIGluZGV4OiBudW1iZXIgPSAwO1xuICBvcGVyYXRvcjogVGFnT3BlcmF0b3IgPSBUYWdPcGVyYXRvci5FcTtcbiAgY29uZGl0aW9uOiBUYWdDb25kaXRpb24gPSBUYWdDb25kaXRpb24uQW5kXG59XG5cbmV4cG9ydCBlbnVtIFRhZ09wZXJhdG9ye1xuICBFcSA9ICc9JyxcbiAgTmVxID0gJzw+JyxcbiAgTGVzcyA9ICc8JyxcbiAgR3JlYXRlciA9ICc+JyxcbiAgUmVnRXhFcSA9ICc9ficsXG4gIFJlZ0V4TmVxID0gJyF+J1xufVxuXG5leHBvcnQgZW51bSBUYWdDb25kaXRpb257XG4gIEFuZCA9ICdBTkQnLFxuICBPciA9ICdPUidcbn1cblxuXG4iXX0=