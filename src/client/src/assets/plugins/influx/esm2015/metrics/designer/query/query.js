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
import * as i7 from "@angular/forms";
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
function QueryEditorComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "measurement-editor", 28);
    i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_ng_container_1_Template_measurement_editor_rebuild_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.build(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "fields-editor", 28);
    i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_ng_container_1_Template_fields_editor_rebuild_2_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.build(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "group-by-editor", 28);
    i0.ɵɵlistener("rebuild", function QueryEditorComponent_div_10_ng_container_1_Template_group_by_editor_rebuild_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.build(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r7.query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r7.query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("query", ctx_r7.query);
} }
function QueryEditorComponent_div_10_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "textarea", 29);
    i0.ɵɵlistener("ngModelChange", function QueryEditorComponent_div_10_ng_template_2_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.queryAsString = $event; });
    i0.ɵɵtext(2, "\t\t\t\t");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r9.queryAsString);
} }
function QueryEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, QueryEditorComponent_div_10_ng_container_1_Template, 4, 3, "ng-container", 26);
    i0.ɵɵtemplate(2, QueryEditorComponent_div_10_ng_template_2_Template, 3, 1, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r8 = i0.ɵɵreference(3);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.rawMode)("ngIfElse", _r8);
} }
const _c0 = function (a0) { return { "gf-form-disabled": a0 }; };
export class QueryEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService, time) {
        super(panel, dsService);
        this.dsService = dsService;
        this.time = time;
        this.contextMenuItems = [];
        this.opened = true;
        this.rawMode = false;
        this.remove = new EventEmitter();
        this.moveUp = new EventEmitter();
        this.moveDown = new EventEmitter();
        this.duplicate = new EventEmitter();
    }
    ngOnInit() {
        this.contextMenuItems = [
            {
                label: 'Toggle edit mode',
                command: _ => this.rawMode = !this.rawMode
            },
            {
                label: 'Duplicate',
                command: _ => this.duplicate.emit()
            },
            {
                label: 'Move up',
                command: _ => this.moveUp.emit()
            },
            {
                label: 'Move down',
                command: _ => this.moveDown.emit()
            },
        ];
        this.build(false);
    }
    onRebuild() {
        this.rebuild.emit();
    }
}
QueryEditorComponent.ɵfac = function QueryEditorComponent_Factory(t) { return new (t || QueryEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService), i0.ɵɵdirectiveInject(i1.TimeRangeStore)); };
QueryEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: QueryEditorComponent, selectors: [["query-editor"]], outputs: { remove: "remove", moveUp: "moveUp", moveDown: "moveDown", duplicate: "duplicate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 9, consts: [[1, "gf-form-query", 3, "ngClass"], [1, "gf-form", "gf-form-query-letter-cell", 3, "click"], [1, "gf-form-label"], ["tabindex", "1", 1, "pointer"], ["ng-class", "{muted: !ctrl.canCollapse}", 1, "gf-form-query-letter-cell-carret"], ["class", "fa fa-caret-down", 4, "ngIf"], ["class", "fa fa-caret-right", 4, "ngIf"], [1, "gf-form-query-letter-cell-letter"], ["class", "gf-form-query-content gf-form-query-content--collapsed mr-1", 4, "ngIf"], ["class", "gf-form-query-content", 4, "ngIf"], [1, "gf-form", "ed"], [1, "gf-form-label", 3, "click"], ["data-toggle", "dropdown", "tabindex", "1", 1, "pointer", "dropdown-toggle"], [1, "fa", "fa-bars"], ["ng-click", "ctrl.toggleHideQuery()", "role", "menuitem"], [1, "fa", "fa-eye"], ["tabindex", "1", 1, "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "items"], ["cm", ""], [1, "fa", "fa-caret-down"], [1, "fa", "fa-caret-right"], [1, "gf-form-query-content", "gf-form-query-content--collapsed", "mr-1"], [1, "gf-form"], [1, "gf-form-label", "pointer", "gf-form-label--grow", 3, "click"], [1, "gf-form-query-content"], [4, "ngIf", "ngIfElse"], ["rawEditor", ""], [3, "query", "rebuild"], ["rows", "3", "spellcheck", "false", "placeholder", "InfluxDB Query", "ng-model-onblur", "", "ng-change", "ctrl.refresh()", 1, "gf-form-input", 3, "ngModel", "ngModelChange"]], template: function QueryEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = i0.ɵɵgetCurrentView();
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
        i0.ɵɵtemplate(10, QueryEditorComponent_div_10_Template, 4, 2, "div", 9);
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵelementStart(12, "label", 11);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_label_click_12_listener($event) { i0.ɵɵrestoreView(_r16); const _r4 = i0.ɵɵreference(22); return _r4.show($event); });
        i0.ɵɵelementStart(13, "a", 12);
        i0.ɵɵelement(14, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "label", 11);
        i0.ɵɵlistener("click", function QueryEditorComponent_Template_label_click_15_listener() { ctx.query.hidden = !ctx.query.hidden; return ctx.needRebuild(); });
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
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx.query.hidden));
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
    } }, directives: [i2.NgClass, i2.NgIf, i3.ContextMenuComponent, i4.MeasurementEditorComponent, i5.FieldsEditorComponent, i6.GroupByEditorComponent, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QueryEditorComponent, [{
        type: Component,
        args: [{
                selector: 'query-editor',
                templateUrl: './query.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvcXVlcnkudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvcXVlcnkuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBNEIsV0FBVyxFQUFtQixNQUFNLFFBQVEsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7SUNHeEMsd0JBQStDOzs7SUFDL0Msd0JBQWlEOzs7O0lBUzFELCtCQUNDO0lBQUEsK0JBQ0M7SUFBQSxpQ0FDQztJQUR3RCxrTUFBd0I7SUFDaEYsWUFDRDtJQUFBLGlCQUFRO0lBQ1QsaUJBQU07SUFDUCxpQkFBTTs7O0lBSEgsZUFDRDtJQURDLHFEQUNEOzs7O0lBTUQsNkJBQ0M7SUFBQSw4Q0FBNkU7SUFBekMsdU5BQW1CO0lBQUMsaUJBQXFCO0lBRTdFLHlDQUFtRTtJQUFwQyxrTkFBbUI7SUFBQyxpQkFBZ0I7SUFFbkUsMkNBQXVFO0lBQXRDLG9OQUFtQjtJQUFDLGlCQUFrQjtJQUN4RSwwQkFBZTs7O0lBTE0sZUFBZTtJQUFmLG9DQUFlO0lBRXBCLGVBQWU7SUFBZixvQ0FBZTtJQUViLGVBQWU7SUFBZixvQ0FBZTs7OztJQUloQywrQkFDQztJQUFBLG9DQUdBO0lBSHlDLDZPQUEyQjtJQUdwRSx3QkFBQTtJQUFBLGlCQUFXO0lBQ1osaUJBQU07OztJQUpvQyxlQUEyQjtJQUEzQiw4Q0FBMkI7OztJQVp2RSwrQkFFQztJQUFBLCtG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TUFBTTt1QkFBRSxXQUFXO3FGQVBaLE1BQU07a0JBQWYsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlLCBQYW5lbCwgUEFORUxfVE9LRU4sIFRpbWVSYW5nZVN0b3JlICB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IEJhc2VRdWVyeUNvbXBvbmVudCB9IGZyb20gJy4vcXVlcnktYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3F1ZXJ5LWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXJ5Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVyeUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VRdWVyeUNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnRleHRNZW51SXRlbXMgPSBbXTtcclxuXHJcbiAgb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcclxuICByYXdNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdmVVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW92ZURvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGR1cGxpY2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCxcclxuICAgIHB1YmxpYyBkc1NlcnZpY2U6IERhdGFTb3VyY2VTZXJ2aWNlLFxyXG4gICAgcHVibGljIHRpbWUgOlRpbWVSYW5nZVN0b3JlICl7XHJcbiAgICAgIHN1cGVyKCBwYW5lbCwgZHNTZXJ2aWNlICk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5jb250ZXh0TWVudUl0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdUb2dnbGUgZWRpdCBtb2RlJyxcclxuICAgICAgICBjb21tYW5kOiBfID0+IHRoaXMucmF3TW9kZSA9ICF0aGlzLnJhd01vZGVcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0R1cGxpY2F0ZScsXHJcbiAgICAgICAgY29tbWFuZDogXyA9PiB0aGlzLmR1cGxpY2F0ZS5lbWl0KClcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ01vdmUgdXAnLFxyXG4gICAgICAgIGNvbW1hbmQ6IF8gPT4gdGhpcy5tb3ZlVXAuZW1pdCgpXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdNb3ZlIGRvd24nLFxyXG4gICAgICAgIGNvbW1hbmQ6IF8gPT4gdGhpcy5tb3ZlRG93bi5lbWl0KClcclxuICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgICB0aGlzLmJ1aWxkKCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIG9uUmVidWlsZCgpe1xyXG4gICAgdGhpcy5yZWJ1aWxkLmVtaXQoKTtcclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1xdWVyeVwiIFtuZ0NsYXNzXT1cInsnZ2YtZm9ybS1kaXNhYmxlZCc6IHF1ZXJ5LmhpZGRlbn1cIiA+XHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS1xdWVyeS1sZXR0ZXItY2VsbCBcIiAoY2xpY2spPVwib3BlbmVkPSFvcGVuZWRcIj4gXHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCIgID5cclxuXHRcdFx0PGEgY2xhc3M9XCJwb2ludGVyXCIgdGFiaW5kZXg9XCIxXCIgPlxyXG4gICAgICAgIDxzcGFuICBuZy1jbGFzcz1cInttdXRlZDogIWN0cmwuY2FuQ29sbGFwc2V9XCIgY2xhc3M9XCJnZi1mb3JtLXF1ZXJ5LWxldHRlci1jZWxsLWNhcnJldFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duXCIgKm5nSWY9XCJvcGVuZWRcIj48L2k+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhcmV0LXJpZ2h0XCIgKm5nSWY9XCIhb3BlbmVkXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImdmLWZvcm0tcXVlcnktbGV0dGVyLWNlbGwtbGV0dGVyXCI+e3txdWVyeS5yZWZJZH19PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2E+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHRcclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1xdWVyeS1jb250ZW50IGdmLWZvcm0tcXVlcnktY29udGVudC0tY29sbGFwc2VkIG1yLTFcIiAqbmdJZj1cIiFvcGVuZWRcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcG9pbnRlciBnZi1mb3JtLWxhYmVsLS1ncm93XCIgKGNsaWNrKT1cIm9wZW5lZD0hb3BlbmVkXCI+XHJcblx0XHRcdFx0e3txdWVyeUFzU3RyaW5nfX1cclxuXHRcdFx0PC9sYWJlbD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1xdWVyeS1jb250ZW50XCIgKm5nSWY9XCJvcGVuZWRcIj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIXJhd01vZGU7IGVsc2UgcmF3RWRpdG9yXCI+XHJcblx0XHRcdDxtZWFzdXJlbWVudC1lZGl0b3IgW3F1ZXJ5XT1cInF1ZXJ5XCIgKHJlYnVpbGQpPVwiYnVpbGQoKVwiPjwvbWVhc3VyZW1lbnQtZWRpdG9yPlxyXG5cclxuXHRcdFx0PGZpZWxkcy1lZGl0b3IgW3F1ZXJ5XT1cInF1ZXJ5XCIgKHJlYnVpbGQpPVwiYnVpbGQoKVwiPjwvZmllbGRzLWVkaXRvcj5cclxuXHRcclxuXHRcdFx0PGdyb3VwLWJ5LWVkaXRvciBbcXVlcnldPVwicXVlcnlcIiAocmVidWlsZCk9XCJidWlsZCgpXCI+PC9ncm91cC1ieS1lZGl0b3I+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctdGVtcGxhdGUgI3Jhd0VkaXRvcj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdFx0XHQ8dGV4dGFyZWEgcm93cz1cIjNcIiBjbGFzcz1cImdmLWZvcm0taW5wdXRcIiBbKG5nTW9kZWwpXT1cInF1ZXJ5QXNTdHJpbmdcIlxyXG5cdFx0XHRcdFx0c3BlbGxjaGVjaz1cImZhbHNlXCIgcGxhY2Vob2xkZXI9XCJJbmZsdXhEQiBRdWVyeVwiXHJcblx0XHRcdFx0XHRuZy1tb2RlbC1vbmJsdXIgbmctY2hhbmdlPVwiY3RybC5yZWZyZXNoKClcIj5cclxuXHRcdFx0XHQ8L3RleHRhcmVhPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBlZFwiPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiIChjbGljayk9XCJjbS5zaG93KCAkZXZlbnQgKVwiPlxyXG5cdFx0XHQ8YSBjbGFzcz1cInBvaW50ZXIgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIHRhYmluZGV4PVwiMVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiPjwvaT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9sYWJlbD5cclxuICAgIDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIiAoY2xpY2spPVwicXVlcnkuaGlkZGVuPSFxdWVyeS5oaWRkZW47IG5lZWRSZWJ1aWxkKClcIj5cclxuXHRcdFx0PGEgbmctY2xpY2s9XCJjdHJsLnRvZ2dsZUhpZGVRdWVyeSgpXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvbGFiZWw+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcblx0XHRcdDxhIGNsYXNzPVwicG9pbnRlclwiIHRhYmluZGV4PVwiMVwiIChjbGljayk9XCJyZW1vdmUuZW1pdCgpO1wiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGVkLWNvbnRleHQtbWVudSAjY20gW2l0ZW1zXT1cImNvbnRleHRNZW51SXRlbXNcIj5cclxuPC9lZC1jb250ZXh0LW1lbnU+Il19