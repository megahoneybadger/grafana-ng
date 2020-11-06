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
import { AlertDrawerPlugin } from './view/drawers/alert';
import * as i0 from "@angular/core";
import * as i1 from "./base/chart.store";
import * as i2 from "./view/drawers/extensions-manager";
function ChartComponent_alert_handle_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "alert-handle");
} }
function ChartComponent_chart_legend_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "chart-legend", 8);
} }
function ChartComponent_chart_legend_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "chart-legend", 9);
} }
export class ChartComponent extends BaseChartComponent {
    constructor(store, extensions) {
        super(store);
        this.extensions = extensions;
        this.showAlertHandle = false;
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
            TimeRegionsDrawerPlugin,
            AlertDrawerPlugin
        ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 6, consts: [[1, "chart__wrapper"], [1, "chart__right-legend-cont"], [1, "chart__canvas-cont"], ["type", "line", "height", "100%", 3, "data", "options", "plugins"], ["chart", ""], [4, "ngIf"], ["class", "chart__legend-right", 4, "ngIf"], ["class", "chart__legend-bottom", 4, "ngIf"], [1, "chart__legend-right"], [1, "chart__legend-bottom"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "p-chart", 3, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ChartComponent_alert_handle_5_Template, 1, 0, "alert-handle", 5);
        i0.ɵɵtemplate(6, ChartComponent_chart_legend_6_Template, 1, 0, "chart-legend", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, ChartComponent_chart_legend_7_Template, 1, 0, "chart-legend", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showAlertHandle && (ctx.widget == null ? null : ctx.widget.alert));
        i0.ɵɵadvance(1);
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
                    TimeRegionsDrawerPlugin,
                    AlertDrawerPlugin
                ]
            }]
    }], function () { return [{ type: i1.ChartStore }, { type: i2.ExtensionsManager }]; }, { control: [{
            type: ViewChild,
            args: [UIChart]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiLCIuLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0lDQ3JELCtCQUFzRTs7O0lBRXRFLGtDQUE4Rjs7O0lBSWhHLGtDQUFnRzs7QURhbEcsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFZcEQsWUFBYSxLQUFpQixFQUFVLFVBQTZCO1FBQ25FLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQTtRQUR3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQU5yRSxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQVMvQixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFWRCxJQUFJLE1BQU07O1FBQ1IsYUFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQVVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7NEVBM0JVLGNBQWM7bURBQWQsY0FBYzt1QkFJYixPQUFPOzs7OzBDQWpCVDtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2IsY0FBYztZQUNkLFVBQVU7WUFFVixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIsaUJBQWlCO1NBQ2xCO1FDL0JILDhCQUVFO1FBQUEsOEJBRUU7UUFBQSw4QkFDRTtRQUFBLGdDQU1VO1FBQ1osaUJBQU07UUFFTixpRkFBdUQ7UUFFdkQsaUZBQStFO1FBRWpGLGlCQUFNO1FBRU4saUZBQWlGO1FBRW5GLGlCQUFNOztRQWZFLGVBQWE7UUFBYiwrQkFBYSx3QkFBQSx3QkFBQTtRQU9ILGVBQXdDO1FBQXhDLDRGQUF3QztRQUV4QyxlQUFvQztRQUFwQyx3RkFBb0M7UUFJdEMsZUFBcUM7UUFBckMseUZBQXFDOztrRERheEMsY0FBYztjQWxCMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUMsY0FBYztnQkFDMUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFDO29CQUNSLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixjQUFjO29CQUNkLFVBQVU7b0JBRVYsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixpQkFBaUI7aUJBQ2xCO2FBQ0Y7NkZBS3VCLE9BQU87a0JBQTVCLFNBQVM7bUJBQUUsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuL3ZpZXcvb3B0aW9ucy1wcm92aWRlcic7XG5pbXBvcnQgeyBEaXNwbGF5TWFuYWdlciB9IGZyb20gJy4vdmlldy9kaXNwbGF5LW1hbmFnZXInO1xuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4vYmFzZS9jaGFydC5zdG9yZSc7XG5pbXBvcnQgeyBVSUNoYXJ0IH0gZnJvbSAncHJpbWVuZyc7XG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UvY2hhcnQtYmFzZSc7XG5pbXBvcnQgeyBDaGFydEpzRXh0ZW5zaW9uLCBFeHRlbnNpb25zTWFuYWdlciB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL2V4dGVuc2lvbnMtbWFuYWdlcic7XG5pbXBvcnQgeyBUcmFja2JhbGxEcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3ZpZXcvZHJhd2Vycy90cmFja2JhbGwnO1xuaW1wb3J0IHsgVGhyZXNob2xkRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvdGhyZXNob2xkcyc7XG5pbXBvcnQgeyBUaW1lUmVnaW9uc0RyYXdlclBsdWdpbiB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL3RpbWUtcmVnaW9ucyc7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuL2RhdGEvZGF0YS1wcm92aWRlcic7XG5pbXBvcnQgeyBEYXRhQ29udmVydGVyIH0gZnJvbSAnLi9kYXRhL2RhdGEtY29udmVydGVyJztcbmltcG9ydCB7IEFsZXJ0RHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvYWxlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDonLi9jaGFydC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6W1xuICAgIERhdGFQcm92aWRlcixcbiAgICBEYXRhQ29udmVydGVyLFxuICAgIERpc3BsYXlNYW5hZ2VyLFxuICAgIENoYXJ0U3RvcmUsXG4gICAgXG4gICAgRXh0ZW5zaW9uc01hbmFnZXIsXG4gICAgVHJhY2tiYWxsRHJhd2VyUGx1Z2luLFxuICAgIFRocmVzaG9sZERyYXdlclBsdWdpbixcbiAgICBUaW1lUmVnaW9uc0RyYXdlclBsdWdpbixcbiAgICBBbGVydERyYXdlclBsdWdpblxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgXG4gIG9wdGlvbnM6IGFueTtcbiAgcGx1Z2luczogQ2hhcnRKc0V4dGVuc2lvbltdO1xuICBAVmlld0NoaWxkKCBVSUNoYXJ0ICkgY29udHJvbDtcblxuICBzaG93QWxlcnRIYW5kbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgbGVnZW5kKCl7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0Py5sZWdlbmQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvciggc3RvcmU6IENoYXJ0U3RvcmUsIHByaXZhdGUgZXh0ZW5zaW9uczogRXh0ZW5zaW9uc01hbmFnZXIgKSB7XG4gICAgc3VwZXIoIHN0b3JlIClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9wdGlvbnNQcm92aWRlci5nZXRPcHRpb25zKCB0aGlzICk7XG5cbiAgICB0aGlzLnBsdWdpbnMgPSBleHRlbnNpb25zLmxpc3Q7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLndpZGdldC5jb21wb25lbnQgPSB0aGlzO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnN0b3JlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmV4dGVuc2lvbnMuZGVzdHJveSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hhcnRfX3dyYXBwZXJcIj5cblxuICA8ZGl2IGNsYXNzPVwiY2hhcnRfX3JpZ2h0LWxlZ2VuZC1jb250XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnRfX2NhbnZhcy1jb250XCI+XG4gICAgICA8cC1jaGFydCBcbiAgICAgICAgdHlwZT1cImxpbmVcIlxuICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIFtwbHVnaW5zXT1cInBsdWdpbnNcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCIgI2NoYXJ0PlxuICAgICAgPC9wLWNoYXJ0PlxuICAgIDwvZGl2PlxuXG4gICAgPGFsZXJ0LWhhbmRsZSAqbmdJZj1cInNob3dBbGVydEhhbmRsZSAmJiB3aWRnZXQ/LmFsZXJ0XCI+PC9hbGVydC1oYW5kbGU+XG5cbiAgICA8Y2hhcnQtbGVnZW5kICpuZ0lmPVwibGVnZW5kLnNob3cgJiYgbGVnZW5kPy5yaWdodFwiIGNsYXNzPVwiY2hhcnRfX2xlZ2VuZC1yaWdodFwiPjwvY2hhcnQtbGVnZW5kPlxuICAgIFxuICA8L2Rpdj5cblxuICA8Y2hhcnQtbGVnZW5kICpuZ0lmPVwibGVnZW5kLnNob3cgJiYgIWxlZ2VuZD8ucmlnaHRcIiBjbGFzcz1cImNoYXJ0X19sZWdlbmQtYm90dG9tXCI+PC9jaGFydC1sZWdlbmQ+XG5cbjwvZGl2PlxuXG4iXX0=