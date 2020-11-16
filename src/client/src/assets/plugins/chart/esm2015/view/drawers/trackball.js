import { Injectable } from '@angular/core';
import { ChartJsExtension, BaseDrawer } from '../../base/chart-base-extension';
import * as i0 from "@angular/core";
import * as i1 from "../../base/chart.store";
export class TrackballDrawerPlugin extends ChartJsExtension {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9kcmF3ZXJzL3RyYWNrYmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBSS9FLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxnQkFBZ0I7SUFLMUQsWUFBYSxLQUFpQjtRQUM3QixLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7YUFDbEIsS0FBSzthQUNMLE1BQU07YUFDTixTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxRQUFRO1FBQ1AsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVGLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLGVBQWUsQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ25EO0lBQ0YsQ0FBQzs7MEZBdkJXLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVU7O0FBMkJYLE1BQU0sZUFBZ0IsU0FBUSxVQUFVO0lBV3ZDLFlBQWEsS0FBVSxFQUFVLFNBQXFCO1FBQ3JELEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztRQURpQixjQUFTLEdBQVQsU0FBUyxDQUFZO0lBRXRELENBQUM7SUFYRCxJQUFJLFFBQVE7UUFDWCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFL0MsT0FBTztZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUc7U0FDckMsQ0FBQztJQUNMLENBQUM7SUFNRCxJQUFJO1FBQ0gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTFCLE1BQU0sWUFBWSxHQUNqQixDQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFO1lBQ3hDLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUM7UUFFM0QsSUFBSSxZQUFZLEVBQUU7WUFDakIsT0FBTztTQUNQO1FBRUQsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ2YsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxDQUFBO1FBQ3RDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFFLENBQUE7UUFDakQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUUsQ0FBQTtRQUVwRCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDaEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENoYXJ0SnNFeHRlbnNpb24sIEJhc2VEcmF3ZXIgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQuc3RvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhY2tiYWxsRHJhd2VyUGx1Z2luIGV4dGVuZHMgQ2hhcnRKc0V4dGVuc2lvbiB7XHJcblxyXG5cdHRyYWNrYmFsbDogTW91c2VFdmVudDtcclxuXHRwb3NTdWJzOiBTdWJzY3JpcHRpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBzdG9yZTogQ2hhcnRTdG9yZSApe1xyXG5cdFx0c3VwZXIoIHN0b3JlICk7XHJcblxyXG5cdFx0dGhpcy5wb3NTdWJzID0gc3RvcmVcclxuXHRcdFx0Lm1vdXNlXHJcblx0XHRcdC5ob3ZlciRcclxuXHRcdFx0LnN1YnNjcmliZSggeCA9PiB0aGlzLnRyYWNrYmFsbCA9IHggKTtcclxuXHR9XHJcblxyXG5cdGZpbmFsaXplKCl7XHJcblx0XHRzdXBlci5maW5hbGl6ZSgpO1xyXG5cdFx0dGhpcy5wb3NTdWJzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cdFxyXG5cdGFmdGVyRGF0YXNldHNEcmF3KGNoYXJ0LCBfKSB7XHJcblx0XHRpZiggdGhpcy50cmFja2JhbGwgKXtcclxuXHRcdFx0bmV3IFRyYWNrYmFsbERyYXdlciggY2hhcnQsIHRoaXMudHJhY2tiYWxsICkuZHJhdygpXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBUcmFja2JhbGxEcmF3ZXIgZXh0ZW5kcyBCYXNlRHJhd2Vye1xyXG5cclxuXHRnZXQgcG9zaXRpb24oKXtcclxuXHRcdGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogdGhpcy50cmFja2JhbGwuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgeTogdGhpcy50cmFja2JhbGwuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICB9O1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoIGNoYXJ0OiBhbnksIHByaXZhdGUgdHJhY2tiYWxsOiBNb3VzZUV2ZW50ICl7XHJcblx0XHRzdXBlciggY2hhcnQgKTtcclxuXHR9XHJcblxyXG5cdGRyYXcoKXtcclxuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblx0XHRjb25zdCBwb3MgPSB0aGlzLnBvc2l0aW9uO1xyXG5cclxuXHRcdGNvbnN0IHNob3VsZElnbm9yZSA9IFxyXG5cdFx0XHQoIDAgPT0gdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzLmxlbmd0aCApIHx8XHJcblx0XHRcdCggcG9zLnggPCB0aGlzLnNjYWxlWC5sZWZ0IHx8IHBvcy54ID4gdGhpcy5zY2FsZVgucmlnaHQgKTtcclxuXHJcblx0XHRpZiggc2hvdWxkSWdub3JlICl7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsdyA9IDAuODtcclxuXHRcdGNvbnN0IHggPSB0aGlzLmFsaWduUGl4ZWwoIHBvcy54LCBsdyApXHJcblx0XHRjb25zdCB5MSA9IHRoaXMuYWxpZ25QaXhlbCggdGhpcy5zY2FsZVkudG9wLCBsdyApXHJcblx0XHRjb25zdCB5MiA9IHRoaXMuYWxpZ25QaXhlbCggdGhpcy5zY2FsZVkuYm90dG9tLCBsdyApXHJcblxyXG5cdFx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRcdGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiM4ODAwMTVcIjtcclxuXHRcdGNvbnRleHQubGluZVdpZHRoID0gbHc7XHJcblx0XHRjb250ZXh0Lm1vdmVUbyggeCwgeTEgKTtcclxuXHRcdGNvbnRleHQubGluZVRvKCB4LCB5Mik7XHJcblx0XHRjb250ZXh0LnN0cm9rZSgpO1xyXG5cdH1cclxufSJdfQ==