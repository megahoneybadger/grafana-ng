import { ɵɵdefineComponent, ɵɵtext, ɵsetClassMetadata, Component, ɵɵdirectiveInject, Inject, ɵɵelementStart, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵɵelement, ɵɵtemplate, ɵɵinject, ɵɵdefineInjectable, Injectable, EventEmitter, ɵɵdefineDirective, Directive, ɵɵnextContext, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵpureFunction1, ɵɵstyleProp, ɵɵInheritDefinitionFeature, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, NgIf, NgStyle, NgForOf, NgClass, CommonModule } from '@angular/common';
import { CheckBoxComponent, TabStripComponent, TabComponent, TabContentTemplate, FadeInOutAnimation, EdUilibModule } from 'uilib';
import { NgControlStatus, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Moment, PluginActivator, DataSourceService, TimeRangeStore, PANEL_TOKEN as PANEL_TOKEN$1, EdCommonModule } from 'common';
import { PerfectScrollbarComponent, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UIChart, ChartModule } from 'primeng';
import { tap, mergeMap, finalize } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

class GeneralEditorComponent {
    ngOnInit() {
        console.log('create GeneralEditorComponent');
    }
    ngOnDestroy() {
        console.log('detroy GeneralEditorComponent');
    }
}
GeneralEditorComponent.ɵfac = function GeneralEditorComponent_Factory(t) { return new (t || GeneralEditorComponent)(); };
GeneralEditorComponent.ɵcmp = ɵɵdefineComponent({ type: GeneralEditorComponent, selectors: [["editor-general"]], decls: 1, vars: 0, template: function GeneralEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0, "general will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeneralEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-general',
                templateUrl: './general.html'
            }]
    }], null, null); })();

const PANEL_TOKEN = "panel";

class MetricsEditorComponent {
    constructor(panel) {
        this.panel = panel;
    }
    ngOnInit() {
        console.log('create MetricsComponent');
        console.log(this.panel);
    }
    ngOnDestroy() {
        console.log('detroy MetricsComponent');
    }
}
MetricsEditorComponent.ɵfac = function MetricsEditorComponent_Factory(t) { return new (t || MetricsEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
MetricsEditorComponent.ɵcmp = ɵɵdefineComponent({ type: MetricsEditorComponent, selectors: [["editor-metrics"]], decls: 1, vars: 0, template: function MetricsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0, "metrics will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MetricsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-metrics',
                templateUrl: './metrics.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class AxesEditorComponent {
    ngOnInit() {
        console.log('create AxesEditorComponent');
    }
    ngOnDestroy() {
        console.log('detroy AxesEditorComponent');
    }
}
AxesEditorComponent.ɵfac = function AxesEditorComponent_Factory(t) { return new (t || AxesEditorComponent)(); };
AxesEditorComponent.ɵcmp = ɵɵdefineComponent({ type: AxesEditorComponent, selectors: [["editor-axes"]], decls: 1, vars: 0, template: function AxesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0, "axes will be here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxesEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axes',
                templateUrl: './axes.html'
            }]
    }], null, null); })();

class LegendEditorComponent {
    constructor(panel) {
        this.panel = panel;
    }
    get legend() {
        var _a, _b;
        return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.legend;
    }
}
LegendEditorComponent.ɵfac = function LegendEditorComponent_Factory(t) { return new (t || LegendEditorComponent)(ɵɵdirectiveInject(PANEL_TOKEN)); };
LegendEditorComponent.ɵcmp = ɵɵdefineComponent({ type: LegendEditorComponent, selectors: [["editor-legend"]], decls: 22, vars: 10, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "7", "label", "Show", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "As Table", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "To the right", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["labelWidth", "4", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Avg", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Current", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Total", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only nulls", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only zeros", 3, "ngModel", "ngModelChange"]], template: function LegendEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "div", 0);
        ɵɵelementStart(18, "h5", 1);
        ɵɵtext(19, "Hide series");
        ɵɵelementEnd();
        ɵɵelementStart(20, "ed-checkbox", 11);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_20_listener($event) { return ctx.legend.hideOnlyNulls = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(21, "ed-checkbox", 12);
        ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.legend.hideOnlyZeroes = $event; });
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
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.legend.hideOnlyNulls);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.legend.hideOnlyZeroes);
    } }, directives: [CheckBoxComponent, NgControlStatus, NgModel], encapsulation: 2 });
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
    ɵɵtext(0, " display will be here ");
} }
function ChartEditorComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " alert will be here ");
} }
function ChartEditorComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " time range will be here ");
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
    } }, directives: [TabStripComponent, NgControlStatus, NgModel, TabComponent, TabContentTemplate, GeneralEditorComponent, MetricsEditorComponent, AxesEditorComponent, LegendEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartEditorComponent, [{
        type: Component,
        args: [{
                selector: 'widget-editor',
                templateUrl: './editor.html'
            }]
    }], function () { return [{ type: Router }, { type: ActivatedRoute }, { type: Location }]; }, null); })();

