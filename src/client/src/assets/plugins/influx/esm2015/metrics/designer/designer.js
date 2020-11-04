import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "./query/query";
function InfluxMetricsDesignerComponent_query_editor_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "query-editor", 1);
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
    onRemove(t) {
        const index = this.metrics.targets.indexOf(t);
        if (-1 !== index) {
            this.metrics.targets.splice(index, 1);
            this.rebuild();
        }
    }
    onMoveUp(t) {
    }
    onMoveDown(t) {
        console.log('onMoveDown');
    }
    onDuplicate(t) {
        this.metrics.targets.push(_.cloneDeep(t));
    }
    rebuild() {
        //console.log( this.metrics );
        this.time.tick();
    }
}
InfluxMetricsDesignerComponent.ɵfac = function InfluxMetricsDesignerComponent_Factory(t) { return new (t || InfluxMetricsDesignerComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
InfluxMetricsDesignerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxMetricsDesignerComponent, selectors: [["metrics-designer"]], decls: 1, vars: 1, consts: [[3, "query", "remove", "duplicate", "moveUp", "moveDown", "rebuild", 4, "ngFor", "ngForOf"], [3, "query", "remove", "duplicate", "moveUp", "moveDown", "rebuild"]], template: function InfluxMetricsDesignerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, InfluxMetricsDesignerComponent_query_editor_0_Template, 1, 1, "query-editor", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.metrics.targets);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvZGVzaWduZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvZGVzaWduZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFrQixNQUFNLFFBQVEsQ0FBQztBQUU1RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7OztJQ0g1Qix1Q0FPZTtJQUxiLGlQQUFzQiw2T0FBQSxvT0FBQSwwT0FBQSxxTUFBQTtJQUt4QixpQkFBZTs7O0lBTmIsNEJBQVc7O0FEUWIsTUFBTSxPQUFPLDhCQUE4QjtJQVN6QyxZQUNnQyxLQUFZLEVBQ2xDLElBQW9CO1FBREUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUU5QixDQUFDO0lBWEQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJO2FBQ1IsS0FBSzthQUNMLE1BQU07YUFDTixPQUFPLENBQUM7SUFDYixDQUFDO0lBUUQsUUFBUSxDQUFFLENBQWM7UUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBRWhELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBRSxDQUFjO0lBRXhCLENBQUM7SUFFRCxVQUFVLENBQUUsQ0FBYztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFFLFlBQVksQ0FBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXLENBQUUsQ0FBYztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFBO0lBQy9DLENBQUM7SUFFRCxPQUFPO1FBQ0wsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7NEdBdkNVLDhCQUE4Qix1QkFVOUIsV0FBVzttRUFWWCw4QkFBOEI7UUNUM0MsaUdBT0E7O1FBUGMsNkNBQWlDOztrRERTbEMsOEJBQThCO2NBSjFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsaUJBQWlCO2FBQy9COztzQkFXSSxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4sIFRpbWVSYW5nZVN0b3JlIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgSW5mbHV4UXVlcnkgfSBmcm9tICcuLi9tZXRyaWNzLm0nO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21ldHJpY3MtZGVzaWduZXInLFxyXG4gIHRlbXBsYXRlVXJsOiBgLi9kZXNpZ25lci5odG1sYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5mbHV4TWV0cmljc0Rlc2lnbmVyQ29tcG9uZW50IHtcclxuXHJcbiAgZ2V0IG1ldHJpY3MoKTphbnl7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAucGFuZWxcclxuICAgICAgLndpZGdldFxyXG4gICAgICAubWV0cmljcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwdWJsaWMgcGFuZWw6IFBhbmVsLFxyXG4gICAgcHJpdmF0ZSB0aW1lOiBUaW1lUmFuZ2VTdG9yZSl7XHJcblxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmUoIHQ6IEluZmx1eFF1ZXJ5LCAgKXtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tZXRyaWNzLnRhcmdldHMuaW5kZXhPZiggdCApO1xyXG5cclxuICAgIGlmKCAtMSAhPT0gaW5kZXggKXtcclxuICAgICAgdGhpcy5tZXRyaWNzLnRhcmdldHMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG4gICAgICB0aGlzLnJlYnVpbGQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW92ZVVwKCB0OiBJbmZsdXhRdWVyeSApe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBvbk1vdmVEb3duKCB0OiBJbmZsdXhRdWVyeSApe1xyXG4gICAgY29uc29sZS5sb2coICdvbk1vdmVEb3duJyApO1xyXG4gIH1cclxuXHJcbiAgb25EdXBsaWNhdGUoIHQ6IEluZmx1eFF1ZXJ5ICl7XHJcbiAgICB0aGlzLm1ldHJpY3MudGFyZ2V0cy5wdXNoKCBfLmNsb25lRGVlcCggdCApIClcclxuICB9XHJcblxyXG4gIHJlYnVpbGQoKXtcclxuICAgIC8vY29uc29sZS5sb2coIHRoaXMubWV0cmljcyApO1xyXG4gICAgdGhpcy50aW1lLnRpY2soKTtcclxuICB9XHJcbn0iLCI8cXVlcnktZWRpdG9yICpuZ0Zvcj1cImxldCB0IG9mIG1ldHJpY3MudGFyZ2V0c1wiXHJcbiAgW3F1ZXJ5XT1cInRcIlxyXG4gIChyZW1vdmUpPVwib25SZW1vdmUodClcIlxyXG4gIChkdXBsaWNhdGUpPVwib25EdXBsaWNhdGUodClcIlxyXG4gIChtb3ZlVXApPVwib25Nb3ZlVXAodClcIlxyXG4gIChtb3ZlRG93bik9XCJvbk1vdmVEb3duKHQpXCJcclxuICAocmVidWlsZCk9XCJyZWJ1aWxkKClcIj5cclxuPC9xdWVyeS1lZGl0b3I+XHJcblxyXG4iXX0=