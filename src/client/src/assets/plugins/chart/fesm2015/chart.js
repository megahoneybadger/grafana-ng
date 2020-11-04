import { ɵɵinvalidFactory, ɵɵdefineDirective, ɵsetClassMetadata, Directive, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, Component, Inject, Input, ɵɵelement, ɵɵnextContext, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵtextInterpolate1, EventEmitter, Output, ɵɵpropertyInterpolate1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵProvidersFeature, ViewEncapsulation, ɵɵpureFunction1, ɵɵstyleProp, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForOf, NgIf, Location, NgClass, CommonModule, NgComponentOutlet, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { DropDownComponent, CheckBoxComponent, HierarchicalDropDownComponent, TextBoxComponent, ContextMenuComponent, PopupComponent, PaletteEditorComponent, ColorCircleComponent, ColorPickerComponent, SideTabStripComponent, TabComponent, TabContentTemplate, TabTitleTemplate, Notes, ErrorMessages, JsonExplorerComponent, DialogComponent, DialogActionsComponent, TabStripComponent, GeneralEditorComponent, MetricsEditorComponent, ColorHelper, FadeInOutAnimation, EdUilibModule, DropDownValueTemplate, DropDownSelectedValueTemplate, HintComponent, ErrorHintComponent, AutoCompleteComponent, PreferencesComponent, EmptyListComponent, InfoBoxComponent, ProgressComponent, FilterBoxComponent, TextBoxValidationTemplate, AutoFocusDirective, AvatarComponent, GridComponent, ColumnComponent, DeleteColumnComponent, SlideDownComponent, LoadOrErrorComponent, ErrorPopupComponent, NoteComponent, ModuleLoaderComponent, UserPickerComponent, TeamPickerComponent, PermissionPickerComponent, PermissionRulePickerComponent, PermissionIconComponent, TagPickerComponent, TimeRangePickerComponent, PluginPickerComponent, AutoCompletePickerComponent, IconComponent, LabelIconComponent, RemoveHostDirective, PageComponent, PageHeaderComponent, PageTitleComponent, PageTabsNavigationComponent, PageDropdownNavigationComponent, TagComponent, DashboardExplorerComponent, DashboardExplorerDeleterComponent, DashboardExplorerMoverComponent, CardsLayoutSwitcherComponent, MetricsDesignerAnchorDirective } from 'uilib';
import { NgControlStatus, NgModel, FormGroup, FormControl, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, ReactiveFormsModule, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModelGroup, NgForm, FormControlDirective, FormGroupName, FormArrayName } from '@angular/forms';
import { TimeRangeMod, PANEL_TOKEN, AlertNoDataOption, AlertErrorOption, AlertCondition, AlertRule, TimeRangeParser, Moment, PluginActivator, DataSourceService, TimeRangeStore, EdCommonModule } from 'common';
import { cloneDeep } from 'lodash';
import { of, BehaviorSubject } from 'rxjs';
import { delay, finalize, tap, mergeMap } from 'rxjs/operators';
import { PerfectScrollbarComponent, PerfectScrollbarModule, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { UIChart, ChartModule } from 'primeng';

class BaseChartEditorComponent {
    constructor(panel) {
        this.panel = panel;
    }
    get widget() {
        return this.panel.widget;
    }
    get axes() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.axes;
    }
    get legend() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
    }
    get display() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.display;
    }
    get thresholds() {
        return this.display.thresholds;
    }
    get timeRegions() {
        return this.display.timeRegions;
    }
    get overrides() {
        return this.display.overrides;
    }
    get time() {
        var _a;
        this.widget.time = (_a = this.widget.time) !== null && _a !== void 0 ? _a : new TimeRangeMod();
        return this.widget.time;
    }
    get alert() {
        return this.widget.alert;
    }
    get options() {
        return this
            .widget
            .component
            .control
            .chart
            .options;
    }
    refresh() {
        var _a, _b;
        (_b = (_a = this
            .widget
            .component) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.refresh();
    }
    update() {
        const comp = this.widget.component;
        comp === null || comp === void 0 ? void 0 : comp.datasets.forEach(x => comp.display.setup(x));
        this.refresh();
    }
    pull() {
        var _a;
        (_a = this
            .widget
            .component) === null || _a === void 0 ? void 0 : _a.store.dataProvider.update();
    }
}
BaseChartEditorComponent.ɵfac = function BaseChartEditorComponent_Factory(t) { ɵɵinvalidFactory(); };
BaseChartEditorComponent.ɵdir = ɵɵdefineDirective({ type: BaseChartEditorComponent });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseChartEditorComponent, [{
        type: Directive
    }], function () { return [{ type: undefined }]; }, null); })();

const AXIS_X = "xAxis";
const AXIS_Y_LEFT = "yAxisL";
const AXIS_Y_RIGHT = "yAxisR";
var ScaleType;
(function (ScaleType) {
    ScaleType["Linear"] = "linear";
    ScaleType["Log2"] = "log2";
    ScaleType["Log10"] = "log10";
    ScaleType["Log32"] = "log32";
    ScaleType["Log1024"] = "log1024";
})(ScaleType || (ScaleType = {}));
class Threshold {
    constructor() {
        this.operator = ThresholdOperator.Gt;
        this.colorType = ThresholdColor.Critical;
        this.fill = true;
        this.line = true;
        this.axis = ThresholdAxis.Left;
    }
}
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
class TimeRegion {
    constructor() {
        this.colorType = TimeRegionColor.Red;
        this.fill = true;
        this.line = true;
        this.fromDay = TimeRegionDay.Any;
        this.toDay = TimeRegionDay.Any;
    }
}
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
class SeriesOverride {
}
class OverrideItem {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
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
class AxisUnit {
    constructor(type, label, unit, command) {
        this.type = type;
        this.label = label;
        this.unit = unit;
        this.command = command;
    }
}
class AxisUnitHelper {
    static getData(unit) {
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
    }
    static getFormattedValue(label, unit, decimals) {
        let value = label.toFixed(decimals);
        const unitData = AxisUnitHelper.getData(unit);
        switch (unitData.type) {
            case AxisUnitType.Common_Hex:
                return label.toString(16);
            case AxisUnitType.Common_Hex0x:
                return `0x${label.toString(16)}`;
            case AxisUnitType.Common_Percent01:
                return `${(100 * label).toFixed(decimals)} %`;
            case AxisUnitType.Common_SciNotation:
                return label.toExponential(decimals);
            case AxisUnitType.Common_LocaleString:
                return label.toLocaleString();
            case AxisUnitType.Common_Short:
                return AxisUnitHelper.getShortFormattedValue(label, unit, decimals);
            case AxisUnitType.None:
                return value;
            default:
                return `${value} ${unitData.unit}`;
        }
    }
    static getShortFormattedValue(label, unit, decimals) {
        // if( label < 1000 ){
        // 	return label;
        // }
        let dev = 1;
        let u = '';
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
        return `${(label / dev).toFixed(decimals)} ${u}`;
    }
}

const menuItems = [
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

class AxisYEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.left = true;
        this.units = cloneDeep(menuItems);
        this.scales = DropDownComponent.wrapEnum(ScaleType);
    }
    get axis() {
        return this.left ? this.axes.leftY : this.axes.rightY;
    }
    get chartAxis() {
        return this.options.scales.yAxes[this.left ? 0 : 1];
    }
    get show() {
        return this.axis.show;
    }
    set show(v) {
        this.axis.show = this.chartAxis.display = v;
        this.refresh();
    }
    get unit() {
        return this.axis.unit;
    }
    set unit(v) {
        this.axis.unit = v;
        this.refresh();
    }
    get scale() {
        return this.axis.scale;
    }
    set scale(v) {
        this.axis.scale = v;
        this.chartAxis.type = (v == ScaleType.Linear) ? "linear" : "logarithmic";
        this.refresh();
    }
    get label() {
        return this.axis.label;
    }
    set label(v) {
        this.axis.label = v;
        const sl = this.chartAxis.scaleLabel;
        if (v) {
            sl.display = true;
            sl.labelString = v;
        }
        else {
            sl.display = false;
            sl.labelString = undefined;
        }
        this.refresh();
    }
    get decimals() {
        return this.axis.decimals;
    }
    set decimals(v) {
        this.axis.decimals = v ? +v : undefined;
        this.refresh();
    }
    get min() {
        return this.axis.min;
    }
    set min(v) {
        this.axis.min = this.chartAxis.ticks.min = v ? +v : undefined;
        this.refresh();
    }
    get max() {
        return this.axis.max;
    }
    set max(v) {
        this.axis.max = this.chartAxis.ticks.max = v ? +v : undefined;
        this.refresh();
    }
}
AxisYEditorComponent.ɵfac = function AxisYEditorComponent_Factory(t) { return new (t || AxisYEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AxisYEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AxisYEditorComponent, selectors: [["editor-axis-y"]], inputs: { left: "left" }, features: [ɵɵInheritDefinitionFeature], decls: 11, vars: 11, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "6", "label", "Show", 3, "ngModel", "ngModelChange"], ["label", "Unit", "width", "16", "labelWidth", "6", 3, "valueProperty", "ngModel", "data", "ngModelChange"], ["label", "Scale", "labelWidth", "6", "width", "16", 3, "ngModel", "data", "ngModelChange"], [1, "gf-form-inline"], ["type", "number", "labelWidth", "6", "label", "Y-Min", "width", "5", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["type", "number", "labelWidth", "6", "label", "Y-Max", "width", "5", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["type", "text", "labelWidth", "6", "label", "Decimals", "width", "16", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Label", "width", "16", 3, "ngModel", "ngModelChange"]], template: function AxisYEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h5", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "ed-checkbox", 2);
        ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.show = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(4, "ed-hierarchical-dropdown", 3);
        ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_hierarchical_dropdown_ngModelChange_4_listener($event) { return ctx.unit = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(5, "ed-dropdown", 4);
        ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_dropdown_ngModelChange_5_listener($event) { return ctx.scale = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 5);
        ɵɵelementStart(7, "ed-textbox", 6);
        ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_7_listener($event) { return ctx.min = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(8, "ed-textbox", 7);
        ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_8_listener($event) { return ctx.max = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "ed-textbox", 8);
        ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_9_listener($event) { return ctx.decimals = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(10, "ed-textbox", 9);
        ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_10_listener($event) { return ctx.label = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.left ? "Left Y" : "Right Y");
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.show);
        ɵɵadvance(1);
        ɵɵproperty("valueProperty", "type")("ngModel", ctx.unit)("data", ctx.units);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.scale)("data", ctx.scales);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.min);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.max);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.decimals);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.label);
    } }, directives: [CheckBoxComponent, NgControlStatus, NgModel, HierarchicalDropDownComponent, DropDownComponent, TextBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxisYEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axis-y',
                templateUrl: './y-axis.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { left: [{
            type: Input
        }] }); })();

class AxisXEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    get axis() {
        return this.axes.x;
    }
    get chartAxis() {
        return this.options.scales.xAxes[0];
    }
    get show() {
        return this.axis.show;
    }
    set show(v) {
        this.axis.show = this.chartAxis.display = v;
        this.refresh();
    }
}
AxisXEditorComponent.ɵfac = function AxisXEditorComponent_Factory(t) { return new (t || AxisXEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AxisXEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AxisXEditorComponent, selectors: [["editor-axis-x"]], features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "6", "label", "Show", 3, "ngModel", "ngModelChange"]], template: function AxisXEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h5", 1);
        ɵɵtext(2, "X-Axis");
        ɵɵelementEnd();
        ɵɵelementStart(3, "ed-checkbox", 2);
        ɵɵlistener("ngModelChange", function AxisXEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.show = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.show);
    } }, directives: [CheckBoxComponent, NgControlStatus, NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxisXEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axis-x',
                templateUrl: './x-axis.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class AxesEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
AxesEditorComponent.ɵfac = function AxesEditorComponent_Factory(t) { return new (t || AxesEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AxesEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AxesEditorComponent, selectors: [["editor-axes"]], features: [ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "left"]], template: function AxesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "editor-axis-y");
        ɵɵelement(1, "editor-axis-y", 0);
        ɵɵelement(2, "editor-axis-x");
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("left", false);
    } }, directives: [AxisYEditorComponent, AxisXEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxesEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axes',
                template: `
    <editor-axis-y ></editor-axis-y>
    <editor-axis-y [left]="false" ></editor-axis-y>
    <editor-axis-x></editor-axis-x>`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class LegendEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
LegendEditorComponent.ɵfac = function LegendEditorComponent_Factory(t) { return new (t || LegendEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
LegendEditorComponent.ɵcmp = ɵɵdefineComponent({ type: LegendEditorComponent, selectors: [["editor-legend"]], features: [ɵɵInheritDefinitionFeature], decls: 23, vars: 11, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "7", "label", "Show", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "As Table", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "To the right", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["labelWidth", "4", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Avg", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Current", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Total", 3, "ngModel", "ngModelChange"], ["type", "number", "labelWidth", "6", "label", "Decimals", "width", "4", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only nulls", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only zeros", 3, "ngModel", "ngModelChange"]], template: function LegendEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h5", 1);
        ɵɵtext(2, "Options");
        ɵɵelementEnd();
        ɵɵelementStart(3, "ed-checkbox", 2);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.legend.show = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(4, "ed-checkbox", 3);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.legend.table = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(5, "ed-checkbox", 4);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.legend.right = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 0);
        ɵɵelementStart(7, "h5", 1);
        ɵɵtext(8, "Values");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 5);
        ɵɵelementStart(10, "ed-checkbox", 6);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_10_listener($event) { return ctx.legend.min = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(11, "ed-checkbox", 7);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.legend.max = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 5);
        ɵɵelementStart(13, "ed-checkbox", 8);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_13_listener($event) { return ctx.legend.avg = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(14, "ed-checkbox", 9);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_14_listener($event) { return ctx.legend.current = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 5);
        ɵɵelementStart(16, "ed-checkbox", 10);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_16_listener($event) { return ctx.legend.total = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(17, "ed-textbox", 11);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_textbox_ngModelChange_17_listener($event) { return ctx.legend.decimals = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "div", 0);
        ɵɵelementStart(19, "h5", 1);
        ɵɵtext(20, "Hide series");
        ɵɵelementEnd();
        ɵɵelementStart(21, "ed-checkbox", 12);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.legend.hideOnlyNulls = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(22, "ed-checkbox", 13);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_22_listener($event) { return ctx.legend.hideOnlyZeroes = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.legend.show);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.legend.table);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.legend.right);
        ɵɵadvance(5);
        ɵɵproperty("ngModel", ctx.legend.min);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.legend.max);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.legend.avg);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.legend.current);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.legend.total);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.legend.decimals);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.legend.hideOnlyNulls);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.legend.hideOnlyZeroes);
    } }, directives: [CheckBoxComponent, NgControlStatus, NgModel, TextBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LegendEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-legend',
                templateUrl: './legend.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class DrawOptionsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.availableWidth = DropDownComponent.wrapArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.availableTooltipModes = DropDownComponent.wrapEnum(TooltipMode);
        this.availableTooltipSortOrders = DropDownComponent.wrapEnum(TooltipSortOrder);
        this.availableNullValueOptions = DropDownComponent.wrapEnum(DataPointNullValueOption);
    }
    get stack() {
        return this.display.stack;
    }
    set stack(v) {
        this.display.stack = v;
        this.options.scales.yAxes[0 /*?*/].stacked = v;
        this.refresh();
    }
}
DrawOptionsEditorComponent.ɵfac = function DrawOptionsEditorComponent_Factory(t) { return new (t || DrawOptionsEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
DrawOptionsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: DrawOptionsEditorComponent, selectors: [["editor-draw-options"]], features: [ɵɵInheritDefinitionFeature], decls: 23, vars: 19, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "5", "label", "Bars"], ["labelWidth", "5", "label", "Lines", 3, "ngModel", "ngModelChange", "checked"], ["labelWidth", "5", "label", "Points", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "ngModelChange", "selectionChange"], ["label", "Line Width", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "disabled", "ngModelChange", "selectionChange"], ["label", "Staircase", "labelWidth", "8", "width", "5", 3, "ngModel", "ngModelChange", "checked"], ["label", "Point Radius", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "disabled", "ngModelChange", "selectionChange"], ["label", "Mode", "labelWidth", "9", "width", "9", 3, "data", "ngModel", "ngModelChange"], ["label", "Sort Order", "labelWidth", "9", "width", "9", 3, "data", "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "Stack", 3, "ngModel", "ngModelChange"], ["label", "Null Value", 3, "ngModel", "data", "labelWidth", "ngModelChange"]], template: function DrawOptionsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h5", 1);
        ɵɵtext(2, "Draw Modes");
        ɵɵelementEnd();
        ɵɵelement(3, "ed-checkbox", 2);
        ɵɵelementStart(4, "ed-checkbox", 3);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.display.showLines = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_4_listener() { return ctx.update(); });
        ɵɵelementEnd();
        ɵɵelementStart(5, "ed-checkbox", 4);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.display.showPoints = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_5_listener() { return ctx.update(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 0);
        ɵɵelementStart(7, "h5", 1);
        ɵɵtext(8, "Mode Options");
        ɵɵelementEnd();
        ɵɵelementStart(9, "ed-dropdown", 5);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_9_listener($event) { return ctx.display.fill = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_9_listener() { return ctx.update(); });
        ɵɵelementEnd();
        ɵɵelementStart(10, "ed-dropdown", 6);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_10_listener($event) { return ctx.display.lineWidth = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_10_listener() { return ctx.update(); });
        ɵɵelementEnd();
        ɵɵelementStart(11, "ed-checkbox", 7);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.display.staircase = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_11_listener() { return ctx.update(); });
        ɵɵelementEnd();
        ɵɵelementStart(12, "ed-dropdown", 8);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_12_listener($event) { return ctx.display.pointRadius = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_12_listener() { return ctx.update(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 0);
        ɵɵelementStart(14, "h5", 1);
        ɵɵtext(15, "Hover tooltip");
        ɵɵelementEnd();
        ɵɵelementStart(16, "ed-dropdown", 9);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_16_listener($event) { return ctx.display.tooltipMode = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(17, "ed-dropdown", 10);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_17_listener($event) { return ctx.display.tooltipSortOrder = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "div", 0);
        ɵɵelementStart(19, "h5", 1);
        ɵɵtext(20, "Stacking & Null value");
        ɵɵelementEnd();
        ɵɵelementStart(21, "ed-checkbox", 11);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.stack = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(22, "ed-dropdown", 12);
        ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_22_listener($event) { return ctx.display.nullValue = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.display.showLines);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.display.showPoints);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.display.fill)("data", ctx.availableWidth);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.display.lineWidth)("data", ctx.availableWidth)("disabled", !ctx.display.showLines);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.display.staircase);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.display.pointRadius)("data", ctx.availableWidth)("disabled", !ctx.display.showPoints);
        ɵɵadvance(4);
        ɵɵproperty("data", ctx.availableTooltipModes)("ngModel", ctx.display.tooltipMode);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.availableTooltipSortOrders)("ngModel", ctx.display.tooltipSortOrder);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.stack);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.display.nullValue)("data", ctx.availableNullValueOptions)("labelWidth", 7);
    } }, directives: [CheckBoxComponent, NgControlStatus, NgModel, DropDownComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DrawOptionsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-draw-options',
                templateUrl: './options.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

function SeriesOverrideEditorComponent_div_2_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(i_r3.value);
} }
function SeriesOverrideEditorComponent_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "color-circle", 22);
} if (rf & 2) {
    const i_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("value", i_r3.value)("canBeActive", false);
} }
function SeriesOverrideEditorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "div", 16);
    ɵɵelementStart(2, "span", 17);
    ɵɵlistener("click", function SeriesOverrideEditorComponent_div_2_Template_span_click_2_listener() { ɵɵrestoreView(_r10); const i_r3 = ctx.$implicit; const ctx_r9 = ɵɵnextContext(); return ctx_r9.onRemoveItem(i_r3); });
    ɵɵelement(3, "i", 18);
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵtemplate(5, SeriesOverrideEditorComponent_div_2_span_5_Template, 2, 1, "span", 19);
    ɵɵtemplate(6, SeriesOverrideEditorComponent_div_2_ng_template_6_Template, 1, 2, "ng-template", null, 20, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const _r5 = ɵɵreference(7);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r0.getItemHeader(i_r3), ": ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r3.type != 12)("ngIfElse", _r5);
} }
class SeriesOverrideEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.removed = new EventEmitter();
        this.cmItems = [];
        this.items = new Array();
        this.showColorPicker = false;
    }
    ngOnInit() {
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
        ContextMenuComponent.wrapItems(this.cmItems, x => this.onOptionSelected(x.item));
        this.rebuildItems();
    }
    rebuildItems() {
        const items = new Array();
        for (var prop in this.override) {
            if (prop != 'alias') {
                var type = this.getOverrideType(prop);
                items.push(new OverrideItem(type, this.override[prop]));
            }
        }
        this.items = items;
        this.update();
    }
    createBoolItem(header, type) {
        return {
            label: header, items: [
                { label: 'true', value: true, type: type },
                { label: 'false', value: false, type: type },
            ]
        };
    }
    createNumberItem(header, type, from = 0, to = 10) {
        const item = { label: header, items: [] };
        for (var i = from; i <= to; ++i) {
            item.items.push({ label: i, value: i, type: type });
        }
        return item;
    }
    createColorItem(header, type) {
        return {
            label: header,
            type: type,
            items: [
                { label: "change", type: type }
            ]
        };
    }
    onOptionSelected(item) {
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
    }
    onRemoveItem(item) {
        delete this.override[this.getPropertyName(item)];
        this.rebuildItems();
    }
    getItemHeader(item) {
        return OverrideType[item.type]
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .toLowerCase();
    }
    getPropertyName(item) {
        return OverrideType[item.type].replace(/^\w/, c => c.toLowerCase());
    }
    getOverrideType(prop) {
        return OverrideType[prop.replace(/^\w/, c => c.toUpperCase())];
    }
    onColorSelected(color) {
        var item = this.createColorItem("Color", OverrideType.Color);
        this.override[this.getPropertyName(item)] = color;
        this.rebuildItems();
    }
}
SeriesOverrideEditorComponent.ɵfac = function SeriesOverrideEditorComponent_Factory(t) { return new (t || SeriesOverrideEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
SeriesOverrideEditorComponent.ɵcmp = ɵɵdefineComponent({ type: SeriesOverrideEditorComponent, selectors: [["editor-series-override"]], inputs: { override: "override", index: "index" }, outputs: { removed: "removed" }, features: [ɵɵInheritDefinitionFeature], decls: 16, vars: 5, consts: [[1, "ed-form-inline"], ["label", "alias or regex", "width", "15", 3, "ngModel", "ngModelChange"], ["class", "gf-form", 4, "ngFor", "ngForOf"], [1, "gf-form", 3, "click"], ["menuTarget", ""], [1, "gf-form-label", "pointer"], [1, "fa", "fa-plus"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "visible", "anchor", "visibleChange"], [3, "selected"], [3, "items"], ["cm", ""], [1, "gf-form-label"], [3, "click"], [1, "fa", "fa-times", "mr-2", "pointer"], ["class", "ml-1", 4, "ngIf", "ngIfElse"], ["color", ""], [1, "ml-1"], [1, "ml-1", 3, "value", "canBeActive"]], template: function SeriesOverrideEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "ed-textbox", 1);
        ɵɵlistener("ngModelChange", function SeriesOverrideEditorComponent_Template_ed_textbox_ngModelChange_1_listener($event) { return ctx.override.alias = $event; });
        ɵɵelementEnd();
        ɵɵtemplate(2, SeriesOverrideEditorComponent_div_2_Template, 8, 3, "div", 2);
        ɵɵelementStart(3, "div", 3, 4);
        ɵɵlistener("click", function SeriesOverrideEditorComponent_Template_div_click_3_listener($event) { ɵɵrestoreView(_r11); const _r2 = ɵɵreference(15); return _r2.show($event); });
        ɵɵelementStart(5, "label", 5);
        ɵɵelement(6, "i", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 7);
        ɵɵelement(8, "div", 8);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 9);
        ɵɵelementStart(10, "label", 10);
        ɵɵlistener("click", function SeriesOverrideEditorComponent_Template_label_click_10_listener() { return ctx.removed.emit(ctx.override); });
        ɵɵelement(11, "i", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "ed-popup", 12);
        ɵɵlistener("visibleChange", function SeriesOverrideEditorComponent_Template_ed_popup_visibleChange_12_listener($event) { return ctx.showColorPicker = $event; });
        ɵɵelementStart(13, "ed-palette-editor", 13);
        ɵɵlistener("selected", function SeriesOverrideEditorComponent_Template_ed_palette_editor_selected_13_listener($event) { return ctx.onColorSelected($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(14, "ed-context-menu", 14, 15);
    } if (rf & 2) {
        const _r1 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.override.alias);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.items);
        ɵɵadvance(10);
        ɵɵproperty("visible", ctx.showColorPicker)("anchor", _r1);
        ɵɵadvance(2);
        ɵɵproperty("items", ctx.cmItems);
    } }, directives: [TextBoxComponent, NgControlStatus, NgModel, NgForOf, PopupComponent, PaletteEditorComponent, ContextMenuComponent, NgIf, ColorCircleComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SeriesOverrideEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-series-override',
                templateUrl: './override.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { override: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();

function SeriesOverridesEditorComponent_editor_series_override_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "editor-series-override", 5);
    ɵɵlistener("removed", function SeriesOverridesEditorComponent_editor_series_override_4_Template_editor_series_override_removed_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onRemove($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    ɵɵproperty("override", t_r1)("index", i_r2);
} }
class SeriesOverridesEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    onAdd() {
        this.overrides.push(new SeriesOverride());
    }
    onRemove(t) {
        const index = this.overrides.indexOf(t);
        if (-1 !== index) {
            this.overrides.splice(index, 1);
        }
        this.update();
    }
}
SeriesOverridesEditorComponent.ɵfac = function SeriesOverridesEditorComponent_Factory(t) { return new (t || SeriesOverridesEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
SeriesOverridesEditorComponent.ɵcmp = ɵɵdefineComponent({ type: SeriesOverridesEditorComponent, selectors: [["editor-series-overrides"]], features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], [3, "override", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], [1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "override", "index", "removed"]], template: function SeriesOverridesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h5");
        ɵɵtext(2, "Series specific overrides ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div");
        ɵɵtemplate(4, SeriesOverridesEditorComponent_editor_series_override_4_Template, 1, 2, "editor-series-override", 1);
        ɵɵelementStart(5, "div", 2);
        ɵɵelementStart(6, "button", 3);
        ɵɵlistener("click", function SeriesOverridesEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
        ɵɵelement(7, "i", 4);
        ɵɵtext(8, "\u00A0Add Override ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.overrides);
    } }, directives: [NgForOf, SeriesOverrideEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SeriesOverridesEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-series-overrides',
                template: `
    <div class="gf-form-group">
      <h5>Series specific overrides </h5>

      <div>

        <editor-series-override *ngFor="let t of overrides; let i = index"
          [override]="t" 
          [index]="i"
          (removed)="onRemove( $event )">
        </editor-series-override>

        <div class="gf-form-button-row">
          <button class="btn btn-inverse" (click)="onAdd()">
            <i class="fa fa-plus"></i>&nbsp;Add Override
          </button>
        </div>
        
      </div>
    </div>`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

function ThresholdEditorComponent_ed_color_picker_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-color-picker", 12);
    ɵɵlistener("ngModelChange", function ThresholdEditorComponent_ed_color_picker_5_Template_ed_color_picker_ngModelChange_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.threshold.fillColor = $event; })("selected", function ThresholdEditorComponent_ed_color_picker_5_Template_ed_color_picker_selected_0_listener() { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.refresh(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r0.threshold.fillColor);
} }
function ThresholdEditorComponent_ed_color_picker_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-color-picker", 13);
    ɵɵlistener("ngModelChange", function ThresholdEditorComponent_ed_color_picker_7_Template_ed_color_picker_ngModelChange_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.threshold.lineColor = $event; })("selected", function ThresholdEditorComponent_ed_color_picker_7_Template_ed_color_picker_selected_0_listener() { ɵɵrestoreView(_r6); const ctx_r7 = ɵɵnextContext(); return ctx_r7.refresh(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r1.threshold.lineColor);
} }
class ThresholdEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.removed = new EventEmitter();
        this.availableOperatorValues = DropDownComponent.wrapEnum(ThresholdOperator);
        this.availableColorValues = DropDownComponent.wrapEnum(ThresholdColor);
        this.availableAxisValues = DropDownComponent.wrapEnum(ThresholdAxis);
    }
    get value() {
        return this.threshold.value;
    }
    set value(value) {
        const v = +value;
        this.threshold.value = isNaN(v) || !value ? undefined : v;
    }
    get showCustomColors() {
        return (ThresholdColor.Custom == this.threshold.colorType);
    }
}
ThresholdEditorComponent.ɵfac = function ThresholdEditorComponent_Factory(t) { return new (t || ThresholdEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
ThresholdEditorComponent.ɵcmp = ɵɵdefineComponent({ type: ThresholdEditorComponent, selectors: [["editor-threshold"]], inputs: { threshold: "threshold", index: "index" }, outputs: { removed: "removed" }, features: [ɵɵInheritDefinitionFeature], decls: 13, vars: 12, consts: [[1, "ed-form-inline"], ["width", "6", 3, "data", "ngModel", "label", "ngModelChange", "selectionChange"], ["placeholder", "value", "type", "number", "width", "8", 3, "ngModel", "ngModelChange", "changed"], ["label", "Color", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Fill", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Line", 3, "ngModel", "ngModelChange", "checked"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Y-Axis", 3, "data", "ngModel", "ngModelChange", "selectionChange"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected"]], template: function ThresholdEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "ed-dropdown", 1);
        ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_1_listener($event) { return ctx.threshold.operator = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_1_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(2, "ed-textbox", 2);
        ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_textbox_ngModelChange_2_listener($event) { return ctx.value = $event; })("changed", function ThresholdEditorComponent_Template_ed_textbox_changed_2_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(3, "ed-dropdown", 3);
        ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_3_listener($event) { return ctx.threshold.colorType = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_3_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(4, "ed-checkbox", 4);
        ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.threshold.fill = $event; })("checked", function ThresholdEditorComponent_Template_ed_checkbox_checked_4_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵtemplate(5, ThresholdEditorComponent_ed_color_picker_5_Template, 1, 1, "ed-color-picker", 5);
        ɵɵelementStart(6, "ed-checkbox", 6);
        ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_checkbox_ngModelChange_6_listener($event) { return ctx.threshold.line = $event; })("checked", function ThresholdEditorComponent_Template_ed_checkbox_checked_6_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵtemplate(7, ThresholdEditorComponent_ed_color_picker_7_Template, 1, 1, "ed-color-picker", 7);
        ɵɵelementStart(8, "ed-dropdown", 8);
        ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_8_listener($event) { return ctx.threshold.axis = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_8_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 9);
        ɵɵelementStart(10, "label", 10);
        ɵɵlistener("click", function ThresholdEditorComponent_Template_label_click_10_listener() { return ctx.removed.emit(ctx.threshold); });
        ɵɵelementStart(11, "a");
        ɵɵelement(12, "i", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵpropertyInterpolate1("label", "T", ctx.index + 1, "");
        ɵɵproperty("data", ctx.availableOperatorValues)("ngModel", ctx.threshold.operator);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.value);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.availableColorValues)("ngModel", ctx.threshold.colorType);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.threshold.fill);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showCustomColors);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.threshold.line);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showCustomColors);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.availableAxisValues)("ngModel", ctx.threshold.axis);
    } }, directives: [DropDownComponent, NgControlStatus, NgModel, TextBoxComponent, CheckBoxComponent, NgIf, ColorPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ThresholdEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-threshold',
                templateUrl: './threshold.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { threshold: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();

function ThresholdsEditorComponent_editor_threshold_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "editor-threshold", 6);
    ɵɵlistener("removed", function ThresholdsEditorComponent_editor_threshold_4_Template_editor_threshold_removed_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onRemove($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    ɵɵproperty("threshold", t_r1)("index", i_r2);
} }
class ThresholdsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    onAdd() {
        this.thresholds.push(new Threshold());
    }
    onRemove(t) {
        const index = this.thresholds.indexOf(t);
        if (-1 !== index) {
            this.thresholds.splice(index, 1);
        }
        this.refresh();
    }
}
ThresholdsEditorComponent.ɵfac = function ThresholdsEditorComponent_Factory(t) { return new (t || ThresholdsEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
ThresholdsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: ThresholdsEditorComponent, selectors: [["editor-thresholds"]], features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], ["ng-class", "{'thresholds-form-disabled': ctrl.disabled}"], [3, "threshold", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], ["ng-disabled", "ctrl.disabled", 1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "threshold", "index", "removed"]], template: function ThresholdsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h5");
        ɵɵtext(2, "Thresholds");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 1);
        ɵɵtemplate(4, ThresholdsEditorComponent_editor_threshold_4_Template, 1, 2, "editor-threshold", 2);
        ɵɵelementStart(5, "div", 3);
        ɵɵelementStart(6, "button", 4);
        ɵɵlistener("click", function ThresholdsEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
        ɵɵelement(7, "i", 5);
        ɵɵtext(8, "\u00A0Add Threshold ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.thresholds);
    } }, directives: [NgForOf, ThresholdEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ThresholdsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-thresholds',
                template: `
    <div class="gf-form-group">
      <h5>Thresholds</h5>

      <div ng-class="{'thresholds-form-disabled': ctrl.disabled}">

        <editor-threshold *ngFor="let t of thresholds; let i = index"
          [threshold]="t" 
          [index]="i"
          (removed)="onRemove( $event )">
        </editor-threshold>

        <div class="gf-form-button-row">
          <button class="btn btn-inverse" (click)="onAdd()" ng-disabled="ctrl.disabled">
            <i class="fa fa-plus"></i>&nbsp;Add Threshold
          </button>
        </div>
        
      </div>
    </div>`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

function TimeRegionEditorComponent_ed_color_picker_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-color-picker", 13);
    ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_ed_color_picker_10_Template_ed_color_picker_ngModelChange_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.timeRegion.fillColor = $event; })("selected", function TimeRegionEditorComponent_ed_color_picker_10_Template_ed_color_picker_selected_0_listener() { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.refresh(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r0.timeRegion.fillColor);
} }
function TimeRegionEditorComponent_ed_color_picker_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-color-picker", 14);
    ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_ed_color_picker_12_Template_ed_color_picker_ngModelChange_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.timeRegion.lineColor = $event; })("selected", function TimeRegionEditorComponent_ed_color_picker_12_Template_ed_color_picker_selected_0_listener() { ɵɵrestoreView(_r6); const ctx_r7 = ɵɵnextContext(); return ctx_r7.refresh(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r1.timeRegion.lineColor);
} }
class TimeRegionEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.removed = new EventEmitter();
        this.availableColors = DropDownComponent.wrapEnum(TimeRegionColor);
        this.availableDays = DropDownComponent.wrapEnum(TimeRegionDay);
    }
    get showCustomColors() {
        return (TimeRegionColor.Custom == this.timeRegion.colorType);
    }
    get showCustomFillColor() {
        return (this.showCustomColors && this.timeRegion.fill);
    }
    get showCustomLineColor() {
        return (this.showCustomColors && this.timeRegion.line);
    }
    ngOnInit() {
        this.fromTime = this.timeRegion.fromTime;
        this.toTime = this.timeRegion.toTime;
    }
}
TimeRegionEditorComponent.ɵfac = function TimeRegionEditorComponent_Factory(t) { return new (t || TimeRegionEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
TimeRegionEditorComponent.ɵcmp = ɵɵdefineComponent({ type: TimeRegionEditorComponent, selectors: [["editor-time-region"]], inputs: { timeRegion: "timeRegion", index: "index" }, outputs: { removed: "removed" }, features: [ɵɵInheritDefinitionFeature], decls: 17, vars: 13, consts: [[1, "ed-form-inline"], [1, "gf-form"], [1, "gf-form-label"], ["label", "From", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["placeholder", "hh:mm", "width", "8", 3, "ngModel", "ngModelChange", "focusout"], ["label", "To", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Color", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Fill", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Line", 3, "ngModel", "ngModelChange", "checked"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected"]], template: function TimeRegionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "label", 2);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "ed-dropdown", 3);
        ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_4_listener($event) { return ctx.timeRegion.fromDay = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_4_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(5, "ed-textbox", 4);
        ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_textbox_ngModelChange_5_listener($event) { return ctx.fromTime = $event; })("focusout", function TimeRegionEditorComponent_Template_ed_textbox_focusout_5_listener() { ctx.timeRegion.fromTime = ctx.fromTime; return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "ed-dropdown", 5);
        ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_6_listener($event) { return ctx.timeRegion.toDay = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_6_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(7, "ed-textbox", 4);
        ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_textbox_ngModelChange_7_listener($event) { return ctx.toTime = $event; })("focusout", function TimeRegionEditorComponent_Template_ed_textbox_focusout_7_listener() { ctx.timeRegion.toTime = ctx.toTime; return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(8, "ed-dropdown", 6);
        ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_8_listener($event) { return ctx.timeRegion.colorType = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_8_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵelementStart(9, "ed-checkbox", 7);
        ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_checkbox_ngModelChange_9_listener($event) { return ctx.timeRegion.fill = $event; })("checked", function TimeRegionEditorComponent_Template_ed_checkbox_checked_9_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵtemplate(10, TimeRegionEditorComponent_ed_color_picker_10_Template, 1, 1, "ed-color-picker", 8);
        ɵɵelementStart(11, "ed-checkbox", 9);
        ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.timeRegion.line = $event; })("checked", function TimeRegionEditorComponent_Template_ed_checkbox_checked_11_listener() { return ctx.refresh(); });
        ɵɵelementEnd();
        ɵɵtemplate(12, TimeRegionEditorComponent_ed_color_picker_12_Template, 1, 1, "ed-color-picker", 10);
        ɵɵelementStart(13, "div", 1);
        ɵɵelementStart(14, "label", 11);
        ɵɵlistener("click", function TimeRegionEditorComponent_Template_label_click_14_listener() { return ctx.removed.emit(ctx.timeRegion); });
        ɵɵelementStart(15, "a");
        ɵɵelement(16, "i", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1("T", ctx.index + 1, "");
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.availableDays)("ngModel", ctx.timeRegion.fromDay);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.fromTime);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.availableDays)("ngModel", ctx.timeRegion.toDay);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.toTime);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.availableColors)("ngModel", ctx.timeRegion.colorType);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.timeRegion.fill);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showCustomFillColor);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.timeRegion.line);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showCustomLineColor);
    } }, directives: [DropDownComponent, NgControlStatus, NgModel, TextBoxComponent, CheckBoxComponent, NgIf, ColorPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimeRegionEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time-region',
                templateUrl: './time-region.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { timeRegion: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();

function TimeRegionsEditorComponent_editor_time_region_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "editor-time-region", 6);
    ɵɵlistener("removed", function TimeRegionsEditorComponent_editor_time_region_4_Template_editor_time_region_removed_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onRemove($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    ɵɵproperty("timeRegion", t_r1)("index", i_r2);
} }
class TimeRegionsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    onAdd() {
        this.timeRegions.push(new TimeRegion());
    }
    onRemove(t) {
        const index = this.timeRegions.indexOf(t);
        if (-1 !== index) {
            this.timeRegions.splice(index, 1);
        }
        this.refresh();
    }
}
TimeRegionsEditorComponent.ɵfac = function TimeRegionsEditorComponent_Factory(t) { return new (t || TimeRegionsEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
TimeRegionsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: TimeRegionsEditorComponent, selectors: [["editor-time-regions"]], features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], ["ng-class", "{'thresholds-form-disabled': ctrl.disabled}"], [3, "timeRegion", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], ["ng-disabled", "ctrl.disabled", 1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "timeRegion", "index", "removed"]], template: function TimeRegionsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h5");
        ɵɵtext(2, "Time regions");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 1);
        ɵɵtemplate(4, TimeRegionsEditorComponent_editor_time_region_4_Template, 1, 2, "editor-time-region", 2);
        ɵɵelementStart(5, "div", 3);
        ɵɵelementStart(6, "button", 4);
        ɵɵlistener("click", function TimeRegionsEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
        ɵɵelement(7, "i", 5);
        ɵɵtext(8, "\u00A0Add Time Region ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.timeRegions);
    } }, directives: [NgForOf, TimeRegionEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimeRegionsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time-regions',
                template: `
  <div class="gf-form-group">
    <h5>Time regions</h5>

    <div ng-class="{'thresholds-form-disabled': ctrl.disabled}">

      <editor-time-region *ngFor="let t of timeRegions; let i = index"
        [timeRegion]="t" 
        [index]="i"
        (removed)="onRemove( $event )">
      </editor-time-region>

      <div class="gf-form-button-row">
        <button class="btn btn-inverse" (click)="onAdd()" ng-disabled="ctrl.disabled">
          <i class="fa fa-plus"></i>&nbsp;Add Time Region
        </button>
      </div>
      
    </div>
  </div>`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

function DisplayEditorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-draw-options");
} }
function DisplayEditorComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("(", ctx_r7.overrides.length, ")");
} }
function DisplayEditorComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " Series overrides");
    ɵɵtemplate(1, DisplayEditorComponent_ng_template_4_span_1_Template, 2, 1, "span", 4);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.overrides.length);
} }
function DisplayEditorComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-series-overrides");
} }
function DisplayEditorComponent_ng_template_7_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("(", ctx_r8.thresholds.length, ")");
} }
function DisplayEditorComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " Thresholds");
    ɵɵtemplate(1, DisplayEditorComponent_ng_template_7_span_1_Template, 2, 1, "span", 4);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.thresholds.length);
} }
function DisplayEditorComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-thresholds");
} }
function DisplayEditorComponent_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("(", ctx_r9.timeRegions.length, ")");
} }
function DisplayEditorComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " Time regions");
    ɵɵtemplate(1, DisplayEditorComponent_ng_template_10_span_1_Template, 2, 1, "span", 4);
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.timeRegions.length);
} }
function DisplayEditorComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-time-regions");
} }
class DisplayEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 1;
    }
}
DisplayEditorComponent.ɵfac = function DisplayEditorComponent_Factory(t) { return new (t || DisplayEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
DisplayEditorComponent.ɵcmp = ɵɵdefineComponent({ type: DisplayEditorComponent, selectors: [["editor-display"]], features: [ɵɵInheritDefinitionFeature], decls: 12, vars: 1, consts: [[3, "ngModel", "ngModelChange"], ["header", "Draw options"], ["edTabContent", ""], ["edTabTitle", ""], ["class", "muted ml-1", 4, "ngIf"], [1, "muted", "ml-1"]], template: function DisplayEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ed-side-tabstrip", 0);
        ɵɵlistener("ngModelChange", function DisplayEditorComponent_Template_ed_side_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; });
        ɵɵelementStart(1, "ed-tab", 1);
        ɵɵtemplate(2, DisplayEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "ed-tab");
        ɵɵtemplate(4, DisplayEditorComponent_ng_template_4_Template, 2, 1, "ng-template", 3);
        ɵɵtemplate(5, DisplayEditorComponent_ng_template_5_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(6, "ed-tab");
        ɵɵtemplate(7, DisplayEditorComponent_ng_template_7_Template, 2, 1, "ng-template", 3);
        ɵɵtemplate(8, DisplayEditorComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(9, "ed-tab");
        ɵɵtemplate(10, DisplayEditorComponent_ng_template_10_Template, 2, 1, "ng-template", 3);
        ɵɵtemplate(11, DisplayEditorComponent_ng_template_11_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngModel", ctx.index);
    } }, directives: [SideTabStripComponent, NgControlStatus, NgModel, TabComponent, TabContentTemplate, TabTitleTemplate, DrawOptionsEditorComponent, NgIf, SeriesOverridesEditorComponent, ThresholdsEditorComponent, TimeRegionsEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DisplayEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-display',
                templateUrl: './display.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

function AlertConditionEditorComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1, "WHEN");
    ɵɵelementEnd();
} }
function AlertConditionEditorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1, "And");
    ɵɵelementEnd();
} }
class AlertConditionEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 0;
        this.removed = new EventEmitter();
    }
}
AlertConditionEditorComponent.ɵfac = function AlertConditionEditorComponent_Factory(t) { return new (t || AlertConditionEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertConditionEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertConditionEditorComponent, selectors: [["editor-alert-condition"]], inputs: { condition: "condition", index: "index" }, outputs: { removed: "removed" }, features: [ɵɵInheritDefinitionFeature], decls: 8, vars: 2, consts: [[1, "gf-form-inline"], [1, "gf-form"], ["class", "gf-form-label query-keyword width-5", 4, "ngIf"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], [1, "gf-form-label", "query-keyword", "width-5"]], template: function AlertConditionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, AlertConditionEditorComponent_span_2_Template, 2, 0, "span", 2);
        ɵɵtemplate(3, AlertConditionEditorComponent_span_3_Template, 2, 0, "span", 2);
        ɵɵelementEnd();
        ɵɵtext(4, " cond ");
        ɵɵelementStart(5, "div", 1);
        ɵɵelementStart(6, "label", 3);
        ɵɵlistener("click", function AlertConditionEditorComponent_Template_label_click_6_listener() { return ctx.removed.emit(ctx.condition); });
        ɵɵelement(7, "i", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.index == 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.index != 0);
    } }, directives: [NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertConditionEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-condition',
                templateUrl: './cond.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { condition: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();

function AlertConfigEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "editor-alert-condition", 10);
    ɵɵlistener("removed", function AlertConfigEditorComponent_div_10_Template_editor_alert_condition_removed_1_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onRemoveCondition($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    ɵɵadvance(1);
    ɵɵproperty("condition", c_r1)("index", i_r2);
} }
class AlertConfigEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.availableNoDataOptions = DropDownComponent.wrapEnum(AlertNoDataOption);
        this.availableErrorOptions = DropDownComponent.wrapEnum(AlertErrorOption);
    }
    onAddCondition() {
        var _a;
        this.alert.conditions = (_a = this.alert.conditions) !== null && _a !== void 0 ? _a : [];
        this.alert.conditions.push(new AlertCondition());
        this.panel.error = !this.panel.error ? "Mega error occured" : undefined;
    }
    onRemoveCondition(c) {
        const index = this.alert.conditions.indexOf(c);
        if (-1 !== index) {
            this.alert.conditions.splice(index, 1);
        }
    }
    onTestRule() {
        this.testing = true;
        of(this.alert)
            .pipe(delay(2000), finalize(() => this.testing = false))
            .subscribe(x => {
            this.explorer.content = x;
            // if( x.error ){
            //   Notes.error( x.error );
            // }
        }, e => {
            var _a, _b;
            return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_ALERT_EVAL);
        });
    }
}
AlertConfigEditorComponent.ɵfac = function AlertConfigEditorComponent_Factory(t) { return new (t || AlertConfigEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertConfigEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertConfigEditorComponent, selectors: [["editor-alert-config"]], viewQuery: function AlertConfigEditorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(JsonExplorerComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.explorer = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 4, consts: [[1, "gf-form-group"], [1, "section-heading"], ["label", "Name", "labelWidth", "6", "width", "20", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["label", "Evaluate every", "labelWidth", "9", "width", "6", 3, "ngModel", "ngModelChange"], ["label", "For", "labelWidth", "5", "width", "6", "placeholder", "5m", "hint", "If an alert rule has a configured For and the query violates\n\t\t\t\tthe configured threshold it will first go from OK to Pending. \n\t\t\t\tGoing from OK to Pending Grafana will not send any notifications.\n\t\t\t\tOnce the alert rule has been firing for more than For duration,\n\t\t\t\tit will change to Alerting and send alert notifications. ", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-plus"], [3, "condition", "index", "removed"]], template: function AlertConfigEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h5", 1);
        ɵɵtext(2, "Alert Config");
        ɵɵelementEnd();
        ɵɵelementStart(3, "ed-textbox", 2);
        ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_3_listener($event) { return ctx.alert.name = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "ed-textbox", 4);
        ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_5_listener($event) { return ctx.alert.frequency = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(6, "ed-textbox", 5);
        ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_6_listener($event) { return ctx.alert.for = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 0);
        ɵɵelementStart(8, "h5", 1);
        ɵɵtext(9, "Conditions");
        ɵɵelementEnd();
        ɵɵtemplate(10, AlertConfigEditorComponent_div_10_Template, 2, 2, "div", 6);
        ɵɵelementStart(11, "div", 7);
        ɵɵelementStart(12, "label", 8);
        ɵɵlistener("click", function AlertConfigEditorComponent_Template_label_click_12_listener() { return ctx.onAddCondition(); });
        ɵɵelement(13, "i", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.alert.name);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.alert.frequency);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.alert.for);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.alert.conditions);
    } }, directives: [TextBoxComponent, NgControlStatus, NgModel, NgForOf, AlertConditionEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertConfigEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-config',
                templateUrl: './alert-config.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { explorer: [{
            type: ViewChild,
            args: [JsonExplorerComponent]
        }] }); })();

class AlertNotificationsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
AlertNotificationsEditorComponent.ɵfac = function AlertNotificationsEditorComponent_Factory(t) { return new (t || AlertNotificationsEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertNotificationsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertNotificationsEditorComponent, selectors: [["editor-alert-notifications"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function AlertNotificationsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0, "alert notifications will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertNotificationsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-notifications',
                templateUrl: './alert-nots.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class AlertHistoryEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
AlertHistoryEditorComponent.ɵfac = function AlertHistoryEditorComponent_Factory(t) { return new (t || AlertHistoryEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertHistoryEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertHistoryEditorComponent, selectors: [["editor-alert-history"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function AlertHistoryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0, "alert history will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertHistoryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-history',
                templateUrl: './alert-history.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

function AlertEditorComponent_ed_side_tabstrip_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-alert-config");
} }
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " Notifications ");
} }
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-alert-notifications");
} }
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-alert-history");
} }
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-dialog", 8);
    ɵɵlistener("close", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_ed_dialog_close_0_listener() { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(2); return ctx_r8.onClose(); });
    ɵɵelementStart(1, "div", 9);
    ɵɵelementStart(2, "div", 10);
    ɵɵtext(3, " Are you sure you want to delete this alert rule? ");
    ɵɵelementStart(4, "div", 11);
    ɵɵtext(5, " You need to save dashboard for the delete to take effect ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "ed-dialog-actions");
    ɵɵelementStart(7, "button", 12);
    ɵɵlistener("click", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_button_click_7_listener() { ɵɵrestoreView(_r9); const ctx_r10 = ɵɵnextContext(2); return ctx_r10.onDelete(); });
    ɵɵtext(8, "Delete");
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 13);
    ɵɵlistener("click", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_button_click_9_listener() { ɵɵrestoreView(_r9); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.onClose(); });
    ɵɵtext(10, "Cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function AlertEditorComponent_ed_side_tabstrip_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-side-tabstrip", 2);
    ɵɵlistener("ngModelChange", function AlertEditorComponent_ed_side_tabstrip_0_Template_ed_side_tabstrip_ngModelChange_0_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(); return ctx_r12.index = $event; });
    ɵɵelementStart(1, "ed-tab", 3);
    ɵɵtemplate(2, AlertEditorComponent_ed_side_tabstrip_0_ng_template_2_Template, 1, 0, "ng-template", 4);
    ɵɵelementEnd();
    ɵɵelementStart(3, "ed-tab");
    ɵɵtemplate(4, AlertEditorComponent_ed_side_tabstrip_0_ng_template_4_Template, 1, 0, "ng-template", 5);
    ɵɵtemplate(5, AlertEditorComponent_ed_side_tabstrip_0_ng_template_5_Template, 1, 0, "ng-template", 4);
    ɵɵelementEnd();
    ɵɵelementStart(6, "ed-tab", 6);
    ɵɵtemplate(7, AlertEditorComponent_ed_side_tabstrip_0_ng_template_7_Template, 1, 0, "ng-template", 4);
    ɵɵelementEnd();
    ɵɵelementStart(8, "ed-tab", 7);
    ɵɵtemplate(9, AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template, 11, 0, "ng-template", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r0.index);
} }
function AlertEditorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14);
    ɵɵelementStart(1, "div", 15);
    ɵɵelementStart(2, "button", 16);
    ɵɵlistener("click", function AlertEditorComponent_ng_template_1_Template_button_click_2_listener() { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(); return ctx_r14.onAddAlert(); });
    ɵɵelement(3, "i", 17);
    ɵɵtext(4, " Create Alert ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
class AlertEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 0;
        console.log(this.widget);
    }
    ngOnInit() {
        //this.onAddAlert(); // just for tests  
    }
    onAddAlert() {
        this.widget.alert = new AlertRule();
    }
    onClose() {
        this.index = 0;
    }
    onDelete() {
        // delete alert
        this.widget.alert = undefined;
        this.onClose();
    }
}
AlertEditorComponent.ɵfac = function AlertEditorComponent_Factory(t) { return new (t || AlertEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertEditorComponent, selectors: [["editor-alert"]], features: [ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["invitation", ""], [3, "ngModel", "ngModelChange"], ["header", "Alert Config"], ["edTabContent", ""], ["edTabTitle", ""], ["header", "State History"], ["header", "Delete"], ["header", "Delete Alert", "headerIcon", "fa fa-trash", "visible", "true", 3, "close"], [1, "text-center"], [1, "confirm-modal-text"], [1, "confirm-modal-text2"], [1, "btn", "btn-danger", 3, "click"], [1, "ml-2", "btn", "btn-inverse", 3, "click"], [1, "gf-form-group"], [1, "gf-form-button-row"], [1, "btn", "btn-inverse", 3, "click"], [1, "icon-gf", "icon-gf-alert"]], template: function AlertEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AlertEditorComponent_ed_side_tabstrip_0_Template, 10, 1, "ed-side-tabstrip", 0);
        ɵɵtemplate(1, AlertEditorComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.alert)("ngIfElse", _r1);
    } }, directives: [NgIf, SideTabStripComponent, NgControlStatus, NgModel, TabComponent, TabContentTemplate, TabTitleTemplate, AlertConfigEditorComponent, AlertNotificationsEditorComponent, AlertHistoryEditorComponent, DialogComponent, DialogActionsComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert',
                templateUrl: './alert.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class TimeEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    ngOnInit() {
        var _a, _b;
        this.form = new FormGroup({
            'from': new FormControl((_a = this.time.from) !== null && _a !== void 0 ? _a : '', this.validateTime.bind(this)),
            'shift': new FormControl((_b = this.time.shift) !== null && _b !== void 0 ? _b : '', this.validateTime.bind(this)),
            'hide': new FormControl(this.time.hide)
        });
        this
            .form
            .valueChanges
            .subscribe(v => {
            if (this.form.valid) {
                let pull = false;
                if (this.time.from !== v.from) {
                    this.time.from = v.from;
                    pull = true;
                }
                if (this.time.shift !== v.shift) {
                    this.time.shift = v.shift;
                    pull = true;
                }
                if (this.time.hide !== v.hide) {
                    this.time.hide = v.hide;
                }
                if (pull) {
                    this.pull();
                }
            }
        });
    }
    validateTime(c) {
        if (!c.value) {
            return null;
        }
        const v = `now - ${c.value}`;
        return (TimeRangeParser.isValid(v)) ? null : { invalidTime: true };
    }
}
TimeEditorComponent.ɵfac = function TimeEditorComponent_Factory(t) { return new (t || TimeEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
TimeEditorComponent.ɵcmp = ɵɵdefineComponent({ type: TimeEditorComponent, selectors: [["editor-time"]], features: [ɵɵInheritDefinitionFeature], decls: 22, vars: 1, consts: [[3, "formGroup"], ["f", ""], [1, "section", "gf-form-group"], [1, "ed-form-inline"], [1, "gf-form"], [1, "gf-form-label"], [1, "fa", "fa-clock-o"], [1, "gf-form-label", "width-12"], ["label", "Last", "labelWidth", "6", "width", "8", "placeholder", "1h", "formControlName", "from"], ["label", "Amount", "labelWidth", "6", "width", "8", "placeholder", "1h", "formControlName", "shift"], [1, "gf-form-inline"], ["labelWidth", "12", "width", "6", "label", "Hide time override info", "formControlName", "hide"]], template: function TimeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0, 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "span", 5);
        ɵɵelement(6, "i", 6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "span", 7);
        ɵɵtext(8, "Override relative time");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(9, "ed-textbox", 8);
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 3);
        ɵɵelementStart(11, "div", 4);
        ɵɵelementStart(12, "span", 5);
        ɵɵelement(13, "i", 6);
        ɵɵelementEnd();
        ɵɵelementStart(14, "span", 7);
        ɵɵtext(15, "Add time shift");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(16, "ed-textbox", 9);
        ɵɵelementEnd();
        ɵɵelementStart(17, "div", 10);
        ɵɵelementStart(18, "div", 4);
        ɵɵelementStart(19, "span", 5);
        ɵɵelement(20, "i", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(21, "ed-checkbox", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, TextBoxComponent, NgControlStatus, FormControlName, CheckBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimeEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time',
                templateUrl: './time.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

function ChartEditorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-general");
} }
function ChartEditorComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-metrics");
} }
function ChartEditorComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-axes");
} }
function ChartEditorComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-legend");
} }
function ChartEditorComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-display");
} }
function ChartEditorComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-alert");
} }
function ChartEditorComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "editor-time");
} }
class ChartEditorComponent {
    constructor(router, activatedRoute, location) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.index = 0;
        this
            .activatedRoute
            .queryParamMap
            .subscribe((params) => {
            const p = params.get('tab');
            if (Number.isInteger(+p)) {
                this.index = +p;
            }
        });
    }
    onTabSelected(index) {
        const url = this
            .router
            .createUrlTree([], {
            relativeTo: this.activatedRoute,
            queryParams: { tab: index },
            queryParamsHandling: 'merge',
        })
            .toString();
        this.location.go(url);
    }
}
ChartEditorComponent.ɵfac = function ChartEditorComponent_Factory(t) { return new (t || ChartEditorComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Location)); };
ChartEditorComponent.ɵcmp = ɵɵdefineComponent({ type: ChartEditorComponent, selectors: [["widget-editor"]], decls: 15, vars: 1, consts: [["header", "Graph", 3, "ngModel", "ngModelChange", "selected"], ["header", "General"], ["edTabContent", ""], ["header", "Metrics"], ["header", "Axes"], ["header", "Legend"], ["header", "Display"], ["header", "Alert"], ["header", "Time range"]], template: function ChartEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ed-tabstrip", 0);
        ɵɵlistener("ngModelChange", function ChartEditorComponent_Template_ed_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; })("selected", function ChartEditorComponent_Template_ed_tabstrip_selected_0_listener($event) { return ctx.onTabSelected($event); });
        ɵɵelementStart(1, "ed-tab", 1);
        ɵɵtemplate(2, ChartEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "ed-tab", 3);
        ɵɵtemplate(4, ChartEditorComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(5, "ed-tab", 4);
        ɵɵtemplate(6, ChartEditorComponent_ng_template_6_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(7, "ed-tab", 5);
        ɵɵtemplate(8, ChartEditorComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(9, "ed-tab", 6);
        ɵɵtemplate(10, ChartEditorComponent_ng_template_10_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(11, "ed-tab", 7);
        ɵɵtemplate(12, ChartEditorComponent_ng_template_12_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementStart(13, "ed-tab", 8);
        ɵɵtemplate(14, ChartEditorComponent_ng_template_14_Template, 1, 0, "ng-template", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngModel", ctx.index);
    } }, directives: [TabStripComponent, NgControlStatus, NgModel, TabComponent, TabContentTemplate, GeneralEditorComponent, MetricsEditorComponent, AxesEditorComponent, LegendEditorComponent, DisplayEditorComponent, AlertEditorComponent, TimeEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartEditorComponent, [{
        type: Component,
        args: [{
                selector: 'widget-editor',
                templateUrl: './editor.html'
            }]
    }], function () { return [{ type: Router }, { type: ActivatedRoute }, { type: Location }]; }, null); })();

class TooltipBuilder {
    constructor(model, component) {
        this.model = model;
        this.component = component;
        this.ID = "chartjs-tooltip";
        this.TOOLTIP_SELECTOR = "ed-tooltip";
    }
    static build(comp) {
        Chart.Tooltip.positioners.custom = (_, event) => {
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
            custom: (model) => new TooltipBuilder(model, comp).create()
        };
    }
    get root() {
        var tooltipEl = document.getElementById(this.ID);
        // Create element on first render
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = this.ID;
            tooltipEl.innerHTML = `<div class='graph-tooltip grafana-tooltip ${this.TOOLTIP_SELECTOR}'></div>`;
            document.body.appendChild(tooltipEl);
        }
        return tooltipEl;
    }
    create() {
        var tooltipElement = this.root;
        // Hide if no tooltip
        if (this.model.opacity === 0 /*|| chart.showAnnotView*/) {
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
    }
    setPosition() {
        var tooltipElement = this.root;
        const chart = this.component.control.chart;
        var position = chart
            .canvas
            .getBoundingClientRect();
        const elWidth = document
            .getElementsByClassName(this.TOOLTIP_SELECTOR)[0]
            .getBoundingClientRect()
            .width;
        const negMargin = (this.model.caretX + elWidth > position.width) ?
            elWidth + 2 * this.model.xPadding : 0;
        tooltipElement.style.opacity = '1';
        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = position.left + window.pageXOffset + this.model.caretX - negMargin + 'px';
        tooltipElement.style.top = position.top + window.pageYOffset + this.model.caretY + 'px';
        tooltipElement.style.fontFamily = this.model._bodyFontFamily;
        tooltipElement.style.padding = this.model.yPadding + 'px ' + this.model.xPadding + 'px';
        tooltipElement.style.pointerEvents = 'none';
    }
    createBody() {
        var tooltipElement = this.root;
        var chart = this.component;
        var w = this.component.store.panel.widget;
        var titleLines = this.model.title || [];
        var innerHtml = '';
        titleLines.forEach(function (title) {
            const date = Date.parse(title);
            const time = Moment.format(date);
            innerHtml += `<div class="graph-tooltip-time">${time}</div>`;
        });
        const parsedBodyLines = this.sort();
        parsedBodyLines.forEach((body, i) => {
            const { seriesName, value, color } = body;
            let seriesNameEl = `
				<div class="graph-tooltip-series-name">
					<i class="fa fa-minus" style="color:${color};"></i> ${seriesName}:
				</div>`;
            const ds = chart
                .data
                .datasets
                .find(x => x.label == seriesName);
            const axis = (ds.yAxisID == AXIS_Y_LEFT) ? w.axes.leftY : w.axes.rightY;
            const decimals = w.legend.decimals ? w.legend.decimals : 1;
            const resValue = AxisUnitHelper.getFormattedValue(value, axis.unit, decimals);
            let valueEl = `<div class="graph-tooltip-value ">${resValue}</div>`;
            let item = `
				<div class="graph-tooltip-list-item">
					${seriesNameEl}
					${valueEl}
				</div>`;
            innerHtml += item;
        });
        var tableRoot = tooltipElement.querySelector(`.${this.TOOLTIP_SELECTOR}`);
        tableRoot.innerHTML = innerHtml;
    }
    sort() {
        function getBody(bodyItem) {
            return bodyItem.lines;
        }
        var bodyLines = this.model.body.map(getBody);
        const sortOrder = this
            .component
            .widget
            .display
            .tooltipSortOrder;
        const parsedBodyLines = [];
        bodyLines.forEach((body, i) => {
            var colors = this.model.labelColors[i];
            var color = ColorHelper.hexToRgbString(colors.backgroundColor);
            let index = body[0].lastIndexOf(':');
            const seriesName = body[0].substring(0, index);
            const value = parseFloat(this.model.dataPoints[i].value);
            parsedBodyLines.push({ seriesName, value, color });
        });
        switch (sortOrder) {
            case TooltipSortOrder.Increasing:
                parsedBodyLines.sort((a, b) => a.value - b.value);
                break;
            case TooltipSortOrder.Decreasing:
                parsedBodyLines.sort((a, b) => b.value - a.value);
                break;
        }
        const res = parsedBodyLines.filter(x => {
            var _a;
            return !((_a = this
                .component
                .display
                .getOverrideByLabel(x.seriesName)) === null || _a === void 0 ? void 0 : _a.hideInTooltip);
        });
        return res;
    }
}

class OptionsProvider {
    static getOptions(comp) {
        Chart.defaults.global.defaultFontColor = '#e3e3e3';
        Chart.defaults.global.defaultFontFamily = 'Roboto';
        Chart.defaults.global.defaultFontSize = 11;
        const w = comp.widget;
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
                /*!AxesManager.needSecondaryYAxis(widget) true ? [axisYa] : [axisYa, axisYb]				*/
            },
        };
    }
    static getAxisX(w) {
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
    }
    static getAxisY(w, left) {
        const wAxis = left ? w.axes.leftY : w.axes.rightY;
        const id = left ? AXIS_Y_LEFT : AXIS_Y_RIGHT;
        const axis = {
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
                userCallback: (label, index, labels) => {
                    if (labels.length > 8 && !(index % 2)) {
                        return;
                    }
                    return AxisUnitHelper.getFormattedValue(label, wAxis.unit, wAxis.decimals);
                }
            },
            stacked: w.display.stack,
        };
        return axis;
    }
}

