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
        delete this.annotation.rect;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1hbm5vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvYW5ub3RhdGlvbnMvZWRpdC9lZGl0LWFubm90LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9hbm5vdGF0aW9ucy9lZGl0L2VkaXQtYW5ub3QuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUMsT0FBTyxFQUFFLFVBQVUsRUFBcUMsTUFBTSxRQUFRLENBQUM7QUFFdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxPQUFPLENBQUM7Ozs7Ozs7O0lDRjFDLDRCQUE2QjtJQUFBLDhCQUFjO0lBQUEsaUJBQU87OztJQUNsRCw0QkFBNEI7SUFBQSwrQkFBZTtJQUFBLGlCQUFPOzs7O0lBMEJsRCxrQ0FBMkU7SUFBckIsNkxBQW9CO0lBQUMsc0JBQU07SUFBQSxpQkFBUzs7QURqQjdGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxrQkFBa0I7SUFXN0QsWUFDUyxLQUFpQixFQUNoQixZQUErQixFQUMvQixJQUFvQjtRQUMxQixLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFIVixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQVJwQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVdyQyxDQUFDO0lB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QUFTLGdCQUFZLElBQUM7UUFBQyx1QkFBTTtRQUFBLGlCQUFJO1FBQ3RELGlCQUFNO1FBRVAsaUJBQU07UUFFUCxpQkFBTTs7UUFsQ0csZUFBc0I7UUFBdEIseUNBQXNCO1FBQ3RCLGVBQXFCO1FBQXJCLHdDQUFxQjtRQUdRLGVBQWE7UUFBYixtQ0FBYTtRQVNoRCxlQUE2QjtRQUE3Qiw2Q0FBNkI7UUFRN0IsZUFBNkI7UUFBN0IsNkNBQTZCO1FBTXJCLGVBQXNCO1FBQXRCLHdFQUFzQjs7a0REakJwQix1QkFBdUI7Y0FObkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxtQkFBbUI7Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNoQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QzswSEFJVSxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVJLEtBQUs7a0JBQWQsTUFBTTtZQUNFLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbiwgQW5ub3RhdGlvblNlcnZpY2UsIFRpbWVSYW5nZVN0b3JlIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQuc3RvcmUnO1xyXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UnO1xyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VzLCBOb3RlcyB9IGZyb20gJ3VpbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWRpdC1hbm5vdGF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1hbm5vdC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9lZGl0LWFubm90LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0QW5ub3RhdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XHJcbiAgdGltZUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGVwb2NoU3RhcnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBlcG9jaEVuZDogbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgYW5ub3RhdGlvbjogQW5ub3RhdGlvbjtcclxuXHJcbiAgc3RvcmVTdWJzOiBTdWJzY3JpcHRpb247XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoIFxyXG4gICAgcHVibGljIHN0b3JlOiBDaGFydFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBhbm5vdFNlcnZpY2U6IEFubm90YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aW1lOiBUaW1lUmFuZ2VTdG9yZSApe1xyXG4gICAgICBzdXBlciggc3RvcmUgKTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgaWYoICF0aGlzLmFubm90YXRpb24gKXtcclxuICAgICAgdGhpcy5hbm5vdGF0aW9uID0gQW5ub3RhdGlvbi5jcmVhdGUoIHRoaXMuZXBvY2hTdGFydCwgdGhpcy5lcG9jaEVuZCApO1xyXG4gICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goIHRoaXMuYW5ub3RhdGlvbiApO1xyXG5cclxuICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lTGFiZWwgPSB0aGlzXHJcbiAgICAgIC50aW1lXHJcbiAgICAgIC5jb252ZXJ0ZXJcclxuICAgICAgLnRvRGF0ZVRpbWVTdHJpbmcoIHRoaXMuYW5ub3RhdGlvbi50aW1lICk7XHJcbiAgfVxyXG4gXHJcbiAgbmdPbkRlc3Ryb3koKXtcclxuICAgIHRoaXMucGFuZWwuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zLmZpbHRlciggeCA9PiB4LmlkIClcclxuXHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIG9uU2F2ZSgpe1xyXG4gICAgaWYoIHRoaXMuYW5ub3RhdGlvbi5pZCApe1xyXG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZSgpe1xyXG4gICAgdGhpcy5hbm5vdGF0aW9uLnBhbmVsSWQgPSA8bnVtYmVyPnRoaXMucGFuZWwuaWQ7XHJcbiAgICB0aGlzLmFubm90YXRpb24uZGFzaGJvYXJkSWQgPSB0aGlzLmRhc2hib2FyZElkO1xyXG4gICAgZGVsZXRlIHRoaXMuYW5ub3RhdGlvbi5yZWN0O1xyXG5cclxuICAgIHRoaXNcclxuXHRcdFx0LmFubm90U2VydmljZVxyXG4gICAgICAuY3JlYXRlKCB0aGlzLmFubm90YXRpb24gKVxyXG4gICAgICAucGlwZSggXHJcbiAgICAgICAgZmluYWxpemUoICgpID0+IHRoaXMuY2xvc2UuZW1pdCgpICkgKVxyXG5cdFx0XHQuc3Vic2NyaWJlKCBcclxuICAgICAgICB4ID0+IHtcclxuICAgICAgICAgIE5vdGVzLnN1Y2Nlc3MoIHgubWVzc2FnZSApO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5zdG9yZVxyXG4gICAgICAgICAgICAuYW5ub3RhdGlvblN0b3JlXHJcbiAgICAgICAgICAgIC51cGRhdGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGUgPT4gTm90ZXMuZXJyb3IoIGUuZXJyb3I/Lm1lc3NhZ2UgPz8gRXJyb3JNZXNzYWdlcy5CQURfQ1JFQVRFX0FOTiApKVxyXG4gIH1cclxuXHJcbiAgb25VcGRhdGUoKXtcclxuICAgIGNvbnN0IGFubm90ID0ge1xyXG4gICAgICB0aW1lOiB0aGlzLmFubm90YXRpb24udGltZSxcclxuICAgICAgdGltZUVuZDogdGhpcy5hbm5vdGF0aW9uLnRpbWVFbmQsXHJcbiAgICAgIHRleHQ6IHRoaXMuYW5ub3RhdGlvbi50ZXh0LFxyXG4gICAgICB0YWdzOiBbLi4udGhpcy5hbm5vdGF0aW9uLnRhZ3NdLFxyXG4gICAgICBhbGVydElkOiB0aGlzLmFubm90YXRpb24uYWxlcnQ/LmlkXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXNcclxuXHRcdFx0LmFubm90U2VydmljZVxyXG4gICAgICAudXBkYXRlKCB0aGlzLmFubm90YXRpb24uaWQsIGFubm90IClcclxuICAgICAgLnBpcGUoIFxyXG4gICAgICAgIGZpbmFsaXplKCAoKSA9PiB0aGlzLmNsb3NlLmVtaXQoKSApIClcclxuXHRcdFx0LnN1YnNjcmliZSggXHJcbiAgICAgICAgeCA9PntcclxuICAgICAgICAgIE5vdGVzLnN1Y2Nlc3MoIHgubWVzc2FnZSApO1xyXG5cclxuICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLnN0b3JlXHJcbiAgICAgICAgICAgIC5hbm5vdGF0aW9uU3RvcmVcclxuICAgICAgICAgICAgLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZSA9PiBOb3Rlcy5lcnJvciggZS5lcnJvcj8ubWVzc2FnZSA/PyBFcnJvck1lc3NhZ2VzLkJBRF9VUERBVEVfQU5OICkpXHJcbiAgfVxyXG4gIFxyXG4gIG9uRGVsZXRlKCl7XHJcbiAgICB0aGlzXHJcblx0XHRcdC5hbm5vdFNlcnZpY2VcclxuICAgICAgLnJlbW92ZSggdGhpcy5hbm5vdGF0aW9uLmlkIClcclxuICAgICAgLnBpcGUoIFxyXG4gICAgICAgIGZpbmFsaXplKCAoKSA9PiB0aGlzLmNsb3NlLmVtaXQoKSApIClcclxuXHRcdFx0LnN1YnNjcmliZSggXHJcbiAgICAgICAgeCA9PiB7XHJcbiAgICAgICAgICBOb3Rlcy5zdWNjZXNzKCB4Lm1lc3NhZ2UgKTtcclxuXHJcbiAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIC5zdG9yZVxyXG4gICAgICAgICAgICAuYW5ub3RhdGlvblN0b3JlXHJcbiAgICAgICAgICAgIC51cGRhdGUoKTtcclxuICAgICAgICB9ICxcclxuICAgICAgICBlID0+IE5vdGVzLmVycm9yKCBlLmVycm9yPy5tZXNzYWdlID8/IEVycm9yTWVzc2FnZXMuQkFEX0RFTEVURV9BTk4gKSlcclxuICB9XHJcbn1cclxuXHJcblxyXG5cdFxyXG5cclxuXHRcdFxyXG4iLCJcclxuPGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25cIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX2hlYWRlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX3RpdGxlXCI+XHJcblx0XHRcdDxzcGFuICpuZ0lmPVwiIWFubm90YXRpb24uaWRcIj5BZGQgQW5ub3RhdGlvbjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4gKm5nSWY9XCJhbm5vdGF0aW9uLmlkXCI+RWRpdCBBbm5vdGF0aW9uPC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX3RpbWVcIj57e3RpbWVMYWJlbH19PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJncmFwaC1hbm5vdGF0aW9uX19ib2R5IHRleHQtY2VudGVyXCI+XHJcblxyXG5cdFx0PGVkLXRleHRhcmVhXHJcblx0XHRcdGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiN1wiXHJcblx0XHRcdHdpZHRoPVwiMjNcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImFubm90YXRpb24udGV4dFwiXHJcblx0XHRcdHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRyb3dzPVwiMlwiID5cclxuXHRcdDwvZWQtdGV4dGFyZWE+XHJcblxyXG5cdFx0PGVkLXRhZ2JveCBcclxuXHRcdFx0bGFiZWw9XCJUYWdzXCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjdcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImFubm90YXRpb24udGFnc1wiPlxyXG5cdFx0PC9lZC10YWdib3g+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxyXG5cdFx0XHQ8YnV0dG9uICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJvblNhdmUoKVwiPlNhdmU8L2J1dHRvbj5cclxuXHJcblx0XHRcdDxidXR0b24gKm5nSWY9XCJhbm5vdGF0aW9uPy5pZFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYnV0dG9uPlxyXG5cclxuXHRcdFx0PGEgY2xhc3M9XCJidG4tdGV4dFwiIChjbGljayk9XCJjbG9zZS5lbWl0KClcIj5DYW5jZWw8L2E+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==