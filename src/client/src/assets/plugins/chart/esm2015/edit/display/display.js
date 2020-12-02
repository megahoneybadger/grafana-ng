import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "./draw-options/options";
import * as i5 from "@angular/common";
import * as i6 from "./series-overrides/overrides";
import * as i7 from "./thresholds/thresholds";
import * as i8 from "./time-regions/time-regions";
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
    } }, directives: [i2.SideTabStripComponent, i3.NgControlStatus, i3.NgModel, i2.TabComponent, i2.TabContentTemplate, i2.TabTitleTemplate, i4.DrawOptionsEditorComponent, i5.NgIf, i6.SeriesOverridesEditorComponent, i7.ThresholdsEditorComponent, i8.TimeRegionsEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DisplayEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-display',
                templateUrl: './display.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9kaXNwbGF5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L2Rpc3BsYXkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7OztJQ0NyRSxzQ0FBMkM7OztJQU0zQiwrQkFBbUQ7SUFBQSxZQUFzQjtJQUFBLGlCQUFPOzs7SUFBN0IsZUFBc0I7SUFBdEIsd0RBQXNCOzs7SUFBekYsaUNBQWdCO0lBQUEsdUZBQW1EOzs7SUFBMUIsZUFBeUI7SUFBekIsZ0ZBQXlCOzs7SUFHbEUsMENBQW1EOzs7SUFNekMsK0JBQW9EO0lBQUEsWUFBdUI7SUFBQSxpQkFBTzs7O0lBQTlCLGVBQXVCO0lBQXZCLHlEQUF1Qjs7O0lBQXJGLDJCQUFVO0lBQUEsdUZBQW9EOzs7SUFBM0IsZUFBMEI7SUFBMUIsa0ZBQTBCOzs7SUFHN0Qsb0NBQXVDOzs7SUFNM0IsK0JBQXFEO0lBQUEsWUFBd0I7SUFBQSxpQkFBTzs7O0lBQS9CLGVBQXdCO0lBQXhCLDBEQUF3Qjs7O0lBQXpGLDZCQUFZO0lBQUEsd0ZBQXFEOzs7SUFBNUIsZUFBMkI7SUFBM0Isb0ZBQTJCOzs7SUFHaEUsc0NBQTJDOztBRHRCOUMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHdCQUF3QjtJQUlsRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUhqQixVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBS2xCLENBQUM7OzRGQVBVLHNCQUFzQix1QkFJWixXQUFXOzJEQUpyQixzQkFBc0I7UUNSbkMsMkNBQ0M7UUFEaUIseUpBQW1CO1FBQ3BDLGlDQUNDO1FBQUEsdUZBQ0M7UUFFRixpQkFBUztRQUVULDhCQUNDO1FBQUEsdUZBQ0M7UUFFRCx1RkFDQztRQUVGLGlCQUFTO1FBRVQsOEJBQ0M7UUFBQSx1RkFDQztRQUVELHVGQUNDO1FBRUYsaUJBQVM7UUFFVCw4QkFDQztRQUFBLHlGQUNDO1FBRUQseUZBQ0M7UUFFRixpQkFBUztRQUVWLGlCQUFtQjs7UUFsQ0QsbUNBQW1COztrRERReEIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsZ0JBQWdCO2FBQzlCOztzQkFLYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItZGlzcGxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXNwbGF5Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERpc3BsYXlFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcbiBcbiAgaW5kZXg6IG51bWJlciA9IDE7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuXG4gIH1cbn1cbiIsIjxlZC1zaWRlLXRhYnN0cmlwIFsobmdNb2RlbCldPVwiaW5kZXhcIj5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIkRyYXcgb3B0aW9uc1wiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci1kcmF3LW9wdGlvbnM+PC9lZGl0b3ItZHJhdy1vcHRpb25zPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYlRpdGxlPlxyXG5cdFx0XHRTZXJpZXMgb3ZlcnJpZGVzPHNwYW4gY2xhc3M9XCJtdXRlZCBtbC0xXCIgKm5nSWY9XCJvdmVycmlkZXM/Lmxlbmd0aFwiPih7e292ZXJyaWRlcy5sZW5ndGh9fSk8L3NwYW4+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci1zZXJpZXMtb3ZlcnJpZGVzPjwvZWRpdG9yLXNlcmllcy1vdmVycmlkZXM+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiVGl0bGU+XHJcblx0XHRcdFRocmVzaG9sZHM8c3BhbiBjbGFzcz1cIm11dGVkIG1sLTFcIiAqbmdJZj1cInRocmVzaG9sZHM/Lmxlbmd0aFwiPih7e3RocmVzaG9sZHMubGVuZ3RofX0pPC9zcGFuPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItdGhyZXNob2xkcz48L2VkaXRvci10aHJlc2hvbGRzPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYlRpdGxlPlxyXG5cdFx0XHRUaW1lIHJlZ2lvbnM8c3BhbiBjbGFzcz1cIm11dGVkIG1sLTFcIiAqbmdJZj1cInRpbWVSZWdpb25zPy5sZW5ndGhcIj4oe3t0aW1lUmVnaW9ucy5sZW5ndGh9fSk8L3NwYW4+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci10aW1lLXJlZ2lvbnM+PC9lZGl0b3ItdGltZS1yZWdpb25zPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcbjwvZWQtc2lkZS10YWJzdHJpcD5cclxuXHJcblxyXG4iXX0=