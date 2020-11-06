import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./thresholds";
import * as i2 from "./trackball";
import * as i3 from "./time-regions";
import * as i4 from "./alert";
export class ExtensionsManager {
    constructor(thresholds, trackball, timeRegions, alerts) {
        this.thresholds = thresholds;
        this.trackball = trackball;
        this.timeRegions = timeRegions;
        this.alerts = alerts;
    }
    get list() {
        return [
            this.thresholds,
            this.timeRegions,
            this.alerts
        ];
    }
    destroy() {
        this.list.forEach(x => x.destroy());
    }
}
ExtensionsManager.ɵfac = function ExtensionsManager_Factory(t) { return new (t || ExtensionsManager)(i0.ɵɵinject(i1.ThresholdDrawerPlugin), i0.ɵɵinject(i2.TrackballDrawerPlugin), i0.ɵɵinject(i3.TimeRegionsDrawerPlugin), i0.ɵɵinject(i4.AlertDrawerPlugin)); };
ExtensionsManager.ɵprov = i0.ɵɵdefineInjectable({ token: ExtensionsManager, factory: ExtensionsManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExtensionsManager, [{
        type: Injectable
    }], function () { return [{ type: i1.ThresholdDrawerPlugin }, { type: i2.TrackballDrawerPlugin }, { type: i3.TimeRegionsDrawerPlugin }, { type: i4.AlertDrawerPlugin }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucy1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9kcmF3ZXJzL2V4dGVuc2lvbnMtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPM0MsTUFBTSxPQUFPLGlCQUFpQjtJQVU3QixZQUNTLFVBQWlDLEVBQ2pDLFNBQWdDLEVBQ2hDLFdBQW9DLEVBQ3BDLE1BQXlCO1FBSHpCLGVBQVUsR0FBVixVQUFVLENBQXVCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUVsQyxDQUFDO0lBZEQsSUFBSSxJQUFJO1FBQ1AsT0FBTztZQUNOLElBQUksQ0FBQyxVQUFVO1lBQ2YsSUFBSSxDQUFDLFdBQVc7WUFDaEIsSUFBSSxDQUFDLE1BQU07U0FDWCxDQUFBO0lBQ0YsQ0FBQztJQVVELE9BQU87UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO0lBQ3ZDLENBQUM7O2tGQXBCVyxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydERyYXdlclBsdWdpbiB9IGZyb20gJy4vYWxlcnQnO1xyXG5pbXBvcnQgeyBUaHJlc2hvbGREcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3RocmVzaG9sZHMnO1xyXG5pbXBvcnQgeyBUaW1lUmVnaW9uc0RyYXdlclBsdWdpbiB9IGZyb20gJy4vdGltZS1yZWdpb25zJztcclxuaW1wb3J0IHsgVHJhY2tiYWxsRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi90cmFja2JhbGwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc01hbmFnZXIge1xyXG5cdFxyXG5cdGdldCBsaXN0KCkgOiBDaGFydEpzRXh0ZW5zaW9uW10ge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0dGhpcy50aHJlc2hvbGRzLFxyXG5cdFx0XHR0aGlzLnRpbWVSZWdpb25zLFxyXG5cdFx0XHR0aGlzLmFsZXJ0c1xyXG5cdFx0XVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoIFxyXG5cdFx0cHJpdmF0ZSB0aHJlc2hvbGRzOiBUaHJlc2hvbGREcmF3ZXJQbHVnaW4sXHJcblx0XHRwcml2YXRlIHRyYWNrYmFsbDogVHJhY2tiYWxsRHJhd2VyUGx1Z2luLFxyXG5cdFx0cHJpdmF0ZSB0aW1lUmVnaW9uczogVGltZVJlZ2lvbnNEcmF3ZXJQbHVnaW4sXHJcblx0XHRwcml2YXRlIGFsZXJ0czogQWxlcnREcmF3ZXJQbHVnaW4gKXtcclxuXHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCl7XHJcblx0XHR0aGlzLmxpc3QuZm9yRWFjaCggeCA9PiB4LmRlc3Ryb3koKSApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFydEpzRXh0ZW5zaW9ue1xyXG5cdGFmdGVyRGF0YXNldHNEcmF3KGNoYXJ0LCBlYXNpbmcpO1xyXG5cdGRlc3Ryb3koKTtcclxufSJdfQ==