import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { DropDownComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { DataPointNullValueOption, TooltipMode, TooltipSortOrder } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
export class DrawOptionsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.availableWidth = DropDownComponent.wrapArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.availableTooltipModes = DropDownComponent.wrapEnum(TooltipMode);
        this.availableTooltipSortOrders = DropDownComponent.wrapEnum(TooltipSortOrder);
        this.availableNullValueOptions = DropDownComponent.wrapEnum(DataPointNullValueOption);
    }
    get stack() {
        return this.display.stack;
    }
    set stack(v) {
        this.display.stack = v;
        this.options.scales.yAxes[0 /*?*/].stacked = v;
        this.refresh();
    }
}
DrawOptionsEditorComponent.ɵfac = function DrawOptionsEditorComponent_Factory(t) { return new (t || DrawOptionsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
DrawOptionsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawOptionsEditorComponent, selectors: [["editor-draw-options"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 19, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "5", "label", "Bars"], ["labelWidth", "5", "label", "Lines", 3, "ngModel", "ngModelChange", "checked"], ["labelWidth", "5", "label", "Points", 3, "ngModel", "ngModelChange", "checked"], ["label", "Fill", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "ngModelChange", "selectionChange"], ["label", "Line Width", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "disabled", "ngModelChange", "selectionChange"], ["label", "Staircase", "labelWidth", "8", "width", "5", 3, "ngModel", "ngModelChange", "checked"], ["label", "Point Radius", "labelWidth", "8", "width", "5", 3, "ngModel", "data", "disabled", "ngModelChange", "selectionChange"], ["label", "Mode", "labelWidth", "9", "width", "9", 3, "data", "ngModel", "ngModelChange"], ["label", "Sort Order", "labelWidth", "9", "width", "9", 3, "data", "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "Stack", 3, "ngModel", "ngModelChange"], ["label", "Null Value", 3, "ngModel", "data", "labelWidth", "ngModelChange"]], template: function DrawOptionsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2, "Draw Modes");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "ed-checkbox", 2);
        i0.ɵɵelementStart(4, "ed-checkbox", 3);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.display.showLines = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_4_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ed-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.display.showPoints = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_5_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 0);
        i0.ɵɵelementStart(7, "h5", 1);
        i0.ɵɵtext(8, "Mode Options");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ed-dropdown", 5);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_9_listener($event) { return ctx.display.fill = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_9_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "ed-dropdown", 6);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_10_listener($event) { return ctx.display.lineWidth = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_10_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ed-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.display.staircase = $event; })("checked", function DrawOptionsEditorComponent_Template_ed_checkbox_checked_11_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "ed-dropdown", 8);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_12_listener($event) { return ctx.display.pointRadius = $event; })("selectionChange", function DrawOptionsEditorComponent_Template_ed_dropdown_selectionChange_12_listener() { return ctx.update(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 0);
        i0.ɵɵelementStart(14, "h5", 1);
        i0.ɵɵtext(15, "Hover tooltip");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "ed-dropdown", 9);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_16_listener($event) { return ctx.display.tooltipMode = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "ed-dropdown", 10);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_17_listener($event) { return ctx.display.tooltipSortOrder = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 0);
        i0.ɵɵelementStart(19, "h5", 1);
        i0.ɵɵtext(20, "Stacking & Null value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "ed-checkbox", 11);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.stack = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "ed-dropdown", 12);
        i0.ɵɵlistener("ngModelChange", function DrawOptionsEditorComponent_Template_ed_dropdown_ngModelChange_22_listener($event) { return ctx.display.nullValue = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.display.showLines);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.showPoints);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.display.fill)("data", ctx.availableWidth);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.lineWidth)("data", ctx.availableWidth)("disabled", !ctx.display.showLines);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.staircase);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.pointRadius)("data", ctx.availableWidth)("disabled", !ctx.display.showPoints);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("data", ctx.availableTooltipModes)("ngModel", ctx.display.tooltipMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.availableTooltipSortOrders)("ngModel", ctx.display.tooltipSortOrder);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.stack);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.display.nullValue)("data", ctx.availableNullValueOptions)("labelWidth", 7);
    } }, directives: [i1.CheckBoxComponent, i2.NgControlStatus, i2.NgModel, i1.DropDownComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DrawOptionsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-draw-options',
                templateUrl: './options.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9kcmF3LW9wdGlvbnMvb3B0aW9ucy50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9kcmF3LW9wdGlvbnMvb3B0aW9ucy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQU0zRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsd0JBQXdCO0lBcUJ0RSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQXBCakIsbUJBQWMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUVuRiwwQkFBcUIsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUUsV0FBVyxDQUFFLENBQUM7UUFFbEUsK0JBQTBCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLGdCQUFnQixDQUFFLENBQUM7UUFFNUUsOEJBQXlCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFFLHdCQUF3QixDQUFFLENBQUM7SUFlbkYsQ0FBQztJQWJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFFLENBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtRQUVoRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7b0dBbkJVLDBCQUEwQix1QkFxQmhCLFdBQVc7K0RBckJyQiwwQkFBMEI7UUNWdkMsOEJBRUM7UUFBQSw2QkFBNEI7UUFBQSwwQkFBVTtRQUFBLGlCQUFLO1FBRTNDLGlDQUdjO1FBRWQsc0NBS2M7UUFKYixvS0FBK0IsbUdBR3BCLFlBQVEsSUFIWTtRQUloQyxpQkFBYztRQUVkLHNDQUtjO1FBSmIscUtBQWdDLG1HQUdyQixZQUFRLElBSGE7UUFJakMsaUJBQWM7UUFFZixpQkFBTTtRQUVOLDhCQUNDO1FBQUEsNkJBQTRCO1FBQUEsNEJBQVk7UUFBQSxpQkFBSztRQUU3QyxzQ0FPYztRQU5iLCtKQUEwQixtSEFLUCxZQUFRLElBTEQ7UUFNM0IsaUJBQWM7UUFFZCx1Q0FRYztRQVBiLHFLQUErQixvSEFNWixZQUFRLElBTkk7UUFPaEMsaUJBQWM7UUFFZCx1Q0FNYztRQUxiLHFLQUErQixvR0FJcEIsWUFBUSxJQUpZO1FBS2hDLGlCQUFjO1FBRWQsdUNBUWM7UUFQYix1S0FBaUMsb0hBS2QsWUFBUSxJQUxNO1FBT2xDLGlCQUFjO1FBRWYsaUJBQU07UUFFTiwrQkFDQztRQUFBLDhCQUE0QjtRQUFBLDhCQUFhO1FBQUEsaUJBQUs7UUFFOUMsdUNBTWM7UUFKYix1S0FBaUM7UUFJbEMsaUJBQWM7UUFFZCx3Q0FNYztRQUpiLDRLQUFzQztRQUl2QyxpQkFBYztRQUVmLGlCQUFNO1FBRU4sK0JBQ0M7UUFBQSw4QkFBNEI7UUFBQSxzQ0FBcUI7UUFBQSxpQkFBSztRQUV0RCx3Q0FJYztRQUhiLHlKQUFtQjtRQUdwQixpQkFBYztRQUVkLHdDQUtjO1FBSmIscUtBQStCO1FBSWhDLGlCQUFjO1FBQ2YsaUJBQU07O1FBN0ZKLGVBQStCO1FBQS9CLCtDQUErQjtRQU8vQixlQUFnQztRQUFoQyxnREFBZ0M7UUFZaEMsZUFBMEI7UUFBMUIsMENBQTBCLDRCQUFBO1FBUzFCLGVBQStCO1FBQS9CLCtDQUErQiw0QkFBQSxvQ0FBQTtRQVUvQixlQUErQjtRQUEvQiwrQ0FBK0I7UUFRL0IsZUFBaUM7UUFBakMsaURBQWlDLDRCQUFBLHFDQUFBO1FBZWpDLGVBQThCO1FBQTlCLGdEQUE4QixvQ0FBQTtRQVE5QixlQUFtQztRQUFuQyxxREFBbUMseUNBQUE7UUFhbkMsZUFBbUI7UUFBbkIsbUNBQW1CO1FBTW5CLGVBQStCO1FBQS9CLCtDQUErQix1Q0FBQSxpQkFBQTs7a0REeEZwQiwwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxnQkFBZ0I7YUFDOUI7O3NCQXNCYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAndWlsaWInO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5pbXBvcnQgeyBEYXRhUG9pbnROdWxsVmFsdWVPcHRpb24sIFRvb2x0aXBNb2RlLCBUb29sdGlwU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hhcnQubSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1kcmF3LW9wdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3B0aW9ucy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmF3T3B0aW9uc0VkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG4gXG4gIGF2YWlsYWJsZVdpZHRoID0gRHJvcERvd25Db21wb25lbnQud3JhcEFycmF5KCBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdICk7XG5cbiAgYXZhaWxhYmxlVG9vbHRpcE1vZGVzXHQ9IERyb3BEb3duQ29tcG9uZW50LndyYXBFbnVtKCBUb29sdGlwTW9kZSApO1xuXG4gIGF2YWlsYWJsZVRvb2x0aXBTb3J0T3JkZXJzID0gRHJvcERvd25Db21wb25lbnQud3JhcEVudW0oIFRvb2x0aXBTb3J0T3JkZXIgKTtcblxuICBhdmFpbGFibGVOdWxsVmFsdWVPcHRpb25zID0gRHJvcERvd25Db21wb25lbnQud3JhcEVudW0oIERhdGFQb2ludE51bGxWYWx1ZU9wdGlvbiApO1xuXG4gIGdldCBzdGFjaygpOiBib29sZWFue1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkuc3RhY2s7XG4gIH1cblxuICBzZXQgc3RhY2soIHY6IGJvb2xlYW4gKXtcbiAgICB0aGlzLmRpc3BsYXkuc3RhY2sgPSB2O1xuICAgIHRoaXMub3B0aW9ucy5zY2FsZXMueUF4ZXNbIDAgLyo/Ki8gXS5zdGFja2VkID0gdlxuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzZWN0aW9uIGdmLWZvcm0tZ3JvdXBcIj5cclxuXHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+RHJhdyBNb2RlczwvaDU+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdGxhYmVsV2lkdGg9XCI1XCJcclxuXHRcdGxhYmVsPVwiQmFyc1wiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdFsobmdNb2RlbCldPVwiZGlzcGxheS5zaG93TGluZXNcIlxyXG5cdFx0bGFiZWxXaWR0aD1cIjVcIlxyXG5cdFx0bGFiZWw9XCJMaW5lc1wiXHJcblx0XHQoY2hlY2tlZCk9XCJ1cGRhdGUoKVwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1jaGVja2JveCBcclxuXHRcdFsobmdNb2RlbCldPVwiZGlzcGxheS5zaG93UG9pbnRzXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI1XCJcclxuXHRcdGxhYmVsPVwiUG9pbnRzXCJcclxuXHRcdChjaGVja2VkKT1cInVwZGF0ZSgpXCI+XHJcblx0PC9lZC1jaGVja2JveD5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiPlxyXG5cdDxoNSBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPk1vZGUgT3B0aW9uczwvaDU+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFsobmdNb2RlbCldPVwiZGlzcGxheS5maWxsXCJcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZVdpZHRoXCJcclxuXHRcdGxhYmVsPVwiRmlsbFwiXHJcblx0XHRsYWJlbFdpZHRoPVwiOFwiXHJcblx0XHR3aWR0aD1cIjVcIlxyXG5cdFx0KHNlbGVjdGlvbkNoYW5nZSk9XCJ1cGRhdGUoKVwiPlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFsobmdNb2RlbCldPVwiZGlzcGxheS5saW5lV2lkdGhcIlxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlV2lkdGhcIlxyXG5cdFx0bGFiZWw9XCJMaW5lIFdpZHRoXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI4XCJcclxuXHRcdHdpZHRoPVwiNVwiXHJcblx0XHRbZGlzYWJsZWRdPVwiIWRpc3BsYXkuc2hvd0xpbmVzXCJcclxuXHRcdChzZWxlY3Rpb25DaGFuZ2UpPVwidXBkYXRlKClcIj5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRbKG5nTW9kZWwpXT1cImRpc3BsYXkuc3RhaXJjYXNlXCJcclxuXHRcdGxhYmVsPVwiU3RhaXJjYXNlXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI4XCJcclxuXHRcdHdpZHRoPVwiNVwiXHJcblx0XHQoY2hlY2tlZCk9XCJ1cGRhdGUoKVwiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFsobmdNb2RlbCldPVwiZGlzcGxheS5wb2ludFJhZGl1c1wiXHJcblx0XHRbZGF0YV09XCJhdmFpbGFibGVXaWR0aFwiXHJcblx0XHRsYWJlbD1cIlBvaW50IFJhZGl1c1wiXHJcblx0XHRsYWJlbFdpZHRoPVwiOFwiXHJcblx0XHR3aWR0aD1cIjVcIlxyXG5cdFx0KHNlbGVjdGlvbkNoYW5nZSk9XCJ1cGRhdGUoKVwiXHJcblx0XHRbZGlzYWJsZWRdPVwiIWRpc3BsYXkuc2hvd1BvaW50c1wiPlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJzZWN0aW9uIGdmLWZvcm0tZ3JvdXBcIj5cclxuXHQ8aDUgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5Ib3ZlciB0b29sdGlwPC9oNT5cclxuXHJcblx0PGVkLWRyb3Bkb3duIFxyXG5cdFx0W2RhdGFdPVwiYXZhaWxhYmxlVG9vbHRpcE1vZGVzXCJcclxuXHRcdFsobmdNb2RlbCldPVwiZGlzcGxheS50b29sdGlwTW9kZVwiXHJcblx0XHRsYWJlbD1cIk1vZGVcIlxyXG5cdFx0bGFiZWxXaWR0aD1cIjlcIlxyXG5cdFx0d2lkdGg9XCI5XCIgPlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG5cdDxlZC1kcm9wZG93biBcclxuXHRcdFtkYXRhXT1cImF2YWlsYWJsZVRvb2x0aXBTb3J0T3JkZXJzXCJcclxuXHRcdFsobmdNb2RlbCldPVwiZGlzcGxheS50b29sdGlwU29ydE9yZGVyXCIgXHJcblx0XHRsYWJlbD1cIlNvcnQgT3JkZXJcIlxyXG5cdFx0bGFiZWxXaWR0aD1cIjlcIlxyXG5cdFx0d2lkdGg9XCI5XCIgPlxyXG5cdDwvZWQtZHJvcGRvd24+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJzZWN0aW9uIGdmLWZvcm0tZ3JvdXBcIj5cclxuXHQ8aDUgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5TdGFja2luZyAmIE51bGwgdmFsdWU8L2g1PlxyXG5cclxuXHQ8ZWQtY2hlY2tib3ggXHJcblx0XHRbKG5nTW9kZWwpXT1cInN0YWNrXCJcclxuXHRcdGxhYmVsV2lkdGg9XCI3XCJcclxuXHRcdGxhYmVsPVwiU3RhY2tcIiA+XHJcblx0PC9lZC1jaGVja2JveD5cclxuXHJcblx0PGVkLWRyb3Bkb3duIFxyXG5cdFx0WyhuZ01vZGVsKV09XCJkaXNwbGF5Lm51bGxWYWx1ZVwiXHJcblx0XHRbZGF0YV09XCJhdmFpbGFibGVOdWxsVmFsdWVPcHRpb25zXCIgXHJcblx0XHRsYWJlbD1cIk51bGwgVmFsdWVcIlxyXG5cdFx0W2xhYmVsV2lkdGhdPVwiN1wiID5cclxuXHQ8L2VkLWRyb3Bkb3duPlxyXG48L2Rpdj4iXX0=