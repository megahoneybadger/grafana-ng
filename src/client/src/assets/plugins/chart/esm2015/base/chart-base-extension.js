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
    get dashboard() {
        return this.store.dashboard;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYmFzZS1leHRlbnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LWJhc2UtZXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQVMsTUFBTSxZQUFZLENBQUM7OztBQUl4RCxNQUFNLE9BQU8sZ0JBQWdCO0lBYzNCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7SUFFdEMsQ0FBQztJQWRBLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksS0FBSztRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQU1GLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNO0lBRS9CLENBQUM7SUFFQSxRQUFRO0lBRVIsQ0FBQzs7Z0ZBeEJVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsU0FBUzs7QUE0QlYsTUFBTSxPQUFPLFVBQVU7SUF5QnJCLFlBQW9CLEtBQVU7UUFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO0lBRTlCLENBQUM7SUExQkQsSUFBSSxPQUFPO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVGLElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUUsV0FBVyxDQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQU1BLFVBQVUsQ0FBRSxLQUFhLEVBQUUsS0FBYTtRQUN4QyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFDMUQsSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDMUYsQ0FBQztJQUFBLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkLCBQYW5lbCB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBBWElTX1gsIEFYSVNfWV9MRUZULCBDaGFydCB9IGZyb20gJy4uL2NoYXJ0Lm0nO1xuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4vY2hhcnQuc3RvcmUnO1xuXG5ARGlyZWN0aXZlKCkgXG5leHBvcnQgY2xhc3MgQ2hhcnRKc0V4dGVuc2lvbiB7XG5cbiAgZ2V0IHdpZGdldCgpIDogQ2hhcnR7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUud2lkZ2V0O1xuXHR9XG5cblx0Z2V0IGRhc2hib2FyZCgpOiBEYXNoYm9hcmR7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuZGFzaGJvYXJkO1xuXHR9XG5cdFxuXHRnZXQgcGFuZWwoKSA6IFBhbmVse1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBhbmVsO1xuICB9XG4gIFxuICBjb25zdHJ1Y3RvciggcHVibGljIHN0b3JlOiBDaGFydFN0b3JlICl7XG4gIFxuXHR9XG5cdFxuXHRhZnRlckRhdGFzZXRzRHJhdyhjaGFydCwgZWFzaW5nKXtcblxuXHR9XG5cbiAgZmluYWxpemUoKXtcbiAgICBcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFzZURyYXdlcntcbiAgZ2V0IGNvbnRleHQoKXtcblx0XHRyZXR1cm4gdGhpcy5jaGFydC5jaGFydC5jdHg7XG4gIH1cblxuICBnZXQgY2FudmFzKCl7XG5cdFx0cmV0dXJuIHRoaXMuY2hhcnQuY2FudmFzO1xuICB9XG4gXG5cdGdldCBzY2FsZVkoKXtcblx0XHRyZXR1cm4gdGhpcy5jaGFydC5zY2FsZXNbIEFYSVNfWV9MRUZUIF07XG5cdH1cblxuXHRnZXQgc2NhbGVYKCl7XG5cdFx0cmV0dXJuIHRoaXMuY2hhcnQuc2NhbGVzWyBBWElTX1ggXTtcbiAgfVxuXG4gIGdldCBtaW5ZKCl7XG5cdFx0cmV0dXJuIHRoaXMuc2NhbGVZLnRvcDtcblx0fVxuXG5cdGdldCBtYXhZKCl7XG5cdFx0cmV0dXJuIHRoaXMuc2NhbGVZLmJvdHRvbTtcblx0fVxuICBcbiAgY29uc3RydWN0b3IoIHB1YmxpYyBjaGFydDogYW55ICl7XG4gICAgXG4gIH1cblxuICBhbGlnblBpeGVsKCBwaXhlbDogbnVtYmVyLCB3aWR0aDogbnVtYmVyKSB7XG5cdFx0dmFyIGRldmljZVBpeGVsUmF0aW8gPSB0aGlzLmNoYXJ0LmN1cnJlbnREZXZpY2VQaXhlbFJhdGlvO1xuXHRcdHZhciBoYWxmV2lkdGggPSB3aWR0aCAvIDI7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKHBpeGVsIC0gaGFsZldpZHRoKSAqIGRldmljZVBpeGVsUmF0aW8pIC8gZGV2aWNlUGl4ZWxSYXRpbyArIGhhbGZXaWR0aDtcblx0fTtcbn1cbiJdfQ==