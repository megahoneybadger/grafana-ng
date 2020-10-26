import { Component, Inject, Input } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ScaleType } from '../../../chart.m';
import { menuItems } from './units';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
export class AxisYEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.left = true;
        this.items = menuItems;
        this.scales = DropDownComponent.wrapEnum(ScaleType);
        console.log(this.axes);
    }
    get axis() {
        return this.left ? this.axes.leftY : this.axes.rightY;
    }
    get chartAxis() {
        return this.options.scales.yAxes[this.left ? 0 : 1];
    }
    get show() {
        return this.axis.show;
    }
    set show(v) {
        this.axis.show = this.chartAxis.display = v;
        this.refresh();
    }
    get unit() {
        return this.axis.unit;
    }
    set unit(v) {
        this.axis.unit = v;
        console.log(this.widget);
        this.refresh();
    }
    get scale() {
        return this.axis.scale;
    }
    set scale(v) {
        this.axis.scale = v;
        this.chartAxis.type = (v == ScaleType.Linear) ? "linear" : "logarithmic";
        this.refresh();
    }
    get label() {
        return this.axis.label;
    }
    set label(v) {
        this.axis.label = v;
        const sl = this.chartAxis.scaleLabel;
        if (v) {
            sl.display = true;
            sl.labelString = v;
        }
        else {
            sl.display = false;
            sl.labelString = undefined;
        }
        this.refresh();
    }
    get decimals() {
        return this.axis.decimals;
    }
    set decimals(v) {
        this.axis.decimals = v ? +v : undefined;
        this.refresh();
    }
    get min() {
        return this.axis.min;
    }
    set min(v) {
        this.axis.min = this.chartAxis.ticks.min = v ? +v : undefined;
        this.refresh();
    }
    get max() {
        return this.axis.max;
    }
    set max(v) {
        this.axis.max = this.chartAxis.ticks.max = v ? +v : undefined;
        this.refresh();
    }
}
AxisYEditorComponent.ɵfac = function AxisYEditorComponent_Factory(t) { return new (t || AxisYEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AxisYEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxisYEditorComponent, selectors: [["editor-axis-y"]], inputs: { left: "left" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 11, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "6", "label", "Show", 3, "ngModel", "ngModelChange"], ["label", "Unit", "width", "16", "labelWidth", "6", 3, "valueProperty", "ngModel", "items", "ngModelChange"], ["label", "Scale", "labelWidth", "6", "width", "16", 3, "ngModel", "data", "ngModelChange"], [1, "gf-form-inline"], ["type", "number", "labelWidth", "6", "label", "Y-Min", "width", "5", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["type", "number", "labelWidth", "6", "label", "Y-Max", "width", "5", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["type", "text", "labelWidth", "6", "label", "Decimals", "width", "16", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Label", "width", "16", 3, "ngModel", "ngModelChange"]], template: function AxisYEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-checkbox", 2);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.show = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-dropdown-menu", 3);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_dropdown_menu_ngModelChange_4_listener($event) { return ctx.unit = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-dropdown", 4);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_dropdown_ngModelChange_5_listener($event) { return ctx.scale = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "ed-textbox", 6);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_7_listener($event) { return ctx.min = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "ed-textbox", 7);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_8_listener($event) { return ctx.max = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ed-textbox", 8);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_9_listener($event) { return ctx.decimals = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "ed-textbox", 9);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_textbox_ngModelChange_10_listener($event) { return ctx.label = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.left ? "Left Y" : "Right Y");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.show);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("valueProperty", "type")("ngModel", ctx.unit)("items", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.scale)("data", ctx.scales);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.min);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.max);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.decimals);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.label);
    } }, directives: [i1.CheckBoxComponent, i2.NgControlStatus, i2.NgModel, i1.DropDownMenuComponent, i1.DropDownComponent, i1.TextBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxisYEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axis-y',
                templateUrl: './y-axis.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { left: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieS1heGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9heGVzL3ktYXhpcy95LWF4aXMudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2F4ZXMveS1heGlzL3ktYXhpcy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQU1wQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXdCO0lBK0ZoRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQTlGUixTQUFJLEdBQVksSUFBSSxDQUFDO1FBRTlCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBRSxTQUFTLENBQUUsQ0FBQztRQTZGL0MsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDM0IsQ0FBQztJQTVGRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJ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LEVBQUUsZUFBZTthQUM3Qjs7c0JBZ0djLE1BQU07dUJBQUUsV0FBVzt3QkE3RnZCLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAndWlsaWInO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jaGFydC5tJztcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4vdW5pdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItYXhpcy15JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ktYXhpcy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBeGlzWUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG4gXG4gIEBJbnB1dCgpIGxlZnQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGl0ZW1zID0gbWVudUl0ZW1zO1xuICBzY2FsZXMgPSBEcm9wRG93bkNvbXBvbmVudC53cmFwRW51bSggU2NhbGVUeXBlICk7XG5cbiAgZ2V0IGF4aXMoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ID8gdGhpcy5heGVzLmxlZnRZIDogdGhpcy5heGVzLnJpZ2h0WTtcbiAgfVxuXG4gIGdldCBjaGFydEF4aXMoKXtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNjYWxlcy55QXhlc1sgdGhpcy5sZWZ0ID8gMCA6IDEgXTtcbiAgfVxuXG4gIGdldCBzaG93KCk6IGJvb2xlYW57XG4gICAgcmV0dXJuIHRoaXMuYXhpcy5zaG93O1xuICB9XG5cbiAgc2V0IHNob3coIHY6IGJvb2xlYW4gKXtcbiAgICB0aGlzLmF4aXMuc2hvdyA9IHRoaXMuY2hhcnRBeGlzLmRpc3BsYXkgPSB2O1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IHVuaXQoKTogYm9vbGVhbntcbiAgICByZXR1cm4gdGhpcy5heGlzLnVuaXQ7XG4gIH1cblxuICBzZXQgdW5pdCggdjogYm9vbGVhbiApe1xuICAgIHRoaXMuYXhpcy51bml0ID0gdjtcblxuICAgIGNvbnNvbGUubG9nKCB0aGlzLndpZGdldCApO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IHNjYWxlKCk6IFNjYWxlVHlwZXtcbiAgICByZXR1cm4gdGhpcy5heGlzLnNjYWxlO1xuICB9XG5cbiAgc2V0IHNjYWxlKCB2OiBTY2FsZVR5cGUgKXtcbiAgICB0aGlzLmF4aXMuc2NhbGUgPSB2O1xuICAgIHRoaXMuY2hhcnRBeGlzLnR5cGUgPSAoIHYgPT0gU2NhbGVUeXBlLkxpbmVhciApID8gXCJsaW5lYXJcIiA6IFwibG9nYXJpdGhtaWNcIjtcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZ3tcbiAgICByZXR1cm4gdGhpcy5heGlzLmxhYmVsO1xuICB9XG5cbiAgc2V0IGxhYmVsKCB2OiBzdHJpbmcgKXtcbiAgICB0aGlzLmF4aXMubGFiZWwgPSB2O1xuICAgIGNvbnN0IHNsID0gdGhpcy5jaGFydEF4aXMuc2NhbGVMYWJlbDtcblxuICAgIGlmKCB2ICl7XG4gICAgICBzbC5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgIHNsLmxhYmVsU3RyaW5nID0gdjtcbiAgICB9IGVsc2V7XG4gICAgICBzbC5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICBzbC5sYWJlbFN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCBkZWNpbWFscygpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHRoaXMuYXhpcy5kZWNpbWFscztcbiAgfVxuXG4gIHNldCBkZWNpbWFscyggdjogbnVtYmVyICl7XG4gICAgdGhpcy5heGlzLmRlY2ltYWxzID0gdiA/ICt2IDogdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgbWluKCk6IG51bWJlcntcbiAgICByZXR1cm4gdGhpcy5heGlzLm1pbjtcbiAgfVxuXG4gIHNldCBtaW4oIHY6IG51bWJlciApe1xuICAgIHRoaXMuYXhpcy5taW4gPSB0aGlzLmNoYXJ0QXhpcy50aWNrcy5taW4gPSB2ID8gK3YgOiB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCBtYXgoKTogbnVtYmVye1xuICAgIHJldHVybiB0aGlzLmF4aXMubWF4O1xuICB9XG5cbiAgc2V0IG1heCggdjogbnVtYmVyICl7XG4gICAgdGhpcy5heGlzLm1heCA9IHRoaXMuY2hhcnRBeGlzLnRpY2tzLm1heCA9IHYgPyArdiA6IHVuZGVmaW5lZDtcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG4gIFxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG5cbiAgICBjb25zb2xlLmxvZyggdGhpcy5heGVzICk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiID5cclxuXHQ8aDUgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj57e2xlZnQgPyAnTGVmdCBZJyA6ICdSaWdodCBZJ319PC9oNT5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0bGFiZWw9XCJTaG93XCJcclxuXHRcdFsobmdNb2RlbCldPVwic2hvd1wiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1kcm9wZG93bi1tZW51XHJcblx0XHRbdmFsdWVQcm9wZXJ0eV09XCIndHlwZSdcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ1bml0XCJcclxuXHRcdFtpdGVtc109XCJpdGVtc1wiXHJcblx0XHRsYWJlbD1cIlVuaXRcIlxyXG5cdFx0d2lkdGg9XCIxNlwiXHJcblx0XHRsYWJlbFdpZHRoPVwiNlwiICA+XHJcblx0PC9lZC1kcm9wZG93bi1tZW51PlxyXG5cclxuXHQ8ZWQtZHJvcGRvd25cclxuXHRcdFsobmdNb2RlbCldPVwic2NhbGVcIlxyXG5cdFx0bGFiZWw9XCJTY2FsZVwiXHJcblx0XHRbZGF0YV09XCJzY2FsZXNcIlxyXG5cdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0d2lkdGg9XCIxNlwiICA+XHJcblx0PC9lZC1kcm9wZG93bj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm0taW5saW5lXCI+XHJcblx0XHQ8ZWQtdGV4dGJveCBcclxuXHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdFx0bGFiZWw9XCJZLU1pblwiXHJcblx0XHRcdHdpZHRoPVwiNVwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibWluXCJcclxuXHRcdFx0cGxhY2Vob2xkZXI9XCJhdXRvXCI+XHJcblx0XHQ8L2VkLXRleHRib3g+XHJcblxyXG5cdFx0PGVkLXRleHRib3ggXHJcblx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRcdGxhYmVsPVwiWS1NYXhcIlxyXG5cdFx0XHR3aWR0aD1cIjVcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cIm1heFwiXHJcblx0XHRcdHBsYWNlaG9sZGVyPVwiYXV0b1wiPlxyXG5cdFx0PC9lZC10ZXh0Ym94PlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZWQtdGV4dGJveCBcclxuXHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdGxhYmVsPVwiRGVjaW1hbHNcIlxyXG5cdFx0d2lkdGg9XCIxNlwiXHJcblx0XHRbKG5nTW9kZWwpXT1cImRlY2ltYWxzXCJcclxuXHRcdHBsYWNlaG9sZGVyPVwiYXV0b1wiPlxyXG5cdDwvZWQtdGV4dGJveD5cclxuXHQ8IS0tIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiZGVjaW1hbHNcIiAvPiAtLT5cclxuXHJcblx0PGVkLXRleHRib3ggXHJcblx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRsYWJlbD1cIkxhYmVsXCJcclxuXHRcdHdpZHRoPVwiMTZcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJsYWJlbFwiPlxyXG5cdDwvZWQtdGV4dGJveD5cclxuPC9kaXY+Il19