class DisplayManager {
    constructor(panel) {
        this.panel = panel;
    }
    get display() {
        return this
            .panel
            .widget
            .display;
    }
    get options() {
        return this
            .panel
            .widget
            .component
            .control
            .chart
            .options;
    }
    setup(ds) {
        this.setupLines(ds);
        this.setupPoints(ds);
        this.setupNullValue(ds);
    }
    setupLines(ds) {
        const showLines = this.getShowLines(ds);
        const lineWidth = this.getLineWidth(ds);
        const fill = this.getFill(ds);
        let opacity = (fill / 10);
        ds.fill = ( /*showLines &&*/fill > 0);
        ds.backgroundColor = this.getLineColor(ds, opacity);
        opacity = (showLines && lineWidth) ? 1 : 0;
        ds.borderColor = this.getLineColor(ds, opacity);
        ds.borderWidth = lineWidth;
        ds.steppedLine = this.getStaircase(ds);
        if (this.getDashes(ds)) {
            const len = this.getDashLength(ds);
            const space = this.getDashSpace(ds);
            ds.borderDash = [len, space];
        }
        else {
            ds.borderDash = undefined;
        }
        ds.order = this.getZIndex(ds);
        ds.legend = this.getLegend(ds);
        ds.yAxisID = (1 == this.getYAxis(ds)) ? AXIS_Y_LEFT : AXIS_Y_RIGHT;
    }
    setupPoints(ds) {
        const showPoints = this.getShowPoints(ds);
        const opacity = showPoints ? 1 : 0;
        const color = this.getLineColor(ds, opacity);
        ds.pointBorderColor = `${color}`;
        ds.pointBackgroundColor = `${color}`;
        ds.pointRadius = showPoints ? this.getPointRadius(ds) : 0;
    }
    setupNullValue(ds) {
        switch (this.display.nullValue) {
            case DataPointNullValueOption.Connected:
                this.options.spanGaps = true;
                ds.data.forEach(p => p.y = p.isNull ? null : p.y);
                break;
            case DataPointNullValueOption.Null:
                this.options.spanGaps = false;
                ds.data.forEach(p => p.y = p.isNull ? null : p.y);
                break;
            case DataPointNullValueOption.NullAsZero:
                this.options.spanGaps = false;
                ds.data.forEach(p => p.y = p.isNull ? 0 : p.y);
                break;
        }
    }
    getShowLines(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lines) ? o.lines : this.display.showLines;
    }
    getLineWidth(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lineWidth) ? o.lineWidth : this.display.lineWidth;
    }
    getLineColor(ds, opacity) {
        const o = this.getOverride(ds);
        const color = ColorHelper.colors[ds.index % ColorHelper.colors.length];
        const defaultColor = ColorHelper.hexToRgbString(color, opacity);
        const useOverride = (o && undefined != o.color);
        let overrideColor;
        if (useOverride) {
            overrideColor = ColorHelper.hexToRgbString(o.color, opacity);
        }
        return (useOverride) ? overrideColor : defaultColor;
    }
    getFill(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lineFill) ? o.lineFill : this.display.fill;
    }
    getStaircase(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.staircase) ? o.staircase : this.display.staircase;
    }
    getDashes(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashes) ? o.dashes : false;
    }
    getDashLength(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashLength) ? o.dashLength : 1;
    }
    getDashSpace(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashSpace) ? o.dashSpace : 1;
    }
    getShowPoints(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.points) ? o.points : this.display.showPoints;
    }
    getPointRadius(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.pointRadius) ? o.pointRadius : this.display.pointRadius;
    }
    getLegend(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.legend) ? o.legend : true;
    }
    getZIndex(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.zIndex) ? o.zIndex : 0;
    }
    getYAxis(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.yAxis) ? o.yAxis : 1;
    }
    getOverride(ds) {
        return this.getOverrideByLabel(ds.label);
    }
    getOverrideByLabel(label) {
        return this
            .display
            .overrides
            .find(x => x.alias && new RegExp(x.alias).test(label));
    }
}
DisplayManager.ɵfac = function DisplayManager_Factory(t) { return new (t || DisplayManager)(ɵɵinject(PANEL_TOKEN)); };
DisplayManager.ɵprov = ɵɵdefineInjectable({ token: DisplayManager, factory: DisplayManager.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DisplayManager, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class DataConverter {
    constructor(dispay) {
        this.dispay = dispay;
    }
    toDataSets(data) {
        if (!data || 0 === data.length) {
            return [];
        }
        let dataSets = [];
        let totalIndex = 0;
        data.forEach(serie => {
            const columns = serie.columns.slice(1);
            const arr = [...columns.map((el, index) => this.toDataSet(serie, index + 1, totalIndex++))]
                .filter(x => x);
            dataSets = [...dataSets, ...arr];
            dataSets.forEach(x => this.dispay.setup(x));
        });
        //this.chart.widget.error = undefined;
        return dataSets;
    }
    toDataSet(serie, index, totalIndex) {
        const values = serie
            .values
            .map(x => {
            const isNull = (null == x[index]);
            return {
                x: Moment.valueOf(x[0]),
                y: (isNull) ? x[index] : x[index],
                isNull: isNull
            };
        });
        const filteredValues = values
            .map(p => p.y)
            .filter(p => null != p)
            .map(p => parseFloat(p));
        if (0 == filteredValues.length) {
            return;
        }
        const avg = (filteredValues.reduce((a, b) => a + b) / filteredValues.length);
        const allNulls = filteredValues.every(x => x == null);
        const allZeros = filteredValues.every(x => x == 0);
        const ds = {
            label: this.generateDataSetName(serie, index),
            data: values,
            lineTension: 0,
            min: Math.min(...filteredValues),
            max: Math.max(...filteredValues),
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
    }
    generateDataSetName(serie, index) {
        let root = `${serie.name}.${serie.columns[index]}`;
        let tags = '';
        var keys = Object.keys(serie.tags);
        var keyIndex = 0;
        for (var key in serie.tags) {
            tags += `${keyIndex > 0 ? ', ' : ''}${key}: ${serie.tags[key]}`;
            keyIndex++;
        }
        // serie.tags.forEach( ( t, index ) => tags = `${tags}${index > 0 ? ',': ''} tag` )
        if (tags) {
            root = `${root} {${tags}}`;
        }
        return root;
    }
}
DataConverter.ɵfac = function DataConverter_Factory(t) { return new (t || DataConverter)(ɵɵinject(DisplayManager)); };
DataConverter.ɵprov = ɵɵdefineInjectable({ token: DataConverter, factory: DataConverter.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataConverter, [{
        type: Injectable
    }], function () { return [{ type: DisplayManager }]; }, null); })();

class DataProvider {
    constructor(pluginActivator, dsService, converter, time, panel) {
        this.pluginActivator = pluginActivator;
        this.dsService = dsService;
        this.converter = converter;
        this.time = time;
        this.panel = panel;
        this.data$ = new EventEmitter();
        this.timeSubs = this
            .time
            .range$
            .pipe(tap(_ => this.request = ''), mergeMap(_ => this.pluginActivator.createDataSourceMetricsBuilder(panel)), mergeMap(mb => mb.build(this.metrics, this.range)))
            .subscribe(x => this.pull(x), e => this.onError(e));
    }
    get metrics() {
        var _a, _b;
        return (_b = (_a = this
            .panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.metrics;
    }
    get range() {
        var _a, _b;
        const range = this.time.range.raw;
        const mod = (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.time;
        return this
            .time
            .converter
            .modify(range, mod);
    }
    destroy() {
        var _a;
        (_a = this.timeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    update() {
        this.time.tick();
    }
    pull(request) {
        if (this.request === request) {
            return;
        }
        this.request = request;
        console.log(`pull: ${request}`);
        if (!request) {
            this.onData([]);
        }
        else {
            this.panel.loading = true;
            this
                .dsService
                .proxy(this.metrics.dataSource, request)
                .pipe(finalize(() => this.panel.loading = false))
                .subscribe(x => this.onData(x), e => { var _a, _b; return this.onError((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.details) !== null && _b !== void 0 ? _b : "error: todo"); });
        }
    }
    onData(x) {
        this.panel.error = undefined;
        this.data$.emit({
            datasets: this.converter.toDataSets(x)
        });
    }
    onError(err) {
        this.panel.error = err;
        this.data$.emit({
            datasets: []
        });
    }
}
DataProvider.ɵfac = function DataProvider_Factory(t) { return new (t || DataProvider)(ɵɵinject(PluginActivator), ɵɵinject(DataSourceService), ɵɵinject(DataConverter), ɵɵinject(TimeRangeStore), ɵɵinject(PANEL_TOKEN)); };
DataProvider.ɵprov = ɵɵdefineInjectable({ token: DataProvider, factory: DataProvider.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataProvider, [{
        type: Injectable
    }], function () { return [{ type: PluginActivator }, { type: DataSourceService }, { type: DataConverter }, { type: TimeRangeStore }, { type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class ChartStore {
    constructor(dataProvider, display, panel) {
        this.dataProvider = dataProvider;
        this.display = display;
        this.panel = panel;
        this.widget = new BehaviorSubject(null);
        this.widget$ = this.widget.asObservable();
        this.data = new BehaviorSubject(null);
        this.data$ = this.data.asObservable();
        dataProvider
            .data$
            .subscribe(x => { var _a; return this.data.next((_a = x === null || x === void 0 ? void 0 : x.datasets) !== null && _a !== void 0 ? _a : []); });
        this.widget.next(panel.widget);
    }
    destroy() {
        this.dataProvider.destroy();
        this.widget.value.component = undefined;
    }
}
ChartStore.ɵfac = function ChartStore_Factory(t) { return new (t || ChartStore)(ɵɵinject(DataProvider), ɵɵinject(DisplayManager), ɵɵinject(PANEL_TOKEN)); };
ChartStore.ɵprov = ɵɵdefineInjectable({ token: ChartStore, factory: ChartStore.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartStore, [{
        type: Injectable
    }], function () { return [{ type: DataProvider }, { type: DisplayManager }, { type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class BaseChartComponent {
    constructor(store) {
        this.store = store;
        this.dataSubs = store
            .data$
            .subscribe(x => this.data = {
            datasets: x
        });
        this.widgetSubs = store
            .widget$
            .subscribe(x => {
            this.widget = x;
            if (x) {
                this.onWidgetReady();
            }
        });
    }
    get datasets() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.datasets;
    }
    get component() {
        return this.widget.component;
    }
    get display() {
        return this.store.display;
    }
    onWidgetReady() {
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.dataSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.widgetSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(ɵɵdirectiveInject(ChartStore)); };
BaseChartComponent.ɵdir = ɵɵdefineDirective({ type: BaseChartComponent });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseChartComponent, [{
        type: Directive
    }], function () { return [{ type: ChartStore }]; }, null); })();

class BaseChartExtension {
    constructor(store) {
        this.store = store;
        this.widgetSubs = store
            .widget$
            .subscribe(x => this.widget = x);
    }
    destroy() {
        var _a;
        //console.log( "destroy BaseChartExtension" )
        (_a = this.widgetSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
BaseChartExtension.ɵfac = function BaseChartExtension_Factory(t) { return new (t || BaseChartExtension)(ɵɵdirectiveInject(ChartStore)); };
BaseChartExtension.ɵdir = ɵɵdefineDirective({ type: BaseChartExtension });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseChartExtension, [{
        type: Directive
    }], function () { return [{ type: ChartStore }]; }, null); })();

class ThresholdDrawerPlugin extends BaseChartExtension {
    constructor(store) {
        super(store);
    }
    afterDatasetsDraw(chart, _) {
        var _a, _b;
        (_b = (_a = this
            .widget) === null || _a === void 0 ? void 0 : _a.display) === null || _b === void 0 ? void 0 : _b.thresholds.forEach(t => new ThresholdDrawer(chart, t).draw());
    }
}
ThresholdDrawerPlugin.ɵfac = function ThresholdDrawerPlugin_Factory(t) { return new (t || ThresholdDrawerPlugin)(ɵɵinject(ChartStore)); };
ThresholdDrawerPlugin.ɵprov = ɵɵdefineInjectable({ token: ThresholdDrawerPlugin, factory: ThresholdDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ThresholdDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: ChartStore }]; }, null); })();
class ThresholdDrawer {
    constructor(chart, threshold) {
        this.chart = chart;
        this.threshold = threshold;
    }
    get context() {
        return this.chart.chart.ctx;
    }
    draw() {
        if (this.threshold.value == undefined) {
            return;
        }
        const scaleYA = this.chart.scales[AXIS_Y_LEFT];
        const scaleYB = this.chart.scales[AXIS_Y_RIGHT];
        const scaleX = this.chart.scales[AXIS_X];
        const scaleY = (this.threshold.axis == ThresholdAxis.Right && scaleYB) ?
            scaleYB : scaleYA;
        const offset = scaleY.getPixelForValue(this.threshold.value);
        const gt = (this.threshold.operator == ThresholdOperator.Gt);
        const shouldIgnore = (!gt && this.threshold.value < scaleY.min) ||
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
            const lineColor = this.getColor(false);
            this.renderLine(scaleX, lineColor, offset);
        }
        if (this.threshold.fill) {
            this.renderRectangle(scaleX, scaleY, offset);
        }
    }
    renderLine(scaleX, color, offset) {
        this.context.beginPath();
        this.context.strokeStyle = color + "99";
        this.context.lineWidth = 2;
        this.context.moveTo(scaleX.left, offset);
        this.context.lineTo(scaleX.right, offset);
        this.context.stroke();
    }
    renderRectangle(scaleX, scaleY, offset) {
        const color = this.getColor(true);
        const gt = (this.threshold.operator == ThresholdOperator.Gt);
        this.context.fillStyle = color + "22";
        const x = scaleX.left;
        const w = scaleX.width;
        const topY = scaleY.getPixelForValue(scaleY.max);
        const bottomY = scaleY.getPixelForValue(scaleY.min);
        const y = gt ? topY : Math.max(topY, offset);
        let h = gt ? offset - scaleY.top : scaleY.bottom - offset;
        h = Math.min(bottomY - topY, h);
        this.context.fillRect(x, y, w, h);
    }
    getColor(fill) {
        switch (this.threshold.colorType) {
            case ThresholdColor.Critical:
                return '#ED2E18';
            case ThresholdColor.Ok:
                return '#10a345';
            case ThresholdColor.Warning:
                return '#f79520';
        }
        const defaultColor = '#ffffff';
        if (fill) {
            return this.threshold.fillColor ? this.threshold.fillColor : defaultColor;
        }
        return this.threshold.lineColor ? this.threshold.lineColor : defaultColor;
    }
}

class PixelHelper {
    static alignPixel(chart, pixel, width) {
        var devicePixelRatio = chart.currentDevicePixelRatio;
        var halfWidth = width / 2;
        return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    }
    ;
}

class TrackballDrawerPlugin {
    constructor(store) {
        this.store = store;
    }
    afterDatasetsDraw(chart, easing) {
        //console.log( "trackball plugin" )
        return;
        const context = chart.chart.ctx;
        const scaleX = chart.scales['x-axis-0'];
        //const scaleYA = chart.scales[ "A" ];
        const scaleYA = chart.scales["y-axis-0"];
        var pos = this.getMousePos(chart.canvas, chart.trackball);
        console.log(pos);
        const shouldIgnore = (!chart.trackball) ||
            (0 == chart.data.datasets.length) ||
            (pos.x < scaleX.left || pos.x > scaleX.right);
        if (shouldIgnore) {
            return;
        }
        const lw = 0.8;
        const x = PixelHelper.alignPixel(chart, pos.x, lw);
        const y1 = PixelHelper.alignPixel(chart, scaleYA.top, lw);
        const y2 = PixelHelper.alignPixel(chart, scaleYA.bottom, lw);
        context.beginPath();
        context.strokeStyle = "#880015";
        context.lineWidth = lw;
        context.moveTo(x, y1);
        context.lineTo(x, y2);
        context.stroke();
    }
    getMousePos(canvas, evt) {
        if (!evt) {
            return;
        }
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}
TrackballDrawerPlugin.ɵfac = function TrackballDrawerPlugin_Factory(t) { return new (t || TrackballDrawerPlugin)(ɵɵinject(ChartStore)); };
TrackballDrawerPlugin.ɵprov = ɵɵdefineInjectable({ token: TrackballDrawerPlugin, factory: TrackballDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrackballDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: ChartStore }]; }, null); })();

class TimeRegionsDrawerPlugin extends BaseChartExtension {
    constructor(store) {
        super(store);
    }
    afterDatasetsDraw(chart, _) {
        var _a, _b;
        (_b = (_a = this
            .widget) === null || _a === void 0 ? void 0 : _a.display) === null || _b === void 0 ? void 0 : _b.timeRegions.forEach(t => new TimeRegionDrawer(chart, t).draw());
    }
}
TimeRegionsDrawerPlugin.ɵfac = function TimeRegionsDrawerPlugin_Factory(t) { return new (t || TimeRegionsDrawerPlugin)(ɵɵinject(ChartStore)); };
TimeRegionsDrawerPlugin.ɵprov = ɵɵdefineInjectable({ token: TimeRegionsDrawerPlugin, factory: TimeRegionsDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimeRegionsDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: ChartStore }]; }, null); })();
class TimeRegionDrawer {
    constructor(chart, timeRegion) {
        this.chart = chart;
        this.timeRegion = timeRegion;
    }
    get context() {
        return this.chart.chart.ctx;
    }
    draw() {
        const scaleX = this.chart.scales[AXIS_X];
        const minX = Moment.create(scaleX.min);
        const maxX = Moment.create(scaleX.max);
        this
            .getSpans(minX, maxX)
            .forEach(x => {
            let os = scaleX.getPixelForValue(x.start.toDate());
            let oe = scaleX.getPixelForValue(x.end.toDate());
            if (!(oe < scaleX.left || os > scaleX.right)) {
                os = Math.max(os, scaleX.left);
                oe = Math.min(oe, scaleX.right);
                this.renderRegion(os, oe);
            }
        });
    }
    getSpans(min, max) {
        const borders = this.getSpanBorders(min, max);
        const time = this.getTime();
        return this.isSpecificDayOfWeek() ?
            this.getSpansDayOfWeek(borders, time) :
            this.getSpansAny(borders, time);
    }
    getTime() {
        const isSpecificDayOfWeek = this.isSpecificDayOfWeek();
        let inputFromTime = this.timeRegion.fromTime;
        let inputToTime = this.timeRegion.toTime;
        const timeFormat = "HH:mm";
        let tf = Moment.create(inputFromTime, timeFormat);
        let tt = Moment.create(inputToTime, timeFormat);
        if (!tf.isValid() && !tt.isValid()) {
            if (isSpecificDayOfWeek) {
                const midnight = Moment.create("00:00", timeFormat);
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
    }
    getSpansDayOfWeek(borders, time) {
        const max = borders.to;
        const min = borders.from;
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
            res.push({ start, end });
            current.add(1, 'weeks');
        }
        return res;
    }
    getSpansAny(borders, time) {
        const max = borders.to;
        const min = borders.from;
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
            res.push({ start, end });
            current.add(1, 'days');
        }
        return res;
    }
    getSpanBorders(min, max) {
        const margin = this.isSpecificDayOfWeek() ? 8 : 1;
        const from = min
            .clone()
            .subtract(margin, 'days')
            .startOf('day');
        const to = max
            .clone()
            .add(margin, 'days')
            .endOf('day');
        return { from, to };
    }
    isSpecificDayOfWeek() {
        return (this.timeRegion.fromDay != TimeRegionDay.Any) ||
            (this.timeRegion.toDay != TimeRegionDay.Any);
    }
    renderRegion(offsetStart, offsetEnd) {
        const scaleYA = this.chart.scales[AXIS_Y_LEFT];
        const scaleX = this.chart.scales[AXIS_X];
        const minY = scaleYA.top;
        const maxY = scaleYA.bottom;
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
    }
    renderLine(minY, maxY, offset) {
        const color = this.getColor(false);
        this.context.beginPath();
        this.context.strokeStyle = color + "99";
        this.context.lineWidth = 2;
        this.context.moveTo(offset, minY);
        this.context.lineTo(offset, maxY);
        this.context.stroke();
    }
    renderRectangle(minY, maxY, offsetStart, offsetEnd) {
        const color = this.getColor(true);
        this.context.fillStyle = color + "22";
        const x = offsetStart;
        const w = offsetEnd - offsetStart;
        const y = minY;
        const h = maxY - minY;
        this.context.fillRect(x, y, w, h);
    }
    getColor(fill) {
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
        const defaultColor = '#ffffff';
        if (fill) {
            return this.timeRegion.fillColor ? this.timeRegion.fillColor : defaultColor;
        }
        return this.timeRegion.lineColor ? this.timeRegion.lineColor : defaultColor;
    }
}

class ExtensionsManager {
    constructor(thresholds, trackball, timeRegions) {
        this.thresholds = thresholds;
        this.trackball = trackball;
        this.timeRegions = timeRegions;
    }
    get list() {
        return [
            this.thresholds,
            this.timeRegions
        ];
    }
    destroy() {
        this.list.forEach(x => x.destroy());
    }
}
ExtensionsManager.ɵfac = function ExtensionsManager_Factory(t) { return new (t || ExtensionsManager)(ɵɵinject(ThresholdDrawerPlugin), ɵɵinject(TrackballDrawerPlugin), ɵɵinject(TimeRegionsDrawerPlugin)); };
ExtensionsManager.ɵprov = ɵɵdefineInjectable({ token: ExtensionsManager, factory: ExtensionsManager.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExtensionsManager, [{
        type: Injectable
    }], function () { return [{ type: ThresholdDrawerPlugin }, { type: TrackballDrawerPlugin }, { type: TimeRegionsDrawerPlugin }]; }, null); })();

function ChartComponent_chart_legend_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "chart-legend", 7);
} }
function ChartComponent_chart_legend_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "chart-legend", 8);
} }
class ChartComponent extends BaseChartComponent {
    constructor(store, extensions) {
        super(store);
        this.extensions = extensions;
        this.options = OptionsProvider.getOptions(this);
        this.plugins = extensions.list;
    }
    get legend() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
    }
    ngAfterViewInit() {
        this.widget.component = this;
    }
    ngOnDestroy() {
        this.store.destroy();
        this.extensions.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(ɵɵdirectiveInject(ChartStore), ɵɵdirectiveInject(ExtensionsManager)); };
