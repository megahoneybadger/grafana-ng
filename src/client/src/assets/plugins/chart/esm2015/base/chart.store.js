import { Inject, Injectable } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../view/data/data-provider";
import * as i2 from "../view/render/display-manager";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQU9uRCxNQUFNLE9BQU8sVUFBVTtJQVF0QixZQUNRLFlBQTBCLEVBQzFCLE9BQXVCLEVBQ0EsS0FBWTtRQUZuQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUNBLFVBQUssR0FBTCxLQUFLLENBQU87UUFUbkMsV0FBTSxHQUEyQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxZQUFPLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekQsU0FBSSxHQUErQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxVQUFLLEdBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPL0QsWUFBWTthQUNWLEtBQUs7YUFDTCxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBQyxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFFLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxRQUFRLG1DQUFJLEVBQUUsQ0FBRSxDQUFBLEVBQUEsQ0FBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDOztvRUF2QlcsVUFBVSw0RUFXWixXQUFXO2tEQVhULFVBQVUsV0FBVixVQUFVO2tEQUFWLFVBQVU7Y0FEdEIsVUFBVTs7c0JBWVIsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgVUlDaGFydCB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NoYXJ0LmMnO1xuaW1wb3J0IHsgQ2hhcnQsIERhdGFTZXQgfSBmcm9tICcuLi9jaGFydC5tJztcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4uL3ZpZXcvZGF0YS9kYXRhLXByb3ZpZGVyJztcbmltcG9ydCB7IERpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi4vdmlldy9yZW5kZXIvZGlzcGxheS1tYW5hZ2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXJ0U3RvcmUge1xuXG5cdHByaXZhdGUgd2lkZ2V0OiBCZWhhdmlvclN1YmplY3Q8Q2hhcnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0cmVhZG9ubHkgd2lkZ2V0JDogT2JzZXJ2YWJsZTxDaGFydD4gPSB0aGlzLndpZGdldC5hc09ic2VydmFibGUoKTtcblx0XG5cdHByaXZhdGUgZGF0YTogQmVoYXZpb3JTdWJqZWN0PERhdGFTZXRbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHRyZWFkb25seSBkYXRhJDogT2JzZXJ2YWJsZTxEYXRhU2V0W10+ID0gdGhpcy5kYXRhLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdGNvbnN0cnVjdG9yKCBcblx0XHRwdWJsaWMgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIsXG5cdFx0cHVibGljIGRpc3BsYXk6IERpc3BsYXlNYW5hZ2VyLFxuXHRcdEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcHVibGljIHBhbmVsOiBQYW5lbCApe1xuXG5cdFx0XHRkYXRhUHJvdmlkZXJcblx0XHRcdFx0LmRhdGEkXG5cdFx0XHRcdC5zdWJzY3JpYmUoIHggPT4gdGhpcy5kYXRhLm5leHQoIHg/LmRhdGFzZXRzID8/IFtdICkgKTtcblxuXHRcdFx0dGhpcy53aWRnZXQubmV4dCggcGFuZWwud2lkZ2V0ICk7XG5cdH1cblxuXHRkZXN0cm95KCl7XG5cdFx0dGhpcy5kYXRhUHJvdmlkZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMud2lkZ2V0LnZhbHVlLmNvbXBvbmVudCA9IHVuZGVmaW5lZDtcblx0fVxufVxuIl19