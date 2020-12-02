import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { TimeRegionColor, TimeRegionDay } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function TimeRegionEditorComponent_ed_color_picker_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-color-picker", 13);
    i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_ed_color_picker_10_Template_ed_color_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.timeRegion.fillColor = $event; })("selected", function TimeRegionEditorComponent_ed_color_picker_10_Template_ed_color_picker_selected_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.refresh(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.timeRegion.fillColor);
} }
function TimeRegionEditorComponent_ed_color_picker_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-color-picker", 14);
    i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_ed_color_picker_12_Template_ed_color_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.timeRegion.lineColor = $event; })("selected", function TimeRegionEditorComponent_ed_color_picker_12_Template_ed_color_picker_selected_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.refresh(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r1.timeRegion.lineColor);
} }
export class TimeRegionEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.removed = new EventEmitter();
        this.availableColors = DropDownComponent.wrapEnum(TimeRegionColor);
        this.availableDays = DropDownComponent.wrapEnum(TimeRegionDay);
    }
    get showCustomColors() {
        return (TimeRegionColor.Custom == this.timeRegion.colorType);
    }
    get showCustomFillColor() {
        return (this.showCustomColors && this.timeRegion.fill);
    }
    get showCustomLineColor() {
        return (this.showCustomColors && this.timeRegion.line);
    }
    ngOnInit() {
        this.fromTime = this.timeRegion.fromTime;
        this.toTime = this.timeRegion.toTime;
    }
}
TimeRegionEditorComponent.ɵfac = function TimeRegionEditorComponent_Factory(t) { return new (t || TimeRegionEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
TimeRegionEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeRegionEditorComponent, selectors: [["editor-time-region"]], inputs: { timeRegion: "timeRegion", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 17, vars: 13, consts: [[1, "ed-form-inline"], [1, "gf-form"], [1, "gf-form-label"], ["label", "From", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["placeholder", "hh:mm", "width", "8", 3, "ngModel", "ngModelChange", "focusout"], ["label", "To", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Color", 3, "data", "ngModel", "ngModelChange", "selectionChange"], ["label", "Fill", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], ["label", "Line", 3, "ngModel", "ngModelChange", "checked"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected", 4, "ngIf"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], ["label", "Fill color", 3, "ngModel", "ngModelChange", "selected"], ["label", "Line color", 3, "ngModel", "ngModelChange", "selected"]], template: function TimeRegionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-dropdown", 3);
        i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_4_listener($event) { return ctx.timeRegion.fromDay = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_4_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-textbox", 4);
        i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_textbox_ngModelChange_5_listener($event) { return ctx.fromTime = $event; })("focusout", function TimeRegionEditorComponent_Template_ed_textbox_focusout_5_listener() { ctx.timeRegion.fromTime = ctx.fromTime; return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ed-dropdown", 5);
        i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_6_listener($event) { return ctx.timeRegion.toDay = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_6_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "ed-textbox", 4);
        i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_textbox_ngModelChange_7_listener($event) { return ctx.toTime = $event; })("focusout", function TimeRegionEditorComponent_Template_ed_textbox_focusout_7_listener() { ctx.timeRegion.toTime = ctx.toTime; return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "ed-dropdown", 6);
        i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_dropdown_ngModelChange_8_listener($event) { return ctx.timeRegion.colorType = $event; })("selectionChange", function TimeRegionEditorComponent_Template_ed_dropdown_selectionChange_8_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ed-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_checkbox_ngModelChange_9_listener($event) { return ctx.timeRegion.fill = $event; })("checked", function TimeRegionEditorComponent_Template_ed_checkbox_checked_9_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, TimeRegionEditorComponent_ed_color_picker_10_Template, 1, 1, "ed-color-picker", 8);
        i0.ɵɵelementStart(11, "ed-checkbox", 9);
        i0.ɵɵlistener("ngModelChange", function TimeRegionEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.timeRegion.line = $event; })("checked", function TimeRegionEditorComponent_Template_ed_checkbox_checked_11_listener() { return ctx.refresh(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, TimeRegionEditorComponent_ed_color_picker_12_Template, 1, 1, "ed-color-picker", 10);
        i0.ɵɵelementStart(13, "div", 1);
        i0.ɵɵelementStart(14, "label", 11);
        i0.ɵɵlistener("click", function TimeRegionEditorComponent_Template_label_click_14_listener() { return ctx.removed.emit(ctx.timeRegion); });
        i0.ɵɵelementStart(15, "a");
        i0.ɵɵelement(16, "i", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("T", ctx.index + 1, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.availableDays)("ngModel", ctx.timeRegion.fromDay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.fromTime);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.availableDays)("ngModel", ctx.timeRegion.toDay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.toTime);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.availableColors)("ngModel", ctx.timeRegion.colorType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.timeRegion.fill);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCustomFillColor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.timeRegion.line);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCustomLineColor);
    } }, directives: [i2.DropDownComponent, i3.NgControlStatus, i3.NgModel, i2.TextBoxComponent, i2.CheckBoxComponent, i4.NgIf, i2.ColorPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeRegionEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time-region',
                templateUrl: './time-region.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { timeRegion: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1yZWdpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2Rpc3BsYXkvdGltZS1yZWdpb25zL3RpbWUtcmVnaW9uLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RpbWUtcmVnaW9ucy90aW1lLXJlZ2lvbi5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBYyxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7O0lDMkM3RSwyQ0FJa0I7SUFGakIsMFBBQWtDLHlNQUFBO0lBRW5DLGlCQUFrQjs7O0lBRmpCLHFEQUFrQzs7OztJQVVuQywyQ0FJa0I7SUFGakIsMFBBQWtDLHlNQUFBO0lBRW5DLGlCQUFrQjs7O0lBRmpCLHFEQUFrQzs7QURuRHBDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx3QkFBd0I7SUF5QnJFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBckJQLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRW5ELG9CQUFlLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLGVBQWUsQ0FBRSxDQUFBO1FBQy9ELGtCQUFhLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLGFBQWEsQ0FBRSxDQUFBO0lBbUIzRCxDQUFDO0lBZEQsSUFBSSxnQkFBZ0I7UUFDcEIsT0FBTyxDQUFFLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUUsQ0FBQztJQUNoRSxDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDdEIsT0FBTyxDQUFFLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUN0QixPQUFPLENBQUUsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDMUQsQ0FBQztJQU1BLFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7a0dBaENVLHlCQUF5Qix1QkF5QmYsV0FBVzs4REF6QnJCLHlCQUF5QjtRQ1Z0Qyw4QkFFQztRQUFBLDhCQUNDO1FBQUEsZ0NBQTZCO1FBQUEsWUFBWTtRQUFBLGlCQUFRO1FBQ2xELGlCQUFNO1FBRU4sc0NBS2M7UUFIYixvS0FBZ0Msa0hBRWIsYUFBUyxJQUZJO1FBR2pDLGlCQUFjO1FBRWQscUNBS2E7UUFKWix5SkFBc0IsMklBR29CLGFBQVMsSUFIN0I7UUFJdkIsaUJBQWE7UUFFYixzQ0FLYztRQUhiLGtLQUE4QixrSEFFWCxhQUFTLElBRkU7UUFHL0IsaUJBQWM7UUFFZCxxQ0FLYTtRQUpaLHVKQUFvQix1SUFHa0IsYUFBUyxJQUgzQjtRQUlyQixpQkFBYTtRQUViLHNDQUtjO1FBSGIsc0tBQWtDLGtIQUVmLGFBQVMsSUFGTTtRQUduQyxpQkFBYztRQUVkLHNDQUljO1FBSGIsaUtBQTZCLGtHQUVsQixhQUFTLElBRlM7UUFHOUIsaUJBQWM7UUFFZCxvR0FJQTtRQUVBLHVDQUljO1FBSGIsa0tBQTZCLG1HQUVsQixhQUFTLElBRlM7UUFHOUIsaUJBQWM7UUFFZCxxR0FJQTtRQUVBLCtCQUNDO1FBQUEsa0NBQ0M7UUFEb0Msc0dBQVMsZ0NBQTBCLElBQUM7UUFDeEUsMEJBQ0M7UUFBQSx5QkFBMkI7UUFDNUIsaUJBQUk7UUFDTCxpQkFBUTtRQUNULGlCQUFNO1FBRVAsaUJBQU07O1FBdEV5QixlQUFZO1FBQVosNkNBQVk7UUFJekMsZUFBc0I7UUFBdEIsd0NBQXNCLG1DQUFBO1FBT3RCLGVBQXNCO1FBQXRCLHNDQUFzQjtRQU90QixlQUFzQjtRQUF0Qix3Q0FBc0IsaUNBQUE7UUFPdEIsZUFBb0I7UUFBcEIsb0NBQW9CO1FBT3BCLGVBQXdCO1FBQXhCLDBDQUF3QixxQ0FBQTtRQU94QixlQUE2QjtRQUE3Qiw2Q0FBNkI7UUFLYixlQUEyQjtRQUEzQiw4Q0FBMkI7UUFPM0MsZUFBNkI7UUFBN0IsNkNBQTZCO1FBS2IsZUFBMkI7UUFBM0IsOENBQTJCOztrRERqRGhDLHlCQUF5QjtjQUpyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLG9CQUFvQjthQUNsQzs7c0JBMEJjLE1BQU07dUJBQUUsV0FBVzt3QkF2QnZCLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAndWlsaWInO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5pbXBvcnQgeyBUaW1lUmVnaW9uLCBUaW1lUmVnaW9uQ29sb3IsIFRpbWVSZWdpb25EYXkgfSBmcm9tICcuLi8uLi8uLi9jaGFydC5tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLXRpbWUtcmVnaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtcmVnaW9uLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVSZWdpb25FZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHRpbWVSZWdpb246IFRpbWVSZWdpb247XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWVSZWdpb24+KCk7XG5cbiAgYXZhaWxhYmxlQ29sb3JzID0gRHJvcERvd25Db21wb25lbnQud3JhcEVudW0oIFRpbWVSZWdpb25Db2xvciApXG4gIGF2YWlsYWJsZURheXMgPSBEcm9wRG93bkNvbXBvbmVudC53cmFwRW51bSggVGltZVJlZ2lvbkRheSApXG5cbiAgZnJvbVRpbWU6IHN0cmluZztcblx0dG9UaW1lOiBzdHJpbmc7XG5cbiAgZ2V0IHNob3dDdXN0b21Db2xvcnMoKXtcblx0XHRyZXR1cm4gKCBUaW1lUmVnaW9uQ29sb3IuQ3VzdG9tID09IHRoaXMudGltZVJlZ2lvbi5jb2xvclR5cGUgKTtcblx0fVxuXG5cdGdldCBzaG93Q3VzdG9tRmlsbENvbG9yKCl7XG5cdFx0cmV0dXJuICggdGhpcy5zaG93Q3VzdG9tQ29sb3JzICYmIHRoaXMudGltZVJlZ2lvbi5maWxsICk7XG5cdH1cblxuXHRnZXQgc2hvd0N1c3RvbUxpbmVDb2xvcigpe1xuXHRcdHJldHVybiAoIHRoaXMuc2hvd0N1c3RvbUNvbG9ycyAmJiB0aGlzLnRpbWVSZWdpb24ubGluZSApO1xuXHR9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcblx0XHR0aGlzLmZyb21UaW1lID0gdGhpcy50aW1lUmVnaW9uLmZyb21UaW1lO1xuXHRcdHRoaXMudG9UaW1lID0gdGhpcy50aW1lUmVnaW9uLnRvVGltZTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImVkLWZvcm0taW5saW5lXCI+XHJcblx0XHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIj5Ue3tpbmRleCsxfX08L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZWQtZHJvcGRvd24gXHJcblx0XHRbZGF0YV09XCJhdmFpbGFibGVEYXlzXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGltZVJlZ2lvbi5mcm9tRGF5XCJcclxuXHRcdGxhYmVsPVwiRnJvbVwiXHJcblx0XHQoc2VsZWN0aW9uQ2hhbmdlKT1cInJlZnJlc2goKVwiID5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZWQtdGV4dGJveFxyXG5cdFx0WyhuZ01vZGVsKV09XCJmcm9tVGltZVwiXHJcblx0XHRwbGFjZWhvbGRlcj1cImhoOm1tXCJcclxuXHRcdHdpZHRoPVwiOFwiXHJcblx0XHQoZm9jdXNvdXQpPVwidGltZVJlZ2lvbi5mcm9tVGltZT1mcm9tVGltZTsgcmVmcmVzaCgpXCI+XHJcblx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHQ8ZWQtZHJvcGRvd24gXHJcblx0XHRbZGF0YV09XCJhdmFpbGFibGVEYXlzXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGltZVJlZ2lvbi50b0RheVwiXHJcblx0XHRsYWJlbD1cIlRvXCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwicmVmcmVzaCgpXCIgPlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG5cdDxlZC10ZXh0Ym94XHJcblx0XHRbKG5nTW9kZWwpXT1cInRvVGltZVwiXHJcblx0XHRwbGFjZWhvbGRlcj1cImhoOm1tXCJcclxuXHRcdHdpZHRoPVwiOFwiXHJcblx0XHQoZm9jdXNvdXQpPVwidGltZVJlZ2lvbi50b1RpbWU9dG9UaW1lOyByZWZyZXNoKClcIj5cclxuXHQ8L2VkLXRleHRib3g+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZUNvbG9yc1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cInRpbWVSZWdpb24uY29sb3JUeXBlXCJcclxuXHRcdGxhYmVsPVwiQ29sb3JcIlxyXG5cdFx0KHNlbGVjdGlvbkNoYW5nZSk9XCJyZWZyZXNoKClcIiA+XHJcblx0PC9lZC1kcm9wZG93bj5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aW1lUmVnaW9uLmZpbGxcIiBcclxuXHRcdGxhYmVsPVwiRmlsbFwiXHJcblx0XHQoY2hlY2tlZCk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtY29sb3ItcGlja2VyICpuZ0lmPVwic2hvd0N1c3RvbUZpbGxDb2xvclwiXHRcclxuXHRcdGxhYmVsPVwiRmlsbCBjb2xvclwiXHJcblx0XHRbKG5nTW9kZWwpXT1cInRpbWVSZWdpb24uZmlsbENvbG9yXCJcclxuXHRcdChzZWxlY3RlZCk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLWNvbG9yLXBpY2tlcj5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aW1lUmVnaW9uLmxpbmVcIiBcclxuXHRcdGxhYmVsPVwiTGluZVwiXHJcblx0XHQoY2hlY2tlZCk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtY29sb3ItcGlja2VyICpuZ0lmPVwic2hvd0N1c3RvbUxpbmVDb2xvclwiXHRcclxuXHRcdGxhYmVsPVwiTGluZSBjb2xvclwiXHJcblx0XHRbKG5nTW9kZWwpXT1cInRpbWVSZWdpb24ubGluZUNvbG9yXCJcclxuXHRcdChzZWxlY3RlZCk9XCJyZWZyZXNoKClcIj5cclxuXHQ8L2VkLWNvbG9yLXBpY2tlcj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcG9pbnRlclwiIChjbGljayk9XCJyZW1vdmVkLmVtaXQoIHRpbWVSZWdpb24gKVwiPlxyXG5cdFx0XHQ8YSAgPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbiJdfQ==