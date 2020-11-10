import { Component, Inject } from '@angular/core';
import { Moment, PANEL_TOKEN } from 'common';
import { finalize, tap } from 'rxjs/operators';
import { AlertHelper } from 'common';
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r2.AlertHelperRef.getStateClass(a_r4.alert.currentState)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, ctx_r2.AlertHelperRef.getStateIconClass(a_r4.alert.currentState)));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx_r2.AlertHelperRef.getStateClass(a_r4.alert.currentState)));
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
        this.ErrorMessagesRef = ErrorMessages;
        this.AlertHelperRef = AlertHelper;
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
AlertHistoryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertHistoryEditorComponent, selectors: [["editor-alert-history"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 24, vars: 8, consts: [[1, "gf-form-group", 2, "max-width", "720px"], [1, "btn", "btn-mini", "btn-danger", "pull-right", 3, "click"], [1, "fa", "fa-trash"], [1, "section-heading", 2, "whitespace", "nowrap"], [1, "muted", "small"], [4, "ngIf", "ngIfElse"], [3, "loadingWrapper", "loadingMessage", "errorMessage"], ["loadOrError", ""], ["header", "Delete Alert History", "headerIcon", "fa fa-trash", 3, "visible", "visibleChange", "close"], [1, "text-center"], [1, "confirm-modal-text"], [1, "gf-form-button-row"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-inverse", 3, "click"], [1, "alert-rule-list"], ["class", "alert-rule-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "alert-rule-item"], [1, "alert-rule-item__icon", 3, "ngClass"], [3, "ngClass"], [1, "alert-rule-item__body"], [1, "alert-rule-item__header"], [1, "alert-rule-item__text-big"], [1, "alert-list-info"], [1, "alert-rule-item__time"]], template: function AlertHistoryEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 6, ctx.historyRequest == null ? null : ctx.historyRequest.data$))("ngIfElse", _r1.template);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("loadingWrapper", ctx.historyRequest)("loadingMessage", "loading alert annotation history...")("errorMessage", ctx.ErrorMessagesRef.BAD_GET_ANNS);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvaGlzdG9yeS9hbGVydC1oaXN0b3J5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9oaXN0b3J5L2FsZXJ0LWhpc3RvcnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQStDLE1BQU0sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFakcsT0FBTyxFQUFFLFFBQVEsRUFBTyxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQWlDLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7SUNFekIsOEJBQ0M7SUFBQSwrQkFDQztJQUFBLHdCQUE0RTtJQUM3RSxpQkFBTTtJQUNOLCtCQUNDO0lBQUEsK0JBQ0M7SUFBQSwrQkFDQztJQUFBLGdDQUF1RTtJQUFBLFlBQXlCO0lBQUEsaUJBQU87SUFDeEcsaUJBQU07SUFDUCxpQkFBTTtJQUNOLGdDQUE4QjtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUNwRCxpQkFBTTtJQUNOLGdDQUNDO0lBQUEsNkJBQU07SUFBQSxhQUF1QjtJQUFBLGlCQUFPO0lBQ3JDLGlCQUFNO0lBQ1AsaUJBQUs7Ozs7SUFkK0IsZUFBZ0U7SUFBaEUsa0hBQWdFO0lBQy9GLGVB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QUF5Qix1QkFBTTtRQUFBLGlCQUFTO1FBQ25GLGlCQUFNO1FBQ1AsaUJBQW9CO1FBRXJCLGlCQUFZOzs7UUFuRE4sZUFBZ0U7UUFBaEUseUdBQWdFLDBCQUFBO1FBNEJyRSxlQUFpQztRQUFqQyxtREFBaUMseURBQUEsbURBQUE7UUFNakMsZUFBZ0M7UUFBaEMsZ0RBQWdDOztrREQ1QnBCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLHNCQUFzQjthQUNwQzs7c0JBZ0JJLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydEFubm90YXRpb24sIEFsZXJ0U3RhdGUsIERhc2hib2FyZFN0b3JlLCBNb21lbnQsIFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFubm90YXRpb25TZXJ2aWNlLCBBbm5vdGF0aW9uLCBBbGVydEhlbHBlciB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VzLCBOb3RlcywgT2JzZXJ2YWJsZUV4IH0gZnJvbSAndWlsaWInO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1hbGVydC1oaXN0b3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWhpc3RvcnkuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRIaXN0b3J5RWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50ICB7XG5cbiAgaGlzdG9yeVJlcXVlc3Q6IE9ic2VydmFibGVFeDxBbm5vdGF0aW9uW10+XG4gIHN0b3JlU3VicyA6IFN1YnNjcmlwdGlvbjtcbiAgaGlzdG9yeTogQW5ub3RhdGlvbltdO1xuXG4gIEVycm9yTWVzc2FnZXNSZWYgPSBFcnJvck1lc3NhZ2VzO1xuICBBbGVydEhlbHBlclJlZiA9IEFsZXJ0SGVscGVyO1xuXG4gIGRhc2hib2FyZElkOiBudW1iZXI7XG5cbiAgZGVsZXRlRGlhbG9nT3BlbmVkOiBib29sZWFuXG4gIGRlbGV0aW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsLFxuICAgIHByaXZhdGUgc3RvcmU6IERhc2hib2FyZFN0b3JlLFxuICAgIHByaXZhdGUgYW5ub3RTZXJ2aWNlOiBBbm5vdGF0aW9uU2VydmljZSApe1xuICAgICAgc3VwZXIoIHBhbmVsICk7XG5cbiAgICAgIHRoaXMuc3RvcmVTdWJzID0gc3RvcmVcbiAgICAgICAgLmRhc2hib2FyZCRcbiAgICAgICAgLnN1YnNjcmliZSggeCA9PiB7XG4gICAgICAgICAgaWYoIHggKXtcbiAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkSWQgPSB4LmlkO1xuICAgICAgICAgICAgdGhpcy5sb2FkSGlzdG9yeSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcblx0XHR0aGlzLnN0b3JlU3Vicz8udW5zdWJzY3JpYmUoKTtcblx0fVxuXG4gIGxvYWRIaXN0b3J5KCl7XG5cdFx0Y29uc3QgZmlsdGVyID0gYGRhc2hib2FyZElkPSR7dGhpcy5kYXNoYm9hcmRJZH0mcGFuZWxJZD0ke3RoaXMucGFuZWwuaWR9JmxpbWl0PTUwJnR5cGU9YWxlcnRgO1xuXG5cdFx0dGhpcy5oaXN0b3J5UmVxdWVzdCA9IG5ldyBPYnNlcnZhYmxlRXg8QW5ub3RhdGlvbltdPiggdGhpc1xuXHRcdFx0LmFubm90U2VydmljZVxuXHRcdFx0LmZpbmQoIGZpbHRlciApXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFwKHggPT4gdGhpcy5oaXN0b3J5ID0gWy4uLnhdKSkgKTtcbiAgfVxuIFxuICBnZXRGb3JtYXR0ZWRUaW1lKCBhOiBBbm5vdGF0aW9uICl7XG5cdFx0cmV0dXJuIE1vbWVudC5mb3JtYXQoIGEudGltZSApO1xuICB9XG4gIFxuICBnZXRJbmZvKCBhOkFubm90YXRpb24gICkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYS5hbGVydDtcblxuICAgIGlmIChfLmlzQXJyYXkoYWxlcnQuZGF0YSkpIHsgXG4gICAgICByZXR1cm4gXy5yZWR1Y2UoIGFsZXJ0LmRhdGEsIChyZXMsIGV2KSA9PiB7XG4gICAgICAgIGlmIChldi5NZXRyaWMgIT09IHVuZGVmaW5lZCAmJiBldi5WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzLnB1c2goZXYuTWV0cmljICsgJz0nICsgZXYuVmFsdWUpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LCBbXSApXG4gICAgICAuam9pbignLCAnKTtcbiAgICB9IFxuXG4gICAgcmV0dXJuIGFsZXJ0LmRhdGE/LmVycm9yID8gYEVycm9yOiAke2FsZXJ0LmRhdGE/LmVycm9yfWAgOiAnJztcbiAgfVxuXG4gIFxuICBvbkNsZWFySGlzdG9yeSgpe1xuICAgIHRoaXMuZGVsZXRpbmcgPSB0cnVlO1xuXG5cdFx0dGhpc1xuXHRcdFx0LmFubm90U2VydmljZVxuXHRcdFx0LmNsZWFyKCB0aGlzLmRhc2hib2FyZElkLCArdGhpcy5wYW5lbC5pZCApXG5cdFx0XHQucGlwZSggXG5cdFx0XHRcdGZpbmFsaXplKCAoKSA9PiB0aGlzLmRlbGV0aW5nID0gdGhpcy5kZWxldGVEaWFsb2dPcGVuZWQgPSBmYWxzZSApIClcblx0XHRcdC5zdWJzY3JpYmUoIFxuXHRcdFx0XHR4ID0+IHtcblx0XHRcdFx0XHR0aGlzLmhpc3RvcnkgPSBbXTtcblx0XHRcdFx0XHROb3Rlcy5zdWNjZXNzKCB4Lm1lc3NhZ2UgKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlID0+IE5vdGVzLmVycm9yKCBlLmVycm9yPy5tZXNzYWdlID8/IEVycm9yTWVzc2FnZXMuQkFEX0RFTEVURV9BTk5TICkgKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIiBzdHlsZT1cIm1heC13aWR0aDogNzIwcHg7XCI+XHJcblx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbWluaSBidG4tZGFuZ2VyIHB1bGwtcmlnaHRcIiAoY2xpY2spPVwiZGVsZXRlRGlhbG9nT3BlbmVkPXRydWVcIj5cclxuXHRcdDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+Jm5ic3A7Q2xlYXIgaGlzdG9yeTwvYnV0dG9uPlxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiIHN0eWxlPVwid2hpdGVzcGFjZTogbm93cmFwXCI+XHJcblx0U3RhdGUgaGlzdG9yeSA8c3BhbiBjbGFzcz1cIm11dGVkIHNtYWxsXCI+KGxhc3QgNTAgc3RhdGUgY2hhbmdlcyk8L3NwYW4+XHJcblx0PC9oNT5cclxuXHRcclxuXHQ8ZGl2ICpuZ0lmPVwiaGlzdG9yeVJlcXVlc3Q/LmRhdGEkIHwgYXN5bmM7IGVsc2UgbG9hZE9yRXJyb3IudGVtcGxhdGVcIiA+XHJcblx0XHQ8b2wgY2xhc3M9XCJhbGVydC1ydWxlLWxpc3RcIiA+XHJcblx0XHRcdDxsaSBjbGFzcz1cImFsZXJ0LXJ1bGUtaXRlbVwiICpuZ0Zvcj1cImxldCBhIG9mIGhpc3RvcnlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtcnVsZS1pdGVtX19pY29uXCIgW25nQ2xhc3NdPVwiW0FsZXJ0SGVscGVyUmVmLmdldFN0YXRlQ2xhc3MoYS5hbGVydC5jdXJyZW50U3RhdGUpXVwiPlxyXG5cdFx0XHRcdFx0PGkgW25nQ2xhc3NdPVwiW0FsZXJ0SGVscGVyUmVmLmdldFN0YXRlSWNvbkNsYXNzKGEuYWxlcnQuY3VycmVudFN0YXRlKV1cIj48L2k+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0LXJ1bGUtaXRlbV9fYm9keVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0LXJ1bGUtaXRlbV9faGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydC1ydWxlLWl0ZW1fX3RleHQtYmlnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gW25nQ2xhc3NdPVwiW0FsZXJ0SGVscGVyUmVmLmdldFN0YXRlQ2xhc3MoYS5hbGVydC5jdXJyZW50U3RhdGUpXVwiPnt7YS5hbGVydD8uY3VycmVudFN0YXRlfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImFsZXJ0LWxpc3QtaW5mb1wiPnt7Z2V0SW5mbyhhKX19PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydC1ydWxlLWl0ZW1fX3RpbWVcIj5cclxuXHRcdFx0XHRcdDxzcGFuPnt7Z2V0Rm9ybWF0dGVkVGltZShhKX19PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0PC9vbD5cclxuXHJcblx0XHQ8ZGl2ICpuZ0lmPVwiIWhpc3Rvcnk/Lmxlbmd0aFwiPlxyXG5cdFx0XHQ8aT5ObyBzdGF0ZSBjaGFuZ2VzIHJlY29yZGVkPC9pPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxsb2FkLW9yLWVycm9yICNsb2FkT3JFcnJvclxyXG5cdFtsb2FkaW5nV3JhcHBlcl09XCJoaXN0b3J5UmVxdWVzdFwiXHJcblx0W2xvYWRpbmdNZXNzYWdlXT1cIidsb2FkaW5nIGFsZXJ0IGFubm90YXRpb24gaGlzdG9yeS4uLidcIlxyXG5cdFtlcnJvck1lc3NhZ2VdPVwiRXJyb3JNZXNzYWdlc1JlZi5CQURfR0VUX0FOTlNcIj5cclxuPC9sb2FkLW9yLWVycm9yPlxyXG5cclxuPGVkLWRpYWxvZyBcclxuXHRbKHZpc2libGUpXT1cImRlbGV0ZURpYWxvZ09wZW5lZFwiXHJcblx0KGNsb3NlKT1cImRlbGV0ZURpYWxvZ09wZW5lZD1mYWxzZVwiIFxyXG5cdGhlYWRlcj1cIkRlbGV0ZSBBbGVydCBIaXN0b3J5XCJcclxuXHRoZWFkZXJJY29uPVwiZmEgZmEtdHJhc2hcIj5cclxuXHRcclxuXHQ8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb25maXJtLW1vZGFsLXRleHRcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIGFsbCBoaXN0b3J5IFxyXG5cdFx0XHQ8YnI+JiBhbm5vdGF0aW9ucyBmb3IgdGhpcyBhbGVydD88L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbiAgPGVkLWRpYWxvZy1hY3Rpb25zPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxyXG5cdFx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkNsZWFySGlzdG9yeSgpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPkRlbGV0ZTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIChjbGljayk9XCJkZWxldGVEaWFsb2dPcGVuZWQ9ZmFsc2VcIiBjbGFzcz1cImJ0biBidG4taW52ZXJzZVwiPkNhbmNlbDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9lZC1kaWFsb2ctYWN0aW9ucz5cclxuXHRcclxuPC9lZC1kaWFsb2c+Il19