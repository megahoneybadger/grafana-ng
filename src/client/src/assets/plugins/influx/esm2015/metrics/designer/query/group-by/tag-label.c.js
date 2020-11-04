import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
const _c0 = ["tag-label", ""];
const _c1 = function (a0) { return [a0]; };
export class GroupByTagLabelComponent {
    constructor() {
        this.removed = new EventEmitter();
        this.deleteMenuItem = {
            label: 'Remove',
            command: _ => this.removed.emit(this.value)
        };
    }
}
GroupByTagLabelComponent.ɵfac = function GroupByTagLabelComponent_Factory(t) { return new (t || GroupByTagLabelComponent)(); };
GroupByTagLabelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GroupByTagLabelComponent, selectors: [["", "tag-label", ""]], inputs: { value: "value" }, outputs: { removed: "removed" }, attrs: _c0, decls: 4, vars: 4, consts: [[1, "gf-form-label", 3, "click"], [3, "items"], ["cm", ""]], template: function GroupByTagLabelComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function GroupByTagLabelComponent_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(3); return _r0.show($event); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "ed-context-menu", 1, 2);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("tag(", ctx.value, ")");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("items", i0.ɵɵpureFunction1(2, _c1, ctx.deleteMenuItem));
    } }, directives: [i1.ContextMenuComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GroupByTagLabelComponent, [{
        type: Component,
        args: [{
                selector: '[tag-label]',
                template: `
	<span (click)="cm.show($event)" class="gf-form-label">tag({{value}})</span>

	<ed-context-menu [items]="[deleteMenuItem]" #cm>`,
            }]
    }], null, { value: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWxhYmVsLmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZ3JvdXAtYnkvdGFnLWxhYmVsLmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUzdDLE1BQU0sT0FBTyx3QkFBd0I7SUFQckM7UUFTVyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2QyxtQkFBYyxHQUFHO1lBQ2hCLEtBQUssRUFBRSxRQUFRO1lBQ2YsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRTtTQUM3QyxDQUFBO0tBQ0Q7O2dHQVJZLHdCQUF3Qjs2REFBeEIsd0JBQXdCOztRQUpwQywrQkFBc0Q7UUFBaEQsK0pBQVMsZ0JBQWUsSUFBQztRQUF1QixZQUFjO1FBQUEsaUJBQU87UUFFM0Usd0NBQWdEOztRQUZNLGVBQWM7UUFBZCw2Q0FBYztRQUVuRCxlQUEwQjtRQUExQixzRUFBMEI7O2tEQUUvQix3QkFBd0I7Y0FQcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN4QixRQUFRLEVBQUU7OztrREFHdUM7YUFDakQ7Z0JBRVEsS0FBSztrQkFBWixLQUFLO1lBQ0ksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW3RhZy1sYWJlbF0nLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0PHNwYW4gKGNsaWNrKT1cImNtLnNob3coJGV2ZW50KVwiIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPnRhZyh7e3ZhbHVlfX0pPC9zcGFuPlxyXG5cclxuXHQ8ZWQtY29udGV4dC1tZW51IFtpdGVtc109XCJbZGVsZXRlTWVudUl0ZW1dXCIgI2NtPmAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cEJ5VGFnTGFiZWxDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpdmFsdWU6c3RyaW5nO1xyXG5cdEBPdXRwdXQoKSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRkZWxldGVNZW51SXRlbSA9IHtcclxuXHRcdGxhYmVsOiAnUmVtb3ZlJyxcclxuXHRcdGNvbW1hbmQ6IF8gPT4gdGhpcy5yZW1vdmVkLmVtaXQoIHRoaXMudmFsdWUgKVxyXG5cdH1cclxufSBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19