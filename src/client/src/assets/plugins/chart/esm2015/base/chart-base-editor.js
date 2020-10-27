import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseChartEditorComponent {
    constructor(panel) {
        this.panel = panel;
    }
    get widget() {
        return this.panel.widget;
    }
    get axes() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.axes;
    }
    get legend() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
    }
    get display() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.display;
    }
    get thresholds() {
        return this.display.thresholds;
    }
    get options() {
        return this
            .widget
            .component
            .control
            .chart
            .options;
    }
    refresh() {
        this
            .widget
            .component
            .control
            .refresh();
    }
    update() {
        const comp = this.widget.component;
        comp
            .datasets
            .forEach(x => comp.display.setup(x));
        this.refresh();
    }
}
BaseChartEditorComponent.ɵfac = function BaseChartEditorComponent_Factory(t) { i0.ɵɵinvalidFactory(); };
BaseChartEditorComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartEditorComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartEditorComponent, [{
        type: Directive
    }], function () { return [{ type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzFDLE1BQU0sT0FBTyx3QkFBd0I7SUErQm5DLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQ2hDLENBQUM7SUE5QkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxJQUFJOztRQUNOLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLE1BQU07O1FBQ1IsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksT0FBTzs7UUFDVCxhQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJO2FBQ1IsTUFBTTthQUNOLFNBQVM7YUFDVCxPQUFPO2FBQ1AsS0FBSzthQUNMLE9BQU8sQ0FBQztJQUNiLENBQUM7SUFLRCxPQUFPO1FBQ0wsSUFBSTthQUNELE1BQU07YUFDTixTQUFTO2FBQ1QsT0FBTzthQUNQLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJO2FBQ0QsUUFBUTthQUNSLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7UUFFM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs2REFsRFUsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FEcEMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQXhlcywgQ2hhcnQsIERpc3BsYXksIExlZ2VuZCB9IGZyb20gJy4uL2NoYXJ0Lm0nO1xuXG5ARGlyZWN0aXZlKCkgXG5leHBvcnQgY2xhc3MgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcblxuICBnZXQgd2lkZ2V0KCkgOiBDaGFydHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC53aWRnZXQ7XG4gIH1cblxuICBnZXQgYXhlcygpIDogQXhlcyB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5heGVzO1xuICB9XG5cbiAgZ2V0IGxlZ2VuZCgpIDogTGVnZW5ke1xuICAgIHJldHVybiB0aGlzLndpZGdldD8ubGVnZW5kO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXkoKSA6IERpc3BsYXl7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5kaXNwbGF5O1xuICB9XG5cbiAgZ2V0IHRocmVzaG9sZHMoKTogYW55e1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkudGhyZXNob2xkcztcbiAgfVxuXG4gIGdldCBvcHRpb25zKCl7XG4gICAgcmV0dXJuIHRoaXNcbiAgICAgIC53aWRnZXRcbiAgICAgIC5jb21wb25lbnRcbiAgICAgIC5jb250cm9sXG4gICAgICAuY2hhcnRcbiAgICAgIC5vcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHB1YmxpYyBwYW5lbDogUGFuZWwpe1xuICB9XG5cbiAgcmVmcmVzaCgpe1xuICAgIHRoaXNcbiAgICAgIC53aWRnZXRcbiAgICAgIC5jb21wb25lbnRcbiAgICAgIC5jb250cm9sXG4gICAgICAucmVmcmVzaCgpO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgY29uc3QgY29tcCA9IHRoaXMud2lkZ2V0LmNvbXBvbmVudDtcblxuICAgIGNvbXBcbiAgICAgIC5kYXRhc2V0c1xuICAgICAgLmZvckVhY2goIHggPT4gY29tcC5kaXNwbGF5LnNldHVwKCB4ICkgKTtcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG59XG4iXX0=