ChartComponent.ɵcmp = ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(UIChart, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
    } }, features: [ɵɵProvidersFeature([
            DataProvider,
            DataConverter,
            DisplayManager,
            ChartStore,
            ExtensionsManager,
            TrackballDrawerPlugin,
            ThresholdDrawerPlugin,
            TimeRegionsDrawerPlugin
        ]), ɵɵInheritDefinitionFeature], decls: 7, vars: 5, consts: [[1, "chart__wrapper"], [1, "chart__right-legend-cont"], [1, "chart__canvas-cont"], ["type", "line", "height", "100%", 3, "data", "options", "plugins"], ["chart", ""], ["class", "chart__legend-right", 4, "ngIf"], ["class", "chart__legend-bottom", 4, "ngIf"], [1, "chart__legend-right"], [1, "chart__legend-bottom"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "p-chart", 3, 4);
        ɵɵelementEnd();
        ɵɵtemplate(5, ChartComponent_chart_legend_5_Template, 1, 0, "chart-legend", 5);
        ɵɵelementEnd();
        ɵɵtemplate(6, ChartComponent_chart_legend_6_Template, 1, 0, "chart-legend", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.legend.show && (ctx.legend == null ? null : ctx.legend.right));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.legend.show && !(ctx.legend == null ? null : ctx.legend.right));
    } }, styles: [".hide-text{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height{max-height:0;overflow:hidden}.animate-height--open{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.chart__wrapper{display:flex;flex-direction:column;height:100%;min-height:0;position:relative}.chart__right-legend-cont{cursor:crosshair;display:flex;flex:1;min-height:0;min-width:0}.chart__canvas-cont{flex:1;min-height:0;min-width:0;padding-left:5px}.chart__legend-bottom{flex:0 1 auto;flex-wrap:wrap;max-height:35%;overflow:hidden;padding-top:6px;position:relative}.chart__legend-right{flex:0 1 10px}.graph-tooltip{background-color:#141414;color:#d8d9da;font-size:12px;white-space:nowrap}.graph-tooltip .graph-tooltip-time{color:#d8d9da;font-weight:700;padding:.2rem;position:relative;text-align:center;top:-3px}.graph-tooltip .graph-tooltip-list-item{display:table-row}.graph-tooltip .graph-tooltip-list-item--highlight{color:#ececec;font-weight:700}.graph-tooltip .graph-tooltip-series-name{display:table-cell;max-width:650px;overflow:hidden;padding:.15rem;text-overflow:ellipsis}.graph-tooltip .graph-tooltip-value{display:table-cell;font-weight:700;padding-left:15px;text-align:right}.grafana-tooltip{border-radius:5px;font-weight:200;line-height:14px;max-height:600px;max-width:800px;overflow:hidden;padding:10px;position:absolute;z-index:9999}.grafana-tooltip a{color:#e3e3e3}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                templateUrl: './chart.html',
                styleUrls: ['./chart.scss'],
                encapsulation: ViewEncapsulation.None,
                providers: [
                    DataProvider,
                    DataConverter,
                    DisplayManager,
                    ChartStore,
                    ExtensionsManager,
                    TrackballDrawerPlugin,
                    ThresholdDrawerPlugin,
                    TimeRegionsDrawerPlugin
                ]
            }]
    }], function () { return [{ type: ChartStore }, { type: ExtensionsManager }]; }, { control: [{
            type: ViewChild,
            args: [UIChart]
        }] }); })();

