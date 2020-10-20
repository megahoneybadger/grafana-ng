export class InfluxQuery {
    constructor() {
        this.measurement = '';
        this.policy = '';
        this.refId = '';
        // tags = new Array<Tag>();
        this.fields = new Array();
        // limit: number = undefined;
        // slimit: number = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkubS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2VzL2luZmx1eC9zcmMvcXVlcnkvcXVlcnkubS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sV0FBVztJQUF4QjtRQUNFLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQiwyQkFBMkI7UUFDNUIsV0FBTSxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7UUFFNUIsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUU5QiwyQkFBMkI7UUFDM0IsdUJBQXVCO1FBRXZCLHdDQUF3QztRQUV2QywyQkFBMkI7SUFDN0IsQ0FBQztDQUFBO0FBWUQsTUFBTSxDQUFOLElBQVksUUFnQ1g7QUFoQ0QsV0FBWSxRQUFRO0lBQ2xCLDJCQUFlLENBQUE7SUFDZixpQ0FBcUIsQ0FBQTtJQUNyQixpQ0FBcUIsQ0FBQTtJQUNyQix5QkFBYSxDQUFBO0lBQ2IsNkJBQWlCLENBQUE7SUFDakIseUJBQWEsQ0FBQTtJQUNiLHVCQUFXLENBQUE7SUFFWCw2QkFBaUIsQ0FBQTtJQUNqQiwyQkFBZSxDQUFBO0lBQ2YseUJBQWEsQ0FBQTtJQUNiLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gscUNBQXlCLENBQUE7SUFDekIsdUJBQVcsQ0FBQTtJQUVYLHFDQUF5QixDQUFBO0lBQ3pCLDZCQUFpQixDQUFBO0lBQ2pCLDZEQUFpRCxDQUFBO0lBQ2pELHFDQUF5QixDQUFBO0lBQ3pCLDZEQUFpRCxDQUFBO0lBQ2pELDRDQUFnQyxDQUFBO0lBQ2hDLDRDQUFnQyxDQUFBO0lBQ2hDLDZCQUFpQixDQUFBO0lBQ2pCLCtCQUFtQixDQUFBO0lBRW5CLHdDQUE0QixDQUFBO0lBQzVCLHdEQUE0QyxDQUFBO0lBRTVDLHlCQUFhLENBQUE7SUFDYiwyQkFB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QUFrQixLQUFsQixrQkFBa0IsUUFNN0I7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3RCLDJDQUFHLENBQUE7SUFDSCw2Q0FBSSxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFdBQVcsS0FBWCxXQUFXLFFBR3RCO0FBRUQsTUFBTSxPQUFPLFVBQVU7O0FBQ04sc0JBQVcsR0FBRyxhQUFhLENBQUM7QUFDNUIsd0JBQWEsR0FBRyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW5mbHV4UXVlcnkge1xuICBtZWFzdXJlbWVudDogc3RyaW5nID0gJyc7XG4gIHBvbGljeTogc3RyaW5nID0gJyc7XG4gIHJlZklkOiBzdHJpbmcgPSAnJztcbiAgLy8gdGFncyA9IG5ldyBBcnJheTxUYWc+KCk7XG5cdGZpZWxkcyA9IG5ldyBBcnJheTxGaWVsZD4oKTtcblx0XG5cdC8vIGxpbWl0OiBudW1iZXIgPSB1bmRlZmluZWQ7XG5cdC8vIHNsaW1pdDogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG5cdC8vIG9yZGVyID0gT3JkZXJCeVRpbWUuQXNjO1xuXHQvLyBhbGlhczogc3RyaW5nID0gICcnO1xuXG5cdC8vIGdyb3VwQnkgPSBuZXcgQXJyYXk8R3JvdXBCeU9iamVjdD4oKTtcblxuICAvLyB2aXJnaW46IGJvb2xlYW4gPSBmYWxzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZCB7XG4gIGtleTogc3RyaW5nO1xuICBmdW5jdGlvbnM6IEZ1bmNPYmplY3RbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGdW5jT2JqZWN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXJhbTogYW55O1xufVxuXG5leHBvcnQgZW51bSBBZ2dyRnVuYyB7XG4gIENvdW50ID0gJ2NvdW50JyxcbiAgRGlzdGluY3QgPSAnZGlzdGluY3QnLFxuICBJbnRlZ3JhbCA9ICdpbnRlZ3JhbCcsXG4gIE1lYW4gPSAnbWVhbicsXG4gIE1lZGlhbiA9ICdtZWRpYW4nLFxuICBNb2RlID0gJ21vZGUnLFxuICBTdW0gPSAnc3VtJyxcblxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgRmlyc3QgPSAnZmlyc3QnLFxuICBMYXN0ID0gJ2xhc3QnLFxuICBNYXggPSAnbWF4JyxcbiAgTWluID0gJ21pbicsXG4gIFBlcmNlbnRpbGUgPSAncGVyY2VudGlsZScsXG4gIFRvcCA9ICd0b3AnLFxuXG4gIERlcml2YXRpdmUgPSAnZGVyaXZhdGl2ZScsXG4gIFNwcmVhZCA9ICdzcHJlYWQnLFxuICBOb25OZWdhdGl2ZURlcml2YXRpdmUgPSAnbm9uX25lZ2F0aXZlX2Rlcml2YXRpdmUnLFxuICBEaWZmZXJlbmNlID0gJ2RpZmZlcmVuY2UnLFxuICBOb25OZWdhdGl2ZURpZmZlcmVuY2UgPSAnbm9uX25lZ2F0aXZlX2RpZmZlcmVuY2UnLFxuICBNb3ZpbmdBdmVyYWdlID0gJ21vdmluZ19hdmVyYWdlJyxcbiAgQ3VtdWxhdGl2ZVN1bSA9ICdjdW11bGF0aXZlX3N1bScsXG4gIFN0ZGRldiA9ICdzdGRkZXYnLFxuICBFbGFwc2VkID0gJ2VsYXBzZWQnLFxuXG4gIEhvbHRXaW50ZXJzID0gJ2hvbHRfd2ludGVycycsXG4gIEhvbHRXaW50ZXJzV2l0aEZpdCA9ICdob2x0X3dpbnRlcnNfd2l0aF9maXQnLFxuXG4gIE1hdGggPSAnbWF0aCcsXG4gIEFsaWFzID0gJ2FsaWFzJyxcbn1cblxuZXhwb3J0IGVudW0gQWdnckZ1bmNHcm91cCB7XG4gIEFnZ3JlZ2F0aW9ucyxcbiAgU2VsZWN0b3JzLFxuICBUcmFuc2Zvcm1hdGlvbnMsXG4gIFByZWRpY3RvcnMsXG4gIE1hdGgsXG4gIEFsaWFzXG59XG5cblxuZXhwb3J0IGNsYXNzIEFnZ3JGdW5jSGVscGVyIHtcbiAgc3RhdGljIGdldEdyb3VwKGY6IEFnZ3JGdW5jfHN0cmluZykge1xuICAgIHN3aXRjaCAoZikge1xuICAgICAgY2FzZSBBZ2dyRnVuYy5Db3VudDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuRGlzdGluY3Q6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkludGVncmFsOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5NZWFuOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5NZWRpYW46XG4gICAgICBjYXNlIEFnZ3JGdW5jLk1vZGU6XG4gICAgICBjYXNlIEFnZ3JGdW5jLlN1bTpcbiAgICAgICAgcmV0dXJuIEFnZ3JGdW5jR3JvdXAuQWdncmVnYXRpb25zO1xuXG4gICAgICBjYXNlIEFnZ3JGdW5jLkJvdHRvbTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuRmlyc3Q6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkxhc3Q6XG4gICAgICBjYXNlIEFnZ3JGdW5jLk1heDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTWluOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5QZXJjZW50aWxlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5Ub3A6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLlNlbGVjdG9ycztcblxuICAgICAgY2FzZSBBZ2dyRnVuYy5EZXJpdmF0aXZlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5TcHJlYWQ6XG4gICAgICBjYXNlIEFnZ3JGdW5jLk5vbk5lZ2F0aXZlRGVyaXZhdGl2ZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuRGlmZmVyZW5jZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTm9uTmVnYXRpdmVEaWZmZXJlbmNlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5Nb3ZpbmdBdmVyYWdlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5DdW11bGF0aXZlU3VtOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5TdGRkZXY6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkVsYXBzZWQ6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLlRyYW5zZm9ybWF0aW9ucztcblxuICAgICAgY2FzZSBBZ2dyRnVuYy5Ib2x0V2ludGVyczpcbiAgICAgIGNhc2UgQWdnckZ1bmMuSG9sdFdpbnRlcnNXaXRoRml0OlxuICAgICAgICByZXR1cm4gQWdnckZ1bmNHcm91cC5QcmVkaWN0b3JzO1xuXG4gICAgICBjYXNlIEFnZ3JGdW5jLk1hdGg6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLk1hdGg7XG5cbiAgICAgIGNhc2UgQWdnckZ1bmMuQWxpYXM6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLkFsaWFzO1xuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBlbnVtIEdyb3VwQnlPcHRpb257XG5cdFRpbWUsXG5cdEZpbGwsXG5cdFRhZ1xufVxuXG5leHBvcnQgZW51bSBHcm91cEJ5VGltZU9wdGlvbnN7XG4gIER5bmFtaWMgPSAnJF9faW50ZXJ2YWwnLFxuICBTMSA9ICcxcycsXG4gIFMxMCA9ICcxMHMnLFxuICBNMSA9ICcxbScsXG4gIE01ID0gJzVtJyxcbiAgTTEwID0gJzEwbScsXG4gIE0xNSA9ICcxNW0nLFxuICBIMSA9ICcxaCcsXG59XG5cbmV4cG9ydCBlbnVtIEdyb3VwQnlGaWxsT3B0aW9uc3tcblx0Tm9uZSA9ICdub25lJyxcblx0TnVsbCA9ICdudWxsJyxcblx0WmVybyA9ICcwJyxcblx0UHJldiA9ICdwcmV2aW91cycsXG5cdExpbmVhciA9ICdsaW5lYXInXG59XG5cbmV4cG9ydCBlbnVtIE9yZGVyQnlUaW1le1xuXHRBc2MsXG5cdERlc2Ncbn1cblxuZXhwb3J0IGNsYXNzIE1ldHJpY1ZhcnN7XG5cdHN0YXRpYyByZWFkb25seSBUSU1FX0ZJTFRFUiA9IFwiJHRpbWVGaWx0ZXJcIjtcblx0c3RhdGljIHJlYWRvbmx5IFRJTUVfSU5URVJWQUwgPSBcIiRfX2ludGVydmFsXCI7XG59XG5cbiJdfQ==