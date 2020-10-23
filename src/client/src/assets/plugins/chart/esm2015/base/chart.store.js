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
        this.control_ = new BehaviorSubject(null);
        this.control$ = this.control_.asObservable();
        dataProvider
            .data$
            .subscribe(x => { var _a; return this.data.next((_a = x === null || x === void 0 ? void 0 : x.datasets) !== null && _a !== void 0 ? _a : []); });
        this.widget.next(panel.widget);
    }
    get control() {
        return this.control_.value;
    }
    set control(ctrl) {
        this.control_.next(ctrl);
    }
    destroy() {
        this.dataProvider.destroy();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQU1uRCxNQUFNLE9BQU8sVUFBVTtJQW1CdEIsWUFDUSxZQUEwQixFQUMxQixPQUF1QixFQUNBLEtBQVk7UUFGbkMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDQSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBcEJuQyxXQUFNLEdBQTJCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELFlBQU8sR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCxTQUFJLEdBQStCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELFVBQUssR0FBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELGFBQVEsR0FBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQWVwRSxZQUFZO2FBQ1YsS0FBSzthQUNMLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxXQUFDLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQUUsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFFBQVEsbUNBQUksRUFBRSxDQUFFLENBQUEsRUFBQSxDQUFFLENBQUM7UUFFeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO0lBQ25DLENBQUM7SUFsQkQsSUFBSSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUUsSUFBYTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUM1QixDQUFDO0lBZ0JELE9BQU87UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7O29FQW5DVyxVQUFVLDRFQXNCWixXQUFXO2tEQXRCVCxVQUFVLFdBQVYsVUFBVTtrREFBVixVQUFVO2NBRHRCLFVBQVU7O3NCQXVCUixNQUFNO3VCQUFFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsLCBQQU5FTF9UT0tFTiB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBVSUNoYXJ0IH0gZnJvbSAncHJpbWVuZyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoYXJ0LCBEYXRhU2V0IH0gZnJvbSAnLi4vY2hhcnQubSc7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuLi92aWV3L2RhdGEvZGF0YS1wcm92aWRlcic7XG5pbXBvcnQgeyBEaXNwbGF5TWFuYWdlciB9IGZyb20gJy4uL3ZpZXcvcmVuZGVyL2Rpc3BsYXktbWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFydFN0b3JlIHtcblxuXHRwcml2YXRlIHdpZGdldDogQmVoYXZpb3JTdWJqZWN0PENoYXJ0PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IHdpZGdldCQ6IE9ic2VydmFibGU8Q2hhcnQ+ID0gdGhpcy53aWRnZXQuYXNPYnNlcnZhYmxlKCk7XG5cdFxuXHRwcml2YXRlIGRhdGE6IEJlaGF2aW9yU3ViamVjdDxEYXRhU2V0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0cmVhZG9ubHkgZGF0YSQ6IE9ic2VydmFibGU8RGF0YVNldFtdPiA9IHRoaXMuZGF0YS5hc09ic2VydmFibGUoKTtcblx0XG5cdHByaXZhdGUgY29udHJvbF86IEJlaGF2aW9yU3ViamVjdDxVSUNoYXJ0PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IGNvbnRyb2wkOiBPYnNlcnZhYmxlPFVJQ2hhcnQ+ID0gdGhpcy5jb250cm9sXy5hc09ic2VydmFibGUoKTtcblxuXHRnZXQgY29udHJvbCgpIDogVUlDaGFydHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sXy52YWx1ZTsgXG5cdH1cblxuXHRzZXQgY29udHJvbCggY3RybDogVUlDaGFydCApe1xuXHRcdHRoaXMuY29udHJvbF8ubmV4dCggY3RybCApO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoIFxuXHRcdHB1YmxpYyBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlcixcblx0XHRwdWJsaWMgZGlzcGxheTogRGlzcGxheU1hbmFnZXIsXG5cdFx0QEluamVjdCggUEFORUxfVE9LRU4gKSBwdWJsaWMgcGFuZWw6IFBhbmVsICl7XG5cblx0XHRcdGRhdGFQcm92aWRlclxuXHRcdFx0XHQuZGF0YSRcblx0XHRcdFx0LnN1YnNjcmliZSggeCA9PiB0aGlzLmRhdGEubmV4dCggeD8uZGF0YXNldHMgPz8gW10gKSApO1xuXG5cdFx0XHR0aGlzLndpZGdldC5uZXh0KCBwYW5lbC53aWRnZXQgKTtcblx0fVxuXG5cdFxuXG5cdGRlc3Ryb3koKXtcblx0XHR0aGlzLmRhdGFQcm92aWRlci5kZXN0cm95KCk7XG5cdH1cbn1cbiJdfQ==