function ChartLegendComponent_div_1_div_3_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r6.min(ds_r5));
} }
function ChartLegendComponent_div_1_div_3_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = ɵɵnextContext().$implicit;
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r7.max(ds_r5));
} }
function ChartLegendComponent_div_1_div_3_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r8.avg(ds_r5));
} }
function ChartLegendComponent_div_1_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r9.current(ds_r5));
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
function ChartLegendComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function ChartLegendComponent_div_1_div_3_div_1_Template_div_click_0_listener($event) { ɵɵrestoreView(_r15); const ds_r5 = ctx.$implicit; const ctx_r14 = ɵɵnextContext(3); return ctx_r14.onSeriesClicked(ds_r5, $event); });
    ɵɵelementStart(1, "div", 10);
    ɵɵelement(2, "i", 11);
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 12);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, ChartLegendComponent_div_1_div_3_div_1_div_5_Template, 2, 1, "div", 13);
    ɵɵtemplate(6, ChartLegendComponent_div_1_div_3_div_1_div_6_Template, 2, 1, "div", 14);
    ɵɵtemplate(7, ChartLegendComponent_div_1_div_3_div_1_div_7_Template, 2, 1, "div", 15);
    ɵɵtemplate(8, ChartLegendComponent_div_1_div_3_div_1_div_8_Template, 2, 1, "div", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0, ds_r5.hidden));
    ɵɵadvance(1);
    ɵɵstyleProp("color", ctx_r4.color(ds_r5));
    ɵɵadvance(2);
    ɵɵproperty("title", ds_r5.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ds_r5.label);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.legend.min);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.legend.max);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.legend.avg);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.legend.current);
} }
function ChartLegendComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, ChartLegendComponent_div_1_div_3_div_1_Template, 9, 11, "div", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("@fadeInOut", undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.filteredDatasets);
} }
function ChartLegendComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "perfect-scrollbar");
    ɵɵelementStart(2, "div", 4);
    ɵɵtemplate(3, ChartLegendComponent_div_1_div_3_Template, 2, 2, "div", 5);
    ɵɵelement(4, "div", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r0.datasets == null ? null : ctx_r0.datasets.length);
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1, "min");
    ɵɵelementEnd();
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1, "max");
    ɵɵelementEnd();
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1, "avg");
    ɵɵelementEnd();
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1, "current");
    ɵɵelementEnd();
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "thead");
    ɵɵelementStart(1, "tr");
    ɵɵelement(2, "th", 27);
    ɵɵtemplate(3, ChartLegendComponent_ng_template_2_div_2_thead_5_th_3_Template, 2, 0, "th", 28);
    ɵɵtemplate(4, ChartLegendComponent_ng_template_2_div_2_thead_5_th_4_Template, 2, 0, "th", 28);
    ɵɵtemplate(5, ChartLegendComponent_ng_template_2_div_2_thead_5_th_5_Template, 2, 0, "th", 28);
    ɵɵtemplate(6, ChartLegendComponent_ng_template_2_div_2_thead_5_th_6_Template, 2, 0, "th", 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r17.legend.min);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r17.legend.max);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r17.legend.avg);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r17.legend.current);
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 33);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = ɵɵnextContext().$implicit;
    const ctx_r24 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r24.min(ds_r23));
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 33);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = ɵɵnextContext().$implicit;
    const ctx_r25 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r25.max(ds_r23));
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 33);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = ɵɵnextContext().$implicit;
    const ctx_r26 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r26.avg(ds_r23));
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 33);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = ɵɵnextContext().$implicit;
    const ctx_r27 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r27.current(ds_r23));
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 30);
    ɵɵelementStart(1, "td", 31);
    ɵɵlistener("click", function ChartLegendComponent_ng_template_2_div_2_tr_7_Template_td_click_1_listener($event) { ɵɵrestoreView(_r33); const ds_r23 = ctx.$implicit; const ctx_r32 = ɵɵnextContext(3); return ctx_r32.onSeriesClicked(ds_r23, $event); });
    ɵɵelementStart(2, "div", 10);
    ɵɵelement(3, "i", 11);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 12);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, ChartLegendComponent_ng_template_2_div_2_tr_7_td_6_Template, 2, 1, "td", 32);
    ɵɵtemplate(7, ChartLegendComponent_ng_template_2_div_2_tr_7_td_7_Template, 2, 1, "td", 32);
    ɵɵtemplate(8, ChartLegendComponent_ng_template_2_div_2_tr_7_td_8_Template, 2, 1, "td", 32);
    ɵɵtemplate(9, ChartLegendComponent_ng_template_2_div_2_tr_7_td_9_Template, 2, 1, "td", 32);
    ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = ctx.$implicit;
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0, ds_r23.hidden));
    ɵɵadvance(2);
    ɵɵstyleProp("color", ctx_r18.color(ds_r23));
    ɵɵadvance(2);
    ɵɵproperty("title", ds_r23.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ds_r23.label);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.legend.min);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.legend.max);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.legend.avg);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.legend.current);
} }
function ChartLegendComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "div", 23);
    ɵɵelementStart(2, "table", 24);
    ɵɵelementStart(3, "colgroup");
    ɵɵelement(4, "col", 24);
    ɵɵelementEnd();
    ɵɵtemplate(5, ChartLegendComponent_ng_template_2_div_2_thead_5_Template, 7, 4, "thead", 25);
    ɵɵelementStart(6, "tbody");
    ɵɵtemplate(7, ChartLegendComponent_ng_template_2_div_2_tr_7_Template, 10, 11, "tr", 26);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(8, "div", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵproperty("@fadeInOut", undefined);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r16.datasets && ctx_r16.datasets.length > 0);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r16.filteredDatasets);
} }
function ChartLegendComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelementStart(1, "perfect-scrollbar");
    ɵɵtemplate(2, ChartLegendComponent_ng_template_2_div_2_Template, 9, 3, "div", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.datasets == null ? null : ctx_r2.datasets.length);
} }
class ChartLegendComponent extends BaseChartComponent {
    constructor(store) {
        super(store);
    }
    get legend() {
        return this.widget.legend;
    }
    get filteredDatasets() {
        let datasets = this.datasets.filter(ds => ds.legend);
        if (this.legend.hideOnlyZeroes) {
            datasets = datasets.filter(x => !x.allZeros);
        }
        if (this.legend.hideOnlyNulls) {
            datasets = datasets.filter(x => !x.allNulls);
        }
        return datasets;
    }
    axis(ds) {
        const axes = this.widget.axes;
        return (ds.yAxisID == AXIS_Y_LEFT) ? axes.leftY : axes.rightY;
    }
    decimals(ds) {
        return this.legend.decimals ? this.legend.decimals : 0;
    }
    unit(ds) {
        return this.axis(ds).unit;
    }
    color(ds) {
        return this
            .display
            .getLineColor(ds, 1);
    }
    min(ds) {
        return AxisUnitHelper.getFormattedValue(ds.min, this.unit(ds), this.decimals(ds));
    }
    max(ds) {
        return AxisUnitHelper.getFormattedValue(ds.max, this.unit(ds), this.decimals(ds));
    }
    avg(ds) {
        return AxisUnitHelper.getFormattedValue(ds.avg, this.unit(ds), this.decimals(ds));
    }
    current(ds) {
        return AxisUnitHelper.getFormattedValue(ds.current, this.unit(ds), this.decimals(ds));
    }
    onSeriesClicked(ds, e) {
        if (e.ctrlKey) {
            const selected = (false == ds.selected);
            this.toggleSeries(ds, selected);
        }
        else {
            const selected = ((undefined === ds.selected) || false == ds.selected) ?
                true : undefined;
            this.toggleSeries(ds, selected);
            this
                .datasets
                .filter(x => x != ds)
                .forEach(x => this.toggleSeries(x, true == selected ? false : undefined));
        }
        this.component.control.refresh();
    }
    toggleSeries(ds, selected) {
        ds.selected = selected;
        if (undefined === selected) {
            delete ds.hidden;
            delete ds.selected;
        }
        else {
            ds.hidden = !selected;
        }
    }
}
ChartLegendComponent.ɵfac = function ChartLegendComponent_Factory(t) { return new (t || ChartLegendComponent)(ɵɵdirectiveInject(ChartStore)); };
ChartLegendComponent.ɵcmp = ɵɵdefineComponent({ type: ChartLegendComponent, selectors: [["chart-legend"]], features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "legend__top-wrapper"], ["class", "legend__bottom", 4, "ngIf", "ngIfElse"], ["legendAsTable", ""], [1, "legend__bottom"], [1, "legend__scroller-cont"], ["class", "legend__series-wrapper", 4, "ngIf"], [1, "legend__scroller-padding"], [1, "legend__series-wrapper"], ["class", "legend__series", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "legend__series", 3, "ngClass", "click"], [1, "legend__icon"], [1, "fa", "fa-minus", "pointer"], [1, "legend__alias", "pointer", 3, "title"], ["class", "legend__value min", 4, "ngIf"], ["class", "legend__value max", 4, "ngIf"], ["class", "legend__value avg", 4, "ngIf"], ["class", "legend__value current", 4, "ngIf"], [1, "legend__value", "min"], [1, "legend__value", "max"], [1, "legend__value", "avg"], [1, "legend__value", "current"], [1, "legend__bottom-table"], ["class", "legend__scroller-cont", 4, "ngIf"], [1, "legend__series-wrapper", "legend__full-width"], [1, "legend__full-width"], [4, "ngIf"], ["class", "legend__series", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "text-align", "left"], ["class", "pointer", 4, "ngIf"], [1, "pointer"], [1, "legend__series", 3, "ngClass"], [3, "click"], ["class", "legend__value", 4, "ngIf"], [1, "legend__value"]], template: function ChartLegendComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, ChartLegendComponent_div_1_Template, 5, 1, "div", 1);
        ɵɵtemplate(2, ChartLegendComponent_ng_template_2_Template, 3, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(3);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.legend.table)("ngIfElse", _r1);
    } }, directives: [NgIf, PerfectScrollbarComponent, NgForOf, NgClass], styles: [".hide-text{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height{max-height:0;overflow:hidden}.animate-height--open{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.legend__top-wrapper{display:flex;flex-grow:1;max-height:100%;min-height:0;overflow:hidden;position:relative;width:100%}.legend__bottom{min-width:0;padding-bottom:5px}.legend__scroller-cont{display:flex;flex-direction:row}.legend__scroller-padding{min-width:10px}.legend__series-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;min-width:0}.legend__series{min-width:0;padding-left:10px;white-space:nowrap}.legend__series--right-y{float:right}.legend__series.hidden .legend__alias,.legend__series.hidden .legend__value{color:#969696}.legend__alias,.legend__icon,.legend__value{cursor:pointer;display:inline;font-size:85%;text-align:left;white-space:nowrap}.legend__alias.current:before,.legend__icon.current:before,.legend__value.current:before{content:\"Current: \"}.legend__alias.max:before,.legend__icon.max:before,.legend__value.max:before{content:\"Max: \"}.legend__alias.min:before,.legend__icon.min:before,.legend__value.min:before{content:\"Min: \"}.legend__alias.total:before,.legend__icon.total:before,.legend__value.total:before{content:\"Total: \"}.legend__alias.avg:before,.legend__icon.avg:before,.legend__value.avg:before{content:\"Avg: \"}.legend__icon{padding-right:4px;position:relative;top:1px}.legend__icon .fa{font-size:135%;position:relative;top:1px}.legend__value{padding-left:6px}.legend__bottom-table{padding-bottom:1px;padding-left:5px;padding-right:5px;width:100%}.legend__bottom-table .legend__series{display:table-row;float:none;padding-left:0}.legend__bottom-table .legend__series--right-y{float:none}.legend__bottom-table .legend__series--right-y .legend__alias:after{color:#8e8e8e;content:\"(right-y)\";padding:0 5px}.legend__bottom-table .legend__alias,.legend__bottom-table .legend__icon,.legend__bottom-table .legend__value,.legend__bottom-table td{display:table-cell;float:none;padding:2px 10px;text-align:right;white-space:nowrap}.legend__bottom-table .legend__icon{padding:0;top:0;width:5px}.legend__bottom-table .legend__icon .fa{top:3px}.legend__bottom-table .legend__value{padding-left:15px}.legend__bottom-table .legend__alias{max-width:650px;overflow:hidden;padding-left:7px;text-align:left;text-overflow:ellipsis;width:95%}.legend__bottom-table th{color:#33b5e5;font-size:85%;font-weight:700;padding:0 10px 1px 0;text-align:right;white-space:nowrap}.legend__bottom-table .legend__series:nth-child(odd){background:#262628}.legend__full-width{width:100%}"], encapsulation: 2, data: { animation: [FadeInOutAnimation] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartLegendComponent, [{
        type: Component,
        args: [{
                selector: 'chart-legend',
                templateUrl: './legend.html',
                styleUrls: ['./legend.scss'],
                animations: [FadeInOutAnimation],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChartStore }]; }, null); })();

