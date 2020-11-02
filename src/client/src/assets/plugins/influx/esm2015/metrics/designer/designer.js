import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./query/query";
function InfluxMetricsDesignerComponent_query_editor_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "query-editor", 1);
    i0.ɵɵlistener("remove", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_remove_0_listener() { i0.ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove(t_r1); })("duplicate", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_duplicate_0_listener() { i0.ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onDuplicate(t_r1); })("moveUp", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveUp_0_listener() { i0.ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onMoveUp(t_r1); })("moveDown", function InfluxMetricsDesignerComponent_query_editor_0_Template_query_editor_moveDown_0_listener() { i0.ɵɵrestoreView(_r3); const t_r1 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onMoveDown(t_r1); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    i0.ɵɵproperty("query", t_r1);
} }
export class InfluxMetricsDesignerComponent {
    constructor(panel) {
        this.panel = panel;
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
        }
    }
    onMoveUp(t) {
        console.log('onMoveUp');
    }
    onMoveDown(t) {
        console.log('onMoveDown');
    }
    onDuplicate(t) {
        console.log('duplicate');
    }
}
InfluxMetricsDesignerComponent.ɵfac = function InfluxMetricsDesignerComponent_Factory(t) { return new (t || InfluxMetricsDesignerComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
InfluxMetricsDesignerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InfluxMetricsDesignerComponent, selectors: [["metrics-designer"]], decls: 1, vars: 1, consts: [[3, "query", "remove", "duplicate", "moveUp", "moveDown", 4, "ngFor", "ngForOf"], [3, "query", "remove", "duplicate", "moveUp", "moveDown"]], template: function InfluxMetricsDesignerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, InfluxMetricsDesignerComponent_query_editor_0_Template, 1, 1, "query-editor", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.metrics.targets);
    } }, directives: [i1.NgForOf, i2.QueryEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InfluxMetricsDesignerComponent, [{
        type: Component,
        args: [{
                selector: 'metrics-designer',
                templateUrl: `./designer.html`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvZGVzaWduZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvZGVzaWduZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7SUNENUMsdUNBTWU7SUFKYixpUEFBc0IsNk9BQUEsb09BQUEsME9BQUE7SUFJeEIsaUJBQWU7OztJQUxiLDRCQUFXOztBRE9iLE1BQU0sT0FBTyw4QkFBOEI7SUFTekMsWUFBMEMsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFDdEQsQ0FBQztJQVJELElBQUksT0FBTztRQUNULE9BQU8sSUFBSTthQUNSLEtBQUs7YUFDTCxNQUFNO2FBQ04sT0FBTyxDQUFDO0lBQ2IsQ0FBQztJQUtELFFBQVEsQ0FBRSxDQUFjO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBRSxDQUFjO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFVBQVUsQ0FBRSxDQUFjO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUUsWUFBWSxDQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBRSxDQUFjO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUM7SUFDN0IsQ0FBQzs7NEdBOUJVLDhCQUE4Qix1QkFTcEIsV0FBVzttRUFUckIsOEJBQThCO1FDUjNDLGlHQU1BOztRQU5jLDZDQUFpQzs7a0REUWxDLDhCQUE4QjtjQUoxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLGlCQUFpQjthQUMvQjs7c0JBVWMsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgSW5mbHV4UXVlcnkgfSBmcm9tICcuLi9tZXRyaWNzLm0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZXRyaWNzLWRlc2lnbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogYC4vZGVzaWduZXIuaHRtbGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZmx1eE1ldHJpY3NEZXNpZ25lckNvbXBvbmVudCB7XHJcblxyXG4gIGdldCBtZXRyaWNzKCk6YW55e1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnBhbmVsXHJcbiAgICAgIC53aWRnZXRcclxuICAgICAgLm1ldHJpY3M7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHB1YmxpYyBwYW5lbDogUGFuZWwpe1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmUoIHQ6IEluZmx1eFF1ZXJ5ICl7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWV0cmljcy50YXJnZXRzLmluZGV4T2YoIHQgKTtcclxuXHJcbiAgICBpZiggLTEgIT09IGluZGV4ICl7XHJcbiAgICAgIHRoaXMubWV0cmljcy50YXJnZXRzLnNwbGljZSggaW5kZXgsIDEgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW92ZVVwKCB0OiBJbmZsdXhRdWVyeSApe1xyXG4gICAgY29uc29sZS5sb2coICdvbk1vdmVVcCcgKTtcclxuICB9XHJcblxyXG4gIG9uTW92ZURvd24oIHQ6IEluZmx1eFF1ZXJ5ICl7XHJcbiAgICBjb25zb2xlLmxvZyggJ29uTW92ZURvd24nICk7XHJcbiAgfVxyXG5cclxuICBvbkR1cGxpY2F0ZSggdDogSW5mbHV4UXVlcnkgKXtcclxuICAgIGNvbnNvbGUubG9nKCAnZHVwbGljYXRlJyApO1xyXG4gIH1cclxufSIsIjxxdWVyeS1lZGl0b3IgKm5nRm9yPVwibGV0IHQgb2YgbWV0cmljcy50YXJnZXRzXCJcclxuICBbcXVlcnldPVwidFwiXHJcbiAgKHJlbW92ZSk9XCJvblJlbW92ZSh0KVwiXHJcbiAgKGR1cGxpY2F0ZSk9XCJvbkR1cGxpY2F0ZSh0KVwiXHJcbiAgKG1vdmVVcCk9XCJvbk1vdmVVcCh0KVwiXHJcbiAgKG1vdmVEb3duKT1cIm9uTW92ZURvd24odClcIj5cclxuPC9xdWVyeS1lZGl0b3I+XHJcblxyXG4iXX0=