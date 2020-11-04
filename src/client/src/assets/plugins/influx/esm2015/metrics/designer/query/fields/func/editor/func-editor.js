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
    i0.ɵɵtextInterpolate(ctx_r0.paramValue);
} }
const _c2 = function (a0) { return { width: a0 }; };
function FieldFunctionEditorComponent_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10, 11);
    i0.ɵɵlistener("ngModelChange", function FieldFunctionEditorComponent_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.textValue = $event; })("focusout", function FieldFunctionEditorComponent_input_5_Template_input_focusout_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onEditorFocusOut(); })("keydown", function FieldFunctionEditorComponent_input_5_Template_input_keydown_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onEditorKeyDown(); })("keyup.enter", function FieldFunctionEditorComponent_input_5_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onEditorKeyUpEnter(); })("keyup.escape", function FieldFunctionEditorComponent_input_5_Template_input_keyup_escape_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onEditorKeyUpEnter(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, (ctx_r1.textValue.length + 1) * 8 + "px"))("ngModel", ctx_r1.textValue);
} }
const _c3 = function (a0) { return [a0]; };
export class FieldFunctionEditorComponent {
    constructor() {
        this.remove = new EventEmitter();
        this.rebuild = new EventEmitter();
        this.isEditorVisible = false;
        this.isSuggestionsMenuOpen = false;
        this.suggestionItems = [];
        this.deleteMenuItem = { label: 'Remove', command: _ => this.remove.emit() };
    }
    get param() {
        return this.func.param;
    }
    get paramValue() {
        return this.param.value;
    }
    get hasSuggestions() {
        return (this.param && this.param.suggestions);
    }
    ngOnInit() {
        if (this.param) {
            this.textValue = this.paramValue;
        }
        if (this.hasSuggestions) {
            this
                .param
                .suggestions
                .forEach(e => this.suggestionItems.push({
                label: e,
                command: (x) => {
                    const same = this.paramValue == x.item.label;
                    if (!same) {
                        this.param.value = this.textValue = x.item.label;
                        this.isEditorVisible = false;
                        this.rebuild.emit();
                    }
                }
            }));
        }
    }
    onShowEditor(e) {
        if (!this.param) {
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
            const same = this.paramValue == this.textValue;
            if (!same) {
                this.param.value = this.textValue;
                this.rebuild.emit();
            }
        }
    }
    onEditorKeyDown() {
        this.isSuggestionsMenuOpen = false;
        this.suggestions.hide();
    }
    onEditorKeyUpEnter() {
        this.isEditorVisible = false;
        const same = this.paramValue == this.textValue;
        if (!same) {
            this.param.value = this.textValue;
            this.rebuild.emit();
        }
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
    } }, inputs: { func: "func" }, outputs: { remove: "remove", rebuild: "rebuild" }, decls: 12, vars: 7, consts: [[1, "gf-form"], [1, "gf-form-label"], [1, "pointer", 3, "click"], [4, "ngIf"], ["type", "text", "class", "ff__editor ", "spellcheck", "false", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter", "keyup.escape", 4, "ngIf"], [3, "click"], [3, "items"], ["cmRemove", ""], ["suggestions", ""], [3, "hidden", "click"], ["type", "text", "spellcheck", "false", 1, "ff__editor", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter", "keyup.escape"], ["editor", ""]], template: function FieldFunctionEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵlistener("click", function FieldFunctionEditorComponent_Template_a_click_2_listener($event) { i0.ɵɵrestoreView(_r13); const _r2 = i0.ɵɵreference(9); return _r2.show($event); });
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
        i0.ɵɵtextInterpolate1("", ctx.func.name, " (");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.param);
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
    }], null, { func: [{
            type: Input
        }], remove: [{
            type: Output
        }], rebuild: [{
            type: Output
        }], editorElement: [{
            type: ViewChild,
            args: ['editor']
        }], suggestions: [{
            type: ViewChild,
            args: ["suggestions"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuYy1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZmllbGRzL2Z1bmMvZWRpdG9yL2Z1bmMtZWRpdG9yLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvZGF0YXNvdXJjZXMvaW5mbHV4L3NyYy9tZXRyaWNzL2Rlc2lnbmVyL3F1ZXJ5L2ZpZWxkcy9mdW5jL2VkaXRvci9mdW5jLWVkaXRvci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUMxQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDR2hELHlCQUNDO0lBQUEsK0JBQWtFO0lBQWpDLDBNQUFnQztJQUFDLFlBQWM7SUFBQSxpQkFBTztJQUN4RixpQkFBSTs7O0lBREcsZUFBMEI7SUFBMUIsK0NBQTBCO0lBQWtDLGVBQWM7SUFBZCx1Q0FBYzs7Ozs7SUFHakYscUNBV0E7SUFSQyw2TkFBdUIsZ01BQUEsK0xBQUEsME1BQUEsNE1BQUE7SUFIeEIsaUJBV0E7OztJQVRDLDhGQUF5RCw2QkFBQTs7O0FEQTVELE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFRWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl2QyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsbUJBQWMsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0s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QUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3BCO0lBQ0gsQ0FBQzs7d0dBakdVLDRCQUE0QjtpRUFBNUIsNEJBQTRCOzs7Ozs7Ozs7UUNWekMsOEJBQ0M7UUFBQSxnQ0FDQztRQUFBLDRCQUFxRDtRQUFsRCxpS0FBUyxnQkFBdUIsSUFBQztRQUFpQixZQUFlO1FBQUEsaUJBQUk7UUFFeEUseUVBQ0M7UUFHRCxpRkFXQTtRQUFBLDRCQUFvQztRQUFqQywwR0FBUyx3QkFBc0IsSUFBQztRQUFDLGlCQUFDO1FBQUEsaUJBQUk7UUFDMUMsaUJBQVE7UUFDVCxpQkFBTTtRQUVOLHdDQUF5RTtRQUV6RSx5Q0FBMkU7O1FBdkJwQixlQUFlO1FBQWYsOENBQWU7UUFFakUsZUFBYTtRQUFiLGdDQUFhO1FBSVQsZUFBdUI7UUFBdkIsMENBQXVCO1FBZWYsZUFBMEI7UUFBMUIsc0VBQTBCO1FBRTFCLGVBQXlCO1FBQXpCLDJDQUF5Qjs7a0REZjdCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDbEM7Z0JBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0ksTUFBTTtrQkFBZixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQVNjLGFBQWE7a0JBQWpDLFNBQVM7bUJBQUMsUUFBUTtZQUNPLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJ3VpbGliJztcclxuaW1wb3J0IHsgRnVuY09iamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21ldHJpY3MubSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZpZWxkLWZ1bmN0aW9uLWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Z1bmMtZWRpdG9yLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Z1bmMtZWRpdG9yLnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRGdW5jdGlvbkVkaXRvckNvbXBvbmVudCAgIHtcclxuXHJcbiAgQElucHV0KCkgZnVuYzogRnVuY09iamVjdDtcclxuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWJ1aWxkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICB0ZXh0VmFsdWU6IHN0cmluZztcclxuXHJcbiAgaXNFZGl0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgaXNTdWdnZXN0aW9uc01lbnVPcGVuID0gZmFsc2U7XHJcbiAgc3VnZ2VzdGlvbkl0ZW1zID0gW107XHJcbiAgZGVsZXRlTWVudUl0ZW0gPSB7IGxhYmVsOiAnUmVtb3ZlJywgY29tbWFuZDogXyA9PiB0aGlzLnJlbW92ZS5lbWl0KCl9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2VkaXRvcicpIGVkaXRvckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInN1Z2dlc3Rpb25zXCIpIHN1Z2dlc3Rpb25zOiBDb250ZXh0TWVudUNvbXBvbmVudDtcclxuXHJcbiAgZ2V0IHBhcmFtKCl7XHJcbiAgICByZXR1cm4gdGhpcy5mdW5jLnBhcmFtO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcmFtVmFsdWUoKXtcclxuICAgIHJldHVybiB0aGlzLnBhcmFtLnZhbHVlXHJcbiAgfVxyXG5cclxuICBnZXQgaGFzU3VnZ2VzdGlvbnMoKXtcclxuICAgIHJldHVybiAoIHRoaXMucGFyYW0gJiYgdGhpcy5wYXJhbS5zdWdnZXN0aW9ucyApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIGlmKCB0aGlzLnBhcmFtICl7XHJcbiAgICAgIHRoaXMudGV4dFZhbHVlID0gdGhpcy5wYXJhbVZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiggdGhpcy5oYXNTdWdnZXN0aW9ucyApe1xyXG4gICAgICB0aGlzXHJcbiAgICAgICAgLnBhcmFtXHJcbiAgICAgICAgLnN1Z2dlc3Rpb25zXHJcbiAgICAgICAgLmZvckVhY2goZSA9PiB0aGlzLnN1Z2dlc3Rpb25JdGVtcy5wdXNoKHtcclxuICAgICAgICAgIGxhYmVsOiBlLFxyXG4gICAgICAgICAgY29tbWFuZDogKHgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhbWUgPSB0aGlzLnBhcmFtVmFsdWUgPT0geC5pdGVtLmxhYmVsO1xyXG5cclxuICAgICAgICAgICAgaWYoICFzYW1lICl7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXJhbS52YWx1ZSA9IHRoaXMudGV4dFZhbHVlID0geC5pdGVtLmxhYmVsO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNFZGl0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZWJ1aWxkLmVtaXQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2hvd0VkaXRvcihlKXtcclxuICAgIGlmKCAhdGhpcy5wYXJhbSApe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzU3VnZ2VzdGlvbnMpIHtcclxuICAgICAgdGhpcy5pc1N1Z2dlc3Rpb25zTWVudU9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zLnNob3coZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICB0aGlzLmlzRWRpdG9yVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVkaXRvckVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwIClcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0b3JGb2N1c091dCgpe1xyXG4gICAgaWYoICF0aGlzLmlzU3VnZ2VzdGlvbnNNZW51T3BlbiApe1xyXG4gICAgICB0aGlzLmlzRWRpdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgY29uc3Qgc2FtZSA9IHRoaXMucGFyYW1WYWx1ZSA9PSB0aGlzLnRleHRWYWx1ZTtcclxuXHJcbiAgICAgIGlmKCAhc2FtZSApe1xyXG4gICAgICAgIHRoaXMucGFyYW0udmFsdWUgPSB0aGlzLnRleHRWYWx1ZVxyXG4gICAgICAgIHRoaXMucmVidWlsZC5lbWl0KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FZGl0b3JLZXlEb3duKCl7XHJcbiAgICB0aGlzLmlzU3VnZ2VzdGlvbnNNZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zdWdnZXN0aW9ucy5oaWRlKClcclxuICB9XHJcblxyXG4gIG9uRWRpdG9yS2V5VXBFbnRlcigpe1xyXG4gICAgdGhpcy5pc0VkaXRvclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBzYW1lID0gdGhpcy5wYXJhbVZhbHVlID09IHRoaXMudGV4dFZhbHVlO1xyXG5cclxuICAgIGlmKCAhc2FtZSApe1xyXG4gICAgICB0aGlzLnBhcmFtLnZhbHVlID0gdGhpcy50ZXh0VmFsdWVcclxuICAgICAgdGhpcy5yZWJ1aWxkLmVtaXQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59IiwiPGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcblx0XHQ8YSAoY2xpY2spPVwiY21SZW1vdmUuc2hvdyggJGV2ZW50IClcIiBjbGFzcz1cInBvaW50ZXJcIj57e2Z1bmMubmFtZX19ICg8L2E+XHJcblxyXG5cdFx0PGEgKm5nSWY9XCJwYXJhbVwiPlxyXG5cdFx0XHQ8c3BhbiBbaGlkZGVuXT1cImlzRWRpdG9yVmlzaWJsZVwiIChjbGljayk9XCJvblNob3dFZGl0b3IoICRldmVudCApXCI+e3twYXJhbVZhbHVlfX08L3NwYW4+XHJcblx0XHQ8L2E+XHJcblxyXG5cdFx0PGlucHV0ICpuZ0lmPVwiaXNFZGl0b3JWaXNpYmxlXCIgdHlwZT1cInRleHRcIlxyXG5cdFx0XHRjbGFzcz1cImZmX19lZGl0b3IgXCJcclxuXHRcdFx0W25nU3R5bGVdPVwie3dpZHRoOiAoKHRleHRWYWx1ZS5sZW5ndGggKyAxKSAqIDgpICsgJ3B4JyB9XCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJ0ZXh0VmFsdWVcIlxyXG5cdFx0XHQoZm9jdXNvdXQpPVwib25FZGl0b3JGb2N1c091dCgpXCJcclxuXHRcdFx0KGtleWRvd24pPVwib25FZGl0b3JLZXlEb3duKClcIlxyXG5cdFx0XHQoa2V5dXAuZW50ZXIpPVwib25FZGl0b3JLZXlVcEVudGVyKClcIlxyXG5cdFx0XHQoa2V5dXAuZXNjYXBlKT1cIm9uRWRpdG9yS2V5VXBFbnRlcigpXCJcclxuXHRcdFx0c3BlbGxjaGVjaz1cImZhbHNlXCIgXHJcblx0XHRcdCNlZGl0b3IgPlxyXG5cclxuXHRcdDxhIChjbGljayk9XCJvblNob3dFZGl0b3IoICRldmVudCApXCI+KTwvYT5cclxuXHQ8L2xhYmVsPlxyXG48L2Rpdj5cclxuXHJcbjxlZC1jb250ZXh0LW1lbnUgW2l0ZW1zXT1cIltkZWxldGVNZW51SXRlbV1cIiAjY21SZW1vdmUgPjwvZWQtY29udGV4dC1tZW51PlxyXG5cclxuPGVkLWNvbnRleHQtbWVudSBbaXRlbXNdPVwic3VnZ2VzdGlvbkl0ZW1zXCIgI3N1Z2dlc3Rpb25zID48L2VkLWNvbnRleHQtbWVudT4iXX0=