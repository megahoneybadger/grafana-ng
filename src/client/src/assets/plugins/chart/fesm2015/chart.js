import { ɵɵinvalidFactory, ɵɵdefineDirective, ɵsetClassMetadata, Directive, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, Component, Inject, Input, ɵɵelement, ɵɵnextContext, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵtextInterpolate1, EventEmitter, Output, ɵɵpropertyInterpolate1, ɵɵpureFunction1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵpipe, ɵɵpipeBind1, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵProvidersFeature, ViewEncapsulation, ɵɵresolveDocument, HostListener, ɵɵstyleProp, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForOf, NgIf, NgStyle, NgClass, AsyncPipe, Location, CommonModule, NgComponentOutlet, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { DropDownComponent, CheckBoxComponent, HierarchicalDropDownComponent, TextBoxComponent, ContextMenuComponent, PopupComponent, PaletteEditorComponent, ColorCircleComponent, ColorPickerComponent, SideTabStripComponent, TabComponent, TabContentTemplate, TabTitleTemplate, AutoCompletePickerComponent, Notes, ErrorMessages, JsonExplorerComponent, ProgressComponent, ObservableEx, LoadOrErrorComponent, DialogComponent, DialogActionsComponent, TabStripComponent, GeneralEditorComponent, MetricsEditorComponent, ColorHelper, TextAreaComponent, TagBoxComponent, TagColorHelper, HintDirective, AvatarComponent, TagComponent, FadeInOutAnimation, EdUilibModule, DropDownValueTemplate, DropDownSelectedValueTemplate, ErrorHintDirective, AutoCompleteComponent, PreferencesComponent, EmptyListComponent, InfoBoxComponent, FilterBoxComponent, TextBoxValidationTemplate, AutoFocusDirective, GridComponent, ColumnComponent, DeleteColumnComponent, SlideDownComponent, ErrorPopupComponent, NoteComponent, ModuleLoaderComponent, UserPickerComponent, TeamPickerComponent, PermissionPickerComponent, PermissionRulePickerComponent, PermissionIconComponent, TagPickerComponent, TimeRangePickerComponent, PluginPickerComponent, FolderPickerComponent, IconComponent, LabelIconComponent, RemoveHostDirective, PageComponent, PageHeaderComponent, PageTitleComponent, PageTabsNavigationComponent, PageDropdownNavigationComponent, DashboardExplorerComponent, DashboardExplorerDeleterComponent, DashboardExplorerMoverComponent, CardsLayoutSwitcherComponent, MetricsDesignerAnchorDirective, MetricsInspectorComponent } from 'uilib';
import { NgControlStatus, NgModel, DefaultValueAccessor, FormGroup, FormControl, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, ReactiveFormsModule, NgSelectOption, ɵangular_packages_forms_forms_x, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModelGroup, NgForm, FormControlDirective, FormGroupName, FormArrayName } from '@angular/forms';
import { TimeRangeMod, PANEL_TOKEN, AlertReducer, AlertOperator, AlertEvalType, AlertNoDataOption, AlertErrorOption, AlertCondition, DashboardStore, DashboardService, AlertService, AlertHelper, Moment, AnnotationService, AlertRule, TimeRangeParser, PluginActivator, DataSourceService, TimeRangeStore, AnnotationStore, AlertState, Annotation, EdCommonModule } from 'common';
import { cloneDeep } from 'lodash';
import { finalize, tap, mergeMap } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';
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
    get chartControl() {
        return this
            .widget
            .component
            .control
            .chart;
    }
    get options() {
        return this.chartControl.options;
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
    toggleAlertHandle(v) {
        setTimeout(() => {
            const comp = this.widget.component;
            if (comp) {
                comp.showAlertHandle = v;
            }
        });
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

const _c0 = ["editor"];
const _c1 = ["suggestions"];
function AlertQueryParamPickerComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.value);
} }
const _c2 = function (a0) { return { width: a0 }; };
function AlertQueryParamPickerComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 5, 6);
    ɵɵlistener("ngModelChange", function AlertQueryParamPickerComponent_input_2_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.value = $event; })("focusout", function AlertQueryParamPickerComponent_input_2_Template_input_focusout_0_listener() { ɵɵrestoreView(_r5); const ctx_r6 = ɵɵnextContext(); return ctx_r6.onEditorFocusOut(); })("keydown", function AlertQueryParamPickerComponent_input_2_Template_input_keydown_0_listener() { ɵɵrestoreView(_r5); const ctx_r7 = ɵɵnextContext(); return ctx_r7.onEditorKeyDown(); })("keyup.enter", function AlertQueryParamPickerComponent_input_2_Template_input_keyup_enter_0_listener() { ɵɵrestoreView(_r5); const ctx_r8 = ɵɵnextContext(); ctx_r8.isEditorVisible = false; return ctx_r8.onEditorFocusOut(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c2, (ctx_r1.value.length + 1) * 8 + "px"))("ngModel", ctx_r1.value);
} }
class AlertQueryParamPickerComponent {
    constructor() {
        this.backupValue = '';
        this.isEditorVisible = false;
        this.isSuggestionMenuOpen = false;
        this.pick = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    get value() {
        return this._value;
    }
    ;
    set value(v) {
        this._value = v;
        this.valueChange.emit(this._value);
        this.pick.emit(this._value);
    }
    ngOnInit() {
        this
            .items
            .forEach(x => x.command = (y) => this.onPick(y.item));
    }
    onShowEditor(e) {
        this.backupValue = this.value;
        this.isSuggestionMenuOpen = true;
        this.ctrlSuggestions.show(/*this.ctrlEditorElement*/ e);
        setTimeout(() => {
            this.isEditorVisible = true;
            setTimeout(() => this.ctrlEditorElement.nativeElement.focus(), 0);
        }, 0);
    }
    onEditorFocusOut() {
        if (!this.isSuggestionMenuOpen) {
            this.isEditorVisible = false;
            if (!this.value) {
                this.value = this.backupValue;
            }
        }
    }
    onEditorKeyDown() {
        this.isSuggestionMenuOpen = false;
        this.ctrlSuggestions.hide();
    }
    onPick(e) {
        this.value = this.backupValue = e.label;
        this.isEditorVisible = false;
    }
}
AlertQueryParamPickerComponent.ɵfac = function AlertQueryParamPickerComponent_Factory(t) { return new (t || AlertQueryParamPickerComponent)(); };
AlertQueryParamPickerComponent.ɵcmp = ɵɵdefineComponent({ type: AlertQueryParamPickerComponent, selectors: [["query-param-picker"]], viewQuery: function AlertQueryParamPickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ctrlEditorElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ctrlSuggestions = _t.first);
    } }, inputs: { items: "items", value: "value" }, outputs: { pick: "pick", valueChange: "valueChange" }, decls: 5, vars: 3, consts: [[1, "pointer", 3, "click"], [4, "ngIf"], ["type", "text", "class", "q__editor", "spellcheck", "false", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter", 4, "ngIf"], [3, "items"], ["suggestions", ""], ["type", "text", "spellcheck", "false", 1, "q__editor", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter"], ["editor", ""]], template: function AlertQueryParamPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵlistener("click", function AlertQueryParamPickerComponent_Template_span_click_0_listener($event) { return ctx.onShowEditor($event); });
        ɵɵtemplate(1, AlertQueryParamPickerComponent_a_1_Template, 2, 1, "a", 1);
        ɵɵtemplate(2, AlertQueryParamPickerComponent_input_2_Template, 2, 4, "input", 2);
        ɵɵelementEnd();
        ɵɵelement(3, "ed-context-menu", 3, 4);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isEditorVisible);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isEditorVisible);
        ɵɵadvance(1);
        ɵɵproperty("items", ctx.items);
    } }, directives: [NgIf, ContextMenuComponent, DefaultValueAccessor, NgStyle, NgControlStatus, NgModel], styles: [".q__editor[_ngcontent-%COMP%]{background:transparent;border:none;color:#d8d9da;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin:0;padding:0;width:24px}.q__editor[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;outline:none!important;outline-width:0!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertQueryParamPickerComponent, [{
        type: Component,
        args: [{
                selector: 'query-param-picker',
                templateUrl: `./param.html`,
                styleUrls: ['./param.scss']
            }]
    }], null, { items: [{
            type: Input
        }], ctrlEditorElement: [{
            type: ViewChild,
            args: ['editor']
        }], ctrlSuggestions: [{
            type: ViewChild,
            args: ["suggestions"]
        }], pick: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], value: [{
            type: Input
        }] }); })();

class AlertQueryEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.itemsTarget = [];
        this.itemsFrom = [
            { label: '10s' },
            { label: '1m' },
            { label: '5m' },
            { label: '10m' },
            { label: '15m' },
            { label: '1h' },
            { label: '24h' },
            { label: '48h' }
        ];
        this.itemsTo = [
            { label: 'now' },
            { label: 'now-1m' },
            { label: 'now-5m' },
            { label: 'now-10m' },
            { label: 'now-1h' }
        ];
        this.itemsTarget = this
            .widget
            .metrics
            .targets
            .map(x => { return { label: x.refId }; });
    }
}
AlertQueryEditorComponent.ɵfac = function AlertQueryEditorComponent_Factory(t) { return new (t || AlertQueryEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertQueryEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertQueryEditorComponent, selectors: [["alert-query-editor"]], inputs: { query: "query" }, features: [ɵɵInheritDefinitionFeature], decls: 13, vars: 6, consts: [[1, "gf-form"], [1, "gf-form-label"], [3, "value", "items", "valueChange"]], template: function AlertQueryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "label", 1);
        ɵɵelementStart(2, "span");
        ɵɵtext(3, "query(");
        ɵɵelementEnd();
        ɵɵelementStart(4, "query-param-picker", 2);
        ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_4_listener($event) { return ctx.query.target = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(5, "span");
        ɵɵtext(6, ",\u00A0");
        ɵɵelementEnd();
        ɵɵelementStart(7, "query-param-picker", 2);
        ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_7_listener($event) { return ctx.query.from = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(8, "span");
        ɵɵtext(9, ",\u00A0");
        ɵɵelementEnd();
        ɵɵelementStart(10, "query-param-picker", 2);
        ɵɵlistener("valueChange", function AlertQueryEditorComponent_Template_query_param_picker_valueChange_10_listener($event) { return ctx.query.to = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(11, "span");
        ɵɵtext(12, ")");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("value", ctx.query.target)("items", ctx.itemsTarget);
        ɵɵadvance(3);
        ɵɵproperty("value", ctx.query.from)("items", ctx.itemsFrom);
        ɵɵadvance(3);
        ɵɵproperty("value", ctx.query.to)("items", ctx.itemsTo);
    } }, directives: [AlertQueryParamPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertQueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'alert-query-editor',
                templateUrl: `./query.html`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { query: [{
            type: Input
        }] }); })();

function AlertConditionEditorComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 13);
    ɵɵtext(1, " WHEN ");
    ɵɵelementEnd();
} }
function AlertConditionEditorComponent_ed_autocomplete_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-autocomplete-picker", 14);
    ɵɵlistener("pick", function AlertConditionEditorComponent_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_pick_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.condition.operator = $event.toLowerCase(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("request", ctx_r1.operators$)("value", ctx_r1.condition.operator.toUpperCase())("readonly", true);
} }
function AlertConditionEditorComponent_ed_textbox_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-textbox", 15);
    ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_ed_textbox_11_Template_ed_textbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.evalParamFrom = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r2.evalParamFrom);
} }
function AlertConditionEditorComponent_ed_textbox_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ed-textbox", 16);
    ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_ed_textbox_12_Template_ed_textbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.evalParamTo = $event; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r3.evalParamTo);
} }
class AlertConditionEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 0;
        this.removed = new EventEmitter();
        this.AlertEvalTypeRef = [
            'is below',
            'is above',
            'is outside range',
            'is within range',
            'has no value'
        ];
    }
    get reducers$() {
        return of(Object.values(AlertReducer));
    }
    get evaluators$() {
        return of([...this.AlertEvalTypeRef].map(x => x.toUpperCase()));
    }
    get evaluator() {
        return this.AlertEvalTypeRef[this.condition.evaluator.type].toUpperCase();
    }
    get operators$() {
        return of(Object.values(AlertOperator).map(x => x.toUpperCase()));
    }
    get evaluatorType() {
        return this.condition.evaluator.type;
    }
    get showEvalParamFrom() {
        return (this.evaluatorType != AlertEvalType.HasNoValue);
    }
    get showEvalParamTo() {
        return (this.evaluatorType == AlertEvalType.IsOutsideRange) ||
            (this.evaluatorType == AlertEvalType.IsWithinRange);
    }
    get evalParamFrom() {
        var _a;
        return (_a = this
            .condition
            .evaluator
            .params[0]) === null || _a === void 0 ? void 0 : _a.toString();
    }
    set evalParamFrom(p) {
        let from = parseFloat(p);
        let to = parseFloat(this.evalParamTo);
        from = isNaN(from) ? '' : from;
        to = isNaN(to) ? '' : to;
        this.condition.evaluator.params = this.showEvalParamTo ? [from, to] : [from];
        this.refresh();
    }
    get evalParamTo() {
        var _a;
        return (_a = this
            .condition
            .evaluator
            .params[1]) === null || _a === void 0 ? void 0 : _a.toString();
    }
    set evalParamTo(p) {
        let from = parseFloat(this.evalParamFrom);
        let to = parseFloat(p);
        from = isNaN(from) ? '' : from;
        to = isNaN(to) ? '' : to;
        this.condition.evaluator.params = [from, to];
        this.refresh();
    }
    onEvaluatorPick(e) {
        var _a, _b, _c;
        const index = this
            .AlertEvalTypeRef
            .indexOf(e.toLowerCase());
        if (-1 == index || e == this.evaluator) {
            return;
        }
        this.condition.evaluator.type = index;
        const ev = this.condition.evaluator;
        const p = ev.params;
        switch (ev.type) {
            case AlertEvalType.IsAbove:
            case AlertEvalType.IsBelow:
                ev.params = [(_a = p[0]) !== null && _a !== void 0 ? _a : ''];
                break;
            case AlertEvalType.HasNoValue:
                ev.params = [];
                break;
            default:
                ev.params = [(_b = p[0]) !== null && _b !== void 0 ? _b : '', (_c = p[1]) !== null && _c !== void 0 ? _c : ''];
                break;
        }
        this.refresh();
    }
}
AlertConditionEditorComponent.ɵfac = function AlertConditionEditorComponent_Factory(t) { return new (t || AlertConditionEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertConditionEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertConditionEditorComponent, selectors: [["editor-alert-condition"]], inputs: { condition: "condition", index: "index" }, outputs: { removed: "removed" }, features: [ɵɵInheritDefinitionFeature], decls: 16, vars: 10, consts: [[1, "gf-form-inline"], [1, "gf-form"], ["class", "gf-form-label  query-keyword width-5", 4, "ngIf"], ["valueClass", "query-keyword", "width", "5", 3, "request", "value", "readonly", "pick", 4, "ngIf"], [3, "ngModel", "formatString", "request", "ngModelChange"], [1, "gf-form", "mr-1"], [1, "gf-form-label", "query-keyword"], [3, "query"], ["valueClass", "query-keyword", 3, "value", "request", "pick"], ["width", "9", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["label", "TO", "labelClass", "query-keyword", "width", "9", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], [1, "gf-form-label", "query-keyword", "width-5"], ["valueClass", "query-keyword", "width", "5", 3, "request", "value", "readonly", "pick"], ["width", "9", "type", "number", 3, "ngModel", "ngModelChange"], ["label", "TO", "labelClass", "query-keyword", "width", "9", "type", "number", 3, "ngModel", "ngModelChange"]], template: function AlertConditionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, AlertConditionEditorComponent_label_2_Template, 2, 0, "label", 2);
        ɵɵelementEnd();
        ɵɵtemplate(3, AlertConditionEditorComponent_ed_autocomplete_picker_3_Template, 1, 3, "ed-autocomplete-picker", 3);
        ɵɵelementStart(4, "ed-autocomplete-picker", 4);
        ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.condition.reducer = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 5);
        ɵɵelementStart(6, "label", 6);
        ɵɵtext(7, " OF ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(8, "alert-query-editor", 7);
        ɵɵelement(9, "div", 5);
        ɵɵelementStart(10, "ed-autocomplete-picker", 8);
        ɵɵlistener("pick", function AlertConditionEditorComponent_Template_ed_autocomplete_picker_pick_10_listener($event) { return ctx.onEvaluatorPick($event); });
        ɵɵelementEnd();
        ɵɵtemplate(11, AlertConditionEditorComponent_ed_textbox_11_Template, 1, 1, "ed-textbox", 9);
        ɵɵtemplate(12, AlertConditionEditorComponent_ed_textbox_12_Template, 1, 1, "ed-textbox", 10);
        ɵɵelementStart(13, "div", 1);
        ɵɵelementStart(14, "label", 11);
        ɵɵlistener("click", function AlertConditionEditorComponent_Template_label_click_14_listener() { return ctx.removed.emit(ctx.condition); });
        ɵɵelement(15, "i", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.index == 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.index != 0);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.condition.reducer)("formatString", "{0}()")("request", ctx.reducers$);
        ɵɵadvance(4);
        ɵɵproperty("query", ctx.condition.query);
        ɵɵadvance(2);
        ɵɵproperty("value", ctx.evaluator)("request", ctx.evaluators$);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showEvalParamFrom);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showEvalParamTo);
    } }, directives: [NgIf, AutoCompletePickerComponent, NgControlStatus, NgModel, AlertQueryEditorComponent, TextBoxComponent], encapsulation: 2 });
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
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "editor-alert-condition", 18);
    ɵɵlistener("removed", function AlertConfigEditorComponent_div_10_Template_editor_alert_condition_removed_1_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.onRemoveCondition($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    ɵɵadvance(1);
    ɵɵproperty("condition", c_r3)("index", i_r4);
} }
function AlertConfigEditorComponent_ed_progress_32_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ed-progress", 19);
} }
class AlertConfigEditorComponent extends BaseChartEditorComponent {
    constructor(panel, store, dsService) {
        super(panel);
        this.store = store;
        this.dsService = dsService;
        this.availableNoDataOptions = DropDownComponent.wrapEnum(AlertNoDataOption);
        this.availableErrorOptions = DropDownComponent.wrapEnum(AlertErrorOption);
        this.storeSubs = store
            .dashboard$
            .subscribe(x => this.dashboard = x);
    }
    ngOnDestroy() {
        var _a;
        (_a = this.storeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onAddCondition() {
        var _a;
        this.alert.conditions = (_a = this.alert.conditions) !== null && _a !== void 0 ? _a : [];
        this.alert.conditions.push(new AlertCondition());
    }
    onRemoveCondition(c) {
        const index = this.alert.conditions.indexOf(c);
        if (-1 !== index) {
            this.alert.conditions.splice(index, 1);
            this.refresh();
        }
    }
    onTestRule() {
        this.testing = true;
        this.explorer.clean();
        this
            .dsService
            .evalAlert(this.dashboard, this.panel.id)
            .pipe(finalize(() => this.testing = false))
            .subscribe(x => {
            this.explorer.content = x;
            if (x.error) {
                Notes.error(x.error);
            }
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_ALERT_EVAL); });
    }
}
AlertConfigEditorComponent.ɵfac = function AlertConfigEditorComponent_Factory(t) { return new (t || AlertConfigEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN), ɵɵdirectiveInject(DashboardStore), ɵɵdirectiveInject(DashboardService)); };
AlertConfigEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertConfigEditorComponent, selectors: [["editor-alert-config"]], viewQuery: function AlertConfigEditorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(JsonExplorerComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.explorer = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 36, vars: 10, consts: [[1, "gf-form-group"], [1, "section-heading"], ["label", "Name", "labelWidth", "6", "width", "20", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["label", "Evaluate every", "labelWidth", "9", "width", "6", 3, "ngModel", "ngModelChange"], ["label", "For", "labelWidth", "5", "width", "6", "placeholder", "5m", "hint", "If an alert rule has a configured For and the query violates\n\t\t\t\tthe configured threshold it will first go from OK to Pending. \n\t\t\t\tGoing from OK to Pending Grafana will not send any notifications.\n\t\t\t\tOnce the alert rule has been firing for more than For duration,\n\t\t\t\tit will change to Alerting and send alert notifications. ", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-plus"], [1, "gf-form-label", "width-18"], [1, "gf-form-label", "query-keyword"], ["width", "11", 3, "data", "ngModel", "ngModelChange"], [1, "gf-form-button-row", "ed-flex"], [1, "btn", "btn-inverse", 3, "disabled", "click"], ["message", "evaluating rule...", 4, "ngIf"], ["ng-if", "ctrl.testResult", 1, "gf-form-group"], ["jsonExplorer", ""], [3, "condition", "index", "removed"], ["message", "evaluating rule..."]], template: function AlertConfigEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
        ɵɵelementStart(14, "div", 0);
        ɵɵelementStart(15, "div", 3);
        ɵɵelementStart(16, "div", 7);
        ɵɵelementStart(17, "span", 10);
        ɵɵtext(18, "If no data or all values are null");
        ɵɵelementEnd();
        ɵɵelementStart(19, "span", 11);
        ɵɵtext(20, "SET STATE TO");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(21, "ed-dropdown", 12);
        ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_dropdown_ngModelChange_21_listener($event) { return ctx.alert.noDataOption = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 3);
        ɵɵelementStart(23, "div", 7);
        ɵɵelementStart(24, "span", 10);
        ɵɵtext(25, "If execution error or timeout");
        ɵɵelementEnd();
        ɵɵelementStart(26, "span", 11);
        ɵɵtext(27, "SET STATE TO");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(28, "ed-dropdown", 12);
        ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_dropdown_ngModelChange_28_listener($event) { return ctx.alert.errorOption = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "div", 13);
        ɵɵelementStart(30, "button", 14);
        ɵɵlistener("click", function AlertConfigEditorComponent_Template_button_click_30_listener() { return ctx.onTestRule(); });
        ɵɵtext(31, " Test Rule ");
        ɵɵelementEnd();
        ɵɵtemplate(32, AlertConfigEditorComponent_ed_progress_32_Template, 1, 0, "ed-progress", 15);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(33, "div", 16);
        ɵɵelement(34, "ed-json-explorer", null, 17);
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
        ɵɵadvance(11);
        ɵɵproperty("data", ctx.availableNoDataOptions)("ngModel", ctx.alert.noDataOption);
        ɵɵadvance(7);
        ɵɵproperty("data", ctx.availableErrorOptions)("ngModel", ctx.alert.errorOption);
        ɵɵadvance(2);
        ɵɵproperty("disabled", ctx.testing);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.testing);
    } }, directives: [TextBoxComponent, NgControlStatus, NgModel, NgForOf, DropDownComponent, NgIf, JsonExplorerComponent, AlertConditionEditorComponent, ProgressComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertConfigEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-config',
                templateUrl: './alert-config.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: DashboardStore }, { type: DashboardService }]; }, { explorer: [{
            type: ViewChild,
            args: [JsonExplorerComponent]
        }] }); })();

function AlertNotificationsEditorComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 9);
    ɵɵelement(1, "i", 10);
    ɵɵtext(2);
    ɵɵelementStart(3, "i", 11);
    ɵɵlistener("click", function AlertNotificationsEditorComponent_span_7_Template_i_click_3_listener() { ɵɵrestoreView(_r3); const n_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.onRemove(n_r1); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const n_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    var tmp_0_0 = null;
    ɵɵadvance(2);
    ɵɵtextInterpolate1("\u00A0", (tmp_0_0 = ctx_r0.getChannelById(n_r1)) == null ? null : tmp_0_0.name, "\u00A0 ");
} }
class AlertNotificationsEditorComponent extends BaseChartEditorComponent {
    constructor(panel, alertService) {
        var _a;
        super(panel);
        this.alertService = alertService;
        this.availableChannels = [];
        this.alert.notifications = (_a = this.notifications) !== null && _a !== void 0 ? _a : [];
        this
            .alertService
            .getNotifications()
            .subscribe(x => {
            this.availableChannels = x;
            this.alert.notifications = this
                .notifications
                .filter(y => this.availableChannels.find(z => z.id == y));
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_GET_ALERT_NOTIFS); });
    }
    get channels$() {
        return of([...this
                .availableChannels
                .filter(x => { var _a; return !((_a = this.notifications) === null || _a === void 0 ? void 0 : _a.includes(x.id)); })
                .map(x => x.name)]);
    }
    get notifications() {
        return this.alert.notifications;
    }
    getChannelByName(name) {
        return this.availableChannels.find(x => x.name == name);
    }
    getChannelById(id) {
        return this.availableChannels.find(x => x.id == id);
    }
    onAdd(e) {
        const notif = this.getChannelByName(e);
        if (notif) {
            this.notifications.push(notif.id);
        }
    }
    onRemove(id) {
        const index = this.notifications.findIndex(x => x == id);
        if (-1 !== index) {
            this.notifications.splice(index, 1);
        }
    }
}
AlertNotificationsEditorComponent.ɵfac = function AlertNotificationsEditorComponent_Factory(t) { return new (t || AlertNotificationsEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN), ɵɵdirectiveInject(AlertService)); };
AlertNotificationsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertNotificationsEditorComponent, selectors: [["editor-alert-notifications"]], features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 3, consts: [[1, "section-heading"], [1, "gf-form-inline"], [1, "gf-form-inline", "max-width-30"], [1, "gf-form"], [1, "gf-form-label", "width-8"], ["class", "gf-form gf-form-label", 4, "ngFor", "ngForOf"], ["placeholder", "fa fa-plus", "readonly", "true", 3, "request", "pick"], [1, "gf-form", "gf-form--v-stretch"], ["rows", "10", "placeholder", "Notification message details...", 1, "gf-form-input", 3, "ngModel", "ngModelChange"], [1, "gf-form", "gf-form-label"], [1, "fa", "fa-bell"], ["ng-if", "nc.isDefault === false", 1, "fa", "fa-remove", "pointer", "muted", 3, "click"]], template: function AlertNotificationsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h5", 0);
        ɵɵtext(1, "Notifications");
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "span", 4);
        ɵɵtext(6, "Send to");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(7, AlertNotificationsEditorComponent_span_7_Template, 4, 1, "span", 5);
        ɵɵelementStart(8, "ed-autocomplete-picker", 6);
        ɵɵlistener("pick", function AlertNotificationsEditorComponent_Template_ed_autocomplete_picker_pick_8_listener($event) { return ctx.onAdd($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 7);
        ɵɵelementStart(10, "span", 4);
        ɵɵtext(11, "Message");
        ɵɵelementEnd();
        ɵɵelementStart(12, "textarea", 8);
        ɵɵlistener("ngModelChange", function AlertNotificationsEditorComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.alert.message = $event; });
        ɵɵtext(13, "\t");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("ngForOf", ctx.notifications);
        ɵɵadvance(1);
        ɵɵproperty("request", ctx.channels$);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.alert.message);
    } }, directives: [NgForOf, AutoCompletePickerComponent, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertNotificationsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-notifications',
                templateUrl: './alert-nots.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: AlertService }]; }, null); })();

const _c0$1 = function (a0) { return [a0]; };
function AlertHistoryEditorComponent_div_8_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 17);
    ɵɵelementStart(1, "div", 18);
    ɵɵelement(2, "i", 19);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 20);
    ɵɵelementStart(4, "div", 21);
    ɵɵelementStart(5, "div", 22);
    ɵɵelementStart(6, "span", 19);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "span", 23);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 24);
    ɵɵelementStart(11, "span");
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c0$1, ctx_r2.AlertHelperRef.getStateClass(a_r4.alert.currentState)));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c0$1, ctx_r2.AlertHelperRef.getStateIconClass(a_r4.alert.currentState)));
    ɵɵadvance(4);
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c0$1, ctx_r2.AlertHelperRef.getStateClass(a_r4.alert.currentState)));
    ɵɵadvance(1);
    ɵɵtextInterpolate(a_r4.alert == null ? null : a_r4.alert.currentState);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.AlertHelperRef.getInfo(a_r4.alert));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r2.getFormattedTime(a_r4));
} }
function AlertHistoryEditorComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "i");
    ɵɵtext(2, "No state changes recorded");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function AlertHistoryEditorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "ol", 14);
    ɵɵtemplate(2, AlertHistoryEditorComponent_div_8_li_2_Template, 13, 12, "li", 15);
    ɵɵelementEnd();
    ɵɵtemplate(3, AlertHistoryEditorComponent_div_8_div_3_Template, 3, 0, "div", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.history);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r0.history == null ? null : ctx_r0.history.length));
} }
class AlertHistoryEditorComponent extends BaseChartEditorComponent {
    constructor(panel, store, annotService) {
        super(panel);
        this.store = store;
        this.annotService = annotService;
        this.ErrorMessagesRef = ErrorMessages;
        this.AlertHelperRef = AlertHelper;
        this.storeSubs = store
            .dashboard$
            .subscribe(x => {
            if (x) {
                this.dashboardId = x.id;
                this.loadHistory();
            }
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.storeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    loadHistory() {
        const filter = `dashboardId=${this.dashboardId}&panelId=${this.panel.id}&limit=50&type=alert`;
        this.historyRequest = new ObservableEx(this
            .annotService
            .find(filter)
            .pipe(tap(x => this.history = [...x])));
    }
    getFormattedTime(a) {
        return Moment.format(a.time);
    }
    onClearHistory() {
        this.deleting = true;
        this
            .annotService
            .clear(this.dashboardId, +this.panel.id)
            .pipe(finalize(() => this.deleting = this.deleteDialogOpened = false))
            .subscribe(x => {
            this.history = [];
            Notes.success(x.message);
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_DELETE_ANNS); });
    }
}
AlertHistoryEditorComponent.ɵfac = function AlertHistoryEditorComponent_Factory(t) { return new (t || AlertHistoryEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN), ɵɵdirectiveInject(DashboardStore), ɵɵdirectiveInject(AnnotationService)); };
AlertHistoryEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AlertHistoryEditorComponent, selectors: [["editor-alert-history"]], features: [ɵɵInheritDefinitionFeature], decls: 24, vars: 8, consts: [[1, "gf-form-group", 2, "max-width", "720px"], [1, "btn", "btn-mini", "btn-danger", "pull-right", 3, "click"], [1, "fa", "fa-trash"], [1, "section-heading", 2, "whitespace", "nowrap"], [1, "muted", "small"], [4, "ngIf", "ngIfElse"], [3, "loadingWrapper", "loadingMessage", "errorMessage"], ["loadOrError", ""], ["header", "Delete Alert History", "headerIcon", "fa fa-trash", 3, "visible", "visibleChange", "close"], [1, "text-center"], [1, "confirm-modal-text"], [1, "gf-form-button-row"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-inverse", 3, "click"], [1, "alert-rule-list"], ["class", "alert-rule-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "alert-rule-item"], [1, "alert-rule-item__icon", 3, "ngClass"], [3, "ngClass"], [1, "alert-rule-item__body"], [1, "alert-rule-item__header"], [1, "alert-rule-item__text-big"], [1, "alert-list-info"], [1, "alert-rule-item__time"]], template: function AlertHistoryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_1_listener() { return ctx.deleteDialogOpened = true; });
        ɵɵelement(2, "i", 2);
        ɵɵtext(3, "\u00A0Clear history");
        ɵɵelementEnd();
        ɵɵelementStart(4, "h5", 3);
        ɵɵtext(5, " State history ");
        ɵɵelementStart(6, "span", 4);
        ɵɵtext(7, "(last 50 state changes)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(8, AlertHistoryEditorComponent_div_8_Template, 4, 2, "div", 5);
        ɵɵpipe(9, "async");
        ɵɵelementEnd();
        ɵɵelement(10, "load-or-error", 6, 7);
        ɵɵelementStart(12, "ed-dialog", 8);
        ɵɵlistener("visibleChange", function AlertHistoryEditorComponent_Template_ed_dialog_visibleChange_12_listener($event) { return ctx.deleteDialogOpened = $event; })("close", function AlertHistoryEditorComponent_Template_ed_dialog_close_12_listener() { return ctx.deleteDialogOpened = false; });
        ɵɵelementStart(13, "div", 9);
        ɵɵelementStart(14, "div", 10);
        ɵɵtext(15, "Are you sure you want to remove all history ");
        ɵɵelement(16, "br");
        ɵɵtext(17, "& annotations for this alert?");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "ed-dialog-actions");
        ɵɵelementStart(19, "div", 11);
        ɵɵelementStart(20, "button", 12);
        ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_20_listener() { return ctx.onClearHistory(); });
        ɵɵtext(21, "Delete");
        ɵɵelementEnd();
        ɵɵelementStart(22, "button", 13);
        ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_22_listener() { return ctx.deleteDialogOpened = false; });
        ɵɵtext(23, "Cancel");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(11);
        ɵɵadvance(8);
        ɵɵproperty("ngIf", ɵɵpipeBind1(9, 6, ctx.historyRequest == null ? null : ctx.historyRequest.data$))("ngIfElse", _r1.template);
        ɵɵadvance(2);
        ɵɵproperty("loadingWrapper", ctx.historyRequest)("loadingMessage", "loading alert annotation history...")("errorMessage", ctx.ErrorMessagesRef.BAD_GET_ANNS);
        ɵɵadvance(2);
        ɵɵproperty("visible", ctx.deleteDialogOpened);
    } }, directives: [NgIf, LoadOrErrorComponent, DialogComponent, DialogActionsComponent, NgForOf, NgClass], pipes: [AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertHistoryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-history',
                templateUrl: './alert-history.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: DashboardStore }, { type: AnnotationService }]; }, null); })();

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
        this.index = 1;
        this.toggleAlertHandle(true);
    }
    ngOnDestroy() {
        this.toggleAlertHandle(false);
    }
    onAddAlert() {
        this.widget.alert = new AlertRule();
    }
    onClose() {
        this.index = 0;
    }
    onDelete() {
        // delete alert
        this.widget.alert = this.panel.alertState = undefined;
        this.refresh();
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
        this.routeSubs = this
            .activatedRoute
            .queryParamMap
            .subscribe((params) => {
            const p = params.get('tab');
            const n = +p;
            if (Number.isInteger(n)) {
                this.index = n;
            }
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.routeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
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
            },
            onHover: (e) => comp.store.mouse.move(e)
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
                isNull: isNull,
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
            .pipe(
        //tap( _ => this.request = '' ),
        mergeMap(_ => this.pluginActivator.createDataSourceMetricsBuilder(panel)), mergeMap(mb => mb.build(this.metrics, this.range)))
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
        // if (this.request === request) {
        // 	return;
        // }
        this.request = request;
        if (request) {
            console.log(`pull: ${request}`);
        }
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

class MouseStore {
    constructor(panel, time) {
        this.panel = panel;
        this.time = time;
        this._down = new BehaviorSubject(null);
        this.down$ = this._down.asObservable();
        this._up = new BehaviorSubject(null);
        this.up$ = this._up.asObservable();
        this.drag = new BehaviorSubject(null);
        this.drag$ = this.drag.asObservable();
        this.hover = new BehaviorSubject(null);
        this.hover$ = this.hover.asObservable();
    }
    get component() {
        var _a;
        return (_a = this
            .panel
            .widget) === null || _a === void 0 ? void 0 : _a.component;
    }
    get chart() {
        return this
            .component
            .control
            .chart;
    }
    down(s) {
        this.drag.next({
            start: s,
            end: s /*!? */
        });
        this._down.next(s);
        s.target.setPointerCapture(1);
    }
    up(e) {
        e.target.releasePointerCapture(1);
        this._up.next(e);
        if (!e.ctrlKey) {
            this.zoomIn();
        }
        this.drag.next(undefined);
        this.refresh();
    }
    move(m) {
        this.hover.next(m);
        const d = this.drag.value;
        if (!d) {
            return;
        }
        this.drag.next({
            start: d.start,
            end: m
        });
    }
    leave(e) {
        this.hover.next(undefined);
        this.refresh();
    }
    refresh() {
        this.component.control.refresh();
    }
    zoomIn() {
        const scaleX = this.chart.scales[AXIS_X];
        if (!this.drag.value.end) {
            return;
        }
        const sx = this.drag.value.start.offsetX;
        const ex = this.drag.value.end.offsetX;
        const start = Math.min(sx, ex);
        const end = Math.max(sx, ex);
        const os = Math.max(start, scaleX.left);
        const oe = Math.max(scaleX.left, Math.min(end, scaleX.right));
        if (Math.abs(os - oe) == 0) {
            return;
        }
        const from = scaleX.getValueForPixel(os);
        const to = scaleX.getValueForPixel(oe);
        const minsDiff = Math.abs(from.diff(to, "minutes"));
        if (minsDiff >= 1) {
            this.time.zoom({ from, to });
        }
    }
}
MouseStore.ɵfac = function MouseStore_Factory(t) { return new (t || MouseStore)(ɵɵinject(PANEL_TOKEN), ɵɵinject(TimeRangeStore)); };
MouseStore.ɵprov = ɵɵdefineInjectable({ token: MouseStore, factory: MouseStore.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MouseStore, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: TimeRangeStore }]; }, null); })();

