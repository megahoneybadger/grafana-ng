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
AxesEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxesEditorComponent, selectors: [["editor-axes"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "left"]], template: function AxesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "editor-axis-y");
        i0.ɵɵelement(1, "editor-axis-y", 0);
        i0.ɵɵelement(2, "editor-axis-x");
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("left", false);
    } }, directives: [i1.AxisYEditorComponent, i2.AxisXEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxesEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axes',
                template: `
    <editor-axis-y ></editor-axis-y>
    <editor-axis-y [left]="false" ></editor-axis-y>
    <editor-axis-x></editor-axis-x>`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvYXhlcy9heGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFTeEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUF3QjtJQUUvRCxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUVqQixDQUFDOztzRkFMVSxtQkFBbUIsdUJBRVQsV0FBVzt3REFGckIsbUJBQW1CO1FBSjVCLGdDQUFnQztRQUNoQyxtQ0FBK0M7UUFDL0MsZ0NBQStCOztRQURoQixlQUFjO1FBQWQsNEJBQWM7O2tEQUdwQixtQkFBbUI7Y0FQL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7OztvQ0FHd0I7YUFDbkM7O3NCQUdjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1heGVzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZWRpdG9yLWF4aXMteSA+PC9lZGl0b3ItYXhpcy15PlxuICAgIDxlZGl0b3ItYXhpcy15IFtsZWZ0XT1cImZhbHNlXCIgPjwvZWRpdG9yLWF4aXMteT5cbiAgICA8ZWRpdG9yLWF4aXMteD48L2VkaXRvci1heGlzLXg+YFxufSlcbmV4cG9ydCBjbGFzcyBBeGVzRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcbiAgICBcbiAgfVxufSBcbiJdfQ==