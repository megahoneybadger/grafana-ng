import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { ContextMenuComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { OverrideItem, OverrideType } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
function SeriesOverrideEditorComponent_div_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r3.value);
} }
function SeriesOverrideEditorComponent_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "color-circle", 22);
} if (rf & 2) {
    const i_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", i_r3.value)("canBeActive", false);
} }
function SeriesOverrideEditorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "span", 17);
    i0.ɵɵlistener("click", function SeriesOverrideEditorComponent_div_2_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r10); const i_r3 = ctx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onRemoveItem(i_r3); });
    i0.ɵɵelement(3, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, SeriesOverrideEditorComponent_div_2_span_5_Template, 2, 1, "span", 19);
    i0.ɵɵtemplate(6, SeriesOverrideEditorComponent_div_2_ng_template_6_Template, 1, 2, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const _r5 = i0.ɵɵreference(7);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getItemHeader(i_r3), ": ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r3.type != 12)("ngIfElse", _r5);
} }
export class SeriesOverrideEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        this.removed = new EventEmitter();
        this.cmItems = [];
        this.items = new Array();
        this.showColorPicker = false;
    }
    ngOnInit() {
        this.cmItems = [
            this.createBoolItem("Lines", OverrideType.Lines),
            this.createNumberItem("Line fill", OverrideType.LineFill),
            this.createNumberItem("Line width", OverrideType.LineWidth),
            this.createBoolItem("Staircase", OverrideType.Staircase),
            this.createBoolItem("Dashes", OverrideType.Dashes),
            this.createNumberItem("Dash length", OverrideType.DashLength),
            this.createNumberItem("Dash space", OverrideType.DashSpace),
            this.createBoolItem("Points", OverrideType.Points),
            this.createNumberItem("Point radius", OverrideType.PointRadius, 0, 5),
            this.createBoolItem("Stack", OverrideType.Stack),
            this.createColorItem("Color", OverrideType.Color),
            this.createNumberItem("Y-axis", OverrideType.YAxis, 1, 2),
            this.createNumberItem("Z-index", OverrideType.ZIndex, -3, 3),
            this.createBoolItem("Legend", OverrideType.Legend),
            this.createBoolItem("Hide in tooltip", OverrideType.HideInTooltip),
        ];
        ContextMenuComponent.wrapItems(this.cmItems, x => this.onOptionSelected(x.item));
        this.rebuildItems();
    }
    rebuildItems() {
        const items = new Array();
        for (var prop in this.override) {
            if (prop != 'alias') {
                var type = this.getOverrideType(prop);
                items.push(new OverrideItem(type, this.override[prop]));
            }
        }
        this.items = items;
        this.refresh();
    }
    createBoolItem(header, type) {
        return {
            label: header, items: [
                { label: 'true', value: true, type: type },
                { label: 'false', value: false, type: type },
            ]
        };
    }
    createNumberItem(header, type, from = 0, to = 10) {
        const item = { label: header, items: [] };
        for (var i = from; i <= to; ++i) {
            item.items.push({ label: i, value: i, type: type });
        }
        return item;
    }
    createColorItem(header, type) {
        return {
            label: header,
            type: type,
            items: [
                { label: "change", type: type }
            ]
        };
    }
    onOptionSelected(item) {
        if (item.type == undefined) {
            return;
        }
        if (OverrideType.Color == item.type) {
            this.showColorPicker = true;
            event.stopPropagation();
        }
        else {
            this.override[this.getPropertyName(item)] = item.value;
            this.rebuildItems();
        }
    }
    onRemoveItem(item) {
        delete this.override[this.getPropertyName(item)];
        this.rebuildItems();
    }
    getItemHeader(item) {
        return OverrideType[item.type]
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .toLowerCase();
    }
    getPropertyName(item) {
        return OverrideType[item.type].replace(/^\w/, c => c.toLowerCase());
    }
    getOverrideType(prop) {
        return OverrideType[prop.replace(/^\w/, c => c.toUpperCase())];
    }
    onColorSelected(color) {
        var item = this.createColorItem("Color", OverrideType.Color);
        this.override[this.getPropertyName(item)] = color;
        this.rebuildItems();
    }
}
SeriesOverrideEditorComponent.ɵfac = function SeriesOverrideEditorComponent_Factory(t) { return new (t || SeriesOverrideEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
SeriesOverrideEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SeriesOverrideEditorComponent, selectors: [["editor-series-override"]], inputs: { override: "override", index: "index" }, outputs: { removed: "removed" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 5, consts: [[1, "ed-form-inline"], ["label", "alias or regex", "width", "15", 3, "ngModel", "ngModelChange"], ["class", "gf-form", 4, "ngFor", "ngForOf"], [1, "gf-form", 3, "click"], ["menuTarget", ""], [1, "gf-form-label", "pointer"], [1, "fa", "fa-plus"], [1, "gf-form", "gf-form--grow"], [1, "gf-form-label", "gf-form-label--grow"], [1, "gf-form"], [1, "gf-form-label", "pointer", 3, "click"], [1, "fa", "fa-trash"], [3, "visible", "anchor", "visibleChange"], [3, "selected"], [3, "items"], ["cm", ""], [1, "gf-form-label"], [3, "click"], [1, "fa", "fa-times", "mr-2", "pointer"], ["class", "ml-1", 4, "ngIf", "ngIfElse"], ["color", ""], [1, "ml-1"], [1, "ml-1", 3, "value", "canBeActive"]], template: function SeriesOverrideEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ed-textbox", 1);
        i0.ɵɵlistener("ngModelChange", function SeriesOverrideEditorComponent_Template_ed_textbox_ngModelChange_1_listener($event) { return ctx.override.alias = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, SeriesOverrideEditorComponent_div_2_Template, 8, 3, "div", 2);
        i0.ɵɵelementStart(3, "div", 3, 4);
        i0.ɵɵlistener("click", function SeriesOverrideEditorComponent_Template_div_click_3_listener($event) { i0.ɵɵrestoreView(_r11); const _r2 = i0.ɵɵreference(15); return _r2.show($event); });
        i0.ɵɵelementStart(5, "label", 5);
        i0.ɵɵelement(6, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 7);
        i0.ɵɵelement(8, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 9);
        i0.ɵɵelementStart(10, "label", 10);
        i0.ɵɵlistener("click", function SeriesOverrideEditorComponent_Template_label_click_10_listener() { return ctx.removed.emit(ctx.override); });
        i0.ɵɵelement(11, "i", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "ed-popup", 12);
        i0.ɵɵlistener("visibleChange", function SeriesOverrideEditorComponent_Template_ed_popup_visibleChange_12_listener($event) { return ctx.showColorPicker = $event; });
        i0.ɵɵelementStart(13, "ed-palette-editor", 13);
        i0.ɵɵlistener("selected", function SeriesOverrideEditorComponent_Template_ed_palette_editor_selected_13_listener($event) { return ctx.onColorSelected($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "ed-context-menu", 14, 15);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.override.alias);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("visible", ctx.showColorPicker)("anchor", _r1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("items", ctx.cmItems);
    } }, directives: [i1.TextBoxComponent, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i1.PopupComponent, i1.PaletteEditorComponent, i1.ContextMenuComponent, i3.NgIf, i1.ColorCircleComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SeriesOverrideEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-series-override',
                templateUrl: './override.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { override: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2Rpc3BsYXkvc2VyaWVzLW92ZXJyaWRlcy9vdmVycmlkZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9zZXJpZXMtb3ZlcnJpZGVzL292ZXJyaWRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBa0IsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztJQ1czRSxnQ0FBb0Q7SUFBQSxZQUFXO0lBQUEsaUJBQU87OztJQUFsQixlQUFXO0lBQVgsZ0NBQVc7OztJQUU5RCxtQ0FBZ0Y7OztJQUFsRSxrQ0FBaUIsc0JBQUE7Ozs7SUFWbEMsOEJBRUM7SUFBQSwrQkFDQztJQUFBLGdDQUNDO0lBREssa09BQTJCO0lBQ2hDLHdCQUF5QztJQUMxQyxpQkFBTztJQUVQLFlBQ0E7SUFBQSx1RkFBb0Q7SUFDcEQsc0lBQ0M7SUFFRixpQkFBTTtJQUVQLGlCQUFNOzs7OztJQVBKLGVBQ0E7SUFEQSw0REFDQTtJQUFtQixlQUErQjtJQUEvQixzQ0FBK0IsaUJBQUE7O0FETHJELE1BQU0sT0FBTyw2QkFBOEIsU0FBUSx3QkFBd0I7SUFXekUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFQUCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFFdkQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFVBQUssR0FBRyxJQUFJLEtBQUssRUFBZ0IsQ0FBQztRQUNuQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUl2QixDQUFDO0lBRUYsUUFBUTtRQUVQLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUM3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFFakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLGFBQWEsQ0FBQztTQUNsRSxDQUFBO1FBRUQsb0JBQW9CLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFFLENBQUE7UUFFcEYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxZQUFZO1FBQ1osTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQWdCLENBQUM7UUFFeEMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtnQkFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDdkQ7U0FDRDtRQUVDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUYsY0FBYyxDQUFDLE1BQWMsRUFBRSxJQUFrQjtRQUNoRCxPQUFPO1lBQ04sS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBQ3JCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Z0JBQzFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7YUFDNUM7U0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQWMsRUFBRSxJQUFrQixFQUFFLE9BQWUsQ0FBQyxFQUFFLEtBQWEsRUFBRTtRQUNyRixNQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTFDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7U0FDbkQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBYyxFQUFFLElBQWtCO1FBQ2pELE9BQU87WUFDSCxLQUFLLEVBQUUsTUFBTTtZQUNiLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFO2dCQUNULEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2FBQy9CO1NBQ0QsQ0FBQztJQUNILENBQUM7SUFHRCxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDM0IsT0FBTztTQUNQO1FBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7WUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwQjtJQUNGLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBa0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFrQjtRQUMvQixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUM7YUFDdEMsV0FBVyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFJO1FBQ25CLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFJO1FBQ25CLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7MEdBNUhXLDZCQUE2Qix1QkFXbkIsV0FBVztrRUFYckIsNkJBQTZCOztRQ1YxQyw4QkFDQztRQUFBLHFDQUlhO1FBSFosbUtBQTRCO1FBRzdCLGlCQUFhO1FBRWIsOEVBRUM7UUFjRCxpQ0FDQztRQURpQyxxS0FBUyxnQkFBaUIsSUFBQztRQUM1RCxnQ0FDQztRQUFBLHVCQUEwQjtRQUMzQixpQkFBUTtRQUNULGlCQUFNO1FBRU4sOEJBQ0M7UUFBQSx5QkFBcUQ7UUFDdEQsaUJBQU07UUFHTiw4QkFDQztRQUFBLGtDQUNDO1FBRG9DLDBHQUFTLDhCQUF3QixJQUFDO1FBQ3RFLHlCQUEyQjtRQUM1QixpQkFBUTtRQUNULGlCQUFNO1FBR1AsaUJBQU07UUFFTixxQ0FDRTtRQURRLG1LQUE2QjtRQUNyQyw4Q0FBOEU7UUFBM0Qsa0lBQVksMkJBQXlCLElBQUM7UUFBQyxpQkFBb0I7UUFDaEYsaUJBQVc7UUFFWCwyQ0FBeUQ7OztRQTdDdkQsZUFBNEI7UUFBNUIsNENBQTRCO1FBS3hCLGVBQXVCO1FBQXZCLG1DQUF1QjtRQW9DbkIsZ0JBQTZCO1FBQTdCLDZDQUE2QixlQUFBO1FBSXRCLGVBQWlCO1FBQWpCLG1DQUFpQjs7a0REckNyQiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxpQkFBaUI7YUFDL0I7O3NCQVljLE1BQU07dUJBQUUsV0FBVzt3QkFUdkIsUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCB7IE92ZXJyaWRlSXRlbSwgU2VyaWVzT3ZlcnJpZGUsIE92ZXJyaWRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3Itc2VyaWVzLW92ZXJyaWRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJyaWRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNlcmllc092ZXJyaWRlRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBvdmVycmlkZTogU2VyaWVzT3ZlcnJpZGU7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFNlcmllc092ZXJyaWRlPigpO1xuXG4gIGNtSXRlbXMgPSBbXTtcbiAgaXRlbXMgPSBuZXcgQXJyYXk8T3ZlcnJpZGVJdGVtPigpO1xuXHRzaG93Q29sb3JQaWNrZXIgPSBmYWxzZTtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG4gIFxuXHRuZ09uSW5pdCgpIHtcblx0XHRcblx0XHR0aGlzLmNtSXRlbXMgPSBbXG5cdFx0XHR0aGlzLmNyZWF0ZUJvb2xJdGVtKFwiTGluZXNcIiwgT3ZlcnJpZGVUeXBlLkxpbmVzKSxcblx0XHRcdHRoaXMuY3JlYXRlTnVtYmVySXRlbShcIkxpbmUgZmlsbFwiLCBPdmVycmlkZVR5cGUuTGluZUZpbGwpLFxuXHRcdFx0dGhpcy5jcmVhdGVOdW1iZXJJdGVtKFwiTGluZSB3aWR0aFwiLCBPdmVycmlkZVR5cGUuTGluZVdpZHRoKSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJTdGFpcmNhc2VcIiwgT3ZlcnJpZGVUeXBlLlN0YWlyY2FzZSksXG5cdFx0XHR0aGlzLmNyZWF0ZUJvb2xJdGVtKFwiRGFzaGVzXCIsIE92ZXJyaWRlVHlwZS5EYXNoZXMpLFxuXHRcdFx0dGhpcy5jcmVhdGVOdW1iZXJJdGVtKFwiRGFzaCBsZW5ndGhcIiwgT3ZlcnJpZGVUeXBlLkRhc2hMZW5ndGgpLFxuXHRcdFx0dGhpcy5jcmVhdGVOdW1iZXJJdGVtKFwiRGFzaCBzcGFjZVwiLCBPdmVycmlkZVR5cGUuRGFzaFNwYWNlKSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJQb2ludHNcIiwgT3ZlcnJpZGVUeXBlLlBvaW50cyksXG5cdFx0XHR0aGlzLmNyZWF0ZU51bWJlckl0ZW0oXCJQb2ludCByYWRpdXNcIiwgT3ZlcnJpZGVUeXBlLlBvaW50UmFkaXVzLCAwLCA1KSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJTdGFja1wiLCBPdmVycmlkZVR5cGUuU3RhY2spLFxuXHRcdFx0dGhpcy5jcmVhdGVDb2xvckl0ZW0oXCJDb2xvclwiLCBPdmVycmlkZVR5cGUuQ29sb3IpLFxuXG5cdFx0XHR0aGlzLmNyZWF0ZU51bWJlckl0ZW0oXCJZLWF4aXNcIiwgT3ZlcnJpZGVUeXBlLllBeGlzLCAxLCAyKSxcblx0XHRcdHRoaXMuY3JlYXRlTnVtYmVySXRlbShcIlotaW5kZXhcIiwgT3ZlcnJpZGVUeXBlLlpJbmRleCwgLTMsIDMpLFxuXHRcdFx0dGhpcy5jcmVhdGVCb29sSXRlbShcIkxlZ2VuZFwiLCBPdmVycmlkZVR5cGUuTGVnZW5kKSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJIaWRlIGluIHRvb2x0aXBcIiwgT3ZlcnJpZGVUeXBlLkhpZGVJblRvb2x0aXApLFxuXHRcdF1cblxuXHRcdENvbnRleHRNZW51Q29tcG9uZW50LndyYXBJdGVtcyggdGhpcy5jbUl0ZW1zLCB4ID0+IHRoaXMub25PcHRpb25TZWxlY3RlZCggeC5pdGVtICkgKVxuXG5cdFx0dGhpcy5yZWJ1aWxkSXRlbXMoKTtcbiAgfVxuICBcbiAgcmVidWlsZEl0ZW1zKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5PE92ZXJyaWRlSXRlbT4oKTtcblxuXHRcdGZvciAodmFyIHByb3AgaW4gdGhpcy5vdmVycmlkZSkge1xuXHRcdFx0aWYgKHByb3AgIT0gJ2FsaWFzJykge1xuXHRcdFx0XHR2YXIgdHlwZSA9IHRoaXMuZ2V0T3ZlcnJpZGVUeXBlKHByb3ApO1xuXG5cdFx0XHRcdGl0ZW1zLnB1c2gobmV3IE92ZXJyaWRlSXRlbSh0eXBlLCB0aGlzLm92ZXJyaWRlW3Byb3BdKSlcblx0XHRcdH1cblx0XHR9XG5cbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuXHRjcmVhdGVCb29sSXRlbShoZWFkZXI6IHN0cmluZywgdHlwZTogT3ZlcnJpZGVUeXBlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsOiBoZWFkZXIsIGl0ZW1zOiBbXG5cdFx0XHRcdHsgbGFiZWw6ICd0cnVlJywgdmFsdWU6IHRydWUsIHR5cGU6IHR5cGUgfSxcblx0XHRcdFx0eyBsYWJlbDogJ2ZhbHNlJywgdmFsdWU6IGZhbHNlLCB0eXBlOiB0eXBlIH0sXG5cdFx0XHRdXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlTnVtYmVySXRlbShoZWFkZXI6IHN0cmluZywgdHlwZTogT3ZlcnJpZGVUeXBlLCBmcm9tOiBudW1iZXIgPSAwLCB0bzogbnVtYmVyID0gMTApIHtcblx0XHRjb25zdCBpdGVtID0geyBsYWJlbDogaGVhZGVyLCBpdGVtczogW10gfTtcblxuXHRcdGZvciAodmFyIGkgPSBmcm9tOyBpIDw9IHRvOyArK2kpIHtcblx0XHRcdGl0ZW0uaXRlbXMucHVzaCh7IGxhYmVsOiBpLCB2YWx1ZTogaSwgdHlwZTogdHlwZSB9KVxuXHRcdH1cblxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0Y3JlYXRlQ29sb3JJdGVtKGhlYWRlcjogc3RyaW5nLCB0eXBlOiBPdmVycmlkZVR5cGUpICB7XG5cdFx0cmV0dXJuIHtcbiAgICAgIGxhYmVsOiBoZWFkZXIsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgaXRlbXM6IFtcblx0XHRcdFx0eyBsYWJlbDogXCJjaGFuZ2VcIiwgdHlwZTogdHlwZSB9XG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cblx0b25PcHRpb25TZWxlY3RlZChpdGVtKSB7XG5cdFx0aWYgKGl0ZW0udHlwZSA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoT3ZlcnJpZGVUeXBlLkNvbG9yID09IGl0ZW0udHlwZSkge1xuXHRcdFx0dGhpcy5zaG93Q29sb3JQaWNrZXIgPSB0cnVlXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vdmVycmlkZVt0aGlzLmdldFByb3BlcnR5TmFtZShpdGVtKV0gPSBpdGVtLnZhbHVlO1xuXHRcdFx0dGhpcy5yZWJ1aWxkSXRlbXMoKTtcblx0XHR9XG5cdH1cblxuXHRvblJlbW92ZUl0ZW0oaXRlbTogT3ZlcnJpZGVJdGVtKSB7XG5cdFx0ZGVsZXRlIHRoaXMub3ZlcnJpZGVbdGhpcy5nZXRQcm9wZXJ0eU5hbWUoaXRlbSldO1xuXHRcdHRoaXMucmVidWlsZEl0ZW1zKCk7XG5cdH1cblxuXHRnZXRJdGVtSGVhZGVyKGl0ZW06IE92ZXJyaWRlSXRlbSkge1xuXHRcdHJldHVybiBPdmVycmlkZVR5cGVbaXRlbS50eXBlXVxuXHRcdFx0LnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMSAkMicpXG5cdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0fVxuXG5cdGdldFByb3BlcnR5TmFtZShpdGVtKSB7XG5cdFx0cmV0dXJuIE92ZXJyaWRlVHlwZVtpdGVtLnR5cGVdLnJlcGxhY2UoL15cXHcvLCBjID0+IGMudG9Mb3dlckNhc2UoKSlcblx0fVxuXG5cdGdldE92ZXJyaWRlVHlwZShwcm9wKSB7XG5cdFx0cmV0dXJuIE92ZXJyaWRlVHlwZVtwcm9wLnJlcGxhY2UoL15cXHcvLCBjID0+IGMudG9VcHBlckNhc2UoKSldO1xuXHR9XG5cblx0b25Db2xvclNlbGVjdGVkKGNvbG9yKSB7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZUNvbG9ySXRlbShcIkNvbG9yXCIsIE92ZXJyaWRlVHlwZS5Db2xvcik7XG5cblx0XHR0aGlzLm92ZXJyaWRlW3RoaXMuZ2V0UHJvcGVydHlOYW1lKGl0ZW0pXSA9IGNvbG9yO1xuXHRcdHRoaXMucmVidWlsZEl0ZW1zKCk7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImVkLWZvcm0taW5saW5lXCI+XHJcblx0PGVkLXRleHRib3hcclxuXHRcdFsobmdNb2RlbCldPVwib3ZlcnJpZGUuYWxpYXNcIlxyXG5cdFx0bGFiZWw9XCJhbGlhcyBvciByZWdleFwiXHJcblx0XHR3aWR0aD1cIjE1XCI+XHJcblx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHQ8ZGl2ICpuZ0Zvcj1cImxldCBpIG9mIGl0ZW1zXCIgY2xhc3M9XCJnZi1mb3JtXCIgID5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHQ8c3BhbiAoY2xpY2spPVwib25SZW1vdmVJdGVtKCBpIClcIj5cclxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXRpbWVzIG1yLTIgcG9pbnRlclwiID48L2k+XHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHJcblx0XHRcdHt7Z2V0SXRlbUhlYWRlciggaSApfX06XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwibWwtMVwiICpuZ0lmPVwiaS50eXBlICE9IDEyO2Vsc2UgY29sb3JcIiA+e3tpLnZhbHVlfX08L3NwYW4+XHJcblx0XHRcdDxuZy10ZW1wbGF0ZSAjY29sb3I+XHJcblx0XHRcdFx0PGNvbG9yLWNpcmNsZSBbdmFsdWVdPVwiaS52YWx1ZVwiIGNsYXNzPVwibWwtMVwiIFtjYW5CZUFjdGl2ZV09ZmFsc2U+PC9jb2xvci1jaXJjbGU+XHJcblx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdFxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiICNtZW51VGFyZ2V0ICAoY2xpY2spPVwiY20uc2hvdyggJGV2ZW50IClcIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcG9pbnRlclwiPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS1ncm93XCI+PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3ZlZC5lbWl0KCBvdmVycmlkZSApXCI+XHJcblx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGVkLXBvcHVwIFsodmlzaWJsZSldPVwic2hvd0NvbG9yUGlja2VyXCIgW2FuY2hvcl09XCJtZW51VGFyZ2V0XCI+XHJcbiAgPGVkLXBhbGV0dGUtZWRpdG9yIChzZWxlY3RlZCk9J29uQ29sb3JTZWxlY3RlZCggJGV2ZW50ICknPjwvZWQtcGFsZXR0ZS1lZGl0b3I+XHJcbjwvZWQtcG9wdXA+XHJcblxyXG48ZWQtY29udGV4dC1tZW51IFtpdGVtc109XCJjbUl0ZW1zXCIgI2NtPjwvZWQtY29udGV4dC1tZW51PlxyXG5cclxuIl19