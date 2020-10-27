import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
import * as i3 from "./draw-options/options";
import * as i4 from "./series-overrides/overrides";
import * as i5 from "./thresholds/thresholds";
import * as i6 from "./time-regions/time-regions";
function DisplayEditorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-draw-options");
} }
function DisplayEditorComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Series overrides");
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2, "(5)");
    i0.ɵɵelementEnd();
} }
function DisplayEditorComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-series-overrides");
} }
function DisplayEditorComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-thresholds");
} }
function DisplayEditorComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-time-regions");
} }
export class DisplayEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 2;
    }
}
DisplayEditorComponent.ɵfac = function DisplayEditorComponent_Factory(t) { return new (t || DisplayEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
DisplayEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DisplayEditorComponent, selectors: [["editor-display"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 1, consts: [[3, "ngModel", "ngModelChange"], ["header", "Draw options"], ["edTabContent", ""], ["edTabTitle", ""], ["header", "Thresholds"], ["header", "Time regions"], [1, "muted", "ml-1"]], template: function DisplayEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ed-side-tabstrip", 0);
        i0.ɵɵlistener("ngModelChange", function DisplayEditorComponent_Template_ed_side_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; });
        i0.ɵɵelementStart(1, "ed-tab", 1);
        i0.ɵɵtemplate(2, DisplayEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-tab");
        i0.ɵɵtemplate(4, DisplayEditorComponent_ng_template_4_Template, 3, 0, "ng-template", 3);
        i0.ɵɵtemplate(5, DisplayEditorComponent_ng_template_5_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ed-tab", 4);
        i0.ɵɵtemplate(7, DisplayEditorComponent_ng_template_7_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "ed-tab", 5);
        i0.ɵɵtemplate(9, DisplayEditorComponent_ng_template_9_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.index);
    } }, directives: [i1.SideTabStripComponent, i2.NgControlStatus, i2.NgModel, i1.TabComponent, i1.TabContentTemplate, i1.TabTitleTemplate, i3.DrawOptionsEditorComponent, i4.SeriesOverridesEditorComponent, i5.ThresholdsEditorComponent, i6.TimeRegionsEditorComponent], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9kaXNwbGF5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L2Rpc3BsYXkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7SUNDckUsc0NBQTJDOzs7SUFNM0MsaUNBQWdCO0lBQUEsK0JBQXlCO0lBQUEsbUJBQUc7SUFBQSxpQkFBTzs7O0lBR25ELDBDQUFtRDs7O0lBTW5ELG9DQUF1Qzs7O0lBTXZDLHNDQUEyQzs7QURoQjlDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx3QkFBd0I7SUFJbEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFIakIsVUFBSyxHQUFXLENBQUMsQ0FBQztJQUlsQixDQUFDOzs0RkFOVSxzQkFBc0IsdUJBSVosV0FBVzsyREFKckIsc0JBQXNCO1FDUm5DLDJDQUNDO1FBRGlCLHlKQUFtQjtRQUNwQyxpQ0FDQztRQUFBLHVGQUNDO1FBRUYsaUJBQVM7UUFFVCw4QkFDQztRQUFBLHVGQUNDO1FBRUQsdUZBQ0M7UUFFRixpQkFBUztRQUVULGlDQUNDO1FBQUEsdUZBQ0M7UUFFRixpQkFBUztRQUVULGlDQUNDO1FBQUEsdUZBQ0M7UUFFRixpQkFBUztRQUVWLGlCQUFtQjs7UUE1QkQsbUNBQW1COztrRERReEIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsZ0JBQWdCO2FBQzlCOztzQkFLYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItZGlzcGxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXNwbGF5Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERpc3BsYXlFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcbiBcbiAgaW5kZXg6IG51bWJlciA9IDI7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG59XG4iLCI8ZWQtc2lkZS10YWJzdHJpcCBbKG5nTW9kZWwpXT1cImluZGV4XCI+XHJcblx0PGVkLXRhYiBoZWFkZXI9XCJEcmF3IG9wdGlvbnNcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItZHJhdy1vcHRpb25zPjwvZWRpdG9yLWRyYXctb3B0aW9ucz5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJUaXRsZT5cclxuXHRcdFx0U2VyaWVzIG92ZXJyaWRlczxzcGFuIGNsYXNzPVwibXV0ZWQgbWwtMVwiPig1KTwvc3Bhbj5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLXNlcmllcy1vdmVycmlkZXM+PC9lZGl0b3Itc2VyaWVzLW92ZXJyaWRlcz5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWIgaGVhZGVyPVwiVGhyZXNob2xkc1wiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci10aHJlc2hvbGRzPjwvZWRpdG9yLXRocmVzaG9sZHM+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIlRpbWUgcmVnaW9uc1wiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci10aW1lLXJlZ2lvbnM+PC9lZGl0b3ItdGltZS1yZWdpb25zPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcbjwvZWQtc2lkZS10YWJzdHJpcD5cclxuXHJcblxyXG4iXX0=