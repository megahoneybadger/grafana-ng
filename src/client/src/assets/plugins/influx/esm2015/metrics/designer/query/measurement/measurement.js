import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tag, TagCondition, TagOperator } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
const _c0 = function () { return { color: "#eb7b18" }; };
function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 13);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const t_r1 = i0.ɵɵnextContext().$implicit; return t_r1.operator = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", t_r1.operator)("valueStyle", i0.ɵɵpureFunction0(3, _c0))("request", ctx_r3.tagOperatorsRequest(t_r1));
} }
function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 14);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template_ed_autocomplete_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r11); const t_r1 = i0.ɵɵnextContext().$implicit; return t_r1.value = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("placeholder", "select tag value")("ngModel", t_r1.value)("request", ctx_r4.showTagValuesRequest(t_r1));
} }
const _c1 = function () { return { color: "#33b5e5 " }; };
function MeasurementEditorComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ed-autocomplete-picker", 9);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_Template_ed_autocomplete_picker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const t_r1 = ctx.$implicit; return t_r1.condition = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ed-autocomplete-picker", 10);
    i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_ng_container_8_Template_ed_autocomplete_picker_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r14); const t_r1 = ctx.$implicit; return t_r1.key = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_3_Template, 1, 4, "ed-autocomplete-picker", 11);
    i0.ɵɵtemplate(4, MeasurementEditorComponent_ng_container_8_ed_autocomplete_picker_4_Template, 1, 3, "ed-autocomplete-picker", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", !(i_r2 > 0 && t_r1.key))("ngModel", t_r1.condition)("valueStyle", i0.ɵɵpureFunction0(8, _c1))("request", ctx_r0.andOrRequest());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", t_r1.key)("request", ctx_r0.showTagKeysRequest());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", t_r1.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", t_r1.key);
} }
export class MeasurementEditorComponent extends BaseQueryComponent {
    constructor(dsService) {
        super();
        this.dsService = dsService;
        this.DEFAULT_POLICY = 'default';
    }
    ngOnInit() {
        //this.resetTags();
        var _a;
        if (!((_a = this.query.tags) === null || _a === void 0 ? void 0 : _a.length)) {
            this.query.tags.push(new Tag());
        }
        if (!this.query.policy) {
            this.query.policy = this.DEFAULT_POLICY;
        }
    }
    showRetentionPolicies() {
        return this
            .dsService
            .proxy(1, `SHOW RETENTION POLICIES`)
            .pipe(map(x => ['default', ...x[0].values.map(y => y[0])]));
    }
    showMeasurementsRequest() {
        return this
            .dsService
            .proxy(1, `SHOW MEASUREMENTS`)
            .pipe(map(x => [...x[0].values].reduce((acc, value) => acc.concat(value), [])));
    }
    tagOperatorsRequest(tag) {
        const isRegexValue = this.isRegex(tag.value);
        const allOperators = Object.values(TagOperator);
        let result = isRegexValue ? allOperators.slice(4, 6) : allOperators.slice(0, 4);
        return of(result);
    }
    showTagValuesRequest(tag) {
        const q = `SHOW TAG VALUES  WITH KEY=${tag.key}`;
        return this
            .dsService
            .proxy(1, q)
            .pipe(map(x => x[0].values.map(y => y[1])));
    }
    showTagKeysRequest() {
        const q = (this.query.measurement) ?
            `SHOW TAG KEYS from ${this.query.measurement}` :
            `SHOW TAG KEYS`;
        return this
            .dsService
            .proxy(1, q)
            .pipe(map(x => [...x[0].values.reduce((acc, value) => acc.concat(value), []), '--remove--']));
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
    andOrRequest() {
        return of(Object.values(TagCondition));
    }
}
MeasurementEditorComponent.ɵfac = function MeasurementEditorComponent_Factory(t) { return new (t || MeasurementEditorComponent)(i0.ɵɵdirectiveInject(i1.DataSourceService)); };
MeasurementEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MeasurementEditorComponent, selectors: [["measurement-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 5, consts: [[1, "gf-form-inline"], [1, "gf-form", "gf-form-label", "query-keyword", "width-7"], [3, "ngModel", "request", "ngModelChange"], ["placeholder", "select measurement", 3, "ngModel", "request", "ngModelChange"], [1, "gf-form"], [1, "gf-form-label", "query-keyword"], [4, "ngFor", "ngForOf"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [3, "hidden", "ngModel", "valueStyle", "request", "ngModelChange"], ["placeholder", "fa fa-plus", 3, "ngModel", "request", "ngModelChange"], [3, "ngModel", "valueStyle", "request", "ngModelChange", 4, "ngIf"], [3, "placeholder", "ngModel", "request", "ngModelChange", 4, "ngIf"], [3, "ngModel", "valueStyle", "request", "ngModelChange"], [3, "placeholder", "ngModel", "request", "ngModelChange"]], template: function MeasurementEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵtext(2, "FROM");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-autocomplete-picker", 2);
        i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_3_listener($event) { return ctx.query.policy = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-autocomplete-picker", 3);
        i0.ɵɵlistener("ngModelChange", function MeasurementEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.query.measurement = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "label", 5);
        i0.ɵɵtext(7, "WHERE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, MeasurementEditorComponent_ng_container_8_Template, 5, 9, "ng-container", 6);
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelement(10, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.query.policy)("request", ctx.showRetentionPolicies());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.query.measurement)("request", ctx.showMeasurementsRequest());
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.query.tags);
    } }, directives: [i2.AutoCompletePickerComponent, i3.NgControlStatus, i3.NgModel, i4.NgForOf, i4.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MeasurementEditorComponent, [{
        type: Component,
        args: [{
                selector: 'measurement-editor',
                templateUrl: './measurement.html'
            }]
    }], function () { return [{ type: i1.DataSourceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvbWVhc3VyZW1lbnQvbWVhc3VyZW1lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvbWVhc3VyZW1lbnQvbWVhc3VyZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDNkJqRCxrREFJeUI7SUFIeEIsaVJBQXdCO0lBR3pCLGlCQUF5Qjs7OztJQUh4Qix1Q0FBd0IsMENBQUEsNkNBQUE7Ozs7SUFLdkIsa0RBSXVCO0lBRnJCLCtRQUFxQjtJQUV6QixpQkFBeUI7Ozs7SUFIckIsZ0RBQWtDLHVCQUFBLDhDQUFBOzs7OztJQXRCdkMsNkJBRUM7SUFBQSxpREFLeUI7SUFIeEIsMk9BQXlCO0lBRzFCLGlCQUF5QjtJQUV6QixrREFJeUI7SUFGckIscU9BQW1CO0lBRXZCLGlCQUF5QjtJQUV6QixpSUFJQTtJQUVFLGlJQUlGO0lBRUQsMEJBQWU7Ozs7O0lBeEJiLGVBQTRCO0lBQTVCLGdEQUE0QiwyQkFBQSwwQ0FBQSxrQ0FBQTtJQVF6QixlQUFtQjtJQUFuQixrQ0FBbUIsd0NBQUE7SUFJQyxl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QUEwQjtRQUExQiwwQ0FBMEIsd0NBQUE7UUFNMUIsZUFBK0I7UUFBL0IsK0NBQStCLDBDQUFBO1FBUWxCLGVBQTBDO1FBQTFDLHdDQUEwQzs7a0REUjVDLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLG9CQUFvQjthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVGFnLCBUYWdDb25kaXRpb24sIFRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vbWV0cmljcy5tJztcclxuaW1wb3J0IHsgQmFzZVF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vcXVlcnktYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21lYXN1cmVtZW50LWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lYXN1cmVtZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZWFzdXJlbWVudEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VRdWVyeUNvbXBvbmVudCAge1xyXG5cclxuICByZWFkb25seSBERUZBVUxUX1BPTElDWSA9ICdkZWZhdWx0JztcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgZHNTZXJ2aWNlOiBEYXRhU291cmNlU2VydmljZSApe1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy90aGlzLnJlc2V0VGFncygpO1xyXG5cclxuICAgIGlmKCAhdGhpcy5xdWVyeS50YWdzPy5sZW5ndGggKXtcclxuICAgICAgdGhpcy5xdWVyeS50YWdzLnB1c2gobmV3IFRhZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMucXVlcnkucG9saWN5KSB7XHJcbiAgICAgIHRoaXMucXVlcnkucG9saWN5ID0gdGhpcy5ERUZBVUxUX1BPTElDWTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dSZXRlbnRpb25Qb2xpY2llcygpIHtcclxuICAgIHJldHVybiB0aGlzXHJcbiAgICAgIC5kc1NlcnZpY2VcclxuICAgICAgLnByb3h5KCAxLCBgU0hPVyBSRVRFTlRJT04gUE9MSUNJRVNgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoeCA9PiBbJ2RlZmF1bHQnLCAuLi54WzBdLnZhbHVlcy5tYXAoeSA9PiB5WzBdKV0pKTtcclxuICB9XHJcblxyXG4gIHNob3dNZWFzdXJlbWVudHNSZXF1ZXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLmRzU2VydmljZVxyXG4gICAgICAucHJveHkoIDEsIGBTSE9XIE1FQVNVUkVNRU5UU2ApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCh4ID0+IFsuLi54WzBdLnZhbHVlc10ucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MuY29uY2F0KHZhbHVlKSwgW10pKSlcclxuICB9XHJcblxyXG4gIHRhZ09wZXJhdG9yc1JlcXVlc3QoIHRhZzpUYWcgKSB7XHJcbiAgICBjb25zdCBpc1JlZ2V4VmFsdWUgPSB0aGlzLmlzUmVnZXgoIHRhZy52YWx1ZSApO1xyXG4gICAgY29uc3QgYWxsT3BlcmF0b3JzID0gT2JqZWN0LnZhbHVlcyhUYWdPcGVyYXRvcik7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IGlzUmVnZXhWYWx1ZSA/IGFsbE9wZXJhdG9ycy5zbGljZSggNCwgNiApIDogYWxsT3BlcmF0b3JzLnNsaWNlKCAwLCA0IClcclxuXHJcbiAgICByZXR1cm4gb2YoIHJlc3VsdCApO1xyXG4gIH1cclxuXHJcbiAgc2hvd1RhZ1ZhbHVlc1JlcXVlc3QodGFnOiBUYWcpIHtcclxuICAgIGNvbnN0IHEgPSBgU0hPVyBUQUcgVkFMVUVTICBXSVRIIEtFWT0ke3RhZy5rZXl9YDtcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAuZHNTZXJ2aWNlXHJcbiAgICAgIC5wcm94eSgxLCBxKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoeCA9PiB4WzBdLnZhbHVlcy5tYXAoeSA9PiB5WzFdKSkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1RhZ0tleXNSZXF1ZXN0KCkge1xyXG4gICAgY29uc3QgcSA9ICh0aGlzLnF1ZXJ5Lm1lYXN1cmVtZW50KSA/XHJcbiAgICAgIGBTSE9XIFRBRyBLRVlTIGZyb20gJHt0aGlzLnF1ZXJ5Lm1lYXN1cmVtZW50fWAgOlxyXG4gICAgICBgU0hPVyBUQUcgS0VZU2A7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLmRzU2VydmljZVxyXG4gICAgICAucHJveHkoMSwgcSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHggPT4gWy4uLnhbMF0udmFsdWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjLmNvbmNhdCh2YWx1ZSksIFtdKSwgJy0tcmVtb3ZlLS0nXSkpXHJcbiAgfVxyXG5cclxuICBpc1JlZ2V4KGV4cHIpIHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIG5ldyBSZWdFeHAoZXhwcik7XHJcblxyXG4gICAgICBpc1ZhbGlkID0gKCBleHByLnN0YXJ0c1dpdGgoICcvJyApICYmIGV4cHIuZW5kc1dpdGgoICcvJyApICApXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9XHJcblxyXG4gIGFuZE9yUmVxdWVzdCgpIHtcclxuICAgIHJldHVybiBvZihPYmplY3QudmFsdWVzKFRhZ0NvbmRpdGlvbikpO1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cclxuXHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tbGFiZWwgcXVlcnkta2V5d29yZCB3aWR0aC03XCI+RlJPTTwvbGFiZWw+XHJcblxyXG5cdDxlZC1hdXRvY29tcGxldGUtcGlja2VyIFxyXG5cdFx0WyhuZ01vZGVsKV09J3F1ZXJ5LnBvbGljeSdcclxuXHRcdFtyZXF1ZXN0XT1cInNob3dSZXRlbnRpb25Qb2xpY2llcygpXCIgPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgXHJcblx0XHRwbGFjZWhvbGRlcj1cInNlbGVjdCBtZWFzdXJlbWVudFwiXHJcblx0XHRbKG5nTW9kZWwpXT0ncXVlcnkubWVhc3VyZW1lbnQnXHJcblx0XHRbcmVxdWVzdF09XCJzaG93TWVhc3VyZW1lbnRzUmVxdWVzdCgpXCI+XHJcblx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkXCI+V0hFUkU8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB0IG9mIHF1ZXJ5LnRhZ3M7bGV0IGkgPSBpbmRleFwiID5cclxuXHJcblx0XHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciBcclxuXHRcdFx0W2hpZGRlbl09XCIhKGkgPiAwICYmIHQua2V5KVwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwidC5jb25kaXRpb25cIlxyXG5cdFx0XHRbdmFsdWVTdHlsZV09XCJ7Y29sb3I6ICcjMzNiNWU1ICd9XCJcclxuICAgICAgW3JlcXVlc3RdPVwiYW5kT3JSZXF1ZXN0KClcIiA+XHJcblx0XHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG5cdFx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJmYSBmYS1wbHVzXCIgXHJcbiAgICAgIFsobmdNb2RlbCldPVwidC5rZXlcIlxyXG4gICAgICBbcmVxdWVzdF09XCJzaG93VGFnS2V5c1JlcXVlc3QoKVwiPlxyXG5cdFx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuXHRcdDxlZC1hdXRvY29tcGxldGUtcGlja2VyICpuZ0lmPVwidC5rZXlcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cInQub3BlcmF0b3JcIlxyXG5cdFx0XHRbdmFsdWVTdHlsZV09XCJ7Y29sb3I6ICcjZWI3YjE4J31cIlxyXG5cdFx0XHRbcmVxdWVzdF09XCJ0YWdPcGVyYXRvcnNSZXF1ZXN0KCB0IClcIj5cclxuXHRcdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcbiAgICA8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciAqbmdJZj1cInQua2V5XCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cIidzZWxlY3QgdGFnIHZhbHVlJ1wiIFxyXG4gICAgICBbKG5nTW9kZWwpXT0ndC52YWx1ZSdcclxuICAgICAgW3JlcXVlc3RdPVwic2hvd1RhZ1ZhbHVlc1JlcXVlc3QoIHQgKVwiID5cclxuXHRcdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3dcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+Il19