class ChartStore {
    constructor(dashboardStore, dataProvider, display, annotationStore, mouse, panel) {
        this.dashboardStore = dashboardStore;
        this.dataProvider = dataProvider;
        this.display = display;
        this.annotationStore = annotationStore;
        this.mouse = mouse;
        this.panel = panel;
        this.data = new BehaviorSubject(null);
        this.data$ = this.data.asObservable();
        dataProvider
            .data$
            .subscribe(x => { var _a; return this.data.next((_a = x === null || x === void 0 ? void 0 : x.datasets) !== null && _a !== void 0 ? _a : []); });
        this.dashboardSubs = dashboardStore
            .dashboard$
            .subscribe(x => this.dashboard = x);
        this.annotSubs = annotationStore
            .annotationsUpdate$
            .subscribe(_ => this.refresh());
    }
    get widget() {
        return this.panel.widget;
    }
    destroy() {
        var _a, _b;
        (_a = this.dashboardSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.annotSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        this.dataProvider.destroy();
        this.widget.component = undefined;
    }
    refresh() {
        var _a, _b;
        (_b = (_a = this
            .widget
            .component) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.refresh();
    }
}
ChartStore.ɵfac = function ChartStore_Factory(t) { return new (t || ChartStore)(ɵɵinject(DashboardStore), ɵɵinject(DataProvider), ɵɵinject(DisplayManager), ɵɵinject(AnnotationStore), ɵɵinject(MouseStore), ɵɵinject(PANEL_TOKEN)); };
ChartStore.ɵprov = ɵɵdefineInjectable({ token: ChartStore, factory: ChartStore.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartStore, [{
        type: Injectable
    }], function () { return [{ type: DashboardStore }, { type: DataProvider }, { type: DisplayManager }, { type: AnnotationStore }, { type: MouseStore }, { type: undefined, decorators: [{
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
    }
    get dashboardId() {
        return this.store.dashboard.id;
    }
    get panel() {
        return this.store.panel;
    }
    get widget() {
        return this.store.widget;
    }
    get datasets() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.datasets;
    }
    get display() {
        return this.store.display;
    }
    get component() {
        return this.widget.component;
    }
    get nativeControl() {
        return this.component.control.chart;
    }
    get scales() {
        return this.nativeControl.scales;
    }
    get annotations() {
        return this.panel.annotations;
    }
    ngOnDestroy() {
        var _a;
        (_a = this.dataSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    refresh() {
        this.store.refresh();
    }
}
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(ɵɵdirectiveInject(ChartStore)); };
BaseChartComponent.ɵdir = ɵɵdefineDirective({ type: BaseChartComponent });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseChartComponent, [{
        type: Directive
    }], function () { return [{ type: ChartStore }]; }, null); })();

class ChartJsExtension {
    constructor(store) {
        this.store = store;
    }
    get widget() {
        return this.store.widget;
    }
    get dashboard() {
        return this.store.dashboard;
    }
    get panel() {
        return this.store.panel;
    }
    afterDatasetsDraw(chart, easing) {
    }
    finalize() {
    }
}
ChartJsExtension.ɵfac = function ChartJsExtension_Factory(t) { return new (t || ChartJsExtension)(ɵɵdirectiveInject(ChartStore)); };
ChartJsExtension.ɵdir = ɵɵdefineDirective({ type: ChartJsExtension });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartJsExtension, [{
        type: Directive
    }], function () { return [{ type: ChartStore }]; }, null); })();
class BaseDrawer {
    constructor(chart) {
        this.chart = chart;
    }
    get context() {
        return this.chart.chart.ctx;
    }
    get canvas() {
        return this.chart.canvas;
    }
    get scaleY() {
        return this.chart.scales[AXIS_Y_LEFT];
    }
    get scaleX() {
        return this.chart.scales[AXIS_X];
    }
    get minY() {
        return this.scaleY.top;
    }
    get maxY() {
        return this.scaleY.bottom;
    }
    alignPixel(pixel, width) {
        var devicePixelRatio = this.chart.currentDevicePixelRatio;
        var halfWidth = width / 2;
        return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    }
    ;
}

class ThresholdDrawerPlugin extends ChartJsExtension {
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
class ThresholdDrawer extends BaseDrawer {
    constructor(chart, threshold) {
        super(chart);
        this.threshold = threshold;
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

class TrackballDrawerPlugin extends ChartJsExtension {
    constructor(store) {
        super(store);
        this.posSubs = store
            .mouse
            .hover$
            .subscribe(x => this.trackball = x);
    }
    finalize() {
        super.finalize();
        this.posSubs.unsubscribe();
    }
    afterDatasetsDraw(chart, _) {
        if (this.trackball) {
            new TrackballDrawer(chart, this.trackball).draw();
        }
    }
}
TrackballDrawerPlugin.ɵfac = function TrackballDrawerPlugin_Factory(t) { return new (t || TrackballDrawerPlugin)(ɵɵinject(ChartStore)); };
TrackballDrawerPlugin.ɵprov = ɵɵdefineInjectable({ token: TrackballDrawerPlugin, factory: TrackballDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrackballDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: ChartStore }]; }, null); })();
class TrackballDrawer extends BaseDrawer {
    constructor(chart, trackball) {
        super(chart);
        this.trackball = trackball;
    }
    get position() {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: this.trackball.clientX - rect.left,
            y: this.trackball.clientY - rect.top
        };
    }
    draw() {
        const context = this.context;
        const pos = this.position;
        const shouldIgnore = (0 == this.chart.data.datasets.length) ||
            (pos.x < this.scaleX.left || pos.x > this.scaleX.right);
        if (shouldIgnore) {
            return;
        }
        const lw = 0.8;
        const x = this.alignPixel(pos.x, lw);
        const y1 = this.alignPixel(this.scaleY.top, lw);
        const y2 = this.alignPixel(this.scaleY.bottom, lw);
        context.beginPath();
        context.strokeStyle = "#880015";
        context.lineWidth = lw;
        context.moveTo(x, y1);
        context.lineTo(x, y2);
        context.stroke();
    }
}

