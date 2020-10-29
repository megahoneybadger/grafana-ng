import { Directive } from '@angular/core';
import { TimeRangeMod } from 'common';
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
    get options() {
        return this
            .widget
            .component
            .control
            .chart
            .options;
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
}
BaseChartEditorComponent.ɵfac = function BaseChartEditorComponent_Factory(t) { i0.ɵɵinvalidFactory(); };
BaseChartEditorComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartEditorComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartEditorComponent, [{
        type: Directive
    }], function () { return [{ type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFTLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLHdCQUF3QjtJQTZDbkMsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFDaEMsQ0FBQztJQTVDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLElBQUk7O1FBQ04sYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksTUFBTTs7UUFDUixhQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxPQUFPOztRQUNULGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLElBQUk7O1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG1DQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJO2FBQ1IsTUFBTTthQUNOLFNBQVM7YUFDVCxPQUFPO2FBQ1AsS0FBSzthQUNMLE9BQU8sQ0FBQztJQUNiLENBQUM7SUFLRCxPQUFPOztRQUNMLFlBQUEsSUFBSTthQUNELE1BQU07YUFDTixTQUFTLDBDQUNSLE9BQU8sMENBQ1AsT0FBTyxHQUFHO0lBQ2hCLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFbkMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUNBLFFBQVEsQ0FDVCxPQUFPLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsRUFBRztRQUUzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUk7O1FBQ0YsTUFBQSxJQUFJO2FBQ0QsTUFBTTthQUNOLFNBQVMsMENBQ1IsS0FBSyxDQUNOLFlBQVksQ0FDWixNQUFNLEdBQUc7SUFDZCxDQUFDOzs7NkRBekVVLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBUaW1lUmFuZ2VNb2QgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQXhlcywgQ2hhcnQsIERpc3BsYXksIExlZ2VuZCxcbiAgU2VyaWVzT3ZlcnJpZGUsIFRocmVzaG9sZCwgVGltZVJlZ2lvbiB9IGZyb20gJy4uL2NoYXJ0Lm0nO1xuXG5ARGlyZWN0aXZlKCkgXG5leHBvcnQgY2xhc3MgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcblxuICBnZXQgd2lkZ2V0KCkgOiBDaGFydHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC53aWRnZXQ7XG4gIH1cblxuICBnZXQgYXhlcygpIDogQXhlcyB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5heGVzO1xuICB9XG5cbiAgZ2V0IGxlZ2VuZCgpIDogTGVnZW5ke1xuICAgIHJldHVybiB0aGlzLndpZGdldD8ubGVnZW5kO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXkoKSA6IERpc3BsYXl7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5kaXNwbGF5O1xuICB9XG5cbiAgZ2V0IHRocmVzaG9sZHMoKTogVGhyZXNob2xkW117XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheS50aHJlc2hvbGRzO1xuICB9XG5cbiAgZ2V0IHRpbWVSZWdpb25zKCk6IFRpbWVSZWdpb25bXXtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5LnRpbWVSZWdpb25zO1xuICB9XG5cbiAgZ2V0IG92ZXJyaWRlcygpOiBTZXJpZXNPdmVycmlkZVtde1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkub3ZlcnJpZGVzO1xuICB9XG5cbiAgZ2V0IHRpbWUoKTogVGltZVJhbmdlTW9ke1xuICAgIHRoaXMud2lkZ2V0LnRpbWUgPSB0aGlzLndpZGdldC50aW1lID8/IG5ldyBUaW1lUmFuZ2VNb2QoKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy53aWRnZXQudGltZTtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCl7XG4gICAgcmV0dXJuIHRoaXNcbiAgICAgIC53aWRnZXRcbiAgICAgIC5jb21wb25lbnRcbiAgICAgIC5jb250cm9sXG4gICAgICAuY2hhcnRcbiAgICAgIC5vcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHB1YmxpYyBwYW5lbDogUGFuZWwpe1xuICB9XG5cbiAgcmVmcmVzaCgpe1xuICAgIHRoaXNcbiAgICAgIC53aWRnZXRcbiAgICAgIC5jb21wb25lbnRcbiAgICAgID8uY29udHJvbFxuICAgICAgPy5yZWZyZXNoKCk7XG4gIH1cblxuICB1cGRhdGUoKXtcbiAgICBjb25zdCBjb21wID0gdGhpcy53aWRnZXQuY29tcG9uZW50O1xuXG4gICAgY29tcFxuICAgICAgPy5kYXRhc2V0c1xuICAgICAgLmZvckVhY2goIHggPT4gY29tcC5kaXNwbGF5LnNldHVwKCB4ICkgKTtcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcHVsbCgpe1xuICAgIHRoaXNcbiAgICAgIC53aWRnZXRcbiAgICAgIC5jb21wb25lbnRcbiAgICAgID8uc3RvcmVcbiAgICAgIC5kYXRhUHJvdmlkZXJcbiAgICAgIC51cGRhdGUoKTtcbiAgfVxufVxuIl19