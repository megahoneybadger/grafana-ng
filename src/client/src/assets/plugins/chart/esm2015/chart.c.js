import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataProvider } from './view/data/data-provider';
import { OptionsProvider } from './view/options-provider';
import { DataConverter } from './view/data/data-converter';
import { DisplayManager } from './view/display-manager';
import { ChartStore } from './base/chart.store';
import { UIChart } from 'primeng';
import { BaseChartComponent } from './base/chart-base';
import { ExtensionsManager } from './view/drawers/extensions-manager';
import { TrackballDrawerPlugin } from './view/drawers/trackball';
import { ThresholdDrawerPlugin } from './view/drawers/thresholds';
import { TimeRegionsDrawerPlugin } from './view/drawers/time-regions';
import * as i0 from "@angular/core";
import * as i1 from "./base/chart.store";
import * as i2 from "./view/drawers/extensions-manager";
function ChartComponent_chart_legend_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "chart-legend", 7);
} }
function ChartComponent_chart_legend_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "chart-legend", 8);
} }
export class ChartComponent extends BaseChartComponent {
    constructor(store, extensions) {
        super(store);
        this.extensions = extensions;
        this.options = OptionsProvider.getOptions(this);
        this.plugins = extensions.list;
    }
    get legend() {
        var _a;
        return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
    }
    ngAfterViewInit() {
        this.widget.component = this;
    }
    ngOnDestroy() {
        this.store.destroy();
        this.extensions.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(i1.ChartStore), i0.ɵɵdirectiveInject(i2.ExtensionsManager)); };
ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(UIChart, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.control = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([
            DataProvider,
            DataConverter,
            DisplayManager,
            ChartStore,
            ExtensionsManager,
            TrackballDrawerPlugin,
            ThresholdDrawerPlugin,
            TimeRegionsDrawerPlugin
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
    } }, styles: [".hide-text{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height{max-height:0;overflow:hidden}.animate-height--open{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.chart__wrapper{display:flex;flex-direction:column;height:100%;min-height:0;position:relative}.chart__right-legend-cont{cursor:crosshair;display:flex;flex:1;min-height:0;min-width:0}.chart__canvas-cont{flex:1;min-height:0;min-width:0;padding-left:5px}.chart__legend-bottom{flex:0 1 auto;flex-wrap:wrap;max-height:35%;overflow:hidden;padding-top:6px;position:relative}.chart__legend-right{flex:0 1 10px}.graph-tooltip{background-color:#141414;color:#d8d9da;font-size:12px;white-space:nowrap}.graph-tooltip .graph-tooltip-time{color:#d8d9da;font-weight:700;padding:.2rem;position:relative;text-align:center;top:-3px}.graph-tooltip .graph-tooltip-list-item{display:table-row}.graph-tooltip .graph-tooltip-list-item--highlight{color:#ececec;font-weight:700}.graph-tooltip .graph-tooltip-series-name{display:table-cell;max-width:650px;overflow:hidden;padding:.15rem;text-overflow:ellipsis}.graph-tooltip .graph-tooltip-value{display:table-cell;font-weight:700;padding-left:15px;text-align:right}.grafana-tooltip{border-radius:5px;font-weight:200;line-height:14px;max-height:600px;max-width:800px;overflow:hidden;padding:10px;position:absolute;z-index:9999}.grafana-tooltip a{color:#e3e3e3}"], encapsulation: 2 });
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
                    ChartStore,
                    ExtensionsManager,
                    TrackballDrawerPlugin,
                    ThresholdDrawerPlugin,
                    TimeRegionsDrawerPlugin
                ]
            }]
    }], function () { return [{ type: i1.ChartStore }, { type: i2.ExtensionsManager }]; }, { control: [{
            type: ViewChild,
            args: [UIChart]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiLCIuLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQW9CLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0lDR2xFLGtDQUE4Rjs7O0lBSWhHLGtDQUFnRzs7QURZbEcsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFVcEQsWUFBYSxLQUFpQixFQUFVLFVBQTZCO1FBQ25FLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQTtRQUR3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUduRSxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFWRCxJQUFJLE1BQU07O1FBQ1IsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQVVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7NEVBekJVLGNBQWM7bURBQWQsY0FBYzt1QkFJYixPQUFPOzs7OzBDQWhCVDtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2IsY0FBYztZQUNkLFVBQVU7WUFFVixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix1QkFBdUI7U0FDeEI7UUM1QkgsOEJBRUU7UUFBQSw4QkFFRTtRQUFBLDhCQUNFO1FBQUEsZ0NBTVU7UUFDWixpQkFBTTtRQUVOLGlGQUErRTtRQUVqRixpQkFBTTtRQUVOLGlGQUFpRjtRQUVuRixpQkFBTTs7UUFiRSxlQUFhO1FBQWIsK0JBQWEsd0JBQUEsd0JBQUE7UUFPSCxlQUFvQztRQUFwQyx3RkFBb0M7UUFJdEMsZUFBcUM7UUFBckMseUZBQXFDOztrRERZeEMsY0FBYztjQWpCMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUMsY0FBYztnQkFDMUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFDO29CQUNSLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixjQUFjO29CQUNkLFVBQVU7b0JBRVYsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsdUJBQXVCO2lCQUN4QjthQUNGOzZGQUt1QixPQUFPO2tCQUE1QixTQUFTO21CQUFFLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4vdmlldy9kYXRhL2RhdGEtcHJvdmlkZXInO1xuaW1wb3J0IHsgT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi92aWV3L29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGF0YUNvbnZlcnRlciB9IGZyb20gJy4vdmlldy9kYXRhL2RhdGEtY29udmVydGVyJztcbmltcG9ydCB7IERpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi92aWV3L2Rpc3BsYXktbWFuYWdlcic7XG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LnN0b3JlJztcbmltcG9ydCB7IFVJQ2hhcnQgfSBmcm9tICdwcmltZW5nJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS9jaGFydC1iYXNlJztcbmltcG9ydCB7IENoYXJ0SnNFeHRlbnNpb24sIEV4dGVuc2lvbnNNYW5hZ2VyIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvZXh0ZW5zaW9ucy1tYW5hZ2VyJztcbmltcG9ydCB7IFRyYWNrYmFsbERyYXdlclBsdWdpbiB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL3RyYWNrYmFsbCc7XG5pbXBvcnQgeyBUaHJlc2hvbGREcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3ZpZXcvZHJhd2Vycy90aHJlc2hvbGRzJztcbmltcG9ydCB7IFRpbWVSZWdpb25zRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvdGltZS1yZWdpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6Jy4vY2hhcnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOltcbiAgICBEYXRhUHJvdmlkZXIsXG4gICAgRGF0YUNvbnZlcnRlcixcbiAgICBEaXNwbGF5TWFuYWdlcixcbiAgICBDaGFydFN0b3JlLFxuICAgIFxuICAgIEV4dGVuc2lvbnNNYW5hZ2VyLFxuICAgIFRyYWNrYmFsbERyYXdlclBsdWdpbixcbiAgICBUaHJlc2hvbGREcmF3ZXJQbHVnaW4sXG4gICAgVGltZVJlZ2lvbnNEcmF3ZXJQbHVnaW5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gIFxuICBvcHRpb25zOiBhbnk7XG4gIHBsdWdpbnM6IENoYXJ0SnNFeHRlbnNpb25bXTtcbiAgQFZpZXdDaGlsZCggVUlDaGFydCApIGNvbnRyb2w7XG5cbiAgZ2V0IGxlZ2VuZCgpe1xuICAgIHJldHVybiB0aGlzLndpZGdldD8ubGVnZW5kO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHN0b3JlOiBDaGFydFN0b3JlLCBwcml2YXRlIGV4dGVuc2lvbnM6IEV4dGVuc2lvbnNNYW5hZ2VyICkge1xuICAgIHN1cGVyKCBzdG9yZSApXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPcHRpb25zUHJvdmlkZXIuZ2V0T3B0aW9ucyggdGhpcyApO1xuXG4gICAgdGhpcy5wbHVnaW5zID0gZXh0ZW5zaW9ucy5saXN0O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy53aWRnZXQuY29tcG9uZW50ID0gdGhpcztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5zdG9yZS5kZXN0cm95KCk7XG4gICAgdGhpcy5leHRlbnNpb25zLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNoYXJ0X193cmFwcGVyXCI+XG5cbiAgPGRpdiBjbGFzcz1cImNoYXJ0X19yaWdodC1sZWdlbmQtY29udFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0X19jYW52YXMtY29udFwiPlxuICAgICAgPHAtY2hhcnQgXG4gICAgICAgIHR5cGU9XCJsaW5lXCJcbiAgICAgICAgW2RhdGFdPVwiZGF0YVwiXG4gICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgICBbcGx1Z2luc109XCJwbHVnaW5zXCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiICNjaGFydD5cbiAgICAgIDwvcC1jaGFydD5cbiAgICA8L2Rpdj5cblxuICAgIDxjaGFydC1sZWdlbmQgKm5nSWY9XCJsZWdlbmQuc2hvdyAmJiBsZWdlbmQ/LnJpZ2h0XCIgY2xhc3M9XCJjaGFydF9fbGVnZW5kLXJpZ2h0XCI+PC9jaGFydC1sZWdlbmQ+XG4gICAgXG4gIDwvZGl2PlxuXG4gIDxjaGFydC1sZWdlbmQgKm5nSWY9XCJsZWdlbmQuc2hvdyAmJiAhbGVnZW5kPy5yaWdodFwiIGNsYXNzPVwiY2hhcnRfX2xlZ2VuZC1ib3R0b21cIj48L2NoYXJ0LWxlZ2VuZD5cblxuPC9kaXY+XG5cbiJdfQ==