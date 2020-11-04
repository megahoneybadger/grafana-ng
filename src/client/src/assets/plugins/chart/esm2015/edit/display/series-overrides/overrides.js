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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9kaXNwbGF5L3Nlcmllcy1vdmVycmlkZXMvb3ZlcnJpZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7SUFVMUMsaURBSXlCO0lBRHZCLG1QQUE4QjtJQUNoQyxpQkFBeUI7Ozs7SUFIdkIsK0JBQWMsZUFBQTs7QUFjeEIsTUFBTSxPQUFPLDhCQUErQixTQUFRLHdCQUF3QjtJQUUxRSxZQUFtQyxLQUFZO1FBQzdDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUVqQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUksY0FBYyxFQUFFLENBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsUUFBUSxDQUFFLENBQWlCO1FBQ3pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFBO1FBRXpDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxDQUFDLENBQUUsQ0FBQztTQUNuQztRQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs0R0FuQlUsOEJBQThCLHVCQUVwQixXQUFXO21FQUZyQiw4QkFBOEI7UUFwQnZDLDhCQUNFO1FBQUEsMEJBQUk7UUFBQSwwQ0FBMEI7UUFBQSxpQkFBSztRQUVuQywyQkFFRTtRQUFBLHFIQUlBO1FBRUEsOEJBQ0U7UUFBQSxpQ0FDRTtRQUQ4QiwyR0FBUyxXQUFPLElBQUM7UUFDL0MsdUJBQTBCO1FBQUEsbUNBQzVCO1FBQUEsaUJBQVM7UUFDWCxpQkFBTTtRQUVSLGlCQUFNO1FBQ1IsaUJBQU07O1FBYnNCLGVBQTBDO1FBQTFDLHVDQUEwQzs7a0RBZTdELDhCQUE4QjtjQXZCMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQW1CRDthQUNWOztzQkFHYyxNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwsIFBBTkVMX1RPS0VOIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJhc2VDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1lZGl0b3InO1xuaW1wb3J0IHsgU2VyaWVzT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi9jaGFydC5tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdG9yLXNlcmllcy1vdmVycmlkZXMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICA8aDU+U2VyaWVzIHNwZWNpZmljIG92ZXJyaWRlcyA8L2g1PlxuXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxlZGl0b3Itc2VyaWVzLW92ZXJyaWRlICpuZ0Zvcj1cImxldCB0IG9mIG92ZXJyaWRlczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgW292ZXJyaWRlXT1cInRcIiBcbiAgICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoICRldmVudCApXCI+XG4gICAgICAgIDwvZWRpdG9yLXNlcmllcy1vdmVycmlkZT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW52ZXJzZVwiIChjbGljayk9XCJvbkFkZCgpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+Jm5ic3A7QWRkIE92ZXJyaWRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VyaWVzT3ZlcnJpZGVzRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiBcbiAgY29uc3RydWN0b3IoQEluamVjdCggUEFORUxfVE9LRU4gKSBwYW5lbDogUGFuZWwpe1xuICAgIHN1cGVyKCBwYW5lbCApO1xuXG4gIH1cblxuICBvbkFkZCgpe1xuICAgIHRoaXMub3ZlcnJpZGVzLnB1c2goIG5ldyBTZXJpZXNPdmVycmlkZSgpICk7XG4gIH1cblxuICBvblJlbW92ZSggdDogU2VyaWVzT3ZlcnJpZGUgKXtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3ZlcnJpZGVzLmluZGV4T2YoIHQgKVxuXG4gICAgaWYoIC0xICE9PSBpbmRleCApe1xuICAgICAgdGhpcy5vdmVycmlkZXMuc3BsaWNlKCBpbmRleCwgMSApO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cbiAgXG4gIFxufVxuIl19