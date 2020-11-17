export class InfluxQuery {
    constructor() {
        this.tags = new Array();
        this.fields = new Array();
        this.order = OrderByTime.Asc;
        this.groupBy = new Array();
    }
}
export class Field {
}
export class FuncObject {
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
export class GroupByObject {
    constructor(type, params = []) {
        this.type = type;
        this.params = params;
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
    OrderByTime["Asc"] = "asc";
    OrderByTime["Desc"] = "desc";
})(OrderByTime || (OrderByTime = {}));
export class MetricVars {
}
MetricVars.TIME_FILTER = "$timeFilter";
MetricVars.TIME_INTERVAL = "$__interval";
export class Tag {
    constructor() {
        this.key = '';
        this.value = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljcy5tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL21ldHJpY3MubS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sV0FBVztJQUF4QjtRQUlFLFNBQUksR0FBRyxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLEtBQUssRUFBUyxDQUFDO1FBSzVCLFVBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBR3ZCLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBaUIsQ0FBQztJQUd2QyxDQUFDO0NBQUE7QUFFRCxNQUFNLE9BQU8sS0FBSztDQUdqQjtBQUVELE1BQU0sT0FBTyxVQUFVO0NBR3RCO0FBRUQsTUFBTSxDQUFOLElBQVksUUFnQ1g7QUFoQ0QsV0FBWSxRQUFRO0lBQ2xCLDJCQUFlLENBQUE7SUFDZixpQ0FBcUIsQ0FBQTtJQUNyQixpQ0FBcUIsQ0FBQTtJQUNyQix5QkFBYSxDQUFBO0lBQ2IsNkJBQWlCLENBQUE7SUFDakIseUJBQWEsQ0FBQTtJQUNiLHVCQUFXLENBQUE7SUFFWCw2QkFBaUIsQ0FBQTtJQUNqQiwyQkFBZSxDQUFBO0lBQ2YseUJBQWEsQ0FBQTtJQUNiLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gscUNBQXlCLENBQUE7SUFDekIsdUJBQVcsQ0FBQTtJQUVYLHFDQUF5QixDQUFBO0lBQ3pCLDZCQUFpQixDQUFBO0lBQ2pCLDZEQUFpRCxDQUFBO0lBQ2pELHFDQUF5QixDQUFBO0lBQ3pCLDZEQUFpRCxDQUFBO0lBQ2pELDRDQUFnQyxDQUFBO0lBQ2hDLDRDQUFnQyxDQUFBO0lBQ2hDLDZCQUFpQixDQUFBO0lBQ2pCLCtCQUFtQixDQUFBO0lBRW5CLHdDQUE0QixDQUFBO0lBQzVCLHdEQUE0QyxDQUFBO0lBRTVDLHlCQUFhLENBQUE7SUFDYiwyQkFBZSxD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RCxXQUFZLGtCQUFrQjtJQUM3QixtQ0FBYSxDQUFBO0lBQ2IsbUNBQWEsQ0FBQTtJQUNiLGdDQUFVLENBQUE7SUFDVix1Q0FBaUIsQ0FBQTtJQUNqQix1Q0FBaUIsQ0FBQTtBQUNsQixDQUFDLEVBTlcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQU03QjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDdEIsMEJBQVcsQ0FBQTtJQUNYLDRCQUFhLENBQUE7QUFDZCxDQUFDLEVBSFcsV0FBVyxLQUFYLFdBQVcsUUFHdEI7QUFFRCxNQUFNLE9BQU8sVUFBVTs7QUFDTixzQkFBVyxHQUFHLGFBQWEsQ0FBQztBQUM1Qix3QkFBYSxHQUFHLGFBQWEsQ0FBQztBQUcvQyxNQUFNLE9BQU8sR0FBRztJQUFoQjtRQUNFLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQWdCLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDdkMsY0FBUyxHQUFpQixZQUFZLENBQUMsR0FBRyxDQUFBO0lBQzVDLENBQUM7Q0FBQTtBQUVELE1BQU0sQ0FBTixJQUFZLFdBT1g7QUFQRCxXQUFZLFdBQVc7SUFDckIsdUJBQVEsQ0FBQTtJQUNSLHlCQUFVLENBQUE7SUFDVix5QkFBVSxDQUFBO0lBQ1YsNEJBQWEsQ0FBQTtJQUNiLDZCQUFjLENBQUE7SUFDZCw4QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFQVyxXQUFXLEtBQVgsV0FBVyxRQU90QjtBQUVELE1BQU0sQ0FBTixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsMkJBQVcsQ0FBQTtJQUNYLHlCQUFTLENBQUE7QUFDWCxDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01ldHJpY1F1ZXJ5fSBmcm9tIFwiY29tbW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBJbmZsdXhRdWVyeSBpbXBsZW1lbnRzIE1ldHJpY1F1ZXJ5IHtcbiAgbWVhc3VyZW1lbnQ6IHN0cmluZztcbiAgcG9saWN5OiBzdHJpbmc7XG4gIHJlZklkOiBzdHJpbmc7XG4gIHRhZ3MgPSBuZXcgQXJyYXk8VGFnPigpO1xuXHRmaWVsZHMgPSBuZXcgQXJyYXk8RmllbGQ+KCk7XG5cdFxuXHRsaW1pdDogbnVtYmVyO1xuXHRzbGltaXQ6IG51bWJlcjtcblxuXHRvcmRlciA9IE9yZGVyQnlUaW1lLkFzYztcblx0YWxpYXM6IHN0cmluZztcblxuICBncm91cEJ5ID0gbmV3IEFycmF5PEdyb3VwQnlPYmplY3Q+KCk7XG4gIFxuICBoaWRkZW46IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCB7XG4gIGtleTogc3RyaW5nO1xuICBmdW5jdGlvbnM6IEZ1bmNPYmplY3RbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmNPYmplY3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhcmFtPzogYW55O1xufVxuXG5leHBvcnQgZW51bSBBZ2dyRnVuYyB7XG4gIENvdW50ID0gJ2NvdW50JyxcbiAgRGlzdGluY3QgPSAnZGlzdGluY3QnLFxuICBJbnRlZ3JhbCA9ICdpbnRlZ3JhbCcsXG4gIE1lYW4gPSAnbWVhbicsXG4gIE1lZGlhbiA9ICdtZWRpYW4nLFxuICBNb2RlID0gJ21vZGUnLFxuICBTdW0gPSAnc3VtJyxcblxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgRmlyc3QgPSAnZmlyc3QnLFxuICBMYXN0ID0gJ2xhc3QnLFxuICBNYXggPSAnbWF4JyxcbiAgTWluID0gJ21pbicsXG4gIFBlcmNlbnRpbGUgPSAncGVyY2VudGlsZScsXG4gIFRvcCA9ICd0b3AnLFxuXG4gIERlcml2YXRpdmUgPSAnZGVyaXZhdGl2ZScsXG4gIFNwcmVhZCA9ICdzcHJlYWQnLFxuICBOb25OZWdhdGl2ZURlcml2YXRpdmUgPSAnbm9uX25lZ2F0aXZlX2Rlcml2YXRpdmUnLFxuICBEaWZmZXJlbmNlID0gJ2RpZmZlcmVuY2UnLFxuICBOb25OZWdhdGl2ZURpZmZlcmVuY2UgPSAnbm9uX25lZ2F0aXZlX2RpZmZlcmVuY2UnLFxuICBNb3ZpbmdBdmVyYWdlID0gJ21vdmluZ19hdmVyYWdlJyxcbiAgQ3VtdWxhdGl2ZVN1bSA9ICdjdW11bGF0aXZlX3N1bScsXG4gIFN0ZGRldiA9ICdzdGRkZXYnLFxuICBFbGFwc2VkID0gJ2VsYXBzZWQnLFxuXG4gIEhvbHRXaW50ZXJzID0gJ2hvbHRfd2ludGVycycsXG4gIEhvbHRXaW50ZXJzV2l0aEZpdCA9ICdob2x0X3dpbnRlcnNfd2l0aF9maXQnLFxuXG4gIE1hdGggPSAnbWF0aCcsXG4gIEFsaWFzID0gJ2FsaWFzJyxcbn1cblxuZXhwb3J0IGVudW0gQWdnckZ1bmNHcm91cCB7XG4gIEFnZ3JlZ2F0aW9ucyxcbiAgU2VsZWN0b3JzLFxuICBUcmFuc2Zvcm1hdGlvbnMsXG4gIFByZWRpY3RvcnMsXG4gIE1hdGgsXG4gIEFsaWFzXG59XG5cblxuZXhwb3J0IGNsYXNzIEFnZ3JGdW5jSGVscGVyIHtcbiAgc3RhdGljIGdldEdyb3VwKGY6IEFnZ3JGdW5jfHN0cmluZykge1xuICAgIHN3aXRjaCAoZikge1xuICAgICAgY2FzZSBBZ2dyRnVuYy5Db3VudDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuRGlzdGluY3Q6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkludGVncmFsOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5NZWFuOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5NZWRpYW46XG4gICAgICBjYXNlIEFnZ3JGdW5jLk1vZGU6XG4gICAgICBjYXNlIEFnZ3JGdW5jLlN1bTpcbiAgICAgICAgcmV0dXJuIEFnZ3JGdW5jR3JvdXAuQWdncmVnYXRpb25zO1xuXG4gICAgICBjYXNlIEFnZ3JGdW5jLkJvdHRvbTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuRmlyc3Q6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkxhc3Q6XG4gICAgICBjYXNlIEFnZ3JGdW5jLk1heDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTWluOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5QZXJjZW50aWxlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5Ub3A6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLlNlbGVjdG9ycztcblxuICAgICAgY2FzZSBBZ2dyRnVuYy5EZXJpdmF0aXZlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5TcHJlYWQ6XG4gICAgICBjYXNlIEFnZ3JGdW5jLk5vbk5lZ2F0aXZlRGVyaXZhdGl2ZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuRGlmZmVyZW5jZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTm9uTmVnYXRpdmVEaWZmZXJlbmNlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5Nb3ZpbmdBdmVyYWdlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5DdW11bGF0aXZlU3VtOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5TdGRkZXY6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkVsYXBzZWQ6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLlRyYW5zZm9ybWF0aW9ucztcblxuICAgICAgY2FzZSBBZ2dyRnVuYy5Ib2x0V2ludGVyczpcbiAgICAgIGNhc2UgQWdnckZ1bmMuSG9sdFdpbnRlcnNXaXRoRml0OlxuICAgICAgICByZXR1cm4gQWdnckZ1bmNHcm91cC5QcmVkaWN0b3JzO1xuXG4gICAgICBjYXNlIEFnZ3JGdW5jLk1hdGg6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLk1hdGg7XG5cbiAgICAgIGNhc2UgQWdnckZ1bmMuQWxpYXM6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLkFsaWFzO1xuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcm91cEJ5T2JqZWN0e1xuXG5cdGNvbnN0cnVjdG9yKCBwdWJsaWMgdHlwZSwgcHVibGljIHBhcmFtcyA9IFtdICl7fVxufVxuXG5leHBvcnQgZW51bSBHcm91cEJ5T3B0aW9ue1xuXHRUaW1lLFxuXHRGaWxsLFxuXHRUYWdcbn1cblxuZXhwb3J0IGVudW0gR3JvdXBCeVRpbWVPcHRpb25ze1xuICBEeW5hbWljID0gJyRfX2ludGVydmFsJyxcbiAgUzEgPSAnMXMnLFxuICBTMTAgPSAnMTBzJyxcbiAgTTEgPSAnMW0nLFxuICBNNSA9ICc1bScsXG4gIE0xMCA9ICcxMG0nLFxuICBNMTUgPSAnMTVtJyxcbiAgSDEgPSAnMWgnLFxufVxuXG5leHBvcnQgZW51bSBHcm91cEJ5RmlsbE9wdGlvbnN7XG5cdE5vbmUgPSAnbm9uZScsXG5cdE51bGwgPSAnbnVsbCcsXG5cdFplcm8gPSAnMCcsXG5cdFByZXYgPSAncHJldmlvdXMnLFxuXHRMaW5lYXIgPSAnbGluZWFyJ1xufVxuXG5leHBvcnQgZW51bSBPcmRlckJ5VGltZXtcblx0QXNjID0gXCJhc2NcIixcblx0RGVzYyA9IFwiZGVzY1wiXG59XG5cbmV4cG9ydCBjbGFzcyBNZXRyaWNWYXJze1xuXHRzdGF0aWMgcmVhZG9ubHkgVElNRV9GSUxURVIgPSBcIiR0aW1lRmlsdGVyXCI7XG5cdHN0YXRpYyByZWFkb25seSBUSU1FX0lOVEVSVkFMID0gXCIkX19pbnRlcnZhbFwiO1xufVxuXG5leHBvcnQgY2xhc3MgVGFne1xuICBrZXk6IHN0cmluZyA9ICcnO1xuICB2YWx1ZTogc3RyaW5nID0gJyc7XG4gIG9wZXJhdG9yOiBUYWdPcGVyYXRvciA9IFRhZ09wZXJhdG9yLkVxO1xuICBjb25kaXRpb246IFRhZ0NvbmRpdGlvbiA9IFRhZ0NvbmRpdGlvbi5BbmRcbn1cblxuZXhwb3J0IGVudW0gVGFnT3BlcmF0b3J7XG4gIEVxID0gJz0nLFxuICBOZXEgPSAnPD4nLFxuICBMZXNzID0gJzwnLFxuICBHcmVhdGVyID0gJz4nLFxuICBSZWdFeEVxID0gJz1+JyxcbiAgUmVnRXhOZXEgPSAnIX4nXG59XG5cbmV4cG9ydCBlbnVtIFRhZ0NvbmRpdGlvbntcbiAgQW5kID0gJ0FORCcsXG4gIE9yID0gJ09SJ1xufVxuXG5cbiJdfQ==