import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "./y-axis/y-axis";
import * as i3 from "./x-axis/x-axis";
export class AxesEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
}
AxesEditorComponent.ɵfac = function AxesEditorComponent_Factory(t) { return new (t || AxesEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AxesEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxesEditorComponent, selectors: [["editor-axes"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "left"]], template: function AxesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "editor-axis-y");
        i0.ɵɵelement(1, "editor-axis-y", 0);
        i0.ɵɵelement(2, "editor-axis-x");
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("left", false);
    } }, directives: [i2.AxisYEditorComponent, i3.AxisXEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxesEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axes',
                template: `
    <editor-axis-y ></editor-axis-y>
    <editor-axis-y [left]="false" ></editor-axis-y>
    <editor-axis-x></editor-axis-x>`
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYXhlcy9heGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBU3hFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBd0I7SUFFL0QsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFakIsQ0FBQzs7c0ZBTFUsbUJBQW1CLHVCQUVULFdBQVc7d0RBRnJCLG1CQUFtQjtRQUo1QixnQ0FBZ0M7UUFDaEMsbUNBQStDO1FBQy9DLGdDQUErQjs7UUFEaEIsZUFBYztRQUFkLDRCQUFjOztrREFHcEIsbUJBQW1CO2NBUC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7b0NBR3dCO2FBQ25DOztzQkFHYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItYXhlcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGVkaXRvci1heGlzLXkgPjwvZWRpdG9yLWF4aXMteT5cbiAgICA8ZWRpdG9yLWF4aXMteSBbbGVmdF09XCJmYWxzZVwiID48L2VkaXRvci1heGlzLXk+XG4gICAgPGVkaXRvci1heGlzLXg+PC9lZGl0b3ItYXhpcy14PmBcbn0pXG5leHBvcnQgY2xhc3MgQXhlc0VkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG4gICAgXG4gIH1cbn0gXG4iXX0=