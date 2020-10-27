import { Injectable } from '@angular/core';
import { PixelHelper } from '../render/pixel-helper';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tiYWxsLWRyYXdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvZXh0ZW5zaW9ucy90cmFja2JhbGwtZHJhd2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFJckQsTUFBTSxPQUFPLHFCQUFxQjtJQUVqQyxZQUFxQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBRXRDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUM5QixtQ0FBbUM7UUFDbkMsT0FBTztRQUVQLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRWhDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEMsc0NBQXNDO1FBQ3RDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUUsVUFBVSxDQUFFLENBQUM7UUFFM0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUU1RCxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBRW5CLE1BQU0sWUFBWSxHQUNqQixDQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBRTtZQUNwQixDQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUU7WUFDbkMsQ0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUM7UUFFakQsSUFBSSxZQUFZLEVBQUU7WUFDakIsT0FBTztTQUNQO1FBRUQsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ2YsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUUsQ0FBQTtRQUNwRCxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBRSxDQUFBO1FBQzNELE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFFLENBQUE7UUFFOUQsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVCxPQUFPO1NBQ1A7UUFFQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMxQyxPQUFPO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDMUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUc7U0FDMUIsQ0FBQztJQUNMLENBQUM7OzBGQXJEVyxxQkFBcUI7NkRBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0U3RvcmUgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LnN0b3JlJztcclxuaW1wb3J0IHsgUGl4ZWxIZWxwZXIgfSBmcm9tICcuLi9yZW5kZXIvcGl4ZWwtaGVscGVyJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFja2JhbGxEcmF3ZXJQbHVnaW4ge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTogQ2hhcnRTdG9yZSApe1xyXG5cclxuXHR9XHJcblxyXG5cdGFmdGVyRGF0YXNldHNEcmF3KGNoYXJ0LCBlYXNpbmcpIHtcclxuXHRcdC8vY29uc29sZS5sb2coIFwidHJhY2tiYWxsIHBsdWdpblwiIClcclxuXHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0Y29uc3QgY29udGV4dCA9IGNoYXJ0LmNoYXJ0LmN0eDtcclxuXHJcblx0XHRjb25zdCBzY2FsZVggPSBjaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ107XHJcblx0XHRcclxuXHRcdC8vY29uc3Qgc2NhbGVZQSA9IGNoYXJ0LnNjYWxlc1sgXCJBXCIgXTtcclxuXHRcdGNvbnN0IHNjYWxlWUEgPSBjaGFydC5zY2FsZXNbIFwieS1heGlzLTBcIiBdO1xyXG5cclxuXHRcdHZhciBwb3MgPSB0aGlzLmdldE1vdXNlUG9zKCBjaGFydC5jYW52YXMsIGNoYXJ0LnRyYWNrYmFsbCApO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCBwb3MgKTtcclxuXHJcblx0XHRjb25zdCBzaG91bGRJZ25vcmUgPSBcclxuXHRcdFx0KCAhY2hhcnQudHJhY2tiYWxsICkgfHxcclxuXHRcdFx0KCAwID09IGNoYXJ0LmRhdGEuZGF0YXNldHMubGVuZ3RoICkgfHxcclxuXHRcdFx0KCBwb3MueCA8IHNjYWxlWC5sZWZ0IHx8IHBvcy54ID4gc2NhbGVYLnJpZ2h0ICk7XHJcblxyXG5cdFx0aWYoIHNob3VsZElnbm9yZSApe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbHcgPSAwLjg7XHJcblx0XHRjb25zdCB4ID0gUGl4ZWxIZWxwZXIuYWxpZ25QaXhlbCggY2hhcnQsIHBvcy54LCBsdyApXHJcblx0XHRjb25zdCB5MSA9IFBpeGVsSGVscGVyLmFsaWduUGl4ZWwoIGNoYXJ0LCBzY2FsZVlBLnRvcCwgbHcgKVxyXG5cdFx0Y29uc3QgeTIgPSBQaXhlbEhlbHBlci5hbGlnblBpeGVsKCBjaGFydCwgc2NhbGVZQS5ib3R0b20sIGx3IClcclxuXHJcblx0XHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdFx0Y29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzg4MDAxNVwiO1xyXG5cdFx0Y29udGV4dC5saW5lV2lkdGggPSBsdztcclxuXHRcdGNvbnRleHQubW92ZVRvKCB4LCB5MSApO1xyXG5cdFx0Y29udGV4dC5saW5lVG8oIHgsIHkyKTtcclxuXHRcdGNvbnRleHQuc3Ryb2tlKCk7XHJcblx0fVxyXG5cclxuXHRnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCkge1xyXG5cdFx0aWYoICFldnQgKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXHJcbiAgICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcclxuICAgIH07XHJcblx0fVxyXG5cclxufSJdfQ==