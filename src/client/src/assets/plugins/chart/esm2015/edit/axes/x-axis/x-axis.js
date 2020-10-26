import { Component, Inject } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as i0 from "@angular/core";
import * as i1 from "uilib";
import * as i2 from "@angular/forms";
export class AxisXEditorComponent extends BaseChartEditorComponent {
    constructor(panel) {
        super(panel);
    }
    get axis() {
        return this.axes.x;
    }
    get chartAxis() {
        return this.options.scales.xAxes[0];
    }
    get show() {
        return this.axis.show;
    }
    set show(v) {
        this.axis.show = this.chartAxis.display = v;
        this.refresh();
    }
}
AxisXEditorComponent.ɵfac = function AxisXEditorComponent_Factory(t) { return new (t || AxisXEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
AxisXEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxisXEditorComponent, selectors: [["editor-axis-x"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "6", "label", "Show", 3, "ngModel", "ngModelChange"]], template: function AxisXEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2, "X-Axis");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ed-checkbox", 2);
        i0.ɵɵlistener("ngModelChange", function AxisXEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.show = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.show);
    } }, directives: [i1.CheckBoxComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxisXEditorComponent, [{
        type: Component,
        args: [{
                selector: 'editor-axis-x',
                templateUrl: './x-axis.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvZWRpdC9heGVzL3gtYXhpcy94LWF4aXMudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9lZGl0L2F4ZXMveC1heGlzL3gtYXhpcy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFNM0UsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHdCQUF3QjtJQW1CaEUsWUFBbUMsS0FBWTtRQUM3QyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7SUFFakIsQ0FBQztJQXBCRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUUsQ0FBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7O3dGQWpCVSxvQkFBb0IsdUJBbUJWLFdBQVc7eURBbkJyQixvQkFBb0I7UUNSakMsOEJBQ0M7UUFBQSw2QkFBNEI7UUFBQSxzQkFBTTtRQUFBLGlCQUFLO1FBRXZDLHNDQUljO1FBRGIsaUpBQWtCO1FBQ25CLGlCQUFjO1FBR2YsaUJBQU07O1FBSkosZUFBa0I7UUFBbEIsa0NBQWtCOztrRERFUCxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsZUFBZTthQUM3Qjs7c0JBb0JjLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jaGFydC1iYXNlLWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXRvci1heGlzLXgnLFxuICB0ZW1wbGF0ZVVybDogJy4veC1heGlzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF4aXNYRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcbiAgIFxuICBnZXQgYXhpcygpe1xuICAgIHJldHVybiB0aGlzLmF4ZXMueDtcbiAgfVxuXG4gIGdldCBjaGFydEF4aXMoKXtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNjYWxlcy54QXhlc1sgMCBdO1xuICB9XG5cbiAgZ2V0IHNob3coKTogYm9vbGVhbntcbiAgICByZXR1cm4gdGhpcy5heGlzLnNob3c7XG4gIH1cblxuICBzZXQgc2hvdyggdjogYm9vbGVhbiApe1xuICAgIHRoaXMuYXhpcy5zaG93ID0gdGhpcy5jaGFydEF4aXMuZGlzcGxheSA9IHY7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCBQQU5FTF9UT0tFTiApIHBhbmVsOiBQYW5lbCl7XG4gICAgc3VwZXIoIHBhbmVsICk7XG4gICAgXG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzZWN0aW9uIGdmLWZvcm0tZ3JvdXBcIiA+XHJcblx0PGg1IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+WC1BeGlzPC9oNT5cclxuXHJcblx0PGVkLWNoZWNrYm94IFxyXG5cdFx0bGFiZWxXaWR0aD1cIjZcIlxyXG5cdFx0bGFiZWw9XCJTaG93XCJcclxuXHRcdFsobmdNb2RlbCldPVwic2hvd1wiPlxyXG5cdDwvZWQtY2hlY2tib3g+XHJcblxyXG5cclxuPC9kaXY+Il19