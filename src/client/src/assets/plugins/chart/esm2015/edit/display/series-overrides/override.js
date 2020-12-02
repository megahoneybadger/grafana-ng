import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { ContextMenuComponent } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { OverrideItem, OverrideType } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
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
    } }, directives: [i2.TextBoxComponent, i3.NgControlStatus, i3.NgModel, i4.NgForOf, i2.PopupComponent, i2.PaletteEditorComponent, i2.ContextMenuComponent, i4.NgIf, i2.ColorCircleComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SeriesOverrideEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-series-override',
                templateUrl: './override.html'
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, { override: [{
            type: Input
        }], index: [{
            type: Input
        }], removed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2Rpc3BsYXkvc2VyaWVzLW92ZXJyaWRlcy9vdmVycmlkZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS9zZXJpZXMtb3ZlcnJpZGVzL292ZXJyaWRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBa0IsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUNXM0UsZ0NBQW9EO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsZUFBVztJQUFYLGdDQUFXOzs7SUFFOUQsbUNBQWdGOzs7SUFBbEUsa0NBQWlCLHNCQUFBOzs7O0lBVmxDLDhCQUVDO0lBQUEsK0JBQ0M7SUFBQSxnQ0FDQztJQURLLGtPQUEyQjtJQUNoQyx3QkFBeUM7SUFDMUMsaUJBQU87SUFFUCxZQUNBO0lBQUEsdUZBQW9EO0lBQ3BELHNJQUNDO0lBRUYsaUJBQU07SUFFUCxpQkFBTTs7Ozs7SUFQSixlQUNBO0lBREEsNERBQ0E7SUFBbUIsZUFBK0I7SUFBL0Isc0NBQStCLGlCQUFBOztBRExyRCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsd0JBQXdCO0lBV3pFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUss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QixpQkFBYTtRQUViLDhFQUVDO1FBY0QsaUNBQ0M7UUFEaUMscUtBQVMsZ0JBQWlCLElBQUM7UUFDNUQsZ0NBQ0M7UUFBQSx1QkFBMEI7UUFDM0IsaUJBQVE7UUFDVCxpQkFBTTtRQUVOLDhCQUNDO1FBQUEseUJBQXFEO1FBQ3RELGlCQUFNO1FBR04sOEJBQ0M7UUFBQSxrQ0FDQztRQURvQywwR0FBUyw4QkFBd0IsSUFBQztRQUN0RSx5QkFBMkI7UUFDNUIsaUJBQVE7UUFDVCxpQkFBTTtRQUdQLGlCQUFNO1FBRU4scUNBQ0U7UUFEUSxtS0FBNkI7UUFDckMsOENBQThFO1FBQTNELGtJQUFZLDJCQUF5QixJQUFDO1FBQUMsaUJBQW9CO1FBQ2hGLGlCQUFXO1FBRVgsMkNBQXlEOzs7UUE3Q3ZELGVBQTRCO1FBQTVCLDRDQUE0QjtRQUt4QixlQUF1QjtRQUF2QixtQ0FBdUI7UUFvQ25CLGdCQUE2QjtRQUE3Qiw2Q0FBNkIsZUFBQTtRQUl0QixlQUFpQjtRQUFqQixtQ0FBaUI7O2tERHJDckIsNkJBQTZCO2NBSnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsaUJBQWlCO2FBQy9COztzQkFZYyxNQUFNO3VCQUFFLFdBQVc7d0JBVHZCLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IENvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAndWlsaWInO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5pbXBvcnQgeyBPdmVycmlkZUl0ZW0sIFNlcmllc092ZXJyaWRlLCBPdmVycmlkZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jaGFydC5tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLXNlcmllcy1vdmVycmlkZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vdmVycmlkZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXJpZXNPdmVycmlkZUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgb3ZlcnJpZGU6IFNlcmllc092ZXJyaWRlO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxTZXJpZXNPdmVycmlkZT4oKTtcblxuICBjbUl0ZW1zID0gW107XG4gIGl0ZW1zID0gbmV3IEFycmF5PE92ZXJyaWRlSXRlbT4oKTtcblx0c2hvd0NvbG9yUGlja2VyID0gZmFsc2U7XG4gXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcbiAgfVxuICBcblx0bmdPbkluaXQoKSB7XG5cdFx0XG5cdFx0dGhpcy5jbUl0ZW1zID0gW1xuXHRcdFx0dGhpcy5jcmVhdGVCb29sSXRlbShcIkxpbmVzXCIsIE92ZXJyaWRlVHlwZS5MaW5lcyksXG5cdFx0XHR0aGlzLmNyZWF0ZU51bWJlckl0ZW0oXCJMaW5lIGZpbGxcIiwgT3ZlcnJpZGVUeXBlLkxpbmVGaWxsKSxcblx0XHRcdHRoaXMuY3JlYXRlTnVtYmVySXRlbShcIkxpbmUgd2lkdGhcIiwgT3ZlcnJpZGVUeXBlLkxpbmVXaWR0aCksXG5cdFx0XHR0aGlzLmNyZWF0ZUJvb2xJdGVtKFwiU3RhaXJjYXNlXCIsIE92ZXJyaWRlVHlwZS5TdGFpcmNhc2UpLFxuXHRcdFx0dGhpcy5jcmVhdGVCb29sSXRlbShcIkRhc2hlc1wiLCBPdmVycmlkZVR5cGUuRGFzaGVzKSxcblx0XHRcdHRoaXMuY3JlYXRlTnVtYmVySXRlbShcIkRhc2ggbGVuZ3RoXCIsIE92ZXJyaWRlVHlwZS5EYXNoTGVuZ3RoKSxcblx0XHRcdHRoaXMuY3JlYXRlTnVtYmVySXRlbShcIkRhc2ggc3BhY2VcIiwgT3ZlcnJpZGVUeXBlLkRhc2hTcGFjZSksXG5cdFx0XHR0aGlzLmNyZWF0ZUJvb2xJdGVtKFwiUG9pbnRzXCIsIE92ZXJyaWRlVHlwZS5Qb2ludHMpLFxuXHRcdFx0dGhpcy5jcmVhdGVOdW1iZXJJdGVtKFwiUG9pbnQgcmFkaXVzXCIsIE92ZXJyaWRlVHlwZS5Qb2ludFJhZGl1cywgMCwgNSksXG5cdFx0XHR0aGlzLmNyZWF0ZUJvb2xJdGVtKFwiU3RhY2tcIiwgT3ZlcnJpZGVUeXBlLlN0YWNrKSxcblx0XHRcdHRoaXMuY3JlYXRlQ29sb3JJdGVtKFwiQ29sb3JcIiwgT3ZlcnJpZGVUeXBlLkNvbG9yKSxcblxuXHRcdFx0dGhpcy5jcmVhdGVOdW1iZXJJdGVtKFwiWS1heGlzXCIsIE92ZXJyaWRlVHlwZS5ZQXhpcywgMSwgMiksXG5cdFx0XHR0aGlzLmNyZWF0ZU51bWJlckl0ZW0oXCJaLWluZGV4XCIsIE92ZXJyaWRlVHlwZS5aSW5kZXgsIC0zLCAzKSxcblx0XHRcdHRoaXMuY3JlYXRlQm9vbEl0ZW0oXCJMZWdlbmRcIiwgT3ZlcnJpZGVUeXBlLkxlZ2VuZCksXG5cdFx0XHR0aGlzLmNyZWF0ZUJvb2xJdGVtKFwiSGlkZSBpbiB0b29sdGlwXCIsIE92ZXJyaWRlVHlwZS5IaWRlSW5Ub29sdGlwKSxcblx0XHRdXG5cblx0XHRDb250ZXh0TWVudUNvbXBvbmVudC53cmFwSXRlbXMoIHRoaXMuY21JdGVtcywgeCA9PiB0aGlzLm9uT3B0aW9uU2VsZWN0ZWQoIHguaXRlbSApIClcblxuXHRcdHRoaXMucmVidWlsZEl0ZW1zKCk7XG4gIH1cbiAgXG4gIHJlYnVpbGRJdGVtcygpIHtcblx0XHRjb25zdCBpdGVtcyA9IG5ldyBBcnJheTxPdmVycmlkZUl0ZW0+KCk7XG5cblx0XHRmb3IgKHZhciBwcm9wIGluIHRoaXMub3ZlcnJpZGUpIHtcblx0XHRcdGlmIChwcm9wICE9ICdhbGlhcycpIHtcblx0XHRcdFx0dmFyIHR5cGUgPSB0aGlzLmdldE92ZXJyaWRlVHlwZShwcm9wKTtcblxuXHRcdFx0XHRpdGVtcy5wdXNoKG5ldyBPdmVycmlkZUl0ZW0odHlwZSwgdGhpcy5vdmVycmlkZVtwcm9wXSkpXG5cdFx0XHR9XG5cdFx0fVxuXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuXHRjcmVhdGVCb29sSXRlbShoZWFkZXI6IHN0cmluZywgdHlwZTogT3ZlcnJpZGVUeXBlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsOiBoZWFkZXIsIGl0ZW1zOiBbXG5cdFx0XHRcdHsgbGFiZWw6ICd0cnVlJywgdmFsdWU6IHRydWUsIHR5cGU6IHR5cGUgfSxcblx0XHRcdFx0eyBsYWJlbDogJ2ZhbHNlJywgdmFsdWU6IGZhbHNlLCB0eXBlOiB0eXBlIH0sXG5cdFx0XHRdXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlTnVtYmVySXRlbShoZWFkZXI6IHN0cmluZywgdHlwZTogT3ZlcnJpZGVUeXBlLCBmcm9tOiBudW1iZXIgPSAwLCB0bzogbnVtYmVyID0gMTApIHtcblx0XHRjb25zdCBpdGVtID0geyBsYWJlbDogaGVhZGVyLCBpdGVtczogW10gfTtcblxuXHRcdGZvciAodmFyIGkgPSBmcm9tOyBpIDw9IHRvOyArK2kpIHtcblx0XHRcdGl0ZW0uaXRlbXMucHVzaCh7IGxhYmVsOiBpLCB2YWx1ZTogaSwgdHlwZTogdHlwZSB9KVxuXHRcdH1cblxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0Y3JlYXRlQ29sb3JJdGVtKGhlYWRlcjogc3RyaW5nLCB0eXBlOiBPdmVycmlkZVR5cGUpICB7XG5cdFx0cmV0dXJuIHtcbiAgICAgIGxhYmVsOiBoZWFkZXIsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgaXRlbXM6IFtcblx0XHRcdFx0eyBsYWJlbDogXCJjaGFuZ2VcIiwgdHlwZTogdHlwZSB9XG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cblx0b25PcHRpb25TZWxlY3RlZChpdGVtKSB7XG5cdFx0aWYgKGl0ZW0udHlwZSA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoT3ZlcnJpZGVUeXBlLkNvbG9yID09IGl0ZW0udHlwZSkge1xuXHRcdFx0dGhpcy5zaG93Q29sb3JQaWNrZXIgPSB0cnVlXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vdmVycmlkZVt0aGlzLmdldFByb3BlcnR5TmFtZShpdGVtKV0gPSBpdGVtLnZhbHVlO1xuXHRcdFx0dGhpcy5yZWJ1aWxkSXRlbXMoKTtcblx0XHR9XG5cdH1cblxuXHRvblJlbW92ZUl0ZW0oaXRlbTogT3ZlcnJpZGVJdGVtKSB7XG5cdFx0ZGVsZXRlIHRoaXMub3ZlcnJpZGVbdGhpcy5nZXRQcm9wZXJ0eU5hbWUoaXRlbSldO1xuXHRcdHRoaXMucmVidWlsZEl0ZW1zKCk7XG5cdH1cblxuXHRnZXRJdGVtSGVhZGVyKGl0ZW06IE92ZXJyaWRlSXRlbSkge1xuXHRcdHJldHVybiBPdmVycmlkZVR5cGVbaXRlbS50eXBlXVxuXHRcdFx0LnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMSAkMicpXG5cdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0fVxuXG5cdGdldFByb3BlcnR5TmFtZShpdGVtKSB7XG5cdFx0cmV0dXJuIE92ZXJyaWRlVHlwZVtpdGVtLnR5cGVdLnJlcGxhY2UoL15cXHcvLCBjID0+IGMudG9Mb3dlckNhc2UoKSlcblx0fVxuXG5cdGdldE92ZXJyaWRlVHlwZShwcm9wKSB7XG5cdFx0cmV0dXJuIE92ZXJyaWRlVHlwZVtwcm9wLnJlcGxhY2UoL15cXHcvLCBjID0+IGMudG9VcHBlckNhc2UoKSldO1xuXHR9XG5cblx0b25Db2xvclNlbGVjdGVkKGNvbG9yKSB7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZUNvbG9ySXRlbShcIkNvbG9yXCIsIE92ZXJyaWRlVHlwZS5Db2xvcik7XG5cblx0XHR0aGlzLm92ZXJyaWRlW3RoaXMuZ2V0UHJvcGVydHlOYW1lKGl0ZW0pXSA9IGNvbG9yO1xuXHRcdHRoaXMucmVidWlsZEl0ZW1zKCk7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImVkLWZvcm0taW5saW5lXCI+XHJcblx0PGVkLXRleHRib3hcclxuXHRcdFsobmdNb2RlbCldPVwib3ZlcnJpZGUuYWxpYXNcIlxyXG5cdFx0bGFiZWw9XCJhbGlhcyBvciByZWdleFwiXHJcblx0XHR3aWR0aD1cIjE1XCI+XHJcblx0PC9lZC10ZXh0Ym94PlxyXG5cclxuXHQ8ZGl2ICpuZ0Zvcj1cImxldCBpIG9mIGl0ZW1zXCIgY2xhc3M9XCJnZi1mb3JtXCIgID5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHQ8c3BhbiAoY2xpY2spPVwib25SZW1vdmVJdGVtKCBpIClcIj5cclxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXRpbWVzIG1yLTIgcG9pbnRlclwiID48L2k+XHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHJcblx0XHRcdHt7Z2V0SXRlbUhlYWRlciggaSApfX06XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwibWwtMVwiICpuZ0lmPVwiaS50eXBlICE9IDEyO2Vsc2UgY29sb3JcIiA+e3tpLnZhbHVlfX08L3NwYW4+XHJcblx0XHRcdDxuZy10ZW1wbGF0ZSAjY29sb3I+XHJcblx0XHRcdFx0PGNvbG9yLWNpcmNsZSBbdmFsdWVdPVwiaS52YWx1ZVwiIGNsYXNzPVwibWwtMVwiIFtjYW5CZUFjdGl2ZV09ZmFsc2U+PC9jb2xvci1jaXJjbGU+XHJcblx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdFxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybVwiICNtZW51VGFyZ2V0ICAoY2xpY2spPVwiY20uc2hvdyggJGV2ZW50IClcIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImdmLWZvcm0tbGFiZWwgcG9pbnRlclwiPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS1ncm93XCI+PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJnZi1mb3JtXCI+XHJcblx0XHQ8bGFiZWwgY2xhc3M9XCJnZi1mb3JtLWxhYmVsIHBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3ZlZC5lbWl0KCBvdmVycmlkZSApXCI+XHJcblx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGVkLXBvcHVwIFsodmlzaWJsZSldPVwic2hvd0NvbG9yUGlja2VyXCIgW2FuY2hvcl09XCJtZW51VGFyZ2V0XCI+XHJcbiAgPGVkLXBhbGV0dGUtZWRpdG9yIChzZWxlY3RlZCk9J29uQ29sb3JTZWxlY3RlZCggJGV2ZW50ICknPjwvZWQtcGFsZXR0ZS1lZGl0b3I+XHJcbjwvZWQtcG9wdXA+XHJcblxyXG48ZWQtY29udGV4dC1tZW51IFtpdGVtc109XCJjbUl0ZW1zXCIgI2NtPjwvZWQtY29udGV4dC1tZW51PlxyXG5cclxuIl19