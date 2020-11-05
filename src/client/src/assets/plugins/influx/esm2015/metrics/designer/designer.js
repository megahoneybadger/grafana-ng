import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { InfluxQuery, GroupByObject, GroupByOption, MetricVars } from '../metrics.m';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "./query/query";
function InfluxMetricsDesignerComponent_query_editor_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "query-editor", 8);
    i0.ɵɵlistener("remove", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_remove_0_listener() { i0.ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(t_r1); })("duplicate", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_duplicate_0_listener() { i0.ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onDuplicate(t_r1); })("moveUp", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveUp_0_listener() { i0.ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onMoveUp(t_r1); })("moveDown", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveDown_0_listener() { i0.ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onMoveDown(t_r1); })("rebuild", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_rebuild_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.rebuild(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    i0.ɵɵproperty("query", t_r1);
} }
export class InfluxMetricsDesignerComponent {
    constructor(panel, time) {
        this.panel = panel;
        this.time = time;
    }
    get metrics() {
        return this
            .panel
            .widget
            .metrics;
    }
    get targets() {
        return this.metrics.targets;
    }
    get nextRefId() {
        let index = 0;
        while (true) {
            let candidate = String
                .fromCharCode(65 + index++)
                .toUpperCase();
            let p = Math.round(index / 25);
            if (p > 0) {
                candidate += p;
            }
            let duplicate = this.targets.find(x => candidate == x.refId);
            if (!duplicate) {
                return candidate;
            }
        }
    }
    ngOnInit() {
        var _a;
        if (!((_a = this.targets) === null || _a === void 0 ? void 0 : _a.length)) {
            this.onAddQuery();
        }
    }
    onAddQuery() {
        const q = new InfluxQuery();
        q.refId = this.nextRefId;
        q.groupBy.push(new GroupByObject(GroupByOption.Time, [MetricVars.TIME_INTERVAL]));
        this.targets.push(q);
    }
    onRemove(t) {
        const index = this.targets.indexOf(t);
        if (-1 !== index) {
            this.targets.splice(index, 1);
            this.rebuild();
        }
    }
    onDuplicate(t) {
        const copy = _.cloneDeep(t);
        copy.refId = this.nextRefId;
        this.targets.push(copy);
    }
    onMoveUp(t) {
        const index = this.targets.indexOf(t);
        if (index <= 0) {
            return;
        }
        this.targets.splice(index, 1);
        this.targets.splice(index - 1, 0, t);
    }
    onMoveDown(t) {
        const index = this.targets.indexOf(t);
        if (-1 == index || index == this.targets.length - 1) {
            return;
        }
        this.targets.splice(index, 1);
        this.targets.splice(index + 1, 0, t);
    }
    rebuild() {
        this.time.tick();
    }
}
InfluxMetricsDesignerComponent.ɵfac = function InfluxMetricsDesignerComponent_Factory(t) { return new (t || InfluxMetricsDesignerComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
InfluxMetricsDesignerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxMetricsDesignerComponent, selectors: [["metrics-designer"]], decls: 10, vars: 2, consts: [[3, "query", "remove", "duplicate", "moveUp", "moveDown", "rebuild", 4, "ngFor", "ngForOf"], [1, "gf-form-query"], [1, "gf-form", "gf-form-query-letter-cell"], [1, "gf-form-label"], [1, "gf-form-query-letter-cell-carret"], [1, "fa", "fa-caret-down"], [1, "gf-form-query-letter-cell-letter"], [1, "btn", "btn-secondary", "gf-form-btn", 3, "click"], [3, "query", "remove", "duplicate", "moveUp", "moveDown", "rebuild"]], template: function InfluxMetricsDesignerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, InfluxMetricsDesignerComponent_query_editor_0_Template, 1, 1, "query-editor", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "label", 3);
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵelement(5, "i", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span", 6);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 7);
        i0.ɵɵlistener("click", function InfluxMetricsDesignerComponent_Template_button_click_8_listener() { return ctx.onAddQuery(); });
        i0.ɵɵtext(9, " Add Query ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.metrics.targets);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(ctx.nextRefId);
    } }, directives: [i2.NgForOf, i3.QueryEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InfluxMetricsDesignerComponent, [{
        type: Component,
        args: [{
                selector: 'metrics-designer',
                templateUrl: `./designer.html`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.TimeRangeStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvZGVzaWduZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvZGVzaWduZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFrQixNQUFNLFFBQVEsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXJGLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0lDSjVCLHVDQU9lO0lBTGIsaVBBQXNCLDZPQUFBLG9PQUFBLDBPQUFBLHFNQUFBO0lBS3hCLGlCQUFlOzs7SUFOYiw0QkFBVzs7QURTYixNQUFNLE9BQU8sOEJBQThCO0lBbUN6QyxZQUNnQyxLQUFZLEVBQ2xDLElBQW9CO1FBREUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUU5QixDQUFDO0lBckNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSTthQUNSLEtBQUs7YUFDTCxNQUFNO2FBQ04sT0FBTyxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLE9BQU8sSUFBSSxFQUFFO1lBQ1gsSUFBSSxTQUFTLEdBQUcsTUFBTTtpQkFDbkIsWUFBWSxDQUFDLEVB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QUksRUFBRSxDQUFDO0lBQ25CLENBQUM7OzRHQTlGVSw4QkFBOEIsdUJBb0M5QixXQUFXO21FQXBDWCw4QkFBOEI7UUNWM0MsaUdBT0E7UUFFQSw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsZ0NBQ0U7UUFBQSwrQkFDRTtRQUFBLHVCQUFnQztRQUNsQyxpQkFBTztRQUNQLCtCQUErQztRQUFBLFlBQWE7UUFBQSxpQkFBTztRQUNyRSxpQkFBUTtRQUNSLGlDQUNFO1FBRDRDLDJHQUFTLGdCQUFZLElBQUM7UUFDbEUsMkJBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNO1FBQ1IsaUJBQU07O1FBckJRLDZDQUFpQztRQWVNLGVBQWE7UUFBYixtQ0FBYTs7a0RETHJELDhCQUE4QjtjQUoxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLGlCQUFpQjthQUMvQjs7c0JBcUNJLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiwgVGltZVJhbmdlU3RvcmUgfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBJbmZsdXhRdWVyeSwgR3JvdXBCeU9iamVjdCwgR3JvdXBCeU9wdGlvbiwgTWV0cmljVmFycyB9IGZyb20gJy4uL21ldHJpY3MubSc7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21ldHJpY3MtZGVzaWduZXInLFxyXG4gIHRlbXBsYXRlVXJsOiBgLi9kZXNpZ25lci5odG1sYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5mbHV4TWV0cmljc0Rlc2lnbmVyQ29tcG9uZW50IHtcclxuXHJcbiAgZ2V0IG1ldHJpY3MoKTphbnl7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAucGFuZWxcclxuICAgICAgLndpZGdldFxyXG4gICAgICAubWV0cmljcztcclxuICB9XHJcblxyXG4gIGdldCB0YXJnZXRzKCk6IEluZmx1eFF1ZXJ5W10ge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0cmljcy50YXJnZXRzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5leHRSZWZJZCgpe1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICB3aGlsZSggdHJ1ZSApe1xyXG4gICAgICBsZXQgY2FuZGlkYXRlID0gU3RyaW5nXHJcbiAgICAgICAgLmZyb21DaGFyQ29kZSg2NSArIGluZGV4KyspXHJcbiAgICAgICAgLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICBsZXQgcCA9IE1hdGgucm91bmQoIGluZGV4IC8gMjUgKTtcclxuXHJcbiAgICAgIGlmKCBwID4gMCApe1xyXG4gICAgICAgIGNhbmRpZGF0ZSArPSBwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZHVwbGljYXRlID0gdGhpcy50YXJnZXRzLmZpbmQoIHggPT4gY2FuZGlkYXRlID09IHgucmVmSWQgKTtcclxuXHJcbiAgICAgIGlmKCAhZHVwbGljYXRlICl7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KCBQQU5FTF9UT0tFTiApIHB1YmxpYyBwYW5lbDogUGFuZWwsXHJcbiAgICBwcml2YXRlIHRpbWU6IFRpbWVSYW5nZVN0b3JlKXtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgaWYoICF0aGlzLnRhcmdldHM/Lmxlbmd0aCApe1xyXG4gICAgICB0aGlzLm9uQWRkUXVlcnkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQWRkUXVlcnkoKXtcclxuICAgIGNvbnN0IHEgPSBuZXcgSW5mbHV4UXVlcnkoKTtcclxuICAgIHEucmVmSWQgPSB0aGlzLm5leHRSZWZJZDtcclxuICAgIHEuZ3JvdXBCeS5wdXNoKCBuZXcgR3JvdXBCeU9iamVjdCggR3JvdXBCeU9wdGlvbi5UaW1lLCBbTWV0cmljVmFycy5USU1FX0lOVEVSVkFMXSApICk7XHJcblxyXG4gICAgdGhpcy50YXJnZXRzLnB1c2goIHEgKTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlKCB0OiBJbmZsdXhRdWVyeSwgICl7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFyZ2V0cy5pbmRleE9mKCB0ICk7XHJcblxyXG4gICAgaWYoIC0xICE9PSBpbmRleCApe1xyXG4gICAgICB0aGlzLnRhcmdldHMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG4gICAgICB0aGlzLnJlYnVpbGQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRHVwbGljYXRlKCB0OiBJbmZsdXhRdWVyeSApe1xyXG4gICAgY29uc3QgY29weSA9IF8uY2xvbmVEZWVwKCB0IClcclxuICAgIGNvcHkucmVmSWQgPSB0aGlzLm5leHRSZWZJZDtcclxuICAgIHRoaXMudGFyZ2V0cy5wdXNoKCBjb3B5ICk7XHJcbiAgfVxyXG5cclxuICBvbk1vdmVVcCggdDogSW5mbHV4UXVlcnkgKXtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXJnZXRzLmluZGV4T2YoIHQgKTtcclxuXHJcbiAgICBpZiggaW5kZXggPD0gMCApe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuXHRcdHRoaXMudGFyZ2V0cy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHRcdHRoaXMudGFyZ2V0cy5zcGxpY2UoIGluZGV4IC0gMSwgMCwgdCApXHJcbiAgfVxyXG5cclxuICBvbk1vdmVEb3duKCB0OiBJbmZsdXhRdWVyeSApe1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhcmdldHMuaW5kZXhPZiggdCApO1xyXG5cclxuICAgIGlmKCAtMSA9PSBpbmRleCB8fCBpbmRleCA9PSB0aGlzLnRhcmdldHMubGVuZ3RoIC0gMSApe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50YXJnZXRzLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cdFx0dGhpcy50YXJnZXRzLnNwbGljZSggaW5kZXggKyAxLCAwLCB0IClcclxuICB9XHJcblxyXG4gIHJlYnVpbGQoKXtcclxuICAgIHRoaXMudGltZS50aWNrKCk7XHJcbiAgfVxyXG59IiwiPHF1ZXJ5LWVkaXRvciAqbmdGb3I9XCJsZXQgdCBvZiBtZXRyaWNzLnRhcmdldHNcIlxyXG4gIFtxdWVyeV09XCJ0XCJcclxuICAocmVtb3ZlKT1cIm9uUmVtb3ZlKHQpXCJcclxuICAoZHVwbGljYXRlKT1cIm9uRHVwbGljYXRlKHQpXCJcclxuICAobW92ZVVwKT1cIm9uTW92ZVVwKHQpXCJcclxuICAobW92ZURvd24pPVwib25Nb3ZlRG93bih0KVwiXHJcbiAgKHJlYnVpbGQpPVwicmVidWlsZCgpXCI+XHJcbjwvcXVlcnktZWRpdG9yPlxyXG5cclxuPGRpdiBjbGFzcz1cImdmLWZvcm0tcXVlcnlcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLXF1ZXJ5LWxldHRlci1jZWxsXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1xdWVyeS1sZXR0ZXItY2VsbC1jYXJyZXRcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5LWxldHRlci1jZWxsLWxldHRlclwiPnt7bmV4dFJlZklkfX08L3NwYW4+XHJcbiAgICA8L2xhYmVsPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGdmLWZvcm0tYnRuXCIgKGNsaWNrKT1cIm9uQWRkUXVlcnkoKVwiID5cclxuICAgICAgQWRkIFF1ZXJ5XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4iXX0=