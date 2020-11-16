import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Annotation } from 'common';
import { BaseChartComponent } from '../../../base/chart-base';
import { ErrorMessages, Notes } from 'uilib';
import * as i0 from "@angular/core";
import * as i1 from "../../../base/chart.store";
import * as i2 from "common";
import * as i3 from "@angular/common";
import * as i4 from "uilib";
import * as i5 from "@angular/forms";
function EditAnnotationComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Add Annotation");
    i0.ɵɵelementEnd();
} }
function EditAnnotationComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Edit Annotation");
    i0.ɵɵelementEnd();
} }
function EditAnnotationComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function EditAnnotationComponent_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onDelete(); });
    i0.ɵɵtext(1, "Delete");
    i0.ɵɵelementEnd();
} }
export class EditAnnotationComponent extends BaseChartComponent {
    constructor(store, annotService, time) {
        super(store);
        this.store = store;
        this.annotService = annotService;
        this.time = time;
        this.close = new EventEmitter();
    }
    ngOnInit() {
        if (!this.annotation) {
            this.annotation = Annotation.create(this.epochStart, this.epochEnd);
            this.annotations.push(this.annotation);
            this.refresh();
        }
        this.timeLabel = this
            .time
            .converter
            .toDateTimeString(this.annotation.time);
    }
    ngOnDestroy() {
        this.panel.annotations = this.annotations.filter(x => x.id);
        this.refresh();
    }
    onSave() {
        if (this.annotation.id) {
            this.onUpdate();
        }
        else {
            this.onCreate();
        }
    }
    onCreate() {
        this.annotation.panelId = this.panel.id;
        this.annotation.dashboardId = this.dashboardId;
        this
            .annotService
            .create(this.annotation)
            .pipe(finalize(() => this.close.emit()))
            .subscribe(x => {
            Notes.success(x.message);
            this
                .store
                .annotationStore
                .update();
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_CREATE_ANN); });
    }
    //max-width: 20rem;
    onUpdate() {
        var _a;
        const annot = {
            time: this.annotation.time,
            timeEnd: this.annotation.timeEnd,
            text: this.annotation.text,
            tags: [...this.annotation.tags],
            alertId: (_a = this.annotation.alert) === null || _a === void 0 ? void 0 : _a.id
        };
        this
            .annotService
            .update(this.annotation.id, annot)
            .pipe(finalize(() => this.close.emit()))
            .subscribe(x => {
            Notes.success(x.message);
            this
                .store
                .annotationStore
                .update();
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_UPDATE_ANN); });
    }
    onDelete() {
        this
            .annotService
            .remove(this.annotation.id)
            .pipe(finalize(() => this.close.emit()))
            .subscribe(x => {
            Notes.success(x.message);
            this
                .store
                .annotationStore
                .update();
        }, e => { var _a, _b; return Notes.error((_b = (_a = e.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : ErrorMessages.BAD_DELETE_ANN); });
    }
}
EditAnnotationComponent.ɵfac = function EditAnnotationComponent_Factory(t) { return new (t || EditAnnotationComponent)(i0.ɵɵdirectiveInject(i1.ChartStore), i0.ɵɵdirectiveInject(i2.AnnotationService), i0.ɵɵdirectiveInject(i2.TimeRangeStore)); };
EditAnnotationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditAnnotationComponent, selectors: [["edit-annotation"]], inputs: { epochStart: "epochStart", epochEnd: "epochEnd", annotation: "annotation" }, outputs: { close: "close" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 6, consts: [[1, "graph-annotation"], [1, "graph-annotation__header"], [1, "graph-annotation__title"], [4, "ngIf"], [1, "graph-annotation__time"], [1, "graph-annotation__body", "text-center"], ["label", "Description", "labelWidth", "7", "width", "23", "placeholder", "Description", "rows", "2", 3, "ngModel", "ngModelChange"], ["label", "Tags", "labelWidth", "7", 3, "ngModel", "ngModelChange"], [1, "gf-form-button-row"], [1, "btn", "btn-success", 3, "click"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn-text", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function EditAnnotationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, EditAnnotationComponent_span_3_Template, 2, 0, "span", 3);
        i0.ɵɵtemplate(4, EditAnnotationComponent_span_4_Template, 2, 0, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "ed-textarea", 6);
        i0.ɵɵlistener("ngModelChange", function EditAnnotationComponent_Template_ed_textarea_ngModelChange_8_listener($event) { return ctx.annotation.text = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ed-tagbox", 7);
        i0.ɵɵlistener("ngModelChange", function EditAnnotationComponent_Template_ed_tagbox_ngModelChange_9_listener($event) { return ctx.annotation.tags = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 8);
        i0.ɵɵelementStart(11, "button", 9);
        i0.ɵɵlistener("click", function EditAnnotationComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        i0.ɵɵtext(12, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, EditAnnotationComponent_button_13_Template, 2, 0, "button", 10);
        i0.ɵɵelementStart(14, "a", 11);
        i0.ɵɵlistener("click", function EditAnnotationComponent_Template_a_click_14_listener() { return ctx.close.emit(); });
        i0.ɵɵtext(15, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.annotation.id);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.annotation.id);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.timeLabel);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.annotation.text);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.annotation.tags);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.annotation == null ? null : ctx.annotation.id);
    } }, directives: [i3.NgIf, i4.TextAreaComponent, i5.NgControlStatus, i5.NgModel, i4.TagBoxComponent], styles: [".graph-annotation .label-tag{margin-right:4px;margin-top:8px}.graph-annotation .graph-annotation__header{align-items:center;background-color:#333;display:flex;padding:6px 10px}.graph-annotation .graph-annotation__title{display:inline-block;flex-grow:1;font-weight:500;overflow:hidden;padding-right:1rem;text-overflow:ellipsis;white-space:nowrap}.graph-annotation .graph-annotation__title.alert{text-transform:uppercase}.graph-annotation .graph-annotation__edit-icon{padding-left:1rem}.graph-annotation .graph-annotation__time{color:#8e8e8e;display:inline-block;font-style:italic;font-weight:400;position:relative;top:1px}.graph-annotation .graph-annotation__body{padding:.65rem}.graph-annotation .graph-annotation__body.hint{max-width:20rem}.graph-annotation .graph-annotation__user img{border-radius:50%;height:16px;width:16px}.graph-annotation a[href]{color:#33b5e5;text-decoration:underline}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditAnnotationComponent, [{
        type: Component,
        args: [{
                selector: 'edit-annotation',
                templateUrl: './edit-annot.html',
                styleUrls: ['./edit-annot.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.ChartStore }, { type: i2.AnnotationService }, { type: i2.TimeRangeStore }]; }, { epochStart: [{
            type: Input
        }], epochEnd: [{
            type: Input
        }], close: [{
            type: Output
        }], annotation: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1hbm5vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvYW5ub3RhdGlvbnMvZWRpdC9lZGl0LWFubm90LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9hbm5vdGF0aW9ucy9lZGl0L2VkaXQtYW5ub3QuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxPQUFPLEVBQUUsVUFBVSxFQUFxQyxNQUFNLFFBQVEsQ0FBQztBQUV2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7Ozs7SUNGMUMsNEJBQTZCO0lBQUEsOEJBQWM7SUFBQSxpQkFBTzs7O0lBQ2xELDRCQUE0QjtJQUFBLCtCQUFlO0lBQUEsaUJBQU87Ozs7SUEwQmxELGtDQUEyRTtJQUFyQiw2TEFBb0I7SUFBQyxzQkFBTTtJQUFBLGlCQUFTOztBRGpCN0YsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGtCQUFrQjtJQVk3RCxZQUNTLEtBQWlCLEVBQ2hCLFlBQStCLEVBQy9CLElBQW9CO1FBQzFCLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUhWLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQy9CLFNBQUksR0FBSixJQUFJLENBQWdCO1FBUnBCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBV3JDLENBQUM7SUFF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QSxpQkFBSTtRQUN0RCxpQkFBTTtRQUVQLGlCQUFNO1FBRVAsaUJBQU07O1FBbENHLGVBQXNCO1FBQXRCLHlDQUFzQjtRQUN0QixlQUFxQjtRQUFyQix3Q0FBcUI7UUFHUSxlQUFhO1FBQWIsbUNBQWE7UUFTaEQsZUFBNkI7UUFBN0IsNkNBQTZCO1FBUTdCLGVBQTZCO1FBQTdCLDZDQUE2QjtRQU1yQixlQUFzQjtRQUF0Qix3RUFBc0I7O2tERGpCcEIsdUJBQXVCO2NBTm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDaEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7MEhBS1UsVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFFSSxLQUFLO2tCQUFkLE1BQU07WUFDRSxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBBbm5vdGF0aW9uU2VydmljZSwgVGltZVJhbmdlU3RvcmUgfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC5zdG9yZSc7XHJcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZSc7XHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZXMsIE5vdGVzIH0gZnJvbSAndWlsaWInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlZGl0LWFubm90YXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWFubm90Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2VkaXQtYW5ub3Quc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRBbm5vdGF0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcclxuICBcclxuICB0aW1lTGFiZWw6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgZXBvY2hTdGFydDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGVwb2NoRW5kOiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBhbm5vdGF0aW9uOiBBbm5vdGF0aW9uO1xyXG5cclxuICBzdG9yZVN1YnM6IFN1YnNjcmlwdGlvbjtcclxuICBcclxuICBjb25zdHJ1Y3RvciggXHJcbiAgICBwdWJsaWMgc3RvcmU6IENoYXJ0U3RvcmUsXHJcbiAgICBwcml2YXRlIGFubm90U2VydmljZTogQW5ub3RhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRpbWU6IFRpbWVSYW5nZVN0b3JlICl7XHJcbiAgICAgIHN1cGVyKCBzdG9yZSApO1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBpZiggIXRoaXMuYW5ub3RhdGlvbiApe1xyXG4gICAgICB0aGlzLmFubm90YXRpb24gPSBBbm5vdGF0aW9uLmNyZWF0ZSggdGhpcy5lcG9jaFN0YXJ0LCB0aGlzLmVwb2NoRW5kICk7XHJcbiAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaCggdGhpcy5hbm5vdGF0aW9uICk7XHJcblxyXG4gICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRpbWVMYWJlbCA9IHRoaXNcclxuICAgICAgLnRpbWVcclxuICAgICAgLmNvbnZlcnRlclxyXG4gICAgICAudG9EYXRlVGltZVN0cmluZyggdGhpcy5hbm5vdGF0aW9uLnRpbWUgKTtcclxuICB9XHJcbiAgXHJcbiAgbmdPbkRlc3Ryb3koKXtcclxuICAgIHRoaXMucGFuZWwuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zLmZpbHRlciggeCA9PiB4LmlkIClcclxuXHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIG9uU2F2ZSgpe1xyXG4gICAgaWYoIHRoaXMuYW5ub3RhdGlvbi5pZCApe1xyXG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZSgpe1xyXG4gICAgdGhpcy5hbm5vdGF0aW9uLnBhbmVsSWQgPSA8bnVtYmVyPnRoaXMucGFuZWwuaWQ7XHJcbiAgICB0aGlzLmFubm90YXRpb24uZGFzaGJvYXJkSWQgPSB0aGlzLmRhc2hib2FyZElkO1xyXG5cclxuICAgIHRoaXNcclxuXHRcdFx0LmFubm90U2VydmljZVxyXG4gICAgICAuY3JlYXRlKCB0aGlzLmFubm90YXRpb24gKVxyXG4gICAgICAucGlwZSggXHJcbiAgICAgICAgZmluYWxpemUoICgpID0+IHRoaXMuY2xvc2UuZW1pdCgpICkgKVxyXG5cdFx0XHQuc3Vic2NyaWJlKCBcclxuICAgICAgICB4ID0+IHtcclxuICAgICAgICAgIE5vdGVzLnN1Y2Nlc3MoIHgubWVzc2FnZSApO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5zdG9yZVxyXG4gICAgICAgICAgICAuYW5ub3RhdGlvblN0b3JlXHJcbiAgICAgICAgICAgIC51cGRhdGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGUgPT4gTm90ZXMuZXJyb3IoIGUuZXJyb3I/Lm1lc3NhZ2UgPz8gRXJyb3JNZXNzYWdlcy5CQURfQ1JFQVRFX0FOTiApKVxyXG4gIH1cclxuXHJcbiAgLy9tYXgtd2lkdGg6IDIwcmVtO1xyXG5cclxuICBvblVwZGF0ZSgpe1xyXG4gICAgY29uc3QgYW5ub3QgPSB7XHJcbiAgICAgIHRpbWU6IHRoaXMuYW5ub3RhdGlvbi50aW1lLFxyXG4gICAgICB0aW1lRW5kOiB0aGlzLmFubm90YXRpb24udGltZUVuZCxcclxuICAgICAgdGV4dDogdGhpcy5hbm5vdGF0aW9uLnRleHQsXHJcbiAgICAgIHRhZ3M6IFsuLi50aGlzLmFubm90YXRpb24udGFnc10sXHJcbiAgICAgIGFsZXJ0SWQ6IHRoaXMuYW5ub3RhdGlvbi5hbGVydD8uaWRcclxuICAgIH07XHJcblxyXG4gICAgdGhpc1xyXG5cdFx0XHQuYW5ub3RTZXJ2aWNlXHJcbiAgICAgIC51cGRhdGUoIHRoaXMuYW5ub3RhdGlvbi5pZCwgYW5ub3QgKVxyXG4gICAgICAucGlwZSggXHJcbiAgICAgICAgZmluYWxpemUoICgpID0+IHRoaXMuY2xvc2UuZW1pdCgpICkgKVxyXG5cdFx0XHQuc3Vic2NyaWJlKCBcclxuICAgICAgICB4ID0+e1xyXG4gICAgICAgICAgTm90ZXMuc3VjY2VzcyggeC5tZXNzYWdlICk7XHJcblxyXG4gICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAuc3RvcmVcclxuICAgICAgICAgICAgLmFubm90YXRpb25TdG9yZVxyXG4gICAgICAgICAgICAudXBkYXRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlID0+IE5vdGVzLmVycm9yKCBlLmVycm9yPy5tZXNzYWdlID8/IEVycm9yTWVzc2FnZXMuQkFEX1VQREFURV9BTk4gKSlcclxuICB9XHJcbiAgXHJcbiAgb25EZWxldGUoKXtcclxuICAgIHRoaXNcclxuXHRcdFx0LmFubm90U2VydmljZVxyXG4gICAgICAucmVtb3ZlKCB0aGlzLmFubm90YXRpb24uaWQgKVxyXG4gICAgICAucGlwZSggXHJcbiAgICAgICAgZmluYWxpemUoICgpID0+IHRoaXMuY2xvc2UuZW1pdCgpICkgKVxyXG5cdFx0XHQuc3Vic2NyaWJlKCBcclxuICAgICAgICB4ID0+IHtcclxuICAgICAgICAgIE5vdGVzLnN1Y2Nlc3MoIHgubWVzc2FnZSApO1xyXG5cclxuICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLnN0b3JlXHJcbiAgICAgICAgICAgIC5hbm5vdGF0aW9uU3RvcmVcclxuICAgICAgICAgICAgLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0gLFxyXG4gICAgICAgIGUgPT4gTm90ZXMuZXJyb3IoIGUuZXJyb3I/Lm1lc3NhZ2UgPz8gRXJyb3JNZXNzYWdlcy5CQURfREVMRVRFX0FOTiApKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cdFxyXG5cclxuXHRcdFxyXG4iLCJcclxuPGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25cIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX2hlYWRlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX3RpdGxlXCI+XHJcblx0XHRcdDxzcGFuICpuZ0lmPVwiIWFubm90YXRpb24uaWRcIj5BZGQgQW5ub3RhdGlvbjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4gKm5nSWY9XCJhbm5vdGF0aW9uLmlkXCI+RWRpdCBBbm5vdGF0aW9uPC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX3RpbWVcIj57e3RpbWVMYWJlbH19PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJncmFwaC1hbm5vdGF0aW9uX19ib2R5IHRleHQtY2VudGVyXCI+XHJcblxyXG5cdFx0PGVkLXRleHRhcmVhXHJcblx0XHRcdGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiN1wiXHJcblx0XHRcdHdpZHRoPVwiMjNcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImFubm90YXRpb24udGV4dFwiXHJcblx0XHRcdHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRyb3dzPVwiMlwiID5cclxuXHRcdDwvZWQtdGV4dGFyZWE+XHJcblxyXG5cdFx0PGVkLXRhZ2JveCBcclxuXHRcdFx0bGFiZWw9XCJUYWdzXCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjdcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImFubm90YXRpb24udGFnc1wiPlxyXG5cdFx0PC9lZC10YWdib3g+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxyXG5cdFx0XHQ8YnV0dG9uICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJvblNhdmUoKVwiPlNhdmU8L2J1dHRvbj5cclxuXHJcblx0XHRcdDxidXR0b24gKm5nSWY9XCJhbm5vdGF0aW9uPy5pZFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYnV0dG9uPlxyXG5cclxuXHRcdFx0PGEgY2xhc3M9XCJidG4tdGV4dFwiIChjbGljayk9XCJjbG9zZS5lbWl0KClcIj5DYW5jZWw8L2E+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==