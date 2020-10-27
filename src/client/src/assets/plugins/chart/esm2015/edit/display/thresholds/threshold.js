import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ThresholdOperator, ThresholdColor, ThresholdAxis } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
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
ThresholdEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThresholdEditorComponent, selectors: [["editor-threshold"]], inputs: { threshold: "threshold", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 11, consts: [[1, "gf-form-inline"], ["width", "6", "remove-host", "", 3, "data", "ngModel", "label", "ngModelChange"], ["placeholder", "value", "type", "number", "width", "8", "remove-host", "", 3, "ngModel", "ngModelChange", "changed"], ["label", "Color", "remove-host", "", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Fill", "remove-host", "", 3, "ngModel", "ngModelChange", "checked"], ["label", "Line", "remove-host", "", 3, "ngModel", "ngModelChange", "checked"], ["label", "Line color", 3, "ngModel", "ngModelChange"], ["label", "Y-Axis", "remove-host", "", 3, "data", "ngModel", "ngModelChange"], [1, "gf-form"], [1, "gf-form-label"], [1, "pointer", 3, "click"], [1, "fa", "fa-trash"]], template: function ThresholdEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ed-dropdown", 1);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_1_listener($event) { return ctx.threshold.operator = $event; });
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
        i0.ɵɵelementStart(5, "ed-checkbox", 5);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.threshold.line = $event; })("checked", function ThresholdEditorComponent_Template_ed_checkbox_checked_5_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ed-color-picker", 6);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_color_picker_ngModelChange_6_listener($event) { return ctx.threshold.lineColor = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "ed-dropdown", 7);
        i0.ɵɵlistener("ngModelChange", function ThresholdEditorComponent_Template_ed_dropdown_ngModelChange_7_listener($event) { return ctx.threshold.axis = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 8);
        i0.ɵɵelementStart(9, "label", 9);
        i0.ɵɵelementStart(10, "a", 10);
        i0.ɵɵlistener("click", function ThresholdEditorComponent_Template_a_click_10_listener() { return ctx.removed.emit(ctx.threshold); });
        i0.ɵɵelement(11, "i", 11);
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
        i0.ɵɵproperty("ngModel", ctx.threshold.line);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.threshold.lineColor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.availableAxisValues)("ngModel", ctx.threshold.axis);
    } }, directives: [i1.DropDownComponent, i1.RemoveHostDirective, i2.NgControlStatus, i2.NgModel, i1.TextBoxComponent, i1.CheckBoxComponent, i1.ColorPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThresholdEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-threshold',
                templateUrl: './threshold.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { threshold: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZXNob2xkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RocmVzaG9sZHMvdGhyZXNob2xkLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RocmVzaG9sZHMvdGhyZXNob2xkLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDMUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQWEsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQU0vRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsd0JBQXdCO0lBMEJwRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQXRCUCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUVsRCw0QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUUsaUJBQWlCLENBQUUsQ0FBQztRQUUxRSx5QkFBb0IsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUUsY0FBYyxDQUFFLENBQUM7UUFFcEUsd0JBQW1CLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLGFBQWEsQ0FBRSxDQUFDO0lBaUJsRSxDQUFDO0lBZkQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUUsS0FBSztRQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBRSxDQUFDLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ3BCLE9BQU8sQ0FBRSxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFFLENBQUM7SUFDOUQsQ0FBQzs7Z0dBeEJXLHdCQUF3Qix1QkEwQmQsV0FBVzs2REExQnJCLHdCQUF3QjtRQ1ZyQyw4QkFDQztRQUFBLHNDQU1jO1FBSmIsbUtBQWdDO1FBSWpDLGlCQUFjO1FBRWQscUNBT2E7UUFOWixxSkFBbUIsZ0dBSVIsYUFBUyxJQUpEO1FBTXBCLGlCQUFhO1FBRWIsc0NBTWM7UUFKYixvS0FBaUMsaUhBRWQsYUFBUyxJQUZLO1FBSWxDLGlCQUFjO1FBRWQsc0NBS2U7UUFKZCwrSkFBNEIsaUdBRWpCLGFBQVMsSUFGUTtRQUk1QixpQkFBYztRQUVmLHNDQUtjO1FBSmIsK0pBQTRCLGlHQUVqQixhQUFTLElBRlE7UUFJN0IsaUJBQWM7UUFFZCwwQ0FHa0I7UUFEakIsd0tBQWlDO1FBQ2xDLGlCQUFrQjtRQUVsQixzQ0FJYztRQUZiLCtKQUE0QjtRQUU3QixpQkFBYztRQUVkLDhCQUNDO1FBQUEsZ0NBQ0M7UUFBQSw4QkFDQztRQURrQixpR0FBUywrQkFBeUIsSUFBQztRQUNyRCx5QkFBMkI7UUFDNUIsaUJBQUk7UUFDTCxpQkFBUTtRQUNULGlCQUFNO1FBRVAsaUJBQU07O1FBdkRKLGVBQW9CO1FBQXBCLDBEQUFvQjtRQUZwQixrREFBZ0MsbUNBQUE7UUFRaEMsZUFBbUI7UUFBbkIsbUNBQW1CO1FBU25CLGVBQTZCO1FBQTdCLCtDQUE2QixvQ0FBQTtRQVE3QixlQUE0QjtRQUE1Qiw0Q0FBNEI7UUFPNUIsZUFBNEI7UUFBNUIsNENBQTRCO1FBUTVCLGVBQWlDO1FBQWpDLGlEQUFpQztRQUlqQyxlQUE0QjtRQUE1Qiw4Q0FBNEIsK0JBQUE7O2tERHBDakIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsa0JBQWtCO2FBQ2hDOztzQkEyQmMsTUFBTTt1QkFBRSxXQUFXO3dCQXhCdkIsU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgRHJvcERvd25Db21wb25lbnQgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCB7IFRocmVzaG9sZE9wZXJhdG9yLCBUaHJlc2hvbGRDb2xvciwgVGhyZXNob2xkQXhpcywgVGhyZXNob2xkIH0gZnJvbSAnLi4vLi4vLi4vY2hhcnQubSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci10aHJlc2hvbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGhyZXNob2xkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRocmVzaG9sZEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdGhyZXNob2xkOiBUaHJlc2hvbGQ7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRocmVzaG9sZD4oKTtcblxuICBhdmFpbGFibGVPcGVyYXRvclZhbHVlcyA9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBUaHJlc2hvbGRPcGVyYXRvciApO1xuXG4gIGF2YWlsYWJsZUNvbG9yVmFsdWVzID0gRHJvcERvd25Db21wb25lbnQud3JhcEVudW0oIFRocmVzaG9sZENvbG9yICk7XG5cbiAgYXZhaWxhYmxlQXhpc1ZhbHVlcyA9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBUaHJlc2hvbGRBeGlzICk7XG4gIFxuICBnZXQgdmFsdWUoKXtcbiAgICByZXR1cm4gdGhpcy50aHJlc2hvbGQudmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUoIHZhbHVlICl7XG4gICAgY29uc3QgdiA9ICt2YWx1ZTtcbiAgICB0aGlzLnRocmVzaG9sZC52YWx1ZSA9IGlzTmFOKCB2ICkgfHwgIXZhbHVlID8gdW5kZWZpbmVkIDogdjtcbiAgfVxuXG4gIGdldCBzaG93Q3VzdG9tQ29sb3JzKCl7XG5cdFx0cmV0dXJuICggVGhyZXNob2xkQ29sb3IuQ3VzdG9tID09IHRoaXMudGhyZXNob2xkLmNvbG9yVHlwZSApO1xuXHR9XG4gXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0PGVkLWRyb3Bkb3duIFxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlT3BlcmF0b3JWYWx1ZXNcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQub3BlcmF0b3JcIlxyXG5cdFx0bGFiZWw9XCJUe3tpbmRleCsxfX1cIlxyXG5cdFx0d2lkdGg9XCI2XCJcclxuXHRcdHJlbW92ZS1ob3N0PlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG5cdDxlZC10ZXh0Ym94XHJcblx0XHRbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuXHRcdHBsYWNlaG9sZGVyPVwidmFsdWVcIlxyXG5cdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHR3aWR0aD1cIjhcIlxyXG5cdFx0KGNoYW5nZWQpPVwicmVmcmVzaCgpXCJcclxuXHRcdHJlbW92ZS1ob3N0PlxyXG5cdDwvZWQtdGV4dGJveD4gXHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZUNvbG9yVmFsdWVzXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGhyZXNob2xkLmNvbG9yVHlwZVwiXHJcblx0XHRsYWJlbD1cIkNvbG9yXCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwicmVmcmVzaCgpXCJcclxuXHRcdCByZW1vdmUtaG9zdCA+XHJcblx0PC9lZC1kcm9wZG93bj5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQuZmlsbFwiXHJcblx0XHRsYWJlbD1cIkZpbGxcIlxyXG5cdFx0KGNoZWNrZWQpPVwicmVmcmVzaCgpXCJcclxuXHRcdHJlbW92ZS1ob3N0PlxyXG5cdCA8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRbKG5nTW9kZWwpXT1cInRocmVzaG9sZC5saW5lXCJcclxuXHRcdGxhYmVsPVwiTGluZVwiXHJcblx0XHQoY2hlY2tlZCk9XCJyZWZyZXNoKClcIlxyXG5cdFx0cmVtb3ZlLWhvc3Q+XHJcblx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0PGVkLWNvbG9yLXBpY2tlciBcclxuXHRcdGxhYmVsPVwiTGluZSBjb2xvclwiXHJcblx0XHRbKG5nTW9kZWwpXT1cInRocmVzaG9sZC5saW5lQ29sb3JcIj5cclxuXHQ8L2VkLWNvbG9yLXBpY2tlcj5cclxuXHJcblx0PGVkLWRyb3Bkb3duIFxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlQXhpc1ZhbHVlc1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cInRocmVzaG9sZC5heGlzXCJcclxuXHRcdGxhYmVsPVwiWS1BeGlzXCIgIHJlbW92ZS1ob3N0ID5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHQ8YSBjbGFzcz1cInBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3ZlZC5lbWl0KCB0aHJlc2hvbGQgKVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbiJdfQ==