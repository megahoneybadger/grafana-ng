import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN, AlertRule } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "@angular/forms";
import * as i5 from "./config/alert-config";
import * as i6 from "./notifications/alert-nots";
import * as i7 from "./history/alert-history";
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
        this.index = 1;
        this.toggleAlertHandle(true);
    }
    ngOnDestroy() {
        this.toggleAlertHandle(false);
    }
    onAddAlert() {
        this.widget.alert = new AlertRule();
    }
    onClose() {
        this.index = 0;
    }
    onDelete() {
        // delete alert
        this.widget.alert = this.panel.alertState = undefined;
        this.refresh();
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
    } }, directives: [i2.NgIf, i3.SideTabStripComponent, i4.NgControlStatus, i4.NgModel, i3.TabComponent, i3.TabContentTemplate, i3.TabTitleTemplate, i5.AlertConfigEditorComponent, i6.AlertNotificationsEditorComponent, i7.AlertHistoryEditorComponent, i3.DialogComponent, i3.DialogActionsComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert',
                templateUrl: './alert.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2FsZXJ0L2FsZXJ0LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9hbGVydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7O0lDQ3JFLHNDQUEyQzs7O0lBTTNDLCtCQUNEOzs7SUFFQyw2Q0FBeUQ7OztJQU16RCx1Q0FBNkM7Ozs7SUFNN0Msb0NBTUM7SUFGQSxvTkFBbUI7SUFFbkIsOEJBQ0M7SUFBQSwrQkFDQztJQUFBLGtFQUNBO0lBQUEsK0JBQ0M7SUFBQSwwRUFDRDtJQUFBLGlCQUFNO0lBQ1AsaUJBQU07SUFDUCxpQkFBTTtJQUdOLHlDQUNDO0lBQUEsa0NBQW9EO0lBQTVDLG9OQUFvQjtJQUF3QixzQkFBTTtJQUFBLGlCQUFTO0lBQ25FLGtDQUF5RDtJQUFqRCxtTkFBbUI7SUFBOEIsdUJBQU07SUFBQSxpQkFBUztJQUN6RSxpQkFBb0I7SUFDckIsaUJBQVk7Ozs7SUE1Q2YsMkNBQ0M7SUFEaUIsME9BQW1CO0lBQ3BDLGlDQUNDO0lBQUEsd0dBQ0M7SUFFRixpQkFBUztJQUVULDhCQUNDO0lBQUEsd0dBQ0M7SUFFRCx3R0FDQztJQUVGLGlCQUFTO0lBRVQsaUNBQ0M7SUFBQSx3R0FDQztJQUVGLGlCQUFTO0lBRVQsaUNBQ0M7SUFBQSx5R0FDQztJQXNCRixpQkFBUztJQUVWLGlCQUFtQjs7O0lBaERELHNDQUFtQjs7OztJQW1EcEMsK0JBQ0M7SUFBQSwrQkFDQztJQUFBLGtDQUNDO0lBRCtCLG1NQUFzQjtJQUNyRCx3QkFBcUM7SUFDckMsOEJBQ0Q7SUFBQSxpQkFBUztJQUNWLGlCQUFNO0lBQ1AsaUJBQU07O0FEbERQLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0I7SUFJaEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFIakIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUtoQixJQUFJLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVE7UUFDTixlQUFlO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBRXRELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzt3RkE3QlUsb0JBQW9CLHVCQUlWLFdBQVc7eURBSnJCLG9CQUFvQjtRQ1JqQyxnR0FDQztRQWlERCxzSEFDQzs7O1FBbkRxQyxnQ0FBOEIsaUJBQUE7O2tERFF2RCxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsY0FBYzthQUM1Qjs7c0JBS2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiwgQWxlcnRSdWxlIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcbiBcbiAgaW5kZXg6IG51bWJlciA9IDE7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuXG4gICAgdGhpcy50b2dnbGVBbGVydEhhbmRsZSggdHJ1ZSApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnRvZ2dsZUFsZXJ0SGFuZGxlKCBmYWxzZSApO1xuICB9XG5cbiAgb25BZGRBbGVydCgpe1xuICAgIHRoaXMud2lkZ2V0LmFsZXJ0ID0gbmV3IEFsZXJ0UnVsZSgpO1xuICB9XG5cbiAgb25DbG9zZSgpe1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgb25EZWxldGUoKXtcbiAgICAvLyBkZWxldGUgYWxlcnRcbiAgICB0aGlzLndpZGdldC5hbGVydCA9IHRoaXMucGFuZWwuYWxlcnRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICBcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHRoaXMub25DbG9zZSgpO1xuICB9XG59XG4iLCI8ZWQtc2lkZS10YWJzdHJpcCBbKG5nTW9kZWwpXT1cImluZGV4XCIgKm5nSWY9XCJhbGVydDsgZWxzZSBpbnZpdGF0aW9uXCI+XHJcblx0PGVkLXRhYiBoZWFkZXI9XCJBbGVydCBDb25maWdcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItYWxlcnQtY29uZmlnPjwvZWRpdG9yLWFsZXJ0LWNvbmZpZz5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJUaXRsZT5cclxuXHRcdFx0Tm90aWZpY2F0aW9uc1xyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItYWxlcnQtbm90aWZpY2F0aW9ucz48L2VkaXRvci1hbGVydC1ub3RpZmljYXRpb25zPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYiBoZWFkZXI9XCJTdGF0ZSBIaXN0b3J5XCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLWFsZXJ0LWhpc3Rvcnk+PC9lZGl0b3ItYWxlcnQtaGlzdG9yeT5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWIgaGVhZGVyPVwiRGVsZXRlXCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWQtZGlhbG9nIFxyXG5cdFx0XHRcdGhlYWRlcj1cIkRlbGV0ZSBBbGVydFwiXHJcblx0XHRcdFx0aGVhZGVySWNvbj1cImZhIGZhLXRyYXNoXCJcclxuXHRcdFx0XHR2aXNpYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0KGNsb3NlKT1cIm9uQ2xvc2UoKVwiID5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29uZmlybS1tb2RhbC10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBhbGVydCBydWxlP1xyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29uZmlybS1tb2RhbC10ZXh0MlwiPlxyXG5cdFx0XHRcdFx0XHRcdFlvdSBuZWVkIHRvIHNhdmUgZGFzaGJvYXJkIGZvciB0aGUgZGVsZXRlIHRvIHRha2UgZWZmZWN0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdDxlZC1kaWFsb2ctYWN0aW9ucz5cclxuXHRcdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cIm9uRGVsZXRlKClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkNsb3NlKClcIiBjbGFzcz1cIm1sLTIgYnRuIGJ0bi1pbnZlcnNlXCI+Q2FuY2VsPC9idXR0b24+XHJcblx0XHRcdFx0PC9lZC1kaWFsb2ctYWN0aW9ucz5cclxuXHRcdFx0PC9lZC1kaWFsb2c+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuPC9lZC1zaWRlLXRhYnN0cmlwPlxyXG5cclxuPG5nLXRlbXBsYXRlICNpbnZpdGF0aW9uPlxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCIgPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbnZlcnNlXCIgKGNsaWNrKT1cIm9uQWRkQWxlcnQoKVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi1nZiBpY29uLWdmLWFsZXJ0XCI+PC9pPlxyXG5cdFx0XHRcdENyZWF0ZSBBbGVydFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L25nLXRlbXBsYXRlID5cclxuXHJcblxyXG4iXX0=