import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AlertEvalType, AlertOperator, AlertReducer, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';
import { BaseChartEditorComponent } from '../../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "./query/query";
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
    } }, directives: [i1.NgIf, i2.AutoCompletePickerComponent, i3.NgControlStatus, i3.NgModel, i4.AlertQueryEditorComponent, i2.TextBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertConditionEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-alert-condition',
                templateUrl: './cond.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { condition: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvY29uZmlnL2NvbmRpdGlvbnMvY29uZC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYWxlcnQvY29uZmlnL2NvbmRpdGlvbnMvY29uZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBa0IsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQzNELFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7O0lDRjVFLGlDQUNDO0lBQUEsc0JBQ0Q7SUFBQSxpQkFBUTs7OztJQUdULGtEQU95QjtJQUR4Qiw2T0FBMkIsb0JBQW9CLElBQUM7SUFDakQsaUJBQXlCOzs7SUFOeEIsMkNBQXNCLGtEQUFBLGtCQUFBOzs7O0lBK0J2QixzQ0FJYTtJQUhaLDZPQUEyQjtJQUc1QixpQkFBYTs7O0lBSFosOENBQTJCOzs7O0lBSzVCLHNDQU1hO0lBTFosMk9BQXlCO0lBSzFCLGlCQUFhOzs7SUFMWiw0Q0FBeUI7O0FEcEMzQixNQUFNLE9BQU8sNkJBQThCLFNBQVEsd0JBQXdCO0lBb0Z6RSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQWxGUixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUV4RCxxQkFBZ0IsR0FB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QUM7SUFDaEIsQ0FBQzs7MEdBdEhXLDZCQUE2Qix1QkFvRm5CLFdBQVc7a0VBcEZyQiw2QkFBNkI7UUNYMUMsOEJBRUM7UUFBQSw4QkFDQztRQUFBLGtGQUNDO1FBRUYsaUJBQU07UUFFTixvSEFPQTtRQUVBLGlEQUl5QjtRQUh4QixrTEFBK0I7UUFHaEMsaUJBQXlCO1FBRXpCLDhCQUNDO1FBQUEsZ0NBQ0M7UUFBQSxvQkFDRDtRQUFBLGlCQUFRO1FBQ1QsaUJBQU07UUFFTix3Q0FBbUU7UUFFbkUseUJBQWtDO1FBRWxDLGtEQUt5QjtRQUZ4QiwrSEFBUSwyQkFBeUIsSUFBQztRQUVuQyxpQkFBeUI7UUFFekIsOEZBSUE7UUFFQSwrRkFNQTtRQUVBLCtCQUNDO1FBQUEsa0NBQ0M7UUFEb0MsMEdBQVMsK0JBQXVCLElBQUM7UUFDckUseUJBQTJCO1FBQzVCLGlCQUFRO1FBQ1QsaUJBQU07UUFDUCxpQkFBTTs7UUF4RGdELGVBQWdCO1FBQWhCLHFDQUFnQjtRQUs3QyxlQUFnQjtRQUFoQixxQ0FBZ0I7UUFVdkMsZUFBK0I7UUFBL0IsK0NBQStCLHlCQUFBLDBCQUFBO1FBV1osZUFBeUI7UUFBekIsMkNBQXlCO1FBSzVDLGVBQW1CO1FBQW5CLHFDQUFtQiw0QkFBQTtRQU1SLGVBQXlCO1FBQXpCLDRDQUF5QjtRQU16QixlQUF1QjtRQUF2QiwwQ0FBdUI7O2tERG5DdkIsNkJBQTZCO2NBSnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsYUFBYTthQUMzQjs7c0JBcUZjLE1BQU07dUJBQUUsV0FBVzt3QkFsRnZCLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRDb25kaXRpb24sIEFsZXJ0RXZhbFR5cGUsIEFsZXJ0T3BlcmF0b3IsIEFsZXJ0UmVkdWNlcixcblx0UGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItYWxlcnQtY29uZGl0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb25kaXRpb25FZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcblxuICBASW5wdXQoKSBjb25kaXRpb246IEFsZXJ0Q29uZGl0aW9uO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyID0gMDtcblxuICBAT3V0cHV0KCkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QWxlcnRDb25kaXRpb24+KCk7XG5cblx0QWxlcnRFdmFsVHlwZVJlZiA9IFtcblx0XHQnaXMgYmVsb3cnLFxuXHRcdCdpcyBhYm92ZScsXG5cdFx0J2lzIG91dHNpZGUgcmFuZ2UnLFxuXHRcdCdpcyB3aXRoaW4gcmFuZ2UnLFxuXHRcdCdoYXMgbm8gdmFsdWUnXG5cdF1cbiAgXG4gIGdldCByZWR1Y2VycyQoKSB7XG5cdFx0cmV0dXJuIG9mKCBPYmplY3QudmFsdWVzKCBBbGVydFJlZHVjZXIgKSk7XG5cdH1cblx0XG5cdGdldCBldmFsdWF0b3JzJCgpe1xuXHRcdHJldHVybiBvZiggWy4uLnRoaXMuQWxlcnRFdmFsVHlwZVJlZl0ubWFwKCB4ID0+IHgudG9VcHBlckNhc2UoKSApICk7XG5cdH1cblxuXHRnZXQgZXZhbHVhdG9yKCkgOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLkFsZXJ0RXZhbFR5cGVSZWZbIHRoaXMuY29uZGl0aW9uLmV2YWx1YXRvci50eXBlIF0udG9VcHBlckNhc2UoKTtcblx0fVxuXG5cdGdldCBvcGVyYXRvcnMkKCkge1xuXHRcdHJldHVybiBvZiggT2JqZWN0LnZhbHVlcyggQWxlcnRPcGVyYXRvciApLm1hcCggeCA9PiB4LnRvVXBwZXJDYXNlKCkgKSApO1xuXHR9XG5cblx0Z2V0IGV2YWx1YXRvclR5cGUoKSA6IEFsZXJ0RXZhbFR5cGUge1xuXHRcdHJldHVybiB0aGlzLmNvbmRpdGlvbi5ldmFsdWF0b3IudHlwZTtcblx0fVxuXG5cdGdldCBzaG93RXZhbFBhcmFtRnJvbSgpOiBib29sZWFue1xuXHRcdHJldHVybiAoIHRoaXMuZXZhbHVhdG9yVHlwZSAhPSBBbGVydEV2YWxUeXBlLkhhc05vVmFsdWUgKTtcblx0fVxuXG5cdGdldCBzaG93RXZhbFBhcmFtVG8oKSA6IGJvb2xlYW57XG5cdFx0cmV0dXJuICggdGhpcy5ldmFsdWF0b3JUeXBlID09IEFsZXJ0RXZhbFR5cGUuSXNPdXRzaWRlUmFuZ2UgKSB8fCBcblx0XHRcdCggdGhpcy5ldmFsdWF0b3JUeXBlID09IEFsZXJ0RXZhbFR5cGUuSXNXaXRoaW5SYW5nZSApIDtcblx0fVxuXG5cdGdldCBldmFsUGFyYW1Gcm9tKCkgOnN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5jb25kaXRpb25cblx0XHRcdC5ldmFsdWF0b3Jcblx0XHRcdC5wYXJhbXNbIDAgXVxuXHRcdFx0Py50b1N0cmluZygpO1xuXHR9XG5cblx0c2V0IGV2YWxQYXJhbUZyb20oIHA6IHN0cmluZyApe1xuXHRcdGxldCBmcm9tOiBhbnkgPSBwYXJzZUZsb2F0KCBwICk7XG5cdFx0bGV0IHRvOiBhbnkgPSBwYXJzZUZsb2F0KCB0aGlzLmV2YWxQYXJhbVRvICk7XG5cblx0XHRmcm9tID0gaXNOYU4oIGZyb20gKSA/ICcnIDogZnJvbTtcblx0XHR0byA9IGlzTmFOKCB0byApID8gJycgOiB0bztcblx0XG5cdFx0dGhpcy5jb25kaXRpb24uZXZhbHVhdG9yLnBhcmFtcyA9IHRoaXMuc2hvd0V2YWxQYXJhbVRvID8gWyBmcm9tLCB0byBdIDogWyBmcm9tIF07XG5cblx0XHR0aGlzLnJlZnJlc2goKTtcblx0fVxuXG5cdGdldCBldmFsUGFyYW1UbygpIDpzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQuY29uZGl0aW9uXG5cdFx0XHQuZXZhbHVhdG9yXG5cdFx0XHQucGFyYW1zWyAxIF1cblx0XHRcdD8udG9TdHJpbmcoKTtcblx0fVxuXG5cdHNldCBldmFsUGFyYW1UbyggcDogc3RyaW5nICl7XG5cdFx0bGV0IGZyb206IGFueSA9IHBhcnNlRmxvYXQoIHRoaXMuZXZhbFBhcmFtRnJvbSApO1xuXHRcdGxldCB0bzogYW55ID0gcGFyc2VGbG9hdCggcCApO1xuXG5cdFx0ZnJvbSA9IGlzTmFOKCBmcm9tICkgPyAnJyA6IGZyb207XG5cdFx0dG8gPSBpc05hTiggdG8gKSA/ICcnIDogdG87XG5cblx0XHR0aGlzLmNvbmRpdGlvbi5ldmFsdWF0b3IucGFyYW1zID0gWyBmcm9tLCB0byBdO1xuXG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG5cdH1cblxuXHRvbkV2YWx1YXRvclBpY2soIGU6IHN0cmluZyApe1xuXHRcdFxuXHRcdGNvbnN0IGluZGV4ID0gdGhpc1xuXHRcdFx0LkFsZXJ0RXZhbFR5cGVSZWZcblx0XHRcdC5pbmRleE9mKCBlLnRvTG93ZXJDYXNlKCkgKTtcblxuXHRcdGlmKCAtMSA9PSBpbmRleCB8fCBlID09IHRoaXMuZXZhbHVhdG9yICl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jb25kaXRpb24uZXZhbHVhdG9yLnR5cGUgPSBpbmRleDtcblx0XHRjb25zdCBldiA9IHRoaXMuY29uZGl0aW9uLmV2YWx1YXRvcjtcblx0XHRjb25zdCBwID0gZXYucGFyYW1zO1xuXG5cdFx0c3dpdGNoKCBldi50eXBlICl7XG5cdFx0XHRjYXNlIEFsZXJ0RXZhbFR5cGUuSXNBYm92ZTpcblx0XHRcdGNhc2UgQWxlcnRFdmFsVHlwZS5Jc0JlbG93OlxuXHRcdFx0XHRldi5wYXJhbXMgPSBbIHBbIDAgXSA/PyAnJyBdO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBbGVydEV2YWxUeXBlLkhhc05vVmFsdWU6XG5cdFx0XHRcdGV2LnBhcmFtcyA9IFtdO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZXYucGFyYW1zID0gWyBwWyAwIF0gPz8gJycsIHBbIDEgXSA/PyAnJyBdO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLnJlZnJlc2goKTtcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCIgID5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgIHF1ZXJ5LWtleXdvcmQgd2lkdGgtNVwiICpuZ0lmPVwiaW5kZXg9PTBcIiA+XHJcblx0XHRcdFdIRU5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxlZC1hdXRvY29tcGxldGUtcGlja2VyICpuZ0lmPVwiaW5kZXghPTBcIlxyXG5cdFx0W3JlcXVlc3RdPVwib3BlcmF0b3JzJFwiXHJcblx0XHRbdmFsdWVdPVwiY29uZGl0aW9uLm9wZXJhdG9yLnRvVXBwZXJDYXNlKClcIlxyXG5cdFx0W3JlYWRvbmx5XT1cInRydWVcIlxyXG5cdFx0dmFsdWVDbGFzcz1cInF1ZXJ5LWtleXdvcmRcIlxyXG5cdFx0d2lkdGg9XCI1XCJcclxuXHRcdChwaWNrKT1cImNvbmRpdGlvbi5vcGVyYXRvcj0kZXZlbnQudG9Mb3dlckNhc2UoKVwiXHQ+XHJcblx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuXHQ8ZWQtYXV0b2NvbXBsZXRlLXBpY2tlclxyXG5cdFx0WyhuZ01vZGVsKV09XCJjb25kaXRpb24ucmVkdWNlclwiXHJcblx0XHRbZm9ybWF0U3RyaW5nXT1cIid7MH0oKSdcIlxyXG5cdFx0W3JlcXVlc3RdPVwicmVkdWNlcnMkXCI+XHJcblx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBtci0xXCIgID5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcXVlcnkta2V5d29yZFwiID5cclxuXHRcdFx0T0ZcclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxhbGVydC1xdWVyeS1lZGl0b3IgW3F1ZXJ5XT1cImNvbmRpdGlvbi5xdWVyeVwiPjwvYWxlcnQtcXVlcnktZWRpdG9yPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBtci0xXCIgID48L2Rpdj5cclxuXHJcblx0PGVkLWF1dG9jb21wbGV0ZS1waWNrZXJcclxuXHRcdFt2YWx1ZV09XCJldmFsdWF0b3JcIiBcclxuXHRcdFtyZXF1ZXN0XT1cImV2YWx1YXRvcnMkXCJcclxuXHRcdChwaWNrKT1cIm9uRXZhbHVhdG9yUGljayggJGV2ZW50IClcIiBcclxuXHRcdHZhbHVlQ2xhc3M9XCJxdWVyeS1rZXl3b3JkXCI+XHJcblx0PC9lZC1hdXRvY29tcGxldGUtcGlja2VyPlxyXG5cclxuXHQ8ZWQtdGV4dGJveFx0Km5nSWY9XCJzaG93RXZhbFBhcmFtRnJvbVwiXHJcblx0XHRbKG5nTW9kZWwpXT1cImV2YWxQYXJhbUZyb21cIlxyXG5cdFx0d2lkdGg9XCI5XCJcclxuXHRcdHR5cGU9XCJudW1iZXJcIiA+XHJcblx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHQ8ZWQtdGV4dGJveFx0Km5nSWY9XCJzaG93RXZhbFBhcmFtVG9cIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJldmFsUGFyYW1Ub1wiXHJcblx0XHRsYWJlbD1cIlRPXCJcclxuXHRcdGxhYmVsQ2xhc3M9XCJxdWVyeS1rZXl3b3JkXCJcclxuXHRcdHdpZHRoPVwiOVwiXHJcblx0XHR0eXBlPVwibnVtYmVyXCIgPlxyXG5cdDwvZWQtdGV4dGJveD5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcG9pbnRlclwiIChjbGljayk9XCJyZW1vdmVkLmVtaXQoY29uZGl0aW9uKVwiPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPlxyXG5cdFx0PC9sYWJlbD5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==