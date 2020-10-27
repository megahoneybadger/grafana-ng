import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./thresholds-drawer";
import * as i2 from "./trackball-drawer";
export class ExtensionsManager {
    constructor(thresholds, trackball) {
        this.thresholds = thresholds;
        this.trackball = trackball;
    }
    get list() {
        return [
            this.thresholds
        ];
    }
    destroy() {
        this.list.forEach(x => x.destroy());
    }
}
ExtensionsManager.ɵfac = function ExtensionsManager_Factory(t) { return new (t || ExtensionsManager)(i0.ɵɵinject(i1.ThresholdDrawerPlugin), i0.ɵɵinject(i2.TrackballDrawerPlugin)); };
ExtensionsManager.ɵprov = i0.ɵɵdefineInjectable({ token: ExtensionsManager, factory: ExtensionsManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExtensionsManager, [{
        type: Injectable
    }], function () { return [{ type: i1.ThresholdDrawerPlugin }, { type: i2.TrackballDrawerPlugin }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucy1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9leHRlbnNpb25zL2V4dGVuc2lvbnMtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFRN0IsWUFDUyxVQUFpQyxFQUNqQyxTQUFnQztRQURoQyxlQUFVLEdBQVYsVUFBVSxDQUF1QjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUF1QjtJQUV6QyxDQUFDO0lBVkQsSUFBSSxJQUFJO1FBQ1AsT0FBTztZQUNOLElBQUksQ0FBQyxVQUFVO1NBQ2YsQ0FBQTtJQUNGLENBQUM7SUFRRCxPQUFPO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUUsQ0FBQztJQUN2QyxDQUFDOztrRkFoQlcsaUJBQWlCO3lEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhyZXNob2xkRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi90aHJlc2hvbGRzLWRyYXdlcic7XHJcbmltcG9ydCB7IFRyYWNrYmFsbERyYXdlclBsdWdpbiB9IGZyb20gJy4vdHJhY2tiYWxsLWRyYXdlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpb25zTWFuYWdlciB7XHJcblx0XHJcblx0Z2V0IGxpc3QoKSA6IENoYXJ0SnNFeHRlbnNpb25bXSB7XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHR0aGlzLnRocmVzaG9sZHNcclxuXHRcdF1cclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBcclxuXHRcdHByaXZhdGUgdGhyZXNob2xkczogVGhyZXNob2xkRHJhd2VyUGx1Z2luLFxyXG5cdFx0cHJpdmF0ZSB0cmFja2JhbGw6IFRyYWNrYmFsbERyYXdlclBsdWdpbiApe1xyXG5cclxuXHR9XHJcblxyXG5cdGRlc3Ryb3koKXtcclxuXHRcdHRoaXMubGlzdC5mb3JFYWNoKCB4ID0+IHguZGVzdHJveSgpICk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0SnNFeHRlbnNpb257XHJcblx0YWZ0ZXJEYXRhc2V0c0RyYXcoY2hhcnQsIGVhc2luZyk7XHJcblx0ZGVzdHJveSgpO1xyXG59Il19