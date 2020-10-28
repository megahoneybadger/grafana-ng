import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { TimeRegionColor, TimeRegionDay } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
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
    } }, directives: [i1.DropDownComponent, i2.NgControlStatus, i2.NgModel, i1.TextBoxComponent, i1.CheckBoxComponent, i3.NgIf, i1.ColorPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeRegionEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time-region',
                templateUrl: './time-region.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { timeRegion: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1yZWdpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2Rpc3BsYXkvdGltZS1yZWdpb25zL3RpbWUtcmVnaW9uLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RpbWUtcmVnaW9ucy90aW1lLXJlZ2lvbi5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBYyxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUMyQzdFLDJDQUlrQjtJQUZqQiwwUEFBa0MseU1BQUE7SUFFbkMsaUJBQWtCOzs7SUFGakIscURBQWtDOzs7O0lBVW5DLDJDQUlrQjtJQUZqQiwwUEFBa0MseU1BQUE7SUFFbkMsaUJBQWtCOzs7SUFGakIscURBQWtDOztBRG5EcEMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHdCQUF3QjtJQXlCckUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFyQlAsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFFbkQsb0JBQWUsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUUsZUFBZSxDQUFFLENBQUE7UUFDL0Qsa0JBQWEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUUsYUFBYSxDQUFFLENBQUE7SUFtQjNELENBQUM7SUFkRCxJQUFJLGdCQUFnQjtRQUNwQixPQUFPLENBQUUsZUFBZSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBRSxDQUFDO0lBQ2hFLENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUN0QixPQUFPLENBQUUsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3RCLE9BQU8sQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUMxRCxDQUFDO0lBTUEsUUFBUTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOztrR0FoQ1UseUJBQXlCLHVCQXlCZixXQUFXOzhEQXpCckIseUJBQXlCO1FDVnRDLDhCQUVDO1FBQUEsOEJBQ0M7UUFBQSxnQ0FBNkI7UUFBQSxZQUFZO1FBQUEsaUJBQVE7UUFDbEQsaUJBQU07UUFFTixzQ0FLYztRQUhiLG9LQUFnQyxrSEFFYixhQUFTLElBRkk7UUFHakMsaUJBQWM7UUFFZCxxQ0FLYTtRQUpaLHlKQUFzQiwySUFHb0IsYUFBUyxJQUg3QjtRQUl2QixpQkFBYTtRQUViLHNDQUtjO1FBSGIsa0tBQThCLGtIQUVYLGFBQVMsSUFGRTtRQUcvQixpQkFBYztRQUVkLHFDQUthO1FBSlosdUpBQW9CLHVJQUdrQixhQUFTLElBSDNCO1FBSXJCLGlCQUFhO1FBRWIsc0NBS2M7UUFIYixzS0FBa0Msa0hBRWYsYUFBUyxJQUZNO1FBR25DLGlCQUFjO1FBRWQsc0NBSWM7UUFIYixpS0FBNkIsa0dBRWxCLGFBQVMsSUFGUztRQUc5QixpQkFBYztRQUVkLG9HQUlBO1FBRUEsdUNBSWM7UUFIYixrS0FBNkIsbUdBRWxCLGFBQVMsSUFGUztRQUc5QixpQkFBYztRQUVkLHFHQUlBO1FBRUEsK0JBQ0M7UUFBQSxrQ0FDQztRQURvQyxzR0FBUyxnQ0FBMEIsSUFBQztRQUN4RSwwQkFDQztRQUFBLHlCQUEyQjtRQUM1QixpQkFBSTtRQUNMLGlCQUFRO1FBQ1QsaUJBQU07UUFFUCxpQkFBTTs7UUF0RXlCLGVBQVk7UUFBWiw2Q0FBWTtRQUl6QyxlQUFzQjtRQUF0Qix3Q0FBc0IsbUNBQUE7UUFPdEIsZUFBc0I7UUFBdEIsc0NBQXNCO1FBT3RCLGVBQXNCO1FBQXRCLHdDQUFzQixpQ0FBQTtRQU90QixlQUFvQjtRQUFwQixvQ0FBb0I7UUFPcEIsZUFBd0I7UUFBeEIsMENBQXdCLHFDQUFBO1FBT3hCLGVBQTZCO1FBQTdCLDZDQUE2QjtRQUtiLGVBQTJCO1FBQTNCLDhDQUEyQjtRQU8zQyxlQUE2QjtRQUE3Qiw2Q0FBNkI7UUFLYixlQUEyQjtRQUEzQiw4Q0FBMkI7O2tERGpEaEMseUJBQXlCO2NBSnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDOztzQkEwQmMsTUFBTTt1QkFBRSxXQUFXO3dCQXZCdkIsVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgRHJvcERvd25Db21wb25lbnQgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCB7IFRpbWVSZWdpb24sIFRpbWVSZWdpb25Db2xvciwgVGltZVJlZ2lvbkRheSB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItdGltZS1yZWdpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZS1yZWdpb24uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGltZVJlZ2lvbkVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdGltZVJlZ2lvbjogVGltZVJlZ2lvbjtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZVJlZ2lvbj4oKTtcblxuICBhdmFpbGFibGVDb2xvcnMgPSBEcm9wRG93bkNvbXBvbmVudC53cmFwRW51bSggVGltZVJlZ2lvbkNvbG9yIClcbiAgYXZhaWxhYmxlRGF5cyA9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBUaW1lUmVnaW9uRGF5IClcblxuICBmcm9tVGltZTogc3RyaW5nO1xuXHR0b1RpbWU6IHN0cmluZztcblxuICBnZXQgc2hvd0N1c3RvbUNvbG9ycygpe1xuXHRcdHJldHVybiAoIFRpbWVSZWdpb25Db2xvci5DdXN0b20gPT0gdGhpcy50aW1lUmVnaW9uLmNvbG9yVHlwZSApO1xuXHR9XG5cblx0Z2V0IHNob3dDdXN0b21GaWxsQ29sb3IoKXtcblx0XHRyZXR1cm4gKCB0aGlzLnNob3dDdXN0b21Db2xvcnMgJiYgdGhpcy50aW1lUmVnaW9uLmZpbGwgKTtcblx0fVxuXG5cdGdldCBzaG93Q3VzdG9tTGluZUNvbG9yKCl7XG5cdFx0cmV0dXJuICggdGhpcy5zaG93Q3VzdG9tQ29sb3JzICYmIHRoaXMudGltZVJlZ2lvbi5saW5lICk7XG5cdH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuXHRcdHRoaXMuZnJvbVRpbWUgPSB0aGlzLnRpbWVSZWdpb24uZnJvbVRpbWU7XG5cdFx0dGhpcy50b1RpbWUgPSB0aGlzLnRpbWVSZWdpb24udG9UaW1lO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZWQtZm9ybS1pbmxpbmVcIj5cclxuXHRcclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlR7e2luZGV4KzF9fTwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZURheXNcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aW1lUmVnaW9uLmZyb21EYXlcIlxyXG5cdFx0bGFiZWw9XCJGcm9tXCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwicmVmcmVzaCgpXCIgPlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG5cdDxlZC10ZXh0Ym94XHJcblx0XHRbKG5nTW9kZWwpXT1cImZyb21UaW1lXCJcclxuXHRcdHBsYWNlaG9sZGVyPVwiaGg6bW1cIlxyXG5cdFx0d2lkdGg9XCI4XCJcclxuXHRcdChmb2N1c291dCk9XCJ0aW1lUmVnaW9uLmZyb21UaW1lPWZyb21UaW1lOyByZWZyZXNoKClcIj5cclxuXHQ8L2VkLXRleHRib3g+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZURheXNcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ0aW1lUmVnaW9uLnRvRGF5XCJcclxuXHRcdGxhYmVsPVwiVG9cIlxyXG5cdFx0KHNlbGVjdGlvbkNoYW5nZSk9XCJyZWZyZXNoKClcIiA+XHJcblx0PC9lZC1kcm9wZG93bj5cclxuXHJcblx0PGVkLXRleHRib3hcclxuXHRcdFsobmdNb2RlbCldPVwidG9UaW1lXCJcclxuXHRcdHBsYWNlaG9sZGVyPVwiaGg6bW1cIlxyXG5cdFx0d2lkdGg9XCI4XCJcclxuXHRcdChmb2N1c291dCk9XCJ0aW1lUmVnaW9uLnRvVGltZT10b1RpbWU7IHJlZnJlc2goKVwiPlxyXG5cdDwvZWQtdGV4dGJveD5cclxuXHJcblx0PGVkLWRyb3Bkb3duIFxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlQ29sb3JzXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGltZVJlZ2lvbi5jb2xvclR5cGVcIlxyXG5cdFx0bGFiZWw9XCJDb2xvclwiXHJcblx0XHQoc2VsZWN0aW9uQ2hhbmdlKT1cInJlZnJlc2goKVwiID5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRbKG5nTW9kZWwpXT1cInRpbWVSZWdpb24uZmlsbFwiIFxyXG5cdFx0bGFiZWw9XCJGaWxsXCJcclxuXHRcdChjaGVja2VkKT1cInJlZnJlc2goKVwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jb2xvci1waWNrZXIgKm5nSWY9XCJzaG93Q3VzdG9tRmlsbENvbG9yXCJcdFxyXG5cdFx0bGFiZWw9XCJGaWxsIGNvbG9yXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGltZVJlZ2lvbi5maWxsQ29sb3JcIlxyXG5cdFx0KHNlbGVjdGVkKT1cInJlZnJlc2goKVwiPlxyXG5cdDwvZWQtY29sb3ItcGlja2VyPlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRbKG5nTW9kZWwpXT1cInRpbWVSZWdpb24ubGluZVwiIFxyXG5cdFx0bGFiZWw9XCJMaW5lXCJcclxuXHRcdChjaGVja2VkKT1cInJlZnJlc2goKVwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jb2xvci1waWNrZXIgKm5nSWY9XCJzaG93Q3VzdG9tTGluZUNvbG9yXCJcdFxyXG5cdFx0bGFiZWw9XCJMaW5lIGNvbG9yXCJcclxuXHRcdFsobmdNb2RlbCldPVwidGltZVJlZ2lvbi5saW5lQ29sb3JcIlxyXG5cdFx0KHNlbGVjdGVkKT1cInJlZnJlc2goKVwiPlxyXG5cdDwvZWQtY29sb3ItcGlja2VyPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBwb2ludGVyXCIgKGNsaWNrKT1cInJlbW92ZWQuZW1pdCggdGltZVJlZ2lvbiApXCI+XHJcblx0XHRcdDxhICA+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuIl19