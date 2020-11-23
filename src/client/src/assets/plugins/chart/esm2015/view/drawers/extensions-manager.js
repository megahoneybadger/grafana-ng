import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./thresholds";
import * as i2 from "./trackball";
import * as i3 from "./time-regions";
import * as i4 from "./alert";
import * as i5 from "./annotations";
import * as i6 from "./drag";
import * as i7 from "./no-content";
export class ExtensionsManager {
    constructor(thresholds, trackball, timeRegions, alerts, annotations, drag, noContent) {
        this.thresholds = thresholds;
        this.trackball = trackball;
        this.timeRegions = timeRegions;
        this.alerts = alerts;
        this.annotations = annotations;
        this.drag = drag;
        this.noContent = noContent;
    }
    get list() {
        return [
            this.thresholds,
            this.timeRegions,
            this.alerts,
            this.annotations,
            this.trackball,
            this.drag,
            this.noContent,
        ];
    }
    destroy() {
        this.list.forEach(x => x.finalize());
    }
}
ExtensionsManager.ɵfac = function ExtensionsManager_Factory(t) { return new (t || ExtensionsManager)(i0.ɵɵinject(i1.ThresholdDrawerPlugin), i0.ɵɵinject(i2.TrackballDrawerPlugin), i0.ɵɵinject(i3.TimeRegionsDrawerPlugin), i0.ɵɵinject(i4.AlertDrawerPlugin), i0.ɵɵinject(i5.AnnotationDrawerPlugin), i0.ɵɵinject(i6.DragRangeDrawerPlugin), i0.ɵɵinject(i7.NoContentPlugin)); };
ExtensionsManager.ɵprov = i0.ɵɵdefineInjectable({ token: ExtensionsManager, factory: ExtensionsManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExtensionsManager, [{
        type: Injectable
    }], function () { return [{ type: i1.ThresholdDrawerPlugin }, { type: i2.TrackballDrawerPlugin }, { type: i3.TimeRegionsDrawerPlugin }, { type: i4.AlertDrawerPlugin }, { type: i5.AnnotationDrawerPlugin }, { type: i6.DragRangeDrawerPlugin }, { type: i7.NoContentPlugin }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucy1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9kcmF3ZXJzL2V4dGVuc2lvbnMtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFXM0MsTUFBTSxPQUFPLGlCQUFpQjtJQWM3QixZQUNTLFVBQWlDLEVBQ2pDLFNBQWdDLEVBQ2hDLFdBQW9DLEVBQ3BDLE1BQXlCLEVBQ3pCLFdBQW1DLEVBQ25DLElBQTJCLEVBQzNCLFNBQTBCO1FBTjFCLGVBQVUsR0FBVixVQUFVLENBQXVCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBd0I7UUFDbkMsU0FBSSxHQUFKLElBQUksQ0FBdUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFFbkMsQ0FBQztJQXJCRCxJQUFJLElBQUk7UUFDUCxPQUFPO1lBQ04sSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsV0FBVztZQUNoQixJQUFJLENBQUMsTUFBTTtZQUNYLElBQUksQ0FBQyxXQUFXO1lBQ2hCLElBQUksQ0FBQyxTQUFTO1lBQ2QsSUFBSSxDQUFDLElBQUk7WUFDVCxJQUFJLENBQUMsU0FBUztTQUNkLENBQUE7SUFDRixDQUFDO0lBYUQsT0FBTztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUM7SUFDeEMsQ0FBQzs7a0ZBM0JXLGlCQUFpQjt5REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0SnNFeHRlbnNpb24gfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHsgQWxlcnREcmF3ZXJQbHVnaW4gfSBmcm9tICcuL2FsZXJ0JztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbkRyYXdlclBsdWdpbiB9IGZyb20gJy4vYW5ub3RhdGlvbnMnO1xyXG5pbXBvcnQgeyBEcmFnUmFuZ2VEcmF3ZXJQbHVnaW4gfSBmcm9tICcuL2RyYWcnO1xyXG5pbXBvcnQgeyBOb0NvbnRlbnRQbHVnaW4gfSBmcm9tICcuL25vLWNvbnRlbnQnO1xyXG5pbXBvcnQgeyBUaHJlc2hvbGREcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3RocmVzaG9sZHMnO1xyXG5pbXBvcnQgeyBUaW1lUmVnaW9uc0RyYXdlclBsdWdpbiB9IGZyb20gJy4vdGltZS1yZWdpb25zJztcclxuaW1wb3J0IHsgVHJhY2tiYWxsRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi90cmFja2JhbGwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc01hbmFnZXIge1xyXG5cdFxyXG5cdGdldCBsaXN0KCkgOiBDaGFydEpzRXh0ZW5zaW9uW10ge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0dGhpcy50aHJlc2hvbGRzLFxyXG5cdFx0XHR0aGlzLnRpbWVSZWdpb25zLFxyXG5cdFx0XHR0aGlzLmFsZXJ0cyxcclxuXHRcdFx0dGhpcy5hbm5vdGF0aW9ucyxcclxuXHRcdFx0dGhpcy50cmFja2JhbGwsXHJcblx0XHRcdHRoaXMuZHJhZyxcclxuXHRcdFx0dGhpcy5ub0NvbnRlbnQsXHJcblx0XHRdXHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvciggXHJcblx0XHRwcml2YXRlIHRocmVzaG9sZHM6IFRocmVzaG9sZERyYXdlclBsdWdpbixcclxuXHRcdHByaXZhdGUgdHJhY2tiYWxsOiBUcmFja2JhbGxEcmF3ZXJQbHVnaW4sXHJcblx0XHRwcml2YXRlIHRpbWVSZWdpb25zOiBUaW1lUmVnaW9uc0RyYXdlclBsdWdpbixcclxuXHRcdHByaXZhdGUgYWxlcnRzOiBBbGVydERyYXdlclBsdWdpbixcclxuXHRcdHByaXZhdGUgYW5ub3RhdGlvbnM6IEFubm90YXRpb25EcmF3ZXJQbHVnaW4sXHJcblx0XHRwcml2YXRlIGRyYWc6IERyYWdSYW5nZURyYXdlclBsdWdpbixcclxuXHRcdHByaXZhdGUgbm9Db250ZW50OiBOb0NvbnRlbnRQbHVnaW4gKXtcclxuXHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCl7XHJcblx0XHR0aGlzLmxpc3QuZm9yRWFjaCggeCA9PiB4LmZpbmFsaXplKCkgKTtcclxuXHR9XHJcbn1cclxuIl19