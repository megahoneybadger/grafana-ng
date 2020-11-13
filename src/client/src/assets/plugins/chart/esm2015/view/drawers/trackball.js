import { Injectable } from '@angular/core';
import { BaseChartExtension, BaseDrawer } from '../../base/chart-base-extension';
import * as i0 from "@angular/core";
import * as i1 from "../../base/chart.store";
export class TrackballDrawerPlugin extends BaseChartExtension {
    constructor(store) {
        super(store);
        this.posSubs = store
            .mouse
            .hover$
            .subscribe(x => this.trackball = x);
    }
    finalize() {
        super.finalize();
        this.posSubs.unsubscribe();
    }
    afterDatasetsDraw(chart, _) {
        if (this.trackball) {
            new TrackballDrawer(chart, this.trackball).draw();
        }
    }
}
TrackballDrawerPlugin.ɵfac = function TrackballDrawerPlugin_Factory(t) { return new (t || TrackballDrawerPlugin)(i0.ɵɵinject(i1.ChartStore)); };
TrackballDrawerPlugin.ɵprov = i0.ɵɵdefineInjectable({ token: TrackballDrawerPlugin, factory: TrackballDrawerPlugin.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrackballDrawerPlugin, [{
        type: Injectable
    }], function () { return [{ type: i1.ChartStore }]; }, null); })();
