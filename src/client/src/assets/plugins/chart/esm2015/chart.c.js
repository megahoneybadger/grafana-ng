import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "uilib";
import * as i3 from "primeng/button";
export class ChartComponent {
    constructor(store) {
        this.store = store;
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(i1.DashboardStore)); };
ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], decls: 5, vars: 0, consts: [["type", "button", "pButton", ""]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " chart works! ");
        i0.ɵɵelement(2, "ed-progress");
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵtext(4, "fuck");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i2.ProgressComponent, i3.ButtonDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                template: `
    <p>
      chart works!
      <ed-progress></ed-progress>
      <button type="button" pButton >fuck</button>
    </p>
  `
            }]
    }], function () { return [{ type: i1.DashboardStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFhMUMsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFBcUIsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDMUMsQ0FBQzs7NEVBSFUsY0FBYzttREFBZCxjQUFjO1FBUHZCLHlCQUNFO1FBQUEsOEJBQ0E7UUFBQSw4QkFBMkI7UUFDM0IsaUNBQStCO1FBQUEsb0JBQUk7UUFBQSxpQkFBUztRQUM5QyxpQkFBSTs7a0RBR0ssY0FBYztjQVYxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU3RvcmUgfSBmcm9tICdjb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aWRnZXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgY2hhcnQgd29ya3MhXG4gICAgICA8ZWQtcHJvZ3Jlc3M+PC9lZC1wcm9ncmVzcz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gPmZ1Y2s8L2J1dHRvbj5cbiAgICA8L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOiBEYXNoYm9hcmRTdG9yZSApIHtcbiAgfVxufVxuIl19