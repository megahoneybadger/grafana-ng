import { ɵɵtext, ɵɵtemplate, ɵɵdefineComponent, ɵɵelementStart, ɵɵelementEnd, ɵɵelement, ɵɵproperty, ɵɵadvance, ɵsetClassMetadata, Component, ɵɵdirectiveInject, EventEmitter, ɵɵdefineDirective, Directive, Inject, Input, Output, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵInheritDefinitionFeature, ɵɵreference, ɵɵtextInterpolate, ɵɵpureFunction1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtextInterpolate1, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, NgModel, DefaultValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent, CheckBoxComponent, InfoBoxComponent, TextBoxValidationTemplate, AutoCompletePickerComponent, ContextMenuComponent, EdUilibModule } from 'uilib';
import { NgIf, NgForOf, NgStyle, CommonModule } from '@angular/common';
import { TimeRangeStore, TimeRangeParser, PANEL_TOKEN, DataSourceService, EdCommonModule } from 'common';
import { isString, cloneDeep } from 'lodash';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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
InfluxSettingsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: InfluxSettingsEditorComponent, selectors: [["ds-settings-editor"]], decls: 41, vars: 14, consts: [[3, "formGroup"], [1, "page-heading"], [1, "gf-form-group"], ["label", "URL", "labelWidth", "10", "hint", "Specify a complete HTTP URL (for example http://your_server:8080)", "formControlName", "url"], [4, "ngIf"], ["label", "Whitelisted Cookies", "labelWidth", "10", "formControlName", "whitelistedCookies"], [1, "gf-form-inline"], ["labelWidth", "10", "label", "Basic Auth", "formControlName", "basicAuthentication"], ["labelWidth", "10", "label", "With Credentials", "hint", "Whether credentials such as cookies or auth headers should be sent with cross-site requests.", "formControlName", "withCredentials"], ["labelWidth", "10", "label", "TLS Client Auth", "formControlName", "tlsClientAuth"], ["labelWidth", "10", "label", "With CA Cert", "hint", "Needed for verifing self-signed TLS Certs", "formControlName", "withCaCert"], ["labelWidth", "10", "label", "Skip TLS Verify", "formControlName", "skipTlsVerification"], ["formControlName", "database", 3, "label", "labelWidth"], ["formControlName", "user", 3, "label", "labelWidth", "width"], ["type", "password", "formControlName", "password", 3, "label", "labelWidth", "width"], ["hint", "'A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n\t\t\t\tfor example 1m if your data is written every minute.'", "type", "password", "formControlName", "minTimeInterval", 3, "label", "labelWidth", "width", "placeholder"], ["edValidationTemplate", ""]], template: function InfluxSettingsEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
        ɵɵproperty("label", "Min time interval")("labelWidth", 11)("width", 5)("placeholder", "10s");
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
class Field {
}
class FuncObject {
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
class Tag {
    constructor() {
        this.key = '';
        this.value = '';
        this.operator = TagOperator.Eq;
        this.condition = TagCondition.And;
    }
}
var TagOperator;
(function (TagOperator) {
    TagOperator["Eq"] = "=";
    TagOperator["Neq"] = "<>";
    TagOperator["Less"] = "<";
    TagOperator["Greater"] = ">";
    TagOperator["RegExEq"] = "=~";
    TagOperator["RegExNeq"] = "!~";
})(TagOperator || (TagOperator = {}));
var TagCondition;
(function (TagCondition) {
    TagCondition["And"] = "AND";
    TagCondition["Or"] = "OR";
})(TagCondition || (TagCondition = {}));

class InfluxMetricsBuilder {
    constructor(time = undefined /* for timezone */) {
        this.time = time;
    }
    build(metrics, range) {
        const array = [];
        metrics
            .targets
            .forEach(t => {
            const gen = new Builder(this.time, t, range);
            if (!gen.invalid && !t.virgin) {
                array.push(gen.text);
            }
        });
        let request = array.join(';');
        return of(request);
    }
}
InfluxMetricsBuilder.ɵfac = function InfluxMetricsBuilder_Factory(t) { return new (t || InfluxMetricsBuilder)(ɵɵdirectiveInject(TimeRangeStore)); };
InfluxMetricsBuilder.ɵcmp = ɵɵdefineComponent({ type: InfluxMetricsBuilder, selectors: [["metrics-builder"]], decls: 0, vars: 0, template: function InfluxMetricsBuilder_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InfluxMetricsBuilder, [{
        type: Component,
        args: [{
                selector: 'metrics-builder',
                template: ''
            }]
    }], function () { return [{ type: TimeRangeStore }]; }, null); })();
