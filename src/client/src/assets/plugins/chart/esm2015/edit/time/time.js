import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PANEL_TOKEN, TimeRangeParser } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "uilib";
export class TimeEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    ngOnInit() {
        var _a, _b;
        this.form = new FormGroup({
            'from': new FormControl((_a = this.time.from) !== null && _a !== void 0 ? _a : '', this.validateTime.bind(this)),
            'shift': new FormControl((_b = this.time.shift) !== null && _b !== void 0 ? _b : '', this.validateTime.bind(this)),
            'hide': new FormControl(this.time.hide)
        });
        this
            .form
            .valueChanges
            .subscribe(v => {
            if (this.form.valid) {
                let pull = false;
                if (this.time.from !== v.from) {
                    this.time.from = v.from;
                    pull = true;
                }
                if (this.time.shift !== v.shift) {
                    this.time.shift = v.shift;
                    pull = true;
                }
                if (this.time.hide !== v.hide) {
                    this.time.hide = v.hide;
                }
                if (pull) {
                    this.pull();
                }
            }
        });
    }
    validateTime(c) {
        if (!c.value) {
            return null;
        }
        const v = `now - ${c.value}`;
        return (TimeRangeParser.isValid(v)) ? null : { invalidTime: true };
    }
}
TimeEditorComponent.ɵfac = function TimeEditorComponent_Factory(t) { return new (t || TimeEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
TimeEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeEditorComponent, selectors: [["editor-time"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 22, vars: 1, consts: [[3, "formGroup"], ["f", ""], [1, "section", "gf-form-group"], [1, "ed-form-inline"], [1, "gf-form"], [1, "gf-form-label"], [1, "fa", "fa-clock-o"], [1, "gf-form-label", "width-12"], ["label", "Last", "labelWidth", "6", "width", "8", "placeholder", "1h", "formControlName", "from"], ["label", "Amount", "labelWidth", "6", "width", "8", "placeholder", "1h", "formControlName", "shift"], [1, "gf-form-inline"], ["labelWidth", "12", "width", "6", "label", "Hide time override info", "formControlName", "hide"]], template: function TimeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "span", 5);
        i0.ɵɵelement(6, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵtext(8, "Override relative time");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "ed-textbox", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 3);
        i0.ɵɵelementStart(11, "div", 4);
        i0.ɵɵelementStart(12, "span", 5);
        i0.ɵɵelement(13, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "span", 7);
        i0.ɵɵtext(15, "Add time shift");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "ed-textbox", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 10);
        i0.ɵɵelementStart(18, "div", 4);
        i0.ɵɵelementStart(19, "span", 5);
        i0.ɵɵelement(20, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "ed-checkbox", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.TextBoxComponent, i1.NgControlStatus, i1.FormControlName, i2.CheckBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time',
                templateUrl: './time.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvdGltZS90aW1lLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC90aW1lL3RpbWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBUyxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBTXhFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBd0I7SUFJL0QsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVE7O1FBRVIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN6QixNQUFNLEVBQUUsSUFBSSxXQUFXLE9BQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG1DQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUMzRSxPQUFPLEVBQUUsSUFBSSxXQUFXLE9BQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG1DQUFJLEVBQUUsRUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUNoRixNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBRUgsSUFBSTthQUNELElBQUk7YUFDSixZQUFZO2FBQ1osU0FBUyxDQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbkIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUVqQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQ2I7Z0JBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFHO29CQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNiO2dCQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRztvQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDekI7Z0JBRUQsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBYztRQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUU1QixPQUFPLENBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFBO0lBQ3pFLENBQUM7O3NGQXBEVSxtQkFBbUIsdUJBSVQsV0FBVzt3REFKckIsbUJBQW1CO1FDVGhDLGtDQUNDO1FBQUEsOEJBRUM7UUFBQSw4QkFDQztRQUFBLDhCQUNDO1FBQUEsK0JBQ0M7UUFBQSx1QkFBNkI7UUFDOUIsaUJBQU87UUFDUCwrQkFBcUM7UUFBQSxzQ0FBc0I7UUFBQSxpQkFBTztRQUNuRSxpQkFBTTtRQUVOLGdDQU1hO1FBQ2QsaUJBQU07UUFFTiwrQkFDQztRQUFBLCtCQUNDO1FBQUEsZ0NBQ0M7UUFBQSx3QkFBNkI7UUFDOUIsaUJBQU87UUFDUCxnQ0FBcUM7UUFBQSwrQkFBYztRQUFBLGlCQUFPO1FBQzNELGlCQUFNO1FBRU4saUNBTWE7UUFDZCxpQkFBTTtRQUVOLGdDQUNDO1FBQUEsK0JBQ0M7UUFBQSxnQ0FDQztRQUFBLHdCQUE2QjtRQUM5QixpQkFBTztRQUNSLGlCQUFNO1FBRU4sbUNBS2M7UUFDZixpQkFBTTtRQUVQLGlCQUFNO1FBQ1AsaUJBQU87O1FBckRELG9DQUFrQjs7a0REU1gsbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLGFBQWE7YUFDM0I7O3NCQUtjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOLCBUaW1lUmFuZ2VQYXJzZXIgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci10aW1lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGltZUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCAge1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcblxuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdFx0J2Zyb20nOiBuZXcgRm9ybUNvbnRyb2woIHRoaXMudGltZS5mcm9tID8/ICcnLCB0aGlzLnZhbGlkYXRlVGltZS5iaW5kKCB0aGlzICkpLFxuICAgICAgJ3NoaWZ0JzogbmV3IEZvcm1Db250cm9sKHRoaXMudGltZS5zaGlmdCA/PyAnJywgIHRoaXMudmFsaWRhdGVUaW1lLmJpbmQoIHRoaXMgKSksXG4gICAgICAnaGlkZSc6IG5ldyBGb3JtQ29udHJvbCh0aGlzLnRpbWUuaGlkZSlcbiAgICB9KTtcblxuICAgIHRoaXNcbiAgICAgIC5mb3JtXG4gICAgICAudmFsdWVDaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKCB2ID0+IHtcbiAgICAgICAgaWYoIHRoaXMuZm9ybS52YWxpZCApe1xuICAgICAgICAgIGxldCBwdWxsID0gZmFsc2U7XG5cbiAgICAgICAgICBpZih0aGlzLnRpbWUuZnJvbSAhPT0gdi5mcm9tICl7XG4gICAgICAgICAgICB0aGlzLnRpbWUuZnJvbSA9IHYuZnJvbTtcbiAgICAgICAgICAgIHB1bGwgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCB0aGlzLnRpbWUuc2hpZnQgIT09IHYuc2hpZnQgKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUuc2hpZnQgPSB2LnNoaWZ0O1xuICAgICAgICAgICAgcHVsbCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoIHRoaXMudGltZS5oaWRlICE9PSB2LmhpZGUgKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUuaGlkZSA9IHYuaGlkZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiggcHVsbCApe1xuICAgICAgICAgICAgdGhpcy5wdWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlVGltZShjOiBGb3JtQ29udHJvbCkge1xuICAgIGlmKCAhYy52YWx1ZSApe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdiA9IGBub3cgLSAke2MudmFsdWV9YFxuXG4gICAgcmV0dXJuICggVGltZVJhbmdlUGFyc2VyLmlzVmFsaWQoIHYgKSApID8gIG51bGwgOiB7IGludmFsaWRUaW1lOiB0cnVlIH1cbiAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgI2Y+XHJcblx0PGRpdiBjbGFzcz1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJlZC1mb3JtLWlubGluZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCI+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdmLWZvcm0tbGFiZWwgd2lkdGgtMTJcIj5PdmVycmlkZSByZWxhdGl2ZSB0aW1lPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHRcdGxhYmVsPVwiTGFzdFwiXHJcblx0XHRcdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0XHRcdHdpZHRoPVwiOFwiXHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCIxaFwiXHJcblx0XHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwiZnJvbVwiXHQ+XHJcblx0XHRcdDwvZWQtdGV4dGJveD5cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZWQtZm9ybS1pbmxpbmVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTEyXCI+QWRkIHRpbWUgc2hpZnQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGVkLXRleHRib3ggXHJcblx0XHRcdFx0bGFiZWw9XCJBbW91bnRcIlxyXG5cdFx0XHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdFx0XHR3aWR0aD1cIjhcIlxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiMWhcIlxyXG5cdFx0XHRcdGZvcm1Db250cm9sTmFtZT1cInNoaWZ0XCJcdD5cclxuXHRcdFx0PC9lZC10ZXh0Ym94PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxlZC1jaGVja2JveCBcclxuXHRcdFx0XHRsYWJlbFdpZHRoPVwiMTJcIlxyXG5cdFx0XHRcdHdpZHRoPVwiNlwiXHJcblx0XHRcdFx0bGFiZWw9XCJIaWRlIHRpbWUgb3ZlcnJpZGUgaW5mb1wiXHJcblx0XHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwiaGlkZVwiXHRcdD5cclxuXHRcdFx0PC9lZC1jaGVja2JveD5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHQ8L2Rpdj5cclxuPC9mb3JtPlxyXG4iXX0=