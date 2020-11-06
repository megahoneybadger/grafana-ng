import { Component, Inject, ViewChild } from '@angular/core';
import { PANEL_TOKEN, AlertNoDataOption, AlertErrorOption, AlertCondition } from 'common';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { DropDownComponent, ErrorMessages, Notes, JsonExplorerComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "./conditions/cond";
function AlertConfigEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "editor-alert-condition", 18);
    i0.ɵɵlistener("removed", function AlertConfigEditorComponent_div_10_Template_editor_alert_condition_removed_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onRemoveCondition($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("condition", c_r3)("index", i_r4);
} }
function AlertConfigEditorComponent_ed_progress_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ed-progress", 19);
} }
export class AlertConfigEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.availableNoDataOptions = DropDownComponent.wrapEnum(AlertNoDataOption);
        this.availableErrorOptions = DropDownComponent.wrapEnum(AlertErrorOption);
    }
    ngOnInit() {
        //this.onAddCondition(); // for test  
        //console.log( new AlertCondition() );
    }
    onAddCondition() {
        var _a;
        this.alert.conditions = (_a = this.alert.conditions) !== null && _a !== void 0 ? _a : [];
        this.alert.conditions.push(new AlertCondition());
    }
    onRemoveCondition(c) {
        const index = this.alert.conditions.indexOf(c);
        if (-1 !== index) {
            this.alert.conditions.splice(index, 1);
            this.refresh();
        }
    }
    onTestRule() {
        this.testing = true;
        of(this.alert)
            .pipe(delay(2000), finalize(() => this.testing = false))
            .subscribe(x => {
            this.explorer.content = x;
            // if( x.error ){
            //   Notes.error( x.error );
            // }
        }, e => {
            var _a, _b;
            return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_ALERT_EVAL);
        });
    }
}
AlertConfigEditorComponent.ɵfac = function AlertConfigEditorComponent_Factory(t) { return new (t || AlertConfigEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertConfigEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertConfigEditorComponent, selectors: [["editor-alert-config"]], viewQuery: function AlertConfigEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(JsonExplorerComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.explorer = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 36, vars: 10, consts: [[1, "gf-form-group"], [1, "section-heading"], ["label", "Name", "labelWidth", "6", "width", "20", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["label", "Evaluate every", "labelWidth", "9", "width", "6", 3, "ngModel", "ngModelChange"], ["label", "For", "labelWidth", "5", "width", "6", "placeholder", "5m", "hint", "If an alert rule has a configured For and the query violates\n\t\t\t\tthe configured threshold it will first go from OK to Pending. \n\t\t\t\tGoing from OK to Pending Grafana will not send any notifications.\n\t\t\t\tOnce the alert rule has been firing for more than For duration,\n\t\t\t\tit will change to Alerting and send alert notifications. ", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-plus"], [1, "gf-form-label", "width-18"], [1, "gf-form-label", "query-keyword"], ["width", "11", 3, "data", "ngModel", "ngModelChange"], [1, "gf-form-button-row", "ed-flex"], [1, "btn", "btn-inverse", 3, "disabled", "click"], ["message", "evaluating rule...", 4, "ngIf"], ["ng-if", "ctrl.testResult", 1, "gf-form-group"], ["jsonExplorer", ""], [3, "condition", "index", "removed"], ["message", "evaluating rule..."]], template: function AlertConfigEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2, "Alert Config");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-textbox", 2);
        i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_3_listener($event) { return ctx.alert.name = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "ed-textbox", 4);
        i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_5_listener($event) { return ctx.alert.frequency = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ed-textbox", 5);
        i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_textbox_ngModelChange_6_listener($event) { return ctx.alert.for = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 0);
        i0.ɵɵelementStart(8, "h5", 1);
        i0.ɵɵtext(9, "Conditions");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, AlertConfigEditorComponent_div_10_Template, 2, 2, "div", 6);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "label", 8);
        i0.ɵɵlistener("click", function AlertConfigEditorComponent_Template_label_click_12_listener() { return ctx.onAddCondition(); });
        i0.ɵɵelement(13, "i", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 0);
        i0.ɵɵelementStart(15, "div", 3);
        i0.ɵɵelementStart(16, "div", 7);
        i0.ɵɵelementStart(17, "span", 10);
        i0.ɵɵtext(18, "If no data or all values are null");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "span", 11);
        i0.ɵɵtext(20, "SET STATE TO");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "ed-dropdown", 12);
        i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_dropdown_ngModelChange_21_listener($event) { return ctx.alert.noDataOption = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 3);
        i0.ɵɵelementStart(23, "div", 7);
        i0.ɵɵelementStart(24, "span", 10);
        i0.ɵɵtext(25, "If execution error or timeout");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "span", 11);
        i0.ɵɵtext(27, "SET STATE TO");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "ed-dropdown", 12);
        i0.ɵɵlistener("ngModelChange", function AlertConfigEditorComponent_Template_ed_dropdown_ngModelChange_28_listener($event) { return ctx.alert.errorOption = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 13);
        i0.ɵɵelementStart(30, "button", 14);
        i0.ɵɵlistener("click", function AlertConfigEditorComponent_Template_button_click_30_listener() { return ctx.onTestRule(); });
        i0.ɵɵtext(31, " Test Rule ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(32, AlertConfigEditorComponent_ed_progress_32_Template, 1, 0, "ed-progress", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 16);
        i0.ɵɵelement(34, "ed-json-explorer", null, 17);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.alert.name);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.alert.frequency);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.alert.for);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.alert.conditions);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("data", ctx.availableNoDataOptions)("ngModel", ctx.alert.noDataOption);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("data", ctx.availableErrorOptions)("ngModel", ctx.alert.errorOption);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.testing);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.testing);
    } }, directives: [i1.TextBoxComponent, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i1.DropDownComponent, i3.NgIf, i1.JsonExplorerComponent, i4.AlertConditionEditorComponent, i1.ProgressComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertConfigEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-config',
                templateUrl: './alert-config.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { explorer: [{
            type: ViewChild,
            args: [JsonExplorerComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9jb25maWcvYWxlcnQtY29uZmlnLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9jb25maWcvYWxlcnQtY29uZmlnLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBUyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN2RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7SUNnQzFFLDJCQUNDO0lBQUEsa0RBSXlCO0lBRHhCLHNPQUF1QztJQUN4QyxpQkFBeUI7SUFDMUIsaUJBQU07Ozs7SUFKSixlQUFlO0lBQWYsZ0NBQWUsZUFBQTs7O0lBZ0RoQixrQ0FBd0U7O0FENUUxRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsd0JBQXdCO0lBU3RFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBTGpCLDJCQUFzQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDO1FBRXpFLDBCQUFxQixHQUFHLGlCQUFpQixDQUFD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O1FBQXhCLHdDQUF3QjtRQVF2QixlQUE2QjtRQUE3Qiw2Q0FBNkI7UUFhN0IsZUFBdUI7UUFBdkIsdUNBQXVCO1FBUXBCLGVBQWdEO1FBQWhELDhDQUFnRDtRQXlCbkQsZ0JBQStCO1FBQS9CLGlEQUErQixtQ0FBQTtRQWEvQixlQUE4QjtRQUE5QixnREFBOEIsa0NBQUE7UUFRd0IsZUFBb0I7UUFBcEIsc0NBQW9CO1FBSWpDLGVBQWU7UUFBZixrQ0FBZTs7a0RENUU5QywwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxxQkFBcUI7YUFDbkM7O3NCQVVjLE1BQU07dUJBQUUsV0FBVzt3QkFQRSxRQUFRO2tCQUF6QyxTQUFTO21CQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiwgQWxlcnROb0RhdGFPcHRpb24sIEFsZXJ0RXJyb3JPcHRpb24sIEFsZXJ0Q29uZGl0aW9uIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEcm9wRG93bkNvbXBvbmVudCwgRXJyb3JNZXNzYWdlcywgTm90ZXMsIEpzb25FeHBsb3JlckNvbXBvbmVudCB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItYWxlcnQtY29uZmlnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWNvbmZpZy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbmZpZ0VkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCAge1xuXG4gIEBWaWV3Q2hpbGQoSnNvbkV4cGxvcmVyQ29tcG9uZW50KSBleHBsb3JlcjsgXG4gIHRlc3RpbmcgOiBib29sZWFuO1xuXG4gIGF2YWlsYWJsZU5vRGF0YU9wdGlvbnMgPSBEcm9wRG93bkNvbXBvbmVudC53cmFwRW51bSggQWxlcnROb0RhdGFPcHRpb24gKTtcblxuICBhdmFpbGFibGVFcnJvck9wdGlvbnMgPSBEcm9wRG93bkNvbXBvbmVudC53cmFwRW51bSggQWxlcnRFcnJvck9wdGlvbiApO1xuICBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICAvL3RoaXMub25BZGRDb25kaXRpb24oKTsgLy8gZm9yIHRlc3QgIFxuICAgIC8vY29uc29sZS5sb2coIG5ldyBBbGVydENvbmRpdGlvbigpICk7XG4gIH1cblxuICBvbkFkZENvbmRpdGlvbigpe1xuICAgIHRoaXMuYWxlcnQuY29uZGl0aW9ucyA9IHRoaXMuYWxlcnQuY29uZGl0aW9ucyA/PyBbXTtcbiAgICB0aGlzLmFsZXJ0LmNvbmRpdGlvbnMucHVzaCggbmV3IEFsZXJ0Q29uZGl0aW9uKCkgKTtcbiAgfVxuXG4gIG9uUmVtb3ZlQ29uZGl0aW9uKCBjOiBBbGVydENvbmRpdGlvbiApe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGVydC5jb25kaXRpb25zLmluZGV4T2YoIGMgKTtcblxuICAgIGlmKCAtMSAhPT0gaW5kZXggKXtcbiAgICAgIHRoaXMuYWxlcnQuY29uZGl0aW9ucy5zcGxpY2UoIGluZGV4LCAxICk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBvblRlc3RSdWxlKCl7XG4gICAgdGhpcy50ZXN0aW5nID0gdHJ1ZTtcblxuICAgIG9mKCB0aGlzLmFsZXJ0IClcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWxheSgyMDAwKSxcbiAgICAgICAgZmluYWxpemUoICgpID0+IHRoaXMudGVzdGluZyA9IGZhbHNlICkpXG4gICAgICAgIC5zdWJzY3JpYmUoIFxuICAgICAgICAgIHggPT4ge1xuICAgICAgICAgICAgdGhpcy5leHBsb3Jlci5jb250ZW50ID0geDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYoIHguZXJyb3IgKXtcbiAgICAgICAgICAgIC8vICAgTm90ZXMuZXJyb3IoIHguZXJyb3IgKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGUgPT4gTm90ZXMuZXJyb3IoIFxuICAgICAgICAgICAgZS5lcnJvcj8ubWVzc2FnZSA/PyBFcnJvck1lc3NhZ2VzLkJBRF9BTEVSVF9FVkFMICkpXG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCI+XHJcblxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPkFsZXJ0IENvbmZpZzwvaDU+XHJcblxyXG5cdDxlZC10ZXh0Ym94IFxyXG5cdFx0bGFiZWw9XCJOYW1lXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdHdpZHRoPVwiMjBcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJhbGVydC5uYW1lXCI+XHJcblx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHRsYWJlbD1cIkV2YWx1YXRlIGV2ZXJ5XCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjlcIlxyXG5cdFx0XHR3aWR0aD1cIjZcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImFsZXJ0LmZyZXF1ZW5jeVwiPlxyXG5cdFx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHRsYWJlbD1cIkZvclwiXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI1XCJcclxuXHRcdFx0d2lkdGg9XCI2XCJcclxuXHRcdFx0cGxhY2Vob2xkZXI9XCI1bVwiXHJcblx0XHRcdGhpbnQ9XCJJZiBhbiBhbGVydCBydWxlIGhhcyBhIGNvbmZpZ3VyZWQgRm9yIGFuZCB0aGUgcXVlcnkgdmlvbGF0ZXNcclxuXHRcdFx0XHR0aGUgY29uZmlndXJlZCB0aHJlc2hvbGQgaXQgd2lsbCBmaXJzdCBnbyBmcm9tIE9LIHRvIFBlbmRpbmcuIFxyXG5cdFx0XHRcdEdvaW5nIGZyb20gT0sgdG8gUGVuZGluZyBHcmFmYW5hIHdpbGwgbm90IHNlbmQgYW55IG5vdGlmaWNhdGlvbnMuXHJcblx0XHRcdFx0T25jZSB0aGUgYWxlcnQgcnVsZSBoYXMgYmVlbiBmaXJpbmcgZm9yIG1vcmUgdGhhbiBGb3IgZHVyYXRpb24sXHJcblx0XHRcdFx0aXQgd2lsbCBjaGFuZ2UgdG8gQWxlcnRpbmcgYW5kIHNlbmQgYWxlcnQgbm90aWZpY2F0aW9ucy4gXCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJhbGVydC5mb3JcIj5cclxuXHRcdDwvZWQtdGV4dGJveD5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZ2YtZm9ybS1ncm91cCBcIj5cclxuXHQ8aDUgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5Db25kaXRpb25zPC9oNT5cclxuXHJcblx0PGRpdiAqbmdGb3I9XCJsZXQgYyBvZiBhbGVydC5jb25kaXRpb25zO2xldCBpID0gaW5kZXhcIiA+XHJcblx0XHQ8ZWRpdG9yLWFsZXJ0LWNvbmRpdGlvbiBcclxuXHRcdFx0W2NvbmRpdGlvbl09XCJjXCIgXHJcblx0XHRcdFtpbmRleF09XCJpXCJcclxuXHRcdFx0KHJlbW92ZWQpPVwib25SZW1vdmVDb25kaXRpb24oICRldmVudCApXCI+XHJcblx0XHQ8L2VkaXRvci1hbGVydC1jb25kaXRpb24+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHBvaW50ZXJcIiAoY2xpY2spPVwib25BZGRDb25kaXRpb24oKVwiPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwIFwiPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCB3aWR0aC0xOFwiPklmIG5vIGRhdGEgb3IgYWxsIHZhbHVlcyBhcmUgbnVsbDwvc3Bhbj5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LWtleXdvcmRcIj5TRVQgU1RBVEUgVE88L3NwYW4+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZWQtZHJvcGRvd25cclxuXHRcdFx0d2lkdGg9XCIxMVwiXHJcblx0XHRcdFtkYXRhXT1cImF2YWlsYWJsZU5vRGF0YU9wdGlvbnNcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImFsZXJ0Lm5vRGF0YU9wdGlvblwiID5cclxuXHRcdDwvZWQtZHJvcGRvd24+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTE4XCI+SWYgZXhlY3V0aW9uIGVycm9yIG9yIHRpbWVvdXQ8L3NwYW4+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkXCI+U0VUIFNUQVRFIFRPPC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGVkLWRyb3Bkb3duXHJcblx0XHRcdHdpZHRoPVwiMTFcIlxyXG5cdFx0XHRbZGF0YV09XCJhdmFpbGFibGVFcnJvck9wdGlvbnNcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImFsZXJ0LmVycm9yT3B0aW9uXCIgPlxyXG5cdFx0PC9lZC1kcm9wZG93bj5cclxuXHJcblx0XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWJ1dHRvbi1yb3cgZWQtZmxleFwiPlxyXG5cdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW52ZXJzZVwiIChjbGljayk9XCJvblRlc3RSdWxlKClcIiBbZGlzYWJsZWRdPVwidGVzdGluZ1wiPlxyXG5cdFx0XHRUZXN0IFJ1bGVcclxuXHRcdDwvYnV0dG9uPlxyXG5cclxuXHRcdDxlZC1wcm9ncmVzcyBtZXNzYWdlPVwiZXZhbHVhdGluZyBydWxlLi4uXCJcdCpuZ0lmPVwidGVzdGluZ1wiPjwvZWQtcHJvZ3Jlc3M+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCIgbmctaWY9XCJjdHJsLnRlc3RSZXN1bHRcIj5cclxuXHQ8ZWQtanNvbi1leHBsb3JlciAjanNvbkV4cGxvcmVyPjwvZWQtanNvbi1leHBsb3Jlcj5cclxuPC9kaXY+XHJcblxyXG4iXX0=