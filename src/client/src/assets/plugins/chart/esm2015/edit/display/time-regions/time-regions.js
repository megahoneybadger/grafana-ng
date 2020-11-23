import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { TimeRegion } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./time-region";
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
    } }, directives: [i1.NgForOf, i2.TimeRegionEditorComponent], encapsulation: 2 });
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
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1yZWdpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3RpbWUtcmVnaW9ucy90aW1lLXJlZ2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztJQVV4Qyw2Q0FJcUI7SUFEbkIsdU9BQThCO0lBQ2hDLGlCQUFxQjs7OztJQUhuQixpQ0FBZ0IsZUFBQTs7QUFjeEIsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHdCQUF3QjtJQUV0RSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSzs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsU0FBRyxJQUFJLENBQUMsV0FBVyxtQ0FBSSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRLENBQUUsQ0FBYTtRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQTtRQUUzQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFFLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7b0dBbkJVLDBCQUEwQix1QkFFaEIsV0FBVzsrREFGckIsMEJBQTBCO1FBcEJyQyw4QkFDRTtRQUFBLDBCQUFJO1FBQUEsNEJBQVk7UUFBQSxpQkFBSztRQUVyQiw4QkFFRTtRQUFBLHlHQUlBO1FBRUEsOEJBQ0U7UUFBQSxpQ0FDRTtRQUQ4Qix1R0FBUyxXQUFPLElBQUM7UUFDL0MsdUJBQTBCO1FBQUEsc0NBQzVCO1FBQUEsaUJBQVM7UUFDWCxpQkFBTTtRQUVSLGlCQUFNO1FBQ1IsaUJBQU07O1FBYmtCLGVBQTRDO1FBQTVDLHlDQUE0Qzs7a0RBZXpELDBCQUEwQjtjQXZCdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW1CSDthQUNSOztzQkFHYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuaW1wb3J0IHsgVGltZVJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItdGltZS1yZWdpb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICA8aDU+VGltZSByZWdpb25zPC9oNT5cblxuICAgIDxkaXYgbmctY2xhc3M9XCJ7J3RocmVzaG9sZHMtZm9ybS1kaXNhYmxlZCc6IGN0cmwuZGlzYWJsZWR9XCI+XG5cbiAgICAgIDxlZGl0b3ItdGltZS1yZWdpb24gKm5nRm9yPVwibGV0IHQgb2YgdGltZVJlZ2lvbnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICBbdGltZVJlZ2lvbl09XCJ0XCIgXG4gICAgICAgIFtpbmRleF09XCJpXCJcbiAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoICRldmVudCApXCI+XG4gICAgICA8L2VkaXRvci10aW1lLXJlZ2lvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbnZlcnNlXCIgKGNsaWNrKT1cIm9uQWRkKClcIiBuZy1kaXNhYmxlZD1cImN0cmwuZGlzYWJsZWRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+Jm5ic3A7QWRkIFRpbWUgUmVnaW9uXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lUmVnaW9uc0VkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG4gXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcbiAgfVxuICBcbiAgb25BZGQoKXtcbiAgICB0aGlzLmRpc3BsYXkudGltZVJlZ2lvbnMgPSB0aGlzLnRpbWVSZWdpb25zID8/IFtdO1xuICAgIHRoaXMudGltZVJlZ2lvbnMucHVzaCggbmV3IFRpbWVSZWdpb24oKSApO1xuICB9XG5cbiAgb25SZW1vdmUoIHQ6IFRpbWVSZWdpb24gICl7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRpbWVSZWdpb25zLmluZGV4T2YoIHQgKVxuXG4gICAgaWYoIC0xICE9PSBpbmRleCApe1xuICAgICAgdGhpcy50aW1lUmVnaW9ucy5zcGxpY2UoIGluZGV4LCAxICk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cbn1cbiJdfQ==