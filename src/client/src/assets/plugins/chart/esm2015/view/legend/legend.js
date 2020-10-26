import { Component, ViewEncapsulation } from '@angular/core';
import { FadeInOutAnimation } from 'uilib';
import { BaseChartComponent } from '../../base/chart-base';
import { AxisUnitHelper } from '../axes/unit-helper';
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
    i0.ɵɵproperty("ngForOf", ctx_r3.datasets);
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
    i0.ɵɵproperty("ngForOf", ctx_r16.datasets);
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
    axis(ds) {
        const x = this.widget.axes;
        //return ( ds.yAxisID == 'A' ) ?x.leftY :x.rightY
        return x.leftY;
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
        this.control.refresh();
        this.control.reinit();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9sZWdlbmQvbGVnZW5kLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9sZWdlbmQvbGVnZW5kLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUNZekMsK0JBQWtEO0lBQUEsWUFBVztJQUFBLGlCQUFNOzs7O0lBQWpCLGVBQVc7SUFBWCx1Q0FBVzs7O0lBRTdELCtCQUFrRDtJQUFBLFlBQVc7SUFBQSxpQkFBTTs7OztJQUFqQixlQUFXO0lBQVgsdUNBQVc7OztJQUU3RCwrQkFBa0Q7SUFBQSxZQUFXO0lBQUEsaUJBQU07Ozs7SUFBakIsZUFBVztJQUFYLHVDQUFXOzs7SUFFbkUsK0JBQTBEO0lBQUEsWUFBZTtJQUFBLGlCQUFNOzs7O0lBQXJCLGVBQWU7SUFBZiwyQ0FBZTs7Ozs7SUFmMUUsOEJBR087SUFGTiwwUEFBcUM7SUFFL0IsK0JBQ0U7SUFBQSx3QkFBb0M7SUFDdEMsaUJBQU07SUFFTiw2QkFBb0Q7SUFBQSxZQUFZO0lBQUEsaUJBQUk7SUFFcEUsd0ZBQWtEO0lBRWxELHdGQUFrRDtJQUVsRCx3RkFBa0Q7SUFFeEQsd0ZBQTBEO0lBRTNELGlCQUFNOzs7O0lBaEJpQyxrRUFBa0M7SUFFeEMsZUFBMkI7SUFBM0IsNENBQTJCO0lBSXBCLGVBQWtCO0lBQWxCLG1DQUFrQjtJQUFDLGVBQVk7SUFB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dkIsSUFBSSxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbkI7YUFBTTtZQUNOLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDdEI7SUFDRixDQUFDOzt3RkE3RVcsb0JBQW9CO3lEQUFwQixvQkFBb0I7UUNkakMsOEJBRUM7UUFBQSxxRUFDQztRQWdDQSxzSEFFRTtRQW9ESixpQkFBTTs7O1FBdkZBLGVBQXlDO1FBQXpDLHdDQUF5QyxpQkFBQTtxeUZEU2xDLENBQUMsa0JBQWtCLENBQUM7a0RBR3BCLG9CQUFvQjtjQVBoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxlQUFlO2dCQUM1QixTQUFTLEVBQUMsQ0FBRSxlQUFlLENBQUU7Z0JBQzlCLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNoQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhZGVJbk91dEFuaW1hdGlvbiB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZSc7XG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC5zdG9yZSc7XG5pbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAnLi4vLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBBeGlzVW5pdEhlbHBlciB9IGZyb20gJy4uL2F4ZXMvdW5pdC1oZWxwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGFydC1sZWdlbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVnZW5kLmh0bWwnLFxuICBzdHlsZVVybHM6WyAnLi9sZWdlbmQuc2NzcycgXSxcblx0YW5pbWF0aW9uczogW0ZhZGVJbk91dEFuaW1hdGlvbl0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0TGVnZW5kQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcblxuICBnZXQgbGVnZW5kKCl7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0LmxlZ2VuZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBzdG9yZTogQ2hhcnRTdG9yZSApIHtcbiAgICBzdXBlciggc3RvcmUgKTtcbiAgfVxuXG4gIGF4aXMoIGRzOiBEYXRhU2V0ICl7XG4gICAgY29uc3QgeCA9ICg8YW55PnRoaXMud2lkZ2V0KS5heGVzXG4gICAgLy9yZXR1cm4gKCBkcy55QXhpc0lEID09ICdBJyApID94LmxlZnRZIDp4LnJpZ2h0WVxuICAgIHJldHVybiB4LmxlZnRZO1xuICB9XG4gIFxuICBkZWNpbWFscyggZHM6IERhdGFTZXQgKXtcblx0XHRyZXR1cm4gdGhpcy5sZWdlbmQuZGVjaW1hbHMgPyB0aGlzLmxlZ2VuZC5kZWNpbWFscyA6IDA7XG5cdH1cblxuICB1bml0KCBkczogRGF0YVNldCApe1xuXHRcdHJldHVybiB0aGlzLmF4aXMoIGRzICkudW5pdDtcbiAgfVxuICBcbiAgY29sb3IoIGRzOiBEYXRhU2V0ICl7XG4gICAgcmV0dXJuIHRoaXNcblx0XHQgIC5kaXNwbGF5XG5cdFx0XHQuZ2V0TGluZUNvbG9yKCBkcywgMSApO1xuXHR9XG5cbiAgbWluKCBkczogRGF0YVNldCApe1xuXHRcdHJldHVybiBBeGlzVW5pdEhlbHBlci5nZXRGb3JtYXR0ZWRWYWx1ZSggZHMubWluLCB0aGlzLnVuaXQoIGRzICksIHRoaXMuZGVjaW1hbHMoIGRzICkgKVxuXHR9XG5cblx0bWF4KCBkczogRGF0YVNldCApe1xuXHRcdHJldHVybiBBeGlzVW5pdEhlbHBlci5nZXRGb3JtYXR0ZWRWYWx1ZSggZHMubWF4LFx0dGhpcy51bml0KCBkcyApLCB0aGlzLmRlY2ltYWxzKCBkcyApIClcblx0fVxuXG5cdGF2ZyggZHM6IERhdGFTZXQgKXtcblx0XHRyZXR1cm4gQXhpc1VuaXRIZWxwZXIuZ2V0Rm9ybWF0dGVkVmFsdWUoIGRzLmF2ZywgdGhpcy51bml0KCBkcyApLCB0aGlzLmRlY2ltYWxzKCBkcyApIClcblx0fVxuXG5cdGN1cnJlbnQoIGRzOiBEYXRhU2V0ICl7XG5cdFx0cmV0dXJuIEF4aXNVbml0SGVscGVyLmdldEZvcm1hdHRlZFZhbHVlKCBkcy5jdXJyZW50LCB0aGlzLnVuaXQoIGRzICksIHRoaXMuZGVjaW1hbHMoIGRzICkgKVxuXHR9XG5cblxuICBvblNlcmllc0NsaWNrZWQoIGRzOiBEYXRhU2V0LCBlOiBhbnkgKXtcbiAgICBpZiggZS5jdHJsS2V5ICl7XG5cdFx0XHRjb25zdCBzZWxlY3RlZCA9ICggZmFsc2UgPT0gZHMuc2VsZWN0ZWQgKTtcblxuXHRcdFx0dGhpcy50b2dnbGVTZXJpZXMoIGRzLCBzZWxlY3RlZCApO1xuXHRcdH0gZWxzZXtcblx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCAoIHVuZGVmaW5lZCA9PT0gZHMuc2VsZWN0ZWQgKSB8fCBmYWxzZSA9PSBkcy5zZWxlY3RlZCApID9cblx0XHRcdFx0dHJ1ZSA6IHVuZGVmaW5lZDtcblxuXHRcdFx0dGhpcy50b2dnbGVTZXJpZXMoIGRzLCBzZWxlY3RlZCApO1xuXHRcblx0XHRcdHRoaXNcblx0XHRcdFx0LmRhdGFzZXRzXG5cdFx0XHRcdC5maWx0ZXIoIHggPT4geCAhPSBkcyApXG5cdFx0XHRcdC5mb3JFYWNoKCB4ID0+IHRoaXMudG9nZ2xlU2VyaWVzKCB4LCAgdHJ1ZSA9PSBzZWxlY3RlZCA/IGZhbHNlIDogdW5kZWZpbmVkICkgKTtcblx0XHR9XG5cdFxuXHRcdHRoaXMuY29udHJvbC5yZWZyZXNoKCk7XG5cdFx0dGhpcy5jb250cm9sLnJlaW5pdCgpO1xuICB9XG5cbiAgdG9nZ2xlU2VyaWVzKCBkczogRGF0YVNldCwgc2VsZWN0ZWQ6IGJvb2xlYW4gKXtcblx0XHRkcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuXG5cdFx0aWYoIHVuZGVmaW5lZCA9PT0gc2VsZWN0ZWQgKXtcblx0XHRcdGRlbGV0ZSBkcy5oaWRkZW47XG5cdFx0XHRkZWxldGUgZHMuc2VsZWN0ZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRzLmhpZGRlbiA9ICFzZWxlY3RlZDtcblx0XHR9XG5cdH1cbiAgXG59XG4iLCI8ZGl2IGNsYXNzPVwibGVnZW5kX190b3Atd3JhcHBlclwiPlxuXG5cdDxkaXYgKm5nSWY9XCIhbGVnZW5kLnRhYmxlOyBlbHNlIGxlZ2VuZEFzVGFibGVcIiBjbGFzcz1cImxlZ2VuZF9fYm90dG9tXCIgICAgPlxuXHRcdDxwZXJmZWN0LXNjcm9sbGJhcj5cblx0XHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVnZW5kX19zY3JvbGxlci1jb250XCIgID5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVnZW5kX19zZXJpZXMtd3JhcHBlclwiIFtAZmFkZUluT3V0XSAqbmdJZj1cImRhdGFzZXRzPy5sZW5ndGhcIiAgPlxuXHRcdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IGRzIG9mIGRhdGFzZXRzXCIgY2xhc3M9XCJsZWdlbmRfX3Nlcmllc1wiXG5cdFx0XHRcdFx0IChjbGljayk9XCJvblNlcmllc0NsaWNrZWQoZHMsICRldmVudClcIiBbbmdDbGFzc109XCJ7J2hpZGRlbic6IGRzLmhpZGRlbiB9XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmRfX2ljb25cIiBbc3R5bGUuY29sb3JdPVwiY29sb3IoIGRzIClcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51cyBwb2ludGVyXCIgPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibGVnZW5kX19hbGlhcyBwb2ludGVyXCIgW3RpdGxlXT1cImRzLmxhYmVsXCI+e3tkcy5sYWJlbH19PC9hPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kX192YWx1ZSBtaW5cIiAqbmdJZj1cImxlZ2VuZC5taW5cIj57e21pbihkcyl9fTwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kX192YWx1ZSBtYXhcIiAqbmdJZj1cImxlZ2VuZC5tYXhcIj57e21heChkcyl9fTwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kX192YWx1ZSBhdmdcIiAqbmdJZj1cImxlZ2VuZC5hdmdcIj57e2F2Zyhkcyl9fTwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVnZW5kX192YWx1ZSBjdXJyZW50XCIgKm5nSWY9XCJsZWdlbmQuY3VycmVudFwiPnt7Y3VycmVudChkcyl9fTwvZGl2PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVnZW5kX19zY3JvbGxlci1wYWRkaW5nXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvcGVyZmVjdC1zY3JvbGxiYXI+XG4gIDwvZGl2PlxuICBcbiAgPG5nLXRlbXBsYXRlICNsZWdlbmRBc1RhYmxlPlxuXHRcdFxuICAgIDxkaXYgY2xhc3M9XCJsZWdlbmRfX2JvdHRvbS10YWJsZVwiID4gXG5cdFx0XHQ8cGVyZmVjdC1zY3JvbGxiYXI+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlZ2VuZF9fc2Nyb2xsZXItY29udFwiIFtAZmFkZUluT3V0XSAqbmdJZj1cImRhdGFzZXRzPy5sZW5ndGhcIj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3Nlcmllcy13cmFwcGVyIGxlZ2VuZF9fZnVsbC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzPVwibGVnZW5kX19mdWxsLXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdDxjb2xncm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzPVwibGVnZW5kX19mdWxsLXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdDwvY29sZ3JvdXA+XG5cblx0XHRcdFx0XHRcdFx0PHRoZWFkICpuZ0lmPVwiZGF0YXNldHMgJiYgZGF0YXNldHMubGVuZ3RoID4gMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGxlZnQ7XCI+PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInBvaW50ZXJcIiAqbmdJZj1cImxlZ2VuZC5taW5cIj5taW48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwicG9pbnRlclwiICpuZ0lmPVwibGVnZW5kLm1heFwiPm1heDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJwb2ludGVyXCIgKm5nSWY9XCJsZWdlbmQuYXZnXCI+YXZnPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInBvaW50ZXJcIiAqbmdJZj1cImxlZ2VuZC5jdXJyZW50XCI+Y3VycmVudDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0PHRyICpuZ0Zvcj1cImxldCBkcyBvZiBkYXRhc2V0c1wiIGNsYXNzPVwibGVnZW5kX19zZXJpZXNcIiBbbmdDbGFzc109XCJ7J2hpZGRlbic6IGRzLmhpZGRlbiB9XCI+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCAoY2xpY2spPVwib25TZXJpZXNDbGlja2VkKGRzLCAkZXZlbnQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX2ljb25cIiBbc3R5bGUuY29sb3JdPVwiY29sb3IoZHMpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1taW51cyBwb2ludGVyXCIgPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlZ2VuZF9fYWxpYXMgcG9pbnRlclwiIFt0aXRsZV09XCJkcy5sYWJlbFwiPnt7ZHMubGFiZWx9fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLm1pblwiPnt7bWluKGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLm1heFwiPnt7bWF4KGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLmF2Z1wiPnt7YXZnKGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLmN1cnJlbnRcIj57e2N1cnJlbnQoZHMpfX08L3RkPlxuXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVnZW5kX19zY3JvbGxlci1wYWRkaW5nXCI+PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3BlcmZlY3Qtc2Nyb2xsYmFyPlxuXHRcdDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG48L2Rpdj4iXX0=