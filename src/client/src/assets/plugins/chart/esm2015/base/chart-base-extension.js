import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./chart.store";
export class BaseChartExtension {
    constructor(store) {
        this.store = store;
        this.widgetSubs = store
            .widget$
            .subscribe(x => this.widget = x);
    }
    destroy() {
        var _a;
        //console.log( "destroy BaseChartExtension" )
        (_a = this.widgetSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
BaseChartExtension.ɵfac = function BaseChartExtension_Factory(t) { return new (t || BaseChartExtension)(i0.ɵɵdirectiveInject(i1.ChartStore)); };
BaseChartExtension.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartExtension });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartExtension, [{
        type: Directive
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1leHRlbnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0xQyxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLO2FBQ3BCLE9BQU87YUFDUCxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPOztRQUNMLDZDQUE2QztRQUM3QyxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLFdBQVcsR0FBRztJQUNqQyxDQUFDOztvRkFkVSxrQkFBa0I7dURBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hhcnQsIFRocmVzaG9sZH0gZnJvbSAnLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi9jaGFydC5zdG9yZSc7XG5cbkBEaXJlY3RpdmUoKSBcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRFeHRlbnNpb24ge1xuXG4gIHdpZGdldFN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgd2lkZ2V0OiBDaGFydDtcblxuICBjb25zdHJ1Y3RvciggcHVibGljIHN0b3JlOiBDaGFydFN0b3JlICl7XG4gICAgdGhpcy53aWRnZXRTdWJzID0gc3RvcmVcbiAgICAgIC53aWRnZXQkXG4gICAgICAuc3Vic2NyaWJlKCB4ID0+IHRoaXMud2lkZ2V0ID0geCApO1xuICB9XG5cbiAgZGVzdHJveSgpe1xuICAgIC8vY29uc29sZS5sb2coIFwiZGVzdHJveSBCYXNlQ2hhcnRFeHRlbnNpb25cIiApXG4gICAgdGhpcy53aWRnZXRTdWJzPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=