class ChartWidgetModule {
}
ChartWidgetModule.ɵmod = ɵɵdefineNgModule({ type: ChartWidgetModule });
ChartWidgetModule.ɵinj = ɵɵdefineInjector({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ChartModule,
            EdCommonModule,
            EdUilibModule,
            PerfectScrollbarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent,
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
        AlertHistoryEditorComponent,
        AlertNotificationsEditorComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule,
        EdCommonModule,
        EdUilibModule,
        PerfectScrollbarModule], exports: [ChartComponent,
        ChartEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartWidgetModule, [{
        type: NgModule,
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
                    AlertHistoryEditorComponent,
                    AlertNotificationsEditorComponent,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ChartModule,
                    EdCommonModule,
                    EdUilibModule,
                    PerfectScrollbarModule
                ],
                exports: [
                    ChartComponent,
                    ChartEditorComponent
                ],
            }]
    }], null, null); })();
ɵɵsetComponentScope(ChartComponent, [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, UIChart, DialogActionsComponent, DialogComponent, DropDownComponent, DropDownValueTemplate, DropDownSelectedValueTemplate, PopupComponent, ContextMenuComponent, HierarchicalDropDownComponent, HintComponent, ErrorHintComponent, AutoCompleteComponent, PreferencesComponent, EmptyListComponent, InfoBoxComponent, ProgressComponent, FilterBoxComponent, TextBoxComponent, TextBoxValidationTemplate, CheckBoxComponent, AutoFocusDirective, AvatarComponent, GridComponent, ColumnComponent, DeleteColumnComponent, SlideDownComponent, TabStripComponent, TabComponent, TabTitleTemplate, TabContentTemplate, SideTabStripComponent, LoadOrErrorComponent, ErrorPopupComponent, NoteComponent, ModuleLoaderComponent, UserPickerComponent, TeamPickerComponent, PermissionPickerComponent, PermissionRulePickerComponent, PermissionIconComponent, TagPickerComponent, TimeRangePickerComponent, PluginPickerComponent, ColorPickerComponent, AutoCompletePickerComponent, PaletteEditorComponent, ColorCircleComponent, IconComponent, LabelIconComponent, RemoveHostDirective, PageComponent, PageHeaderComponent, PageTitleComponent, PageTabsNavigationComponent, PageDropdownNavigationComponent, TagComponent, DashboardExplorerComponent, DashboardExplorerDeleterComponent, DashboardExplorerMoverComponent, CardsLayoutSwitcherComponent, JsonExplorerComponent, GeneralEditorComponent, MetricsEditorComponent, MetricsDesignerAnchorDirective, PerfectScrollbarComponent, PerfectScrollbarDirective, ChartComponent,
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
    AlertHistoryEditorComponent,
    AlertNotificationsEditorComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartEditorComponent, ChartWidgetModule };
//# sourceMappingURL=chart.js.map
