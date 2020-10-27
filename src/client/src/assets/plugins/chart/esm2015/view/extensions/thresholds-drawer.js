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
    get thresholds() {
        var _a;
        return (_a = this
            .widget) === null || _a === void 0 ? void 0 : _a.display.thresholds;
    }
    afterDatasetsDraw(chart, easing) {
        this
            .thresholds
            .forEach(t => new ThresholdDrawer(chart, t).draw());
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
        const scaleX = this.chart.scales['x-axis-0'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZXNob2xkcy1kcmF3ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy92aWV3L2V4dGVuc2lvbnMvdGhyZXNob2xkcy1kcmF3ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQWEsYUFBYSxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUE7OztBQUdyRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsa0JBQWtCO0lBUzVELFlBQWEsS0FBaUI7UUFDN0IsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ2hCLENBQUM7SUFURCxJQUFJLFVBQVU7O1FBQ2IsYUFBTyxJQUFJO2FBQ1QsTUFBTSwwQ0FDTCxPQUFPLENBQ1IsVUFBVSxDQUFDO0lBQ2QsQ0FBQztJQU1ELGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNO1FBQzlCLElBQUk7YUFDRixVQUFVO2FBQ1YsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFFLENBQUM7SUFDMUQsQ0FBQzs7MEZBakJXLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVU7O0FBcUJYLE1BQU0sZUFBZTtJQUtwQixZQUFxQixLQUFVLEVBQVUsU0FBb0I7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFFN0QsQ0FBQztJQU5ELElBQUksT0FBTztRQUNWLE9B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QUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzFFO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUMzRSxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VDaGFydEV4dGVuc2lvbiB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1leHRlbnNpb24nO1xyXG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC5zdG9yZSc7XHJcbmltcG9ydCB7IFRocmVzaG9sZCwgVGhyZXNob2xkQXhpcywgVGhyZXNob2xkQ29sb3IsIFRocmVzaG9sZE9wZXJhdG9yIH0gZnJvbSAnLi4vLi4vY2hhcnQubSc7XHJcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4uL29wdGlvbnMtcHJvdmlkZXInXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaHJlc2hvbGREcmF3ZXJQbHVnaW4gZXh0ZW5kcyBCYXNlQ2hhcnRFeHRlbnNpb24ge1xyXG5cclxuXHRnZXQgdGhyZXNob2xkcygpOiBUaHJlc2hvbGRbXXtcclxuXHRcdHJldHVybiB0aGlzXHJcblx0XHRcdC53aWRnZXRcclxuXHRcdFx0Py5kaXNwbGF5XHJcblx0XHRcdC50aHJlc2hvbGRzO1xyXG5cdH1cclxuXHRcclxuXHRjb25zdHJ1Y3Rvciggc3RvcmU6IENoYXJ0U3RvcmUgKXtcclxuXHRcdHN1cGVyKCBzdG9yZSApO1xyXG5cdH1cclxuXHJcblx0YWZ0ZXJEYXRhc2V0c0RyYXcoY2hhcnQsIGVhc2luZykge1xyXG5cdFx0dGhpc1xyXG5cdFx0XHQudGhyZXNob2xkc1xyXG5cdFx0XHQuZm9yRWFjaCggdCA9PiBuZXcgVGhyZXNob2xkRHJhd2VyKCBjaGFydCwgdCApLmRyYXcoKSApO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVGhyZXNob2xkRHJhd2Vye1xyXG5cdGdldCBjb250ZXh0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGFydC5jaGFydC5jdHg7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBjaGFydDogYW55LCBwcml2YXRlIHRocmVzaG9sZDogVGhyZXNob2xkICl7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGRyYXcoKXtcclxuXHRcdGlmKCB0aGlzLnRocmVzaG9sZC52YWx1ZSA9PSB1bmRlZmluZWQgKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHNjYWxlWUEgPSB0aGlzLmNoYXJ0LnNjYWxlc1sgT3B0aW9uc1Byb3ZpZGVyLkFYSVNfWV9MRUZUIF07XHJcblx0XHRjb25zdCBzY2FsZVlCID0gdGhpcy5jaGFydC5zY2FsZXNbIE9wdGlvbnNQcm92aWRlci5BWElTX1lfUklHSFQgXTtcclxuXHRcdFxyXG5cdFx0Y29uc3Qgc2NhbGVYID0gdGhpcy5jaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ107XHJcblxyXG5cdFx0Y29uc3Qgc2NhbGVZID0gKCB0aGlzLnRocmVzaG9sZC5heGlzID09IFRocmVzaG9sZEF4aXMuUmlnaHQgJiYgc2NhbGVZQiApID9cclxuXHRcdFx0c2NhbGVZQiA6IHNjYWxlWUE7XHJcblxyXG5cdFx0Y29uc3Qgb2Zmc2V0ID0gc2NhbGVZLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aHJlc2hvbGQudmFsdWUpO1xyXG5cclxuXHRcdGNvbnN0IGd0ID0gKCB0aGlzLnRocmVzaG9sZC5vcGVyYXRvciA9PSBUaHJlc2hvbGRPcGVyYXRvci5HdCApO1xyXG5cclxuXHRcdGNvbnN0IHNob3VsZElnbm9yZSA9IFxyXG5cdFx0XHQoICFndCAmJiB0aGlzLnRocmVzaG9sZC52YWx1ZSA8IHNjYWxlWS5taW4gKSB8fFxyXG5cdFx0XHQoIGd0ICYmIHRoaXMudGhyZXNob2xkLnZhbHVlID4gc2NhbGVZLm1heCApIHx8XHJcblx0XHRcdCggIXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cy5sZW5ndGggKTtcclxuXHJcblx0XHRpZiggc2hvdWxkSWdub3JlICl7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiggb2Zmc2V0IDwgMCB8fCBvZmZzZXQgPiBzY2FsZVkuYm90dG9tICl7XHJcblx0XHQvLyBcdHJldHVybjtcclxuXHRcdC8vIH1cclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCBgJHtvZmZzZXR9IHwgJHtzY2FsZVkuYm90dG9tfWAgKSAgXHJcblxyXG5cdFx0aWYoIHRoaXMudGhyZXNob2xkLmxpbmUgKXtcclxuXHRcdFx0Y29uc3QgbGluZUNvbG9yID0gdGhpcy5nZXRDb2xvciggZmFsc2UgKTtcclxuXHRcdFx0dGhpcy5yZW5kZXJMaW5lKCBzY2FsZVgsIGxpbmVDb2xvciwgb2Zmc2V0ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIHRoaXMudGhyZXNob2xkLmZpbGwgKXtcclxuXHRcdFx0dGhpcy5yZW5kZXJSZWN0YW5nbGUoIHNjYWxlWCwgc2NhbGVZLCBvZmZzZXQgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyTGluZShzY2FsZVgsIGNvbG9yLCBvZmZzZXQgKXtcclxuXHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yICsgXCI5OVwiO1xyXG5cdFx0dGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IDI7XHJcblx0XHR0aGlzLmNvbnRleHQubW92ZVRvKCBzY2FsZVgubGVmdCwgb2Zmc2V0KTtcclxuXHRcdHRoaXMuY29udGV4dC5saW5lVG8oIHNjYWxlWC5yaWdodCwgb2Zmc2V0KTtcclxuXHRcdHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyUmVjdGFuZ2xlKCBzY2FsZVgsIHNjYWxlWSwgb2Zmc2V0ICl7XHJcblx0XHRjb25zdCBjb2xvciA9IHRoaXMuZ2V0Q29sb3IoIHRydWUgKTtcclxuXHJcblx0XHRjb25zdCBndCA9ICggdGhpcy50aHJlc2hvbGQub3BlcmF0b3IgPT0gVGhyZXNob2xkT3BlcmF0b3IuR3QgKTtcclxuXHRcdHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvciArIFwiMjJcIlxyXG5cclxuXHRcdGNvbnN0IHggPSBzY2FsZVgubGVmdDtcclxuXHRcdGNvbnN0IHcgPSBzY2FsZVgud2lkdGg7XHJcblxyXG5cdFx0Y29uc3QgdG9wWSA9IHNjYWxlWS5nZXRQaXhlbEZvclZhbHVlKHNjYWxlWS5tYXgpO1xyXG5cdFx0Y29uc3QgYm90dG9tWSA9IHNjYWxlWS5nZXRQaXhlbEZvclZhbHVlKHNjYWxlWS5taW4pO1xyXG5cclxuXHRcdGNvbnN0IHkgPSBndCA/IHRvcFkgOiBNYXRoLm1heCggdG9wWSwgb2Zmc2V0ICk7XHJcblx0XHRsZXQgaCA9IGd0ID8gb2Zmc2V0IC0gc2NhbGVZLnRvcCA6IHNjYWxlWS5ib3R0b20gLSBvZmZzZXQ7XHJcblxyXG5cdFx0aCA9IE1hdGgubWluKCBib3R0b21ZIC0gdG9wWSwgaCApXHJcblxyXG5cdFx0dGhpcy5jb250ZXh0LmZpbGxSZWN0KCB4LCB5LFx0dywgaCApO1x0XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldENvbG9yKGZpbGwpe1xyXG5cdFx0c3dpdGNoKCB0aGlzLnRocmVzaG9sZC5jb2xvclR5cGUgKXtcclxuXHRcdFx0Y2FzZSBUaHJlc2hvbGRDb2xvci5Dcml0aWNhbDpcclxuXHRcdFx0XHRyZXR1cm4gJyNFRDJFMTgnO1xyXG5cclxuXHRcdFx0Y2FzZSBUaHJlc2hvbGRDb2xvci5PazpcclxuXHRcdFx0XHRyZXR1cm4gJyMxMGEzNDUnO1xyXG5cclxuXHRcdFx0Y2FzZSBUaHJlc2hvbGRDb2xvci5XYXJuaW5nOlxyXG5cdFx0XHRcdHJldHVybiAnI2Y3OTUyMCc7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZGVmYXVsdENvbG9yID0gJyNmZmZmZmYnO1xyXG5cclxuXHRcdGlmKCBmaWxsICl7XHJcblx0XHRcdHJldHVybiB0aGlzLnRocmVzaG9sZC5maWxsQ29sb3IgPyB0aGlzLnRocmVzaG9sZC5maWxsQ29sb3IgOiBkZWZhdWx0Q29sb3I7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudGhyZXNob2xkLmxpbmVDb2xvciA/IHRoaXMudGhyZXNob2xkLmxpbmVDb2xvciA6IGRlZmF1bHRDb2xvcjtcclxuXHR9XHJcbn0iXX0=