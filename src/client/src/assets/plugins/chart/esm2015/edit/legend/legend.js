import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from '../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
export class LegendEditorComponent {
    constructor(panel) {
        this.panel = panel;
    }
    get legend() {
        var _a, _b;
        return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.legend;
    }
}
LegendEditorComponent.ɵfac = function LegendEditorComponent_Factory(t) { return new (t || LegendEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
LegendEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendEditorComponent, selectors: [["editor-legend"]], decls: 22, vars: 10, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "7", "label", "Show", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "As Table", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "To the right", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["labelWidth", "4", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Avg", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Current", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Total", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only nulls", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only zeros", 3, "ngModel", "ngModelChange"]], template: function LegendEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2, "Options");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-checkbox", 2);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.legend.show = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-checkbox", 3);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.legend.table = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.legend.right = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 0);
        i0.ɵɵelementStart(7, "h5", 1);
        i0.ɵɵtext(8, "Values");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 5);
        i0.ɵɵelementStart(10, "ed-checkbox", 6);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_10_listener($event) { return ctx.legend.min = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ed-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.legend.max = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 5);
        i0.ɵɵelementStart(13, "ed-checkbox", 8);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_13_listener($event) { return ctx.legend.avg = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "ed-checkbox", 9);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_14_listener($event) { return ctx.legend.current = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 5);
        i0.ɵɵelementStart(16, "ed-checkbox", 10);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_16_listener($event) { return ctx.legend.total = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 0);
        i0.ɵɵelementStart(18, "h5", 1);
        i0.ɵɵtext(19, "Hide series");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "ed-checkbox", 11);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_20_listener($event) { return ctx.legend.hideOnlyNulls = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "ed-checkbox", 12);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.legend.hideOnlyZeroes = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.legend.show);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.legend.table);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.legend.right);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.legend.min);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.legend.max);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.legend.avg);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.legend.current);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.legend.total);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.legend.hideOnlyNulls);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.legend.hideOnlyZeroes);
    } }, directives: [i1.CheckBoxComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LegendEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-legend',
                templateUrl: './legend.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9sZWdlbmQvbGVnZW5kLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9sZWdlbmQvbGVnZW5kLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU01QyxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQTJDLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQ3ZELENBQUM7SUFMRCxJQUFJLE1BQU07O1FBQ1IsbUJBQU8sSUFBSSxDQUFDLEtBQUssMENBQUUsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDcEMsQ0FBQzs7MEZBSlUscUJBQXFCLHVCQU1YLFdBQVc7MERBTnJCLHFCQUFxQjtRQ1JsQyw4QkFDQztRQUFBLDZCQUE0QjtRQUFBLHVCQUFPO1FBQUEsaUJBQUs7UUFFeEMsc0NBSWM7UUFEYix5SkFBeUI7UUFDMUIsaUJBQWM7UUFFZCxzQ0FJYztRQURiLDBKQUEwQjtRQUMzQixpQkFBYztRQUVkLHNDQUljO1FBRGIsMEpBQTBCO1FBQzNCLGlCQUFjO1FBQ2YsaUJBQU07UUFFTiw4QkFDQztRQUFBLDZCQUE0QjtRQUFBLHNCQUFNO1FBQUEsaUJBQUs7UUFFdkMsOEJBQ0M7UUFBQSx1Q0FJYztRQURiLHlKQUF3QjtRQUN6QixpQkFBYztRQUVkLHVDQUljO1FBRGIseUpBQXdCO1FBQ3pCLGlCQUFjO1FBQ2YsaUJBQU07UUFFTiwrQkFDQztRQUFBLHVDQUljO1FBRGIseUpBQXdCO1FBQ3pCLGlCQUFjO1FBRWQsdUNBSWM7UUFEYiw2SkFBNEI7UUFDN0IsaUJBQWM7UUFDZixpQkFBTTtRQUVOLCtCQUNDO1FBQUEsd0NBSWM7UUFEYiwySkFBMEI7UUFDM0IsaUJBQWM7UUFPZixpQkFBTTtRQUVQLGlCQUFNO1FBRU4sK0JBQ0M7UUFBQSw4QkFBNEI7UUFBQSw0QkFBVztRQUFBLGlCQUFLO1FBRTVDLHdDQUljO1FBRGIsbUtBQWtDO1FBQ25DLGlCQUFjO1FBRWQsd0NBSWM7UUFEYixvS0FBbUM7UUFDcEMsaUJBQWM7UUFFZixpQkFBTTs7UUE5RUosZUFBeUI7UUFBekIseUNBQXlCO1FBTXpCLGVBQTBCO1FBQTFCLDBDQUEwQjtRQU0xQixlQUEwQjtRQUExQiwwQ0FBMEI7UUFXekIsZUFBd0I7UUFBeEIsd0NBQXdCO1FBTXhCLGVBQXdCO1FBQXhCLHdDQUF3QjtRQVF4QixlQUF3QjtRQUF4Qix3Q0FBd0I7UUFNeEIsZUFBNEI7UUFBNUIsNENBQTRCO1FBUTVCLGVBQTBCO1FBQTFCLDBDQUEwQjtRQWtCM0IsZUFBa0M7UUFBbEMsa0RBQWtDO1FBTWxDLGVBQW1DO1FBQW5DLG1EQUFtQzs7a0REekV4QixxQkFBcUI7Y0FKakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsZUFBZTthQUM3Qjs7c0JBT2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IFBBTkVMX1RPS0VOIH0gZnJvbSAnLi4vLi4vY2hhcnQubSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1sZWdlbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVnZW5kLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExlZ2VuZEVkaXRvckNvbXBvbmVudCB7XG4gXG4gIGdldCBsZWdlbmQoKXtcbiAgICByZXR1cm4gdGhpcy5wYW5lbD8ud2lkZ2V0Py5sZWdlbmQ7XG4gIH1cbiAgXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcHJpdmF0ZSBwYW5lbDogUGFuZWwpe1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+T3B0aW9uczwvaDU+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI3XCJcclxuXHRcdGxhYmVsPVwiU2hvd1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC5zaG93XCI+XHJcblx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0bGFiZWxXaWR0aD1cIjdcIlxyXG5cdFx0bGFiZWw9XCJBcyBUYWJsZVwiXHJcblx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC50YWJsZVwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI3XCJcclxuXHRcdGxhYmVsPVwiVG8gdGhlIHJpZ2h0XCJcclxuXHRcdFsobmdNb2RlbCldPVwibGVnZW5kLnJpZ2h0XCI+XHJcblx0PC9lZC1jaGVja2JveD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+VmFsdWVzPC9oNT5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI0XCJcclxuXHRcdFx0bGFiZWw9XCJNaW5cIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC5taW5cIj5cclxuXHRcdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdFx0PGVkLWNoZWNrYm94IFxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRcdGxhYmVsPVwiTWluXCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQubWF4XCI+XHJcblx0XHQ8L2VkLWNoZWNrYm94PlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHRcdDxlZC1jaGVja2JveCBcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjRcIlxyXG5cdFx0XHRsYWJlbD1cIkF2Z1wiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibGVnZW5kLmF2Z1wiPlxyXG5cdFx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdFx0bGFiZWw9XCJDdXJyZW50XCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQuY3VycmVudFwiPlxyXG5cdFx0PC9lZC1jaGVja2JveD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI0XCJcclxuXHRcdFx0bGFiZWw9XCJUb3RhbFwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibGVnZW5kLnRvdGFsXCI+XHJcblx0XHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHRcdDwhLS0gPGVkLWNoZWNrYm94IFxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRcdGxhYmVsPVwiQ3VycmVudFwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibGVnZW5kLmN1cnJlbnRcIj5cclxuXHRcdDwvZWQtY2hlY2tib3g+IC0tPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+SGlkZSBzZXJpZXM8L2g1PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRsYWJlbFdpZHRoPVwiMTBcIlxyXG5cdFx0bGFiZWw9XCJXaXRoIG9ubHkgbnVsbHNcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQuaGlkZU9ubHlOdWxsc1wiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCIxMFwiXHJcblx0XHRsYWJlbD1cIldpdGggb25seSB6ZXJvc1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC5oaWRlT25seVplcm9lc1wiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG48L2Rpdj4iXX0=