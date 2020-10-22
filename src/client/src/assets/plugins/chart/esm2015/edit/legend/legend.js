import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from '../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
export class LegendEditorComponent {
    constructor(panel) {
        this.panel = panel;
        this.show = true;
        console.log();
    }
    get legend() {
        var _a, _b;
        return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.legend;
    }
    ngOnInit() {
        console.log('create LegendEditorComponent');
    }
    ngOnDestroy() {
        console.log('detroy LegendEditorComponent');
    }
    onSelected() {
        console.log(this.legend);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9sZWdlbmQvbGVnZW5kLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9sZWdlbmQvbGVnZW5kLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU01QyxNQUFNLE9BQU8scUJBQXFCO0lBUWhDLFlBQTJDLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRnZELFNBQUksR0FBWSxJQUFJLENBQUM7UUFHbkIsT0FBTyxDQUFDLEdBQUcsRUFBSSxDQUFHO0lBQ3BCLENBQUM7SUFSRCxJQUFJLE1BQU07O1FBQ1IsbUJBQU8sSUFBSSxDQUFDLEtBQUssMENBQUUsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQVFELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFFLDhCQUE4QixDQUFFLENBQUE7SUFDL0MsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFFLDhCQUE4QixDQUFFLENBQUE7SUFDL0MsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUM1QixDQUFDOzswRkF0QlUscUJBQXFCLHVCQVFYLFdBQVc7MERBUnJCLHFCQUFxQjtRQ1JsQyw4QkFDQztRQUFBLDZCQUE0QjtRQUFBLHVCQUFPO1FBQUEsaUJBQUs7UUFFeEMsc0NBSWM7UUFEYix5SkFBeUI7UUFDMUIsaUJBQWM7UUFFZCxzQ0FJYztRQURiLDBKQUEwQjtRQUMzQixpQkFBYztRQUVkLHNDQUljO1FBRGIsMEpBQTBCO1FBQzNCLGlCQUFjO1FBQ2YsaUJBQU07UUFFTiw4QkFDQztRQUFBLDZCQUE0QjtRQUFBLHNCQUFNO1FBQUEsaUJBQUs7UUFFdkMsOEJBQ0M7UUFBQSx1Q0FJYztRQURiLHlKQUF3QjtRQUN6QixpQkFBYztRQUVkLHVDQUljO1FBRGIseUpBQXdCO1FBQ3pCLGlCQUFjO1FBQ2YsaUJBQU07UUFFTiwrQkFDQztRQUFBLHVDQUljO1FBRGIseUpBQXdCO1FBQ3pCLGlCQUFjO1FBRWQsdUNBSWM7UUFEYiw2SkFBNEI7UUFDN0IsaUJBQWM7UUFDZixpQkFBTTtRQUVOLCtCQUNDO1FBQUEsd0NBSWM7UUFEYiwySkFBMEI7UUFDM0IsaUJBQWM7UUFPZixpQkFBTTtRQUVQLGlCQUFNO1FBRU4sK0JBQ0M7UUFBQSw4QkFBNEI7UUFBQSw0QkFBVztRQUFBLGlCQUFLO1FBRTVDLHdDQUljO1FBRGIsbUtBQWtDO1FBQ25DLGlCQUFjO1FBRWQsd0NBSWM7UUFEYixvS0FBbUM7UUFDcEMsaUJBQWM7UUFFZixpQkFBTTs7UUE5RUosZUFBeUI7UUFBekIseUNBQXlCO1FBTXpCLGVBQTBCO1FBQTFCLDBDQUEwQjtRQU0xQixlQUEwQjtRQUExQiwwQ0FBMEI7UUFXekIsZUFBd0I7UUFBeEIsd0NBQXdCO1FBTXhCLGVBQXdCO1FBQXhCLHdDQUF3QjtRQVF4QixlQUF3QjtRQUF4Qix3Q0FBd0I7UUFNeEIsZUFBNEI7UUFBNUIsNENBQTRCO1FBUTVCLGVBQTBCO1FBQTFCLDBDQUEwQjtRQWtCM0IsZUFBa0M7UUFBbEMsa0RBQWtDO1FBTWxDLGVBQW1DO1FBQW5DLG1EQUFtQzs7a0REekV4QixxQkFBcUI7Y0FKakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsZUFBZTthQUM3Qjs7c0JBU2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IFBBTkVMX1RPS0VOIH0gZnJvbSAnLi4vLi4vY2hhcnQubSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1sZWdlbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVnZW5kLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExlZ2VuZEVkaXRvckNvbXBvbmVudCB7XG4gXG4gIGdldCBsZWdlbmQoKXtcbiAgICByZXR1cm4gdGhpcy5wYW5lbD8ud2lkZ2V0Py5sZWdlbmQ7XG4gIH1cblxuICBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcHJpdmF0ZSBwYW5lbDogUGFuZWwpe1xuICAgIGNvbnNvbGUubG9nKCAgKSAgO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBjb25zb2xlLmxvZyggJ2NyZWF0ZSBMZWdlbmRFZGl0b3JDb21wb25lbnQnIClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgY29uc29sZS5sb2coICdkZXRyb3kgTGVnZW5kRWRpdG9yQ29tcG9uZW50JyApXG4gIH1cblxuICBvblNlbGVjdGVkKCl7XG4gICAgY29uc29sZS5sb2codGhpcy5sZWdlbmQgKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiPlxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPk9wdGlvbnM8L2g1PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRsYWJlbFdpZHRoPVwiN1wiXHJcblx0XHRsYWJlbD1cIlNob3dcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQuc2hvd1wiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI3XCJcclxuXHRcdGxhYmVsPVwiQXMgVGFibGVcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQudGFibGVcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRsYWJlbFdpZHRoPVwiN1wiXHJcblx0XHRsYWJlbD1cIlRvIHRoZSByaWdodFwiXHJcblx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC5yaWdodFwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiPlxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPlZhbHVlczwvaDU+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cdFx0PGVkLWNoZWNrYm94IFxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiNFwiXHJcblx0XHRcdGxhYmVsPVwiTWluXCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQubWluXCI+XHJcblx0XHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHRcdDxlZC1jaGVja2JveCBcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0XHRsYWJlbD1cIk1pblwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibGVnZW5kLm1heFwiPlxyXG5cdFx0PC9lZC1jaGVja2JveD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI0XCJcclxuXHRcdFx0bGFiZWw9XCJBdmdcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC5hdmdcIj5cclxuXHRcdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdFx0PGVkLWNoZWNrYm94IFxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRcdGxhYmVsPVwiQ3VycmVudFwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibGVnZW5kLmN1cnJlbnRcIj5cclxuXHRcdDwvZWQtY2hlY2tib3g+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cdFx0PGVkLWNoZWNrYm94IFxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiNFwiXHJcblx0XHRcdGxhYmVsPVwiVG90YWxcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC50b3RhbFwiPlxyXG5cdFx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0XHQ8IS0tIDxlZC1jaGVja2JveCBcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0XHRsYWJlbD1cIkN1cnJlbnRcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC5jdXJyZW50XCI+XHJcblx0XHQ8L2VkLWNoZWNrYm94PiAtLT5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiPlxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPkhpZGUgc2VyaWVzPC9oNT5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0bGFiZWxXaWR0aD1cIjEwXCJcclxuXHRcdGxhYmVsPVwiV2l0aCBvbmx5IG51bGxzXCJcclxuXHRcdFsobmdNb2RlbCldPVwibGVnZW5kLmhpZGVPbmx5TnVsbHNcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRsYWJlbFdpZHRoPVwiMTBcIlxyXG5cdFx0bGFiZWw9XCJXaXRoIG9ubHkgemVyb3NcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQuaGlkZU9ubHlaZXJvZXNcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuPC9kaXY+Il19