import { Component, HostListener } from '@angular/core';
import { BaseChartComponent } from '../../base/chart-base';
import { AXIS_X, AXIS_Y_LEFT } from '../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "../../base/chart.store";
import * as i2 from "common";
import * as i3 from "uilib";
import * as i4 from "@angular/common";
import * as i5 from "./edit/edit-annot";
import * as i6 from "./hint/annot-hint";
function AnnotationDispatcherComponent_edit_annotation_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "edit-annotation", 5);
    i0.ɵɵlistener("close", function AnnotationDispatcherComponent_edit_annotation_1_Template_edit_annotation_close_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.showAddAnnot = false; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("epochStart", ctx_r0.epochStart)("epochEnd", ctx_r0.epochEnd);
} }
function AnnotationDispatcherComponent_edit_annotation_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "edit-annotation", 6);
    i0.ɵɵlistener("close", function AnnotationDispatcherComponent_edit_annotation_3_Template_edit_annotation_close_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.showEditAnnot = false; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("annotation", ctx_r1.annotation);
} }
function AnnotationDispatcherComponent_annotation_hint_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "annotation-hint", 7);
    i0.ɵɵlistener("edit", function AnnotationDispatcherComponent_annotation_hint_5_Template_annotation_hint_edit_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onEditAnnotation(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("annotation", ctx_r2.annotation);
} }
export class AnnotationDispatcherComponent extends BaseChartComponent {
    constructor(store, time) {
        super(store);
        this.store = store;
        this.time = time;
        this.MIN_LEFT_X = 65;
        this.mouseDragSubs = store
            .mouse
            .drag$
            .subscribe(x => this.region = x);
        this.mouseUpSubs = store
            .mouse
            .up$
            .subscribe(x => this.onMouseUp(x));
        this.mouseHover = store
            .mouse
            .hover$
            .subscribe(x => this.onMouseHover(x));
    }
    get showViewAnnot() {
        var _a, _b;
        return ((_a = this.annotation) === null || _a === void 0 ? void 0 : _a.overRoot) || ((_b = this.annotation) === null || _b === void 0 ? void 0 : _b.overPopup);
    }
    ngOnDestroy() {
        var _a, _b, _c;
        super.ngOnDestroy();
        (_a = this.mouseUpSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.mouseDragSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.mouseHover) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
    onMouseUp(e) {
        if (!((e === null || e === void 0 ? void 0 : e.ctrlKey) && this.region)) {
            return;
        }
        const scaleX = this.scales[AXIS_X];
        const rangeStart = this.region.start;
        const rangeEnd = this.region.end;
        let start = Math.min(rangeStart.offsetX, rangeEnd.offsetX);
        let end = Math.max(rangeStart.offsetX, rangeEnd.offsetX);
        start = Math.max(start, scaleX.left);
        end = Math.min(end, scaleX.right);
        const es = scaleX
            .getValueForPixel(start)
            .valueOf();
        const ee = this.epochEnd = scaleX
            .getValueForPixel(end)
            .valueOf();
        this.epochStart = this.time.converter.toEpoch(es);
        this.epochEnd = this.time.converter.toEpoch(ee);
        this.offset = this.getPopupLocation(e);
        setTimeout(() => this.showAddAnnot = true);
    }
    onMouseHover(e) {
        var _a, _b;
        if (!e || this.showAddAnnot || this.showEditAnnot) {
            return;
        }
        const candidates = [];
        (_a = this
            .annotations) === null || _a === void 0 ? void 0 : _a.forEach(a => {
            var _a, _b, _c, _d;
            const xOk = ((_a = a.rect) === null || _a === void 0 ? void 0 : _a.x1) <= e.offsetX && ((_b = a.rect) === null || _b === void 0 ? void 0 : _b.x2) >= e.offsetX;
            const yOk = ((_c = a.rect) === null || _c === void 0 ? void 0 : _c.y1) <= e.offsetY && ((_d = a.rect) === null || _d === void 0 ? void 0 : _d.y2) >= e.offsetY;
            if (xOk && yOk && a.id) {
                candidates.push(a);
            }
            else if (a.overRoot) {
                setTimeout(() => a.overRoot = false, 100);
            }
        });
        if (candidates.length > 0) {
            let winner = candidates[0];
            candidates.forEach(x => {
                if (Math.abs(x.rect.x2 - x.rect.x1) < Math.abs(winner.rect.x2 - winner.rect.x1)) {
                    winner = x;
                }
            });
            if (winner != this.annotation) {
                var regionOffset = (winner.rect.x2 - winner.rect.x1) / 2 -
                    (e.offsetX - ((_b = winner.rect) === null || _b === void 0 ? void 0 : _b.x1));
                this.offset = this.getPopupLocation(e, 100 + regionOffset);
                winner.overRoot = true;
                winner.overPopup = false;
                this.annotation = winner;
            }
        }
        if (!this.showViewAnnot) {
            this.annotation = undefined;
        }
        this.nativeControl.showAnnotView = (undefined != this.annotation);
        this
            .nativeControl
            .canvas
            .style
            .cursor = (this.showViewAnnot) ? 'auto' : 'crosshair';
    }
    getPopupLocation(e, xAdj = 0, yAdj = 0) {
        const scaleY = this.scales[AXIS_Y_LEFT];
        var rect = this.nativeControl.canvas.getBoundingClientRect();
        const maxY = scaleY.bottom;
        return {
            left: e.clientX,
            top: maxY + rect.y + 5 + yAdj,
        };
    }
    onEditAnnotation() {
        this.offset.left = Math.max(this.MIN_LEFT_X, this.offset.left /* - 100*/);
        this.annotation.overRoot = false;
        this.annotation.overPopup = false;
        this.showEditAnnot = true;
    }
    onEscPressed(_) {
        this.showAddAnnot = this.showEditAnnot = false;
    }
}
AnnotationDispatcherComponent.ɵfac = function AnnotationDispatcherComponent_Factory(t) { return new (t || AnnotationDispatcherComponent)(i0.ɵɵdirectiveInject(i1.ChartStore), i0.ɵɵdirectiveInject(i2.TimeRangeStore)); };
AnnotationDispatcherComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnnotationDispatcherComponent, selectors: [["annotation-dispatcher"]], hostBindings: function AnnotationDispatcherComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown.escape", function AnnotationDispatcherComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscPressed($event); }, false, i0.ɵɵresolveDocument);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 12, consts: [[3, "visible", "offset", "shadow", "visibleChange"], [3, "epochStart", "epochEnd", "close", 4, "ngIf"], [3, "annotation", "close", 4, "ngIf"], [3, "offset", "visible", "shadow"], [3, "annotation", "edit", 4, "ngIf"], [3, "epochStart", "epochEnd", "close"], [3, "annotation", "close"], [3, "annotation", "edit"]], template: function AnnotationDispatcherComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ed-popup", 0);
        i0.ɵɵlistener("visibleChange", function AnnotationDispatcherComponent_Template_ed_popup_visibleChange_0_listener($event) { return ctx.showAddAnnot = $event; });
        i0.ɵɵtemplate(1, AnnotationDispatcherComponent_edit_annotation_1_Template, 1, 2, "edit-annotation", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ed-popup", 0);
        i0.ɵɵlistener("visibleChange", function AnnotationDispatcherComponent_Template_ed_popup_visibleChange_2_listener($event) { return ctx.showEditAnnot = $event; });
        i0.ɵɵtemplate(3, AnnotationDispatcherComponent_edit_annotation_3_Template, 1, 1, "edit-annotation", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-popup", 3);
        i0.ɵɵtemplate(5, AnnotationDispatcherComponent_annotation_hint_5_Template, 1, 1, "annotation-hint", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("visible", ctx.showAddAnnot)("offset", ctx.offset)("shadow", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showAddAnnot);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("visible", ctx.showEditAnnot)("offset", ctx.offset)("shadow", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showEditAnnot);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("offset", ctx.offset)("visible", ctx.showViewAnnot)("shadow", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showViewAnnot);
    } }, directives: [i3.PopupComponent, i4.NgIf, i5.EditAnnotationComponent, i6.AnnotationHintComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnotationDispatcherComponent, [{
        type: Component,
        args: [{
                selector: 'annotation-dispatcher',
                templateUrl: './annotations.html'
            }]
    }], function () { return [{ type: i1.ChartStore }, { type: i2.TimeRangeStore }]; }, { onEscPressed: [{
            type: HostListener,
            args: ['document:keydown.escape', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy92aWV3L2Fubm90YXRpb25zL2Fubm90YXRpb25zLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9hbm5vdGF0aW9ucy9hbm5vdGF0aW9ucy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzNELE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDRG5ELDBDQUlrQjtJQUhqQixxTkFBc0IsS0FBSyxJQUFDO0lBRzdCLGlCQUFrQjs7O0lBRmpCLDhDQUF5Qiw2QkFBQTs7OztJQVExQiwwQ0FHa0I7SUFEakIsc05BQXVCLEtBQUssSUFBQztJQUM5QixpQkFBa0I7OztJQUZqQiw4Q0FBeUI7Ozs7SUFRMUIsMENBR2tCO0lBRGpCLDBOQUEyQjtJQUM1QixpQkFBa0I7OztJQUZqQiw4Q0FBeUI7O0FEYjNCLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxrQkFBa0I7SUF1Qm5FLFlBQ08sS0FBaUIsRUFDaEIsSUFBb0I7UUFDM0IsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRlQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQXZCcEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQTBCdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLO2FBQ3hCLEtBQUs7YUFDTCxLQUFLO2FBQ0wsU0FBUyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FB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QUFvQjthQUNsQzswRkE0SkMsWUFBWTtrQkFEWixZQUFZO21CQUFDLHlCQUF5QixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbiwgVGltZVJhbmdlU3RvcmUgfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC1iYXNlJztcclxuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQuc3RvcmUnO1xyXG5pbXBvcnQgeyBEcmFnUmVnaW9uIH0gZnJvbSAnLi4vLi4vYmFzZS9tb3VzZS5zdG9yZSc7XHJcbmltcG9ydCB7IEFYSVNfWCwgQVhJU19ZX0xFRlQgfSBmcm9tICcuLi8uLi9jaGFydC5tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ub3RhdGlvbi1kaXNwYXRjaGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub3RhdGlvbnMuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25EaXNwYXRjaGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50ICB7XHJcblx0XHJcblx0cmVhZG9ubHkgTUlOX0xFRlRfWCA9IDY1O1xyXG5cclxuXHRvZmZzZXQ6IGFueTtcclxuXHRyZWdpb246IERyYWdSZWdpb247XHJcblxyXG5cdGFubm90YXRpb246IEFubm90YXRpb247XHJcblxyXG5cdGVwb2NoRW5kOiBudW1iZXI7XHJcblx0ZXBvY2hTdGFydDogbnVtYmVyO1xyXG5cclxuXHRtb3VzZVVwU3ViczogU3Vic2NyaXB0aW9uO1xyXG5cdG1vdXNlRHJhZ1N1YnM6IFN1YnNjcmlwdGlvbjtcclxuXHRtb3VzZUhvdmVyOiBTdWJzY3JpcHRpb247XHJcblxyXG5cdHNob3dBZGRBbm5vdDogYm9vbGVhbjtcclxuXHRzaG93RWRpdEFubm90OiBib29sZWFuO1xyXG5cclxuXHRnZXQgc2hvd1ZpZXdBbm5vdCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuYW5ub3RhdGlvbj8ub3ZlclJvb3QgfHwgdGhpcy5hbm5vdGF0aW9uPy5vdmVyUG9wdXA7XHJcbiAgfVxyXG5cdFxyXG4gIGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBDaGFydFN0b3JlLFxyXG5cdFx0cHJpdmF0ZSB0aW1lOiBUaW1lUmFuZ2VTdG9yZSApe1xyXG5cdFx0XHRzdXBlciggc3RvcmUgKTtcclxuXHJcblx0XHRcdHRoaXMubW91c2VEcmFnU3VicyA9IHN0b3JlXHJcblx0XHRcdFx0Lm1vdXNlXHJcblx0XHRcdFx0LmRyYWckXHJcblx0XHRcdFx0LnN1YnNjcmliZSggeCA9PiB0aGlzLnJlZ2lvbiA9IHggKTtcclxuXHJcblx0XHRcdHRoaXMubW91c2VVcFN1YnMgPSBzdG9yZVxyXG5cdFx0XHRcdC5tb3VzZVxyXG5cdFx0XHRcdC51cCRcclxuXHRcdFx0XHQuc3Vic2NyaWJlKCB4ID0+IHRoaXMub25Nb3VzZVVwKCB4ICkgKVxyXG5cclxuXHRcdFx0dGhpcy5tb3VzZUhvdmVyID0gc3RvcmVcclxuXHRcdFx0XHQubW91c2VcclxuXHRcdFx0XHQuaG92ZXIkXHJcblx0XHRcdFx0LnN1YnNjcmliZSggeCA9PiB0aGlzLm9uTW91c2VIb3ZlciggeCApIClcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCl7XHJcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xyXG5cdFx0dGhpcy5tb3VzZVVwU3Vicz8udW5zdWJzY3JpYmUoKTtcclxuXHRcdHRoaXMubW91c2VEcmFnU3Vicz8udW5zdWJzY3JpYmUoKTtcclxuXHRcdHRoaXMubW91c2VIb3Zlcj8udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0XHJcblx0b25Nb3VzZVVwKCBlOiBNb3VzZUV2ZW50ICl7XHJcblx0XHRpZiggISggZT8uY3RybEtleSAmJiB0aGlzLnJlZ2lvbiApKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHNjYWxlWCA9IHRoaXMuc2NhbGVzWyBBWElTX1ggXTtcclxuXHRcdGNvbnN0IHJhbmdlU3RhcnQgPSB0aGlzLnJlZ2lvbi5zdGFydDtcclxuXHRcdGNvbnN0IHJhbmdlRW5kID0gdGhpcy5yZWdpb24uZW5kO1xyXG5cclxuXHRcdGxldCBzdGFydCA9IE1hdGgubWluKCByYW5nZVN0YXJ0Lm9mZnNldFgsIHJhbmdlRW5kLm9mZnNldFggKTtcclxuXHRcdGxldCBlbmQgPSBNYXRoLm1heCggcmFuZ2VTdGFydC5vZmZzZXRYLCByYW5nZUVuZC5vZmZzZXRYICk7XHJcblxyXG5cdFx0c3RhcnQgPSBNYXRoLm1heCggc3RhcnQsIHNjYWxlWC5sZWZ0ICk7XHJcblx0XHRlbmQgPSBNYXRoLm1pbiggZW5kLCBzY2FsZVgucmlnaHQgKTtcclxuXHJcblx0XHRjb25zdCBlcyA9IHNjYWxlWFxyXG5cdFx0XHQuZ2V0VmFsdWVGb3JQaXhlbCggc3RhcnQgKVxyXG5cdFx0XHQudmFsdWVPZigpO1xyXG5cclxuXHRcdGNvbnN0IGVlID0gdGhpcy5lcG9jaEVuZCA9IHNjYWxlWFxyXG5cdFx0XHQuZ2V0VmFsdWVGb3JQaXhlbCggZW5kIClcclxuXHRcdFx0LnZhbHVlT2YoKTtcclxuXHJcblx0XHR0aGlzLmVwb2NoU3RhcnQgPSB0aGlzLnRpbWUuY29udmVydGVyLnRvRXBvY2goIGVzICk7XHJcblx0XHR0aGlzLmVwb2NoRW5kID0gdGhpcy50aW1lLmNvbnZlcnRlci50b0Vwb2NoKCBlZSApO1xyXG5cclxuXHRcdHRoaXMub2Zmc2V0ID0gdGhpcy5nZXRQb3B1cExvY2F0aW9uKCBlICk7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4gdGhpcy5zaG93QWRkQW5ub3QgPSB0cnVlICk7XHJcblx0fVxyXG5cclxuXHRvbk1vdXNlSG92ZXIoIGU6IE1vdXNlRXZlbnQgKXtcclxuXHRcdGlmKCAhZSB8fCB0aGlzLnNob3dBZGRBbm5vdCB8fCB0aGlzLnNob3dFZGl0QW5ub3QgKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGNhbmRpZGF0ZXMgPSBbXVxyXG5cclxuXHRcdHRoaXNcclxuXHRcdFx0LmFubm90YXRpb25zXHJcblx0XHRcdD8uZm9yRWFjaCggYSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgeE9rID0gYS5yZWN0Py54MSA8PSBlLm9mZnNldFggJiYgYS5yZWN0Py54MiA+PSBlLm9mZnNldFg7XHJcblx0XHRcdFx0Y29uc3QgeU9rID0gYS5yZWN0Py55MSA8PSBlLm9mZnNldFkgJiYgYS5yZWN0Py55MiA+PSBlLm9mZnNldFk7XHJcblxyXG5cdFx0XHRcdGlmKCB4T2sgJiYgeU9rICYmIGEuaWQgKXtcclxuXHRcdFx0XHRcdGNhbmRpZGF0ZXMucHVzaCggYSApO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiggYS5vdmVyUm9vdCApIHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGEub3ZlclJvb3QgPSBmYWxzZSwgMTAwICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRpZiggY2FuZGlkYXRlcy5sZW5ndGggPiAwICl7XHJcblx0XHRcdGxldCB3aW5uZXIgPSBjYW5kaWRhdGVzWyAwIF07XHJcblxyXG5cdFx0XHRjYW5kaWRhdGVzLmZvckVhY2goIHggPT4ge1xyXG5cdFx0XHRcdGlmKCBNYXRoLmFicyggeC5yZWN0LngyIC0geC5yZWN0LngxICkgPCAgTWF0aC5hYnMoIHdpbm5lci5yZWN0LngyIC0gd2lubmVyLnJlY3QueDEgKSApe1xyXG5cdFx0XHRcdFx0d2lubmVyID0geDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdGlmKCB3aW5uZXIgIT0gdGhpcy5hbm5vdGF0aW9uICl7XHJcblx0XHRcdFx0dmFyIHJlZ2lvbk9mZnNldCA9ICggd2lubmVyLnJlY3QueDIgLSB3aW5uZXIucmVjdC54MSApIC8gMiAtIFxyXG5cdFx0XHRcdFx0KCBlLm9mZnNldFggLSB3aW5uZXIucmVjdD8ueDEgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5vZmZzZXQgPSB0aGlzLmdldFBvcHVwTG9jYXRpb24oIGUsIDEwMCArIHJlZ2lvbk9mZnNldCApO1xyXG5cdFx0XHRcdHdpbm5lci5vdmVyUm9vdCA9IHRydWU7XHJcblx0XHRcdFx0d2lubmVyLm92ZXJQb3B1cCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuYW5ub3RhdGlvbiA9IHdpbm5lcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCAhdGhpcy5zaG93Vmlld0Fubm90ICl7XHJcblx0XHRcdHRoaXMuYW5ub3RhdGlvbiA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5hdGl2ZUNvbnRyb2wuc2hvd0Fubm90VmlldyA9ICggdW5kZWZpbmVkICE9IHRoaXMuYW5ub3RhdGlvbiApXHJcblxyXG5cdFx0dGhpc1xyXG5cdFx0XHQubmF0aXZlQ29udHJvbFxyXG5cdFx0XHQuY2FudmFzXHJcblx0XHRcdC5zdHlsZVxyXG5cdFx0XHQuY3Vyc29yID0gKCB0aGlzLnNob3dWaWV3QW5ub3QgKSA/ICdhdXRvJyA6ICdjcm9zc2hhaXInO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9wdXBMb2NhdGlvbiggZTogTW91c2VFdmVudCwgeEFkaiA9IDAsIHlBZGogPSAwICl7XHJcblx0XHRjb25zdCBzY2FsZVkgPSB0aGlzLnNjYWxlc1sgQVhJU19ZX0xFRlQgXTtcclxuXHRcdHZhciByZWN0ID0gdGhpcy5uYXRpdmVDb250cm9sLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgXHJcbiAgICBjb25zdCBtYXhZID0gc2NhbGVZLmJvdHRvbTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuXHRcdFx0bGVmdDogZS5jbGllbnRYLC8vTWF0aC5tYXgoIHRoaXMuTUlOX0xFRlRfWCwgZS5jbGllbnRYIC0gMjE3ICsgeEFkaiApLFxyXG5cdFx0XHR0b3A6IG1heFkgKyByZWN0LnkgKyA1ICsgeUFkaixcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uRWRpdEFubm90YXRpb24oKXtcclxuXHRcdHRoaXMub2Zmc2V0LmxlZnQgPSAgTWF0aC5tYXgoIHRoaXMuTUlOX0xFRlRfWCwgdGhpcy5vZmZzZXQubGVmdC8qIC0gMTAwKi8gKTtcclxuXHRcdHRoaXMuYW5ub3RhdGlvbi5vdmVyUm9vdCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5hbm5vdGF0aW9uLm92ZXJQb3B1cCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zaG93RWRpdEFubm90ID0gdHJ1ZTtcclxuXHR9XHJcblx0XHJcblx0QEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxyXG4gIG9uRXNjUHJlc3NlZCggXzogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5zaG93QWRkQW5ub3QgPSB0aGlzLnNob3dFZGl0QW5ub3QgPSBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcblx0XHJcblxyXG5cdFx0XHJcbiIsIjxlZC1wb3B1cFx0XHJcblx0Wyh2aXNpYmxlKV09XCJzaG93QWRkQW5ub3RcIlxyXG5cdFtvZmZzZXRdPVwib2Zmc2V0XCJcclxuXHRbc2hhZG93XT1cInRydWVcIj5cclxuXHJcblx0PGVkaXQtYW5ub3RhdGlvbiAqbmdJZj1cInNob3dBZGRBbm5vdFwiXHJcblx0XHQoY2xvc2UpPVwic2hvd0FkZEFubm90PWZhbHNlXCIgXHJcblx0XHRbZXBvY2hTdGFydF09XCJlcG9jaFN0YXJ0XCJcdFxyXG5cdFx0W2Vwb2NoRW5kXT1cImVwb2NoRW5kXCIgPlxyXG5cdDwvZWRpdC1hbm5vdGF0aW9uPlxyXG5cclxuPC9lZC1wb3B1cD5cclxuXHJcbjxlZC1wb3B1cCBbKHZpc2libGUpXT1cInNob3dFZGl0QW5ub3RcIlx0W29mZnNldF09XCJvZmZzZXRcIlx0W3NoYWRvd109XCJ0cnVlXCIgPlxyXG5cclxuXHQ8ZWRpdC1hbm5vdGF0aW9uICpuZ0lmPVwic2hvd0VkaXRBbm5vdFwiXHJcblx0XHRbYW5ub3RhdGlvbl09XCJhbm5vdGF0aW9uXCJcclxuXHRcdChjbG9zZSk9XCJzaG93RWRpdEFubm90PWZhbHNlXCIgPlxyXG5cdDwvZWRpdC1hbm5vdGF0aW9uPlxyXG5cclxuPC9lZC1wb3B1cD5cclxuXHJcbjxlZC1wb3B1cCBbb2Zmc2V0XT1cIm9mZnNldFwiIFt2aXNpYmxlXT1cInNob3dWaWV3QW5ub3RcIlx0W3NoYWRvd109XCJ0cnVlXCI+XHJcblxyXG5cdDxhbm5vdGF0aW9uLWhpbnQgKm5nSWY9XCJzaG93Vmlld0Fubm90XCJcclxuXHRcdFthbm5vdGF0aW9uXT1cImFubm90YXRpb25cIlxyXG5cdFx0KGVkaXQpPVwib25FZGl0QW5ub3RhdGlvbigpXCIgPlxyXG5cdDwvYW5ub3RhdGlvbi1oaW50PlxyXG5cclxuPC9lZC1wb3B1cD5cclxuXHJcbiJdfQ==