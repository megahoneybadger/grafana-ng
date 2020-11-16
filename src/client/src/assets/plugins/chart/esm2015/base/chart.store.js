import { Inject, Injectable } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "common";
import * as i2 from "../data/data-provider";
import * as i3 from "../view/display-manager";
import * as i4 from "./mouse.store";
export class ChartStore {
    constructor(dashboardStore, dataProvider, display, annotationStore, mouse, panel) {
        this.dashboardStore = dashboardStore;
        this.dataProvider = dataProvider;
        this.display = display;
        this.annotationStore = annotationStore;
        this.mouse = mouse;
        this.panel = panel;
        this.data = new BehaviorSubject(null);
        this.data$ = this.data.asObservable();
        dataProvider
            .data$
            .subscribe(x => { var _a; return this.data.next((_a = x === null || x === void 0 ? void 0 : x.datasets) !== null && _a !== void 0 ? _a : []); });
        this.dashboardSubs = dashboardStore
            .dashboard$
            .subscribe(x => this.dashboardId = x === null || x === void 0 ? void 0 : x.id);
        this.annotSubs = annotationStore
            .annotationsUpdate$
            .subscribe(_ => this.refresh());
    }
    get widget() {
        return this.panel.widget;
    }
    destroy() {
        var _a, _b;
        (_a = this.dashboardSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.annotSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        this.dataProvider.destroy();
        this.widget.component = undefined;
    }
    refresh() {
        var _a, _b;
        (_b = (_a = this
            .widget
            .component) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.refresh();
    }
}
ChartStore.ɵfac = function ChartStore_Factory(t) { return new (t || ChartStore)(i0.ɵɵinject(i1.DashboardStore), i0.ɵɵinject(i2.DataProvider), i0.ɵɵinject(i3.DisplayManager), i0.ɵɵinject(i1.AnnotationStore), i0.ɵɵinject(i4.MouseStore), i0.ɵɵinject(PANEL_TOKEN)); };
ChartStore.ɵprov = i0.ɵɵdefineInjectable({ token: ChartStore, factory: ChartStore.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartStore, [{
        type: Injectable
    }], function () { return [{ type: i1.DashboardStore }, { type: i2.DataProvider }, { type: i3.DisplayManager }, { type: i1.AnnotationStore }, { type: i4.MouseStore }, { type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBeUIsV0FBVyxFQUFtQixNQUFNLFFBQVEsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUE0QixNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBUWpFLE1BQU0sT0FBTyxVQUFVO0lBWXRCLFlBQ1MsY0FBOEIsRUFDL0IsWUFBMEIsRUFDMUIsT0FBdUIsRUFDdkIsZUFBZ0MsRUFDaEMsS0FBaUIsRUFDTSxLQUFZO1FBTGxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNNLFVBQUssR0FBTCxLQUFLLENBQU87UUFqQm5DLFNBQUksR0FBK0IsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUQsVUFBSyxHQUEwQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBa0IvRCxZQUFZO2FBQ1YsS0FBSzthQUNMLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxXQUFDLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQUUsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFFBQVEsbUNBQUksRUFBRSxDQUFFLENBQUEsRUFBQSxDQUFFLENBQUM7UUFFeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFjO2FBQ2pDLFVBQVU7YUFDVixTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUU3QyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWU7YUFDOUIsa0JBQWtCO2FBQ2xCLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO0lBQ3JDLENBQUM7SUF2QkQsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBdUJELE9BQU87O1FBQ04sTUFBQSxJQUFJLENBQUMsYUFBYSwwQ0FBRSxXQUFXLEdBQUc7UUFDbEMsTUFBQSxJQUFJLENBQUMsU0FBUywwQ0FBRSxXQUFXLEdBQUc7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU87O1FBQ0osWUFBQSxJQUFJO2FBQ0QsTUFBTTthQUNOLFNBQVMsMENBQ1IsT0FBTywwQ0FDUCxPQUFPLEdBQUc7SUFDaEIsQ0FBQzs7b0VBOUNVLFVBQVUseUtBa0JaLFdBQVc7a0RBbEJULFVBQVUsV0FBVixVQUFVO2tEQUFWLFVBQVU7Y0FEdEIsVUFBVTs7c0JBbUJSLE1BQU07dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU3RvcmUsIFBhbmVsLCBQQU5FTF9UT0tFTiwgQW5ub3RhdGlvblN0b3JlIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENoYXJ0LCBEYXRhU2V0IH0gZnJvbSAnLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuLi9kYXRhL2RhdGEtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGlzcGxheU1hbmFnZXIgfSBmcm9tICcuLi92aWV3L2Rpc3BsYXktbWFuYWdlcic7XG5pbXBvcnQgeyBNb3VzZVN0b3JlIH0gZnJvbSAnLi9tb3VzZS5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFydFN0b3JlIHtcblx0cHJpdmF0ZSBkYXRhOiBCZWhhdmlvclN1YmplY3Q8RGF0YVNldFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IGRhdGEkOiBPYnNlcnZhYmxlPERhdGFTZXRbXT4gPSB0aGlzLmRhdGEuYXNPYnNlcnZhYmxlKCk7XG5cblx0ZGFzaGJvYXJkSWQ6IG51bWJlcjtcblx0ZGFzaGJvYXJkU3ViczogU3Vic2NyaXB0aW9uO1xuXHRhbm5vdFN1YnM6IFN1YnNjcmlwdGlvbjtcblxuXHRnZXQgd2lkZ2V0KCk6IENoYXJ0e1xuXHRcdHJldHVybiB0aGlzLnBhbmVsLndpZGdldDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBcblx0XHRwcml2YXRlIGRhc2hib2FyZFN0b3JlOiBEYXNoYm9hcmRTdG9yZSxcblx0XHRwdWJsaWMgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIsXG5cdFx0cHVibGljIGRpc3BsYXk6IERpc3BsYXlNYW5hZ2VyLFxuXHRcdHB1YmxpYyBhbm5vdGF0aW9uU3RvcmU6IEFubm90YXRpb25TdG9yZSxcblx0XHRwdWJsaWMgbW91c2U6IE1vdXNlU3RvcmUsXG5cdFx0QEluamVjdCggUEFORUxfVE9LRU4gKSBwdWJsaWMgcGFuZWw6IFBhbmVsICl7XG5cblx0XHRcdGRhdGFQcm92aWRlclxuXHRcdFx0XHQuZGF0YSRcblx0XHRcdFx0LnN1YnNjcmliZSggeCA9PiB0aGlzLmRhdGEubmV4dCggeD8uZGF0YXNldHMgPz8gW10gKSApO1xuXG5cdFx0XHR0aGlzLmRhc2hib2FyZFN1YnMgPSBkYXNoYm9hcmRTdG9yZVxuXHRcdFx0XHQuZGFzaGJvYXJkJFxuXHRcdFx0XHQuc3Vic2NyaWJlKCB4ID0+IHRoaXMuZGFzaGJvYXJkSWQgPSB4Py5pZCApO1xuXG5cdFx0XHR0aGlzLmFubm90U3VicyA9IGFubm90YXRpb25TdG9yZVxuXHRcdFx0XHQuYW5ub3RhdGlvbnNVcGRhdGUkXG5cdFx0XHRcdC5zdWJzY3JpYmUoIF8gPT4gdGhpcy5yZWZyZXNoKCkgKTtcblx0fVxuXG5cdGRlc3Ryb3koKXtcblx0XHR0aGlzLmRhc2hib2FyZFN1YnM/LnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5hbm5vdFN1YnM/LnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5kYXRhUHJvdmlkZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMud2lkZ2V0LmNvbXBvbmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJlZnJlc2goKXtcbiAgICB0aGlzXG4gICAgICAud2lkZ2V0XG4gICAgICAuY29tcG9uZW50XG4gICAgICA/LmNvbnRyb2xcbiAgICAgID8ucmVmcmVzaCgpO1xuICB9XG59XG4iXX0=