import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN, AlertRule } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "./config/alert-config";
import * as i5 from "./notifications/alert-nots";
import * as i6 from "./history/alert-history";
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-alert-config");
} }
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Notifications ");
} }
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-alert-notifications");
} }
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-alert-history");
} }
function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-dialog", 8);
    i0.ɵɵlistener("close", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_ed_dialog_close_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onClose(); });
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵtext(3, " Are you sure you want to delete this alert rule? ");
    i0.ɵɵelementStart(4, "div", 11);
    i0.ɵɵtext(5, " You need to save dashboard for the delete to take effect ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ed-dialog-actions");
    i0.ɵɵelementStart(7, "button", 12);
    i0.ɵɵlistener("click", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onDelete(); });
    i0.ɵɵtext(8, "Delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 13);
    i0.ɵɵlistener("click", function AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onClose(); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AlertEditorComponent_ed_side_tabstrip_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-side-tabstrip", 2);
    i0.ɵɵlistener("ngModelChange", function AlertEditorComponent_ed_side_tabstrip_0_Template_ed_side_tabstrip_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.index = $event; });
    i0.ɵɵelementStart(1, "ed-tab", 3);
    i0.ɵɵtemplate(2, AlertEditorComponent_ed_side_tabstrip_0_ng_template_2_Template, 1, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ed-tab");
    i0.ɵɵtemplate(4, AlertEditorComponent_ed_side_tabstrip_0_ng_template_4_Template, 1, 0, "ng-template", 5);
    i0.ɵɵtemplate(5, AlertEditorComponent_ed_side_tabstrip_0_ng_template_5_Template, 1, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ed-tab", 6);
    i0.ɵɵtemplate(7, AlertEditorComponent_ed_side_tabstrip_0_ng_template_7_Template, 1, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ed-tab", 7);
    i0.ɵɵtemplate(9, AlertEditorComponent_ed_side_tabstrip_0_ng_template_9_Template, 11, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.index);
} }
function AlertEditorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelementStart(2, "button", 16);
    i0.ɵɵlistener("click", function AlertEditorComponent_ng_template_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onAddAlert(); });
    i0.ɵɵelement(3, "i", 17);
    i0.ɵɵtext(4, " Create Alert ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class AlertEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 0;
        console.log(this.widget);
    }
    ngOnInit() {
        //this.onAddAlert(); // just for tests  
    }
    onAddAlert() {
        this.widget.alert = new AlertRule();
    }
    onClose() {
        this.index = 0;
    }
    onDelete() {
        // delete alert
        this.widget.alert = undefined;
        this.onClose();
    }
}
AlertEditorComponent.ɵfac = function AlertEditorComponent_Factory(t) { return new (t || AlertEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertEditorComponent, selectors: [["editor-alert"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["invitation", ""], [3, "ngModel", "ngModelChange"], ["header", "Alert Config"], ["edTabContent", ""], ["edTabTitle", ""], ["header", "State History"], ["header", "Delete"], ["header", "Delete Alert", "headerIcon", "fa fa-trash", "visible", "true", 3, "close"], [1, "text-center"], [1, "confirm-modal-text"], [1, "confirm-modal-text2"], [1, "btn", "btn-danger", 3, "click"], [1, "ml-2", "btn", "btn-inverse", 3, "click"], [1, "gf-form-group"], [1, "gf-form-button-row"], [1, "btn", "btn-inverse", 3, "click"], [1, "icon-gf", "icon-gf-alert"]], template: function AlertEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AlertEditorComponent_ed_side_tabstrip_0_Template, 10, 1, "ed-side-tabstrip", 0);
        i0.ɵɵtemplate(1, AlertEditorComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.alert)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i2.SideTabStripComponent, i3.NgControlStatus, i3.NgModel, i2.TabComponent, i2.TabContentTemplate, i2.TabTitleTemplate, i4.AlertConfigEditorComponent, i5.AlertNotificationsEditorComponent, i6.AlertHistoryEditorComponent, i2.DialogComponent, i2.DialogActionsComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert',
                templateUrl: './alert.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2FsZXJ0L2FsZXJ0LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9hbGVydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7SUNDckUsc0NBQTJDOzs7SUFNM0MsK0JBQ0Q7OztJQUVDLDZDQUF5RDs7O0lBTXpELHVDQUE2Qzs7OztJQU03QyxvQ0FNQztJQUZBLG9OQUFtQjtJQUVuQiw4QkFDQztJQUFBLCtCQUNDO0lBQUEsa0VBQ0E7SUFBQSwrQkFDQztJQUFBLDBFQUNEO0lBQUEsaUJBQU07SUFDUCxpQkFBTTtJQUNQLGlCQUFNO0lBR04seUNBQ0M7SUFBQSxrQ0FBb0Q7SUFBNUMsb05BQW9CO0lBQXdCLHNCQUFNO0lBQUEsaUJBQVM7SUFDbkUsa0NBQXlEO0lBQWpELG1OQUFtQjtJQUE4Qix1QkFBTTtJQUFBLGlCQUFTO0lBQ3pFLGlCQUFvQjtJQUNyQixpQkFBWTs7OztJQTVDZiwyQ0FDQztJQURpQiwwT0FBbUI7SUFDcEMsaUNBQ0M7SUFBQSx3R0FDQztJQUVGLGlCQUFTO0lBRVQsOEJBQ0M7SUFBQSx3R0FDQztJQUVELHdHQUNDO0lBRUYsaUJBQVM7SUFFVCxpQ0FDQztJQUFBLHdHQUNDO0lBRUYsaUJBQVM7SUFFVCxpQ0FDQztJQUFBLHlHQUNDO0lBc0JGLGlCQUFTO0lBRVYsaUJBQW1COzs7SUFoREQsc0NBQW1COzs7O0lBbURwQywrQkFDQztJQUFBLCtCQUNDO0lBQUEsa0NBQ0M7SUFEK0IsbU1BQXNCO0lBQ3JELHdCQUFxQztJQUNyQyw4QkFDRDtJQUFBLGlCQUFTO0lBQ1YsaUJBQU07SUFDUCxpQkFBTTs7QURsRFAsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHdCQUF3QjtJQUloRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUhqQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBS2hCLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sd0NBQXdDO0lBQzFDLENBQUM7SUFFRCxVQUFVO1FBRVIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO1FBQ04sZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUU5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7d0ZBNUJVLG9CQUFvQix1QkFJVixXQUFXO3lEQUpyQixvQkFBb0I7UUNSakMsZ0dBQ0M7UUFpREQsc0hBQ0M7OztRQW5EcUMsZ0NBQThCLGlCQUFBOztrRERRdkQsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLGNBQWM7YUFDNUI7O3NCQUtjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4sIEFsZXJ0UnVsZSB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0RWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50ICB7XG4gXG4gIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcblxuICAgIGNvbnNvbGUubG9nKCB0aGlzLndpZGdldCApO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICAvL3RoaXMub25BZGRBbGVydCgpOyAvLyBqdXN0IGZvciB0ZXN0cyAgXG4gIH1cblxuICBvbkFkZEFsZXJ0KCl7XG4gICAgXG4gICAgdGhpcy53aWRnZXQuYWxlcnQgPSBuZXcgQWxlcnRSdWxlKCk7XG4gIH1cblxuICBvbkNsb3NlKCl7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBvbkRlbGV0ZSgpe1xuICAgIC8vIGRlbGV0ZSBhbGVydFxuICAgIHRoaXMud2lkZ2V0LmFsZXJ0ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5vbkNsb3NlKCk7XG4gIH1cbn1cbiIsIjxlZC1zaWRlLXRhYnN0cmlwIFsobmdNb2RlbCldPVwiaW5kZXhcIiAqbmdJZj1cImFsZXJ0OyBlbHNlIGludml0YXRpb25cIj5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIkFsZXJ0IENvbmZpZ1wiPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci1hbGVydC1jb25maWc+PC9lZGl0b3ItYWxlcnQtY29uZmlnPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYlRpdGxlPlxyXG5cdFx0XHROb3RpZmljYXRpb25zXHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0PG5nLXRlbXBsYXRlIGVkVGFiQ29udGVudD5cclxuXHRcdFx0PGVkaXRvci1hbGVydC1ub3RpZmljYXRpb25zPjwvZWRpdG9yLWFsZXJ0LW5vdGlmaWNhdGlvbnM+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuXHQ8ZWQtdGFiIGhlYWRlcj1cIlN0YXRlIEhpc3RvcnlcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItYWxlcnQtaGlzdG9yeT48L2VkaXRvci1hbGVydC1oaXN0b3J5PlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYiBoZWFkZXI9XCJEZWxldGVcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZC1kaWFsb2cgXHJcblx0XHRcdFx0aGVhZGVyPVwiRGVsZXRlIEFsZXJ0XCJcclxuXHRcdFx0XHRoZWFkZXJJY29uPVwiZmEgZmEtdHJhc2hcIlxyXG5cdFx0XHRcdHZpc2libGU9XCJ0cnVlXCJcclxuXHRcdFx0XHQoY2xvc2UpPVwib25DbG9zZSgpXCIgPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb25maXJtLW1vZGFsLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGFsZXJ0IHJ1bGU/XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb25maXJtLW1vZGFsLXRleHQyXCI+XHJcblx0XHRcdFx0XHRcdFx0WW91IG5lZWQgdG8gc2F2ZSBkYXNoYm9hcmQgZm9yIHRoZSBkZWxldGUgdG8gdGFrZSBlZmZlY3RcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0PGVkLWRpYWxvZy1hY3Rpb25zPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwib25EZWxldGUoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5EZWxldGU8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cIm9uQ2xvc2UoKVwiIGNsYXNzPVwibWwtMiBidG4gYnRuLWludmVyc2VcIj5DYW5jZWw8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2VkLWRpYWxvZy1hY3Rpb25zPlxyXG5cdFx0XHQ8L2VkLWRpYWxvZz5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG48L2VkLXNpZGUtdGFic3RyaXA+XHJcblxyXG48bmctdGVtcGxhdGUgI2ludml0YXRpb24+XHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIiA+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWludmVyc2VcIiAoY2xpY2spPVwib25BZGRBbGVydCgpXCI+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLWdmIGljb24tZ2YtYWxlcnRcIj48L2k+XHJcblx0XHRcdFx0Q3JlYXRlIEFsZXJ0XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvbmctdGVtcGxhdGUgPlxyXG5cclxuXHJcbiJdfQ==