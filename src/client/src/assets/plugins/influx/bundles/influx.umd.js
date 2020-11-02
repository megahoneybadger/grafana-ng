(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('uilib'), require('@angular/common'), require('common'), require('lodash'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('influx', ['exports', '@angular/core', '@angular/forms', 'uilib', '@angular/common', 'common', 'lodash', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.influx = {}, global.ng.core, global.ng.forms, global.i2, global.ng.common, global.i1$1, global._, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i0, i1, i2, i4, i1$1, _, rxjs, operators) { 'use strict';

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
            this.form = new i1.FormGroup({
                'url': new i1.FormControl(null, i1.Validators.required),
                'whitelistedCookies': new i1.FormControl(null),
                'basicAuthentication': new i1.FormControl(false),
                'withCredentials': new i1.FormControl(false),
                'tlsClientAuth': new i1.FormControl(false),
                'withCaCert': new i1.FormControl(false),
                'skipTlsVerification': new i1.FormControl(false),
                'database': new i1.FormControl(null, i1.Validators.required),
                'user': new i1.FormControl(null),
                'password': new i1.FormControl(null),
                'minTimeInterval': new i1.FormControl(null)
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
        }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.TextBoxComponent, i1.NgControlStatus, i1.FormControlName, i4.NgIf, i2.CheckBoxComponent, i2.InfoBoxComponent, i2.TextBoxValidationTemplate], encapsulation: 2 });
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
            // order = OrderByTime.Asc;
            // alias: string =  '';
            // groupBy = new Array<GroupByObject>();
            // virgin: boolean = false;
        }
        return InfluxQuery;
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
        OrderByTime[OrderByTime["Asc"] = 0] = "Asc";
        OrderByTime[OrderByTime["Desc"] = 1] = "Desc";
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
            this.index = 0;
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
        function InfluxMetricsBuilder(time) {
            this.time = time;
        }
        InfluxMetricsBuilder.prototype.build = function (query, range) {
            var _this = this;
            //console.log( query );
            var array = [];
            query
                .targets
                .forEach(function (t) {
                // const modifiedRange = this
                // 	.timeManager
                // 	.getModifiedRange( this.widget.time )
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
    InfluxMetricsBuilder.ɵfac = function InfluxMetricsBuilder_Factory(t) { return new (t || InfluxMetricsBuilder)(i0.ɵɵdirectiveInject(i1$1.TimeRangeStore)); };
    InfluxMetricsBuilder.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxMetricsBuilder, selectors: [["metrics-builder"]], decls: 0, vars: 0, template: function InfluxMetricsBuilder_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InfluxMetricsBuilder, [{
                type: i0.Component,
                args: [{
                        selector: 'metrics-builder',
                        template: ''
                    }]
            }], function () { return [{ type: i1$1.TimeRangeStore }]; }, null);
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
            if (groupByTime) {
                var gb = (this.range) ? this.getOptimalAutoGroupBy() : groupByTime.params[0];
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
            var f = i1$1.TimeRangeParser.toDateTime(this.range.from, false);
            var t = i1$1.TimeRangeParser.toDateTime(this.range.to, true);
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
                date = i1$1.TimeRangeParser.toDateTime(date, roundUp, timezone);
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
        function BaseQueryComponent() {
        }
        return BaseQueryComponent;
    }());
    BaseQueryComponent.ɵfac = function BaseQueryComponent_Factory(t) { return new (t || BaseQueryComponent)(); };
    BaseQueryComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseQueryComponent, inputs: { query: "query" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BaseQueryComponent, [{
                type: i0.Directive
            }], null, { query: [{
                    type: i0.Input
                }] });
    })();

    var _c0 = function () { return { color: "#eb7b18" }; };
    function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-autocomplete-picker", 13);
            i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7_1); var t_r1 = i0.ɵɵnextContext().$implicit; return t_r1.operator = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = i0.ɵɵnextContext().$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", t_r1.operator)("valueStyle", i0.ɵɵpureFunction0(3, _c0))("request", ctx_r3.tagOperatorsRequest(t_r1));
        }
    }
    function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ed-autocomplete-picker", 14);
            i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var t_r1 = i0.ɵɵnextContext().$implicit; return t_r1.value = $event; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = i0.ɵɵnextContext().$implicit;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("placeholder", "select tag value")("ngModel", t_r1.value)("request", ctx_r4.showTagValuesRequest(t_r1));
        }
    }
    var _c1 = function () { return { color: "#33b5e5 " }; };
    function MeasurementEditorComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "ed-autocomplete-picker", 9);
            i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_Template_ed_autocomplete_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14_1); var t_r1 = ctx.$implicit; return t_r1.condition = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ed-autocomplete-picker", 10);
            i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_Template_ed_autocomplete_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r14_1); var t_r1 = ctx.$implicit; return t_r1.key = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template, 1, 4, "ed-autocomplete-picker", 11);
            i0.ɵɵtemplate(4, MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template, 1, 3, "ed-autocomplete-picker", 12);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var t_r1 = ctx.$implicit;
            var i_r2 = ctx.index;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !(i_r2 > 0 && t_r1.key))("ngModel", t_r1.condition)("valueStyle", i0.ɵɵpureFunction0(8, _c1))("request", ctx_r0.andOrRequest());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", t_r1.key)("request", ctx_r0.showTagKeysRequest());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", t_r1.key);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", t_r1.key);
        }
    }
    var MeasurementEditorComponent = /** @class */ (function (_super) {
        __extends(MeasurementEditorComponent, _super);
        function MeasurementEditorComponent(dsService) {
            var _this = _super.call(this) || this;
            _this.dsService = dsService;
            _this.DEFAULT_POLICY = 'default';
            return _this;
        }
        MeasurementEditorComponent.prototype.ngOnInit = function () {
            //this.resetTags();
            var _a;
            if (!((_a = this.query.tags) === null || _a === void 0 ? void 0 : _a.length)) {
                this.query.tags.push(new Tag());
            }
            if (!this.query.policy) {
                this.query.policy = this.DEFAULT_POLICY;
            }
        };
        MeasurementEditorComponent.prototype.showRetentionPolicies = function () {
            return this
                .dsService
                .proxy(1, "SHOW RETENTION POLICIES")
                .pipe(operators.map(function (x) { return __spread(['default'], x[0].values.map(function (y) { return y[0]; })); }));
        };
        MeasurementEditorComponent.prototype.showMeasurementsRequest = function () {
            return this
                .dsService
                .proxy(1, "SHOW MEASUREMENTS")
                .pipe(operators.map(function (x) { return __spread(x[0].values).reduce(function (acc, value) { return acc.concat(value); }, []); }));
        };
        MeasurementEditorComponent.prototype.tagOperatorsRequest = function (tag) {
            var isRegexValue = this.isRegex(tag.value);
            var allOperators = Object.values(exports.TagOperator);
            var result = isRegexValue ? allOperators.slice(4, 6) : allOperators.slice(0, 4);
            return rxjs.of(result);
        };
        MeasurementEditorComponent.prototype.showTagValuesRequest = function (tag) {
            var q = "SHOW TAG VALUES  WITH KEY=" + tag.key;
            return this
                .dsService
                .proxy(1, q)
                .pipe(operators.map(function (x) { return x[0].values.map(function (y) { return y[1]; }); }));
        };
        MeasurementEditorComponent.prototype.showTagKeysRequest = function () {
            var q = (this.query.measurement) ?
                "SHOW TAG KEYS from " + this.query.measurement :
                "SHOW TAG KEYS";
            return this
                .dsService
                .proxy(1, q)
                .pipe(operators.map(function (x) { return __spread(x[0].values.reduce(function (acc, value) { return acc.concat(value); }, []), ['--remove--']); }));
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
        MeasurementEditorComponent.prototype.andOrRequest = function () {
            return rxjs.of(Object.values(exports.TagCondition));
        };
        return MeasurementEditorComponent;
    }(BaseQueryComponent));
    MeasurementEditorComponent.ɵfac = function MeasurementEditorComponent_Factory(t) { return new (t || MeasurementEditorComponent)(i0.ɵɵdirectiveInject(i1$1.DataSourceService)); };
    MeasurementEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MeasurementEditorComponent, selectors: [["measurement-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 5, consts: [[1, "gf-form-inline"], [1, "gf-form", "gf-form-label", "query-keyword", "width-7"], [3, "ngModel", "request", "ngModelChange"], ["placeholder", "select measurement", 3, "ngModel", "request", "ngModelChange"], [1, "gf-form"], [1, "gf-form-label", "query-keyword"], [4, "ngFor", "ngForOf"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [3, "hidden", "ngModel", "valueStyle", "request", "ngModelChange"], ["placeholder", "fa fa-plus", 3, "ngModel", "request", "ngModelChange"], [3, "ngModel", "valueStyle", "request", "ngModelChange", 4, "ngIf"], [3, "placeholder", "ngModel", "request", "ngModelChange", 4, "ngIf"], [3, "ngModel", "valueStyle", "request", "ngModelChange"], [3, "placeholder", "ngModel", "request", "ngModelChange"]], template: function MeasurementEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "label", 1);
                i0.ɵɵtext(2, "FROM");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-autocomplete-picker", 2);
                i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_3_listener($event) { return ctx.query.policy = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "ed-autocomplete-picker", 3);
                i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.query.measurement = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵelementStart(6, "label", 5);
                i0.ɵɵtext(7, "WHERE");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, MeasurementEditorComponent_ng_container_8_Template, 5, 9, "ng-container", 6);
                i0.ɵɵelementStart(9, "div", 7);
                i0.ɵɵelement(10, "div", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.query.policy)("request", ctx.showRetentionPolicies());
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.query.measurement)("request", ctx.showMeasurementsRequest());
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.query.tags);
            }
        }, directives: [i2.AutoCompletePickerComponent, i1.NgControlStatus, i1.NgModel, i4.NgForOf, i4.NgIf], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MeasurementEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'measurement-editor',
                        templateUrl: './measurement.html'
                    }]
            }], function () { return [{ type: i1$1.DataSourceService }]; }, null);
    })();

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
            i0.ɵɵtext(3, " query content will be here ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function QueryEditorComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 25);
            i0.ɵɵelement(1, "measurement-editor", 26);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("query", ctx_r3.query);
        }
    }
    var QueryEditorComponent = /** @class */ (function (_super) {
        __extends(QueryEditorComponent, _super);
        function QueryEditorComponent() {
            var _this = _super.call(this) || this;
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
        };
        return QueryEditorComponent;
    }(BaseQueryComponent));
    QueryEditorComponent.ɵfac = function QueryEditorComponent_Factory(t) { return new (t || QueryEditorComponent)(); };
    QueryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: QueryEditorComponent, selectors: [["query-editor"]], outputs: { remove: "remove", moveUp: "moveUp", moveDown: "moveDown", duplicate: "duplicate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 6, consts: [[1, "gf-form-query"], [1, "gf-form", "gf-form-query-letter-cell", 3, "click"], [1, "gf-form-label"], ["tabindex", "1", 1, "pointer"], ["ng-class", "{muted: !ctrl.canCollapse}", 1, "gf-form-query-letter-cell-carret"], ["class", "fa fa-caret-down", 4, "ngIf"], ["class", "fa fa-caret-right", 4, "ngIf"], [1, "gf-form-query-letter-cell-letter"], ["class", "gf-form-query-content gf-form-query-content--collapsed mr-1", 4, "ngIf"], ["ng-transclude", "", "class", "gf-form-query-content", 4, "ngIf"], [1, "gf-form", "ed"], [1, "gf-form-label", 3, "click"], ["data-toggle", "dropdown", "tabindex", "1", 1, "pointer", "dropdown-toggle"], [1, "fa", "fa-bars"], ["ng-click", "ctrl.toggleHideQuery()", "role", "menuitem"], [1, "fa", "fa-eye"], ["tabindex", "1", 1, "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "items"], ["cm", ""], [1, "fa", "fa-caret-down"], [1, "fa", "fa-caret-right"], [1, "gf-form-query-content", "gf-form-query-content--collapsed", "mr-1"], [1, "gf-form"], [1, "gf-form-label", "pointer", "gf-form-label--grow", 3, "click"], ["ng-transclude", "", 1, "gf-form-query-content"], [3, "query"]], template: function QueryEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r7_1 = i0.ɵɵgetCurrentView();
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
                i0.ɵɵtemplate(9, QueryEditorComponent_div_9_Template, 4, 0, "div", 8);
                i0.ɵɵtemplate(10, QueryEditorComponent_div_10_Template, 2, 1, "div", 9);
                i0.ɵɵelementStart(11, "div", 10);
                i0.ɵɵelementStart(12, "label", 11);
                i0.ɵɵlistener("click", function QueryEditorComponent_Template_label_click_12_listener($event) { i0.ɵɵrestoreView(_r7_1); var _r4 = i0.ɵɵreference(22); return _r4.show($event); });
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
        }, directives: [i4.NgIf, i2.ContextMenuComponent, MeasurementEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(QueryEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'query-editor',
                        templateUrl: './query.html'
                    }]
            }], function () { return []; }, { remove: [{
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
            i0.ɵɵlistener("remove", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_remove_0_listener() { i0.ɵɵrestoreView(_r3_1); var t_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(t_r1); })("duplicate", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_duplicate_0_listener() { i0.ɵɵrestoreView(_r3_1); var t_r1 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onDuplicate(t_r1); })("moveUp", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveUp_0_listener() { i0.ɵɵrestoreView(_r3_1); var t_r1 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onMoveUp(t_r1); })("moveDown", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveDown_0_listener() { i0.ɵɵrestoreView(_r3_1); var t_r1 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onMoveDown(t_r1); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var t_r1 = ctx.$implicit;
            i0.ɵɵproperty("query", t_r1);
        }
    }
    var InfluxMetricsDesignerComponent = /** @class */ (function () {
        function InfluxMetricsDesignerComponent(panel) {
            this.panel = panel;
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
            }
        };
        InfluxMetricsDesignerComponent.prototype.onMoveUp = function (t) {
            console.log('onMoveUp');
        };
        InfluxMetricsDesignerComponent.prototype.onMoveDown = function (t) {
            console.log('onMoveDown');
        };
        InfluxMetricsDesignerComponent.prototype.onDuplicate = function (t) {
            console.log('duplicate');
        };
        return InfluxMetricsDesignerComponent;
    }());
    InfluxMetricsDesignerComponent.ɵfac = function InfluxMetricsDesignerComponent_Factory(t) { return new (t || InfluxMetricsDesignerComponent)(i0.ɵɵdirectiveInject(i1$1.PANEL_TOKEN)); };
    InfluxMetricsDesignerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxMetricsDesignerComponent, selectors: [["metrics-designer"]], decls: 1, vars: 1, consts: [[3, "query", "remove", "duplicate", "moveUp", "moveDown", 4, "ngFor", "ngForOf"], [3, "query", "remove", "duplicate", "moveUp", "moveDown"]], template: function InfluxMetricsDesignerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, InfluxMetricsDesignerComponent_query_editor_0_Template, 1, 1, "query-editor", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.metrics.targets);
            }
        }, directives: [i4.NgForOf, QueryEditorComponent], encapsulation: 2 });
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
                            args: [i1$1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var InfluxModule = /** @class */ (function () {
        function InfluxModule() {
        }
        return InfluxModule;
    }());
    InfluxModule.ɵmod = i0.ɵɵdefineNgModule({ type: InfluxModule });
    InfluxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InfluxModule_Factory(t) { return new (t || InfluxModule)(); }, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i1$1.EdCommonModule,
                i2.EdUilibModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent,
                InfluxMetricsBuilder,
                InfluxMetricsDesignerComponent,
                QueryEditorComponent,
                MeasurementEditorComponent], imports: [i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i1$1.EdCommonModule,
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
                            MeasurementEditorComponent
                        ],
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i1$1.EdCommonModule,
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
