import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { Threshold } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "@angular/common";
import * as i3 from "./threshold";
function ThresholdsEditorComponent_editor_threshold_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "editor-threshold", 6);
    i0.ɵɵlistener("removed", function ThresholdsEditorComponent_editor_threshold_4_Template_editor_threshold_removed_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onRemove($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("threshold", t_r1)("index", i_r2);
} }
export class ThresholdsEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    onAdd() {
        var _a;
        this.display.thresholds = (_a = this.thresholds) !== null && _a !== void 0 ? _a : [];
        this.thresholds.push(new Threshold());
    }
    onRemove(t) {
        const index = this.thresholds.indexOf(t);
        if (-1 !== index) {
            this.thresholds.splice(index, 1);
        }
        this.refresh();
    }
}
ThresholdsEditorComponent.ɵfac = function ThresholdsEditorComponent_Factory(t) { return new (t || ThresholdsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
ThresholdsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThresholdsEditorComponent, selectors: [["editor-thresholds"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], ["ng-class", "{'thresholds-form-disabled': ctrl.disabled}"], [3, "threshold", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], ["ng-disabled", "ctrl.disabled", 1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "threshold", "index", "removed"]], template: function ThresholdsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5");
        i0.ɵɵtext(2, "Thresholds");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtemplate(4, ThresholdsEditorComponent_editor_threshold_4_Template, 1, 2, "editor-threshold", 2);
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function ThresholdsEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
        i0.ɵɵelement(7, "i", 5);
        i0.ɵɵtext(8, "\u00A0Add Threshold ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.thresholds);
    } }, directives: [i2.NgForOf, i3.ThresholdEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThresholdsEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-thresholds',
                template: `
    <div class="gf-form-group">
      <h5>Thresholds</h5>

      <div ng-class="{'thresholds-form-disabled': ctrl.disabled}">

        <editor-threshold *ngFor="let t of thresholds; let i = index"
          [threshold]="t" 
          [index]="i"
          (removed)="onRemove( $event )">
        </editor-threshold>

        <div class="gf-form-button-row">
          <button class="btn btn-inverse" (click)="onAdd()" ng-disabled="ctrl.disabled">
            <i class="fa fa-plus"></i>&nbsp;Add Threshold
          </button>
        </div>
        
      </div>
    </div>`
            }]
    }], function () { return [{ type: i1.Panel, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZXNob2xkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS90aHJlc2hvbGRzL3RocmVzaG9sZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUFVckMsMkNBSW1CO0lBRGpCLGtPQUE4QjtJQUNoQyxpQkFBbUI7Ozs7SUFIakIsZ0NBQWUsZUFBQTs7QUFhekIsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHdCQUF3QjtJQUVyRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUVqQixDQUFDO0lBRUQsS0FBSzs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBRyxJQUFJLENBQUMsVUFBVSxtQ0FBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsSUFBSSxTQUFTLEVBQUUsQ0FBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxRQUFRLENBQUUsQ0FBWTtRQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQTtRQUUxQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFFLENBQUM7U0FDcEM7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7a0dBcEJVLHlCQUF5Qix1QkFFZixXQUFXOzhEQUZyQix5QkFBeUI7UUFuQmxDLDhCQUNFO1FBQUEsMEJBQUk7UUFBQSwwQkFBVTtRQUFBLGlCQUFLO1FBRW5CLDhCQUVFO1FBQUEsb0dBSUE7UUFFQSw4QkFDRTtRQUFBLGlDQUNFO1FBRDhCLHNHQUFTLFdBQU8sSUFBQztRQUMvQyx1QkFBMEI7UUFBQSxvQ0FDNUI7UUFBQSxpQkFBUztRQUNYLGlCQUFNO1FBRVIsaUJBQU07UUFDUixpQkFBTTs7UUFiZ0IsZUFBMkM7UUFBM0Msd0NBQTJDOztrREFjeEQseUJBQXlCO2NBdEJyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBbUJEO2FBQUM7O3NCQUdHLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5pbXBvcnQgeyBUaHJlc2hvbGQgfSBmcm9tICcuLi8uLi8uLi9jaGFydC5tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLXRocmVzaG9sZHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICA8aDU+VGhyZXNob2xkczwvaDU+XG5cbiAgICAgIDxkaXYgbmctY2xhc3M9XCJ7J3RocmVzaG9sZHMtZm9ybS1kaXNhYmxlZCc6IGN0cmwuZGlzYWJsZWR9XCI+XG5cbiAgICAgICAgPGVkaXRvci10aHJlc2hvbGQgKm5nRm9yPVwibGV0IHQgb2YgdGhyZXNob2xkczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgW3RocmVzaG9sZF09XCJ0XCIgXG4gICAgICAgICAgW2luZGV4XT1cImlcIlxuICAgICAgICAgIChyZW1vdmVkKT1cIm9uUmVtb3ZlKCAkZXZlbnQgKVwiPlxuICAgICAgICA8L2VkaXRvci10aHJlc2hvbGQ+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWludmVyc2VcIiAoY2xpY2spPVwib25BZGQoKVwiIG5nLWRpc2FibGVkPVwiY3RybC5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiZuYnNwO0FkZCBUaHJlc2hvbGRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YH0pXG5leHBvcnQgY2xhc3MgVGhyZXNob2xkc0VkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB7XG4gXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcGFuZWw6IFBhbmVsKXtcbiAgICBzdXBlciggcGFuZWwgKTtcblxuICB9XG4gIFxuICBvbkFkZCgpe1xuICAgIHRoaXMuZGlzcGxheS50aHJlc2hvbGRzID0gdGhpcy50aHJlc2hvbGRzID8/IFtdO1xuICAgIHRoaXMudGhyZXNob2xkcy5wdXNoKCBuZXcgVGhyZXNob2xkKCkgKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKCB0OiBUaHJlc2hvbGQgKXtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGhyZXNob2xkcy5pbmRleE9mKCB0IClcblxuICAgIGlmKCAtMSAhPT0gaW5kZXggKXtcbiAgICAgIHRoaXMudGhyZXNob2xkcy5zcGxpY2UoIGluZGV4LCAxICk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cbn1cbiJdfQ==