class TimeRegionsDrawerPlugin extends ChartJsExtension {
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
class TimeRegionDrawer extends BaseDrawer {
    constructor(chart, timeRegion) {
        super(chart);
        this.timeRegion = timeRegion;
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

class AlertDrawerPlugin extends ChartJsExtension {
    constructor(store) {
        super(store);
    }
    afterDatasetsDraw(chart, _) {
        var _a, _b;
        const conditions = (_b = (_a = this
            .widget) === null || _a === void 0 ? void 0 : _a.alert) === null || _b === void 0 ? void 0 : _b.conditions;
        if (conditions === null || conditions === void 0 ? void 0 : conditions.length) {
            new AlertDrawer(chart, conditions[0].evaluator).draw();
        }
    }
}
AlertDrawerPlugin.ɵfac = function AlertDrawerPlugin_Factory(t) { return new (t || AlertDrawerPlugin)(ɵɵinject(ChartStore)); };
AlertDrawerPlugin.ɵprov = ɵɵdefineInjectable({ token: AlertDrawerPlugin, factory: AlertDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: ChartStore }]; }, null); })();
class AlertDrawer extends BaseDrawer {
    constructor(chart, evaluator) {
        super(chart);
        this.evaluator = evaluator;
    }
    draw() {
        const offset1 = this.scaleY.getPixelForValue(+this.evaluator.params[0]);
        const offset2 = this.scaleY.getPixelForValue(+this.evaluator.params[1]);
        const topY = this.scaleY.getPixelForValue(this.scaleY.max);
        const bottomY = this.scaleY.getPixelForValue(this.scaleY.min);
        switch (+this.evaluator.type) {
            case AlertEvalType.IsAbove:
                if (!(topY > offset1 || bottomY < offset1)) {
                    this.renderLine(offset1);
                    this.renderRectangle(offset1, true);
                }
                break;
            case AlertEvalType.IsBelow:
                if (!(topY > offset1 || bottomY < offset1)) {
                    this.renderLine(offset1);
                    this.renderRectangle(offset1, false);
                }
                break;
            case AlertEvalType.IsWithinRange:
                if (!(topY > offset1 || bottomY < offset1 || topY > offset2 || bottomY < offset2)) {
                    this.renderLine(offset1);
                    this.renderLine(offset2);
                    this.renderRectangleBetween(offset1, offset2);
                }
                break;
            case AlertEvalType.IsOutsideRange:
                if (!(topY > offset1 || bottomY < offset1 || topY > offset2 || bottomY < offset2)) {
                    this.renderLine(offset1);
                    this.renderLine(offset2);
                    this.renderRectangle(offset1, false);
                    this.renderRectangle(offset2, true);
                }
                break;
        }
    }
    renderLine(offset) {
        this.context.beginPath();
        this.context.strokeStyle = AlertDrawer.LINE_COLOR;
        this.context.lineWidth = 2;
        this.context.moveTo(this.scaleX.left, offset);
        this.context.lineTo(this.scaleX.right, offset);
        this.context.stroke();
    }
    renderRectangle(offset, gt) {
        this.context.fillStyle = AlertDrawer.FILL_COLOR;
        const x = this.scaleX.left;
        const w = this.scaleX.width;
        const topY = this.scaleY.getPixelForValue(this.scaleY.max);
        const bottomY = this.scaleY.getPixelForValue(this.scaleY.min);
        const y = gt ? topY : Math.max(topY, offset);
        let h = gt ? offset - this.scaleY.top : this.scaleY.bottom - offset;
        h = Math.min(bottomY - topY, h);
        this.context.fillRect(x, y, w, h);
    }
    renderRectangleBetween(offset1, offset2) {
        this.context.fillStyle = AlertDrawer.FILL_COLOR;
        const x = this.scaleX.left;
        const w = this.scaleX.width;
        this.context.fillRect(x, offset1, w, offset2 - offset1);
    }
}
AlertDrawer.LINE_COLOR = ColorHelper.hexToRgbString(ColorHelper.ALERTING_COLOR, 0.6);
AlertDrawer.FILL_COLOR = ColorHelper.hexToRgbString(ColorHelper.ALERTING_COLOR, ColorHelper.REGION_FILL_ALPHA);

class AnnotationDrawerPlugin extends ChartJsExtension {
    constructor(store) {
        super(store);
    }
    afterDatasetsDraw(chart, _) {
        var _a;
        if (!((_a = chart.data.datasets) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        this
            .panel
            .annotations
            .forEach(a => new AnnotationDrawer(chart, this.widget, this.dashboard, a).draw());
    }
}
AnnotationDrawerPlugin.ɵfac = function AnnotationDrawerPlugin_Factory(t) { return new (t || AnnotationDrawerPlugin)(ɵɵinject(ChartStore)); };
AnnotationDrawerPlugin.ɵprov = ɵɵdefineInjectable({ token: AnnotationDrawerPlugin, factory: AnnotationDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AnnotationDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: ChartStore }]; }, null); })();
class AnnotationDrawer extends BaseDrawer {
    constructor(chart, widget, dashboard, annotation) {
        super(chart);
        this.widget = widget;
        this.dashboard = dashboard;
        this.annotation = annotation;
    }
    draw() {
        if (this.annotation.alert && !this.widget.alert) {
            return;
        }
        if (!this.annotation.timeEnd) {
            this.renderLineAnnotation();
        }
        else {
            this.renderRegionAnnotation();
        }
    }
    get color() {
        var _a, _b, _c;
        if (this.annotation.alert) {
            const alert = this.annotation.alert;
            const state = AlertState[alert.currentState];
            switch (state) {
                case AlertState.Alerting:
                    return ColorHelper.ALERTING_COLOR;
                case AlertState.Ok:
                    return ColorHelper.OK_COLOR;
                case AlertState.Pending:
                case AlertState.NoData:
                    return ColorHelper.PENDING_COLOR;
            }
        }
        return (_c = (_b = (_a = this
            .dashboard
            .data) === null || _a === void 0 ? void 0 : _a.annotationRules[this.annotation.ruleIndex]) === null || _b === void 0 ? void 0 : _b.color) !== null && _c !== void 0 ? _c : ColorHelper.DEFAULT_ANNOTATION_COLOR;
        ;
    }
    renderLineAnnotation() {
        var time = Moment.toDate(this.annotation.time);
        let offset = this.scaleX.getPixelForValue(time);
        if (!(offset < this.scaleX.left || offset > this.scaleX.right)) {
            this.renderLine(offset, this.color /*?? AnnotationsDrawerPlugin.COLOR*/);
        }
    }
    renderLine(offset, color) {
        const lw = 0.8;
        const context = this.context;
        const x = this.alignPixel(offset, lw);
        const y1 = this.alignPixel(this.minY, lw);
        const y2 = this.alignPixel(this.maxY, lw);
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
    }
    renderRegionAnnotation() {
        var timeStart = Moment.toDate(this.annotation.time);
        var timeEnd = Moment.toDate(this.annotation.timeEnd);
        let os = this.scaleX.getPixelForValue(timeStart);
        let oe = this.scaleX.getPixelForValue(timeEnd);
        if (oe < this.scaleX.left || os > this.scaleX.right) {
            return;
        }
        os = Math.max(os, this.scaleX.left);
        oe = Math.max(this.scaleX.left, Math.min(oe, this.scaleX.right));
        this.renderRegion(os, oe, this.color /*?? AnnotationsDrawerPlugin.COLOR*/);
    }
    renderRegion(os, oe, color) {
        const lw = 0.8;
        const x1 = this.alignPixel(os, lw);
        const x2 = this.alignPixel(oe, lw);
        const y1 = this.alignPixel(this.minY, lw);
        const y2 = this.alignPixel(this.maxY, lw);
        const context = this.context;
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
    }
}

class DragRangeDrawerPlugin extends ChartJsExtension {
    constructor(store) {
        super(store);
        this.posSubs = store
            .mouse
            .drag$
            .subscribe(x => this.region = x);
    }
    finalize() {
        super.finalize();
        this.posSubs.unsubscribe();
    }
    afterDatasetsDraw(chart, _) {
        if (this.region && this.region.start && this.region.end) {
            new DragRangeDrawer(chart, this.region).draw();
        }
    }
}
DragRangeDrawerPlugin.ɵfac = function DragRangeDrawerPlugin_Factory(t) { return new (t || DragRangeDrawerPlugin)(ɵɵinject(ChartStore)); };
DragRangeDrawerPlugin.ɵprov = ɵɵdefineInjectable({ token: DragRangeDrawerPlugin, factory: DragRangeDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DragRangeDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: ChartStore }]; }, null); })();
class DragRangeDrawer extends BaseDrawer {
    constructor(chart, region) {
        super(chart);
        this.region = region;
    }
    draw() {
        const os = Math.max(this.region.start.offsetX, this.scaleX.left);
        const oe = Math.max(this.scaleX.left, Math.min(this.region.end.offsetX, this.scaleX.right));
        this.renderRectangle(os, oe);
    }
    renderRectangle(offsetStart, offsetEnd) {
        const context = this.context;
        const color = "#ffffff";
        context.fillStyle = color + "22";
        context.strokeStyle = color + "30";
        const x = offsetStart;
        const w = offsetEnd - offsetStart;
        const y = this.minY;
        const h = this.maxY - this.minY;
        context.beginPath();
        context.setLineDash([]);
        context.fillRect(x, y, w, h);
        context.rect(x, y, w, h);
        context.stroke();
    }
}

class ExtensionsManager {
    constructor(thresholds, trackball, timeRegions, alerts, annotations, drag) {
        this.thresholds = thresholds;
        this.trackball = trackball;
        this.timeRegions = timeRegions;
        this.alerts = alerts;
        this.annotations = annotations;
        this.drag = drag;
    }
    get list() {
        return [
            this.thresholds,
            this.timeRegions,
            this.alerts,
            this.annotations,
            this.trackball,
            this.drag
        ];
    }
    destroy() {
        this.list.forEach(x => x.finalize());
    }
}
ExtensionsManager.ɵfac = function ExtensionsManager_Factory(t) { return new (t || ExtensionsManager)(ɵɵinject(ThresholdDrawerPlugin), ɵɵinject(TrackballDrawerPlugin), ɵɵinject(TimeRegionsDrawerPlugin), ɵɵinject(AlertDrawerPlugin), ɵɵinject(AnnotationDrawerPlugin), ɵɵinject(DragRangeDrawerPlugin)); };
ExtensionsManager.ɵprov = ɵɵdefineInjectable({ token: ExtensionsManager, factory: ExtensionsManager.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExtensionsManager, [{
        type: Injectable
    }], function () { return [{ type: ThresholdDrawerPlugin }, { type: TrackballDrawerPlugin }, { type: TimeRegionsDrawerPlugin }, { type: AlertDrawerPlugin }, { type: AnnotationDrawerPlugin }, { type: DragRangeDrawerPlugin }]; }, null); })();

