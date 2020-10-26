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
        this.widgetSubs = store
            .widget$
            .subscribe(x => {
            this.widget = x;
            if (x) {
                this.onWidgetReady();
            }
        });
        this.ctrlSubs = store
            .control$
            .subscribe(x => {
            this.control = x;
            if (x) {
                this.onControlReady();
            }
        });
    }
    get datasets() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.datasets;
    }
    get display() {
        return this.store.display;
    }
    onWidgetReady() {
    }
    onControlReady() {
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.dataSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.widgetSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.ctrlSubs) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
}
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(i0.ɵɵdirectiveInject(i1.ChartStore)); };
BaseChartComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartComponent, [{
        type: Directive
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2Jhc2UvY2hhcnQtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPMUMsTUFBTSxPQUFPLGtCQUFrQjtJQWlCOUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUVsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7YUFDbEIsS0FBSzthQUNMLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDM0IsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFFLENBQUM7UUFFTixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUs7YUFDcEIsT0FBTzthQUNQLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRWhCLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtRQUNGLENBQUMsQ0FBRSxDQUFDO1FBRVAsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO2FBQ2xCLFFBQVE7YUFDUixTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUVqQixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUUsQ0FBQztJQUNSLENBQUM7SUF2Q0QsSUFBSSxRQUFROztRQUNWLGFBQU8sSUFBSSxDQUFDLElBQUksMENBQUUsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFNRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUErQkQsYUFBYTtJQUViLENBQUM7SUFFRCxjQUFjO0lBRWQsQ0FBQztJQUVELFdBQVc7O1FBQ1QsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxXQUFXLEdBQUc7UUFDN0IsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxXQUFXLEdBQUc7UUFDL0IsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxXQUFXLEdBQUc7SUFDL0IsQ0FBQzs7b0ZBMURVLGtCQUFrQjt1REFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlDaGFydCB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFydCwgQ2hhcnREYXRhLCBEYXRhU2V0IH0gZnJvbSAnLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi9jaGFydC5zdG9yZSc7XG5cbkBEaXJlY3RpdmUoKSBcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICBkYXRhOiBDaGFydERhdGE7XG4gIHdpZGdldDogQ2hhcnQ7XG4gIGNvbnRyb2w6IFVJQ2hhcnQ7XG5cbiAgZ2V0IGRhdGFzZXRzKCk6RGF0YVNldFtde1xuICAgIHJldHVybiB0aGlzLmRhdGE/LmRhdGFzZXRzO1xuICB9XG5cbiAgZGF0YVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgd2lkZ2V0U3ViczogU3Vic2NyaXB0aW9uO1xuICBjdHJsU3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBkaXNwbGF5KCl7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGxheTtcbiAgfVxuXG5cdGNvbnN0cnVjdG9yKCBwdWJsaWMgc3RvcmU6IENoYXJ0U3RvcmUgKXtcblxuICAgIHRoaXMuZGF0YVN1YnMgPSBzdG9yZVxuICAgICAgLmRhdGEkXG4gICAgICAuc3Vic2NyaWJlKCB4ID0+IHRoaXMuZGF0YSA9IHsgXG4gICAgICAgIGRhdGFzZXRzOiB4XG4gICAgICB9ICk7XG5cbiAgICB0aGlzLndpZGdldFN1YnMgPSBzdG9yZVxuICAgICAgLndpZGdldCRcbiAgICAgIC5zdWJzY3JpYmUoIHggPT4ge1xuICAgICAgICB0aGlzLndpZGdldCA9IHg7XG5cbiAgICAgICAgaWYoIHggKXtcbiAgICAgICAgICB0aGlzLm9uV2lkZ2V0UmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgIH0gKTtcblxuICAgIHRoaXMuY3RybFN1YnMgPSBzdG9yZVxuICAgICAgLmNvbnRyb2wkXG4gICAgICAuc3Vic2NyaWJlKCB4ID0+IHtcbiAgICAgICAgdGhpcy5jb250cm9sID0geDtcblxuICAgICAgICBpZiggeCApe1xuICAgICAgICAgIHRoaXMub25Db250cm9sUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICB9XG5cbiAgb25XaWRnZXRSZWFkeSgpe1xuXG4gIH1cblxuICBvbkNvbnRyb2xSZWFkeSgpe1xuXG4gIH1cbiAgXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5kYXRhU3Vicz8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLndpZGdldFN1YnM/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jdHJsU3Vicz8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19