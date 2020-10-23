import { Component, ViewChild } from '@angular/core';
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
    } }, directives: [i2.UIChart, i3.NgIf, i4.ChartLegendComponent], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.chart__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;min-height:0;position:relative}.chart__right-legend-cont[_ngcontent-%COMP%]{cursor:crosshair;display:flex;flex:1;min-height:0;min-width:0}.chart__canvas-cont[_ngcontent-%COMP%]{flex:1;min-height:0;min-width:0;padding-left:5px}.chart__legend-bottom[_ngcontent-%COMP%]{flex:0 1 auto;flex-wrap:wrap;max-height:35%;overflow:hidden;padding-top:6px;position:relative}.chart__legend-right[_ngcontent-%COMP%]{flex:0 1 10px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                templateUrl: './chart.html',
                styleUrls: ['./chart.scss'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiLCIuLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztJQ01uRCxrQ0FBOEY7OztJQUloRyxrQ0FBZ0c7O0FER2xHLE1BQU0sT0FBTyxjQUFlLFNBQVEsa0JBQWtCO0lBVXBELFlBQWEsS0FBaUI7UUFDNUIsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFBO1FBUmhCLFlBQU8sR0FBRyxDQUFFLElBQUkscUJBQXFCLEVBQUUsQ0FBRSxDQUFBO1FBVXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUNwRCxDQUFDO0lBUkQsSUFBSSxNQUFNOztRQUNSLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFRRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7NEVBdEJVLGNBQWM7bURBQWQsY0FBYzt1QkFJYixPQUFPOzs7OzBDQVhUO1lBQ1IsWUFBWTtZQUNaLGFBQWE7WUFDYixjQUFjO1lBQ2QsVUFBVTtTQUNYO1FDbkJILDhCQUVFO1FBQUEsOEJBRUU7UUFBQSw4QkFDRTtRQUFBLGdDQU1VO1FBQ1osaUJBQU07UUFFTixpRkFBK0U7UUFFakYsaUJBQU07UUFFTixpRkFBaUY7UUFFbkYsaUJBQU07O1FBYkUsZUFBYTtRQUFiLCtCQUFhLHdCQUFBLHdCQUFBO1FBT0gsZUFBb0M7UUFBcEMsd0ZBQW9DO1FBSXRDLGVBQXFDO1FBQXJDLHlGQUFxQzs7a0RER3hDLGNBQWM7Y0FYMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUMsY0FBYztnQkFDMUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixTQUFTLEVBQUM7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsVUFBVTtpQkFDWDthQUNGOzZEQUt1QixTQUFTO2tCQUE5QixTQUFTO21CQUFFLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhY2tiYWxsRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi92aWV3L2V4dGVuc2lvbnMvdHJhY2tiYWxsLWRyYXdlcic7XG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuL3ZpZXcvZGF0YS9kYXRhLXByb3ZpZGVyJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vdmlldy9vcHRpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IERhdGFDb252ZXJ0ZXIgfSBmcm9tICcuL3ZpZXcvZGF0YS9kYXRhLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBEaXNwbGF5TWFuYWdlciB9IGZyb20gJy4vdmlldy9yZW5kZXIvZGlzcGxheS1tYW5hZ2VyJztcbmltcG9ydCB7IENoYXJ0U3RvcmUgfSBmcm9tICcuL2Jhc2UvY2hhcnQuc3RvcmUnO1xuaW1wb3J0IHsgVUlDaGFydCB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlL2NoYXJ0LWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDonLi9jaGFydC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuc2NzcyddLFxuICBwcm92aWRlcnM6W1xuICAgIERhdGFQcm92aWRlcixcbiAgICBEYXRhQ29udmVydGVyLFxuICAgIERpc3BsYXlNYW5hZ2VyLFxuICAgIENoYXJ0U3RvcmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gIFxuICBvcHRpb25zOiBhbnk7XG4gIHBsdWdpbnMgPSBbIG5ldyBUcmFja2JhbGxEcmF3ZXJQbHVnaW4oKSBdXG4gIEBWaWV3Q2hpbGQoIFVJQ2hhcnQgKSBjdHJsQ2hhcnQ7XG5cbiAgZ2V0IGxlZ2VuZCgpe1xuICAgIHJldHVybiB0aGlzLndpZGdldD8ubGVnZW5kO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHN0b3JlOiBDaGFydFN0b3JlICkge1xuICAgIHN1cGVyKCBzdG9yZSApXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPcHRpb25zUHJvdmlkZXIuZ2V0T3B0aW9ucyggdGhpcyApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5zdG9yZS5jb250cm9sID0gdGhpcy5jdHJsQ2hhcnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuc3RvcmUuZGVzdHJveSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hhcnRfX3dyYXBwZXJcIj5cblxuICA8ZGl2IGNsYXNzPVwiY2hhcnRfX3JpZ2h0LWxlZ2VuZC1jb250XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnRfX2NhbnZhcy1jb250XCI+XG4gICAgICA8cC1jaGFydCBcbiAgICAgICAgdHlwZT1cImxpbmVcIlxuICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIFtwbHVnaW5zXT1cInBsdWdpbnNcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCIgI2NoYXJ0PlxuICAgICAgPC9wLWNoYXJ0PlxuICAgIDwvZGl2PlxuXG4gICAgPGNoYXJ0LWxlZ2VuZCAqbmdJZj1cImxlZ2VuZC5zaG93ICYmIGxlZ2VuZD8ucmlnaHRcIiBjbGFzcz1cImNoYXJ0X19sZWdlbmQtcmlnaHRcIj48L2NoYXJ0LWxlZ2VuZD5cbiAgICBcbiAgPC9kaXY+XG5cbiAgPGNoYXJ0LWxlZ2VuZCAqbmdJZj1cImxlZ2VuZC5zaG93ICYmICFsZWdlbmQ/LnJpZ2h0XCIgY2xhc3M9XCJjaGFydF9fbGVnZW5kLWJvdHRvbVwiPjwvY2hhcnQtbGVnZW5kPlxuXG48L2Rpdj5cblxuIl19