class TrackballDrawer extends BaseDrawer {
    constructor(chart, trackball) {
        super(chart);
        this.trackball = trackball;
    }
    get position() {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: this.trackball.clientX - rect.left,
            y: this.trackball.clientY - rect.top
        };
    }
    draw() {
        const context = this.context;
        const pos = this.position;
        const shouldIgnore = (0 == this.chart.data.datasets.length) ||
            (pos.x < this.scaleX.left || pos.x > this.scaleX.right);
        if (shouldIgnore) {
            return;
        }
        const lw = 0.8;
        const x = this.alignPixel(pos.x, lw);
        const y1 = this.alignPixel(this.scaleY.top, lw);
        const y2 = this.alignPixel(this.scaleY.bottom, lw);
        context.beginPath();
        context.strokeStyle = "#880015";
        context.lineWidth = lw;
        context.moveTo(x, y1);
        context.lineTo(x, y2);
        context.stroke();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9kcmF3ZXJzL3RyYWNrYmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBSWpGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxrQkFBa0I7SUFLNUQsWUFBYSxLQUFpQjtRQUM3QixLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7YUFDbEIsS0FBSzthQUNMLE1BQU07YUFDTixTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxRQUFRO1FBQ1AsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVGLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLGVBQWUsQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ25EO0lBQ0YsQ0FBQzs7MEZBdkJXLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVU7O0FBMkJYLE1BQU0sZUFBZ0IsU0FBUSxVQUFVO0lBV3ZDLFlBQWEsS0FBVSxFQUFVLFNBQXFCO1FBQ3JELEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQURpQixjQUFTLEdBQVQsU0FBUyxDQUFZO0lBRXRELENBQUM7SUFYRCxJQUFJLFFBQVE7UUFDWCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFL0MsT0FBTztZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUc7U0FDckMsQ0FBQztJQUNMLENBQUM7SUFNRCxJQUFJO1FBQ0gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTFCLE1BQU0sWUFBWSxHQUNqQixDQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFO1lBQ3hDLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUM7UUFFM0QsSUFBSSxZQUFZLEVBQUU7WUFDakIsT0FBTztTQUNQO1FBRUQsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ2YsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxDQUFBO1FBQ3RDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFFLENBQUE7UUFDakQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUUsQ0FBQTtRQUVwRCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDaEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJhc2VDaGFydEV4dGVuc2lvbiwgQmFzZURyYXdlciB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZS1leHRlbnNpb24nO1xyXG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC5zdG9yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFja2JhbGxEcmF3ZXJQbHVnaW4gZXh0ZW5kcyBCYXNlQ2hhcnRFeHRlbnNpb24ge1xyXG5cclxuXHR0cmFja2JhbGw6IE1vdXNlRXZlbnQ7XHJcblx0cG9zU3ViczogU3Vic2NyaXB0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggc3RvcmU6IENoYXJ0U3RvcmUgKXtcclxuXHRcdHN1cGVyKCBzdG9yZSApO1xyXG5cclxuXHRcdHRoaXMucG9zU3VicyA9IHN0b3JlXHJcblx0XHRcdC5tb3VzZVxyXG5cdFx0XHQuaG92ZXIkXHJcblx0XHRcdC5zdWJzY3JpYmUoIHggPT4gdGhpcy50cmFja2JhbGwgPSB4ICk7XHJcblx0fVxyXG5cclxuXHRmaW5hbGl6ZSgpe1xyXG5cdFx0c3VwZXIuZmluYWxpemUoKTtcclxuXHRcdHRoaXMucG9zU3Vicy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHRcclxuXHRhZnRlckRhdGFzZXRzRHJhdyhjaGFydCwgXykge1xyXG5cdFx0aWYoIHRoaXMudHJhY2tiYWxsICl7XHJcblx0XHRcdG5ldyBUcmFja2JhbGxEcmF3ZXIoIGNoYXJ0LCB0aGlzLnRyYWNrYmFsbCApLmRyYXcoKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVHJhY2tiYWxsRHJhd2VyIGV4dGVuZHMgQmFzZURyYXdlcntcclxuXHJcblx0Z2V0IHBvc2l0aW9uKCl7XHJcblx0XHRjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHRoaXMudHJhY2tiYWxsLmNsaWVudFggLSByZWN0LmxlZnQsXHJcbiAgICAgIHk6IHRoaXMudHJhY2tiYWxsLmNsaWVudFkgLSByZWN0LnRvcFxyXG4gICAgfTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBjaGFydDogYW55LCBwcml2YXRlIHRyYWNrYmFsbDogTW91c2VFdmVudCApe1xyXG5cdFx0c3VwZXIoIGNoYXJ0ICk7XHJcblx0fVxyXG5cclxuXHRkcmF3KCl7XHJcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cdFx0Y29uc3QgcG9zID0gdGhpcy5wb3NpdGlvbjtcclxuXHJcblx0XHRjb25zdCBzaG91bGRJZ25vcmUgPSBcclxuXHRcdFx0KCAwID09IHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cy5sZW5ndGggKSB8fFxyXG5cdFx0XHQoIHBvcy54IDwgdGhpcy5zY2FsZVgubGVmdCB8fCBwb3MueCA+IHRoaXMuc2NhbGVYLnJpZ2h0ICk7XHJcblxyXG5cdFx0aWYoIHNob3VsZElnbm9yZSApe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbHcgPSAwLjg7XHJcblx0XHRjb25zdCB4ID0gdGhpcy5hbGlnblBpeGVsKCBwb3MueCwgbHcgKVxyXG5cdFx0Y29uc3QgeTEgPSB0aGlzLmFsaWduUGl4ZWwoIHRoaXMuc2NhbGVZLnRvcCwgbHcgKVxyXG5cdFx0Y29uc3QgeTIgPSB0aGlzLmFsaWduUGl4ZWwoIHRoaXMuc2NhbGVZLmJvdHRvbSwgbHcgKVxyXG5cclxuXHRcdGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblx0XHRjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjODgwMDE1XCI7XHJcblx0XHRjb250ZXh0LmxpbmVXaWR0aCA9IGx3O1xyXG5cdFx0Y29udGV4dC5tb3ZlVG8oIHgsIHkxICk7XHJcblx0XHRjb250ZXh0LmxpbmVUbyggeCwgeTIpO1xyXG5cdFx0Y29udGV4dC5zdHJva2UoKTtcclxuXHR9XHJcbn0iXX0=