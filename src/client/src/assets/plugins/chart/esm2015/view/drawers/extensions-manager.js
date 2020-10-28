import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./thresholds";
import * as i2 from "./trackball";
import * as i3 from "./time-regions";
export class ExtensionsManager {
    constructor(thresholds, trackball, timeRegions) {
        this.thresholds = thresholds;
        this.trackball = trackball;
        this.timeRegions = timeRegions;
    }
    get list() {
        return [
            this.thresholds,
            this.timeRegions
        ];
    }
    destroy() {
        this.list.forEach(x => x.destroy());
    }
}
ExtensionsManager.ɵfac = function ExtensionsManager_Factory(t) { return new (t || ExtensionsManager)(i0.ɵɵinject(i1.ThresholdDrawerPlugin), i0.ɵɵinject(i2.TrackballDrawerPlugin), i0.ɵɵinject(i3.TimeRegionsDrawerPlugin)); };
ExtensionsManager.ɵprov = i0.ɵɵdefineInjectable({ token: ExtensionsManager, factory: ExtensionsManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExtensionsManager, [{
        type: Injectable
    }], function () { return [{ type: i1.ThresholdDrawerPlugin }, { type: i2.TrackballDrawerPlugin }, { type: i3.TimeRegionsDrawerPlugin }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucy1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9kcmF3ZXJzL2V4dGVuc2lvbnMtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU0zQyxNQUFNLE9BQU8saUJBQWlCO0lBUzdCLFlBQ1MsVUFBaUMsRUFDakMsU0FBZ0MsRUFDaEMsV0FBb0M7UUFGcEMsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBdUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO0lBRTdDLENBQUM7SUFaRCxJQUFJLElBQUk7UUFDUCxPQUFPO1lBQ04sSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsV0FBVztTQUNoQixDQUFBO0lBQ0YsQ0FBQztJQVNELE9BQU87UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO0lBQ3ZDLENBQUM7O2tGQWxCVyxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaHJlc2hvbGREcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3RocmVzaG9sZHMnO1xyXG5pbXBvcnQgeyBUaW1lUmVnaW9uc0RyYXdlclBsdWdpbiB9IGZyb20gJy4vdGltZS1yZWdpb25zJztcclxuaW1wb3J0IHsgVHJhY2tiYWxsRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi90cmFja2JhbGwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc01hbmFnZXIge1xyXG5cdFxyXG5cdGdldCBsaXN0KCkgOiBDaGFydEpzRXh0ZW5zaW9uW10ge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0dGhpcy50aHJlc2hvbGRzLFxyXG5cdFx0XHR0aGlzLnRpbWVSZWdpb25zXHJcblx0XHRdXHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvciggXHJcblx0XHRwcml2YXRlIHRocmVzaG9sZHM6IFRocmVzaG9sZERyYXdlclBsdWdpbixcclxuXHRcdHByaXZhdGUgdHJhY2tiYWxsOiBUcmFja2JhbGxEcmF3ZXJQbHVnaW4sXHJcblx0XHRwcml2YXRlIHRpbWVSZWdpb25zOiBUaW1lUmVnaW9uc0RyYXdlclBsdWdpbiApe1xyXG5cclxuXHR9XHJcblxyXG5cdGRlc3Ryb3koKXtcclxuXHRcdHRoaXMubGlzdC5mb3JFYWNoKCB4ID0+IHguZGVzdHJveSgpICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0SnNFeHRlbnNpb257XHJcblx0YWZ0ZXJEYXRhc2V0c0RyYXcoY2hhcnQsIGVhc2luZyk7XHJcblx0ZGVzdHJveSgpO1xyXG59Il19