import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { map } from 'rxjs/operators';
import { AggrFuncGroup, AggrFuncHelper, FuncObject } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as _ from 'lodash';
import { menuItems } from './func/picker/func-items';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "@angular/forms";
import * as i5 from "./func/picker/func-picker";
import * as i6 from "./func/editor/func-editor";
function FieldEditorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "SELECT");
    i0.ɵɵelementEnd();
} }
function FieldEditorComponent_field_function_editor_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "field-function-editor", 9);
    i0.ɵɵlistener("remove", function FieldEditorComponent_field_function_editor_6_Template_field_function_editor_remove_0_listener() { i0.ɵɵrestoreView(_r4); const f_r2 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.onFuncRemove(f_r2); return ctx_r3.needRebuild(); })("rebuild", function FieldEditorComponent_field_function_editor_6_Template_field_function_editor_rebuild_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.needRebuild(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    i0.ɵɵproperty("func", f_r2);
} }
export class FieldEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
        this.fieldFuncItems = menuItems;
        this.remove = new EventEmitter();
        this.add = new EventEmitter();
    }
    get functions() {
        return this.field.functions;
    }
    ngOnInit() {
        this.index = this
            .query
            .fields
            .indexOf(this.field);
        const flatFieldFuncItems = this
            .fieldFuncItems
            .map(p => p.items)
            .reduce((a, b) => a.concat(b));
        this
            .field
            .functions
            .forEach(f => {
            if (f.param) {
                let s = flatFieldFuncItems.find(x => x.text === f.name);
                if (s && s.param && s.param.suggestions) {
                    f.param.suggestions = [...s.param.suggestions];
                }
            }
        });
    }
    get fields$() {
        return this
            .proxy(`SHOW FIELD KEYS FROM \"${this.query.measurement}\"`)
            .pipe(map(x => {
            if (!x || 0 == x.length) {
                return null;
            }
            const fields = [...x[0].values.map(y => y[0])];
            return (this.query.fields.length > 1) ? [this.REMOVE, ...fields] : fields;
        }));
    }
    onFieldPick(field) {
        if (field === this.REMOVE) {
            this.remove.emit();
        }
        else {
            this.field.key = field;
        }
    }
    onFuncPick(arg) {
        const fo = new FuncObject();
        fo.name = arg.label;
        if (arg.label == "field") {
            this.add.emit();
            return;
        }
        if (arg.param) {
            fo.param = _.cloneDeep(arg.param);
        }
        const alias = this.functions.find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Alias);
        const math = this.functions.find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Math);
        const len = this.functions.length;
        const funcs = this.functions;
        switch (AggrFuncHelper.getGroup(arg.label)) {
            case AggrFuncGroup.Aggregations:
            case AggrFuncGroup.Selectors:
                const duplicate = this
                    .field
                    .functions
                    .find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Aggregations ||
                    AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Selectors);
                if (duplicate) {
                    funcs[0] = fo;
                }
                else {
                    funcs.splice(0, 0, fo);
                }
                break;
            case AggrFuncGroup.Transformations:
                if (!alias) {
                    funcs.push(fo);
                }
                else {
                    funcs.splice(len - 1, 0, fo);
                }
                break;
            case AggrFuncGroup.Math:
                if (math && !alias) {
                    funcs[len - 1] = fo;
                }
                else if (!math && alias) {
                    funcs.splice(len - 1, 0, fo);
                }
                else {
                    funcs.push(fo);
                }
                break;
            case AggrFuncGroup.Alias:
                if (alias) {
                    this.functions[len - 1] = fo;
                }
                else {
                    this.functions.push(fo);
                }
                break;
        }
    }
    onFuncRemove(f) {
        const index = this.functions.indexOf(f);
        if (-1 !== index) {
            this.functions.splice(index, 1);
        }
    }
}
FieldEditorComponent.ɵfac = function FieldEditorComponent_Factory(t) { return new (t || FieldEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
FieldEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldEditorComponent, selectors: [["field-editor"]], inputs: { field: "field" }, outputs: { remove: "remove", add: "add" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 4, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [4, "ngIf"], ["placeholder", "field(value)", "formatString", "field({0})", 3, "ngModel", "request", "ngModelChange", "pick"], [3, "func", "remove", "rebuild", 4, "ngFor", "ngForOf"], [3, "pick"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [3, "func", "remove", "rebuild"]], template: function FieldEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵtemplate(3, FieldEditorComponent_span_3_Template, 2, 0, "span", 3);
        i0.ɵɵtext(4, "\u00A0 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-autocomplete-picker", 4);
        i0.ɵɵlistener("ngModelChange", function FieldEditorComponent_Template_ed_autocomplete_picker_ngModelChange_5_listener($event) { return ctx.field.key = $event; })("pick", function FieldEditorComponent_Template_ed_autocomplete_picker_pick_5_listener($event) { ctx.onFieldPick($event); return ctx.needRebuild(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, FieldEditorComponent_field_function_editor_6_Template, 1, 1, "field-function-editor", 5);
        i0.ɵɵelementStart(7, "field-function-picker", 6);
        i0.ɵɵlistener("pick", function FieldEditorComponent_Template_field_function_picker_pick_7_listener($event) { ctx.onFuncPick($event); return ctx.needRebuild(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵelement(9, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.index === 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.field.key)("request", ctx.fields$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.field.functions);
    } }, directives: [i2.NgIf, i3.AutoCompletePickerComponent, i4.NgControlStatus, i4.NgModel, i2.NgForOf, i5.FieldFunctionPickerComponent, i6.FieldFunctionEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FieldEditorComponent, [{
        type: Component,
        args: [{
                selector: 'field-editor',
                templateUrl: './field.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }]; }, { field: [{
            type: Input
        }], remove: [{
            type: Output
        }], add: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZmllbGRzL2ZpZWxkLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL2Rlc2lnbmVyL3F1ZXJ5L2ZpZWxkcy9maWVsZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBNEIsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNGbEQsNEJBQTBCO0lBQUEsc0JBQU07SUFBQSxpQkFBTzs7OztJQVl6QyxnREFJd0I7SUFGdkIsbVJBQTJDLGlOQUFBO0lBRTVDLGlCQUF3Qjs7O0lBSHZCLDJCQUFXOztBRExiLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxrQkFBa0I7SUFjMUQsWUFDeUIsS0FBWSxFQUM1QixTQUE0QjtRQUNqQyxLQUFLLENBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBRSxDQUFDO1FBRHJCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBYnJDLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FB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d0ZBNUlVLG9CQUFvQix1QkFlcEIsV0FBVzt5REFmWCxvQkFBb0I7UUNaakMsOEJBRUM7UUFBQSw4QkFDQztRQUFBLGdDQUNDO1FBQUEsdUVBQTBCO1FBQWEsdUJBQ3hDO1FBQUEsaUJBQVE7UUFDVCxpQkFBTTtRQUVOLGlEQU15QjtRQUx4QixpS0FBdUIsaUdBSWYsdUJBQW1CLFNBQUMsaUJBQWEsSUFKbEI7UUFLeEIsaUJBQXlCO1FBRXpCLHlHQUlBO1FBRUEsZ0RBQTJGO1FBQXBFLDZHQUFRLHNCQUFrQixTQUFFLGlCQUFhLElBQUM7UUFBRSxpQkFBd0I7UUFFM0YsOEJBQ0M7UUFBQSx5QkFBcUQ7UUFDdEQsaUJBQU07UUFFUCxpQkFBTTs7UUF4QkcsZUFBbUI7UUFBbkIsc0NBQW1CO1FBSzFCLGVBQXVCO1FBQXZCLHVDQUF1Qix3QkFBQTtRQU9ELGVBQWlDO1FBQWpDLDZDQUFpQzs7a0RESjVDLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxjQUFjO2FBQzVCOztzQkFnQkksTUFBTTt1QkFBRSxXQUFXO3dEQVZiLEtBQUs7a0JBQWIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTtZQUNHLEdBQUc7a0JBQVosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UsIFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQWdnckZ1bmNHcm91cCwgQWdnckZ1bmNIZWxwZXIsIEZ1bmNPYmplY3QgfSBmcm9tICcuLi8uLi8uLi9tZXRyaWNzLm0nO1xyXG5pbXBvcnQgeyBCYXNlUXVlcnlDb21wb25lbnQgfSBmcm9tICcuLi9xdWVyeS1iYXNlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tICcuL2Z1bmMvcGlja2VyL2Z1bmMtaXRlbXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmaWVsZC1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlUXVlcnlDb21wb25lbnQgIHtcclxuXHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBmaWVsZEZ1bmNJdGVtcyA9IG1lbnVJdGVtczsgXHJcblxyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnk7XHJcblxyXG4gIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgZ2V0IGZ1bmN0aW9ucygpOiBGdW5jT2JqZWN0W117XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5mdW5jdGlvbnM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciggXHJcbiAgICBASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCxcclxuICAgIHB1YmxpYyBkc1NlcnZpY2U6IERhdGFTb3VyY2VTZXJ2aWNlICl7XHJcbiAgICAgIHN1cGVyKCBwYW5lbCwgZHNTZXJ2aWNlICk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5pbmRleCA9IHRoaXNcclxuICAgICAgLnF1ZXJ5XHJcbiAgICAgIC5maWVsZHNcclxuICAgICAgLmluZGV4T2YoIHRoaXMuZmllbGQgKTtcclxuXHJcbiAgICBjb25zdCBmbGF0RmllbGRGdW5jSXRlbXMgPSB0aGlzXHJcbiAgICAgIC5maWVsZEZ1bmNJdGVtc1xyXG4gICAgICAubWFwKCBwID0+IHAuaXRlbXMgKVxyXG4gICAgICAucmVkdWNlKCAoYSwgYikgPT4gYS5jb25jYXQoYikpO1xyXG5cclxuICAgIHRoaXNcclxuICAgICAgLmZpZWxkXHJcbiAgICAgIC5mdW5jdGlvbnNcclxuICAgICAgLmZvckVhY2goIGYgPT4ge1xyXG4gICAgICAgIGlmKCBmLnBhcmFtICl7XHJcbiAgICAgICAgICBsZXQgcyA9IGZsYXRGaWVsZEZ1bmNJdGVtcy5maW5kKCB4ID0+IHgudGV4dCA9PT0gZi5uYW1lICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKCBzICYmIHMucGFyYW0gJiYgcy5wYXJhbS5zdWdnZXN0aW9ucyApe1xyXG4gICAgICAgICAgICBmLnBhcmFtLnN1Z2dlc3Rpb25zID0gWy4uLnMucGFyYW0uc3VnZ2VzdGlvbnNdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRzJCgpIHtcclxuICAgIHJldHVybiB0aGlzXHJcbiAgICAgIC5wcm94eShgU0hPVyBGSUVMRCBLRVlTIEZST00gXFxcIiR7dGhpcy5xdWVyeS5tZWFzdXJlbWVudH1cXFwiYClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHggPT4ge1xyXG4gICAgICAgICAgaWYoICF4IHx8IDAgPT0geC5sZW5ndGggKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZmllbGRzID0gWy4uLnhbMF0udmFsdWVzLm1hcCh5ID0+IHlbMF0pXTtcclxuICAgICAgICAgIHJldHVybiAoIHRoaXMucXVlcnkuZmllbGRzLmxlbmd0aCA+IDEgKSA/IFsgdGhpcy5SRU1PVkUsIC4uLmZpZWxkcyBdIDogZmllbGRzO1xyXG4gICAgICAgIH0gKSk7XHJcbiAgfVxyXG5cclxuICBvbkZpZWxkUGljayggZmllbGQ6IHN0cmluZyApe1xyXG4gICAgaWYoIGZpZWxkID09PSB0aGlzLlJFTU9WRSApe1xyXG4gICAgICB0aGlzLnJlbW92ZS5lbWl0KCk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMuZmllbGQua2V5ID0gZmllbGQ7IFxyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIG9uRnVuY1BpY2soIGFyZyApe1xyXG4gICAgY29uc3QgZm8gPSBuZXcgRnVuY09iamVjdCgpO1xyXG4gICAgZm8ubmFtZSA9IGFyZy5sYWJlbDtcclxuXHJcbiAgICBpZiggYXJnLmxhYmVsID09IFwiZmllbGRcIiApe1xyXG4gICAgICB0aGlzLmFkZC5lbWl0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiggYXJnLnBhcmFtICkgIHtcclxuICAgICAgZm8ucGFyYW0gPSBfLmNsb25lRGVlcCggYXJnLnBhcmFtICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWxpYXMgPSB0aGlzLmZ1bmN0aW9ucy5maW5kKCB4ID0+IFxyXG4gICAgICBBZ2dyRnVuY0hlbHBlci5nZXRHcm91cCggeC5uYW1lICkgPT0gIEFnZ3JGdW5jR3JvdXAuQWxpYXMgKVxyXG5cclxuICAgIGNvbnN0IG1hdGggPSB0aGlzLmZ1bmN0aW9ucy5maW5kKCB4ID0+IFxyXG4gICAgICBBZ2dyRnVuY0hlbHBlci5nZXRHcm91cCggeC5uYW1lICkgPT0gQWdnckZ1bmNHcm91cC5NYXRoIClcclxuXHJcbiAgICBjb25zdCBsZW4gPSB0aGlzLmZ1bmN0aW9ucy5sZW5ndGg7XHJcblx0XHRjb25zdCBmdW5jcyA9IHRoaXMuZnVuY3Rpb25zXHJcblxyXG4gICAgc3dpdGNoKCBBZ2dyRnVuY0hlbHBlci5nZXRHcm91cCggYXJnLmxhYmVsICkgKXtcclxuICAgICAgY2FzZSBBZ2dyRnVuY0dyb3VwLkFnZ3JlZ2F0aW9uczpcclxuICAgICAgY2FzZSBBZ2dyRnVuY0dyb3VwLlNlbGVjdG9yczpcclxuICAgICAgICBjb25zdCBkdXBsaWNhdGUgPSB0aGlzXHJcbiAgICAgICAgICAuZmllbGRcclxuICAgICAgICAgIC5mdW5jdGlvbnNcclxuICAgICAgICAgIC5maW5kKCB4ID0+IFxyXG4gICAgICAgICAgICBBZ2dyRnVuY0hlbHBlci5nZXRHcm91cCggeC5uYW1lICkgPT0gQWdnckZ1bmNHcm91cC5BZ2dyZWdhdGlvbnMgfHxcclxuICAgICAgICAgICAgQWdnckZ1bmNIZWxwZXIuZ2V0R3JvdXAoIHgubmFtZSApID09IEFnZ3JGdW5jR3JvdXAuU2VsZWN0b3JzICk7XHJcblxyXG4gICAgICAgIGlmKCBkdXBsaWNhdGUgKXtcclxuICAgICAgICAgIGZ1bmNzWyAwIF0gPSBmbztcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICBmdW5jcy5zcGxpY2UoIDAsIDAsIGZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQWdnckZ1bmNHcm91cC5UcmFuc2Zvcm1hdGlvbnM6XHJcbiAgICAgICAgICBpZiggIWFsaWFzICl7XHJcbiAgICAgICAgICAgIGZ1bmNzLnB1c2goIGZvICk7XHJcbiAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGZ1bmNzLnNwbGljZSggbGVuIC0gMSwgMCwgZm8pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQWdnckZ1bmNHcm91cC5NYXRoOlxyXG4gICAgICAgICAgaWYoIG1hdGggJiYgIWFsaWFzICl7XHJcbiAgICAgICAgICAgIGZ1bmNzWyBsZW4gLTEgXSA9IGZvO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKCAhbWF0aCAmJiBhbGlhcyApIHtcclxuICAgICAgICAgICAgZnVuY3Muc3BsaWNlKCBsZW4gLSAxLCAwLCBmbyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmdW5jcy5wdXNoKCBmbyApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQWdnckZ1bmNHcm91cC5BbGlhczpcclxuICAgICAgICAgIGlmKCBhbGlhcyApe1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uc1sgbGVuIC0xIF0gPSBmbztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25zLnB1c2goIGZvICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRnVuY1JlbW92ZSggZjogRnVuY09iamVjdCApe1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmN0aW9ucy5pbmRleE9mKCBmICk7XHJcblxyXG4gICAgaWYoIC0xICE9PSBpbmRleCApe1xyXG4gICAgICB0aGlzLmZ1bmN0aW9ucy5zcGxpY2UoIGluZGV4LCAxICk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LWtleXdvcmQgd2lkdGgtN1wiPlxyXG5cdFx0XHQ8c3BhbiAqbmdJZj1cImluZGV4ID09PSAwXCI+U0VMRUNUPC9zcGFuPiZuYnNwO1xyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXIgXHJcblx0XHRbKG5nTW9kZWwpXT1cImZpZWxkLmtleVwiXHJcblx0XHRwbGFjZWhvbGRlcj1cImZpZWxkKHZhbHVlKVwiIFxyXG5cdFx0Zm9ybWF0U3RyaW5nPVwiZmllbGQoezB9KVwiIFxyXG5cdFx0W3JlcXVlc3RdPVwiZmllbGRzJFwiXHJcblx0XHQocGljayk9XCJvbkZpZWxkUGljaygkZXZlbnQpO25lZWRSZWJ1aWxkKClcIj5cclxuXHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG5cdDxmaWVsZC1mdW5jdGlvbi1lZGl0b3IgKm5nRm9yPVwibGV0IGYgb2YgZmllbGQuZnVuY3Rpb25zXCJcclxuXHRcdFtmdW5jXSA9XCJmXCIgXHJcblx0XHQocmVtb3ZlKT1cIm9uRnVuY1JlbW92ZSggZiApOyBuZWVkUmVidWlsZCgpXCJcclxuXHRcdChyZWJ1aWxkKT1cIm5lZWRSZWJ1aWxkKClcIj5cclxuXHQ8L2ZpZWxkLWZ1bmN0aW9uLWVkaXRvcj5cclxuXHJcblx0PGZpZWxkLWZ1bmN0aW9uLXBpY2tlciAocGljayk9XCJvbkZ1bmNQaWNrKCRldmVudCk7IG5lZWRSZWJ1aWxkKClcIiA+PC9maWVsZC1mdW5jdGlvbi1waWNrZXI+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3dcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHRcclxuPC9kaXY+XHJcbiJdfQ==