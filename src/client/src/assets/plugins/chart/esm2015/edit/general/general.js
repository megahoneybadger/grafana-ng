import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
export class GeneralEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
GeneralEditorComponent.ɵfac = function GeneralEditorComponent_Factory(t) { return new (t || GeneralEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
GeneralEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeneralEditorComponent, selectors: [["editor-general"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 3, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["label", "Title", "labelWidth", "7", "width", "25", 3, "ngModel", "ngModelChange"], [1, "gf-form", "gf-form--v-stretch"], [1, "gf-form-label", "width-7"], ["rows", "3", "placeholder", "Panel description, supports markdown & links", 1, "gf-form-input", "w-23", 3, "ngModel", "ngModelChange"], ["label", "Transparent", "labelWidth", "7", 3, "ngModel", "ngModelChange"]], template: function GeneralEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2, "Info");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-textbox", 2);
        i0.ɵɵlistener("ngModelChange", function GeneralEditorComponent_Template_ed_textbox_ngModelChange_3_listener($event) { return ctx.panel.title = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6, "Description");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "textarea", 5);
        i0.ɵɵlistener("ngModelChange", function GeneralEditorComponent_Template_textarea_ngModelChange_7_listener($event) { return ctx.panel.description = $event; });
        i0.ɵɵtext(8, "\t\t\t");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ed-checkbox", 6);
        i0.ɵɵlistener("ngModelChange", function GeneralEditorComponent_Template_ed_checkbox_ngModelChange_9_listener($event) { return ctx.panel.transparent = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.panel.title);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.panel.description);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.panel.transparent);
    } }, directives: [i1.TextBoxComponent, i2.NgControlStatus, i2.NgModel, i2.DefaultValueAccessor, i1.CheckBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeneralEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-general',
                templateUrl: './general.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZ2VuZXJhbC9nZW5lcmFsLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9nZW5lcmFsL2dlbmVyYWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBTXhFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx3QkFBd0I7SUFFbEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDakIsQ0FBQzs7NEZBSlUsc0JBQXNCLHVCQUVaLFdBQVc7MkRBRnJCLHNCQUFzQjtRQ1JuQyw4QkFDQztRQUFBLDZCQUE0QjtRQUFBLG9CQUFJO1FBQUEsaUJBQUs7UUFFcEMscUNBS2E7UUFKWix5SkFBeUI7UUFJMUIsaUJBQWE7UUFFYiw4QkFDQztRQUFBLCtCQUFvQztRQUFBLDJCQUFXO1FBQUEsaUJBQU87UUFDdEQsbUNBRUE7UUFGOEMsNkpBQStCO1FBRTdFLHNCQUFBO1FBQUEsaUJBQVc7UUFDWixpQkFBTTtRQUVOLHNDQUljO1FBSGIsZ0tBQStCO1FBR2hDLGlCQUFjO1FBRWhCLGlCQUFNOztRQW5CSCxlQUF5QjtRQUF6Qix5Q0FBeUI7UUFRcUIsZUFBK0I7UUFBL0IsK0NBQStCO1FBTTdFLGVBQStCO1FBQS9CLCtDQUErQjs7a0REVnJCLHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLGdCQUFnQjthQUM5Qjs7c0JBR2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWdlbmVyYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2VuZXJhbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmFsRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+SW5mbzwvaDU+XHJcblxyXG5cdFx0PGVkLXRleHRib3ggXHJcblx0XHRcdFsobmdNb2RlbCldPVwicGFuZWwudGl0bGVcIlxyXG5cdFx0XHRsYWJlbD1cIlRpdGxlXCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjdcIlxyXG5cdFx0XHR3aWR0aD1cIjI1XCI+XHJcblx0XHQ8L2VkLXRleHRib3g+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0gZ2YtZm9ybS0tdi1zdHJldGNoXCI+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCB3aWR0aC03XCI+RGVzY3JpcHRpb248L3NwYW4+XHJcblx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cImdmLWZvcm0taW5wdXQgdy0yM1wiIHJvd3M9XCIzXCIgWyhuZ01vZGVsKV09XCJwYW5lbC5kZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYW5lbCBkZXNjcmlwdGlvbiwgc3VwcG9ydHMgbWFya2Rvd24gJiBsaW5rc1wiPlxyXG5cdFx0XHQ8L3RleHRhcmVhPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGVkLWNoZWNrYm94IFxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cInBhbmVsLnRyYW5zcGFyZW50XCJcclxuXHRcdFx0bGFiZWw9XCJUcmFuc3BhcmVudFwiXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI3XCI+XHJcblx0XHQ8L2VkLWNoZWNrYm94PlxyXG4gIFxyXG48L2Rpdj4iXX0=