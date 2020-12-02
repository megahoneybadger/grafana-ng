import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PANEL_TOKEN, TimeRangeParser } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/forms";
import * as i3 from "uilib";
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
    } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i3.TextBoxComponent, i2.NgControlStatus, i2.FormControlName, i3.CheckBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time',
                templateUrl: './time.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvdGltZS90aW1lLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC90aW1lL3RpbWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBUyxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQU14RSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsd0JBQXdCO0lBSS9ELFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFROztRQUVSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDekIsTUFBTSxFQUFFLElBQUksV0FBVyxPQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQ0FBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDM0UsT0FBTyxFQUFFLElBQUksV0FBVyxPQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxtQ0FBSSxFQUFFLEVBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDaEYsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUVILElBQUk7YUFDRCxJQUFJO2FBQ0osWUFBWTthQUNaLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ25CLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFFakIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNiO2dCQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRztvQkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDYjtnQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUc7b0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7aUJBQ3pCO2dCQUVELElBQUksSUFBSSxFQUFFO29CQUNSLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDYjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsWUFBWSxDQUFDLENBQWM7UUFDekIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFNUIsT0FBTyxDQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUN6RSxDQUFDOztzRkFwRFUsbUJBQW1CLHVCQUlULFdBQVc7d0RBSnJCLG1CQUFtQjtRQ1RoQyxrQ0FDQztRQUFBLDhCQUVDO1FBQUEsOEJBQ0M7UUFBQSw4QkFDQztRQUFBLCtCQUNDO1FBQUEsdUJBQTZCO1FBQzlCLGlCQUFPO1FBQ1AsK0JBQXFDO1FBQUEsc0NBQXNCO1FBQUEsaUJBQU87UUFDbkUsaUJBQU07UUFFTixnQ0FNYTtRQUNkLGlCQUFNO1FBRU4sK0JBQ0M7UUFBQSwrQkFDQztRQUFBLGdDQUNDO1FBQUEsd0JBQTZCO1FBQzlCLGlCQUFPO1FBQ1AsZ0NBQXFDO1FBQUEsK0JBQWM7UUFBQSxpQkFBTztRQUMzRCxpQkFBTTtRQUVOLGlDQU1hO1FBQ2QsaUJBQU07UUFFTixnQ0FDQztRQUFBLCtCQUNDO1FBQUEsZ0NBQ0M7UUFBQSx3QkFBNkI7UUFDOUIsaUJBQU87UUFDUixpQkFBTTtRQUVOLG1DQUtjO1FBQ2YsaUJBQU07UUFFUCxpQkFBTTtRQUNQLGlCQUFPOztRQXJERCxvQ0FBa0I7O2tERFNYLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSxhQUFhO2FBQzNCOztzQkFLYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiwgVGltZVJhbmdlUGFyc2VyIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItdGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgIHtcblxuICBmb3JtOiBGb3JtR3JvdXA7XG4gXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG5cblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdCdmcm9tJzogbmV3IEZvcm1Db250cm9sKCB0aGlzLnRpbWUuZnJvbSA/PyAnJywgdGhpcy52YWxpZGF0ZVRpbWUuYmluZCggdGhpcyApKSxcbiAgICAgICdzaGlmdCc6IG5ldyBGb3JtQ29udHJvbCh0aGlzLnRpbWUuc2hpZnQgPz8gJycsICB0aGlzLnZhbGlkYXRlVGltZS5iaW5kKCB0aGlzICkpLFxuICAgICAgJ2hpZGUnOiBuZXcgRm9ybUNvbnRyb2wodGhpcy50aW1lLmhpZGUpXG4gICAgfSk7XG5cbiAgICB0aGlzXG4gICAgICAuZm9ybVxuICAgICAgLnZhbHVlQ2hhbmdlc1xuICAgICAgLnN1YnNjcmliZSggdiA9PiB7XG4gICAgICAgIGlmKCB0aGlzLmZvcm0udmFsaWQgKXtcbiAgICAgICAgICBsZXQgcHVsbCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYodGhpcy50aW1lLmZyb20gIT09IHYuZnJvbSApe1xuICAgICAgICAgICAgdGhpcy50aW1lLmZyb20gPSB2LmZyb207XG4gICAgICAgICAgICBwdWxsID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiggdGhpcy50aW1lLnNoaWZ0ICE9PSB2LnNoaWZ0ICkge1xuICAgICAgICAgICAgdGhpcy50aW1lLnNoaWZ0ID0gdi5zaGlmdDtcbiAgICAgICAgICAgIHB1bGwgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCB0aGlzLnRpbWUuaGlkZSAhPT0gdi5oaWRlICkge1xuICAgICAgICAgICAgdGhpcy50aW1lLmhpZGUgPSB2LmhpZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoIHB1bGwgKXtcbiAgICAgICAgICAgIHRoaXMucHVsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZVRpbWUoYzogRm9ybUNvbnRyb2wpIHtcbiAgICBpZiggIWMudmFsdWUgKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHYgPSBgbm93IC0gJHtjLnZhbHVlfWBcblxuICAgIHJldHVybiAoIFRpbWVSYW5nZVBhcnNlci5pc1ZhbGlkKCB2ICkgKSA/ICBudWxsIDogeyBpbnZhbGlkVGltZTogdHJ1ZSB9XG4gIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiICNmPlxyXG5cdDxkaXYgY2xhc3M9XCJzZWN0aW9uIGdmLWZvcm0tZ3JvdXBcIj5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZWQtZm9ybS1pbmxpbmVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImdmLWZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTEyXCI+T3ZlcnJpZGUgcmVsYXRpdmUgdGltZTwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZWQtdGV4dGJveCBcclxuXHRcdFx0XHRsYWJlbD1cIkxhc3RcIlxyXG5cdFx0XHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdFx0XHR3aWR0aD1cIjhcIlxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiMWhcIlxyXG5cdFx0XHRcdGZvcm1Db250cm9sTmFtZT1cImZyb21cIlx0PlxyXG5cdFx0XHQ8L2VkLXRleHRib3g+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzcz1cImVkLWZvcm0taW5saW5lXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCB3aWR0aC0xMlwiPkFkZCB0aW1lIHNoaWZ0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHRcdGxhYmVsPVwiQW1vdW50XCJcclxuXHRcdFx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRcdFx0d2lkdGg9XCI4XCJcclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIjFoXCJcclxuXHRcdFx0XHRmb3JtQ29udHJvbE5hbWU9XCJzaGlmdFwiXHQ+XHJcblx0XHRcdDwvZWQtdGV4dGJveD5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCI+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRcdFx0bGFiZWxXaWR0aD1cIjEyXCJcclxuXHRcdFx0XHR3aWR0aD1cIjZcIlxyXG5cdFx0XHRcdGxhYmVsPVwiSGlkZSB0aW1lIG92ZXJyaWRlIGluZm9cIlxyXG5cdFx0XHRcdGZvcm1Db250cm9sTmFtZT1cImhpZGVcIlx0XHQ+XHJcblx0XHRcdDwvZWQtY2hlY2tib3g+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0PC9kaXY+XHJcbjwvZm9ybT5cclxuIl19