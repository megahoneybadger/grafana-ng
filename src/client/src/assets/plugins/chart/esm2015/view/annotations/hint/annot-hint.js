import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { AlertHelper } from 'common';
import { TagColorHelper } from 'uilib';
import { EditAnnotationComponent } from '../edit/edit-annot';
import * as i0 from "@angular/core";
import * as i1 from "../../../base/chart.store";
import * as i2 from "common";
import * as i3 from "@angular/common";
import * as i4 from "uilib";
function AnnotationHintComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "ed-avatar", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("edHint", "Created by ", ctx_r0.annotation.userName, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("key", ctx_r0.annotation.userName);
} }
function AnnotationHintComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.AlertHelperRef.getStateClass(ctx_r1.annotation.alert.currentState));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.AlertHelperRef.getStateIconClass(ctx_r1.annotation.alert.currentState));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.annotation.alert.currentState, " ");
} }
function AnnotationHintComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.AlertHelperRef.getInfo(ctx_r2.annotation.alert));
} }
function AnnotationHintComponent_ed_tag_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ed-tag", 14);
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    i0.ɵɵproperty("text", t_r4)("canRemove", false);
} }
export class AnnotationHintComponent extends EditAnnotationComponent {
    constructor(store, annotService, time) {
        super(store, annotService, time);
        this.edit = new EventEmitter();
        this.overPopup = false;
        this.TagColorHelperRef = TagColorHelper;
        this.AlertHelperRef = AlertHelper;
    }
    onMouseEnter() {
        this.overPopup = true;
        this.annotation.overRoot = false;
        this.annotation.overPopup = true;
    }
    onMouseLeave() {
        this.overPopup = false;
        setTimeout(() => {
            if (!this.overPopup) {
                this.annotation.overPopup = false;
            }
        }, 300);
    }
}
AnnotationHintComponent.ɵfac = function AnnotationHintComponent_Factory(t) { return new (t || AnnotationHintComponent)(i0.ɵɵdirectiveInject(i1.ChartStore), i0.ɵɵdirectiveInject(i2.AnnotationService), i0.ɵɵdirectiveInject(i2.TimeRangeStore)); };
AnnotationHintComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnnotationHintComponent, selectors: [["annotation-hint"]], outputs: { edit: "edit" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 6, consts: [[1, "graph-annotation", "hint", 3, "mouseenter", "mouseleave"], [1, "graph-annotation__header"], ["class", "graph-annotation__user", "hintPos", "top", 3, "edHint", 4, "ngIf"], [1, "graph-annotation__title", "alert"], [3, "ngClass", 4, "ngIf"], [1, "graph-annotation__time"], [1, "pointer", "graph-annotation__edit-icon", 3, "click"], [1, "fa", "fa-pencil-square", "mt-1"], [1, "graph-annotation__body", "hint"], [4, "ngIf"], [3, "text", "canRemove", 4, "ngFor", "ngForOf"], ["hintPos", "top", 1, "graph-annotation__user", 3, "edHint"], [3, "key"], [3, "ngClass"], [3, "text", "canRemove"]], template: function AnnotationHintComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("mouseenter", function AnnotationHintComponent_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function AnnotationHintComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, AnnotationHintComponent_div_2_Template, 2, 2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, AnnotationHintComponent_span_4_Template, 3, 3, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 5);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span", 6);
        i0.ɵɵlistener("click", function AnnotationHintComponent_Template_span_click_7_listener($event) { ctx.edit.emit(); return $event.stopPropagation(); });
        i0.ɵɵelement(8, "i", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵtemplate(10, AnnotationHintComponent_span_10_Template, 2, 1, "span", 9);
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, AnnotationHintComponent_ed_tag_13_Template, 1, 2, "ed-tag", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.annotation.alert);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.annotation.alert);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.timeLabel);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.annotation.alert);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.annotation.text);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.annotation.tags);
    } }, directives: [i3.NgIf, i3.NgForOf, i4.HintComponent, i4.AvatarComponent, i3.NgClass, i4.TagComponent], styles: [".graph-annotation .label-tag{margin-right:4px;margin-top:8px}.graph-annotation .graph-annotation__header{align-items:center;background-color:#333;display:flex;padding:6px 10px}.graph-annotation .graph-annotation__title{display:inline-block;flex-grow:1;font-weight:500;overflow:hidden;padding-right:1rem;text-overflow:ellipsis;white-space:nowrap}.graph-annotation .graph-annotation__title.alert{text-transform:uppercase}.graph-annotation .graph-annotation__edit-icon{padding-left:1rem}.graph-annotation .graph-annotation__time{color:#8e8e8e;display:inline-block;font-style:italic;font-weight:400;position:relative;top:1px}.graph-annotation .graph-annotation__body{padding:.65rem}.graph-annotation .graph-annotation__body.hint{max-width:20rem}.graph-annotation .graph-annotation__user img{border-radius:50%;height:16px;width:16px}.graph-annotation a[href]{color:#33b5e5;text-decoration:underline}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnotationHintComponent, [{
        type: Component,
        args: [{
                selector: 'annotation-hint',
                templateUrl: './annot-hint.html',
                styleUrls: ['../edit/edit-annot.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.ChartStore }, { type: i2.AnnotationService }, { type: i2.TimeRangeStore }]; }, { edit: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3QtaGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvYW5ub3RhdGlvbnMvaGludC9hbm5vdC1oaW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9hbm5vdGF0aW9ucy9oaW50L2Fubm90LWhpbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBcUMsTUFBTSxRQUFRLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUV2QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztJQ0czRCwrQkFFQztJQUFBLGdDQUFvRDtJQUNyRCxpQkFBTTs7O0lBRkwsa0ZBQTJDO0lBQ2hDLGVBQTJCO0lBQTNCLGdEQUEyQjs7O0lBSXRDLGdDQUVFO0lBQUEsd0JBQW1GO0lBQ25GLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBSE4sbUdBQXVFO0lBQ25FLGVBQTJFO0lBQTNFLHVHQUEyRTtJQUM5RSxlQUNGO0lBREUscUVBQ0Y7OztJQVlELDRCQUErQjtJQUFBLFlBQTRDO0lBQUEsaUJBQU87OztJQUFuRCxlQUE0QztJQUE1Qyw0RUFBNEM7OztJQUkzRSw2QkFBa0Y7OztJQUF4QywyQkFBVSxvQkFBQTs7QURyQnRELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSx1QkFBdUI7SUFRbEUsWUFDRSxLQUFpQixFQUNqQixZQUErQixFQUMvQixJQUFvQjtRQUNsQixLQUFLLENBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUUsQ0FBQztRQVY3QixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLFdBQVcsQ0FBQztJQVE3QixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixVQUFVLENBQUUsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUNuQztRQUNILENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQTtJQUNWLENBQUM7OzhGQTlCVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1hwQyw4QkFJQztRQUhBLDJHQUFjLGtCQUFjLElBQUMsOEZBQ2Ysa0JBQWMsSUFEQztRQUc3Qiw4QkFFQztRQUFBLHdFQUVDO1FBR0QsOEJBQ0M7UUFBQSwwRUFFRTtRQUdILGlCQUFNO1FBRU4sK0JBQXFDO1FBQUEsWUFBYTtRQUFBLGlCQUFPO1FBRXpELCtCQUNDO1FBRGlELGlHQUFTLGVBQVcsU0FBRSx3QkFBd0IsSUFBQztRQUNoRyx1QkFBd0M7UUFDekMsaUJBQU87UUFDUixpQkFBTTtRQUVOLDhCQUVDO1FBQUEsNEVBQStCO1FBRS9CLDRCQUFLO1FBQUEsYUFBbUI7UUFBQSxpQkFBTTtRQUU5QixpRkFBeUU7UUFFMUUsaUJBQU07UUFFUCxpQkFBTTs7UUE5QmlDLGVBQXlCO1FBQXpCLDRDQUF5QjtRQU12RCxlQUF3QjtRQUF4QiwyQ0FBd0I7UUFPTSxlQUFhO1FBQWIsbUNBQWE7UUFTNUMsZUFBd0I7UUFBeEIsMkNBQXdCO1FBRXpCLGVBQW1CO1FBQW5CLHlDQUFtQjtRQUVoQixlQUFpQztRQUFqQyw2Q0FBaUM7O2tERHJCOUIsdUJBQXVCO2NBTm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxTQUFTLEVBQUUsQ0FBRSx5QkFBeUIsQ0FBRTtnQkFDeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7MEhBR1csSUFBSTtrQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRIZWxwZXIsIEFubm90YXRpb25TZXJ2aWNlLCBUaW1lUmFuZ2VTdG9yZSB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IFRhZ0NvbG9ySGVscGVyIH0gZnJvbSAndWlsaWInO1xyXG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC5zdG9yZSc7XHJcbmltcG9ydCB7IEVkaXRBbm5vdGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC9lZGl0LWFubm90JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ub3RhdGlvbi1oaW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub3QtaGludC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4uL2VkaXQvZWRpdC1hbm5vdC5zY3NzJyBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25IaW50Q29tcG9uZW50IGV4dGVuZHMgRWRpdEFubm90YXRpb25Db21wb25lbnQge1xyXG5cclxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBvdmVyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgVGFnQ29sb3JIZWxwZXJSZWYgPSBUYWdDb2xvckhlbHBlcjtcclxuICBBbGVydEhlbHBlclJlZiA9IEFsZXJ0SGVscGVyO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCBcclxuICAgIHN0b3JlOiBDaGFydFN0b3JlLFxyXG4gICAgYW5ub3RTZXJ2aWNlOiBBbm5vdGF0aW9uU2VydmljZSxcclxuICAgIHRpbWU6IFRpbWVSYW5nZVN0b3JlICl7XHJcbiAgICAgIHN1cGVyKCBzdG9yZSwgYW5ub3RTZXJ2aWNlLCB0aW1lICk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUVudGVyKCl7XHJcbiAgICB0aGlzLm92ZXJQb3B1cCA9IHRydWU7XHJcbiAgICB0aGlzLmFubm90YXRpb24ub3ZlclJvb3QgPSBmYWxzZTtcclxuICAgIHRoaXMuYW5ub3RhdGlvbi5vdmVyUG9wdXAgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUxlYXZlKCl7XHJcbiAgICB0aGlzLm92ZXJQb3B1cCA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgIGlmKCAhdGhpcy5vdmVyUG9wdXAgKXtcclxuICAgICAgICB0aGlzLmFubm90YXRpb24ub3ZlclBvcHVwID0gZmFsc2U7ICAgIFxyXG4gICAgICB9XHJcbiAgICB9LCAzMDAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblx0XHJcblxyXG5cdFx0XHJcbiIsIlxyXG48ZGl2IGNsYXNzPVwiZ3JhcGgtYW5ub3RhdGlvbiBoaW50XCJcclxuXHQobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoKVwiXHJcblx0KG1vdXNlbGVhdmUpPVwib25Nb3VzZUxlYXZlKClcIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX2hlYWRlclwiPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJncmFwaC1hbm5vdGF0aW9uX191c2VyXCIgICpuZ0lmPVwiIWFubm90YXRpb24uYWxlcnRcIiBcclxuXHRcdFx0ZWRIaW50PVwiQ3JlYXRlZCBieSB7e2Fubm90YXRpb24udXNlck5hbWV9fVwiIGhpbnRQb3M9XCJ0b3BcIiA+XHJcblx0XHRcdDxlZC1hdmF0YXIgW2tleV09XCJhbm5vdGF0aW9uLnVzZXJOYW1lXCIgPjwvZWQtYXZhdGFyPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImdyYXBoLWFubm90YXRpb25fX3RpdGxlIGFsZXJ0XCI+XHJcblx0XHRcdDxzcGFuICpuZ0lmPVwiYW5ub3RhdGlvbi5hbGVydFwiXHJcblx0XHRcdFx0W25nQ2xhc3NdPVwiQWxlcnRIZWxwZXJSZWYuZ2V0U3RhdGVDbGFzcyhhbm5vdGF0aW9uLmFsZXJ0LmN1cnJlbnRTdGF0ZSlcIiAgPlxyXG5cdFx0XHRcdFx0PGkgW25nQ2xhc3NdPVwiQWxlcnRIZWxwZXJSZWYuZ2V0U3RhdGVJY29uQ2xhc3MoYW5ub3RhdGlvbi5hbGVydC5jdXJyZW50U3RhdGUpXCI+PC9pPlxyXG5cdFx0XHRcdFx0e3thbm5vdGF0aW9uLmFsZXJ0LmN1cnJlbnRTdGF0ZX19XHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxzcGFuIGNsYXNzPVwiZ3JhcGgtYW5ub3RhdGlvbl9fdGltZVwiPnt7dGltZUxhYmVsfX08L3NwYW4+XHJcblxyXG5cdFx0PHNwYW4gY2xhc3M9XCJwb2ludGVyIGdyYXBoLWFubm90YXRpb25fX2VkaXQtaWNvblwiIChjbGljayk9XCJlZGl0LmVtaXQoKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XHJcblx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsLXNxdWFyZSBtdC0xXCI+PC9pPlxyXG5cdFx0PC9zcGFuPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ3JhcGgtYW5ub3RhdGlvbl9fYm9keSBoaW50XCI+XHJcblxyXG5cdFx0PHNwYW4gKm5nSWY9XCJhbm5vdGF0aW9uLmFsZXJ0XCI+e3tBbGVydEhlbHBlclJlZi5nZXRJbmZvKGFubm90YXRpb24uYWxlcnQpfX08L3NwYW4+XHJcblxyXG5cdFx0PGRpdj57e2Fubm90YXRpb24udGV4dH19PC9kaXY+XHJcblxyXG5cdFx0PGVkLXRhZyAqbmdGb3I9XCJsZXQgdCBvZiBhbm5vdGF0aW9uLnRhZ3NcIiBbdGV4dF09XCJ0XCIgW2NhblJlbW92ZV09XCJmYWxzZVwiPjwvZWQtdGFnPlxyXG5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuIl19