import { Component, Inject, Input } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ScaleType } from '../../../chart.m';
import { menuItems } from './units';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
export class AxisYEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.left = true;
        this.units = _.cloneDeep(menuItems);
        this.scales = DropDownComponent.wrapEnum(ScaleType);
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
AxisYEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxisYEditorComponent, selectors: [["editor-axis-y"]], inputs: { left: "left" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 11, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "6", "label", "Show", 3, "ngModel", "ngModelChange"], ["label", "Unit", "width", "16", "labelWidth", "6", 3, "valueProperty", "ngModel", "data", "ngModelChange"], ["label", "Scale", "labelWidth", "6", "width", "16", 3, "ngModel", "data", "ngModelChange"], [1, "gf-form-inline"], ["type", "number", "labelWidth", "6", "label", "Y-Min", "width", "5", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["type", "number", "labelWidth", "6", "label", "Y-Max", "width", "5", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["type", "text", "labelWidth", "6", "label", "Decimals", "width", "16", "placeholder", "auto", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Label", "width", "16", 3, "ngModel", "ngModelChange"]], template: function AxisYEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-checkbox", 2);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.show = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ed-hierarchical-dropdown", 3);
        i0.ɵɵlistener("ngModelChange", function AxisYEditorComponent_Template_ed_hierarchical_dropdown_ngModelChange_4_listener($event) { return ctx.unit = $event; });
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
        i0.ɵɵproperty("valueProperty", "type")("ngModel", ctx.unit)("data", ctx.units);
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
    } }, directives: [i2.CheckBoxComponent, i3.NgControlStatus, i3.NgModel, i2.HierarchicalDropDownComponent, i2.DropDownComponent, i2.TextBoxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxisYEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axis-y',
                templateUrl: './y-axis.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { left: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieS1heGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9heGVzL3ktYXhpcy95LWF4aXMudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2F4ZXMveS1heGlzL3ktYXhpcy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFNNUIsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHdCQUF3QjtJQThGaEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUE3RlIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUU5QixVQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxTQUFTLENBQUUsQ0FBQztRQUNqQyxXQUFNLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLFNBQVMsQ0FBRSxDQUFDO0lBMkZqRCxDQUFDO0lBekZELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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O3dCQTVGdkIsSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgRHJvcERvd25Db21wb25lbnQgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCB7IFNjYWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi91bml0cyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1heGlzLXknLFxuICB0ZW1wbGF0ZVVybDogJy4veS1heGlzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF4aXNZRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiBcbiAgQElucHV0KCkgbGVmdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgdW5pdHMgPSBfLmNsb25lRGVlcCggbWVudUl0ZW1zICk7XG4gIHNjYWxlcyA9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBTY2FsZVR5cGUgKTtcblxuICBnZXQgYXhpcygpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgPyB0aGlzLmF4ZXMubGVmdFkgOiB0aGlzLmF4ZXMucmlnaHRZO1xuICB9XG5cbiAgZ2V0IGNoYXJ0QXhpcygpe1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2NhbGVzLnlBeGVzWyB0aGlzLmxlZnQgPyAwIDogMSBdO1xuICB9XG5cbiAgZ2V0IHNob3coKTogYm9vbGVhbntcbiAgICByZXR1cm4gdGhpcy5heGlzLnNob3c7XG4gIH1cblxuICBzZXQgc2hvdyggdjogYm9vbGVhbiApe1xuICAgIHRoaXMuYXhpcy5zaG93ID0gdGhpcy5jaGFydEF4aXMuZGlzcGxheSA9IHY7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgdW5pdCgpOiBib29sZWFue1xuICAgIHJldHVybiB0aGlzLmF4aXMudW5pdDtcbiAgfVxuXG4gIHNldCB1bml0KCB2OiBib29sZWFuICl7XG4gICAgdGhpcy5heGlzLnVuaXQgPSB2O1xuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgc2NhbGUoKTogU2NhbGVUeXBle1xuICAgIHJldHVybiB0aGlzLmF4aXMuc2NhbGU7XG4gIH1cblxuICBzZXQgc2NhbGUoIHY6IFNjYWxlVHlwZSApe1xuICAgIHRoaXMuYXhpcy5zY2FsZSA9IHY7XG4gICAgdGhpcy5jaGFydEF4aXMudHlwZSA9ICggdiA9PSBTY2FsZVR5cGUuTGluZWFyICkgPyBcImxpbmVhclwiIDogXCJsb2dhcml0aG1pY1wiO1xuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgbGFiZWwoKTogc3RyaW5ne1xuICAgIHJldHVybiB0aGlzLmF4aXMubGFiZWw7XG4gIH1cblxuICBzZXQgbGFiZWwoIHY6IHN0cmluZyApe1xuICAgIHRoaXMuYXhpcy5sYWJlbCA9IHY7XG4gICAgY29uc3Qgc2wgPSB0aGlzLmNoYXJ0QXhpcy5zY2FsZUxhYmVsO1xuXG4gICAgaWYoIHYgKXtcbiAgICAgIHNsLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgc2wubGFiZWxTdHJpbmcgPSB2O1xuICAgIH0gZWxzZXtcbiAgICAgIHNsLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgIHNsLmxhYmVsU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IGRlY2ltYWxzKCk6IG51bWJlcntcbiAgICByZXR1cm4gdGhpcy5heGlzLmRlY2ltYWxzO1xuICB9XG5cbiAgc2V0IGRlY2ltYWxzKCB2OiBudW1iZXIgKXtcbiAgICB0aGlzLmF4aXMuZGVjaW1hbHMgPSB2ID8gK3YgOiB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCBtaW4oKTogbnVtYmVye1xuICAgIHJldHVybiB0aGlzLmF4aXMubWluO1xuICB9XG5cbiAgc2V0IG1pbiggdjogbnVtYmVyICl7XG4gICAgdGhpcy5heGlzLm1pbiA9IHRoaXMuY2hhcnRBeGlzLnRpY2tzLm1pbiA9IHYgPyArdiA6IHVuZGVmaW5lZDtcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IG1heCgpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHRoaXMuYXhpcy5tYXg7XG4gIH1cblxuICBzZXQgbWF4KCB2OiBudW1iZXIgKXtcbiAgICB0aGlzLmF4aXMubWF4ID0gdGhpcy5jaGFydEF4aXMudGlja3MubWF4ID0gdiA/ICt2IDogdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cbiAgXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCIgPlxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPnt7bGVmdCA/ICdMZWZ0IFknIDogJ1JpZ2h0IFknfX08L2g1PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRsYWJlbD1cIlNob3dcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJzaG93XCI+XHJcblx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0PGVkLWhpZXJhcmNoaWNhbC1kcm9wZG93blxyXG5cdFx0W3ZhbHVlUHJvcGVydHldPVwiJ3R5cGUnXCJcclxuXHRcdFsobmdNb2RlbCldPVwidW5pdFwiXHJcblx0XHRbZGF0YV09XCJ1bml0c1wiXHJcblx0XHRsYWJlbD1cIlVuaXRcIlxyXG5cdFx0d2lkdGg9XCIxNlwiXHJcblx0XHRsYWJlbFdpZHRoPVwiNlwiICA+XHJcblx0PC9lZC1oaWVyYXJjaGljYWwtZHJvcGRvd24+XHJcblxyXG5cdDxlZC1kcm9wZG93blxyXG5cdFx0WyhuZ01vZGVsKV09XCJzY2FsZVwiXHJcblx0XHRsYWJlbD1cIlNjYWxlXCJcclxuXHRcdFtkYXRhXT1cInNjYWxlc1wiXHJcblx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHR3aWR0aD1cIjE2XCIgID5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1pbmxpbmVcIj5cclxuXHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0XHRsYWJlbD1cIlktTWluXCJcclxuXHRcdFx0d2lkdGg9XCI1XCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJtaW5cIlxyXG5cdFx0XHRwbGFjZWhvbGRlcj1cImF1dG9cIj5cclxuXHRcdDwvZWQtdGV4dGJveD5cclxuXHJcblx0XHQ8ZWQtdGV4dGJveCBcclxuXHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdFx0bGFiZWw9XCJZLU1heFwiXHJcblx0XHRcdHdpZHRoPVwiNVwiXHJcblx0XHRcdFsobmdNb2RlbCldPVwibWF4XCJcclxuXHRcdFx0cGxhY2Vob2xkZXI9XCJhdXRvXCI+XHJcblx0XHQ8L2VkLXRleHRib3g+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxlZC10ZXh0Ym94IFxyXG5cdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0bGFiZWw9XCJEZWNpbWFsc1wiXHJcblx0XHR3aWR0aD1cIjE2XCJcclxuXHRcdFsobmdNb2RlbCldPVwiZGVjaW1hbHNcIlxyXG5cdFx0cGxhY2Vob2xkZXI9XCJhdXRvXCI+XHJcblx0PC9lZC10ZXh0Ym94PlxyXG5cdDwhLS0gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJkZWNpbWFsc1wiIC8+IC0tPlxyXG5cclxuXHQ8ZWQtdGV4dGJveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdGxhYmVsPVwiTGFiZWxcIlxyXG5cdFx0d2lkdGg9XCIxNlwiXHJcblx0XHRbKG5nTW9kZWwpXT1cImxhYmVsXCI+XHJcblx0PC9lZC10ZXh0Ym94PlxyXG48L2Rpdj4iXX0=