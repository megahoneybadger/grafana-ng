import { Directive } from '@angular/core';
import { AXIS_X, AXIS_Y_LEFT } from '../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "./chart.store";
export class BaseChartExtension {
    constructor(store) {
        this.store = store;
        this.widgetSubs = store
            .widget$
            .subscribe(x => this.widget = x);
    }
    finalize() {
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
export class BaseDrawer {
    constructor(chart) {
        this.chart = chart;
    }
    get context() {
        return this.chart.chart.ctx;
    }
    get canvas() {
        return this.chart.canvas;
    }
    get scaleY() {
        return this.chart.scales[AXIS_Y_LEFT];
    }
    get scaleX() {
        return this.chart.scales[AXIS_X];
    }
    get minY() {
        return this.scaleY.top;
    }
    get maxY() {
        return this.scaleY.bottom;
    }
    alignPixel(pixel, width) {
        var devicePixelRatio = this.chart.currentDevicePixelRatio;
        var halfWidth = width / 2;
        return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1leHRlbnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQVMsTUFBTSxZQUFZLENBQUM7OztBQUl4RCxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLO2FBQ3BCLE9BQU87YUFDUCxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFROztRQUNOLDZDQUE2QztRQUM3QyxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLFdBQVcsR0FBRztJQUNqQyxDQUFDOztvRkFkVSxrQkFBa0I7dURBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFNBQVM7O0FBa0JWLE1BQU0sT0FBTyxVQUFVO0lBeUJyQixZQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUU5QixDQUFDO0lBMUJELElBQUksT0FBTztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRixJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFFLFdBQVcsQ0FBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFNQSxVQUFVLENBQUUsS0FBYSxFQUFFLEtBQWE7UUFDeEMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1FBQzFELElBQUksU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQzFGLENBQUM7SUFBQSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQVhJU19YLCBBWElTX1lfTEVGVCwgQ2hhcnQgfSBmcm9tICcuLi9jaGFydC5tJztcbmltcG9ydCB7IENoYXJ0U3RvcmUgfSBmcm9tICcuL2NoYXJ0LnN0b3JlJztcblxuQERpcmVjdGl2ZSgpIFxuZXhwb3J0IGNsYXNzIEJhc2VDaGFydEV4dGVuc2lvbiB7XG5cbiAgd2lkZ2V0U3ViczogU3Vic2NyaXB0aW9uO1xuICB3aWRnZXQ6IENoYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgc3RvcmU6IENoYXJ0U3RvcmUgKXtcbiAgICB0aGlzLndpZGdldFN1YnMgPSBzdG9yZVxuICAgICAgLndpZGdldCRcbiAgICAgIC5zdWJzY3JpYmUoIHggPT4gdGhpcy53aWRnZXQgPSB4ICk7XG4gIH1cblxuICBmaW5hbGl6ZSgpe1xuICAgIC8vY29uc29sZS5sb2coIFwiZGVzdHJveSBCYXNlQ2hhcnRFeHRlbnNpb25cIiApXG4gICAgdGhpcy53aWRnZXRTdWJzPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlRHJhd2Vye1xuICBnZXQgY29udGV4dCgpe1xuXHRcdHJldHVybiB0aGlzLmNoYXJ0LmNoYXJ0LmN0eDtcbiAgfVxuXG4gIGdldCBjYW52YXMoKXtcblx0XHRyZXR1cm4gdGhpcy5jaGFydC5jYW52YXM7XG4gIH1cbiBcblx0Z2V0IHNjYWxlWSgpe1xuXHRcdHJldHVybiB0aGlzLmNoYXJ0LnNjYWxlc1sgQVhJU19ZX0xFRlQgXTtcblx0fVxuXG5cdGdldCBzY2FsZVgoKXtcblx0XHRyZXR1cm4gdGhpcy5jaGFydC5zY2FsZXNbIEFYSVNfWCBdO1xuICB9XG5cbiAgZ2V0IG1pblkoKXtcblx0XHRyZXR1cm4gdGhpcy5zY2FsZVkudG9wO1xuXHR9XG5cblx0Z2V0IG1heFkoKXtcblx0XHRyZXR1cm4gdGhpcy5zY2FsZVkuYm90dG9tO1xuXHR9XG4gIFxuICBjb25zdHJ1Y3RvciggcHVibGljIGNoYXJ0OiBhbnkgKXtcbiAgICBcbiAgfVxuXG4gIGFsaWduUGl4ZWwoIHBpeGVsOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpIHtcblx0XHR2YXIgZGV2aWNlUGl4ZWxSYXRpbyA9IHRoaXMuY2hhcnQuY3VycmVudERldmljZVBpeGVsUmF0aW87XG5cdFx0dmFyIGhhbGZXaWR0aCA9IHdpZHRoIC8gMjtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgocGl4ZWwgLSBoYWxmV2lkdGgpICogZGV2aWNlUGl4ZWxSYXRpbykgLyBkZXZpY2VQaXhlbFJhdGlvICsgaGFsZldpZHRoO1xuXHR9O1xufVxuIl19