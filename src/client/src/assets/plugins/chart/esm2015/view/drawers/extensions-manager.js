import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./thresholds";
import * as i2 from "./trackball";
import * as i3 from "./time-regions";
import * as i4 from "./alert";
import * as i5 from "./annotations";
import * as i6 from "./drag";
export class ExtensionsManager {
    constructor(thresholds, trackball, timeRegions, alerts, annotations, drag) {
        this.thresholds = thresholds;
        this.trackball = trackball;
        this.timeRegions = timeRegions;
        this.alerts = alerts;
        this.annotations = annotations;
        this.drag = drag;
    }
    get list() {
        return [
            this.thresholds,
            this.timeRegions,
            this.alerts,
            this.annotations,
            this.trackball,
            this.drag
        ];
    }
    destroy() {
        this.list.forEach(x => x.finalize());
    }
}
ExtensionsManager.ɵfac = function ExtensionsManager_Factory(t) { return new (t || ExtensionsManager)(i0.ɵɵinject(i1.ThresholdDrawerPlugin), i0.ɵɵinject(i2.TrackballDrawerPlugin), i0.ɵɵinject(i3.TimeRegionsDrawerPlugin), i0.ɵɵinject(i4.AlertDrawerPlugin), i0.ɵɵinject(i5.AnnotationDrawerPlugin), i0.ɵɵinject(i6.DragRangeDrawerPlugin)); };
ExtensionsManager.ɵprov = i0.ɵɵdefineInjectable({ token: ExtensionsManager, factory: ExtensionsManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExtensionsManager, [{
        type: Injectable
    }], function () { return [{ type: i1.ThresholdDrawerPlugin }, { type: i2.TrackballDrawerPlugin }, { type: i3.TimeRegionsDrawerPlugin }, { type: i4.AlertDrawerPlugin }, { type: i5.AnnotationDrawerPlugin }, { type: i6.DragRangeDrawerPlugin }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucy1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9kcmF3ZXJzL2V4dGVuc2lvbnMtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVMzQyxNQUFNLE9BQU8saUJBQWlCO0lBYTdCLFlBQ1MsVUFBaUMsRUFDakMsU0FBZ0MsRUFDaEMsV0FBb0MsRUFDcEMsTUFBeUIsRUFDekIsV0FBbUMsRUFDbkMsSUFBMkI7UUFMM0IsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBdUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUF3QjtRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUF1QjtJQUVwQyxDQUFDO0lBbkJELElBQUksSUFBSTtRQUNQLE9BQU87WUFDTixJQUFJLENBQUMsVUFBVTtZQUNmLElBQUksQ0FBQyxXQUFXO1lBQ2hCLElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLFdBQVc7WUFDaEIsSUFBSSxDQUFDLFNBQVM7WUFDZCxJQUFJLENBQUMsSUFBSTtTQUNULENBQUE7SUFDRixDQUFDO0lBWUQsT0FBTztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUM7SUFDeEMsQ0FBQzs7a0ZBekJXLGlCQUFpQjt5REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0RHJhd2VyUGx1Z2luIH0gZnJvbSAnLi9hbGVydCc7XHJcbmltcG9ydCB7IEFubm90YXRpb25EcmF3ZXJQbHVnaW4gfSBmcm9tICcuL2Fubm90YXRpb25zJztcclxuaW1wb3J0IHsgRHJhZ1JhbmdlRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi9kcmFnJztcclxuaW1wb3J0IHsgVGhyZXNob2xkRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi90aHJlc2hvbGRzJztcclxuaW1wb3J0IHsgVGltZVJlZ2lvbnNEcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3RpbWUtcmVnaW9ucyc7XHJcbmltcG9ydCB7IFRyYWNrYmFsbERyYXdlclBsdWdpbiB9IGZyb20gJy4vdHJhY2tiYWxsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbnNNYW5hZ2VyIHtcclxuXHRcclxuXHRnZXQgbGlzdCgpIDogQ2hhcnRKc0V4dGVuc2lvbltdIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHRoaXMudGhyZXNob2xkcyxcclxuXHRcdFx0dGhpcy50aW1lUmVnaW9ucyxcclxuXHRcdFx0dGhpcy5hbGVydHMsXHJcblx0XHRcdHRoaXMuYW5ub3RhdGlvbnMsXHJcblx0XHRcdHRoaXMudHJhY2tiYWxsLFxyXG5cdFx0XHR0aGlzLmRyYWdcclxuXHRcdF1cclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBcclxuXHRcdHByaXZhdGUgdGhyZXNob2xkczogVGhyZXNob2xkRHJhd2VyUGx1Z2luLFxyXG5cdFx0cHJpdmF0ZSB0cmFja2JhbGw6IFRyYWNrYmFsbERyYXdlclBsdWdpbixcclxuXHRcdHByaXZhdGUgdGltZVJlZ2lvbnM6IFRpbWVSZWdpb25zRHJhd2VyUGx1Z2luLFxyXG5cdFx0cHJpdmF0ZSBhbGVydHM6IEFsZXJ0RHJhd2VyUGx1Z2luLFxyXG5cdFx0cHJpdmF0ZSBhbm5vdGF0aW9uczogQW5ub3RhdGlvbkRyYXdlclBsdWdpbixcclxuXHRcdHByaXZhdGUgZHJhZzogRHJhZ1JhbmdlRHJhd2VyUGx1Z2luICl7XHJcblxyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpe1xyXG5cdFx0dGhpcy5saXN0LmZvckVhY2goIHggPT4geC5maW5hbGl6ZSgpICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0SnNFeHRlbnNpb257XHJcblx0YWZ0ZXJEYXRhc2V0c0RyYXcoY2hhcnQsIGVhc2luZyk7XHJcblx0ZmluYWxpemUoKTtcclxufSJdfQ==