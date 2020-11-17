import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./chart.store";
export class BaseChartComponent {
    constructor(store) {
        this.store = store;
        this.dataSubs = store
            .data$
            .subscribe(x => this.data = {
            datasets: x
        });
    }
    get dashboardId() {
        return this.store.dashboard.id;
    }
    get panel() {
        return this.store.panel;
    }
    get widget() {
        return this.store.widget;
    }
    get datasets() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.datasets;
    }
    get display() {
        return this.store.display;
    }
    get component() {
        return this.widget.component;
    }
    get nativeControl() {
        return this.component.control.chart;
    }
    get scales() {
        return this.nativeControl.scales;
    }
    get annotations() {
        return this.panel.annotations;
    }
    ngOnDestroy() {
        var _a;
        (_a = this.dataSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    refresh() {
        this.store.refresh();
    }
}
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(i0.ɵɵdirectiveInject(i1.ChartStore)); };
BaseChartComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartComponent, [{
        type: Directive
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2Jhc2UvY2hhcnQtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRMUMsTUFBTSxPQUFPLGtCQUFrQjtJQTBDOUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7YUFDbEIsS0FBSzthQUNMLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDM0IsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFFLENBQUM7SUFDUixDQUFDO0lBMUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLFFBQVE7O1FBQ1YsYUFBTyxJQUFJLENBQUMsSUFBSSwwQ0FBRSxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFVRCxXQUFXOztRQUNULE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsV0FBVyxHQUFHO0lBQy9CLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDOztvRkF4RFUsa0JBQWtCO3VEQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUQ5QixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBQYW5lbCB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vY2hhcnQuYyc7XG5pbXBvcnQgeyBDaGFydCwgQ2hhcnREYXRhLCBEYXRhU2V0IH0gZnJvbSAnLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi9jaGFydC5zdG9yZSc7XG5cbkBEaXJlY3RpdmUoKSBcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICBkYXRhOiBDaGFydERhdGE7XG4gXG4gIGRhdGFTdWJzOiBTdWJzY3JpcHRpb247XG4gIHdpZGdldFN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBnZXQgZGFzaGJvYXJkSWQoKTogbnVtYmVye1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRhc2hib2FyZC5pZDtcbiAgfVxuXG4gIGdldCBwYW5lbCgpOiBQYW5lbHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5wYW5lbDtcbiAgfVxuXG4gIGdldCB3aWRnZXQoKSA6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS53aWRnZXQ7XG4gIH1cblxuICBnZXQgZGF0YXNldHMoKSA6IERhdGFTZXRbXXtcbiAgICByZXR1cm4gdGhpcy5kYXRhPy5kYXRhc2V0cztcbiAgfVxuIFxuICBnZXQgZGlzcGxheSgpe1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BsYXk7XG4gIH1cblxuICBnZXQgY29tcG9uZW50KCk6IENoYXJ0Q29tcG9uZW50e1xuICAgIHJldHVybiB0aGlzLndpZGdldC5jb21wb25lbnQ7XG4gIH1cblxuICBnZXQgbmF0aXZlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuY29udHJvbC5jaGFydFxuICB9XG5cbiAgZ2V0IHNjYWxlcygpe1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUNvbnRyb2wuc2NhbGVzO1xuICB9XG5cbiAgZ2V0IGFubm90YXRpb25zKCkgOiBBbm5vdGF0aW9uW117XG4gICAgcmV0dXJuIHRoaXMucGFuZWwuYW5ub3RhdGlvbnM7XG4gIH1cblxuXHRjb25zdHJ1Y3RvciggcHVibGljIHN0b3JlOiBDaGFydFN0b3JlICl7XG4gICAgdGhpcy5kYXRhU3VicyA9IHN0b3JlXG4gICAgICAuZGF0YSRcbiAgICAgIC5zdWJzY3JpYmUoIHggPT4gdGhpcy5kYXRhID0geyBcbiAgICAgICAgZGF0YXNldHM6IHhcbiAgICAgIH0gKTtcbiAgfVxuICBcbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmRhdGFTdWJzPy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVmcmVzaCgpe1xuICAgIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xuICB9XG59XG4iXX0=