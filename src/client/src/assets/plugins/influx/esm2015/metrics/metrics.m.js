export class InfluxQuery {
    constructor() {
        this.measurement = '';
        this.policy = '';
        this.refId = '';
        this.tags = new Array();
        this.fields = new Array();
        this.limit = undefined;
        this.slimit = undefined;
        this.order = OrderByTime.Asc;
        this.alias = '';
        this.groupBy = new Array();
        // virgin: boolean = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljcy5tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL21ldHJpY3MubS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sV0FBVztJQUF4QjtRQUNFLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztRQUU1QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFFM0IsVUFBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDeEIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUVwQixZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7UUFFcEMsMkJBQTJCO0lBQzdCLENBQUM7Q0FBQTtBQUVELE1BQU0sT0FBTyxLQUFLO0NBR2pCO0FBRUQsTUFBTSxPQUFPLFVBQVU7Q0FHdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxRQWdDWDtBQWhDRCxXQUFZLFFBQVE7SUFDbEIsMkJBQWUsQ0FBQTtJQUNmLGlDQUFxQixDQUFBO0lBQ3JCLGlDQUFxQixDQUFBO0lBQ3JCLHlCQUFhLENBQUE7SUFDYiw2QkFBaUIsQ0FBQTtJQUNqQix5QkFBYSxDQUFBO0lBQ2IsdUJBQVcsQ0FBQTtJQUVYLDZCQUFpQixDQUFBO0lBQ2pCLDJCQUFlLENBQUE7SUFDZix5QkFBYSxDQUFBO0lBQ2IsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCxxQ0FBeUIsQ0FBQTtJQUN6Qix1QkFBVyxDQUFBO0lBRVgscUNBQXlCLENBQUE7SUFDekIsNkJBQWlCLENBQUE7SUFDakIsNkRBQWlELENBQUE7SUFD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QVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWV0cmljUXVlcnl9IGZyb20gXCJjb21tb25cIjtcblxuZXhwb3J0IGNsYXNzIEluZmx1eFF1ZXJ5IGltcGxlbWVudHMgTWV0cmljUXVlcnkge1xuICBtZWFzdXJlbWVudDogc3RyaW5nID0gJyc7XG4gIHBvbGljeTogc3RyaW5nID0gJyc7XG4gIHJlZklkOiBzdHJpbmcgPSAnJztcbiAgdGFncyA9IG5ldyBBcnJheTxUYWc+KCk7XG5cdGZpZWxkcyA9IG5ldyBBcnJheTxGaWVsZD4oKTtcblx0XG5cdGxpbWl0OiBudW1iZXIgPSB1bmRlZmluZWQ7XG5cdHNsaW1pdDogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG5cdG9yZGVyID0gT3JkZXJCeVRpbWUuQXNjO1xuXHRhbGlhczogc3RyaW5nID0gICcnO1xuXG5cdGdyb3VwQnkgPSBuZXcgQXJyYXk8R3JvdXBCeU9iamVjdD4oKTtcblxuICAvLyB2aXJnaW46IGJvb2xlYW4gPSBmYWxzZTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpZWxkIHtcbiAga2V5OiBzdHJpbmc7XG4gIGZ1bmN0aW9uczogRnVuY09iamVjdFtdO1xufVxuXG5leHBvcnQgY2xhc3MgRnVuY09iamVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFyYW0/OiBhbnk7XG59XG5cbmV4cG9ydCBlbnVtIEFnZ3JGdW5jIHtcbiAgQ291bnQgPSAnY291bnQnLFxuICBEaXN0aW5jdCA9ICdkaXN0aW5jdCcsXG4gIEludGVncmFsID0gJ2ludGVncmFsJyxcbiAgTWVhbiA9ICdtZWFuJyxcbiAgTWVkaWFuID0gJ21lZGlhbicsXG4gIE1vZGUgPSAnbW9kZScsXG4gIFN1bSA9ICdzdW0nLFxuXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBGaXJzdCA9ICdmaXJzdCcsXG4gIExhc3QgPSAnbGFzdCcsXG4gIE1heCA9ICdtYXgnLFxuICBNaW4gPSAnbWluJyxcbiAgUGVyY2VudGlsZSA9ICdwZXJjZW50aWxlJyxcbiAgVG9wID0gJ3RvcCcsXG5cbiAgRGVyaXZhdGl2ZSA9ICdkZXJpdmF0aXZlJyxcbiAgU3ByZWFkID0gJ3NwcmVhZCcsXG4gIE5vbk5lZ2F0aXZlRGVyaXZhdGl2ZSA9ICdub25fbmVnYXRpdmVfZGVyaXZhdGl2ZScsXG4gIERpZmZlcmVuY2UgPSAnZGlmZmVyZW5jZScsXG4gIE5vbk5lZ2F0aXZlRGlmZmVyZW5jZSA9ICdub25fbmVnYXRpdmVfZGlmZmVyZW5jZScsXG4gIE1vdmluZ0F2ZXJhZ2UgPSAnbW92aW5nX2F2ZXJhZ2UnLFxuICBDdW11bGF0aXZlU3VtID0gJ2N1bXVsYXRpdmVfc3VtJyxcbiAgU3RkZGV2ID0gJ3N0ZGRldicsXG4gIEVsYXBzZWQgPSAnZWxhcHNlZCcsXG5cbiAgSG9sdFdpbnRlcnMgPSAnaG9sdF93aW50ZXJzJyxcbiAgSG9sdFdpbnRlcnNXaXRoRml0ID0gJ2hvbHRfd2ludGVyc193aXRoX2ZpdCcsXG5cbiAgTWF0aCA9ICdtYXRoJyxcbiAgQWxpYXMgPSAnYWxpYXMnLFxufVxuXG5leHBvcnQgZW51bSBBZ2dyRnVuY0dyb3VwIHtcbiAgQWdncmVnYXRpb25zLFxuICBTZWxlY3RvcnMsXG4gIFRyYW5zZm9ybWF0aW9ucyxcbiAgUHJlZGljdG9ycyxcbiAgTWF0aCxcbiAgQWxpYXNcbn1cblxuXG5leHBvcnQgY2xhc3MgQWdnckZ1bmNIZWxwZXIge1xuICBzdGF0aWMgZ2V0R3JvdXAoZjogQWdnckZ1bmN8c3RyaW5nKSB7XG4gICAgc3dpdGNoIChmKSB7XG4gICAgICBjYXNlIEFnZ3JGdW5jLkNvdW50OlxuICAgICAgY2FzZSBBZ2dyRnVuYy5EaXN0aW5jdDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuSW50ZWdyYWw6XG4gICAgICBjYXNlIEFnZ3JGdW5jLk1lYW46XG4gICAgICBjYXNlIEFnZ3JGdW5jLk1lZGlhbjpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTW9kZTpcbiAgICAgIGNhc2UgQWdnckZ1bmMuU3VtOlxuICAgICAgICByZXR1cm4gQWdnckZ1bmNHcm91cC5BZ2dyZWdhdGlvbnM7XG5cbiAgICAgIGNhc2UgQWdnckZ1bmMuQm90dG9tOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5GaXJzdDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTGFzdDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTWF4OlxuICAgICAgY2FzZSBBZ2dyRnVuYy5NaW46XG4gICAgICBjYXNlIEFnZ3JGdW5jLlBlcmNlbnRpbGU6XG4gICAgICBjYXNlIEFnZ3JGdW5jLlRvcDpcbiAgICAgICAgcmV0dXJuIEFnZ3JGdW5jR3JvdXAuU2VsZWN0b3JzO1xuXG4gICAgICBjYXNlIEFnZ3JGdW5jLkRlcml2YXRpdmU6XG4gICAgICBjYXNlIEFnZ3JGdW5jLlNwcmVhZDpcbiAgICAgIGNhc2UgQWdnckZ1bmMuTm9uTmVnYXRpdmVEZXJpdmF0aXZlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5EaWZmZXJlbmNlOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5Ob25OZWdhdGl2ZURpZmZlcmVuY2U6XG4gICAgICBjYXNlIEFnZ3JGdW5jLk1vdmluZ0F2ZXJhZ2U6XG4gICAgICBjYXNlIEFnZ3JGdW5jLkN1bXVsYXRpdmVTdW06XG4gICAgICBjYXNlIEFnZ3JGdW5jLlN0ZGRldjpcbiAgICAgIGNhc2UgQWdnckZ1bmMuRWxhcHNlZDpcbiAgICAgICAgcmV0dXJuIEFnZ3JGdW5jR3JvdXAuVHJhbnNmb3JtYXRpb25zO1xuXG4gICAgICBjYXNlIEFnZ3JGdW5jLkhvbHRXaW50ZXJzOlxuICAgICAgY2FzZSBBZ2dyRnVuYy5Ib2x0V2ludGVyc1dpdGhGaXQ6XG4gICAgICAgIHJldHVybiBBZ2dyRnVuY0dyb3VwLlByZWRpY3RvcnM7XG5cbiAgICAgIGNhc2UgQWdnckZ1bmMuTWF0aDpcbiAgICAgICAgcmV0dXJuIEFnZ3JGdW5jR3JvdXAuTWF0aDtcblxuICAgICAgY2FzZSBBZ2dyRnVuYy5BbGlhczpcbiAgICAgICAgcmV0dXJuIEFnZ3JGdW5jR3JvdXAuQWxpYXM7XG5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdyb3VwQnlPYmplY3R7XG5cblx0Y29uc3RydWN0b3IoIHB1YmxpYyB0eXBlLCBwdWJsaWMgcGFyYW1zID0gW10gKXt9XG59XG5cbmV4cG9ydCBlbnVtIEdyb3VwQnlPcHRpb257XG5cdFRpbWUsXG5cdEZpbGwsXG5cdFRhZ1xufVxuXG5leHBvcnQgZW51bSBHcm91cEJ5VGltZU9wdGlvbnN7XG4gIER5bmFtaWMgPSAnJF9faW50ZXJ2YWwnLFxuICBTMSA9ICcxcycsXG4gIFMxMCA9ICcxMHMnLFxuICBNMSA9ICcxbScsXG4gIE01ID0gJzVtJyxcbiAgTTEwID0gJzEwbScsXG4gIE0xNSA9ICcxNW0nLFxuICBIMSA9ICcxaCcsXG59XG5cbmV4cG9ydCBlbnVtIEdyb3VwQnlGaWxsT3B0aW9uc3tcblx0Tm9uZSA9ICdub25lJyxcblx0TnVsbCA9ICdudWxsJyxcblx0WmVybyA9ICcwJyxcblx0UHJldiA9ICdwcmV2aW91cycsXG5cdExpbmVhciA9ICdsaW5lYXInXG59XG5cbmV4cG9ydCBlbnVtIE9yZGVyQnlUaW1le1xuXHRBc2MgPSBcImFzY1wiLFxuXHREZXNjID0gXCJkZXNjXCJcbn1cblxuZXhwb3J0IGNsYXNzIE1ldHJpY1ZhcnN7XG5cdHN0YXRpYyByZWFkb25seSBUSU1FX0ZJTFRFUiA9IFwiJHRpbWVGaWx0ZXJcIjtcblx0c3RhdGljIHJlYWRvbmx5IFRJTUVfSU5URVJWQUwgPSBcIiRfX2ludGVydmFsXCI7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWd7XG4gIGtleTogc3RyaW5nID0gJyc7XG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgb3BlcmF0b3I6IFRhZ09wZXJhdG9yID0gVGFnT3BlcmF0b3IuRXE7XG4gIGNvbmRpdGlvbjogVGFnQ29uZGl0aW9uID0gVGFnQ29uZGl0aW9uLkFuZFxufVxuXG5leHBvcnQgZW51bSBUYWdPcGVyYXRvcntcbiAgRXEgPSAnPScsXG4gIE5lcSA9ICc8PicsXG4gIExlc3MgPSAnPCcsXG4gIEdyZWF0ZXIgPSAnPicsXG4gIFJlZ0V4RXEgPSAnPX4nLFxuICBSZWdFeE5lcSA9ICchfidcbn1cblxuZXhwb3J0IGVudW0gVGFnQ29uZGl0aW9ue1xuICBBbmQgPSAnQU5EJyxcbiAgT3IgPSAnT1InXG59XG5cblxuIl19