import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ThresholdOperator, ThresholdColor, ThresholdAxis } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function ThresholdEditorComponent_ed_color_picker_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-color-picker", 12);
    i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_ed_color_picker_5_Template_ed_color_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.threshold.fillColor = $event; })("selected", function ThresholdEditorComponent_ed_color_picker_5_Template_ed_color_picker_selected_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.refresh(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.threshold.fillColor);
} }
function ThresholdEditorComponent_ed_color_picker_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-color-picker", 13);
    i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_ed_color_picker_7_Template_ed_color_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.threshold.lineColor = $event; })("selected", function ThresholdEditorComponent_ed_color_picker_7_Template_ed_color_picker_selected_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.refresh(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r1.threshold.lineColor);
} }
export class ThresholdEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.removed = new EventEmitter();
        this.availableOperatorValues = DropDownComponent.wrapEnum(ThresholdOperator);
        this.availableColorValues = DropDownComponent.wrapEnum(ThresholdColor);
        this.availableAxisValues = DropDownComponent.wrapEnum(ThresholdAxis);
    }
    get value() {
        return this.threshold.value;
    }
    set value(value) {
        const v = +value;
        this.threshold.value = isNaN(v) || !value ? undefined : v;
    }
    get showCustomColors() {
        return (ThresholdColor.Custom == this.threshold.colorType);
    }
}
ThresholdEditorComponent.ɵfac = function ThresholdEditorComponent_Factory(t) { return new (t || ThresholdEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
ThresholdEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThresholdEditorComponent, selectors: [["editor-threshold"]], inputs: { threshold: "threshold", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 12, consts: [[1, "ed-form-inline"], ["width", "6", 3, "data", "ngModel", "label", "ngModelChange", "selectionChange"], ["placeholder", "value", "type", "number", "width", "8", 3, "ngModel", "ngModelChange", "changed"], ["label", "Color", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Fill", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Line", 3, "ngModel", "ngModelChange", "checked"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Y-Axis", 3, "data", "ngModel", "ngModelChange", "selectionChange"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected"]], template: function ThresholdEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ed-dropdown", 1);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_1_listener($event) { return ctx.threshold.operator = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_1_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ed-textbox", 2);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_textbox_ngModelChange_2_listener($event) { return ctx.value = $event; })("changed", function ThresholdEditorComponent_Template_ed_textbox_changed_2_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-dropdown", 3);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_3_listener($event) { return ctx.threshold.colorType = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_3_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.threshold.fill = $event; })("checked", function ThresholdEditorComponent_Template_ed_checkbox_checked_4_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ThresholdEditorComponent_ed_color_picker_5_Template, 1, 1, "ed-color-picker", 5);
        i0.ɵɵelementStart(6, "ed-checkbox", 6);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_checkbox_ngModelChange_6_listener($event) { return ctx.threshold.line = $event; })("checked", function ThresholdEditorComponent_Template_ed_checkbox_checked_6_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, ThresholdEditorComponent_ed_color_picker_7_Template, 1, 1, "ed-color-picker", 7);
        i0.ɵɵelementStart(8, "ed-dropdown", 8);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_8_listener($event) { return ctx.threshold.axis = $event; })("selectionChange", function ThresholdEditorComponent_Template_ed_dropdown_selectionChange_8_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 9);
        i0.ɵɵelementStart(10, "label", 10);
        i0.ɵɵlistener("click", function ThresholdEditorComponent_Template_label_click_10_listener() { return ctx.removed.emit(ctx.threshold); });
        i0.ɵɵelementStart(11, "a");
        i0.ɵɵelement(12, "i", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate1("label", "T", ctx.index + 1, "");
        i0.ɵɵproperty("data", ctx.availableOperatorValues)("ngModel", ctx.threshold.operator);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.availableColorValues)("ngModel", ctx.threshold.colorType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.threshold.fill);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCustomColors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.threshold.line);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCustomColors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.availableAxisValues)("ngModel", ctx.threshold.axis);
    } }, directives: [i2.DropDownComponent, i3.NgControlStatus, i3.NgModel, i2.TextBoxComponent, i2.CheckBoxComponent, i4.NgIf, i2.ColorPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThresholdEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-threshold',
                templateUrl: './threshold.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { threshold: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZXNob2xkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RocmVzaG9sZHMvdGhyZXNob2xkLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RocmVzaG9sZHMvdGhyZXNob2xkLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDMUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQWEsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7SUMwQjlGLDJDQUlrQjtJQUZqQix1UEFBaUMsdU1BQUE7SUFFbEMsaUJBQWtCOzs7SUFGakIsb0RBQWlDOzs7O0lBVWxDLDJDQUlrQjtJQUZqQix1UEFBaUMsdU1BQUE7SUFFbEMsaUJBQWtCOzs7SUFGakIsb0RBQWlDOztBRGxDbkMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHdCQUF3QjtJQTBCcEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUF0QlAsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFbEQsNEJBQXVCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLGlCQUFpQixDQUFFLENBQUM7UUFFMUUseUJBQW9CLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLGNBQWMsQ0FBRSxDQUFDO1FBRXBFLHdCQUFtQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBRSxhQUFhLENBQUUsQ0FBQztJQWlCbEUsQ0FBQztJQWZELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFFLEtBQUs7UUFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNwQixPQUFPLENBQUUsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBRSxDQUFDO0lBQzlELENBQUM7O2dHQXhCVyx3QkFBd0IsdUJBMEJkLFdBQVc7NkRBMUJyQix3QkFBd0I7UUNWckMsOEJBQ0M7UUFBQSxzQ0FNYztRQUpiLG1LQUFnQyxpSEFHYixhQUFTLElBSEk7UUFJakMsaUJBQWM7UUFFZCxxQ0FNYTtRQUxaLHFKQUFtQixnR0FJUixhQUFTLElBSkQ7UUFLcEIsaUJBQWE7UUFFYixzQ0FLYztRQUhiLG9LQUFpQyxpSEFFZCxhQUFTLElBRks7UUFHbEMsaUJBQWM7UUFFZCxzQ0FJZTtRQUhkLCtKQUE0QixpR0FFakIsYUFBUyxJQUZRO1FBRzVCLGlCQUFjO1FBRWYsaUdBSUE7UUFFQSxzQ0FJYztRQUhiLCtKQUE0QixpR0FFakIsYUFBUyxJQUZRO1FBRzdCLGlCQUFjO1FBRWQsaUdBSUE7UUFFQSxzQ0FLYztRQUhiLCtKQUE0QixpSEFFVCxhQUFTLElBRkE7UUFHN0IsaUJBQWM7UUFFZCw4QkFDQztRQUFBLGtDQUNDO1FBRG9DLHFHQUFTLCtCQUF5QixJQUFDO1FBQ3ZFLDBCQUNDO1FBQUEseUJBQTJCO1FBQzVCLGlCQUFJO1FBQ0wsaUJBQVE7UUFDVCxpQkFBTTtRQUVQLGlCQUFNOztRQTNESixlQUFvQjtRQUFwQiwwREFBb0I7UUFGcEIsa0RBQWdDLG1DQUFBO1FBUWhDLGVBQW1CO1FBQW5CLG1DQUFtQjtRQVFuQixlQUE2QjtRQUE3QiwrQ0FBNkIsb0NBQUE7UUFPN0IsZUFBNEI7UUFBNUIsNENBQTRCO1FBS1osZUFBd0I7UUFBeEIsMkNBQXdCO1FBT3hDLGVBQTRCO1FBQTVCLDRDQUE0QjtRQUtaLGVBQXdCO1FBQXhCLDJDQUF3QjtRQU94QyxlQUE0QjtRQUE1Qiw4Q0FBNEIsK0JBQUE7O2tERHZDakIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsa0JBQWtCO2FBQ2hDOztzQkEyQmMsTUFBTTt1QkFBRSxXQUFXO3dCQXhCdkIsU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgRHJvcERvd25Db21wb25lbnQgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCB7IFRocmVzaG9sZE9wZXJhdG9yLCBUaHJlc2hvbGRDb2xvciwgVGhyZXNob2xkQXhpcywgVGhyZXNob2xkIH0gZnJvbSAnLi4vLi4vLi4vY2hhcnQubSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci10aHJlc2hvbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGhyZXNob2xkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRocmVzaG9sZEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdGhyZXNob2xkOiBUaHJlc2hvbGQ7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRocmVzaG9sZD4oKTtcblxuICBhdmFpbGFibGVPcGVyYXRvclZhbHVlcyA9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBUaHJlc2hvbGRPcGVyYXRvciApO1xuXG4gIGF2YWlsYWJsZUNvbG9yVmFsdWVzID0gRHJvcERvd25Db21wb25lbnQud3JhcEVudW0oIFRocmVzaG9sZENvbG9yICk7XG5cbiAgYXZhaWxhYmxlQXhpc1ZhbHVlcyA9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBUaHJlc2hvbGRBeGlzICk7XG4gIFxuICBnZXQgdmFsdWUoKXtcbiAgICByZXR1cm4gdGhpcy50aHJlc2hvbGQudmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUoIHZhbHVlICl7XG4gICAgY29uc3QgdiA9ICt2YWx1ZTtcbiAgICB0aGlzLnRocmVzaG9sZC52YWx1ZSA9IGlzTmFOKCB2ICkgfHwgIXZhbHVlID8gdW5kZWZpbmVkIDogdjtcbiAgfVxuXG4gIGdldCBzaG93Q3VzdG9tQ29sb3JzKCl7XG5cdFx0cmV0dXJuICggVGhyZXNob2xkQ29sb3IuQ3VzdG9tID09IHRoaXMudGhyZXNob2xkLmNvbG9yVHlwZSApO1xuXHR9XG4gXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImVkLWZvcm0taW5saW5lXCI+XHJcblx0PGVkLWRyb3Bkb3duIFxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlT3BlcmF0b3JWYWx1ZXNcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQub3BlcmF0b3JcIlxyXG5cdFx0bGFiZWw9XCJUe3tpbmRleCsxfX1cIlxyXG5cdFx0d2lkdGg9XCI2XCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwicmVmcmVzaCgpXCI+XHJcblx0PC9lZC1kcm9wZG93bj5cclxuXHJcblx0PGVkLXRleHRib3hcclxuXHRcdFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG5cdFx0cGxhY2Vob2xkZXI9XCJ2YWx1ZVwiXHJcblx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdHdpZHRoPVwiOFwiXHJcblx0XHQoY2hhbmdlZCk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLXRleHRib3g+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZUNvbG9yVmFsdWVzXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGhyZXNob2xkLmNvbG9yVHlwZVwiXHJcblx0XHRsYWJlbD1cIkNvbG9yXCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwicmVmcmVzaCgpXCI+XHJcblx0PC9lZC1kcm9wZG93bj5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQuZmlsbFwiXHJcblx0XHRsYWJlbD1cIkZpbGxcIlxyXG5cdFx0KGNoZWNrZWQpPVwicmVmcmVzaCgpXCI+XHJcblx0IDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jb2xvci1waWNrZXIgKm5nSWY9XCJzaG93Q3VzdG9tQ29sb3JzXCJcdFxyXG5cdFx0bGFiZWw9XCJGaWxsIGNvbG9yXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGhyZXNob2xkLmZpbGxDb2xvclwiXHJcblx0XHQoc2VsZWN0ZWQpPVwicmVmcmVzaCgpXCI+XHJcblx0PC9lZC1jb2xvci1waWNrZXI+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdFsobmdNb2RlbCldPVwidGhyZXNob2xkLmxpbmVcIlxyXG5cdFx0bGFiZWw9XCJMaW5lXCJcclxuXHRcdChjaGVja2VkKT1cInJlZnJlc2goKVwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jb2xvci1waWNrZXIgKm5nSWY9XCJzaG93Q3VzdG9tQ29sb3JzXCJcdFxyXG5cdFx0bGFiZWw9XCJMaW5lIGNvbG9yXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGhyZXNob2xkLmxpbmVDb2xvclwiXHJcblx0XHQoc2VsZWN0ZWQpPVwicmVmcmVzaCgpXCI+XHJcblx0PC9lZC1jb2xvci1waWNrZXI+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZUF4aXNWYWx1ZXNcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQuYXhpc1wiXHJcblx0XHRsYWJlbD1cIlktQXhpc1wiXHJcblx0XHQoc2VsZWN0aW9uQ2hhbmdlKT1cInJlZnJlc2goKVwiID5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBwb2ludGVyXCIgKGNsaWNrKT1cInJlbW92ZWQuZW1pdCggdGhyZXNob2xkIClcIj5cclxuXHRcdFx0PGE+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuIl19