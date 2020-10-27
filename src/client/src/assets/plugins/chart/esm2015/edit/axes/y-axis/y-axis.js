import { Component, Inject, Input } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { ScaleType } from '../../../chart.m';
import { menuItems } from './units';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
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
    } }, directives: [i1.CheckBoxComponent, i2.NgControlStatus, i2.NgModel, i1.HierarchicalDropDownComponent, i1.DropDownComponent, i1.TextBoxComponent], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieS1heGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9heGVzL3ktYXhpcy95LWF4aXMudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2F4ZXMveS1heGlzL3ktYXhpcy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQU01QixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXdCO0lBOEZoRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQTdGUixTQUFJLEdBQVksSUFBSSxDQUFDO1FBRTlCLFVBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFFLFNBQVMsQ0FBRSxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUUsU0FBUyxDQUFFLENBQUM7SUEyRmpELENBQUM7SUF6RkQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxN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d0JBNUZ2QixJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuaW1wb3J0IHsgU2NhbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tICcuL3VuaXRzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWF4aXMteScsXG4gIHRlbXBsYXRlVXJsOiAnLi95LWF4aXMuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXhpc1lFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuIFxuICBASW5wdXQoKSBsZWZ0OiBib29sZWFuID0gdHJ1ZTtcblxuICB1bml0cyA9IF8uY2xvbmVEZWVwKCBtZW51SXRlbXMgKTtcbiAgc2NhbGVzID0gRHJvcERvd25Db21wb25lbnQud3JhcEVudW0oIFNjYWxlVHlwZSApO1xuXG4gIGdldCBheGlzKCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCA/IHRoaXMuYXhlcy5sZWZ0WSA6IHRoaXMuYXhlcy5yaWdodFk7XG4gIH1cblxuICBnZXQgY2hhcnRBeGlzKCl7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY2FsZXMueUF4ZXNbIHRoaXMubGVmdCA/IDAgOiAxIF07XG4gIH1cblxuICBnZXQgc2hvdygpOiBib29sZWFue1xuICAgIHJldHVybiB0aGlzLmF4aXMuc2hvdztcbiAgfVxuXG4gIHNldCBzaG93KCB2OiBib29sZWFuICl7XG4gICAgdGhpcy5heGlzLnNob3cgPSB0aGlzLmNoYXJ0QXhpcy5kaXNwbGF5ID0gdjtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCB1bml0KCk6IGJvb2xlYW57XG4gICAgcmV0dXJuIHRoaXMuYXhpcy51bml0O1xuICB9XG5cbiAgc2V0IHVuaXQoIHY6IGJvb2xlYW4gKXtcbiAgICB0aGlzLmF4aXMudW5pdCA9IHY7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCBzY2FsZSgpOiBTY2FsZVR5cGV7XG4gICAgcmV0dXJuIHRoaXMuYXhpcy5zY2FsZTtcbiAgfVxuXG4gIHNldCBzY2FsZSggdjogU2NhbGVUeXBlICl7XG4gICAgdGhpcy5heGlzLnNjYWxlID0gdjtcbiAgICB0aGlzLmNoYXJ0QXhpcy50eXBlID0gKCB2ID09IFNjYWxlVHlwZS5MaW5lYXIgKSA/IFwibGluZWFyXCIgOiBcImxvZ2FyaXRobWljXCI7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCBsYWJlbCgpOiBzdHJpbmd7XG4gICAgcmV0dXJuIHRoaXMuYXhpcy5sYWJlbDtcbiAgfVxuXG4gIHNldCBsYWJlbCggdjogc3RyaW5nICl7XG4gICAgdGhpcy5heGlzLmxhYmVsID0gdjtcbiAgICBjb25zdCBzbCA9IHRoaXMuY2hhcnRBeGlzLnNjYWxlTGFiZWw7XG5cbiAgICBpZiggdiApe1xuICAgICAgc2wuZGlzcGxheSA9IHRydWU7XG4gICAgICBzbC5sYWJlbFN0cmluZyA9IHY7XG4gICAgfSBlbHNle1xuICAgICAgc2wuZGlzcGxheSA9IGZhbHNlO1xuICAgICAgc2wubGFiZWxTdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgZGVjaW1hbHMoKTogbnVtYmVye1xuICAgIHJldHVybiB0aGlzLmF4aXMuZGVjaW1hbHM7XG4gIH1cblxuICBzZXQgZGVjaW1hbHMoIHY6IG51bWJlciApe1xuICAgIHRoaXMuYXhpcy5kZWNpbWFscyA9IHYgPyArdiA6IHVuZGVmaW5lZDtcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IG1pbigpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHRoaXMuYXhpcy5taW47XG4gIH1cblxuICBzZXQgbWluKCB2OiBudW1iZXIgKXtcbiAgICB0aGlzLmF4aXMubWluID0gdGhpcy5jaGFydEF4aXMudGlja3MubWluID0gdiA/ICt2IDogdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgbWF4KCk6IG51bWJlcntcbiAgICByZXR1cm4gdGhpcy5heGlzLm1heDtcbiAgfVxuXG4gIHNldCBtYXgoIHY6IG51bWJlciApe1xuICAgIHRoaXMuYXhpcy5tYXggPSB0aGlzLmNoYXJ0QXhpcy50aWNrcy5tYXggPSB2ID8gK3YgOiB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuICBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJzZWN0aW9uIGdmLWZvcm0tZ3JvdXBcIiA+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+e3tsZWZ0ID8gJ0xlZnQgWScgOiAnUmlnaHQgWSd9fTwvaDU+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdGxhYmVsPVwiU2hvd1wiXHJcblx0XHRbKG5nTW9kZWwpXT1cInNob3dcIj5cclxuXHQ8L2VkLWNoZWNrYm94PlxyXG5cclxuXHQ8ZWQtaGllcmFyY2hpY2FsLWRyb3Bkb3duXHJcblx0XHRbdmFsdWVQcm9wZXJ0eV09XCIndHlwZSdcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJ1bml0XCJcclxuXHRcdFtkYXRhXT1cInVuaXRzXCJcclxuXHRcdGxhYmVsPVwiVW5pdFwiXHJcblx0XHR3aWR0aD1cIjE2XCJcclxuXHRcdGxhYmVsV2lkdGg9XCI2XCIgID5cclxuXHQ8L2VkLWhpZXJhcmNoaWNhbC1kcm9wZG93bj5cclxuXHJcblx0PGVkLWRyb3Bkb3duXHJcblx0XHRbKG5nTW9kZWwpXT1cInNjYWxlXCJcclxuXHRcdGxhYmVsPVwiU2NhbGVcIlxyXG5cdFx0W2RhdGFdPVwic2NhbGVzXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI2XCJcclxuXHRcdHdpZHRoPVwiMTZcIiAgPlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWlubGluZVwiPlxyXG5cdFx0PGVkLXRleHRib3ggXHJcblx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRcdGxhYmVsPVwiWS1NaW5cIlxyXG5cdFx0XHR3aWR0aD1cIjVcIlxyXG5cdFx0XHRbKG5nTW9kZWwpXT1cIm1pblwiXHJcblx0XHRcdHBsYWNlaG9sZGVyPVwiYXV0b1wiPlxyXG5cdFx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHRcdDxlZC10ZXh0Ym94IFxyXG5cdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0XHRsYWJlbD1cIlktTWF4XCJcclxuXHRcdFx0d2lkdGg9XCI1XCJcclxuXHRcdFx0WyhuZ01vZGVsKV09XCJtYXhcIlxyXG5cdFx0XHRwbGFjZWhvbGRlcj1cImF1dG9cIj5cclxuXHRcdDwvZWQtdGV4dGJveD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGVkLXRleHRib3ggXHJcblx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRsYWJlbFdpZHRoPVwiNlwiXHJcblx0XHRsYWJlbD1cIkRlY2ltYWxzXCJcclxuXHRcdHdpZHRoPVwiMTZcIlxyXG5cdFx0WyhuZ01vZGVsKV09XCJkZWNpbWFsc1wiXHJcblx0XHRwbGFjZWhvbGRlcj1cImF1dG9cIj5cclxuXHQ8L2VkLXRleHRib3g+XHJcblx0PCEtLSA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImRlY2ltYWxzXCIgLz4gLS0+XHJcblxyXG5cdDxlZC10ZXh0Ym94IFxyXG5cdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0bGFiZWw9XCJMYWJlbFwiXHJcblx0XHR3aWR0aD1cIjE2XCJcclxuXHRcdFsobmdNb2RlbCldPVwibGFiZWxcIj5cclxuXHQ8L2VkLXRleHRib3g+XHJcbjwvZGl2PiJdfQ==