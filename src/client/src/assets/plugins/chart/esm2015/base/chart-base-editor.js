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
    get alert() {
        return this.widget.alert;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFTLFlBQVksRUFBYSxNQUFNLFFBQVEsQ0FBQzs7QUFLeEQsTUFBTSxPQUFPLHdCQUF3QjtJQWlEbkMsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFDaEMsQ0FBQztJQWhERCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLElBQUk7O1FBQ04sYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksTUFBTTs7UUFDUixhQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxPQUFPOztRQUNULGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLElBQUk7O1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG1DQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJO2FBQ1IsTUFBTTthQUNOLFNBQVM7YUFDVCxPQUFPO2FBQ1AsS0FBSzthQUNMLE9BQU8sQ0FBQztJQUNiLENBQUM7SUFLRCxPQUFPOztRQUNMLFlBQUEsSUFBSTthQUNELE1BQU07YUFDTixTQUFTLDBDQUNSLE9BQU8sMENBQ1AsT0FBTyxHQUFHO0lBQ2hCLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFbkMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUNBLFFBQVEsQ0FDVCxPQUFPLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsRUFBRztRQUUzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUk7O1FBQ0YsTUFBQSxJQUFJO2FBQ0QsTUFBTTthQUNOLFNBQVMsMENBQ1IsS0FBSyxDQUNOLFlBQVksQ0FDWixNQUFNLEdBQUc7SUFDZCxDQUFDOzs7NkRBN0VVLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBUaW1lUmFuZ2VNb2QsIEFsZXJ0UnVsZSB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBBeGVzLCBDaGFydCwgRGlzcGxheSwgTGVnZW5kLFxuICBTZXJpZXNPdmVycmlkZSwgVGhyZXNob2xkLCBUaW1lUmVnaW9uIH0gZnJvbSAnLi4vY2hhcnQubSc7XG5cbkBEaXJlY3RpdmUoKSBcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRFZGl0b3JDb21wb25lbnQge1xuXG4gIGdldCB3aWRnZXQoKSA6IENoYXJ0e1xuICAgIHJldHVybiB0aGlzLnBhbmVsLndpZGdldDtcbiAgfVxuXG4gIGdldCBheGVzKCkgOiBBeGVzIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQ/LmF4ZXM7XG4gIH1cblxuICBnZXQgbGVnZW5kKCkgOiBMZWdlbmR7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5sZWdlbmQ7XG4gIH1cblxuICBnZXQgZGlzcGxheSgpIDogRGlzcGxheXtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQ/LmRpc3BsYXk7XG4gIH1cblxuICBnZXQgdGhyZXNob2xkcygpOiBUaHJlc2hvbGRbXXtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5LnRocmVzaG9sZHM7XG4gIH1cblxuICBnZXQgdGltZVJlZ2lvbnMoKTogVGltZVJlZ2lvbltde1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkudGltZVJlZ2lvbnM7XG4gIH1cblxuICBnZXQgb3ZlcnJpZGVzKCk6IFNlcmllc092ZXJyaWRlW117XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheS5vdmVycmlkZXM7XG4gIH1cblxuICBnZXQgdGltZSgpOiBUaW1lUmFuZ2VNb2R7XG4gICAgdGhpcy53aWRnZXQudGltZSA9IHRoaXMud2lkZ2V0LnRpbWUgPz8gbmV3IFRpbWVSYW5nZU1vZCgpO1xuICAgIFxuICAgIHJldHVybiB0aGlzLndpZGdldC50aW1lO1xuICB9XG5cbiAgZ2V0IGFsZXJ0KCk6IEFsZXJ0UnVsZXtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQuYWxlcnQ7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpe1xuICAgIHJldHVybiB0aGlzXG4gICAgICAud2lkZ2V0XG4gICAgICAuY29tcG9uZW50XG4gICAgICAuY29udHJvbFxuICAgICAgLmNoYXJ0XG4gICAgICAub3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgcGFuZWw6IFBhbmVsKXtcbiAgfVxuXG4gIHJlZnJlc2goKXtcbiAgICB0aGlzXG4gICAgICAud2lkZ2V0XG4gICAgICAuY29tcG9uZW50XG4gICAgICA/LmNvbnRyb2xcbiAgICAgID8ucmVmcmVzaCgpO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgY29uc3QgY29tcCA9IHRoaXMud2lkZ2V0LmNvbXBvbmVudDtcblxuICAgIGNvbXBcbiAgICAgID8uZGF0YXNldHNcbiAgICAgIC5mb3JFYWNoKCB4ID0+IGNvbXAuZGlzcGxheS5zZXR1cCggeCApICk7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1bGwoKXtcbiAgICB0aGlzXG4gICAgICAud2lkZ2V0XG4gICAgICAuY29tcG9uZW50XG4gICAgICA/LnN0b3JlXG4gICAgICAuZGF0YVByb3ZpZGVyXG4gICAgICAudXBkYXRlKCk7XG4gIH1cbn1cbiJdfQ==