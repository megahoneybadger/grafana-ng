import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ThresholdOperator, ThresholdColor, ThresholdAxis } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
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
    } }, directives: [i1.DropDownComponent, i2.NgControlStatus, i2.NgModel, i1.TextBoxComponent, i1.CheckBoxComponent, i3.NgIf, i1.ColorPickerComponent], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZXNob2xkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RocmVzaG9sZHMvdGhyZXNob2xkLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RocmVzaG9sZHMvdGhyZXNob2xkLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDMUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQWEsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztJQzBCOUYsMkNBSWtCO0lBRmpCLHVQQUFpQyx1TUFBQTtJQUVsQyxpQkFBa0I7OztJQUZqQixvREFBaUM7Ozs7SUFVbEMsMkNBSWtCO0lBRmpCLHVQQUFpQyx1TUFBQTtJQUVsQyxpQkFBa0I7OztJQUZqQixvREFBaUM7O0FEbENuQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsd0JBQXdCO0lBMEJwRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQXRCUCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUVsRCw0QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUUsaUJBQWlCLENBQUUsQ0FBQztRQUUxRSx5QkFBb0IsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUUsY0FBYyxDQUFFLENBQUM7UUFFcEUsd0JBQW1CLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLGFBQWEsQ0FBRSxDQUFDO0lBaUJsRSxDQUFDO0lBZkQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUUsS0FBSztRQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBRSxDQUFDLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ3BCLE9BQU8sQ0FBRSxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFFLENBQUM7SUFDOUQsQ0FBQzs7Z0dBeEJXLHdCQUF3Qix1QkEwQmQsV0FBVzs2REExQnJCLHdCQUF3QjtRQ1ZyQyw4QkFDQztRQUFBLHNDQU1jO1FBSmIsbUtBQWdDLGlIQUdiLGFBQVMsSUFISTtRQUlqQyxpQkFBYztRQUVkLHFDQU1hO1FBTFoscUpBQW1CLGdHQUlSLGFBQVMsSUFKRDtRQUtwQixpQkFBYTtRQUViLHNDQUtjO1FBSGIsb0tBQWlDLGlIQUVkLGFBQVMsSUFGSztRQUdsQyxpQkFBYztRQUVkLHNDQUllO1FBSGQsK0pBQTRCLGlHQUVqQixhQUFTLElBRlE7UUFHNUIsaUJBQWM7UUFFZixpR0FJQTtRQUVBLHNDQUljO1FBSGIsK0pBQTRCLGlHQUVqQixhQUFTLElBRlE7UUFHN0IsaUJBQWM7UUFFZCxpR0FJQTtRQUVBLHNDQUtjO1FBSGIsK0pBQTRCLGlIQUVULGFBQVMsSUFGQTtRQUc3QixpQkFBYztRQUVkLDhCQUNDO1FBQUEsa0NBQ0M7UUFEb0MscUdBQVMsK0JBQXlCLElBQUM7UUFDdkUsMEJBQ0M7UUFBQSx5QkFBMkI7UUFDNUIsaUJBQUk7UUFDTCxpQkFBUTtRQUNULGlCQUFNO1FBRVAsaUJBQU07O1FBM0RKLGVBQW9CO1FBQXBCLDBEQUFvQjtRQUZwQixrREFBZ0MsbUNBQUE7UUFRaEMsZUFBbUI7UUFBbkIsbUNBQW1CO1FBUW5CLGVBQTZCO1FBQTdCLCtDQUE2QixvQ0FBQTtRQU83QixlQUE0QjtRQUE1Qiw0Q0FBNEI7UUFLWixlQUF3QjtRQUF4QiwyQ0FBd0I7UUFPeEMsZUFBNEI7UUFBNUIsNENBQTRCO1FBS1osZUFBd0I7UUFBeEIsMkNBQXdCO1FBT3hDLGVBQTRCO1FBQTVCLDhDQUE0QiwrQkFBQTs7a0REdkNqQix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxrQkFBa0I7YUFDaEM7O3NCQTJCYyxNQUFNO3VCQUFFLFdBQVc7d0JBeEJ2QixTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBRUksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuaW1wb3J0IHsgVGhyZXNob2xkT3BlcmF0b3IsIFRocmVzaG9sZENvbG9yLCBUaHJlc2hvbGRBeGlzLCBUaHJlc2hvbGQgfSBmcm9tICcuLi8uLi8uLi9jaGFydC5tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLXRocmVzaG9sZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90aHJlc2hvbGQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGhyZXNob2xkRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB0aHJlc2hvbGQ6IFRocmVzaG9sZDtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGhyZXNob2xkPigpO1xuXG4gIGF2YWlsYWJsZU9wZXJhdG9yVmFsdWVzID0gRHJvcERvd25Db21wb25lbnQud3JhcEVudW0oIFRocmVzaG9sZE9wZXJhdG9yICk7XG5cbiAgYXZhaWxhYmxlQ29sb3JWYWx1ZXMgPSBEcm9wRG93bkNvbXBvbmVudC53cmFwRW51bSggVGhyZXNob2xkQ29sb3IgKTtcblxuICBhdmFpbGFibGVBeGlzVmFsdWVzID0gRHJvcERvd25Db21wb25lbnQud3JhcEVudW0oIFRocmVzaG9sZEF4aXMgKTtcbiAgXG4gIGdldCB2YWx1ZSgpe1xuICAgIHJldHVybiB0aGlzLnRocmVzaG9sZC52YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSggdmFsdWUgKXtcbiAgICBjb25zdCB2ID0gK3ZhbHVlO1xuICAgIHRoaXMudGhyZXNob2xkLnZhbHVlID0gaXNOYU4oIHYgKSB8fCAhdmFsdWUgPyB1bmRlZmluZWQgOiB2O1xuICB9XG5cbiAgZ2V0IHNob3dDdXN0b21Db2xvcnMoKXtcblx0XHRyZXR1cm4gKCBUaHJlc2hvbGRDb2xvci5DdXN0b20gPT0gdGhpcy50aHJlc2hvbGQuY29sb3JUeXBlICk7XG5cdH1cbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZWQtZm9ybS1pbmxpbmVcIj5cclxuXHQ8ZWQtZHJvcGRvd24gXHJcblx0XHRbZGF0YV09XCJhdmFpbGFibGVPcGVyYXRvclZhbHVlc1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cInRocmVzaG9sZC5vcGVyYXRvclwiXHJcblx0XHRsYWJlbD1cIlR7e2luZGV4KzF9fVwiXHJcblx0XHR3aWR0aD1cIjZcIlxyXG5cdFx0KHNlbGVjdGlvbkNoYW5nZSk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZWQtdGV4dGJveFxyXG5cdFx0WyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcblx0XHRwbGFjZWhvbGRlcj1cInZhbHVlXCJcclxuXHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0d2lkdGg9XCI4XCJcclxuXHRcdChjaGFuZ2VkKT1cInJlZnJlc2goKVwiPlxyXG5cdDwvZWQtdGV4dGJveD5cclxuXHJcblx0PGVkLWRyb3Bkb3duIFxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlQ29sb3JWYWx1ZXNcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQuY29sb3JUeXBlXCJcclxuXHRcdGxhYmVsPVwiQ29sb3JcIlxyXG5cdFx0KHNlbGVjdGlvbkNoYW5nZSk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRbKG5nTW9kZWwpXT1cInRocmVzaG9sZC5maWxsXCJcclxuXHRcdGxhYmVsPVwiRmlsbFwiXHJcblx0XHQoY2hlY2tlZCk9XCJyZWZyZXNoKClcIj5cclxuXHQgPC9lZC1jaGVja2JveD5cclxuXHJcblx0PGVkLWNvbG9yLXBpY2tlciAqbmdJZj1cInNob3dDdXN0b21Db2xvcnNcIlx0XHJcblx0XHRsYWJlbD1cIkZpbGwgY29sb3JcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQuZmlsbENvbG9yXCJcclxuXHRcdChzZWxlY3RlZCk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLWNvbG9yLXBpY2tlcj5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQubGluZVwiXHJcblx0XHRsYWJlbD1cIkxpbmVcIlxyXG5cdFx0KGNoZWNrZWQpPVwicmVmcmVzaCgpXCI+XHJcblx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0PGVkLWNvbG9yLXBpY2tlciAqbmdJZj1cInNob3dDdXN0b21Db2xvcnNcIlx0XHJcblx0XHRsYWJlbD1cIkxpbmUgY29sb3JcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aHJlc2hvbGQubGluZUNvbG9yXCJcclxuXHRcdChzZWxlY3RlZCk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLWNvbG9yLXBpY2tlcj5cclxuXHJcblx0PGVkLWRyb3Bkb3duIFxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlQXhpc1ZhbHVlc1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cInRocmVzaG9sZC5heGlzXCJcclxuXHRcdGxhYmVsPVwiWS1BeGlzXCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwicmVmcmVzaCgpXCIgPlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3ZlZC5lbWl0KCB0aHJlc2hvbGQgKVwiPlxyXG5cdFx0XHQ8YT5cclxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG4iXX0=