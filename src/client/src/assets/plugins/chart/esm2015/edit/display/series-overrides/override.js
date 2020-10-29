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
        this.update();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2Rpc3BsYXkvc2VyaWVzLW92ZXJyaWRlcy9vdmVycmlkZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9zZXJpZXMtb3ZlcnJpZGVzL292ZXJyaWRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBa0IsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztJQ1czRSxnQ0FBb0Q7SUFBQSxZQUFXO0lBQUEsaUJBQU87OztJQUFsQixlQUFXO0lBQVgsZ0NBQVc7OztJQUU5RCxtQ0FBZ0Y7OztJQUFsRSxrQ0FBaUIsc0JBQUE7Ozs7SUFWbEMsOEJBRUM7SUFBQSwrQkFDQztJQUFBLGdDQUNDO0lBREssa09BQTJCO0lBQ2hDLHdCQUF5QztJQUMxQyxpQkFBTztJQUVQLFlBQ0E7SUFBQSx1RkFBb0Q7SUFDcEQsc0lBQ0M7SUFFRixpQkFBTTtJQUVQLGlCQUFNOzs7OztJQVBKLGVBQ0E7SUFEQSw0REFDQTtJQUFtQixlQUErQjtJQUEvQixzQ0FBK0IsaUJBQUE7O0FETHJELE1BQU0sT0FBTyw2QkFBOEIsU0FBUSx3QkFBd0I7SUFXekUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxD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LGlCQUFhO1FBRWIsOEVBRUM7UUFjRCxpQ0FDQztRQURpQyxxS0FBUyxnQkFBaUIsSUFBQztRQUM1RCxnQ0FDQztRQUFBLHVCQUEwQjtRQUMzQixpQkFBUTtRQUNULGlCQUFNO1FBRU4sOEJBQ0M7UUFBQSx5QkFBcUQ7UUFDdEQsaUJBQU07UUFHTiw4QkFDQztRQUFBLGtDQUNDO1FBRG9DLDBHQUFTLDhCQUF3QixJQUFDO1FBQ3RFLHlCQUEyQjtRQUM1QixpQkFBUTtRQUNULGlCQUFNO1FBR1AsaUJBQU07UUFFTixxQ0FDRTtRQURRLG1LQUE2QjtRQUNyQyw4Q0FBOEU7UUFBM0Qsa0lBQVksMkJBQXlCLElBQUM7UUFBQyxpQkFBb0I7UUFDaEYsaUJBQVc7UUFFWCwyQ0FBeUQ7OztRQTdDdkQsZUFBNEI7UUFBNUIsNENBQTRCO1FBS3hCLGVBQXVCO1FBQXZCLG1DQUF1QjtRQW9DbkIsZ0JBQTZCO1FBQTdCLDZDQUE2QixlQUFBO1FBSXRCLGVBQWlCO1FBQWpCLG1DQUFpQjs7a0REckNyQiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxpQkFBaUI7YUFDL0I7O3NCQVljLE1BQU07dUJBQUUsV0FBVzt3QkFUdkIsUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCB7IE92ZXJyaWRlSXRlbSwgU2VyaWVzT3ZlcnJpZGUsIE92ZXJyaWRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3Itc2VyaWVzLW92ZXJyaWRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJyaWRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNlcmllc092ZXJyaWRlRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBvdmVycmlkZTogU2VyaWVzT3ZlcnJpZGU7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFNlcmllc092ZXJyaWRlPigpO1xuXG4gIGNtSXRlbXMgPSBbXTtcbiAgaXRlbXMgPSBuZXcgQXJyYXk8T3ZlcnJpZGVJdGVtPigpO1xuXHRzaG93Q29sb3JQaWNrZXIgPSBmYWxzZTtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuICB9XG4gIFxuXHRuZ09uSW5pdCgpIHtcblx0XHRcblx0XHR0aGlzLmNtSXRlbXMgPSBbXG5cdFx0XHR0aGlzLmNyZWF0ZUJvb2xJdGVtKFwiTGluZXNcIiwgT3ZlcnJpZGVUeXBlLkxpbmVzKSxcblx0XHRcdHRoaXMuY3JlYXRlTnVtYmVySXRlbShcIkxpbmUgZmlsbFwiLCBPdmVycmlkZVR5cGUuTGluZUZpbGwpLFxuXHRcdFx0dGhpcy5jcmVhdGVOdW1iZXJJdGVtKFwiTGluZSB3aWR0aFwiLCBPdmVycmlkZVR5cGUuTGluZVdpZHRoKSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJTdGFpcmNhc2VcIiwgT3ZlcnJpZGVUeXBlLlN0YWlyY2FzZSksXG5cdFx0XHR0aGlzLmNyZWF0ZUJvb2xJdGVtKFwiRGFzaGVzXCIsIE92ZXJyaWRlVHlwZS5EYXNoZXMpLFxuXHRcdFx0dGhpcy5jcmVhdGVOdW1iZXJJdGVtKFwiRGFzaCBsZW5ndGhcIiwgT3ZlcnJpZGVUeXBlLkRhc2hMZW5ndGgpLFxuXHRcdFx0dGhpcy5jcmVhdGVOdW1iZXJJdGVtKFwiRGFzaCBzcGFjZVwiLCBPdmVycmlkZVR5cGUuRGFzaFNwYWNlKSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJQb2ludHNcIiwgT3ZlcnJpZGVUeXBlLlBvaW50cyksXG5cdFx0XHR0aGlzLmNyZWF0ZU51bWJlckl0ZW0oXCJQb2ludCByYWRpdXNcIiwgT3ZlcnJpZGVUeXBlLlBvaW50UmFkaXVzLCAwLCA1KSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJTdGFja1wiLCBPdmVycmlkZVR5cGUuU3RhY2spLFxuXHRcdFx0dGhpcy5jcmVhdGVDb2xvckl0ZW0oXCJDb2xvclwiLCBPdmVycmlkZVR5cGUuQ29sb3IpLFxuXG5cdFx0XHR0aGlzLmNyZWF0ZU51bWJlckl0ZW0oXCJZLWF4aXNcIiwgT3ZlcnJpZGVUeXBlLllBeGlzLCAxLCAyKSxcblx0XHRcdHRoaXMuY3JlYXRlTnVtYmVySXRlbShcIlotaW5kZXhcIiwgT3ZlcnJpZGVUeXBlLlpJbmRleCwgLTMsIDMpLFxuXHRcdFx0dGhpcy5jcmVhdGVCb29sSXRlbShcIkxlZ2VuZFwiLCBPdmVycmlkZVR5cGUuTGVnZW5kKSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJIaWRlIGluIHRvb2x0aXBcIiwgT3ZlcnJpZGVUeXBlLkhpZGVJblRvb2x0aXApLFxuXHRcdF1cblxuXHRcdENvbnRleHRNZW51Q29tcG9uZW50LndyYXBJdGVtcyggdGhpcy5jbUl0ZW1zLCB4ID0+IHRoaXMub25PcHRpb25TZWxlY3RlZCggeC5pdGVtICkgKVxuXG5cdFx0dGhpcy5yZWJ1aWxkSXRlbXMoKTtcbiAgfVxuICBcbiAgcmVidWlsZEl0ZW1zKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5PE92ZXJyaWRlSXRlbT4oKTtcblxuXHRcdGZvciAodmFyIHByb3AgaW4gdGhpcy5vdmVycmlkZSkge1xuXHRcdFx0aWYgKHByb3AgIT0gJ2FsaWFzJykge1xuXHRcdFx0XHR2YXIgdHlwZSA9IHRoaXMuZ2V0T3ZlcnJpZGVUeXBlKHByb3ApO1xuXG5cdFx0XHRcdGl0ZW1zLnB1c2gobmV3IE92ZXJyaWRlSXRlbSh0eXBlLCB0aGlzLm92ZXJyaWRlW3Byb3BdKSlcblx0XHRcdH1cblx0XHR9XG5cbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG5cdGNyZWF0ZUJvb2xJdGVtKGhlYWRlcjogc3RyaW5nLCB0eXBlOiBPdmVycmlkZVR5cGUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWw6IGhlYWRlciwgaXRlbXM6IFtcblx0XHRcdFx0eyBsYWJlbDogJ3RydWUnLCB2YWx1ZTogdHJ1ZSwgdHlwZTogdHlwZSB9LFxuXHRcdFx0XHR7IGxhYmVsOiAnZmFsc2UnLCB2YWx1ZTogZmFsc2UsIHR5cGU6IHR5cGUgfSxcblx0XHRcdF1cblx0XHR9XG5cdH1cblxuXHRjcmVhdGVOdW1iZXJJdGVtKGhlYWRlcjogc3RyaW5nLCB0eXBlOiBPdmVycmlkZVR5cGUsIGZyb206IG51bWJlciA9IDAsIHRvOiBudW1iZXIgPSAxMCkge1xuXHRcdGNvbnN0IGl0ZW0gPSB7IGxhYmVsOiBoZWFkZXIsIGl0ZW1zOiBbXSB9O1xuXG5cdFx0Zm9yICh2YXIgaSA9IGZyb207IGkgPD0gdG87ICsraSkge1xuXHRcdFx0aXRlbS5pdGVtcy5wdXNoKHsgbGFiZWw6IGksIHZhbHVlOiBpLCB0eXBlOiB0eXBlIH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cblxuXHRjcmVhdGVDb2xvckl0ZW0oaGVhZGVyOiBzdHJpbmcsIHR5cGU6IE92ZXJyaWRlVHlwZSkgIHtcblx0XHRyZXR1cm4ge1xuICAgICAgbGFiZWw6IGhlYWRlcixcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBpdGVtczogW1xuXHRcdFx0XHR7IGxhYmVsOiBcImNoYW5nZVwiLCB0eXBlOiB0eXBlIH1cblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblxuXHRvbk9wdGlvblNlbGVjdGVkKGl0ZW0pIHtcblx0XHRpZiAoaXRlbS50eXBlID09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChPdmVycmlkZVR5cGUuQ29sb3IgPT0gaXRlbS50eXBlKSB7XG5cdFx0XHR0aGlzLnNob3dDb2xvclBpY2tlciA9IHRydWVcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm92ZXJyaWRlW3RoaXMuZ2V0UHJvcGVydHlOYW1lKGl0ZW0pXSA9IGl0ZW0udmFsdWU7XG5cdFx0XHR0aGlzLnJlYnVpbGRJdGVtcygpO1xuXHRcdH1cblx0fVxuXG5cdG9uUmVtb3ZlSXRlbShpdGVtOiBPdmVycmlkZUl0ZW0pIHtcblx0XHRkZWxldGUgdGhpcy5vdmVycmlkZVt0aGlzLmdldFByb3BlcnR5TmFtZShpdGVtKV07XG5cdFx0dGhpcy5yZWJ1aWxkSXRlbXMoKTtcblx0fVxuXG5cdGdldEl0ZW1IZWFkZXIoaXRlbTogT3ZlcnJpZGVJdGVtKSB7XG5cdFx0cmV0dXJuIE92ZXJyaWRlVHlwZVtpdGVtLnR5cGVdXG5cdFx0XHQucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxICQyJylcblx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Z2V0UHJvcGVydHlOYW1lKGl0ZW0pIHtcblx0XHRyZXR1cm4gT3ZlcnJpZGVUeXBlW2l0ZW0udHlwZV0ucmVwbGFjZSgvXlxcdy8sIGMgPT4gYy50b0xvd2VyQ2FzZSgpKVxuXHR9XG5cblx0Z2V0T3ZlcnJpZGVUeXBlKHByb3ApIHtcblx0XHRyZXR1cm4gT3ZlcnJpZGVUeXBlW3Byb3AucmVwbGFjZSgvXlxcdy8sIGMgPT4gYy50b1VwcGVyQ2FzZSgpKV07XG5cdH1cblxuXHRvbkNvbG9yU2VsZWN0ZWQoY29sb3IpIHtcblx0XHR2YXIgaXRlbSA9IHRoaXMuY3JlYXRlQ29sb3JJdGVtKFwiQ29sb3JcIiwgT3ZlcnJpZGVUeXBlLkNvbG9yKTtcblxuXHRcdHRoaXMub3ZlcnJpZGVbdGhpcy5nZXRQcm9wZXJ0eU5hbWUoaXRlbSldID0gY29sb3I7XG5cdFx0dGhpcy5yZWJ1aWxkSXRlbXMoKTtcblx0fVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZWQtZm9ybS1pbmxpbmVcIj5cclxuXHQ8ZWQtdGV4dGJveFxyXG5cdFx0WyhuZ01vZGVsKV09XCJvdmVycmlkZS5hbGlhc1wiXHJcblx0XHRsYWJlbD1cImFsaWFzIG9yIHJlZ2V4XCJcclxuXHRcdHdpZHRoPVwiMTVcIj5cclxuXHQ8L2VkLXRleHRib3g+XHJcblxyXG5cdDxkaXYgKm5nRm9yPVwibGV0IGkgb2YgaXRlbXNcIiBjbGFzcz1cImdmLWZvcm1cIiAgPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWxhYmVsXCI+XHJcblx0XHRcdDxzcGFuIChjbGljayk9XCJvblJlbW92ZUl0ZW0oIGkgKVwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgbXItMiBwb2ludGVyXCIgPjwvaT5cclxuXHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcclxuXHRcdFx0e3tnZXRJdGVtSGVhZGVyKCBpICl9fTpcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJtbC0xXCIgKm5nSWY9XCJpLnR5cGUgIT0gMTI7ZWxzZSBjb2xvclwiID57e2kudmFsdWV9fTwvc3Bhbj5cclxuXHRcdFx0PG5nLXRlbXBsYXRlICNjb2xvcj5cclxuXHRcdFx0XHQ8Y29sb3ItY2lyY2xlIFt2YWx1ZV09XCJpLnZhbHVlXCIgY2xhc3M9XCJtbC0xXCIgW2NhbkJlQWN0aXZlXT1mYWxzZT48L2NvbG9yLWNpcmNsZT5cclxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCIgI21lbnVUYXJnZXQgIChjbGljayk9XCJjbS5zaG93KCAkZXZlbnQgKVwiPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBwb2ludGVyXCI+XHJcblx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3dcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHRcclxuXHJcblx0PGRpdiBjbGFzcz1cImdmLWZvcm1cIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcG9pbnRlclwiIChjbGljayk9XCJyZW1vdmVkLmVtaXQoIG92ZXJyaWRlIClcIj5cclxuXHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuXHRcdDwvbGFiZWw+XHJcblx0PC9kaXY+XHJcblxyXG5cclxuPC9kaXY+XHJcblxyXG48ZWQtcG9wdXAgWyh2aXNpYmxlKV09XCJzaG93Q29sb3JQaWNrZXJcIiBbYW5jaG9yXT1cIm1lbnVUYXJnZXRcIj5cclxuICA8ZWQtcGFsZXR0ZS1lZGl0b3IgKHNlbGVjdGVkKT0nb25Db2xvclNlbGVjdGVkKCAkZXZlbnQgKSc+PC9lZC1wYWxldHRlLWVkaXRvcj5cclxuPC9lZC1wb3B1cD5cclxuXHJcbjxlZC1jb250ZXh0LW1lbnUgW2l0ZW1zXT1cImNtSXRlbXNcIiAjY20+PC9lZC1jb250ZXh0LW1lbnU+XHJcblxyXG4iXX0=