class Builder {
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

class BaseQueryComponent {
    constructor(panel, dsService) {
        this.panel = panel;
        this.dsService = dsService;
        this.REMOVE = '--remove--';
        this.change = new EventEmitter();
    }
    get metrics() {
        return this
            .panel
            .widget
            .metrics;
    }
    get dataSourceId() {
        return this.metrics.dataSource;
    }
    get tags() {
        return this.query.tags;
    }
    get fields() {
        return this.query.fields;
    }
    proxy(command) {
        return this
            .dsService
            .proxy(this.dataSourceId, command);
    }
    build() {
        new InfluxMetricsBuilder()
            .build({ targets: [this.query], dataSource: 0 })
            .subscribe(x => {
            this.queryAsString = x;
            this.onRebuild();
        });
    }
    onRebuild() {
    }
}
BaseQueryComponent.ɵfac = function BaseQueryComponent_Factory(t) { return new (t || BaseQueryComponent)(ɵɵdirectiveInject(PANEL_TOKEN), ɵɵdirectiveInject(DataSourceService)); };
BaseQueryComponent.ɵdir = ɵɵdefineDirective({ type: BaseQueryComponent, inputs: { query: "query" }, outputs: { change: "change" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseQueryComponent, [{
        type: Directive
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: DataSourceService }]; }, { query: [{
            type: Input
        }], change: [{
            type: Output
        }] }); })();

