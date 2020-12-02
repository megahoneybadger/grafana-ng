import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { DataPointNullValueOption, TooltipMode, TooltipSortOrder } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
export class DrawOptionsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.availableWidth = DropDownComponent.wrapArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.availableTooltipModes = DropDownComponent.wrapEnum(TooltipMode);
        this.availableTooltipSortOrders = DropDownComponent.wrapEnum(TooltipSortOrder);
        this.availableNullValueOptions = DropDownComponent.wrapEnum(DataPointNullValueOption);
    }
    get stack() {
        return this.display.stack;
    }
    set stack(v) {
        this.display.stack = v;
        this.options.scales.yAxes[0 /*?*/].stacked = v;
        this.refresh();
    }
}
DrawOptionsEditorComponent.ɵfac = function DrawOptionsEditorComponent_Factory(t) { return new (t || DrawOptionsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
DrawOptionsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawOptionsEditorComponent, selectors: [["editor-draw-options"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 19, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "5", "label", "Bars"], ["labelWidth", "5", "label", "Lines", 3, "ngModel", "ngModelChange", "checked"], ["labelWidth", "5", "label", "Points", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "ngModelChange", "selectionChange"], ["label", "Line Width", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "disabled", "ngModelChange", "selectionChange"], ["label", "Staircase", "labelWidth", "8", "width", "5", 3, "ngModel", "ngModelChange", "checked"], ["label", "Point Radius", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "disabled", "ngModelChange", "selectionChange"], ["label", "Mode", "labelWidth", "9", "width", "9", 3, "data", "ngModel", "ngModelChange"], ["label", "Sort Order", "labelWidth", "9", "width", "9", 3, "data", "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "Stack", 3, "ngModel", "ngModelChange"], ["label", "Null Value", 3, "ngModel", "data", "labelWidth", "ngModelChange"]], template: function DrawOptionsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2, "Draw Modes");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "ed-checkbox", 2);
        i0.ɵɵelementStart(4, "ed-checkbox", 3);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.display.showLines = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_4_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.display.showPoints = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_5_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 0);
        i0.ɵɵelementStart(7, "h5", 1);
        i0.ɵɵtext(8, "Mode Options");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ed-dropdown", 5);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_9_listener($event) { return ctx.display.fill = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_9_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "ed-dropdown", 6);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_10_listener($event) { return ctx.display.lineWidth = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_10_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ed-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.display.staircase = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_11_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "ed-dropdown", 8);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_12_listener($event) { return ctx.display.pointRadius = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_12_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 0);
        i0.ɵɵelementStart(14, "h5", 1);
        i0.ɵɵtext(15, "Hover tooltip");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "ed-dropdown", 9);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_16_listener($event) { return ctx.display.tooltipMode = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "ed-dropdown", 10);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_17_listener($event) { return ctx.display.tooltipSortOrder = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 0);
        i0.ɵɵelementStart(19, "h5", 1);
        i0.ɵɵtext(20, "Stacking & Null value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "ed-checkbox", 11);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.stack = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "ed-dropdown", 12);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_22_listener($event) { return ctx.display.nullValue = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.display.showLines);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.showPoints);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.display.fill)("data", ctx.availableWidth);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.lineWidth)("data", ctx.availableWidth)("disabled", !ctx.display.showLines);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.staircase);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.pointRadius)("data", ctx.availableWidth)("disabled", !ctx.display.showPoints);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("data", ctx.availableTooltipModes)("ngModel", ctx.display.tooltipMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.availableTooltipSortOrders)("ngModel", ctx.display.tooltipSortOrder);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.stack);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.nullValue)("data", ctx.availableNullValueOptions)("labelWidth", 7);
    } }, directives: [i2.CheckBoxComponent, i3.NgControlStatus, i3.NgModel, i2.DropDownComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DrawOptionsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-draw-options',
                templateUrl: './options.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9kcmF3LW9wdGlvbnMvb3B0aW9ucy50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9kcmF3LW9wdGlvbnMvb3B0aW9ucy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFNM0YsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHdCQUF3QjtJQXFCdEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFwQmpCLG1CQUFjLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFFLENBQUM7UUFFbkYsMEJBQXFCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLFdBQVcsQ0FBRSxDQUFDO1FBRWxFLCtCQUEwQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBRSxnQkFBZ0IsQ0FBRSxDQUFDO1FBRTVFLDhCQUF5QixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBRSx3QkFBd0IsQ0FBRSxDQUFDO0lBZW5GLENBQUM7SUFiRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBRSxDQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFFaEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7O29HQW5CVSwwQkFBMEIsdUJBcUJoQixXQUFXOytEQXJCckIsMEJBQTBCO1FDVnZDLDhCQUVDO1FBQUEsNkJBQTRCO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUUzQyxpQ0FHYztRQUVkLHNDQUtjO1FBSmIsb0tBQStCLG1HQUdwQixZQUFRLElBSFk7UUFJaEMsaUJBQWM7UUFFZCxzQ0FLYztRQUpiLHFLQUFnQyxtR0FHckIsWUFBUSxJQUhhO1FBSWpDLGlCQUFjO1FBRWYsaUJBQU07UUFFTiw4QkFDQztRQUFBLDZCQUE0QjtRQUFBLDRCQUFZO1FBQUEsaUJBQUs7UUFFN0Msc0NBT2M7UUFOYiwrSkFBMEIsbUhBS1AsWUFBUSxJQUxEO1FBTTNCLGlCQUFjO1FBRWQsdUNBUWM7UUFQYixxS0FBK0Isb0hBTVosWUFBUSxJQU5JO1FBT2hDLGlCQUFjO1FBRWQsdUNBTWM7UUFMYixxS0FBK0Isb0dBSXBCLFlBQVEsSUFKWTtRQUtoQyxpQkFBYztRQUVkLHVDQVFjO1FBUGIsdUtBQWlDLG9IQUtkLFlBQVEsSUFMTTtRQU9sQyxpQkFBYztRQUVmLGlCQUFNO1FBRU4sK0JBQ0M7UUFBQSw4QkFBNEI7UUFBQSw4QkFBYTtRQUFBLGlCQUFLO1FBRTlDLHVDQU1jO1FBSmIsdUtBQWlDO1FBSWxDLGlCQUFjO1FBRWQsd0NBTWM7UUFKYiw0S0FBc0M7UUFJdkMsaUJBQWM7UUFFZixpQkFBTTtRQUVOLCtCQUNDO1FBQUEsOEJBQTRCO1FBQUEsc0NBQXFCO1FBQUEsaUJBQUs7UUFFdEQsd0NBSWM7UUFIYix5SkFBbUI7UUFHcEIsaUJBQWM7UUFFZCx3Q0FLYztRQUpiLHFLQUErQjtRQUloQyxpQkFBYztRQUNmLGlCQUFNOztRQTdGSixlQUErQjtRQUEvQiwrQ0FBK0I7UUFPL0IsZUFBZ0M7UUFBaEMsZ0RBQWdDO1FBWWhDLGVBQTBCO1FBQTFCLDBDQUEwQiw0QkFBQTtRQVMxQixlQUErQjtRQUEvQiwrQ0FBK0IsNEJBQUEsb0NBQUE7UUFVL0IsZUFBK0I7UUFBL0IsK0NBQStCO1FBUS9CLGVBQWlDO1FBQWpDLGlEQUFpQyw0QkFBQSxxQ0FBQTtRQWVqQyxlQUE4QjtRQUE5QixnREFBOEIsb0NBQUE7UUFROUIsZUFBbUM7UUFBbkMscURBQW1DLHlDQUFBO1FBYW5DLGVBQW1CO1FBQW5CLG1DQUFtQjtRQU1uQixlQUErQjtRQUEvQiwrQ0FBK0IsdUNBQUEsaUJBQUE7O2tERHhGcEIsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsZ0JBQWdCO2FBQzlCOztzQkFzQmMsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuaW1wb3J0IHsgRGF0YVBvaW50TnVsbFZhbHVlT3B0aW9uLCBUb29sdGlwTW9kZSwgVG9vbHRpcFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItZHJhdy1vcHRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29wdGlvbnMuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHJhd09wdGlvbnNFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuIFxuICBhdmFpbGFibGVXaWR0aCA9IERyb3BEb3duQ29tcG9uZW50LndyYXBBcnJheSggWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSApO1xuXG4gIGF2YWlsYWJsZVRvb2x0aXBNb2Rlc1x0PSBEcm9wRG93bkNvbXBvbmVudC53cmFwRW51bSggVG9vbHRpcE1vZGUgKTtcblxuICBhdmFpbGFibGVUb29sdGlwU29ydE9yZGVycyA9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBUb29sdGlwU29ydE9yZGVyICk7XG5cbiAgYXZhaWxhYmxlTnVsbFZhbHVlT3B0aW9ucyA9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBEYXRhUG9pbnROdWxsVmFsdWVPcHRpb24gKTtcblxuICBnZXQgc3RhY2soKTogYm9vbGVhbntcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5LnN0YWNrO1xuICB9XG5cbiAgc2V0IHN0YWNrKCB2OiBib29sZWFuICl7XG4gICAgdGhpcy5kaXNwbGF5LnN0YWNrID0gdjtcbiAgICB0aGlzLm9wdGlvbnMuc2NhbGVzLnlBeGVzWyAwIC8qPyovIF0uc3RhY2tlZCA9IHZcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPkRyYXcgTW9kZXM8L2g1PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRsYWJlbFdpZHRoPVwiNVwiXHJcblx0XHRsYWJlbD1cIkJhcnNcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRbKG5nTW9kZWwpXT1cImRpc3BsYXkuc2hvd0xpbmVzXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI1XCJcclxuXHRcdGxhYmVsPVwiTGluZXNcIlxyXG5cdFx0KGNoZWNrZWQpPVwidXBkYXRlKClcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRbKG5nTW9kZWwpXT1cImRpc3BsYXkuc2hvd1BvaW50c1wiXHJcblx0XHRsYWJlbFdpZHRoPVwiNVwiXHJcblx0XHRsYWJlbD1cIlBvaW50c1wiXHJcblx0XHQoY2hlY2tlZCk9XCJ1cGRhdGUoKVwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJzZWN0aW9uIGdmLWZvcm0tZ3JvdXBcIj5cclxuXHQ8aDUgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5Nb2RlIE9wdGlvbnM8L2g1PlxyXG5cclxuXHQ8ZWQtZHJvcGRvd24gXHJcblx0XHRbKG5nTW9kZWwpXT1cImRpc3BsYXkuZmlsbFwiXHJcblx0XHRbZGF0YV09XCJhdmFpbGFibGVXaWR0aFwiXHJcblx0XHRsYWJlbD1cIkZpbGxcIlxyXG5cdFx0bGFiZWxXaWR0aD1cIjhcIlxyXG5cdFx0d2lkdGg9XCI1XCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwidXBkYXRlKClcIj5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZWQtZHJvcGRvd24gXHJcblx0XHRbKG5nTW9kZWwpXT1cImRpc3BsYXkubGluZVdpZHRoXCJcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZVdpZHRoXCJcclxuXHRcdGxhYmVsPVwiTGluZSBXaWR0aFwiXHJcblx0XHRsYWJlbFdpZHRoPVwiOFwiXHJcblx0XHR3aWR0aD1cIjVcIlxyXG5cdFx0W2Rpc2FibGVkXT1cIiFkaXNwbGF5LnNob3dMaW5lc1wiXHJcblx0XHQoc2VsZWN0aW9uQ2hhbmdlKT1cInVwZGF0ZSgpXCI+XHJcblx0PC9lZC1kcm9wZG93bj5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0WyhuZ01vZGVsKV09XCJkaXNwbGF5LnN0YWlyY2FzZVwiXHJcblx0XHRsYWJlbD1cIlN0YWlyY2FzZVwiXHJcblx0XHRsYWJlbFdpZHRoPVwiOFwiXHJcblx0XHR3aWR0aD1cIjVcIlxyXG5cdFx0KGNoZWNrZWQpPVwidXBkYXRlKClcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtZHJvcGRvd24gXHJcblx0XHRbKG5nTW9kZWwpXT1cImRpc3BsYXkucG9pbnRSYWRpdXNcIlxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlV2lkdGhcIlxyXG5cdFx0bGFiZWw9XCJQb2ludCBSYWRpdXNcIlxyXG5cdFx0bGFiZWxXaWR0aD1cIjhcIlxyXG5cdFx0d2lkdGg9XCI1XCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwidXBkYXRlKClcIlxyXG5cdFx0W2Rpc2FibGVkXT1cIiFkaXNwbGF5LnNob3dQb2ludHNcIj5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+SG92ZXIgdG9vbHRpcDwvaDU+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZVRvb2x0aXBNb2Rlc1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cImRpc3BsYXkudG9vbHRpcE1vZGVcIlxyXG5cdFx0bGFiZWw9XCJNb2RlXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI5XCJcclxuXHRcdHdpZHRoPVwiOVwiID5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZWQtZHJvcGRvd24gXHJcblx0XHRbZGF0YV09XCJhdmFpbGFibGVUb29sdGlwU29ydE9yZGVyc1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cImRpc3BsYXkudG9vbHRpcFNvcnRPcmRlclwiIFxyXG5cdFx0bGFiZWw9XCJTb3J0IE9yZGVyXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI5XCJcclxuXHRcdHdpZHRoPVwiOVwiID5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+U3RhY2tpbmcgJiBOdWxsIHZhbHVlPC9oNT5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0WyhuZ01vZGVsKV09XCJzdGFja1wiXHJcblx0XHRsYWJlbFdpZHRoPVwiN1wiXHJcblx0XHRsYWJlbD1cIlN0YWNrXCIgPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFsobmdNb2RlbCldPVwiZGlzcGxheS5udWxsVmFsdWVcIlxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlTnVsbFZhbHVlT3B0aW9uc1wiIFxyXG5cdFx0bGFiZWw9XCJOdWxsIFZhbHVlXCJcclxuXHRcdFtsYWJlbFdpZHRoXT1cIjdcIiA+XHJcblx0PC9lZC1kcm9wZG93bj5cclxuPC9kaXY+Il19