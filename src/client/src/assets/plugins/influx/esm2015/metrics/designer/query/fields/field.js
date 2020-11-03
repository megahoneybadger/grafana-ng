import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { map } from 'rxjs/operators';
import { AggrFuncGroup, AggrFuncHelper, FuncObject } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import { menuItems } from './func-editor/func-items';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "./func-editor/func-picker";
import * as i5 from "./func-editor/func-editor";
function FieldEditorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "SELECT");
    i0.ɵɵelementEnd();
} }
function FieldEditorComponent_field_function_editor_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "field-function-editor", 9);
    i0.ɵɵlistener("remove", function FieldEditorComponent_field_function_editor_6_Template_field_function_editor_remove_0_listener() { i0.ɵɵrestoreView(_r4); const f_r2 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.onFuncRemove(f_r2); return ctx_r3.change.emit(); })("change", function FieldEditorComponent_field_function_editor_6_Template_field_function_editor_change_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.change.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", f_r2);
} }
export class FieldEditorComponent extends BaseQueryComponent {
    constructor(panel, dsService) {
        super(panel, dsService);
        this.dsService = dsService;
        this.fieldFuncItems = menuItems;
        this.remove = new EventEmitter();
        this.add = new EventEmitter();
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
        const alias = this.field.functions.find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Alias);
        const math = this.field.functions.find(x => AggrFuncHelper.getGroup(x.name) == AggrFuncGroup.Math);
        const len = this.field.functions.length;
        const funcs = this.field.functions;
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
                    this.field.functions[len - 1] = fo;
                }
                else {
                    this.field.functions.push(fo);
                }
                break;
        }
    }
    onFuncRemove(f) {
        const index = this.field.functions.indexOf(f);
        if (-1 !== index) {
            this.field.functions.splice(index, 1);
        }
    }
}
FieldEditorComponent.ɵfac = function FieldEditorComponent_Factory(t) { return new (t || FieldEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
FieldEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldEditorComponent, selectors: [["field-editor"]], inputs: { field: "field" }, outputs: { remove: "remove", add: "add" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 4, consts: [[1, "gf-form-inline"], [1, "gf-form"], [1, "gf-form-label", "query-keyword", "width-7"], [4, "ngIf"], ["placeholder", "field(value)", "formatString", "field({0})", 3, "value", "request", "pick"], [3, "value", "remove", "change", 4, "ngFor", "ngForOf"], [3, "pick"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [3, "value", "remove", "change"]], template: function FieldEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵtemplate(3, FieldEditorComponent_span_3_Template, 2, 0, "span", 3);
        i0.ɵɵtext(4, "\u00A0 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-autocomplete-picker", 4);
        i0.ɵɵlistener("pick", function FieldEditorComponent_Template_ed_autocomplete_picker_pick_5_listener($event) { ctx.onFieldPick($event); return ctx.change.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, FieldEditorComponent_field_function_editor_6_Template, 1, 1, "field-function-editor", 5);
        i0.ɵɵelementStart(7, "field-function-picker", 6);
        i0.ɵɵlistener("pick", function FieldEditorComponent_Template_field_function_picker_pick_7_listener($event) { ctx.onFuncPick($event); return ctx.change.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵelement(9, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.index === 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.field.key)("request", ctx.fields$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.field.functions);
    } }, directives: [i2.NgIf, i3.AutoCompletePickerComponent, i2.NgForOf, i4.FieldFunctionPickerComponent, i5.FieldFunctionEditorComponent], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZmllbGRzL2ZpZWxkLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL2Rlc2lnbmVyL3F1ZXJ5L2ZpZWxkcy9maWVsZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBNEIsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztJQ0Z6Qiw0QkFBMEI7SUFBQSxzQkFBTTtJQUFBLGlCQUFPOzs7O0lBWXpDLGdEQUl3QjtJQUZ2QiwyUEFBNkIsb0JBQWEsSUFBRSx1TEFDbEMsb0JBQWEsSUFEcUI7SUFFN0MsaUJBQXdCOzs7SUFIdkIsNEJBQVk7O0FETGQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGtCQUFrQjtJQVUxRCxZQUN5QixLQUFZLEVBQzVCLFNBQTRCO1FBQ2pDLEtBQUssQ0FBRSxLQUFLLEVBQUUsU0FBUyxDQUFFLENBQUM7UUFEckIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFUckMs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RUFBRSxDQUFDLENBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7O3dGQXhJVSxvQkFBb0IsdUJBV3BCLFdBQVc7eURBWFgsb0JBQW9CO1FDWmpDLDhCQUVDO1FBQUEsOEJBQ0M7UUFBQSxnQ0FDQztRQUFBLHVFQUEwQjtRQUFhLHVCQUN4QztRQUFBLGlCQUFRO1FBQ1QsaUJBQU07UUFFTixpREFNeUI7UUFEeEIsOEdBQVEsdUJBQW1CLFNBQUUsaUJBQWEsSUFBRTtRQUM3QyxpQkFBeUI7UUFFekIseUdBSUE7UUFFQSxnREFBNEY7UUFBckUsNkdBQVEsc0JBQWtCLFNBQUUsaUJBQWEsSUFBRTtRQUFFLGlCQUF3QjtRQUU1Riw4QkFDQztRQUFBLHlCQUFxRDtRQUN0RCxpQkFBTTtRQUVQLGlCQUFNOztRQXhCRyxlQUFtQjtRQUFuQixzQ0FBbUI7UUFLMUIsZUFBbUI7UUFBbkIscUNBQW1CLHdCQUFBO1FBT0csZUFBaUM7UUFBakMsNkNBQWlDOztrRERKNUMsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLGNBQWM7YUFDNUI7O3NCQVlJLE1BQU07dUJBQUUsV0FBVzt3REFOYixLQUFLO2tCQUFiLEtBQUs7WUFFSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxHQUFHO2tCQUFaLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlLCBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFnZ3JGdW5jR3JvdXAsIEFnZ3JGdW5jSGVscGVyLCBGdW5jT2JqZWN0IH0gZnJvbSAnLi4vLi4vLi4vbWV0cmljcy5tJztcclxuaW1wb3J0IHsgQmFzZVF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vcXVlcnktYmFzZSc7XHJcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4vZnVuYy1lZGl0b3IvZnVuYy1pdGVtcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmllbGQtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmllbGQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZVF1ZXJ5Q29tcG9uZW50ICB7XHJcblxyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgZmllbGRGdW5jSXRlbXMgPSBtZW51SXRlbXM7IFxyXG5cclxuICBASW5wdXQoKSBmaWVsZDogYW55O1xyXG5cclxuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBcclxuICAgIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsLFxyXG4gICAgcHVibGljIGRzU2VydmljZTogRGF0YVNvdXJjZVNlcnZpY2UgKXtcclxuICAgICAgc3VwZXIoIHBhbmVsLCBkc1NlcnZpY2UgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmluZGV4ID0gdGhpc1xyXG4gICAgICAucXVlcnlcclxuICAgICAgLmZpZWxkc1xyXG4gICAgICAuaW5kZXhPZiggdGhpcy5maWVsZCApO1xyXG5cclxuICAgIGNvbnN0IGZsYXRGaWVsZEZ1bmNJdGVtcyA9IHRoaXNcclxuICAgICAgLmZpZWxkRnVuY0l0ZW1zXHJcbiAgICAgIC5tYXAoIHAgPT4gcC5pdGVtcyApXHJcbiAgICAgIC5yZWR1Y2UoIChhLCBiKSA9PiBhLmNvbmNhdChiKSk7XHJcblxyXG4gICAgdGhpc1xyXG4gICAgICAuZmllbGRcclxuICAgICAgLmZ1bmN0aW9uc1xyXG4gICAgICAuZm9yRWFjaCggZiA9PiB7XHJcbiAgICAgICAgaWYoIGYucGFyYW0gKXtcclxuICAgICAgICAgIGxldCBzID0gZmxhdEZpZWxkRnVuY0l0ZW1zLmZpbmQoIHggPT4geC50ZXh0ID09PSBmLm5hbWUgKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoIHMgJiYgcy5wYXJhbSAmJiBzLnBhcmFtLnN1Z2dlc3Rpb25zICl7XHJcbiAgICAgICAgICAgIGYucGFyYW0uc3VnZ2VzdGlvbnMgPSBbLi4ucy5wYXJhbS5zdWdnZXN0aW9uc107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBmaWVsZHMkKCkge1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnByb3h5KGBTSE9XIEZJRUxEIEtFWVMgRlJPTSBcXFwiJHt0aGlzLnF1ZXJ5Lm1lYXN1cmVtZW50fVxcXCJgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoeCA9PiB7XHJcbiAgICAgICAgICBpZiggIXggfHwgMCA9PSB4Lmxlbmd0aCApe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBmaWVsZHMgPSBbLi4ueFswXS52YWx1ZXMubWFwKHkgPT4geVswXSldO1xyXG4gICAgICAgICAgcmV0dXJuICggdGhpcy5xdWVyeS5maWVsZHMubGVuZ3RoID4gMSApID8gWyB0aGlzLlJFTU9WRSwgLi4uZmllbGRzIF0gOiBmaWVsZHM7XHJcbiAgICAgICAgfSApKTtcclxuICB9XHJcblxyXG4gIG9uRmllbGRQaWNrKCBmaWVsZDogc3RyaW5nICl7XHJcbiAgICBpZiggZmllbGQgPT09IHRoaXMuUkVNT1ZFICl7XHJcbiAgICAgIHRoaXMucmVtb3ZlLmVtaXQoKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5maWVsZC5rZXkgPSBmaWVsZDsgXHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgb25GdW5jUGljayggYXJnICl7XHJcbiAgICBjb25zdCBmbyA9IG5ldyBGdW5jT2JqZWN0KCk7XHJcbiAgICBmby5uYW1lID0gYXJnLmxhYmVsO1xyXG5cclxuICAgIGlmKCBhcmcubGFiZWwgPT0gXCJmaWVsZFwiICl7XHJcbiAgICAgIHRoaXMuYWRkLmVtaXQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCBhcmcucGFyYW0gKSAge1xyXG4gICAgICBmby5wYXJhbSA9IF8uY2xvbmVEZWVwKCBhcmcucGFyYW0gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbGlhcyA9IHRoaXMuZmllbGQuZnVuY3Rpb25zLmZpbmQoIHggPT4gXHJcbiAgICAgIEFnZ3JGdW5jSGVscGVyLmdldEdyb3VwKCB4Lm5hbWUgKSA9PSAgQWdnckZ1bmNHcm91cC5BbGlhcyApXHJcblxyXG4gICAgY29uc3QgbWF0aCA9IHRoaXMuZmllbGQuZnVuY3Rpb25zLmZpbmQoIHggPT4gXHJcbiAgICAgIEFnZ3JGdW5jSGVscGVyLmdldEdyb3VwKCB4Lm5hbWUgKSA9PSBBZ2dyRnVuY0dyb3VwLk1hdGggKVxyXG5cclxuICAgIGNvbnN0IGxlbiA9IHRoaXMuZmllbGQuZnVuY3Rpb25zLmxlbmd0aDtcclxuXHRcdGNvbnN0IGZ1bmNzID0gdGhpcy5maWVsZC5mdW5jdGlvbnNcclxuXHJcbiAgICBzd2l0Y2goIEFnZ3JGdW5jSGVscGVyLmdldEdyb3VwKCBhcmcubGFiZWwgKSApe1xyXG4gICAgICBjYXNlIEFnZ3JGdW5jR3JvdXAuQWdncmVnYXRpb25zOlxyXG4gICAgICBjYXNlIEFnZ3JGdW5jR3JvdXAuU2VsZWN0b3JzOlxyXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZSA9IHRoaXNcclxuICAgICAgICAgIC5maWVsZFxyXG4gICAgICAgICAgLmZ1bmN0aW9uc1xyXG4gICAgICAgICAgLmZpbmQoIHggPT4gXHJcbiAgICAgICAgICAgIEFnZ3JGdW5jSGVscGVyLmdldEdyb3VwKCB4Lm5hbWUgKSA9PSBBZ2dyRnVuY0dyb3VwLkFnZ3JlZ2F0aW9ucyB8fFxyXG4gICAgICAgICAgICBBZ2dyRnVuY0hlbHBlci5nZXRHcm91cCggeC5uYW1lICkgPT0gQWdnckZ1bmNHcm91cC5TZWxlY3RvcnMgKTtcclxuXHJcbiAgICAgICAgaWYoIGR1cGxpY2F0ZSApe1xyXG4gICAgICAgICAgZnVuY3NbIDAgXSA9IGZvO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIGZ1bmNzLnNwbGljZSggMCwgMCwgZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBZ2dyRnVuY0dyb3VwLlRyYW5zZm9ybWF0aW9uczpcclxuICAgICAgICAgIGlmKCAhYWxpYXMgKXtcclxuICAgICAgICAgICAgZnVuY3MucHVzaCggZm8gKTtcclxuICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgZnVuY3Muc3BsaWNlKCBsZW4gLSAxLCAwLCBmbyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBZ2dyRnVuY0dyb3VwLk1hdGg6XHJcbiAgICAgICAgICBpZiggbWF0aCAmJiAhYWxpYXMgKXtcclxuICAgICAgICAgICAgZnVuY3NbIGxlbiAtMSBdID0gZm87XHJcbiAgICAgICAgICB9IGVsc2UgaWYoICFtYXRoICYmIGFsaWFzICkge1xyXG4gICAgICAgICAgICBmdW5jcy5zcGxpY2UoIGxlbiAtIDEsIDAsIGZvKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZ1bmNzLnB1c2goIGZvICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBZ2dyRnVuY0dyb3VwLkFsaWFzOlxyXG4gICAgICAgICAgaWYoIGFsaWFzICl7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZnVuY3Rpb25zWyBsZW4gLTEgXSA9IGZvO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZC5mdW5jdGlvbnMucHVzaCggZm8gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25GdW5jUmVtb3ZlKCBmOiBGdW5jT2JqZWN0ICl7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmllbGQuZnVuY3Rpb25zLmluZGV4T2YoIGYgKTtcclxuXHJcbiAgICBpZiggLTEgIT09IGluZGV4ICl7XHJcbiAgICAgIHRoaXMuZmllbGQuZnVuY3Rpb25zLnNwbGljZSggaW5kZXgsIDEgKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcXVlcnkta2V5d29yZCB3aWR0aC03XCI+XHJcblx0XHRcdDxzcGFuICpuZ0lmPVwiaW5kZXggPT09IDBcIj5TRUxFQ1Q8L3NwYW4+Jm5ic3A7XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciBcclxuXHRcdFt2YWx1ZV09XCJmaWVsZC5rZXlcIlxyXG5cdFx0cGxhY2Vob2xkZXI9XCJmaWVsZCh2YWx1ZSlcIiBcclxuXHRcdGZvcm1hdFN0cmluZz1cImZpZWxkKHswfSlcIiBcclxuXHRcdFtyZXF1ZXN0XT1cImZpZWxkcyRcIlxyXG5cdFx0KHBpY2spPVwib25GaWVsZFBpY2soJGV2ZW50KTsgY2hhbmdlLmVtaXQoKTtcIj5cclxuXHQ8L2VkLWF1dG9jb21wbGV0ZS1waWNrZXI+XHJcblxyXG5cdDxmaWVsZC1mdW5jdGlvbi1lZGl0b3IgKm5nRm9yPVwibGV0IGYgb2YgZmllbGQuZnVuY3Rpb25zXCJcclxuXHRcdFt2YWx1ZV0gPVwiZlwiIFxyXG5cdFx0KHJlbW92ZSk9XCJvbkZ1bmNSZW1vdmUoIGYgKTsgY2hhbmdlLmVtaXQoKTtcIlxyXG5cdFx0KGNoYW5nZSk9XCJjaGFuZ2UuZW1pdCgpXCI+XHJcblx0PC9maWVsZC1mdW5jdGlvbi1lZGl0b3I+XHJcblxyXG5cdDxmaWVsZC1mdW5jdGlvbi1waWNrZXIgKHBpY2spPVwib25GdW5jUGljaygkZXZlbnQpOyBjaGFuZ2UuZW1pdCgpO1wiID48L2ZpZWxkLWZ1bmN0aW9uLXBpY2tlcj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0tbGFiZWwgZ2YtZm9ybS1sYWJlbC0tZ3Jvd1wiPjwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdFxyXG48L2Rpdj5cclxuIl19