function ChartComponent_alert_handle_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "alert-handle");
} }
function ChartComponent_chart_legend_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "chart-legend", 8);
} }
function ChartComponent_chart_legend_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "chart-legend", 9);
} }
class ChartComponent extends BaseChartComponent {
    constructor(store, plugins) {
        super(store);
        this.plugins = plugins;
        this.showAlertHandle = false;
        this.options = OptionsProvider.getOptions(this);
    }
    ngAfterViewInit() {
        this.widget.component = this;
    }
    ngOnDestroy() {
        this.store.destroy();
        this.plugins.destroy();
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
            MouseStore,
            ExtensionsManager,
            TrackballDrawerPlugin,
            ThresholdDrawerPlugin,
            TimeRegionsDrawerPlugin,
            AlertDrawerPlugin,
            AnnotationDrawerPlugin,
            DragRangeDrawerPlugin
        ]), ɵɵInheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "chart__wrapper"], [1, "chart__right-legend-cont"], [1, "chart__canvas-cont"], ["type", "line", "height", "100%", 3, "data", "options", "plugins", "mousedown", "mouseup", "mouseleave"], ["chart", ""], [4, "ngIf"], ["class", "chart__legend-right", 4, "ngIf"], ["class", "chart__legend-bottom", 4, "ngIf"], [1, "chart__legend-right"], [1, "chart__legend-bottom"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "p-chart", 3, 4);
        ɵɵlistener("mousedown", function ChartComponent_Template_p_chart_mousedown_3_listener($event) { return ctx.store.mouse.down($event); })("mouseup", function ChartComponent_Template_p_chart_mouseup_3_listener($event) { return ctx.store.mouse.up($event); })("mouseleave", function ChartComponent_Template_p_chart_mouseleave_3_listener($event) { return ctx.store.mouse.leave($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(5, ChartComponent_alert_handle_5_Template, 1, 0, "alert-handle", 5);
        ɵɵtemplate(6, ChartComponent_chart_legend_6_Template, 1, 0, "chart-legend", 6);
        ɵɵelementEnd();
        ɵɵtemplate(7, ChartComponent_chart_legend_7_Template, 1, 0, "chart-legend", 7);
        ɵɵelementEnd();
        ɵɵelement(8, "annotation-dispatcher");
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins.list);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.showAlertHandle && (ctx.widget == null ? null : ctx.widget.alert));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", (ctx.widget == null ? null : ctx.widget.legend.show) && (ctx.widget == null ? null : ctx.widget.legend == null ? null : ctx.widget.legend.right));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", (ctx.widget == null ? null : ctx.widget.legend.show) && !(ctx.widget == null ? null : ctx.widget.legend == null ? null : ctx.widget.legend.right));
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
                    MouseStore,
                    ExtensionsManager,
                    TrackballDrawerPlugin,
                    ThresholdDrawerPlugin,
                    TimeRegionsDrawerPlugin,
                    AlertDrawerPlugin,
                    AnnotationDrawerPlugin,
                    DragRangeDrawerPlugin
                ]
            }]
    }], function () { return [{ type: ChartStore }, { type: ExtensionsManager }]; }, { control: [{
            type: ViewChild,
            args: [UIChart]
        }] }); })();

const _c0$2 = ["handle"];
const _c1$1 = ["wrapper"];
const _c2$1 = function (a0) { return { "top.px": a0 }; };
function AlertHandleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("mousedown", function AlertHandleComponent_div_2_Template_div_mousedown_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onGripClick($event, 2); });
    ɵɵelement(1, "div", 11);
    ɵɵelementStart(2, "div", 6);
    ɵɵelement(3, "i", 7);
    ɵɵelementStart(4, "span", 8);
    ɵɵtext(5);
    ɵɵelement(6, "i", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c2$1, ctx_r1.pixel2));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r1.evaluatorParam2);
} }
class AlertHandleComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    get handleMidHeight() {
        return 14; /*this
            .handle
            ?.nativeElement
            .offsetHeight / 2*/
        14;
    }
    get scale() {
        return this.chartControl.scales[AXIS_Y_LEFT];
        ;
    }
    get evaluator() {
        var _a;
        const conds = (_a = this.alert) === null || _a === void 0 ? void 0 : _a.conditions;
        return conds ? conds[0].evaluator : undefined;
    }
    get evaluatorParam1() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.evaluator) === null || _a === void 0 ? void 0 : _a.params[0];
    }
    get evaluatorParam2() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.evaluator) === null || _a === void 0 ? void 0 : _a.params[1];
    }
    set evaluatorParam1(v) {
        if (!this.evaluator) {
            return;
        }
        this
            .evaluator
            .params[0] = v;
    }
    set evaluatorParam2(v) {
        if (!this.evaluator) {
            return;
        }
        this
            .evaluator
            .params[1] = v;
    }
    get pixel1() {
        return this.getPixel(this.evaluatorParam1);
    }
    get pixel2() {
        return this.getPixel(this.evaluatorParam2);
    }
    getPixel(p) {
        var _a;
        if (!this.scale) {
            return;
        }
        let v = Math.max(this.scale.min, p);
        v = Math.min(this.scale.max, v);
        return ((_a = this
            .scale) === null || _a === void 0 ? void 0 : _a.getPixelForValue(v)) - this.handleMidHeight;
    }
    get showSecondHandle() {
        var _a;
        switch (+((_a = this.evaluator) === null || _a === void 0 ? void 0 : _a.type)) {
            case AlertEvalType.IsWithinRange:
            case AlertEvalType.IsOutsideRange:
                return true;
        }
        return false;
    }
    onGripClick(e, index) {
        e.preventDefault();
        const offset = this.wrapper.nativeElement.getBoundingClientRect().top + window.scrollY;
        const top = offset + e.offsetY;
        let resizeFunc = function (e) {
            e.preventDefault();
            this.calculateValueForPixel(e.clientY - top, index);
            this.refresh();
        };
        let stopResizeFunc = (e) => {
            window.removeEventListener('mousemove', this.resizeFuncHandler, true);
            window.removeEventListener('mouseup', this.stopResizeFuncHandler, true);
        };
        this.resizeFuncHandler = resizeFunc.bind(this);
        this.stopResizeFuncHandler = stopResizeFunc.bind(this);
        window.addEventListener('mousemove', this.resizeFuncHandler, true);
        window.addEventListener('mouseup', this.stopResizeFuncHandler, true);
    }
    calculateValueForPixel(pix, index) {
        const minY = this.scale.getPixelForValue(this.scale.min) - this.handleMidHeight;
        const maxY = -this.handleMidHeight;
        var pricePixel = Math.min(minY, Math.max(maxY, pix));
        var preciseValue = this.scale.getValueForPixel(pricePixel + this.handleMidHeight);
        var roundedValue = this.round(preciseValue);
        if (1 == index) {
            this.evaluatorParam1 = roundedValue;
        }
        else {
            this.evaluatorParam2 = roundedValue;
        }
    }
    round(v) {
        const dec1 = this.countDecimals(this.scale.max);
        const dec2 = this.countDecimals(this.scale.min);
        return +v.toFixed(Math.max(dec1, dec2));
    }
    countDecimals(value) {
        if (Math.floor(value) === value)
            return 0;
        return value.toString().split(".")[1].length || 0;
    }
}
AlertHandleComponent.ɵfac = function AlertHandleComponent_Factory(t) { return new (t || AlertHandleComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertHandleComponent.ɵcmp = ɵɵdefineComponent({ type: AlertHandleComponent, selectors: [["alert-handle"]], viewQuery: function AlertHandleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
        ɵɵviewQuery(_c1$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handle = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 11, vars: 5, consts: [[1, "alert-wrapper", "mr-3"], ["wrapper", ""], ["class", "alert-handle ed-flex ml-3", 3, "ngStyle", "mousedown", 4, "ngIf"], [1, "alert-handle", "ed-flex", 3, "ngStyle", "mousedown"], ["handle", ""], [1, "alert-handle-line"], [1, "alert-handle"], [1, "icon-gf", "icon-gf-critical", "alert-state-critical"], [1, "alert-handle-value"], [1, "alert-handle-grip"], [1, "alert-handle", "ed-flex", "ml-3", 3, "ngStyle", "mousedown"], [1, "alert-handle-line2"]], template: function AlertHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵtemplate(2, AlertHandleComponent_div_2_Template, 7, 4, "div", 2);
        ɵɵelementStart(3, "div", 3, 4);
        ɵɵlistener("mousedown", function AlertHandleComponent_Template_div_mousedown_3_listener($event) { return ctx.onGripClick($event, 1); });
        ɵɵelement(5, "div", 5);
        ɵɵelementStart(6, "div", 6);
        ɵɵelement(7, "i", 7);
        ɵɵelementStart(8, "span", 8);
        ɵɵtext(9);
        ɵɵelement(10, "i", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.showSecondHandle);
        ɵɵadvance(1);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c2$1, ctx.pixel1));
        ɵɵadvance(6);
        ɵɵtextInterpolate(ctx.evaluatorParam1);
    } }, directives: [NgIf, NgStyle], styles: [".alert-wrapper[_ngcontent-%COMP%]{height:100%}.alert-handle-line[_ngcontent-%COMP%], .alert-handle-line2[_ngcontent-%COMP%]{background-color:rgba(237,46,24,.6);height:2px;margin-left:-20px;position:relative;width:20px;z-index:0}.alert-handle-line2[_ngcontent-%COMP%]{margin-left:-129px;width:129px}.alert-handle[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2f2f32,#262628);border-radius:4px;box-shadow:-1px -1px 0 0 hsla(0,0%,100%,.1),1px 1px 0 0 rgba(0,0,0,.3);color:#8e8e8e;cursor:move;float:right;font-size:12px;position:relative;text-align:left;width:100px;z-index:10}.alert-handle[_ngcontent-%COMP%]:hover{background-color:#303032}.alert-handle[_ngcontent-%COMP%]   .icon-gf[_ngcontent-%COMP%]{border-right:1px solid #333;float:left;font-size:14px;padding:.5rem .3rem .4rem .4rem;position:relative;top:0}.alert-handle-value[_ngcontent-%COMP%]{border-left:1px solid #1f1f20;line-height:2rem;padding:.5rem}.alert-handle-value[_ngcontent-%COMP%]   .alert-handle-grip[_ngcontent-%COMP%]{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generated by IcoMoon.io --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2212%22 height%3D%2232%22 viewBox%3D%220 0 12 32%22%3E%3Cg id%3D%22icomoon-ignore%22%3E%3C%2Fg%3E%3Cpath d%3D%22M0 2h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 10h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 18h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M0 26h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 2h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 10h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 18h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M8 26h4v4h-4v-4z%22 fill%3D%22%23414141%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\") no-repeat 50% 50%;background-size:8px;float:right;height:2rem;margin-right:2px;width:1rem}.alert-state-critical[_ngcontent-%COMP%]{color:#ed2e18}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertHandleComponent, [{
        type: Component,
        args: [{
                selector: 'alert-handle',
                templateUrl: './handle.html',
                styleUrls: [
                    './handle.scss'
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { handle: [{
            type: ViewChild,
            args: ["handle"]
        }], wrapper: [{
            type: ViewChild,
            args: ["wrapper"]
        }] }); })();

function EditAnnotationComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "Add Annotation");
    ɵɵelementEnd();
} }
function EditAnnotationComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "Edit Annotation");
    ɵɵelementEnd();
} }
function EditAnnotationComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function EditAnnotationComponent_button_13_Template_button_click_0_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onDelete(); });
    ɵɵtext(1, "Delete");
    ɵɵelementEnd();
} }
class EditAnnotationComponent extends BaseChartComponent {
    constructor(store, annotService, time) {
        super(store);
        this.store = store;
        this.annotService = annotService;
        this.time = time;
        this.close = new EventEmitter();
    }
    ngOnInit() {
        if (!this.annotation) {
            this.annotation = Annotation.create(this.epochStart, this.epochEnd);
            this.annotations.push(this.annotation);
            this.refresh();
        }
        this.timeLabel = this
            .time
            .converter
            .toDateTimeString(this.annotation.time);
    }
    ngOnDestroy() {
        this.panel.annotations = this.annotations.filter(x => x.id);
        this.refresh();
    }
    onSave() {
        if (this.annotation.id) {
            this.onUpdate();
        }
        else {
            this.onCreate();
        }
    }
    onCreate() {
        this.annotation.panelId = this.panel.id;
        this.annotation.dashboardId = this.dashboardId;
        delete this.annotation.rect;
        this
            .annotService
            .create(this.annotation)
            .pipe(finalize(() => this.close.emit()))
            .subscribe(x => {
            Notes.success(x.message);
            this
                .store
                .annotationStore
                .update();
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_CREATE_ANN); });
    }
    onUpdate() {
        var _a;
        const annot = {
            time: this.annotation.time,
            timeEnd: this.annotation.timeEnd,
            text: this.annotation.text,
            tags: [...this.annotation.tags],
            alertId: (_a = this.annotation.alert) === null || _a === void 0 ? void 0 : _a.id
        };
        this
            .annotService
            .update(this.annotation.id, annot)
            .pipe(finalize(() => this.close.emit()))
            .subscribe(x => {
            Notes.success(x.message);
            this
                .store
                .annotationStore
                .update();
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_UPDATE_ANN); });
    }
    onDelete() {
        this
            .annotService
            .remove(this.annotation.id)
            .pipe(finalize(() => this.close.emit()))
            .subscribe(x => {
            Notes.success(x.message);
            this
                .store
                .annotationStore
                .update();
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_DELETE_ANN); });
    }
}
EditAnnotationComponent.ɵfac = function EditAnnotationComponent_Factory(t) { return new (t || EditAnnotationComponent)(ɵɵdirectiveInject(ChartStore), ɵɵdirectiveInject(AnnotationService), ɵɵdirectiveInject(TimeRangeStore)); };
EditAnnotationComponent.ɵcmp = ɵɵdefineComponent({ type: EditAnnotationComponent, selectors: [["edit-annotation"]], inputs: { epochStart: "epochStart", epochEnd: "epochEnd", annotation: "annotation" }, outputs: { close: "close" }, features: [ɵɵInheritDefinitionFeature], decls: 16, vars: 6, consts: [[1, "graph-annotation"], [1, "graph-annotation__header"], [1, "graph-annotation__title"], [4, "ngIf"], [1, "graph-annotation__time"], [1, "graph-annotation__body", "text-center"], ["label", "Description", "labelWidth", "7", "width", "23", "placeholder", "Description", "rows", "2", 3, "ngModel", "ngModelChange"], ["label", "Tags", "labelWidth", "7", 3, "ngModel", "ngModelChange"], [1, "gf-form-button-row"], [1, "btn", "btn-success", 3, "click"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn-text", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function EditAnnotationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, EditAnnotationComponent_span_3_Template, 2, 0, "span", 3);
        ɵɵtemplate(4, EditAnnotationComponent_span_4_Template, 2, 0, "span", 3);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 4);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 5);
        ɵɵelementStart(8, "ed-textarea", 6);
        ɵɵlistener("ngModelChange", function EditAnnotationComponent_Template_ed_textarea_ngModelChange_8_listener($event) { return ctx.annotation.text = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(9, "ed-tagbox", 7);
        ɵɵlistener("ngModelChange", function EditAnnotationComponent_Template_ed_tagbox_ngModelChange_9_listener($event) { return ctx.annotation.tags = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 8);
        ɵɵelementStart(11, "button", 9);
        ɵɵlistener("click", function EditAnnotationComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        ɵɵtext(12, "Save");
        ɵɵelementEnd();
        ɵɵtemplate(13, EditAnnotationComponent_button_13_Template, 2, 0, "button", 10);
        ɵɵelementStart(14, "a", 11);
        ɵɵlistener("click", function EditAnnotationComponent_Template_a_click_14_listener() { return ctx.close.emit(); });
        ɵɵtext(15, "Cancel");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.annotation.id);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.annotation.id);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.timeLabel);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.annotation.text);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.annotation.tags);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.annotation == null ? null : ctx.annotation.id);
    } }, directives: [NgIf, TextAreaComponent, NgControlStatus, NgModel, TagBoxComponent], styles: [".graph-annotation .label-tag{margin-right:4px;margin-top:8px}.graph-annotation .graph-annotation__header{align-items:center;background-color:#333;display:flex;padding:6px 10px}.graph-annotation .graph-annotation__title{display:inline-block;flex-grow:1;font-weight:500;overflow:hidden;padding-right:1rem;text-overflow:ellipsis;white-space:nowrap}.graph-annotation .graph-annotation__title.alert{text-transform:uppercase}.graph-annotation .graph-annotation__edit-icon{padding-left:1rem}.graph-annotation .graph-annotation__time{color:#8e8e8e;display:inline-block;font-style:italic;font-weight:400;position:relative;top:1px}.graph-annotation .graph-annotation__body{padding:.65rem}.graph-annotation .graph-annotation__body.hint{max-width:20rem}.graph-annotation .graph-annotation__user img{border-radius:50%;height:16px;width:16px}.graph-annotation a[href]{color:#33b5e5;text-decoration:underline}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditAnnotationComponent, [{
        type: Component,
        args: [{
                selector: 'edit-annotation',
                templateUrl: './edit-annot.html',
                styleUrls: ['./edit-annot.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ChartStore }, { type: AnnotationService }, { type: TimeRangeStore }]; }, { epochStart: [{
            type: Input
        }], epochEnd: [{
            type: Input
        }], close: [{
            type: Output
        }], annotation: [{
            type: Input
        }] }); })();

function AnnotationHintComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "ed-avatar", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("edHint", "Created by ", ctx_r0.annotation.userName, "");
    ɵɵadvance(1);
    ɵɵproperty("key", ctx_r0.annotation.userName);
} }
function AnnotationHintComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵelement(1, "i", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.AlertHelperRef.getStateClass(ctx_r1.annotation.alert.currentState));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r1.AlertHelperRef.getStateIconClass(ctx_r1.annotation.alert.currentState));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.annotation.alert.currentState, " ");
} }
function AnnotationHintComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.AlertHelperRef.getInfo(ctx_r2.annotation.alert));
} }
function AnnotationHintComponent_ed_tag_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ed-tag", 14);
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    ɵɵproperty("text", t_r4)("canRemove", false);
} }
class AnnotationHintComponent extends EditAnnotationComponent {
    constructor(store, annotService, time) {
        super(store, annotService, time);
        this.edit = new EventEmitter();
        this.overPopup = false;
        this.TagColorHelperRef = TagColorHelper;
        this.AlertHelperRef = AlertHelper;
    }
    onMouseEnter() {
        this.overPopup = true;
        this.annotation.overRoot = false;
        this.annotation.overPopup = true;
    }
    onMouseLeave() {
        this.overPopup = false;
        setTimeout(() => {
            if (!this.overPopup) {
                this.annotation.overPopup = false;
            }
        }, 300);
    }
}
AnnotationHintComponent.ɵfac = function AnnotationHintComponent_Factory(t) { return new (t || AnnotationHintComponent)(ɵɵdirectiveInject(ChartStore), ɵɵdirectiveInject(AnnotationService), ɵɵdirectiveInject(TimeRangeStore)); };
AnnotationHintComponent.ɵcmp = ɵɵdefineComponent({ type: AnnotationHintComponent, selectors: [["annotation-hint"]], outputs: { edit: "edit" }, features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 6, consts: [[1, "graph-annotation", "hint", 3, "mouseenter", "mouseleave"], [1, "graph-annotation__header"], ["class", "graph-annotation__user", "hintPos", "top", 3, "edHint", 4, "ngIf"], [1, "graph-annotation__title", "alert"], [3, "ngClass", 4, "ngIf"], [1, "graph-annotation__time"], [1, "pointer", "graph-annotation__edit-icon", 3, "click"], [1, "fa", "fa-pencil-square", "mt-1"], [1, "graph-annotation__body", "hint"], [4, "ngIf"], [3, "text", "canRemove", 4, "ngFor", "ngForOf"], ["hintPos", "top", 1, "graph-annotation__user", 3, "edHint"], [3, "key"], [3, "ngClass"], [3, "text", "canRemove"]], template: function AnnotationHintComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("mouseenter", function AnnotationHintComponent_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function AnnotationHintComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, AnnotationHintComponent_div_2_Template, 2, 2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, AnnotationHintComponent_span_4_Template, 3, 3, "span", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "span", 5);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "span", 6);
        ɵɵlistener("click", function AnnotationHintComponent_Template_span_click_7_listener($event) { ctx.edit.emit(); return $event.stopPropagation(); });
        ɵɵelement(8, "i", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 8);
        ɵɵtemplate(10, AnnotationHintComponent_span_10_Template, 2, 1, "span", 9);
        ɵɵelementStart(11, "div");
        ɵɵtext(12);
        ɵɵelementEnd();
        ɵɵtemplate(13, AnnotationHintComponent_ed_tag_13_Template, 1, 2, "ed-tag", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.annotation.alert);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.annotation.alert);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.timeLabel);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.annotation.alert);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.annotation.text);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.annotation.tags);
    } }, directives: [NgIf, NgForOf, HintDirective, AvatarComponent, NgClass, TagComponent], styles: [".graph-annotation .label-tag{margin-right:4px;margin-top:8px}.graph-annotation .graph-annotation__header{align-items:center;background-color:#333;display:flex;padding:6px 10px}.graph-annotation .graph-annotation__title{display:inline-block;flex-grow:1;font-weight:500;overflow:hidden;padding-right:1rem;text-overflow:ellipsis;white-space:nowrap}.graph-annotation .graph-annotation__title.alert{text-transform:uppercase}.graph-annotation .graph-annotation__edit-icon{padding-left:1rem}.graph-annotation .graph-annotation__time{color:#8e8e8e;display:inline-block;font-style:italic;font-weight:400;position:relative;top:1px}.graph-annotation .graph-annotation__body{padding:.65rem}.graph-annotation .graph-annotation__body.hint{max-width:20rem}.graph-annotation .graph-annotation__user img{border-radius:50%;height:16px;width:16px}.graph-annotation a[href]{color:#33b5e5;text-decoration:underline}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AnnotationHintComponent, [{
        type: Component,
        args: [{
                selector: 'annotation-hint',
                templateUrl: './annot-hint.html',
                styleUrls: ['../edit/edit-annot.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ChartStore }, { type: AnnotationService }, { type: TimeRangeStore }]; }, { edit: [{
            type: Output
        }] }); })();

