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
        this.widget.value.control = ctrl;
        this.control_.next(ctrl);
    }
    destroy() {
        this.dataProvider.destroy();
        this.widget.value.control = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9iYXNlL2NoYXJ0LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQU1uRCxNQUFNLE9BQU8sVUFBVTtJQW9CdEIsWUFDUSxZQUEwQixFQUMxQixPQUF1QixFQUNBLEtBQVk7UUFGbkMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDQSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBckJuQyxXQUFNLEdBQTJCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELFlBQU8sR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCxTQUFJLEdBQStCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELFVBQUssR0FBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELGFBQVEsR0FBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQWdCcEUsWUFBWTthQUNWLEtBQUs7YUFDTCxTQUFTLENBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBQyxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFFLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxRQUFRLG1DQUFJLEVBQUUsQ0FBRSxDQUFBLEVBQUEsQ0FBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUNuQyxDQUFDO0lBbkJELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFFLElBQWE7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUM1QixDQUFDO0lBY0QsT0FBTztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDOztvRUFuQ1csVUFBVSw0RUF1QlosV0FBVztrREF2QlQsVUFBVSxXQUFWLFVBQVU7a0RBQVYsVUFBVTtjQUR0QixVQUFVOztzQkF3QlIsTUFBTTt1QkFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbCwgUEFORUxfVE9LRU4gfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgVUlDaGFydCB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFydCwgRGF0YVNldCB9IGZyb20gJy4uL2NoYXJ0Lm0nO1xuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi4vdmlldy9kYXRhL2RhdGEtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGlzcGxheU1hbmFnZXIgfSBmcm9tICcuLi92aWV3L3JlbmRlci9kaXNwbGF5LW1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhcnRTdG9yZSB7XG5cblx0cHJpdmF0ZSB3aWRnZXQ6IEJlaGF2aW9yU3ViamVjdDxDaGFydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHRyZWFkb25seSB3aWRnZXQkOiBPYnNlcnZhYmxlPENoYXJ0PiA9IHRoaXMud2lkZ2V0LmFzT2JzZXJ2YWJsZSgpO1xuXHRcblx0cHJpdmF0ZSBkYXRhOiBCZWhhdmlvclN1YmplY3Q8RGF0YVNldFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHJlYWRvbmx5IGRhdGEkOiBPYnNlcnZhYmxlPERhdGFTZXRbXT4gPSB0aGlzLmRhdGEuYXNPYnNlcnZhYmxlKCk7XG5cdFxuXHRwcml2YXRlIGNvbnRyb2xfOiBCZWhhdmlvclN1YmplY3Q8VUlDaGFydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHRyZWFkb25seSBjb250cm9sJDogT2JzZXJ2YWJsZTxVSUNoYXJ0PiA9IHRoaXMuY29udHJvbF8uYXNPYnNlcnZhYmxlKCk7XG5cblx0Z2V0IGNvbnRyb2woKSA6IFVJQ2hhcnR7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbF8udmFsdWU7IFxuXHR9XG5cblx0c2V0IGNvbnRyb2woIGN0cmw6IFVJQ2hhcnQgKXtcblx0XHR0aGlzLndpZGdldC52YWx1ZS5jb250cm9sID0gY3RybDtcblx0XHR0aGlzLmNvbnRyb2xfLm5leHQoIGN0cmwgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBcblx0XHRwdWJsaWMgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIsXG5cdFx0cHVibGljIGRpc3BsYXk6IERpc3BsYXlNYW5hZ2VyLFxuXHRcdEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcHVibGljIHBhbmVsOiBQYW5lbCApe1xuXG5cdFx0XHRkYXRhUHJvdmlkZXJcblx0XHRcdFx0LmRhdGEkXG5cdFx0XHRcdC5zdWJzY3JpYmUoIHggPT4gdGhpcy5kYXRhLm5leHQoIHg/LmRhdGFzZXRzID8/IFtdICkgKTtcblxuXHRcdFx0dGhpcy53aWRnZXQubmV4dCggcGFuZWwud2lkZ2V0ICk7XG5cdH1cblxuXHRkZXN0cm95KCl7XG5cdFx0dGhpcy5kYXRhUHJvdmlkZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMud2lkZ2V0LnZhbHVlLmNvbnRyb2wgPSB1bmRlZmluZWQ7XG5cdH1cbn1cbiJdfQ==