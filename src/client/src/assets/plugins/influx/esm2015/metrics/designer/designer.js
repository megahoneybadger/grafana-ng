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
        var _a;
        let index = 0;
        while (true) {
            let candidate = String
                .fromCharCode(65 + index++)
                .toUpperCase();
            let p = Math.round(index / 25);
            if (p > 0) {
                candidate += p;
            }
            let duplicate = (_a = this.targets) === null || _a === void 0 ? void 0 : _a.find(x => candidate == x.refId);
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
        var _a;
        const q = new InfluxQuery();
        q.refId = this.nextRefId;
        q.groupBy.push(new GroupByObject(GroupByOption.Time, [MetricVars.TIME_INTERVAL]));
        this.metrics.targets = (_a = this.targets) !== null && _a !== void 0 ? _a : [];
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
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.TimeRangeStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvZGVzaWduZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvZGVzaWduZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFrQixNQUFNLFFBQVEsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXJGLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0lDSjVCLHVDQU9lO0lBTGIsaVBBQXNCLDZPQUFBLG9PQUFBLDBPQUFBLHFNQUFBO0lBS3hCLGlCQUFlOzs7SUFOYiw0QkFBVzs7QURTYixNQUFNLE9BQU8sOEJBQThCO0lBbUN6QyxZQUNnQyxLQUFZLEVBQ2xDLElBQW9CO1FBREUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUU5QixDQUFDO0lBckNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSTthQUNSLEtBQUs7YUFDTCxNQUFNO2FBQ04sT0FBTyxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksU0FBUzs7UUFDWCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxPQUFPLElBQUksRUFBRTtZQUNYLElBQUksU0FBUyxHQUFHLE1BQU07aUJBQ25CLFlBQVksQ0FBQyxF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QyxFQUFFLENBQUMsQ0FBRSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs0R0FoR1UsOEJBQThCLHVCQW9DOUIsV0FBVzttRUFwQ1gsOEJBQThCO1FDVjNDLGlHQU9BO1FBRUEsOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLGdDQUNFO1FBQUEsK0JBQ0U7UUFBQSx1QkFBZ0M7UUFDbEMsaUJBQU87UUFDUCwrQkFBK0M7UUFBQSxZQUFhO1FBQUEsaUJBQU87UUFDckUsaUJBQVE7UUFDUixpQ0FDRTtRQUQ0QywyR0FBUyxnQkFBWSxJQUFDO1FBQ2xFLDJCQUNGO1FBQUEsaUJBQVM7UUFDWCxpQkFBTTtRQUNSLGlCQUFNOztRQXJCUSw2Q0FBaUM7UUFlTSxlQUFhO1FBQWIsbUNBQWE7O2tERExyRCw4QkFBOEI7Y0FKMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxpQkFBaUI7YUFDL0I7O3NCQXFDSSxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4sIFRpbWVSYW5nZVN0b3JlIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgSW5mbHV4UXVlcnksIEdyb3VwQnlPYmplY3QsIEdyb3VwQnlPcHRpb24sIE1ldHJpY1ZhcnMgfSBmcm9tICcuLi9tZXRyaWNzLm0nO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZXRyaWNzLWRlc2lnbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogYC4vZGVzaWduZXIuaHRtbGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZmx1eE1ldHJpY3NEZXNpZ25lckNvbXBvbmVudCB7XHJcblxyXG4gIGdldCBtZXRyaWNzKCk6YW55e1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnBhbmVsXHJcbiAgICAgIC53aWRnZXRcclxuICAgICAgLm1ldHJpY3M7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFyZ2V0cygpOiBJbmZsdXhRdWVyeVtdIHtcclxuICAgIHJldHVybiB0aGlzLm1ldHJpY3MudGFyZ2V0cztcclxuICB9XHJcblxyXG4gIGdldCBuZXh0UmVmSWQoKXtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4gICAgd2hpbGUoIHRydWUgKXtcclxuICAgICAgbGV0IGNhbmRpZGF0ZSA9IFN0cmluZ1xyXG4gICAgICAgIC5mcm9tQ2hhckNvZGUoNjUgKyBpbmRleCsrKVxyXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgbGV0IHAgPSBNYXRoLnJvdW5kKCBpbmRleCAvIDI1ICk7XHJcblxyXG4gICAgICBpZiggcCA+IDAgKXtcclxuICAgICAgICBjYW5kaWRhdGUgKz0gcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGR1cGxpY2F0ZSA9IHRoaXMudGFyZ2V0cz8uZmluZCggeCA9PiBjYW5kaWRhdGUgPT0geC5yZWZJZCApO1xyXG5cclxuICAgICAgaWYoICFkdXBsaWNhdGUgKXtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcHVibGljIHBhbmVsOiBQYW5lbCxcclxuICAgIHByaXZhdGUgdGltZTogVGltZVJhbmdlU3RvcmUpe1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBpZiggIXRoaXMudGFyZ2V0cz8ubGVuZ3RoICl7XHJcbiAgICAgIHRoaXMub25BZGRRdWVyeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25BZGRRdWVyeSgpe1xyXG4gICAgY29uc3QgcSA9IG5ldyBJbmZsdXhRdWVyeSgpO1xyXG5cclxuICAgIHEucmVmSWQgPSB0aGlzLm5leHRSZWZJZDtcclxuICAgIHEuZ3JvdXBCeS5wdXNoKCBuZXcgR3JvdXBCeU9iamVjdCggR3JvdXBCeU9wdGlvbi5UaW1lLCBbTWV0cmljVmFycy5USU1FX0lOVEVSVkFMXSApICk7XHJcblxyXG4gICAgdGhpcy5tZXRyaWNzLnRhcmdldHMgPSB0aGlzLnRhcmdldHMgPz8gW107XHJcbiAgICB0aGlzLnRhcmdldHMucHVzaCggcSApO1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmUoIHQ6IEluZmx1eFF1ZXJ5LCAgKXtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXJnZXRzLmluZGV4T2YoIHQgKTtcclxuXHJcbiAgICBpZiggLTEgIT09IGluZGV4ICl7XHJcbiAgICAgIHRoaXMudGFyZ2V0cy5zcGxpY2UoIGluZGV4LCAxICk7XHJcbiAgICAgIHRoaXMucmVidWlsZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EdXBsaWNhdGUoIHQ6IEluZmx1eFF1ZXJ5ICl7XHJcbiAgICBjb25zdCBjb3B5ID0gXy5jbG9uZURlZXAoIHQgKVxyXG4gICAgY29weS5yZWZJZCA9IHRoaXMubmV4dFJlZklkO1xyXG4gICAgdGhpcy50YXJnZXRzLnB1c2goIGNvcHkgKTtcclxuICB9XHJcblxyXG4gIG9uTW92ZVVwKCB0OiBJbmZsdXhRdWVyeSApe1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhcmdldHMuaW5kZXhPZiggdCApO1xyXG5cclxuICAgIGlmKCBpbmRleCA8PSAwICl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG5cdFx0dGhpcy50YXJnZXRzLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cdFx0dGhpcy50YXJnZXRzLnNwbGljZSggaW5kZXggLSAxLCAwLCB0IClcclxuICB9XHJcblxyXG4gIG9uTW92ZURvd24oIHQ6IEluZmx1eFF1ZXJ5ICl7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFyZ2V0cy5pbmRleE9mKCB0ICk7XHJcblxyXG4gICAgaWYoIC0xID09IGluZGV4IHx8IGluZGV4ID09IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxICl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRhcmdldHMuc3BsaWNlKCBpbmRleCwgMSk7XHJcblx0XHR0aGlzLnRhcmdldHMuc3BsaWNlKCBpbmRleCArIDEsIDAsIHQgKVxyXG4gIH1cclxuXHJcbiAgcmVidWlsZCgpe1xyXG4gICAgdGhpcy50aW1lLnRpY2soKTtcclxuICB9XHJcbn0iLCI8cXVlcnktZWRpdG9yICpuZ0Zvcj1cImxldCB0IG9mIG1ldHJpY3MudGFyZ2V0c1wiXHJcbiAgW3F1ZXJ5XT1cInRcIlxyXG4gIChyZW1vdmUpPVwib25SZW1vdmUodClcIlxyXG4gIChkdXBsaWNhdGUpPVwib25EdXBsaWNhdGUodClcIlxyXG4gIChtb3ZlVXApPVwib25Nb3ZlVXAodClcIlxyXG4gIChtb3ZlRG93bik9XCJvbk1vdmVEb3duKHQpXCJcclxuICAocmVidWlsZCk9XCJyZWJ1aWxkKClcIj5cclxuPC9xdWVyeS1lZGl0b3I+XHJcblxyXG48ZGl2IGNsYXNzPVwiZ2YtZm9ybS1xdWVyeVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tcXVlcnktbGV0dGVyLWNlbGxcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5LWxldHRlci1jZWxsLWNhcnJldFwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImdmLWZvcm0tcXVlcnktbGV0dGVyLWNlbGwtbGV0dGVyXCI+e3tuZXh0UmVmSWR9fTwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZ2YtZm9ybS1idG5cIiAoY2xpY2spPVwib25BZGRRdWVyeSgpXCIgPlxyXG4gICAgICBBZGQgUXVlcnlcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==