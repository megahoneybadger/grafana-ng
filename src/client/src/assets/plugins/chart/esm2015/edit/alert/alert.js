import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
import * as i3 from "./config/alert-config";
import * as i4 from "./notifications/alert-nots";
import * as i5 from "./history/alert-history";
function AlertEditorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-alert-config");
} }
function AlertEditorComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Notifications ");
} }
function AlertEditorComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-alert-notifications");
} }
function AlertEditorComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor-alert-history");
} }
function AlertEditorComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-dialog", 6);
    i0.ɵɵlistener("close", function AlertEditorComponent_ng_template_9_Template_ed_dialog_close_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onClose(); });
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementStart(2, "div", 8);
    i0.ɵɵtext(3, " Are you sure you want to delete this alert rule? ");
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵtext(5, " You need to save dashboard for the delete to take effect ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ed-dialog-actions");
    i0.ɵɵelementStart(7, "button", 10);
    i0.ɵɵlistener("click", function AlertEditorComponent_ng_template_9_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onDelete(); });
    i0.ɵɵtext(8, "Delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 11);
    i0.ɵɵlistener("click", function AlertEditorComponent_ng_template_9_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onClose(); });
    i0.ɵɵtext(10, "Cancel");
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
    onClose() {
        this.index = 0;
    }
    onDelete() {
        // delete alert
        this.onClose();
    }
}
AlertEditorComponent.ɵfac = function AlertEditorComponent_Factory(t) { return new (t || AlertEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertEditorComponent, selectors: [["editor-alert"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 1, consts: [[3, "ngModel", "ngModelChange"], ["header", "Alert Config"], ["edTabContent", ""], ["edTabTitle", ""], ["header", "State History"], ["header", "Delete"], ["header", "Delete Alert", "headerIcon", "fa fa-trash", "visible", "true", 3, "close"], [1, "text-center"], [1, "confirm-modal-text"], [1, "confirm-modal-text2"], [1, "btn", "btn-danger", 3, "click"], [1, "ml-2", "btn", "btn-inverse", 3, "click"]], template: function AlertEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ed-side-tabstrip", 0);
        i0.ɵɵlistener("ngModelChange", function AlertEditorComponent_Template_ed_side_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; });
        i0.ɵɵelementStart(1, "ed-tab", 1);
        i0.ɵɵtemplate(2, AlertEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-tab");
        i0.ɵɵtemplate(4, AlertEditorComponent_ng_template_4_Template, 1, 0, "ng-template", 3);
        i0.ɵɵtemplate(5, AlertEditorComponent_ng_template_5_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ed-tab", 4);
        i0.ɵɵtemplate(7, AlertEditorComponent_ng_template_7_Template, 1, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "ed-tab", 5);
        i0.ɵɵtemplate(9, AlertEditorComponent_ng_template_9_Template, 11, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.index);
    } }, directives: [i1.SideTabStripComponent, i2.NgControlStatus, i2.NgModel, i1.TabComponent, i1.TabContentTemplate, i1.TabTitleTemplate, i3.AlertConfigEditorComponent, i4.AlertNotificationsEditorComponent, i5.AlertHistoryEditorComponent, i1.DialogComponent, i1.DialogActionsComponent], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2FsZXJ0L2FsZXJ0LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9hbGVydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0lDQ3JFLHNDQUEyQzs7O0lBTTNDLCtCQUNEOzs7SUFFQyw2Q0FBeUQ7OztJQU16RCx1Q0FBNkM7Ozs7SUFNN0Msb0NBTUM7SUFGQSxnTUFBbUI7SUFFbkIsOEJBQ0M7SUFBQSw4QkFDQztJQUFBLGtFQUNBO0lBQUEsOEJBQ0M7SUFBQSwwRUFDRDtJQUFBLGlCQUFNO0lBQ1AsaUJBQU07SUFDUCxpQkFBTTtJQUdOLHlDQUNDO0lBQUEsa0NBQW9EO0lBQTVDLDhMQUFvQjtJQUF3QixzQkFBTTtJQUFBLGlCQUFTO0lBQ25FLGtDQUF5RDtJQUFqRCw2TEFBbUI7SUFBOEIsdUJBQU07SUFBQSxpQkFBUztJQUN6RSxpQkFBb0I7SUFDckIsaUJBQVk7O0FEcENmLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0I7SUFJaEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFIakIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUtoQixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO1FBQ04sZUFBZTtRQUVmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzt3RkFsQlUsb0JBQW9CLHVCQUlWLFdBQVc7eURBSnJCLG9CQUFvQjtRQ1JqQywyQ0FDQztRQURpQix1SkFBbUI7UUFDcEMsaUNBQ0M7UUFBQSxxRkFDQztRQUVGLGlCQUFTO1FBRVQsOEJBQ0M7UUFBQSxxRkFDQztRQUVELHFGQUNDO1FBRUYsaUJBQVM7UUFFVCxpQ0FDQztRQUFBLHFGQUNDO1FBRUYsaUJBQVM7UUFFVCxpQ0FDQztRQUFBLHNGQUNDO1FBc0JGLGlCQUFTO1FBRVYsaUJBQW1COztRQWhERCxtQ0FBbUI7O2tERFF4QixvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsY0FBYzthQUM1Qjs7c0JBS2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0RWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50ICB7XG4gXG4gIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcblxuICAgIGNvbnNvbGUubG9nKCB0aGlzLndpZGdldCApO1xuICB9XG5cbiAgb25DbG9zZSgpe1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgb25EZWxldGUoKXtcbiAgICAvLyBkZWxldGUgYWxlcnRcblxuICAgIHRoaXMub25DbG9zZSgpO1xuICB9XG59XG4iLCI8ZWQtc2lkZS10YWJzdHJpcCBbKG5nTW9kZWwpXT1cImluZGV4XCI+XHJcblx0PGVkLXRhYiBoZWFkZXI9XCJBbGVydCBDb25maWdcIj5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItYWxlcnQtY29uZmlnPjwvZWRpdG9yLWFsZXJ0LWNvbmZpZz5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJUaXRsZT5cclxuXHRcdFx0Tm90aWZpY2F0aW9uc1xyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdDxuZy10ZW1wbGF0ZSBlZFRhYkNvbnRlbnQ+XHJcblx0XHRcdDxlZGl0b3ItYWxlcnQtbm90aWZpY2F0aW9ucz48L2VkaXRvci1hbGVydC1ub3RpZmljYXRpb25zPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHQ8L2VkLXRhYj5cclxuXHJcblx0PGVkLXRhYiBoZWFkZXI9XCJTdGF0ZSBIaXN0b3J5XCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWRpdG9yLWFsZXJ0LWhpc3Rvcnk+PC9lZGl0b3ItYWxlcnQtaGlzdG9yeT5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9lZC10YWI+XHJcblxyXG5cdDxlZC10YWIgaGVhZGVyPVwiRGVsZXRlXCI+XHJcblx0XHQ8bmctdGVtcGxhdGUgZWRUYWJDb250ZW50PlxyXG5cdFx0XHQ8ZWQtZGlhbG9nIFxyXG5cdFx0XHRcdGhlYWRlcj1cIkRlbGV0ZSBBbGVydFwiXHJcblx0XHRcdFx0aGVhZGVySWNvbj1cImZhIGZhLXRyYXNoXCJcclxuXHRcdFx0XHR2aXNpYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0KGNsb3NlKT1cIm9uQ2xvc2UoKVwiID5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29uZmlybS1tb2RhbC10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBhbGVydCBydWxlP1xyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29uZmlybS1tb2RhbC10ZXh0MlwiPlxyXG5cdFx0XHRcdFx0XHRcdFlvdSBuZWVkIHRvIHNhdmUgZGFzaGJvYXJkIGZvciB0aGUgZGVsZXRlIHRvIHRha2UgZWZmZWN0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdDxlZC1kaWFsb2ctYWN0aW9ucz5cclxuXHRcdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cIm9uRGVsZXRlKClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkNsb3NlKClcIiBjbGFzcz1cIm1sLTIgYnRuIGJ0bi1pbnZlcnNlXCI+Q2FuY2VsPC9idXR0b24+XHJcblx0XHRcdFx0PC9lZC1kaWFsb2ctYWN0aW9ucz5cclxuXHRcdFx0PC9lZC1kaWFsb2c+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdDwvZWQtdGFiPlxyXG5cclxuPC9lZC1zaWRlLXRhYnN0cmlwPlxyXG5cclxuXHJcbiJdfQ==