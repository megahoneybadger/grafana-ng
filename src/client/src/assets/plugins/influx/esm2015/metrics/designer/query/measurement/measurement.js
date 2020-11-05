import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { isRegex } from '../../../builder';
import { Tag, TagCondition, TagOperator } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function MeasurementEditorComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ed-autocomplete-picker", 10);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const t_r2 = ctx.$implicit; return t_r2.condition = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ed-autocomplete-picker", 3);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r5); const t_r2 = ctx.$implicit; return t_r2.key = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_2_listener($event) { i0.ɵɵrestoreView(_r5); const t_r2 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); ctx_r8.onTagKeyEditPick($event, t_r2); return ctx_r8.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ed-autocomplete-picker", 11);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const t_r2 = ctx.$implicit; return t_r2.operator = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ed-autocomplete-picker", 12);
    i0.ɵɵlistener("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_4_listener($event) { i0.ɵɵrestoreView(_r5); const t_r2 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onTagValuePick(t_r2, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", !(i_r3 > 0 && t_r2.key))("ngModel", t_r2.condition)("request", ctx_r0.conditions$);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", t_r2.key)("request", ctx_r0.tagEditKeys$);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", t_r2.operator)("request", ctx_r0.tagOperators$(t_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", t_r2.value)("request", ctx_r0.tagValues$(t_r2))("forceSelection", false);
} }
function MeasurementEditorComponent_ed_autocomplete_picker_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 13);
    i0.ɵɵlistener("pick", function MeasurementEditorComponent_ed_autocomplete_picker_10_Template_ed_autocomplete_picker_pick_0_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onTagAddKeyPick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("request", ctx_r1.tagAddKeys$)("readonly", true);
} }
export class MeasurementEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
        this.DEFAULT_POLICY = 'default';
    }
    get retentionPolicies$() {
        return this
            .proxy(`SHOW RETENTION POLICIES`)
            .pipe(map(x => ['default', ...x[0].values.map(y => y[0])]));
    }
    get measurements$() {
        return this
            .proxy(`SHOW MEASUREMENTS`)
            .pipe(map(x => [...x[0].values].reduce((acc, value) => acc.concat(value), [])));
    }
    tagOperators$(tag) {
        const isRegexValue = isRegex(tag.value);
        const allOperators = Object.values(TagOperator);
        let result = isRegexValue ? allOperators.slice(4, 6) : allOperators.slice(0, 4);
        return of(result);
    }
    get tagAddKeys$() {
        const q = (this.query.measurement) ?
            `SHOW TAG KEYS from ${this.query.measurement}` :
            `SHOW TAG KEYS`;
        return this
            .proxy(q)
            .pipe(map(x => (!x.length) ? [] : [...x[0].values.reduce((acc, value) => acc.concat(value), [])]));
    }
    get tagEditKeys$() {
        return this
            .tagAddKeys$
            .pipe(map(x => [this.REMOVE, ...x]));
    }
    tagValues$(tag) {
        const q = `SHOW TAG VALUES WITH KEY=${tag.key}`;
        return this
            .proxy(q)
            .pipe(map(x => { var _a; return (_a = x[0]) === null || _a === void 0 ? void 0 : _a.values.map(y => y[1]); }));
    }
    get conditions$() {
        return of(Object.values(TagCondition));
    }
    get canAddTag() {
        const tags = this.query.tags;
        return (!(tags === null || tags === void 0 ? void 0 : tags.length)) || (tags[tags.length - 1]).value;
    }
    ngOnInit() {
        if (!this.query.policy) {
            this.query.policy = this.DEFAULT_POLICY;
        }
    }
    onTagAddKeyPick(k) {
        var tag = new Tag();
        tag.key = k;
        this.query.tags.push(tag);
    }
    onTagKeyEditPick(k, t) {
        if (k == this.REMOVE) {
            this.query.tags = this.query.tags.filter(x => x != t);
        }
    }
    onTagValuePick(t, v) {
        if (v === t.value) {
            return;
        }
        let oldValueIsRegEx = isRegex(t.value);
        t.value = v;
        let newValueIsRegEx = isRegex(t.value);
        const regExChanged = (oldValueIsRegEx != newValueIsRegEx);
        if (regExChanged) {
            t.operator = (newValueIsRegEx) ? TagOperator.RegExEq : TagOperator.Eq;
        }
        this.needRebuild();
    }
}
MeasurementEditorComponent.ɵfac = function MeasurementEditorComponent_Factory(t) { return new (t || MeasurementEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
MeasurementEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MeasurementEditorComponent, selectors: [["measurement-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 6, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select measurement", 3, "ngModel", "request", "ngModelChange", "pick"], [1, "gf-form-label", "query-keyword"], [4, "ngFor", "ngForOf"], ["placeholder", "fa fa-plus", 3, "request", "readonly", "pick", 4, "ngIf"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], ["valueClass", "query-keyword", 3, "hidden", "ngModel", "request", "ngModelChange", "pick"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select tag value", 3, "value", "request", "forceSelection", "pick"], ["placeholder", "fa fa-plus", 3, "request", "readonly", "pick"]], template: function MeasurementEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵtext(3, " FROM ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-autocomplete-picker", 3);
        i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.query.policy = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_4_listener() { return ctx.needRebuild(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-autocomplete-picker", 4);
        i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_5_listener($event) { return ctx.query.measurement = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_5_listener() { return ctx.needRebuild(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵelementStart(7, "label", 5);
        i0.ɵɵtext(8, " WHERE ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, MeasurementEditorComponent_ng_container_9_Template, 5, 10, "ng-container", 6);
        i0.ɵɵtemplate(10, MeasurementEditorComponent_ed_autocomplete_picker_10_Template, 1, 2, "ed-autocomplete-picker", 7);
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵelement(12, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.query.policy)("request", ctx.retentionPolicies$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.query.measurement)("request", ctx.measurements$);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.query.tags);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canAddTag);
    } }, directives: [i2.AutoCompletePickerComponent, i3.NgControlStatus, i3.NgModel, i4.NgForOf, i4.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MeasurementEditorComponent, [{
        type: Component,
        args: [{
                selector: 'measurement-editor',
                templateUrl: './measurement.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvbWVhc3VyZW1lbnQvbWVhc3VyZW1lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvbWVhc3VyZW1lbnQvbWVhc3VyZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQTRCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ3FCbEQsNkJBRUM7SUFBQSxrREFNeUI7SUFKeEIsME9BQXlCLHlNQUFBO0lBSTFCLGlCQUF5QjtJQUV6QixpREFJeUI7SUFIeEIsb09BQW1CLGtSQUFBO0lBR3BCLGlCQUF5QjtJQUV6QixrREFLeUI7SUFKeEIseU9BQXdCLDJNQUFBO0lBSXpCLGlCQUF5QjtJQUV2QixrREFNdUI7SUFEeEIseVFBQXFDO0lBQ3RDLGlCQUF5QjtJQUUxQiwwQkFBZTs7Ozs7SUE1QmIsZUFBNEI7SUFBNUIsZ0RBQTRCLDJCQUFBLCtCQUFBO0lBUTVCLGVBQW1CO0lBQW5C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QztRQStCRCxtSEFLQTtRQUVBLCtCQUNDO1FBQUEsMEJBQXFEO1FBQ3RELGlCQUFNO1FBQ1AsaUJBQU07O1FBN0RKLGVBQTBCO1FBQTFCLDBDQUEwQixtQ0FBQTtRQU8xQixlQUErQjtRQUEvQiwrQ0FBK0IsOEJBQUE7UUFXbEIsZUFBMEM7UUFBMUMsd0NBQTBDO1FBaUNoQyxlQUFpQjtRQUFqQixvQ0FBaUI7O2tERGhEN0IsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDOztzQkFpRUksTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UsIFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgaXNSZWdleCB9IGZyb20gJy4uLy4uLy4uL2J1aWxkZXInO1xyXG5pbXBvcnQgeyBUYWcsIFRhZ0NvbmRpdGlvbiwgVGFnT3BlcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9tZXRyaWNzLm0nO1xyXG5pbXBvcnQgeyBCYXNlUXVlcnlDb21wb25lbnQgfSBmcm9tICcuLi9xdWVyeS1iYXNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWVhc3VyZW1lbnQtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVhc3VyZW1lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lYXN1cmVtZW50RWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZVF1ZXJ5Q29tcG9uZW50ICB7XHJcblxyXG4gIHJlYWRvbmx5IERFRkFVTFRfUE9MSUNZID0gJ2RlZmF1bHQnO1xyXG5cclxuICBnZXQgcmV0ZW50aW9uUG9saWNpZXMkKCkge1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnByb3h5KCBgU0hPVyBSRVRFTlRJT04gUE9MSUNJRVNgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoeCA9PiBbJ2RlZmF1bHQnLCAuLi54WzBdLnZhbHVlcy5tYXAoeSA9PiB5WzBdKV0pKTtcclxuICB9XHJcblxyXG4gIGdldCBtZWFzdXJlbWVudHMkKCkge1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnByb3h5KCBgU0hPVyBNRUFTVVJFTUVOVFNgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoeCA9PiBbLi4ueFswXS52YWx1ZXNdLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjLmNvbmNhdCh2YWx1ZSksIFtdKSkpXHJcbiAgfVxyXG5cclxuICB0YWdPcGVyYXRvcnMkKCB0YWc6VGFnICkge1xyXG4gICAgY29uc3QgaXNSZWdleFZhbHVlID0gaXNSZWdleCggdGFnLnZhbHVlICk7XHJcbiAgICBjb25zdCBhbGxPcGVyYXRvcnMgPSBPYmplY3QudmFsdWVzKFRhZ09wZXJhdG9yKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gaXNSZWdleFZhbHVlID8gYWxsT3BlcmF0b3JzLnNsaWNlKCA0LCA2ICkgOiBhbGxPcGVyYXRvcnMuc2xpY2UoIDAsIDQgKVxyXG5cclxuICAgIHJldHVybiBvZiggcmVzdWx0ICk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFnQWRkS2V5cyQoKSB7XHJcbiAgICBjb25zdCBxID0gKHRoaXMucXVlcnkubWVhc3VyZW1lbnQpID9cclxuICAgICAgYFNIT1cgVEFHIEtFWVMgZnJvbSAke3RoaXMucXVlcnkubWVhc3VyZW1lbnR9YCA6XHJcbiAgICAgIGBTSE9XIFRBRyBLRVlTYDtcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAucHJveHkoIHEgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoeCA9PiAoIXgubGVuZ3RoKSA/IFtdIDogWy4uLnhbMF0udmFsdWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjLmNvbmNhdCh2YWx1ZSksIFtdKV0pKTtcclxuICB9XHJcblxyXG4gIGdldCB0YWdFZGl0S2V5cyQoKSB7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAudGFnQWRkS2V5cyRcclxuICAgICAgLnBpcGUoIFxyXG4gICAgICAgIG1hcCggeCA9PiBbdGhpcy5SRU1PVkUsIC4uLnggXSApKTtcclxuICB9XHJcblxyXG4gIHRhZ1ZhbHVlcyQoIHRhZzogVGFnICkge1xyXG4gICAgY29uc3QgcSA9IGBTSE9XIFRBRyBWQUxVRVMgV0lUSCBLRVk9JHt0YWcua2V5fWA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnByb3h5KCBxIClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHggPT4geFswXT8udmFsdWVzLm1hcCh5ID0+IHlbMV0pKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZGl0aW9ucyQoKSB7XHJcbiAgICByZXR1cm4gb2YoT2JqZWN0LnZhbHVlcyhUYWdDb25kaXRpb24pKTtcclxuICB9XHJcblxyXG4gIGdldCBjYW5BZGRUYWcoKXtcclxuICAgIGNvbnN0IHRhZ3MgPSB0aGlzLnF1ZXJ5LnRhZ3M7XHJcbiAgICByZXR1cm4gKCAhdGFncz8ubGVuZ3RoICkgfHwgKCB0YWdzWyB0YWdzLmxlbmd0aCAtIDEgXSApLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoIFxyXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwsXHJcbiAgICBwdWJsaWMgZHNTZXJ2aWNlOiBEYXRhU291cmNlU2VydmljZSApe1xyXG4gICAgICBzdXBlciggcGFuZWwsIGRzU2VydmljZSApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMucXVlcnkucG9saWN5KSB7XHJcbiAgICAgIHRoaXMucXVlcnkucG9saWN5ID0gdGhpcy5ERUZBVUxUX1BPTElDWTtcclxuICAgIH1cclxuICB9XHJcbiBcclxuICBvblRhZ0FkZEtleVBpY2soIGs6IHN0cmluZyApIHtcclxuICAgIHZhciB0YWcgPSBuZXcgVGFnKCk7XHJcbiAgICB0YWcua2V5ID0gaztcclxuICAgIHRoaXMucXVlcnkudGFncy5wdXNoKCB0YWcgKTtcclxuICB9XHJcblxyXG4gIG9uVGFnS2V5RWRpdFBpY2soIGs6IHN0cmluZywgdDogVGFnICkge1xyXG4gICAgaWYoIGsgPT0gdGhpcy5SRU1PVkUgKXtcclxuICAgICAgdGhpcy5xdWVyeS50YWdzID0gdGhpcy5xdWVyeS50YWdzLmZpbHRlciggeCA9PiB4ICE9IHQgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVGFnVmFsdWVQaWNrKHQ6IFRhZywgdjogc3RyaW5nKSB7XHJcbiAgICBpZiggdiA9PT0gdC52YWx1ZSApe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9sZFZhbHVlSXNSZWdFeCA9IGlzUmVnZXgoIHQudmFsdWUgKTtcclxuICAgIHQudmFsdWUgPSB2O1xyXG4gICAgbGV0IG5ld1ZhbHVlSXNSZWdFeCA9IGlzUmVnZXgoIHQudmFsdWUgKTtcclxuXHJcbiAgICBjb25zdCByZWdFeENoYW5nZWQgPSAoIG9sZFZhbHVlSXNSZWdFeCAhPSBuZXdWYWx1ZUlzUmVnRXggKTtcclxuXHJcbiAgICBpZiggcmVnRXhDaGFuZ2VkICl7XHJcbiAgICAgIHQub3BlcmF0b3IgPSAoIG5ld1ZhbHVlSXNSZWdFeCApID8gVGFnT3BlcmF0b3IuUmVnRXhFcSA6IFRhZ09wZXJhdG9yLkVxO1xyXG4gICAgfSBcclxuXHJcbiAgICB0aGlzLm5lZWRSZWJ1aWxkKClcclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIiAgPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCAgcXVlcnkta2V5d29yZCB3aWR0aC03XCIgPlxyXG5cdFx0XHRGUk9NXHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciBcclxuXHRcdFsobmdNb2RlbCldPVwicXVlcnkucG9saWN5XCJcclxuXHRcdFtyZXF1ZXN0XT1cInJldGVudGlvblBvbGljaWVzJFwiXHJcblx0XHQocGljayk9XCJuZWVkUmVidWlsZCgpXCIgPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHRcclxuXHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciBcclxuXHRcdHBsYWNlaG9sZGVyPVwic2VsZWN0IG1lYXN1cmVtZW50XCJcclxuXHRcdFsobmdNb2RlbCldPSdxdWVyeS5tZWFzdXJlbWVudCdcclxuXHRcdFtyZXF1ZXN0XT1cIm1lYXN1cmVtZW50cyRcIlxyXG5cdFx0KHBpY2spPVwibmVlZFJlYnVpbGQoKVwiPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIiAgPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkXCIgPlxyXG5cdFx0XHRXSEVSRVxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdCBvZiBxdWVyeS50YWdzO2xldCBpID0gaW5kZXhcIiA+XHJcblxyXG5cdFx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgXHJcblx0XHRcdFtoaWRkZW5dPVwiIShpID4gMCAmJiB0LmtleSlcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cInQuY29uZGl0aW9uXCJcclxuXHRcdFx0W3JlcXVlc3RdPVwiY29uZGl0aW9ucyRcIiBcclxuXHRcdFx0dmFsdWVDbGFzcz1cInF1ZXJ5LWtleXdvcmRcIlxyXG5cdFx0XHQocGljayk9XCJuZWVkUmVidWlsZCgpXCI+XHJcblx0XHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG5cdFx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJ0LmtleVwiXHJcblx0XHRcdFtyZXF1ZXN0XT1cInRhZ0VkaXRLZXlzJFwiXHJcblx0XHRcdChwaWNrKT1cIm9uVGFnS2V5RWRpdFBpY2soICRldmVudCwgdCApO25lZWRSZWJ1aWxkKClcIj5cclxuXHRcdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0XHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciBcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJ0Lm9wZXJhdG9yXCJcclxuXHRcdFx0W3JlcXVlc3RdPVwidGFnT3BlcmF0b3JzJCggdCApXCJcclxuXHRcdFx0dmFsdWVDbGFzcz1cInF1ZXJ5LXNlZ21lbnQtb3BlcmF0b3JcIlxyXG5cdFx0XHQocGljayk9XCJuZWVkUmVidWlsZCgpXCI+XHJcblx0XHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG4gICAgPGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwic2VsZWN0IHRhZyB2YWx1ZVwiIFxyXG4gICAgICBbdmFsdWVdPSd0LnZhbHVlJ1xyXG5cdFx0XHRbcmVxdWVzdF09XCJ0YWdWYWx1ZXMkKCB0IClcIlxyXG5cdFx0XHRbZm9yY2VTZWxlY3Rpb25dPVwiZmFsc2VcIlxyXG5cdFx0XHQocGljayk9XCJvblRhZ1ZhbHVlUGljayggdCwgJGV2ZW50ICk7XCIgPlxyXG5cdFx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgKm5nSWY9XCJjYW5BZGRUYWdcIlxyXG5cdFx0cGxhY2Vob2xkZXI9XCJmYSBmYS1wbHVzXCIgXHJcblx0XHRbcmVxdWVzdF09XCJ0YWdBZGRLZXlzJFwiXHJcblx0XHRbcmVhZG9ubHldPVwidHJ1ZVwiXHJcblx0XHQocGljayk9XCJvblRhZ0FkZEtleVBpY2soICRldmVudCApO1wiPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0tbGFiZWwgZ2YtZm9ybS1sYWJlbC0tZ3Jvd1wiPjwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj4iXX0=