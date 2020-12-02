import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AlertEvalType, AlertOperator, AlertReducer, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';
import { BaseChartEditorComponent } from '../../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "uilib";
import * as i4 from "@angular/forms";
import * as i5 from "./query/query";
function AlertConditionEditorComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 13);
    i0.ɵɵtext(1, " WHEN ");
    i0.ɵɵelementEnd();
} }
function AlertConditionEditorComponent_ed_autocomplete_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-autocomplete-picker", 14);
    i0.ɵɵlistener("pick", function AlertConditionEditorComponent_ed_autocomplete_picker_3_Template_ed_autocomplete_picker_pick_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.condition.operator = $event.toLowerCase(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("request", ctx_r1.operators$)("value", ctx_r1.condition.operator.toUpperCase())("readonly", true);
} }
function AlertConditionEditorComponent_ed_textbox_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-textbox", 15);
    i0.ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_ed_textbox_11_Template_ed_textbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.evalParamFrom = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r2.evalParamFrom);
} }
function AlertConditionEditorComponent_ed_textbox_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ed-textbox", 16);
    i0.ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_ed_textbox_12_Template_ed_textbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.evalParamTo = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r3.evalParamTo);
} }
export class AlertConditionEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.index = 0;
        this.removed = new EventEmitter();
        this.AlertEvalTypeRef = [
            'is below',
            'is above',
            'is outside range',
            'is within range',
            'has no value'
        ];
    }
    get reducers$() {
        return of(Object.values(AlertReducer));
    }
    get evaluators$() {
        return of([...this.AlertEvalTypeRef].map(x => x.toUpperCase()));
    }
    get evaluator() {
        return this.AlertEvalTypeRef[this.condition.evaluator.type].toUpperCase();
    }
    get operators$() {
        return of(Object.values(AlertOperator).map(x => x.toUpperCase()));
    }
    get evaluatorType() {
        return this.condition.evaluator.type;
    }
    get showEvalParamFrom() {
        return (this.evaluatorType != AlertEvalType.HasNoValue);
    }
    get showEvalParamTo() {
        return (this.evaluatorType == AlertEvalType.IsOutsideRange) ||
            (this.evaluatorType == AlertEvalType.IsWithinRange);
    }
    get evalParamFrom() {
        var _a;
        return (_a = this
            .condition
            .evaluator
            .params[0]) === null || _a === void 0 ? void 0 : _a.toString();
    }
    set evalParamFrom(p) {
        let from = parseFloat(p);
        let to = parseFloat(this.evalParamTo);
        from = isNaN(from) ? '' : from;
        to = isNaN(to) ? '' : to;
        this.condition.evaluator.params = this.showEvalParamTo ? [from, to] : [from];
        this.refresh();
    }
    get evalParamTo() {
        var _a;
        return (_a = this
            .condition
            .evaluator
            .params[1]) === null || _a === void 0 ? void 0 : _a.toString();
    }
    set evalParamTo(p) {
        let from = parseFloat(this.evalParamFrom);
        let to = parseFloat(p);
        from = isNaN(from) ? '' : from;
        to = isNaN(to) ? '' : to;
        this.condition.evaluator.params = [from, to];
        this.refresh();
    }
    onEvaluatorPick(e) {
        var _a, _b, _c;
        const index = this
            .AlertEvalTypeRef
            .indexOf(e.toLowerCase());
        if (-1 == index || e == this.evaluator) {
            return;
        }
        this.condition.evaluator.type = index;
        const ev = this.condition.evaluator;
        const p = ev.params;
        switch (ev.type) {
            case AlertEvalType.IsAbove:
            case AlertEvalType.IsBelow:
                ev.params = [(_a = p[0]) !== null && _a !== void 0 ? _a : ''];
                break;
            case AlertEvalType.HasNoValue:
                ev.params = [];
                break;
            default:
                ev.params = [(_b = p[0]) !== null && _b !== void 0 ? _b : '', (_c = p[1]) !== null && _c !== void 0 ? _c : ''];
                break;
        }
        this.refresh();
    }
}
AlertConditionEditorComponent.ɵfac = function AlertConditionEditorComponent_Factory(t) { return new (t || AlertConditionEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AlertConditionEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertConditionEditorComponent, selectors: [["editor-alert-condition"]], inputs: { condition: "condition", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 10, consts: [[1, "gf-form-inline"], [1, "gf-form"], ["class", "gf-form-label  query-keyword width-5", 4, "ngIf"], ["valueClass", "query-keyword", "width", "5", 3, "request", "value", "readonly", "pick", 4, "ngIf"], [3, "ngModel", "formatString", "request", "ngModelChange"], [1, "gf-form", "mr-1"], [1, "gf-form-label", "query-keyword"], [3, "query"], ["valueClass", "query-keyword", 3, "value", "request", "pick"], ["width", "9", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["label", "TO", "labelClass", "query-keyword", "width", "9", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], [1, "gf-form-label", "query-keyword", "width-5"], ["valueClass", "query-keyword", "width", "5", 3, "request", "value", "readonly", "pick"], ["width", "9", "type", "number", 3, "ngModel", "ngModelChange"], ["label", "TO", "labelClass", "query-keyword", "width", "9", "type", "number", 3, "ngModel", "ngModelChange"]], template: function AlertConditionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, AlertConditionEditorComponent_label_2_Template, 2, 0, "label", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, AlertConditionEditorComponent_ed_autocomplete_picker_3_Template, 1, 3, "ed-autocomplete-picker", 3);
        i0.ɵɵelementStart(4, "ed-autocomplete-picker", 4);
        i0.ɵɵlistener("ngModelChange", function AlertConditionEditorComponent_Template_ed_autocomplete_picker_ngModelChange_4_listener($event) { return ctx.condition.reducer = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "label", 6);
        i0.ɵɵtext(7, " OF ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "alert-query-editor", 7);
        i0.ɵɵelement(9, "div", 5);
        i0.ɵɵelementStart(10, "ed-autocomplete-picker", 8);
        i0.ɵɵlistener("pick", function AlertConditionEditorComponent_Template_ed_autocomplete_picker_pick_10_listener($event) { return ctx.onEvaluatorPick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, AlertConditionEditorComponent_ed_textbox_11_Template, 1, 1, "ed-textbox", 9);
        i0.ɵɵtemplate(12, AlertConditionEditorComponent_ed_textbox_12_Template, 1, 1, "ed-textbox", 10);
        i0.ɵɵelementStart(13, "div", 1);
        i0.ɵɵelementStart(14, "label", 11);
        i0.ɵɵlistener("click", function AlertConditionEditorComponent_Template_label_click_14_listener() { return ctx.removed.emit(ctx.condition); });
        i0.ɵɵelement(15, "i", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.index == 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.index != 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.condition.reducer)("formatString", "{0}()")("request", ctx.reducers$);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("query", ctx.condition.query);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.evaluator)("request", ctx.evaluators$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showEvalParamFrom);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showEvalParamTo);
    } }, directives: [i2.NgIf, i3.AutoCompletePickerComponent, i4.NgControlStatus, i4.NgModel, i5.AlertQueryEditorComponent, i3.TextBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertConditionEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-condition',
                templateUrl: './cond.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { condition: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvY29uZmlnL2NvbmRpdGlvbnMvY29uZC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvY29uZmlnL2NvbmRpdGlvbnMvY29uZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBa0IsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQzNELFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7OztJQ0Y1RSxpQ0FDQztJQUFBLHNCQUNEO0lBQUEsaUJBQVE7Ozs7SUFHVCxrREFPeUI7SUFEeEIsNk9BQTJCLG9CQUFvQixJQUFDO0lBQ2pELGlCQUF5Qjs7O0lBTnhCLDJDQUFzQixrREFBQSxrQkFBQTs7OztJQStCdkIsc0NBSWE7SUFIWiw2T0FBMkI7SUFHNUIsaUJBQWE7OztJQUhaLDhDQUEyQjs7OztJQUs1QixzQ0FNYTtJQUxaLDJPQUF5QjtJQUsxQixpQkFBYTs7O0lBTFosNENBQXlCOztBRHBDM0IsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHdCQUF3QjtJQW9GekUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFsRlIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUVqQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFFeEQscUJBQWdCLEdB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QUFDO0lBQ2hCLENBQUM7OzBHQXRIVyw2QkFBNkIsdUJBb0ZuQixXQUFXO2tFQXBGckIsNkJBQTZCO1FDWDFDLDhCQUVDO1FBQUEsOEJBQ0M7UUFBQSxrRkFDQztRQUVGLGlCQUFNO1FBRU4sb0hBT0E7UUFFQSxpREFJeUI7UUFIeEIsa0xBQStCO1FBR2hDLGlCQUF5QjtRQUV6Qiw4QkFDQztRQUFBLGdDQUNDO1FBQUEsb0JBQ0Q7UUFBQSxpQkFBUTtRQUNULGlCQUFNO1FBRU4sd0NBQW1FO1FBRW5FLHlCQUFrQztRQUVsQyxrREFLeUI7UUFGeEIsK0hBQVEsMkJBQXlCLElBQUM7UUFFbkMsaUJBQXlCO1FBRXpCLDhGQUlBO1FBRUEsK0ZBTUE7UUFFQSwrQkFDQztRQUFBLGtDQUNDO1FBRG9DLDBHQUFTLCtCQUF1QixJQUFDO1FBQ3JFLHlCQUEyQjtRQUM1QixpQkFBUTtRQUNULGlCQUFNO1FBQ1AsaUJBQU07O1FBeERnRCxlQUFnQjtRQUFoQixxQ0FBZ0I7UUFLN0MsZUFBZ0I7UUFBaEIscUNBQWdCO1FBVXZDLGVBQStCO1FBQS9CLCtDQUErQix5QkFBQSwwQkFBQTtRQVdaLGVBQXlCO1FBQXpCLDJDQUF5QjtRQUs1QyxlQUFtQjtRQUFuQixxQ0FBbUIsNEJBQUE7UUFNUixlQUF5QjtRQUF6Qiw0Q0FBeUI7UUFNekIsZUFBdUI7UUFBdkIsMENBQXVCOztrRERuQ3ZCLDZCQUE2QjtjQUp6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLGFBQWE7YUFDM0I7O3NCQXFGYyxNQUFNO3VCQUFFLFdBQVc7d0JBbEZ2QixTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBRUksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0Q29uZGl0aW9uLCBBbGVydEV2YWxUeXBlLCBBbGVydE9wZXJhdG9yLCBBbGVydFJlZHVjZXIsXG5cdFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWFsZXJ0LWNvbmRpdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25kLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29uZGl0aW9uRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50ICB7XG5cbiAgQElucHV0KCkgY29uZGl0aW9uOiBBbGVydENvbmRpdGlvbjtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFsZXJ0Q29uZGl0aW9uPigpO1xuXG5cdEFsZXJ0RXZhbFR5cGVSZWYgPSBbXG5cdFx0J2lzIGJlbG93Jyxcblx0XHQnaXMgYWJvdmUnLFxuXHRcdCdpcyBvdXRzaWRlIHJhbmdlJyxcblx0XHQnaXMgd2l0aGluIHJhbmdlJyxcblx0XHQnaGFzIG5vIHZhbHVlJ1xuXHRdXG4gIFxuICBnZXQgcmVkdWNlcnMkKCkge1xuXHRcdHJldHVybiBvZiggT2JqZWN0LnZhbHVlcyggQWxlcnRSZWR1Y2VyICkpO1xuXHR9XG5cdFxuXHRnZXQgZXZhbHVhdG9ycyQoKXtcblx0XHRyZXR1cm4gb2YoIFsuLi50aGlzLkFsZXJ0RXZhbFR5cGVSZWZdLm1hcCggeCA9PiB4LnRvVXBwZXJDYXNlKCkgKSApO1xuXHR9XG5cblx0Z2V0IGV2YWx1YXRvcigpIDogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5BbGVydEV2YWxUeXBlUmVmWyB0aGlzLmNvbmRpdGlvbi5ldmFsdWF0b3IudHlwZSBdLnRvVXBwZXJDYXNlKCk7XG5cdH1cblxuXHRnZXQgb3BlcmF0b3JzJCgpIHtcblx0XHRyZXR1cm4gb2YoIE9iamVjdC52YWx1ZXMoIEFsZXJ0T3BlcmF0b3IgKS5tYXAoIHggPT4geC50b1VwcGVyQ2FzZSgpICkgKTtcblx0fVxuXG5cdGdldCBldmFsdWF0b3JUeXBlKCkgOiBBbGVydEV2YWxUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5jb25kaXRpb24uZXZhbHVhdG9yLnR5cGU7XG5cdH1cblxuXHRnZXQgc2hvd0V2YWxQYXJhbUZyb20oKTogYm9vbGVhbntcblx0XHRyZXR1cm4gKCB0aGlzLmV2YWx1YXRvclR5cGUgIT0gQWxlcnRFdmFsVHlwZS5IYXNOb1ZhbHVlICk7XG5cdH1cblxuXHRnZXQgc2hvd0V2YWxQYXJhbVRvKCkgOiBib29sZWFue1xuXHRcdHJldHVybiAoIHRoaXMuZXZhbHVhdG9yVHlwZSA9PSBBbGVydEV2YWxUeXBlLklzT3V0c2lkZVJhbmdlICkgfHwgXG5cdFx0XHQoIHRoaXMuZXZhbHVhdG9yVHlwZSA9PSBBbGVydEV2YWxUeXBlLklzV2l0aGluUmFuZ2UgKSA7XG5cdH1cblxuXHRnZXQgZXZhbFBhcmFtRnJvbSgpIDpzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQuY29uZGl0aW9uXG5cdFx0XHQuZXZhbHVhdG9yXG5cdFx0XHQucGFyYW1zWyAwIF1cblx0XHRcdD8udG9TdHJpbmcoKTtcblx0fVxuXG5cdHNldCBldmFsUGFyYW1Gcm9tKCBwOiBzdHJpbmcgKXtcblx0XHRsZXQgZnJvbTogYW55ID0gcGFyc2VGbG9hdCggcCApO1xuXHRcdGxldCB0bzogYW55ID0gcGFyc2VGbG9hdCggdGhpcy5ldmFsUGFyYW1UbyApO1xuXG5cdFx0ZnJvbSA9IGlzTmFOKCBmcm9tICkgPyAnJyA6IGZyb207XG5cdFx0dG8gPSBpc05hTiggdG8gKSA/ICcnIDogdG87XG5cdFxuXHRcdHRoaXMuY29uZGl0aW9uLmV2YWx1YXRvci5wYXJhbXMgPSB0aGlzLnNob3dFdmFsUGFyYW1UbyA/IFsgZnJvbSwgdG8gXSA6IFsgZnJvbSBdO1xuXG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRnZXQgZXZhbFBhcmFtVG8oKSA6c3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0LmNvbmRpdGlvblxuXHRcdFx0LmV2YWx1YXRvclxuXHRcdFx0LnBhcmFtc1sgMSBdXG5cdFx0XHQ/LnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzZXQgZXZhbFBhcmFtVG8oIHA6IHN0cmluZyApe1xuXHRcdGxldCBmcm9tOiBhbnkgPSBwYXJzZUZsb2F0KCB0aGlzLmV2YWxQYXJhbUZyb20gKTtcblx0XHRsZXQgdG86IGFueSA9IHBhcnNlRmxvYXQoIHAgKTtcblxuXHRcdGZyb20gPSBpc05hTiggZnJvbSApID8gJycgOiBmcm9tO1xuXHRcdHRvID0gaXNOYU4oIHRvICkgPyAnJyA6IHRvO1xuXG5cdFx0dGhpcy5jb25kaXRpb24uZXZhbHVhdG9yLnBhcmFtcyA9IFsgZnJvbSwgdG8gXTtcblxuXHRcdHRoaXMucmVmcmVzaCgpO1xuXHR9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuXHR9XG5cblx0b25FdmFsdWF0b3JQaWNrKCBlOiBzdHJpbmcgKXtcblx0XHRcblx0XHRjb25zdCBpbmRleCA9IHRoaXNcblx0XHRcdC5BbGVydEV2YWxUeXBlUmVmXG5cdFx0XHQuaW5kZXhPZiggZS50b0xvd2VyQ2FzZSgpICk7XG5cblx0XHRpZiggLTEgPT0gaW5kZXggfHwgZSA9PSB0aGlzLmV2YWx1YXRvciApe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY29uZGl0aW9uLmV2YWx1YXRvci50eXBlID0gaW5kZXg7XG5cdFx0Y29uc3QgZXYgPSB0aGlzLmNvbmRpdGlvbi5ldmFsdWF0b3I7XG5cdFx0Y29uc3QgcCA9IGV2LnBhcmFtcztcblxuXHRcdHN3aXRjaCggZXYudHlwZSApe1xuXHRcdFx0Y2FzZSBBbGVydEV2YWxUeXBlLklzQWJvdmU6XG5cdFx0XHRjYXNlIEFsZXJ0RXZhbFR5cGUuSXNCZWxvdzpcblx0XHRcdFx0ZXYucGFyYW1zID0gWyBwWyAwIF0gPz8gJycgXTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQWxlcnRFdmFsVHlwZS5IYXNOb1ZhbHVlOlxuXHRcdFx0XHRldi5wYXJhbXMgPSBbXTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGV2LnBhcmFtcyA9IFsgcFsgMCBdID8/ICcnLCBwWyAxIF0gPz8gJycgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiICA+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsICBxdWVyeS1rZXl3b3JkIHdpZHRoLTVcIiAqbmdJZj1cImluZGV4PT0wXCIgPlxyXG5cdFx0XHRXSEVOXHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlciAqbmdJZj1cImluZGV4IT0wXCJcclxuXHRcdFtyZXF1ZXN0XT1cIm9wZXJhdG9ycyRcIlxyXG5cdFx0W3ZhbHVlXT1cImNvbmRpdGlvbi5vcGVyYXRvci50b1VwcGVyQ2FzZSgpXCJcclxuXHRcdFtyZWFkb25seV09XCJ0cnVlXCJcclxuXHRcdHZhbHVlQ2xhc3M9XCJxdWVyeS1rZXl3b3JkXCJcclxuXHRcdHdpZHRoPVwiNVwiXHJcblx0XHQocGljayk9XCJjb25kaXRpb24ub3BlcmF0b3I9JGV2ZW50LnRvTG93ZXJDYXNlKClcIlx0PlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXJcclxuXHRcdFsobmdNb2RlbCldPVwiY29uZGl0aW9uLnJlZHVjZXJcIlxyXG5cdFx0W2Zvcm1hdFN0cmluZ109XCInezB9KCknXCJcclxuXHRcdFtyZXF1ZXN0XT1cInJlZHVjZXJzJFwiPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0gbXItMVwiICA+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LWtleXdvcmRcIiA+XHJcblx0XHRcdE9GXHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8YWxlcnQtcXVlcnktZWRpdG9yIFtxdWVyeV09XCJjb25kaXRpb24ucXVlcnlcIj48L2FsZXJ0LXF1ZXJ5LWVkaXRvcj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0gbXItMVwiICA+PC9kaXY+XHJcblxyXG5cdDxlZC1hdXRvY29tcGxldGUtcGlja2VyXHJcblx0XHRbdmFsdWVdPVwiZXZhbHVhdG9yXCIgXHJcblx0XHRbcmVxdWVzdF09XCJldmFsdWF0b3JzJFwiXHJcblx0XHQocGljayk9XCJvbkV2YWx1YXRvclBpY2soICRldmVudCApXCIgXHJcblx0XHR2YWx1ZUNsYXNzPVwicXVlcnkta2V5d29yZFwiPlxyXG5cdDwvZWQtYXV0b2NvbXBsZXRlLXBpY2tlcj5cclxuXHJcblx0PGVkLXRleHRib3hcdCpuZ0lmPVwic2hvd0V2YWxQYXJhbUZyb21cIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJldmFsUGFyYW1Gcm9tXCJcclxuXHRcdHdpZHRoPVwiOVwiXHJcblx0XHR0eXBlPVwibnVtYmVyXCIgPlxyXG5cdDwvZWQtdGV4dGJveD5cclxuXHJcblx0PGVkLXRleHRib3hcdCpuZ0lmPVwic2hvd0V2YWxQYXJhbVRvXCJcclxuXHRcdFsobmdNb2RlbCldPVwiZXZhbFBhcmFtVG9cIlxyXG5cdFx0bGFiZWw9XCJUT1wiXHJcblx0XHRsYWJlbENsYXNzPVwicXVlcnkta2V5d29yZFwiXHJcblx0XHR3aWR0aD1cIjlcIlxyXG5cdFx0dHlwZT1cIm51bWJlclwiID5cclxuXHQ8L2VkLXRleHRib3g+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3ZlZC5lbWl0KGNvbmRpdGlvbilcIj5cclxuXHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=