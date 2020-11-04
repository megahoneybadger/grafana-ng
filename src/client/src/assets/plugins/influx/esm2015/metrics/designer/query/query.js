import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseQueryComponent } from './query-base';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "./measurement/measurement";
import * as i5 from "./fields/fields";
import * as i6 from "./group-by/group-by";
function QueryEditorComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 20);
} }
function QueryEditorComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} }
function QueryEditorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵelementStart(2, "label", 24);
    i0.ɵɵlistener("click", function QueryEditorComponent_div_9_Template_label_click_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.opened = !ctx_r5.opened; });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.queryAsString, " ");
} }
function QueryEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "measurement-editor", 26);
    i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_Template_measurement_editor_rebuild_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.build(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "fields-editor", 26);
    i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_Template_fields_editor_rebuild_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.build(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "group-by-editor", 26);
    i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_Template_group_by_editor_rebuild_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.build(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r3.query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r3.query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r3.query);
} }
export class QueryEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService, time) {
        super(panel, dsService);
        this.dsService = dsService;
        this.time = time;
        this.contextMenuItems = [];
        this.opened = true;
        this.editMode = false;
        this.remove = new EventEmitter();
        this.moveUp = new EventEmitter();
        this.moveDown = new EventEmitter();
        this.duplicate = new EventEmitter();
    }
    ngOnInit() {
        this.contextMenuItems = [
            {
                label: 'Toggle edit mode',
                command: (_) => this.editMode != this.editMode
            },
            {
                label: 'Duplicate',
                command: (_) => this.duplicate.emit()
            },
            {
                label: 'Move up',
                command: (_) => this.moveUp.emit()
            },
            {
                label: 'Move down',
                command: (_) => this.moveDown.emit()
            },
        ];
        this.build(false);
    }
    onRebuild() {
        this.rebuild.emit();
    }
}
QueryEditorComponent.ɵfac = function QueryEditorComponent_Factory(t) { return new (t || QueryEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
QueryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: QueryEditorComponent, selectors: [["query-editor"]], outputs: { remove: "remove", moveUp: "moveUp", moveDown: "moveDown", duplicate: "duplicate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 6, consts: [[1, "gf-form-query"], [1, "gf-form", "gf-form-query-letter-cell", 3, "click"], [1, "gf-form-label"], ["tabindex", "1", 1, "pointer"], ["ng-class", "{muted: !ctrl.canCollapse}", 1, "gf-form-query-letter-cell-carret"], ["class", "fa fa-caret-down", 4, "ngIf"], ["class", "fa fa-caret-right", 4, "ngIf"], [1, "gf-form-query-letter-cell-letter"], ["class", "gf-form-query-content gf-form-query-content--collapsed mr-1", 4, "ngIf"], ["class", "gf-form-query-content", 4, "ngIf"], [1, "gf-form", "ed"], [1, "gf-form-label", 3, "click"], ["data-toggle", "dropdown", "tabindex", "1", 1, "pointer", "dropdown-toggle"], [1, "fa", "fa-bars"], ["ng-click", "ctrl.toggleHideQuery()", "role", "menuitem"], [1, "fa", "fa-eye"], ["tabindex", "1", 1, "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "items"], ["cm", ""], [1, "fa", "fa-caret-down"], [1, "fa", "fa-caret-right"], [1, "gf-form-query-content", "gf-form-query-content--collapsed", "mr-1"], [1, "gf-form"], [1, "gf-form-label", "pointer", "gf-form-label--grow", 3, "click"], [1, "gf-form-query-content"], [3, "query", "rebuild"]], template: function QueryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_div_click_1_listener() { return ctx.opened = !ctx.opened; });
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵelementStart(3, "a", 3);
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵtemplate(5, QueryEditorComponent_i_5_Template, 1, 0, "i", 5);
        i0.ɵɵtemplate(6, QueryEditorComponent_i_6_Template, 1, 0, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, QueryEditorComponent_div_9_Template, 4, 1, "div", 8);
        i0.ɵɵtemplate(10, QueryEditorComponent_div_10_Template, 4, 3, "div", 9);
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵelementStart(12, "label", 11);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_label_click_12_listener($event) { i0.ɵɵrestoreView(_r11); const _r4 = i0.ɵɵreference(22); return _r4.show($event); });
        i0.ɵɵelementStart(13, "a", 12);
        i0.ɵɵelement(14, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "label", 2);
        i0.ɵɵelementStart(16, "a", 14);
        i0.ɵɵelement(17, "i", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "label", 2);
        i0.ɵɵelementStart(19, "a", 16);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_a_click_19_listener() { return ctx.remove.emit(); });
        i0.ɵɵelement(20, "i", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "ed-context-menu", 18, 19);
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.opened);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.opened);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.query.refId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.opened);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.opened);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("items", ctx.contextMenuItems);
    } }, directives: [i2.NgIf, i3.ContextMenuComponent, i4.MeasurementEditorComponent, i5.FieldsEditorComponent, i6.GroupByEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'query-editor',
                templateUrl: './query.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }, { type: i1.TimeRangeStore }]; }, { remove: [{
            type: Output
        }], moveUp: [{
            type: Output
        }], moveDown: [{
            type: Output
        }], duplicate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvcXVlcnkudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvcXVlcnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBNEIsV0FBVyxFQUNmLE1BQU0sUUFBUSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7O0lDRXhDLHdCQUErQzs7O0lBQy9DLHdCQUFpRDs7OztJQVMxRCwrQkFDQztJQUFBLCtCQUNDO0lBQUEsaUNBQ0M7SUFEd0Qsa01BQXdCO0lBQ2hGLFlBQ0Q7SUFBQSxpQkFBUTtJQUNULGlCQUFNO0lBQ1AsaUJBQU07OztJQUhILGVBQ0Q7SUFEQyxxREFDRDs7OztJQUlGLCtCQUVDO0lBQUEsOENBQTZFO0lBQXpDLG9NQUFtQjtJQUFDLGlCQUFxQjtJQUU3RSx5Q0FBbUU7SUFBcEMsK0xBQW1CO0lBQUMsaUJBQWdCO0lBRW5FLDJDQUF1RTtJQUF0QyxtTUFBbUI7SUFBQyxpQkFBa0I7SUFFeEUsaUJBQU07OztJQU5lLGVBQWU7SUFBZixvQ0FBZTtJQUVwQixlQUFlO0lBQWYsb0NBQWU7SUFFYixlQUFlO0lBQWYsb0NBQWU7O0FEcEJsQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsa0JBQWtCO0lBYTFELFlBQ3lCLEtBQVksRUFDNUIsU0FBNEIsRUFDNUIsSUFBb0I7UUFDekIsS0FBSyxDQUFFLEtBQUssRUFBRSxTQUFTLENBQUUsQ0FBQztRQUZyQixjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQWQ3QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFdEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWhCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXpDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCO2dCQUNFLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFFLENBQUMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUTthQUNqRDtZQUVEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsQ0FBRSxDQUFDLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO2FBQ3hDO1lBRUQ7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFFLENBQUMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDckM7WUFFRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsT0FBTyxFQUFFLENBQUUsQ0FBQyxFQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTthQUN2QztTQUNGLENBQUE7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzt3RkFoRFUsb0JBQW9CLHVCQWNwQixXQUFXO3lEQWRYLG9CQUFvQjs7UUNUakMsOEJBQ0M7UUFBQSw4QkFDQztRQUQrQywwSEFBd0I7UUFDdkUsZ0NBQ0M7UUFBQSw0QkFDSztRQUFBLCtCQUNFO1FBQUEsaUVBQTJDO1FBQzNDLGlFQUE2QztRQUMvQyxpQkFBTztRQUNQLCtCQUErQztRQUFBLFlBQWU7UUFBQSxpQkFBTztRQUV2RSxpQkFBSTtRQUNSLGlCQUFRO1FBQ1QsaUJBQU07UUFHTixxRUFDQztRQU9ELHVFQUVDO1FBUUQsZ0NBQ0M7UUFBQSxrQ0FDQztRQUQ0QiwrSkFBUyxnQkFBaUIsSUFBQztRQUN2RCw4QkFDQztRQUFBLHlCQUEwQjtRQUMzQixpQkFBSTtRQUNMLGlCQUFRO1FBQ04saUNBQ0Q7UUFBQSw4QkFDQztRQUFBLHlCQUF5QjtRQUMxQixpQkFBSTtRQUNMLGlCQUFRO1FBQ1IsaUNBQ0M7UUFBQSw4QkFDQztRQUQrQiw2RkFBUyxpQkFBYSxJQUFFO1FBQ3ZELHlCQUEyQjtRQUM1QixpQkFBSTtRQUNMLGlCQUFRO1FBQ1QsaUJBQU07UUFFUCxpQkFBTTtRQUVOLDJDQUNrQjs7UUFqRG9CLGVBQWM7UUFBZCxpQ0FBYztRQUNiLGVBQWU7UUFBZixrQ0FBZTtRQUVDLGVBQWU7UUFBZixxQ0FBZTtRQU9JLGVBQWU7UUFBZixrQ0FBZTtRQVFyRCxlQUFjO1FBQWQsaUNBQWM7UUE4QjdCLGdCQUEwQjtRQUExQiw0Q0FBMEI7O2tERDVDbEMsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLGNBQWM7YUFDNUI7O3NCQWVJLE1BQU07dUJBQUUsV0FBVztxRkFQWixNQUFNO2tCQUFmLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSwgUGFuZWwsIFBBTkVMX1RPS0VOLFxyXG4gIFRpbWVSYW5nZVN0b3JlLCBNZXRyaWNRdWVyeSB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IEJhc2VRdWVyeUNvbXBvbmVudCB9IGZyb20gJy4vcXVlcnktYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3F1ZXJ5LWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXJ5Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVyeUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VRdWVyeUNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnRleHRNZW51SXRlbXMgPSBbXTtcclxuXHJcbiAgb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBlZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtb3ZlVXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdmVEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkdXBsaWNhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwsXHJcbiAgICBwdWJsaWMgZHNTZXJ2aWNlOiBEYXRhU291cmNlU2VydmljZSxcclxuICAgIHB1YmxpYyB0aW1lIDpUaW1lUmFuZ2VTdG9yZSApe1xyXG4gICAgICBzdXBlciggcGFuZWwsIGRzU2VydmljZSApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuY29udGV4dE1lbnVJdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnVG9nZ2xlIGVkaXQgbW9kZScsXHJcbiAgICAgICAgY29tbWFuZDogKCBfICkgPT4gdGhpcy5lZGl0TW9kZSAhPSB0aGlzLmVkaXRNb2RlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdEdXBsaWNhdGUnLFxyXG4gICAgICAgIGNvbW1hbmQ6ICggXyApID0+IHRoaXMuZHVwbGljYXRlLmVtaXQoKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnTW92ZSB1cCcsXHJcbiAgICAgICAgY29tbWFuZDogKCBfICkgPT4gdGhpcy5tb3ZlVXAuZW1pdCgpXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdNb3ZlIGRvd24nLFxyXG4gICAgICAgIGNvbW1hbmQ6ICggXyApID0+IHRoaXMubW92ZURvd24uZW1pdCgpXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcblxyXG4gICAgdGhpcy5idWlsZCggZmFsc2UgKTtcclxuICB9XHJcblxyXG4gIG9uUmVidWlsZCgpe1xyXG4gICAgdGhpcy5yZWJ1aWxkLmVtaXQoKTtcclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1xdWVyeVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tcXVlcnktbGV0dGVyLWNlbGwgXCIgKGNsaWNrKT1cIm9wZW5lZD0hb3BlbmVkXCI+IFxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiICA+XHJcblx0XHRcdDxhIGNsYXNzPVwicG9pbnRlclwiIHRhYmluZGV4PVwiMVwiID5cclxuICAgICAgICA8c3BhbiAgbmctY2xhc3M9XCJ7bXV0ZWQ6ICFjdHJsLmNhbkNvbGxhcHNlfVwiIGNsYXNzPVwiZ2YtZm9ybS1xdWVyeS1sZXR0ZXItY2VsbC1jYXJyZXRcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiICpuZ0lmPVwib3BlbmVkXCI+PC9pPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1yaWdodFwiICpuZ0lmPVwiIW9wZW5lZFwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5LWxldHRlci1jZWxsLWxldHRlclwiPnt7cXVlcnkucmVmSWR9fTwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgPC9hPlxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0XHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0tcXVlcnktY29udGVudCBnZi1mb3JtLXF1ZXJ5LWNvbnRlbnQtLWNvbGxhcHNlZCBtci0xXCIgKm5nSWY9XCIhb3BlbmVkXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHBvaW50ZXIgZ2YtZm9ybS1sYWJlbC0tZ3Jvd1wiIChjbGljayk9XCJvcGVuZWQ9IW9wZW5lZFwiPlxyXG5cdFx0XHRcdHt7cXVlcnlBc1N0cmluZ319XHJcblx0XHRcdDwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0tcXVlcnktY29udGVudFwiICpuZ0lmPVwib3BlbmVkXCI+XHJcblxyXG5cdFx0PG1lYXN1cmVtZW50LWVkaXRvciBbcXVlcnldPVwicXVlcnlcIiAocmVidWlsZCk9XCJidWlsZCgpXCI+PC9tZWFzdXJlbWVudC1lZGl0b3I+XHJcblxyXG5cdFx0PGZpZWxkcy1lZGl0b3IgW3F1ZXJ5XT1cInF1ZXJ5XCIgKHJlYnVpbGQpPVwiYnVpbGQoKVwiPjwvZmllbGRzLWVkaXRvcj5cclxuXHJcblx0XHQ8Z3JvdXAtYnktZWRpdG9yIFtxdWVyeV09XCJxdWVyeVwiIChyZWJ1aWxkKT1cImJ1aWxkKClcIj48L2dyb3VwLWJ5LWVkaXRvcj5cclxuXHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtIGVkXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCIgKGNsaWNrKT1cImNtLnNob3coICRldmVudCApXCI+XHJcblx0XHRcdDxhIGNsYXNzPVwicG9pbnRlciBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgdGFiaW5kZXg9XCIxXCI+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1iYXJzXCI+PC9pPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L2xhYmVsPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHQ8YSBuZy1jbGljaz1cImN0cmwudG9nZ2xlSGlkZVF1ZXJ5KClcIiByb2xlPVwibWVudWl0ZW1cIj5cclxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9sYWJlbD5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIj5cclxuXHRcdFx0PGEgY2xhc3M9XCJwb2ludGVyXCIgdGFiaW5kZXg9XCIxXCIgKGNsaWNrKT1cInJlbW92ZS5lbWl0KCk7XCI+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGVkLWNvbnRleHQtbWVudSAjY20gW2l0ZW1zXT1cImNvbnRleHRNZW51SXRlbXNcIj5cclxuPC9lZC1jb250ZXh0LW1lbnU+Il19