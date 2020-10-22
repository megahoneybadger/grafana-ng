(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('uilib'), require('@angular/common'), require('common'), require('lodash'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('influx', ['exports', '@angular/core', '@angular/forms', 'uilib', '@angular/common', 'common', 'lodash', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.influx = {}, global.ng.core, global.ng.forms, global.i2, global.ng.common, global.i1$1, global._, global.rxjs));
}(this, (function (exports, i0, i1, i2, i3, i1$1, _, rxjs) { 'use strict';

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
    InfluxSettingsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 41, vars: 15, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["label", "URL", "labelWidth", "10", "tooltip", "Specify a complete HTTP URL (for example http://your_server:8080)", "formControlName", "url"], [4, "ngIf"], ["label", "Whitelisted Cookies", "labelWidth", "10", "formControlName", "whitelistedCookies"], [1, "gf-form-inline"], ["labelWidth", "10", "label", "Basic Auth", "formControlName", "basicAuthentication"], ["labelWidth", "10", "label", "With Credentials", "tooltip", "Whether credentials such as cookies or auth headers should be sent with cross-site requests.", "formControlName", "withCredentials"], ["labelWidth", "10", "label", "TLS Client Auth", "formControlName", "tlsClientAuth"], ["labelWidth", "10", "label", "With CA Cert", "tooltip", "Needed for verifing self-signed TLS Certs", "formControlName", "withCaCert"], ["labelWidth", "10", "label", "Skip TLS Verify", "formControlName", "skipTlsVerification"], ["formControlName", "database", 3, "label", "labelWidth"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder", "tooltip"], ["edValidationTemplate", ""]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) {
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
                i0.ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s")("tooltip", "A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.");
            }
        }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.TextBoxComponent, i1.NgControlStatus, i1.FormControlName, i3.NgIf, i2.CheckBoxComponent, i2.InfoBoxComponent, i2.TextBoxValidationTemplate], encapsulation: 2 });
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
            // tags = new Array<Tag>();
            this.fields = new Array();
            // limit: number = undefined;
            // slimit: number = undefined;
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

    var InfluxModule = /** @class */ (function () {
        function InfluxModule() {
        }
        return InfluxModule;
    }());
    InfluxModule.ɵmod = i0.ɵɵdefineNgModule({ type: InfluxModule });
    InfluxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InfluxModule_Factory(t) { return new (t || InfluxModule)(); }, imports: [[
                i3.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i1$1.EdCommonModule,
                i2.EdUilibModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent,
                InfluxMetricsBuilder], imports: [i3.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i1$1.EdCommonModule,
                i2.EdUilibModule], exports: [InfluxSettingsEditorComponent,
                InfluxMetricsBuilder] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InfluxModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            InfluxSettingsEditorComponent,
                            InfluxMetricsBuilder,
                        ],
                        imports: [
                            i3.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i1$1.EdCommonModule,
                            i2.EdUilibModule
                        ],
                        exports: [
                            InfluxSettingsEditorComponent,
                            InfluxMetricsBuilder,
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
    exports.InfluxModule = InfluxModule;
    exports.InfluxQuery = InfluxQuery;
    exports.InfluxSettingsEditorComponent = InfluxSettingsEditorComponent;
    exports.MetricVars = MetricVars;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=influx.umd.js.map
