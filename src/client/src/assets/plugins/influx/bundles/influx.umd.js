(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('uilib'), require('@angular/common'), require('common'), require('lodash'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('influx', ['exports', '@angular/core', '@angular/forms', 'uilib', '@angular/common', 'common', 'lodash', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.influx = {}, global.ng.core, global.ng.forms, global.i2, global.ng.common, global.i1, global._, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i0, i3, i2, i2$1, i1, _, rxjs, operators) { 'use strict';

    function InfluxSettingsEditorComponent_5_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " please enter url ");
        }
    }
    function InfluxSettingsEditorComponent_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, InfluxSettingsEditorComponent_5_ng_template_0_Template, 1, 0, "ng-template", 16);
        }
    }
    var InfluxSettingsEditorComponent = /** @class */ (function () {
        function InfluxSettingsEditorComponent() {
            this.form = new i3.FormGroup({
                'url': new i3.FormControl(null, i3.Validators.required),
                'whitelistedCookies': new i3.FormControl(null),
                'basicAuthentication': new i3.FormControl(false),
                'withCredentials': new i3.FormControl(false),
                'tlsClientAuth': new i3.FormControl(false),
                'withCaCert': new i3.FormControl(false),
                'skipTlsVerification': new i3.FormControl(false),
                'database': new i3.FormControl(null, i3.Validators.required),
                'user': new i3.FormControl(null),
                'password': new i3.FormControl(null),
                'minTimeInterval': new i3.FormControl(null)
            });
        }
        Object.defineProperty(InfluxSettingsEditorComponent.prototype, "url", {
            get: function () {
                return this.form.get('url');
            },
            enumerable: false,
            configurable: true
        });
        return InfluxSettingsEditorComponent;
    }());
    InfluxSettingsEditorComponent.ɵfac = function InfluxSettingsEditorComponent_Factory(t) { return new (t || InfluxSettingsEditorComponent)(); };
    InfluxSettingsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 41, vars: 14, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["label", "URL", "labelWidth", "10", "hint", "Specify a complete HTTP URL (for example http://your_server:8080)", "formControlName", "url"], [4, "ngIf"], ["label", "Whitelisted Cookies", "labelWidth", "10", "formControlName", "whitelistedCookies"], [1, "gf-form-inline"], ["labelWidth", "10", "label", "Basic Auth", "formControlName", "basicAuthentication"], ["labelWidth", "10", "label", "With Credentials", "hint", "Whether credentials such as cookies or auth headers should be sent with cross-site requests.", "formControlName", "withCredentials"], ["labelWidth", "10", "label", "TLS Client Auth", "formControlName", "tlsClientAuth"], ["labelWidth", "10", "label", "With CA Cert", "hint", "Needed for verifing self-signed TLS Certs", "formControlName", "withCaCert"], ["labelWidth", "10", "label", "Skip TLS Verify", "formControlName", "skipTlsVerification"], ["formControlName", "database", 3, "label", "labelWidth"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], ["hint", "'A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.'", "type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder"], ["edValidationTemplate", ""]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h3", 1);
                i0.ɵɵtext(2, "HTTP");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵelementStart(4, "ed-textbox", 3);
                i0.ɵɵtemplate(5, InfluxSettingsEditorComponent_5_Template, 1, 0, undefined, 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "ed-textbox", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "h3", 1);
                i0.ɵɵtext(8, "Auth");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 2);
                i0.ɵɵelementStart(10, "div", 6);
                i0.ɵɵelement(11, "ed-checkbox", 7);
                i0.ɵɵelement(12, "ed-checkbox", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 6);
                i0.ɵɵelement(14, "ed-checkbox", 9);
                i0.ɵɵelement(15, "ed-checkbox", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "div", 6);
                i0.ɵɵelement(17, "ed-checkbox", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "h3", 1);
                i0.ɵɵtext(19, "InfluxDB Details");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "div", 2);
                i0.ɵɵelement(21, "ed-textbox", 12);
                i0.ɵɵelementStart(22, "div", 6);
                i0.ɵɵelement(23, "ed-textbox", 13);
                i0.ɵɵelement(24, "ed-textbox", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "div", 2);
                i0.ɵɵelementStart(26, "ed-info-box");
                i0.ɵɵelementStart(27, "h5");
                i0.ɵɵtext(28, "Database Access");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "p");
                i0.ɵɵtext(30, " Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example: ");
                i0.ɵɵelementStart(31, "code");
                i0.ɵɵtext(32, "SHOW MEASUREMENTS ON _internal");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(33, " or ");
                i0.ɵɵelementStart(34, "code");
                i0.ɵɵtext(35, "SELECT * FROM \"_internal\"..\"database\" LIMIT 10");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(36, "br");
                i0.ɵɵelement(37, "br");
                i0.ɵɵtext(38, " To support data isolation and security, make sure appropriate permissions are configured in InfluxDB. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(39, "div", 2);
                i0.ɵɵelement(40, "ed-textbox", 15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.url.hasError("required") && ctx.url.touched);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("label", "Database")("labelWidth", 10);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("label", "User")("labelWidth", 10)("width", 5);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("label", "Password")("labelWidth", 10)("width", 5);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s");
            }
        }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i2.TextBoxComponent, i3.NgControlStatus, i3.FormControlName, i2$1.NgIf, i2.CheckBoxComponent, i2.InfoBoxComponent, i2.TextBoxValidationTemplate], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InfluxSettingsEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ds-settings-editor',
                        templateUrl: './settings.html'
                    }]
            }], function () { return []; }, null);
    })();

    var InfluxQuery = /** @class */ (function () {
        function InfluxQuery() {
            this.measurement = '';
            this.policy = '';
            this.refId = '';
            this.tags = new Array();
            this.fields = new Array();
            this.limit = undefined;
            this.slimit = undefined;
            this.order = exports.OrderByTime.Asc;
            this.alias = '';
            this.groupBy = new Array();
            // virgin: boolean = false;
        }
        return InfluxQuery;
    }());
    var Field = /** @class */ (function () {
        function Field() {
        }
        return Field;
    }());
    var FuncObject = /** @class */ (function () {
        function FuncObject() {
        }
        return FuncObject;
    }());
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
    })(exports.AggrFunc || (exports.AggrFunc = {}));
    (function (AggrFuncGroup) {
        AggrFuncGroup[AggrFuncGroup["Aggregations"] = 0] = "Aggregations";
        AggrFuncGroup[AggrFuncGroup["Selectors"] = 1] = "Selectors";
        AggrFuncGroup[AggrFuncGroup["Transformations"] = 2] = "Transformations";
        AggrFuncGroup[AggrFuncGroup["Predictors"] = 3] = "Predictors";
        AggrFuncGroup[AggrFuncGroup["Math"] = 4] = "Math";
        AggrFuncGroup[AggrFuncGroup["Alias"] = 5] = "Alias";
    })(exports.AggrFuncGroup || (exports.AggrFuncGroup = {}));
    var AggrFuncHelper = /** @class */ (function () {
        function AggrFuncHelper() {
        }
        AggrFuncHelper.getGroup = function (f) {
            switch (f) {
                case exports.AggrFunc.Count:
                case exports.AggrFunc.Distinct:
                case exports.AggrFunc.Integral:
                case exports.AggrFunc.Mean:
                case exports.AggrFunc.Median:
                case exports.AggrFunc.Mode:
                case exports.AggrFunc.Sum:
                    return exports.AggrFuncGroup.Aggregations;
                case exports.AggrFunc.Bottom:
                case exports.AggrFunc.First:
                case exports.AggrFunc.Last:
                case exports.AggrFunc.Max:
                case exports.AggrFunc.Min:
                case exports.AggrFunc.Percentile:
                case exports.AggrFunc.Top:
                    return exports.AggrFuncGroup.Selectors;
                case exports.AggrFunc.Derivative:
                case exports.AggrFunc.Spread:
                case exports.AggrFunc.NonNegativeDerivative:
                case exports.AggrFunc.Difference:
                case exports.AggrFunc.NonNegativeDifference:
                case exports.AggrFunc.MovingAverage:
                case exports.AggrFunc.CumulativeSum:
                case exports.AggrFunc.Stddev:
                case exports.AggrFunc.Elapsed:
                    return exports.AggrFuncGroup.Transformations;
                case exports.AggrFunc.HoltWinters:
                case exports.AggrFunc.HoltWintersWithFit:
                    return exports.AggrFuncGroup.Predictors;
                case exports.AggrFunc.Math:
                    return exports.AggrFuncGroup.Math;
                case exports.AggrFunc.Alias:
                    return exports.AggrFuncGroup.Alias;
            }
        };
        return AggrFuncHelper;
    }());
    var GroupByObject = /** @class */ (function () {
        function GroupByObject(type, params) {
            if (params === void 0) { params = []; }
            this.type = type;
            this.params = params;
        }
        return GroupByObject;
    }());
    (function (GroupByOption) {
        GroupByOption[GroupByOption["Time"] = 0] = "Time";
        GroupByOption[GroupByOption["Fill"] = 1] = "Fill";
        GroupByOption[GroupByOption["Tag"] = 2] = "Tag";
    })(exports.GroupByOption || (exports.GroupByOption = {}));
    (function (GroupByTimeOptions) {
        GroupByTimeOptions["Dynamic"] = "$__interval";
        GroupByTimeOptions["S1"] = "1s";
        GroupByTimeOptions["S10"] = "10s";
        GroupByTimeOptions["M1"] = "1m";
        GroupByTimeOptions["M5"] = "5m";
        GroupByTimeOptions["M10"] = "10m";
        GroupByTimeOptions["M15"] = "15m";
        GroupByTimeOptions["H1"] = "1h";
    })(exports.GroupByTimeOptions || (exports.GroupByTimeOptions = {}));
    (function (GroupByFillOptions) {
        GroupByFillOptions["None"] = "none";
        GroupByFillOptions["Null"] = "null";
        GroupByFillOptions["Zero"] = "0";
        GroupByFillOptions["Prev"] = "previous";
        GroupByFillOptions["Linear"] = "linear";
    })(exports.GroupByFillOptions || (exports.GroupByFillOptions = {}));
    (function (OrderByTime) {
        OrderByTime["Asc"] = "asc";
        OrderByTime["Desc"] = "desc";
    })(exports.OrderByTime || (exports.OrderByTime = {}));
    var MetricVars = /** @class */ (function () {
        function MetricVars() {
        }
        return MetricVars;
    }());
    MetricVars.TIME_FILTER = "$timeFilter";
    MetricVars.TIME_INTERVAL = "$__interval";
    var Tag = /** @class */ (function () {
        function Tag() {
            this.key = '';
            this.value = '';
            this.operator = exports.TagOperator.Eq;
            this.condition = exports.TagCondition.And;
        }
        return Tag;
    }());
    (function (TagOperator) {
        TagOperator["Eq"] = "=";
        TagOperator["Neq"] = "<>";
        TagOperator["Less"] = "<";
        TagOperator["Greater"] = ">";
        TagOperator["RegExEq"] = "=~";
        TagOperator["RegExNeq"] = "!~";
    })(exports.TagOperator || (exports.TagOperator = {}));
    (function (TagCondition) {
        TagCondition["And"] = "AND";
        TagCondition["Or"] = "OR";
    })(exports.TagCondition || (exports.TagCondition = {}));

    var InfluxMetricsBuilder = /** @class */ (function () {
        function InfluxMetricsBuilder(time /* for timezone */) {
            if (time === void 0) { time = undefined; }
            this.time = time;
        }
        InfluxMetricsBuilder.prototype.build = function (metrics, range) {
            var _this = this;
            var array = [];
            metrics
                .targets
                .forEach(function (t) {
                var gen = new Builder(_this.time, t, range);
                if (!gen.invalid && !t.virgin) {
                    array.push(gen.text);
                }
            });
            var request = array.join(';');
            return rxjs.of(request);
        };
        return InfluxMetricsBuilder;
    }());
    InfluxMetricsBuilder.ɵfac = function InfluxMetricsBuilder_Factory(t) { return new (t || InfluxMetricsBuilder)(i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
    InfluxMetricsBuilder.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxMetricsBuilder, selectors: [["metrics-builder"]], decls: 0, vars: 0, template: function InfluxMetricsBuilder_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InfluxMetricsBuilder, [{
                type: i0.Component,
                args: [{
                        selector: 'metrics-builder',
                        template: ''
                    }]
            }], function () { return [{ type: i1.TimeRangeStore }]; }, null);
    })();
    var Builder = /** @class */ (function () {
        function Builder(time, target, range) {
            this.time = time;
            this.target = target;
            this.range = range;
        }
        Object.defineProperty(Builder.prototype, "invalid", {
            get: function () {
                var invalidQuery = (!this.target) ||
                    (!this.target.fields || 0 === this.target.fields.length);
                return invalidQuery;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Builder.prototype, "text", {
            get: function () {
                return "SELECT " + this.getFieldsText() + " FROM " + this.getMeasurementText();
            },
            enumerable: false,
            configurable: true
        });
        Builder.prototype.getFieldsText = function () {
            var _this = this;
            var result = '';
            if (!this.target.fields) {
                return result;
            }
            this.target.fields.forEach(function (x) {
                if (result.length > 0) {
                    result += ', ';
                }
                result += _this.getFieldText(x);
            });
            return result;
        };
        Builder.prototype.getFieldText = function (field) {
            var result = '';
            var key = (!field.key) ? 'field' : field.key;
            var aggr = field.functions.find(function (x) { return AggrFuncHelper.getGroup(x.name) == exports.AggrFuncGroup.Aggregations ||
                AggrFuncHelper.getGroup(x.name) == exports.AggrFuncGroup.Selectors; });
            if (aggr) {
                result += aggr.name + ((aggr.param && aggr.param.value) ?
                    "(\"" + key + "\", " + aggr.param.value + ")" : "(\"" + key + "\")");
            }
            else {
                result = "\"" + key + "\"";
            }
            var trans = field.functions.filter(function (x) { return AggrFuncHelper.getGroup(x.name) === exports.AggrFuncGroup.Transformations; });
            trans.forEach(function (x) {
                var p = (x.param && x.param.value) ? ", " + x.param.value : "";
                result = x.name + "(" + result + p + ")";
            });
            var math = field.functions.find(function (x) { return AggrFuncHelper.getGroup(x.name) === exports.AggrFuncGroup.Math; });
            if (math) {
                result = result + " " + math.param.value;
            }
            var alias = field.functions.find(function (x) { return AggrFuncHelper.getGroup(x.name) === exports.AggrFuncGroup.Alias; });
            if (alias) {
                result = result + " AS \"" + alias.param.value + "\"";
            }
            return result;
        };
        Builder.prototype.getMeasurementText = function () {
            var meas = (!this.target.measurement) ? 'measurement' : this.target.measurement;
            var rp = (this.target.policy && this.target.policy.length > 0 && this.target.policy !== 'default') ?
                "\"" + this.target.policy + "\"." : '';
            var root = rp + "\"" + meas + "\"";
            var cond = '';
            var tagIndex = 0;
            if (this.target.tags) {
                this
                    .target
                    .tags
                    .filter(function (x) { return x.key && x.value; })
                    .forEach(function (x) {
                    if (tagIndex > 0) {
                        cond += " " + x.condition + " ";
                    }
                    cond += " \"" + x.key + "\" " + x.operator + " '" + x.value + "'";
                    ++tagIndex;
                });
            }
            var timeFilter = (this.range) ?
                this.getTimeFilter() : MetricVars.TIME_FILTER;
            if (cond.length > 0) {
                root = root + " WHERE (" + cond + ") and " + timeFilter;
            }
            else {
                // TODO
                root = root + " WHERE " + timeFilter;
            }
            var groupBy = this.target.groupBy;
            var groupByTime = groupBy.find(function (x) { return x.type == exports.GroupByOption.Time; });
            var groupByFill = groupBy.find(function (x) { return x.type == exports.GroupByOption.Fill; });
            var groupByTag = groupBy.filter(function (x) { return x.type == exports.GroupByOption.Tag; });
            //console.log( groupBy );
            if (groupByTime) {
                var gb = (this.range && groupByTime.params[0] == MetricVars.TIME_INTERVAL) ?
                    this.getOptimalAutoGroupBy() : groupByTime.params[0];
                root = root + " GROUP BY time(" + gb + ")";
            }
            if (groupByTag.length > 0) {
                root = (!groupByTime) ? root + " GROUP BY" : root + ",";
                groupByTag.forEach(function (e, index) {
                    root = "" + root + (index > 0 ? ', ' : ' ') + " \"" + e.params[0] + "\"";
                });
            }
            if (groupByFill) {
                root = root + " FILL(" + groupByFill.params[0] + ")";
            }
            if (this.target.order != exports.OrderByTime.Asc) {
                root = root + " ORDER BY time DESC";
            }
            if (this.target.limit > 0) {
                root = root + " LIMIT " + this.target.limit;
            }
            if (this.target.slimit > 0) {
                root = root + " SLIMIT " + this.target.slimit;
            }
            return root;
        };
        Builder.prototype.getOptimalAutoGroupBy = function () {
            var f = i1.TimeRangeParser.toDateTime(this.range.from, false);
            var t = i1.TimeRangeParser.toDateTime(this.range.to, true);
            if (5 > +t.diff(f, "minutes"))
                return "200ms";
            if (15 > +t.diff(f, "minutes"))
                return "1s";
            if (30 > t.diff(f, "minutes"))
                return "2s";
            if (1 > t.diff(f, "hours"))
                return "5s";
            if (3 > t.diff(f, "hours"))
                return "10s";
            if (6 > t.diff(f, "hours"))
                return "20s";
            if (12 > t.diff(f, "hours"))
                return "1m";
            if (24 > t.diff(f, "hours"))
                return "2m";
            if (7 > t.diff(f, "days"))
                return "10m";
            if (31 > t.diff(f, "days"))
                return "1h";
            if (365 > t.diff(f, "days"))
                return "12h";
            return "24h";
        };
        Builder.prototype.getTimeFilter = function () {
            var range = this.range;
            var tz = this.time.converter.timezone; //this.range.timezone;
            var from = this.getInfluxTime(range.from, false, tz);
            var to = this.getInfluxTime(range.to, true, tz);
            var fromIsAbsolute = from[from.length - 1] === 'ms';
            if (to === 'now()' && !fromIsAbsolute) {
                return 'time >= ' + from;
            }
            return 'time >= ' + from + ' and time <= ' + to;
        };
        Builder.prototype.getInfluxTime = function (date, roundUp, timezone) {
            if (_.isString(date)) {
                if (date === 'now') {
                    return 'now()';
                }
                var parts = /^now-(\d+)([dhms])$/.exec(date);
                if (parts) {
                    var amount = parseInt(parts[1], 10);
                    var unit = parts[2];
                    return 'now() - ' + amount + unit;
                }
                date = i1.TimeRangeParser.toDateTime(date, roundUp, timezone);
            }
            return date.valueOf() + 'ms';
        };
        return Builder;
    }());

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

    var BaseQueryComponent = /** @class */ (function () {
        function BaseQueryComponent(panel, dsService) {
            this.panel = panel;
            this.dsService = dsService;
            this.REMOVE = '--remove--';
            this.ADD = '--add--';
            this.change = new i0.EventEmitter();
            this.rebuild = new i0.EventEmitter();
        }
        Object.defineProperty(BaseQueryComponent.prototype, "metrics", {
            get: function () {
                return this
                    .panel
                    .widget
                    .metrics;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseQueryComponent.prototype, "dataSourceId", {
            get: function () {
                return this.metrics.dataSource;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseQueryComponent.prototype, "tags", {
            get: function () {
                return this.query.tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseQueryComponent.prototype, "fields", {
            get: function () {
                return this.query.fields;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseQueryComponent.prototype, "groupBy", {
            get: function () {
                return this.query.groupBy;
            },
            enumerable: false,
            configurable: true
        });
        BaseQueryComponent.prototype.proxy = function (command) {
            return this
                .dsService
                .proxy(this.dataSourceId, command);
        };
        BaseQueryComponent.prototype.needRebuild = function () {
            this.rebuild.emit();
        };
        BaseQueryComponent.prototype.build = function (fireRebuild) {
            var _this = this;
            if (fireRebuild === void 0) { fireRebuild = true; }
            new InfluxMetricsBuilder()
                .build({ targets: [this.query], dataSource: 0 })
                .subscribe(function (x) {
                _this.queryAsString = x;
                if (fireRebuild) {
                    _this.onRebuild();
                }
            });
        };
        BaseQueryComponent.prototype.onRebuild = function () {
        };
        return BaseQueryComponent;
    }());
    BaseQueryComponent.ɵfac = function BaseQueryComponent_Factory(t) { return new (t || BaseQueryComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
    BaseQueryComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseQueryComponent, inputs: { query: "query" }, outputs: { change: "change", rebuild: "rebuild" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BaseQueryComponent, [{
                type: i0.Directive
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.DataSourceService }];
        }, { query: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }], rebuild: [{
                    type: i0.Output
                }] });
    })();

    function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-autocomplete-picker", 13);
            i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var t_r1 = i0.ɵɵnextContext().$implicit; return t_r1.operator = $event; })("pick", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_pick_0_listener() { i0.ɵɵrestoreView(_r7_1); var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.needRebuild(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = i0.ɵɵnextContext().$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", t_r1.operator)("request", ctx_r3.tagOperators$(t_r1));
        }
    }
    function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-autocomplete-picker", 14);
            i0.ɵɵlistener("pick", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template_ed_autocomplete_picker_pick_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var t_r1 = i0.ɵɵnextContext().$implicit; var ctx_r10 = i0.ɵɵnextContext(); ctx_r10.onTagValuePick(t_r1, $event); return ctx_r10.needRebuild(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = i0.ɵɵnextContext().$implicit;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("value", t_r1.value)("request", ctx_r4.tagValues$(t_r1));
        }
    }
    function MeasurementEditorComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "ed-autocomplete-picker", 9);
            i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15_1); var t_r1 = ctx.$implicit; return t_r1.condition = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_1_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.needRebuild(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ed-autocomplete-picker", 10);
            i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r15_1); var t_r1 = ctx.$implicit; return t_r1.key = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_2_listener($event) { i0.ɵɵrestoreView(_r15_1); var t_r1 = ctx.$implicit; var ctx_r18 = i0.ɵɵnextContext(); ctx_r18.onTagKeyPick(t_r1, $event); return ctx_r18.needRebuild(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template, 1, 2, "ed-autocomplete-picker", 11);
            i0.ɵɵtemplate(4, MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template, 1, 2, "ed-autocomplete-picker", 12);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var t_r1 = ctx.$implicit;
            var i_r2 = ctx.index;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !(i_r2 > 0 && t_r1.key))("ngModel", t_r1.condition)("request", ctx_r0.conditions$);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", t_r1.key)("request", ctx_r0.tagKeys$);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", t_r1.key);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", t_r1.key);
        }
    }
    var MeasurementEditorComponent = /** @class */ (function (_super) {
        __extends(MeasurementEditorComponent, _super);
        function MeasurementEditorComponent(panel, dsService) {
            var _this = _super.call(this, panel, dsService) || this;
            _this.dsService = dsService;
            _this.DEFAULT_POLICY = 'default';
            return _this;
        }
        Object.defineProperty(MeasurementEditorComponent.prototype, "retentionPolicies$", {
            get: function () {
                return this
                    .proxy("SHOW RETENTION POLICIES")
                    .pipe(operators.map(function (x) { return __spread(['default'], x[0].values.map(function (y) { return y[0]; })); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MeasurementEditorComponent.prototype, "measurements$", {
            get: function () {
                return this
                    .proxy("SHOW MEASUREMENTS")
                    .pipe(operators.map(function (x) { return __spread(x[0].values).reduce(function (acc, value) { return acc.concat(value); }, []); }));
            },
            enumerable: false,
            configurable: true
        });
        MeasurementEditorComponent.prototype.tagOperators$ = function (tag) {
            var isRegexValue = this.isRegex(tag.value);
            var allOperators = Object.values(exports.TagOperator);
            var result = isRegexValue ? allOperators.slice(4, 6) : allOperators.slice(0, 4);
            return rxjs.of(result);
        };
        Object.defineProperty(MeasurementEditorComponent.prototype, "tagKeys$", {
            get: function () {
                var _this = this;
                var q = (this.query.measurement) ?
                    "SHOW TAG KEYS from " + this.query.measurement :
                    "SHOW TAG KEYS";
                return this
                    .proxy(q)
                    .pipe(operators.map(function (x) { return __spread(x[0].values.reduce(function (acc, value) { return acc.concat(value); }, []), [_this.REMOVE]); }));
            },
            enumerable: false,
            configurable: true
        });
        MeasurementEditorComponent.prototype.tagValues$ = function (tag) {
            var q = "SHOW TAG VALUES  WITH KEY=" + tag.key;
            return this
                .proxy(q)
                .pipe(operators.map(function (x) { return x[0].values.map(function (y) { return y[1]; }); }));
        };
        Object.defineProperty(MeasurementEditorComponent.prototype, "conditions$", {
            get: function () {
                return rxjs.of(Object.values(exports.TagCondition));
            },
            enumerable: false,
            configurable: true
        });
        MeasurementEditorComponent.prototype.ngOnInit = function () {
            //this.resetTags();
            var _a;
            if (!((_a = this.tags) === null || _a === void 0 ? void 0 : _a.length)) {
                this.tags.push(new Tag());
            }
            if (!this.query.policy) {
                this.query.policy = this.DEFAULT_POLICY;
            }
        };
        MeasurementEditorComponent.prototype.isRegex = function (expr) {
            var isValid = true;
            try {
                new RegExp(expr);
                isValid = (expr.startsWith('/') && expr.endsWith('/'));
            }
            catch (e) {
                isValid = false;
            }
            return isValid;
        };
        MeasurementEditorComponent.prototype.resetTags = function () {
            this.query.tags = [];
            this.tags.push(new Tag());
        };
        MeasurementEditorComponent.prototype.onTagKeyPick = function (t, k) {
            var index = this.tags.indexOf(t);
            if (k === null || k === void 0 ? void 0 : k.startsWith(this.REMOVE)) {
                this.query.tags = this.tags.filter(function (x) { return x != t; });
                if (0 === this.tags.length) {
                    this.resetTags();
                }
            }
            else {
                //t.key = k;
                //t.value = '';
                var len = this.tags.length;
                if (index === len - 2 && this.tags[len - 1].key.length === 0) {
                    // if value is selected remove new tag (for plus sign)
                    this.tags.pop();
                }
            }
        };
        MeasurementEditorComponent.prototype.onTagValuePick = function (t, v) {
            var oldValueIsRegEx = this.isRegex(t.value);
            t.value = v;
            var newValueIsRegEx = this.isRegex(t.value);
            var regExChanged = (oldValueIsRegEx != newValueIsRegEx);
            if (regExChanged) {
                t.operator = (newValueIsRegEx) ? exports.TagOperator.RegExEq : exports.TagOperator.Eq;
            }
            if (this.tags.indexOf(t) === this.tags.length - 1) {
                var nt = new Tag();
                this.tags.push(nt);
            }
        };
        return MeasurementEditorComponent;
    }(BaseQueryComponent));
    MeasurementEditorComponent.ɵfac = function MeasurementEditorComponent_Factory(t) { return new (t || MeasurementEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
    MeasurementEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MeasurementEditorComponent, selectors: [["measurement-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 5, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select measurement", 3, "ngModel", "request", "ngModelChange", "pick"], [1, "gf-form-label", "query-keyword"], [4, "ngFor", "ngForOf"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], ["valueClass", "query-keyword", 3, "hidden", "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "fa fa-plus", 3, "ngModel", "request", "ngModelChange", "pick"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick", 4, "ngIf"], ["placeholder", "select tag value", 3, "value", "request", "pick", 4, "ngIf"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select tag value", 3, "value", "request", "pick"]], template: function MeasurementEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "label", 2);
                i0.ɵɵtext(3, " FROM ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "ed-autocomplete-picker", 3);
                i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.query.policy = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_4_listener() { return ctx.needRebuild(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-autocomplete-picker", 4);
                i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_5_listener($event) { return ctx.query.measurement = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_5_listener() { ctx.resetTags(); return ctx.needRebuild(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 1);
                i0.ɵɵelementStart(7, "label", 5);
                i0.ɵɵtext(8, " WHERE ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, MeasurementEditorComponent_ng_container_9_Template, 5, 7, "ng-container", 6);
                i0.ɵɵelementStart(10, "div", 7);
                i0.ɵɵelement(11, "div", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.query.policy)("request", ctx.retentionPolicies$);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.query.measurement)("request", ctx.measurements$);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.query.tags);
            }
        }, directives: [i2.AutoCompletePickerComponent, i3.NgControlStatus, i3.NgModel, i2$1.NgForOf, i2$1.NgIf], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MeasurementEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'measurement-editor',
                        templateUrl: './measurement.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.DataSourceService }];
        }, null);
    })();

    var timeSuggestions = ['1s', '10s', '1m', '5m', '10m', '15m', '1h'];
    var menuItems = [
        { label: exports.AggrFuncGroup[0], items: [
                { label: exports.AggrFunc.Count },
                { label: exports.AggrFunc.Distinct },
                { label: exports.AggrFunc.Integral },
                { label: exports.AggrFunc.Mean },
                { label: exports.AggrFunc.Median },
                { label: exports.AggrFunc.Mode },
                { label: exports.AggrFunc.Sum },
            ] },
        { label: exports.AggrFuncGroup[1], items: [
                { label: exports.AggrFunc.Bottom, param: { value: '3' } },
                { label: exports.AggrFunc.First },
                { label: exports.AggrFunc.Last },
                { label: exports.AggrFunc.Max },
                { label: exports.AggrFunc.Min },
                { label: exports.AggrFunc.Percentile, param: { value: '95' } },
                { label: exports.AggrFunc.Top, param: { value: '3' } },
            ] },
        { label: exports.AggrFuncGroup[2], items: [
                { label: exports.AggrFunc.Derivative, param: { value: timeSuggestions[1], suggestions: __spread(timeSuggestions) } },
                { label: exports.AggrFunc.Spread },
                { label: exports.AggrFunc.NonNegativeDerivative, param: { value: timeSuggestions[1], suggestions: __spread(timeSuggestions) } },
                { label: exports.AggrFunc.Difference },
                { label: exports.AggrFunc.NonNegativeDifference },
                { label: exports.AggrFunc.MovingAverage, param: { value: '10', suggestions: ['5', '10', '20', '30', '40'] } },
                { label: exports.AggrFunc.CumulativeSum },
                { label: exports.AggrFunc.Stddev },
                { label: exports.AggrFunc.Elapsed, param: { value: timeSuggestions[1], suggestions: __spread(timeSuggestions) } },
            ] },
        //  { label: AggrFuncGroup[ 3 ], items: [ 
        //     { label: AggrFunc.HoltWinters },
        //     { label: AggrFunc.HoltWintersWithFit }
        //     ] },
        { label: exports.AggrFuncGroup[4], items: [
                { label: exports.AggrFunc.Math, param: { value: ' / 100' } }
            ] },
        { label: exports.AggrFuncGroup[5], items: [
                { label: exports.AggrFunc.Alias, param: { value: 'alias' } }
            ] },
        { label: 'Field', items: [{ label: 'field' }] }
    ];

    var FieldFunctionPickerComponent = /** @class */ (function () {
        function FieldFunctionPickerComponent() {
            this.items = _.cloneDeep(menuItems);
            this.pick = new i0.EventEmitter();
        }
        FieldFunctionPickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            i2.ContextMenuComponent.wrapItems(this.items, function (x) { return _this.pick.emit(x.item); });
        };
        return FieldFunctionPickerComponent;
    }());
    FieldFunctionPickerComponent.ɵfac = function FieldFunctionPickerComponent_Factory(t) { return new (t || FieldFunctionPickerComponent)(); };
    FieldFunctionPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldFunctionPickerComponent, selectors: [["field-function-picker"]], outputs: { pick: "pick" }, decls: 5, vars: 1, consts: [[1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-plus"], [3, "items"], ["cm", ""]], template: function FieldFunctionPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "a", 1);
                i0.ɵɵlistener("click", function FieldFunctionPickerComponent_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(4); return _r0.show($event); });
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "ed-context-menu", 3, 4);
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("items", ctx.items);
            }
        }, directives: [i2.ContextMenuComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FieldFunctionPickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'field-function-picker',
                        template: "\n    <div class=\"gf-form\" >\n      <a class=\"gf-form-label pointer\" (click)=\"cm.show( $event )\" >\n        <i class=\"fa fa-plus\" ></i>\n      </a>\n    </div>\n\n    <ed-context-menu [items]=\"items\" #cm></ed-context-menu>\n  "
                    }]
            }], null, { pick: [{
                    type: i0.Output
                }] });
    })();

    var _c0 = ["editor"];
    var _c1 = ["suggestions"];
    function FieldFunctionEditorComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a");
            i0.ɵɵelementStart(1, "span", 9);
            i0.ɵɵlistener("click", function FieldFunctionEditorComponent_a_4_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onShowEditor($event); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", ctx_r0.isEditorVisible);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r0.paramValue);
        }
    }
    var _c2 = function (a0) { return { width: a0 }; };
    function FieldFunctionEditorComponent_input_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 10, 11);
            i0.ɵɵlistener("ngModelChange", function FieldFunctionEditorComponent_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.textValue = $event; })("focusout", function FieldFunctionEditorComponent_input_5_Template_input_focusout_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onEditorFocusOut(); })("keydown", function FieldFunctionEditorComponent_input_5_Template_input_keydown_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onEditorKeyDown(); })("keyup.enter", function FieldFunctionEditorComponent_input_5_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onEditorKeyUpEnter(); })("keyup.escape", function FieldFunctionEditorComponent_input_5_Template_input_keyup_escape_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onEditorKeyUpEnter(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, (ctx_r1.textValue.length + 1) * 8 + "px"))("ngModel", ctx_r1.textValue);
        }
    }
    var _c3 = function (a0) { return [a0]; };
    var FieldFunctionEditorComponent = /** @class */ (function () {
        function FieldFunctionEditorComponent() {
            var _this = this;
            this.remove = new i0.EventEmitter();
            this.rebuild = new i0.EventEmitter();
            this.isEditorVisible = false;
            this.isSuggestionsMenuOpen = false;
            this.suggestionItems = [];
            this.deleteMenuItem = { label: 'Remove', command: function (_) { return _this.remove.emit(); } };
        }
        Object.defineProperty(FieldFunctionEditorComponent.prototype, "param", {
            get: function () {
                return this.func.param;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FieldFunctionEditorComponent.prototype, "paramValue", {
            get: function () {
                return this.param.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FieldFunctionEditorComponent.prototype, "hasSuggestions", {
            get: function () {
                return (this.param && this.param.suggestions);
            },
            enumerable: false,
            configurable: true
        });
        FieldFunctionEditorComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.param) {
                this.textValue = this.paramValue;
            }
            if (this.hasSuggestions) {
                this
                    .param
                    .suggestions
                    .forEach(function (e) { return _this.suggestionItems.push({
                    label: e,
                    command: function (x) {
                        var same = _this.paramValue == x.item.label;
                        if (!same) {
                            _this.param.value = _this.textValue = x.item.label;
                            _this.isEditorVisible = false;
                            _this.rebuild.emit();
                        }
                    }
                }); });
            }
        };
        FieldFunctionEditorComponent.prototype.onShowEditor = function (e) {
            var _this = this;
            if (!this.param) {
                return;
            }
            if (this.hasSuggestions) {
                this.isSuggestionsMenuOpen = true;
                this.suggestions.show(e);
            }
            setTimeout(function () {
                _this.isEditorVisible = true;
                setTimeout(function () { return _this.editorElement.nativeElement.focus(); }, 0);
            }, 0);
        };
        FieldFunctionEditorComponent.prototype.onEditorFocusOut = function () {
            if (!this.isSuggestionsMenuOpen) {
                this.isEditorVisible = false;
                var same = this.paramValue == this.textValue;
                if (!same) {
                    this.param.value = this.textValue;
                    this.rebuild.emit();
                }
            }
        };
        FieldFunctionEditorComponent.prototype.onEditorKeyDown = function () {
            this.isSuggestionsMenuOpen = false;
            this.suggestions.hide();
        };
        FieldFunctionEditorComponent.prototype.onEditorKeyUpEnter = function () {
            this.isEditorVisible = false;
            var same = this.paramValue == this.textValue;
            if (!same) {
                this.param.value = this.textValue;
                this.rebuild.emit();
            }
        };
        return FieldFunctionEditorComponent;
    }());
    FieldFunctionEditorComponent.ɵfac = function FieldFunctionEditorComponent_Factory(t) { return new (t || FieldFunctionEditorComponent)(); };
    FieldFunctionEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldFunctionEditorComponent, selectors: [["field-function-editor"]], viewQuery: function FieldFunctionEditorComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorElement = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.suggestions = _t.first);
            }
        }, inputs: { func: "func" }, outputs: { remove: "remove", rebuild: "rebuild" }, decls: 12, vars: 7, consts: [[1, "gf-form"], [1, "gf-form-label"], [1, "pointer", 3, "click"], [4, "ngIf"], ["type", "text", "class", "ff__editor ", "spellcheck", "false", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter", "keyup.escape", 4, "ngIf"], [3, "click"], [3, "items"], ["cmRemove", ""], ["suggestions", ""], [3, "hidden", "click"], ["type", "text", "spellcheck", "false", 1, "ff__editor", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter", "keyup.escape"], ["editor", ""]], template: function FieldFunctionEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r13_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "label", 1);
                i0.ɵɵelementStart(2, "a", 2);
                i0.ɵɵlistener("click", function FieldFunctionEditorComponent_Template_a_click_2_listener($event) { i0.ɵɵrestoreView(_r13_1); var _r2 = i0.ɵɵreference(9); return _r2.show($event); });
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, FieldFunctionEditorComponent_a_4_Template, 3, 2, "a", 3);
                i0.ɵɵtemplate(5, FieldFunctionEditorComponent_input_5_Template, 2, 4, "input", 4);
                i0.ɵɵelementStart(6, "a", 5);
                i0.ɵɵlistener("click", function FieldFunctionEditorComponent_Template_a_click_6_listener($event) { return ctx.onShowEditor($event); });
                i0.ɵɵtext(7, ")");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "ed-context-menu", 6, 7);
                i0.ɵɵelement(10, "ed-context-menu", 6, 8);
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1("", ctx.func.name, " (");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.param);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isEditorVisible);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("items", i0.ɵɵpureFunction1(5, _c3, ctx.deleteMenuItem));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("items", ctx.suggestionItems);
            }
        }, directives: [i2$1.NgIf, i2.ContextMenuComponent, i3.DefaultValueAccessor, i2$1.NgStyle, i3.NgControlStatus, i3.NgModel], styles: [".ff__editor[_ngcontent-%COMP%]{background:transparent;border:none;color:#d8d9da;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin:0;padding:0;width:24px}.ff__editor[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;outline:none!important;outline-width:0!important}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FieldFunctionEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'field-function-editor',
                        templateUrl: './func-editor.html',
                        styleUrls: ['./func-editor.scss']
                    }]
            }], null, { func: [{
                    type: i0.Input
                }], remove: [{
                    type: i0.Output
                }], rebuild: [{
                    type: i0.Output
                }], editorElement: [{
                    type: i0.ViewChild,
                    args: ['editor']
                }], suggestions: [{
                    type: i0.ViewChild,
                    args: ["suggestions"]
                }] });
    })();

    function FieldEditorComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "SELECT");
            i0.ɵɵelementEnd();
        }
    }
    function FieldEditorComponent_field_function_editor_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "field-function-editor", 9);
            i0.ɵɵlistener("remove", function FieldEditorComponent_field_function_editor_6_Template_field_function_editor_remove_0_listener() { i0.ɵɵrestoreView(_r4_1); var f_r2 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); ctx_r3.onFuncRemove(f_r2); return ctx_r3.needRebuild(); })("rebuild", function FieldEditorComponent_field_function_editor_6_Template_field_function_editor_rebuild_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.needRebuild(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var f_r2 = ctx.$implicit;
            i0.ɵɵproperty("func", f_r2);
        }
    }
    var FieldEditorComponent = /** @class */ (function (_super) {
        __extends(FieldEditorComponent, _super);
        function FieldEditorComponent(panel, dsService) {
            var _this = _super.call(this, panel, dsService) || this;
            _this.dsService = dsService;
            _this.fieldFuncItems = menuItems;
            _this.remove = new i0.EventEmitter();
            _this.add = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(FieldEditorComponent.prototype, "functions", {
            get: function () {
                return this.field.functions;
            },
            enumerable: false,
            configurable: true
        });
        FieldEditorComponent.prototype.ngOnInit = function () {
            this.index = this
                .query
                .fields
                .indexOf(this.field);
            var flatFieldFuncItems = this
                .fieldFuncItems
                .map(function (p) { return p.items; })
                .reduce(function (a, b) { return a.concat(b); });
            this
                .field
                .functions
                .forEach(function (f) {
                if (f.param) {
                    var s = flatFieldFuncItems.find(function (x) { return x.text === f.name; });
                    if (s && s.param && s.param.suggestions) {
                        f.param.suggestions = __spread(s.param.suggestions);
                    }
                }
            });
        };
        Object.defineProperty(FieldEditorComponent.prototype, "fields$", {
            get: function () {
                var _this = this;
                return this
                    .proxy("SHOW FIELD KEYS FROM \"" + this.query.measurement + "\"")
                    .pipe(operators.map(function (x) {
                    if (!x || 0 == x.length) {
                        return null;
                    }
                    var fields = __spread(x[0].values.map(function (y) { return y[0]; }));
                    return (_this.query.fields.length > 1) ? __spread([_this.REMOVE], fields) : fields;
                }));
            },
            enumerable: false,
            configurable: true
        });
        FieldEditorComponent.prototype.onFieldPick = function (field) {
            if (field === this.REMOVE) {
                this.remove.emit();
            }
            else {
                this.field.key = field;
            }
        };
        FieldEditorComponent.prototype.onFuncPick = function (arg) {
            var fo = new FuncObject();
            fo.name = arg.label;
            if (arg.label == "field") {
                this.add.emit();
                return;
            }
            if (arg.param) {
                fo.param = _.cloneDeep(arg.param);
            }
            var alias = this.functions.find(function (x) { return AggrFuncHelper.getGroup(x.name) == exports.AggrFuncGroup.Alias; });
            var math = this.functions.find(function (x) { return AggrFuncHelper.getGroup(x.name) == exports.AggrFuncGroup.Math; });
            var len = this.functions.length;
            var funcs = this.functions;
            switch (AggrFuncHelper.getGroup(arg.label)) {
                case exports.AggrFuncGroup.Aggregations:
                case exports.AggrFuncGroup.Selectors:
                    var duplicate = this
                        .field
                        .functions
                        .find(function (x) { return AggrFuncHelper.getGroup(x.name) == exports.AggrFuncGroup.Aggregations ||
                        AggrFuncHelper.getGroup(x.name) == exports.AggrFuncGroup.Selectors; });
                    if (duplicate) {
                        funcs[0] = fo;
                    }
                    else {
                        funcs.splice(0, 0, fo);
                    }
                    break;
                case exports.AggrFuncGroup.Transformations:
                    if (!alias) {
                        funcs.push(fo);
                    }
                    else {
                        funcs.splice(len - 1, 0, fo);
                    }
                    break;
                case exports.AggrFuncGroup.Math:
                    if (math && !alias) {
                        funcs[len - 1] = fo;
                    }
                    else if (!math && alias) {
                        funcs.splice(len - 1, 0, fo);
                    }
                    else {
                        funcs.push(fo);
                    }
                    break;
                case exports.AggrFuncGroup.Alias:
                    if (alias) {
                        this.functions[len - 1] = fo;
                    }
                    else {
                        this.functions.push(fo);
                    }
                    break;
            }
        };
        FieldEditorComponent.prototype.onFuncRemove = function (f) {
            var index = this.functions.indexOf(f);
            if (-1 !== index) {
                this.functions.splice(index, 1);
            }
        };
        return FieldEditorComponent;
    }(BaseQueryComponent));
    FieldEditorComponent.ɵfac = function FieldEditorComponent_Factory(t) { return new (t || FieldEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
    FieldEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldEditorComponent, selectors: [["field-editor"]], inputs: { field: "field" }, outputs: { remove: "remove", add: "add" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 4, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [4, "ngIf"], ["placeholder", "field(value)", "formatString", "field({0})", 3, "ngModel", "request", "ngModelChange", "pick"], [3, "func", "remove", "rebuild", 4, "ngFor", "ngForOf"], [3, "pick"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [3, "func", "remove", "rebuild"]], template: function FieldEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "label", 2);
                i0.ɵɵtemplate(3, FieldEditorComponent_span_3_Template, 2, 0, "span", 3);
                i0.ɵɵtext(4, "\u00A0 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-autocomplete-picker", 4);
                i0.ɵɵlistener("ngModelChange", function FieldEditorComponent_Template_ed_autocomplete_picker_ngModelChange_5_listener($event) { return ctx.field.key = $event; })("pick", function FieldEditorComponent_Template_ed_autocomplete_picker_pick_5_listener($event) { ctx.onFieldPick($event); return ctx.needRebuild(); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(6, FieldEditorComponent_field_function_editor_6_Template, 1, 1, "field-function-editor", 5);
                i0.ɵɵelementStart(7, "field-function-picker", 6);
                i0.ɵɵlistener("pick", function FieldEditorComponent_Template_field_function_picker_pick_7_listener($event) { ctx.onFuncPick($event); return ctx.needRebuild(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 7);
                i0.ɵɵelement(9, "div", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.index === 0);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.field.key)("request", ctx.fields$);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.field.functions);
            }
        }, directives: [i2$1.NgIf, i2.AutoCompletePickerComponent, i3.NgControlStatus, i3.NgModel, i2$1.NgForOf, FieldFunctionPickerComponent, FieldFunctionEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FieldEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'field-editor',
                        templateUrl: './field.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.DataSourceService }];
        }, { field: [{
                    type: i0.Input
                }], remove: [{
                    type: i0.Output
                }], add: [{
                    type: i0.Output
                }] });
    })();

    function FieldsEditorComponent_field_editor_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "field-editor", 1);
            i0.ɵɵlistener("remove", function FieldsEditorComponent_field_editor_0_Template_field_editor_remove_0_listener() { i0.ɵɵrestoreView(_r3_1); var f_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(f_r1); })("add", function FieldsEditorComponent_field_editor_0_Template_field_editor_add_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onAdd(); })("rebuild", function FieldsEditorComponent_field_editor_0_Template_field_editor_rebuild_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.needRebuild(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var f_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("query", ctx_r0.query)("field", f_r1);
        }
    }
    var FieldsEditorComponent = /** @class */ (function (_super) {
        __extends(FieldsEditorComponent, _super);
        function FieldsEditorComponent(panel, dsService) {
            var _this = _super.call(this, panel, dsService) || this;
            _this.dsService = dsService;
            return _this;
        }
        FieldsEditorComponent.prototype.ngOnInit = function () {
            var _a;
            if (!((_a = this.fields) === null || _a === void 0 ? void 0 : _a.length)) {
                this.query.fields = [this.createEmpyField()];
            }
        };
        FieldsEditorComponent.prototype.onRemove = function (f) {
            var fields = this.query.fields;
            if (1 < fields.length) {
                var index = fields.indexOf(f);
                if (-1 !== index) {
                    this.query.fields.splice(index, 1);
                }
            }
        };
        FieldsEditorComponent.prototype.onAdd = function () {
            this
                .query
                .fields
                .push(this.createEmpyField());
        };
        FieldsEditorComponent.prototype.createEmpyField = function () {
            var def = new FuncObject();
            def.name = exports.AggrFunc.Mean;
            var field = new Field();
            field.functions = [def];
            return field;
        };
        return FieldsEditorComponent;
    }(BaseQueryComponent));
    FieldsEditorComponent.ɵfac = function FieldsEditorComponent_Factory(t) { return new (t || FieldsEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
    FieldsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldsEditorComponent, selectors: [["fields-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "query", "field", "remove", "add", "rebuild", 4, "ngFor", "ngForOf"], [3, "query", "field", "remove", "add", "rebuild"]], template: function FieldsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FieldsEditorComponent_field_editor_0_Template, 1, 2, "field-editor", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.query.fields);
            }
        }, directives: [i2$1.NgForOf, FieldEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FieldsEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fields-editor',
                        template: "\n    <field-editor *ngFor=\"let f of query.fields\" \n      [query]=\"query\" \n      [field]=\"f\"\n      (remove)=\"onRemove(f)\"\n      (add)=\"onAdd()\"\n      (rebuild)=\"needRebuild()\" >\n    </field-editor> "
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.DataSourceService }];
        }, null);
    })();

    var _c0$1 = ["tag-label", ""];
    var _c1$1 = function (a0) { return [a0]; };
    var GroupByTagLabelComponent = /** @class */ (function () {
        function GroupByTagLabelComponent() {
            var _this = this;
            this.removed = new i0.EventEmitter();
            this.deleteMenuItem = {
                label: 'Remove',
                command: function (_) { return _this.removed.emit(_this.value); }
            };
        }
        return GroupByTagLabelComponent;
    }());
    GroupByTagLabelComponent.ɵfac = function GroupByTagLabelComponent_Factory(t) { return new (t || GroupByTagLabelComponent)(); };
    GroupByTagLabelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GroupByTagLabelComponent, selectors: [["", "tag-label", ""]], inputs: { value: "value" }, outputs: { removed: "removed" }, attrs: _c0$1, decls: 4, vars: 4, consts: [[1, "gf-form-label", 3, "click"], [3, "items"], ["cm", ""]], template: function GroupByTagLabelComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵlistener("click", function GroupByTagLabelComponent_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(3); return _r0.show($event); });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(2, "ed-context-menu", 1, 2);
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1("tag(", ctx.value, ")");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("items", i0.ɵɵpureFunction1(2, _c1$1, ctx.deleteMenuItem));
            }
        }, directives: [i2.ContextMenuComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GroupByTagLabelComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[tag-label]',
                        template: "\n\t<span (click)=\"cm.show($event)\" class=\"gf-form-label\">tag({{value}})</span>\n\n\t<ed-context-menu [items]=\"[deleteMenuItem]\" #cm>",
                    }]
            }], null, { value: [{
                    type: i0.Input
                }], removed: [{
                    type: i0.Output
                }] });
    })();

    function GroupByEditorComponent_ed_autocomplete_picker_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-autocomplete-picker", 11);
            i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_ed_autocomplete_picker_5_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.timeValue = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r0.timeValue)("request", ctx_r0.timeOptions$);
        }
    }
    function GroupByEditorComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵlistener("removed", function GroupByEditorComponent_div_6_Template_div_removed_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onRemoveTag($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r7 = ctx.$implicit;
            i0.ɵɵproperty("value", t_r7.params[0]);
        }
    }
    function GroupByEditorComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "label", 2);
            i0.ɵɵtext(3, " ORDER BY ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "label", 13);
            i0.ɵɵlistener("click", function GroupByEditorComponent_div_10_Template_label_click_4_listener() { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(); ctx_r10.query.order = ctx_r10.OrderByTimeRef.Asc; return ctx_r10.needRebuild(); });
            i0.ɵɵtext(5, " time ");
            i0.ɵɵelementStart(6, "span", 14);
            i0.ɵɵtext(7, "DESC");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "i", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 6);
            i0.ɵɵelement(10, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function GroupByEditorComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "label", 2);
            i0.ɵɵtext(3, "LIMIT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 16);
            i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_div_11_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.limit = $event; })("change", function GroupByEditorComponent_div_11_Template_input_change_4_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.needRebuild(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 6);
            i0.ɵɵelement(6, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx_r3.limit);
        }
    }
    function GroupByEditorComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "label", 2);
            i0.ɵɵtext(3, "SLIMIT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 16);
            i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_div_12_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.slimit = $event; })("change", function GroupByEditorComponent_div_12_Template_input_change_4_listener() { i0.ɵɵrestoreView(_r16_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.needRebuild(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 6);
            i0.ɵɵelement(6, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx_r4.slimit);
        }
    }
    var GroupByEditorComponent = /** @class */ (function (_super) {
        __extends(GroupByEditorComponent, _super);
        function GroupByEditorComponent(panel, dsService) {
            var _this = _super.call(this, panel, dsService) || this;
            _this.dsService = dsService;
            _this.OrderByTimeRef = exports.OrderByTime;
            _this.selectedCommands = [];
            _this.availableCommands = [
                new GroupByCommand(GroupByCommandType.Fill, "fill(null)", "null"),
                new GroupByCommand(GroupByCommandType.Time, "time($interval)", "$__interval"),
                new GroupByCommand(GroupByCommandType.Limit, "LIMIT", 10),
                new GroupByCommand(GroupByCommandType.SLimit, "SLIMIT", 10),
                new GroupByCommand(GroupByCommandType.OrderBy, "ORDER BY time DESC")
            ];
            return _this;
        }
        Object.defineProperty(GroupByEditorComponent.prototype, "limit", {
            get: function () {
                return this.query.limit;
            },
            set: function (l) {
                this.query.limit = l;
                if (!l) {
                    this.needRebuild();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "slimit", {
            get: function () {
                return this.query.slimit;
            },
            set: function (l) {
                this.query.slimit = l;
                if (!l) {
                    this.needRebuild();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "time", {
            get: function () {
                return this.groupBy.find(function (x) { return x.type == exports.GroupByOption.Time; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "timeValue", {
            get: function () {
                return this.time.params[0];
            },
            set: function (v) {
                if (v == this.REMOVE) {
                    var index = this
                        .groupBy
                        .findIndex(function (x) { return x.type == exports.GroupByOption.Time; });
                    if (-1 !== index) {
                        this.groupBy.splice(index, 1);
                    }
                }
                else {
                    this.time.params = [v];
                }
                this.needRebuild();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "groupByTags", {
            get: function () {
                return this.query.groupBy.filter(function (x) { return x.type == exports.GroupByOption.Tag; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "fill", {
            get: function () {
                return this.groupBy.find(function (x) { return x.type == exports.GroupByOption.Fill; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "fillValue", {
            get: function () {
                return this.fill.params[0];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "showFill", {
            get: function () {
                return (undefined != this.fill);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "timeOptions$", {
            get: function () {
                return rxjs.of(__spread([this.REMOVE], Object.values(exports.GroupByTimeOptions)));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "fillOptions", {
            get: function () {
                return rxjs.of(__spread([this.REMOVE], Object.values(exports.GroupByFillOptions)));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GroupByEditorComponent.prototype, "groupByOptions$", {
            get: function () {
                var _this = this;
                var options = [];
                if (!this.selectedCommands.find(function (x) { return x.type == GroupByCommandType.Fill; })) {
                    options.push(this.availableCommands[0].text);
                }
                if (!this.time) {
                    options.push(this.availableCommands[1].text);
                }
                if (!this.query.limit) {
                    options.push(this.availableCommands[2].text);
                }
                if (!this.query.slimit) {
                    options.push(this.availableCommands[3].text);
                }
                if (this.query.order != exports.OrderByTime.Desc) {
                    options.push(this.availableCommands[4].text);
                }
                var q = (this.query.measurement) ?
                    "SHOW TAG KEYS from " + this.query.measurement :
                    "SHOW TAG KEYS";
                return this
                    .proxy(q)
                    .pipe(operators.map(function (x) {
                    var tags = x[0].values.reduce(function (acc, value) { return acc.concat(value); }, []);
                    _this.availableCommands = _this
                        .availableCommands
                        .filter(function (x) { return x.type != GroupByCommandType.Tag; });
                    tags.forEach(function (e) { return _this.availableCommands.push(new GroupByCommand(GroupByCommandType.Tag, "tag(" + e + ")", e)); });
                    var tagCommands = _this
                        .availableCommands
                        .filter(function (c) { return c.type == GroupByCommandType.Tag; })
                        .filter(function (c) { return !_this.query.groupBy.find(function (x) { return x.type == GroupByCommandType.Tag && x.params[0] == c.value; }); })
                        .map(function (c) { return c.text; });
                    return __spread(options, tagCommands);
                }));
            },
            enumerable: false,
            configurable: true
        });
        GroupByEditorComponent.prototype.onOptionPick = function (e) {
            var command = this
                .availableCommands
                .find(function (x) { return x.text == e; });
            if (!command) {
                return;
            }
            this.selectedCommands.push(command);
            switch (command.type) {
                case GroupByCommandType.Time:
                    this.groupBy.push(new GroupByObject(exports.GroupByOption.Time, [command.value]));
                    break;
                case GroupByCommandType.Fill:
                    this.groupBy.push(new GroupByObject(exports.GroupByOption.Fill, [command.value]));
                    break;
                case GroupByCommandType.Limit:
                    this.query.limit = command.value;
                    break;
                case GroupByCommandType.SLimit:
                    this.query.slimit = command.value;
                    break;
                case GroupByCommandType.OrderBy:
                    this.query.order = exports.OrderByTime.Desc;
                    break;
                case GroupByCommandType.Tag:
                    this.groupBy.push(new GroupByObject(exports.GroupByOption.Tag, [command.value]));
                    break;
            }
            this.needRebuild();
        };
        GroupByEditorComponent.prototype.onRemoveTag = function (t) {
            this.query.groupBy = this
                .groupBy
                .filter(function (x) { return !(x.type == exports.GroupByOption.Tag && x.params[0] == t); });
            this.needRebuild();
        };
        return GroupByEditorComponent;
    }(BaseQueryComponent));
    GroupByEditorComponent.ɵfac = function GroupByEditorComponent_Factory(t) { return new (t || GroupByEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
    GroupByEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GroupByEditorComponent, selectors: [["group-by-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 20, vars: 7, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], ["formatString", "time({0})", 3, "ngModel", "request", "ngModelChange", 4, "ngIf"], ["tag-label", "", "class", "gf-form pointer", 3, "value", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "fa fa-plus", "readonly", "true", 3, "request", "pick"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], ["class", "gf-form-inline", 4, "ngIf"], [1, "gf-form", "max-width-30"], ["type", "text", "spellcheck", "false", "placeholder", "Naming pattern", 1, "gf-form-input", 3, "ngModel", "ngModelChange"], ["formatString", "time({0})", 3, "ngModel", "request", "ngModelChange"], ["tag-label", "", 1, "gf-form", "pointer", 3, "value", "removed"], [1, "gf-form-label", "pointer", 3, "click"], [1, "query-keyword"], [1, "fa", "fa-remove", "ml-1"], ["type", "text", "spellcheck", "false", "placeholder", "No Limit", 1, "gf-form-input", "width-9", 3, "ngModel", "ngModelChange", "change"]], template: function GroupByEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "label", 2);
                i0.ɵɵelementStart(3, "span");
                i0.ɵɵtext(4, "GROUP BY");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, GroupByEditorComponent_ed_autocomplete_picker_5_Template, 1, 2, "ed-autocomplete-picker", 3);
                i0.ɵɵtemplate(6, GroupByEditorComponent_div_6_Template, 1, 1, "div", 4);
                i0.ɵɵelementStart(7, "ed-autocomplete-picker", 5);
                i0.ɵɵlistener("pick", function GroupByEditorComponent_Template_ed_autocomplete_picker_pick_7_listener($event) { return ctx.onOptionPick($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 6);
                i0.ɵɵelement(9, "div", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, GroupByEditorComponent_div_10_Template, 11, 0, "div", 8);
                i0.ɵɵtemplate(11, GroupByEditorComponent_div_11_Template, 7, 1, "div", 8);
                i0.ɵɵtemplate(12, GroupByEditorComponent_div_12_Template, 7, 1, "div", 8);
                i0.ɵɵelementStart(13, "div", 0);
                i0.ɵɵelementStart(14, "div", 9);
                i0.ɵɵelementStart(15, "label", 2);
                i0.ɵɵtext(16, "ALIAS BY");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "input", 10);
                i0.ɵɵlistener("ngModelChange", function GroupByEditorComponent_Template_input_ngModelChange_17_listener($event) { return ctx.query.alias = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "div", 6);
                i0.ɵɵelement(19, "div", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.time);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.groupByTags);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("request", ctx.groupByOptions$);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.query.order == ctx.OrderByTimeRef.Desc);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.query.limit);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.query.slimit);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngModel", ctx.query.alias);
            }
        }, directives: [i2$1.NgIf, i2$1.NgForOf, i2.AutoCompletePickerComponent, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, GroupByTagLabelComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GroupByEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'group-by-editor',
                        templateUrl: './group-by.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.DataSourceService }];
        }, null);
    })();
    var GroupByCommand = /** @class */ (function () {
        function GroupByCommand(type, text, value) {
            if (value === void 0) { value = undefined; }
            this.type = type;
            this.text = text;
            this.value = value;
        }
        return GroupByCommand;
    }());
    var GroupByCommandType;
    (function (GroupByCommandType) {
        GroupByCommandType[GroupByCommandType["Fill"] = 0] = "Fill";
        GroupByCommandType[GroupByCommandType["Time"] = 1] = "Time";
        GroupByCommandType[GroupByCommandType["Tag"] = 2] = "Tag";
        GroupByCommandType[GroupByCommandType["Limit"] = 3] = "Limit";
        GroupByCommandType[GroupByCommandType["SLimit"] = 4] = "SLimit";
        GroupByCommandType[GroupByCommandType["OrderBy"] = 5] = "OrderBy";
    })(GroupByCommandType || (GroupByCommandType = {}));

    function QueryEditorComponent_i_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 20);
        }
    }
    function QueryEditorComponent_i_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 21);
        }
    }
    function QueryEditorComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 22);
            i0.ɵɵelementStart(1, "div", 23);
            i0.ɵɵelementStart(2, "label", 24);
            i0.ɵɵlistener("click", function QueryEditorComponent_div_9_Template_label_click_2_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.opened = !ctx_r5.opened; });
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.queryAsString, " ");
        }
    }
    function QueryEditorComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 25);
            i0.ɵɵelementStart(1, "measurement-editor", 26);
            i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_Template_measurement_editor_rebuild_1_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.build(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "fields-editor", 26);
            i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_Template_fields_editor_rebuild_2_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.build(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "group-by-editor", 26);
            i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_Template_group_by_editor_rebuild_3_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.build(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("query", ctx_r3.query);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("query", ctx_r3.query);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("query", ctx_r3.query);
        }
    }
    var QueryEditorComponent = /** @class */ (function (_super) {
        __extends(QueryEditorComponent, _super);
        function QueryEditorComponent(panel, dsService, time) {
            var _this = _super.call(this, panel, dsService) || this;
            _this.dsService = dsService;
            _this.time = time;
            _this.contextMenuItems = [];
            _this.opened = true;
            _this.editMode = false;
            _this.remove = new i0.EventEmitter();
            _this.moveUp = new i0.EventEmitter();
            _this.moveDown = new i0.EventEmitter();
            _this.duplicate = new i0.EventEmitter();
            return _this;
        }
        QueryEditorComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.contextMenuItems = [
                {
                    label: 'Toggle edit mode',
                    command: function (_) { return _this.editMode != _this.editMode; }
                },
                {
                    label: 'Duplicate',
                    command: function (_) { return _this.duplicate.emit(); }
                },
                {
                    label: 'Move up',
                    command: function (_) { return _this.moveUp.emit(); }
                },
                {
                    label: 'Move down',
                    command: function (_) { return _this.moveDown.emit(); }
                },
            ];
            this.build(false);
        };
        QueryEditorComponent.prototype.onRebuild = function () {
            this.rebuild.emit();
        };
        return QueryEditorComponent;
    }(BaseQueryComponent));
    QueryEditorComponent.ɵfac = function QueryEditorComponent_Factory(t) { return new (t || QueryEditorComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
    QueryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: QueryEditorComponent, selectors: [["query-editor"]], outputs: { remove: "remove", moveUp: "moveUp", moveDown: "moveDown", duplicate: "duplicate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 6, consts: [[1, "gf-form-query"], [1, "gf-form", "gf-form-query-letter-cell", 3, "click"], [1, "gf-form-label"], ["tabindex", "1", 1, "pointer"], ["ng-class", "{muted: !ctrl.canCollapse}", 1, "gf-form-query-letter-cell-carret"], ["class", "fa fa-caret-down", 4, "ngIf"], ["class", "fa fa-caret-right", 4, "ngIf"], [1, "gf-form-query-letter-cell-letter"], ["class", "gf-form-query-content gf-form-query-content--collapsed mr-1", 4, "ngIf"], ["class", "gf-form-query-content", 4, "ngIf"], [1, "gf-form", "ed"], [1, "gf-form-label", 3, "click"], ["data-toggle", "dropdown", "tabindex", "1", 1, "pointer", "dropdown-toggle"], [1, "fa", "fa-bars"], ["ng-click", "ctrl.toggleHideQuery()", "role", "menuitem"], [1, "fa", "fa-eye"], ["tabindex", "1", 1, "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "items"], ["cm", ""], [1, "fa", "fa-caret-down"], [1, "fa", "fa-caret-right"], [1, "gf-form-query-content", "gf-form-query-content--collapsed", "mr-1"], [1, "gf-form"], [1, "gf-form-label", "pointer", "gf-form-label--grow", 3, "click"], [1, "gf-form-query-content"], [3, "query", "rebuild"]], template: function QueryEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r11_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵlistener("click", function QueryEditorComponent_Template_div_click_1_listener() { return ctx.opened = !ctx.opened; });
                i0.ɵɵelementStart(2, "label", 2);
                i0.ɵɵelementStart(3, "a", 3);
                i0.ɵɵelementStart(4, "span", 4);
                i0.ɵɵtemplate(5, QueryEditorComponent_i_5_Template, 1, 0, "i", 5);
                i0.ɵɵtemplate(6, QueryEditorComponent_i_6_Template, 1, 0, "i", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "span", 7);
                i0.ɵɵtext(8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, QueryEditorComponent_div_9_Template, 4, 1, "div", 8);
                i0.ɵɵtemplate(10, QueryEditorComponent_div_10_Template, 4, 3, "div", 9);
                i0.ɵɵelementStart(11, "div", 10);
                i0.ɵɵelementStart(12, "label", 11);
                i0.ɵɵlistener("click", function QueryEditorComponent_Template_label_click_12_listener($event) { i0.ɵɵrestoreView(_r11_1); var _r4 = i0.ɵɵreference(22); return _r4.show($event); });
                i0.ɵɵelementStart(13, "a", 12);
                i0.ɵɵelement(14, "i", 13);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "label", 2);
                i0.ɵɵelementStart(16, "a", 14);
                i0.ɵɵelement(17, "i", 15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "label", 2);
                i0.ɵɵelementStart(19, "a", 16);
                i0.ɵɵlistener("click", function QueryEditorComponent_Template_a_click_19_listener() { return ctx.remove.emit(); });
                i0.ɵɵelement(20, "i", 17);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(21, "ed-context-menu", 18, 19);
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.opened);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.opened);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.query.refId);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.opened);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.opened);
                i0.ɵɵadvance(11);
                i0.ɵɵproperty("items", ctx.contextMenuItems);
            }
        }, directives: [i2$1.NgIf, i2.ContextMenuComponent, MeasurementEditorComponent, FieldsEditorComponent, GroupByEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(QueryEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'query-editor',
                        templateUrl: './query.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.DataSourceService }, { type: i1.TimeRangeStore }];
        }, { remove: [{
                    type: i0.Output
                }], moveUp: [{
                    type: i0.Output
                }], moveDown: [{
                    type: i0.Output
                }], duplicate: [{
                    type: i0.Output
                }] });
    })();

    function InfluxMetricsDesignerComponent_query_editor_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "query-editor", 1);
            i0.ɵɵlistener("remove", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_remove_0_listener() { i0.ɵɵrestoreView(_r3_1); var t_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(t_r1); })("duplicate", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_duplicate_0_listener() { i0.ɵɵrestoreView(_r3_1); var t_r1 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onDuplicate(t_r1); })("moveUp", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveUp_0_listener() { i0.ɵɵrestoreView(_r3_1); var t_r1 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onMoveUp(t_r1); })("moveDown", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveDown_0_listener() { i0.ɵɵrestoreView(_r3_1); var t_r1 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onMoveDown(t_r1); })("rebuild", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_rebuild_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.rebuild(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = ctx.$implicit;
            i0.ɵɵproperty("query", t_r1);
        }
    }
    var InfluxMetricsDesignerComponent = /** @class */ (function () {
        function InfluxMetricsDesignerComponent(panel, time) {
            this.panel = panel;
            this.time = time;
        }
        Object.defineProperty(InfluxMetricsDesignerComponent.prototype, "metrics", {
            get: function () {
                return this
                    .panel
                    .widget
                    .metrics;
            },
            enumerable: false,
            configurable: true
        });
        InfluxMetricsDesignerComponent.prototype.onRemove = function (t) {
            var index = this.metrics.targets.indexOf(t);
            if (-1 !== index) {
                this.metrics.targets.splice(index, 1);
                this.rebuild();
            }
        };
        InfluxMetricsDesignerComponent.prototype.onMoveUp = function (t) {
        };
        InfluxMetricsDesignerComponent.prototype.onMoveDown = function (t) {
            console.log('onMoveDown');
        };
        InfluxMetricsDesignerComponent.prototype.onDuplicate = function (t) {
            this.metrics.targets.push(_.cloneDeep(t));
        };
        InfluxMetricsDesignerComponent.prototype.rebuild = function () {
            //console.log( this.metrics );
            this.time.tick();
        };
        return InfluxMetricsDesignerComponent;
    }());
    InfluxMetricsDesignerComponent.ɵfac = function InfluxMetricsDesignerComponent_Factory(t) { return new (t || InfluxMetricsDesignerComponent)(i0.ɵɵdirectiveInject(i1.PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
    InfluxMetricsDesignerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxMetricsDesignerComponent, selectors: [["metrics-designer"]], decls: 1, vars: 1, consts: [[3, "query", "remove", "duplicate", "moveUp", "moveDown", "rebuild", 4, "ngFor", "ngForOf"], [3, "query", "remove", "duplicate", "moveUp", "moveDown", "rebuild"]], template: function InfluxMetricsDesignerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, InfluxMetricsDesignerComponent_query_editor_0_Template, 1, 1, "query-editor", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.metrics.targets);
            }
        }, directives: [i2$1.NgForOf, QueryEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InfluxMetricsDesignerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'metrics-designer',
                        templateUrl: "./designer.html"
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.PANEL_TOKEN]
                        }] }, { type: i1.TimeRangeStore }];
        }, null);
    })();

    var InfluxModule = /** @class */ (function () {
        function InfluxModule() {
        }
        return InfluxModule;
    }());
    InfluxModule.ɵmod = i0.ɵɵdefineNgModule({ type: InfluxModule });
    InfluxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InfluxModule_Factory(t) { return new (t || InfluxModule)(); }, imports: [[
                i2$1.CommonModule,
                i3.FormsModule,
                i3.ReactiveFormsModule,
                i1.EdCommonModule,
                i2.EdUilibModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent,
                InfluxMetricsBuilder,
                InfluxMetricsDesignerComponent,
                QueryEditorComponent,
                MeasurementEditorComponent,
                FieldsEditorComponent,
                FieldEditorComponent,
                FieldFunctionEditorComponent,
                FieldFunctionPickerComponent,
                GroupByEditorComponent,
                GroupByTagLabelComponent], imports: [i2$1.CommonModule,
                i3.FormsModule,
                i3.ReactiveFormsModule,
                i1.EdCommonModule,
                i2.EdUilibModule], exports: [InfluxSettingsEditorComponent,
                InfluxMetricsBuilder,
                InfluxMetricsDesignerComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InfluxModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            InfluxSettingsEditorComponent,
                            InfluxMetricsBuilder,
                            InfluxMetricsDesignerComponent,
                            QueryEditorComponent,
                            MeasurementEditorComponent,
                            FieldsEditorComponent,
                            FieldEditorComponent,
                            FieldFunctionEditorComponent,
                            FieldFunctionPickerComponent,
                            GroupByEditorComponent,
                            GroupByTagLabelComponent
                        ],
                        imports: [
                            i2$1.CommonModule,
                            i3.FormsModule,
                            i3.ReactiveFormsModule,
                            i1.EdCommonModule,
                            i2.EdUilibModule
                        ],
                        exports: [
                            InfluxSettingsEditorComponent,
                            InfluxMetricsBuilder,
                            InfluxMetricsDesignerComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of influx
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AggrFuncHelper = AggrFuncHelper;
    exports.Field = Field;
    exports.FuncObject = FuncObject;
    exports.GroupByObject = GroupByObject;
    exports.InfluxMetricsBuilder = InfluxMetricsBuilder;
    exports.InfluxMetricsDesignerComponent = InfluxMetricsDesignerComponent;
    exports.InfluxModule = InfluxModule;
    exports.InfluxQuery = InfluxQuery;
    exports.InfluxSettingsEditorComponent = InfluxSettingsEditorComponent;
    exports.MetricVars = MetricVars;
    exports.Tag = Tag;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=influx.umd.js.map
