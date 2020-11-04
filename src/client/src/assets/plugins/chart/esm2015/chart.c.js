import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OptionsProvider } from './view/options-provider';
import { DisplayManager } from './view/display-manager';
import { ChartStore } from './base/chart.store';
import { UIChart } from 'primeng';
import { BaseChartComponent } from './base/chart-base';
import { ExtensionsManager } from './view/drawers/extensions-manager';
import { TrackballDrawerPlugin } from './view/drawers/trackball';
import { ThresholdDrawerPlugin } from './view/drawers/thresholds';
import { TimeRegionsDrawerPlugin } from './view/drawers/time-regions';
import { DataProvider } from './data/data-provider';
import { DataConverter } from './data/data-converter';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiLCIuLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0lDRWxELGtDQUE4Rjs7O0lBSWhHLGtDQUFnRzs7QURhbEcsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFVcEQsWUFBYSxLQUFpQixFQUFVLFVBQTZCO1FBQ25FLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQTtRQUR3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUduRSxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFWRCxJQUFJLE1BQU07O1FBQ1IsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQVVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7NEVBekJVLGNBQWM7bURBQWQsY0FBYzt1QkFJYixPQUFPOzs7OzBDQWhCVDtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2IsY0FBYztZQUNkLFVBQVU7WUFFVixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix1QkFBdUI7U0FDeEI7UUM3QkgsOEJBRUU7UUFBQSw4QkFFRTtRQUFBLDhCQUNFO1FBQUEsZ0NBTVU7UUFDWixpQkFBTTtRQUVOLGlGQUErRTtRQUVqRixpQkFBTTtRQUVOLGlGQUFpRjtRQUVuRixpQkFBTTs7UUFiRSxlQUFhO1FBQWIsK0JBQWEsd0JBQUEsd0JBQUE7UUFPSCxlQUFvQztRQUFwQyx3RkFBb0M7UUFJdEMsZUFBcUM7UUFBckMseUZBQXFDOztrRERheEMsY0FBYztjQWpCMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUMsY0FBYztnQkFDMUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFDO29CQUNSLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixjQUFjO29CQUNkLFVBQVU7b0JBRVYsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsdUJBQXVCO2lCQUN4QjthQUNGOzZGQUt1QixPQUFPO2tCQUE1QixTQUFTO21CQUFFLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi92aWV3L29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGlzcGxheU1hbmFnZXIgfSBmcm9tICcuL3ZpZXcvZGlzcGxheS1tYW5hZ2VyJztcbmltcG9ydCB7IENoYXJ0U3RvcmUgfSBmcm9tICcuL2Jhc2UvY2hhcnQuc3RvcmUnO1xuaW1wb3J0IHsgVUlDaGFydCB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWJhc2UnO1xuaW1wb3J0IHsgQ2hhcnRKc0V4dGVuc2lvbiwgRXh0ZW5zaW9uc01hbmFnZXIgfSBmcm9tICcuL3ZpZXcvZHJhd2Vycy9leHRlbnNpb25zLW1hbmFnZXInO1xuaW1wb3J0IHsgVHJhY2tiYWxsRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvdHJhY2tiYWxsJztcbmltcG9ydCB7IFRocmVzaG9sZERyYXdlclBsdWdpbiB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL3RocmVzaG9sZHMnO1xuaW1wb3J0IHsgVGltZVJlZ2lvbnNEcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3ZpZXcvZHJhd2Vycy90aW1lLXJlZ2lvbnMnO1xuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9kYXRhL2RhdGEtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGF0YUNvbnZlcnRlciB9IGZyb20gJy4vZGF0YS9kYXRhLWNvbnZlcnRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpZGdldCcsXG4gIHRlbXBsYXRlVXJsOicuL2NoYXJ0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczpbXG4gICAgRGF0YVByb3ZpZGVyLFxuICAgIERhdGFDb252ZXJ0ZXIsXG4gICAgRGlzcGxheU1hbmFnZXIsXG4gICAgQ2hhcnRTdG9yZSxcbiAgICBcbiAgICBFeHRlbnNpb25zTWFuYWdlcixcbiAgICBUcmFja2JhbGxEcmF3ZXJQbHVnaW4sXG4gICAgVGhyZXNob2xkRHJhd2VyUGx1Z2luLFxuICAgIFRpbWVSZWdpb25zRHJhd2VyUGx1Z2luXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICBcbiAgb3B0aW9uczogYW55O1xuICBwbHVnaW5zOiBDaGFydEpzRXh0ZW5zaW9uW107XG4gIEBWaWV3Q2hpbGQoIFVJQ2hhcnQgKSBjb250cm9sO1xuXG4gIGdldCBsZWdlbmQoKXtcbiAgICByZXR1cm4gdGhpcy53aWRnZXQ/LmxlZ2VuZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBzdG9yZTogQ2hhcnRTdG9yZSwgcHJpdmF0ZSBleHRlbnNpb25zOiBFeHRlbnNpb25zTWFuYWdlciApIHtcbiAgICBzdXBlciggc3RvcmUgKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT3B0aW9uc1Byb3ZpZGVyLmdldE9wdGlvbnMoIHRoaXMgKTtcblxuICAgIHRoaXMucGx1Z2lucyA9IGV4dGVuc2lvbnMubGlzdDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMud2lkZ2V0LmNvbXBvbmVudCA9IHRoaXM7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuc3RvcmUuZGVzdHJveSgpO1xuICAgIHRoaXMuZXh0ZW5zaW9ucy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGFydF9fd3JhcHBlclwiPlxuXG4gIDxkaXYgY2xhc3M9XCJjaGFydF9fcmlnaHQtbGVnZW5kLWNvbnRcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJjaGFydF9fY2FudmFzLWNvbnRcIj5cbiAgICAgIDxwLWNoYXJ0IFxuICAgICAgICB0eXBlPVwibGluZVwiXG4gICAgICAgIFtkYXRhXT1cImRhdGFcIlxuICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgICAgW3BsdWdpbnNdPVwicGx1Z2luc1wiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIiAjY2hhcnQ+XG4gICAgICA8L3AtY2hhcnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8Y2hhcnQtbGVnZW5kICpuZ0lmPVwibGVnZW5kLnNob3cgJiYgbGVnZW5kPy5yaWdodFwiIGNsYXNzPVwiY2hhcnRfX2xlZ2VuZC1yaWdodFwiPjwvY2hhcnQtbGVnZW5kPlxuICAgIFxuICA8L2Rpdj5cblxuICA8Y2hhcnQtbGVnZW5kICpuZ0lmPVwibGVnZW5kLnNob3cgJiYgIWxlZ2VuZD8ucmlnaHRcIiBjbGFzcz1cImNoYXJ0X19sZWdlbmQtYm90dG9tXCI+PC9jaGFydC1sZWdlbmQ+XG5cbjwvZGl2PlxuXG4iXX0=