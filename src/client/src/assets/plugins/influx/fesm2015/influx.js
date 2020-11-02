import { ɵɵtext, ɵɵtemplate, ɵɵdefineComponent, ɵɵelementStart, ɵɵelementEnd, ɵɵelement, ɵɵproperty, ɵɵadvance, ɵsetClassMetadata, Component, ɵɵdirectiveInject, ɵɵdefineDirective, Directive, Input, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵpureFunction0, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵInheritDefinitionFeature, EventEmitter, ɵɵreference, ɵɵtextInterpolate, Output, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent, CheckBoxComponent, InfoBoxComponent, TextBoxValidationTemplate, AutoCompletePickerComponent, ContextMenuComponent, EdUilibModule } from 'uilib';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { TimeRangeStore, TimeRangeParser, DataSourceService, PANEL_TOKEN, EdCommonModule } from 'common';
import { isString } from 'lodash';
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
        this.index = 0;
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
    constructor(time) {
        this.time = time;
    }
    build(query, range) {
        //console.log( query );
        const array = [];
        query
            .targets
            .forEach(t => {
            // const modifiedRange = this
            // 	.timeManager
            // 	.getModifiedRange( this.widget.time )
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
}
BaseQueryComponent.ɵfac = function BaseQueryComponent_Factory(t) { return new (t || BaseQueryComponent)(); };
BaseQueryComponent.ɵdir = ɵɵdefineDirective({ type: BaseQueryComponent, inputs: { query: "query" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseQueryComponent, [{
        type: Directive
    }], null, { query: [{
            type: Input
        }] }); })();

const _c0 = function () { return { color: "#eb7b18" }; };
function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-autocomplete-picker", 13);
    ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { ɵɵrestoreView(_r7); const t_r1 = ɵɵnextContext().$implicit; return t_r1.operator = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngModel", t_r1.operator)("valueStyle", ɵɵpureFunction0(3, _c0))("request", ctx_r3.tagOperatorsRequest(t_r1));
} }
function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-autocomplete-picker", 14);
    ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { ɵɵrestoreView(_r11); const t_r1 = ɵɵnextContext().$implicit; return t_r1.value = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("placeholder", "select tag value")("ngModel", t_r1.value)("request", ctx_r4.showTagValuesRequest(t_r1));
} }
const _c1 = function () { return { color: "#33b5e5 " }; };
function MeasurementEditorComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "ed-autocomplete-picker", 9);
    ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_Template_ed_autocomplete_picker_ngModelChange_1_listener($event) { ɵɵrestoreView(_r14); const t_r1 = ctx.$implicit; return t_r1.condition = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(2, "ed-autocomplete-picker", 10);
    ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_Template_ed_autocomplete_picker_ngModelChange_2_listener($event) { ɵɵrestoreView(_r14); const t_r1 = ctx.$implicit; return t_r1.key = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(3, MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template, 1, 4, "ed-autocomplete-picker", 11);
    ɵɵtemplate(4, MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template, 1, 3, "ed-autocomplete-picker", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("hidden", !(i_r2 > 0 && t_r1.key))("ngModel", t_r1.condition)("valueStyle", ɵɵpureFunction0(8, _c1))("request", ctx_r0.andOrRequest());
    ɵɵadvance(1);
    ɵɵproperty("ngModel", t_r1.key)("request", ctx_r0.showTagKeysRequest());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", t_r1.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", t_r1.key);
} }
class MeasurementEditorComponent extends BaseQueryComponent {
    constructor(dsService) {
        super();
        this.dsService = dsService;
        this.DEFAULT_POLICY = 'default';
    }
    ngOnInit() {
        //this.resetTags();
        var _a;
        if (!((_a = this.query.tags) === null || _a === void 0 ? void 0 : _a.length)) {
            this.query.tags.push(new Tag());
        }
        if (!this.query.policy) {
            this.query.policy = this.DEFAULT_POLICY;
        }
    }
    showRetentionPolicies() {
        return this
            .dsService
            .proxy(1, `SHOW RETENTION POLICIES`)
            .pipe(map(x => ['default', ...x[0].values.map(y => y[0])]));
    }
    showMeasurementsRequest() {
        return this
            .dsService
            .proxy(1, `SHOW MEASUREMENTS`)
            .pipe(map(x => [...x[0].values].reduce((acc, value) => acc.concat(value), [])));
    }
    tagOperatorsRequest(tag) {
        const isRegexValue = this.isRegex(tag.value);
        const allOperators = Object.values(TagOperator);
        let result = isRegexValue ? allOperators.slice(4, 6) : allOperators.slice(0, 4);
        return of(result);
    }
    showTagValuesRequest(tag) {
        const q = `SHOW TAG VALUES  WITH KEY=${tag.key}`;
        return this
            .dsService
            .proxy(1, q)
            .pipe(map(x => x[0].values.map(y => y[1])));
    }
    showTagKeysRequest() {
        const q = (this.query.measurement) ?
            `SHOW TAG KEYS from ${this.query.measurement}` :
            `SHOW TAG KEYS`;
        return this
            .dsService
            .proxy(1, q)
            .pipe(map(x => [...x[0].values.reduce((acc, value) => acc.concat(value), []), '--remove--']));
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
    andOrRequest() {
        return of(Object.values(TagCondition));
    }
}
MeasurementEditorComponent.ɵfac = function MeasurementEditorComponent_Factory(t) { return new (t || MeasurementEditorComponent)(ɵɵdirectiveInject(DataSourceService)); };
MeasurementEditorComponent.ɵcmp = ɵɵdefineComponent({ type: MeasurementEditorComponent, selectors: [["measurement-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 11, vars: 5, consts: [[1, "gf-form-inline"], [1, "gf-form", "gf-form-label", "query-keyword", "width-7"], [3, "ngModel", "request", "ngModelChange"], ["placeholder", "select measurement", 3, "ngModel", "request", "ngModelChange"], [1, "gf-form"], [1, "gf-form-label", "query-keyword"], [4, "ngFor", "ngForOf"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [3, "hidden", "ngModel", "valueStyle", "request", "ngModelChange"], ["placeholder", "fa fa-plus", 3, "ngModel", "request", "ngModelChange"], [3, "ngModel", "valueStyle", "request", "ngModelChange", 4, "ngIf"], [3, "placeholder", "ngModel", "request", "ngModelChange", 4, "ngIf"], [3, "ngModel", "valueStyle", "request", "ngModelChange"], [3, "placeholder", "ngModel", "request", "ngModelChange"]], template: function MeasurementEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "label", 1);
        ɵɵtext(2, "FROM");
        ɵɵelementEnd();
        ɵɵelementStart(3, "ed-autocomplete-picker", 2);
        ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_3_listener($event) { return ctx.query.policy = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(4, "ed-autocomplete-picker", 3);
        ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.query.measurement = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 4);
        ɵɵelementStart(6, "label", 5);
        ɵɵtext(7, "WHERE");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(8, MeasurementEditorComponent_ng_container_8_Template, 5, 9, "ng-container", 6);
        ɵɵelementStart(9, "div", 7);
        ɵɵelement(10, "div", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.query.policy)("request", ctx.showRetentionPolicies());
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.query.measurement)("request", ctx.showMeasurementsRequest());
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.query.tags);
    } }, directives: [AutoCompletePickerComponent, NgControlStatus, NgModel, NgForOf, NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MeasurementEditorComponent, [{
        type: Component,
        args: [{
                selector: 'measurement-editor',
                templateUrl: './measurement.html'
            }]
    }], function () { return [{ type: DataSourceService }]; }, null); })();

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
    ɵɵtext(3, " query content will be here ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function QueryEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵelement(1, "measurement-editor", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("query", ctx_r3.query);
} }
class QueryEditorComponent extends BaseQueryComponent {
    constructor() {
        super();
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
    }
}
QueryEditorComponent.ɵfac = function QueryEditorComponent_Factory(t) { return new (t || QueryEditorComponent)(); };
QueryEditorComponent.ɵcmp = ɵɵdefineComponent({ type: QueryEditorComponent, selectors: [["query-editor"]], outputs: { remove: "remove", moveUp: "moveUp", moveDown: "moveDown", duplicate: "duplicate" }, features: [ɵɵInheritDefinitionFeature], decls: 23, vars: 6, consts: [[1, "gf-form-query"], [1, "gf-form", "gf-form-query-letter-cell", 3, "click"], [1, "gf-form-label"], ["tabindex", "1", 1, "pointer"], ["ng-class", "{muted: !ctrl.canCollapse}", 1, "gf-form-query-letter-cell-carret"], ["class", "fa fa-caret-down", 4, "ngIf"], ["class", "fa fa-caret-right", 4, "ngIf"], [1, "gf-form-query-letter-cell-letter"], ["class", "gf-form-query-content gf-form-query-content--collapsed mr-1", 4, "ngIf"], ["ng-transclude", "", "class", "gf-form-query-content", 4, "ngIf"], [1, "gf-form", "ed"], [1, "gf-form-label", 3, "click"], ["data-toggle", "dropdown", "tabindex", "1", 1, "pointer", "dropdown-toggle"], [1, "fa", "fa-bars"], ["ng-click", "ctrl.toggleHideQuery()", "role", "menuitem"], [1, "fa", "fa-eye"], ["tabindex", "1", 1, "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "items"], ["cm", ""], [1, "fa", "fa-caret-down"], [1, "fa", "fa-caret-right"], [1, "gf-form-query-content", "gf-form-query-content--collapsed", "mr-1"], [1, "gf-form"], [1, "gf-form-label", "pointer", "gf-form-label--grow", 3, "click"], ["ng-transclude", "", 1, "gf-form-query-content"], [3, "query"]], template: function QueryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = ɵɵgetCurrentView();
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
        ɵɵtemplate(9, QueryEditorComponent_div_9_Template, 4, 0, "div", 8);
        ɵɵtemplate(10, QueryEditorComponent_div_10_Template, 2, 1, "div", 9);
        ɵɵelementStart(11, "div", 10);
        ɵɵelementStart(12, "label", 11);
        ɵɵlistener("click", function QueryEditorComponent_Template_label_click_12_listener($event) { ɵɵrestoreView(_r7); const _r4 = ɵɵreference(22); return _r4.show($event); });
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
    } }, directives: [NgIf, ContextMenuComponent, MeasurementEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'query-editor',
                templateUrl: './query.html'
            }]
    }], function () { return []; }, { remove: [{
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
        MeasurementEditorComponent], imports: [CommonModule,
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
                    MeasurementEditorComponent
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

export { AggrFunc, AggrFuncGroup, AggrFuncHelper, GroupByFillOptions, GroupByOption, GroupByTimeOptions, InfluxMetricsBuilder, InfluxMetricsDesignerComponent, InfluxModule, InfluxQuery, InfluxSettingsEditorComponent, MetricVars, OrderByTime, Tag, TagCondition, TagOperator };
//# sourceMappingURL=influx.js.map