function AnnotationDispatcherComponent_edit_annotation_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "edit-annotation", 5);
    ɵɵlistener("close", function AnnotationDispatcherComponent_edit_annotation_1_Template_edit_annotation_close_0_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.showAddAnnot = false; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("epochStart", ctx_r0.epochStart)("epochEnd", ctx_r0.epochEnd);
} }
function AnnotationDispatcherComponent_edit_annotation_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "edit-annotation", 6);
    ɵɵlistener("close", function AnnotationDispatcherComponent_edit_annotation_3_Template_edit_annotation_close_0_listener() { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.showEditAnnot = false; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("annotation", ctx_r1.annotation);
} }
function AnnotationDispatcherComponent_annotation_hint_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "annotation-hint", 7);
    ɵɵlistener("edit", function AnnotationDispatcherComponent_annotation_hint_5_Template_annotation_hint_edit_0_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.onEditAnnotation(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("annotation", ctx_r2.annotation);
} }
class AnnotationDispatcherComponent extends BaseChartComponent {
    constructor(store, time) {
        super(store);
        this.store = store;
        this.time = time;
        this.MIN_LEFT_X = 65;
        this.mouseDragSubs = store
            .mouse
            .drag$
            .subscribe(x => this.region = x);
        this.mouseUpSubs = store
            .mouse
            .up$
            .subscribe(x => this.onMouseUp(x));
        this.mouseHover = store
            .mouse
            .hover$
            .subscribe(x => this.onMouseHover(x));
    }
    get showViewAnnot() {
        var _a, _b;
        return ((_a = this.annotation) === null || _a === void 0 ? void 0 : _a.overRoot) || ((_b = this.annotation) === null || _b === void 0 ? void 0 : _b.overPopup);
    }
    ngOnDestroy() {
        var _a, _b, _c;
        super.ngOnDestroy();
        (_a = this.mouseUpSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.mouseDragSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.mouseHover) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
    onMouseUp(e) {
        if (!((e === null || e === void 0 ? void 0 : e.ctrlKey) && this.region)) {
            return;
        }
        const scaleX = this.scales[AXIS_X];
        const rangeStart = this.region.start;
        const rangeEnd = this.region.end;
        let start = Math.min(rangeStart.offsetX, rangeEnd.offsetX);
        let end = Math.max(rangeStart.offsetX, rangeEnd.offsetX);
        start = Math.max(start, scaleX.left);
        end = Math.min(end, scaleX.right);
        const es = scaleX
            .getValueForPixel(start)
            .valueOf();
        const ee = this.epochEnd = scaleX
            .getValueForPixel(end)
            .valueOf();
        this.epochStart = this.time.converter.toEpoch(es);
        this.epochEnd = this.time.converter.toEpoch(ee);
        this.offset = this.getPopupLocation(e);
        setTimeout(() => this.showAddAnnot = true);
    }
    onMouseHover(e) {
        var _a;
        if (!e || this.showAddAnnot || this.showEditAnnot) {
            return;
        }
        const candidates = [];
        this
            .annotations
            .forEach(a => {
            var _a, _b, _c, _d;
            const xOk = ((_a = a.rect) === null || _a === void 0 ? void 0 : _a.x1) <= e.offsetX && ((_b = a.rect) === null || _b === void 0 ? void 0 : _b.x2) >= e.offsetX;
            const yOk = ((_c = a.rect) === null || _c === void 0 ? void 0 : _c.y1) <= e.offsetY && ((_d = a.rect) === null || _d === void 0 ? void 0 : _d.y2) >= e.offsetY;
            if (xOk && yOk && a.id) {
                candidates.push(a);
            }
            else if (a.overRoot) {
                setTimeout(() => a.overRoot = false, 100);
            }
        });
        if (candidates.length > 0) {
            let winner = candidates[0];
            candidates.forEach(x => {
                if (Math.abs(x.rect.x2 - x.rect.x1) < Math.abs(winner.rect.x2 - winner.rect.x1)) {
                    winner = x;
                }
            });
            if (winner != this.annotation) {
                var regionOffset = (winner.rect.x2 - winner.rect.x1) / 2 -
                    (e.offsetX - ((_a = winner.rect) === null || _a === void 0 ? void 0 : _a.x1));
                this.offset = this.getPopupLocation(e, 100 + regionOffset);
                winner.overRoot = true;
                winner.overPopup = false;
                this.annotation = winner;
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
    }
    getPopupLocation(e, xAdj = 0, yAdj = 0) {
        const scaleY = this.scales[AXIS_Y_LEFT];
        var rect = this.nativeControl.canvas.getBoundingClientRect();
        const maxY = scaleY.bottom;
        return {
            left: e.clientX,
            top: maxY + rect.y + 5 + yAdj,
        };
    }
    onEditAnnotation() {
        this.offset.left = Math.max(this.MIN_LEFT_X, this.offset.left /* - 100*/);
        this.annotation.overRoot = false;
        this.annotation.overPopup = false;
        this.showEditAnnot = true;
    }
    onEscPressed(_) {
        this.showAddAnnot = this.showEditAnnot = false;
    }
}
AnnotationDispatcherComponent.ɵfac = function AnnotationDispatcherComponent_Factory(t) { return new (t || AnnotationDispatcherComponent)(ɵɵdirectiveInject(ChartStore), ɵɵdirectiveInject(TimeRangeStore)); };
AnnotationDispatcherComponent.ɵcmp = ɵɵdefineComponent({ type: AnnotationDispatcherComponent, selectors: [["annotation-dispatcher"]], hostBindings: function AnnotationDispatcherComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown.escape", function AnnotationDispatcherComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscPressed($event); }, false, ɵɵresolveDocument);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 12, consts: [[3, "visible", "offset", "shadow", "visibleChange"], [3, "epochStart", "epochEnd", "close", 4, "ngIf"], [3, "annotation", "close", 4, "ngIf"], [3, "offset", "visible", "shadow"], [3, "annotation", "edit", 4, "ngIf"], [3, "epochStart", "epochEnd", "close"], [3, "annotation", "close"], [3, "annotation", "edit"]], template: function AnnotationDispatcherComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ed-popup", 0);
        ɵɵlistener("visibleChange", function AnnotationDispatcherComponent_Template_ed_popup_visibleChange_0_listener($event) { return ctx.showAddAnnot = $event; });
        ɵɵtemplate(1, AnnotationDispatcherComponent_edit_annotation_1_Template, 1, 2, "edit-annotation", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "ed-popup", 0);
        ɵɵlistener("visibleChange", function AnnotationDispatcherComponent_Template_ed_popup_visibleChange_2_listener($event) { return ctx.showEditAnnot = $event; });
        ɵɵtemplate(3, AnnotationDispatcherComponent_edit_annotation_3_Template, 1, 1, "edit-annotation", 2);
        ɵɵelementEnd();
        ɵɵelementStart(4, "ed-popup", 3);
        ɵɵtemplate(5, AnnotationDispatcherComponent_annotation_hint_5_Template, 1, 1, "annotation-hint", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("visible", ctx.showAddAnnot)("offset", ctx.offset)("shadow", true);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showAddAnnot);
        ɵɵadvance(1);
        ɵɵproperty("visible", ctx.showEditAnnot)("offset", ctx.offset)("shadow", true);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showEditAnnot);
        ɵɵadvance(1);
        ɵɵproperty("offset", ctx.offset)("visible", ctx.showViewAnnot)("shadow", true);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showViewAnnot);
    } }, directives: [PopupComponent, NgIf, EditAnnotationComponent, AnnotationHintComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AnnotationDispatcherComponent, [{
        type: Component,
        args: [{
                selector: 'annotation-dispatcher',
                templateUrl: './annotations.html'
            }]
    }], function () { return [{ type: ChartStore }, { type: TimeRangeStore }]; }, { onEscPressed: [{
            type: HostListener,
            args: ['document:keydown.escape', ['$event']]
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
const _c0$3 = function (a0) { return { "hidden": a0 }; };
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
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0$3, ds_r5.hidden));
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
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0$3, ds_r23.hidden));
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
        AlertQueryEditorComponent,
        AlertQueryParamPickerComponent,
        AlertHistoryEditorComponent,
        AlertNotificationsEditorComponent,
        AlertHandleComponent,
        AnnotationDispatcherComponent,
        EditAnnotationComponent,
        AnnotationHintComponent], imports: [CommonModule,
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
ɵɵsetComponentScope(ChartComponent, [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, UIChart, DialogActionsComponent, DialogComponent, DropDownComponent, DropDownValueTemplate, DropDownSelectedValueTemplate, PopupComponent, ContextMenuComponent, HierarchicalDropDownComponent, HintDirective, ErrorHintDirective, AutoCompleteComponent, PreferencesComponent, EmptyListComponent, InfoBoxComponent, ProgressComponent, FilterBoxComponent, TextBoxComponent, TextBoxValidationTemplate, CheckBoxComponent, AutoFocusDirective, TagBoxComponent, TextAreaComponent, AvatarComponent, GridComponent, ColumnComponent, DeleteColumnComponent, SlideDownComponent, TabStripComponent, TabComponent, TabTitleTemplate, TabContentTemplate, SideTabStripComponent, LoadOrErrorComponent, ErrorPopupComponent, NoteComponent, ModuleLoaderComponent, UserPickerComponent, TeamPickerComponent, PermissionPickerComponent, PermissionRulePickerComponent, PermissionIconComponent, TagPickerComponent, TimeRangePickerComponent, PluginPickerComponent, ColorPickerComponent, AutoCompletePickerComponent, FolderPickerComponent, PaletteEditorComponent, ColorCircleComponent, IconComponent, LabelIconComponent, RemoveHostDirective, PageComponent, PageHeaderComponent, PageTitleComponent, PageTabsNavigationComponent, PageDropdownNavigationComponent, TagComponent, DashboardExplorerComponent, DashboardExplorerDeleterComponent, DashboardExplorerMoverComponent, CardsLayoutSwitcherComponent, JsonExplorerComponent, GeneralEditorComponent, MetricsEditorComponent, MetricsDesignerAnchorDirective, MetricsInspectorComponent, PerfectScrollbarComponent, PerfectScrollbarDirective, ChartComponent,
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
    AnnotationHintComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartEditorComponent, ChartWidgetModule };
//# sourceMappingURL=chart.js.map
