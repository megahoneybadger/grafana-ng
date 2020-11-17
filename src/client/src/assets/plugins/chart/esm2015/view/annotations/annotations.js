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
        var _a;
        if (!e || this.showAddAnnot || this.showEditAnnot) {
            return;
        }
        const candidates = [];
        this
            .annotations
            .forEach(a => {
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
                    (e.offsetX - ((_a = winner.rect) === null || _a === void 0 ? void 0 : _a.x1));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy92aWV3L2Fubm90YXRpb25zL2Fubm90YXRpb25zLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9hbm5vdGF0aW9ucy9hbm5vdGF0aW9ucy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzNELE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDRG5ELDBDQUlrQjtJQUhqQixxTkFBc0IsS0FBSyxJQUFDO0lBRzdCLGlCQUFrQjs7O0lBRmpCLDhDQUF5Qiw2QkFBQTs7OztJQVExQiwwQ0FHa0I7SUFEakIsc05BQXVCLEtBQUssSUFBQztJQUM5QixpQkFBa0I7OztJQUZqQiw4Q0FBeUI7Ozs7SUFRMUIsMENBR2tCO0lBRGpCLDBOQUEyQjtJQUM1QixpQkFBa0I7OztJQUZqQiw4Q0FBeUI7O0FEYjNCLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxrQkFBa0I7SUF1Qm5FLFlBQ08sS0FBaUIsRUFDaEIsSUFBb0I7UUFDM0IsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRlQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQXZCcEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQTBCdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLO2FBQ3hCLEtBQUs7YUFDTCxLQUFLO2FBQ0wsU0FBUyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUs7YUFDdEIsS0FBSzthQUNMLEdBQUc7YUFDSCxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUE7UUFFdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLO2FBQ3JCLEtBQUs7YUFDTCxNQUFNO2FBQ04sU0FBUyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFBO0lBQzVDLENBQUM7SUF2QkQsSUFBSSxhQUFhOztRQUNoQixPQUFPLE9BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsUUFBUSxZQUFJLElBQUksQ0FBQyxVQUFVLDBDQUFFLFNBQVMsQ0FBQSxDQUFDO0lBQy9ELENBQUM7SUF1QkYsV0FBVzs7UUFDVixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsTUFBQSxJQUFJLENBQUMsV0FBVywwQ0FBRSxXQUFXLEdBQUc7UUFDaEMsTUFBQSxJQUFJLENBQUMsYUFBYSwwQ0FBRSxXQUFXLEdBQUc7UUFDbEMsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxXQUFXLEdBQUc7SUFDaEMsQ0FBQztJQUVELFNBQVMsQ0FBRSxDQUFhO1FBQ3ZCLElBQUksQ0FBQyxDQUFFLENBQUEsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLE9BQU8sS0FBSSxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUM7WUFDbEMsT0FBTztTQUNQO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUNyQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUVqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQzdELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFFLENBQUM7UUFFM0QsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUN2QyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBRXBDLE1BQU0sRUFBRSxHQUFHLE1BQU07YUFDZixnQkFBZ0IsQ0FBRSxLQUFLLENBQUU7YUFDekIsT0FBTyxFQUFFLENBQUM7UUFFWixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU07YUFDL0IsZ0JBQWdCLENBQUUsR0FBRyxDQUFFO2FBQ3ZCLE9BQU8sRUFBRSxDQUFDO1FBRVosSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUUsRUFBRSxDQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFFekMsVUFBVSxDQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELFlBQVksQ0FBRSxDQUFhOztRQUMxQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsRCxPQUFPO1NBQ1A7UUFFRCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFFckIsSUFBSTthQUNGLFdBQVc7YUFDWCxPQUFPLENBQUUsQ0FBQyxDQUFDLEVBQUU7O1lBQ2IsTUFBTSxHQUFHLEdBQUcsT0FBQSxDQUFDLENBQUMsSUFBSSwwQ0FBRSxFQUFFLEtBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLDBDQUFFLEVBQUUsS0FBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQy9ELE1BQU0sR0FBRyxHQUFHLE9BQUEsQ0FBQyxDQUFDLElBQUksMENBQUUsRUFBRSxLQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSwwQ0FBRSxFQUFFLEtBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUUvRCxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDdkIsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsQ0FBQzthQUNyQjtpQkFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUc7Z0JBQ3ZCLFVBQVUsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUUsQ0FBQzthQUM1QztRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFFN0IsVUFBVSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFFLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBRSxFQUFFO29CQUNyRixNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUNYO1lBQ0YsQ0FBQyxDQUFFLENBQUM7WUFFSixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUM5QixJQUFJLFlBQVksR0FBRyxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFFLEdBQUcsQ0FBQztvQkFDekQsQ0FBRSxDQUFDLENBQUMsT0FBTyxVQUFHLE1BQU0sQ0FBQyxJQUFJLDBDQUFFLEVBQUUsQ0FBQSxDQUFFLENBQUM7Z0JBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsWUFBWSxDQUFFLENBQUM7Z0JBQzdELE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDekI7U0FDRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsQ0FBRSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFBO1FBRW5FLElBQUk7YUFDRixhQUFhO2FBQ2IsTUFBTTthQUNOLEtBQUs7YUFDTCxNQUFNLEdBQUcsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQzFELENBQUM7SUFFRCxnQkFBZ0IsQ0FBRSxDQUFhLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLFdBQVcsQ0FBRSxDQUFDO1FBQzFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFM0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUUzQixPQUFPO1lBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ2YsR0FBRyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJO1NBQzdCLENBQUE7SUFDRixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBLFVBQVUsQ0FBRSxDQUFDO1FBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUdBLFlBQVksQ0FBRSxDQUFnQjtRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ2xELENBQUM7OzBHQTdKVyw2QkFBNkI7a0VBQTdCLDZCQUE2QjtrSUFBN0Isd0JBQW9COztRQ1pqQyxtQ0FLQztRQUpBLCtKQUEwQjtRQUkxQixzR0FJQTtRQUVELGlCQUFXO1FBRVgsbUNBRUM7UUFGUyxnS0FBMkI7UUFFcEMsc0dBR0E7UUFFRCxpQkFBVztRQUVYLG1DQUVDO1FBQUEsc0dBR0E7UUFFRCxpQkFBVzs7UUE1QlYsMENBQTBCLHNCQUFBLGdCQUFBO1FBSVQsZUFBb0I7UUFBcEIsdUNBQW9CO1FBUTVCLGVBQTJCO1FBQTNCLDJDQUEyQixzQkFBQSxnQkFBQTtRQUVuQixlQUFxQjtRQUFyQix3Q0FBcUI7UUFPN0IsZUFBaUI7UUFBakIsbUNBQWlCLDhCQUFBLGdCQUFBO1FBRVQsZUFBcUI7UUFBckIsd0NBQXFCOztrRERaMUIsNkJBQTZCO2NBSnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDOzBGQTRKQyxZQUFZO2tCQURaLFlBQVk7bUJBQUMseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBUaW1lUmFuZ2VTdG9yZSB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UnO1xyXG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC5zdG9yZSc7XHJcbmltcG9ydCB7IERyYWdSZWdpb24gfSBmcm9tICcuLi8uLi9iYXNlL21vdXNlLnN0b3JlJztcclxuaW1wb3J0IHsgQVhJU19YLCBBWElTX1lfTEVGVCB9IGZyb20gJy4uLy4uL2NoYXJ0Lm0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbm5vdGF0aW9uLWRpc3BhdGNoZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9ucy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkRpc3BhdGNoZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQgIHtcclxuXHRcclxuXHRyZWFkb25seSBNSU5fTEVGVF9YID0gNjU7XHJcblxyXG5cdG9mZnNldDogYW55O1xyXG5cdHJlZ2lvbjogRHJhZ1JlZ2lvbjtcclxuXHJcblx0YW5ub3RhdGlvbjogQW5ub3RhdGlvbjtcclxuXHJcblx0ZXBvY2hFbmQ6IG51bWJlcjtcclxuXHRlcG9jaFN0YXJ0OiBudW1iZXI7XHJcblxyXG5cdG1vdXNlVXBTdWJzOiBTdWJzY3JpcHRpb247XHJcblx0bW91c2VEcmFnU3ViczogU3Vic2NyaXB0aW9uO1xyXG5cdG1vdXNlSG92ZXI6IFN1YnNjcmlwdGlvbjtcclxuXHJcblx0c2hvd0FkZEFubm90OiBib29sZWFuO1xyXG5cdHNob3dFZGl0QW5ub3Q6IGJvb2xlYW47XHJcblxyXG5cdGdldCBzaG93Vmlld0Fubm90KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5hbm5vdGF0aW9uPy5vdmVyUm9vdCB8fCB0aGlzLmFubm90YXRpb24/Lm92ZXJQb3B1cDtcclxuICB9XHJcblx0XHJcbiAgY29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IENoYXJ0U3RvcmUsXHJcblx0XHRwcml2YXRlIHRpbWU6IFRpbWVSYW5nZVN0b3JlICl7XHJcblx0XHRcdHN1cGVyKCBzdG9yZSApO1xyXG5cclxuXHRcdFx0dGhpcy5tb3VzZURyYWdTdWJzID0gc3RvcmVcclxuXHRcdFx0XHQubW91c2VcclxuXHRcdFx0XHQuZHJhZyRcclxuXHRcdFx0XHQuc3Vic2NyaWJlKCB4ID0+IHRoaXMucmVnaW9uID0geCApO1xyXG5cclxuXHRcdFx0dGhpcy5tb3VzZVVwU3VicyA9IHN0b3JlXHJcblx0XHRcdFx0Lm1vdXNlXHJcblx0XHRcdFx0LnVwJFxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoIHggPT4gdGhpcy5vbk1vdXNlVXAoIHggKSApXHJcblxyXG5cdFx0XHR0aGlzLm1vdXNlSG92ZXIgPSBzdG9yZVxyXG5cdFx0XHRcdC5tb3VzZVxyXG5cdFx0XHRcdC5ob3ZlciRcclxuXHRcdFx0XHQuc3Vic2NyaWJlKCB4ID0+IHRoaXMub25Nb3VzZUhvdmVyKCB4ICkgKVxyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKXtcclxuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XHJcblx0XHR0aGlzLm1vdXNlVXBTdWJzPy51bnN1YnNjcmliZSgpO1xyXG5cdFx0dGhpcy5tb3VzZURyYWdTdWJzPy51bnN1YnNjcmliZSgpO1xyXG5cdFx0dGhpcy5tb3VzZUhvdmVyPy51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHRcclxuXHRvbk1vdXNlVXAoIGU6IE1vdXNlRXZlbnQgKXtcclxuXHRcdGlmKCAhKCBlPy5jdHJsS2V5ICYmIHRoaXMucmVnaW9uICkpe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgc2NhbGVYID0gdGhpcy5zY2FsZXNbIEFYSVNfWCBdO1xyXG5cdFx0Y29uc3QgcmFuZ2VTdGFydCA9IHRoaXMucmVnaW9uLnN0YXJ0O1xyXG5cdFx0Y29uc3QgcmFuZ2VFbmQgPSB0aGlzLnJlZ2lvbi5lbmQ7XHJcblxyXG5cdFx0bGV0IHN0YXJ0ID0gTWF0aC5taW4oIHJhbmdlU3RhcnQub2Zmc2V0WCwgcmFuZ2VFbmQub2Zmc2V0WCApO1xyXG5cdFx0bGV0IGVuZCA9IE1hdGgubWF4KCByYW5nZVN0YXJ0Lm9mZnNldFgsIHJhbmdlRW5kLm9mZnNldFggKTtcclxuXHJcblx0XHRzdGFydCA9IE1hdGgubWF4KCBzdGFydCwgc2NhbGVYLmxlZnQgKTtcclxuXHRcdGVuZCA9IE1hdGgubWluKCBlbmQsIHNjYWxlWC5yaWdodCApO1xyXG5cclxuXHRcdGNvbnN0IGVzID0gc2NhbGVYXHJcblx0XHRcdC5nZXRWYWx1ZUZvclBpeGVsKCBzdGFydCApXHJcblx0XHRcdC52YWx1ZU9mKCk7XHJcblxyXG5cdFx0Y29uc3QgZWUgPSB0aGlzLmVwb2NoRW5kID0gc2NhbGVYXHJcblx0XHRcdC5nZXRWYWx1ZUZvclBpeGVsKCBlbmQgKVxyXG5cdFx0XHQudmFsdWVPZigpO1xyXG5cclxuXHRcdHRoaXMuZXBvY2hTdGFydCA9IHRoaXMudGltZS5jb252ZXJ0ZXIudG9FcG9jaCggZXMgKTtcclxuXHRcdHRoaXMuZXBvY2hFbmQgPSB0aGlzLnRpbWUuY29udmVydGVyLnRvRXBvY2goIGVlICk7XHJcblxyXG5cdFx0dGhpcy5vZmZzZXQgPSB0aGlzLmdldFBvcHVwTG9jYXRpb24oIGUgKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLnNob3dBZGRBbm5vdCA9IHRydWUgKTtcclxuXHR9XHJcblxyXG5cdG9uTW91c2VIb3ZlciggZTogTW91c2VFdmVudCApe1xyXG5cdFx0aWYoICFlIHx8IHRoaXMuc2hvd0FkZEFubm90IHx8IHRoaXMuc2hvd0VkaXRBbm5vdCApe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgY2FuZGlkYXRlcyA9IFtdXHJcblxyXG5cdFx0dGhpc1xyXG5cdFx0XHQuYW5ub3RhdGlvbnNcclxuXHRcdFx0LmZvckVhY2goIGEgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHhPayA9IGEucmVjdD8ueDEgPD0gZS5vZmZzZXRYICYmIGEucmVjdD8ueDIgPj0gZS5vZmZzZXRYO1xyXG5cdFx0XHRcdGNvbnN0IHlPayA9IGEucmVjdD8ueTEgPD0gZS5vZmZzZXRZICYmIGEucmVjdD8ueTIgPj0gZS5vZmZzZXRZO1xyXG5cclxuXHRcdFx0XHRpZiggeE9rICYmIHlPayAmJiBhLmlkICl7XHJcblx0XHRcdFx0XHRjYW5kaWRhdGVzLnB1c2goIGEgKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYoIGEub3ZlclJvb3QgKSB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBhLm92ZXJSb290ID0gZmFsc2UsIDEwMCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0aWYoIGNhbmRpZGF0ZXMubGVuZ3RoID4gMCApe1xyXG5cdFx0XHRsZXQgd2lubmVyID0gY2FuZGlkYXRlc1sgMCBdO1xyXG5cclxuXHRcdFx0Y2FuZGlkYXRlcy5mb3JFYWNoKCB4ID0+IHtcclxuXHRcdFx0XHRpZiggTWF0aC5hYnMoIHgucmVjdC54MiAtIHgucmVjdC54MSApIDwgIE1hdGguYWJzKCB3aW5uZXIucmVjdC54MiAtIHdpbm5lci5yZWN0LngxICkgKXtcclxuXHRcdFx0XHRcdHdpbm5lciA9IHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRpZiggd2lubmVyICE9IHRoaXMuYW5ub3RhdGlvbiApe1xyXG5cdFx0XHRcdHZhciByZWdpb25PZmZzZXQgPSAoIHdpbm5lci5yZWN0LngyIC0gd2lubmVyLnJlY3QueDEgKSAvIDIgLSBcclxuXHRcdFx0XHRcdCggZS5vZmZzZXRYIC0gd2lubmVyLnJlY3Q/LngxICk7XHJcblxyXG5cdFx0XHRcdHRoaXMub2Zmc2V0ID0gdGhpcy5nZXRQb3B1cExvY2F0aW9uKCBlLCAxMDAgKyByZWdpb25PZmZzZXQgKTtcclxuXHRcdFx0XHR3aW5uZXIub3ZlclJvb3QgPSB0cnVlO1xyXG5cdFx0XHRcdHdpbm5lci5vdmVyUG9wdXAgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmFubm90YXRpb24gPSB3aW5uZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiggIXRoaXMuc2hvd1ZpZXdBbm5vdCApe1xyXG5cdFx0XHR0aGlzLmFubm90YXRpb24gPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYXRpdmVDb250cm9sLnNob3dBbm5vdFZpZXcgPSAoIHVuZGVmaW5lZCAhPSB0aGlzLmFubm90YXRpb24gKVxyXG5cclxuXHRcdHRoaXNcclxuXHRcdFx0Lm5hdGl2ZUNvbnRyb2xcclxuXHRcdFx0LmNhbnZhc1xyXG5cdFx0XHQuc3R5bGVcclxuXHRcdFx0LmN1cnNvciA9ICggdGhpcy5zaG93Vmlld0Fubm90ICkgPyAnYXV0bycgOiAnY3Jvc3NoYWlyJztcclxuXHR9XHJcblxyXG5cdGdldFBvcHVwTG9jYXRpb24oIGU6IE1vdXNlRXZlbnQsIHhBZGogPSAwLCB5QWRqID0gMCApe1xyXG5cdFx0Y29uc3Qgc2NhbGVZID0gdGhpcy5zY2FsZXNbIEFYSVNfWV9MRUZUIF07XHJcblx0XHR2YXIgcmVjdCA9IHRoaXMubmF0aXZlQ29udHJvbC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIFxyXG4gICAgY29uc3QgbWF4WSA9IHNjYWxlWS5ib3R0b207XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcblx0XHRcdGxlZnQ6IGUuY2xpZW50WCwvL01hdGgubWF4KCB0aGlzLk1JTl9MRUZUX1gsIGUuY2xpZW50WCAtIDIxNyArIHhBZGogKSxcclxuXHRcdFx0dG9wOiBtYXhZICsgcmVjdC55ICsgNSArIHlBZGosXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkVkaXRBbm5vdGF0aW9uKCl7XHJcblx0XHR0aGlzLm9mZnNldC5sZWZ0ID0gIE1hdGgubWF4KCB0aGlzLk1JTl9MRUZUX1gsIHRoaXMub2Zmc2V0LmxlZnQvKiAtIDEwMCovICk7XHJcblx0XHR0aGlzLmFubm90YXRpb24ub3ZlclJvb3QgPSBmYWxzZTtcclxuXHRcdHRoaXMuYW5ub3RhdGlvbi5vdmVyUG9wdXAgPSBmYWxzZTtcclxuXHRcdHRoaXMuc2hvd0VkaXRBbm5vdCA9IHRydWU7XHJcblx0fVxyXG5cdFxyXG5cdEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjYXBlJywgWyckZXZlbnQnXSlcclxuICBvbkVzY1ByZXNzZWQoIF86IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd0FkZEFubm90ID0gdGhpcy5zaG93RWRpdEFubm90ID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5cdFxyXG5cclxuXHRcdFxyXG4iLCI8ZWQtcG9wdXBcdFxyXG5cdFsodmlzaWJsZSldPVwic2hvd0FkZEFubm90XCJcclxuXHRbb2Zmc2V0XT1cIm9mZnNldFwiXHJcblx0W3NoYWRvd109XCJ0cnVlXCI+XHJcblxyXG5cdDxlZGl0LWFubm90YXRpb24gKm5nSWY9XCJzaG93QWRkQW5ub3RcIlxyXG5cdFx0KGNsb3NlKT1cInNob3dBZGRBbm5vdD1mYWxzZVwiIFxyXG5cdFx0W2Vwb2NoU3RhcnRdPVwiZXBvY2hTdGFydFwiXHRcclxuXHRcdFtlcG9jaEVuZF09XCJlcG9jaEVuZFwiID5cclxuXHQ8L2VkaXQtYW5ub3RhdGlvbj5cclxuXHJcbjwvZWQtcG9wdXA+XHJcblxyXG48ZWQtcG9wdXAgWyh2aXNpYmxlKV09XCJzaG93RWRpdEFubm90XCJcdFtvZmZzZXRdPVwib2Zmc2V0XCJcdFtzaGFkb3ddPVwidHJ1ZVwiID5cclxuXHJcblx0PGVkaXQtYW5ub3RhdGlvbiAqbmdJZj1cInNob3dFZGl0QW5ub3RcIlxyXG5cdFx0W2Fubm90YXRpb25dPVwiYW5ub3RhdGlvblwiXHJcblx0XHQoY2xvc2UpPVwic2hvd0VkaXRBbm5vdD1mYWxzZVwiID5cclxuXHQ8L2VkaXQtYW5ub3RhdGlvbj5cclxuXHJcbjwvZWQtcG9wdXA+XHJcblxyXG48ZWQtcG9wdXAgW29mZnNldF09XCJvZmZzZXRcIiBbdmlzaWJsZV09XCJzaG93Vmlld0Fubm90XCJcdFtzaGFkb3ddPVwidHJ1ZVwiPlxyXG5cclxuXHQ8YW5ub3RhdGlvbi1oaW50ICpuZ0lmPVwic2hvd1ZpZXdBbm5vdFwiXHJcblx0XHRbYW5ub3RhdGlvbl09XCJhbm5vdGF0aW9uXCJcclxuXHRcdChlZGl0KT1cIm9uRWRpdEFubm90YXRpb24oKVwiID5cclxuXHQ8L2Fubm90YXRpb24taGludD5cclxuXHJcbjwvZWQtcG9wdXA+XHJcblxyXG4iXX0=