class PixelHelper {
    static alignPixel(chart, pixel, width) {
        var devicePixelRatio = chart.currentDevicePixelRatio;
        var halfWidth = width / 2;
        return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    }
    ;
}

class TrackballDrawerPlugin {
    get id() {
        return TrackballDrawerPlugin.ID;
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
TrackballDrawerPlugin.ID = "trackball";

class ColorHelper {
    static getColor(ds) {
        const color = this.palette[ds.index % this.palette.length];
        return this.hexToRgb(color);
    }
    static getColorAsArgbFunc(ds, opacity = 1) {
        const color = this.getColor(ds);
        return `rgba(${color.r},${color.g},${color.b}, ${opacity})`;
    }
    static hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    static parse(input) {
        var arr = [];
        if (input.substr(0, 1) == "#") {
            var collen = (input.length - 1) / 3;
            var fact = [17, 1, 0.062272][collen - 1];
            arr = [
                Math.round(parseInt(input.substr(1, collen), 16) * fact),
                Math.round(parseInt(input.substr(1 + collen, collen), 16) * fact),
                Math.round(parseInt(input.substr(1 + 2 * collen, collen), 16) * fact)
            ];
        }
        else {
            arr = input.split("(")[1].split(")")[0].split(",").map(Math.round);
        }
        return {
            r: arr[0],
            g: arr[1],
            b: arr[2]
        };
    }
    static rgbToHex(e) {
        const c = ColorHelper.parse(e);
        const r = c.r.toString(16).padStart(2, "0");
        const g = c.g.toString(16).padStart(2, "0");
        const b = c.b.toString(16).padStart(2, "0");
        return `#${r}${g}${b}`;
    }
}
ColorHelper.palette = [
    "7eb26d",
    "cca300",
    "6ed0e0",
    "EF843C",
    "E24D42",
    "1F78C1",
    "BA43A9",
    "705DA0",
    "508642",
    "CCA300",
    "447EBC",
    "C15C17",
    "890F02",
    "0A437C",
    "6D1F62",
    "584477",
    "B7DBAB",
    "F4D598",
    "70DBED",
    "F9BA8F",
    "F29191",
    "82B5D8",
    "E5A8E2",
    "AEA2E0",
    "629E51",
    "E5AC0E",
    "64B0C8",
    "E0752D",
    "BF1B00",
    "0A50A1",
    "962D82",
    "614D93",
    "9AC48A",
    "F2C96D",
    "65C5DB",
    "F9934E",
    "5195CE",
    "D683CE",
    "806EB7",
    "3F6833",
    "967302",
    "2F575E",
    "99440A",
    "58140C",
    "052B51",
    "511749",
    "3F2B5B",
    "E0F9D7",
    "FCEACA",
    "CFFAFF",
    "F9E2D2",
    "FCE2DE",
    "BADFF4",
    "F9D9F9",
    "DEDAF7",
    "EA6460"
];

class DisplayManager {
    constructor(panel) {
        this.panel = panel;
    }
    get display() {
        return this.panel.widget.display;
    }
    setup(ds) {
        //this.setupSecondaryYAxis();					
        this.setupLines(ds);
        this.setupPoints(ds);
        this.setupNullValue(ds);
        //this.chart.options.scales.yAxes[ 0 ].stacked = this.chart.widget.display.stack;
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
        // ds.yAxisID = ( 1 == this.getYAxis( ds ) ) ? 'A': 'B';
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
        switch (parseInt(this.display.nullValue)) {
            // case CartesianChart.NullValue.Connected:
            // 	this.chart.options.spanGaps = true;
            // 	ds.data.forEach( p => p.y = p.isNull ? null : p.y );
            // 	break;
            // case CartesianChart.NullValue.Null:
            // 	this.chart.options.spanGaps = false;
            // 	ds.data.forEach( p => p.y = p.isNull ? null : p.y );
            // 	break;
            // case CartesianChart.NullValue.NullAsZero:
            // 	this.chart.options.spanGaps = false;
            // 	ds.data.forEach( p => p.y = p.isNull ? 0 : p.y );
            // 	break;
        }
    }
    setupOverrides() {
        // const needSecondaryYAxis = AxesManager.needSecondaryYAxis( this.chart.widget );
        // const actualSecondaryYAxisUsers = this
        // 	.datasets
        // 	.filter( x => x.yAxisID == 'B' )
        // 	.length
        // const yAxesCount = this.chart.options.scales.yAxes.length;
        // if( 2 == yAxesCount && !needSecondaryYAxis ){
        // 	this.chart.options.scales.yAxes.splice( 1, 1 );
        // } else if( /*1 == yAxesCount && needSecondaryYAxis*/ actualSecondaryYAxisUsers != needSecondaryYAxis ){
        // 	this.chart.destroy();
        // 	this.chart.needRebuild.emit();
        // 	this.chart = undefined;
        // 	return;
        // }
        // this.datasets.forEach(x => this.setup(x));
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
        const defaultColor = ColorHelper.getColorAsArgbFunc(ds, opacity);
        const useOverride = (o && undefined != o.color);
        let overrideColor;
        if (useOverride) {
            var color = ColorHelper.parse(o.color);
            overrideColor = `rgba(${color.r},${color.g},${color.b},${opacity})`;
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
        return this
            .display
            .overrides
            .find(x => x.alias && new RegExp(x.alias).test(ds.label));
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
            .pipe(tap(_ => this.request = ''), mergeMap(_ => this.pluginActivator.createDataSourceMetricsBuilder(panel)), mergeMap(mb => mb.build(this.metrics, time.range)))
            .subscribe(x => this.pull(x));
    }
    get metrics() {
        var _a, _b;
        return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.metrics;
    }
    destroy() {
        var _a;
        (_a = this.timeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
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
                .proxy(6, request)
                .pipe(finalize(() => this.panel.loading = false))
                .subscribe(x => this.onData(x), e => this.onError(e.error));
        }
    }
    onData(x) {
        this.data$.emit({
            datasets: this.converter.toDataSets(x)
        });
    }
    onError(err) {
        // 	this.chart.data.datasets = []
        //  this.chart.update();
        //  this.chart.widget.error = err.details;
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

class TooltipBuilder {
    static build(comp) {
        Chart.Tooltip.positioners.custom = function (elements, eventPosition) {
            /** @type {Chart.Tooltip} */
            var tooltip = this;
            return {
                x: eventPosition.x,
                y: eventPosition.y
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
            custom: (model) => TooltipBuilder.createCustomElement(model, comp)
        };
    }
    static createCustomElement(tooltipModel, comp) {
        var tooltipEl = TooltipBuilder.getRootElement();
        // Hide if no tooltip
        if (tooltipModel.opacity === 0 /*|| chart.showAnnotView*/) {
            tooltipEl.style.opacity = '0';
            return;
        }
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
        }
        else {
            tooltipEl.classList.add('no-transform');
        }
        if (tooltipModel.body) {
            TooltipBuilder.createBody(tooltipModel, comp, tooltipEl);
        }
        TooltipBuilder.setPosition(tooltipModel, comp, tooltipEl);
    }
    static setPosition(tooltipModel, comp, tooltipEl) {
        const chart = comp.control.chart;
        var position = chart
            .canvas
            .getBoundingClientRect();
        const elWidth = document
            .getElementsByClassName(TooltipBuilder.TOOLTIP_SELECTOR)[0]
            .getBoundingClientRect()
            .width;
        const negMargin = (tooltipModel.caretX + elWidth > position.width) ?
            elWidth + 2 * tooltipModel.xPadding : 0;
        tooltipEl.style.opacity = '1';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - negMargin + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
    }
    static createBody(tooltipModel, comp, tooltipEl) {
        const chart = comp.control.chart;
        var titleLines = tooltipModel.title || [];
        var innerHtml = '';
        titleLines.forEach(function (title) {
            const date = Date.parse(title);
            const time = Moment.format(date);
            innerHtml += `<div style="${TooltipBuilder.classGraphTime}">${time}</div>`;
        });
        const parsedBodyLines = TooltipBuilder.sort(tooltipModel, chart);
        parsedBodyLines.forEach(function (body, i) {
            const { seriesName, value, colorFunc } = body;
            let seriesNameEl = `
				<div style="${TooltipBuilder.classSeriesName}">
					<i class="fa fa-minus" style="color:${colorFunc};"></i> ${seriesName}:
				</div>`;
            const w = comp.store.panel.widget;
            const ds = chart
                .data
                .datasets
                .find(x => x.label == seriesName);
            const axis = (ds.yAxisID == 'A') ? w.axes.leftY : w.axes.rightY;
            const decimals = w.legend.decimals ? w.legend.decimals : 1;
            const resValue = AxisUnitHelper.getFormattedValue(value, axis.unit, decimals);
            let valueEl = `<div style="${TooltipBuilder.classSeriesValue}">${resValue}</div>`;
            let item = `
				<div style="display: table-row">
					${seriesNameEl}
					${valueEl}
				</div>`;
            innerHtml += item;
        });
        var tableRoot = tooltipEl.querySelector(`.${TooltipBuilder.TOOLTIP_SELECTOR}`);
        tableRoot.innerHTML = innerHtml;
    }
    static sort(tooltipModel, chart) {
        function getBody(bodyItem) {
            return bodyItem.lines;
        }
        var bodyLines = tooltipModel.body.map(getBody);
        // const sortOrder = +chart
        // 	.widget
        // 	.display
        // 	.tooltipSortOrder;
        const parsedBodyLines = [];
        bodyLines.forEach(function (body, i) {
            var colors = tooltipModel.labelColors[i];
            var color = ColorHelper.parse(colors.backgroundColor);
            var colorFunc = `rgba(${color.r},${color.g},${color.b},1)`;
            let index = body[0].lastIndexOf(':');
            const seriesName = body[0].substring(0, index);
            const value = parseFloat(tooltipModel.dataPoints[i].value);
            parsedBodyLines.push({ seriesName, value, colorFunc });
        });
        // switch( sortOrder ){
        // 	// case CartesianChart.TooltipSortOrder.Increasing:
        // 	// 	parsedBodyLines.sort( (a, b) => a.value - b.value);
        // 	// 	break;
        // 	// case CartesianChart.TooltipSortOrder.Decreasing:
        // 	// 	parsedBodyLines.sort( (a, b) => b.value - a.value);
        // 	// 	break;
        // }
        return parsedBodyLines;
    }
    static getRootElement() {
        var tooltipEl = document.getElementById(TooltipBuilder.ID);
        // Create element on first render
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = TooltipBuilder.ID;
            tooltipEl.innerHTML = `<div style="${TooltipBuilder.classGraphTooltip};	${TooltipBuilder.classGraphanaTooltip}"
																				class='${TooltipBuilder.TOOLTIP_SELECTOR}'></div>`;
            document.body.appendChild(tooltipEl);
        }
        return tooltipEl;
    }
    static get classGraphTooltip() {
        return `
			white-space: nowrap;
			font-size: 12px;
			background-color: #141414;
			color: #d8d9da;`;
    }
    static get classGraphanaTooltip() {
        return `
			position: absolute;
			padding: 10px;
			font-weight: 200;
			border-radius: 5px;
			z-index: 9999;
			max-width: 800px;
			max-height: 600px;
			overflow: hidden;
			line-height: 14px;`;
    }
    static get classGraphTime() {
        return `
			text-align: center;
			position: relative;
			top: -3px;
			padding: .2rem;
			font-weight: 700;
			color: #d8d9da;`;
    }
    static get classSeriesName() {
        return `
			display: table-cell;
			padding: .15rem;
			max-width: 650px;
			text-overflow: ellipsis;
			overflow: hidden;
			font-weight: 400;`;
    }
    static get classSeriesValue() {
        return `
			display: table-cell;
			font-weight: 700;
			padding-left: 15px;
			text-align: right;`;
    }
}
TooltipBuilder.ID = "chartjs-tooltip";
TooltipBuilder.TOOLTIP_SELECTOR = "ed-tooltip";

class OptionsProvider {
    static getOptions(comp) {
        Chart.defaults.global.defaultFontColor = '#e3e3e3';
        Chart.defaults.global.defaultFontFamily = 'Roboto';
        Chart.defaults.global.defaultFontSize = 11;
        const axisYa = {
            id: 'A',
            gridLines: {
                color: 'rgba( 255,255,255, 0.1)',
                zeroLineWidth: 3,
            },
        };
        const axisYb = {
            id: 'B',
            position: 'right'
        };
        return {
            maintainAspectRatio: false,
            animation: false,
            tooltips: TooltipBuilder.build(comp),
            legend: {
                display: false
            },
            spanGaps: true,
            scales: {
                xAxes: [{
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
                    }],
                yAxes: /*!AxesManager.needSecondaryYAxis(widget)*/ true ? [axisYa] : [axisYa, axisYb]
            },
        };
    }
}

class ChartStore {
    constructor(dataProvider, display, panel) {
        this.dataProvider = dataProvider;
        this.display = display;
        this.panel = panel;
        this.widget = new BehaviorSubject(null);
        this.widget$ = this.widget.asObservable();
        this.data = new BehaviorSubject(null);
        this.data$ = this.data.asObservable();
        this.control_ = new BehaviorSubject(null);
        this.control$ = this.control_.asObservable();
        dataProvider
            .data$
            .subscribe(x => { var _a; return this.data.next((_a = x === null || x === void 0 ? void 0 : x.datasets) !== null && _a !== void 0 ? _a : []); });
        this.widget.next(panel.widget);
    }
    get control() {
        return this.control_.value;
    }
    set control(ctrl) {
        this.control_.next(ctrl);
    }
    destroy() {
        this.dataProvider.destroy();
    }
}
ChartStore.ɵfac = function ChartStore_Factory(t) { return new (t || ChartStore)(ɵɵinject(DataProvider), ɵɵinject(DisplayManager), ɵɵinject(PANEL_TOKEN$1)); };
ChartStore.ɵprov = ɵɵdefineInjectable({ token: ChartStore, factory: ChartStore.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartStore, [{
        type: Injectable
    }], function () { return [{ type: DataProvider }, { type: DisplayManager }, { type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN$1]
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
        this.ctrlSubs = store
            .control$
            .subscribe(x => {
            this.control = x;
            if (x) {
                this.onControlReady();
            }
        });
    }
    get datasets() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.datasets;
    }
    get display() {
        return this.store.display;
    }
    onWidgetReady() {
    }
    onControlReady() {
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.dataSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.widgetSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.ctrlSubs) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
}
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(ɵɵdirectiveInject(ChartStore)); };
BaseChartComponent.ɵdir = ɵɵdefineDirective({ type: BaseChartComponent });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseChartComponent, [{
        type: Directive
    }], function () { return [{ type: ChartStore }]; }, null); })();

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
    ɵɵproperty("ngForOf", ctx_r3.datasets);
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
    ɵɵproperty("ngStyle", ctx_r0.widthStyle);
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
    ɵɵproperty("ngForOf", ctx_r16.datasets);
} }
function ChartLegendComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelementStart(1, "perfect-scrollbar");
    ɵɵtemplate(2, ChartLegendComponent_ng_template_2_div_2_Template, 9, 3, "div", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r2.widthStyle);
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
    get widthStyle() {
        return {};
        // return { 
        // 	'width': this.widget.width && this.widget.right ? this.widget.width + 'px' : '100%'
        // }
    }
    axis(ds) {
        const x = this.widget.axes;
        //return ( ds.yAxisID == 'A' ) ?x.leftY :x.rightY
        return x.leftY;
    }
    decimals(ds) {
        return this.legend.decimals ? this.legend.decimals : 1;
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
        this.control.refresh();
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
ChartLegendComponent.ɵcmp = ɵɵdefineComponent({ type: ChartLegendComponent, selectors: [["chart-legend"]], features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "legend__top-wrapper"], ["class", "legend__bottom", 3, "ngStyle", 4, "ngIf", "ngIfElse"], ["legendAsTable", ""], [1, "legend__bottom", 3, "ngStyle"], [1, "legend__scroller-cont"], ["class", "legend__series-wrapper", 4, "ngIf"], [1, "legend__scroller-padding"], [1, "legend__series-wrapper"], ["class", "legend__series", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "legend__series", 3, "ngClass", "click"], [1, "legend__icon"], [1, "fa", "fa-minus", "pointer"], [1, "legend__alias", "pointer", 3, "title"], ["class", "legend__value min", 4, "ngIf"], ["class", "legend__value max", 4, "ngIf"], ["class", "legend__value avg", 4, "ngIf"], ["class", "legend__value current", 4, "ngIf"], [1, "legend__value", "min"], [1, "legend__value", "max"], [1, "legend__value", "avg"], [1, "legend__value", "current"], [1, "legend__bottom-table", 3, "ngStyle"], ["class", "legend__scroller-cont", 4, "ngIf"], [1, "legend__series-wrapper", "legend__full-width"], [1, "legend__full-width"], [4, "ngIf"], ["class", "legend__series", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "text-align", "left"], ["class", "pointer", 4, "ngIf"], [1, "pointer"], [1, "legend__series", 3, "ngClass"], [3, "click"], ["class", "legend__value", 4, "ngIf"], [1, "legend__value"]], template: function ChartLegendComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, ChartLegendComponent_div_1_Template, 5, 2, "div", 1);
        ɵɵtemplate(2, ChartLegendComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(3);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.legend.table)("ngIfElse", _r1);
    } }, directives: [NgIf, NgStyle, PerfectScrollbarComponent, NgForOf, NgClass], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.legend__top-wrapper[_ngcontent-%COMP%]{display:flex;flex-grow:1;max-height:100%;min-height:0;overflow:hidden;position:relative;width:100%}.legend__bottom[_ngcontent-%COMP%]{min-width:0;padding-bottom:5px}.legend__scroller-cont[_ngcontent-%COMP%]{display:flex;flex-direction:row}.legend__scroller-padding[_ngcontent-%COMP%]{min-width:10px}.legend__series-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;min-width:0}.legend__series[_ngcontent-%COMP%]{min-width:0;padding-left:10px;white-space:nowrap}.legend__series--right-y[_ngcontent-%COMP%]{float:right}.legend__series.hidden[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%], .legend__series.hidden[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%]{color:#969696}.legend__alias[_ngcontent-%COMP%], .legend__icon[_ngcontent-%COMP%], .legend__value[_ngcontent-%COMP%]{cursor:pointer;display:inline;font-size:85%;text-align:left;white-space:nowrap}.legend__alias.current[_ngcontent-%COMP%]:before, .legend__icon.current[_ngcontent-%COMP%]:before, .legend__value.current[_ngcontent-%COMP%]:before{content:\"Current: \"}.legend__alias.max[_ngcontent-%COMP%]:before, .legend__icon.max[_ngcontent-%COMP%]:before, .legend__value.max[_ngcontent-%COMP%]:before{content:\"Max: \"}.legend__alias.min[_ngcontent-%COMP%]:before, .legend__icon.min[_ngcontent-%COMP%]:before, .legend__value.min[_ngcontent-%COMP%]:before{content:\"Min: \"}.legend__alias.total[_ngcontent-%COMP%]:before, .legend__icon.total[_ngcontent-%COMP%]:before, .legend__value.total[_ngcontent-%COMP%]:before{content:\"Total: \"}.legend__alias.avg[_ngcontent-%COMP%]:before, .legend__icon.avg[_ngcontent-%COMP%]:before, .legend__value.avg[_ngcontent-%COMP%]:before{content:\"Avg: \"}.legend__icon[_ngcontent-%COMP%]{padding-right:4px;position:relative;top:1px}.legend__icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:135%;position:relative;top:1px}.legend__value[_ngcontent-%COMP%]{padding-left:6px}.legend__bottom-table[_ngcontent-%COMP%]{padding-bottom:1px;padding-left:5px;padding-right:5px;width:100%}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series[_ngcontent-%COMP%]{display:table-row;float:none;padding-left:0}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series--right-y[_ngcontent-%COMP%]{float:none}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series--right-y[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%]:after{color:#8e8e8e;content:\"(right-y)\";padding:0 5px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:table-cell;float:none;padding:2px 10px;text-align:right;white-space:nowrap}.legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%]{padding:0;top:0;width:5px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{top:3px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%]{padding-left:15px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%]{max-width:650px;overflow:hidden;padding-left:7px;text-align:left;text-overflow:ellipsis;width:95%}.legend__bottom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#33b5e5;font-size:85%;font-weight:700;padding:0 10px 1px 0;text-align:right;white-space:nowrap}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series[_ngcontent-%COMP%]:nth-child(odd){background:#262628}.legend__full-width[_ngcontent-%COMP%]{width:100%}"], data: { animation: [FadeInOutAnimation] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartLegendComponent, [{
        type: Component,
        args: [{
                selector: 'chart-legend',
                templateUrl: './legend.html',
                styleUrls: ['./legend.scss'],
                animations: [FadeInOutAnimation],
            }]
    }], function () { return [{ type: ChartStore }]; }, null); })();

