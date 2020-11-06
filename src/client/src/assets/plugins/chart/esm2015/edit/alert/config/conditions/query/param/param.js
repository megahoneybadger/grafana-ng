import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
const _c0 = ["editor"];
const _c1 = ["suggestions"];
function AlertQueryParamPickerComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.value);
} }
const _c2 = function (a0) { return { width: a0 }; };
function AlertQueryParamPickerComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 5, 6);
    i0.ɵɵlistener("ngModelChange", function AlertQueryParamPickerComponent_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.value = $event; })("focusout", function AlertQueryParamPickerComponent_input_2_Template_input_focusout_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onEditorFocusOut(); })("keydown", function AlertQueryParamPickerComponent_input_2_Template_input_keydown_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onEditorKeyDown(); })("keyup.enter", function AlertQueryParamPickerComponent_input_2_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); ctx_r8.isEditorVisible = false; return ctx_r8.onEditorFocusOut(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, (ctx_r1.value.length + 1) * 8 + "px"))("ngModel", ctx_r1.value);
} }
export class AlertQueryParamPickerComponent {
    constructor() {
        this.backupValue = '';
        this.isEditorVisible = false;
        this.isSuggestionMenuOpen = false;
        this.pick = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    get value() {
        return this._value;
    }
    ;
    set value(v) {
        this._value = v;
        this.valueChange.emit(this._value);
        this.pick.emit(this._value);
    }
    ngOnInit() {
        this
            .items
            .forEach(x => x.command = (y) => this.onPick(y.item));
    }
    onShowEditor(e) {
        this.backupValue = this.value;
        this.isSuggestionMenuOpen = true;
        this.ctrlSuggestions.show(/*this.ctrlEditorElement*/ e);
        setTimeout(() => {
            this.isEditorVisible = true;
            setTimeout(() => this.ctrlEditorElement.nativeElement.focus(), 0);
        }, 0);
    }
    onEditorFocusOut() {
        if (!this.isSuggestionMenuOpen) {
            this.isEditorVisible = false;
            if (!this.value) {
                this.value = this.backupValue;
            }
        }
    }
    onEditorKeyDown() {
        this.isSuggestionMenuOpen = false;
        this.ctrlSuggestions.hide();
    }
    onPick(e) {
        this.value = this.backupValue = e.label;
        this.isEditorVisible = false;
    }
}
AlertQueryParamPickerComponent.ɵfac = function AlertQueryParamPickerComponent_Factory(t) { return new (t || AlertQueryParamPickerComponent)(); };
AlertQueryParamPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertQueryParamPickerComponent, selectors: [["query-param-picker"]], viewQuery: function AlertQueryParamPickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ctrlEditorElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ctrlSuggestions = _t.first);
    } }, inputs: { items: "items", value: "value" }, outputs: { pick: "pick", valueChange: "valueChange" }, decls: 5, vars: 3, consts: [[1, "pointer", 3, "click"], [4, "ngIf"], ["type", "text", "class", "q__editor", "spellcheck", "false", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter", 4, "ngIf"], [3, "items"], ["suggestions", ""], ["type", "text", "spellcheck", "false", 1, "q__editor", 3, "ngStyle", "ngModel", "ngModelChange", "focusout", "keydown", "keyup.enter"], ["editor", ""]], template: function AlertQueryParamPickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function AlertQueryParamPickerComponent_Template_span_click_0_listener($event) { return ctx.onShowEditor($event); });
        i0.ɵɵtemplate(1, AlertQueryParamPickerComponent_a_1_Template, 2, 1, "a", 1);
        i0.ɵɵtemplate(2, AlertQueryParamPickerComponent_input_2_Template, 2, 4, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "ed-context-menu", 3, 4);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isEditorVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isEditorVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("items", ctx.items);
    } }, directives: [i1.NgIf, i2.ContextMenuComponent, i3.DefaultValueAccessor, i1.NgStyle, i3.NgControlStatus, i3.NgModel], styles: [".q__editor[_ngcontent-%COMP%]{background:transparent;border:none;color:#d8d9da;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;margin:0;padding:0;width:24px}.q__editor[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;outline:none!important;outline-width:0!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertQueryParamPickerComponent, [{
        type: Component,
        args: [{
                selector: 'query-param-picker',
                templateUrl: `./param.html`,
                styleUrls: ['./param.scss']
            }]
    }], null, { items: [{
            type: Input
        }], ctrlEditorElement: [{
            type: ViewChild,
            args: ['editor']
        }], ctrlSuggestions: [{
            type: ViewChild,
            args: ["suggestions"]
        }], pick: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2FsZXJ0L2NvbmZpZy9jb25kaXRpb25zL3F1ZXJ5L3BhcmFtL3BhcmFtLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9hbGVydC9jb25maWcvY29uZGl0aW9ucy9xdWVyeS9wYXJhbS9wYXJhbS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0M3Rix5QkFBNEI7SUFBQSxZQUFTO0lBQUEsaUJBQUk7OztJQUFiLGVBQVM7SUFBVCxrQ0FBUzs7Ozs7SUFFckMsbUNBVUQ7SUFQRSwyTkFBbUIsa01BQUEsK0xBQUEsNkxBR1ksS0FBSyxzQ0FIakI7SUFIcEIsaUJBVUQ7OztJQVJFLDBGQUFxRCx5QkFBQTs7QURFdkQsTUFBTSxPQUFPLDhCQUE4QjtJQUozQztRQVFDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBSXpCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUVuQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQTtRQUNqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FrRG5EO0lBaERBLElBQUksS0FBSztRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQztJQUVGLElBQWEsS0FBSyxDQUFFLENBQVU7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUk7YUFDRixLQUFLO2FBQ0wsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFFLENBQUMsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUUsQ0FBQTtJQUM3RCxDQUFDO0lBRUQsWUFBWSxDQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUVyRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBRTVCLFVBQVUsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFBO1FBQ2xFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxnQkFBZ0I7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDOUI7U0FDQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7OzRHQTdEVyw4QkFBOEI7bUVBQTlCLDhCQUE4Qjs7Ozs7Ozs7UUNQM0MsK0JBQ0M7UUFESywrR0FBUyx3QkFBc0IsSUFBQztRQUNyQywyRUFBNEI7UUFFNUIsbUZBVUQ7UUFBQSxpQkFBTztRQUVOLHdDQUFpRTs7UUFkOUQsZUFBd0I7UUFBeEIsMkNBQXdCO1FBRXBCLGVBQXVCO1FBQXZCLDBDQUF1QjtRQVliLGVBQWU7UUFBZixpQ0FBZTs7a0REUnBCLDhCQUE4QjtjQUoxQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUFDO2dCQUVuQixLQUFLO2tCQUFiLEtBQUs7WUFLZSxpQkFBaUI7a0JBQXJDLFNBQVM7bUJBQUMsUUFBUTtZQUNjLGVBQWU7a0JBQS9DLFNBQVM7bUJBQUMsYUFBYTtZQUlkLElBQUk7a0JBQWIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFNTSxLQUFLO2tCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJ3VpbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncXVlcnktcGFyYW0tcGlja2VyJyxcclxuXHR0ZW1wbGF0ZVVybDogYC4vcGFyYW0uaHRtbGAsXHJcblx0c3R5bGVVcmxzOiBbJy4vcGFyYW0uc2NzcyddfSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0UXVlcnlQYXJhbVBpY2tlckNvbXBvbmVudCAge1xyXG5cdEBJbnB1dCgpIGl0ZW1zIDogYW55W107XHJcblxyXG5cdF92YWx1ZTogc3RyaW5nO1xyXG5cdGJhY2t1cFZhbHVlOiBzdHJpbmcgPSAnJztcclxuXHJcblx0QFZpZXdDaGlsZCgnZWRpdG9yJykgY3RybEVkaXRvckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcInN1Z2dlc3Rpb25zXCIpIHB1YmxpYyBjdHJsU3VnZ2VzdGlvbnM6IENvbnRleHRNZW51Q29tcG9uZW50O1xyXG5cdGlzRWRpdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cdGlzU3VnZ2VzdGlvbk1lbnVPcGVuID0gZmFsc2U7XHJcblxyXG5cdEBPdXRwdXQoKSBwaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KClcclxuXHRAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcblx0Z2V0IHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcblx0fTtcclxuXHRcclxuXHRASW5wdXQoKSBzZXQgdmFsdWUoIHYgOiBzdHJpbmcgKXtcclxuXHRcdHRoaXMuX3ZhbHVlID0gdjtcclxuXHRcdHRoaXMudmFsdWVDaGFuZ2UuZW1pdCggdGhpcy5fdmFsdWUgKTtcclxuXHRcdHRoaXMucGljay5lbWl0KCB0aGlzLl92YWx1ZSApO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKXtcclxuXHRcdHRoaXNcclxuXHRcdFx0Lml0ZW1zXHJcblx0XHRcdC5mb3JFYWNoKCB4ID0+IHguY29tbWFuZCA9ICggeSApID0+IHRoaXMub25QaWNrKCB5Lml0ZW0gKSApXHJcblx0fVxyXG5cdFxyXG5cdG9uU2hvd0VkaXRvciggZSApe1xyXG5cdFx0dGhpcy5iYWNrdXBWYWx1ZSA9IHRoaXMudmFsdWU7XHJcblxyXG5cdFx0dGhpcy5pc1N1Z2dlc3Rpb25NZW51T3BlbiA9IHRydWU7XHJcblx0XHR0aGlzLmN0cmxTdWdnZXN0aW9ucy5zaG93KC8qdGhpcy5jdHJsRWRpdG9yRWxlbWVudCovZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG5cdFx0XHR0aGlzLmlzRWRpdG9yVmlzaWJsZSA9IHRydWU7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmN0cmxFZGl0b3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCApXHJcbiAgICB9LCAwKTtcclxuXHR9XHJcblx0XHJcblx0b25FZGl0b3JGb2N1c091dCgpe1xyXG4gICAgaWYoICF0aGlzLmlzU3VnZ2VzdGlvbk1lbnVPcGVuICl7XHJcbiAgICAgIHRoaXMuaXNFZGl0b3JWaXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiggIXRoaXMudmFsdWUgKXtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5iYWNrdXBWYWx1ZTtcclxuXHRcdFx0fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FZGl0b3JLZXlEb3duKCl7XHJcbiAgICB0aGlzLmlzU3VnZ2VzdGlvbk1lbnVPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmN0cmxTdWdnZXN0aW9ucy5oaWRlKClcclxuXHR9XHJcblxyXG5cdG9uUGljayggZSApICB7XHJcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5iYWNrdXBWYWx1ZSA9IGUubGFiZWw7XHJcblx0XHR0aGlzLmlzRWRpdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiPHNwYW4gKGNsaWNrKT1cIm9uU2hvd0VkaXRvciggJGV2ZW50IClcIiBjbGFzcz1cInBvaW50ZXJcIiA+XHJcblx0PGEgKm5nSWY9XCIhaXNFZGl0b3JWaXNpYmxlXCI+e3t2YWx1ZX19PC9hPlxyXG5cclxuXHQ8aW5wdXQgKm5nSWY9XCJpc0VkaXRvclZpc2libGVcIiB0eXBlPVwidGV4dFwiXHJcblx0XHRjbGFzcz1cInFfX2VkaXRvclwiXHJcblx0XHRbbmdTdHlsZV09XCJ7d2lkdGg6ICgodmFsdWUubGVuZ3RoICsgMSkgKiA4KSArICdweCcgfVwiXHJcblx0XHRbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuXHRcdChmb2N1c291dCk9XCJvbkVkaXRvckZvY3VzT3V0KClcIlxyXG5cdFx0KGtleWRvd24pPVwib25FZGl0b3JLZXlEb3duKClcIlxyXG5cdFx0KGtleXVwLmVudGVyKT1cImlzRWRpdG9yVmlzaWJsZT1mYWxzZTtvbkVkaXRvckZvY3VzT3V0KCk7XCJcclxuXHRcdHNwZWxsY2hlY2s9XCJmYWxzZVwiIFxyXG5cdFx0I2VkaXRvciA+XHJcblxyXG48L3NwYW4+XHJcblxyXG4gPGVkLWNvbnRleHQtbWVudSBbaXRlbXNdPVwiaXRlbXNcIiAjc3VnZ2VzdGlvbnMgPjwvZWQtY29udGV4dC1tZW51PiJdfQ==