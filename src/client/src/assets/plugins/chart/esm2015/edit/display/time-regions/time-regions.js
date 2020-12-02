import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { TimeRegion } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "./time-region";
function TimeRegionsEditorComponent_editor_time_region_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "editor-time-region", 6);
    i0.ɵɵlistener("removed", function TimeRegionsEditorComponent_editor_time_region_4_Template_editor_time_region_removed_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onRemove($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("timeRegion", t_r1)("index", i_r2);
} }
export class TimeRegionsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    onAdd() {
        var _a;
        this.display.timeRegions = (_a = this.timeRegions) !== null && _a !== void 0 ? _a : [];
        this.timeRegions.push(new TimeRegion());
    }
    onRemove(t) {
        const index = this.timeRegions.indexOf(t);
        if (-1 !== index) {
            this.timeRegions.splice(index, 1);
        }
        this.refresh();
    }
}
TimeRegionsEditorComponent.ɵfac = function TimeRegionsEditorComponent_Factory(t) { return new (t || TimeRegionsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
TimeRegionsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeRegionsEditorComponent, selectors: [["editor-time-regions"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], ["ng-class", "{'thresholds-form-disabled': ctrl.disabled}"], [3, "timeRegion", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], ["ng-disabled", "ctrl.disabled", 1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "timeRegion", "index", "removed"]], template: function TimeRegionsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5");
        i0.ɵɵtext(2, "Time regions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtemplate(4, TimeRegionsEditorComponent_editor_time_region_4_Template, 1, 2, "editor-time-region", 2);
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function TimeRegionsEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
        i0.ɵɵelement(7, "i", 5);
        i0.ɵɵtext(8, "\u00A0Add Time Region ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.timeRegions);
    } }, directives: [i2.NgForOf, i3.TimeRegionEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeRegionsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-time-regions',
                template: `
  <div class="gf-form-group">
    <h5>Time regions</h5>

    <div ng-class="{'thresholds-form-disabled': ctrl.disabled}">

      <editor-time-region *ngFor="let t of timeRegions; let i = index"
        [timeRegion]="t" 
        [index]="i"
        (removed)="onRemove( $event )">
      </editor-time-region>

      <div class="gf-form-button-row">
        <button class="btn btn-inverse" (click)="onAdd()" ng-disabled="ctrl.disabled">
          <i class="fa fa-plus"></i>&nbsp;Add Time Region
        </button>
      </div>
      
    </div>
  </div>`
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1yZWdpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RpbWUtcmVnaW9ucy90aW1lLXJlZ2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUFVeEMsNkNBSXFCO0lBRG5CLHVPQUE4QjtJQUNoQyxpQkFBcUI7Ozs7SUFIbkIsaUNBQWdCLGVBQUE7O0FBY3hCLE1BQU0sT0FBTywwQkFBMkIsU0FBUSx3QkFBd0I7SUFFdEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEtBQUs7O1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLFNBQUcsSUFBSSxDQUFDLFdBQVcsbUNBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLElBQUksVUFBVSxFQUFFLENBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsUUFBUSxDQUFFLENBQWE7UUFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUE7UUFFM0MsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBRSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7O29HQW5CVSwwQkFBMEIsdUJBRWhCLFdBQVc7K0RBRnJCLDBCQUEwQjtRQXBCckMsOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLDRCQUFZO1FBQUEsaUJBQUs7UUFFckIsOEJBRUU7UUFBQSx5R0FJQTtRQUVBLDhCQUNFO1FBQUEsaUNBQ0U7UUFEOEIsdUdBQVMsV0FBTyxJQUFDO1FBQy9DLHVCQUEwQjtRQUFBLHNDQUM1QjtRQUFBLGlCQUFTO1FBQ1gsaUJBQU07UUFFUixpQkFBTTtRQUNSLGlCQUFNOztRQWJrQixlQUE0QztRQUE1Qyx5Q0FBNEM7O2tEQWV6RCwwQkFBMEI7Y0F2QnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FtQkg7YUFDUjs7c0JBR2MsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCB7IFRpbWVSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9jaGFydC5tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLXRpbWUtcmVnaW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgPGg1PlRpbWUgcmVnaW9uczwvaDU+XG5cbiAgICA8ZGl2IG5nLWNsYXNzPVwieyd0aHJlc2hvbGRzLWZvcm0tZGlzYWJsZWQnOiBjdHJsLmRpc2FibGVkfVwiPlxuXG4gICAgICA8ZWRpdG9yLXRpbWUtcmVnaW9uICpuZ0Zvcj1cImxldCB0IG9mIHRpbWVSZWdpb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW3RpbWVSZWdpb25dPVwidFwiIFxuICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgIChyZW1vdmVkKT1cIm9uUmVtb3ZlKCAkZXZlbnQgKVwiPlxuICAgICAgPC9lZGl0b3ItdGltZS1yZWdpb24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW52ZXJzZVwiIChjbGljayk9XCJvbkFkZCgpXCIgbmctZGlzYWJsZWQ9XCJjdHJsLmRpc2FibGVkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiZuYnNwO0FkZCBUaW1lIFJlZ2lvblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgVGltZVJlZ2lvbnNFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuIFxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG4gIH1cbiAgXG4gIG9uQWRkKCl7XG4gICAgdGhpcy5kaXNwbGF5LnRpbWVSZWdpb25zID0gdGhpcy50aW1lUmVnaW9ucyA/PyBbXTtcbiAgICB0aGlzLnRpbWVSZWdpb25zLnB1c2goIG5ldyBUaW1lUmVnaW9uKCkgKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKCB0OiBUaW1lUmVnaW9uICApe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50aW1lUmVnaW9ucy5pbmRleE9mKCB0IClcblxuICAgIGlmKCAtMSAhPT0gaW5kZXggKXtcbiAgICAgIHRoaXMudGltZVJlZ2lvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG59XG4iXX0=