import { Directive } from '@angular/core';
import { TimeRangeMod } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "common";
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
    get timeRegions() {
        return this.display.timeRegions;
    }
    get overrides() {
        return this.display.overrides;
    }
    get time() {
        var _a;
        this.widget.time = (_a = this.widget.time) !== null && _a !== void 0 ? _a : new TimeRangeMod();
        return this.widget.time;
    }
    get alert() {
        return this.widget.alert;
    }
    get chartControl() {
        return this
            .widget
            .component
            .control
            .chart;
    }
    get options() {
        return this.chartControl.options;
    }
    refresh() {
        var _a, _b;
        (_b = (_a = this
            .widget
            .component) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.refresh();
    }
    update() {
        const comp = this.widget.component;
        comp === null || comp === void 0 ? void 0 : comp.datasets.forEach(x => comp.display.setup(x));
        this.refresh();
    }
    pull() {
        var _a;
        (_a = this
            .widget
            .component) === null || _a === void 0 ? void 0 : _a.store.dataProvider.update();
    }
    toggleAlertHandle(v) {
        setTimeout(() => {
            const comp = this.widget.component;
            if (comp) {
                comp.showAlertHandle = v;
            }
        });
    }
}
BaseChartEditorComponent.ɵfac = function BaseChartEditorComponent_Factory(t) { return new (t || BaseChartEditorComponent)(i0.ɵɵdirectiveInject(i1.Panel)); };
BaseChartEditorComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartEditorComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartEditorComponent, [{
        type: Directive
    }], function () { return [{ type: i1.Panel }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFTLFlBQVksRUFBYSxNQUFNLFFBQVEsQ0FBQzs7O0FBS3hELE1BQU0sT0FBTyx3QkFBd0I7SUFvRG5DLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQ2hDLENBQUM7SUFuREQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxJQUFJOztRQUNOLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLE1BQU07O1FBQ1IsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksT0FBTzs7UUFDVCxhQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxJQUFJOztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBSSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSTthQUNSLE1BQU07YUFDTixTQUFTO2FBQ1QsT0FBTzthQUNQLEtBQUssQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFLRCxPQUFPOztRQUNMLFlBQUEsSUFBSTthQUNELE1BQU07YUFDTixTQUFTLDBDQUNSLE9BQU8sMENBQ1AsT0FBTyxHQUFHO0lBQ2hCLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFbkMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUNBLFFBQVEsQ0FDVCxPQUFPLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsRUFBRztRQUUzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUk7O1FBQ0YsTUFBQSxJQUFJO2FBQ0QsTUFBTTthQUNOLFNBQVMsMENBQ1IsS0FBSyxDQUNOLFlBQVksQ0FDWixNQUFNLEdBQUc7SUFDZCxDQUFDO0lBRUQsaUJBQWlCLENBQUUsQ0FBVTtRQUMzQixVQUFVLENBQUUsR0FBRyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFFbkMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUE7YUFDekI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dHQTFGVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBUaW1lUmFuZ2VNb2QsIEFsZXJ0UnVsZSB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBBeGVzLCBDaGFydCwgRGlzcGxheSwgTGVnZW5kLFxuICBTZXJpZXNPdmVycmlkZSwgVGhyZXNob2xkLCBUaW1lUmVnaW9uIH0gZnJvbSAnLi4vY2hhcnQubSc7XG5cbkBEaXJlY3RpdmUoKSBcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuXG4gIGdldCB3aWRnZXQoKSA6IENoYXJ0e1xuICAgIHJldHVybiB0aGlzLnBhbmVsLndpZGdldDtcbiAgfVxuXG4gIGdldCBheGVzKCkgOiBBeGVzIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQ/LmF4ZXM7XG4gIH1cblxuICBnZXQgbGVnZW5kKCkgOiBMZWdlbmR7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5sZWdlbmQ7XG4gIH1cblxuICBnZXQgZGlzcGxheSgpIDogRGlzcGxheXtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQ/LmRpc3BsYXk7XG4gIH1cblxuICBnZXQgdGhyZXNob2xkcygpOiBUaHJlc2hvbGRbXXtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5LnRocmVzaG9sZHM7XG4gIH1cblxuICBnZXQgdGltZVJlZ2lvbnMoKTogVGltZVJlZ2lvbltde1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkudGltZVJlZ2lvbnM7XG4gIH1cblxuICBnZXQgb3ZlcnJpZGVzKCk6IFNlcmllc092ZXJyaWRlW117XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheS5vdmVycmlkZXM7XG4gIH1cblxuICBnZXQgdGltZSgpOiBUaW1lUmFuZ2VNb2R7XG4gICAgdGhpcy53aWRnZXQudGltZSA9IHRoaXMud2lkZ2V0LnRpbWUgPz8gbmV3IFRpbWVSYW5nZU1vZCgpO1xuICAgIFxuICAgIHJldHVybiB0aGlzLndpZGdldC50aW1lO1xuICB9XG5cbiAgZ2V0IGFsZXJ0KCk6IEFsZXJ0UnVsZXtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQuYWxlcnQ7XG4gIH1cblxuICBnZXQgY2hhcnRDb250cm9sKCl7XG4gICAgcmV0dXJuIHRoaXNcbiAgICAgIC53aWRnZXRcbiAgICAgIC5jb21wb25lbnRcbiAgICAgIC5jb250cm9sXG4gICAgICAuY2hhcnQ7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpe1xuICAgIHJldHVybiB0aGlzLmNoYXJ0Q29udHJvbC5vcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHB1YmxpYyBwYW5lbDogUGFuZWwpe1xuICB9XG5cbiAgcmVmcmVzaCgpe1xuICAgIHRoaXNcbiAgICAgIC53aWRnZXRcbiAgICAgIC5jb21wb25lbnRcbiAgICAgID8uY29udHJvbFxuICAgICAgPy5yZWZyZXNoKCk7XG4gIH1cblxuICB1cGRhdGUoKXtcbiAgICBjb25zdCBjb21wID0gdGhpcy53aWRnZXQuY29tcG9uZW50O1xuXG4gICAgY29tcFxuICAgICAgPy5kYXRhc2V0c1xuICAgICAgLmZvckVhY2goIHggPT4gY29tcC5kaXNwbGF5LnNldHVwKCB4ICkgKTtcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcHVsbCgpe1xuICAgIHRoaXNcbiAgICAgIC53aWRnZXRcbiAgICAgIC5jb21wb25lbnRcbiAgICAgID8uc3RvcmVcbiAgICAgIC5kYXRhUHJvdmlkZXJcbiAgICAgIC51cGRhdGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUFsZXJ0SGFuZGxlKCB2OiBib29sZWFuICl7XG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgY29uc3QgY29tcCA9IHRoaXMud2lkZ2V0LmNvbXBvbmVudDtcblxuICAgICAgaWYoIGNvbXAgKXtcbiAgICAgICAgY29tcC5zaG93QWxlcnRIYW5kbGUgPSB2XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==