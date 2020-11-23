import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
import * as i3 from "./draw-options/options";
import * as i4 from "@angular/common";
import * as i5 from "./series-overrides/overrides";
import * as i6 from "./thresholds/thresholds";
import * as i7 from "./time-regions/time-regions";
function DisplayEditorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-draw-options");
} }
function DisplayEditorComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("(", ctx_r7.overrides.length, ")");
} }
function DisplayEditorComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Series overrides");
    i0.ɵɵtemplate(1, DisplayEditorComponent_ng_template_4_span_1_Template, 2, 1, "span", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.overrides == null ? null : ctx_r1.overrides.length);
} }
function DisplayEditorComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-series-overrides");
} }
function DisplayEditorComponent_ng_template_7_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("(", ctx_r8.thresholds.length, ")");
} }
function DisplayEditorComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Thresholds");
    i0.ɵɵtemplate(1, DisplayEditorComponent_ng_template_7_span_1_Template, 2, 1, "span", 4);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.thresholds == null ? null : ctx_r3.thresholds.length);
} }
function DisplayEditorComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-thresholds");
} }
function DisplayEditorComponent_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("(", ctx_r9.timeRegions.length, ")");
} }
function DisplayEditorComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Time regions");
    i0.ɵɵtemplate(1, DisplayEditorComponent_ng_template_10_span_1_Template, 2, 1, "span", 4);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.timeRegions == null ? null : ctx_r5.timeRegions.length);
} }
function DisplayEditorComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-time-regions");
} }
export class DisplayEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 1;
    }
}
DisplayEditorComponent.ɵfac = function DisplayEditorComponent_Factory(t) { return new (t || DisplayEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
DisplayEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DisplayEditorComponent, selectors: [["editor-display"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 1, consts: [[3, "ngModel", "ngModelChange"], ["header", "Draw options"], ["edTabContent", ""], ["edTabTitle", ""], ["class", "muted ml-1", 4, "ngIf"], [1, "muted", "ml-1"]], template: function DisplayEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ed-side-tabstrip", 0);
        i0.ɵɵlistener("ngModelChange", function DisplayEditorComponent_Template_ed_side_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; });
        i0.ɵɵelementStart(1, "ed-tab", 1);
        i0.ɵɵtemplate(2, DisplayEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-tab");
        i0.ɵɵtemplate(4, DisplayEditorComponent_ng_template_4_Template, 2, 1, "ng-template", 3);
        i0.ɵɵtemplate(5, DisplayEditorComponent_ng_template_5_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ed-tab");
        i0.ɵɵtemplate(7, DisplayEditorComponent_ng_template_7_Template, 2, 1, "ng-template", 3);
        i0.ɵɵtemplate(8, DisplayEditorComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ed-tab");
        i0.ɵɵtemplate(10, DisplayEditorComponent_ng_template_10_Template, 2, 1, "ng-template", 3);
        i0.ɵɵtemplate(11, DisplayEditorComponent_ng_template_11_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.index);
    } }, directives: [i1.SideTabStripComponent, i2.NgControlStatus, i2.NgModel, i1.TabComponent, i1.TabContentTemplate, i1.TabTitleTemplate, i3.DrawOptionsEditorComponent, i4.NgIf, i5.SeriesOverridesEditorComponent, i6.ThresholdsEditorComponent, i7.TimeRegionsEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DisplayEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-display',
                templateUrl: './display.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9kaXNwbGF5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L2Rpc3BsYXkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7O0lDQ3JFLHNDQUEyQzs7O0lBTTNCLCtCQUFtRDtJQUFBLFlBQXNCO0lBQUEsaUJBQU87OztJQUE3QixlQUFzQjtJQUF0Qix3REFBc0I7OztJQUF6RixpQ0FBZ0I7SUFBQSx1RkFBbUQ7OztJQUExQixlQUF5QjtJQUF6QixnRkFBeUI7OztJQUdsRSwwQ0FBbUQ7OztJQU16QywrQkFBb0Q7SUFBQSxZQUF1QjtJQUFBLGlCQUFPOzs7SUFBOUIsZUFBdUI7SUFBdkIseURBQXVCOzs7SUFBckYsMkJBQVU7SUFBQSx1RkFBb0Q7OztJQUEzQixlQUEwQjtJQUExQixrRkFBMEI7OztJQUc3RCxvQ0FBdUM7OztJQU0zQiwrQkFBcUQ7SUFBQSxZQUF3QjtJQUFBLGlCQUFPOzs7SUFBL0IsZUFBd0I7SUFBeEIsMERBQXdCOzs7SUFBekYsNkJBQVk7SUFBQSx3RkFBcUQ7OztJQUE1QixlQUEyQjtJQUEzQixvRkFBMkI7OztJQUdoRSxzQ0FBMkM7O0FEdEI5QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsd0JBQXdCO0lBSWxFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBSGpCLFVBQUssR0FBVyxDQUFDLENBQUM7SUFLbEIsQ0FBQzs7NEZBUFUsc0JBQXNCLHVCQUlaLFdBQVc7MkRBSnJCLHNCQUFzQjtRQ1JuQywyQ0FDQztRQURpQix5SkFBbUI7UUFDcEMsaUNBQ0M7UUFBQSx1RkFDQztRQUVGLGlCQUFTO1FBRVQsOEJBQ0M7UUFBQSx1RkFDQztRQUVELHVGQUNDO1FBRUYsaUJBQVM7UUFFVCw4QkFDQztRQUFBLHVGQUNDO1FBRUQsdUZBQ0M7UUFFRixpQkFBUztRQUVULDhCQUNDO1FBQUEseUZBQ0M7UUFFRCx5RkFDQztRQUVGLGlCQUFTO1FBRVYsaUJBQW1COztRQWxDRCxtQ0FBbUI7O2tERFF4QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxnQkFBZ0I7YUFDOUI7O3NCQUtjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1kaXNwbGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rpc3BsYXkuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGlzcGxheUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCAge1xuIFxuICBpbmRleDogbnVtYmVyID0gMTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG5cbiAgfVxufVxuIiwiPGVkLXNpZGUtdGFic3RyaXAgWyhuZ01vZGVsKV09XCJpbmRleFwiPlxyXG5cdDxlZC10YWIgaGVhZGVyPVwiRHJhdyBvcHRpb25zXCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLWRyYXctb3B0aW9ucz48L2VkaXRvci1kcmF3LW9wdGlvbnM+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiVGl0bGU+XHJcblx0XHRcdFNlcmllcyBvdmVycmlkZXM8c3BhbiBjbGFzcz1cIm11dGVkIG1sLTFcIiAqbmdJZj1cIm92ZXJyaWRlcz8ubGVuZ3RoXCI+KHt7b3ZlcnJpZGVzLmxlbmd0aH19KTwvc3Bhbj5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLXNlcmllcy1vdmVycmlkZXM+PC9lZGl0b3Itc2VyaWVzLW92ZXJyaWRlcz5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJUaXRsZT5cclxuXHRcdFx0VGhyZXNob2xkczxzcGFuIGNsYXNzPVwibXV0ZWQgbWwtMVwiICpuZ0lmPVwidGhyZXNob2xkcz8ubGVuZ3RoXCI+KHt7dGhyZXNob2xkcy5sZW5ndGh9fSk8L3NwYW4+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci10aHJlc2hvbGRzPjwvZWRpdG9yLXRocmVzaG9sZHM+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiVGl0bGU+XHJcblx0XHRcdFRpbWUgcmVnaW9uczxzcGFuIGNsYXNzPVwibXV0ZWQgbWwtMVwiICpuZ0lmPVwidGltZVJlZ2lvbnM/Lmxlbmd0aFwiPih7e3RpbWVSZWdpb25zLmxlbmd0aH19KTwvc3Bhbj5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLXRpbWUtcmVnaW9ucz48L2VkaXRvci10aW1lLXJlZ2lvbnM+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuPC9lZC1zaWRlLXRhYnN0cmlwPlxyXG5cclxuXHJcbiJdfQ==