function ChartComponent_chart_legend_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "chart-legend", 7);
} }
function ChartComponent_chart_legend_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "chart-legend", 8);
} }
class ChartComponent extends BaseChartComponent {
    constructor(store) {
        super(store);
        this.plugins = [new TrackballDrawerPlugin()];
        this.options = OptionsProvider.getOptions(this);
    }
    get legend() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
    }
    ngAfterViewInit() {
        this.store.control = this.ctrlChart;
    }
    ngOnDestroy() {
        this.store.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(ɵɵdirectiveInject(ChartStore)); };
ChartComponent.ɵcmp = ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(UIChart, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ctrlChart = _t.first);
    } }, features: [ɵɵProvidersFeature([
            DataProvider,
            DataConverter,
            DisplayManager,
            ChartStore
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
    } }, directives: [UIChart, NgIf, ChartLegendComponent], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.chart__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;min-height:0;position:relative}.chart__right-legend-cont[_ngcontent-%COMP%]{cursor:crosshair;display:flex;flex:1;min-height:0;min-width:0}.chart__canvas-cont[_ngcontent-%COMP%]{flex:1;min-height:0;min-width:0;padding-left:5px}.chart__legend-bottom[_ngcontent-%COMP%]{flex:0 1 auto;flex-wrap:wrap;max-height:35%;overflow:hidden;padding-top:6px;position:relative}.chart__legend-right[_ngcontent-%COMP%]{flex:0 1 10px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                templateUrl: './chart.html',
                styleUrls: ['./chart.scss'],
                providers: [
                    DataProvider,
                    DataConverter,
                    DisplayManager,
                    ChartStore
                ]
            }]
    }], function () { return [{ type: ChartStore }]; }, { ctrlChart: [{
            type: ViewChild,
            args: [UIChart]
        }] }); })();

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
        GeneralEditorComponent,
        MetricsEditorComponent,
        AxesEditorComponent,
        LegendEditorComponent], imports: [CommonModule,
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
                    GeneralEditorComponent,
                    MetricsEditorComponent,
                    AxesEditorComponent,
                    LegendEditorComponent,
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

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartEditorComponent, ChartWidgetModule };
//# sourceMappingURL=chart.js.map
