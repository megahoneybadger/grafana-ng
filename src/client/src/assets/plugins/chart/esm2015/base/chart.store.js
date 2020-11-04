import { Inject, Injectable } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../data/data-provider";
import * as i2 from "../view/display-manager";
export class ChartStore {
    constructor(dataProvider, display, panel) {
        this.dataProvider = dataProvider;
        this.display = display;
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
ChartStore.ɵfac = function ChartStore_Factory(t) { return new (t || ChartStore)(i0.ɵɵinject(i1.DataProvider), i0.ɵɵinject(i2.DisplayManager), i0.ɵɵinject(PANEL_TOKEN)); };
ChartStore.ɵprov = i0.ɵɵdefineInjectable({ token: ChartStore, factory: ChartStore.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartStore, [{
        type: Injectable
    }], function () { return [{ type: i1.DataProvider }, { type: i2.DisplayManager }, { type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQU9uRCxNQUFNLE9BQU8sVUFBVTtJQVF0QixZQUNRLFlBQTBCLEVBQzFCLE9BQXVCLEVBQ0EsS0FBWTtRQUZuQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUNBLFVBQUssR0FBTCxLQUFLLENBQU87UUFUbkMsV0FBTSxHQUEyQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxZQUFPLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekQsU0FBSSxHQUErQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxVQUFLLEdBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPL0QsWUFBWTthQUNWLEtBQUs7YUFDTCxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBQyxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFFLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxRQUFRLG1DQUFJLEVBQUUsQ0FBRSxDQUFBLEVBQUEsQ0FBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDOztvRUF2QlcsVUFBVSw0RUFXWixXQUFXO2tEQVhULFVBQVUsV0FBVixVQUFVO2tEQUFWLFVBQVU7Y0FEdEIsVUFBVTs7c0JBWVIsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENoYXJ0LCBEYXRhU2V0IH0gZnJvbSAnLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuLi9kYXRhL2RhdGEtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGlzcGxheU1hbmFnZXIgfSBmcm9tICcuLi92aWV3L2Rpc3BsYXktbWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFydFN0b3JlIHtcblxuXHRwcml2YXRlIHdpZGdldDogQmVoYXZpb3JTdWJqZWN0PENoYXJ0PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IHdpZGdldCQ6IE9ic2VydmFibGU8Q2hhcnQ+ID0gdGhpcy53aWRnZXQuYXNPYnNlcnZhYmxlKCk7XG5cdFxuXHRwcml2YXRlIGRhdGE6IEJlaGF2aW9yU3ViamVjdDxEYXRhU2V0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0cmVhZG9ubHkgZGF0YSQ6IE9ic2VydmFibGU8RGF0YVNldFtdPiA9IHRoaXMuZGF0YS5hc09ic2VydmFibGUoKTtcblxuXHRjb25zdHJ1Y3RvciggXG5cdFx0cHVibGljIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyLFxuXHRcdHB1YmxpYyBkaXNwbGF5OiBEaXNwbGF5TWFuYWdlcixcblx0XHRASW5qZWN0KCBQQU5FTF9UT0tFTiApIHB1YmxpYyBwYW5lbDogUGFuZWwgKXtcblxuXHRcdFx0ZGF0YVByb3ZpZGVyXG5cdFx0XHRcdC5kYXRhJFxuXHRcdFx0XHQuc3Vic2NyaWJlKCB4ID0+IHRoaXMuZGF0YS5uZXh0KCB4Py5kYXRhc2V0cyA/PyBbXSApICk7XG5cblx0XHRcdHRoaXMud2lkZ2V0Lm5leHQoIHBhbmVsLndpZGdldCApO1xuXHR9XG5cblx0ZGVzdHJveSgpe1xuXHRcdHRoaXMuZGF0YVByb3ZpZGVyLmRlc3Ryb3koKTtcblx0XHR0aGlzLndpZGdldC52YWx1ZS5jb21wb25lbnQgPSB1bmRlZmluZWQ7XG5cdH1cbn1cbiJdfQ==