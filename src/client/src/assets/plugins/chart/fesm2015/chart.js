import { ɵɵdefineComponent, ɵɵtext, ɵsetClassMetadata, Component, ɵɵdirectiveInject, Inject, ɵɵelementStart, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵɵelement, ɵɵtemplate, ɵɵinject, ɵɵdefineInjectable, Injectable, EventEmitter, ɵɵProvidersFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { CheckBoxComponent, TabStripComponent, TabComponent, TabContentTemplate, EdUilibModule } from 'uilib';
import { NgControlStatus, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Moment, PluginActivator, DataSourceService, TimeRangeStore, EdCommonModule } from 'common';
import { UIChart, ChartModule } from 'primeng';
import { tap, mergeMap, finalize } from 'rxjs/operators';

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
        this.show = true;
        console.log();
    }
    get legend() {
        var _a, _b;
        return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.legend;
    }
    ngOnInit() {
        console.log('create LegendEditorComponent');
    }
    ngOnDestroy() {
        console.log('detroy LegendEditorComponent');
    }
    onSelected() {
        console.log(this.legend);
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

class OptionsProvider {
    static getOptions() {
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

class ChartComponent {
    constructor(dataProvider) {
        this.dataProvider = dataProvider;
        this.plugins = [new TrackballDrawerPlugin()];
        this
            .dataProvider
            .data$
            .subscribe(d => this.data = d);
        this.options = OptionsProvider.getOptions();
    }
    ngOnDestroy() {
        this.dataProvider.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(ɵɵdirectiveInject(DataProvider)); };
ChartComponent.ɵcmp = ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], features: [ɵɵProvidersFeature([
            DataProvider,
            DataConverter,
            DisplayManager,
        ])], decls: 1, vars: 3, consts: [["type", "line", "height", "100%", 3, "data", "options", "plugins"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "p-chart", 0);
    } if (rf & 2) {
        ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
    } }, directives: [UIChart], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                providers: [
                    DataProvider,
                    DataConverter,
                    DisplayManager,
                ],
                template: `
    <p-chart 
      type="line"
      [data]="data"
      [options]="options"
      [plugins]="plugins"
      height="100%">
    </p-chart>
  `
            }]
    }], function () { return [{ type: DataProvider }]; }, null); })();

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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent,
        ChartEditorComponent,
        GeneralEditorComponent,
        MetricsEditorComponent,
        AxesEditorComponent,
        LegendEditorComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule,
        EdCommonModule,
        EdUilibModule], exports: [ChartComponent,
        ChartEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ChartComponent,
                    ChartEditorComponent,
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
                ],
                exports: [
                    ChartComponent,
                    ChartEditorComponent
                ]
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
