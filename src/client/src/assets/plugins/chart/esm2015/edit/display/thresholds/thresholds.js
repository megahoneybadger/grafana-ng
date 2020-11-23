import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { Threshold } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./threshold";
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
    } }, directives: [i1.NgForOf, i2.ThresholdEditorComponent], encapsulation: 2 });
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
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZXNob2xkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2VkaXQvZGlzcGxheS90aHJlc2hvbGRzL3RocmVzaG9sZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFTLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztJQVVyQywyQ0FJbUI7SUFEakIsa09BQThCO0lBQ2hDLGlCQUFtQjs7OztJQUhqQixnQ0FBZSxlQUFBOztBQWF6QixNQUFNLE9BQU8seUJBQTBCLFNBQVEsd0JBQXdCO0lBRXJFLFlBQW1DLEtBQVk7UUFDN0MsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBRWpCLENBQUM7SUFFRCxLQUFLOztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFHLElBQUksQ0FBQyxVQUFVLG1DQUFJLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxJQUFJLFNBQVMsRUFBRSxDQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELFFBQVEsQ0FBRSxDQUFZO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFBO1FBRTFDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxDQUFDLENBQUUsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOztrR0FwQlUseUJBQXlCLHVCQUVmLFdBQVc7OERBRnJCLHlCQUF5QjtRQW5CbEMsOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLDBCQUFVO1FBQUEsaUJBQUs7UUFFbkIsOEJBRUU7UUFBQSxvR0FJQTtRQUVBLDhCQUNFO1FBQUEsaUNBQ0U7UUFEOEIsc0dBQVMsV0FBTyxJQUFDO1FBQy9DLHVCQUEwQjtRQUFBLG9DQUM1QjtRQUFBLGlCQUFTO1FBQ1gsaUJBQU07UUFFUixpQkFBTTtRQUNSLGlCQUFNOztRQWJnQixlQUEyQztRQUEzQyx3Q0FBMkM7O2tEQWN4RCx5QkFBeUI7Y0F0QnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FtQkQ7YUFBQzs7c0JBR0csTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yJztcbmltcG9ydCB7IFRocmVzaG9sZCB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3ItdGhyZXNob2xkcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgIDxoNT5UaHJlc2hvbGRzPC9oNT5cblxuICAgICAgPGRpdiBuZy1jbGFzcz1cInsndGhyZXNob2xkcy1mb3JtLWRpc2FibGVkJzogY3RybC5kaXNhYmxlZH1cIj5cblxuICAgICAgICA8ZWRpdG9yLXRocmVzaG9sZCAqbmdGb3I9XCJsZXQgdCBvZiB0aHJlc2hvbGRzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICBbdGhyZXNob2xkXT1cInRcIiBcbiAgICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoICRldmVudCApXCI+XG4gICAgICAgIDwvZWRpdG9yLXRocmVzaG9sZD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW52ZXJzZVwiIChjbGljayk9XCJvbkFkZCgpXCIgbmctZGlzYWJsZWQ9XCJjdHJsLmRpc2FibGVkXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+Jm5ic3A7QWRkIFRocmVzaG9sZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gfSlcbmV4cG9ydCBjbGFzcyBUaHJlc2hvbGRzRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuXG4gIH1cbiAgXG4gIG9uQWRkKCl7XG4gICAgdGhpcy5kaXNwbGF5LnRocmVzaG9sZHMgPSB0aGlzLnRocmVzaG9sZHMgPz8gW107XG4gICAgdGhpcy50aHJlc2hvbGRzLnB1c2goIG5ldyBUaHJlc2hvbGQoKSApO1xuICB9XG5cbiAgb25SZW1vdmUoIHQ6IFRocmVzaG9sZCApe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50aHJlc2hvbGRzLmluZGV4T2YoIHQgKVxuXG4gICAgaWYoIC0xICE9PSBpbmRleCApe1xuICAgICAgdGhpcy50aHJlc2hvbGRzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxufVxuIl19