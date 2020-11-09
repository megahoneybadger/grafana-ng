import { Component, Inject } from '@angular/core';
import { AlertState, Moment, PANEL_TOKEN } from 'common';
import { finalize, tap } from 'rxjs/operators';
import { ErrorMessages, Notes, ObservableEx } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
const _c0 = function (a0) { return [a0]; };
function AlertHistoryEditorComponent_div_8_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelement(2, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 20);
    i0.ɵɵelementStart(4, "div", 21);
    i0.ɵɵelementStart(5, "div", 22);
    i0.ɵɵelementStart(6, "span", 19);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 23);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 24);
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r2.getStateClass(a_r4)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, ctx_r2.getStateIconClass(a_r4)));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx_r2.getStateClass(a_r4)));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(a_r4.alert == null ? null : a_r4.alert.currentState);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.getInfo(a_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.getFormattedTime(a_r4));
} }
function AlertHistoryEditorComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2, "No state changes recorded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AlertHistoryEditorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "ol", 14);
    i0.ɵɵtemplate(2, AlertHistoryEditorComponent_div_8_li_2_Template, 13, 12, "li", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AlertHistoryEditorComponent_div_8_div_3_Template, 3, 0, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.history);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r0.history == null ? null : ctx_r0.history.length));
} }
export class AlertHistoryEditorComponent extends BaseChartEditorComponent {
    constructor(panel, store, annotService) {
        super(panel);
        this.store = store;
        this.annotService = annotService;
        this.messages = ErrorMessages;
        this.storeSubs = store
            .dashboard$
            .subscribe(x => {
            if (x) {
                this.dashboardId = x.id;
                this.loadHistory();
            }
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.storeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    loadHistory() {
        const filter = `dashboardId=${this.dashboardId}&panelId=${this.panel.id}&limit=50&type=alert`;
        this.historyRequest = new ObservableEx(this
            .annotService
            .find(filter)
            .pipe(tap(x => this.history = [...x])));
    }
    getStateClass(a) {
        switch (a.alert.currentState) {
            case AlertState.Alerting:
                return 'alert-state-critical';
            case AlertState.Pending:
                return 'alert-state-warning';
            case AlertState.NoData:
                return 'alert-state-warning';
            case AlertState.Unknown:
            case AlertState.Paused:
                return 'alert-state-paused';
            default: return 'alert-state-ok';
        }
    }
    getStateIconClass(a) {
        switch (a.alert.currentState) {
            case AlertState.Alerting:
                return 'icon-gf icon-gf-critical';
            case AlertState.NoData:
                return 'fa fa-question';
            case AlertState.Pending:
                return 'fa fa-exclamation';
            case AlertState.Ok:
                return 'icon-gf icon-gf-online';
            case AlertState.Paused:
                return 'fa fa-pause';
            default: return 'fa fa-question';
        }
    }
    getFormattedTime(a) {
        return Moment.format(a.time);
    }
    getInfo(a) {
        var _a, _b;
        const alert = a.alert;
        if (_.isArray(alert.data)) {
            return _.reduce(alert.data, (res, ev) => {
                if (ev.Metric !== undefined && ev.Value !== undefined) {
                    res.push(ev.Metric + '=' + ev.Value);
                }
                return res;
            }, [])
                .join(', ');
        }
        return ((_a = alert.data) === null || _a === void 0 ? void 0 : _a.error) ? `Error: ${(_b = alert.data) === null || _b === void 0 ? void 0 : _b.error}` : '';
    }
    onClearHistory() {
        this.deleting = true;
        this
            .annotService
            .clear(this.dashboardId, +this.panel.id)
            .pipe(finalize(() => this.deleting = this.deleteDialogOpened = false))
            .subscribe(x => {
            this.history = [];
            Notes.success(x.message);
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_DELETE_ANNS); });
    }
}
AlertHistoryEditorComponent.ɵfac = function AlertHistoryEditorComponent_Factory(t) { return new (t || AlertHistoryEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DashboardStore), i0.ɵɵdirectiveInject(i1.AnnotationService)); };
AlertHistoryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertHistoryEditorComponent, selectors: [["editor-alert-history"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 24, vars: 8, consts: [[1, "gf-form-group", 2, "max-width", "720px"], [1, "btn", "btn-mini", "btn-danger", "pull-right", 3, "click"], [1, "fa", "fa-trash"], [1, "section-heading", 2, "whitespace", "nowrap"], [1, "muted", "small"], [4, "ngIf", "ngIfElse"], [3, "loadingWrapper", "loadingMessage", "errorMessage"], ["loadOrError", ""], ["header", "Delete Alert History", "headerIcon", "fa fa-trash", 3, "visible", "visibleChange", "close"], [1, "text-center"], [1, "confirm-modal-text"], [1, "gf-form-button-row"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-inverse", 3, "click"], [1, "alert-rule-list"], ["class", "alert-rule-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "alert-rule-item"], [1, "alert-rule-item__icon", 3, "ngClass"], [3, "ngClass"], [1, "alert-rule-item__body"], [1, "alert-rule-item__header"], [1, "alert-rule-item__text"], [1, "alert-list-info"], [1, "alert-rule-item__time"]], template: function AlertHistoryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_1_listener() { return ctx.deleteDialogOpened = true; });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵtext(3, "\u00A0Clear history");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h5", 3);
        i0.ɵɵtext(5, " State history ");
        i0.ɵɵelementStart(6, "span", 4);
        i0.ɵɵtext(7, "(last 50 state changes)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, AlertHistoryEditorComponent_div_8_Template, 4, 2, "div", 5);
        i0.ɵɵpipe(9, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "load-or-error", 6, 7);
        i0.ɵɵelementStart(12, "ed-dialog", 8);
        i0.ɵɵlistener("visibleChange", function AlertHistoryEditorComponent_Template_ed_dialog_visibleChange_12_listener($event) { return ctx.deleteDialogOpened = $event; })("close", function AlertHistoryEditorComponent_Template_ed_dialog_close_12_listener() { return ctx.deleteDialogOpened = false; });
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵelementStart(14, "div", 10);
        i0.ɵɵtext(15, "Are you sure you want to remove all history ");
        i0.ɵɵelement(16, "br");
        i0.ɵɵtext(17, "& annotations for this alert?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "ed-dialog-actions");
        i0.ɵɵelementStart(19, "div", 11);
        i0.ɵɵelementStart(20, "button", 12);
        i0.ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_20_listener() { return ctx.onClearHistory(); });
        i0.ɵɵtext(21, "Delete");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 13);
        i0.ɵɵlistener("click", function AlertHistoryEditorComponent_Template_button_click_22_listener() { return ctx.deleteDialogOpened = false; });
        i0.ɵɵtext(23, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(11);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 6, ctx.historyRequest.data$))("ngIfElse", _r1.template);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("loadingWrapper", ctx.historyRequest)("loadingMessage", "loading alert annotation history...")("errorMessage", ctx.messages.BAD_GET_ANNS);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("visible", ctx.deleteDialogOpened);
    } }, directives: [i2.NgIf, i3.LoadOrErrorComponent, i3.DialogComponent, i3.DialogActionsComponent, i2.NgForOf, i2.NgClass], pipes: [i2.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertHistoryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-history',
                templateUrl: './alert-history.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DashboardStore }, { type: i1.AnnotationService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvaGlzdG9yeS9hbGVydC1oaXN0b3J5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9oaXN0b3J5L2FsZXJ0LWhpc3RvcnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFrQixNQUFNLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0lDRXpCLDhCQUNDO0lBQUEsK0JBQ0M7SUFBQSx3QkFBMEM7SUFDM0MsaUJBQU07SUFDTiwrQkFDQztJQUFBLCtCQUNDO0lBQUEsK0JBQ0M7SUFBQSxnQ0FBcUM7SUFBQSxZQUF5QjtJQUFBLGlCQUFPO0lBQ3RFLGlCQUFNO0lBQ1AsaUJBQU07SUFDTixnQ0FBOEI7SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFDcEQsaUJBQU07SUFDTixnQ0FDQztJQUFBLDZCQUFNO0lBQUEsYUFBdUI7SUFBQSxpQkFBTztJQUNyQyxpQkFBTTtJQUNQLGlCQUFLOzs7O0lBZCtCLGVBQThCO0lBQTlCLGdGQUE4QjtJQUM3RCxlQUFrQztJQUFsQyxvRkFBa0M7SUFLN0IsZUFBOEI7SUFB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dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydFN0YXRlLCBEYXNoYm9hcmRTdG9yZSwgTW9tZW50LCBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQW5ub3RhdGlvblNlcnZpY2UsIEFubm90YXRpb24gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlcywgTm90ZXMsIE9ic2VydmFibGVFeCB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItYWxlcnQtaGlzdG9yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1oaXN0b3J5Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0SGlzdG9yeUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCAge1xuXG4gIGhpc3RvcnlSZXF1ZXN0OiBPYnNlcnZhYmxlRXg8YW55W10+XG4gIHN0b3JlU3VicyA6IFN1YnNjcmlwdGlvbjtcbiAgaGlzdG9yeTogQW5ub3RhdGlvbltdO1xuICBtZXNzYWdlcyA9IEVycm9yTWVzc2FnZXM7XG5cbiAgZGFzaGJvYXJkSWQ6IG51bWJlcjtcblxuICBkZWxldGVEaWFsb2dPcGVuZWQ6IGJvb2xlYW5cbiAgZGVsZXRpbmc6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwsXG4gICAgcHJpdmF0ZSBzdG9yZTogRGFzaGJvYXJkU3RvcmUsXG4gICAgcHJpdmF0ZSBhbm5vdFNlcnZpY2U6IEFubm90YXRpb25TZXJ2aWNlICl7XG4gICAgICBzdXBlciggcGFuZWwgKTtcblxuICAgICAgdGhpcy5zdG9yZVN1YnMgPSBzdG9yZVxuICAgICAgICAuZGFzaGJvYXJkJFxuICAgICAgICAuc3Vic2NyaWJlKCB4ID0+IHtcbiAgICAgICAgICBpZiggeCApe1xuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRJZCA9IHguaWQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRIaXN0b3J5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuXHRcdHRoaXMuc3RvcmVTdWJzPy51bnN1YnNjcmliZSgpO1xuXHR9XG5cbiAgbG9hZEhpc3RvcnkoKXtcblx0XHRjb25zdCBmaWx0ZXIgPSBgZGFzaGJvYXJkSWQ9JHt0aGlzLmRhc2hib2FyZElkfSZwYW5lbElkPSR7dGhpcy5wYW5lbC5pZH0mbGltaXQ9NTAmdHlwZT1hbGVydGA7XG5cblx0XHR0aGlzLmhpc3RvcnlSZXF1ZXN0ID0gbmV3IE9ic2VydmFibGVFeDxhbnlbXT4oIHRoaXNcblx0XHRcdC5hbm5vdFNlcnZpY2Vcblx0XHRcdC5maW5kKCBmaWx0ZXIgKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRhcCh4ID0+IHRoaXMuaGlzdG9yeSA9IFsuLi54XSkpICk7XG4gIH1cbiAgXG4gIGdldFN0YXRlQ2xhc3MoIGE6IEFubm90YXRpb24gKXtcbiAgICBzd2l0Y2goIGEuYWxlcnQuY3VycmVudFN0YXRlICl7XG4gICAgICBjYXNlIEFsZXJ0U3RhdGUuQWxlcnRpbmc6XG4gICAgICAgIHJldHVybiAnYWxlcnQtc3RhdGUtY3JpdGljYWwnOyBcblxuICAgICAgY2FzZSBBbGVydFN0YXRlLlBlbmRpbmc6XG4gICAgICAgIHJldHVybiAnYWxlcnQtc3RhdGUtd2FybmluZyc7IFxuXG4gICAgICBjYXNlIEFsZXJ0U3RhdGUuTm9EYXRhOlxuICAgICAgICByZXR1cm4gJ2FsZXJ0LXN0YXRlLXdhcm5pbmcnOyBcblxuICAgICAgY2FzZSBBbGVydFN0YXRlLlVua25vd246XG4gICAgICBjYXNlIEFsZXJ0U3RhdGUuUGF1c2VkOlxuICAgICAgICByZXR1cm4gJ2FsZXJ0LXN0YXRlLXBhdXNlZCc7IFxuXG4gICAgICBkZWZhdWx0OiByZXR1cm4gJ2FsZXJ0LXN0YXRlLW9rJztcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZUljb25DbGFzcyggYTogQW5ub3RhdGlvbiApe1xuICAgIHN3aXRjaCggYS5hbGVydC5jdXJyZW50U3RhdGUgKXtcbiAgICAgIGNhc2UgQWxlcnRTdGF0ZS5BbGVydGluZzpcbiAgICAgICAgcmV0dXJuICdpY29uLWdmIGljb24tZ2YtY3JpdGljYWwnOyBcblxuICAgICAgY2FzZSBBbGVydFN0YXRlLk5vRGF0YTpcbiAgICAgICAgcmV0dXJuICdmYSBmYS1xdWVzdGlvbic7IFxuXG4gICAgICBjYXNlIEFsZXJ0U3RhdGUuUGVuZGluZzpcbiAgICAgICAgcmV0dXJuICdmYSBmYS1leGNsYW1hdGlvbic7IFxuXG4gICAgICBjYXNlIEFsZXJ0U3RhdGUuT2s6XG4gICAgICAgIHJldHVybiAnaWNvbi1nZiBpY29uLWdmLW9ubGluZSc7IFxuXG4gICAgICBjYXNlIEFsZXJ0U3RhdGUuUGF1c2VkOlxuICAgICAgICByZXR1cm4gJ2ZhIGZhLXBhdXNlJzsgXG5cbiAgICAgIGRlZmF1bHQ6IHJldHVybiAnZmEgZmEtcXVlc3Rpb24nO1xuICAgIH1cbiAgfVxuXG4gIGdldEZvcm1hdHRlZFRpbWUoIGE6IEFubm90YXRpb24gKXtcblx0XHRyZXR1cm4gTW9tZW50LmZvcm1hdCggYS50aW1lICk7XG4gIH1cblxuICBcbiAgZ2V0SW5mbyggYTpBbm5vdGF0aW9uICApIHtcbiAgICBjb25zdCBhbGVydCA9IGEuYWxlcnQ7XG5cbiAgICBpZiAoXy5pc0FycmF5KGFsZXJ0LmRhdGEpKSB7IFxuICAgICAgcmV0dXJuIF8ucmVkdWNlKCBhbGVydC5kYXRhLCAocmVzLCBldikgPT4ge1xuICAgICAgICBpZiAoZXYuTWV0cmljICE9PSB1bmRlZmluZWQgJiYgZXYuVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcy5wdXNoKGV2Lk1ldHJpYyArICc9JyArIGV2LlZhbHVlKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSwgW10gKVxuICAgICAgLmpvaW4oJywgJyk7XG4gICAgfSBcblxuICAgIHJldHVybiBhbGVydC5kYXRhPy5lcnJvciA/IGBFcnJvcjogJHthbGVydC5kYXRhPy5lcnJvcn1gIDogJyc7XG4gIH1cblxuICBcbiAgb25DbGVhckhpc3RvcnkoKXtcbiAgICB0aGlzLmRlbGV0aW5nID0gdHJ1ZTtcblxuXHRcdHRoaXNcblx0XHRcdC5hbm5vdFNlcnZpY2Vcblx0XHRcdC5jbGVhciggdGhpcy5kYXNoYm9hcmRJZCwgK3RoaXMucGFuZWwuaWQgKVxuXHRcdFx0LnBpcGUoIFxuXHRcdFx0XHRmaW5hbGl6ZSggKCkgPT4gdGhpcy5kZWxldGluZyA9IHRoaXMuZGVsZXRlRGlhbG9nT3BlbmVkID0gZmFsc2UgKSApXG5cdFx0XHQuc3Vic2NyaWJlKCBcblx0XHRcdFx0eCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5oaXN0b3J5ID0gW107XG5cdFx0XHRcdFx0Tm90ZXMuc3VjY2VzcyggeC5tZXNzYWdlIClcblx0XHRcdFx0fSxcblx0XHRcdFx0ZSA9PiBOb3Rlcy5lcnJvciggZS5lcnJvcj8ubWVzc2FnZSA/PyBFcnJvck1lc3NhZ2VzLkJBRF9ERUxFVEVfQU5OUyApICk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDcyMHB4O1wiPlxyXG5cdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW1pbmkgYnRuLWRhbmdlciBwdWxsLXJpZ2h0XCIgKGNsaWNrKT1cImRlbGV0ZURpYWxvZ09wZW5lZD10cnVlXCI+XHJcblx0XHQ8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPiZuYnNwO0NsZWFyIGhpc3Rvcnk8L2J1dHRvbj5cclxuXHQ8aDUgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIiBzdHlsZT1cIndoaXRlc3BhY2U6IG5vd3JhcFwiPlxyXG5cdFN0YXRlIGhpc3RvcnkgPHNwYW4gY2xhc3M9XCJtdXRlZCBzbWFsbFwiPihsYXN0IDUwIHN0YXRlIGNoYW5nZXMpPC9zcGFuPlxyXG5cdDwvaDU+XHJcblx0XHJcblx0PGRpdiAqbmdJZj1cImhpc3RvcnlSZXF1ZXN0LmRhdGEkIHwgYXN5bmM7IGVsc2UgbG9hZE9yRXJyb3IudGVtcGxhdGVcIiA+XHJcblx0XHQ8b2wgY2xhc3M9XCJhbGVydC1ydWxlLWxpc3RcIiA+XHJcblx0XHRcdDxsaSBjbGFzcz1cImFsZXJ0LXJ1bGUtaXRlbVwiICpuZ0Zvcj1cImxldCBhIG9mIGhpc3RvcnlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtcnVsZS1pdGVtX19pY29uXCIgW25nQ2xhc3NdPVwiW2dldFN0YXRlQ2xhc3MoYSldXCI+XHJcblx0XHRcdFx0XHQ8aSBbbmdDbGFzc109XCJbZ2V0U3RhdGVJY29uQ2xhc3MoYSldXCI+PC9pPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydC1ydWxlLWl0ZW1fX2JvZHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydC1ydWxlLWl0ZW1fX2hlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtcnVsZS1pdGVtX190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gW25nQ2xhc3NdPVwiW2dldFN0YXRlQ2xhc3MoYSldXCI+e3thLmFsZXJ0Py5jdXJyZW50U3RhdGV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYWxlcnQtbGlzdC1pbmZvXCI+e3tnZXRJbmZvKGEpfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0LXJ1bGUtaXRlbV9fdGltZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4+e3tnZXRGb3JtYXR0ZWRUaW1lKGEpfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQ8L29sPlxyXG5cclxuXHRcdDxkaXYgKm5nSWY9XCIhaGlzdG9yeT8ubGVuZ3RoXCI+XHJcblx0XHRcdDxpPk5vIHN0YXRlIGNoYW5nZXMgcmVjb3JkZWQ8L2k+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGxvYWQtb3ItZXJyb3IgI2xvYWRPckVycm9yXHJcblx0W2xvYWRpbmdXcmFwcGVyXT1cImhpc3RvcnlSZXF1ZXN0XCJcclxuXHRbbG9hZGluZ01lc3NhZ2VdPVwiJ2xvYWRpbmcgYWxlcnQgYW5ub3RhdGlvbiBoaXN0b3J5Li4uJ1wiXHJcblx0W2Vycm9yTWVzc2FnZV09XCJtZXNzYWdlcy5CQURfR0VUX0FOTlNcIj5cclxuPC9sb2FkLW9yLWVycm9yPlxyXG5cclxuPGVkLWRpYWxvZyBcclxuXHRbKHZpc2libGUpXT1cImRlbGV0ZURpYWxvZ09wZW5lZFwiXHJcblx0KGNsb3NlKT1cImRlbGV0ZURpYWxvZ09wZW5lZD1mYWxzZVwiIFxyXG5cdGhlYWRlcj1cIkRlbGV0ZSBBbGVydCBIaXN0b3J5XCJcclxuXHRoZWFkZXJJY29uPVwiZmEgZmEtdHJhc2hcIj5cclxuXHRcclxuXHQ8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb25maXJtLW1vZGFsLXRleHRcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIGFsbCBoaXN0b3J5IDxicj4mIGFubm90YXRpb25zIGZvciB0aGlzIGFsZXJ0PzwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuICA8ZWQtZGlhbG9nLWFjdGlvbnM+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XHJcblx0XHRcdDxidXR0b24gKGNsaWNrKT1cIm9uQ2xlYXJIaXN0b3J5KClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZURpYWxvZ09wZW5lZD1mYWxzZVwiIGNsYXNzPVwiYnRuIGJ0bi1pbnZlcnNlXCI+Q2FuY2VsPC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2VkLWRpYWxvZy1hY3Rpb25zPlxyXG5cdFxyXG48L2VkLWRpYWxvZz4iXX0=