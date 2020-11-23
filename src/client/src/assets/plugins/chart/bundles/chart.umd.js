(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('uilib'), require('@angular/forms'), require('common'), require('lodash'), require('rxjs/operators'), require('rxjs'), require('ngx-perfect-scrollbar'), require('primeng')) :
    typeof define === 'function' && define.amd ? define('chart', ['exports', '@angular/core', '@angular/router', '@angular/common', 'uilib', '@angular/forms', 'common', 'lodash', 'rxjs/operators', 'rxjs', 'ngx-perfect-scrollbar', 'primeng'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.chart = {}, global.ng.core, global.ng.router, global.ng.common, global.uilib, global.ng.forms, global.common, global.lodash, global.rxjs.operators, global.rxjs, global['ngx-perfect-scrollbar'], global.primeng));
}(this, (function (exports, i0, i1$2, i1$1, i4, i2, i1, _, operators, rxjs, i5, i3) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var BaseChartEditorComponent = /** @class */ (function () {
        function BaseChartEditorComponent(panel) {
            this.panel = panel;
        }
        Object.defineProperty(BaseChartEditorComponent.prototype, "widget", {
            get: function () {
                return this.panel.widget;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "axes", {
            get: function () {
                var _a;
                return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.axes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "legend", {
            get: function () {
                var _a;
                return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "display", {
            get: function () {
                var _a;
                return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.display;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "thresholds", {
            get: function () {
                return this.display.thresholds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "timeRegions", {
            get: function () {
                return this.display.timeRegions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "overrides", {
            get: function () {
                return this.display.overrides;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "time", {
            get: function () {
                var _a;
                this.widget.time = (_a = this.widget.time) !== null && _a !== void 0 ? _a : new i1.TimeRangeMod();
                return this.widget.time;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "alert", {
            get: function () {
                return this.widget.alert;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "chartControl", {
            get: function () {
                return this
                    .widget
                    .component
                    .control
                    .chart;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartEditorComponent.prototype, "options", {
            get: function () {
                return this.chartControl.options;
            },
            enumerable: false,
            configurable: true
        });
        BaseChartEditorComponent.prototype.refresh = function () {
            var _a, _b;
            (_b = (_a = this
                .widget
                .component) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.refresh();
        };
        BaseChartEditorComponent.prototype.update = function () {
            var comp = this.widget.component;
            comp === null || comp === void 0 ? void 0 : comp.datasets.forEach(function (x) { return comp.display.setup(x); });
            this.refresh();
        };
        BaseChartEditorComponent.prototype.pull = function () {
            var _a;
            (_a = this
                .widget
                .component) === null || _a === void 0 ? void 0 : _a.store.dataProvider.update();
        };
        BaseChartEditorComponent.prototype.toggleAlertHandle = function (v) {
            var _this = this;
            setTimeout(function () {
                var comp = _this.widget.component;
                if (comp) {
                    comp.showAlertHandle = v;
                }
            });
        };
        return BaseChartEditorComponent;
    }());
    BaseChartEditorComponent.ɵfac = function BaseChartEditorComponent_Factory(t) { i0.ɵɵinvalidFactory(); };
    BaseChartEditorComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartEditorComponent });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BaseChartEditorComponent, [{
                type: i0.Directive
            }], function () { return [{ type: undefined }]; }, null);
    })();

    var AXIS_X = "xAxis";
    var AXIS_Y_LEFT = "yAxisL";
    var AXIS_Y_RIGHT = "yAxisR";
    var Chart$1 = /** @class */ (function () {
        function Chart() {
            this.legend = new Legend();
            this.axes = new Axes();
            this.display = new Display();
        }
        return Chart;
    }());
    var Legend = /** @class */ (function () {
        function Legend() {
            this.show = false;
            this.table = false;
            this.right = false;
        }
        return Legend;
    }());
    var Axes = /** @class */ (function () {
        function Axes() {
            this.leftY = new VerticalAxis();
            this.rightY = new VerticalAxis(false);
            this.x = new HorizontalAxis();
        }
        return Axes;
    }());
    var ScaleType;
    (function (ScaleType) {
        ScaleType["Linear"] = "linear";
        ScaleType["Log2"] = "log2";
        ScaleType["Log10"] = "log10";
        ScaleType["Log32"] = "log32";
        ScaleType["Log1024"] = "log1024";
    })(ScaleType || (ScaleType = {}));
    var VerticalAxis = /** @class */ (function () {
        function VerticalAxis(show) {
            if (show === void 0) { show = true; }
            this.show = show;
            this.scale = ScaleType.Linear;
        }
        return VerticalAxis;
    }());
    var HorizontalAxis = /** @class */ (function () {
        function HorizontalAxis() {
            this.show = true;
        }
        return HorizontalAxis;
    }());
    var Display = /** @class */ (function () {
        function Display() {
            this.showLines = true;
            this.fill = 1;
            this.lineWidth = 1;
        }
        return Display;
    }());
    var Threshold = /** @class */ (function () {
        function Threshold() {
            this.operator = ThresholdOperator.Gt;
            this.colorType = ThresholdColor.Critical;
            this.fill = true;
            this.line = true;
            this.axis = ThresholdAxis.Left;
        }
        return Threshold;
    }());
    var TooltipMode;
    (function (TooltipMode) {
        TooltipMode["All"] = "all";
        TooltipMode["Single"] = "single";
    })(TooltipMode || (TooltipMode = {}));
    var TooltipSortOrder;
    (function (TooltipSortOrder) {
        TooltipSortOrder["None"] = "none";
        TooltipSortOrder["Increasing"] = "increasing";
        TooltipSortOrder["Decreasing"] = "decreasing";
    })(TooltipSortOrder || (TooltipSortOrder = {}));
    var DataPointNullValueOption;
    (function (DataPointNullValueOption) {
        DataPointNullValueOption["Connected"] = "connected";
        DataPointNullValueOption["Null"] = "null";
        DataPointNullValueOption["NullAsZero"] = "nullAsZero";
    })(DataPointNullValueOption || (DataPointNullValueOption = {}));
    var ThresholdOperator;
    (function (ThresholdOperator) {
        ThresholdOperator["Gt"] = "gt";
        ThresholdOperator["Lt"] = "lt";
    })(ThresholdOperator || (ThresholdOperator = {}));
    var ThresholdColor;
    (function (ThresholdColor) {
        ThresholdColor["Custom"] = "custom";
        ThresholdColor["Critical"] = "critical";
        ThresholdColor["Warning"] = "warning";
        ThresholdColor["Ok"] = "ok";
    })(ThresholdColor || (ThresholdColor = {}));
    var ThresholdAxis;
    (function (ThresholdAxis) {
        ThresholdAxis["Left"] = "left";
        ThresholdAxis["Right"] = "right";
    })(ThresholdAxis || (ThresholdAxis = {}));
    var TimeRegion = /** @class */ (function () {
        function TimeRegion() {
            this.colorType = TimeRegionColor.Red;
            this.fill = true;
            this.line = true;
            this.fromDay = TimeRegionDay.Any;
            this.toDay = TimeRegionDay.Any;
        }
        return TimeRegion;
    }());
    var TimeRegionColor;
    (function (TimeRegionColor) {
        TimeRegionColor["Gray"] = "gray";
        TimeRegionColor["Red"] = "red";
        TimeRegionColor["Green"] = "green";
        TimeRegionColor["Blue"] = "blue";
        TimeRegionColor["Yellow"] = "yellow";
        TimeRegionColor["Custom"] = "custom";
    })(TimeRegionColor || (TimeRegionColor = {}));
    var TimeRegionDay;
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
    var SeriesOverride = /** @class */ (function () {
        function SeriesOverride() {
        }
        return SeriesOverride;
    }());
    var OverrideItem = /** @class */ (function () {
        function OverrideItem(type, value) {
            this.type = type;
            this.value = value;
        }
        return OverrideItem;
    }());
    var OverrideType;
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

    var AxisUnitType;
    (function (AxisUnitType) {
        AxisUnitType[AxisUnitType["None"] = 0] = "None";
        AxisUnitType[AxisUnitType["Common_Short"] = 1] = "Common_Short";
        AxisUnitType[AxisUnitType["Common_Percent"] = 2] = "Common_Percent";
        AxisUnitType[AxisUnitType["Common_Percent01"] = 3] = "Common_Percent01";
        AxisUnitType[AxisUnitType["Common_Humidity"] = 4] = "Common_Humidity";
        AxisUnitType[AxisUnitType["Common_Decibel"] = 5] = "Common_Decibel";
        AxisUnitType[AxisUnitType["Common_Hex0x"] = 6] = "Common_Hex0x";
        AxisUnitType[AxisUnitType["Common_Hex"] = 7] = "Common_Hex";
        AxisUnitType[AxisUnitType["Common_SciNotation"] = 8] = "Common_SciNotation";
        AxisUnitType[AxisUnitType["Common_LocaleString"] = 9] = "Common_LocaleString";
        AxisUnitType[AxisUnitType["Length_Millimetre"] = 10] = "Length_Millimetre";
        AxisUnitType[AxisUnitType["Length_Meter"] = 11] = "Length_Meter";
        AxisUnitType[AxisUnitType["Length_Feet"] = 12] = "Length_Feet";
        AxisUnitType[AxisUnitType["Length_Kilometer"] = 13] = "Length_Kilometer";
        AxisUnitType[AxisUnitType["Length_Mile"] = 14] = "Length_Mile";
        AxisUnitType[AxisUnitType["Area_SquareMeters"] = 15] = "Area_SquareMeters";
        AxisUnitType[AxisUnitType["Area_SquareFeet"] = 16] = "Area_SquareFeet";
        AxisUnitType[AxisUnitType["Area_SquareMiles"] = 17] = "Area_SquareMiles";
        AxisUnitType[AxisUnitType["Mass_Milligram"] = 18] = "Mass_Milligram";
        AxisUnitType[AxisUnitType["Mass_Gram"] = 19] = "Mass_Gram";
        AxisUnitType[AxisUnitType["Mass_Kilogram"] = 20] = "Mass_Kilogram";
        AxisUnitType[AxisUnitType["Mass_MetricTon"] = 21] = "Mass_MetricTon";
    })(AxisUnitType || (AxisUnitType = {}));
    var AxisUnit = /** @class */ (function () {
        function AxisUnit(type, label, unit, command) {
            this.type = type;
            this.label = label;
            this.unit = unit;
            this.command = command;
        }
        return AxisUnit;
    }());
    var AxisUnitHelper = /** @class */ (function () {
        function AxisUnitHelper() {
        }
        AxisUnitHelper.getData = function (unit) {
            switch (+unit) {
                case AxisUnitType.Common_Short:
                    return new AxisUnit(AxisUnitType.Common_Short, "short", "");
                case AxisUnitType.Common_Percent:
                    return new AxisUnit(AxisUnitType.Common_Percent, "percent (0-100)", "%");
                case AxisUnitType.Common_Percent01:
                    return new AxisUnit(AxisUnitType.Common_Percent01, "percent (0.0-1.0)", "%");
                case AxisUnitType.Common_Humidity:
                    return new AxisUnit(AxisUnitType.Common_Humidity, "humidity (%H)", "%H");
                case AxisUnitType.Common_Decibel:
                    return new AxisUnit(AxisUnitType.Common_Decibel, "decibel", "dB");
                case AxisUnitType.Common_Hex0x:
                    return new AxisUnit(AxisUnitType.Common_Hex0x, "hexadecimal (0x)", "");
                case AxisUnitType.Common_Hex:
                    return new AxisUnit(AxisUnitType.Common_Hex, "hexadecimal", "");
                case AxisUnitType.Common_SciNotation:
                    return new AxisUnit(AxisUnitType.Common_SciNotation, "scientific notation", "");
                case AxisUnitType.Common_LocaleString:
                    return new AxisUnit(AxisUnitType.Common_LocaleString, "locale string", "");
                case AxisUnitType.Length_Millimetre:
                    return new AxisUnit(AxisUnitType.Length_Millimetre, "millimetre (mm)", "mm");
                case AxisUnitType.Length_Meter:
                    return new AxisUnit(AxisUnitType.Length_Meter, "meter (m)", "m");
                case AxisUnitType.Length_Feet:
                    return new AxisUnit(AxisUnitType.Length_Feet, "feet (ft)", "ft");
                case AxisUnitType.Length_Kilometer:
                    return new AxisUnit(AxisUnitType.Length_Kilometer, "kilometer (km)", "km");
                case AxisUnitType.Length_Mile:
                    return new AxisUnit(AxisUnitType.Length_Mile, "mile (mi)", "mi");
                case AxisUnitType.Area_SquareMeters:
                    return new AxisUnit(AxisUnitType.Area_SquareMeters, "Square Meters (m²)", "m²");
                case AxisUnitType.Area_SquareFeet:
                    return new AxisUnit(AxisUnitType.Area_SquareFeet, "Square Feet (ft²)", "ft²");
                case AxisUnitType.Area_SquareMiles:
                    return new AxisUnit(AxisUnitType.Area_SquareMiles, "Square Miles (mi²)", "mi²");
                case AxisUnitType.Mass_Milligram:
                    return new AxisUnit(AxisUnitType.Mass_Milligram, "milligram (mg)", "mg");
                case AxisUnitType.Mass_Gram:
                    return new AxisUnit(AxisUnitType.Mass_Gram, "gram (g)", "g");
                case AxisUnitType.Mass_Kilogram:
                    return new AxisUnit(AxisUnitType.Mass_Kilogram, "kilogram (kg)", "kg");
                case AxisUnitType.Mass_MetricTon:
                    return new AxisUnit(AxisUnitType.Mass_MetricTon, "metric ton (t)", "t");
            }
            return new AxisUnit(AxisUnitType.None, "none", "");
        };
        AxisUnitHelper.getFormattedValue = function (label, unit, decimals) {
            var value = label.toFixed(decimals);
            var unitData = AxisUnitHelper.getData(unit);
            switch (unitData.type) {
                case AxisUnitType.Common_Hex:
                    return label.toString(16);
                case AxisUnitType.Common_Hex0x:
                    return "0x" + label.toString(16);
                case AxisUnitType.Common_Percent01:
                    return (100 * label).toFixed(decimals) + " %";
                case AxisUnitType.Common_SciNotation:
                    return label.toExponential(decimals);
                case AxisUnitType.Common_LocaleString:
                    return label.toLocaleString();
                case AxisUnitType.Common_Short:
                    return AxisUnitHelper.getShortFormattedValue(label, unit, decimals);
                case AxisUnitType.None:
                    return value;
                default:
                    return value + " " + unitData.unit;
            }
        };
        AxisUnitHelper.getShortFormattedValue = function (label, unit, decimals) {
            // if( label < 1000 ){
            // 	return label;
            // }
            var dev = 1;
            var u = '';
            if (label >= 1000 && label < 1000000) {
                u = 'K';
                dev = 1000;
            }
            else if (label >= 1000000 && label < 1000000000) {
                u = 'Mil';
                dev = 1000000;
            }
            else if (label >= 1000000000 && label < 1000000000000) {
                u = 'Bil';
                dev = 1000000000;
            }
            else if (label >= 1000000000000 && label < 1000000000000000) {
                u = 'Tri';
                dev = 1000000000000;
            }
            else if (label >= 1000000000000000 && label < 1000000000000000000) {
                u = 'Qdr';
                dev = 1000000000000000;
            }
            return (label / dev).toFixed(decimals) + " " + u;
        };
        return AxisUnitHelper;
    }());

    var menuItems = [
        {
            label: "none", items: [
                AxisUnitHelper.getData(AxisUnitType.None),
                AxisUnitHelper.getData(AxisUnitType.Common_Short),
                AxisUnitHelper.getData(AxisUnitType.Common_Percent),
                AxisUnitHelper.getData(AxisUnitType.Common_Percent01),
                AxisUnitHelper.getData(AxisUnitType.Common_Humidity),
                AxisUnitHelper.getData(AxisUnitType.Common_Decibel),
                AxisUnitHelper.getData(AxisUnitType.Common_Hex0x),
                AxisUnitHelper.getData(AxisUnitType.Common_Hex),
                AxisUnitHelper.getData(AxisUnitType.Common_SciNotation),
                AxisUnitHelper.getData(AxisUnitType.Common_LocaleString)
            ]
        },
        {
            label: "length", items: [
                AxisUnitHelper.getData(AxisUnitType.Length_Millimetre),
                AxisUnitHelper.getData(AxisUnitType.Length_Meter),
                AxisUnitHelper.getData(AxisUnitType.Length_Feet),
                AxisUnitHelper.getData(AxisUnitType.Length_Kilometer),
                AxisUnitHelper.getData(AxisUnitType.Length_Mile)
            ]
        },
        {
            label: "area", items: [
                AxisUnitHelper.getData(AxisUnitType.Area_SquareMeters),
                AxisUnitHelper.getData(AxisUnitType.Area_SquareFeet),
                AxisUnitHelper.getData(AxisUnitType.Area_SquareMiles)
            ]
        },
        {
            label: "mass", items: [
                AxisUnitHelper.getData(AxisUnitType.Mass_Milligram),
                AxisUnitHelper.getData(AxisUnitType.Mass_Gram),
                AxisUnitHelper.getData(AxisUnitType.Mass_Kilogram),
                AxisUnitHelper.getData(AxisUnitType.Mass_MetricTon)
            ]
        },
    ];

    var AxisYEditorComponent = /** @class */ (function (_super) {
        __extends(AxisYEditorComponent, _super);
        function AxisYEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.left = true;
            _this.units = _.cloneDeep(menuItems);
            _this.scales = i4.DropDownComponent.wrapEnum(ScaleType);
            return _this;
        }
        Object.defineProperty(AxisYEditorComponent.prototype, "axis", {
            get: function () {
                return this.left ? this.axes.leftY : this.axes.rightY;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisYEditorComponent.prototype, "chartAxis", {
            get: function () {
                return this.options.scales.yAxes[this.left ? 0 : 1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisYEditorComponent.prototype, "show", {
            get: function () {
                return this.axis.show;
            },
            set: function (v) {
                this.axis.show = this.chartAxis.display = v;
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisYEditorComponent.prototype, "unit", {
            get: function () {
                return this.axis.unit;
            },
            set: function (v) {
                this.axis.unit = v;
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisYEditorComponent.prototype, "scale", {
            get: function () {
                return this.axis.scale;
            },
            set: function (v) {
                this.axis.scale = v;
                this.chartAxis.type = (v == ScaleType.Linear) ? "linear" : "logarithmic";
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisYEditorComponent.prototype, "label", {
            get: function () {
                return this.axis.label;
            },
            set: function (v) {
                this.axis.label = v;
                var sl = this.chartAxis.scaleLabel;
                if (v) {
                    sl.display = true;
                    sl.labelString = v;
                }
                else {
                    sl.display = false;
                    sl.labelString = undefined;
                }
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisYEditorComponent.prototype, "decimals", {
            get: function () {
                return this.axis.decimals;
            },
            set: function (v) {
                this.axis.decimals = v ? +v : undefined;
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisYEditorComponent.prototype, "min", {
            get: function () {
                return this.axis.min;
            },
            set: function (v) {
                this.axis.min = this.chartAxis.ticks.min = v ? +v : undefined;
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisYEditorComponent.prototype, "max", {
            get: function () {
                return this.axis.max;
            },
            set: function (v) {
                this.axis.max = this.chartAxis.ticks.max = v ? +v : undefined;
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        return AxisYEditorComponent;
    }(BaseChartEditorComponent));
    AxisYEditorComponent.ɵfac = function AxisYEditorComponent_Factory(t) { return new (t || AxisYEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    AxisYEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxisYEditorComponent, selectors: [["editor-axis-y"]], inputs: { left: "left" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 11, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "6", "label", "Show", 3, "ngModel", "ngModelChange"], ["label", "Unit", "width", "16", "labelWidth", "6", 3, "valueProperty", "ngModel", "data", "ngModelChange"], ["label", "Scale", "labelWidth", "6", "width", "16", 3, "ngModel", "data", "ngModelChange"], [1, "gf-form-inline"], ["type", "number", "labelWidth", "6", "label", "Y-Min", "width", "5", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["type", "number", "labelWidth", "6", "label", "Y-Max", "width", "5", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["type", "text", "labelWidth", "6", "label", "Decimals", "width", "16", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Label", "width", "16", 3, "ngModel", "ngModelChange"]], template: function AxisYEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5", 1);
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-checkbox", 2);
                i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.show = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "ed-hierarchical-dropdown", 3);
                i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_hierarchical_dropdown_ngModelChange_4_listener($event) { return ctx.unit = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-dropdown", 4);
                i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_dropdown_ngModelChange_5_listener($event) { return ctx.scale = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 5);
                i0.ɵɵelementStart(7, "ed-textbox", 6);
                i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_7_listener($event) { return ctx.min = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "ed-textbox", 7);
                i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_8_listener($event) { return ctx.max = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "ed-textbox", 8);
                i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_9_listener($event) { return ctx.decimals = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "ed-textbox", 9);
                i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_10_listener($event) { return ctx.label = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.left ? "Left Y" : "Right Y");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.show);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("valueProperty", "type")("ngModel", ctx.unit)("data", ctx.units);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.scale)("data", ctx.scales);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.min);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.max);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.decimals);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.label);
            }
        }, directives: [i4.CheckBoxComponent, i2.NgControlStatus, i2.NgModel, i4.HierarchicalDropDownComponent, i4.DropDownComponent, i4.TextBoxComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxisYEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-axis-y',
                        templateUrl: './y-axis.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, { left: [{
                    type: i0.Input
                }] });
    })();

    var AxisXEditorComponent = /** @class */ (function (_super) {
        __extends(AxisXEditorComponent, _super);
        function AxisXEditorComponent(panel) {
            return _super.call(this, panel) || this;
        }
        Object.defineProperty(AxisXEditorComponent.prototype, "axis", {
            get: function () {
                return this.axes.x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisXEditorComponent.prototype, "chartAxis", {
            get: function () {
                return this.options.scales.xAxes[0];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxisXEditorComponent.prototype, "show", {
            get: function () {
                return this.axis.show;
            },
            set: function (v) {
                this.axis.show = this.chartAxis.display = v;
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        return AxisXEditorComponent;
    }(BaseChartEditorComponent));
    AxisXEditorComponent.ɵfac = function AxisXEditorComponent_Factory(t) { return new (t || AxisXEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    AxisXEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxisXEditorComponent, selectors: [["editor-axis-x"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "6", "label", "Show", 3, "ngModel", "ngModelChange"]], template: function AxisXEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5", 1);
                i0.ɵɵtext(2, "X-Axis");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-checkbox", 2);
                i0.ɵɵlistener("ngModelChange", function AxisXEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.show = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.show);
            }
        }, directives: [i4.CheckBoxComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxisXEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-axis-x',
                        templateUrl: './x-axis.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var AxesEditorComponent = /** @class */ (function (_super) {
        __extends(AxesEditorComponent, _super);
        function AxesEditorComponent(panel) {
            return _super.call(this, panel) || this;
        }
        return AxesEditorComponent;
    }(BaseChartEditorComponent));
    AxesEditorComponent.ɵfac = function AxesEditorComponent_Factory(t) { return new (t || AxesEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    AxesEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxesEditorComponent, selectors: [["editor-axes"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "left"]], template: function AxesEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "editor-axis-y");
                i0.ɵɵelement(1, "editor-axis-y", 0);
                i0.ɵɵelement(2, "editor-axis-x");
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("left", false);
            }
        }, directives: [AxisYEditorComponent, AxisXEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxesEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-axes',
                        template: "\n    <editor-axis-y ></editor-axis-y>\n    <editor-axis-y [left]=\"false\" ></editor-axis-y>\n    <editor-axis-x></editor-axis-x>"
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var LegendEditorComponent = /** @class */ (function (_super) {
        __extends(LegendEditorComponent, _super);
        function LegendEditorComponent(panel) {
            return _super.call(this, panel) || this;
        }
        return LegendEditorComponent;
    }(BaseChartEditorComponent));
    LegendEditorComponent.ɵfac = function LegendEditorComponent_Factory(t) { return new (t || LegendEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    LegendEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendEditorComponent, selectors: [["editor-legend"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 11, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "7", "label", "Show", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "As Table", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "To the right", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["labelWidth", "4", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Avg", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Current", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Total", 3, "ngModel", "ngModelChange"], ["type", "number", "labelWidth", "6", "label", "Decimals", "width", "4", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only nulls", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only zeros", 3, "ngModel", "ngModelChange"]], template: function LegendEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5", 1);
                i0.ɵɵtext(2, "Options");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-checkbox", 2);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.legend.show = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "ed-checkbox", 3);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.legend.table = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.legend.right = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 0);
                i0.ɵɵelementStart(7, "h5", 1);
                i0.ɵɵtext(8, "Values");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 5);
                i0.ɵɵelementStart(10, "ed-checkbox", 6);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_10_listener($event) { return ctx.legend.min = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "ed-checkbox", 7);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.legend.max = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", 5);
                i0.ɵɵelementStart(13, "ed-checkbox", 8);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_13_listener($event) { return ctx.legend.avg = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "ed-checkbox", 9);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_14_listener($event) { return ctx.legend.current = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div", 5);
                i0.ɵɵelementStart(16, "ed-checkbox", 10);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_16_listener($event) { return ctx.legend.total = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "ed-textbox", 11);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_textbox_ngModelChange_17_listener($event) { return ctx.legend.decimals = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "div", 0);
                i0.ɵɵelementStart(19, "h5", 1);
                i0.ɵɵtext(20, "Hide series");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "ed-checkbox", 12);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.legend.hideOnlyNulls = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "ed-checkbox", 13);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_22_listener($event) { return ctx.legend.hideOnlyZeroes = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.legend.show);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.table);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.right);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngModel", ctx.legend.min);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.max);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.legend.avg);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.current);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.legend.total);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.decimals);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.legend.hideOnlyNulls);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.hideOnlyZeroes);
            }
        }, directives: [i4.CheckBoxComponent, i2.NgControlStatus, i2.NgModel, i4.TextBoxComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LegendEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-legend',
                        templateUrl: './legend.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var DrawOptionsEditorComponent = /** @class */ (function (_super) {
        __extends(DrawOptionsEditorComponent, _super);
        function DrawOptionsEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.availableWidth = i4.DropDownComponent.wrapArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            _this.availableTooltipModes = i4.DropDownComponent.wrapEnum(TooltipMode);
            _this.availableTooltipSortOrders = i4.DropDownComponent.wrapEnum(TooltipSortOrder);
            _this.availableNullValueOptions = i4.DropDownComponent.wrapEnum(DataPointNullValueOption);
            return _this;
        }
        Object.defineProperty(DrawOptionsEditorComponent.prototype, "stack", {
            get: function () {
                return this.display.stack;
            },
            set: function (v) {
                this.display.stack = v;
                this.options.scales.yAxes[0 /*?*/].stacked = v;
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        return DrawOptionsEditorComponent;
    }(BaseChartEditorComponent));
    DrawOptionsEditorComponent.ɵfac = function DrawOptionsEditorComponent_Factory(t) { return new (t || DrawOptionsEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    DrawOptionsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawOptionsEditorComponent, selectors: [["editor-draw-options"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 19, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "5", "label", "Bars"], ["labelWidth", "5", "label", "Lines", 3, "ngModel", "ngModelChange", "checked"], ["labelWidth", "5", "label", "Points", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "ngModelChange", "selectionChange"], ["label", "Line Width", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "disabled", "ngModelChange", "selectionChange"], ["label", "Staircase", "labelWidth", "8", "width", "5", 3, "ngModel", "ngModelChange", "checked"], ["label", "Point Radius", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "disabled", "ngModelChange", "selectionChange"], ["label", "Mode", "labelWidth", "9", "width", "9", 3, "data", "ngModel", "ngModelChange"], ["label", "Sort Order", "labelWidth", "9", "width", "9", 3, "data", "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "Stack", 3, "ngModel", "ngModelChange"], ["label", "Null Value", 3, "ngModel", "data", "labelWidth", "ngModelChange"]], template: function DrawOptionsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5", 1);
                i0.ɵɵtext(2, "Draw Modes");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "ed-checkbox", 2);
                i0.ɵɵelementStart(4, "ed-checkbox", 3);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.display.showLines = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_4_listener() { return ctx.update(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.display.showPoints = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_5_listener() { return ctx.update(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 0);
                i0.ɵɵelementStart(7, "h5", 1);
                i0.ɵɵtext(8, "Mode Options");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "ed-dropdown", 5);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_9_listener($event) { return ctx.display.fill = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_9_listener() { return ctx.update(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "ed-dropdown", 6);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_10_listener($event) { return ctx.display.lineWidth = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_10_listener() { return ctx.update(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "ed-checkbox", 7);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.display.staircase = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_11_listener() { return ctx.update(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "ed-dropdown", 8);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_12_listener($event) { return ctx.display.pointRadius = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_12_listener() { return ctx.update(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 0);
                i0.ɵɵelementStart(14, "h5", 1);
                i0.ɵɵtext(15, "Hover tooltip");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "ed-dropdown", 9);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_16_listener($event) { return ctx.display.tooltipMode = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "ed-dropdown", 10);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_17_listener($event) { return ctx.display.tooltipSortOrder = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "div", 0);
                i0.ɵɵelementStart(19, "h5", 1);
                i0.ɵɵtext(20, "Stacking & Null value");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "ed-checkbox", 11);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.stack = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "ed-dropdown", 12);
                i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_22_listener($event) { return ctx.display.nullValue = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.display.showLines);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.display.showPoints);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.display.fill)("data", ctx.availableWidth);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.display.lineWidth)("data", ctx.availableWidth)("disabled", !ctx.display.showLines);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.display.staircase);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.display.pointRadius)("data", ctx.availableWidth)("disabled", !ctx.display.showPoints);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("data", ctx.availableTooltipModes)("ngModel", ctx.display.tooltipMode);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.availableTooltipSortOrders)("ngModel", ctx.display.tooltipSortOrder);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.stack);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.display.nullValue)("data", ctx.availableNullValueOptions)("labelWidth", 7);
            }
        }, directives: [i4.CheckBoxComponent, i2.NgControlStatus, i2.NgModel, i4.DropDownComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DrawOptionsEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-draw-options',
                        templateUrl: './options.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    function SeriesOverrideEditorComponent_div_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 21);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i_r3.value);
        }
    }
    function SeriesOverrideEditorComponent_div_2_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "color-circle", 22);
        }
        if (rf & 2) {
            var i_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("value", i_r3.value)("canBeActive", false);
        }
    }
    function SeriesOverrideEditorComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "div", 16);
            i0.ɵɵelementStart(2, "span", 17);
            i0.ɵɵlistener("click", function SeriesOverrideEditorComponent_div_2_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r10_1); var i_r3 = ctx.$implicit; var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onRemoveItem(i_r3); });
            i0.ɵɵelement(3, "i", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4);
            i0.ɵɵtemplate(5, SeriesOverrideEditorComponent_div_2_span_5_Template, 2, 1, "span", 19);
            i0.ɵɵtemplate(6, SeriesOverrideEditorComponent_div_2_ng_template_6_Template, 1, 2, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r3 = ctx.$implicit;
            var _r5 = i0.ɵɵreference(7);
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx_r0.getItemHeader(i_r3), ": ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r3.type != 12)("ngIfElse", _r5);
        }
    }
    var SeriesOverrideEditorComponent = /** @class */ (function (_super) {
        __extends(SeriesOverrideEditorComponent, _super);
        function SeriesOverrideEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.removed = new i0.EventEmitter();
            _this.cmItems = [];
            _this.items = new Array();
            _this.showColorPicker = false;
            return _this;
        }
        SeriesOverrideEditorComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.cmItems = [
                this.createBoolItem("Lines", OverrideType.Lines),
                this.createNumberItem("Line fill", OverrideType.LineFill),
                this.createNumberItem("Line width", OverrideType.LineWidth),
                this.createBoolItem("Staircase", OverrideType.Staircase),
                this.createBoolItem("Dashes", OverrideType.Dashes),
                this.createNumberItem("Dash length", OverrideType.DashLength),
                this.createNumberItem("Dash space", OverrideType.DashSpace),
                this.createBoolItem("Points", OverrideType.Points),
                this.createNumberItem("Point radius", OverrideType.PointRadius, 0, 5),
                this.createBoolItem("Stack", OverrideType.Stack),
                this.createColorItem("Color", OverrideType.Color),
                this.createNumberItem("Y-axis", OverrideType.YAxis, 1, 2),
                this.createNumberItem("Z-index", OverrideType.ZIndex, -3, 3),
                this.createBoolItem("Legend", OverrideType.Legend),
                this.createBoolItem("Hide in tooltip", OverrideType.HideInTooltip),
            ];
            i4.ContextMenuComponent.wrapItems(this.cmItems, function (x) { return _this.onOptionSelected(x.item); });
            this.rebuildItems();
        };
        SeriesOverrideEditorComponent.prototype.rebuildItems = function () {
            var items = new Array();
            for (var prop in this.override) {
                if (prop != 'alias') {
                    var type = this.getOverrideType(prop);
                    items.push(new OverrideItem(type, this.override[prop]));
                }
            }
            this.items = items;
            this.update();
        };
        SeriesOverrideEditorComponent.prototype.createBoolItem = function (header, type) {
            return {
                label: header, items: [
                    { label: 'true', value: true, type: type },
                    { label: 'false', value: false, type: type },
                ]
            };
        };
        SeriesOverrideEditorComponent.prototype.createNumberItem = function (header, type, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = 10; }
            var item = { label: header, items: [] };
            for (var i = from; i <= to; ++i) {
                item.items.push({ label: i, value: i, type: type });
            }
            return item;
        };
        SeriesOverrideEditorComponent.prototype.createColorItem = function (header, type) {
            return {
                label: header,
                type: type,
                items: [
                    { label: "change", type: type }
                ]
            };
        };
        SeriesOverrideEditorComponent.prototype.onOptionSelected = function (item) {
            if (item.type == undefined) {
                return;
            }
            if (OverrideType.Color == item.type) {
                this.showColorPicker = true;
                event.stopPropagation();
            }
            else {
                this.override[this.getPropertyName(item)] = item.value;
                this.rebuildItems();
            }
        };
        SeriesOverrideEditorComponent.prototype.onRemoveItem = function (item) {
            delete this.override[this.getPropertyName(item)];
            this.rebuildItems();
        };
        SeriesOverrideEditorComponent.prototype.getItemHeader = function (item) {
            return OverrideType[item.type]
                .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
                .toLowerCase();
        };
        SeriesOverrideEditorComponent.prototype.getPropertyName = function (item) {
            return OverrideType[item.type].replace(/^\w/, function (c) { return c.toLowerCase(); });
        };
        SeriesOverrideEditorComponent.prototype.getOverrideType = function (prop) {
            return OverrideType[prop.replace(/^\w/, function (c) { return c.toUpperCase(); })];
        };
        SeriesOverrideEditorComponent.prototype.onColorSelected = function (color) {
            var item = this.createColorItem("Color", OverrideType.Color);
            this.override[this.getPropertyName(item)] = color;
            this.rebuildItems();
        };
        return SeriesOverrideEditorComponent;
    }(BaseChartEditorComponent));
    SeriesOverrideEditorComponent.ɵfac = function SeriesOverrideEditorComponent_Factory(t) { return new (t || SeriesOverrideEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    SeriesOverrideEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SeriesOverrideEditorComponent, selectors: [["editor-series-override"]], inputs: { override: "override", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 5, consts: [[1, "ed-form-inline"], ["label", "alias or regex", "width", "15", 3, "ngModel", "ngModelChange"], ["class", "gf-form", 4, "ngFor", "ngForOf"], [1, "gf-form", 3, "click"], ["menuTarget", ""], [1, "gf-form-label", "pointer"], [1, "fa", "fa-plus"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "visible", "anchor", "visibleChange"], [3, "selected"], [3, "items"], ["cm", ""], [1, "gf-form-label"], [3, "click"], [1, "fa", "fa-times", "mr-2", "pointer"], ["class", "ml-1", 4, "ngIf", "ngIfElse"], ["color", ""], [1, "ml-1"], [1, "ml-1", 3, "value", "canBeActive"]], template: function SeriesOverrideEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r11_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "ed-textbox", 1);
                i0.ɵɵlistener("ngModelChange", function SeriesOverrideEditorComponent_Template_ed_textbox_ngModelChange_1_listener($event) { return ctx.override.alias = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(2, SeriesOverrideEditorComponent_div_2_Template, 8, 3, "div", 2);
                i0.ɵɵelementStart(3, "div", 3, 4);
                i0.ɵɵlistener("click", function SeriesOverrideEditorComponent_Template_div_click_3_listener($event) { i0.ɵɵrestoreView(_r11_1); var _r2 = i0.ɵɵreference(15); return _r2.show($event); });
                i0.ɵɵelementStart(5, "label", 5);
                i0.ɵɵelement(6, "i", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 7);
                i0.ɵɵelement(8, "div", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 9);
                i0.ɵɵelementStart(10, "label", 10);
                i0.ɵɵlistener("click", function SeriesOverrideEditorComponent_Template_label_click_10_listener() { return ctx.removed.emit(ctx.override); });
                i0.ɵɵelement(11, "i", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "ed-popup", 12);
                i0.ɵɵlistener("visibleChange", function SeriesOverrideEditorComponent_Template_ed_popup_visibleChange_12_listener($event) { return ctx.showColorPicker = $event; });
                i0.ɵɵelementStart(13, "ed-palette-editor", 13);
                i0.ɵɵlistener("selected", function SeriesOverrideEditorComponent_Template_ed_palette_editor_selected_13_listener($event) { return ctx.onColorSelected($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(14, "ed-context-menu", 14, 15);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.override.alias);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.items);
                i0.ɵɵadvance(10);
                i0.ɵɵproperty("visible", ctx.showColorPicker)("anchor", _r1);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("items", ctx.cmItems);
            }
        }, directives: [i4.TextBoxComponent, i2.NgControlStatus, i2.NgModel, i1$1.NgForOf, i4.PopupComponent, i4.PaletteEditorComponent, i4.ContextMenuComponent, i1$1.NgIf, i4.ColorCircleComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SeriesOverrideEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-series-override',
                        templateUrl: './override.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, { override: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }], removed: [{
                    type: i0.Output
                }] });
    })();

    function SeriesOverridesEditorComponent_editor_series_override_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "editor-series-override", 5);
            i0.ɵɵlistener("removed", function SeriesOverridesEditorComponent_editor_series_override_4_Template_editor_series_override_removed_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onRemove($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = ctx.$implicit;
            var i_r2 = ctx.index;
            i0.ɵɵproperty("override", t_r1)("index", i_r2);
        }
    }
    var SeriesOverridesEditorComponent = /** @class */ (function (_super) {
        __extends(SeriesOverridesEditorComponent, _super);
        function SeriesOverridesEditorComponent(panel) {
            return _super.call(this, panel) || this;
        }
        SeriesOverridesEditorComponent.prototype.onAdd = function () {
            var _a;
            this.display.overrides = (_a = this.overrides) !== null && _a !== void 0 ? _a : [];
            this.overrides.push(new SeriesOverride());
        };
        SeriesOverridesEditorComponent.prototype.onRemove = function (t) {
            var index = this.overrides.indexOf(t);
            if (-1 !== index) {
                this.overrides.splice(index, 1);
            }
            this.update();
        };
        return SeriesOverridesEditorComponent;
    }(BaseChartEditorComponent));
    SeriesOverridesEditorComponent.ɵfac = function SeriesOverridesEditorComponent_Factory(t) { return new (t || SeriesOverridesEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    SeriesOverridesEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SeriesOverridesEditorComponent, selectors: [["editor-series-overrides"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], [3, "override", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], [1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "override", "index", "removed"]], template: function SeriesOverridesEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5");
                i0.ɵɵtext(2, "Series specific overrides ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div");
                i0.ɵɵtemplate(4, SeriesOverridesEditorComponent_editor_series_override_4_Template, 1, 2, "editor-series-override", 1);
                i0.ɵɵelementStart(5, "div", 2);
                i0.ɵɵelementStart(6, "button", 3);
                i0.ɵɵlistener("click", function SeriesOverridesEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
                i0.ɵɵelement(7, "i", 4);
                i0.ɵɵtext(8, "\u00A0Add Override ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.overrides);
            }
        }, directives: [i1$1.NgForOf, SeriesOverrideEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SeriesOverridesEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-series-overrides',
                        template: "\n    <div class=\"gf-form-group\">\n      <h5>Series specific overrides </h5>\n\n      <div>\n\n        <editor-series-override *ngFor=\"let t of overrides; let i = index\"\n          [override]=\"t\" \n          [index]=\"i\"\n          (removed)=\"onRemove( $event )\">\n        </editor-series-override>\n\n        <div class=\"gf-form-button-row\">\n          <button class=\"btn btn-inverse\" (click)=\"onAdd()\">\n            <i class=\"fa fa-plus\"></i>&nbsp;Add Override\n          </button>\n        </div>\n        \n      </div>\n    </div>"
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    function ThresholdEditorComponent_ed_color_picker_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-color-picker", 12);
            i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_ed_color_picker_5_Template_ed_color_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.threshold.fillColor = $event; })("selected", function ThresholdEditorComponent_ed_color_picker_5_Template_ed_color_picker_selected_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.refresh(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r0.threshold.fillColor);
        }
    }
    function ThresholdEditorComponent_ed_color_picker_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-color-picker", 13);
            i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_ed_color_picker_7_Template_ed_color_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.threshold.lineColor = $event; })("selected", function ThresholdEditorComponent_ed_color_picker_7_Template_ed_color_picker_selected_0_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.refresh(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r1.threshold.lineColor);
        }
    }
    var ThresholdEditorComponent = /** @class */ (function (_super) {
        __extends(ThresholdEditorComponent, _super);
        function ThresholdEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.removed = new i0.EventEmitter();
            _this.availableOperatorValues = i4.DropDownComponent.wrapEnum(ThresholdOperator);
            _this.availableColorValues = i4.DropDownComponent.wrapEnum(ThresholdColor);
            _this.availableAxisValues = i4.DropDownComponent.wrapEnum(ThresholdAxis);
            return _this;
        }
        Object.defineProperty(ThresholdEditorComponent.prototype, "value", {
            get: function () {
                return this.threshold.value;
            },
            set: function (value) {
                var v = +value;
                this.threshold.value = isNaN(v) || !value ? undefined : v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ThresholdEditorComponent.prototype, "showCustomColors", {
            get: function () {
                return (ThresholdColor.Custom == this.threshold.colorType);
            },
            enumerable: false,
            configurable: true
        });
        return ThresholdEditorComponent;
    }(BaseChartEditorComponent));
    ThresholdEditorComponent.ɵfac = function ThresholdEditorComponent_Factory(t) { return new (t || ThresholdEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    ThresholdEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThresholdEditorComponent, selectors: [["editor-threshold"]], inputs: { threshold: "threshold", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 12, consts: [[1, "ed-form-inline"], ["width", "6", 3, "data", "ngModel", "label", "ngModelChange", "selectionChange"], ["placeholder", "value", "type", "number", "width", "8", 3, "ngModel", "ngModelChange", "changed"], ["label", "Color", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Fill", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Line", 3, "ngModel", "ngModelChange", "checked"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Y-Axis", 3, "data", "ngModel", "ngModelChange", "selectionChange"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected"]], template: function ThresholdEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "ed-dropdown", 1);
                i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_1_listener($event) { return ctx.threshold.operator = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_1_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "ed-textbox", 2);
                i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_textbox_ngModelChange_2_listener($event) { return ctx.value = $event; })("changed", function ThresholdEditorComponent_Template_ed_textbox_changed_2_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-dropdown", 3);
                i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_3_listener($event) { return ctx.threshold.colorType = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_3_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "ed-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.threshold.fill = $event; })("checked", function ThresholdEditorComponent_Template_ed_checkbox_checked_4_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, ThresholdEditorComponent_ed_color_picker_5_Template, 1, 1, "ed-color-picker", 5);
                i0.ɵɵelementStart(6, "ed-checkbox", 6);
                i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_checkbox_ngModelChange_6_listener($event) { return ctx.threshold.line = $event; })("checked", function ThresholdEditorComponent_Template_ed_checkbox_checked_6_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, ThresholdEditorComponent_ed_color_picker_7_Template, 1, 1, "ed-color-picker", 7);
                i0.ɵɵelementStart(8, "ed-dropdown", 8);
                i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_8_listener($event) { return ctx.threshold.axis = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_8_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 9);
                i0.ɵɵelementStart(10, "label", 10);
                i0.ɵɵlistener("click", function ThresholdEditorComponent_Template_label_click_10_listener() { return ctx.removed.emit(ctx.threshold); });
                i0.ɵɵelementStart(11, "a");
                i0.ɵɵelement(12, "i", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵpropertyInterpolate1("label", "T", ctx.index + 1, "");
                i0.ɵɵproperty("data", ctx.availableOperatorValues)("ngModel", ctx.threshold.operator);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.value);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.availableColorValues)("ngModel", ctx.threshold.colorType);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.threshold.fill);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showCustomColors);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.threshold.line);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showCustomColors);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.availableAxisValues)("ngModel", ctx.threshold.axis);
            }
        }, directives: [i4.DropDownComponent, i2.NgControlStatus, i2.NgModel, i4.TextBoxComponent, i4.CheckBoxComponent, i1$1.NgIf, i4.ColorPickerComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ThresholdEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-threshold',
                        templateUrl: './threshold.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, { threshold: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }], removed: [{
                    type: i0.Output
                }] });
    })();

    function ThresholdsEditorComponent_editor_threshold_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "editor-threshold", 6);
            i0.ɵɵlistener("removed", function ThresholdsEditorComponent_editor_threshold_4_Template_editor_threshold_removed_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onRemove($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = ctx.$implicit;
            var i_r2 = ctx.index;
            i0.ɵɵproperty("threshold", t_r1)("index", i_r2);
        }
    }
    var ThresholdsEditorComponent = /** @class */ (function (_super) {
        __extends(ThresholdsEditorComponent, _super);
        function ThresholdsEditorComponent(panel) {
            return _super.call(this, panel) || this;
        }
        ThresholdsEditorComponent.prototype.onAdd = function () {
            var _a;
            this.display.thresholds = (_a = this.thresholds) !== null && _a !== void 0 ? _a : [];
            this.thresholds.push(new Threshold());
        };
        ThresholdsEditorComponent.prototype.onRemove = function (t) {
            var index = this.thresholds.indexOf(t);
            if (-1 !== index) {
                this.thresholds.splice(index, 1);
            }
            this.refresh();
        };
        return ThresholdsEditorComponent;
    }(BaseChartEditorComponent));
    ThresholdsEditorComponent.ɵfac = function ThresholdsEditorComponent_Factory(t) { return new (t || ThresholdsEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    ThresholdsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThresholdsEditorComponent, selectors: [["editor-thresholds"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], ["ng-class", "{'thresholds-form-disabled': ctrl.disabled}"], [3, "threshold", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], ["ng-disabled", "ctrl.disabled", 1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "threshold", "index", "removed"]], template: function ThresholdsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5");
                i0.ɵɵtext(2, "Thresholds");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 1);
                i0.ɵɵtemplate(4, ThresholdsEditorComponent_editor_threshold_4_Template, 1, 2, "editor-threshold", 2);
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵelementStart(6, "button", 4);
                i0.ɵɵlistener("click", function ThresholdsEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
                i0.ɵɵelement(7, "i", 5);
                i0.ɵɵtext(8, "\u00A0Add Threshold ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.thresholds);
            }
        }, directives: [i1$1.NgForOf, ThresholdEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ThresholdsEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-thresholds',
                        template: "\n    <div class=\"gf-form-group\">\n      <h5>Thresholds</h5>\n\n      <div ng-class=\"{'thresholds-form-disabled': ctrl.disabled}\">\n\n        <editor-threshold *ngFor=\"let t of thresholds; let i = index\"\n          [threshold]=\"t\" \n          [index]=\"i\"\n          (removed)=\"onRemove( $event )\">\n        </editor-threshold>\n\n        <div class=\"gf-form-button-row\">\n          <button class=\"btn btn-inverse\" (click)=\"onAdd()\" ng-disabled=\"ctrl.disabled\">\n            <i class=\"fa fa-plus\"></i>&nbsp;Add Threshold\n          </button>\n        </div>\n        \n      </div>\n    </div>"
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    function TimeRegionEditorComponent_ed_color_picker_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-color-picker", 13);
            i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_ed_color_picker_10_Template_ed_color_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.timeRegion.fillColor = $event; })("selected", function TimeRegionEditorComponent_ed_color_picker_10_Template_ed_color_picker_selected_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.refresh(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r0.timeRegion.fillColor);
        }
    }
    function TimeRegionEditorComponent_ed_color_picker_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-color-picker", 14);
            i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_ed_color_picker_12_Template_ed_color_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.timeRegion.lineColor = $event; })("selected", function TimeRegionEditorComponent_ed_color_picker_12_Template_ed_color_picker_selected_0_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.refresh(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r1.timeRegion.lineColor);
        }
    }
    var TimeRegionEditorComponent = /** @class */ (function (_super) {
        __extends(TimeRegionEditorComponent, _super);
        function TimeRegionEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.removed = new i0.EventEmitter();
            _this.availableColors = i4.DropDownComponent.wrapEnum(TimeRegionColor);
            _this.availableDays = i4.DropDownComponent.wrapEnum(TimeRegionDay);
            return _this;
        }
        Object.defineProperty(TimeRegionEditorComponent.prototype, "showCustomColors", {
            get: function () {
                return (TimeRegionColor.Custom == this.timeRegion.colorType);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TimeRegionEditorComponent.prototype, "showCustomFillColor", {
            get: function () {
                return (this.showCustomColors && this.timeRegion.fill);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TimeRegionEditorComponent.prototype, "showCustomLineColor", {
            get: function () {
                return (this.showCustomColors && this.timeRegion.line);
            },
            enumerable: false,
            configurable: true
        });
        TimeRegionEditorComponent.prototype.ngOnInit = function () {
            this.fromTime = this.timeRegion.fromTime;
            this.toTime = this.timeRegion.toTime;
        };
        return TimeRegionEditorComponent;
    }(BaseChartEditorComponent));
    TimeRegionEditorComponent.ɵfac = function TimeRegionEditorComponent_Factory(t) { return new (t || TimeRegionEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    TimeRegionEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeRegionEditorComponent, selectors: [["editor-time-region"]], inputs: { timeRegion: "timeRegion", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 17, vars: 13, consts: [[1, "ed-form-inline"], [1, "gf-form"], [1, "gf-form-label"], ["label", "From", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["placeholder", "hh:mm", "width", "8", 3, "ngModel", "ngModelChange", "focusout"], ["label", "To", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Color", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Fill", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Line", 3, "ngModel", "ngModelChange", "checked"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected"]], template: function TimeRegionEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "label", 2);
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "ed-dropdown", 3);
                i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_4_listener($event) { return ctx.timeRegion.fromDay = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_4_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-textbox", 4);
                i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_textbox_ngModelChange_5_listener($event) { return ctx.fromTime = $event; })("focusout", function TimeRegionEditorComponent_Template_ed_textbox_focusout_5_listener() { ctx.timeRegion.fromTime = ctx.fromTime; return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "ed-dropdown", 5);
                i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_6_listener($event) { return ctx.timeRegion.toDay = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_6_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "ed-textbox", 4);
                i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_textbox_ngModelChange_7_listener($event) { return ctx.toTime = $event; })("focusout", function TimeRegionEditorComponent_Template_ed_textbox_focusout_7_listener() { ctx.timeRegion.toTime = ctx.toTime; return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "ed-dropdown", 6);
                i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_8_listener($event) { return ctx.timeRegion.colorType = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_8_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "ed-checkbox", 7);
                i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_checkbox_ngModelChange_9_listener($event) { return ctx.timeRegion.fill = $event; })("checked", function TimeRegionEditorComponent_Template_ed_checkbox_checked_9_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, TimeRegionEditorComponent_ed_color_picker_10_Template, 1, 1, "ed-color-picker", 8);
                i0.ɵɵelementStart(11, "ed-checkbox", 9);
                i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.timeRegion.line = $event; })("checked", function TimeRegionEditorComponent_Template_ed_checkbox_checked_11_listener() { return ctx.refresh(); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(12, TimeRegionEditorComponent_ed_color_picker_12_Template, 1, 1, "ed-color-picker", 10);
                i0.ɵɵelementStart(13, "div", 1);
                i0.ɵɵelementStart(14, "label", 11);
                i0.ɵɵlistener("click", function TimeRegionEditorComponent_Template_label_click_14_listener() { return ctx.removed.emit(ctx.timeRegion); });
                i0.ɵɵelementStart(15, "a");
                i0.ɵɵelement(16, "i", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1("T", ctx.index + 1, "");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.availableDays)("ngModel", ctx.timeRegion.fromDay);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.fromTime);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.availableDays)("ngModel", ctx.timeRegion.toDay);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.toTime);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.availableColors)("ngModel", ctx.timeRegion.colorType);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.timeRegion.fill);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showCustomFillColor);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.timeRegion.line);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showCustomLineColor);
            }
        }, directives: [i4.DropDownComponent, i2.NgControlStatus, i2.NgModel, i4.TextBoxComponent, i4.CheckBoxComponent, i1$1.NgIf, i4.ColorPickerComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TimeRegionEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-time-region',
                        templateUrl: './time-region.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, { timeRegion: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }], removed: [{
                    type: i0.Output
                }] });
    })();

    function TimeRegionsEditorComponent_editor_time_region_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "editor-time-region", 6);
            i0.ɵɵlistener("removed", function TimeRegionsEditorComponent_editor_time_region_4_Template_editor_time_region_removed_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onRemove($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = ctx.$implicit;
            var i_r2 = ctx.index;
            i0.ɵɵproperty("timeRegion", t_r1)("index", i_r2);
        }
    }
    var TimeRegionsEditorComponent = /** @class */ (function (_super) {
        __extends(TimeRegionsEditorComponent, _super);
        function TimeRegionsEditorComponent(panel) {
            return _super.call(this, panel) || this;
        }
        TimeRegionsEditorComponent.prototype.onAdd = function () {
            var _a;
            this.display.timeRegions = (_a = this.timeRegions) !== null && _a !== void 0 ? _a : [];
            this.timeRegions.push(new TimeRegion());
        };
        TimeRegionsEditorComponent.prototype.onRemove = function (t) {
            var index = this.timeRegions.indexOf(t);
            if (-1 !== index) {
                this.timeRegions.splice(index, 1);
            }
            this.refresh();
        };
        return TimeRegionsEditorComponent;
    }(BaseChartEditorComponent));
    TimeRegionsEditorComponent.ɵfac = function TimeRegionsEditorComponent_Factory(t) { return new (t || TimeRegionsEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    TimeRegionsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeRegionsEditorComponent, selectors: [["editor-time-regions"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], ["ng-class", "{'thresholds-form-disabled': ctrl.disabled}"], [3, "timeRegion", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], ["ng-disabled", "ctrl.disabled", 1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "timeRegion", "index", "removed"]], template: function TimeRegionsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5");
                i0.ɵɵtext(2, "Time regions");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 1);
                i0.ɵɵtemplate(4, TimeRegionsEditorComponent_editor_time_region_4_Template, 1, 2, "editor-time-region", 2);
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵelementStart(6, "button", 4);
                i0.ɵɵlistener("click", function TimeRegionsEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
                i0.ɵɵelement(7, "i", 5);
                i0.ɵɵtext(8, "\u00A0Add Time Region ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.timeRegions);
            }
        }, directives: [i1$1.NgForOf, TimeRegionEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TimeRegionsEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-time-regions',
                        template: "\n  <div class=\"gf-form-group\">\n    <h5>Time regions</h5>\n\n    <div ng-class=\"{'thresholds-form-disabled': ctrl.disabled}\">\n\n      <editor-time-region *ngFor=\"let t of timeRegions; let i = index\"\n        [timeRegion]=\"t\" \n        [index]=\"i\"\n        (removed)=\"onRemove( $event )\">\n      </editor-time-region>\n\n      <div class=\"gf-form-button-row\">\n        <button class=\"btn btn-inverse\" (click)=\"onAdd()\" ng-disabled=\"ctrl.disabled\">\n          <i class=\"fa fa-plus\"></i>&nbsp;Add Time Region\n        </button>\n      </div>\n      \n    </div>\n  </div>"
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    function DisplayEditorComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-draw-options");
        }
    }
    function DisplayEditorComponent_ng_template_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("(", ctx_r7.overrides.length, ")");
        }
    }
    function DisplayEditorComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " Series overrides");
            i0.ɵɵtemplate(1, DisplayEditorComponent_ng_template_4_span_1_Template, 2, 1, "span", 4);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.overrides == null ? null : ctx_r1.overrides.length);
        }
    }
    function DisplayEditorComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-series-overrides");
        }
    }
    function DisplayEditorComponent_ng_template_7_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("(", ctx_r8.thresholds.length, ")");
        }
    }
    function DisplayEditorComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " Thresholds");
            i0.ɵɵtemplate(1, DisplayEditorComponent_ng_template_7_span_1_Template, 2, 1, "span", 4);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.thresholds == null ? null : ctx_r3.thresholds.length);
        }
    }
    function DisplayEditorComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-thresholds");
        }
    }
    function DisplayEditorComponent_ng_template_10_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("(", ctx_r9.timeRegions.length, ")");
        }
    }
    function DisplayEditorComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " Time regions");
            i0.ɵɵtemplate(1, DisplayEditorComponent_ng_template_10_span_1_Template, 2, 1, "span", 4);
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.timeRegions == null ? null : ctx_r5.timeRegions.length);
        }
    }
    function DisplayEditorComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-time-regions");
        }
    }
    var DisplayEditorComponent = /** @class */ (function (_super) {
        __extends(DisplayEditorComponent, _super);
        function DisplayEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.index = 1;
            return _this;
        }
        return DisplayEditorComponent;
    }(BaseChartEditorComponent));
    DisplayEditorComponent.ɵfac = function DisplayEditorComponent_Factory(t) { return new (t || DisplayEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    DisplayEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DisplayEditorComponent, selectors: [["editor-display"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 1, consts: [[3, "ngModel", "ngModelChange"], ["header", "Draw options"], ["edTabContent", ""], ["edTabTitle", ""], ["class", "muted ml-1", 4, "ngIf"], [1, "muted", "ml-1"]], template: function DisplayEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ed-side-tabstrip", 0);
                i0.ɵɵlistener("ngModelChange", function DisplayEditorComponent_Template_ed_side_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; });
                i0.ɵɵelementStart(1, "ed-tab", 1);
                i0.ɵɵtemplate(2, DisplayEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-tab");
                i0.ɵɵtemplate(4, DisplayEditorComponent_ng_template_4_Template, 2, 1, "ng-template", 3);
                i0.ɵɵtemplate(5, DisplayEditorComponent_ng_template_5_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "ed-tab");
                i0.ɵɵtemplate(7, DisplayEditorComponent_ng_template_7_Template, 2, 1, "ng-template", 3);
                i0.ɵɵtemplate(8, DisplayEditorComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "ed-tab");
                i0.ɵɵtemplate(10, DisplayEditorComponent_ng_template_10_Template, 2, 1, "ng-template", 3);
                i0.ɵɵtemplate(11, DisplayEditorComponent_ng_template_11_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngModel", ctx.index);
            }
        }, directives: [i4.SideTabStripComponent, i2.NgControlStatus, i2.NgModel, i4.TabComponent, i4.TabContentTemplate, i4.TabTitleTemplate, DrawOptionsEditorComponent, i1$1.NgIf, SeriesOverridesEditorComponent, ThresholdsEditorComponent, TimeRegionsEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DisplayEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-display',
                        templateUrl: './display.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var _c0 = ["editor"];
    var _c1 = ["suggestions"];
    function AlertQueryParamPickerComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r0.value);
        }
    }
    var _c2 = function (a0) { return { width: a0 }; };
    function AlertQueryParamPickerComponent_input_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 5, 6);
            i0.ɵɵlistener("ngModelChange", function AlertQueryParamPickerComponent_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.value = $event; })("focusout", function AlertQueryParamPickerComponent_input_2_Template_input_focusout_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onEditorFocusOut(); })("keydown", function AlertQueryParamPickerComponent_input_2_Template_input_keydown_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onEditorKeyDown(); })("keyup.enter", function AlertQueryParamPickerComponent_input_2_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r8 = i0.ɵɵnextContext(); ctx_r8.isEditorVisible = false; return ctx_r8.onEditorFocusOut(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, (ctx_r1.value.length + 1) * 8 + "px"))("ngModel", ctx_r1.value);
        }
    }
    var AlertQueryParamPickerComponent = /** @class */ (function () {
        function AlertQueryParamPickerComponent() {
            this.backupValue = '';
            this.isEditorVisible = false;
            this.isSuggestionMenuOpen = false;
            this.pick = new i0.EventEmitter();
            this.valueChange = new i0.EventEmitter();
        }
        Object.defineProperty(AlertQueryParamPickerComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                this._value = v;
                this.valueChange.emit(this._value);
                this.pick.emit(this._value);
            },
            enumerable: false,
            configurable: true
        });
        ;
        AlertQueryParamPickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this
                .items
                .forEach(function (x) { return x.command = function (y) { return _this.onPick(y.item); }; });
        };
        AlertQueryParamPickerComponent.prototype.onShowEditor = function (e) {
            var _this = this;
            this.backupValue = this.value;
            this.isSuggestionMenuOpen = true;
            this.ctrlSuggestions.show(/*this.ctrlEditorElement*/ e);
            setTimeout(function () {
                _this.isEditorVisible = true;
                setTimeout(function () { return _this.ctrlEditorElement.nativeElement.focus(); }, 0);
            }, 0);
        };
        AlertQueryParamPickerComponent.prototype.onEditorFocusOut = function () {
            if (!this.isSuggestionMenuOpen) {
                this.isEditorVisible = false;
                if (!this.value) {
                    this.value = this.backupValue;
                }
            }
        };
        AlertQueryParamPickerComponent.prototype.onEditorKeyDown = function () {
            this.isSuggestionMenuOpen = false;
            this.ctrlSuggestions.hide();
        };
        AlertQueryParamPickerComponent.prototype.onPick = function (e) {
            this.value = this.backupValue = e.label;
            this.isEditorVisible = false;
        };
        return AlertQueryParamPickerComponent;
    }());
    AlertQueryParamPickerComponent.ɵfac = function AlertQueryParamPickerComponent_Factory(t) { return new (t || AlertQueryParamPickerComponent)(); };
    AlertQueryParamPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertQueryParamPickerComponent, selectors: [["query-param-picker"]], viewQuery: function AlertQueryParamPickerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ctrlEditorElement = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ctrlSuggestions = _t.first);
            }
        }, inputs: { items: "items", value: "value" }, outputs: { pick: "pick", valueChange: "valueChange" }, decls: 5, vars: 3, consts: [[1, "pointer", 3, "click"], [4, "ngIf"], ["type", "text", "class", "q__editor", "spellcheck", "false", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter", 4, "ngIf"], [3, "items"], ["suggestions", ""], ["type", "text", "spellcheck", "false", 1, "q__editor", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter"], ["editor", ""]], template: function AlertQueryParamPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵlistener("click", function AlertQueryParamPickerComponent_Template_span_click_0_listener($event) { return ctx.onShowEditor($event); });
                i0.ɵɵtemplate(1, AlertQueryParamPickerComponent_a_1_Template, 2, 1, "a", 1);
                i0.ɵɵtemplate(2, AlertQueryParamPickerComponent_input_2_Template, 2, 4, "input", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "ed-context-menu", 3, 4);
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.isEditorVisible);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isEditorVisible);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("items", ctx.items);
            }
        }, directives: [i1$1.NgIf, i4.ContextMenuComponent, i2.DefaultValueAccessor, i1$1.NgStyle, i2.NgControlStatus, i2.NgModel], styles: [".q__editor[_ngcontent-%COMP%]{background:transparent;border:none;color:#d8d9da;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin:0;padding:0;width:24px}.q__editor[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;outline:none!important;outline-width:0!important}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertQueryParamPickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'query-param-picker',
                        templateUrl: "./param.html",
                        styleUrls: ['./param.scss']
                    }]
            }], null, { items: [{
                    type: i0.Input
                }], ctrlEditorElement: [{
                    type: i0.ViewChild,
                    args: ['editor']
                }], ctrlSuggestions: [{
                    type: i0.ViewChild,
                    args: ["suggestions"]
                }], pick: [{
                    type: i0.Output
                }], valueChange: [{
                    type: i0.Output
                }], value: [{
                    type: i0.Input
                }] });
    })();

    var AlertQueryEditorComponent = /** @class */ (function (_super) {
        __extends(AlertQueryEditorComponent, _super);
        function AlertQueryEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.itemsTarget = [];
            _this.itemsFrom = [
                { label: '10s' },
                { label: '1m' },
                { label: '5m' },
                { label: '10m' },
                { label: '15m' },
                { label: '1h' },
                { label: '24h' },
                { label: '48h' }
            ];
            _this.itemsTo = [
                { label: 'now' },
                { label: 'now-1m' },
                { label: 'now-5m' },
                { label: 'now-10m' },
                { label: 'now-1h' }
            ];
            _this.itemsTarget = _this
                .widget
                .metrics
                .targets
                .map(function (x) { return { label: x.refId }; });
            return _this;
        }
        return AlertQueryEditorComponent;
    }(BaseChartEditorComponent));
    AlertQueryEditorComponent.ɵfac = function AlertQueryEditorComponent_Factory(t) { return new (t || AlertQueryEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    AlertQueryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertQueryEditorComponent, selectors: [["alert-query-editor"]], inputs: { query: "query" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 6, consts: [[1, "gf-form"], [1, "gf-form-label"], [3, "value", "items", "valueChange"]], template: function AlertQueryEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "label", 1);
                i0.ɵɵelementStart(2, "span");
                i0.ɵɵtext(3, "query(");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "query-param-picker", 2);
                i0.ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_4_listener($event) { return ctx.query.target = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "span");
                i0.ɵɵtext(6, ",\u00A0");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "query-param-picker", 2);
                i0.ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_7_listener($event) { return ctx.query.from = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "span");
                i0.ɵɵtext(9, ",\u00A0");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "query-param-picker", 2);
                i0.ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_10_listener($event) { return ctx.query.to = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "span");
                i0.ɵɵtext(12, ")");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("value", ctx.query.target)("items", ctx.itemsTarget);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("value", ctx.query.from)("items", ctx.itemsFrom);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("value", ctx.query.to)("items", ctx.itemsTo);
            }
        }, directives: [AlertQueryParamPickerComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertQueryEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'alert-query-editor',
                        templateUrl: "./query.html"
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, { query: [{
                    type: i0.Input
                }] });
    })();

    function AlertConditionEditorComponent_label_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "label", 13);
            i0.ɵɵtext(1, " WHEN ");
            i0.ɵɵelementEnd();
        }
    }
    function AlertConditionEditorComponent_ed_autocomplete_picker_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-autocomplete-picker", 14);
            i0.ɵɵlistener("pick", function AlertConditionEditorComponent_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_pick_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.condition.operator = $event.toLowerCase(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("request", ctx_r1.operators$)("value", ctx_r1.condition.operator.toUpperCase())("readonly", true);
        }
    }
    function AlertConditionEditorComponent_ed_textbox_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-textbox", 15);
            i0.ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_ed_textbox_11_Template_ed_textbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.evalParamFrom = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r2.evalParamFrom);
        }
    }
    function AlertConditionEditorComponent_ed_textbox_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-textbox", 16);
            i0.ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_ed_textbox_12_Template_ed_textbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.evalParamTo = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r3.evalParamTo);
        }
    }
    var AlertConditionEditorComponent = /** @class */ (function (_super) {
        __extends(AlertConditionEditorComponent, _super);
        function AlertConditionEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.index = 0;
            _this.removed = new i0.EventEmitter();
            _this.AlertEvalTypeRef = [
                'is below',
                'is above',
                'is outside range',
                'is within range',
                'has no value'
            ];
            return _this;
        }
        Object.defineProperty(AlertConditionEditorComponent.prototype, "reducers$", {
            get: function () {
                return rxjs.of(Object.values(i1.AlertReducer));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertConditionEditorComponent.prototype, "evaluators$", {
            get: function () {
                return rxjs.of(__spread(this.AlertEvalTypeRef).map(function (x) { return x.toUpperCase(); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertConditionEditorComponent.prototype, "evaluator", {
            get: function () {
                return this.AlertEvalTypeRef[this.condition.evaluator.type].toUpperCase();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertConditionEditorComponent.prototype, "operators$", {
            get: function () {
                return rxjs.of(Object.values(i1.AlertOperator).map(function (x) { return x.toUpperCase(); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertConditionEditorComponent.prototype, "evaluatorType", {
            get: function () {
                return this.condition.evaluator.type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertConditionEditorComponent.prototype, "showEvalParamFrom", {
            get: function () {
                return (this.evaluatorType != i1.AlertEvalType.HasNoValue);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertConditionEditorComponent.prototype, "showEvalParamTo", {
            get: function () {
                return (this.evaluatorType == i1.AlertEvalType.IsOutsideRange) ||
                    (this.evaluatorType == i1.AlertEvalType.IsWithinRange);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertConditionEditorComponent.prototype, "evalParamFrom", {
            get: function () {
                var _a;
                return (_a = this
                    .condition
                    .evaluator
                    .params[0]) === null || _a === void 0 ? void 0 : _a.toString();
            },
            set: function (p) {
                var from = parseFloat(p);
                var to = parseFloat(this.evalParamTo);
                from = isNaN(from) ? '' : from;
                to = isNaN(to) ? '' : to;
                this.condition.evaluator.params = this.showEvalParamTo ? [from, to] : [from];
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertConditionEditorComponent.prototype, "evalParamTo", {
            get: function () {
                var _a;
                return (_a = this
                    .condition
                    .evaluator
                    .params[1]) === null || _a === void 0 ? void 0 : _a.toString();
            },
            set: function (p) {
                var from = parseFloat(this.evalParamFrom);
                var to = parseFloat(p);
                from = isNaN(from) ? '' : from;
                to = isNaN(to) ? '' : to;
                this.condition.evaluator.params = [from, to];
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        AlertConditionEditorComponent.prototype.onEvaluatorPick = function (e) {
            var _a, _b, _c;
            var index = this
                .AlertEvalTypeRef
                .indexOf(e.toLowerCase());
            if (-1 == index || e == this.evaluator) {
                return;
            }
            this.condition.evaluator.type = index;
            var ev = this.condition.evaluator;
            var p = ev.params;
            switch (ev.type) {
                case i1.AlertEvalType.IsAbove:
                case i1.AlertEvalType.IsBelow:
                    ev.params = [(_a = p[0]) !== null && _a !== void 0 ? _a : ''];
                    break;
                case i1.AlertEvalType.HasNoValue:
                    ev.params = [];
                    break;
                default:
                    ev.params = [(_b = p[0]) !== null && _b !== void 0 ? _b : '', (_c = p[1]) !== null && _c !== void 0 ? _c : ''];
                    break;
            }
            this.refresh();
        };
        return AlertConditionEditorComponent;
    }(BaseChartEditorComponent));
    AlertConditionEditorComponent.ɵfac = function AlertConditionEditorComponent_Factory(t) { return new (t || AlertConditionEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    AlertConditionEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertConditionEditorComponent, selectors: [["editor-alert-condition"]], inputs: { condition: "condition", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 10, consts: [[1, "gf-form-inline"], [1, "gf-form"], ["class", "gf-form-label  query-keyword width-5", 4, "ngIf"], ["valueClass", "query-keyword", "width", "5", 3, "request", "value", "readonly", "pick", 4, "ngIf"], [3, "ngModel", "formatString", "request", "ngModelChange"], [1, "gf-form", "mr-1"], [1, "gf-form-label", "query-keyword"], [3, "query"], ["valueClass", "query-keyword", 3, "value", "request", "pick"], ["width", "9", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["label", "TO", "labelClass", "query-keyword", "width", "9", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], [1, "gf-form-label", "query-keyword", "width-5"], ["valueClass", "query-keyword", "width", "5", 3, "request", "value", "readonly", "pick"], ["width", "9", "type", "number", 3, "ngModel", "ngModelChange"], ["label", "TO", "labelClass", "query-keyword", "width", "9", "type", "number", 3, "ngModel", "ngModelChange"]], template: function AlertConditionEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtemplate(2, AlertConditionEditorComponent_label_2_Template, 2, 0, "label", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, AlertConditionEditorComponent_ed_autocomplete_picker_3_Template, 1, 3, "ed-autocomplete-picker", 3);
                i0.ɵɵelementStart(4, "ed-autocomplete-picker", 4);
                i0.ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.condition.reducer = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵelementStart(6, "label", 6);
                i0.ɵɵtext(7, " OF ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "alert-query-editor", 7);
                i0.ɵɵelement(9, "div", 5);
                i0.ɵɵelementStart(10, "ed-autocomplete-picker", 8);
                i0.ɵɵlistener("pick", function AlertConditionEditorComponent_Template_ed_autocomplete_picker_pick_10_listener($event) { return ctx.onEvaluatorPick($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(11, AlertConditionEditorComponent_ed_textbox_11_Template, 1, 1, "ed-textbox", 9);
                i0.ɵɵtemplate(12, AlertConditionEditorComponent_ed_textbox_12_Template, 1, 1, "ed-textbox", 10);
                i0.ɵɵelementStart(13, "div", 1);
                i0.ɵɵelementStart(14, "label", 11);
                i0.ɵɵlistener("click", function AlertConditionEditorComponent_Template_label_click_14_listener() { return ctx.removed.emit(ctx.condition); });
                i0.ɵɵelement(15, "i", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.index == 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.index != 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.condition.reducer)("formatString", "{0}()")("request", ctx.reducers$);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("query", ctx.condition.query);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("value", ctx.evaluator)("request", ctx.evaluators$);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showEvalParamFrom);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showEvalParamTo);
            }
        }, directives: [i1$1.NgIf, i4.AutoCompletePickerComponent, i2.NgControlStatus, i2.NgModel, AlertQueryEditorComponent, i4.TextBoxComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertConditionEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-alert-condition',
                        templateUrl: './cond.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, { condition: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }], removed: [{
                    type: i0.Output
                }] });
    })();

    function AlertConfigEditorComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "editor-alert-condition", 18);
            i0.ɵɵlistener("removed", function AlertConfigEditorComponent_div_10_Template_editor_alert_condition_removed_1_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onRemoveCondition($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var c_r3 = ctx.$implicit;
            var i_r4 = ctx.index;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("condition", c_r3)("index", i_r4);
        }
    }
    function AlertConfigEditorComponent_ed_progress_32_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ed-progress", 19);
        }
    }
    var AlertConfigEditorComponent = /** @class */ (function (_super) {
        __extends(AlertConfigEditorComponent, _super);
        function AlertConfigEditorComponent(panel, store, dsService) {
            var _this = _super.call(this, panel) || this;
            _this.store = store;
            _this.dsService = dsService;
            _this.availableNoDataOptions = i4.DropDownComponent.wrapEnum(i1.AlertNoDataOption);
            _this.availableErrorOptions = i4.DropDownComponent.wrapEnum(i1.AlertErrorOption);
            _this.storeSubs = store
                .dashboard$
                .subscribe(function (x) { return _this.dashboard = x; });
            return _this;
        }
        AlertConfigEditorComponent.prototype.ngOnDestroy = function () {
            var _a;
            (_a = this.storeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        AlertConfigEditorComponent.prototype.onAddCondition = function () {
            var _a;
            this.alert.conditions = (_a = this.alert.conditions) !== null && _a !== void 0 ? _a : [];
            this.alert.conditions.push(new i1.AlertCondition());
        };
        AlertConfigEditorComponent.prototype.onRemoveCondition = function (c) {
            var index = this.alert.conditions.indexOf(c);
            if (-1 !== index) {
                this.alert.conditions.splice(index, 1);
                this.refresh();
            }
        };
        AlertConfigEditorComponent.prototype.onTestRule = function () {
            var _this = this;
            this.testing = true;
            this.explorer.clean();
            this
                .dsService
                .evalAlert(this.dashboard, this.panel.id)
                .pipe(operators.finalize(function () { return _this.testing = false; }))
                .subscribe(function (x) {
                _this.explorer.content = x;
                if (x.error) {
                    i4.Notes.error(x.error);
                }
            }, function (e) { var _a, _b; return i4.Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : i4.ErrorMessages.BAD_ALERT_EVAL); });
        };
        return AlertConfigEditorComponent;
    }(BaseChartEditorComponent));
    AlertConfigEditorComponent.ɵfac = function AlertConfigEditorComponent_Factory(t) { return new (t || AlertConfigEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DashboardStore), i0.ɵɵdirectiveInject(i1.DashboardService)); };
    AlertConfigEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertConfigEditorComponent, selectors: [["editor-alert-config"]], viewQuery: function AlertConfigEditorComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i4.JsonExplorerComponent, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.explorer = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 36, vars: 10, consts: [[1, "gf-form-group"], [1, "section-heading"], ["label", "Name", "labelWidth", "6", "width", "20", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["label", "Evaluate every", "labelWidth", "9", "width", "6", 3, "ngModel", "ngModelChange"], ["label", "For", "labelWidth", "5", "width", "6", "placeholder", "5m", "hint", "If an alert rule has a configured For and the query violates\n\t\t\t\tthe configured threshold it will first go from OK to Pending. \n\t\t\t\tGoing from OK to Pending Grafana will not send any notifications.\n\t\t\t\tOnce the alert rule has been firing for more than For duration,\n\t\t\t\tit will change to Alerting and send alert notifications. ", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-plus"], [1, "gf-form-label", "width-18"], [1, "gf-form-label", "query-keyword"], ["width", "11", 3, "data", "ngModel", "ngModelChange"], [1, "gf-form-button-row", "ed-flex"], [1, "btn", "btn-inverse", 3, "disabled", "click"], ["message", "evaluating rule...", 4, "ngIf"], ["ng-if", "ctrl.testResult", 1, "gf-form-group"], ["jsonExplorer", ""], [3, "condition", "index", "removed"], ["message", "evaluating rule..."]], template: function AlertConfigEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5", 1);
                i0.ɵɵtext(2, "Alert Config");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-textbox", 2);
                i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_3_listener($event) { return ctx.alert.name = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵelementStart(5, "ed-textbox", 4);
                i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_5_listener($event) { return ctx.alert.frequency = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "ed-textbox", 5);
                i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_6_listener($event) { return ctx.alert.for = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 0);
                i0.ɵɵelementStart(8, "h5", 1);
                i0.ɵɵtext(9, "Conditions");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, AlertConfigEditorComponent_div_10_Template, 2, 2, "div", 6);
                i0.ɵɵelementStart(11, "div", 7);
                i0.ɵɵelementStart(12, "label", 8);
                i0.ɵɵlistener("click", function AlertConfigEditorComponent_Template_label_click_12_listener() { return ctx.onAddCondition(); });
                i0.ɵɵelement(13, "i", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "div", 0);
                i0.ɵɵelementStart(15, "div", 3);
                i0.ɵɵelementStart(16, "div", 7);
                i0.ɵɵelementStart(17, "span", 10);
                i0.ɵɵtext(18, "If no data or all values are null");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "span", 11);
                i0.ɵɵtext(20, "SET STATE TO");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "ed-dropdown", 12);
                i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_dropdown_ngModelChange_21_listener($event) { return ctx.alert.noDataOption = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "div", 3);
                i0.ɵɵelementStart(23, "div", 7);
                i0.ɵɵelementStart(24, "span", 10);
                i0.ɵɵtext(25, "If execution error or timeout");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "span", 11);
                i0.ɵɵtext(27, "SET STATE TO");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "ed-dropdown", 12);
                i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_dropdown_ngModelChange_28_listener($event) { return ctx.alert.errorOption = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "div", 13);
                i0.ɵɵelementStart(30, "button", 14);
                i0.ɵɵlistener("click", function AlertConfigEditorComponent_Template_button_click_30_listener() { return ctx.onTestRule(); });
                i0.ɵɵtext(31, " Test Rule ");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(32, AlertConfigEditorComponent_ed_progress_32_Template, 1, 0, "ed-progress", 15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "div", 16);
                i0.ɵɵelement(34, "ed-json-explorer", null, 17);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.alert.name);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.alert.frequency);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.alert.for);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.alert.conditions);
                i0.ɵɵadvance(11);
                i0.ɵɵproperty("data", ctx.availableNoDataOptions)("ngModel", ctx.alert.noDataOption);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("data", ctx.availableErrorOptions)("ngModel", ctx.alert.errorOption);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("disabled", ctx.testing);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.testing);
            }
        }, directives: [i4.TextBoxComponent, i2.NgControlStatus, i2.NgModel, i1$1.NgForOf, i4.DropDownComponent, i1$1.NgIf, i4.JsonExplorerComponent, AlertConditionEditorComponent, i4.ProgressComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertConfigEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-alert-config',
                        templateUrl: './alert-config.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.DashboardStore }, { type: i1.DashboardService }];
        }, { explorer: [{
                    type: i0.ViewChild,
                    args: [i4.JsonExplorerComponent]
                }] });
    })();

    function AlertNotificationsEditorComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 9);
            i0.ɵɵelement(1, "i", 10);
            i0.ɵɵtext(2);
            i0.ɵɵelementStart(3, "i", 11);
            i0.ɵɵlistener("click", function AlertNotificationsEditorComponent_span_7_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r3_1); var n_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(n_r1); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var n_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            var tmp_0_0 = null;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("\u00A0", (tmp_0_0 = ctx_r0.getChannelById(n_r1)) == null ? null : tmp_0_0.name, "\u00A0 ");
        }
    }
    var AlertNotificationsEditorComponent = /** @class */ (function (_super) {
        __extends(AlertNotificationsEditorComponent, _super);
        function AlertNotificationsEditorComponent(panel, alertService) {
            var _this = this;
            var _a;
            _this = _super.call(this, panel) || this;
            _this.alertService = alertService;
            _this.availableChannels = [];
            _this.alert.notifications = (_a = _this.notifications) !== null && _a !== void 0 ? _a : [];
            _this
                .alertService
                .getNotifications()
                .subscribe(function (x) {
                _this.availableChannels = x;
                _this.alert.notifications = _this
                    .notifications
                    .filter(function (y) { return _this.availableChannels.find(function (z) { return z.id == y; }); });
            }, function (e) { var _a, _b; return i4.Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : i4.ErrorMessages.BAD_GET_ALERT_NOTIFS); });
            return _this;
        }
        Object.defineProperty(AlertNotificationsEditorComponent.prototype, "channels$", {
            get: function () {
                var _this = this;
                return rxjs.of(__spread(this
                    .availableChannels
                    .filter(function (x) { var _a; return !((_a = _this.notifications) === null || _a === void 0 ? void 0 : _a.includes(x.id)); })
                    .map(function (x) { return x.name; })));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertNotificationsEditorComponent.prototype, "notifications", {
            get: function () {
                return this.alert.notifications;
            },
            enumerable: false,
            configurable: true
        });
        AlertNotificationsEditorComponent.prototype.getChannelByName = function (name) {
            return this.availableChannels.find(function (x) { return x.name == name; });
        };
        AlertNotificationsEditorComponent.prototype.getChannelById = function (id) {
            return this.availableChannels.find(function (x) { return x.id == id; });
        };
        AlertNotificationsEditorComponent.prototype.onAdd = function (e) {
            var notif = this.getChannelByName(e);
            if (notif) {
                this.notifications.push(notif.id);
            }
        };
        AlertNotificationsEditorComponent.prototype.onRemove = function (id) {
            var index = this.notifications.findIndex(function (x) { return x == id; });
            if (-1 !== index) {
                this.notifications.splice(index, 1);
            }
        };
        return AlertNotificationsEditorComponent;
    }(BaseChartEditorComponent));
    AlertNotificationsEditorComponent.ɵfac = function AlertNotificationsEditorComponent_Factory(t) { return new (t || AlertNotificationsEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.AlertService)); };
    AlertNotificationsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertNotificationsEditorComponent, selectors: [["editor-alert-notifications"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 3, consts: [[1, "section-heading"], [1, "gf-form-inline"], [1, "gf-form-inline", "max-width-30"], [1, "gf-form"], [1, "gf-form-label", "width-8"], ["class", "gf-form gf-form-label", 4, "ngFor", "ngForOf"], ["placeholder", "fa fa-plus", "readonly", "true", 3, "request", "pick"], [1, "gf-form", "gf-form--v-stretch"], ["rows", "10", "placeholder", "Notification message details...", 1, "gf-form-input", 3, "ngModel", "ngModelChange"], [1, "gf-form", "gf-form-label"], [1, "fa", "fa-bell"], ["ng-if", "nc.isDefault === false", 1, "fa", "fa-remove", "pointer", "muted", 3, "click"]], template: function AlertNotificationsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h5", 0);
                i0.ɵɵtext(1, "Notifications");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵelementStart(5, "span", 4);
                i0.ɵɵtext(6, "Send to");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, AlertNotificationsEditorComponent_span_7_Template, 4, 1, "span", 5);
                i0.ɵɵelementStart(8, "ed-autocomplete-picker", 6);
                i0.ɵɵlistener("pick", function AlertNotificationsEditorComponent_Template_ed_autocomplete_picker_pick_8_listener($event) { return ctx.onAdd($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 7);
                i0.ɵɵelementStart(10, "span", 4);
                i0.ɵɵtext(11, "Message");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "textarea", 8);
                i0.ɵɵlistener("ngModelChange", function AlertNotificationsEditorComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.alert.message = $event; });
                i0.ɵɵtext(13, "\t");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngForOf", ctx.notifications);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("request", ctx.channels$);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.alert.message);
            }
        }, directives: [i1$1.NgForOf, i4.AutoCompletePickerComponent, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertNotificationsEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-alert-notifications',
                        templateUrl: './alert-nots.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.AlertService }];
        }, null);
    })();

    var _c0$1 = function (a0) { return [a0]; };
    function AlertHistoryEditorComponent_div_8_li_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 17);
            i0.ɵɵelementStart(1, "div", 18);
            i0.ɵɵelement(2, "i", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 20);
            i0.ɵɵelementStart(4, "div", 21);
            i0.ɵɵelementStart(5, "div", 22);
            i0.ɵɵelementStart(6, "span", 19);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 23);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 24);
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var a_r4 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0$1, ctx_r2.AlertHelperRef.getStateClass(a_r4.alert.currentState)));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0$1, ctx_r2.AlertHelperRef.getStateIconClass(a_r4.alert.currentState)));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0$1, ctx_r2.AlertHelperRef.getStateClass(a_r4.alert.currentState)));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(a_r4.alert == null ? null : a_r4.alert.currentState);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r2.AlertHelperRef.getInfo(a_r4.alert));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r2.getFormattedTime(a_r4));
        }
    }
    function AlertHistoryEditorComponent_div_8_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "i");
            i0.ɵɵtext(2, "No state changes recorded");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function AlertHistoryEditorComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "ol", 14);
            i0.ɵɵtemplate(2, AlertHistoryEditorComponent_div_8_li_2_Template, 13, 12, "li", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, AlertHistoryEditorComponent_div_8_div_3_Template, 3, 0, "div", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r0.history);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !(ctx_r0.history == null ? null : ctx_r0.history.length));
        }
    }
    var AlertHistoryEditorComponent = /** @class */ (function (_super) {
        __extends(AlertHistoryEditorComponent, _super);
        function AlertHistoryEditorComponent(panel, store, annotService) {
            var _this = _super.call(this, panel) || this;
            _this.store = store;
            _this.annotService = annotService;
            _this.ErrorMessagesRef = i4.ErrorMessages;
            _this.AlertHelperRef = i1.AlertHelper;
            _this.storeSubs = store
                .dashboard$
                .subscribe(function (x) {
                if (x) {
                    _this.dashboardId = x.id;
                    _this.loadHistory();
                }
            });
            return _this;
        }
        AlertHistoryEditorComponent.prototype.ngOnDestroy = function () {
            var _a;
            (_a = this.storeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        AlertHistoryEditorComponent.prototype.loadHistory = function () {
            var _this = this;
            var filter = "dashboardId=" + this.dashboardId + "&panelId=" + this.panel.id + "&limit=50&type=alert";
            this.historyRequest = new i4.ObservableEx(this
                .annotService
                .find(filter)
                .pipe(operators.tap(function (x) { return _this.history = __spread(x); })));
        };
        AlertHistoryEditorComponent.prototype.getFormattedTime = function (a) {
            return i1.Moment.format(a.time);
        };
        AlertHistoryEditorComponent.prototype.onClearHistory = function () {
            var _this = this;
            this.deleting = true;
            this
                .annotService
                .clear(this.dashboardId, +this.panel.id)
                .pipe(operators.finalize(function () { return _this.deleting = _this.deleteDialogOpened = false; }))
                .subscribe(function (x) {
                _this.history = [];
                i4.Notes.success(x.message);
            }, function (e) { var _a, _b; return i4.Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : i4.ErrorMessages.BAD_DELETE_ANNS); });
        };
        return AlertHistoryEditorComponent;
    }(BaseChartEditorComponent));
    AlertHistoryEditorComponent.ɵfac = function AlertHistoryEditorComponent_Factory(t) { return new (t || AlertHistoryEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DashboardStore), i0.ɵɵdirectiveInject(i1.AnnotationService)); };
    AlertHistoryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertHistoryEditorComponent, selectors: [["editor-alert-history"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 24, vars: 8, consts: [[1, "gf-form-group", 2, "max-width", "720px"], [1, "btn", "btn-mini", "btn-danger", "pull-right", 3, "click"], [1, "fa", "fa-trash"], [1, "section-heading", 2, "whitespace", "nowrap"], [1, "muted", "small"], [4, "ngIf", "ngIfElse"], [3, "loadingWrapper", "loadingMessage", "errorMessage"], ["loadOrError", ""], ["header", "Delete Alert History", "headerIcon", "fa fa-trash", 3, "visible", "visibleChange", "close"], [1, "text-center"], [1, "confirm-modal-text"], [1, "gf-form-button-row"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-inverse", 3, "click"], [1, "alert-rule-list"], ["class", "alert-rule-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "alert-rule-item"], [1, "alert-rule-item__icon", 3, "ngClass"], [3, "ngClass"], [1, "alert-rule-item__body"], [1, "alert-rule-item__header"], [1, "alert-rule-item__text-big"], [1, "alert-list-info"], [1, "alert-rule-item__time"]], template: function AlertHistoryEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_1_listener() { return ctx.deleteDialogOpened = true; });
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵtext(3, "\u00A0Clear history");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "h5", 3);
                i0.ɵɵtext(5, " State history ");
                i0.ɵɵelementStart(6, "span", 4);
                i0.ɵɵtext(7, "(last 50 state changes)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, AlertHistoryEditorComponent_div_8_Template, 4, 2, "div", 5);
                i0.ɵɵpipe(9, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "load-or-error", 6, 7);
                i0.ɵɵelementStart(12, "ed-dialog", 8);
                i0.ɵɵlistener("visibleChange", function AlertHistoryEditorComponent_Template_ed_dialog_visibleChange_12_listener($event) { return ctx.deleteDialogOpened = $event; })("close", function AlertHistoryEditorComponent_Template_ed_dialog_close_12_listener() { return ctx.deleteDialogOpened = false; });
                i0.ɵɵelementStart(13, "div", 9);
                i0.ɵɵelementStart(14, "div", 10);
                i0.ɵɵtext(15, "Are you sure you want to remove all history ");
                i0.ɵɵelement(16, "br");
                i0.ɵɵtext(17, "& annotations for this alert?");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "ed-dialog-actions");
                i0.ɵɵelementStart(19, "div", 11);
                i0.ɵɵelementStart(20, "button", 12);
                i0.ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_20_listener() { return ctx.onClearHistory(); });
                i0.ɵɵtext(21, "Delete");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "button", 13);
                i0.ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_22_listener() { return ctx.deleteDialogOpened = false; });
                i0.ɵɵtext(23, "Cancel");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(11);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 6, ctx.historyRequest == null ? null : ctx.historyRequest.data$))("ngIfElse", _r1.template);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("loadingWrapper", ctx.historyRequest)("loadingMessage", "loading alert annotation history...")("errorMessage", ctx.ErrorMessagesRef.BAD_GET_ANNS);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("visible", ctx.deleteDialogOpened);
            }
        }, directives: [i1$1.NgIf, i4.LoadOrErrorComponent, i4.DialogComponent, i4.DialogActionsComponent, i1$1.NgForOf, i1$1.NgClass], pipes: [i1$1.AsyncPipe], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertHistoryEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-alert-history',
                        templateUrl: './alert-history.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.DashboardStore }, { type: i1.AnnotationService }];
        }, null);
    })();

    function AlertEditorComponent_ed_side_tabstrip_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-alert-config");
        }
    }
    function AlertEditorComponent_ed_side_tabstrip_0_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " Notifications ");
        }
    }
    function AlertEditorComponent_ed_side_tabstrip_0_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-alert-notifications");
        }
    }
    function AlertEditorComponent_ed_side_tabstrip_0_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-alert-history");
        }
    }
    function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-dialog", 8);
            i0.ɵɵlistener("close", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_ed_dialog_close_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onClose(); });
            i0.ɵɵelementStart(1, "div", 9);
            i0.ɵɵelementStart(2, "div", 10);
            i0.ɵɵtext(3, " Are you sure you want to delete this alert rule? ");
            i0.ɵɵelementStart(4, "div", 11);
            i0.ɵɵtext(5, " You need to save dashboard for the delete to take effect ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "ed-dialog-actions");
            i0.ɵɵelementStart(7, "button", 12);
            i0.ɵɵlistener("click", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onDelete(); });
            i0.ɵɵtext(8, "Delete");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 13);
            i0.ɵɵlistener("click", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onClose(); });
            i0.ɵɵtext(10, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function AlertEditorComponent_ed_side_tabstrip_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-side-tabstrip", 2);
            i0.ɵɵlistener("ngModelChange", function AlertEditorComponent_ed_side_tabstrip_0_Template_ed_side_tabstrip_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.index = $event; });
            i0.ɵɵelementStart(1, "ed-tab", 3);
            i0.ɵɵtemplate(2, AlertEditorComponent_ed_side_tabstrip_0_ng_template_2_Template, 1, 0, "ng-template", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ed-tab");
            i0.ɵɵtemplate(4, AlertEditorComponent_ed_side_tabstrip_0_ng_template_4_Template, 1, 0, "ng-template", 5);
            i0.ɵɵtemplate(5, AlertEditorComponent_ed_side_tabstrip_0_ng_template_5_Template, 1, 0, "ng-template", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "ed-tab", 6);
            i0.ɵɵtemplate(7, AlertEditorComponent_ed_side_tabstrip_0_ng_template_7_Template, 1, 0, "ng-template", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "ed-tab", 7);
            i0.ɵɵtemplate(9, AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template, 11, 0, "ng-template", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r0.index);
        }
    }
    function AlertEditorComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 14);
            i0.ɵɵelementStart(1, "div", 15);
            i0.ɵɵelementStart(2, "button", 16);
            i0.ɵɵlistener("click", function AlertEditorComponent_ng_template_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onAddAlert(); });
            i0.ɵɵelement(3, "i", 17);
            i0.ɵɵtext(4, " Create Alert ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var AlertEditorComponent = /** @class */ (function (_super) {
        __extends(AlertEditorComponent, _super);
        function AlertEditorComponent(panel) {
            var _this = _super.call(this, panel) || this;
            _this.index = 1;
            _this.toggleAlertHandle(true);
            return _this;
        }
        AlertEditorComponent.prototype.ngOnDestroy = function () {
            this.toggleAlertHandle(false);
        };
        AlertEditorComponent.prototype.onAddAlert = function () {
            this.widget.alert = new i1.AlertRule();
        };
        AlertEditorComponent.prototype.onClose = function () {
            this.index = 0;
        };
        AlertEditorComponent.prototype.onDelete = function () {
            // delete alert
            this.widget.alert = this.panel.alertState = undefined;
            this.refresh();
            this.onClose();
        };
        return AlertEditorComponent;
    }(BaseChartEditorComponent));
    AlertEditorComponent.ɵfac = function AlertEditorComponent_Factory(t) { return new (t || AlertEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    AlertEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertEditorComponent, selectors: [["editor-alert"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["invitation", ""], [3, "ngModel", "ngModelChange"], ["header", "Alert Config"], ["edTabContent", ""], ["edTabTitle", ""], ["header", "State History"], ["header", "Delete"], ["header", "Delete Alert", "headerIcon", "fa fa-trash", "visible", "true", 3, "close"], [1, "text-center"], [1, "confirm-modal-text"], [1, "confirm-modal-text2"], [1, "btn", "btn-danger", 3, "click"], [1, "ml-2", "btn", "btn-inverse", 3, "click"], [1, "gf-form-group"], [1, "gf-form-button-row"], [1, "btn", "btn-inverse", 3, "click"], [1, "icon-gf", "icon-gf-alert"]], template: function AlertEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, AlertEditorComponent_ed_side_tabstrip_0_Template, 10, 1, "ed-side-tabstrip", 0);
                i0.ɵɵtemplate(1, AlertEditorComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                i0.ɵɵproperty("ngIf", ctx.alert)("ngIfElse", _r1);
            }
        }, directives: [i1$1.NgIf, i4.SideTabStripComponent, i2.NgControlStatus, i2.NgModel, i4.TabComponent, i4.TabContentTemplate, i4.TabTitleTemplate, AlertConfigEditorComponent, AlertNotificationsEditorComponent, AlertHistoryEditorComponent, i4.DialogComponent, i4.DialogActionsComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-alert',
                        templateUrl: './alert.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var TimeEditorComponent = /** @class */ (function (_super) {
        __extends(TimeEditorComponent, _super);
        function TimeEditorComponent(panel) {
            return _super.call(this, panel) || this;
        }
        TimeEditorComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b;
            this.form = new i2.FormGroup({
                'from': new i2.FormControl((_a = this.time.from) !== null && _a !== void 0 ? _a : '', this.validateTime.bind(this)),
                'shift': new i2.FormControl((_b = this.time.shift) !== null && _b !== void 0 ? _b : '', this.validateTime.bind(this)),
                'hide': new i2.FormControl(this.time.hide)
            });
            this
                .form
                .valueChanges
                .subscribe(function (v) {
                if (_this.form.valid) {
                    var pull = false;
                    if (_this.time.from !== v.from) {
                        _this.time.from = v.from;
                        pull = true;
                    }
                    if (_this.time.shift !== v.shift) {
                        _this.time.shift = v.shift;
                        pull = true;
                    }
                    if (_this.time.hide !== v.hide) {
                        _this.time.hide = v.hide;
                    }
                    if (pull) {
                        _this.pull();
                    }
                }
            });
        };
        TimeEditorComponent.prototype.validateTime = function (c) {
            if (!c.value) {
                return null;
            }
            var v = "now - " + c.value;
            return (i1.TimeRangeParser.isValid(v)) ? null : { invalidTime: true };
        };
        return TimeEditorComponent;
    }(BaseChartEditorComponent));
    TimeEditorComponent.ɵfac = function TimeEditorComponent_Factory(t) { return new (t || TimeEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    TimeEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeEditorComponent, selectors: [["editor-time"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 22, vars: 1, consts: [[3, "formGroup"], ["f", ""], [1, "section", "gf-form-group"], [1, "ed-form-inline"], [1, "gf-form"], [1, "gf-form-label"], [1, "fa", "fa-clock-o"], [1, "gf-form-label", "width-12"], ["label", "Last", "labelWidth", "6", "width", "8", "placeholder", "1h", "formControlName", "from"], ["label", "Amount", "labelWidth", "6", "width", "8", "placeholder", "1h", "formControlName", "shift"], [1, "gf-form-inline"], ["labelWidth", "12", "width", "6", "label", "Hide time override info", "formControlName", "hide"]], template: function TimeEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0, 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelementStart(5, "span", 5);
                i0.ɵɵelement(6, "i", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "span", 7);
                i0.ɵɵtext(8, "Override relative time");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(9, "ed-textbox", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 3);
                i0.ɵɵelementStart(11, "div", 4);
                i0.ɵɵelementStart(12, "span", 5);
                i0.ɵɵelement(13, "i", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "span", 7);
                i0.ɵɵtext(15, "Add time shift");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(16, "ed-textbox", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div", 10);
                i0.ɵɵelementStart(18, "div", 4);
                i0.ɵɵelementStart(19, "span", 5);
                i0.ɵɵelement(20, "i", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(21, "ed-checkbox", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
            }
        }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i4.TextBoxComponent, i2.NgControlStatus, i2.FormControlName, i4.CheckBoxComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TimeEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-time',
                        templateUrl: './time.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    function ChartEditorComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-general");
        }
    }
    function ChartEditorComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-metrics");
        }
    }
    function ChartEditorComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-axes");
        }
    }
    function ChartEditorComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-legend");
        }
    }
    function ChartEditorComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-display");
        }
    }
    function ChartEditorComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-alert");
        }
    }
    function ChartEditorComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-time");
        }
    }
    var ChartEditorComponent = /** @class */ (function () {
        function ChartEditorComponent(router, activatedRoute, location) {
            var _this = this;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.location = location;
            this.index = 0;
            this.routeSubs = this
                .activatedRoute
                .queryParamMap
                .subscribe(function (params) {
                var p = params.get('tab');
                var n = +p;
                if (Number.isInteger(n)) {
                    _this.index = n;
                }
            });
        }
        ChartEditorComponent.prototype.ngOnDestroy = function () {
            var _a;
            (_a = this.routeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        ChartEditorComponent.prototype.onTabSelected = function (index) {
            var url = this
                .router
                .createUrlTree([], {
                relativeTo: this.activatedRoute,
                queryParams: { tab: index },
                queryParamsHandling: 'merge',
            })
                .toString();
            this.location.go(url);
        };
        return ChartEditorComponent;
    }());
    ChartEditorComponent.ɵfac = function ChartEditorComponent_Factory(t) { return new (t || ChartEditorComponent)(i0.ɵɵdirectiveInject(i1$2.Router), i0.ɵɵdirectiveInject(i1$2.ActivatedRoute), i0.ɵɵdirectiveInject(i1$1.Location)); };
    ChartEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartEditorComponent, selectors: [["widget-editor"]], decls: 15, vars: 1, consts: [["header", "Graph", 3, "ngModel", "ngModelChange", "selected"], ["header", "General"], ["edTabContent", ""], ["header", "Metrics"], ["header", "Axes"], ["header", "Legend"], ["header", "Display"], ["header", "Alert"], ["header", "Time range"]], template: function ChartEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ed-tabstrip", 0);
                i0.ɵɵlistener("ngModelChange", function ChartEditorComponent_Template_ed_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; })("selected", function ChartEditorComponent_Template_ed_tabstrip_selected_0_listener($event) { return ctx.onTabSelected($event); });
                i0.ɵɵelementStart(1, "ed-tab", 1);
                i0.ɵɵtemplate(2, ChartEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-tab", 3);
                i0.ɵɵtemplate(4, ChartEditorComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-tab", 4);
                i0.ɵɵtemplate(6, ChartEditorComponent_ng_template_6_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "ed-tab", 5);
                i0.ɵɵtemplate(8, ChartEditorComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "ed-tab", 6);
                i0.ɵɵtemplate(10, ChartEditorComponent_ng_template_10_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "ed-tab", 7);
                i0.ɵɵtemplate(12, ChartEditorComponent_ng_template_12_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "ed-tab", 8);
                i0.ɵɵtemplate(14, ChartEditorComponent_ng_template_14_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngModel", ctx.index);
            }
        }, directives: [i4.TabStripComponent, i2.NgControlStatus, i2.NgModel, i4.TabComponent, i4.TabContentTemplate, i4.GeneralEditorComponent, i4.MetricsEditorComponent, AxesEditorComponent, LegendEditorComponent, DisplayEditorComponent, AlertEditorComponent, TimeEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'widget-editor',
                        templateUrl: './editor.html'
                    }]
            }], function () { return [{ type: i1$2.Router }, { type: i1$2.ActivatedRoute }, { type: i1$1.Location }]; }, null);
    })();

    var TooltipBuilder = /** @class */ (function () {
        function TooltipBuilder(model, component) {
            this.model = model;
            this.component = component;
            this.ID = "chartjs-tooltip";
            this.TOOLTIP_SELECTOR = "ed-tooltip";
        }
        TooltipBuilder.build = function (comp) {
            Chart.Tooltip.positioners.custom = function (_, event) {
                return {
                    x: event.x,
                    y: event.y
                };
            };
            return {
                mode: 'index',
                position: "custom",
                axis: 'x',
                intersect: false,
                caretSize: 0,
                xPadding: 10,
                bodySpacing: 5,
                titleAlign: 'right',
                enabled: false,
                custom: function (model) { return new TooltipBuilder(model, comp).create(); }
            };
        };
        Object.defineProperty(TooltipBuilder.prototype, "root", {
            get: function () {
                var tooltipEl = document.getElementById(this.ID);
                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = this.ID;
                    tooltipEl.innerHTML = "<div class='graph-tooltip grafana-tooltip " + this.TOOLTIP_SELECTOR + "'></div>";
                    document.body.appendChild(tooltipEl);
                }
                return tooltipEl;
            },
            enumerable: false,
            configurable: true
        });
        TooltipBuilder.prototype.create = function () {
            var tooltipElement = this.root;
            // Hide if no tooltip
            if (this.model.opacity === 0 || this.component.nativeControl.showAnnotView) {
                tooltipElement.style.opacity = '0';
                return;
            }
            tooltipElement.classList.remove('above', 'below', 'no-transform');
            if (this.model.yAlign) {
                tooltipElement.classList.add(this.model.yAlign);
            }
            else {
                tooltipElement.classList.add('no-transform');
            }
            if (this.model.body) {
                this.createBody();
            }
            this.setPosition();
        };
        TooltipBuilder.prototype.setPosition = function () {
            var tooltipElement = this.root;
            var chart = this.component.control.chart;
            var position = chart
                .canvas
                .getBoundingClientRect();
            var elWidth = document
                .getElementsByClassName(this.TOOLTIP_SELECTOR)[0]
                .getBoundingClientRect()
                .width;
            var negMargin = (this.model.caretX + elWidth > position.width) ?
                elWidth + 2 * this.model.xPadding : 0;
            tooltipElement.style.opacity = '1';
            tooltipElement.style.position = 'absolute';
            tooltipElement.style.left = position.left + window.pageXOffset + this.model.caretX - negMargin + 'px';
            tooltipElement.style.top = position.top + window.pageYOffset + this.model.caretY + 'px';
            tooltipElement.style.fontFamily = this.model._bodyFontFamily;
            tooltipElement.style.padding = this.model.yPadding + 'px ' + this.model.xPadding + 'px';
            tooltipElement.style.pointerEvents = 'none';
        };
        TooltipBuilder.prototype.createBody = function () {
            var tooltipElement = this.root;
            var chart = this.component;
            var w = this.component.store.panel.widget;
            var titleLines = this.model.title || [];
            var innerHtml = '';
            titleLines.forEach(function (title) {
                var date = Date.parse(title);
                var time = i1.Moment.format(date);
                innerHtml += "<div class=\"graph-tooltip-time\">" + time + "</div>";
            });
            var parsedBodyLines = this.sort();
            parsedBodyLines.forEach(function (body, i) {
                var seriesName = body.seriesName, value = body.value, color = body.color;
                var seriesNameEl = "\n\t\t\t\t<div class=\"graph-tooltip-series-name\">\n\t\t\t\t\t<i class=\"fa fa-minus\" style=\"color:" + color + ";\"></i> " + seriesName + ":\n\t\t\t\t</div>";
                var ds = chart
                    .data
                    .datasets
                    .find(function (x) { return x.label == seriesName; });
                var axis = (ds.yAxisID == AXIS_Y_LEFT) ? w.axes.leftY : w.axes.rightY;
                var decimals = w.legend.decimals ? w.legend.decimals : 1;
                var resValue = AxisUnitHelper.getFormattedValue(value, axis.unit, decimals);
                var valueEl = "<div class=\"graph-tooltip-value \">" + resValue + "</div>";
                var item = "\n\t\t\t\t<div class=\"graph-tooltip-list-item\">\n\t\t\t\t\t" + seriesNameEl + "\n\t\t\t\t\t" + valueEl + "\n\t\t\t\t</div>";
                innerHtml += item;
            });
            var tableRoot = tooltipElement.querySelector("." + this.TOOLTIP_SELECTOR);
            tableRoot.innerHTML = innerHtml;
        };
        TooltipBuilder.prototype.sort = function () {
            var _this = this;
            function getBody(bodyItem) {
                return bodyItem.lines;
            }
            var bodyLines = this.model.body.map(getBody);
            var sortOrder = this
                .component
                .widget
                .display
                .tooltipSortOrder;
            var parsedBodyLines = [];
            bodyLines.forEach(function (body, i) {
                var colors = _this.model.labelColors[i];
                var color = i4.ColorHelper.hexToRgbString(colors.backgroundColor);
                var index = body[0].lastIndexOf(':');
                var seriesName = body[0].substring(0, index);
                var value = parseFloat(_this.model.dataPoints[i].value);
                parsedBodyLines.push({ seriesName: seriesName, value: value, color: color });
            });
            switch (sortOrder) {
                case TooltipSortOrder.Increasing:
                    parsedBodyLines.sort(function (a, b) { return a.value - b.value; });
                    break;
                case TooltipSortOrder.Decreasing:
                    parsedBodyLines.sort(function (a, b) { return b.value - a.value; });
                    break;
            }
            var res = parsedBodyLines.filter(function (x) {
                var _a;
                return !((_a = _this
                    .component
                    .display
                    .getOverrideByLabel(x.seriesName)) === null || _a === void 0 ? void 0 : _a.hideInTooltip);
            });
            return res;
        };
        return TooltipBuilder;
    }());

    var OptionsProvider = /** @class */ (function () {
        function OptionsProvider() {
        }
        OptionsProvider.getOptions = function (comp) {
            Chart.defaults.global.defaultFontColor = '#e3e3e3';
            Chart.defaults.global.defaultFontFamily = 'Roboto';
            Chart.defaults.global.defaultFontSize = 11;
            var w = comp.widget;
            return {
                maintainAspectRatio: false,
                animation: false,
                tooltips: TooltipBuilder.build(comp),
                legend: {
                    display: false
                },
                spanGaps: true,
                scales: {
                    xAxes: [this.getAxisX(w)],
                    yAxes: [this.getAxisY(w, true), this.getAxisY(w, false)]
                },
                onHover: function (e) { return comp.store.mouse.move(e); }
            };
        };
        OptionsProvider.getAxisX = function (w) {
            return {
                id: AXIS_X,
                type: 'time',
                gridLines: {
                    color: 'rgba( 255,255,255, 0.1)',
                },
                ticks: {
                    autoSkip: true,
                    autoSkipPadding: 50,
                    maxRotation: 0,
                    minRotation: 0,
                },
                time: {
                    displayFormats: {
                        second: 'HH:mm:ss',
                        minute: 'HH:mm',
                        hour: 'HH:mm',
                        day: 'M/D HH:mm',
                        week: 'M/D',
                        month: 'M/D',
                        year: 'YYYY-M',
                    },
                },
                display: w.axes.x.show
            };
        };
        OptionsProvider.getAxisY = function (w, left) {
            var wAxis = left ? w.axes.leftY : w.axes.rightY;
            var id = left ? AXIS_Y_LEFT : AXIS_Y_RIGHT;
            var axis = {
                id: id,
                display: wAxis.show,
                type: (!wAxis.scale || wAxis.scale == ScaleType.Linear) ? "linear" : "logarithmic",
                gridLines: {
                    color: 'rgba( 255,255,255, 0.1)',
                    zeroLineWidth: 3,
                },
                position: left ? "left" : "right",
                scaleLabel: {
                    display: wAxis.label,
                    labelString: wAxis.label,
                },
                ticks: {
                    min: wAxis.min,
                    max: wAxis.max,
                    userCallback: function (label, index, labels) {
                        if (labels.length > 8 && !(index % 2)) {
                            return;
                        }
                        return AxisUnitHelper.getFormattedValue(label, wAxis.unit, wAxis.decimals);
                    }
                },
                stacked: w.display.stack,
            };
            return axis;
        };
        return OptionsProvider;
    }());

    var DisplayManager = /** @class */ (function () {
        function DisplayManager(panel) {
            this.panel = panel;
        }
        Object.defineProperty(DisplayManager.prototype, "display", {
            get: function () {
                return this
                    .panel
                    .widget
                    .display;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DisplayManager.prototype, "options", {
            get: function () {
                return this
                    .panel
                    .widget
                    .component
                    .control
                    .chart
                    .options;
            },
            enumerable: false,
            configurable: true
        });
        DisplayManager.prototype.setup = function (ds) {
            this.setupLines(ds);
            this.setupPoints(ds);
            this.setupNullValue(ds);
        };
        DisplayManager.prototype.setupLines = function (ds) {
            var showLines = this.getShowLines(ds);
            var lineWidth = this.getLineWidth(ds);
            var fill = this.getFill(ds);
            var opacity = (fill / 10);
            ds.fill = ( /*showLines &&*/fill > 0);
            ds.backgroundColor = this.getLineColor(ds, opacity);
            opacity = (showLines && lineWidth) ? 1 : 0;
            ds.borderColor = this.getLineColor(ds, opacity);
            ds.borderWidth = lineWidth;
            ds.steppedLine = this.getStaircase(ds);
            if (this.getDashes(ds)) {
                var len = this.getDashLength(ds);
                var space = this.getDashSpace(ds);
                ds.borderDash = [len, space];
            }
            else {
                ds.borderDash = undefined;
            }
            ds.order = this.getZIndex(ds);
            ds.legend = this.getLegend(ds);
            ds.yAxisID = (1 == this.getYAxis(ds)) ? AXIS_Y_LEFT : AXIS_Y_RIGHT;
        };
        DisplayManager.prototype.setupPoints = function (ds) {
            var showPoints = this.getShowPoints(ds);
            var opacity = showPoints ? 1 : 0;
            var color = this.getLineColor(ds, opacity);
            ds.pointBorderColor = "" + color;
            ds.pointBackgroundColor = "" + color;
            ds.pointRadius = showPoints ? this.getPointRadius(ds) : 0;
        };
        DisplayManager.prototype.setupNullValue = function (ds) {
            switch (this.display.nullValue) {
                case DataPointNullValueOption.Connected:
                    this.options.spanGaps = true;
                    ds.data.forEach(function (p) { return p.y = p.isNull ? null : p.y; });
                    break;
                case DataPointNullValueOption.Null:
                    this.options.spanGaps = false;
                    ds.data.forEach(function (p) { return p.y = p.isNull ? null : p.y; });
                    break;
                case DataPointNullValueOption.NullAsZero:
                    this.options.spanGaps = false;
                    ds.data.forEach(function (p) { return p.y = p.isNull ? 0 : p.y; });
                    break;
            }
        };
        DisplayManager.prototype.getShowLines = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.lines) ? o.lines : this.display.showLines;
        };
        DisplayManager.prototype.getLineWidth = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.lineWidth) ? o.lineWidth : this.display.lineWidth;
        };
        DisplayManager.prototype.getLineColor = function (ds, opacity) {
            var o = this.getOverride(ds);
            var color = i4.ColorHelper.colors[ds.index % i4.ColorHelper.colors.length];
            var defaultColor = i4.ColorHelper.hexToRgbString(color, opacity);
            var useOverride = (o && undefined != o.color);
            var overrideColor;
            if (useOverride) {
                overrideColor = i4.ColorHelper.hexToRgbString(o.color, opacity);
            }
            return (useOverride) ? overrideColor : defaultColor;
        };
        DisplayManager.prototype.getFill = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.lineFill) ? o.lineFill : this.display.fill;
        };
        DisplayManager.prototype.getStaircase = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.staircase) ? o.staircase : this.display.staircase;
        };
        DisplayManager.prototype.getDashes = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.dashes) ? o.dashes : false;
        };
        DisplayManager.prototype.getDashLength = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.dashLength) ? o.dashLength : 1;
        };
        DisplayManager.prototype.getDashSpace = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.dashSpace) ? o.dashSpace : 1;
        };
        DisplayManager.prototype.getShowPoints = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.points) ? o.points : this.display.showPoints;
        };
        DisplayManager.prototype.getPointRadius = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.pointRadius) ? o.pointRadius : this.display.pointRadius;
        };
        DisplayManager.prototype.getLegend = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.legend) ? o.legend : true;
        };
        DisplayManager.prototype.getZIndex = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.zIndex) ? o.zIndex : 0;
        };
        DisplayManager.prototype.getYAxis = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.yAxis) ? o.yAxis : 1;
        };
        DisplayManager.prototype.getOverride = function (ds) {
            return this.getOverrideByLabel(ds.label);
        };
        DisplayManager.prototype.getOverrideByLabel = function (label) {
            var _a;
            return (_a = this
                .display
                .overrides) === null || _a === void 0 ? void 0 : _a.find(function (x) { return x.alias && new RegExp(x.alias).test(label); });
        };
        return DisplayManager;
    }());
    DisplayManager.ɵfac = function DisplayManager_Factory(t) { return new (t || DisplayManager)(i0.ɵɵinject(i1.PANEL_TOKEN)); };
    DisplayManager.ɵprov = i0.ɵɵdefineInjectable({ token: DisplayManager, factory: DisplayManager.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DisplayManager, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var DataConverter = /** @class */ (function () {
        function DataConverter(dispay) {
            this.dispay = dispay;
        }
        DataConverter.prototype.toDataSets = function (data) {
            var _this = this;
            if (!data || 0 === data.length) {
                return [];
            }
            var dataSets = [];
            var totalIndex = 0;
            data.forEach(function (serie) {
                var columns = serie.columns.slice(1);
                var arr = __spread(columns.map(function (el, index) { return _this.toDataSet(serie, index + 1, totalIndex++); })).filter(function (x) { return x; });
                dataSets = __spread(dataSets, arr);
                dataSets.forEach(function (x) { return _this.dispay.setup(x); });
            });
            return dataSets;
        };
        DataConverter.prototype.toDataSet = function (serie, index, totalIndex) {
            var values = serie
                .values
                .map(function (x) {
                var isNull = (null == x[index]);
                return {
                    x: i1.Moment.valueOf(x[0]),
                    y: (isNull) ? x[index] : x[index],
                    isNull: isNull,
                };
            });
            var filteredValues = values
                .map(function (p) { return p.y; })
                .filter(function (p) { return null != p; })
                .map(function (p) { return parseFloat(p); });
            if (0 == filteredValues.length) {
                return;
            }
            var avg = (filteredValues.reduce(function (a, b) { return a + b; }) / filteredValues.length);
            var allNulls = filteredValues.every(function (x) { return x == null; });
            var allZeros = filteredValues.every(function (x) { return x == 0; });
            var ds = {
                label: this.generateDataSetName(serie, index),
                data: values,
                lineTension: 0,
                min: Math.min.apply(Math, __spread(filteredValues)),
                max: Math.max.apply(Math, __spread(filteredValues)),
                avg: avg,
                current: filteredValues.slice(-1)[0],
                allNulls: allNulls,
                allZeros: allZeros,
                index: totalIndex,
                pointRadius: 0,
                borderColor: "#ff0000"
                //widget: this.chart.widget,
            };
            //ds.borderColor = new ColorHelper().getColorAsArgbFunc( ds, 1 );
            //console.log( ds.borderColor );
            //this.display.setup(ds);
            return ds;
        };
        DataConverter.prototype.generateDataSetName = function (serie, index) {
            var root = serie.name + "." + serie.columns[index];
            var tags = '';
            var keys = Object.keys(serie.tags);
            var keyIndex = 0;
            for (var key in serie.tags) {
                tags += "" + (keyIndex > 0 ? ', ' : '') + key + ": " + serie.tags[key];
                keyIndex++;
            }
            // serie.tags.forEach( ( t, index ) => tags = `${tags}${index > 0 ? ',': ''} tag` )
            if (tags) {
                root = root + " {" + tags + "}";
            }
            return root;
        };
        return DataConverter;
    }());
    DataConverter.ɵfac = function DataConverter_Factory(t) { return new (t || DataConverter)(i0.ɵɵinject(DisplayManager)); };
    DataConverter.ɵprov = i0.ɵɵdefineInjectable({ token: DataConverter, factory: DataConverter.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataConverter, [{
                type: i0.Injectable
            }], function () { return [{ type: DisplayManager }]; }, null);
    })();

    var DataProvider = /** @class */ (function () {
        function DataProvider(pluginActivator, dsService, converter, time, panel) {
            var _this = this;
            var _a;
            this.pluginActivator = pluginActivator;
            this.dsService = dsService;
            this.converter = converter;
            this.time = time;
            this.panel = panel;
            this.data$ = new i0.EventEmitter();
            this.panel.widget = (_a = this.panel.widget) !== null && _a !== void 0 ? _a : new Chart$1();
            this.timeSubs = this
                .time
                .range$
                .pipe(
            //tap( _ => this.request = '' ),
            operators.mergeMap(function (_) { return _this.pluginActivator.createDataSourceMetricsBuilder(panel); }), operators.mergeMap(function (mb) { return mb.build(_this.metrics, _this.range); }))
                .subscribe(function (x) { return _this.pull(x); }, function (e) { return _this.onError(e); });
        }
        Object.defineProperty(DataProvider.prototype, "metrics", {
            get: function () {
                var _a, _b;
                return (_b = (_a = this
                    .panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.metrics;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataProvider.prototype, "range", {
            get: function () {
                var _a, _b;
                var range = this.time.range.raw;
                var mod = (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.time;
                return this
                    .time
                    .converter
                    .modify(range, mod);
            },
            enumerable: false,
            configurable: true
        });
        DataProvider.prototype.destroy = function () {
            var _a;
            (_a = this.timeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        DataProvider.prototype.update = function () {
            this.time.tick();
        };
        DataProvider.prototype.pull = function (request) {
            var _this = this;
            // if (this.request === request) {
            // 	return;
            // }
            this.request = request;
            if (request) {
                console.log("pull: " + request);
            }
            if (!request) {
                this.onData([]);
            }
            else {
                this.panel.loading = true;
                this
                    .dsService
                    .proxy(this.metrics.dataSource, request)
                    .pipe(operators.finalize(function () { return _this.panel.loading = false; }))
                    .subscribe(function (x) { return _this.onData(x); }, function (e) { var _a, _b; return _this.onError((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.details) !== null && _b !== void 0 ? _b : "error: todo"); });
            }
        };
        DataProvider.prototype.onData = function (x) {
            this.panel.error = undefined;
            this.data$.emit({
                datasets: this.converter.toDataSets(x)
            });
        };
        DataProvider.prototype.onError = function (err) {
            console.log(err);
            this.panel.error = err;
            this.data$.emit({
                datasets: []
            });
        };
        return DataProvider;
    }());
    DataProvider.ɵfac = function DataProvider_Factory(t) { return new (t || DataProvider)(i0.ɵɵinject(i1.PluginActivator), i0.ɵɵinject(i1.DataSourceService), i0.ɵɵinject(DataConverter), i0.ɵɵinject(i1.TimeRangeStore), i0.ɵɵinject(i1.PANEL_TOKEN)); };
    DataProvider.ɵprov = i0.ɵɵdefineInjectable({ token: DataProvider, factory: DataProvider.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataProvider, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i1.PluginActivator }, { type: i1.DataSourceService }, { type: DataConverter }, { type: i1.TimeRangeStore }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var MouseStore = /** @class */ (function () {
        function MouseStore(panel, time) {
            this.panel = panel;
            this.time = time;
            this._down = new rxjs.BehaviorSubject(null);
            this.down$ = this._down.asObservable();
            this._up = new rxjs.BehaviorSubject(null);
            this.up$ = this._up.asObservable();
            this.drag = new rxjs.BehaviorSubject(null);
            this.drag$ = this.drag.asObservable();
            this.hover = new rxjs.BehaviorSubject(null);
            this.hover$ = this.hover.asObservable();
        }
        Object.defineProperty(MouseStore.prototype, "component", {
            get: function () {
                var _a;
                return (_a = this
                    .panel
                    .widget) === null || _a === void 0 ? void 0 : _a.component;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MouseStore.prototype, "chart", {
            get: function () {
                return this
                    .component
                    .control
                    .chart;
            },
            enumerable: false,
            configurable: true
        });
        MouseStore.prototype.down = function (s) {
            this.drag.next({
                start: s,
                end: s /*!? */
            });
            this._down.next(s);
            s.target.setPointerCapture(1);
        };
        MouseStore.prototype.up = function (e) {
            e.target.releasePointerCapture(1);
            this._up.next(e);
            if (!e.ctrlKey) {
                this.zoomIn();
            }
            this.drag.next(undefined);
            this.refresh();
        };
        MouseStore.prototype.move = function (m) {
            this.hover.next(m);
            var d = this.drag.value;
            if (!d) {
                return;
            }
            this.drag.next({
                start: d.start,
                end: m
            });
        };
        MouseStore.prototype.leave = function (e) {
            this.hover.next(undefined);
            this.refresh();
        };
        MouseStore.prototype.refresh = function () {
            this.component.control.refresh();
        };
        MouseStore.prototype.zoomIn = function () {
            var scaleX = this.chart.scales[AXIS_X];
            if (!this.drag.value.end) {
                return;
            }
            var sx = this.drag.value.start.offsetX;
            var ex = this.drag.value.end.offsetX;
            var start = Math.min(sx, ex);
            var end = Math.max(sx, ex);
            var os = Math.max(start, scaleX.left);
            var oe = Math.max(scaleX.left, Math.min(end, scaleX.right));
            if (Math.abs(os - oe) == 0) {
                return;
            }
            var from = scaleX.getValueForPixel(os);
            var to = scaleX.getValueForPixel(oe);
            var minsDiff = Math.abs(from.diff(to, "minutes"));
            if (minsDiff >= 1) {
                this.time.zoom({ from: from, to: to });
            }
        };
        return MouseStore;
    }());
    MouseStore.ɵfac = function MouseStore_Factory(t) { return new (t || MouseStore)(i0.ɵɵinject(i1.PANEL_TOKEN), i0.ɵɵinject(i1.TimeRangeStore)); };
    MouseStore.ɵprov = i0.ɵɵdefineInjectable({ token: MouseStore, factory: MouseStore.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MouseStore, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.TimeRangeStore }];
        }, null);
    })();

    var ChartStore = /** @class */ (function () {
        function ChartStore(dashboardStore, dataProvider, display, annotationStore, mouse, panel) {
            var _this = this;
            this.dashboardStore = dashboardStore;
            this.dataProvider = dataProvider;
            this.display = display;
            this.annotationStore = annotationStore;
            this.mouse = mouse;
            this.panel = panel;
            this.data = new rxjs.BehaviorSubject(null);
            this.data$ = this.data.asObservable();
            dataProvider
                .data$
                .subscribe(function (x) { var _a; return _this.data.next((_a = x === null || x === void 0 ? void 0 : x.datasets) !== null && _a !== void 0 ? _a : []); });
            this.dashboardSubs = dashboardStore
                .dashboard$
                .subscribe(function (x) { return _this.dashboard = x; });
            this.annotSubs = annotationStore
                .annotationsUpdate$
                .subscribe(function (_) { return _this.refresh(); });
        }
        Object.defineProperty(ChartStore.prototype, "widget", {
            get: function () {
                return this.panel.widget;
            },
            enumerable: false,
            configurable: true
        });
        ChartStore.prototype.destroy = function () {
            var _a, _b;
            (_a = this.dashboardSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            (_b = this.annotSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
            this.dataProvider.destroy();
            this.widget.component = undefined;
        };
        ChartStore.prototype.refresh = function () {
            var _a, _b;
            (_b = (_a = this
                .widget
                .component) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.refresh();
        };
        return ChartStore;
    }());
    ChartStore.ɵfac = function ChartStore_Factory(t) { return new (t || ChartStore)(i0.ɵɵinject(i1.DashboardStore), i0.ɵɵinject(DataProvider), i0.ɵɵinject(DisplayManager), i0.ɵɵinject(i1.AnnotationStore), i0.ɵɵinject(MouseStore), i0.ɵɵinject(i1.PANEL_TOKEN)); };
    ChartStore.ɵprov = i0.ɵɵdefineInjectable({ token: ChartStore, factory: ChartStore.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartStore, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i1.DashboardStore }, { type: DataProvider }, { type: DisplayManager }, { type: i1.AnnotationStore }, { type: MouseStore }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var BaseChartComponent = /** @class */ (function () {
        function BaseChartComponent(store) {
            var _this = this;
            this.store = store;
            this.dataSubs = store
                .data$
                .subscribe(function (x) { return _this.data = {
                datasets: x
            }; });
        }
        Object.defineProperty(BaseChartComponent.prototype, "dashboardId", {
            get: function () {
                return this.store.dashboard.id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "panel", {
            get: function () {
                return this.store.panel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "widget", {
            get: function () {
                return this.store.widget;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "datasets", {
            get: function () {
                var _a;
                return (_a = this.data) === null || _a === void 0 ? void 0 : _a.datasets;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "display", {
            get: function () {
                return this.store.display;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "component", {
            get: function () {
                return this.widget.component;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "nativeControl", {
            get: function () {
                return this.component.control.chart;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "scales", {
            get: function () {
                return this.nativeControl.scales;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "annotations", {
            get: function () {
                return this.panel.annotations;
            },
            enumerable: false,
            configurable: true
        });
        BaseChartComponent.prototype.ngOnDestroy = function () {
            var _a;
            (_a = this.dataSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        BaseChartComponent.prototype.refresh = function () {
            this.store.refresh();
        };
        return BaseChartComponent;
    }());
    BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(i0.ɵɵdirectiveInject(ChartStore)); };
    BaseChartComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartComponent });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BaseChartComponent, [{
                type: i0.Directive
            }], function () { return [{ type: ChartStore }]; }, null);
    })();

    var ChartJsExtension = /** @class */ (function () {
        function ChartJsExtension(store) {
            this.store = store;
        }
        Object.defineProperty(ChartJsExtension.prototype, "widget", {
            get: function () {
                return this.store.widget;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ChartJsExtension.prototype, "dashboard", {
            get: function () {
                return this.store.dashboard;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ChartJsExtension.prototype, "panel", {
            get: function () {
                return this.store.panel;
            },
            enumerable: false,
            configurable: true
        });
        ChartJsExtension.prototype.afterDatasetsDraw = function (chart, easing) {
        };
        ChartJsExtension.prototype.finalize = function () {
        };
        return ChartJsExtension;
    }());
    ChartJsExtension.ɵfac = function ChartJsExtension_Factory(t) { return new (t || ChartJsExtension)(i0.ɵɵdirectiveInject(ChartStore)); };
    ChartJsExtension.ɵdir = i0.ɵɵdefineDirective({ type: ChartJsExtension });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartJsExtension, [{
                type: i0.Directive
            }], function () { return [{ type: ChartStore }]; }, null);
    })();
    var BaseDrawer = /** @class */ (function () {
        function BaseDrawer(chart) {
            this.chart = chart;
        }
        Object.defineProperty(BaseDrawer.prototype, "context", {
            get: function () {
                return this.chart.chart.ctx;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseDrawer.prototype, "canvas", {
            get: function () {
                return this.chart.canvas;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseDrawer.prototype, "scaleY", {
            get: function () {
                return this.chart.scales[AXIS_Y_LEFT];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseDrawer.prototype, "scaleX", {
            get: function () {
                return this.chart.scales[AXIS_X];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseDrawer.prototype, "minY", {
            get: function () {
                return this.scaleY.top;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseDrawer.prototype, "maxY", {
            get: function () {
                return this.scaleY.bottom;
            },
            enumerable: false,
            configurable: true
        });
        BaseDrawer.prototype.alignPixel = function (pixel, width) {
            var devicePixelRatio = this.chart.currentDevicePixelRatio;
            var halfWidth = width / 2;
            return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
        };
        ;
        return BaseDrawer;
    }());

    var ThresholdDrawerPlugin = /** @class */ (function (_super) {
        __extends(ThresholdDrawerPlugin, _super);
        function ThresholdDrawerPlugin(store) {
            return _super.call(this, store) || this;
        }
        ThresholdDrawerPlugin.prototype.afterDatasetsDraw = function (chart, _) {
            var _a, _b, _c;
            (_c = (_b = (_a = this
                .widget) === null || _a === void 0 ? void 0 : _a.display) === null || _b === void 0 ? void 0 : _b.thresholds) === null || _c === void 0 ? void 0 : _c.forEach(function (t) { return new ThresholdDrawer(chart, t).draw(); });
        };
        return ThresholdDrawerPlugin;
    }(ChartJsExtension));
    ThresholdDrawerPlugin.ɵfac = function ThresholdDrawerPlugin_Factory(t) { return new (t || ThresholdDrawerPlugin)(i0.ɵɵinject(ChartStore)); };
    ThresholdDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: ThresholdDrawerPlugin, factory: ThresholdDrawerPlugin.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ThresholdDrawerPlugin, [{
                type: i0.Injectable
            }], function () { return [{ type: ChartStore }]; }, null);
    })();
    var ThresholdDrawer = /** @class */ (function (_super) {
        __extends(ThresholdDrawer, _super);
        function ThresholdDrawer(chart, threshold) {
            var _this = _super.call(this, chart) || this;
            _this.threshold = threshold;
            return _this;
        }
        ThresholdDrawer.prototype.draw = function () {
            if (this.threshold.value == undefined) {
                return;
            }
            var scaleYA = this.chart.scales[AXIS_Y_LEFT];
            var scaleYB = this.chart.scales[AXIS_Y_RIGHT];
            var scaleX = this.chart.scales[AXIS_X];
            var scaleY = (this.threshold.axis == ThresholdAxis.Right && scaleYB) ?
                scaleYB : scaleYA;
            var offset = scaleY.getPixelForValue(this.threshold.value);
            var gt = (this.threshold.operator == ThresholdOperator.Gt);
            var shouldIgnore = (!gt && this.threshold.value < scaleY.min) ||
                (gt && this.threshold.value > scaleY.max) ||
                (!this.chart.data.datasets.length);
            if (shouldIgnore) {
                return;
            }
            // if( offset < 0 || offset > scaleY.bottom ){
            // 	return;
            // }
            //console.log( `${offset} | ${scaleY.bottom}` )  
            if (this.threshold.line) {
                var lineColor = this.getColor(false);
                this.renderLine(scaleX, lineColor, offset);
            }
            if (this.threshold.fill) {
                this.renderRectangle(scaleX, scaleY, offset);
            }
        };
        ThresholdDrawer.prototype.renderLine = function (scaleX, color, offset) {
            this.context.beginPath();
            this.context.strokeStyle = color + "99";
            this.context.lineWidth = 2;
            this.context.moveTo(scaleX.left, offset);
            this.context.lineTo(scaleX.right, offset);
            this.context.stroke();
        };
        ThresholdDrawer.prototype.renderRectangle = function (scaleX, scaleY, offset) {
            var color = this.getColor(true);
            var gt = (this.threshold.operator == ThresholdOperator.Gt);
            this.context.fillStyle = color + "22";
            var x = scaleX.left;
            var w = scaleX.width;
            var topY = scaleY.getPixelForValue(scaleY.max);
            var bottomY = scaleY.getPixelForValue(scaleY.min);
            var y = gt ? topY : Math.max(topY, offset);
            var h = gt ? offset - scaleY.top : scaleY.bottom - offset;
            h = Math.min(bottomY - topY, h);
            this.context.fillRect(x, y, w, h);
        };
        ThresholdDrawer.prototype.getColor = function (fill) {
            switch (this.threshold.colorType) {
                case ThresholdColor.Critical:
                    return '#ED2E18';
                case ThresholdColor.Ok:
                    return '#10a345';
                case ThresholdColor.Warning:
                    return '#f79520';
            }
            var defaultColor = '#ffffff';
            if (fill) {
                return this.threshold.fillColor ? this.threshold.fillColor : defaultColor;
            }
            return this.threshold.lineColor ? this.threshold.lineColor : defaultColor;
        };
        return ThresholdDrawer;
    }(BaseDrawer));

    var TrackballDrawerPlugin = /** @class */ (function (_super) {
        __extends(TrackballDrawerPlugin, _super);
        function TrackballDrawerPlugin(store) {
            var _this = _super.call(this, store) || this;
            _this.posSubs = store
                .mouse
                .hover$
                .subscribe(function (x) { return _this.trackball = x; });
            return _this;
        }
        TrackballDrawerPlugin.prototype.finalize = function () {
            _super.prototype.finalize.call(this);
            this.posSubs.unsubscribe();
        };
        TrackballDrawerPlugin.prototype.afterDatasetsDraw = function (chart, _) {
            if (this.trackball) {
                new TrackballDrawer(chart, this.trackball).draw();
            }
        };
        return TrackballDrawerPlugin;
    }(ChartJsExtension));
    TrackballDrawerPlugin.ɵfac = function TrackballDrawerPlugin_Factory(t) { return new (t || TrackballDrawerPlugin)(i0.ɵɵinject(ChartStore)); };
    TrackballDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: TrackballDrawerPlugin, factory: TrackballDrawerPlugin.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TrackballDrawerPlugin, [{
                type: i0.Injectable
            }], function () { return [{ type: ChartStore }]; }, null);
    })();
    var TrackballDrawer = /** @class */ (function (_super) {
        __extends(TrackballDrawer, _super);
        function TrackballDrawer(chart, trackball) {
            var _this = _super.call(this, chart) || this;
            _this.trackball = trackball;
            return _this;
        }
        Object.defineProperty(TrackballDrawer.prototype, "position", {
            get: function () {
                var rect = this.canvas.getBoundingClientRect();
                return {
                    x: this.trackball.clientX - rect.left,
                    y: this.trackball.clientY - rect.top
                };
            },
            enumerable: false,
            configurable: true
        });
        TrackballDrawer.prototype.draw = function () {
            var context = this.context;
            var pos = this.position;
            var shouldIgnore = (0 == this.chart.data.datasets.length) ||
                (pos.x < this.scaleX.left || pos.x > this.scaleX.right);
            if (shouldIgnore) {
                return;
            }
            var lw = 0.8;
            var x = this.alignPixel(pos.x, lw);
            var y1 = this.alignPixel(this.scaleY.top, lw);
            var y2 = this.alignPixel(this.scaleY.bottom, lw);
            context.beginPath();
            context.strokeStyle = "#880015";
            context.lineWidth = lw;
            context.moveTo(x, y1);
            context.lineTo(x, y2);
            context.stroke();
        };
        return TrackballDrawer;
    }(BaseDrawer));

    var TimeRegionsDrawerPlugin = /** @class */ (function (_super) {
        __extends(TimeRegionsDrawerPlugin, _super);
        function TimeRegionsDrawerPlugin(store) {
            return _super.call(this, store) || this;
        }
        TimeRegionsDrawerPlugin.prototype.afterDatasetsDraw = function (chart, _) {
            var _a, _b, _c;
            (_c = (_b = (_a = this
                .widget) === null || _a === void 0 ? void 0 : _a.display) === null || _b === void 0 ? void 0 : _b.timeRegions) === null || _c === void 0 ? void 0 : _c.forEach(function (t) { return new TimeRegionDrawer(chart, t).draw(); });
        };
        return TimeRegionsDrawerPlugin;
    }(ChartJsExtension));
    TimeRegionsDrawerPlugin.ɵfac = function TimeRegionsDrawerPlugin_Factory(t) { return new (t || TimeRegionsDrawerPlugin)(i0.ɵɵinject(ChartStore)); };
    TimeRegionsDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: TimeRegionsDrawerPlugin, factory: TimeRegionsDrawerPlugin.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TimeRegionsDrawerPlugin, [{
                type: i0.Injectable
            }], function () { return [{ type: ChartStore }]; }, null);
    })();
    var TimeRegionDrawer = /** @class */ (function (_super) {
        __extends(TimeRegionDrawer, _super);
        function TimeRegionDrawer(chart, timeRegion) {
            var _this = _super.call(this, chart) || this;
            _this.timeRegion = timeRegion;
            return _this;
        }
        TimeRegionDrawer.prototype.draw = function () {
            var _this = this;
            var scaleX = this.chart.scales[AXIS_X];
            var minX = i1.Moment.create(scaleX.min);
            var maxX = i1.Moment.create(scaleX.max);
            this
                .getSpans(minX, maxX)
                .forEach(function (x) {
                var os = scaleX.getPixelForValue(x.start.toDate());
                var oe = scaleX.getPixelForValue(x.end.toDate());
                if (!(oe < scaleX.left || os > scaleX.right)) {
                    os = Math.max(os, scaleX.left);
                    oe = Math.min(oe, scaleX.right);
                    _this.renderRegion(os, oe);
                }
            });
        };
        TimeRegionDrawer.prototype.getSpans = function (min, max) {
            var borders = this.getSpanBorders(min, max);
            var time = this.getTime();
            return this.isSpecificDayOfWeek() ?
                this.getSpansDayOfWeek(borders, time) :
                this.getSpansAny(borders, time);
        };
        TimeRegionDrawer.prototype.getTime = function () {
            var isSpecificDayOfWeek = this.isSpecificDayOfWeek();
            var inputFromTime = this.timeRegion.fromTime;
            var inputToTime = this.timeRegion.toTime;
            var timeFormat = "HH:mm";
            var tf = i1.Moment.create(inputFromTime, timeFormat);
            var tt = i1.Moment.create(inputToTime, timeFormat);
            if (!tf.isValid() && !tt.isValid()) {
                if (isSpecificDayOfWeek) {
                    var midnight = i1.Moment.create("00:00", timeFormat);
                    tf = midnight.clone();
                    tt = midnight.clone();
                }
            }
            else if (tf.isValid() && !tt.isValid()) {
                tt = tf.clone();
            }
            else if (!tf.isValid() && tt.isValid()) {
                tf = tt.clone();
            }
            return {
                from: (tf.isValid()) ? tf.toDate() : undefined,
                to: (tt.isValid()) ? tt.toDate() : undefined
            };
        };
        TimeRegionDrawer.prototype.getSpansDayOfWeek = function (borders, time) {
            var max = borders.to;
            var min = borders.from;
            var current = min.clone();
            var res = [];
            var fromDayName = this.timeRegion.fromDay; //TimeRegionDay[  ]
            var toDayName = this.timeRegion.toDay; //TimeRegionDay[  ];
            while (current < max) {
                var start = current.clone().day(fromDayName);
                var end = start.clone().day(toDayName);
                if (end.isBefore(start)) {
                    end.add(1, 'weeks');
                }
                start.set({
                    'hour': time.from.getHours(),
                    'minute': time.from.getMinutes()
                });
                end.set({
                    'hour': time.to.getHours(),
                    'minute': time.to.getMinutes()
                });
                res.push({ start: start, end: end });
                current.add(1, 'weeks');
            }
            return res;
        };
        TimeRegionDrawer.prototype.getSpansAny = function (borders, time) {
            var max = borders.to;
            var min = borders.from;
            var current = min.clone();
            var res = [];
            if (!time.from && !time.to) {
                return res;
            }
            while (current < max) {
                var start = current.clone().set({
                    'hour': time.from.getHours(),
                    'minute': time.from.getMinutes()
                });
                var end = current.clone().set({
                    'hour': time.to.getHours(),
                    'minute': time.to.getMinutes()
                });
                if (end.isBefore(start)) {
                    end.add(1, 'days');
                }
                res.push({ start: start, end: end });
                current.add(1, 'days');
            }
            return res;
        };
        TimeRegionDrawer.prototype.getSpanBorders = function (min, max) {
            var margin = this.isSpecificDayOfWeek() ? 8 : 1;
            var from = min
                .clone()
                .subtract(margin, 'days')
                .startOf('day');
            var to = max
                .clone()
                .add(margin, 'days')
                .endOf('day');
            return { from: from, to: to };
        };
        TimeRegionDrawer.prototype.isSpecificDayOfWeek = function () {
            return (this.timeRegion.fromDay != TimeRegionDay.Any) ||
                (this.timeRegion.toDay != TimeRegionDay.Any);
        };
        TimeRegionDrawer.prototype.renderRegion = function (offsetStart, offsetEnd) {
            var scaleYA = this.chart.scales[AXIS_Y_LEFT];
            var scaleX = this.chart.scales[AXIS_X];
            var minY = scaleYA.top;
            var maxY = scaleYA.bottom;
            if (this.timeRegion.line) {
                if (scaleX.left != offsetStart) {
                    this.renderLine(minY, maxY, offsetStart);
                }
                if (scaleX.right != offsetEnd && offsetEnd != offsetStart) {
                    this.renderLine(minY, maxY, offsetEnd);
                }
            }
            if (this.timeRegion.fill && offsetEnd != offsetStart) {
                this.renderRectangle(minY, maxY, offsetStart, offsetEnd);
            }
        };
        TimeRegionDrawer.prototype.renderLine = function (minY, maxY, offset) {
            var color = this.getColor(false);
            this.context.beginPath();
            this.context.strokeStyle = color + "99";
            this.context.lineWidth = 2;
            this.context.moveTo(offset, minY);
            this.context.lineTo(offset, maxY);
            this.context.stroke();
        };
        TimeRegionDrawer.prototype.renderRectangle = function (minY, maxY, offsetStart, offsetEnd) {
            var color = this.getColor(true);
            this.context.fillStyle = color + "22";
            var x = offsetStart;
            var w = offsetEnd - offsetStart;
            var y = minY;
            var h = maxY - minY;
            this.context.fillRect(x, y, w, h);
        };
        TimeRegionDrawer.prototype.getColor = function (fill) {
            switch (this.timeRegion.colorType) {
                case TimeRegionColor.Red:
                    return '#ED2E18';
                case TimeRegionColor.Green:
                    return '#10a345';
                case TimeRegionColor.Blue:
                    return '#1f78c1';
                case TimeRegionColor.Yellow:
                    return '#f79520';
                case TimeRegionColor.Gray:
                    return '#fce2de';
            }
            var defaultColor = '#ffffff';
            if (fill) {
                return this.timeRegion.fillColor ? this.timeRegion.fillColor : defaultColor;
            }
            return this.timeRegion.lineColor ? this.timeRegion.lineColor : defaultColor;
        };
        return TimeRegionDrawer;
    }(BaseDrawer));

    var AlertDrawerPlugin = /** @class */ (function (_super) {
        __extends(AlertDrawerPlugin, _super);
        function AlertDrawerPlugin(store) {
            return _super.call(this, store) || this;
        }
        AlertDrawerPlugin.prototype.afterDatasetsDraw = function (chart, _) {
            var _a, _b;
            var conditions = (_b = (_a = this
                .widget) === null || _a === void 0 ? void 0 : _a.alert) === null || _b === void 0 ? void 0 : _b.conditions;
            if (conditions === null || conditions === void 0 ? void 0 : conditions.length) {
                new AlertDrawer(chart, conditions[0].evaluator).draw();
            }
        };
        return AlertDrawerPlugin;
    }(ChartJsExtension));
    AlertDrawerPlugin.ɵfac = function AlertDrawerPlugin_Factory(t) { return new (t || AlertDrawerPlugin)(i0.ɵɵinject(ChartStore)); };
    AlertDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: AlertDrawerPlugin, factory: AlertDrawerPlugin.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertDrawerPlugin, [{
                type: i0.Injectable
            }], function () { return [{ type: ChartStore }]; }, null);
    })();
    var AlertDrawer = /** @class */ (function (_super) {
        __extends(AlertDrawer, _super);
        function AlertDrawer(chart, evaluator) {
            var _this = _super.call(this, chart) || this;
            _this.evaluator = evaluator;
            return _this;
        }
        AlertDrawer.prototype.draw = function () {
            var offset1 = this.scaleY.getPixelForValue(+this.evaluator.params[0]);
            var offset2 = this.scaleY.getPixelForValue(+this.evaluator.params[1]);
            var topY = this.scaleY.getPixelForValue(this.scaleY.max);
            var bottomY = this.scaleY.getPixelForValue(this.scaleY.min);
            switch (+this.evaluator.type) {
                case i1.AlertEvalType.IsAbove:
                    if (!(topY > offset1 || bottomY < offset1)) {
                        this.renderLine(offset1);
                        this.renderRectangle(offset1, true);
                    }
                    break;
                case i1.AlertEvalType.IsBelow:
                    if (!(topY > offset1 || bottomY < offset1)) {
                        this.renderLine(offset1);
                        this.renderRectangle(offset1, false);
                    }
                    break;
                case i1.AlertEvalType.IsWithinRange:
                    if (!(topY > offset1 || bottomY < offset1 || topY > offset2 || bottomY < offset2)) {
                        this.renderLine(offset1);
                        this.renderLine(offset2);
                        this.renderRectangleBetween(offset1, offset2);
                    }
                    break;
                case i1.AlertEvalType.IsOutsideRange:
                    if (!(topY > offset1 || bottomY < offset1 || topY > offset2 || bottomY < offset2)) {
                        this.renderLine(offset1);
                        this.renderLine(offset2);
                        this.renderRectangle(offset1, false);
                        this.renderRectangle(offset2, true);
                    }
                    break;
            }
        };
        AlertDrawer.prototype.renderLine = function (offset) {
            this.context.beginPath();
            this.context.strokeStyle = AlertDrawer.LINE_COLOR;
            this.context.lineWidth = 2;
            this.context.moveTo(this.scaleX.left, offset);
            this.context.lineTo(this.scaleX.right, offset);
            this.context.stroke();
        };
        AlertDrawer.prototype.renderRectangle = function (offset, gt) {
            this.context.fillStyle = AlertDrawer.FILL_COLOR;
            var x = this.scaleX.left;
            var w = this.scaleX.width;
            var topY = this.scaleY.getPixelForValue(this.scaleY.max);
            var bottomY = this.scaleY.getPixelForValue(this.scaleY.min);
            var y = gt ? topY : Math.max(topY, offset);
            var h = gt ? offset - this.scaleY.top : this.scaleY.bottom - offset;
            h = Math.min(bottomY - topY, h);
            this.context.fillRect(x, y, w, h);
        };
        AlertDrawer.prototype.renderRectangleBetween = function (offset1, offset2) {
            this.context.fillStyle = AlertDrawer.FILL_COLOR;
            var x = this.scaleX.left;
            var w = this.scaleX.width;
            this.context.fillRect(x, offset1, w, offset2 - offset1);
        };
        return AlertDrawer;
    }(BaseDrawer));
    AlertDrawer.LINE_COLOR = i4.ColorHelper.hexToRgbString(i4.ColorHelper.ALERTING_COLOR, 0.6);
    AlertDrawer.FILL_COLOR = i4.ColorHelper.hexToRgbString(i4.ColorHelper.ALERTING_COLOR, i4.ColorHelper.REGION_FILL_ALPHA);

    var AnnotationDrawerPlugin = /** @class */ (function (_super) {
        __extends(AnnotationDrawerPlugin, _super);
        function AnnotationDrawerPlugin(store) {
            return _super.call(this, store) || this;
        }
        AnnotationDrawerPlugin.prototype.afterDatasetsDraw = function (chart, _) {
            var _this = this;
            var _a;
            if (!((_a = chart.data.datasets) === null || _a === void 0 ? void 0 : _a.length)) {
                return;
            }
            this
                .panel
                .annotations
                .forEach(function (a) { return new AnnotationDrawer(chart, _this.widget, _this.dashboard, a).draw(); });
        };
        return AnnotationDrawerPlugin;
    }(ChartJsExtension));
    AnnotationDrawerPlugin.ɵfac = function AnnotationDrawerPlugin_Factory(t) { return new (t || AnnotationDrawerPlugin)(i0.ɵɵinject(ChartStore)); };
    AnnotationDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: AnnotationDrawerPlugin, factory: AnnotationDrawerPlugin.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AnnotationDrawerPlugin, [{
                type: i0.Injectable
            }], function () { return [{ type: ChartStore }]; }, null);
    })();
    var AnnotationDrawer = /** @class */ (function (_super) {
        __extends(AnnotationDrawer, _super);
        function AnnotationDrawer(chart, widget, dashboard, annotation) {
            var _this = _super.call(this, chart) || this;
            _this.widget = widget;
            _this.dashboard = dashboard;
            _this.annotation = annotation;
            return _this;
        }
        AnnotationDrawer.prototype.draw = function () {
            if (this.annotation.alert && !this.widget.alert) {
                return;
            }
            if (!this.annotation.timeEnd) {
                this.renderLineAnnotation();
            }
            else {
                this.renderRegionAnnotation();
            }
        };
        Object.defineProperty(AnnotationDrawer.prototype, "color", {
            get: function () {
                var _a, _b, _c;
                if (this.annotation.alert) {
                    var alert = this.annotation.alert;
                    var state = i1.AlertState[alert.currentState];
                    switch (state) {
                        case i1.AlertState.Alerting:
                            return i4.ColorHelper.ALERTING_COLOR;
                        case i1.AlertState.Ok:
                            return i4.ColorHelper.OK_COLOR;
                        case i1.AlertState.Pending:
                        case i1.AlertState.NoData:
                            return i4.ColorHelper.PENDING_COLOR;
                    }
                }
                return (_c = (_b = (_a = this
                    .dashboard
                    .data) === null || _a === void 0 ? void 0 : _a.annotationRules[this.annotation.ruleIndex]) === null || _b === void 0 ? void 0 : _b.color) !== null && _c !== void 0 ? _c : i4.ColorHelper.DEFAULT_ANNOTATION_COLOR;
                ;
            },
            enumerable: false,
            configurable: true
        });
        AnnotationDrawer.prototype.renderLineAnnotation = function () {
            var time = i1.Moment.toDate(this.annotation.time);
            var offset = this.scaleX.getPixelForValue(time);
            if (!(offset < this.scaleX.left || offset > this.scaleX.right)) {
                this.renderLine(offset, this.color /*?? AnnotationsDrawerPlugin.COLOR*/);
            }
        };
        AnnotationDrawer.prototype.renderLine = function (offset, color) {
            var lw = 0.8;
            var context = this.context;
            var x = this.alignPixel(offset, lw);
            var y1 = this.alignPixel(this.minY, lw);
            var y2 = this.alignPixel(this.maxY, lw);
            context.beginPath();
            context.strokeStyle = context.fillStyle = color;
            context.lineWidth = lw;
            context.setLineDash([3, 2]);
            context.moveTo(x, y1);
            context.lineTo(x, y2);
            context.stroke();
            context.beginPath();
            context.moveTo(x, y2);
            context.lineTo(x + 5, y2 + 5);
            context.lineTo(x - 5, y2 + 5);
            context.lineTo(x, y2);
            context.closePath();
            context.setLineDash([]);
            context.fill();
            this.annotation.rect = {
                x1: offset - 5,
                y1: this.maxY,
                x2: offset + 5,
                y2: this.maxY + 5
            };
        };
        AnnotationDrawer.prototype.renderRegionAnnotation = function () {
            var timeStart = i1.Moment.toDate(this.annotation.time);
            var timeEnd = i1.Moment.toDate(this.annotation.timeEnd);
            var os = this.scaleX.getPixelForValue(timeStart);
            var oe = this.scaleX.getPixelForValue(timeEnd);
            if (oe < this.scaleX.left || os > this.scaleX.right) {
                return;
            }
            os = Math.max(os, this.scaleX.left);
            oe = Math.max(this.scaleX.left, Math.min(oe, this.scaleX.right));
            this.renderRegion(os, oe, this.color /*?? AnnotationsDrawerPlugin.COLOR*/);
        };
        AnnotationDrawer.prototype.renderRegion = function (os, oe, color) {
            var lw = 0.8;
            var x1 = this.alignPixel(os, lw);
            var x2 = this.alignPixel(oe, lw);
            var y1 = this.alignPixel(this.minY, lw);
            var y2 = this.alignPixel(this.maxY, lw);
            var context = this.context;
            context.strokeStyle = color;
            context.fillStyle = "#00d3ff" + '20';
            context.lineWidth = lw;
            context.setLineDash([3, 2]);
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x1, y2);
            context.stroke();
            context.moveTo(x2, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.fillRect(x1, y1, x2 - x1, y2 - y1);
            context.fillStyle = color;
            context.fillRect(x1, y2, x2 - x1, 5);
            context.setLineDash([]);
            context.closePath();
            this.annotation.rect = {
                x1: Math.min(os, oe),
                y1: this.maxY,
                x2: Math.max(oe, os),
                y2: this.maxY + 5
            };
        };
        return AnnotationDrawer;
    }(BaseDrawer));

    var DragRangeDrawerPlugin = /** @class */ (function (_super) {
        __extends(DragRangeDrawerPlugin, _super);
        function DragRangeDrawerPlugin(store) {
            var _this = _super.call(this, store) || this;
            _this.posSubs = store
                .mouse
                .drag$
                .subscribe(function (x) { return _this.region = x; });
            return _this;
        }
        DragRangeDrawerPlugin.prototype.finalize = function () {
            _super.prototype.finalize.call(this);
            this.posSubs.unsubscribe();
        };
        DragRangeDrawerPlugin.prototype.afterDatasetsDraw = function (chart, _) {
            if (this.region && this.region.start && this.region.end) {
                new DragRangeDrawer(chart, this.region).draw();
            }
        };
        return DragRangeDrawerPlugin;
    }(ChartJsExtension));
    DragRangeDrawerPlugin.ɵfac = function DragRangeDrawerPlugin_Factory(t) { return new (t || DragRangeDrawerPlugin)(i0.ɵɵinject(ChartStore)); };
    DragRangeDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: DragRangeDrawerPlugin, factory: DragRangeDrawerPlugin.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DragRangeDrawerPlugin, [{
                type: i0.Injectable
            }], function () { return [{ type: ChartStore }]; }, null);
    })();
    var DragRangeDrawer = /** @class */ (function (_super) {
        __extends(DragRangeDrawer, _super);
        function DragRangeDrawer(chart, region) {
            var _this = _super.call(this, chart) || this;
            _this.region = region;
            return _this;
        }
        DragRangeDrawer.prototype.draw = function () {
            var os = Math.max(this.region.start.offsetX, this.scaleX.left);
            var oe = Math.max(this.scaleX.left, Math.min(this.region.end.offsetX, this.scaleX.right));
            this.renderRectangle(os, oe);
        };
        DragRangeDrawer.prototype.renderRectangle = function (offsetStart, offsetEnd) {
            var context = this.context;
            var color = "#ffffff";
            context.fillStyle = color + "22";
            context.strokeStyle = color + "30";
            var x = offsetStart;
            var w = offsetEnd - offsetStart;
            var y = this.minY;
            var h = this.maxY - this.minY;
            context.beginPath();
            context.setLineDash([]);
            context.fillRect(x, y, w, h);
            context.rect(x, y, w, h);
            context.stroke();
        };
        return DragRangeDrawer;
    }(BaseDrawer));

    var NoContentPlugin = /** @class */ (function (_super) {
        __extends(NoContentPlugin, _super);
        function NoContentPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NoContentPlugin.prototype.afterDraw = function (chart) {
            if (chart.data.datasets.length === 0) {
                // No data is present
                var ctx = chart.chart.ctx;
                var width = chart.chart.width;
                var height = chart.chart.height;
                //chart.clear();
                ctx.save();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = "#D8D9DA";
                ctx.font = "16px normal 'Roboto'";
                ctx.fillText('No data points', width / 2, height / 2);
                ctx.restore();
            }
        };
        return NoContentPlugin;
    }(ChartJsExtension));

    var ExtensionsManager = /** @class */ (function () {
        function ExtensionsManager(thresholds, trackball, timeRegions, alerts, annotations, drag, noContent) {
            this.thresholds = thresholds;
            this.trackball = trackball;
            this.timeRegions = timeRegions;
            this.alerts = alerts;
            this.annotations = annotations;
            this.drag = drag;
            this.noContent = noContent;
        }
        Object.defineProperty(ExtensionsManager.prototype, "list", {
            get: function () {
                return [
                    this.thresholds,
                    this.timeRegions,
                    this.alerts,
                    this.annotations,
                    this.trackball,
                    this.drag,
                    this.noContent,
                ];
            },
            enumerable: false,
            configurable: true
        });
        ExtensionsManager.prototype.destroy = function () {
            this.list.forEach(function (x) { return x.finalize(); });
        };
        return ExtensionsManager;
    }());
    ExtensionsManager.ɵfac = function ExtensionsManager_Factory(t) { return new (t || ExtensionsManager)(i0.ɵɵinject(ThresholdDrawerPlugin), i0.ɵɵinject(TrackballDrawerPlugin), i0.ɵɵinject(TimeRegionsDrawerPlugin), i0.ɵɵinject(AlertDrawerPlugin), i0.ɵɵinject(AnnotationDrawerPlugin), i0.ɵɵinject(DragRangeDrawerPlugin), i0.ɵɵinject(NoContentPlugin)); };
    ExtensionsManager.ɵprov = i0.ɵɵdefineInjectable({ token: ExtensionsManager, factory: ExtensionsManager.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ExtensionsManager, [{
                type: i0.Injectable
            }], function () { return [{ type: ThresholdDrawerPlugin }, { type: TrackballDrawerPlugin }, { type: TimeRegionsDrawerPlugin }, { type: AlertDrawerPlugin }, { type: AnnotationDrawerPlugin }, { type: DragRangeDrawerPlugin }, { type: NoContentPlugin }]; }, null);
    })();

    function ChartComponent_alert_handle_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "alert-handle");
        }
    }
    function ChartComponent_chart_legend_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "chart-legend", 8);
        }
    }
    function ChartComponent_chart_legend_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "chart-legend", 9);
        }
    }
    var ChartComponent = /** @class */ (function (_super) {
        __extends(ChartComponent, _super);
        function ChartComponent(store, plugins) {
            var _this = _super.call(this, store) || this;
            _this.plugins = plugins;
            _this.showAlertHandle = false;
            _this.options = OptionsProvider.getOptions(_this);
            return _this;
        }
        ChartComponent.prototype.ngAfterViewInit = function () {
            this.widget.component = this;
        };
        ChartComponent.prototype.ngOnDestroy = function () {
            this.store.destroy();
            this.plugins.destroy();
        };
        return ChartComponent;
    }(BaseChartComponent));
    ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(ChartStore), i0.ɵɵdirectiveInject(ExtensionsManager)); };
    ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], viewQuery: function ChartComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i3.UIChart, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.control = _t.first);
            }
        }, features: [i0.ɵɵProvidersFeature([
                DataProvider,
                DataConverter,
                DisplayManager,
                ChartStore,
                MouseStore,
                ExtensionsManager,
                TrackballDrawerPlugin,
                ThresholdDrawerPlugin,
                TimeRegionsDrawerPlugin,
                AlertDrawerPlugin,
                AnnotationDrawerPlugin,
                DragRangeDrawerPlugin,
                NoContentPlugin
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "chart__wrapper"], [1, "chart__right-legend-cont"], [1, "chart__canvas-cont"], ["type", "line", "height", "100%", 3, "data", "options", "plugins", "mousedown", "mouseup", "mouseleave"], ["chart", ""], [4, "ngIf"], ["class", "chart__legend-right", 4, "ngIf"], ["class", "chart__legend-bottom", 4, "ngIf"], [1, "chart__legend-right"], [1, "chart__legend-bottom"]], template: function ChartComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "p-chart", 3, 4);
                i0.ɵɵlistener("mousedown", function ChartComponent_Template_p_chart_mousedown_3_listener($event) { return ctx.store.mouse.down($event); })("mouseup", function ChartComponent_Template_p_chart_mouseup_3_listener($event) { return ctx.store.mouse.up($event); })("mouseleave", function ChartComponent_Template_p_chart_mouseleave_3_listener($event) { return ctx.store.mouse.leave($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, ChartComponent_alert_handle_5_Template, 1, 0, "alert-handle", 5);
                i0.ɵɵtemplate(6, ChartComponent_chart_legend_6_Template, 1, 0, "chart-legend", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, ChartComponent_chart_legend_7_Template, 1, 0, "chart-legend", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "annotation-dispatcher");
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins.list);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.showAlertHandle && (ctx.widget == null ? null : ctx.widget.alert));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", (ctx.widget == null ? null : ctx.widget.legend.show) && (ctx.widget == null ? null : ctx.widget.legend == null ? null : ctx.widget.legend.right));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", (ctx.widget == null ? null : ctx.widget.legend.show) && !(ctx.widget == null ? null : ctx.widget.legend == null ? null : ctx.widget.legend.right));
            }
        }, styles: [".hide-text{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height{max-height:0;overflow:hidden}.animate-height--open{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.chart__wrapper{display:flex;flex-direction:column;height:100%;min-height:0;position:relative}.chart__right-legend-cont{cursor:crosshair;display:flex;flex:1;min-height:0;min-width:0}.chart__canvas-cont{flex:1;min-height:0;min-width:0;padding-left:5px}.chart__legend-bottom{flex:0 1 auto;flex-wrap:wrap;max-height:35%;overflow:hidden;padding-top:6px;position:relative}.chart__legend-right{flex:0 1 10px}.graph-tooltip{background-color:#141414;color:#d8d9da;font-size:12px;white-space:nowrap}.graph-tooltip .graph-tooltip-time{color:#d8d9da;font-weight:700;padding:.2rem;position:relative;text-align:center;top:-3px}.graph-tooltip .graph-tooltip-list-item{display:table-row}.graph-tooltip .graph-tooltip-list-item--highlight{color:#ececec;font-weight:700}.graph-tooltip .graph-tooltip-series-name{display:table-cell;max-width:650px;overflow:hidden;padding:.15rem;text-overflow:ellipsis}.graph-tooltip .graph-tooltip-value{display:table-cell;font-weight:700;padding-left:15px;text-align:right}.grafana-tooltip{border-radius:5px;font-weight:200;line-height:14px;max-height:600px;max-width:800px;overflow:hidden;padding:10px;position:absolute;z-index:9999}.grafana-tooltip a{color:#e3e3e3}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'widget',
                        templateUrl: './chart.html',
                        styleUrls: ['./chart.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [
                            DataProvider,
                            DataConverter,
                            DisplayManager,
                            ChartStore,
                            MouseStore,
                            ExtensionsManager,
                            TrackballDrawerPlugin,
                            ThresholdDrawerPlugin,
                            TimeRegionsDrawerPlugin,
                            AlertDrawerPlugin,
                            AnnotationDrawerPlugin,
                            DragRangeDrawerPlugin,
                            NoContentPlugin
                        ]
                    }]
            }], function () { return [{ type: ChartStore }, { type: ExtensionsManager }]; }, { control: [{
                    type: i0.ViewChild,
                    args: [i3.UIChart]
                }] });
    })();

    var _c0$2 = ["handle"];
    var _c1$1 = ["wrapper"];
    var _c2$1 = function (a0) { return { "top.px": a0 }; };
    function AlertHandleComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵlistener("mousedown", function AlertHandleComponent_div_2_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onGripClick($event, 2); });
            i0.ɵɵelement(1, "div", 11);
            i0.ɵɵelementStart(2, "div", 6);
            i0.ɵɵelement(3, "i", 7);
            i0.ɵɵelementStart(4, "span", 8);
            i0.ɵɵtext(5);
            i0.ɵɵelement(6, "i", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2$1, ctx_r1.pixel2));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx_r1.evaluatorParam2);
        }
    }
    var AlertHandleComponent = /** @class */ (function (_super) {
        __extends(AlertHandleComponent, _super);
        function AlertHandleComponent(panel) {
            return _super.call(this, panel) || this;
        }
        Object.defineProperty(AlertHandleComponent.prototype, "handleMidHeight", {
            get: function () {
                return 14; /*this
                    .handle
                    ?.nativeElement
                    .offsetHeight / 2*/
                14;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertHandleComponent.prototype, "scale", {
            get: function () {
                return this.chartControl.scales[AXIS_Y_LEFT];
                ;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertHandleComponent.prototype, "evaluator", {
            get: function () {
                var _a;
                var conds = (_a = this.alert) === null || _a === void 0 ? void 0 : _a.conditions;
                return conds ? conds[0].evaluator : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertHandleComponent.prototype, "evaluatorParam1", {
            get: function () {
                var _a;
                return (_a = this === null || this === void 0 ? void 0 : this.evaluator) === null || _a === void 0 ? void 0 : _a.params[0];
            },
            set: function (v) {
                if (!this.evaluator) {
                    return;
                }
                this
                    .evaluator
                    .params[0] = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertHandleComponent.prototype, "evaluatorParam2", {
            get: function () {
                var _a;
                return (_a = this === null || this === void 0 ? void 0 : this.evaluator) === null || _a === void 0 ? void 0 : _a.params[1];
            },
            set: function (v) {
                if (!this.evaluator) {
                    return;
                }
                this
                    .evaluator
                    .params[1] = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertHandleComponent.prototype, "pixel1", {
            get: function () {
                return this.getPixel(this.evaluatorParam1);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertHandleComponent.prototype, "pixel2", {
            get: function () {
                return this.getPixel(this.evaluatorParam2);
            },
            enumerable: false,
            configurable: true
        });
        AlertHandleComponent.prototype.getPixel = function (p) {
            var _a;
            if (!this.scale) {
                return;
            }
            var v = Math.max(this.scale.min, p);
            v = Math.min(this.scale.max, v);
            return ((_a = this
                .scale) === null || _a === void 0 ? void 0 : _a.getPixelForValue(v)) - this.handleMidHeight;
        };
        Object.defineProperty(AlertHandleComponent.prototype, "showSecondHandle", {
            get: function () {
                var _a;
                switch (+((_a = this.evaluator) === null || _a === void 0 ? void 0 : _a.type)) {
                    case i1.AlertEvalType.IsWithinRange:
                    case i1.AlertEvalType.IsOutsideRange:
                        return true;
                }
                return false;
            },
            enumerable: false,
            configurable: true
        });
        AlertHandleComponent.prototype.onGripClick = function (e, index) {
            var _this = this;
            e.preventDefault();
            var offset = this.wrapper.nativeElement.getBoundingClientRect().top + window.scrollY;
            var top = offset + e.offsetY;
            var resizeFunc = function (e) {
                e.preventDefault();
                this.calculateValueForPixel(e.clientY - top, index);
                this.refresh();
            };
            var stopResizeFunc = function (e) {
                window.removeEventListener('mousemove', _this.resizeFuncHandler, true);
                window.removeEventListener('mouseup', _this.stopResizeFuncHandler, true);
            };
            this.resizeFuncHandler = resizeFunc.bind(this);
            this.stopResizeFuncHandler = stopResizeFunc.bind(this);
            window.addEventListener('mousemove', this.resizeFuncHandler, true);
            window.addEventListener('mouseup', this.stopResizeFuncHandler, true);
        };
        AlertHandleComponent.prototype.calculateValueForPixel = function (pix, index) {
            var minY = this.scale.getPixelForValue(this.scale.min) - this.handleMidHeight;
            var maxY = -this.handleMidHeight;
            var pricePixel = Math.min(minY, Math.max(maxY, pix));
            var preciseValue = this.scale.getValueForPixel(pricePixel + this.handleMidHeight);
            var roundedValue = this.round(preciseValue);
            if (1 == index) {
                this.evaluatorParam1 = roundedValue;
            }
            else {
                this.evaluatorParam2 = roundedValue;
            }
        };
        AlertHandleComponent.prototype.round = function (v) {
            var dec1 = this.countDecimals(this.scale.max);
            var dec2 = this.countDecimals(this.scale.min);
            return +v.toFixed(Math.max(dec1, dec2));
        };
        AlertHandleComponent.prototype.countDecimals = function (value) {
            if (Math.floor(value) === value)
                return 0;
            return value.toString().split(".")[1].length || 0;
        };
        return AlertHandleComponent;
    }(BaseChartEditorComponent));
    AlertHandleComponent.ɵfac = function AlertHandleComponent_Factory(t) { return new (t || AlertHandleComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN)); };
    AlertHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertHandleComponent, selectors: [["alert-handle"]], viewQuery: function AlertHandleComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, true);
                i0.ɵɵviewQuery(_c1$1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handle = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapper = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 5, consts: [[1, "alert-wrapper", "mr-3"], ["wrapper", ""], ["class", "alert-handle ed-flex ml-3", 3, "ngStyle", "mousedown", 4, "ngIf"], [1, "alert-handle", "ed-flex", 3, "ngStyle", "mousedown"], ["handle", ""], [1, "alert-handle-line"], [1, "alert-handle"], [1, "icon-gf", "icon-gf-critical", "alert-state-critical"], [1, "alert-handle-value"], [1, "alert-handle-grip"], [1, "alert-handle", "ed-flex", "ml-3", 3, "ngStyle", "mousedown"], [1, "alert-handle-line2"]], template: function AlertHandleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵtemplate(2, AlertHandleComponent_div_2_Template, 7, 4, "div", 2);
                i0.ɵɵelementStart(3, "div", 3, 4);
                i0.ɵɵlistener("mousedown", function AlertHandleComponent_Template_div_mousedown_3_listener($event) { return ctx.onGripClick($event, 1); });
                i0.ɵɵelement(5, "div", 5);
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵelement(7, "i", 7);
                i0.ɵɵelementStart(8, "span", 8);
                i0.ɵɵtext(9);
                i0.ɵɵelement(10, "i", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.showSecondHandle);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c2$1, ctx.pixel1));
                i0.ɵɵadvance(6);
                i0.ɵɵtextInterpolate(ctx.evaluatorParam1);
            }
        }, directives: [i1$1.NgIf, i1$1.NgStyle], styles: [".alert-wrapper[_ngcontent-%COMP%]{height:100%}.alert-handle-line[_ngcontent-%COMP%], .alert-handle-line2[_ngcontent-%COMP%]{background-color:rgba(237,46,24,.6);height:2px;margin-left:-20px;position:relative;width:20px;z-index:0}.alert-handle-line2[_ngcontent-%COMP%]{margin-left:-129px;width:129px}.alert-handle[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2f2f32,#262628);border-radius:4px;box-shadow:-1px -1px 0 0 hsla(0,0%,100%,.1),1px 1px 0 0 rgba(0,0,0,.3);color:#8e8e8e;cursor:move;float:right;font-size:12px;position:relative;text-align:left;width:100px;z-index:10}.alert-handle[_ngcontent-%COMP%]:hover{background-color:#303032}.alert-handle[_ngcontent-%COMP%]   .icon-gf[_ngcontent-%COMP%]{border-right:1px solid #333;float:left;font-size:14px;padding:.5rem .3rem .4rem .4rem;position:relative;top:0}.alert-handle-value[_ngcontent-%COMP%]{border-left:1px solid #1f1f20;line-height:2rem;padding:.5rem}.alert-handle-value[_ngcontent-%COMP%]   .alert-handle-grip[_ngcontent-%COMP%]{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generated by IcoMoon.io --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2212%22 height%3D%2232%22 viewBox%3D%220 0 12 32%22%3E%3Cg id%3D%22icomoon-ignore%22%3E%3C%2Fg%3E%3Cpath d%3D%22M0 2h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 10h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 18h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 26h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 2h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 10h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 18h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 26h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\") no-repeat 50% 50%;background-size:8px;float:right;height:2rem;margin-right:2px;width:1rem}.alert-state-critical[_ngcontent-%COMP%]{color:#ed2e18}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertHandleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'alert-handle',
                        templateUrl: './handle.html',
                        styleUrls: [
                            './handle.scss'
                        ]
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }];
        }, { handle: [{
                    type: i0.ViewChild,
                    args: ["handle"]
                }], wrapper: [{
                    type: i0.ViewChild,
                    args: ["wrapper"]
                }] });
    })();

    function EditAnnotationComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "Add Annotation");
            i0.ɵɵelementEnd();
        }
    }
    function EditAnnotationComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "Edit Annotation");
            i0.ɵɵelementEnd();
        }
    }
    function EditAnnotationComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 12);
            i0.ɵɵlistener("click", function EditAnnotationComponent_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onDelete(); });
            i0.ɵɵtext(1, "Delete");
            i0.ɵɵelementEnd();
        }
    }
    var EditAnnotationComponent = /** @class */ (function (_super) {
        __extends(EditAnnotationComponent, _super);
        function EditAnnotationComponent(store, annotService, time) {
            var _this = _super.call(this, store) || this;
            _this.store = store;
            _this.annotService = annotService;
            _this.time = time;
            _this.close = new i0.EventEmitter();
            return _this;
        }
        EditAnnotationComponent.prototype.ngOnInit = function () {
            if (!this.annotation) {
                this.annotation = i1.Annotation.create(this.epochStart, this.epochEnd);
                this.annotations.push(this.annotation);
                this.refresh();
            }
            this.timeLabel = this
                .time
                .converter
                .toDateTimeString(this.annotation.time);
        };
        EditAnnotationComponent.prototype.ngOnDestroy = function () {
            this.panel.annotations = this.annotations.filter(function (x) { return x.id; });
            this.refresh();
        };
        EditAnnotationComponent.prototype.onSave = function () {
            if (this.annotation.id) {
                this.onUpdate();
            }
            else {
                this.onCreate();
            }
        };
        EditAnnotationComponent.prototype.onCreate = function () {
            var _this = this;
            this.annotation.panelId = this.panel.id;
            this.annotation.dashboardId = this.dashboardId;
            delete this.annotation.rect;
            this
                .annotService
                .create(this.annotation)
                .pipe(operators.finalize(function () { return _this.close.emit(); }))
                .subscribe(function (x) {
                i4.Notes.success(x.message);
                _this
                    .store
                    .annotationStore
                    .update();
            }, function (e) { var _a, _b; return i4.Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : i4.ErrorMessages.BAD_CREATE_ANN); });
        };
        EditAnnotationComponent.prototype.onUpdate = function () {
            var _this = this;
            var _a;
            var annot = {
                time: this.annotation.time,
                timeEnd: this.annotation.timeEnd,
                text: this.annotation.text,
                tags: __spread(this.annotation.tags),
                alertId: (_a = this.annotation.alert) === null || _a === void 0 ? void 0 : _a.id
            };
            this
                .annotService
                .update(this.annotation.id, annot)
                .pipe(operators.finalize(function () { return _this.close.emit(); }))
                .subscribe(function (x) {
                i4.Notes.success(x.message);
                _this
                    .store
                    .annotationStore
                    .update();
            }, function (e) { var _a, _b; return i4.Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : i4.ErrorMessages.BAD_UPDATE_ANN); });
        };
        EditAnnotationComponent.prototype.onDelete = function () {
            var _this = this;
            this
                .annotService
                .remove(this.annotation.id)
                .pipe(operators.finalize(function () { return _this.close.emit(); }))
                .subscribe(function (x) {
                i4.Notes.success(x.message);
                _this
                    .store
                    .annotationStore
                    .update();
            }, function (e) { var _a, _b; return i4.Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : i4.ErrorMessages.BAD_DELETE_ANN); });
        };
        return EditAnnotationComponent;
    }(BaseChartComponent));
    EditAnnotationComponent.ɵfac = function EditAnnotationComponent_Factory(t) { return new (t || EditAnnotationComponent)(i0.ɵɵdirectiveInject(ChartStore), i0.ɵɵdirectiveInject(i1.AnnotationService), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
    EditAnnotationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditAnnotationComponent, selectors: [["edit-annotation"]], inputs: { epochStart: "epochStart", epochEnd: "epochEnd", annotation: "annotation" }, outputs: { close: "close" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 6, consts: [[1, "graph-annotation"], [1, "graph-annotation__header"], [1, "graph-annotation__title"], [4, "ngIf"], [1, "graph-annotation__time"], [1, "graph-annotation__body", "text-center"], ["label", "Description", "labelWidth", "7", "width", "23", "placeholder", "Description", "rows", "2", 3, "ngModel", "ngModelChange"], ["label", "Tags", "labelWidth", "7", 3, "ngModel", "ngModelChange"], [1, "gf-form-button-row"], [1, "btn", "btn-success", 3, "click"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn-text", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function EditAnnotationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtemplate(3, EditAnnotationComponent_span_3_Template, 2, 0, "span", 3);
                i0.ɵɵtemplate(4, EditAnnotationComponent_span_4_Template, 2, 0, "span", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵtext(6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 5);
                i0.ɵɵelementStart(8, "ed-textarea", 6);
                i0.ɵɵlistener("ngModelChange", function EditAnnotationComponent_Template_ed_textarea_ngModelChange_8_listener($event) { return ctx.annotation.text = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "ed-tagbox", 7);
                i0.ɵɵlistener("ngModelChange", function EditAnnotationComponent_Template_ed_tagbox_ngModelChange_9_listener($event) { return ctx.annotation.tags = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 8);
                i0.ɵɵelementStart(11, "button", 9);
                i0.ɵɵlistener("click", function EditAnnotationComponent_Template_button_click_11_listener() { return ctx.onSave(); });
                i0.ɵɵtext(12, "Save");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(13, EditAnnotationComponent_button_13_Template, 2, 0, "button", 10);
                i0.ɵɵelementStart(14, "a", 11);
                i0.ɵɵlistener("click", function EditAnnotationComponent_Template_a_click_14_listener() { return ctx.close.emit(); });
                i0.ɵɵtext(15, "Cancel");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", !ctx.annotation.id);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.annotation.id);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.timeLabel);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.annotation.text);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.annotation.tags);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.annotation == null ? null : ctx.annotation.id);
            }
        }, directives: [i1$1.NgIf, i4.TextAreaComponent, i2.NgControlStatus, i2.NgModel, i4.TagBoxComponent], styles: [".graph-annotation .label-tag{margin-right:4px;margin-top:8px}.graph-annotation .graph-annotation__header{align-items:center;background-color:#333;display:flex;padding:6px 10px}.graph-annotation .graph-annotation__title{display:inline-block;flex-grow:1;font-weight:500;overflow:hidden;padding-right:1rem;text-overflow:ellipsis;white-space:nowrap}.graph-annotation .graph-annotation__title.alert{text-transform:uppercase}.graph-annotation .graph-annotation__edit-icon{padding-left:1rem}.graph-annotation .graph-annotation__time{color:#8e8e8e;display:inline-block;font-style:italic;font-weight:400;position:relative;top:1px}.graph-annotation .graph-annotation__body{padding:.65rem}.graph-annotation .graph-annotation__body.hint{max-width:20rem}.graph-annotation .graph-annotation__user img{border-radius:50%;height:16px;width:16px}.graph-annotation a[href]{color:#33b5e5;text-decoration:underline}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EditAnnotationComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'edit-annotation',
                        templateUrl: './edit-annot.html',
                        styleUrls: ['./edit-annot.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: ChartStore }, { type: i1.AnnotationService }, { type: i1.TimeRangeStore }]; }, { epochStart: [{
                    type: i0.Input
                }], epochEnd: [{
                    type: i0.Input
                }], close: [{
                    type: i0.Output
                }], annotation: [{
                    type: i0.Input
                }] });
    })();

    function AnnotationHintComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵelement(1, "ed-avatar", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵpropertyInterpolate1("edHint", "Created by ", ctx_r0.annotation.userName, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("key", ctx_r0.annotation.userName);
        }
    }
    function AnnotationHintComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 13);
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r1.AlertHelperRef.getStateClass(ctx_r1.annotation.alert.currentState));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx_r1.AlertHelperRef.getStateIconClass(ctx_r1.annotation.alert.currentState));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.annotation.alert.currentState, " ");
        }
    }
    function AnnotationHintComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r2.AlertHelperRef.getInfo(ctx_r2.annotation.alert));
        }
    }
    function AnnotationHintComponent_ed_tag_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ed-tag", 14);
        }
        if (rf & 2) {
            var t_r4 = ctx.$implicit;
            i0.ɵɵproperty("text", t_r4)("canRemove", false);
        }
    }
    var AnnotationHintComponent = /** @class */ (function (_super) {
        __extends(AnnotationHintComponent, _super);
        function AnnotationHintComponent(store, annotService, time) {
            var _this = _super.call(this, store, annotService, time) || this;
            _this.edit = new i0.EventEmitter();
            _this.overPopup = false;
            _this.TagColorHelperRef = i4.TagColorHelper;
            _this.AlertHelperRef = i1.AlertHelper;
            return _this;
        }
        AnnotationHintComponent.prototype.onMouseEnter = function () {
            this.overPopup = true;
            this.annotation.overRoot = false;
            this.annotation.overPopup = true;
        };
        AnnotationHintComponent.prototype.onMouseLeave = function () {
            var _this = this;
            this.overPopup = false;
            setTimeout(function () {
                if (!_this.overPopup) {
                    _this.annotation.overPopup = false;
                }
            }, 300);
        };
        return AnnotationHintComponent;
    }(EditAnnotationComponent));
    AnnotationHintComponent.ɵfac = function AnnotationHintComponent_Factory(t) { return new (t || AnnotationHintComponent)(i0.ɵɵdirectiveInject(ChartStore), i0.ɵɵdirectiveInject(i1.AnnotationService), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
    AnnotationHintComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnnotationHintComponent, selectors: [["annotation-hint"]], outputs: { edit: "edit" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 6, consts: [[1, "graph-annotation", "hint", 3, "mouseenter", "mouseleave"], [1, "graph-annotation__header"], ["class", "graph-annotation__user", "hintPos", "top", 3, "edHint", 4, "ngIf"], [1, "graph-annotation__title", "alert"], [3, "ngClass", 4, "ngIf"], [1, "graph-annotation__time"], [1, "pointer", "graph-annotation__edit-icon", 3, "click"], [1, "fa", "fa-pencil-square", "mt-1"], [1, "graph-annotation__body", "hint"], [4, "ngIf"], [3, "text", "canRemove", 4, "ngFor", "ngForOf"], ["hintPos", "top", 1, "graph-annotation__user", 3, "edHint"], [3, "key"], [3, "ngClass"], [3, "text", "canRemove"]], template: function AnnotationHintComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("mouseenter", function AnnotationHintComponent_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function AnnotationHintComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtemplate(2, AnnotationHintComponent_div_2_Template, 2, 2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵtemplate(4, AnnotationHintComponent_span_4_Template, 3, 3, "span", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "span", 5);
                i0.ɵɵtext(6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "span", 6);
                i0.ɵɵlistener("click", function AnnotationHintComponent_Template_span_click_7_listener($event) { ctx.edit.emit(); return $event.stopPropagation(); });
                i0.ɵɵelement(8, "i", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 8);
                i0.ɵɵtemplate(10, AnnotationHintComponent_span_10_Template, 2, 1, "span", 9);
                i0.ɵɵelementStart(11, "div");
                i0.ɵɵtext(12);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(13, AnnotationHintComponent_ed_tag_13_Template, 1, 2, "ed-tag", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", !ctx.annotation.alert);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.annotation.alert);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.timeLabel);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.annotation.alert);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.annotation.text);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.annotation.tags);
            }
        }, directives: [i1$1.NgIf, i1$1.NgForOf, i4.HintDirective, i4.AvatarComponent, i1$1.NgClass, i4.TagComponent], styles: [".graph-annotation .label-tag{margin-right:4px;margin-top:8px}.graph-annotation .graph-annotation__header{align-items:center;background-color:#333;display:flex;padding:6px 10px}.graph-annotation .graph-annotation__title{display:inline-block;flex-grow:1;font-weight:500;overflow:hidden;padding-right:1rem;text-overflow:ellipsis;white-space:nowrap}.graph-annotation .graph-annotation__title.alert{text-transform:uppercase}.graph-annotation .graph-annotation__edit-icon{padding-left:1rem}.graph-annotation .graph-annotation__time{color:#8e8e8e;display:inline-block;font-style:italic;font-weight:400;position:relative;top:1px}.graph-annotation .graph-annotation__body{padding:.65rem}.graph-annotation .graph-annotation__body.hint{max-width:20rem}.graph-annotation .graph-annotation__user img{border-radius:50%;height:16px;width:16px}.graph-annotation a[href]{color:#33b5e5;text-decoration:underline}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AnnotationHintComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'annotation-hint',
                        templateUrl: './annot-hint.html',
                        styleUrls: ['../edit/edit-annot.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: ChartStore }, { type: i1.AnnotationService }, { type: i1.TimeRangeStore }]; }, { edit: [{
                    type: i0.Output
                }] });
    })();

    function AnnotationDispatcherComponent_edit_annotation_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "edit-annotation", 5);
            i0.ɵɵlistener("close", function AnnotationDispatcherComponent_edit_annotation_1_Template_edit_annotation_close_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.showAddAnnot = false; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("epochStart", ctx_r0.epochStart)("epochEnd", ctx_r0.epochEnd);
        }
    }
    function AnnotationDispatcherComponent_edit_annotation_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "edit-annotation", 6);
            i0.ɵɵlistener("close", function AnnotationDispatcherComponent_edit_annotation_3_Template_edit_annotation_close_0_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.showEditAnnot = false; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("annotation", ctx_r1.annotation);
        }
    }
    function AnnotationDispatcherComponent_annotation_hint_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "annotation-hint", 7);
            i0.ɵɵlistener("edit", function AnnotationDispatcherComponent_annotation_hint_5_Template_annotation_hint_edit_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onEditAnnotation(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("annotation", ctx_r2.annotation);
        }
    }
    var AnnotationDispatcherComponent = /** @class */ (function (_super) {
        __extends(AnnotationDispatcherComponent, _super);
        function AnnotationDispatcherComponent(store, time) {
            var _this = _super.call(this, store) || this;
            _this.store = store;
            _this.time = time;
            _this.MIN_LEFT_X = 65;
            _this.mouseDragSubs = store
                .mouse
                .drag$
                .subscribe(function (x) { return _this.region = x; });
            _this.mouseUpSubs = store
                .mouse
                .up$
                .subscribe(function (x) { return _this.onMouseUp(x); });
            _this.mouseHover = store
                .mouse
                .hover$
                .subscribe(function (x) { return _this.onMouseHover(x); });
            return _this;
        }
        Object.defineProperty(AnnotationDispatcherComponent.prototype, "showViewAnnot", {
            get: function () {
                var _a, _b;
                return ((_a = this.annotation) === null || _a === void 0 ? void 0 : _a.overRoot) || ((_b = this.annotation) === null || _b === void 0 ? void 0 : _b.overPopup);
            },
            enumerable: false,
            configurable: true
        });
        AnnotationDispatcherComponent.prototype.ngOnDestroy = function () {
            var _a, _b, _c;
            _super.prototype.ngOnDestroy.call(this);
            (_a = this.mouseUpSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            (_b = this.mouseDragSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
            (_c = this.mouseHover) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        };
        AnnotationDispatcherComponent.prototype.onMouseUp = function (e) {
            var _this = this;
            if (!((e === null || e === void 0 ? void 0 : e.ctrlKey) && this.region)) {
                return;
            }
            var scaleX = this.scales[AXIS_X];
            var rangeStart = this.region.start;
            var rangeEnd = this.region.end;
            var start = Math.min(rangeStart.offsetX, rangeEnd.offsetX);
            var end = Math.max(rangeStart.offsetX, rangeEnd.offsetX);
            start = Math.max(start, scaleX.left);
            end = Math.min(end, scaleX.right);
            var es = scaleX
                .getValueForPixel(start)
                .valueOf();
            var ee = this.epochEnd = scaleX
                .getValueForPixel(end)
                .valueOf();
            this.epochStart = this.time.converter.toEpoch(es);
            this.epochEnd = this.time.converter.toEpoch(ee);
            this.offset = this.getPopupLocation(e);
            setTimeout(function () { return _this.showAddAnnot = true; });
        };
        AnnotationDispatcherComponent.prototype.onMouseHover = function (e) {
            var _a, _b;
            if (!e || this.showAddAnnot || this.showEditAnnot) {
                return;
            }
            var candidates = [];
            (_a = this
                .annotations) === null || _a === void 0 ? void 0 : _a.forEach(function (a) {
                var _a, _b, _c, _d;
                var xOk = ((_a = a.rect) === null || _a === void 0 ? void 0 : _a.x1) <= e.offsetX && ((_b = a.rect) === null || _b === void 0 ? void 0 : _b.x2) >= e.offsetX;
                var yOk = ((_c = a.rect) === null || _c === void 0 ? void 0 : _c.y1) <= e.offsetY && ((_d = a.rect) === null || _d === void 0 ? void 0 : _d.y2) >= e.offsetY;
                if (xOk && yOk && a.id) {
                    candidates.push(a);
                }
                else if (a.overRoot) {
                    setTimeout(function () { return a.overRoot = false; }, 100);
                }
            });
            if (candidates.length > 0) {
                var winner_1 = candidates[0];
                candidates.forEach(function (x) {
                    if (Math.abs(x.rect.x2 - x.rect.x1) < Math.abs(winner_1.rect.x2 - winner_1.rect.x1)) {
                        winner_1 = x;
                    }
                });
                if (winner_1 != this.annotation) {
                    var regionOffset = (winner_1.rect.x2 - winner_1.rect.x1) / 2 -
                        (e.offsetX - ((_b = winner_1.rect) === null || _b === void 0 ? void 0 : _b.x1));
                    this.offset = this.getPopupLocation(e, 100 + regionOffset);
                    winner_1.overRoot = true;
                    winner_1.overPopup = false;
                    this.annotation = winner_1;
                }
            }
            if (!this.showViewAnnot) {
                this.annotation = undefined;
            }
            this.nativeControl.showAnnotView = (undefined != this.annotation);
            this
                .nativeControl
                .canvas
                .style
                .cursor = (this.showViewAnnot) ? 'auto' : 'crosshair';
        };
        AnnotationDispatcherComponent.prototype.getPopupLocation = function (e, xAdj, yAdj) {
            if (xAdj === void 0) { xAdj = 0; }
            if (yAdj === void 0) { yAdj = 0; }
            var scaleY = this.scales[AXIS_Y_LEFT];
            var rect = this.nativeControl.canvas.getBoundingClientRect();
            var maxY = scaleY.bottom;
            return {
                left: e.clientX,
                top: maxY + rect.y + 5 + yAdj,
            };
        };
        AnnotationDispatcherComponent.prototype.onEditAnnotation = function () {
            this.offset.left = Math.max(this.MIN_LEFT_X, this.offset.left /* - 100*/);
            this.annotation.overRoot = false;
            this.annotation.overPopup = false;
            this.showEditAnnot = true;
        };
        AnnotationDispatcherComponent.prototype.onEscPressed = function (_) {
            this.showAddAnnot = this.showEditAnnot = false;
        };
        return AnnotationDispatcherComponent;
    }(BaseChartComponent));
    AnnotationDispatcherComponent.ɵfac = function AnnotationDispatcherComponent_Factory(t) { return new (t || AnnotationDispatcherComponent)(i0.ɵɵdirectiveInject(ChartStore), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
    AnnotationDispatcherComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnnotationDispatcherComponent, selectors: [["annotation-dispatcher"]], hostBindings: function AnnotationDispatcherComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown.escape", function AnnotationDispatcherComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscPressed($event); }, false, i0.ɵɵresolveDocument);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 12, consts: [[3, "visible", "offset", "shadow", "visibleChange"], [3, "epochStart", "epochEnd", "close", 4, "ngIf"], [3, "annotation", "close", 4, "ngIf"], [3, "offset", "visible", "shadow"], [3, "annotation", "edit", 4, "ngIf"], [3, "epochStart", "epochEnd", "close"], [3, "annotation", "close"], [3, "annotation", "edit"]], template: function AnnotationDispatcherComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ed-popup", 0);
                i0.ɵɵlistener("visibleChange", function AnnotationDispatcherComponent_Template_ed_popup_visibleChange_0_listener($event) { return ctx.showAddAnnot = $event; });
                i0.ɵɵtemplate(1, AnnotationDispatcherComponent_edit_annotation_1_Template, 1, 2, "edit-annotation", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "ed-popup", 0);
                i0.ɵɵlistener("visibleChange", function AnnotationDispatcherComponent_Template_ed_popup_visibleChange_2_listener($event) { return ctx.showEditAnnot = $event; });
                i0.ɵɵtemplate(3, AnnotationDispatcherComponent_edit_annotation_3_Template, 1, 1, "edit-annotation", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "ed-popup", 3);
                i0.ɵɵtemplate(5, AnnotationDispatcherComponent_annotation_hint_5_Template, 1, 1, "annotation-hint", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("visible", ctx.showAddAnnot)("offset", ctx.offset)("shadow", true);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showAddAnnot);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("visible", ctx.showEditAnnot)("offset", ctx.offset)("shadow", true);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showEditAnnot);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("offset", ctx.offset)("visible", ctx.showViewAnnot)("shadow", true);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showViewAnnot);
            }
        }, directives: [i4.PopupComponent, i1$1.NgIf, EditAnnotationComponent, AnnotationHintComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AnnotationDispatcherComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'annotation-dispatcher',
                        templateUrl: './annotations.html'
                    }]
            }], function () { return [{ type: ChartStore }, { type: i1.TimeRangeStore }]; }, { onEscPressed: [{
                    type: i0.HostListener,
                    args: ['document:keydown.escape', ['$event']]
                }] });
    })();

    function ChartLegendComponent_div_1_div_3_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r6 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r6.min(ds_r5));
        }
    }
    function ChartLegendComponent_div_1_div_3_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r7 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r7.max(ds_r5));
        }
    }
    function ChartLegendComponent_div_1_div_3_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r8 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r8.avg(ds_r5));
        }
    }
    function ChartLegendComponent_div_1_div_3_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r9.current(ds_r5));
        }
    }
    var _c0$3 = function (a0) { return { "hidden": a0 }; };
    function ChartLegendComponent_div_1_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵlistener("click", function ChartLegendComponent_div_1_div_3_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var ds_r5 = ctx.$implicit; var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onSeriesClicked(ds_r5, $event); });
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelement(2, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 12);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, ChartLegendComponent_div_1_div_3_div_1_div_5_Template, 2, 1, "div", 13);
            i0.ɵɵtemplate(6, ChartLegendComponent_div_1_div_3_div_1_div_6_Template, 2, 1, "div", 14);
            i0.ɵɵtemplate(7, ChartLegendComponent_div_1_div_3_div_1_div_7_Template, 2, 1, "div", 15);
            i0.ɵɵtemplate(8, ChartLegendComponent_div_1_div_3_div_1_div_8_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = ctx.$implicit;
            var ctx_r4 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0$3, ds_r5.hidden));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("color", ctx_r4.color(ds_r5));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ds_r5.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ds_r5.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.legend.min);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.legend.max);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.legend.avg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.legend.current);
        }
    }
    function ChartLegendComponent_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, ChartLegendComponent_div_1_div_3_div_1_Template, 9, 11, "div", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@fadeInOut", undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r3.filteredDatasets);
        }
    }
    function ChartLegendComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵelementStart(1, "perfect-scrollbar");
            i0.ɵɵelementStart(2, "div", 4);
            i0.ɵɵtemplate(3, ChartLegendComponent_div_1_div_3_Template, 2, 2, "div", 5);
            i0.ɵɵelement(4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r0.datasets == null ? null : ctx_r0.datasets.length);
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_th_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 29);
            i0.ɵɵtext(1, "min");
            i0.ɵɵelementEnd();
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 29);
            i0.ɵɵtext(1, "max");
            i0.ɵɵelementEnd();
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 29);
            i0.ɵɵtext(1, "avg");
            i0.ɵɵelementEnd();
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_th_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 29);
            i0.ɵɵtext(1, "current");
            i0.ɵɵelementEnd();
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "thead");
            i0.ɵɵelementStart(1, "tr");
            i0.ɵɵelement(2, "th", 27);
            i0.ɵɵtemplate(3, ChartLegendComponent_ng_template_2_div_2_thead_5_th_3_Template, 2, 0, "th", 28);
            i0.ɵɵtemplate(4, ChartLegendComponent_ng_template_2_div_2_thead_5_th_4_Template, 2, 0, "th", 28);
            i0.ɵɵtemplate(5, ChartLegendComponent_ng_template_2_div_2_thead_5_th_5_Template, 2, 0, "th", 28);
            i0.ɵɵtemplate(6, ChartLegendComponent_ng_template_2_div_2_thead_5_th_6_Template, 2, 0, "th", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r17.legend.min);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r17.legend.max);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r17.legend.avg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r17.legend.current);
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 33);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r24 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r24.min(ds_r23));
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_td_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 33);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r25 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r25.max(ds_r23));
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 33);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r26 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r26.avg(ds_r23));
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 33);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r27 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r27.current(ds_r23));
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr", 30);
            i0.ɵɵelementStart(1, "td", 31);
            i0.ɵɵlistener("click", function ChartLegendComponent_ng_template_2_div_2_tr_7_Template_td_click_1_listener($event) { i0.ɵɵrestoreView(_r33_1); var ds_r23 = ctx.$implicit; var ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.onSeriesClicked(ds_r23, $event); });
            i0.ɵɵelementStart(2, "div", 10);
            i0.ɵɵelement(3, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 12);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ChartLegendComponent_ng_template_2_div_2_tr_7_td_6_Template, 2, 1, "td", 32);
            i0.ɵɵtemplate(7, ChartLegendComponent_ng_template_2_div_2_tr_7_td_7_Template, 2, 1, "td", 32);
            i0.ɵɵtemplate(8, ChartLegendComponent_ng_template_2_div_2_tr_7_td_8_Template, 2, 1, "td", 32);
            i0.ɵɵtemplate(9, ChartLegendComponent_ng_template_2_div_2_tr_7_td_9_Template, 2, 1, "td", 32);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = ctx.$implicit;
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0$3, ds_r23.hidden));
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("color", ctx_r18.color(ds_r23));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ds_r23.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ds_r23.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.legend.min);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.legend.max);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.legend.avg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.legend.current);
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵelementStart(1, "div", 23);
            i0.ɵɵelementStart(2, "table", 24);
            i0.ɵɵelementStart(3, "colgroup");
            i0.ɵɵelement(4, "col", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, ChartLegendComponent_ng_template_2_div_2_thead_5_Template, 7, 4, "thead", 25);
            i0.ɵɵelementStart(6, "tbody");
            i0.ɵɵtemplate(7, ChartLegendComponent_ng_template_2_div_2_tr_7_Template, 10, 11, "tr", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "div", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@fadeInOut", undefined);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx_r16.datasets && ctx_r16.datasets.length > 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r16.filteredDatasets);
        }
    }
    function ChartLegendComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 21);
            i0.ɵɵelementStart(1, "perfect-scrollbar");
            i0.ɵɵtemplate(2, ChartLegendComponent_ng_template_2_div_2_Template, 9, 3, "div", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.datasets == null ? null : ctx_r2.datasets.length);
        }
    }
    var ChartLegendComponent = /** @class */ (function (_super) {
        __extends(ChartLegendComponent, _super);
        function ChartLegendComponent(store) {
            return _super.call(this, store) || this;
        }
        Object.defineProperty(ChartLegendComponent.prototype, "legend", {
            get: function () {
                return this.widget.legend;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ChartLegendComponent.prototype, "filteredDatasets", {
            get: function () {
                var datasets = this.datasets.filter(function (ds) { return ds.legend; });
                if (this.legend.hideOnlyZeroes) {
                    datasets = datasets.filter(function (x) { return !x.allZeros; });
                }
                if (this.legend.hideOnlyNulls) {
                    datasets = datasets.filter(function (x) { return !x.allNulls; });
                }
                return datasets;
            },
            enumerable: false,
            configurable: true
        });
        ChartLegendComponent.prototype.axis = function (ds) {
            var axes = this.widget.axes;
            return (ds.yAxisID == AXIS_Y_LEFT) ? axes.leftY : axes.rightY;
        };
        ChartLegendComponent.prototype.decimals = function (ds) {
            return this.legend.decimals ? this.legend.decimals : 0;
        };
        ChartLegendComponent.prototype.unit = function (ds) {
            return this.axis(ds).unit;
        };
        ChartLegendComponent.prototype.color = function (ds) {
            return this
                .display
                .getLineColor(ds, 1);
        };
        ChartLegendComponent.prototype.min = function (ds) {
            return AxisUnitHelper.getFormattedValue(ds.min, this.unit(ds), this.decimals(ds));
        };
        ChartLegendComponent.prototype.max = function (ds) {
            return AxisUnitHelper.getFormattedValue(ds.max, this.unit(ds), this.decimals(ds));
        };
        ChartLegendComponent.prototype.avg = function (ds) {
            return AxisUnitHelper.getFormattedValue(ds.avg, this.unit(ds), this.decimals(ds));
        };
        ChartLegendComponent.prototype.current = function (ds) {
            return AxisUnitHelper.getFormattedValue(ds.current, this.unit(ds), this.decimals(ds));
        };
        ChartLegendComponent.prototype.onSeriesClicked = function (ds, e) {
            var _this = this;
            if (e.ctrlKey) {
                var selected = (false == ds.selected);
                this.toggleSeries(ds, selected);
            }
            else {
                var selected_1 = ((undefined === ds.selected) || false == ds.selected) ?
                    true : undefined;
                this.toggleSeries(ds, selected_1);
                this
                    .datasets
                    .filter(function (x) { return x != ds; })
                    .forEach(function (x) { return _this.toggleSeries(x, true == selected_1 ? false : undefined); });
            }
            this.component.control.refresh();
        };
        ChartLegendComponent.prototype.toggleSeries = function (ds, selected) {
            ds.selected = selected;
            if (undefined === selected) {
                delete ds.hidden;
                delete ds.selected;
            }
            else {
                ds.hidden = !selected;
            }
        };
        return ChartLegendComponent;
    }(BaseChartComponent));
    ChartLegendComponent.ɵfac = function ChartLegendComponent_Factory(t) { return new (t || ChartLegendComponent)(i0.ɵɵdirectiveInject(ChartStore)); };
    ChartLegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartLegendComponent, selectors: [["chart-legend"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "legend__top-wrapper"], ["class", "legend__bottom", 4, "ngIf", "ngIfElse"], ["legendAsTable", ""], [1, "legend__bottom"], [1, "legend__scroller-cont"], ["class", "legend__series-wrapper", 4, "ngIf"], [1, "legend__scroller-padding"], [1, "legend__series-wrapper"], ["class", "legend__series", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "legend__series", 3, "ngClass", "click"], [1, "legend__icon"], [1, "fa", "fa-minus", "pointer"], [1, "legend__alias", "pointer", 3, "title"], ["class", "legend__value min", 4, "ngIf"], ["class", "legend__value max", 4, "ngIf"], ["class", "legend__value avg", 4, "ngIf"], ["class", "legend__value current", 4, "ngIf"], [1, "legend__value", "min"], [1, "legend__value", "max"], [1, "legend__value", "avg"], [1, "legend__value", "current"], [1, "legend__bottom-table"], ["class", "legend__scroller-cont", 4, "ngIf"], [1, "legend__series-wrapper", "legend__full-width"], [1, "legend__full-width"], [4, "ngIf"], ["class", "legend__series", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "text-align", "left"], ["class", "pointer", 4, "ngIf"], [1, "pointer"], [1, "legend__series", 3, "ngClass"], [3, "click"], ["class", "legend__value", 4, "ngIf"], [1, "legend__value"]], template: function ChartLegendComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, ChartLegendComponent_div_1_Template, 5, 1, "div", 1);
                i0.ɵɵtemplate(2, ChartLegendComponent_ng_template_2_Template, 3, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(3);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.legend.table)("ngIfElse", _r1);
            }
        }, directives: [i1$1.NgIf, i5.PerfectScrollbarComponent, i1$1.NgForOf, i1$1.NgClass], styles: [".hide-text{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height{max-height:0;overflow:hidden}.animate-height--open{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.legend__top-wrapper{display:flex;flex-grow:1;max-height:100%;min-height:0;overflow:hidden;position:relative;width:100%}.legend__bottom{min-width:0;padding-bottom:5px}.legend__scroller-cont{display:flex;flex-direction:row}.legend__scroller-padding{min-width:10px}.legend__series-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;min-width:0}.legend__series{min-width:0;padding-left:10px;white-space:nowrap}.legend__series--right-y{float:right}.legend__series.hidden .legend__alias,.legend__series.hidden .legend__value{color:#969696}.legend__alias,.legend__icon,.legend__value{cursor:pointer;display:inline;font-size:85%;text-align:left;white-space:nowrap}.legend__alias.current:before,.legend__icon.current:before,.legend__value.current:before{content:\"Current: \"}.legend__alias.max:before,.legend__icon.max:before,.legend__value.max:before{content:\"Max: \"}.legend__alias.min:before,.legend__icon.min:before,.legend__value.min:before{content:\"Min: \"}.legend__alias.total:before,.legend__icon.total:before,.legend__value.total:before{content:\"Total: \"}.legend__alias.avg:before,.legend__icon.avg:before,.legend__value.avg:before{content:\"Avg: \"}.legend__icon{padding-right:4px;position:relative;top:1px}.legend__icon .fa{font-size:135%;position:relative;top:1px}.legend__value{padding-left:6px}.legend__bottom-table{padding-bottom:1px;padding-left:5px;padding-right:5px;width:100%}.legend__bottom-table .legend__series{display:table-row;float:none;padding-left:0}.legend__bottom-table .legend__series--right-y{float:none}.legend__bottom-table .legend__series--right-y .legend__alias:after{color:#8e8e8e;content:\"(right-y)\";padding:0 5px}.legend__bottom-table .legend__alias,.legend__bottom-table .legend__icon,.legend__bottom-table .legend__value,.legend__bottom-table td{display:table-cell;float:none;padding:2px 10px;text-align:right;white-space:nowrap}.legend__bottom-table .legend__icon{padding:0;top:0;width:5px}.legend__bottom-table .legend__icon .fa{top:3px}.legend__bottom-table .legend__value{padding-left:15px}.legend__bottom-table .legend__alias{max-width:650px;overflow:hidden;padding-left:7px;text-align:left;text-overflow:ellipsis;width:95%}.legend__bottom-table th{color:#33b5e5;font-size:85%;font-weight:700;padding:0 10px 1px 0;text-align:right;white-space:nowrap}.legend__bottom-table .legend__series:nth-child(odd){background:#262628}.legend__full-width{width:100%}"], encapsulation: 2, data: { animation: [i4.FadeInOutAnimation] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartLegendComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'chart-legend',
                        templateUrl: './legend.html',
                        styleUrls: ['./legend.scss'],
                        animations: [i4.FadeInOutAnimation],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () { return [{ type: ChartStore }]; }, null);
    })();

    var ChartWidgetModule = /** @class */ (function () {
        function ChartWidgetModule() {
        }
        return ChartWidgetModule;
    }());
    ChartWidgetModule.ɵmod = i0.ɵɵdefineNgModule({ type: ChartWidgetModule });
    ChartWidgetModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
                i1$1.CommonModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                i3.ChartModule,
                i1.EdCommonModule,
                i4.EdUilibModule,
                i5.PerfectScrollbarModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent,
                ChartEditorComponent,
                ChartLegendComponent,
                AxesEditorComponent,
                AxisXEditorComponent,
                AxisYEditorComponent,
                LegendEditorComponent,
                DisplayEditorComponent,
                DrawOptionsEditorComponent,
                ThresholdsEditorComponent,
                ThresholdEditorComponent,
                SeriesOverridesEditorComponent,
                SeriesOverrideEditorComponent,
                TimeRegionsEditorComponent,
                TimeRegionEditorComponent,
                TimeEditorComponent,
                AlertEditorComponent,
                AlertConfigEditorComponent,
                AlertConditionEditorComponent,
                AlertQueryEditorComponent,
                AlertQueryParamPickerComponent,
                AlertHistoryEditorComponent,
                AlertNotificationsEditorComponent,
                AlertHandleComponent,
                AnnotationDispatcherComponent,
                EditAnnotationComponent,
                AnnotationHintComponent], imports: [i1$1.CommonModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                i3.ChartModule,
                i1.EdCommonModule,
                i4.EdUilibModule,
                i5.PerfectScrollbarModule], exports: [ChartComponent,
                ChartEditorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartWidgetModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ChartComponent,
                            ChartEditorComponent,
                            ChartLegendComponent,
                            AxesEditorComponent,
                            AxisXEditorComponent,
                            AxisYEditorComponent,
                            LegendEditorComponent,
                            DisplayEditorComponent,
                            DrawOptionsEditorComponent,
                            ThresholdsEditorComponent,
                            ThresholdEditorComponent,
                            SeriesOverridesEditorComponent,
                            SeriesOverrideEditorComponent,
                            TimeRegionsEditorComponent,
                            TimeRegionEditorComponent,
                            TimeEditorComponent,
                            AlertEditorComponent,
                            AlertConfigEditorComponent,
                            AlertConditionEditorComponent,
                            AlertQueryEditorComponent,
                            AlertQueryParamPickerComponent,
                            AlertHistoryEditorComponent,
                            AlertNotificationsEditorComponent,
                            AlertHandleComponent,
                            AnnotationDispatcherComponent,
                            EditAnnotationComponent,
                            AnnotationHintComponent
                        ],
                        imports: [
                            i1$1.CommonModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule,
                            i3.ChartModule,
                            i1.EdCommonModule,
                            i4.EdUilibModule,
                            i5.PerfectScrollbarModule
                        ],
                        exports: [
                            ChartComponent,
                            ChartEditorComponent
                        ],
                    }]
            }], null, null);
    })();
    i0.ɵɵsetComponentScope(ChartComponent, [i1$1.NgClass, i1$1.NgComponentOutlet, i1$1.NgForOf, i1$1.NgIf, i1$1.NgTemplateOutlet, i1$1.NgStyle, i1$1.NgSwitch, i1$1.NgSwitchCase, i1$1.NgSwitchDefault, i1$1.NgPlural, i1$1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i2.FormControlDirective, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName, i2.FormArrayName, i3.UIChart, i4.DialogActionsComponent, i4.DialogComponent, i4.DropDownComponent, i4.DropDownValueTemplate, i4.DropDownSelectedValueTemplate, i4.PopupComponent, i4.ContextMenuComponent, i4.HierarchicalDropDownComponent, i4.HintDirective, i4.ErrorHintDirective, i4.HintComponent, i4.AutoCompleteComponent, i4.PreferencesComponent, i4.EmptyListComponent, i4.InfoBoxComponent, i4.ProgressComponent, i4.FilterBoxComponent, i4.TextBoxComponent, i4.TextBoxValidationTemplate, i4.CheckBoxComponent, i4.AutoFocusDirective, i4.TagBoxComponent, i4.TextAreaComponent, i4.AvatarComponent, i4.GridComponent, i4.ColumnComponent, i4.DeleteColumnComponent, i4.SlideDownComponent, i4.TabStripComponent, i4.TabComponent, i4.TabTitleTemplate, i4.TabContentTemplate, i4.SideTabStripComponent, i4.LoadOrErrorComponent, i4.ErrorPopupComponent, i4.NoteComponent, i4.ModuleLoaderComponent, i4.UserPickerComponent, i4.TeamPickerComponent, i4.PermissionPickerComponent, i4.PermissionRulePickerComponent, i4.PermissionIconComponent, i4.TagPickerComponent, i4.TimeRangePickerComponent, i4.PluginPickerComponent, i4.ColorPickerComponent, i4.AutoCompletePickerComponent, i4.FolderPickerComponent, i4.PaletteEditorComponent, i4.ColorCircleComponent, i4.IconComponent, i4.LabelIconComponent, i4.RemoveHostDirective, i4.PageComponent, i4.PageHeaderComponent, i4.PageTitleComponent, i4.PageTabsNavigationComponent, i4.PageDropdownNavigationComponent, i4.TagComponent, i4.DashboardExplorerComponent, i4.DashboardExplorerDeleterComponent, i4.DashboardExplorerMoverComponent, i4.CardsLayoutSwitcherComponent, i4.JsonExplorerComponent, i4.GeneralEditorComponent, i4.MetricsEditorComponent, i4.MetricsDesignerAnchorDirective, i4.MetricsInspectorComponent, i5.PerfectScrollbarComponent, i5.PerfectScrollbarDirective, ChartComponent,
        ChartEditorComponent,
        ChartLegendComponent,
        AxesEditorComponent,
        AxisXEditorComponent,
        AxisYEditorComponent,
        LegendEditorComponent,
        DisplayEditorComponent,
        DrawOptionsEditorComponent,
        ThresholdsEditorComponent,
        ThresholdEditorComponent,
        SeriesOverridesEditorComponent,
        SeriesOverrideEditorComponent,
        TimeRegionsEditorComponent,
        TimeRegionEditorComponent,
        TimeEditorComponent,
        AlertEditorComponent,
        AlertConfigEditorComponent,
        AlertConditionEditorComponent,
        AlertQueryEditorComponent,
        AlertQueryParamPickerComponent,
        AlertHistoryEditorComponent,
        AlertNotificationsEditorComponent,
        AlertHandleComponent,
        AnnotationDispatcherComponent,
        EditAnnotationComponent,
        AnnotationHintComponent], [i1$1.AsyncPipe, i1$1.UpperCasePipe, i1$1.LowerCasePipe, i1$1.JsonPipe, i1$1.SlicePipe, i1$1.DecimalPipe, i1$1.PercentPipe, i1$1.TitleCasePipe, i1$1.CurrencyPipe, i1$1.DatePipe, i1$1.I18nPluralPipe, i1$1.I18nSelectPipe, i1$1.KeyValuePipe]);

    /*
     * Public API Surface of chart
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ChartComponent = ChartComponent;
    exports.ChartEditorComponent = ChartEditorComponent;
    exports.ChartWidgetModule = ChartWidgetModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=chart.umd.js.map