function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-autocomplete-picker", 13);
    ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { ɵɵrestoreView(_r7); const t_r1 = ɵɵnextContext().$implicit; return t_r1.operator = $event; })("pick", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_pick_0_listener() { ɵɵrestoreView(_r7); const ctx_r8 = ɵɵnextContext(2); return ctx_r8.change.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngModel", t_r1.operator)("request", ctx_r3.tagOperators$(t_r1));
} }
function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-autocomplete-picker", 14);
    ɵɵlistener("pick", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template_ed_autocomplete_picker_pick_0_listener($event) { ɵɵrestoreView(_r12); const t_r1 = ɵɵnextContext().$implicit; const ctx_r10 = ɵɵnextContext(); ctx_r10.onTagValuePick(t_r1, $event); return ctx_r10.change.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("value", t_r1.value)("request", ctx_r4.tagValues$(t_r1));
} }
function MeasurementEditorComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "ed-autocomplete-picker", 9);
    ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_1_listener($event) { ɵɵrestoreView(_r15); const t_r1 = ctx.$implicit; return t_r1.condition = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_1_listener() { ɵɵrestoreView(_r15); const ctx_r16 = ɵɵnextContext(); return ctx_r16.change.emit(); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "ed-autocomplete-picker", 10);
    ɵɵlistener("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_2_listener($event) { ɵɵrestoreView(_r15); const t_r1 = ctx.$implicit; const ctx_r17 = ɵɵnextContext(); ctx_r17.onTagKeyPick(t_r1, $event); return ctx_r17.change.emit(); });
    ɵɵelementEnd();
    ɵɵtemplate(3, MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template, 1, 2, "ed-autocomplete-picker", 11);
    ɵɵtemplate(4, MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template, 1, 2, "ed-autocomplete-picker", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("hidden", !(i_r2 > 0 && t_r1.key))("ngModel", t_r1.condition)("request", ctx_r0.conditions$);
    ɵɵadvance(1);
    ɵɵproperty("value", t_r1.key)("request", ctx_r0.tagKeys$);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", t_r1.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", t_r1.key);
} }
class MeasurementEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
        this.DEFAULT_POLICY = 'default';
    }
    get retentionPolicies$() {
        return this
            .proxy(`SHOW RETENTION POLICIES`)
            .pipe(map(x => ['default', ...x[0].values.map(y => y[0])]));
    }
    get measurements$() {
        return this
            .proxy(`SHOW MEASUREMENTS`)
            .pipe(map(x => [...x[0].values].reduce((acc, value) => acc.concat(value), [])));
    }
    tagOperators$(tag) {
        const isRegexValue = this.isRegex(tag.value);
        const allOperators = Object.values(TagOperator);
        let result = isRegexValue ? allOperators.slice(4, 6) : allOperators.slice(0, 4);
        return of(result);
    }
    get tagKeys$() {
        const q = (this.query.measurement) ?
            `SHOW TAG KEYS from ${this.query.measurement}` :
            `SHOW TAG KEYS`;
        return this
            .proxy(q)
            .pipe(map(x => [...x[0].values.reduce((acc, value) => acc.concat(value), []), this.REMOVE]));
    }
    tagValues$(tag) {
        const q = `SHOW TAG VALUES  WITH KEY=${tag.key}`;
        return this
            .proxy(q)
            .pipe(map(x => x[0].values.map(y => y[1])));
    }
    get conditions$() {
        return of(Object.values(TagCondition));
    }
    ngOnInit() {
        //this.resetTags();
        var _a;
        if (!((_a = this.tags) === null || _a === void 0 ? void 0 : _a.length)) {
            this.tags.push(new Tag());
        }
        if (!this.query.policy) {
            this.query.policy = this.DEFAULT_POLICY;
        }
    }
    isRegex(expr) {
        let isValid = true;
        try {
            new RegExp(expr);
            isValid = (expr.startsWith('/') && expr.endsWith('/'));
        }
        catch (e) {
            isValid = false;
        }
        return isValid;
    }
    resetTags() {
        this.query.tags = [];
        this.tags.push(new Tag());
    }
    onTagKeyPick(t, k) {
        const index = this.tags.indexOf(t);
        if (k === null || k === void 0 ? void 0 : k.startsWith(this.REMOVE)) {
            this.query.tags = this.tags.filter(x => x != t);
            if (0 === this.tags.length) {
                this.resetTags();
            }
        }
        else {
            t.key = k;
            t.value = '';
            const len = this.tags.length;
            if (index === len - 2 && this.tags[len - 1].key.length === 0) {
                // if value is selected remove new tag (for plus sign)
                this.tags.pop();
            }
        }
    }
    onTagValuePick(t, v) {
        let oldValueIsRegEx = this.isRegex(t.value);
        t.value = v;
        let newValueIsRegEx = this.isRegex(t.value);
        const regExChanged = (oldValueIsRegEx != newValueIsRegEx);
        if (regExChanged) {
            t.operator = (newValueIsRegEx) ? TagOperator.RegExEq : TagOperator.Eq;
        }
        if (this.tags.indexOf(t) === this.tags.length - 1) {
            const nt = new Tag();
            this.tags.push(nt);
        }
    }
}
MeasurementEditorComponent.ɵfac = function MeasurementEditorComponent_Factory(t) { return new (t || MeasurementEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN), ɵɵdirectiveInject(DataSourceService)); };
MeasurementEditorComponent.ɵcmp = ɵɵdefineComponent({ type: MeasurementEditorComponent, selectors: [["measurement-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 12, vars: 5, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select measurement", 3, "ngModel", "request", "ngModelChange", "pick"], [1, "gf-form-label", "query-keyword"], [4, "ngFor", "ngForOf"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], ["valueClass", "query-keyword", 3, "hidden", "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "fa fa-plus", 3, "value", "request", "pick"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick", 4, "ngIf"], ["placeholder", "select tag value", 3, "value", "request", "pick", 4, "ngIf"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select tag value", 3, "value", "request", "pick"]], template: function MeasurementEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "label", 2);
        ɵɵtext(3, " FROM ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "ed-autocomplete-picker", 3);
        ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.query.policy = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_4_listener() { return ctx.change.emit(); });
        ɵɵelementEnd();
        ɵɵelementStart(5, "ed-autocomplete-picker", 4);
        ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_5_listener($event) { return ctx.query.measurement = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_5_listener($event) { ctx.resetTags(); ctx.change.emit(); return $event; });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 1);
        ɵɵelementStart(7, "label", 5);
        ɵɵtext(8, " WHERE ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, MeasurementEditorComponent_ng_container_9_Template, 5, 7, "ng-container", 6);
        ɵɵelementStart(10, "div", 7);
        ɵɵelement(11, "div", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.query.policy)("request", ctx.retentionPolicies$);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.query.measurement)("request", ctx.measurements$);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.query.tags);
    } }, directives: [AutoCompletePickerComponent, NgControlStatus, NgModel, NgForOf, NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MeasurementEditorComponent, [{
        type: Component,
        args: [{
                selector: 'measurement-editor',
                templateUrl: './measurement.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: DataSourceService }]; }, null); })();

const timeSuggestions = ['1s', '10s', '1m', '5m', '10m', '15m', '1h'];
const menuItems = [
    { label: AggrFuncGroup[0], items: [
            { label: AggrFunc.Count },
            { label: AggrFunc.Distinct },
            { label: AggrFunc.Integral },
            { label: AggrFunc.Mean },
            { label: AggrFunc.Median },
            { label: AggrFunc.Mode },
            { label: AggrFunc.Sum },
        ] },
    { label: AggrFuncGroup[1], items: [
            { label: AggrFunc.Bottom, param: { value: '3' } },
            { label: AggrFunc.First },
            { label: AggrFunc.Last },
            { label: AggrFunc.Max },
            { label: AggrFunc.Min },
            { label: AggrFunc.Percentile, param: { value: '95' } },
            { label: AggrFunc.Top, param: { value: '3' } },
        ] },
    { label: AggrFuncGroup[2], items: [
            { label: AggrFunc.Derivative,
                param: { value: timeSuggestions[1], suggestions: [...timeSuggestions] } },
            { label: AggrFunc.Spread },
            { label: AggrFunc.NonNegativeDerivative,
                param: { value: timeSuggestions[1], suggestions: [...timeSuggestions] } },
            { label: AggrFunc.Difference },
            { label: AggrFunc.NonNegativeDifference },
            { label: AggrFunc.MovingAverage, param: { value: '10', suggestions: ['5', '10', '20', '30', '40'] } },
            { label: AggrFunc.CumulativeSum },
            { label: AggrFunc.Stddev },
            { label: AggrFunc.Elapsed,
                param: { value: timeSuggestions[1], suggestions: [...timeSuggestions] } },
        ] },
    //  { label: AggrFuncGroup[ 3 ], items: [ 
    //     { label: AggrFunc.HoltWinters },
    //     { label: AggrFunc.HoltWintersWithFit }
    //     ] },
    { label: AggrFuncGroup[4], items: [
            { label: AggrFunc.Math, param: { value: ' / 100' } }
        ] },
    { label: AggrFuncGroup[5], items: [
            { label: AggrFunc.Alias, param: { value: 'alias' } }
        ] },
    { label: 'Field', items: [{ label: 'field' }] }
];

class FieldFunctionPickerComponent {
    constructor() {
        this.items = cloneDeep(menuItems);
        this.pick = new EventEmitter();
    }
    ngOnInit() {
        ContextMenuComponent.wrapItems(this.items, x => this.pick.emit(x.item));
    }
}
FieldFunctionPickerComponent.ɵfac = function FieldFunctionPickerComponent_Factory(t) { return new (t || FieldFunctionPickerComponent)(); };
FieldFunctionPickerComponent.ɵcmp = ɵɵdefineComponent({ type: FieldFunctionPickerComponent, selectors: [["field-function-picker"]], outputs: { pick: "pick" }, decls: 5, vars: 1, consts: [[1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-plus"], [3, "items"], ["cm", ""]], template: function FieldFunctionPickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "a", 1);
        ɵɵlistener("click", function FieldFunctionPickerComponent_Template_a_click_1_listener($event) { ɵɵrestoreView(_r1); const _r0 = ɵɵreference(4); return _r0.show($event); });
        ɵɵelement(2, "i", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(3, "ed-context-menu", 3, 4);
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("items", ctx.items);
    } }, directives: [ContextMenuComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FieldFunctionPickerComponent, [{
        type: Component,
        args: [{
                selector: 'field-function-picker',
                template: `
    <div class="gf-form" >
      <a class="gf-form-label pointer" (click)="cm.show( $event )" >
        <i class="fa fa-plus" ></i>
      </a>
    </div>

    <ed-context-menu [items]="items" #cm></ed-context-menu>
  `
            }]
    }], null, { pick: [{
            type: Output
        }] }); })();

const _c0 = ["editor"];
const _c1 = ["suggestions"];
function FieldFunctionEditorComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a");
    ɵɵelementStart(1, "span", 9);
    ɵɵlistener("click", function FieldFunctionEditorComponent_a_4_Template_span_click_1_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onShowEditor($event); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("hidden", ctx_r0.isEditorVisible);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.value.param.value);
} }
const _c2 = function (a0) { return { width: a0 }; };
function FieldFunctionEditorComponent_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 10, 11);
    ɵɵlistener("ngModelChange", function FieldFunctionEditorComponent_input_5_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.textValue = $event; })("change", function FieldFunctionEditorComponent_input_5_Template_input_change_0_listener($event) { ɵɵrestoreView(_r8); return $event.stopPropagation(); })("focusout", function FieldFunctionEditorComponent_input_5_Template_input_focusout_0_listener() { ɵɵrestoreView(_r8); const ctx_r10 = ɵɵnextContext(); return ctx_r10.onEditorFocusOut(); })("keydown", function FieldFunctionEditorComponent_input_5_Template_input_keydown_0_listener() { ɵɵrestoreView(_r8); const ctx_r11 = ɵɵnextContext(); return ctx_r11.onEditorKeyDown(); })("keyup.enter", function FieldFunctionEditorComponent_input_5_Template_input_keyup_enter_0_listener() { ɵɵrestoreView(_r8); const ctx_r12 = ɵɵnextContext(); return ctx_r12.onEditorKeyUpEnter(); })("keyup.escape", function FieldFunctionEditorComponent_input_5_Template_input_keyup_escape_0_listener() { ɵɵrestoreView(_r8); const ctx_r13 = ɵɵnextContext(); return ctx_r13.onEditorKeyUpEnter(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c2, (ctx_r1.textValue.length + 1) * 8 + "px"))("ngModel", ctx_r1.textValue);
} }
const _c3 = function (a0) { return [a0]; };
class FieldFunctionEditorComponent {
    constructor() {
        this.remove = new EventEmitter();
        this.change = new EventEmitter();
        this.isEditorVisible = false;
        this.isSuggestionsMenuOpen = false;
        this.suggestionItems = [];
        this.deleteMenuItem = { label: 'Remove', command: _ => this.remove.emit() };
    }
    get hasSuggestions() {
        return (this.value.param && this.value.param.suggestions);
    }
    ngOnInit() {
        if (this.value.param) {
            this.textValue = this.value.param.value;
        }
        if (this.hasSuggestions) {
            this
                .value
                .param
                .suggestions
                .forEach(e => this.suggestionItems.push({
                label: e,
                command: (x) => {
                    this.value.param.value = this.textValue = x.item.label;
                    this.isEditorVisible = false;
                }
            }));
        }
    }
    onShowEditor(e) {
        if (!this.value.param) {
            return;
        }
        if (this.hasSuggestions) {
            this.isSuggestionsMenuOpen = true;
            this.suggestions.show(e);
        }
        setTimeout(() => {
            this.isEditorVisible = true;
            setTimeout(() => this.editorElement.nativeElement.focus(), 0);
        }, 0);
    }
    onEditorFocusOut() {
        if (!this.isSuggestionsMenuOpen) {
            this.isEditorVisible = false;
            this.value.param.value = this.textValue;
            //this.change.emit()
            //console.log( "onEditorFocusOut" )
        }
    }
    onEditorKeyDown() {
        this.isSuggestionsMenuOpen = false;
        this.suggestions.hide();
    }
    onEditorKeyUpEnter() {
        this.isEditorVisible = false;
        this.value.param.value = this.textValue;
        this.change.emit();
        //console.log( "onEditorKeyUpEnter" )
    }
}
FieldFunctionEditorComponent.ɵfac = function FieldFunctionEditorComponent_Factory(t) { return new (t || FieldFunctionEditorComponent)(); };
FieldFunctionEditorComponent.ɵcmp = ɵɵdefineComponent({ type: FieldFunctionEditorComponent, selectors: [["field-function-editor"]], viewQuery: function FieldFunctionEditorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suggestions = _t.first);
    } }, inputs: { value: "value" }, outputs: { remove: "remove", change: "change" }, decls: 12, vars: 7, consts: [[1, "gf-form"], [1, "gf-form-label"], [1, "pointer", 3, "click"], [4, "ngIf"], ["type", "text", "class", "ff__editor ", "spellcheck", "false", 3, "ngStyle", "ngModel", "ngModelChange", "change", "focusout", "keydown", "keyup.enter", "keyup.escape", 4, "ngIf"], [3, "click"], [3, "items"], ["cmRemove", ""], ["suggestions", ""], [3, "hidden", "click"], ["type", "text", "spellcheck", "false", 1, "ff__editor", 3, "ngStyle", "ngModel", "ngModelChange", "change", "focusout", "keydown", "keyup.enter", "keyup.escape"], ["editor", ""]], template: function FieldFunctionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "label", 1);
        ɵɵelementStart(2, "a", 2);
        ɵɵlistener("click", function FieldFunctionEditorComponent_Template_a_click_2_listener($event) { ɵɵrestoreView(_r14); const _r2 = ɵɵreference(9); return _r2.show($event); });
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵtemplate(4, FieldFunctionEditorComponent_a_4_Template, 3, 2, "a", 3);
        ɵɵtemplate(5, FieldFunctionEditorComponent_input_5_Template, 2, 4, "input", 4);
        ɵɵelementStart(6, "a", 5);
        ɵɵlistener("click", function FieldFunctionEditorComponent_Template_a_click_6_listener($event) { return ctx.onShowEditor($event); });
        ɵɵtext(7, ")");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(8, "ed-context-menu", 6, 7);
        ɵɵelement(10, "ed-context-menu", 6, 8);
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1("", ctx.value.name, " (");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.value.param);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isEditorVisible);
        ɵɵadvance(3);
        ɵɵproperty("items", ɵɵpureFunction1(5, _c3, ctx.deleteMenuItem));
        ɵɵadvance(2);
        ɵɵproperty("items", ctx.suggestionItems);
    } }, directives: [NgIf, ContextMenuComponent, DefaultValueAccessor, NgStyle, NgControlStatus, NgModel], styles: [".ff__editor[_ngcontent-%COMP%]{background:transparent;border:none;color:#d8d9da;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin:0;padding:0;width:24px}.ff__editor[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;outline:none!important;outline-width:0!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FieldFunctionEditorComponent, [{
        type: Component,
        args: [{
                selector: 'field-function-editor',
                templateUrl: './func-editor.html',
                styleUrls: ['./func-editor.scss']
            }]
    }], null, { value: [{
            type: Input
        }], remove: [{
            type: Output
        }], change: [{
            type: Output
        }], editorElement: [{
            type: ViewChild,
            args: ['editor']
        }], suggestions: [{
            type: ViewChild,
            args: ["suggestions"]
        }] }); })();

function FieldEditorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "SELECT");
    ɵɵelementEnd();
} }
function FieldEditorComponent_field_function_editor_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "field-function-editor", 9);
    ɵɵlistener("remove", function FieldEditorComponent_field_function_editor_6_Template_field_function_editor_remove_0_listener() { ɵɵrestoreView(_r4); const f_r2 = ctx.$implicit; const ctx_r3 = ɵɵnextContext(); ctx_r3.onFuncRemove(f_r2); return ctx_r3.change.emit(); })("change", function FieldEditorComponent_field_function_editor_6_Template_field_function_editor_change_0_listener() { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5.change.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    ɵɵproperty("value", f_r2);
} }
class FieldEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
        this.fieldFuncItems = menuItems;
        this.remove = new EventEmitter();
        this.add = new EventEmitter();
    }
    ngOnInit() {
        this.index = this
            .query
            .fields
            .indexOf(this.field);
        const flatFieldFuncItems = this
            .fieldFuncItems
            .map(p => p.items)
            .reduce((a, b) => a.concat(b));
        this
            .field
            .functions
            .forEach(f => {
            if (f.param) {
                let s = flatFieldFuncItems.find(x => x.text === f.name);
                if (s && s.param && s.param.suggestions) {
                    f.param.suggestions = [...s.param.suggestions];
                }
            }
        });
    }
    get fields$() {
        return this
            .proxy(`SHOW FIELD KEYS FROM \"${this.query.measurement}\"`)
            .pipe(map(x => {
            if (!x || 0 == x.length) {
                return null;
            }
            const fields = [...x[0].values.map(y => y[0])];
            return (this.query.fields.length > 1) ? [this.REMOVE, ...fields] : fields;
        }));
    }
    onFieldPick(field) {
        if (field === this.REMOVE) {
            this.remove.emit();
        }
        else {
            this.field.key = field;
        }
    }
    onFuncPick(arg) {
        const fo = new FuncObject();
        fo.name = arg.label;
        if (arg.label == "field") {
            this.add.emit();
            return;
        }
        if (arg.param) {
            fo.param = cloneDeep(arg.param);
        }
        const alias = this.field.functions.find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Alias);
        const math = this.field.functions.find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Math);
        const len = this.field.functions.length;
        const funcs = this.field.functions;
        switch (AggrFuncHelper.getGroup(arg.label)) {
            case AggrFuncGroup.Aggregations:
            case AggrFuncGroup.Selectors:
                const duplicate = this
                    .field
                    .functions
                    .find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Aggregations ||
                    AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Selectors);
                if (duplicate) {
                    funcs[0] = fo;
                }
                else {
                    funcs.splice(0, 0, fo);
                }
                break;
            case AggrFuncGroup.Transformations:
                if (!alias) {
                    funcs.push(fo);
                }
                else {
                    funcs.splice(len - 1, 0, fo);
                }
                break;
            case AggrFuncGroup.Math:
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
            case AggrFuncGroup.Alias:
                if (alias) {
                    this.field.functions[len - 1] = fo;
                }
                else {
                    this.field.functions.push(fo);
                }
                break;
        }
    }
    onFuncRemove(f) {
        const index = this.field.functions.indexOf(f);
        if (-1 !== index) {
            this.field.functions.splice(index, 1);
        }
    }
}
FieldEditorComponent.ɵfac = function FieldEditorComponent_Factory(t) { return new (t || FieldEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN), ɵɵdirectiveInject(DataSourceService)); };
FieldEditorComponent.ɵcmp = ɵɵdefineComponent({ type: FieldEditorComponent, selectors: [["field-editor"]], inputs: { field: "field" }, outputs: { remove: "remove", add: "add" }, features: [ɵɵInheritDefinitionFeature], decls: 10, vars: 4, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [4, "ngIf"], ["placeholder", "field(value)", "formatString", "field({0})", 3, "value", "request", "pick"], [3, "value", "remove", "change", 4, "ngFor", "ngForOf"], [3, "pick"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [3, "value", "remove", "change"]], template: function FieldEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "label", 2);
        ɵɵtemplate(3, FieldEditorComponent_span_3_Template, 2, 0, "span", 3);
        ɵɵtext(4, "\u00A0 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "ed-autocomplete-picker", 4);
        ɵɵlistener("pick", function FieldEditorComponent_Template_ed_autocomplete_picker_pick_5_listener($event) { ctx.onFieldPick($event); return ctx.change.emit(); });
        ɵɵelementEnd();
        ɵɵtemplate(6, FieldEditorComponent_field_function_editor_6_Template, 1, 1, "field-function-editor", 5);
        ɵɵelementStart(7, "field-function-picker", 6);
        ɵɵlistener("pick", function FieldEditorComponent_Template_field_function_picker_pick_7_listener($event) { ctx.onFuncPick($event); return ctx.change.emit(); });
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 7);
        ɵɵelement(9, "div", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.index === 0);
        ɵɵadvance(2);
        ɵɵproperty("value", ctx.field.key)("request", ctx.fields$);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.field.functions);
    } }, directives: [NgIf, AutoCompletePickerComponent, NgForOf, FieldFunctionPickerComponent, FieldFunctionEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FieldEditorComponent, [{
        type: Component,
        args: [{
                selector: 'field-editor',
                templateUrl: './field.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: DataSourceService }]; }, { field: [{
            type: Input
        }], remove: [{
            type: Output
        }], add: [{
            type: Output
        }] }); })();

