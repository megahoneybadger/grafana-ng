import { Inject, Injectable } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../data/data-provider";
import * as i2 from "../view/display-manager";
import * as i3 from "./mouse.store";
export class ChartStore {
    constructor(dataProvider, display, mouse, panel) {
        this.dataProvider = dataProvider;
        this.display = display;
        this.mouse = mouse;
        this.panel = panel;
        this.widget = new BehaviorSubject(null);
        this.widget$ = this.widget.asObservable();
        this.data = new BehaviorSubject(null);
        this.data$ = this.data.asObservable();
        dataProvider
            .data$
            .subscribe(x => { var _a; return this.data.next((_a = x === null || x === void 0 ? void 0 : x.datasets) !== null && _a !== void 0 ? _a : []); });
        this.widget.next(panel.widget);
    }
    destroy() {
        this.dataProvider.destroy();
        this.widget.value.component = undefined;
    }
}
ChartStore.ɵfac = function ChartStore_Factory(t) { return new (t || ChartStore)(i0.ɵɵinject(i1.DataProvider), i0.ɵɵinject(i2.DisplayManager), i0.ɵɵinject(i3.MouseStore), i0.ɵɵinject(PANEL_TOKEN)); };
ChartStore.ɵprov = i0.ɵɵdefineInjectable({ token: ChartStore, factory: ChartStore.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartStore, [{
        type: Injectable
    }], function () { return [{ type: i1.DataProvider }, { type: i2.DisplayManager }, { type: i3.MouseStore }, { type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFRbkQsTUFBTSxPQUFPLFVBQVU7SUFRdEIsWUFDUSxZQUEwQixFQUMxQixPQUF1QixFQUN2QixLQUFpQixFQUNNLEtBQVk7UUFIbkMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNNLFVBQUssR0FBTCxLQUFLLENBQU87UUFWbkMsV0FBTSxHQUEyQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxZQUFPLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekQsU0FBSSxHQUErQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxVQUFLLEdBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFRL0QsWUFBWTthQUNWLEtBQUs7YUFDTCxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBQyxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFFLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxRQUFRLG1DQUFJLEVBQUUsQ0FBRSxDQUFBLEVBQUEsQ0FBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDOztvRUF4QlcsVUFBVSx3R0FZWixXQUFXO2tEQVpULFVBQVUsV0FBVixVQUFVO2tEQUFWLFVBQVU7Y0FEdEIsVUFBVTs7c0JBYVIsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENoYXJ0LCBEYXRhU2V0IH0gZnJvbSAnLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuLi9kYXRhL2RhdGEtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGlzcGxheU1hbmFnZXIgfSBmcm9tICcuLi92aWV3L2Rpc3BsYXktbWFuYWdlcic7XG5pbXBvcnQgeyBNb3VzZVN0b3JlIH0gZnJvbSAnLi9tb3VzZS5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFydFN0b3JlIHtcblxuXHRwcml2YXRlIHdpZGdldDogQmVoYXZpb3JTdWJqZWN0PENoYXJ0PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IHdpZGdldCQ6IE9ic2VydmFibGU8Q2hhcnQ+ID0gdGhpcy53aWRnZXQuYXNPYnNlcnZhYmxlKCk7XG5cdFxuXHRwcml2YXRlIGRhdGE6IEJlaGF2aW9yU3ViamVjdDxEYXRhU2V0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0cmVhZG9ubHkgZGF0YSQ6IE9ic2VydmFibGU8RGF0YVNldFtdPiA9IHRoaXMuZGF0YS5hc09ic2VydmFibGUoKTtcblxuXHRjb25zdHJ1Y3RvciggXG5cdFx0cHVibGljIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyLFxuXHRcdHB1YmxpYyBkaXNwbGF5OiBEaXNwbGF5TWFuYWdlcixcblx0XHRwdWJsaWMgbW91c2U6IE1vdXNlU3RvcmUsXG5cdFx0QEluamVjdCggUEFORUxfVE9LRU4gKSBwdWJsaWMgcGFuZWw6IFBhbmVsICl7XG5cblx0XHRcdGRhdGFQcm92aWRlclxuXHRcdFx0XHQuZGF0YSRcblx0XHRcdFx0LnN1YnNjcmliZSggeCA9PiB0aGlzLmRhdGEubmV4dCggeD8uZGF0YXNldHMgPz8gW10gKSApO1xuXG5cdFx0XHR0aGlzLndpZGdldC5uZXh0KCBwYW5lbC53aWRnZXQgKTtcblx0fVxuXG5cdGRlc3Ryb3koKXtcblx0XHR0aGlzLmRhdGFQcm92aWRlci5kZXN0cm95KCk7XG5cdFx0dGhpcy53aWRnZXQudmFsdWUuY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuXHR9XG59XG4iXX0=