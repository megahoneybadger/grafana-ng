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
import { AnnotationDrawerPlugin } from './view/drawers/annotations';
import { MouseStore } from './base/mouse.store';
import { DragRangeDrawerPlugin } from './view/drawers/drag';
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
    constructor(store, plugins) {
        super(store);
        this.plugins = plugins;
        this.showAlertHandle = false;
        this.options = OptionsProvider.getOptions(this);
    }
    ngAfterViewInit() {
        this.widget.component = this;
    }
    ngOnDestroy() {
        this.store.destroy();
        this.plugins.destroy();
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
            MouseStore,
            ExtensionsManager,
            TrackballDrawerPlugin,
            ThresholdDrawerPlugin,
            TimeRegionsDrawerPlugin,
            AlertDrawerPlugin,
            AnnotationDrawerPlugin,
            DragRangeDrawerPlugin
        ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "chart__wrapper"], [1, "chart__right-legend-cont"], [1, "chart__canvas-cont"], ["type", "line", "height", "100%", 3, "data", "options", "plugins", "mousedown", "mouseup", "mouseleave"], ["chart", ""], [4, "ngIf"], ["class", "chart__legend-right", 4, "ngIf"], ["class", "chart__legend-bottom", 4, "ngIf"], [1, "chart__legend-right"], [1, "chart__legend-bottom"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "p-chart", 3, 4);
        i0.ɵɵlistener("mousedown", function ChartComponent_Template_p_chart_mousedown_3_listener($event) { return ctx.store.mouse.down($event); })("mouseup", function ChartComponent_Template_p_chart_mouseup_3_listener($event) { return ctx.store.mouse.up($event); })("mouseleave", function ChartComponent_Template_p_chart_mouseleave_3_listener($event) { return ctx.store.mouse.leave($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ChartComponent_alert_handle_5_Template, 1, 0, "alert-handle", 5);
        i0.ɵɵtemplate(6, ChartComponent_chart_legend_6_Template, 1, 0, "chart-legend", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, ChartComponent_chart_legend_7_Template, 1, 0, "chart-legend", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "annotation-dispatcher");
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins.list);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showAlertHandle && (ctx.widget == null ? null : ctx.widget.alert));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.widget == null ? null : ctx.widget.legend.show) && (ctx.widget == null ? null : ctx.widget.legend == null ? null : ctx.widget.legend.right));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.widget == null ? null : ctx.widget.legend.show) && !(ctx.widget == null ? null : ctx.widget.legend == null ? null : ctx.widget.legend.right));
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
                    MouseStore,
                    ExtensionsManager,
                    TrackballDrawerPlugin,
                    ThresholdDrawerPlugin,
                    TimeRegionsDrawerPlugin,
                    AlertDrawerPlugin,
                    AnnotationDrawerPlugin,
                    DragRangeDrawerPlugin
                ]
            }]
    }], function () { return [{ type: i1.ChartStore }, { type: i2.ExtensionsManager }]; }, { control: [{
            type: ViewChild,
            args: [UIChart]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiLCIuLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0lDRXhELCtCQUFzRTs7O0lBRXRFLGtDQUE4Rzs7O0lBSWhILGtDQUFpSDs7QURlbkgsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFNcEQsWUFDRSxLQUFpQixFQUNWLE9BQTBCO1FBQy9CLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQTtRQURULFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBTm5DLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBUzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs0RUFyQlUsY0FBYzttREFBZCxjQUFjO3VCQUliLE9BQU87Ozs7MENBcEJUO1lBQ1IsWUFBWTtZQUNaLGFBQWE7WUFDYixjQUFjO1lBQ2QsVUFBVTtZQUNWLFVBQVU7WUFFVixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtZQUN0QixxQkFBcUI7U0FDdEI7UUNwQ0gsOEJBRUU7UUFBQSw4QkFFRTtRQUFBLDhCQUNFO1FBQUEscUNBU1U7UUFSUiwwR0FBYSw0QkFBMEIsSUFBQyx5RkFDN0IsMEJBQXdCLElBREssK0ZBRTFCLDZCQUEyQixJQUZEO1FBUTFDLGlCQUFVO1FBQ1osaUJBQU07UUFFTixpRkFBdUQ7UUFFdkQsaUZBQStGO1FBRWpHLGlCQUFNO1FBRU4saUZBQWtHO1FBRXBHLGlCQUFNO1FBRU4sd0NBQStDOztRQWpCdkMsZUFBYTtRQUFiLCtCQUFhLHdCQUFBLDZCQUFBO1FBT0gsZUFBd0M7UUFBeEMsNEZBQXdDO1FBRXhDLGVBQW9EO1FBQXBELHVLQUFvRDtRQUl0RCxlQUFxRDtRQUFyRCx3S0FBcUQ7O2tERGV4RCxjQUFjO2NBckIxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFdBQVcsRUFBQyxjQUFjO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzNCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUM7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsVUFBVTtvQkFDVixVQUFVO29CQUVWLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtpQkFDdEI7YUFDRjs2RkFLdUIsT0FBTztrQkFBNUIsU0FBUzttQkFBRSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuL3ZpZXcvb3B0aW9ucy1wcm92aWRlcic7XG5pbXBvcnQgeyBEaXNwbGF5TWFuYWdlciB9IGZyb20gJy4vdmlldy9kaXNwbGF5LW1hbmFnZXInO1xuaW1wb3J0IHsgQ2hhcnRTdG9yZSB9IGZyb20gJy4vYmFzZS9jaGFydC5zdG9yZSc7XG5pbXBvcnQgeyBVSUNoYXJ0IH0gZnJvbSAncHJpbWVuZyc7XG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UvY2hhcnQtYmFzZSc7XG5pbXBvcnQgeyBFeHRlbnNpb25zTWFuYWdlciB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL2V4dGVuc2lvbnMtbWFuYWdlcic7XG5pbXBvcnQgeyBUcmFja2JhbGxEcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3ZpZXcvZHJhd2Vycy90cmFja2JhbGwnO1xuaW1wb3J0IHsgVGhyZXNob2xkRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvdGhyZXNob2xkcyc7XG5pbXBvcnQgeyBUaW1lUmVnaW9uc0RyYXdlclBsdWdpbiB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL3RpbWUtcmVnaW9ucyc7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuL2RhdGEvZGF0YS1wcm92aWRlcic7XG5pbXBvcnQgeyBEYXRhQ29udmVydGVyIH0gZnJvbSAnLi9kYXRhL2RhdGEtY29udmVydGVyJztcbmltcG9ydCB7IEFsZXJ0RHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvYWxlcnQnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkRyYXdlclBsdWdpbiB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL2Fubm90YXRpb25zJztcbmltcG9ydCB7IE1vdXNlU3RvcmUgfSBmcm9tICcuL2Jhc2UvbW91c2Uuc3RvcmUnO1xuaW1wb3J0IHsgRHJhZ1JhbmdlRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvZHJhZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpZGdldCcsXG4gIHRlbXBsYXRlVXJsOicuL2NoYXJ0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczpbXG4gICAgRGF0YVByb3ZpZGVyLFxuICAgIERhdGFDb252ZXJ0ZXIsXG4gICAgRGlzcGxheU1hbmFnZXIsXG4gICAgQ2hhcnRTdG9yZSxcbiAgICBNb3VzZVN0b3JlLFxuICAgIFxuICAgIEV4dGVuc2lvbnNNYW5hZ2VyLFxuICAgIFRyYWNrYmFsbERyYXdlclBsdWdpbixcbiAgICBUaHJlc2hvbGREcmF3ZXJQbHVnaW4sXG4gICAgVGltZVJlZ2lvbnNEcmF3ZXJQbHVnaW4sXG4gICAgQWxlcnREcmF3ZXJQbHVnaW4sXG4gICAgQW5ub3RhdGlvbkRyYXdlclBsdWdpbixcbiAgICBEcmFnUmFuZ2VEcmF3ZXJQbHVnaW5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gIFxuICBzaG93QWxlcnRIYW5kbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb3B0aW9uczogYW55O1xuICBAVmlld0NoaWxkKCBVSUNoYXJ0ICkgY29udHJvbDtcblxuICBjb25zdHJ1Y3RvciggXG4gICAgc3RvcmU6IENoYXJ0U3RvcmUsXG4gICAgcHVibGljIHBsdWdpbnM6IEV4dGVuc2lvbnNNYW5hZ2VyICkge1xuICAgICAgc3VwZXIoIHN0b3JlIClcblxuICAgICAgdGhpcy5vcHRpb25zID0gT3B0aW9uc1Byb3ZpZGVyLmdldE9wdGlvbnMoIHRoaXMgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMud2lkZ2V0LmNvbXBvbmVudCA9IHRoaXM7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuc3RvcmUuZGVzdHJveSgpO1xuICAgIHRoaXMucGx1Z2lucy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGFydF9fd3JhcHBlclwiPlxuXG4gIDxkaXYgY2xhc3M9XCJjaGFydF9fcmlnaHQtbGVnZW5kLWNvbnRcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJjaGFydF9fY2FudmFzLWNvbnRcIj5cbiAgICAgIDxwLWNoYXJ0IFxuICAgICAgICAobW91c2Vkb3duKT1cInN0b3JlLm1vdXNlLmRvd24oICRldmVudCApXCJcbiAgICAgICAgKG1vdXNldXApPVwic3RvcmUubW91c2UudXAoICRldmVudCApXCJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwic3RvcmUubW91c2UubGVhdmUoICRldmVudCApXCJcbiAgICAgICAgdHlwZT1cImxpbmVcIlxuICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIFtwbHVnaW5zXT1cInBsdWdpbnMubGlzdFwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIiAjY2hhcnQ+XG4gICAgICA8L3AtY2hhcnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8YWxlcnQtaGFuZGxlICpuZ0lmPVwic2hvd0FsZXJ0SGFuZGxlICYmIHdpZGdldD8uYWxlcnRcIj48L2FsZXJ0LWhhbmRsZT5cblxuICAgIDxjaGFydC1sZWdlbmQgKm5nSWY9XCJ3aWRnZXQ/LmxlZ2VuZC5zaG93ICYmIHdpZGdldD8ubGVnZW5kPy5yaWdodFwiIGNsYXNzPVwiY2hhcnRfX2xlZ2VuZC1yaWdodFwiPjwvY2hhcnQtbGVnZW5kPlxuICAgIFxuICA8L2Rpdj5cblxuICA8Y2hhcnQtbGVnZW5kICpuZ0lmPVwid2lkZ2V0Py5sZWdlbmQuc2hvdyAmJiAhd2lkZ2V0Py5sZWdlbmQ/LnJpZ2h0XCIgY2xhc3M9XCJjaGFydF9fbGVnZW5kLWJvdHRvbVwiID48L2NoYXJ0LWxlZ2VuZD5cblxuPC9kaXY+XG5cbjxhbm5vdGF0aW9uLWRpc3BhdGNoZXI+PC9hbm5vdGF0aW9uLWRpc3BhdGNoZXI+XG5cblxuXG4iXX0=