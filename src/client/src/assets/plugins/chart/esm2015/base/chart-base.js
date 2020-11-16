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
        return this.store.dashboardId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2Jhc2UvY2hhcnQtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRMUMsTUFBTSxPQUFPLGtCQUFrQjtJQTBDOUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7YUFDbEIsS0FBSzthQUNMLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDM0IsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFFLENBQUM7SUFDUixDQUFDO0lBMUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksUUFBUTs7UUFDVixhQUFPLElBQUksQ0FBQyxJQUFJLDBDQUFFLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7SUFDckMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQVVELFdBQVc7O1FBQ1QsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxXQUFXLEdBQUc7SUFDL0IsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O29GQXhEVSxrQkFBa0I7dURBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFubm90YXRpb24sIFBhbmVsIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9jaGFydC5jJztcbmltcG9ydCB7IENoYXJ0LCBDaGFydERhdGEsIERhdGFTZXQgfSBmcm9tICcuLi9jaGFydC5tJztcbmltcG9ydCB7IENoYXJ0U3RvcmUgfSBmcm9tICcuL2NoYXJ0LnN0b3JlJztcblxuQERpcmVjdGl2ZSgpIFxuZXhwb3J0IGNsYXNzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gIGRhdGE6IENoYXJ0RGF0YTtcbiBcbiAgZGF0YVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgd2lkZ2V0U3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBkYXNoYm9hcmRJZCgpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGFzaGJvYXJkSWQ7XG4gIH1cblxuICBnZXQgcGFuZWwoKTogUGFuZWx7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGFuZWw7XG4gIH1cblxuICBnZXQgd2lkZ2V0KCkgOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUud2lkZ2V0O1xuICB9XG5cbiAgZ2V0IGRhdGFzZXRzKCkgOiBEYXRhU2V0W117XG4gICAgcmV0dXJuIHRoaXMuZGF0YT8uZGF0YXNldHM7XG4gIH1cbiBcbiAgZ2V0IGRpc3BsYXkoKXtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwbGF5O1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudCgpOiBDaGFydENvbXBvbmVudHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQuY29tcG9uZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmNvbnRyb2wuY2hhcnRcbiAgfVxuXG4gIGdldCBzY2FsZXMoKXtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sLnNjYWxlcztcbiAgfVxuXG4gIGdldCBhbm5vdGF0aW9ucygpIDogQW5ub3RhdGlvbltde1xuICAgIHJldHVybiB0aGlzLnBhbmVsLmFubm90YXRpb25zO1xuICB9XG5cblx0Y29uc3RydWN0b3IoIHB1YmxpYyBzdG9yZTogQ2hhcnRTdG9yZSApe1xuICAgIHRoaXMuZGF0YVN1YnMgPSBzdG9yZVxuICAgICAgLmRhdGEkXG4gICAgICAuc3Vic2NyaWJlKCB4ID0+IHRoaXMuZGF0YSA9IHsgXG4gICAgICAgIGRhdGFzZXRzOiB4XG4gICAgICB9ICk7XG4gIH1cbiAgXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5kYXRhU3Vicz8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlZnJlc2goKXtcbiAgICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcbiAgfVxufVxuIl19