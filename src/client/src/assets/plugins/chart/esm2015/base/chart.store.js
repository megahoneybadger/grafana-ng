import { Inject, Injectable } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../view/data/data-provider";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQU9uRCxNQUFNLE9BQU8sVUFBVTtJQVF0QixZQUNRLFlBQTBCLEVBQzFCLE9BQXVCLEVBQ0EsS0FBWTtRQUZuQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUNBLFVBQUssR0FBTCxLQUFLLENBQU87UUFUbkMsV0FBTSxHQUEyQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxZQUFPLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekQsU0FBSSxHQUErQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxVQUFLLEdBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPL0QsWUFBWTthQUNWLEtBQUs7YUFDTCxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBQyxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFFLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxRQUFRLG1DQUFJLEVBQUUsQ0FBRSxDQUFBLEVBQUEsQ0FBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDOztvRUF2QlcsVUFBVSw0RUFXWixXQUFXO2tEQVhULFVBQVUsV0FBVixVQUFVO2tEQUFWLFVBQVU7Y0FEdEIsVUFBVTs7c0JBWVIsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgVUlDaGFydCB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NoYXJ0LmMnO1xuaW1wb3J0IHsgQ2hhcnQsIERhdGFTZXQgfSBmcm9tICcuLi9jaGFydC5tJztcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4uL3ZpZXcvZGF0YS9kYXRhLXByb3ZpZGVyJztcbmltcG9ydCB7IERpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi4vdmlldy9kaXNwbGF5LW1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhcnRTdG9yZSB7XG5cblx0cHJpdmF0ZSB3aWRnZXQ6IEJlaGF2aW9yU3ViamVjdDxDaGFydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHRyZWFkb25seSB3aWRnZXQkOiBPYnNlcnZhYmxlPENoYXJ0PiA9IHRoaXMud2lkZ2V0LmFzT2JzZXJ2YWJsZSgpO1xuXHRcblx0cHJpdmF0ZSBkYXRhOiBCZWhhdmlvclN1YmplY3Q8RGF0YVNldFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IGRhdGEkOiBPYnNlcnZhYmxlPERhdGFTZXRbXT4gPSB0aGlzLmRhdGEuYXNPYnNlcnZhYmxlKCk7XG5cblx0Y29uc3RydWN0b3IoIFxuXHRcdHB1YmxpYyBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlcixcblx0XHRwdWJsaWMgZGlzcGxheTogRGlzcGxheU1hbmFnZXIsXG5cdFx0QEluamVjdCggUEFORUxfVE9LRU4gKSBwdWJsaWMgcGFuZWw6IFBhbmVsICl7XG5cblx0XHRcdGRhdGFQcm92aWRlclxuXHRcdFx0XHQuZGF0YSRcblx0XHRcdFx0LnN1YnNjcmliZSggeCA9PiB0aGlzLmRhdGEubmV4dCggeD8uZGF0YXNldHMgPz8gW10gKSApO1xuXG5cdFx0XHR0aGlzLndpZGdldC5uZXh0KCBwYW5lbC53aWRnZXQgKTtcblx0fVxuXG5cdGRlc3Ryb3koKXtcblx0XHR0aGlzLmRhdGFQcm92aWRlci5kZXN0cm95KCk7XG5cdFx0dGhpcy53aWRnZXQudmFsdWUuY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuXHR9XG59XG4iXX0=