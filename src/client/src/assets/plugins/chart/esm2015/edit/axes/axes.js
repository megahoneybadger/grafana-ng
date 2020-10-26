import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "./y-axis/y-axis";
import * as i2 from "./x-axis/x-axis";
export class AxesEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
AxesEditorComponent.ɵfac = function AxesEditorComponent_Factory(t) { return new (t || AxesEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AxesEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxesEditorComponent, selectors: [["editor-axes"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, template: function AxesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "editor-axis-y");
        i0.ɵɵelement(1, "editor-axis-x");
    } }, directives: [i1.AxisYEditorComponent, i2.AxisXEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxesEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axes',
                template: `
    <editor-axis-y ></editor-axis-y>
    <editor-axis-x></editor-axis-x>`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYXhlcy9heGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFReEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUF3QjtJQUUvRCxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUVqQixDQUFDOztzRkFMVSxtQkFBbUIsdUJBRVQsV0FBVzt3REFGckIsbUJBQW1CO1FBSDVCLGdDQUFnQztRQUNoQyxnQ0FBK0I7O2tEQUV0QixtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7O29DQUV3QjthQUNuQzs7c0JBR2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLWF4ZXMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxlZGl0b3ItYXhpcy15ID48L2VkaXRvci1heGlzLXk+XG4gICAgPGVkaXRvci1heGlzLXg+PC9lZGl0b3ItYXhpcy14PmBcbn0pXG5leHBvcnQgY2xhc3MgQXhlc0VkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG4gICAgXG4gIH1cbn0gXG4iXX0=