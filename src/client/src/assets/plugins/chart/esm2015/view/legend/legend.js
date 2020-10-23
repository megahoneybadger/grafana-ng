import { Component } from '@angular/core';
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
    i0.ɵɵproperty("ngStyle", ctx_r0.widthStyle);
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
    i0.ɵɵproperty("ngStyle", ctx_r2.widthStyle);
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
ChartLegendComponent.ɵfac = function ChartLegendComponent_Factory(t) { return new (t || ChartLegendComponent)(i0.ɵɵdirectiveInject(i1.ChartStore)); };
ChartLegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartLegendComponent, selectors: [["chart-legend"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "legend__top-wrapper"], ["class", "legend__bottom", 3, "ngStyle", 4, "ngIf", "ngIfElse"], ["legendAsTable", ""], [1, "legend__bottom", 3, "ngStyle"], [1, "legend__scroller-cont"], ["class", "legend__series-wrapper", 4, "ngIf"], [1, "legend__scroller-padding"], [1, "legend__series-wrapper"], ["class", "legend__series", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "legend__series", 3, "ngClass", "click"], [1, "legend__icon"], [1, "fa", "fa-minus", "pointer"], [1, "legend__alias", "pointer", 3, "title"], ["class", "legend__value min", 4, "ngIf"], ["class", "legend__value max", 4, "ngIf"], ["class", "legend__value avg", 4, "ngIf"], ["class", "legend__value current", 4, "ngIf"], [1, "legend__value", "min"], [1, "legend__value", "max"], [1, "legend__value", "avg"], [1, "legend__value", "current"], [1, "legend__bottom-table", 3, "ngStyle"], ["class", "legend__scroller-cont", 4, "ngIf"], [1, "legend__series-wrapper", "legend__full-width"], [1, "legend__full-width"], [4, "ngIf"], ["class", "legend__series", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "text-align", "left"], ["class", "pointer", 4, "ngIf"], [1, "pointer"], [1, "legend__series", 3, "ngClass"], [3, "click"], ["class", "legend__value", 4, "ngIf"], [1, "legend__value"]], template: function ChartLegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ChartLegendComponent_div_1_Template, 5, 2, "div", 1);
        i0.ɵɵtemplate(2, ChartLegendComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.legend.table)("ngIfElse", _r1);
    } }, directives: [i2.NgIf, i2.NgStyle, i3.PerfectScrollbarComponent, i2.NgForOf, i2.NgClass], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.legend__top-wrapper[_ngcontent-%COMP%]{display:flex;flex-grow:1;max-height:100%;min-height:0;overflow:hidden;position:relative;width:100%}.legend__bottom[_ngcontent-%COMP%]{min-width:0;padding-bottom:5px}.legend__scroller-cont[_ngcontent-%COMP%]{display:flex;flex-direction:row}.legend__scroller-padding[_ngcontent-%COMP%]{min-width:10px}.legend__series-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;min-width:0}.legend__series[_ngcontent-%COMP%]{min-width:0;padding-left:10px;white-space:nowrap}.legend__series--right-y[_ngcontent-%COMP%]{float:right}.legend__series.hidden[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%], .legend__series.hidden[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%]{color:#969696}.legend__alias[_ngcontent-%COMP%], .legend__icon[_ngcontent-%COMP%], .legend__value[_ngcontent-%COMP%]{cursor:pointer;display:inline;font-size:85%;text-align:left;white-space:nowrap}.legend__alias.current[_ngcontent-%COMP%]:before, .legend__icon.current[_ngcontent-%COMP%]:before, .legend__value.current[_ngcontent-%COMP%]:before{content:\"Current: \"}.legend__alias.max[_ngcontent-%COMP%]:before, .legend__icon.max[_ngcontent-%COMP%]:before, .legend__value.max[_ngcontent-%COMP%]:before{content:\"Max: \"}.legend__alias.min[_ngcontent-%COMP%]:before, .legend__icon.min[_ngcontent-%COMP%]:before, .legend__value.min[_ngcontent-%COMP%]:before{content:\"Min: \"}.legend__alias.total[_ngcontent-%COMP%]:before, .legend__icon.total[_ngcontent-%COMP%]:before, .legend__value.total[_ngcontent-%COMP%]:before{content:\"Total: \"}.legend__alias.avg[_ngcontent-%COMP%]:before, .legend__icon.avg[_ngcontent-%COMP%]:before, .legend__value.avg[_ngcontent-%COMP%]:before{content:\"Avg: \"}.legend__icon[_ngcontent-%COMP%]{padding-right:4px;position:relative;top:1px}.legend__icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:135%;position:relative;top:1px}.legend__value[_ngcontent-%COMP%]{padding-left:6px}.legend__bottom-table[_ngcontent-%COMP%]{padding-bottom:1px;padding-left:5px;padding-right:5px;width:100%}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series[_ngcontent-%COMP%]{display:table-row;float:none;padding-left:0}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series--right-y[_ngcontent-%COMP%]{float:none}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series--right-y[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%]:after{color:#8e8e8e;content:\"(right-y)\";padding:0 5px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:table-cell;float:none;padding:2px 10px;text-align:right;white-space:nowrap}.legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%]{padding:0;top:0;width:5px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{top:3px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%]{padding-left:15px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%]{max-width:650px;overflow:hidden;padding-left:7px;text-align:left;text-overflow:ellipsis;width:95%}.legend__bottom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#33b5e5;font-size:85%;font-weight:700;padding:0 10px 1px 0;text-align:right;white-space:nowrap}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series[_ngcontent-%COMP%]:nth-child(odd){background:#262628}.legend__full-width[_ngcontent-%COMP%]{width:100%}"], data: { animation: [FadeInOutAnimation] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartLegendComponent, [{
        type: Component,
        args: [{
                selector: 'chart-legend',
                templateUrl: './legend.html',
                styleUrls: ['./legend.scss'],
                animations: [FadeInOutAnimation],
            }]
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9sZWdlbmQvbGVnZW5kLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9sZWdlbmQvbGVnZW5kLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUNZekMsK0JBQWtEO0lBQUEsWUFBVztJQUFBLGlCQUFNOzs7O0lBQWpCLGVBQVc7SUFBWCx1Q0FBVzs7O0lBRTdELCtCQUFrRDtJQUFBLFlBQVc7SUFBQSxpQkFBTTs7OztJQUFqQixlQUFXO0lBQVgsdUNBQVc7OztJQUU3RCwrQkFBa0Q7SUFBQSxZQUFXO0lBQUEsaUJBQU07Ozs7SUFBakIsZUFBVztJQUFYLHVDQUFXOzs7SUFFbkUsK0JBQTBEO0lBQUEsWUFBZTtJQUFBLGlCQUFNOzs7O0lBQXJCLGVBQWU7SUFBZiwyQ0FBZTs7Ozs7SUFmMUUsOEJBR087SUFGTiwwUEFBcUM7SUFFL0IsK0JBQ0U7SUFBQSx3QkFBb0M7SUFDdEMsaUJBQU07SUFFTiw2QkFBb0Q7SUFBQSxZQUFZO0lBQUEsaUJBQUk7SUFFcEUsd0ZBQWtEO0lBRWxELHdGQUFrRDtJQUVsRCx3RkFBa0Q7SUFFeEQsd0ZBQTBEO0lBRTNELGlCQUFNOzs7O0lBaEJpQyxrRUFBa0M7SUFFeEMsZUFBMkI7SUFBM0IsNENBQTJCO0lBSXBCLGVBQWtCO0lBQWxCLG1DQUFrQjtJQUFDLGVBQVk7SUFBWixpQ0FBWTtJQUVqQyxlQUFrQjtJQUFsQix3Q0FBa0I7SUFFbEIsZUFBa0I7SUFBbEIsd0NBQWtCO0lBRWxCLGVBQWtCO0lBQWxCLHdDQUFrQjtJQUVwQixlQUFzQjtJQUF0Qiw0Q0FBc0I7OztJQWhCM0QsOEJBQ0M7SUFBQSxrRkFHTztJQWdCUixpQkFBTTs7O0lBcEI4QixzQ0FBWTtJQUMxQyxlQUEyQjtJQUEzQix5Q0FBMkI7OztJQU5wQyw4QkFDQztJQUFBLHlDQUVDO0lBQUEsOEJBRUM7SUFBQSwyRUFDQztJQXFCRCx5QkFBNEM7SUFDN0MsaUJBQU07SUFFUCxpQkFBb0I7SUFDcEIsaUJBQU07OztJQS9CK0QsMkNBQXNCO0lBS3hDLGVBQXdCO0lBQXhCLDhFQUF3Qjs7O0lBNENwRSw4QkFBdUM7SUFBQSxtQkFBRztJQUFBLGlCQUFLOzs7SUFDL0MsOEJBQXVDO0lBQUEsbUJBQUc7SUFBQSxpQkFBSzs7O0lBQy9DLDhCQUF1QztJQUFBLG1CQUFHO0lBQUEsaUJBQUs7OztJQUMvQyw4QkFBMkM7SUFBQSx1QkFBTztJQUFBLGlCQUFLOzs7SUFOekQsNkJBQ0M7SUFBQSwwQkFDQztJQUFBLHlCQUFtQztJQUNuQyxnR0FBdUM7SUFDdkMsZ0dBQXVDO0lBQ3ZDLGdHQUF1QztJQUN2QyxnR0FBMkM7SUFDNUMsaUJBQUs7SUFDTixpQkFBUTs7O0lBTGMsZUFBa0I7SUFBbEIseUNBQWtCO0lBQ2xCLGVBQWtCO0lBQWxCLHlDQUFrQjtJQUNsQixlQUFrQjtJQUFsQix5Q0FBa0I7SUFDbEIsZUFBc0I7SUFBdEIsNkNBQXNCOzs7SUFlMUMsOEJBQTZDO0lBQUEsWUFBVztJQUFBLGlCQUFLOzs7O0lBQWhCLGVBQVc7SUFBWCx5Q0FBVzs7O0lBRXhELDhCQUE2QztJQUFBLFlBQVc7SUFBQSxpQkFBSzs7OztJQUFoQixlQUFXO0lBQVgseUNBQVc7OztJQUV4RCw4QkFBNkM7SUFBQSxZQUFXO0lBQUEsaUJBQUs7Ozs7SUFBaEIsZUFBVztJQUFYLHlDQUFXOzs7SUFFeEQsOEJBQWlEO0lBQUEsWUFBZTtJQUFBLGlCQUFLOzs7O0lBQXBCLGVBQWU7SUFBZiw2Q0FBZTs7OztJQWhCakUsOEJBRUM7SUFBQSw4QkFDQztJQURHLGtRQUFxQztJQUN4QywrQkFDQztJQUFBLHdCQUFvQztJQUNyQyxpQkFBTTtJQUVOLCtCQUFzRDtJQUFBLFlBQVk7SUFBQSxpQkFBTTtJQUN6RSxpQkFBSztJQUVMLDZGQUE2QztJQUU3Qyw2RkFBNkM7SUFFN0MsNkZBQTZDO0lBRTdDLDZGQUFpRDtJQUVsRCxpQkFBSzs7OztJQWxCa0QsbUVBQWtDO0lBRzdELGVBQXlCO0lBQXpCLDhDQUF5QjtJQUloQixlQUFrQjtJQUFsQixvQ0FBa0I7SUFBQyxlQUFZO0lBQVosa0NBQVk7SUFHekMsZUFBa0I7SUFBbEIseUNBQWtCO0lBRWxCLGVBQWtCO0lBQWxCLHlDQUFrQjtJQUVsQixlQUFrQjtJQUFsQix5Q0FBa0I7SUFFbEIsZUFBc0I7SUFBdEIsNkNBQXNCOzs7SUFuQ3JELDhCQUVDO0lBQUEsK0JBQ0M7SUFBQSxpQ0FDQztJQUFBLGdDQUNDO0lBQUEsMEJBQ0Q7SUFBQSxpQkFBVztJQUVYLDhGQUNDO0lBU0QsNkJBQ0M7SUFBQSwwRkFFQztJQWlCRixpQkFBUTtJQUNULGlCQUFRO0lBQ1QsaUJBQU07SUFFTix5QkFBNEM7SUFFN0MsaUJBQU07OztJQTVDNkIsc0NBQVk7SUFRckMsZUFBdUM7SUFBdkMsc0VBQXVDO0lBV3pDLGVBQTJCO0lBQTNCLDBDQUEyQjs7O0lBdEJuQywrQkFDRDtJQUFBLHlDQUVDO0lBQUEsb0ZBRUM7SUEyQ0YsaUJBQW9CO0lBQ3JCLGlCQUFNOzs7SUFqRDhCLDJDQUFzQjtJQUdSLGVBQXdCO0lBQXhCLDhFQUF3Qjs7QUQxQjVFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxrQkFBa0I7SUFhMUQsWUFBYSxLQUFpQjtRQUM1QixLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDakIsQ0FBQztJQWJELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLEVBQUUsQ0FBQTtRQUNYLFlBQVk7UUFDWix1RkFBdUY7UUFDdkYsSUFBSTtJQUNMLENBQUM7SUFNQSxJQUFJLENBQUUsRUFBVztRQUNmLE1BQU0sQ0FBQyxHQUFTLElBQUksQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFBO1FBQ2pDLGlEQUFpRDtRQUNqRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBRSxFQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVBLElBQUksQ0FBRSxFQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFFLENBQUUsQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELEtBQUssQ0FBRSxFQUFXO1FBQ2hCLE9BQU8sSUFBSTthQUNWLE9BQU87YUFDUixZQUFZLENBQUUsRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDO0lBQ3pCLENBQUM7SUFFQSxHQUFHLENBQUUsRUFBVztRQUNoQixPQUFPLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBRSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFBO0lBQ3hGLENBQUM7SUFFRCxHQUFHLENBQUUsRUFBVztRQUNmLE9BQU8sY0FBYyxDQUFDLGlCQUFpQixDQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFFLENBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUE7SUFDeEYsQ0FBQztJQUVELEdBQUcsQ0FBRSxFQUFXO1FBQ2YsT0FBTyxjQUFjLENBQUMsaUJBQWlCLENBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLENBQUUsQ0FBQTtJQUN4RixDQUFDO0lBRUQsT0FBTyxDQUFFLEVBQVc7UUFDbkIsT0FBTyxjQUFjLENBQUMsaUJBQWlCLENBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLENBQUUsQ0FBQTtJQUM1RixDQUFDO0lBR0EsZUFBZSxDQUFFLEVBQVcsRUFBRSxDQUFNO1FBQ2xDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNoQixNQUFNLFFBQVEsR0FBRyxDQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFFLENBQUM7WUFFMUMsSUFBSSxDQUFDLFlBQVksQ0FBRSxFQUFFLEVBQUUsUUFBUSxDQUFFLENBQUM7U0FDbEM7YUFBSztZQUNMLE1BQU0sUUFBUSxHQUFHLENBQUUsQ0FBRSxTQUFTLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBRSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFFbEIsSUFBSSxDQUFDLFlBQVksQ0FBRSxFQUFFLEVBQUUsUUFBUSxDQUFFLENBQUM7WUFFbEMsSUFBSTtpQkFDRixRQUFRO2lCQUNSLE1BQU0sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUU7aUJBQ3RCLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFHLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQztTQUNoRjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQVksQ0FBRSxFQUFXLEVBQUUsUUFBaUI7UUFDNUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFdkIsSUFBSSxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbkI7YUFBTTtZQUNOLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDdEI7SUFDRixDQUFDOzt3RkFuRlcsb0JBQW9CO3lEQUFwQixvQkFBb0I7UUNkakMsOEJBRUM7UUFBQSxxRUFDQztRQWdDQSxzSEFFRTtRQW9ESixpQkFBTTs7O1FBdkZBLGVBQXlDO1FBQXpDLHdDQUF5QyxpQkFBQTs0a0lEVWpDLENBQUMsa0JBQWtCLENBQUM7a0RBRXJCLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxlQUFlO2dCQUM1QixTQUFTLEVBQUMsQ0FBRSxlQUFlLENBQUU7Z0JBQzdCLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWRlSW5PdXRBbmltYXRpb24gfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UnO1xuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQuc3RvcmUnO1xuaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJy4uLy4uL2NoYXJ0Lm0nO1xuaW1wb3J0IHsgQXhpc1VuaXRIZWxwZXIgfSBmcm9tICcuLi9heGVzL3VuaXQtaGVscGVyJztcbmltcG9ydCB7IERpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi4vcmVuZGVyL2Rpc3BsYXktbWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoYXJ0LWxlZ2VuZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWdlbmQuaHRtbCcsXG4gIHN0eWxlVXJsczpbICcuL2xlZ2VuZC5zY3NzJyBdLFxuICBhbmltYXRpb25zOiBbRmFkZUluT3V0QW5pbWF0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRMZWdlbmRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuXG4gIGdldCBsZWdlbmQoKXtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQubGVnZW5kO1xuICB9XG5cbiAgcHVibGljIGdldCB3aWR0aFN0eWxlKCl7XG4gICAgcmV0dXJuIHt9XG5cdFx0Ly8gcmV0dXJuIHsgXG5cdFx0Ly8gXHQnd2lkdGgnOiB0aGlzLndpZGdldC53aWR0aCAmJiB0aGlzLndpZGdldC5yaWdodCA/IHRoaXMud2lkZ2V0LndpZHRoICsgJ3B4JyA6ICcxMDAlJ1xuXHRcdC8vIH1cblx0fVxuXG4gIGNvbnN0cnVjdG9yKCBzdG9yZTogQ2hhcnRTdG9yZSApIHtcbiAgICBzdXBlciggc3RvcmUgKTtcbiAgfVxuXG4gIGF4aXMoIGRzOiBEYXRhU2V0ICl7XG4gICAgY29uc3QgeCA9ICg8YW55PnRoaXMud2lkZ2V0KS5heGVzXG4gICAgLy9yZXR1cm4gKCBkcy55QXhpc0lEID09ICdBJyApID94LmxlZnRZIDp4LnJpZ2h0WVxuICAgIHJldHVybiB4LmxlZnRZO1xuICB9XG4gIFxuICBkZWNpbWFscyggZHM6IERhdGFTZXQgKXtcblx0XHRyZXR1cm4gdGhpcy5sZWdlbmQuZGVjaW1hbHMgPyB0aGlzLmxlZ2VuZC5kZWNpbWFscyA6IDE7XG5cdH1cblxuICB1bml0KCBkczogRGF0YVNldCApe1xuXHRcdHJldHVybiB0aGlzLmF4aXMoIGRzICkudW5pdDtcbiAgfVxuICBcbiAgY29sb3IoIGRzOiBEYXRhU2V0ICl7XG4gICAgcmV0dXJuIHRoaXNcblx0XHQgIC5kaXNwbGF5XG5cdFx0XHQuZ2V0TGluZUNvbG9yKCBkcywgMSApO1xuXHR9XG5cbiAgbWluKCBkczogRGF0YVNldCApe1xuXHRcdHJldHVybiBBeGlzVW5pdEhlbHBlci5nZXRGb3JtYXR0ZWRWYWx1ZSggZHMubWluLCB0aGlzLnVuaXQoIGRzICksIHRoaXMuZGVjaW1hbHMoIGRzICkgKVxuXHR9XG5cblx0bWF4KCBkczogRGF0YVNldCApe1xuXHRcdHJldHVybiBBeGlzVW5pdEhlbHBlci5nZXRGb3JtYXR0ZWRWYWx1ZSggZHMubWF4LFx0dGhpcy51bml0KCBkcyApLCB0aGlzLmRlY2ltYWxzKCBkcyApIClcblx0fVxuXG5cdGF2ZyggZHM6IERhdGFTZXQgKXtcblx0XHRyZXR1cm4gQXhpc1VuaXRIZWxwZXIuZ2V0Rm9ybWF0dGVkVmFsdWUoIGRzLmF2ZywgdGhpcy51bml0KCBkcyApLCB0aGlzLmRlY2ltYWxzKCBkcyApIClcblx0fVxuXG5cdGN1cnJlbnQoIGRzOiBEYXRhU2V0ICl7XG5cdFx0cmV0dXJuIEF4aXNVbml0SGVscGVyLmdldEZvcm1hdHRlZFZhbHVlKCBkcy5jdXJyZW50LCB0aGlzLnVuaXQoIGRzICksIHRoaXMuZGVjaW1hbHMoIGRzICkgKVxuXHR9XG5cblxuICBvblNlcmllc0NsaWNrZWQoIGRzOiBEYXRhU2V0LCBlOiBhbnkgKXtcbiAgICBpZiggZS5jdHJsS2V5ICl7XG5cdFx0XHRjb25zdCBzZWxlY3RlZCA9ICggZmFsc2UgPT0gZHMuc2VsZWN0ZWQgKTtcblxuXHRcdFx0dGhpcy50b2dnbGVTZXJpZXMoIGRzLCBzZWxlY3RlZCApO1xuXHRcdH0gZWxzZXtcblx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCAoIHVuZGVmaW5lZCA9PT0gZHMuc2VsZWN0ZWQgKSB8fCBmYWxzZSA9PSBkcy5zZWxlY3RlZCApID9cblx0XHRcdFx0dHJ1ZSA6IHVuZGVmaW5lZDtcblxuXHRcdFx0dGhpcy50b2dnbGVTZXJpZXMoIGRzLCBzZWxlY3RlZCApO1xuXHRcblx0XHRcdHRoaXNcblx0XHRcdFx0LmRhdGFzZXRzXG5cdFx0XHRcdC5maWx0ZXIoIHggPT4geCAhPSBkcyApXG5cdFx0XHRcdC5mb3JFYWNoKCB4ID0+IHRoaXMudG9nZ2xlU2VyaWVzKCB4LCAgdHJ1ZSA9PSBzZWxlY3RlZCA/IGZhbHNlIDogdW5kZWZpbmVkICkgKTtcblx0XHR9XG5cdFxuXHRcdHRoaXMuY29udHJvbC5yZWZyZXNoKCk7XG4gIH1cblxuICB0b2dnbGVTZXJpZXMoIGRzOiBEYXRhU2V0LCBzZWxlY3RlZDogYm9vbGVhbiApe1xuXHRcdGRzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG5cblx0XHRpZiggdW5kZWZpbmVkID09PSBzZWxlY3RlZCApe1xuXHRcdFx0ZGVsZXRlIGRzLmhpZGRlbjtcblx0XHRcdGRlbGV0ZSBkcy5zZWxlY3RlZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZHMuaGlkZGVuID0gIXNlbGVjdGVkO1xuXHRcdH1cblx0fVxuICBcbn1cbiIsIjxkaXYgY2xhc3M9XCJsZWdlbmRfX3RvcC13cmFwcGVyXCI+XG5cblx0PGRpdiAqbmdJZj1cIiFsZWdlbmQudGFibGU7IGVsc2UgbGVnZW5kQXNUYWJsZVwiIGNsYXNzPVwibGVnZW5kX19ib3R0b21cIiBbbmdTdHlsZV09XCJ3aWR0aFN0eWxlXCIgICA+XG5cdFx0PHBlcmZlY3Qtc2Nyb2xsYmFyPlxuXHRcdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3Njcm9sbGVyLWNvbnRcIiAgPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3Nlcmllcy13cmFwcGVyXCIgW0BmYWRlSW5PdXRdICpuZ0lmPVwiZGF0YXNldHM/Lmxlbmd0aFwiICA+XG5cdFx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgZHMgb2YgZGF0YXNldHNcIiBjbGFzcz1cImxlZ2VuZF9fc2VyaWVzXCJcblx0XHRcdFx0XHQgKGNsaWNrKT1cIm9uU2VyaWVzQ2xpY2tlZChkcywgJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsnaGlkZGVuJzogZHMuaGlkZGVuIH1cIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZF9faWNvblwiIFtzdHlsZS5jb2xvcl09XCJjb2xvciggZHMgKVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzIHBvaW50ZXJcIiA+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJsZWdlbmRfX2FsaWFzIHBvaW50ZXJcIiBbdGl0bGVdPVwiZHMubGFiZWxcIj57e2RzLmxhYmVsfX08L2E+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmRfX3ZhbHVlIG1pblwiICpuZ0lmPVwibGVnZW5kLm1pblwiPnt7bWluKGRzKX19PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmRfX3ZhbHVlIG1heFwiICpuZ0lmPVwibGVnZW5kLm1heFwiPnt7bWF4KGRzKX19PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmRfX3ZhbHVlIGF2Z1wiICpuZ0lmPVwibGVnZW5kLmF2Z1wiPnt7YXZnKGRzKX19PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3ZhbHVlIGN1cnJlbnRcIiAqbmdJZj1cImxlZ2VuZC5jdXJyZW50XCI+e3tjdXJyZW50KGRzKX19PC9kaXY+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3Njcm9sbGVyLXBhZGRpbmdcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9wZXJmZWN0LXNjcm9sbGJhcj5cbiAgPC9kaXY+XG4gIFxuICA8bmctdGVtcGxhdGUgI2xlZ2VuZEFzVGFibGU+XG5cdFx0XG4gICAgPGRpdiBjbGFzcz1cImxlZ2VuZF9fYm90dG9tLXRhYmxlXCIgW25nU3R5bGVdPVwid2lkdGhTdHlsZVwiID4gXG5cdFx0XHQ8cGVyZmVjdC1zY3JvbGxiYXI+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlZ2VuZF9fc2Nyb2xsZXItY29udFwiIFtAZmFkZUluT3V0XSAqbmdJZj1cImRhdGFzZXRzPy5sZW5ndGhcIj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX3Nlcmllcy13cmFwcGVyIGxlZ2VuZF9fZnVsbC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzPVwibGVnZW5kX19mdWxsLXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdDxjb2xncm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzPVwibGVnZW5kX19mdWxsLXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdDwvY29sZ3JvdXA+XG5cblx0XHRcdFx0XHRcdFx0PHRoZWFkICpuZ0lmPVwiZGF0YXNldHMgJiYgZGF0YXNldHMubGVuZ3RoID4gMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT1cInRleHQtYWxpZ246IGxlZnQ7XCI+PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInBvaW50ZXJcIiAqbmdJZj1cImxlZ2VuZC5taW5cIj5taW48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwicG9pbnRlclwiICpuZ0lmPVwibGVnZW5kLm1heFwiPm1heDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJwb2ludGVyXCIgKm5nSWY9XCJsZWdlbmQuYXZnXCI+YXZnPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInBvaW50ZXJcIiAqbmdJZj1cImxlZ2VuZC5jdXJyZW50XCI+Y3VycmVudDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0PHRyICpuZ0Zvcj1cImxldCBkcyBvZiBkYXRhc2V0c1wiIGNsYXNzPVwibGVnZW5kX19zZXJpZXNcIiBbbmdDbGFzc109XCJ7J2hpZGRlbic6IGRzLmhpZGRlbiB9XCI+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCAoY2xpY2spPVwib25TZXJpZXNDbGlja2VkKGRzLCAkZXZlbnQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWdlbmRfX2ljb25cIiBbc3R5bGUuY29sb3JdPVwiY29sb3IoZHMpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1taW51cyBwb2ludGVyXCIgPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlZ2VuZF9fYWxpYXMgcG9pbnRlclwiIFt0aXRsZV09XCJkcy5sYWJlbFwiPnt7ZHMubGFiZWx9fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLm1pblwiPnt7bWluKGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLm1heFwiPnt7bWF4KGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLmF2Z1wiPnt7YXZnKGRzKX19PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwibGVnZW5kX192YWx1ZVwiICpuZ0lmPVwibGVnZW5kLmN1cnJlbnRcIj57e2N1cnJlbnQoZHMpfX08L3RkPlxuXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVnZW5kX19zY3JvbGxlci1wYWRkaW5nXCI+PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3BlcmZlY3Qtc2Nyb2xsYmFyPlxuXHRcdDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG48L2Rpdj4iXX0=