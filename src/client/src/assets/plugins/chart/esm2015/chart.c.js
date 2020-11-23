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
import { NoContentPlugin } from './view/drawers/no-content';
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
            DragRangeDrawerPlugin,
            NoContentPlugin
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
                    DragRangeDrawerPlugin,
                    NoContentPlugin
                ]
            }]
    }], function () { return [{ type: i1.ChartStore }, { type: i2.ExtensionsManager }]; }, { control: [{
            type: ViewChild,
            args: [UIChart]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiLCIuLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztJQ0N4RCwrQkFBc0U7OztJQUV0RSxrQ0FBOEc7OztJQUloSCxrQ0FBaUg7O0FEaUJuSCxNQUFNLE9BQU8sY0FBZSxTQUFRLGtCQUFrQjtJQU1wRCxZQUNFLEtBQWlCLEVBQ1YsT0FBMEI7UUFDL0IsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFBO1FBRFQsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFObkMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFTN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUM7OzRFQXJCVSxjQUFjO21EQUFkLGNBQWM7dUJBSWIsT0FBTzs7OzswQ0FyQlQ7WUFDUixZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCxVQUFVO1lBQ1YsVUFBVTtZQUVWLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIscUJBQXFCO1lBQ3JCLHVCQUF1QjtZQUN2QixpQkFBaUI7WUFDakIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixlQUFlO1NBQ2hCO1FDdENILDhCQUVFO1FBQUEsOEJBRUU7UUFBQSw4QkFDRTtRQUFBLHFDQVNVO1FBUlIsMEdBQWEsNEJBQTBCLElBQUMseUZBQzdCLDBCQUF3QixJQURLLCtGQUUxQiw2QkFBMkIsSUFGRDtRQVExQyxpQkFBVTtRQUNaLGlCQUFNO1FBRU4saUZBQXVEO1FBRXZELGlGQUErRjtRQUVqRyxpQkFBTTtRQUVOLGlGQUFrRztRQUVwRyxpQkFBTTtRQUVOLHdDQUErQzs7UUFqQnZDLGVBQWE7UUFBYiwrQkFBYSx3QkFBQSw2QkFBQTtRQU9ILGVBQXdDO1FBQXhDLDRGQUF3QztRQUV4QyxlQUFvRDtRQUFwRCx1S0FBb0Q7UUFJdEQsZUFBcUQ7UUFBckQsd0tBQXFEOztrRERpQnhELGNBQWM7Y0F0QjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsV0FBVyxFQUFDLGNBQWM7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBQztvQkFDUixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxVQUFVO29CQUNWLFVBQVU7b0JBRVYsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixlQUFlO2lCQUNoQjthQUNGOzZGQUt1QixPQUFPO2tCQUE1QixTQUFTO21CQUFFLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vdmlldy9vcHRpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IERpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi92aWV3L2Rpc3BsYXktbWFuYWdlcic7XG5pbXBvcnQgeyBDaGFydFN0b3JlIH0gZnJvbSAnLi9iYXNlL2NoYXJ0LnN0b3JlJztcbmltcG9ydCB7IFVJQ2hhcnQgfSBmcm9tICdwcmltZW5nJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS9jaGFydC1iYXNlJztcbmltcG9ydCB7IEV4dGVuc2lvbnNNYW5hZ2VyIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvZXh0ZW5zaW9ucy1tYW5hZ2VyJztcbmltcG9ydCB7IFRyYWNrYmFsbERyYXdlclBsdWdpbiB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL3RyYWNrYmFsbCc7XG5pbXBvcnQgeyBUaHJlc2hvbGREcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3ZpZXcvZHJhd2Vycy90aHJlc2hvbGRzJztcbmltcG9ydCB7IFRpbWVSZWdpb25zRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvdGltZS1yZWdpb25zJztcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4vZGF0YS9kYXRhLXByb3ZpZGVyJztcbmltcG9ydCB7IERhdGFDb252ZXJ0ZXIgfSBmcm9tICcuL2RhdGEvZGF0YS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQWxlcnREcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3ZpZXcvZHJhd2Vycy9hbGVydCc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2RyYXdlcnMvYW5ub3RhdGlvbnMnO1xuaW1wb3J0IHsgTW91c2VTdG9yZSB9IGZyb20gJy4vYmFzZS9tb3VzZS5zdG9yZSc7XG5pbXBvcnQgeyBEcmFnUmFuZ2VEcmF3ZXJQbHVnaW4gfSBmcm9tICcuL3ZpZXcvZHJhd2Vycy9kcmFnJztcbmltcG9ydCB7IE5vQ29udGVudFBsdWdpbiB9IGZyb20gJy4vdmlldy9kcmF3ZXJzL25vLWNvbnRlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDonLi9jaGFydC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6W1xuICAgIERhdGFQcm92aWRlcixcbiAgICBEYXRhQ29udmVydGVyLFxuICAgIERpc3BsYXlNYW5hZ2VyLFxuICAgIENoYXJ0U3RvcmUsXG4gICAgTW91c2VTdG9yZSxcbiAgICBcbiAgICBFeHRlbnNpb25zTWFuYWdlcixcbiAgICBUcmFja2JhbGxEcmF3ZXJQbHVnaW4sXG4gICAgVGhyZXNob2xkRHJhd2VyUGx1Z2luLFxuICAgIFRpbWVSZWdpb25zRHJhd2VyUGx1Z2luLFxuICAgIEFsZXJ0RHJhd2VyUGx1Z2luLFxuICAgIEFubm90YXRpb25EcmF3ZXJQbHVnaW4sXG4gICAgRHJhZ1JhbmdlRHJhd2VyUGx1Z2luLFxuICAgIE5vQ29udGVudFBsdWdpblxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgXG4gIHNob3dBbGVydEhhbmRsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBvcHRpb25zOiBhbnk7XG4gIEBWaWV3Q2hpbGQoIFVJQ2hhcnQgKSBjb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKCBcbiAgICBzdG9yZTogQ2hhcnRTdG9yZSxcbiAgICBwdWJsaWMgcGx1Z2luczogRXh0ZW5zaW9uc01hbmFnZXIgKSB7XG4gICAgICBzdXBlciggc3RvcmUgKVxuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBPcHRpb25zUHJvdmlkZXIuZ2V0T3B0aW9ucyggdGhpcyApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy53aWRnZXQuY29tcG9uZW50ID0gdGhpcztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5zdG9yZS5kZXN0cm95KCk7XG4gICAgdGhpcy5wbHVnaW5zLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNoYXJ0X193cmFwcGVyXCI+XG5cbiAgPGRpdiBjbGFzcz1cImNoYXJ0X19yaWdodC1sZWdlbmQtY29udFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0X19jYW52YXMtY29udFwiPlxuICAgICAgPHAtY2hhcnQgXG4gICAgICAgIChtb3VzZWRvd24pPVwic3RvcmUubW91c2UuZG93biggJGV2ZW50IClcIlxuICAgICAgICAobW91c2V1cCk9XCJzdG9yZS5tb3VzZS51cCggJGV2ZW50IClcIlxuICAgICAgICAobW91c2VsZWF2ZSk9XCJzdG9yZS5tb3VzZS5sZWF2ZSggJGV2ZW50IClcIlxuICAgICAgICB0eXBlPVwibGluZVwiXG4gICAgICAgIFtkYXRhXT1cImRhdGFcIlxuICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgICAgW3BsdWdpbnNdPVwicGx1Z2lucy5saXN0XCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiICNjaGFydD5cbiAgICAgIDwvcC1jaGFydD5cbiAgICA8L2Rpdj5cblxuICAgIDxhbGVydC1oYW5kbGUgKm5nSWY9XCJzaG93QWxlcnRIYW5kbGUgJiYgd2lkZ2V0Py5hbGVydFwiPjwvYWxlcnQtaGFuZGxlPlxuXG4gICAgPGNoYXJ0LWxlZ2VuZCAqbmdJZj1cIndpZGdldD8ubGVnZW5kLnNob3cgJiYgd2lkZ2V0Py5sZWdlbmQ/LnJpZ2h0XCIgY2xhc3M9XCJjaGFydF9fbGVnZW5kLXJpZ2h0XCI+PC9jaGFydC1sZWdlbmQ+XG4gICAgXG4gIDwvZGl2PlxuXG4gIDxjaGFydC1sZWdlbmQgKm5nSWY9XCJ3aWRnZXQ/LmxlZ2VuZC5zaG93ICYmICF3aWRnZXQ/LmxlZ2VuZD8ucmlnaHRcIiBjbGFzcz1cImNoYXJ0X19sZWdlbmQtYm90dG9tXCIgPjwvY2hhcnQtbGVnZW5kPlxuXG48L2Rpdj5cblxuPGFubm90YXRpb24tZGlzcGF0Y2hlcj48L2Fubm90YXRpb24tZGlzcGF0Y2hlcj5cblxuXG5cbiJdfQ==