import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "@angular/forms";
import * as i5 from "./axes/axes";
import * as i6 from "./legend/legend";
import * as i7 from "./display/display";
import * as i8 from "./alert/alert";
import * as i9 from "./time/time";
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
    } }, directives: [i3.TabStripComponent, i4.NgControlStatus, i4.NgModel, i3.TabComponent, i3.TabContentTemplate, i3.GeneralEditorComponent, i3.MetricsEditorComponent, i5.AxesEditorComponent, i6.LegendEditorComponent, i7.DisplayEditorComponent, i8.AlertEditorComponent, i9.TimeEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartEditorComponent, [{
        type: Component,
        args: [{
                selector: 'widget-editor',
                templateUrl: './editor.html'
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.Location }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9lZGl0b3IudHMiLCIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2VkaXRvci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztJQ0t2QyxpQ0FBaUM7OztJQU1qQyxpQ0FBaUM7OztJQU1qQyw4QkFBMkI7OztJQU0zQixnQ0FBK0I7OztJQU0vQixpQ0FBaUM7OztJQU1qQywrQkFBNkI7OztJQU03Qiw4QkFBMkI7O0FEbEM5QixNQUFNLE9BQU8sb0JBQW9CO0lBRy9CLFlBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFFBQWtCO1FBRmxCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUw1QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBTWQsSUFBSTthQUNELGNBQWM7YUFDZCxhQUFhO2FBQ2IsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDcEIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUU5QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUUsRUFBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELGFBQWEsQ0FBRSxLQUFhO1FBQzFCLE1BQU0sR0FBRyxHQUFHLElBQUk7YUFDYixNQUFNO2FBQ04sYUFBYSxDQUFDLEVBQUUsRUFBRTtZQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDL0IsV0FBVyxFQUFFLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQztZQUN6QixtQkFBbUIsRUFBRSxPQUFPO1NBQzdCLENBQUM7YUFDRCxRQUFRLEVBQUUsQ0FBQTtRQUViLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O3dGQTlCVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1JqQyxzQ0FJQztRQUhBLGtKQUFtQixxR0FDUCx5QkFBcUIsSUFEZDtRQUduQixpQ0FDQztRQUFBLHFGQUNDO1FBRUYsaUJBQVM7UUFFVCxpQ0FDQztRQUFBLHFGQUNDO1FBRUYsaUJBQVM7UUFFVCxpQ0FDQztRQUFBLHFGQUNDO1FBRUYsaUJBQVM7UUFFVCxpQ0FDQztRQUFBLHFGQUNDO1FBRUYsaUJBQVM7UUFFVCxpQ0FDQztRQUFBLHVGQUNDO1FBRUYsaUJBQVM7UUFFVCxrQ0FDQztRQUFBLHVGQUNDO1FBRUYsaUJBQVM7UUFFVCxrQ0FDQztRQUFBLHVGQUNDO1FBRUYsaUJBQVM7UUFFVixpQkFBYzs7UUE3Q2IsbUNBQW1COztrRERPUCxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsZUFBZTthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpZGdldC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiAgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbil7XG4gICAgICB0aGlzXG4gICAgICAgIC5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAucXVlcnlQYXJhbU1hcFxuICAgICAgICAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICBjb25zdCBwID0gcGFyYW1zLmdldCggJ3RhYicgKTtcblxuICAgICAgICAgIGlmKCBOdW1iZXIuaXNJbnRlZ2VyKCArcCApKXtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSArcDtcbiAgICAgICAgICB9IFxuICAgICAgICB9KTtcbiAgfVxuXG4gIG9uVGFiU2VsZWN0ZWQoIGluZGV4OiBudW1iZXIgKXtcbiAgICBjb25zdCB1cmwgPSB0aGlzXG4gICAgICAucm91dGVyXG4gICAgICAuY3JlYXRlVXJsVHJlZShbXSwge1xuICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBxdWVyeVBhcmFtczoge3RhYjogaW5kZXh9LFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxuICAgICAgfSlcbiAgICAgIC50b1N0cmluZygpXG5cbiAgICB0aGlzLmxvY2F0aW9uLmdvKHVybCk7XG4gIH1cbn1cbiIsIjxlZC10YWJzdHJpcCBoZWFkZXI9XCJHcmFwaFwiXHJcblx0WyhuZ01vZGVsKV09XCJpbmRleFwiXHJcblx0KHNlbGVjdGVkKT1cIm9uVGFiU2VsZWN0ZWQoJGV2ZW50KVwiPlxyXG5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIkdlbmVyYWxcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItZ2VuZXJhbD48L2VkaXRvci1nZW5lcmFsPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYiBoZWFkZXI9XCJNZXRyaWNzXCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLW1ldHJpY3M+PC9lZGl0b3ItbWV0cmljcz5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWIgaGVhZGVyPVwiQXhlc1wiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci1heGVzPjwvZWRpdG9yLWF4ZXM+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIkxlZ2VuZFwiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci1sZWdlbmQ+PC9lZGl0b3ItbGVnZW5kPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYiBoZWFkZXI9XCJEaXNwbGF5XCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLWRpc3BsYXk+PC9lZGl0b3ItZGlzcGxheT5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWIgaGVhZGVyPVwiQWxlcnRcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItYWxlcnQ+PC9lZGl0b3ItYWxlcnQ+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIlRpbWUgcmFuZ2VcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItdGltZT48L2VkaXRvci10aW1lPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcbjwvZWQtdGFic3RyaXA+XHJcbiJdfQ==