import { Injectable } from '@angular/core';
import { BaseChartExtension } from '../../base/chart-base-extension';
import { ThresholdAxis, ThresholdColor, ThresholdOperator } from '../../chart.m';
import { OptionsProvider } from '../options-provider';
import * as i0 from "@angular/core";
import * as i1 from "../../base/chart.store";
export class ThresholdDrawerPlugin extends BaseChartExtension {
    constructor(store) {
        super(store);
    }
    afterDatasetsDraw(chart, _) {
        var _a, _b;
        (_b = (_a = this
            .widget) === null || _a === void 0 ? void 0 : _a.display) === null || _b === void 0 ? void 0 : _b.thresholds.forEach(t => new ThresholdDrawer(chart, t).draw());
    }
}
ThresholdDrawerPlugin.ɵfac = function ThresholdDrawerPlugin_Factory(t) { return new (t || ThresholdDrawerPlugin)(i0.ɵɵinject(i1.ChartStore)); };
ThresholdDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: ThresholdDrawerPlugin, factory: ThresholdDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThresholdDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
class ThresholdDrawer {
    constructor(chart, threshold) {
        this.chart = chart;
        this.threshold = threshold;
    }
    get context() {
        return this.chart.chart.ctx;
    }
    draw() {
        if (this.threshold.value == undefined) {
            return;
        }
        const scaleYA = this.chart.scales[OptionsProvider.AXIS_Y_LEFT];
        const scaleYB = this.chart.scales[OptionsProvider.AXIS_Y_RIGHT];
        const scaleX = this.chart.scales[OptionsProvider.AXIS_X];
        const scaleY = (this.threshold.axis == ThresholdAxis.Right && scaleYB) ?
            scaleYB : scaleYA;
        const offset = scaleY.getPixelForValue(this.threshold.value);
        const gt = (this.threshold.operator == ThresholdOperator.Gt);
        const shouldIgnore = (!gt && this.threshold.value < scaleY.min) ||
            (gt && this.threshold.value > scaleY.max) ||
            (!this.chart.data.datasets.length);
        if (shouldIgnore) {
            return;
        }
        // if( offset < 0 || offset > scaleY.bottom ){
        // 	return;
        // }
        //console.log( `${offset} | ${scaleY.bottom}` )  
        if (this.threshold.line) {
            const lineColor = this.getColor(false);
            this.renderLine(scaleX, lineColor, offset);
        }
        if (this.threshold.fill) {
            this.renderRectangle(scaleX, scaleY, offset);
        }
    }
    renderLine(scaleX, color, offset) {
        this.context.beginPath();
        this.context.strokeStyle = color + "99";
        this.context.lineWidth = 2;
        this.context.moveTo(scaleX.left, offset);
        this.context.lineTo(scaleX.right, offset);
        this.context.stroke();
    }
    renderRectangle(scaleX, scaleY, offset) {
        const color = this.getColor(true);
        const gt = (this.threshold.operator == ThresholdOperator.Gt);
        this.context.fillStyle = color + "22";
        const x = scaleX.left;
        const w = scaleX.width;
        const topY = scaleY.getPixelForValue(scaleY.max);
        const bottomY = scaleY.getPixelForValue(scaleY.min);
        const y = gt ? topY : Math.max(topY, offset);
        let h = gt ? offset - scaleY.top : scaleY.bottom - offset;
        h = Math.min(bottomY - topY, h);
        this.context.fillRect(x, y, w, h);
    }
    getColor(fill) {
        switch (this.threshold.colorType) {
            case ThresholdColor.Critical:
                return '#ED2E18';
            case ThresholdColor.Ok:
                return '#10a345';
            case ThresholdColor.Warning:
                return '#f79520';
        }
        const defaultColor = '#ffffff';
        if (fill) {
            return this.threshold.fillColor ? this.threshold.fillColor : defaultColor;
        }
        return this.threshold.lineColor ? this.threshold.lineColor : defaultColor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZXNob2xkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvZHJhd2Vycy90aHJlc2hvbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFhLGFBQWEsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFBOzs7QUFHckQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUFrQjtJQUU1RCxZQUFhLEtBQWlCO1FBQzdCLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7O1FBQ3pCLFlBQUEsSUFBSTthQUNGLE1BQU0sMENBQ0wsT0FBTywwQ0FDUCxVQUFVLENBQ1gsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksRUFBRSxFQUFHO0lBQzFELENBQUM7OzBGQVpXLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVU7O0FBZ0JYLE1BQU0sZUFBZTtJQUtwQixZQUFxQixLQUFVLEVBQVUsU0FBb0I7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFFN0QsQ0FBQztJQU5ELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFNRCxJQUFJO1FBQ0gsSUFB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SSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUMxRTtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDM0UsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlQ2hhcnRFeHRlbnNpb24gfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQuc3RvcmUnO1xyXG5pbXBvcnQgeyBUaHJlc2hvbGQsIFRocmVzaG9sZEF4aXMsIFRocmVzaG9sZENvbG9yLCBUaHJlc2hvbGRPcGVyYXRvciB9IGZyb20gJy4uLy4uL2NoYXJ0Lm0nO1xyXG5pbXBvcnQgeyBPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuLi9vcHRpb25zLXByb3ZpZGVyJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGhyZXNob2xkRHJhd2VyUGx1Z2luIGV4dGVuZHMgQmFzZUNoYXJ0RXh0ZW5zaW9uIHtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvciggc3RvcmU6IENoYXJ0U3RvcmUgKXtcclxuXHRcdHN1cGVyKCBzdG9yZSApO1xyXG5cdH1cclxuXHJcblx0YWZ0ZXJEYXRhc2V0c0RyYXcoY2hhcnQsIF8pIHtcclxuXHRcdHRoaXNcclxuXHRcdFx0LndpZGdldFxyXG5cdFx0XHQ/LmRpc3BsYXlcclxuXHRcdFx0Py50aHJlc2hvbGRzXHJcblx0XHRcdC5mb3JFYWNoKCB0ID0+IG5ldyBUaHJlc2hvbGREcmF3ZXIoIGNoYXJ0LCB0ICkuZHJhdygpICk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBUaHJlc2hvbGREcmF3ZXJ7XHJcblx0Z2V0IGNvbnRleHQoKXtcclxuXHRcdHJldHVybiB0aGlzLmNoYXJ0LmNoYXJ0LmN0eDtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIGNoYXJ0OiBhbnksIHByaXZhdGUgdGhyZXNob2xkOiBUaHJlc2hvbGQgKXtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0ZHJhdygpe1xyXG5cdFx0aWYoIHRoaXMudGhyZXNob2xkLnZhbHVlID09IHVuZGVmaW5lZCApe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgc2NhbGVZQSA9IHRoaXMuY2hhcnQuc2NhbGVzWyBPcHRpb25zUHJvdmlkZXIuQVhJU19ZX0xFRlQgXTtcclxuXHRcdGNvbnN0IHNjYWxlWUIgPSB0aGlzLmNoYXJ0LnNjYWxlc1sgT3B0aW9uc1Byb3ZpZGVyLkFYSVNfWV9SSUdIVCBdO1xyXG5cdFx0Y29uc3Qgc2NhbGVYID0gdGhpcy5jaGFydC5zY2FsZXNbIE9wdGlvbnNQcm92aWRlci5BWElTX1ggXTtcclxuXHJcblx0XHRjb25zdCBzY2FsZVkgPSAoIHRoaXMudGhyZXNob2xkLmF4aXMgPT0gVGhyZXNob2xkQXhpcy5SaWdodCAmJiBzY2FsZVlCICkgP1xyXG5cdFx0XHRzY2FsZVlCIDogc2NhbGVZQTtcclxuXHJcblx0XHRjb25zdCBvZmZzZXQgPSBzY2FsZVkuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRocmVzaG9sZC52YWx1ZSk7XHJcblxyXG5cdFx0Y29uc3QgZ3QgPSAoIHRoaXMudGhyZXNob2xkLm9wZXJhdG9yID09IFRocmVzaG9sZE9wZXJhdG9yLkd0ICk7XHJcblxyXG5cdFx0Y29uc3Qgc2hvdWxkSWdub3JlID0gXHJcblx0XHRcdCggIWd0ICYmIHRoaXMudGhyZXNob2xkLnZhbHVlIDwgc2NhbGVZLm1pbiApIHx8XHJcblx0XHRcdCggZ3QgJiYgdGhpcy50aHJlc2hvbGQudmFsdWUgPiBzY2FsZVkubWF4ICkgfHxcclxuXHRcdFx0KCAhdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzLmxlbmd0aCApO1xyXG5cclxuXHRcdGlmKCBzaG91bGRJZ25vcmUgKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmKCBvZmZzZXQgPCAwIHx8IG9mZnNldCA+IHNjYWxlWS5ib3R0b20gKXtcclxuXHRcdC8vIFx0cmV0dXJuO1xyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdC8vY29uc29sZS5sb2coIGAke29mZnNldH0gfCAke3NjYWxlWS5ib3R0b219YCApICBcclxuXHJcblx0XHRpZiggdGhpcy50aHJlc2hvbGQubGluZSApe1xyXG5cdFx0XHRjb25zdCBsaW5lQ29sb3IgPSB0aGlzLmdldENvbG9yKCBmYWxzZSApO1xyXG5cdFx0XHR0aGlzLnJlbmRlckxpbmUoIHNjYWxlWCwgbGluZUNvbG9yLCBvZmZzZXQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggdGhpcy50aHJlc2hvbGQuZmlsbCApe1xyXG5cdFx0XHR0aGlzLnJlbmRlclJlY3RhbmdsZSggc2NhbGVYLCBzY2FsZVksIG9mZnNldCApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJMaW5lKHNjYWxlWCwgY29sb3IsIG9mZnNldCApe1xyXG5cdFx0dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3IgKyBcIjk5XCI7XHJcblx0XHR0aGlzLmNvbnRleHQubGluZVdpZHRoID0gMjtcclxuXHRcdHRoaXMuY29udGV4dC5tb3ZlVG8oIHNjYWxlWC5sZWZ0LCBvZmZzZXQpO1xyXG5cdFx0dGhpcy5jb250ZXh0LmxpbmVUbyggc2NhbGVYLnJpZ2h0LCBvZmZzZXQpO1xyXG5cdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJSZWN0YW5nbGUoIHNjYWxlWCwgc2NhbGVZLCBvZmZzZXQgKXtcclxuXHRcdGNvbnN0IGNvbG9yID0gdGhpcy5nZXRDb2xvciggdHJ1ZSApO1xyXG5cclxuXHRcdGNvbnN0IGd0ID0gKCB0aGlzLnRocmVzaG9sZC5vcGVyYXRvciA9PSBUaHJlc2hvbGRPcGVyYXRvci5HdCApO1xyXG5cdFx0dGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yICsgXCIyMlwiXHJcblxyXG5cdFx0Y29uc3QgeCA9IHNjYWxlWC5sZWZ0O1xyXG5cdFx0Y29uc3QgdyA9IHNjYWxlWC53aWR0aDtcclxuXHJcblx0XHRjb25zdCB0b3BZID0gc2NhbGVZLmdldFBpeGVsRm9yVmFsdWUoc2NhbGVZLm1heCk7XHJcblx0XHRjb25zdCBib3R0b21ZID0gc2NhbGVZLmdldFBpeGVsRm9yVmFsdWUoc2NhbGVZLm1pbik7XHJcblxyXG5cdFx0Y29uc3QgeSA9IGd0ID8gdG9wWSA6IE1hdGgubWF4KCB0b3BZLCBvZmZzZXQgKTtcclxuXHRcdGxldCBoID0gZ3QgPyBvZmZzZXQgLSBzY2FsZVkudG9wIDogc2NhbGVZLmJvdHRvbSAtIG9mZnNldDtcclxuXHJcblx0XHRoID0gTWF0aC5taW4oIGJvdHRvbVkgLSB0b3BZLCBoIClcclxuXHJcblx0XHR0aGlzLmNvbnRleHQuZmlsbFJlY3QoIHgsIHksXHR3LCBoICk7XHRcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0Q29sb3IoZmlsbCl7XHJcblx0XHRzd2l0Y2goIHRoaXMudGhyZXNob2xkLmNvbG9yVHlwZSApe1xyXG5cdFx0XHRjYXNlIFRocmVzaG9sZENvbG9yLkNyaXRpY2FsOlxyXG5cdFx0XHRcdHJldHVybiAnI0VEMkUxOCc7XHJcblxyXG5cdFx0XHRjYXNlIFRocmVzaG9sZENvbG9yLk9rOlxyXG5cdFx0XHRcdHJldHVybiAnIzEwYTM0NSc7XHJcblxyXG5cdFx0XHRjYXNlIFRocmVzaG9sZENvbG9yLldhcm5pbmc6XHJcblx0XHRcdFx0cmV0dXJuICcjZjc5NTIwJztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBkZWZhdWx0Q29sb3IgPSAnI2ZmZmZmZic7XHJcblxyXG5cdFx0aWYoIGZpbGwgKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudGhyZXNob2xkLmZpbGxDb2xvciA/IHRoaXMudGhyZXNob2xkLmZpbGxDb2xvciA6IGRlZmF1bHRDb2xvcjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQubGluZUNvbG9yID8gdGhpcy50aHJlc2hvbGQubGluZUNvbG9yIDogZGVmYXVsdENvbG9yO1xyXG5cdH1cclxufSJdfQ==