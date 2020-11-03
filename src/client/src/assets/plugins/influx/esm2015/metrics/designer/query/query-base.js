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
        this.change = new EventEmitter();
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
    proxy(command) {
        return this
            .dsService
            .proxy(this.dataSourceId, command);
    }
    build() {
        new InfluxMetricsBuilder()
            .build({ targets: [this.query], dataSource: 0 })
            .subscribe(x => {
            this.queryAsString = x;
            this.onRebuild();
        });
    }
    onRebuild() {
    }
}
BaseQueryComponent.ɵfac = function BaseQueryComponent_Factory(t) { return new (t || BaseQueryComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN), i0.ɵɵdirectiveInject(i1.DataSourceService)); };
BaseQueryComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseQueryComponent, inputs: { query: "query" }, outputs: { change: "change" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseQueryComponent, [{
        type: Directive
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }, { type: i1.DataSourceService }]; }, { query: [{
            type: Input
        }], change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2VzL2luZmx1eC9zcmMvbWV0cmljcy9kZXNpZ25lci9xdWVyeS9xdWVyeS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBNEIsV0FBVyxFQUFtQixNQUFNLFFBQVEsQ0FBQztBQUdoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUtyRCxNQUFNLE9BQU8sa0JBQWtCO0lBMEI3QixZQUNnQyxLQUFZLEVBQ25DLFNBQTRCO1FBREwsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQTNCNUIsV0FBTSxHQUFHLFlBQVksQ0FBQztRQUdyQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXlCdEMsQ0FBQztJQXRCRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUk7YUFDUixLQUFLO2FBQ0wsTUFBTTthQUNOLE9BQU8sQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFPRCxLQUFLLENBQUUsT0FBZTtRQUNwQixPQUFPLElBQUk7YUFDUixTQUFTO2FBQ1QsS0FBSyxDQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLG9CQUFvQixFQUFFO2FBQ3ZCLEtBQUssQ0FBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUc7YUFDakQsU0FBUyxDQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUE7WUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFNBQVM7SUFFVCxDQUFDOztvRkFoRFUsa0JBQWtCLHVCQTJCbEIsV0FBVzt1REEzQlgsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsU0FBUzs7c0JBNEJMLE1BQU07dUJBQUUsV0FBVzt3REF4QmIsS0FBSztrQkFBYixLQUFLO1lBQ0ksTUFBTTtrQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSwgUGFuZWwsIFBBTkVMX1RPS0VOLCBTZXJpZXMsIE1ldHJpY3MgfSBmcm9tICdjb21tb24nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbmZsdXhNZXRyaWNzQnVpbGRlciB9IGZyb20gJy4uLy4uL2J1aWxkZXInO1xyXG5cclxuaW1wb3J0IHsgSW5mbHV4UXVlcnksIFRhZywgRmllbGQgfSBmcm9tICcuLi8uLi9tZXRyaWNzLm0nO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXNlUXVlcnlDb21wb25lbnQge1xyXG4gIHJlYWRvbmx5IFJFTU9WRSA9ICctLXJlbW92ZS0tJztcclxuICBcclxuICBASW5wdXQoKSBxdWVyeSA6IEluZmx1eFF1ZXJ5O1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcXVlcnlBc1N0cmluZzogc3RyaW5nO1xyXG5cclxuICBnZXQgbWV0cmljcygpOiBNZXRyaWNze1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLnBhbmVsXHJcbiAgICAgIC53aWRnZXRcclxuICAgICAgLm1ldHJpY3M7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YVNvdXJjZUlkKCk6IG51bWJlcntcclxuICAgIHJldHVybiB0aGlzLm1ldHJpY3MuZGF0YVNvdXJjZTtcclxuICB9XHJcblxyXG4gIGdldCB0YWdzKCkgOiBUYWdbXXtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5LnRhZ3M7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRzKCk6IEZpZWxkW117XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5maWVsZHM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoIFBBTkVMX1RPS0VOICkgcHVibGljIHBhbmVsOiBQYW5lbCxcclxuICAgIHB1YmxpYyBkc1NlcnZpY2U6IERhdGFTb3VyY2VTZXJ2aWNlKXtcclxuICB9XHJcblxyXG4gIHByb3h5KCBjb21tYW5kOiBzdHJpbmcgKSA6IE9ic2VydmFibGU8U2VyaWVzW10gPiB7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gICAgICAuZHNTZXJ2aWNlXHJcbiAgICAgIC5wcm94eSggdGhpcy5kYXRhU291cmNlSWQsIGNvbW1hbmQpXHJcbiAgfVxyXG5cclxuICBidWlsZCgpe1xyXG4gICAgbmV3IEluZmx1eE1ldHJpY3NCdWlsZGVyKClcclxuICAgICAgLmJ1aWxkKCB7dGFyZ2V0czogW3RoaXMucXVlcnldLCBkYXRhU291cmNlOiAwIH0gIClcclxuICAgICAgLnN1YnNjcmliZSggeCA9PntcclxuICAgICAgICB0aGlzLnF1ZXJ5QXNTdHJpbmcgPSB4XHJcbiAgICAgICAgdGhpcy5vblJlYnVpbGQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblJlYnVpbGQoKXtcclxuXHJcbiAgfVxyXG59Il19