import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "@angular/forms";
import * as i5 from "./general/general";
import * as i6 from "./metrics/metrics";
import * as i7 from "./axes/axes";
import * as i8 from "./legend/legend";
import * as i9 from "./display/display";
import * as i10 from "./alert/alert";
import * as i11 from "./time/time";
function ChartEditorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-general");
} }
function ChartEditorComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-metrics");
} }
function ChartEditorComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-axes");
} }
function ChartEditorComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-legend");
} }
function ChartEditorComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-display");
} }
function ChartEditorComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-alert");
} }
function ChartEditorComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-time");
} }
export class ChartEditorComponent {
    constructor(router, activatedRoute, location) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.index = 0;
        this
            .activatedRoute
            .queryParamMap
            .subscribe((params) => {
            const p = params.get('tab');
            if (Number.isInteger(+p)) {
                this.index = +p;
            }
        });
    }
    onTabSelected(index) {
        const url = this
            .router
            .createUrlTree([], {
            relativeTo: this.activatedRoute,
            queryParams: { tab: index },
            queryParamsHandling: 'merge',
        })
            .toString();
        this.location.go(url);
    }
}
ChartEditorComponent.ɵfac = function ChartEditorComponent_Factory(t) { return new (t || ChartEditorComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Location)); };
ChartEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartEditorComponent, selectors: [["widget-editor"]], decls: 15, vars: 1, consts: [["header", "Graph", 3, "ngModel", "ngModelChange", "selected"], ["header", "General"], ["edTabContent", ""], ["header", "Metrics"], ["header", "Axes"], ["header", "Legend"], ["header", "Display"], ["header", "Alert"], ["header", "Time range"]], template: function ChartEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ed-tabstrip", 0);
        i0.ɵɵlistener("ngModelChange", function ChartEditorComponent_Template_ed_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; })("selected", function ChartEditorComponent_Template_ed_tabstrip_selected_0_listener($event) { return ctx.onTabSelected($event); });
        i0.ɵɵelementStart(1, "ed-tab", 1);
        i0.ɵɵtemplate(2, ChartEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-tab", 3);
        i0.ɵɵtemplate(4, ChartEditorComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-tab", 4);
        i0.ɵɵtemplate(6, ChartEditorComponent_ng_template_6_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "ed-tab", 5);
        i0.ɵɵtemplate(8, ChartEditorComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ed-tab", 6);
        i0.ɵɵtemplate(10, ChartEditorComponent_ng_template_10_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ed-tab", 7);
        i0.ɵɵtemplate(12, ChartEditorComponent_ng_template_12_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "ed-tab", 8);
        i0.ɵɵtemplate(14, ChartEditorComponent_ng_template_14_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.index);
    } }, directives: [i3.TabStripComponent, i4.NgControlStatus, i4.NgModel, i3.TabComponent, i3.TabContentTemplate, i5.GeneralEditorComponent, i6.MetricsEditorComponent, i7.AxesEditorComponent, i8.LegendEditorComponent, i9.DisplayEditorComponent, i10.AlertEditorComponent, i11.TimeEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartEditorComponent, [{
        type: Component,
        args: [{
                selector: 'widget-editor',
                templateUrl: './editor.html'
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.Location }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9lZGl0b3IudHMiLCIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2VkaXRvci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDS3ZDLGlDQUFpQzs7O0lBTWpDLGlDQUFpQzs7O0lBTWpDLDhCQUEyQjs7O0lBTTNCLGdDQUErQjs7O0lBTS9CLGlDQUFpQzs7O0lBTWpDLCtCQUE2Qjs7O0lBTTdCLDhCQUEyQjs7QURsQzlCLE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFDVSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsUUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTDVCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFNZCxJQUFJO2FBQ0QsY0FBYzthQUNkLGFBQWE7YUFDYixTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNwQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO1lBRTlCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBRSxFQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsYUFBYSxDQUFFLEtBQWE7UUFDMUIsTUFBTSxHQUFHLEdBQUcsSUFBSTthQUNiLE1BQU07YUFDTixhQUFhLENBQUMsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYztZQUMvQixXQUFXLEVBQUUsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDO1lBQ3pCLG1CQUFtQixFQUFFLE9BQU87U0FDN0IsQ0FBQzthQUNELFFBQVEsRUFBRSxDQUFBO1FBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7d0ZBOUJVLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDUmpDLHNDQUlDO1FBSEEsa0pBQW1CLHFHQUNQLHlCQUFxQixJQURkO1FBR25CLGlDQUNDO1FBQUEscUZBQ0M7UUFFRixpQkFBUztRQUVULGlDQUNDO1FBQUEscUZBQ0M7UUFFRixpQkFBUztRQUVULGlDQUNDO1FBQUEscUZBQ0M7UUFFRixpQkFBUztRQUVULGlDQUNDO1FBQUEscUZBQ0M7UUFFRixpQkFBUztRQUVULGlDQUNDO1FBQUEsdUZBQ0M7UUFFRixpQkFBUztRQUVULGtDQUNDO1FBQUEsdUZBQ0M7UUFFRixpQkFBUztRQUVULGtDQUNDO1FBQUEsdUZBQ0M7UUFFRixpQkFBUztRQUVWLGlCQUFjOztRQTdDYixtQ0FBbUI7O2tERE9QLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxlQUFlO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2lkZ2V0LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0b3IuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuICBpbmRleDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKXtcbiAgICAgIHRoaXNcbiAgICAgICAgLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgIC5xdWVyeVBhcmFtTWFwXG4gICAgICAgIC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHAgPSBwYXJhbXMuZ2V0KCAndGFiJyApO1xuXG4gICAgICAgICAgaWYoIE51bWJlci5pc0ludGVnZXIoICtwICkpe1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9ICtwO1xuICAgICAgICAgIH0gXG4gICAgICAgIH0pO1xuICB9XG5cbiAgb25UYWJTZWxlY3RlZCggaW5kZXg6IG51bWJlciApe1xuICAgIGNvbnN0IHVybCA9IHRoaXNcbiAgICAgIC5yb3V0ZXJcbiAgICAgIC5jcmVhdGVVcmxUcmVlKFtdLCB7XG4gICAgICAgIHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7dGFiOiBpbmRleH0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXG4gICAgICB9KVxuICAgICAgLnRvU3RyaW5nKClcblxuICAgIHRoaXMubG9jYXRpb24uZ28odXJsKTtcbiAgfVxufVxuIiwiPGVkLXRhYnN0cmlwIGhlYWRlcj1cIkdyYXBoXCJcclxuXHRbKG5nTW9kZWwpXT1cImluZGV4XCJcclxuXHQoc2VsZWN0ZWQpPVwib25UYWJTZWxlY3RlZCgkZXZlbnQpXCI+XHJcblxyXG5cdDxlZC10YWIgaGVhZGVyPVwiR2VuZXJhbFwiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci1nZW5lcmFsPjwvZWRpdG9yLWdlbmVyYWw+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIk1ldHJpY3NcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItbWV0cmljcz48L2VkaXRvci1tZXRyaWNzPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYiBoZWFkZXI9XCJBeGVzXCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLWF4ZXM+PC9lZGl0b3ItYXhlcz5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWIgaGVhZGVyPVwiTGVnZW5kXCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLWxlZ2VuZD48L2VkaXRvci1sZWdlbmQ+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIkRpc3BsYXlcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItZGlzcGxheT48L2VkaXRvci1kaXNwbGF5PlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYiBoZWFkZXI9XCJBbGVydFwiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci1hbGVydD48L2VkaXRvci1hbGVydD5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWIgaGVhZGVyPVwiVGltZSByYW5nZVwiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci10aW1lPjwvZWRpdG9yLXRpbWU+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuPC9lZC10YWJzdHJpcD5cclxuIl19