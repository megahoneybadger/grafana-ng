import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { SeriesOverride } from '../../../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./override";
function SeriesOverridesEditorComponent_editor_series_override_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "editor-series-override", 5);
    i0.ɵɵlistener("removed", function SeriesOverridesEditorComponent_editor_series_override_4_Template_editor_series_override_removed_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onRemove($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("override", t_r1)("index", i_r2);
} }
export class SeriesOverridesEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
        console.log(this.overrides);
    }
    onAdd() {
        this.overrides.push(new SeriesOverride());
    }
    onRemove(t) {
        const index = this.overrides.indexOf(t);
        if (-1 !== index) {
            this.overrides.splice(index, 1);
        }
        this.update();
    }
}
SeriesOverridesEditorComponent.ɵfac = function SeriesOverridesEditorComponent_Factory(t) { return new (t || SeriesOverridesEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
SeriesOverridesEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SeriesOverridesEditorComponent, selectors: [["editor-series-overrides"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "gf-form-group"], [3, "override", "index", "removed", 4, "ngFor", "ngForOf"], [1, "gf-form-button-row"], [1, "btn", "btn-inverse", 3, "click"], [1, "fa", "fa-plus"], [3, "override", "index", "removed"]], template: function SeriesOverridesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5");
        i0.ɵɵtext(2, "Series specific overrides ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵtemplate(4, SeriesOverridesEditorComponent_editor_series_override_4_Template, 1, 2, "editor-series-override", 1);
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function SeriesOverridesEditorComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
        i0.ɵɵelement(7, "i", 4);
        i0.ɵɵtext(8, "\u00A0Add Override ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.overrides);
    } }, directives: [i1.NgForOf, i2.SeriesOverrideEditorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SeriesOverridesEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-series-overrides',
                template: `
    <div class="gf-form-group">
      <h5>Series specific overrides </h5>

      <div>

        <editor-series-override *ngFor="let t of overrides; let i = index"
          [override]="t" 
          [index]="i"
          (removed)="onRemove( $event )">
        </editor-series-override>

        <div class="gf-form-button-row">
          <button class="btn btn-inverse" (click)="onAdd()">
            <i class="fa fa-plus"></i>&nbsp;Add Override
          </button>
        </div>
        
      </div>
    </div>`
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3Nlcmllcy1vdmVycmlkZXMvb3ZlcnJpZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7SUFVMUMsaURBSXlCO0lBRHZCLG1QQUE4QjtJQUNoQyxpQkFBeUI7Ozs7SUFIdkIsK0JBQWMsZUFBQTs7QUFjeEIsTUFBTSxPQUFPLDhCQUErQixTQUFRLHdCQUF3QjtJQUUxRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxjQUFjLEVBQUUsQ0FBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRLENBQUUsQ0FBaUI7UUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUE7UUFFekMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBRSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7OzRHQXBCVSw4QkFBOEIsdUJBRXBCLFdBQVc7bUVBRnJCLDhCQUE4QjtRQXBCdkMsOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLDBDQUEwQjtRQUFBLGlCQUFLO1FBRW5DLDJCQUVFO1FBQUEscUhBSUE7UUFFQSw4QkFDRTtRQUFBLGlDQUNFO1FBRDhCLDJHQUFTLFdBQU8sSUFBQztRQUMvQyx1QkFBMEI7UUFBQSxtQ0FDNUI7UUFBQSxpQkFBUztRQUNYLGlCQUFNO1FBRVIsaUJBQU07UUFDUixpQkFBTTs7UUFic0IsZUFBMEM7UUFBMUMsdUNBQTBDOztrREFlN0QsOEJBQThCO2NBdkIxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBbUJEO2FBQ1Y7O3NCQUdjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5pbXBvcnQgeyBTZXJpZXNPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0Lm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3Itc2VyaWVzLW92ZXJyaWRlcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgIDxoNT5TZXJpZXMgc3BlY2lmaWMgb3ZlcnJpZGVzIDwvaDU+XG5cbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPGVkaXRvci1zZXJpZXMtb3ZlcnJpZGUgKm5nRm9yPVwibGV0IHQgb2Ygb3ZlcnJpZGVzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICBbb3ZlcnJpZGVdPVwidFwiIFxuICAgICAgICAgIFtpbmRleF09XCJpXCJcbiAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZSggJGV2ZW50IClcIj5cbiAgICAgICAgPC9lZGl0b3Itc2VyaWVzLW92ZXJyaWRlPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbnZlcnNlXCIgKGNsaWNrKT1cIm9uQWRkKClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4mbmJzcDtBZGQgT3ZlcnJpZGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZXJpZXNPdmVycmlkZXNFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuIFxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG5cbiAgICBjb25zb2xlLmxvZyggdGhpcy5vdmVycmlkZXMgKTtcbiAgfVxuXG4gIG9uQWRkKCl7XG4gICAgdGhpcy5vdmVycmlkZXMucHVzaCggbmV3IFNlcmllc092ZXJyaWRlKCkgKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKCB0OiBTZXJpZXNPdmVycmlkZSApe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vdmVycmlkZXMuaW5kZXhPZiggdCApXG5cbiAgICBpZiggLTEgIT09IGluZGV4ICl7XG4gICAgICB0aGlzLm92ZXJyaWRlcy5zcGxpY2UoIGluZGV4LCAxICk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuICBcbiAgXG59XG4iXX0=