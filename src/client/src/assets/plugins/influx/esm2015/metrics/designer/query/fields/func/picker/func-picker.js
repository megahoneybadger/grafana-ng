import { Component, EventEmitter, Output } from '@angular/core';
import { menuItems } from './func-items';
import * as _ from 'lodash';
import { ContextMenuComponent } from 'uilib';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
export class FieldFunctionPickerComponent {
    constructor() {
        this.items = _.cloneDeep(menuItems);
        this.pick = new EventEmitter();
    }
    ngOnInit() {
        ContextMenuComponent.wrapItems(this.items, x => this.pick.emit(x.item));
    }
}
FieldFunctionPickerComponent.ɵfac = function FieldFunctionPickerComponent_Factory(t) { return new (t || FieldFunctionPickerComponent)(); };
FieldFunctionPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FieldFunctionPickerComponent, selectors: [["field-function-picker"]], outputs: { pick: "pick" }, decls: 5, vars: 1, consts: [[1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-plus"], [3, "items"], ["cm", ""]], template: function FieldFunctionPickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵlistener("click", function FieldFunctionPickerComponent_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(4); return _r0.show($event); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "ed-context-menu", 3, 4);
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("items", ctx.items);
    } }, directives: [i1.ContextMenuComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FieldFunctionPickerComponent, [{
        type: Component,
        args: [{
                selector: 'field-function-picker',
                template: `
    <div class="gf-form" >
      <a class="gf-form-label pointer" (click)="cm.show( $event )" >
        <i class="fa fa-plus" ></i>
      </a>
    </div>

    <ed-context-menu [items]="items" #cm></ed-context-menu>
  `
            }]
    }], null, { pick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuYy1waWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy9kYXRhc291cmNlcy9pbmZsdXgvc3JjL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZmllbGRzL2Z1bmMvcGlja2VyL2Z1bmMtcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLE9BQU8sQ0FBQzs7O0FBYzdDLE1BQU0sT0FBTyw0QkFBNEI7SUFaekM7UUFhRSxVQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxTQUFTLENBQUUsQ0FBQztRQUV2QixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUsxQztJQUhDLFFBQVE7UUFDTixvQkFBb0IsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUUsQ0FBRSxDQUFBO0lBQzdFLENBQUM7O3dHQVBVLDRCQUE0QjtpRUFBNUIsNEJBQTRCOztRQVRyQyw4QkFDRTtRQUFBLDRCQUNFO1FBRCtCLGdLQUFTLGdCQUFpQixJQUFDO1FBQzFELHVCQUEyQjtRQUM3QixpQkFBSTtRQUNOLGlCQUFNO1FBRU4sd0NBQXVEOztRQUF0QyxlQUFlO1FBQWYsaUNBQWU7O2tEQUd2Qiw0QkFBNEI7Y0FaeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDthQUNGO2dCQUlXLElBQUk7a0JBQWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi9mdW5jLWl0ZW1zJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJ3VpbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmllbGQtZnVuY3Rpb24tcGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImdmLWZvcm1cIiA+XHJcbiAgICAgIDxhIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBwb2ludGVyXCIgKGNsaWNrKT1cImNtLnNob3coICRldmVudCApXCIgPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiID48L2k+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxlZC1jb250ZXh0LW1lbnUgW2l0ZW1zXT1cIml0ZW1zXCIgI2NtPjwvZWQtY29udGV4dC1tZW51PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkRnVuY3Rpb25QaWNrZXJDb21wb25lbnQgICB7XHJcbiAgaXRlbXMgPVx0Xy5jbG9uZURlZXAoIG1lbnVJdGVtcyApOyBcclxuXHJcbiAgQE91dHB1dCgpIHBpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LndyYXBJdGVtcyggdGhpcy5pdGVtcywgeCA9PiB0aGlzLnBpY2suZW1pdCggeC5pdGVtICkgKVxyXG4gIH1cclxufSJdfQ==