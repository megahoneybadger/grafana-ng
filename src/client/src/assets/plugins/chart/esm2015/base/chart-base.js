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
    }
    get datasets() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.datasets;
    }
    get component() {
        return this.widget.component;
    }
    get display() {
        return this.store.display;
    }
    onWidgetReady() {
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.dataSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.widgetSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(i0.ɵɵdirectiveInject(i1.ChartStore)); };
BaseChartComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseChartComponent, [{
        type: Directive
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2Jhc2UvY2hhcnQtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPMUMsTUFBTSxPQUFPLGtCQUFrQjtJQW1COUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUVsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7YUFDbEIsS0FBSzthQUNMLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDM0IsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFFLENBQUM7UUFFTixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUs7YUFDcEIsT0FBTzthQUNQLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRWhCLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtRQUNGLENBQUMsQ0FBRSxDQUFDO0lBQ1QsQ0FBQztJQWhDRCxJQUFJLFFBQVE7O1FBQ1YsYUFBTyxJQUFJLENBQUMsSUFBSSwwQ0FBRSxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUtELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQXFCRCxhQUFhO0lBRWIsQ0FBQztJQUVELFdBQVc7O1FBQ1QsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxXQUFXLEdBQUc7UUFDN0IsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxXQUFXLEdBQUc7SUFDakMsQ0FBQzs7b0ZBN0NVLGtCQUFrQjt1REFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NoYXJ0LmMnO1xuaW1wb3J0IHsgQ2hhcnQsIENoYXJ0RGF0YSwgRGF0YVNldCB9IGZyb20gJy4uL2NoYXJ0Lm0nO1xuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4vY2hhcnQuc3RvcmUnO1xuXG5ARGlyZWN0aXZlKCkgXG5leHBvcnQgY2xhc3MgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgZGF0YTogQ2hhcnREYXRhO1xuICB3aWRnZXQ6IENoYXJ0O1xuXG4gIGdldCBkYXRhc2V0cygpOkRhdGFTZXRbXXtcbiAgICByZXR1cm4gdGhpcy5kYXRhPy5kYXRhc2V0cztcbiAgfVxuXG4gIGRhdGFTdWJzOiBTdWJzY3JpcHRpb247XG4gIHdpZGdldFN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBnZXQgY29tcG9uZW50KCk6IENoYXJ0Q29tcG9uZW50e1xuICAgIHJldHVybiB0aGlzLndpZGdldC5jb21wb25lbnQ7XG4gIH1cblxuICBnZXQgZGlzcGxheSgpe1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BsYXk7XG4gIH1cblxuXHRjb25zdHJ1Y3RvciggcHVibGljIHN0b3JlOiBDaGFydFN0b3JlICl7XG5cbiAgICB0aGlzLmRhdGFTdWJzID0gc3RvcmVcbiAgICAgIC5kYXRhJFxuICAgICAgLnN1YnNjcmliZSggeCA9PiB0aGlzLmRhdGEgPSB7IFxuICAgICAgICBkYXRhc2V0czogeFxuICAgICAgfSApO1xuXG4gICAgdGhpcy53aWRnZXRTdWJzID0gc3RvcmVcbiAgICAgIC53aWRnZXQkXG4gICAgICAuc3Vic2NyaWJlKCB4ID0+IHtcbiAgICAgICAgdGhpcy53aWRnZXQgPSB4O1xuXG4gICAgICAgIGlmKCB4ICl7XG4gICAgICAgICAgdGhpcy5vbldpZGdldFJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICB9ICk7XG4gIH1cblxuICBvbldpZGdldFJlYWR5KCl7XG5cbiAgfVxuICBcbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmRhdGFTdWJzPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMud2lkZ2V0U3Vicz8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19