function FieldsEditorComponent_field_editor_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "field-editor", 1);
    ɵɵlistener("remove", function FieldsEditorComponent_field_editor_0_Template_field_editor_remove_0_listener() { ɵɵrestoreView(_r3); const f_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.onRemove(f_r1); })("add", function FieldsEditorComponent_field_editor_0_Template_field_editor_add_0_listener() { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onAdd(); })("change", function FieldsEditorComponent_field_editor_0_Template_field_editor_change_0_listener() { ɵɵrestoreView(_r3); const ctx_r5 = ɵɵnextContext(); return ctx_r5.change.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r0.query)("field", f_r1);
} }
class FieldsEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
    }
    ngOnInit() {
        var _a;
        if (!((_a = this.fields) === null || _a === void 0 ? void 0 : _a.length)) {
            this.query.fields = [this.createEmpyField()];
        }
    }
    onRemove(f) {
        const fields = this.query.fields;
        if (1 < fields.length) {
            const index = fields.indexOf(f);
            if (-1 !== index) {
                this.query.fields.splice(index, 1);
            }
        }
    }
    onAdd() {
        this
            .query
            .fields
            .push(this.createEmpyField());
    }
    createEmpyField() {
        const def = new FuncObject();
        def.name = AggrFunc.Mean;
        const field = new Field();
        field.functions = [def];
        return field;
    }
}
FieldsEditorComponent.ɵfac = function FieldsEditorComponent_Factory(t) { return new (t || FieldsEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN), ɵɵdirectiveInject(DataSourceService)); };
FieldsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: FieldsEditorComponent, selectors: [["fields-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "query", "field", "remove", "add", "change", 4, "ngFor", "ngForOf"], [3, "query", "field", "remove", "add", "change"]], template: function FieldsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FieldsEditorComponent_field_editor_0_Template, 1, 2, "field-editor", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.query.fields);
    } }, directives: [NgForOf, FieldEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FieldsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'fields-editor',
                template: `
    <field-editor *ngFor="let f of query.fields" 
      [query]="query" 
      [field]="f"
      (remove)="onRemove(f)"
      (add)="onAdd()"
      (change)="change.emit()" >
    </field-editor> `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: DataSourceService }]; }, null); })();

function QueryEditorComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 20);
} }
function QueryEditorComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 21);
} }
function QueryEditorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 22);
    ɵɵelementStart(1, "div", 23);
    ɵɵelementStart(2, "label", 24);
    ɵɵlistener("click", function QueryEditorComponent_div_9_Template_label_click_2_listener() { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.opened = !ctx_r5.opened; });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.queryAsString, " ");
} }
function QueryEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 25);
    ɵɵelementStart(1, "measurement-editor", 26);
    ɵɵlistener("change", function QueryEditorComponent_div_10_Template_measurement_editor_change_1_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.build(); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "fields-editor", 26);
    ɵɵlistener("change", function QueryEditorComponent_div_10_Template_fields_editor_change_2_listener() { ɵɵrestoreView(_r8); const ctx_r9 = ɵɵnextContext(); return ctx_r9.build(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("query", ctx_r3.query);
    ɵɵadvance(1);
    ɵɵproperty("query", ctx_r3.query);
} }
class QueryEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService, time) {
        super(panel, dsService);
        this.dsService = dsService;
        this.time = time;
        this.contextMenuItems = [];
        this.opened = true;
        this.editMode = false;
        this.remove = new EventEmitter();
        this.moveUp = new EventEmitter();
        this.moveDown = new EventEmitter();
        this.duplicate = new EventEmitter();
    }
    ngOnInit() {
        this.contextMenuItems = [
            {
                label: 'Toggle edit mode',
                command: (_) => this.editMode != this.editMode
            },
            {
                label: 'Duplicate',
                command: (_) => this.duplicate.emit()
            },
            {
                label: 'Move up',
                command: (_) => this.moveUp.emit()
            },
            {
                label: 'Move down',
                command: (_) => this.moveDown.emit()
            },
        ];
        //this.build();
    }
    onRebuild() {
        //console.log( 'on rebuild' );
        this.time.tick();
    }
}
QueryEditorComponent.ɵfac = function QueryEditorComponent_Factory(t) { return new (t || QueryEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN), ɵɵdirectiveInject(DataSourceService), ɵɵdirectiveInject(TimeRangeStore)); };
QueryEditorComponent.ɵcmp = ɵɵdefineComponent({ type: QueryEditorComponent, selectors: [["query-editor"]], outputs: { remove: "remove", moveUp: "moveUp", moveDown: "moveDown", duplicate: "duplicate" }, features: [ɵɵInheritDefinitionFeature], decls: 23, vars: 6, consts: [[1, "gf-form-query"], [1, "gf-form", "gf-form-query-letter-cell", 3, "click"], [1, "gf-form-label"], ["tabindex", "1", 1, "pointer"], ["ng-class", "{muted: !ctrl.canCollapse}", 1, "gf-form-query-letter-cell-carret"], ["class", "fa fa-caret-down", 4, "ngIf"], ["class", "fa fa-caret-right", 4, "ngIf"], [1, "gf-form-query-letter-cell-letter"], ["class", "gf-form-query-content gf-form-query-content--collapsed mr-1", 4, "ngIf"], ["class", "gf-form-query-content", 4, "ngIf"], [1, "gf-form", "ed"], [1, "gf-form-label", 3, "click"], ["data-toggle", "dropdown", "tabindex", "1", 1, "pointer", "dropdown-toggle"], [1, "fa", "fa-bars"], ["ng-click", "ctrl.toggleHideQuery()", "role", "menuitem"], [1, "fa", "fa-eye"], ["tabindex", "1", 1, "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "items"], ["cm", ""], [1, "fa", "fa-caret-down"], [1, "fa", "fa-caret-right"], [1, "gf-form-query-content", "gf-form-query-content--collapsed", "mr-1"], [1, "gf-form"], [1, "gf-form-label", "pointer", "gf-form-label--grow", 3, "click"], [1, "gf-form-query-content"], [3, "query", "change"]], template: function QueryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵlistener("click", function QueryEditorComponent_Template_div_click_1_listener() { return ctx.opened = !ctx.opened; });
        ɵɵelementStart(2, "label", 2);
        ɵɵelementStart(3, "a", 3);
        ɵɵelementStart(4, "span", 4);
        ɵɵtemplate(5, QueryEditorComponent_i_5_Template, 1, 0, "i", 5);
        ɵɵtemplate(6, QueryEditorComponent_i_6_Template, 1, 0, "i", 6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "span", 7);
        ɵɵtext(8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, QueryEditorComponent_div_9_Template, 4, 1, "div", 8);
        ɵɵtemplate(10, QueryEditorComponent_div_10_Template, 3, 2, "div", 9);
        ɵɵelementStart(11, "div", 10);
        ɵɵelementStart(12, "label", 11);
        ɵɵlistener("click", function QueryEditorComponent_Template_label_click_12_listener($event) { ɵɵrestoreView(_r10); const _r4 = ɵɵreference(22); return _r4.show($event); });
        ɵɵelementStart(13, "a", 12);
        ɵɵelement(14, "i", 13);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "label", 2);
        ɵɵelementStart(16, "a", 14);
        ɵɵelement(17, "i", 15);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "label", 2);
        ɵɵelementStart(19, "a", 16);
        ɵɵlistener("click", function QueryEditorComponent_Template_a_click_19_listener() { return ctx.remove.emit(); });
        ɵɵelement(20, "i", 17);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(21, "ed-context-menu", 18, 19);
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.opened);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.opened);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.query.refId);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.opened);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.opened);
        ɵɵadvance(11);
        ɵɵproperty("items", ctx.contextMenuItems);
    } }, directives: [NgIf, ContextMenuComponent, MeasurementEditorComponent, FieldsEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'query-editor',
                templateUrl: './query.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: DataSourceService }, { type: TimeRangeStore }]; }, { remove: [{
            type: Output
        }], moveUp: [{
            type: Output
        }], moveDown: [{
            type: Output
        }], duplicate: [{
            type: Output
        }] }); })();

function InfluxMetricsDesignerComponent_query_editor_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "query-editor", 1);
    ɵɵlistener("remove", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_remove_0_listener() { ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.onRemove(t_r1); })("duplicate", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_duplicate_0_listener() { ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(); return ctx_r4.onDuplicate(t_r1); })("moveUp", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveUp_0_listener() { ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r5 = ɵɵnextContext(); return ctx_r5.onMoveUp(t_r1); })("moveDown", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveDown_0_listener() { ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r6 = ɵɵnextContext(); return ctx_r6.onMoveDown(t_r1); });
    ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    ɵɵproperty("query", t_r1);
} }
class InfluxMetricsDesignerComponent {
    constructor(panel) {
        this.panel = panel;
    }
    get metrics() {
        return this
            .panel
            .widget
            .metrics;
    }
    onRemove(t) {
        const index = this.metrics.targets.indexOf(t);
        if (-1 !== index) {
            this.metrics.targets.splice(index, 1);
        }
    }
    onMoveUp(t) {
        console.log('onMoveUp');
    }
    onMoveDown(t) {
        console.log('onMoveDown');
    }
    onDuplicate(t) {
        console.log('duplicate');
    }
}
InfluxMetricsDesignerComponent.ɵfac = function InfluxMetricsDesignerComponent_Factory(t) { return new (t || InfluxMetricsDesignerComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
InfluxMetricsDesignerComponent.ɵcmp = ɵɵdefineComponent({ type: InfluxMetricsDesignerComponent, selectors: [["metrics-designer"]], decls: 1, vars: 1, consts: [[3, "query", "remove", "duplicate", "moveUp", "moveDown", 4, "ngFor", "ngForOf"], [3, "query", "remove", "duplicate", "moveUp", "moveDown"]], template: function InfluxMetricsDesignerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, InfluxMetricsDesignerComponent_query_editor_0_Template, 1, 1, "query-editor", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.metrics.targets);
    } }, directives: [NgForOf, QueryEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InfluxMetricsDesignerComponent, [{
        type: Component,
        args: [{
                selector: 'metrics-designer',
                templateUrl: `./designer.html`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

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
        InfluxMetricsBuilder,
        InfluxMetricsDesignerComponent,
        QueryEditorComponent,
        MeasurementEditorComponent,
        FieldsEditorComponent,
        FieldEditorComponent,
        FieldFunctionEditorComponent,
        FieldFunctionPickerComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EdCommonModule,
        EdUilibModule], exports: [InfluxSettingsEditorComponent,
        InfluxMetricsBuilder,
        InfluxMetricsDesignerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InfluxModule, [{
        type: NgModule,
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
                    InfluxMetricsBuilder,
                    InfluxMetricsDesignerComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of influx
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AggrFunc, AggrFuncGroup, AggrFuncHelper, Field, FuncObject, GroupByFillOptions, GroupByOption, GroupByTimeOptions, InfluxMetricsBuilder, InfluxMetricsDesignerComponent, InfluxModule, InfluxQuery, InfluxSettingsEditorComponent, MetricVars, OrderByTime, Tag, TagCondition, TagOperator };
//# sourceMappingURL=influx.js.map
