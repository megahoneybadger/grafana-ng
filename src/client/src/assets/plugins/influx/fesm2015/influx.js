import { ɵɵtext, ɵɵtemplate, ɵɵdefineComponent, ɵɵelementStart, ɵɵelementEnd, ɵɵelement, ɵɵproperty, ɵɵadvance, ɵsetClassMetadata, Component, ɵɵdirectiveInject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent, CheckBoxComponent, InfoBoxComponent, TextBoxValidationTemplate, EdUilibModule } from 'uilib';
import { NgIf, CommonModule } from '@angular/common';
import { TimeRangeStore, TimeRangeParser, EdCommonModule } from 'common';
import { isString } from 'lodash';
import { of } from 'rxjs';

function InfluxSettingsEditorComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " please enter url ");
} }
function InfluxSettingsEditorComponent_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, InfluxSettingsEditorComponent_5_ng_template_0_Template, 1, 0, "ng-template", 16);
} }
class InfluxSettingsEditorComponent {
    constructor() {
        this.form = new FormGroup({
            'url': new FormControl(null, Validators.required),
            'whitelistedCookies': new FormControl(null),
            'basicAuthentication': new FormControl(false),
            'withCredentials': new FormControl(false),
            'tlsClientAuth': new FormControl(false),
            'withCaCert': new FormControl(false),
            'skipTlsVerification': new FormControl(false),
            'database': new FormControl(null, Validators.required),
            'user': new FormControl(null),
            'password': new FormControl(null),
            'minTimeInterval': new FormControl(null)
        });
    }
    get url() {
        return this.form.get('url');
    }
}
InfluxSettingsEditorComponent.ɵfac = function InfluxSettingsEditorComponent_Factory(t) { return new (t || InfluxSettingsEditorComponent)(); };
InfluxSettingsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 41, vars: 15, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["label", "URL", "labelWidth", "10", "tooltip", "Specify a complete HTTP URL (for example http://your_server:8080)", "formControlName", "url"], [4, "ngIf"], ["label", "Whitelisted Cookies", "labelWidth", "10", "formControlName", "whitelistedCookies"], [1, "gf-form-inline"], ["labelWidth", "10", "label", "Basic Auth", "formControlName", "basicAuthentication"], ["labelWidth", "10", "label", "With Credentials", "tooltip", "Whether credentials such as cookies or auth headers should be sent with cross-site requests.", "formControlName", "withCredentials"], ["labelWidth", "10", "label", "TLS Client Auth", "formControlName", "tlsClientAuth"], ["labelWidth", "10", "label", "With CA Cert", "tooltip", "Needed for verifing self-signed TLS Certs", "formControlName", "withCaCert"], ["labelWidth", "10", "label", "Skip TLS Verify", "formControlName", "skipTlsVerification"], ["formControlName", "database", 3, "label", "labelWidth"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder", "tooltip"], ["edValidationTemplate", ""]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h3", 1);
        ɵɵtext(2, "HTTP");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 2);
        ɵɵelementStart(4, "ed-textbox", 3);
        ɵɵtemplate(5, InfluxSettingsEditorComponent_5_Template, 1, 0, undefined, 4);
        ɵɵelementEnd();
        ɵɵelement(6, "ed-textbox", 5);
        ɵɵelementEnd();
        ɵɵelementStart(7, "h3", 1);
        ɵɵtext(8, "Auth");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 2);
        ɵɵelementStart(10, "div", 6);
        ɵɵelement(11, "ed-checkbox", 7);
        ɵɵelement(12, "ed-checkbox", 8);
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 6);
        ɵɵelement(14, "ed-checkbox", 9);
        ɵɵelement(15, "ed-checkbox", 10);
        ɵɵelementEnd();
        ɵɵelementStart(16, "div", 6);
        ɵɵelement(17, "ed-checkbox", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "h3", 1);
        ɵɵtext(19, "InfluxDB Details");
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 2);
        ɵɵelement(21, "ed-textbox", 12);
        ɵɵelementStart(22, "div", 6);
        ɵɵelement(23, "ed-textbox", 13);
        ɵɵelement(24, "ed-textbox", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(25, "div", 2);
        ɵɵelementStart(26, "ed-info-box");
        ɵɵelementStart(27, "h5");
        ɵɵtext(28, "Database Access");
        ɵɵelementEnd();
        ɵɵelementStart(29, "p");
        ɵɵtext(30, " Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example: ");
        ɵɵelementStart(31, "code");
        ɵɵtext(32, "SHOW MEASUREMENTS ON _internal");
        ɵɵelementEnd();
        ɵɵtext(33, " or ");
        ɵɵelementStart(34, "code");
        ɵɵtext(35, "SELECT * FROM \"_internal\"..\"database\" LIMIT 10");
        ɵɵelementEnd();
        ɵɵelement(36, "br");
        ɵɵelement(37, "br");
        ɵɵtext(38, " To support data isolation and security, make sure appropriate permissions are configured in InfluxDB. ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(39, "div", 2);
        ɵɵelement(40, "ed-textbox", 15);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.url.hasError("required") && ctx.url.touched);
        ɵɵadvance(16);
        ɵɵproperty("label", "Database")("labelWidth", 10);
        ɵɵadvance(2);
        ɵɵproperty("label", "User")("labelWidth", 10)("width", 5);
        ɵɵadvance(1);
        ɵɵproperty("label", "Password")("labelWidth", 10)("width", 5);
        ɵɵadvance(16);
        ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s")("tooltip", "A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.");
    } }, directives: [NgControlStatusGroup, FormGroupDirective, TextBoxComponent, NgControlStatus, FormControlName, NgIf, CheckBoxComponent, InfoBoxComponent, TextBoxValidationTemplate], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InfluxSettingsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'ds-settings-editor',
                templateUrl: './settings.html'
            }]
    }], function () { return []; }, null); })();

