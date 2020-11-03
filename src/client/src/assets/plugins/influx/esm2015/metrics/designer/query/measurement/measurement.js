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
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const t_r1 = i0.ɵɵnextContext().$implicit; return t_r1.operator = $event; })("pick", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_pick_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.change.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", t_r1.operator)("request", ctx_r3.tagOperators$(t_r1));
} }
function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 14);
    i0.ɵɵlistener("pick", function MeasurementEditorComponent_ng_container_9_ed_autocomplete_picker_4_Template_ed_autocomplete_picker_pick_0_listener($event) { i0.ɵɵrestoreView(_r12); const t_r1 = i0.ɵɵnextContext().$implicit; const ctx_r10 = i0.ɵɵnextContext(); ctx_r10.onTagValuePick(t_r1, $event); return ctx_r10.change.emit(); });
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
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const t_r1 = ctx.$implicit; return t_r1.condition = $event; })("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.change.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ed-autocomplete-picker", 10);
    i0.ɵɵlistener("pick", function MeasurementEditorComponent_ng_container_9_Template_ed_autocomplete_picker_pick_2_listener($event) { i0.ɵɵrestoreView(_r15); const t_r1 = ctx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); ctx_r17.onTagKeyPick(t_r1, $event); return ctx_r17.change.emit(); });
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
    i0.ɵɵproperty("value", t_r1.key)("request", ctx_r0.tagKeys$);
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
            t.key = k;
            t.value = '';
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
MeasurementEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MeasurementEditorComponent, selectors: [["measurement-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 5, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select measurement", 3, "ngModel", "request", "ngModelChange", "pick"], [1, "gf-form-label", "query-keyword"], [4, "ngFor", "ngForOf"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], ["valueClass", "query-keyword", 3, "hidden", "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "fa fa-plus", 3, "value", "request", "pick"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick", 4, "ngIf"], ["placeholder", "select tag value", 3, "value", "request", "pick", 4, "ngIf"], ["valueClass", "query-segment-operator", 3, "ngModel", "request", "ngModelChange", "pick"], ["placeholder", "select tag value", 3, "value", "request", "pick"]], template: function MeasurementEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵtext(3, " FROM ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-autocomplete-picker", 3);
        i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.query.policy = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_4_listener() { return ctx.change.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-autocomplete-picker", 4);
        i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_5_listener($event) { return ctx.query.measurement = $event; })("pick", function MeasurementEditorComponent_Template_ed_autocomplete_picker_pick_5_listener($event) { ctx.resetTags(); ctx.change.emit(); return $event; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvbWVhc3VyZW1lbnQvbWVhc3VyZW1lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvbWVhc3VyZW1lbnQvbWVhc3VyZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQTRCLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDdUNqRCxrREFLeUI7SUFKeEIsaVJBQXdCLDJNQUdoQixvQkFBYSxJQUhHO0lBSXpCLGlCQUF5Qjs7OztJQUp4Qix1Q0FBd0IsdUNBQUE7Ozs7SUFNdkIsa0RBS3VCO0lBRHhCLGdUQUFxQyxxQkFBYSxJQUFFO0lBQ3JELGlCQUF5Qjs7OztJQUhyQixrQ0FBaUIsb0NBQUE7Ozs7SUExQnRCLDZCQUVDO0lBQUEsaURBTXlCO0lBSnhCLDJPQUF5QixtTEFHakIscUJBQWEsSUFISTtJQUkxQixpQkFBeUI7SUFFekIsa0RBS3lCO0lBRHhCLHNRQUFtQyxxQkFBYSxJQUFFO0lBQ25ELGlCQUF5QjtJQUV6QixpSUFLQTtJQUVFLGlJQUtG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QUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6RTtRQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOztvR0E1SFUsMEJBQTBCLHVCQW9EMUIsV0FBVzsrREFwRFgsMEJBQTBCO1FDWHZDLDhCQUVDO1FBQUEsOEJBQ0M7UUFBQSxnQ0FDQztRQUFBLHNCQUNEO1FBQUEsaUJBQVE7UUFDVCxpQkFBTTtRQUVOLGlEQUl5QjtRQUh4QiwwS0FBMEIsd0dBRWxCLGlCQUFhLElBRks7UUFHM0IsaUJBQXlCO1FBRXpCLGlEQUt5QjtRQUh4QiwrS0FBK0IsdUdBRXZCLGVBQVcsRUFBRSxpQkFBYSxtQkFGSDtRQUdoQyxpQkFBeUI7UUFFekIsOEJBQ0M7UUFBQSxnQ0FDQztRQUFBLHVCQUNEO1FBQUEsaUJBQVE7UUFDVCxpQkFBTTtRQUVOLDZGQUVDO1FBK0JELCtCQUNDO1FBQUEsMEJBQXFEO1FBQ3RELGlCQUFNO1FBQ1AsaUJBQU07O1FBdERKLGVBQTBCO1FBQTFCLDBDQUEwQixtQ0FBQTtRQU8xQixlQUErQjtRQUEvQiwrQ0FBK0IsOEJBQUE7UUFXbEIsZUFBMEM7UUFBMUMsd0NBQTBDOztrRERoQjVDLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLG9CQUFvQjthQUNsQzs7c0JBcURJLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlLCBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFRhZywgVGFnQ29uZGl0aW9uLCBUYWdPcGVyYXRvciB9IGZyb20gJy4uLy4uLy4uL21ldHJpY3MubSc7XHJcbmltcG9ydCB7IEJhc2VRdWVyeUNvbXBvbmVudCB9IGZyb20gJy4uL3F1ZXJ5LWJhc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZWFzdXJlbWVudC1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWFzdXJlbWVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVhc3VyZW1lbnRFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlUXVlcnlDb21wb25lbnQgIHtcclxuXHJcbiAgcmVhZG9ubHkgREVGQVVMVF9QT0xJQ1kgPSAnZGVmYXVsdCc7XHJcblxyXG4gIGdldCByZXRlbnRpb25Qb2xpY2llcyQoKSB7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAucHJveHkoIGBTSE9XIFJFVEVOVElPTiBQT0xJQ0lFU2ApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCh4ID0+IFsnZGVmYXVsdCcsIC4uLnhbMF0udmFsdWVzLm1hcCh5ID0+IHlbMF0pXSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1lYXN1cmVtZW50cyQoKSB7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAucHJveHkoIGBTSE9XIE1FQVNVUkVNRU5UU2ApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCh4ID0+IFsuLi54WzBdLnZhbHVlc10ucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MuY29uY2F0KHZhbHVlKSwgW10pKSlcclxuICB9XHJcblxyXG4gIHRhZ09wZXJhdG9ycyQoIHRhZzpUYWcgKSB7XHJcbiAgICBjb25zdCBpc1JlZ2V4VmFsdWUgPSB0aGlzLmlzUmVnZXgoIHRhZy52YWx1ZSApO1xyXG4gICAgY29uc3QgYWxsT3BlcmF0b3JzID0gT2JqZWN0LnZhbHVlcyhUYWdPcGVyYXRvcik7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IGlzUmVnZXhWYWx1ZSA/IGFsbE9wZXJhdG9ycy5zbGljZSggNCwgNiApIDogYWxsT3BlcmF0b3JzLnNsaWNlKCAwLCA0IClcclxuXHJcbiAgICByZXR1cm4gb2YoIHJlc3VsdCApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRhZ0tleXMkKCkge1xyXG4gICAgY29uc3QgcSA9ICh0aGlzLnF1ZXJ5Lm1lYXN1cmVtZW50KSA/XHJcbiAgICAgIGBTSE9XIFRBRyBLRVlTIGZyb20gJHt0aGlzLnF1ZXJ5Lm1lYXN1cmVtZW50fWAgOlxyXG4gICAgICBgU0hPVyBUQUcgS0VZU2A7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnByb3h5KCBxIClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHggPT4gWy4uLnhbMF0udmFsdWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjLmNvbmNhdCh2YWx1ZSksIFtdKSwgdGhpcy5SRU1PVkVdKSlcclxuICB9XHJcblxyXG4gIHRhZ1ZhbHVlcyQoIHRhZzogVGFnICkge1xyXG4gICAgY29uc3QgcSA9IGBTSE9XIFRBRyBWQUxVRVMgIFdJVEggS0VZPSR7dGFnLmtleX1gO1xyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgICAgIC5wcm94eSggcSApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCh4ID0+IHhbMF0udmFsdWVzLm1hcCh5ID0+IHlbMV0pKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZGl0aW9ucyQoKSB7XHJcbiAgICByZXR1cm4gb2YoT2JqZWN0LnZhbHVlcyhUYWdDb25kaXRpb24pKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBcclxuICAgIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsLFxyXG4gICAgcHVibGljIGRzU2VydmljZTogRGF0YVNvdXJjZVNlcnZpY2UgKXtcclxuICAgICAgc3VwZXIoIHBhbmVsLCBkc1NlcnZpY2UgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy90aGlzLnJlc2V0VGFncygpO1xyXG5cclxuICAgIGlmKCAhdGhpcy50YWdzPy5sZW5ndGggKXtcclxuICAgICAgdGhpcy50YWdzLnB1c2gobmV3IFRhZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMucXVlcnkucG9saWN5KSB7XHJcbiAgICAgIHRoaXMucXVlcnkucG9saWN5ID0gdGhpcy5ERUZBVUxUX1BPTElDWTtcclxuICAgIH1cclxuICB9XHJcbiBcclxuICBpc1JlZ2V4KGV4cHIpIHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIG5ldyBSZWdFeHAoZXhwcik7XHJcblxyXG4gICAgICBpc1ZhbGlkID0gKCBleHByLnN0YXJ0c1dpdGgoICcvJyApICYmIGV4cHIuZW5kc1dpdGgoICcvJyApICApXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9XHJcblxyXG4gIHJlc2V0VGFncygpIHtcclxuICAgIHRoaXMucXVlcnkudGFncyA9IFtdO1xyXG4gICAgdGhpcy50YWdzLnB1c2gobmV3IFRhZygpKTtcclxuICB9XHJcblxyXG4gIG9uVGFnS2V5UGljayggdDogVGFnLCBrOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWdzLmluZGV4T2YoIHQgKTsgIFxyXG5cclxuICAgIGlmIChrPy5zdGFydHNXaXRoKHRoaXMuUkVNT1ZFKSkge1xyXG4gICAgICB0aGlzLnF1ZXJ5LnRhZ3MgPSB0aGlzLnRhZ3MuZmlsdGVyKCB4ID0+IHggIT0gdCApO1xyXG5cclxuICAgICAgaWYgKDAgPT09IHRoaXMudGFncy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0VGFncygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0LmtleSA9IGs7XHJcbiAgICAgIHQudmFsdWUgPSAnJztcclxuICBcclxuICAgICAgY29uc3QgbGVuID0gdGhpcy50YWdzLmxlbmd0aDtcclxuICBcclxuICAgICAgaWYgKCBpbmRleCA9PT0gbGVuIC0gMiAmJiB0aGlzLnRhZ3NbbGVuIC0gMV0ua2V5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vIGlmIHZhbHVlIGlzIHNlbGVjdGVkIHJlbW92ZSBuZXcgdGFnIChmb3IgcGx1cyBzaWduKVxyXG4gICAgICAgIHRoaXMudGFncy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25UYWdWYWx1ZVBpY2sodDogVGFnLCB2OiBzdHJpbmcpIHtcclxuICAgIGxldCBvbGRWYWx1ZUlzUmVnRXggPSB0aGlzLmlzUmVnZXgoIHQudmFsdWUgKTtcclxuICAgIHQudmFsdWUgPSB2O1xyXG4gICAgbGV0IG5ld1ZhbHVlSXNSZWdFeCA9IHRoaXMuaXNSZWdleCggdC52YWx1ZSApO1xyXG5cclxuICAgIGNvbnN0IHJlZ0V4Q2hhbmdlZCA9ICggb2xkVmFsdWVJc1JlZ0V4ICE9IG5ld1ZhbHVlSXNSZWdFeCApO1xyXG5cclxuICAgIGlmKCByZWdFeENoYW5nZWQgKXtcclxuICAgICAgdC5vcGVyYXRvciA9ICggbmV3VmFsdWVJc1JlZ0V4ICkgPyBUYWdPcGVyYXRvci5SZWdFeEVxIDogVGFnT3BlcmF0b3IuRXE7XHJcbiAgICB9IFxyXG5cclxuICAgIGlmICh0aGlzLnRhZ3MuaW5kZXhPZiggdCApID09PSB0aGlzLnRhZ3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjb25zdCBudCA9IG5ldyBUYWcoKTtcclxuICAgICAgdGhpcy50YWdzLnB1c2gobnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiICA+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsICBxdWVyeS1rZXl3b3JkIHdpZHRoLTdcIiA+XHJcblx0XHRcdEZST01cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxlZC1hdXRvY29tcGxldGUtcGlja2VyIFxyXG5cdFx0WyhuZ01vZGVsKV09XCJxdWVyeS5wb2xpY3lcIlxyXG5cdFx0W3JlcXVlc3RdPVwicmV0ZW50aW9uUG9saWNpZXMkXCJcclxuXHRcdChwaWNrKT1cImNoYW5nZS5lbWl0KCk7XCIgPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHRcclxuXHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciBcclxuXHRcdHBsYWNlaG9sZGVyPVwic2VsZWN0IG1lYXN1cmVtZW50XCJcclxuXHRcdFsobmdNb2RlbCldPSdxdWVyeS5tZWFzdXJlbWVudCdcclxuXHRcdFtyZXF1ZXN0XT1cIm1lYXN1cmVtZW50cyRcIlxyXG5cdFx0KHBpY2spPVwicmVzZXRUYWdzKCk7IGNoYW5nZS5lbWl0KCk7KCAkZXZlbnQgKVwiPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIiAgPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCAgcXVlcnkta2V5d29yZFwiID5cclxuXHRcdFx0V0hFUkVcclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHQgb2YgcXVlcnkudGFncztsZXQgaSA9IGluZGV4XCIgPlxyXG5cclxuXHRcdDxlZC1hdXRvY29tcGxldGUtcGlja2VyIFxyXG5cdFx0XHRbaGlkZGVuXT1cIiEoaSA+IDAgJiYgdC5rZXkpXCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJ0LmNvbmRpdGlvblwiXHJcblx0XHRcdFtyZXF1ZXN0XT1cImNvbmRpdGlvbnMkXCIgXHJcblx0XHRcdHZhbHVlQ2xhc3M9XCJxdWVyeS1rZXl3b3JkXCJcclxuXHRcdFx0KHBpY2spPVwiY2hhbmdlLmVtaXQoKVwiPlxyXG5cdFx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuXHRcdDxlZC1hdXRvY29tcGxldGUtcGlja2VyXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiZmEgZmEtcGx1c1wiIFxyXG4gICAgICBbdmFsdWVdPVwidC5rZXlcIlxyXG5cdFx0XHRbcmVxdWVzdF09XCJ0YWdLZXlzJFwiXHJcblx0XHRcdChwaWNrKT1cIm9uVGFnS2V5UGljayggdCwgJGV2ZW50ICk7IGNoYW5nZS5lbWl0KCk7XCI+XHJcblx0XHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG5cdFx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgKm5nSWY9XCJ0LmtleVwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwidC5vcGVyYXRvclwiXHJcblx0XHRcdFtyZXF1ZXN0XT1cInRhZ09wZXJhdG9ycyQoIHQgKVwiXHJcblx0XHRcdHZhbHVlQ2xhc3M9XCJxdWVyeS1zZWdtZW50LW9wZXJhdG9yXCJcclxuXHRcdFx0KHBpY2spPVwiY2hhbmdlLmVtaXQoKVwiPlxyXG5cdFx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuICAgIDxlZC1hdXRvY29tcGxldGUtcGlja2VyICpuZ0lmPVwidC5rZXlcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cInNlbGVjdCB0YWcgdmFsdWVcIiBcclxuICAgICAgW3ZhbHVlXT0ndC52YWx1ZSdcclxuXHRcdFx0W3JlcXVlc3RdPVwidGFnVmFsdWVzJCggdCApXCJcclxuXHRcdFx0KHBpY2spPVwib25UYWdWYWx1ZVBpY2soIHQsICRldmVudCApOyBjaGFuZ2UuZW1pdCgpO1wiID5cclxuXHRcdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3dcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+Il19