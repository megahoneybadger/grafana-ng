import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tag, TagCondition, TagOperator } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 13);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const t_r1 = i0.ɵɵnextContext().$implicit; return t_r1.operator = $event; })("pick", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_pick_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.needRebuild(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", t_r1.operator)("request", ctx_r3.tagOperators$(t_r1));
} }
function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 14);
    i0.ɵɵlistener("pick", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template_ed_autocomplete_picker_pick_0_listener($event) { i0.ɵɵrestoreView(_r12); const t_r1 = i0.ɵɵnextContext().$implicit; const ctx_r10 = i0.ɵɵnextContext(); ctx_r10.onTagValuePick(t_r1, $event); return ctx_r10.needRebuild(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", t_r1.value)("request", ctx_r4.tagValues$(t_r1));
} }
function MeasurementEditorComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ed-autocomplete-picker", 9);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const t_r1 = ctx.$implicit; return t_r1.condition = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ed-autocomplete-picker", 10);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r15); const t_r1 = ctx.$implicit; return t_r1.key = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_2_listener($event) { i0.ɵɵrestoreView(_r15); const t_r1 = ctx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); ctx_r18.onTagKeyPick(t_r1, $event); return ctx_r18.needRebuild(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template, 1, 2, "ed-autocomplete-picker", 11);
    i0.ɵɵtemplate(4, MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template, 1, 2, "ed-autocomplete-picker", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", !(i_r2 > 0 && t_r1.key))("ngModel", t_r1.condition)("request", ctx_r0.conditions$);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", t_r1.key)("request", ctx_r0.tagKeys$);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", t_r1.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", t_r1.key);
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
        const isRegexValue = this.isRegex(tag.value);
        const allOperators = Object.values(TagOperator);
        let result = isRegexValue ? allOperators.slice(4, 6) : allOperators.slice(0, 4);
        return of(result);
    }
    get tagKeys$() {
        const q = (this.query.measurement) ?
            `SHOW TAG KEYS from ${this.query.measurement}` :
            `SHOW TAG KEYS`;
        return this
            .proxy(q)
            .pipe(map(x => [...x[0].values.reduce((acc, value) => acc.concat(value), []), this.REMOVE]));
    }
    tagValues$(tag) {
        const q = `SHOW TAG VALUES  WITH KEY=${tag.key}`;
        return this
            .proxy(q)
            .pipe(map(x => x[0].values.map(y => y[1])));
    }
    get conditions$() {
        return of(Object.values(TagCondition));
    }
    ngOnInit() {
        //this.resetTags();
        var _a;
        if (!((_a = this.tags) === null || _a === void 0 ? void 0 : _a.length)) {
            this.tags.push(new Tag());
        }
        if (!this.query.policy) {
            this.query.policy = this.DEFAULT_POLICY;
        }
    }
    isRegex(expr) {
        let isValid = true;
        try {
            new RegExp(expr);
            isValid = (expr.startsWith('/') && expr.endsWith('/'));
        }
        catch (e) {
            isValid = false;
        }
        return isValid;
    }
    resetTags() {
        this.query.tags = [];
        this.tags.push(new Tag());
    }
    onTagKeyPick(t, k) {
        const index = this.tags.indexOf(t);
        if (k === null || k === void 0 ? void 0 : k.startsWith(this.REMOVE)) {
            this.query.tags = this.tags.filter(x => x != t);
            if (0 === this.tags.length) {
                this.resetTags();
            }
        }
        else {
            //t.key = k;
            //t.value = '';
            const len = this.tags.length;
            if (index === len - 2 && this.tags[len - 1].key.length === 0) {
                // if value is selected remove new tag (for plus sign)
                this.tags.pop();
            }
        }
    }
    onTagValuePick(t, v) {
        let oldValueIsRegEx = this.isRegex(t.value);
        t.value = v;
        let newValueIsRegEx = this.isRegex(t.value);
        const regExChanged = (oldValueIsRegEx != newValueIsRegEx);
        if (regExChanged) {
            t.operator = (newValueIsRegEx) ? TagOperator.RegExEq : TagOperator.Eq;
        }
        if (this.tags.indexOf(t) === this.tags.length - 1) {
            const nt = new Tag();
            this.tags.push(nt);
        }
    }
}
MeasurementEditorComponent.ɵfac = function MeasurementEditorComponent_Factory(t) { return new (t || MeasurementEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
MeasurementEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MeasurementEditorComponent, selectors: [["measurement-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 5, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select measurement", 3, "ngModel", "request", "ngModelChange", "pick"], [1, "gf-form-label", "query-keyword"], [4, "ngFor", "ngForOf"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], ["valueClass", "query-keyword", 3, "hidden", "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "fa fa-plus", 3, "ngModel", "request", "ngModelChange", "pick"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick", 4, "ngIf"], ["placeholder", "select tag value", 3, "value", "request", "pick", 4, "ngIf"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select tag value", 3, "value", "request", "pick"]], template: function MeasurementEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_5_listener($event) { return ctx.query.measurement = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_5_listener() { ctx.resetTags(); return ctx.needRebuild(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵelementStart(7, "label", 5);
        i0.ɵɵtext(8, " WHERE ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, MeasurementEditorComponent_ng_container_9_Template, 5, 7, "ng-container", 6);
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelement(11, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.query.policy)("request", ctx.retentionPolicies$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.query.measurement)("request", ctx.measurements$);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.query.tags);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvbWVhc3VyZW1lbnQvbWVhc3VyZW1lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvbWVhc3VyZW1lbnQvbWVhc3VyZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQTRCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDdUNqRCxrREFLeUI7SUFKeEIsaVJBQXdCLG1PQUFBO0lBSXpCLGlCQUF5Qjs7OztJQUp4Qix1Q0FBd0IsdUNBQUE7Ozs7SUFNdkIsa0RBS3VCO0lBRHhCLHlVQUFtRDtJQUNwRCxpQkFBeUI7Ozs7SUFIckIsa0NBQWlCLG9DQUFBOzs7O0lBMUJ0Qiw2QkFFQztJQUFBLGlEQU15QjtJQUp4QiwyT0FBeUIsNE1BQUE7SUFJMUIsaUJBQXlCO0lBRXpCLGtEQUt5QjtJQUhyQixxT0FBbUIsa1JBQUE7SUFHdkIsaUJBQXlCO0lBRXpCLGlJQUtBO0lBRUUsaUlBS0Y7SUFFRCwwQkFBZTs7Ozs7SUE1QmIsZUFBNEI7SUFBNUIsZ0RBQTRC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QUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOztvR0FoSVUsMEJBQTBCLHVCQW9EMUIsV0FBVzsrREFwRFgsMEJBQTBCO1FDWHZDLDhCQUVDO1FBQUEsOEJBQ0M7UUFBQSxnQ0FDQztRQUFBLHNCQUNEO1FBQUEsaUJBQVE7UUFDVCxpQkFBTTtRQUVOLGlEQUl5QjtRQUh4QiwwS0FBMEIsd0dBRWxCLGlCQUFhLElBRks7UUFHM0IsaUJBQXlCO1FBRXpCLGlEQUt5QjtRQUh4QiwrS0FBK0IsaUdBRXZCLGVBQVcsU0FBRSxpQkFBYSxJQUZIO1FBR2hDLGlCQUF5QjtRQUV6Qiw4QkFDQztRQUFBLGdDQUNDO1FBQUEsdUJBQ0Q7UUFBQSxpQkFBUTtRQUNULGlCQUFNO1FBRU4sNkZBRUM7UUErQkQsK0JBQ0M7UUFBQSwwQkFBcUQ7UUFDdEQsaUJBQU07UUFDUCxpQkFBTTs7UUF0REosZUFBMEI7UUFBMUIsMENBQTBCLG1DQUFBO1FBTzFCLGVBQStCO1FBQS9CLCtDQUErQiw4QkFBQTtRQVdsQixlQUEwQztRQUExQyx3Q0FBMEM7O2tERGhCNUMsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDOztzQkFxREksTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UsIFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVGFnLCBUYWdDb25kaXRpb24sIFRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vbWV0cmljcy5tJztcclxuaW1wb3J0IHsgQmFzZVF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vcXVlcnktYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21lYXN1cmVtZW50LWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lYXN1cmVtZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZWFzdXJlbWVudEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VRdWVyeUNvbXBvbmVudCAge1xyXG5cclxuICByZWFkb25seSBERUZBVUxUX1BPTElDWSA9ICdkZWZhdWx0JztcclxuXHJcbiAgZ2V0IHJldGVudGlvblBvbGljaWVzJCgpIHtcclxuICAgIHJldHVybiB0aGlzXHJcbiAgICAgIC5wcm94eSggYFNIT1cgUkVURU5USU9OIFBPTElDSUVTYClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHggPT4gWydkZWZhdWx0JywgLi4ueFswXS52YWx1ZXMubWFwKHkgPT4geVswXSldKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbWVhc3VyZW1lbnRzJCgpIHtcclxuICAgIHJldHVybiB0aGlzXHJcbiAgICAgIC5wcm94eSggYFNIT1cgTUVBU1VSRU1FTlRTYClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHggPT4gWy4uLnhbMF0udmFsdWVzXS5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IGFjYy5jb25jYXQodmFsdWUpLCBbXSkpKVxyXG4gIH1cclxuXHJcbiAgdGFnT3BlcmF0b3JzJCggdGFnOlRhZyApIHtcclxuICAgIGNvbnN0IGlzUmVnZXhWYWx1ZSA9IHRoaXMuaXNSZWdleCggdGFnLnZhbHVlICk7XHJcbiAgICBjb25zdCBhbGxPcGVyYXRvcnMgPSBPYmplY3QudmFsdWVzKFRhZ09wZXJhdG9yKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gaXNSZWdleFZhbHVlID8gYWxsT3BlcmF0b3JzLnNsaWNlKCA0LCA2ICkgOiBhbGxPcGVyYXRvcnMuc2xpY2UoIDAsIDQgKVxyXG5cclxuICAgIHJldHVybiBvZiggcmVzdWx0ICk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFnS2V5cyQoKSB7XHJcbiAgICBjb25zdCBxID0gKHRoaXMucXVlcnkubWVhc3VyZW1lbnQpID9cclxuICAgICAgYFNIT1cgVEFHIEtFWVMgZnJvbSAke3RoaXMucXVlcnkubWVhc3VyZW1lbnR9YCA6XHJcbiAgICAgIGBTSE9XIFRBRyBLRVlTYDtcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAucHJveHkoIHEgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoeCA9PiBbLi4ueFswXS52YWx1ZXMucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MuY29uY2F0KHZhbHVlKSwgW10pLCB0aGlzLlJFTU9WRV0pKVxyXG4gIH1cclxuXHJcbiAgdGFnVmFsdWVzJCggdGFnOiBUYWcgKSB7XHJcbiAgICBjb25zdCBxID0gYFNIT1cgVEFHIFZBTFVFUyAgV0lUSCBLRVk9JHt0YWcua2V5fWA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnByb3h5KCBxIClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHggPT4geFswXS52YWx1ZXMubWFwKHkgPT4geVsxXSkpKTtcclxuICB9XHJcblxyXG4gIGdldCBjb25kaXRpb25zJCgpIHtcclxuICAgIHJldHVybiBvZihPYmplY3QudmFsdWVzKFRhZ0NvbmRpdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoIFxyXG4gICAgQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwsXHJcbiAgICBwdWJsaWMgZHNTZXJ2aWNlOiBEYXRhU291cmNlU2VydmljZSApe1xyXG4gICAgICBzdXBlciggcGFuZWwsIGRzU2VydmljZSApO1xyXG5cclxuICAgICAgXHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvL3RoaXMucmVzZXRUYWdzKCk7XHJcblxyXG4gICAgaWYoICF0aGlzLnRhZ3M/Lmxlbmd0aCApe1xyXG4gICAgICB0aGlzLnRhZ3MucHVzaChuZXcgVGFnKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5xdWVyeS5wb2xpY3kpIHtcclxuICAgICAgdGhpcy5xdWVyeS5wb2xpY3kgPSB0aGlzLkRFRkFVTFRfUE9MSUNZO1xyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIGlzUmVnZXgoZXhwcikge1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmV3IFJlZ0V4cChleHByKTtcclxuXHJcbiAgICAgIGlzVmFsaWQgPSAoIGV4cHIuc3RhcnRzV2l0aCggJy8nICkgJiYgZXhwci5lbmRzV2l0aCggJy8nICkgIClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRUYWdzKCkge1xyXG4gICAgdGhpcy5xdWVyeS50YWdzID0gW107XHJcbiAgICB0aGlzLnRhZ3MucHVzaChuZXcgVGFnKCkpO1xyXG4gIH1cclxuXHJcbiAgb25UYWdLZXlQaWNrKCB0OiBUYWcsIGs6IHN0cmluZykge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhZ3MuaW5kZXhPZiggdCApOyAgXHJcblxyXG4gICAgaWYgKGs/LnN0YXJ0c1dpdGgodGhpcy5SRU1PVkUpKSB7XHJcbiAgICAgIHRoaXMucXVlcnkudGFncyA9IHRoaXMudGFncy5maWx0ZXIoIHggPT4geCAhPSB0ICk7XHJcblxyXG4gICAgICBpZiAoMCA9PT0gdGhpcy50YWdzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRUYWdzKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vdC5rZXkgPSBrO1xyXG4gICAgICAvL3QudmFsdWUgPSAnJztcclxuICBcclxuICAgICAgY29uc3QgbGVuID0gdGhpcy50YWdzLmxlbmd0aDtcclxuICBcclxuICAgICAgaWYgKCBpbmRleCA9PT0gbGVuIC0gMiAmJiB0aGlzLnRhZ3NbbGVuIC0gMV0ua2V5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vIGlmIHZhbHVlIGlzIHNlbGVjdGVkIHJlbW92ZSBuZXcgdGFnIChmb3IgcGx1cyBzaWduKVxyXG4gICAgICAgIHRoaXMudGFncy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25UYWdWYWx1ZVBpY2sodDogVGFnLCB2OiBzdHJpbmcpIHtcclxuICAgIGxldCBvbGRWYWx1ZUlzUmVnRXggPSB0aGlzLmlzUmVnZXgoIHQudmFsdWUgKTtcclxuICAgIHQudmFsdWUgPSB2O1xyXG4gICAgbGV0IG5ld1ZhbHVlSXNSZWdFeCA9IHRoaXMuaXNSZWdleCggdC52YWx1ZSApO1xyXG5cclxuICAgIGNvbnN0IHJlZ0V4Q2hhbmdlZCA9ICggb2xkVmFsdWVJc1JlZ0V4ICE9IG5ld1ZhbHVlSXNSZWdFeCApO1xyXG5cclxuICAgIGlmKCByZWdFeENoYW5nZWQgKXtcclxuICAgICAgdC5vcGVyYXRvciA9ICggbmV3VmFsdWVJc1JlZ0V4ICkgPyBUYWdPcGVyYXRvci5SZWdFeEVxIDogVGFnT3BlcmF0b3IuRXE7XHJcbiAgICB9IFxyXG5cclxuICAgIGlmICh0aGlzLnRhZ3MuaW5kZXhPZiggdCApID09PSB0aGlzLnRhZ3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjb25zdCBudCA9IG5ldyBUYWcoKTtcclxuICAgICAgdGhpcy50YWdzLnB1c2gobnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiICA+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsICBxdWVyeS1rZXl3b3JkIHdpZHRoLTdcIiA+XHJcblx0XHRcdEZST01cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxlZC1hdXRvY29tcGxldGUtcGlja2VyIFxyXG5cdFx0WyhuZ01vZGVsKV09XCJxdWVyeS5wb2xpY3lcIlxyXG5cdFx0W3JlcXVlc3RdPVwicmV0ZW50aW9uUG9saWNpZXMkXCJcclxuXHRcdChwaWNrKT1cIm5lZWRSZWJ1aWxkKClcIiA+XHJcblx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cdFxyXG5cdDxlZC1hdXRvY29tcGxldGUtcGlja2VyIFxyXG5cdFx0cGxhY2Vob2xkZXI9XCJzZWxlY3QgbWVhc3VyZW1lbnRcIlxyXG5cdFx0WyhuZ01vZGVsKV09J3F1ZXJ5Lm1lYXN1cmVtZW50J1xyXG5cdFx0W3JlcXVlc3RdPVwibWVhc3VyZW1lbnRzJFwiXHJcblx0XHQocGljayk9XCJyZXNldFRhZ3MoKTsgbmVlZFJlYnVpbGQoKVwiPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIiAgPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkXCIgPlxyXG5cdFx0XHRXSEVSRVxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdCBvZiBxdWVyeS50YWdzO2xldCBpID0gaW5kZXhcIiA+XHJcblxyXG5cdFx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgXHJcblx0XHRcdFtoaWRkZW5dPVwiIShpID4gMCAmJiB0LmtleSlcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cInQuY29uZGl0aW9uXCJcclxuXHRcdFx0W3JlcXVlc3RdPVwiY29uZGl0aW9ucyRcIiBcclxuXHRcdFx0dmFsdWVDbGFzcz1cInF1ZXJ5LWtleXdvcmRcIlxyXG5cdFx0XHQocGljayk9XCJuZWVkUmVidWlsZCgpXCI+XHJcblx0XHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG5cdFx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJmYSBmYS1wbHVzXCIgXHJcbiAgICAgIFsobmdNb2RlbCldPVwidC5rZXlcIlxyXG5cdFx0XHRbcmVxdWVzdF09XCJ0YWdLZXlzJFwiXHJcblx0XHRcdChwaWNrKT1cIm9uVGFnS2V5UGljayggdCwgJGV2ZW50ICk7IG5lZWRSZWJ1aWxkKClcIj5cclxuXHRcdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0XHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciAqbmdJZj1cInQua2V5XCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJ0Lm9wZXJhdG9yXCJcclxuXHRcdFx0W3JlcXVlc3RdPVwidGFnT3BlcmF0b3JzJCggdCApXCJcclxuXHRcdFx0dmFsdWVDbGFzcz1cInF1ZXJ5LXNlZ21lbnQtb3BlcmF0b3JcIlxyXG5cdFx0XHQocGljayk9XCJuZWVkUmVidWlsZCgpXCI+XHJcblx0XHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG4gICAgPGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgKm5nSWY9XCJ0LmtleVwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwic2VsZWN0IHRhZyB2YWx1ZVwiIFxyXG4gICAgICBbdmFsdWVdPSd0LnZhbHVlJ1xyXG5cdFx0XHRbcmVxdWVzdF09XCJ0YWdWYWx1ZXMkKCB0IClcIlxyXG5cdFx0XHQocGljayk9XCJvblRhZ1ZhbHVlUGljayggdCwgJGV2ZW50ICk7IG5lZWRSZWJ1aWxkKClcIiA+XHJcblx0XHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS1ncm93XCI+PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PiJdfQ==