class InfluxQuery {
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
var AggrFunc;
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
var AggrFuncGroup;
(function (AggrFuncGroup) {
    AggrFuncGroup[AggrFuncGroup["Aggregations"] = 0] = "Aggregations";
    AggrFuncGroup[AggrFuncGroup["Selectors"] = 1] = "Selectors";
    AggrFuncGroup[AggrFuncGroup["Transformations"] = 2] = "Transformations";
    AggrFuncGroup[AggrFuncGroup["Predictors"] = 3] = "Predictors";
    AggrFuncGroup[AggrFuncGroup["Math"] = 4] = "Math";
    AggrFuncGroup[AggrFuncGroup["Alias"] = 5] = "Alias";
})(AggrFuncGroup || (AggrFuncGroup = {}));
class AggrFuncHelper {
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
var GroupByOption;
(function (GroupByOption) {
    GroupByOption[GroupByOption["Time"] = 0] = "Time";
    GroupByOption[GroupByOption["Fill"] = 1] = "Fill";
    GroupByOption[GroupByOption["Tag"] = 2] = "Tag";
})(GroupByOption || (GroupByOption = {}));
var GroupByTimeOptions;
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
var GroupByFillOptions;
(function (GroupByFillOptions) {
    GroupByFillOptions["None"] = "none";
    GroupByFillOptions["Null"] = "null";
    GroupByFillOptions["Zero"] = "0";
    GroupByFillOptions["Prev"] = "previous";
    GroupByFillOptions["Linear"] = "linear";
})(GroupByFillOptions || (GroupByFillOptions = {}));
var OrderByTime;
(function (OrderByTime) {
    OrderByTime[OrderByTime["Asc"] = 0] = "Asc";
    OrderByTime[OrderByTime["Desc"] = 1] = "Desc";
})(OrderByTime || (OrderByTime = {}));
class MetricVars {
}
MetricVars.TIME_FILTER = "$timeFilter";
MetricVars.TIME_INTERVAL = "$__interval";

class InfluxQueryCompiler {
    constructor(time) {
        this.time = time;
    }
    compile(query, range) {
        //console.log( query );
        const array = [];
        query
            .targets
            .forEach(t => {
            // const modifiedRange = this
            // 	.timeManager
            // 	.getModifiedRange( this.widget.time )
            const gen = new Compiler(this.time, t, range);
            if (!gen.invalid && !t.virgin) {
                array.push(gen.text);
            }
        });
        let request = array.join(';');
        return of(request);
    }
}
InfluxQueryCompiler.ɵfac = function InfluxQueryCompiler_Factory(t) { return new (t || InfluxQueryCompiler)(ɵɵdirectiveInject(TimeRangeStore)); };
InfluxQueryCompiler.ɵcmp = ɵɵdefineComponent({ type: InfluxQueryCompiler, selectors: [["query-compiler"]], decls: 0, vars: 0, template: function InfluxQueryCompiler_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InfluxQueryCompiler, [{
        type: Component,
        args: [{
                selector: 'query-compiler',
                template: ''
            }]
    }], function () { return [{ type: TimeRangeStore }]; }, null); })();
class Compiler {
    constructor(time, target, range) {
        this.time = time;
        this.target = target;
        this.range = range;
    }
    get invalid() {
        const invalidQuery = (!this.target) ||
            (!this.target.fields || 0 === this.target.fields.length);
        return invalidQuery;
    }
    get text() {
        return `SELECT ${this.getFieldsText()} FROM ${this.getMeasurementText()}`;
    }
    getFieldsText() {
        let result = '';
        if (!this.target.fields) {
            return result;
        }
        this.target.fields.forEach(x => {
            if (result.length > 0) {
                result += ', ';
            }
            result += this.getFieldText(x);
        });
        return result;
    }
    getFieldText(field) {
        let result = '';
        let key = (!field.key) ? 'field' : field.key;
        const aggr = field.functions.find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Aggregations ||
            AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Selectors);
        if (aggr) {
            result += aggr.name + ((aggr.param && aggr.param.value) ?
                `("${key}", ${aggr.param.value})` : `("${key}")`);
        }
        else {
            result = `"${key}"`;
        }
        const trans = field.functions.filter(x => AggrFuncHelper.getGroup(x.name) === AggrFuncGroup.Transformations);
        trans.forEach(x => {
            const p = (x.param && x.param.value) ? `, ${x.param.value}` : ``;
            result = `${x.name}(${result}${p})`;
        });
        const math = field.functions.find(x => AggrFuncHelper.getGroup(x.name) === AggrFuncGroup.Math);
        if (math) {
            result = `${result} ${math.param.value}`;
        }
        const alias = field.functions.find(x => AggrFuncHelper.getGroup(x.name) === AggrFuncGroup.Alias);
        if (alias) {
            result = `${result} AS "${alias.param.value}"`;
        }
        return result;
    }
    getMeasurementText() {
        const meas = (!this.target.measurement) ? 'measurement' : this.target.measurement;
        let rp = (this.target.policy && this.target.policy.length > 0 && this.target.policy !== 'default') ?
            `"${this.target.policy}".` : '';
        let root = `${rp}"${meas}"`;
        let cond = '';
        let tagIndex = 0;
        if (this.target.tags) {
            this
                .target
                .tags
                .filter(x => x.key && x.value)
                .forEach(x => {
                if (tagIndex > 0) {
                    cond += ` ${x.condition} `;
                }
                cond += ` "${x.key}" ${x.operator} '${x.value}'`;
                ++tagIndex;
            });
        }
        const timeFilter = (this.range) ?
            this.getTimeFilter() : MetricVars.TIME_FILTER;
        if (cond.length > 0) {
            root = `${root} WHERE (${cond}) and ${timeFilter}`;
        }
        else {
            // TODO
            root = `${root} WHERE ${timeFilter}`;
        }
        const groupBy = this.target.groupBy;
        const groupByTime = groupBy.find(x => x.type == GroupByOption.Time);
        const groupByFill = groupBy.find(x => x.type == GroupByOption.Fill);
        const groupByTag = groupBy.filter(x => x.type == GroupByOption.Tag);
        if (groupByTime) {
            const gb = (this.range) ? this.getOptimalAutoGroupBy() : groupByTime.params[0];
            root = `${root} GROUP BY time(${gb})`;
        }
        if (groupByTag.length > 0) {
            root = (!groupByTime) ? `${root} GROUP BY` : `${root},`;
            groupByTag.forEach((e, index) => {
                root = `${root}${index > 0 ? ', ' : ' '} "${e.params[0]}"`;
            });
        }
        if (groupByFill) {
            root = `${root} FILL(${groupByFill.params[0]})`;
        }
        if (this.target.order != OrderByTime.Asc) {
            root = `${root} ORDER BY time DESC`;
        }
        if (this.target.limit > 0) {
            root = `${root} LIMIT ${this.target.limit}`;
        }
        if (this.target.slimit > 0) {
            root = `${root} SLIMIT ${this.target.slimit}`;
        }
        return root;
    }
    getOptimalAutoGroupBy() {
        const f = TimeRangeParser.toDateTime(this.range.from, false);
        const t = TimeRangeParser.toDateTime(this.range.to, true);
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
    }
    getTimeFilter() {
        const range = this.range;
        const tz = this.time.converter.timezone; //this.range.timezone;
        let from = this.getInfluxTime(range.from, false, tz);
        let to = this.getInfluxTime(range.to, true, tz);
        const fromIsAbsolute = from[from.length - 1] === 'ms';
        if (to === 'now()' && !fromIsAbsolute) {
            return 'time >= ' + from;
        }
        return 'time >= ' + from + ' and time <= ' + to;
    }
    getInfluxTime(date, roundUp, timezone) {
        if (isString(date)) {
            if (date === 'now') {
                return 'now()';
            }
            const parts = /^now-(\d+)([dhms])$/.exec(date);
            if (parts) {
                const amount = parseInt(parts[1], 10);
                const unit = parts[2];
                return 'now() - ' + amount + unit;
            }
            date = TimeRangeParser.toDateTime(date, roundUp, timezone);
        }
        return date.valueOf() + 'ms';
    }
}

class InfluxModule {
}
InfluxModule.ɵmod = ɵɵdefineNgModule({ type: InfluxModule });
InfluxModule.ɵinj = ɵɵdefineInjector({ factory: function InfluxModule_Factory(t) { return new (t || InfluxModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            EdCommonModule,
            EdUilibModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent,
        InfluxQueryCompiler], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EdCommonModule,
        EdUilibModule], exports: [InfluxSettingsEditorComponent,
        InfluxQueryCompiler] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InfluxModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    InfluxSettingsEditorComponent,
                    InfluxQueryCompiler
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    EdCommonModule,
                    EdUilibModule
                ],
                exports: [
                    InfluxSettingsEditorComponent,
                    InfluxQueryCompiler,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of influx
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AggrFunc, AggrFuncGroup, AggrFuncHelper, GroupByFillOptions, GroupByOption, GroupByTimeOptions, InfluxModule, InfluxQuery, InfluxQueryCompiler, InfluxSettingsEditorComponent, MetricVars, OrderByTime };
//# sourceMappingURL=influx.js.map
