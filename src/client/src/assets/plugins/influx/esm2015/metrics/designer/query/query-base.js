import { Directive, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PANEL_TOKEN } from 'common';
import { InfluxMetricsBuilder } from '../../builder';
import * as i0 from "@angular/core";
import * as i1 from "common";
export class BaseQueryComponent {
    constructor(panel, dsService) {
        this.panel = panel;
        this.dsService = dsService;
        this.REMOVE = '--remove--';
        this.ADD = '--add--';
        this.change = new EventEmitter();
        this.rebuild = new EventEmitter();
    }
    get metrics() {
        return this
            .panel
            .widget
            .metrics;
    }
    get dataSourceId() {
        return this.metrics.dataSource;
    }
    get tags() {
        return this.query.tags;
    }
    get fields() {
        return this.query.fields;
    }
    get groupBy() {
        return this.query.groupBy;
    }
    proxy(command) {
        return this
            .dsService
            .proxy(this.dataSourceId, command);
    }
    needRebuild() {
        this.rebuild.emit();
    }
    build(fireRebuild = true) {
        new InfluxMetricsBuilder()
            .build({ targets: [this.query], dataSource: 0 })
            .subscribe(x => {
            this.queryAsString = x;
            if (fireRebuild) {
                this.onRebuild();
            }
        });
    }
    onRebuild() {
    }
}
BaseQueryComponent.ɵfac = function BaseQueryComponent_Factory(t) { return new (t || BaseQueryComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
BaseQueryComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseQueryComponent, inputs: { query: "query" }, outputs: { change: "change", rebuild: "rebuild" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseQueryComponent, [{
        type: Directive
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }]; }, { query: [{
            type: Input
        }], change: [{
            type: Output
        }], rebuild: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2VzL2luZmx1eC9zcmMvbWV0cmljcy9kZXNpZ25lci9xdWVyeS9xdWVyeS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBNEIsV0FBVyxFQUFtQixNQUFNLFFBQVEsQ0FBQztBQUdoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sa0JBQWtCO0lBZ0M3QixZQUNnQyxLQUFZLEVBQ25DLFNBQTRCO1FBREwsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQWpDNUIsV0FBTSxHQUFHLFlBQVksQ0FBQztRQUN2QixRQUFHLEdBQUcsU0FBUyxDQUFDO1FBR2QsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUE2QnZDLENBQUM7SUExQkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJO2FBQ1IsS0FBSzthQUNMLE1BQU07YUFDTixPQUFPLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBT0QsS0FBSyxDQUFFLE9BQWU7UUFDcEIsT0FBTyxJQUFJO2FBQ1IsU0FBUzthQUNULEtBQUssQ0FBRSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsS0FBSyxDQUFFLGNBQXVCLElBQUk7UUFDaEMsSUFBSSxvQkFBb0IsRUFBRTthQUN2QixLQUFLLENBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFHO2FBQ2pELFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFBO1lBRXRCLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFNBQVM7SUFFVCxDQUFDOztvRkE3RFUsa0JBQWtCLHVCQWlDbEIsV0FBVzt1REFqQ1gsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsU0FBUzs7c0JBa0NMLE1BQU07dUJBQUUsV0FBVzt3REE3QmIsS0FBSztrQkFBYixLQUFLO1lBQ0ksTUFBTTtrQkFBZixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UsIFBhbmVsLCBQQU5FTF9UT0tFTiwgU2VyaWVzLCBNZXRyaWNzIH0gZnJvbSAnY29tbW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5mbHV4TWV0cmljc0J1aWxkZXIgfSBmcm9tICcuLi8uLi9idWlsZGVyJztcclxuXHJcbmltcG9ydCB7IEluZmx1eFF1ZXJ5LCBUYWcsIEZpZWxkLCBHcm91cEJ5T2JqZWN0IH0gZnJvbSAnLi4vLi4vbWV0cmljcy5tJztcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgQmFzZVF1ZXJ5Q29tcG9uZW50IHtcclxuICByZWFkb25seSBSRU1PVkUgPSAnLS1yZW1vdmUtLSc7XHJcblx0cmVhZG9ubHkgQUREID0gJy0tYWRkLS0nO1xyXG4gIFxyXG4gIEBJbnB1dCgpIHF1ZXJ5IDogSW5mbHV4UXVlcnk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVidWlsZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBxdWVyeUFzU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gIGdldCBtZXRyaWNzKCk6IE1ldHJpY3N7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAucGFuZWxcclxuICAgICAgLndpZGdldFxyXG4gICAgICAubWV0cmljcztcclxuICB9XHJcblxyXG4gIGdldCBkYXRhU291cmNlSWQoKTogbnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMubWV0cmljcy5kYXRhU291cmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRhZ3MoKSA6IFRhZ1tde1xyXG4gICAgcmV0dXJuIHRoaXMucXVlcnkudGFncztcclxuICB9XHJcblxyXG4gIGdldCBmaWVsZHMoKTogRmllbGRbXXtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5LmZpZWxkcztcclxuICB9XHJcblxyXG4gIGdldCBncm91cEJ5KCk6IEdyb3VwQnlPYmplY3RbXXtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5Lmdyb3VwQnk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcHVibGljIHBhbmVsOiBQYW5lbCxcclxuICAgIHB1YmxpYyBkc1NlcnZpY2U6IERhdGFTb3VyY2VTZXJ2aWNlKXtcclxuICB9XHJcblxyXG4gIHByb3h5KCBjb21tYW5kOiBzdHJpbmcgKSA6IE9ic2VydmFibGU8U2VyaWVzW10gPiB7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAuZHNTZXJ2aWNlXHJcbiAgICAgIC5wcm94eSggdGhpcy5kYXRhU291cmNlSWQsIGNvbW1hbmQpXHJcbiAgfVxyXG5cclxuICBuZWVkUmVidWlsZCgpe1xyXG4gICAgdGhpcy5yZWJ1aWxkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkKCBmaXJlUmVidWlsZDogYm9vbGVhbiA9IHRydWUgKXtcclxuICAgIG5ldyBJbmZsdXhNZXRyaWNzQnVpbGRlcigpXHJcbiAgICAgIC5idWlsZCgge3RhcmdldHM6IFt0aGlzLnF1ZXJ5XSwgZGF0YVNvdXJjZTogMCB9ICApXHJcbiAgICAgIC5zdWJzY3JpYmUoIHggPT57XHJcbiAgICAgICAgdGhpcy5xdWVyeUFzU3RyaW5nID0geFxyXG5cclxuICAgICAgICBpZiggZmlyZVJlYnVpbGQgKXtcclxuICAgICAgICAgIHRoaXMub25SZWJ1aWxkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVidWlsZCgpe1xyXG5cclxuICB9XHJcbn0iXX0=