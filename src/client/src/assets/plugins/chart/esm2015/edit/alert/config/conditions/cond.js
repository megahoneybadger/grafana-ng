import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AlertConditionEditorComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1, "WHEN");
    i0.ɵɵelementEnd();
} }
function AlertConditionEditorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1, "And");
    i0.ɵɵelementEnd();
} }
export class AlertConditionEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 0;
        this.removed = new EventEmitter();
    }
}
AlertConditionEditorComponent.ɵfac = function AlertConditionEditorComponent_Factory(t) { return new (t || AlertConditionEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertConditionEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertConditionEditorComponent, selectors: [["editor-alert-condition"]], inputs: { condition: "condition", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 2, consts: [[1, "gf-form-inline"], [1, "gf-form"], ["class", "gf-form-label query-keyword width-5", 4, "ngIf"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], [1, "gf-form-label", "query-keyword", "width-5"]], template: function AlertConditionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, AlertConditionEditorComponent_span_2_Template, 2, 0, "span", 2);
        i0.ɵɵtemplate(3, AlertConditionEditorComponent_span_3_Template, 2, 0, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4, " cond ");
        i0.ɵɵelementStart(5, "div", 1);
        i0.ɵɵelementStart(6, "label", 3);
        i0.ɵɵlistener("click", function AlertConditionEditorComponent_Template_label_click_6_listener() { return ctx.removed.emit(ctx.condition); });
        i0.ɵɵelement(7, "i", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.index == 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.index != 0);
    } }, directives: [i1.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertConditionEditorComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvY29uZmlnL2NvbmRpdGlvbnMvY29uZC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvY29uZmlnL2NvbmRpdGlvbnMvY29uZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBeUIsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0lDQTVFLCtCQUFtRTtJQUFBLG9CQUFJO0lBQUEsaUJBQU87OztJQUM5RSwrQkFBbUU7SUFBQSxtQkFBRztJQUFBLGlCQUFPOztBREsvRSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsd0JBQXdCO0lBT3pFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBTFIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUVqQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFJdkQsQ0FBQzs7MEdBVFUsNkJBQTZCLHVCQU9uQixXQUFXO2tFQVByQiw2QkFBNkI7UUNUMUMsOEJBQ0M7UUFBQSw4QkFFQztRQUFBLGdGQUFtRTtRQUNuRSxnRkFBbUU7UUFDcEUsaUJBQU07UUFFTixzQkFFQTtRQUFBLDhCQUNDO1FBQUEsZ0NBQ0M7UUFEb0MseUdBQVMsK0JBQXVCLElBQUM7UUFDckUsdUJBQTJCO1FBQzVCLGlCQUFRO1FBQ1QsaUJBQU07UUFDUCxpQkFBTTs7UUFYOEMsZUFBZ0I7UUFBaEIscUNBQWdCO1FBQ2hCLGVBQWdCO1FBQWhCLHFDQUFnQjs7a0RES3ZELDZCQUE2QjtjQUp6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLGFBQWE7YUFDM0I7O3NCQVFjLE1BQU07dUJBQUUsV0FBVzt3QkFMdkIsU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydENvbmRpdGlvbiwgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcblxuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1hbGVydC1jb25kaXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbmRpdGlvbkVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCAge1xuXG4gIEBJbnB1dCgpIGNvbmRpdGlvbjogQWxlcnRDb25kaXRpb247XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIEBPdXRwdXQoKSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxBbGVydENvbmRpdGlvbj4oKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG4gIH1cblxuICBcbn1cbiIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHRcclxuXHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkIHdpZHRoLTVcIiAqbmdJZj1cImluZGV4PT0wXCI+V0hFTjwvc3Bhbj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkIHdpZHRoLTVcIiAqbmdJZj1cImluZGV4IT0wXCI+QW5kPC9zcGFuPlxyXG5cdDwvZGl2PlxyXG5cclxuXHRjb25kXHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3ZlZC5lbWl0KGNvbmRpdGlvbilcIj5cclxuXHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=