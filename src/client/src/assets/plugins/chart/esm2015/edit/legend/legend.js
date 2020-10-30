import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
export class LegendEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
LegendEditorComponent.ɵfac = function LegendEditorComponent_Factory(t) { return new (t || LegendEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
LegendEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendEditorComponent, selectors: [["editor-legend"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 11, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "7", "label", "Show", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "As Table", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "To the right", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["labelWidth", "4", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Avg", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Current", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Total", 3, "ngModel", "ngModelChange"], ["type", "number", "labelWidth", "6", "label", "Decimals", "width", "4", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only nulls", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only zeros", 3, "ngModel", "ngModelChange"]], template: function LegendEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(17, "ed-textbox", 11);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_textbox_ngModelChange_17_listener($event) { return ctx.legend.decimals = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 0);
        i0.ɵɵelementStart(19, "h5", 1);
        i0.ɵɵtext(20, "Hide series");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "ed-checkbox", 12);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.legend.hideOnlyNulls = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "ed-checkbox", 13);
        i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_22_listener($event) { return ctx.legend.hideOnlyZeroes = $event; });
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
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.legend.decimals);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.legend.hideOnlyNulls);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.legend.hideOnlyZeroes);
    } }, directives: [i1.CheckBoxComponent, i2.NgControlStatus, i2.NgModel, i1.TextBoxComponent], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9sZWdlbmQvbGVnZW5kLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9sZWdlbmQvbGVnZW5kLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQU14RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsd0JBQXdCO0lBRWpFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ2pCLENBQUM7OzBGQUpVLHFCQUFxQix1QkFFWCxXQUFXOzBEQUZyQixxQkFBcUI7UUNSbEMsOEJBQ0M7UUFBQSw2QkFBNEI7UUFBQSx1QkFBTztRQUFBLGlCQUFLO1FBRXhDLHNDQUljO1FBRGIseUpBQXlCO1FBQzFCLGlCQUFjO1FBRWQsc0NBSWM7UUFEYiwwSkFBMEI7UUFDM0IsaUJBQWM7UUFFZCxzQ0FJYztRQURiLDBKQUEwQjtRQUMzQixpQkFBYztRQUNmLGlCQUFNO1FBRU4sOEJBQ0M7UUFBQSw2QkFBNEI7UUFBQSxzQkFBTTtRQUFBLGlCQUFLO1FBRXZDLDhCQUNDO1FBQUEsdUNBSWM7UUFEYix5SkFBd0I7UUFDekIsaUJBQWM7UUFFZCx1Q0FJYztRQURiLHlKQUF3QjtRQUN6QixpQkFBYztRQUNmLGlCQUFNO1FBRU4sK0JBQ0M7UUFBQSx1Q0FJYztRQURiLHlKQUF3QjtRQUN6QixpQkFBYztRQUVkLHVDQUljO1FBRGIsNkpBQTRCO1FBQzdCLGlCQUFjO1FBQ2YsaUJBQU07UUFFTiwrQkFDQztRQUFBLHdDQUljO1FBRGIsMkpBQTBCO1FBQzNCLGlCQUFjO1FBRWQsdUNBT2E7UUFEWiw2SkFBNkI7UUFDOUIsaUJBQWE7UUFDZCxpQkFBTTtRQUVQLGlCQUFNO1FBRU4sK0JBQ0M7UUFBQSw4QkFBNEI7UUFBQSw0QkFBVztRQUFBLGlCQUFLO1FBRTVDLHdDQUljO1FBRGIsbUtBQWtDO1FBQ25DLGlCQUFjO1FBRWQsd0NBSWM7UUFEYixvS0FBbUM7UUFDcEMsaUJBQWM7UUFFZixpQkFBTTs7UUFqRkosZUFBeUI7UUFBekIseUNBQXlCO1FBTXpCLGVBQTBCO1FBQTFCLDBDQUEwQjtRQU0xQixlQUEwQjtRQUExQiwwQ0FBMEI7UUFXekIsZUFBd0I7UUFBeEIsd0NBQXdCO1FBTXhCLGVBQXdCO1FBQXhCLHdDQUF3QjtRQVF4QixlQUF3QjtRQUF4Qix3Q0FBd0I7UUFNeEIsZUFBNEI7UUFBNUIsNENBQTRCO1FBUTVCLGVBQTBCO1FBQTFCLDBDQUEwQjtRQVMxQixlQUE2QjtRQUE3Qiw2Q0FBNkI7UUFZOUIsZUFBa0M7UUFBbEMsa0RBQWtDO1FBTWxDLGVBQW1DO1FBQW5DLG1EQUFtQzs7a0RENUV4QixxQkFBcUI7Y0FKakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsZUFBZTthQUM3Qjs7c0JBR2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWxlZ2VuZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWdlbmQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGVnZW5kRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+T3B0aW9uczwvaDU+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI3XCJcclxuXHRcdGxhYmVsPVwiU2hvd1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC5zaG93XCI+XHJcblx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0bGFiZWxXaWR0aD1cIjdcIlxyXG5cdFx0bGFiZWw9XCJBcyBUYWJsZVwiXHJcblx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC50YWJsZVwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI3XCJcclxuXHRcdGxhYmVsPVwiVG8gdGhlIHJpZ2h0XCJcclxuXHRcdFsobmdNb2RlbCldPVwibGVnZW5kLnJpZ2h0XCI+XHJcblx0PC9lZC1jaGVja2JveD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+VmFsdWVzPC9oNT5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI0XCJcclxuXHRcdFx0bGFiZWw9XCJNaW5cIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cImxlZ2VuZC5taW5cIj5cclxuXHRcdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdFx0PGVkLWNoZWNrYm94IFxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRcdGxhYmVsPVwiTWluXCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQubWF4XCI+XHJcblx0XHQ8L2VkLWNoZWNrYm94PlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHRcdDxlZC1jaGVja2JveCBcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjRcIlxyXG5cdFx0XHRsYWJlbD1cIkF2Z1wiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibGVnZW5kLmF2Z1wiPlxyXG5cdFx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdFx0bGFiZWw9XCJDdXJyZW50XCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQuY3VycmVudFwiPlxyXG5cdFx0PC9lZC1jaGVja2JveD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI0XCJcclxuXHRcdFx0bGFiZWw9XCJUb3RhbFwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibGVnZW5kLnRvdGFsXCI+XHJcblx0XHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0XHRsYWJlbD1cIkRlY2ltYWxzXCJcclxuXHRcdFx0d2lkdGg9XCI0XCJcclxuXHRcdFx0cGxhY2Vob2xkZXI9XCJhdXRvXCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQuZGVjaW1hbHNcIj5cclxuXHRcdDwvZWQtdGV4dGJveD5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiPlxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPkhpZGUgc2VyaWVzPC9oNT5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0bGFiZWxXaWR0aD1cIjEwXCJcclxuXHRcdGxhYmVsPVwiV2l0aCBvbmx5IG51bGxzXCJcclxuXHRcdFsobmdNb2RlbCldPVwibGVnZW5kLmhpZGVPbmx5TnVsbHNcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRsYWJlbFdpZHRoPVwiMTBcIlxyXG5cdFx0bGFiZWw9XCJXaXRoIG9ubHkgemVyb3NcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJsZWdlbmQuaGlkZU9ubHlaZXJvZXNcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuPC9kaXY+Il19