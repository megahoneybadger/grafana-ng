import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
const _c0 = ["editor"];
const _c1 = ["suggestions"];
function FieldFunctionEditorComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵelementStart(1, "span", 9);
    i0.ɵɵlistener("click", function FieldFunctionEditorComponent_a_4_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onShowEditor($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", ctx_r0.isEditorVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.value.param.value);
} }
const _c2 = function (a0) { return { width: a0 }; };
function FieldFunctionEditorComponent_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10, 11);
    i0.ɵɵlistener("ngModelChange", function FieldFunctionEditorComponent_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.textValue = $event; })("change", function FieldFunctionEditorComponent_input_5_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r8); return $event.stopPropagation(); })("focusout", function FieldFunctionEditorComponent_input_5_Template_input_focusout_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onEditorFocusOut(); })("keydown", function FieldFunctionEditorComponent_input_5_Template_input_keydown_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onEditorKeyDown(); })("keyup.enter", function FieldFunctionEditorComponent_input_5_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onEditorKeyUpEnter(); })("keyup.escape", function FieldFunctionEditorComponent_input_5_Template_input_keyup_escape_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onEditorKeyUpEnter(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, (ctx_r1.textValue.length + 1) * 8 + "px"))("ngModel", ctx_r1.textValue);
} }
const _c3 = function (a0) { return [a0]; };
export class FieldFunctionEditorComponent {
    constructor() {
        this.remove = new EventEmitter();
        this.change = new EventEmitter();
        this.isEditorVisible = false;
        this.isSuggestionsMenuOpen = false;
        this.suggestionItems = [];
        this.deleteMenuItem = { label: 'Remove', command: _ => this.remove.emit() };
    }
    get hasSuggestions() {
        return (this.value.param && this.value.param.suggestions);
    }
    ngOnInit() {
        if (this.value.param) {
            this.textValue = this.value.param.value;
        }
        if (this.hasSuggestions) {
            this
                .value
                .param
                .suggestions
                .forEach(e => this.suggestionItems.push({
                label: e,
                command: (x) => {
                    this.value.param.value = this.textValue = x.item.label;
                    this.isEditorVisible = false;
                }
            }));
        }
    }
    onShowEditor(e) {
        if (!this.value.param) {
            return;
        }
        if (this.hasSuggestions) {
            this.isSuggestionsMenuOpen = true;
            this.suggestions.show(e);
        }
        setTimeout(() => {
            this.isEditorVisible = true;
            setTimeout(() => this.editorElement.nativeElement.focus(), 0);
        }, 0);
    }
    onEditorFocusOut() {
        if (!this.isSuggestionsMenuOpen) {
            this.isEditorVisible = false;
            this.value.param.value = this.textValue;
            //this.change.emit()
            //console.log( "onEditorFocusOut" )
        }
    }
    onEditorKeyDown() {
        this.isSuggestionsMenuOpen = false;
        this.suggestions.hide();
    }
    onEditorKeyUpEnter() {
        this.isEditorVisible = false;
        this.value.param.value = this.textValue;
        this.change.emit();
        //console.log( "onEditorKeyUpEnter" )
    }
}
FieldFunctionEditorComponent.ɵfac = function FieldFunctionEditorComponent_Factory(t) { return new (t || FieldFunctionEditorComponent)(); };
FieldFunctionEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldFunctionEditorComponent, selectors: [["field-function-editor"]], viewQuery: function FieldFunctionEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.suggestions = _t.first);
    } }, inputs: { value: "value" }, outputs: { remove: "remove", change: "change" }, decls: 12, vars: 7, consts: [[1, "gf-form"], [1, "gf-form-label"], [1, "pointer", 3, "click"], [4, "ngIf"], ["type", "text", "class", "ff__editor ", "spellcheck", "false", 3, "ngStyle", "ngModel", "ngModelChange", "change", "focusout", "keydown", "keyup.enter", "keyup.escape", 4, "ngIf"], [3, "click"], [3, "items"], ["cmRemove", ""], ["suggestions", ""], [3, "hidden", "click"], ["type", "text", "spellcheck", "false", 1, "ff__editor", 3, "ngStyle", "ngModel", "ngModelChange", "change", "focusout", "keydown", "keyup.enter", "keyup.escape"], ["editor", ""]], template: function FieldFunctionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵlistener("click", function FieldFunctionEditorComponent_Template_a_click_2_listener($event) { i0.ɵɵrestoreView(_r14); const _r2 = i0.ɵɵreference(9); return _r2.show($event); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FieldFunctionEditorComponent_a_4_Template, 3, 2, "a", 3);
        i0.ɵɵtemplate(5, FieldFunctionEditorComponent_input_5_Template, 2, 4, "input", 4);
        i0.ɵɵelementStart(6, "a", 5);
        i0.ɵɵlistener("click", function FieldFunctionEditorComponent_Template_a_click_6_listener($event) { return ctx.onShowEditor($event); });
        i0.ɵɵtext(7, ")");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "ed-context-menu", 6, 7);
        i0.ɵɵelement(10, "ed-context-menu", 6, 8);
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.value.name, " (");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.value.param);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isEditorVisible);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("items", i0.ɵɵpureFunction1(5, _c3, ctx.deleteMenuItem));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("items", ctx.suggestionItems);
    } }, directives: [i1.NgIf, i2.ContextMenuComponent, i3.DefaultValueAccessor, i1.NgStyle, i3.NgControlStatus, i3.NgModel], styles: [".ff__editor[_ngcontent-%COMP%]{background:transparent;border:none;color:#d8d9da;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin:0;padding:0;width:24px}.ff__editor[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;outline:none!important;outline-width:0!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FieldFunctionEditorComponent, [{
        type: Component,
        args: [{
                selector: 'field-function-editor',
                templateUrl: './func-editor.html',
                styleUrls: ['./func-editor.scss']
            }]
    }], null, { value: [{
            type: Input
        }], remove: [{
            type: Output
        }], change: [{
            type: Output
        }], editorElement: [{
            type: ViewChild,
            args: ['editor']
        }], suggestions: [{
            type: ViewChild,
            args: ["suggestions"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuYy1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZmllbGRzL2Z1bmMtZWRpdG9yL2Z1bmMtZWRpdG9yLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL2Rlc2lnbmVyL3F1ZXJ5L2ZpZWxkcy9mdW5jLWVkaXRvci9mdW5jLWVkaXRvci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUMxQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDR2hELHlCQUNDO0lBQUEsK0JBQWtFO0lBQWpDLDBNQUFnQztJQUFDLFlBQXFCO0lBQUEsaUJBQU87SUFDL0YsaUJBQUk7OztJQURHLGVBQTBCO0lBQTFCLCtDQUEwQjtJQUFrQyxlQUFxQjtJQUFyQiw4Q0FBcUI7Ozs7O0lBR3hGLHFDQVlBO0lBVEMsNk5BQXVCLGtJQUNiLHdCQUF3QixJQURYLGtNQUFBLCtMQUFBLDBNQUFBLDRNQUFBO0lBSHhCLGlCQVlBOzs7SUFWQyw4RkFBeUQsNkJBQUE7OztBREE1RCxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDO1FBUVksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJdEMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFD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aEIsK0NBQWdCO1FBRWxFLGVBQW1CO1FBQW5CLHNDQUFtQjtRQUlmLGVBQXVCO1FBQXZCLDBDQUF1QjtRQWdCZixlQUEwQjtRQUExQixzRUFBMEI7UUFFMUIsZUFBeUI7UUFBekIsMkNBQXlCOztrRERoQjdCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDbEM7Z0JBR1UsS0FBSztrQkFBYixLQUFLO1lBQ0ksTUFBTTtrQkFBZixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBU2MsYUFBYTtrQkFBakMsU0FBUzttQkFBQyxRQUFRO1lBQ08sV0FBVztrQkFBcEMsU0FBUzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAndWlsaWInO1xyXG5pbXBvcnQgeyBGdW5jT2JqZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbWV0cmljcy5tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmllbGQtZnVuY3Rpb24tZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZnVuYy1lZGl0b3IuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZnVuYy1lZGl0b3Iuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZEZ1bmN0aW9uRWRpdG9yQ29tcG9uZW50ICAge1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogRnVuY09iamVjdDtcclxuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHRleHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBpc0VkaXRvclZpc2libGUgPSBmYWxzZTtcclxuICBpc1N1Z2dlc3Rpb25zTWVudU9wZW4gPSBmYWxzZTtcclxuICBzdWdnZXN0aW9uSXRlbXMgPSBbXTtcclxuICBkZWxldGVNZW51SXRlbSA9IHsgbGFiZWw6ICdSZW1vdmUnLCBjb21tYW5kOiBfID0+IHRoaXMucmVtb3ZlLmVtaXQoKX1cclxuXHJcbiAgQFZpZXdDaGlsZCgnZWRpdG9yJykgZWRpdG9yRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwic3VnZ2VzdGlvbnNcIikgc3VnZ2VzdGlvbnM6IENvbnRleHRNZW51Q29tcG9uZW50O1xyXG5cclxuICBnZXQgaGFzU3VnZ2VzdGlvbnMoKXtcclxuICAgIHJldHVybiAoIHRoaXMudmFsdWUucGFyYW0gJiYgdGhpcy52YWx1ZS5wYXJhbS5zdWdnZXN0aW9ucyApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIGlmKCB0aGlzLnZhbHVlLnBhcmFtICl7XHJcbiAgICAgIHRoaXMudGV4dFZhbHVlID0gdGhpcy52YWx1ZS5wYXJhbS52YWx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYoIHRoaXMuaGFzU3VnZ2VzdGlvbnMgKXtcclxuICAgICAgdGhpc1xyXG4gICAgICAgIC52YWx1ZVxyXG4gICAgICAgIC5wYXJhbVxyXG4gICAgICAgIC5zdWdnZXN0aW9uc1xyXG4gICAgICAgIC5mb3JFYWNoKGUgPT4gdGhpcy5zdWdnZXN0aW9uSXRlbXMucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogZSxcclxuICAgICAgICAgIGNvbW1hbmQ6ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUucGFyYW0udmFsdWUgPSB0aGlzLnRleHRWYWx1ZSA9IHguaXRlbS5sYWJlbDtcclxuICAgICAgICAgICAgdGhpcy5pc0VkaXRvclZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaG93RWRpdG9yKGUpe1xyXG4gICAgaWYoICF0aGlzLnZhbHVlLnBhcmFtICl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5oYXNTdWdnZXN0aW9ucykge1xyXG4gICAgICB0aGlzLmlzU3VnZ2VzdGlvbnNNZW51T3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc2hvdyhlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgXHJcbiAgICAgIHRoaXMuaXNFZGl0b3JWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZWRpdG9yRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDAgKVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRvckZvY3VzT3V0KCl7XHJcbiAgICBpZiggIXRoaXMuaXNTdWdnZXN0aW9uc01lbnVPcGVuICl7XHJcbiAgICAgIHRoaXMuaXNFZGl0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudmFsdWUucGFyYW0udmFsdWUgPSB0aGlzLnRleHRWYWx1ZTtcclxuICAgICAgLy90aGlzLmNoYW5nZS5lbWl0KClcclxuICAgICAgLy9jb25zb2xlLmxvZyggXCJvbkVkaXRvckZvY3VzT3V0XCIgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FZGl0b3JLZXlEb3duKCl7XHJcbiAgICB0aGlzLmlzU3VnZ2VzdGlvbnNNZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zdWdnZXN0aW9ucy5oaWRlKClcclxuICB9XHJcblxyXG4gIG9uRWRpdG9yS2V5VXBFbnRlcigpe1xyXG4gICAgdGhpcy5pc0VkaXRvclZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMudmFsdWUucGFyYW0udmFsdWUgPSB0aGlzLnRleHRWYWx1ZVxyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCgpXHJcbiAgICAvL2NvbnNvbGUubG9nKCBcIm9uRWRpdG9yS2V5VXBFbnRlclwiIClcclxuICB9XHJcblxyXG5cclxufSIsIjxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0PGEgKGNsaWNrKT1cImNtUmVtb3ZlLnNob3coICRldmVudCApXCIgY2xhc3M9XCJwb2ludGVyXCI+e3t2YWx1ZS5uYW1lfX0gKDwvYT5cclxuXHJcblx0XHQ8YSAqbmdJZj1cInZhbHVlLnBhcmFtXCI+XHJcblx0XHRcdDxzcGFuIFtoaWRkZW5dPVwiaXNFZGl0b3JWaXNpYmxlXCIgKGNsaWNrKT1cIm9uU2hvd0VkaXRvciggJGV2ZW50IClcIj57e3ZhbHVlLnBhcmFtLnZhbHVlfX08L3NwYW4+XHJcblx0XHQ8L2E+XHJcblxyXG5cdFx0PGlucHV0ICpuZ0lmPVwiaXNFZGl0b3JWaXNpYmxlXCIgdHlwZT1cInRleHRcIlxyXG5cdFx0XHRjbGFzcz1cImZmX19lZGl0b3IgXCJcclxuXHRcdFx0W25nU3R5bGVdPVwie3dpZHRoOiAoKHRleHRWYWx1ZS5sZW5ndGggKyAxKSAqIDgpICsgJ3B4JyB9XCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJ0ZXh0VmFsdWVcIlxyXG5cdFx0XHQoY2hhbmdlKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcblx0XHRcdChmb2N1c291dCk9XCJvbkVkaXRvckZvY3VzT3V0KClcIlxyXG5cdFx0XHQoa2V5ZG93bik9XCJvbkVkaXRvcktleURvd24oKVwiXHJcblx0XHRcdChrZXl1cC5lbnRlcik9XCJvbkVkaXRvcktleVVwRW50ZXIoKVwiXHJcblx0XHRcdChrZXl1cC5lc2NhcGUpPVwib25FZGl0b3JLZXlVcEVudGVyKClcIlxyXG5cdFx0XHRzcGVsbGNoZWNrPVwiZmFsc2VcIiBcclxuXHRcdFx0I2VkaXRvciA+XHJcblxyXG5cdFx0PGEgKGNsaWNrKT1cIm9uU2hvd0VkaXRvciggJGV2ZW50IClcIj4pPC9hPlxyXG5cdDwvbGFiZWw+XHJcbjwvZGl2PlxyXG5cclxuPGVkLWNvbnRleHQtbWVudSBbaXRlbXNdPVwiW2RlbGV0ZU1lbnVJdGVtXVwiICNjbVJlbW92ZSA+PC9lZC1jb250ZXh0LW1lbnU+XHJcblxyXG48ZWQtY29udGV4dC1tZW51IFtpdGVtc109XCJzdWdnZXN0aW9uSXRlbXNcIiAjc3VnZ2VzdGlvbnMgPjwvZWQtY29udGV4dC1tZW51PiJdfQ==