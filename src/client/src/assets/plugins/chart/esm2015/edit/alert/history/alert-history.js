import { Component, Inject } from '@angular/core';
import { Moment, PANEL_TOKEN } from 'common';
import { finalize, tap } from 'rxjs/operators';
import { AlertHelper } from 'common';
import { ErrorMessages, Notes, ObservableEx } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
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
    i0.ɵɵtextInterpolate(ctx_r2.AlertHelperRef.getInfo(a_r4.alert));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvaGlzdG9yeS9hbGVydC1oaXN0b3J5LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9oaXN0b3J5L2FsZXJ0LWhpc3RvcnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQStDLE1BQU0sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFakcsT0FBTyxFQUFFLFFBQVEsRUFBTyxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQWlDLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7SUNHeEUsOEJBQ0M7SUFBQSwrQkFDQztJQUFBLHdCQUE0RTtJQUM3RSxpQkFBTTtJQUNOLCtCQUNDO0lBQUEsK0JBQ0M7SUFBQSwrQkFDQztJQUFBLGdDQUF1RTtJQUFBLFlBQXlCO0lBQUEsaUJBQU87SUFDeEcsaUJBQU07SUFDUCxpQkFBTTtJQUNOLGdDQUE4QjtJQUFBLFlBQW1DO0lBQUEsaUJBQU87SUFDekUsaUJBQU07SUFDTixnQ0FDQztJQUFBLDZCQUFNO0lBQUEsYUFBdUI7SUFBQSxpQkFBTztJQUNyQyxpQkFBTTtJQUNQLGlCQUFLOzs7O0lBZCtCLGVBQWdFO0lBQWhFLGtIQUFnRTtJQUMvRixlQUFvRTtJQUFwRSxzSEFBb0U7SUFLL0QsZUFBZ0U7SUFBaEUs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QkFBTztRQUN0RSxpQkFBSztRQUVMLDRFQUNDOztRQXdCRixpQkFBTTtRQUVOLHVDQUlnQjtRQUVoQixxQ0FNQztRQUxBLHFLQUFnQyx3SEFDSixLQUFLLElBREQ7UUFLaEMsK0JBQ0M7UUFBQSxnQ0FBZ0M7UUFBQSw2REFDL0I7UUFBQSxzQkFBSTtRQUFBLDhDQUE2QjtRQUFBLGlCQUFNO1FBQ3pDLGlCQUFNO1FBRUwsMENBQ0E7UUFBQSxnQ0FDQztRQUFBLG1DQUEwRDtRQUFsRCx5R0FBUyxvQkFBZ0IsSUFBQztRQUF3Qix1QkFBTTtRQUFBLGlCQUFTO1FBQ3pFLG1DQUFtRTtRQUEzRCxrSUFBNEIsS0FBSyxJQUFDO1FBQXlCLHVCQUFNO1FBQUEsaUJBQVM7UUFDbkYsaUJBQU07UUFDUCxpQkFBb0I7UUFFckIsaUJBQVk7OztRQW5ETixlQUFnRTtRQUFoRSx5R0FBZ0UsMEJBQUE7UUE0QnJFLGVBQWlDO1FBQWpDLG1EQUFpQyx5REFBQSxtREFBQTtRQU1qQyxlQUFnQztRQUFoQyxnREFBZ0M7O2tERDVCcEIsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsc0JBQXNCO2FBQ3BDOztzQkFnQkksTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0QW5ub3RhdGlvbiwgQWxlcnRTdGF0ZSwgRGFzaGJvYXJkU3RvcmUsIE1vbWVudCwgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQW5ub3RhdGlvblNlcnZpY2UsIEFubm90YXRpb24sIEFsZXJ0SGVscGVyIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZXMsIE5vdGVzLCBPYnNlcnZhYmxlRXggfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWFsZXJ0LWhpc3RvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtaGlzdG9yeS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydEhpc3RvcnlFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcblxuICBoaXN0b3J5UmVxdWVzdDogT2JzZXJ2YWJsZUV4PEFubm90YXRpb25bXT5cbiAgc3RvcmVTdWJzIDogU3Vic2NyaXB0aW9uO1xuICBoaXN0b3J5OiBBbm5vdGF0aW9uW107XG5cbiAgRXJyb3JNZXNzYWdlc1JlZiA9IEVycm9yTWVzc2FnZXM7XG4gIEFsZXJ0SGVscGVyUmVmID0gQWxlcnRIZWxwZXI7XG5cbiAgZGFzaGJvYXJkSWQ6IG51bWJlcjtcblxuICBkZWxldGVEaWFsb2dPcGVuZWQ6IGJvb2xlYW5cbiAgZGVsZXRpbmc6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwsXG4gICAgcHJpdmF0ZSBzdG9yZTogRGFzaGJvYXJkU3RvcmUsXG4gICAgcHJpdmF0ZSBhbm5vdFNlcnZpY2U6IEFubm90YXRpb25TZXJ2aWNlICl7XG4gICAgICBzdXBlciggcGFuZWwgKTtcblxuICAgICAgdGhpcy5zdG9yZVN1YnMgPSBzdG9yZVxuICAgICAgICAuZGFzaGJvYXJkJFxuICAgICAgICAuc3Vic2NyaWJlKCB4ID0+IHtcbiAgICAgICAgICBpZiggeCApe1xuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRJZCA9IHguaWQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRIaXN0b3J5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuXHRcdHRoaXMuc3RvcmVTdWJzPy51bnN1YnNjcmliZSgpO1xuXHR9XG5cbiAgbG9hZEhpc3RvcnkoKXtcblx0XHRjb25zdCBmaWx0ZXIgPSBgZGFzaGJvYXJkSWQ9JHt0aGlzLmRhc2hib2FyZElkfSZwYW5lbElkPSR7dGhpcy5wYW5lbC5pZH0mbGltaXQ9NTAmdHlwZT1hbGVydGA7XG5cblx0XHR0aGlzLmhpc3RvcnlSZXF1ZXN0ID0gbmV3IE9ic2VydmFibGVFeDxBbm5vdGF0aW9uW10+KCB0aGlzXG5cdFx0XHQuYW5ub3RTZXJ2aWNlXG5cdFx0XHQuZmluZCggZmlsdGVyIClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YXAoeCA9PiB0aGlzLmhpc3RvcnkgPSBbLi4ueF0pKSApO1xuICB9XG4gXG4gIGdldEZvcm1hdHRlZFRpbWUoIGE6IEFubm90YXRpb24gKXtcblx0XHRyZXR1cm4gTW9tZW50LmZvcm1hdCggYS50aW1lICk7XG4gIH1cbiAgXG4gIG9uQ2xlYXJIaXN0b3J5KCl7XG4gICAgdGhpcy5kZWxldGluZyA9IHRydWU7XG5cblx0XHR0aGlzXG5cdFx0XHQuYW5ub3RTZXJ2aWNlXG5cdFx0XHQuY2xlYXIoIHRoaXMuZGFzaGJvYXJkSWQsICt0aGlzLnBhbmVsLmlkIClcblx0XHRcdC5waXBlKCBcblx0XHRcdFx0ZmluYWxpemUoICgpID0+IHRoaXMuZGVsZXRpbmcgPSB0aGlzLmRlbGV0ZURpYWxvZ09wZW5lZCA9IGZhbHNlICkgKVxuXHRcdFx0LnN1YnNjcmliZSggXG5cdFx0XHRcdHggPT4ge1xuXHRcdFx0XHRcdHRoaXMuaGlzdG9yeSA9IFtdO1xuXHRcdFx0XHRcdE5vdGVzLnN1Y2Nlc3MoIHgubWVzc2FnZSApXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGUgPT4gTm90ZXMuZXJyb3IoIGUuZXJyb3I/Lm1lc3NhZ2UgPz8gRXJyb3JNZXNzYWdlcy5CQURfREVMRVRFX0FOTlMgKSApO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1ncm91cFwiIHN0eWxlPVwibWF4LXdpZHRoOiA3MjBweDtcIj5cclxuXHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1taW5pIGJ0bi1kYW5nZXIgcHVsbC1yaWdodFwiIChjbGljayk9XCJkZWxldGVEaWFsb2dPcGVuZWQ9dHJ1ZVwiPlxyXG5cdFx0PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4mbmJzcDtDbGVhciBoaXN0b3J5PC9idXR0b24+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCIgc3R5bGU9XCJ3aGl0ZXNwYWNlOiBub3dyYXBcIj5cclxuXHRTdGF0ZSBoaXN0b3J5IDxzcGFuIGNsYXNzPVwibXV0ZWQgc21hbGxcIj4obGFzdCA1MCBzdGF0ZSBjaGFuZ2VzKTwvc3Bhbj5cclxuXHQ8L2g1PlxyXG5cdFxyXG5cdDxkaXYgKm5nSWY9XCJoaXN0b3J5UmVxdWVzdD8uZGF0YSQgfCBhc3luYzsgZWxzZSBsb2FkT3JFcnJvci50ZW1wbGF0ZVwiID5cclxuXHRcdDxvbCBjbGFzcz1cImFsZXJ0LXJ1bGUtbGlzdFwiID5cclxuXHRcdFx0PGxpIGNsYXNzPVwiYWxlcnQtcnVsZS1pdGVtXCIgKm5nRm9yPVwibGV0IGEgb2YgaGlzdG9yeVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydC1ydWxlLWl0ZW1fX2ljb25cIiBbbmdDbGFzc109XCJbQWxlcnRIZWxwZXJSZWYuZ2V0U3RhdGVDbGFzcyhhLmFsZXJ0LmN1cnJlbnRTdGF0ZSldXCI+XHJcblx0XHRcdFx0XHQ8aSBbbmdDbGFzc109XCJbQWxlcnRIZWxwZXJSZWYuZ2V0U3RhdGVJY29uQ2xhc3MoYS5hbGVydC5jdXJyZW50U3RhdGUpXVwiPjwvaT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtcnVsZS1pdGVtX19ib2R5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtcnVsZS1pdGVtX19oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0LXJ1bGUtaXRlbV9fdGV4dC1iaWdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBbbmdDbGFzc109XCJbQWxlcnRIZWxwZXJSZWYuZ2V0U3RhdGVDbGFzcyhhLmFsZXJ0LmN1cnJlbnRTdGF0ZSldXCI+e3thLmFsZXJ0Py5jdXJyZW50U3RhdGV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYWxlcnQtbGlzdC1pbmZvXCI+e3tBbGVydEhlbHBlclJlZi5nZXRJbmZvKGEuYWxlcnQpfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0LXJ1bGUtaXRlbV9fdGltZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4+e3tnZXRGb3JtYXR0ZWRUaW1lKGEpfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQ8L29sPlxyXG5cclxuXHRcdDxkaXYgKm5nSWY9XCIhaGlzdG9yeT8ubGVuZ3RoXCI+XHJcblx0XHRcdDxpPk5vIHN0YXRlIGNoYW5nZXMgcmVjb3JkZWQ8L2k+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGxvYWQtb3ItZXJyb3IgI2xvYWRPckVycm9yXHJcblx0W2xvYWRpbmdXcmFwcGVyXT1cImhpc3RvcnlSZXF1ZXN0XCJcclxuXHRbbG9hZGluZ01lc3NhZ2VdPVwiJ2xvYWRpbmcgYWxlcnQgYW5ub3RhdGlvbiBoaXN0b3J5Li4uJ1wiXHJcblx0W2Vycm9yTWVzc2FnZV09XCJFcnJvck1lc3NhZ2VzUmVmLkJBRF9HRVRfQU5OU1wiPlxyXG48L2xvYWQtb3ItZXJyb3I+XHJcblxyXG48ZWQtZGlhbG9nIFxyXG5cdFsodmlzaWJsZSldPVwiZGVsZXRlRGlhbG9nT3BlbmVkXCJcclxuXHQoY2xvc2UpPVwiZGVsZXRlRGlhbG9nT3BlbmVkPWZhbHNlXCIgXHJcblx0aGVhZGVyPVwiRGVsZXRlIEFsZXJ0IEhpc3RvcnlcIlxyXG5cdGhlYWRlckljb249XCJmYSBmYS10cmFzaFwiPlxyXG5cdFxyXG5cdDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbmZpcm0tbW9kYWwtdGV4dFwiPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgYWxsIGhpc3RvcnkgXHJcblx0XHRcdDxicj4mIGFubm90YXRpb25zIGZvciB0aGlzIGFsZXJ0PzwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuICA8ZWQtZGlhbG9nLWFjdGlvbnM+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XHJcblx0XHRcdDxidXR0b24gKGNsaWNrKT1cIm9uQ2xlYXJIaXN0b3J5KClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZURpYWxvZ09wZW5lZD1mYWxzZVwiIGNsYXNzPVwiYnRuIGJ0bi1pbnZlcnNlXCI+Q2FuY2VsPC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2VkLWRpYWxvZy1hY3Rpb25zPlxyXG5cdFxyXG48L2VkLWRpYWxvZz4iXX0=