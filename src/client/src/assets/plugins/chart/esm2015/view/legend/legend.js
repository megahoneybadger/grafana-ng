import { Component, ViewEncapsulation } from '@angular/core';
import { FadeInOutAnimation } from 'uilib';
import { BaseChartComponent } from '../../base/chart-base';
import { AXIS_Y_LEFT } from '../../chart.m';
import { AxisUnitHelper } from '../../edit/axes/y-axis/unit-helper';
import * as i0 from "@angular/core";
import * as i1 from "../../base/chart.store";
import * as i2 from "@angular/common";
import * as i3 from "ngx-perfect-scrollbar";
function ChartLegendComponent_div_1_div_3_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.min(ds_r5));
} }
function ChartLegendComponent_div_1_div_3_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.max(ds_r5));
} }
function ChartLegendComponent_div_1_div_3_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r8.avg(ds_r5));
} }
function ChartLegendComponent_div_1_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9.current(ds_r5));
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
function ChartLegendComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function ChartLegendComponent_div_1_div_3_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r15); const ds_r5 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onSeriesClicked(ds_r5, $event); });
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelement(2, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 12);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ChartLegendComponent_div_1_div_3_div_1_div_5_Template, 2, 1, "div", 13);
    i0.ɵɵtemplate(6, ChartLegendComponent_div_1_div_3_div_1_div_6_Template, 2, 1, "div", 14);
    i0.ɵɵtemplate(7, ChartLegendComponent_div_1_div_3_div_1_div_7_Template, 2, 1, "div", 15);
    i0.ɵɵtemplate(8, ChartLegendComponent_div_1_div_3_div_1_div_8_Template, 2, 1, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ds_r5.hidden));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r4.color(ds_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ds_r5.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ds_r5.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.legend.min);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.legend.max);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.legend.avg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.legend.current);
} }
function ChartLegendComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, ChartLegendComponent_div_1_div_3_div_1_Template, 9, 11, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@fadeInOut", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.filteredDatasets);
} }
function ChartLegendComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "perfect-scrollbar");
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtemplate(3, ChartLegendComponent_div_1_div_3_Template, 2, 2, "div", 5);
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.datasets == null ? null : ctx_r0.datasets.length);
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1, "min");
    i0.ɵɵelementEnd();
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1, "max");
    i0.ɵɵelementEnd();
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1, "avg");
    i0.ɵɵelementEnd();
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1, "current");
    i0.ɵɵelementEnd();
} }
function ChartLegendComponent_ng_template_2_div_2_thead_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelement(2, "th", 27);
    i0.ɵɵtemplate(3, ChartLegendComponent_ng_template_2_div_2_thead_5_th_3_Template, 2, 0, "th", 28);
    i0.ɵɵtemplate(4, ChartLegendComponent_ng_template_2_div_2_thead_5_th_4_Template, 2, 0, "th", 28);
    i0.ɵɵtemplate(5, ChartLegendComponent_ng_template_2_div_2_thead_5_th_5_Template, 2, 0, "th", 28);
    i0.ɵɵtemplate(6, ChartLegendComponent_ng_template_2_div_2_thead_5_th_6_Template, 2, 0, "th", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r17.legend.min);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.legend.max);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.legend.avg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.legend.current);
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r24.min(ds_r23));
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r25 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r25.max(ds_r23));
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r26.avg(ds_r23));
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r27.current(ds_r23));
} }
function ChartLegendComponent_ng_template_2_div_2_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 30);
    i0.ɵɵelementStart(1, "td", 31);
    i0.ɵɵlistener("click", function ChartLegendComponent_ng_template_2_div_2_tr_7_Template_td_click_1_listener($event) { i0.ɵɵrestoreView(_r33); const ds_r23 = ctx.$implicit; const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.onSeriesClicked(ds_r23, $event); });
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵelement(3, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ChartLegendComponent_ng_template_2_div_2_tr_7_td_6_Template, 2, 1, "td", 32);
    i0.ɵɵtemplate(7, ChartLegendComponent_ng_template_2_div_2_tr_7_td_7_Template, 2, 1, "td", 32);
    i0.ɵɵtemplate(8, ChartLegendComponent_ng_template_2_div_2_tr_7_td_8_Template, 2, 1, "td", 32);
    i0.ɵɵtemplate(9, ChartLegendComponent_ng_template_2_div_2_tr_7_td_9_Template, 2, 1, "td", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ds_r23 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ds_r23.hidden));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("color", ctx_r18.color(ds_r23));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ds_r23.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ds_r23.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.legend.min);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.legend.max);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.legend.avg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.legend.current);
} }
function ChartLegendComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵelementStart(2, "table", 24);
    i0.ɵɵelementStart(3, "colgroup");
    i0.ɵɵelement(4, "col", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ChartLegendComponent_ng_template_2_div_2_thead_5_Template, 7, 4, "thead", 25);
    i0.ɵɵelementStart(6, "tbody");
    i0.ɵɵtemplate(7, ChartLegendComponent_ng_template_2_div_2_tr_7_Template, 10, 11, "tr", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@fadeInOut", undefined);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r16.datasets && ctx_r16.datasets.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r16.filteredDatasets);
} }
function ChartLegendComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "perfect-scrollbar");
    i0.ɵɵtemplate(2, ChartLegendComponent_ng_template_2_div_2_Template, 9, 3, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.datasets == null ? null : ctx_r2.datasets.length);
} }
export class ChartLegendComponent extends BaseChartComponent {
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
ChartLegendComponent.ɵfac = function ChartLegendComponent_Factory(t) { return new (t || ChartLegendComponent)(i0.ɵɵdirectiveInject(i1.ChartStore)); };
ChartLegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartLegendComponent, selectors: [["chart-legend"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "legend__top-wrapper"], ["class", "legend__bottom", 4, "ngIf", "ngIfElse"], ["legendAsTable", ""], [1, "legend__bottom"], [1, "legend__scroller-cont"], ["class", "legend__series-wrapper", 4, "ngIf"], [1, "legend__scroller-padding"], [1, "legend__series-wrapper"], ["class", "legend__series", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "legend__series", 3, "ngClass", "click"], [1, "legend__icon"], [1, "fa", "fa-minus", "pointer"], [1, "legend__alias", "pointer", 3, "title"], ["class", "legend__value min", 4, "ngIf"], ["class", "legend__value max", 4, "ngIf"], ["class", "legend__value avg", 4, "ngIf"], ["class", "legend__value current", 4, "ngIf"], [1, "legend__value", "min"], [1, "legend__value", "max"], [1, "legend__value", "avg"], [1, "legend__value", "current"], [1, "legend__bottom-table"], ["class", "legend__scroller-cont", 4, "ngIf"], [1, "legend__series-wrapper", "legend__full-width"], [1, "legend__full-width"], [4, "ngIf"], ["class", "legend__series", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "text-align", "left"], ["class", "pointer", 4, "ngIf"], [1, "pointer"], [1, "legend__series", 3, "ngClass"], [3, "click"], ["class", "legend__value", 4, "ngIf"], [1, "legend__value"]], template: function ChartLegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ChartLegendComponent_div_1_Template, 5, 1, "div", 1);
        i0.ɵɵtemplate(2, ChartLegendComponent_ng_template_2_Template, 3, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.legend.table)("ngIfElse", _r1);
    } }, directives: [i2.NgIf, i3.PerfectScrollbarComponent, i2.NgForOf, i2.NgClass], styles: [".hide-text{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height{max-height:0;overflow:hidden}.animate-height--open{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.legend__top-wrapper{display:flex;flex-grow:1;max-height:100%;min-height:0;overflow:hidden;position:relative;width:100%}.legend__bottom{min-width:0;padding-bottom:5px}.legend__scroller-cont{display:flex;flex-direction:row}.legend__scroller-padding{min-width:10px}.legend__series-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;min-width:0}.legend__series{min-width:0;padding-left:10px;white-space:nowrap}.legend__series--right-y{float:right}.legend__series.hidden .legend__alias,.legend__series.hidden .legend__value{color:#969696}.legend__alias,.legend__icon,.legend__value{cursor:pointer;display:inline;font-size:85%;text-align:left;white-space:nowrap}.legend__alias.current:before,.legend__icon.current:before,.legend__value.current:before{content:\"Current: \"}.legend__alias.max:before,.legend__icon.max:before,.legend__value.max:before{content:\"Max: \"}.legend__alias.min:before,.legend__icon.min:before,.legend__value.min:before{content:\"Min: \"}.legend__alias.total:before,.legend__icon.total:before,.legend__value.total:before{content:\"Total: \"}.legend__alias.avg:before,.legend__icon.avg:before,.legend__value.avg:before{content:\"Avg: \"}.legend__icon{padding-right:4px;position:relative;top:1px}.legend__icon .fa{font-size:135%;position:relative;top:1px}.legend__value{padding-left:6px}.legend__bottom-table{padding-bottom:1px;padding-left:5px;padding-right:5px;width:100%}.legend__bottom-table .legend__series{display:table-row;float:none;padding-left:0}.legend__bottom-table .legend__series--right-y{float:none}.legend__bottom-table .legend__series--right-y .legend__alias:after{color:#8e8e8e;content:\"(right-y)\";padding:0 5px}.legend__bottom-table .legend__alias,.legend__bottom-table .legend__icon,.legend__bottom-table .legend__value,.legend__bottom-table td{display:table-cell;float:none;padding:2px 10px;text-align:right;white-space:nowrap}.legend__bottom-table .legend__icon{padding:0;top:0;width:5px}.legend__bottom-table .legend__icon .fa{top:3px}.legend__bottom-table .legend__value{padding-left:15px}.legend__bottom-table .legend__alias{max-width:650px;overflow:hidden;padding-left:7px;text-align:left;text-overflow:ellipsis;width:95%}.legend__bottom-table th{color:#33b5e5;font-size:85%;font-weight:700;padding:0 10px 1px 0;text-align:right;white-space:nowrap}.legend__bottom-table .legend__series:nth-child(odd){background:#262628}.legend__full-width{width:100%}"], encapsulation: 2, data: { animation: [FadeInOutAnimation] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartLegendComponent, [{
        type: Component,
        args: [{
                selector: 'chart-legend',
                templateUrl: './legend.html',
                styleUrls: ['./legend.scss'],
                animations: [FadeInOutAnimation],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9sZWdlbmQvbGVnZW5kLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9sZWdlbmQvbGVnZW5kLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7OztJQ1l4RCwrQkFBa0Q7SUFBQSxZQUFXO0lBQUEsaUJBQU07Ozs7SUFBakIsZUFBVztJQUFYLHVDQUFXOzs7SUFFN0QsK0JBQWtEO0lBQUEsWUFBVztJQUFBLGlCQUFNOzs7O0lBQWpCLGVBQVc7SUFBWCx1Q0FBVzs7O0lBRTdELCtCQUFrRDtJQUFBLFlBQVc7SUFBQSxpQkFBTTs7OztJQUFqQixlQUFXO0lBQVgsdUNBQVc7OztJQUVuRSwrQkFBMEQ7SUFBQSxZQUFlO0lBQUEsaUJBQU07Ozs7SUFBckIsZUFBZTtJQUFmLDJDQUFlOzs7OztJQWYxRSw4QkFHTztJQUZOLDBQQUFxQztJQUUvQiwrQkFDRTtJQUFBLHdCQUFvQztJQUN0QyxpQkFBTTtJQUVOLDZCQUFvRDtJQUFBLFlBQVk7SUFBQSxpQkFBSTtJQUVwRSx3RkFBa0Q7SUFFbEQsd0ZBQWtEO0lBRWxELHdGQUFrRDtJQUV4RCx3RkFBMEQ7SUFFM0QsaUJBQU07Ozs7SUFoQmlDLGtFQUFrQztJQUV4QyxlQUEyQjtJQUEzQiw0Q0FB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RSxDQUFDLGtCQUFrQixDQUFDO2dCQUNoQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhZGVJbk91dEFuaW1hdGlvbiB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZSc7XG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC5zdG9yZSc7XG5pbXBvcnQgeyBBWElTX1lfTEVGVCwgRGF0YVNldCB9IGZyb20gJy4uLy4uL2NoYXJ0Lm0nO1xuaW1wb3J0IHsgQXhpc1VuaXRIZWxwZXIgfSBmcm9tICcuLi8uLi9lZGl0L2F4ZXMveS1heGlzL3VuaXQtaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hhcnQtbGVnZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xlZ2VuZC5odG1sJyxcbiAgc3R5bGVVcmxzOlsgJy4vbGVnZW5kLnNjc3MnIF0sXG5cdGFuaW1hdGlvbnM6IFtGYWRlSW5PdXRBbmltYXRpb25dLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydExlZ2VuZENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG5cbiAgZ2V0IGxlZ2VuZCgpe1xuICAgIHJldHVybiB0aGlzLndpZGdldC5sZWdlbmQ7XG5cdH1cblx0XG5cdGdldCBmaWx0ZXJlZERhdGFzZXRzKCl7XG5cdFx0bGV0IGRhdGFzZXRzID0gdGhpcy5kYXRhc2V0cy5maWx0ZXIoIGRzID0+IGRzLmxlZ2VuZCApO1xuXG5cdFx0aWYoIHRoaXMubGVnZW5kLmhpZGVPbmx5WmVyb2VzICl7XG5cdFx0XHRkYXRhc2V0cyA9IGRhdGFzZXRzLmZpbHRlciggeCA9PiAheC5hbGxaZXJvcyApO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmxlZ2VuZC5oaWRlT25seU51bGxzICl7XG5cdFx0XHRkYXRhc2V0cyA9IGRhdGFzZXRzLmZpbHRlciggeCA9PiAheC5hbGxOdWxscyApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhc2V0cztcblx0fVxuXG4gIGNvbnN0cnVjdG9yKCBzdG9yZTogQ2hhcnRTdG9yZSApIHtcbiAgICBzdXBlciggc3RvcmUgKTtcbiAgfVxuXG4gIGF4aXMoIGRzOiBEYXRhU2V0ICl7XG5cdFx0Y29uc3QgYXhlcyA9IHRoaXMud2lkZ2V0LmF4ZXM7XG4gICAgcmV0dXJuICggZHMueUF4aXNJRCA9PSBBWElTX1lfTEVGVCApID8gYXhlcy5sZWZ0WSA6YXhlcy5yaWdodFk7XG4gIH1cbiAgXG4gIGRlY2ltYWxzKCBkczogRGF0YVNldCApe1xuXHRcdHJldHVybiB0aGlzLmxlZ2VuZC5kZWNpbWFscyA/IHRoaXMubGVnZW5kLmRlY2ltYWxzIDogMDtcblx0fVxuXG4gIHVuaXQoIGRzOiBEYXRhU2V0ICl7XG5cdFx0cmV0dXJuIHRoaXMuYXhpcyggZHMgKS51bml0O1xuICB9XG4gIFxuICBjb2xvciggZHM6IERhdGFTZXQgKXtcbiAgICByZXR1cm4gdGhpc1xuXHRcdCAgLmRpc3BsYXlcblx0XHRcdC5nZXRMaW5lQ29sb3IoIGRzLCAxICk7XG5cdH1cblxuICBtaW4oIGRzOiBEYXRhU2V0ICl7XG5cdFx0cmV0dXJuIEF4aXNVbml0SGVscGVyLmdldEZvcm1hdHRlZFZhbHVlKCBkcy5taW4sIHRoaXMudW5pdCggZHMgKSwgdGhpcy5kZWNpbWFscyggZHMgKSApXG5cdH1cblxuXHRtYXgoIGRzOiBEYXRhU2V0ICl7XG5cdFx0cmV0dXJuIEF4aXNVbml0SGVscGVyLmdldEZvcm1hdHRlZFZhbHVlKCBkcy5tYXgsXHR0aGlzLnVuaXQoIGRzICksIHRoaXMuZGVjaW1hbHMoIGRzICkgKVxuXHR9XG5cblx0YXZnKCBkczogRGF0YVNldCApe1xuXHRcdHJldHVybiBBeGlzVW5pdEhlbHBlci5nZXRGb3JtYXR0ZWRWYWx1ZSggZHMuYXZnLCB0aGlzLnVuaXQoIGRzICksIHRoaXMuZGVjaW1hbHMoIGRzICkgKVxuXHR9XG5cblx0Y3VycmVudCggZHM6IERhdGFTZXQgKXtcblx0XHRyZXR1cm4gQXhpc1VuaXRIZWxwZXIuZ2V0Rm9ybWF0dGVkVmFsdWUoIGRzLmN1cnJlbnQsIHRoaXMudW5pdCggZHMgKSwgdGhpcy5kZWNpbWFscyggZHMgKSApXG5cdH1cblxuXG4gIG9uU2VyaWVzQ2xpY2tlZCggZHM6IERhdGFTZXQsIGU6IGFueSApe1xuICAgIGlmKCBlLmN0cmxLZXkgKXtcblx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBmYWxzZSA9PSBkcy5zZWxlY3RlZCApO1xuXG5cdFx0XHR0aGlzLnRvZ2dsZVNlcmllcyggZHMsIHNlbGVjdGVkICk7XG5cdFx0fSBlbHNle1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoICggdW5kZWZpbmVkID09PSBkcy5zZWxlY3RlZCApIHx8IGZhbHNlID09IGRzLnNlbGVjdGVkICkgP1xuXHRcdFx0XHR0cnVlIDogdW5kZWZpbmVkO1xuXG5cdFx0XHR0aGlzLnRvZ2dsZVNlcmllcyggZHMsIHNlbGVjdGVkICk7XG5cdFxuXHRcdFx0dGhpc1xuXHRcdFx0XHQuZGF0YXNldHNcblx0XHRcdFx0LmZpbHRlciggeCA9PiB4ICE9IGRzIClcblx0XHRcdFx0LmZvckVhY2goIHggPT4gdGhpcy50b2dnbGVTZXJpZXMoIHgsICB0cnVlID09IHNlbGVjdGVkID8gZmFsc2UgOiB1bmRlZmluZWQgKSApO1xuXHRcdH1cblx0XG5cdFx0dGhpcy5jb21wb25lbnQuY29udHJvbC5yZWZyZXNoKCk7XG4gIH1cblxuICB0b2dnbGVTZXJpZXMoIGRzOiBEYXRhU2V0LCBzZWxlY3RlZDogYm9vbGVhbiApe1xuXHRcdGRzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG5cblx0XHRpZiggdW5kZWZpbmVkID09PSBzZWxlY3RlZCApe1xuXHRcdFx0ZGVsZXRlIGRzLmhpZGRlbjtcblx0XHRcdGRlbGV0ZSBkcy5zZWxlY3RlZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZHMuaGlkZGVuID0gIXNlbGVjdGVkO1xuXHRcdH1cblx0fVxuICBcbn1cbiIsIjxkaXYgY2xhc3M9XCJsZWdlbmRfX3RvcC13cmFwcGVyXCI+XG5cblx0PGRpdiAqbmdJZj1cIiFsZWdlbmQudGFibGU7IGVsc2UgbGVnZW5kQXNUYWJsZVwiIGNsYXNzPVwibGVnZW5kX19ib3R0b21cIiAgICA+XG5cdFx0PHBlcmZlY3Qtc2Nyb2xsYmFyPlxuXHRcdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3Njcm9sbGVyLWNvbnRcIiAgPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3Nlcmllcy13cmFwcGVyXCIgW0BmYWRlSW5PdXRdICpuZ0lmPVwiZGF0YXNldHM/Lmxlbmd0aFwiICA+XG5cdFx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgZHMgb2YgZmlsdGVyZWREYXRhc2V0c1wiIGNsYXNzPVwibGVnZW5kX19zZXJpZXNcIlxuXHRcdFx0XHRcdCAoY2xpY2spPVwib25TZXJpZXNDbGlja2VkKGRzLCAkZXZlbnQpXCIgW25nQ2xhc3NdPVwieydoaWRkZW4nOiBkcy5oaWRkZW4gfVwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kX19pY29uXCIgW3N0eWxlLmNvbG9yXT1cImNvbG9yKCBkcyApXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXMgcG9pbnRlclwiID48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8YSBjbGFzcz1cImxlZ2VuZF9fYWxpYXMgcG9pbnRlclwiIFt0aXRsZV09XCJkcy5sYWJlbFwiPnt7ZHMubGFiZWx9fTwvYT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZF9fdmFsdWUgbWluXCIgKm5nSWY9XCJsZWdlbmQubWluXCI+e3ttaW4oZHMpfX08L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZF9fdmFsdWUgbWF4XCIgKm5nSWY9XCJsZWdlbmQubWF4XCI+e3ttYXgoZHMpfX08L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZF9fdmFsdWUgYXZnXCIgKm5nSWY9XCJsZWdlbmQuYXZnXCI+e3thdmcoZHMpfX08L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlZ2VuZF9fdmFsdWUgY3VycmVudFwiICpuZ0lmPVwibGVnZW5kLmN1cnJlbnRcIj57e2N1cnJlbnQoZHMpfX08L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlZ2VuZF9fc2Nyb2xsZXItcGFkZGluZ1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L3BlcmZlY3Qtc2Nyb2xsYmFyPlxuICA8L2Rpdj5cbiAgXG4gIDxuZy10ZW1wbGF0ZSAjbGVnZW5kQXNUYWJsZT5cblx0XHRcbiAgICA8ZGl2IGNsYXNzPVwibGVnZW5kX19ib3R0b20tdGFibGVcIiA+IFxuXHRcdFx0PHBlcmZlY3Qtc2Nyb2xsYmFyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3Njcm9sbGVyLWNvbnRcIiBbQGZhZGVJbk91dF0gKm5nSWY9XCJkYXRhc2V0cz8ubGVuZ3RoXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVnZW5kX19zZXJpZXMtd3JhcHBlciBsZWdlbmRfX2Z1bGwtd2lkdGhcIj5cblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzcz1cImxlZ2VuZF9fZnVsbC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzcz1cImxlZ2VuZF9fZnVsbC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHQ8L2NvbGdyb3VwPlxuXG5cdFx0XHRcdFx0XHRcdDx0aGVhZCAqbmdJZj1cImRhdGFzZXRzICYmIGRhdGFzZXRzLmxlbmd0aCA+IDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOiBsZWZ0O1wiPjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJwb2ludGVyXCIgKm5nSWY9XCJsZWdlbmQubWluXCI+bWluPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInBvaW50ZXJcIiAqbmdJZj1cImxlZ2VuZC5tYXhcIj5tYXg8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwicG9pbnRlclwiICpuZ0lmPVwibGVnZW5kLmF2Z1wiPmF2ZzwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJwb2ludGVyXCIgKm5nSWY9XCJsZWdlbmQuY3VycmVudFwiPmN1cnJlbnQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cblx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdDx0ciAqbmdGb3I9XCJsZXQgZHMgb2YgZmlsdGVyZWREYXRhc2V0c1wiIGNsYXNzPVwibGVnZW5kX19zZXJpZXNcIiBbbmdDbGFzc109XCJ7J2hpZGRlbic6IGRzLmhpZGRlbiB9XCI+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCAoY2xpY2spPVwib25TZXJpZXNDbGlja2VkKGRzLCAkZXZlbnQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX2ljb25cIiBbc3R5bGUuY29sb3JdPVwiY29sb3IoZHMpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1taW51cyBwb2ludGVyXCIgPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlZ2VuZF9fYWxpYXMgcG9pbnRlclwiIFt0aXRsZV09XCJkcy5sYWJlbFwiPnt7ZHMubGFiZWx9fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLm1pblwiPnt7bWluKGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLm1heFwiPnt7bWF4KGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLmF2Z1wiPnt7YXZnKGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLmN1cnJlbnRcIj57e2N1cnJlbnQoZHMpfX08L3RkPlxuXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVnZW5kX19zY3JvbGxlci1wYWRkaW5nXCI+PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3BlcmZlY3Qtc2Nyb2xsYmFyPlxuXHRcdDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG48L2Rpdj4iXX0=