import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TrackballDrawerPlugin } from './view/extensions/trackball-drawer';
import { DataProvider } from './view/data/data-provider';
import { OptionsProvider } from './view/options-provider';
import { DataConverter } from './view/data/data-converter';
import { DisplayManager } from './view/render/display-manager';
import { ChartStore } from './base/chart.store';
import { UIChart } from 'primeng';
import { BaseChartComponent } from './base/chart-base';
import * as i0 from "@angular/core";
import * as i1 from "./base/chart.store";
import * as i2 from "primeng";
import * as i3 from "@angular/common";
import * as i4 from "./view/legend/legend";
function ChartComponent_chart_legend_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "chart-legend", 7);
} }
function ChartComponent_chart_legend_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "chart-legend", 8);
} }
export class ChartComponent extends BaseChartComponent {
    constructor(store) {
        super(store);
        this.plugins = [new TrackballDrawerPlugin()];
        this.options = OptionsProvider.getOptions(this);
    }
    get legend() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
    }
    ngAfterViewInit() {
        this.store.control = this.ctrlChart;
    }
    ngOnDestroy() {
        this.store.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(i1.ChartStore)); };
ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(UIChart, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ctrlChart = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([
            DataProvider,
            DataConverter,
            DisplayManager,
            ChartStore
        ]), i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 5, consts: [[1, "chart__wrapper"], [1, "chart__right-legend-cont"], [1, "chart__canvas-cont"], ["type", "line", "height", "100%", 3, "data", "options", "plugins"], ["chart", ""], ["class", "chart__legend-right", 4, "ngIf"], ["class", "chart__legend-bottom", 4, "ngIf"], [1, "chart__legend-right"], [1, "chart__legend-bottom"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "p-chart", 3, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ChartComponent_chart_legend_5_Template, 1, 0, "chart-legend", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, ChartComponent_chart_legend_6_Template, 1, 0, "chart-legend", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.legend.show && (ctx.legend == null ? null : ctx.legend.right));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.legend.show && !(ctx.legend == null ? null : ctx.legend.right));
    } }, directives: [i2.UIChart, i3.NgIf, i4.ChartLegendComponent], styles: [".hide-text{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height{max-height:0;overflow:hidden}.animate-height--open{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.chart__wrapper{display:flex;flex-direction:column;height:100%;min-height:0;position:relative}.chart__right-legend-cont{cursor:crosshair;display:flex;flex:1;min-height:0;min-width:0}.chart__canvas-cont{flex:1;min-height:0;min-width:0;padding-left:5px}.chart__legend-bottom{flex:0 1 auto;flex-wrap:wrap;max-height:35%;overflow:hidden;padding-top:6px;position:relative}.chart__legend-right{flex:0 1 10px}.graph-tooltip{background-color:#141414;color:#d8d9da;font-size:12px;white-space:nowrap}.graph-tooltip .graph-tooltip-time{color:#d8d9da;font-weight:700;padding:.2rem;position:relative;text-align:center;top:-3px}.graph-tooltip .graph-tooltip-list-item{display:table-row}.graph-tooltip .graph-tooltip-list-item--highlight{color:#ececec;font-weight:700}.graph-tooltip .graph-tooltip-series-name{display:table-cell;max-width:650px;overflow:hidden;padding:.15rem;text-overflow:ellipsis}.graph-tooltip .graph-tooltip-value{display:table-cell;font-weight:700;padding-left:15px;text-align:right}.grafana-tooltip{border-radius:5px;font-weight:200;line-height:14px;max-height:600px;max-width:800px;overflow:hidden;padding:10px;position:absolute;z-index:9999}.grafana-tooltip a{color:#e3e3e3}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                templateUrl: './chart.html',
                styleUrls: ['./chart.scss'],
                encapsulation: ViewEncapsulation.None,
                providers: [
                    DataProvider,
                    DataConverter,
                    DisplayManager,
                    ChartStore
                ]
            }]
    }], function () { return [{ type: i1.ChartStore }]; }, { ctrlChart: [{
            type: ViewChild,
            args: [UIChart]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiLCIuLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztJQ01uRCxrQ0FBOEY7OztJQUloRyxrQ0FBZ0c7O0FESWxHLE1BQU0sT0FBTyxjQUFlLFNBQVEsa0JBQWtCO0lBVXBELFlBQWEsS0FBaUI7UUFDNUIsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFBO1FBUmhCLFlBQU8sR0FBRyxDQUFFLElBQUkscUJBQXFCLEVBQUUsQ0FBRSxDQUFBO1FBVXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUNwRCxDQUFDO0lBUkQsSUFBSSxNQUFNOztRQUNSLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFRRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7NEVBdEJVLGNBQWM7bURBQWQsY0FBYzt1QkFJYixPQUFPOzs7OzBDQVhUO1lBQ1IsWUFBWTtZQUNaLGFBQWE7WUFDYixjQUFjO1lBQ2QsVUFBVTtTQUNYO1FDcEJILDhCQUVFO1FBQUEsOEJBRUU7UUFBQSw4QkFDRTtRQUFBLGdDQU1VO1FBQ1osaUJBQU07UUFFTixpRkFBK0U7UUFFakYsaUJBQU07UUFFTixpRkFBaUY7UUFFbkYsaUJBQU07O1FBYkUsZUFBYTtRQUFiLCtCQUFhLHdCQUFBLHdCQUFBO1FBT0gsZUFBb0M7UUFBcEMsd0ZBQW9DO1FBSXRDLGVBQXFDO1FBQXJDLHlGQUFxQzs7a0RESXhDLGNBQWM7Y0FaMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUMsY0FBYztnQkFDMUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFDO29CQUNSLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixjQUFjO29CQUNkLFVBQVU7aUJBQ1g7YUFDRjs2REFLK0IsU0FBUztrQkFBdEMsU0FBUzttQkFBRSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFja2JhbGxEcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3ZpZXcvZXh0ZW5zaW9ucy90cmFja2JhbGwtZHJhd2VyJztcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4vdmlldy9kYXRhL2RhdGEtcHJvdmlkZXInO1xuaW1wb3J0IHsgT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi92aWV3L29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGF0YUNvbnZlcnRlciB9IGZyb20gJy4vdmlldy9kYXRhL2RhdGEtY29udmVydGVyJztcbmltcG9ydCB7IERpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi92aWV3L3JlbmRlci9kaXNwbGF5LW1hbmFnZXInO1xuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4vYmFzZS9jaGFydC5zdG9yZSc7XG5pbXBvcnQgeyBVSUNoYXJ0IH0gZnJvbSAncHJpbWVuZyc7XG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UvY2hhcnQtYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpZGdldCcsXG4gIHRlbXBsYXRlVXJsOicuL2NoYXJ0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczpbXG4gICAgRGF0YVByb3ZpZGVyLFxuICAgIERhdGFDb252ZXJ0ZXIsXG4gICAgRGlzcGxheU1hbmFnZXIsXG4gICAgQ2hhcnRTdG9yZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgXG4gIG9wdGlvbnM6IGFueTtcbiAgcGx1Z2lucyA9IFsgbmV3IFRyYWNrYmFsbERyYXdlclBsdWdpbigpIF1cbiAgQFZpZXdDaGlsZCggVUlDaGFydCApIHByaXZhdGUgY3RybENoYXJ0O1xuXG4gIGdldCBsZWdlbmQoKXtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQ/LmxlZ2VuZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBzdG9yZTogQ2hhcnRTdG9yZSApIHtcbiAgICBzdXBlciggc3RvcmUgKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT3B0aW9uc1Byb3ZpZGVyLmdldE9wdGlvbnMoIHRoaXMgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuc3RvcmUuY29udHJvbCA9IHRoaXMuY3RybENoYXJ0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnN0b3JlLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNoYXJ0X193cmFwcGVyXCI+XG5cbiAgPGRpdiBjbGFzcz1cImNoYXJ0X19yaWdodC1sZWdlbmQtY29udFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0X19jYW52YXMtY29udFwiPlxuICAgICAgPHAtY2hhcnQgXG4gICAgICAgIHR5cGU9XCJsaW5lXCJcbiAgICAgICAgW2RhdGFdPVwiZGF0YVwiXG4gICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgICBbcGx1Z2luc109XCJwbHVnaW5zXCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiICNjaGFydD5cbiAgICAgIDwvcC1jaGFydD5cbiAgICA8L2Rpdj5cblxuICAgIDxjaGFydC1sZWdlbmQgKm5nSWY9XCJsZWdlbmQuc2hvdyAmJiBsZWdlbmQ/LnJpZ2h0XCIgY2xhc3M9XCJjaGFydF9fbGVnZW5kLXJpZ2h0XCI+PC9jaGFydC1sZWdlbmQ+XG4gICAgXG4gIDwvZGl2PlxuXG4gIDxjaGFydC1sZWdlbmQgKm5nSWY9XCJsZWdlbmQuc2hvdyAmJiAhbGVnZW5kPy5yaWdodFwiIGNsYXNzPVwiY2hhcnRfX2xlZ2VuZC1ib3R0b21cIj48L2NoYXJ0LWxlZ2VuZD5cblxuPC9kaXY+XG5cbiJdfQ==