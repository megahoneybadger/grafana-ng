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
BaseChartEditorComponent.ɵfac = function BaseChartEditorComponent_Factory(t) { i0.ɵɵinvalidFactory(); };
BaseChartEditorComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartEditorComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartEditorComponent, [{
        type: Directive
    }], function () { return [{ type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFTLFlBQVksRUFBYSxNQUFNLFFBQVEsQ0FBQzs7QUFLeEQsTUFBTSxPQUFPLHdCQUF3QjtJQW9EbkMsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFDaEMsQ0FBQztJQW5ERCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLElBQUk7O1FBQ04sYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksTUFBTTs7UUFDUixhQUFPLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxPQUFPOztRQUNULGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLElBQUk7O1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG1DQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJO2FBQ1IsTUFBTTthQUNOLFNBQVM7YUFDVCxPQUFPO2FBQ1AsS0FBSyxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDbkMsQ0FBQztJQUtELE9BQU87O1FBQ0wsWUFBQSxJQUFJO2FBQ0QsTUFBTTthQUNOLFNBQVMsMENBQ1IsT0FBTywwQ0FDUCxPQUFPLEdBQUc7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQ0EsUUFBUSxDQUNULE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxFQUFHO1FBRTNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSTs7UUFDRixNQUFBLElBQUk7YUFDRCxNQUFNO2FBQ04sU0FBUywwQ0FDUixLQUFLLENBQ04sWUFBWSxDQUNaLE1BQU0sR0FBRztJQUNkLENBQUM7SUFFRCxpQkFBaUIsQ0FBRSxDQUFVO1FBQzNCLFVBQVUsQ0FBRSxHQUFHLEVBQUU7WUFDZixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUVuQyxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQTthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OzZEQTFGVSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQURwQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgVGltZVJhbmdlTW9kLCBBbGVydFJ1bGUgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQXhlcywgQ2hhcnQsIERpc3BsYXksIExlZ2VuZCxcbiAgU2VyaWVzT3ZlcnJpZGUsIFRocmVzaG9sZCwgVGltZVJlZ2lvbiB9IGZyb20gJy4uL2NoYXJ0Lm0nO1xuXG5ARGlyZWN0aXZlKCkgXG5leHBvcnQgY2xhc3MgQmFzZUNoYXJ0RWRpdG9yQ29tcG9uZW50IHtcblxuICBnZXQgd2lkZ2V0KCkgOiBDaGFydHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC53aWRnZXQ7XG4gIH1cblxuICBnZXQgYXhlcygpIDogQXhlcyB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5heGVzO1xuICB9XG5cbiAgZ2V0IGxlZ2VuZCgpIDogTGVnZW5ke1xuICAgIHJldHVybiB0aGlzLndpZGdldD8ubGVnZW5kO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXkoKSA6IERpc3BsYXl7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5kaXNwbGF5O1xuICB9XG5cbiAgZ2V0IHRocmVzaG9sZHMoKTogVGhyZXNob2xkW117XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheS50aHJlc2hvbGRzO1xuICB9XG5cbiAgZ2V0IHRpbWVSZWdpb25zKCk6IFRpbWVSZWdpb25bXXtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5LnRpbWVSZWdpb25zO1xuICB9XG5cbiAgZ2V0IG92ZXJyaWRlcygpOiBTZXJpZXNPdmVycmlkZVtde1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkub3ZlcnJpZGVzO1xuICB9XG5cbiAgZ2V0IHRpbWUoKTogVGltZVJhbmdlTW9ke1xuICAgIHRoaXMud2lkZ2V0LnRpbWUgPSB0aGlzLndpZGdldC50aW1lID8/IG5ldyBUaW1lUmFuZ2VNb2QoKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy53aWRnZXQudGltZTtcbiAgfVxuXG4gIGdldCBhbGVydCgpOiBBbGVydFJ1bGV7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0LmFsZXJ0O1xuICB9XG5cbiAgZ2V0IGNoYXJ0Q29udHJvbCgpe1xuICAgIHJldHVybiB0aGlzXG4gICAgICAud2lkZ2V0XG4gICAgICAuY29tcG9uZW50XG4gICAgICAuY29udHJvbFxuICAgICAgLmNoYXJ0O1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKXtcbiAgICByZXR1cm4gdGhpcy5jaGFydENvbnRyb2wub3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgcGFuZWw6IFBhbmVsKXtcbiAgfVxuXG4gIHJlZnJlc2goKXtcbiAgICB0aGlzXG4gICAgICAud2lkZ2V0XG4gICAgICAuY29tcG9uZW50XG4gICAgICA/LmNvbnRyb2xcbiAgICAgID8ucmVmcmVzaCgpO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgY29uc3QgY29tcCA9IHRoaXMud2lkZ2V0LmNvbXBvbmVudDtcblxuICAgIGNvbXBcbiAgICAgID8uZGF0YXNldHNcbiAgICAgIC5mb3JFYWNoKCB4ID0+IGNvbXAuZGlzcGxheS5zZXR1cCggeCApICk7XG5cbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1bGwoKXtcbiAgICB0aGlzXG4gICAgICAud2lkZ2V0XG4gICAgICAuY29tcG9uZW50XG4gICAgICA/LnN0b3JlXG4gICAgICAuZGF0YVByb3ZpZGVyXG4gICAgICAudXBkYXRlKCk7XG4gIH1cblxuICB0b2dnbGVBbGVydEhhbmRsZSggdjogYm9vbGVhbiApe1xuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbXAgPSB0aGlzLndpZGdldC5jb21wb25lbnQ7XG5cbiAgICAgIGlmKCBjb21wICl7XG4gICAgICAgIGNvbXAuc2hvd0FsZXJ0SGFuZGxlID0gdlxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=