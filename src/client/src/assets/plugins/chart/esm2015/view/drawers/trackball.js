import { Injectable } from '@angular/core';
import { PixelHelper } from '../helpers/pixel-helper';
import * as i0 from "@angular/core";
import * as i1 from "../../base/chart.store";
export class TrackballDrawerPlugin {
    constructor(store) {
        this.store = store;
    }
    afterDatasetsDraw(chart, easing) {
        //console.log( "trackball plugin" )
        return;
        const context = chart.chart.ctx;
        const scaleX = chart.scales['x-axis-0'];
        //const scaleYA = chart.scales[ "A" ];
        const scaleYA = chart.scales["y-axis-0"];
        var pos = this.getMousePos(chart.canvas, chart.trackball);
        console.log(pos);
        const shouldIgnore = (!chart.trackball) ||
            (0 == chart.data.datasets.length) ||
            (pos.x < scaleX.left || pos.x > scaleX.right);
        if (shouldIgnore) {
            return;
        }
        const lw = 0.8;
        const x = PixelHelper.alignPixel(chart, pos.x, lw);
        const y1 = PixelHelper.alignPixel(chart, scaleYA.top, lw);
        const y2 = PixelHelper.alignPixel(chart, scaleYA.bottom, lw);
        context.beginPath();
        context.strokeStyle = "#880015";
        context.lineWidth = lw;
        context.moveTo(x, y1);
        context.lineTo(x, y2);
        context.stroke();
    }
    getMousePos(canvas, evt) {
        if (!evt) {
            return;
        }
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}
TrackballDrawerPlugin.ɵfac = function TrackballDrawerPlugin_Factory(t) { return new (t || TrackballDrawerPlugin)(i0.ɵɵinject(i1.ChartStore)); };
TrackballDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: TrackballDrawerPlugin, factory: TrackballDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrackballDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9kcmF3ZXJzL3RyYWNrYmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBSXRELE1BQU0sT0FBTyxxQkFBcUI7SUFFakMsWUFBcUIsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUV0QyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDOUIsbUNBQW1DO1FBQ25DLE9BQU87UUFFUCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUVoQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhDLHNDQUFzQztRQUN0QyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFFLFVBQVUsQ0FBRSxDQUFDO1FBRTNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFFLENBQUM7UUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUVuQixNQUFNLFlBQVksR0FDakIsQ0FBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUU7WUFDcEIsQ0FBRSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFO1lBQ25DLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBRWpELElBQUksWUFBWSxFQUFFO1lBQ2pCLE9BQU87U0FDUDtRQUVELE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUNmLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFFLENBQUE7UUFDcEQsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUUsQ0FBQTtRQUMzRCxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBRSxDQUFBO1FBRTlELE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxFQUFFLENBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRztRQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1QsT0FBTztTQUNQO1FBRUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDMUMsT0FBTztZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHO1NBQzFCLENBQUM7SUFDTCxDQUFDOzswRkFyRFcscUJBQXFCOzZEQUFyQixxQkFBcUIsV0FBckIscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC5zdG9yZSc7XHJcbmltcG9ydCB7IFBpeGVsSGVscGVyIH0gZnJvbSAnLi4vaGVscGVycy9waXhlbC1oZWxwZXInO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYWNrYmFsbERyYXdlclBsdWdpbiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOiBDaGFydFN0b3JlICl7XHJcblxyXG5cdH1cclxuXHJcblx0YWZ0ZXJEYXRhc2V0c0RyYXcoY2hhcnQsIGVhc2luZykge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyggXCJ0cmFja2JhbGwgcGx1Z2luXCIgKVxyXG5cdFx0cmV0dXJuO1xyXG5cdFx0XHJcblx0XHRjb25zdCBjb250ZXh0ID0gY2hhcnQuY2hhcnQuY3R4O1xyXG5cclxuXHRcdGNvbnN0IHNjYWxlWCA9IGNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXTtcclxuXHRcdFxyXG5cdFx0Ly9jb25zdCBzY2FsZVlBID0gY2hhcnQuc2NhbGVzWyBcIkFcIiBdO1xyXG5cdFx0Y29uc3Qgc2NhbGVZQSA9IGNoYXJ0LnNjYWxlc1sgXCJ5LWF4aXMtMFwiIF07XHJcblxyXG5cdFx0dmFyIHBvcyA9IHRoaXMuZ2V0TW91c2VQb3MoIGNoYXJ0LmNhbnZhcywgY2hhcnQudHJhY2tiYWxsICk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coIHBvcyApO1xyXG5cclxuXHRcdGNvbnN0IHNob3VsZElnbm9yZSA9IFxyXG5cdFx0XHQoICFjaGFydC50cmFja2JhbGwgKSB8fFxyXG5cdFx0XHQoIDAgPT0gY2hhcnQuZGF0YS5kYXRhc2V0cy5sZW5ndGggKSB8fFxyXG5cdFx0XHQoIHBvcy54IDwgc2NhbGVYLmxlZnQgfHwgcG9zLnggPiBzY2FsZVgucmlnaHQgKTtcclxuXHJcblx0XHRpZiggc2hvdWxkSWdub3JlICl7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsdyA9IDAuODtcclxuXHRcdGNvbnN0IHggPSBQaXhlbEhlbHBlci5hbGlnblBpeGVsKCBjaGFydCwgcG9zLngsIGx3IClcclxuXHRcdGNvbnN0IHkxID0gUGl4ZWxIZWxwZXIuYWxpZ25QaXhlbCggY2hhcnQsIHNjYWxlWUEudG9wLCBsdyApXHJcblx0XHRjb25zdCB5MiA9IFBpeGVsSGVscGVyLmFsaWduUGl4ZWwoIGNoYXJ0LCBzY2FsZVlBLmJvdHRvbSwgbHcgKVxyXG5cclxuXHRcdGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblx0XHRjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjODgwMDE1XCI7XHJcblx0XHRjb250ZXh0LmxpbmVXaWR0aCA9IGx3O1xyXG5cdFx0Y29udGV4dC5tb3ZlVG8oIHgsIHkxICk7XHJcblx0XHRjb250ZXh0LmxpbmVUbyggeCwgeTIpO1xyXG5cdFx0Y29udGV4dC5zdHJva2UoKTtcclxuXHR9XHJcblxyXG5cdGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KSB7XHJcblx0XHRpZiggIWV2dCApe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG4gICAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBldnQuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcFxyXG4gICAgfTtcclxuXHR9XHJcblxyXG59Il19