import { Directive } from '@angular/core';
import { AXIS_X, AXIS_Y_LEFT } from '../chart.m';
import * as i0 from "@angular/core";
import * as i1 from "./chart.store";
export class ChartJsExtension {
    constructor(store) {
        this.store = store;
    }
    get widget() {
        return this.store.widget;
    }
    get panel() {
        return this.store.panel;
    }
    afterDatasetsDraw(chart, easing) {
    }
    finalize() {
    }
}
ChartJsExtension.ɵfac = function ChartJsExtension_Factory(t) { return new (t || ChartJsExtension)(i0.ɵɵdirectiveInject(i1.ChartStore)); };
ChartJsExtension.ɵdir = i0.ɵɵdefineDirective({ type: ChartJsExtension });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartJsExtension, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1leHRlbnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQVMsTUFBTSxZQUFZLENBQUM7OztBQUl4RCxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7SUFFdEMsQ0FBQztJQVZBLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQU1GLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNO0lBRS9CLENBQUM7SUFFQSxRQUFRO0lBRVIsQ0FBQzs7Z0ZBcEJVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsU0FBUzs7QUF3QlYsTUFBTSxPQUFPLFVBQVU7SUF5QnJCLFlBQW9CLEtBQVU7UUFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO0lBRTlCLENBQUM7SUExQkQsSUFBSSxPQUFPO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVGLElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUUsV0FBVyxDQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQU1BLFVBQVUsQ0FBRSxLQUFhLEVBQUUsS0FBYTtRQUN4QyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFDMUQsSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDMUYsQ0FBQztJQUFBLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQVhJU19YLCBBWElTX1lfTEVGVCwgQ2hhcnQgfSBmcm9tICcuLi9jaGFydC5tJztcbmltcG9ydCB7IENoYXJ0U3RvcmUgfSBmcm9tICcuL2NoYXJ0LnN0b3JlJztcblxuQERpcmVjdGl2ZSgpIFxuZXhwb3J0IGNsYXNzIENoYXJ0SnNFeHRlbnNpb24ge1xuXG4gIGdldCB3aWRnZXQoKSA6IENoYXJ0e1xuICAgIHJldHVybiB0aGlzLnN0b3JlLndpZGdldDtcblx0fVxuXHRcblx0Z2V0IHBhbmVsKCkgOiBQYW5lbHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5wYW5lbDtcbiAgfVxuICBcbiAgY29uc3RydWN0b3IoIHB1YmxpYyBzdG9yZTogQ2hhcnRTdG9yZSApe1xuICBcblx0fVxuXHRcblx0YWZ0ZXJEYXRhc2V0c0RyYXcoY2hhcnQsIGVhc2luZyl7XG5cblx0fVxuXG4gIGZpbmFsaXplKCl7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VEcmF3ZXJ7XG4gIGdldCBjb250ZXh0KCl7XG5cdFx0cmV0dXJuIHRoaXMuY2hhcnQuY2hhcnQuY3R4O1xuICB9XG5cbiAgZ2V0IGNhbnZhcygpe1xuXHRcdHJldHVybiB0aGlzLmNoYXJ0LmNhbnZhcztcbiAgfVxuIFxuXHRnZXQgc2NhbGVZKCl7XG5cdFx0cmV0dXJuIHRoaXMuY2hhcnQuc2NhbGVzWyBBWElTX1lfTEVGVCBdO1xuXHR9XG5cblx0Z2V0IHNjYWxlWCgpe1xuXHRcdHJldHVybiB0aGlzLmNoYXJ0LnNjYWxlc1sgQVhJU19YIF07XG4gIH1cblxuICBnZXQgbWluWSgpe1xuXHRcdHJldHVybiB0aGlzLnNjYWxlWS50b3A7XG5cdH1cblxuXHRnZXQgbWF4WSgpe1xuXHRcdHJldHVybiB0aGlzLnNjYWxlWS5ib3R0b207XG5cdH1cbiAgXG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgY2hhcnQ6IGFueSApe1xuICAgIFxuICB9XG5cbiAgYWxpZ25QaXhlbCggcGl4ZWw6IG51bWJlciwgd2lkdGg6IG51bWJlcikge1xuXHRcdHZhciBkZXZpY2VQaXhlbFJhdGlvID0gdGhpcy5jaGFydC5jdXJyZW50RGV2aWNlUGl4ZWxSYXRpbztcblx0XHR2YXIgaGFsZldpZHRoID0gd2lkdGggLyAyO1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKChwaXhlbCAtIGhhbGZXaWR0aCkgKiBkZXZpY2VQaXhlbFJhdGlvKSAvIGRldmljZVBpeGVsUmF0aW8gKyBoYWxmV2lkdGg7XG5cdH07XG59XG4iXX0=