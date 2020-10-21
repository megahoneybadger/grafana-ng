import { Component } from '@angular/core';
import { TrackballDrawerPlugin } from './view/extensions/trackball-drawer';
import { DataProvider } from './view/data/data-provider';
import { OptionsProvider } from './view/options-provider';
import { DataConverter } from './view/data/data-converter';
import { DisplayManager } from './view/render/display-manager';
import * as i0 from "@angular/core";
import * as i1 from "./view/data/data-provider";
import * as i2 from "primeng";
export class ChartComponent {
    constructor(dataProvider) {
        this.dataProvider = dataProvider;
        this.plugins = [new TrackballDrawerPlugin()];
        this
            .dataProvider
            .data$
            .subscribe(d => this.data = d);
        this.options = OptionsProvider.getOptions();
    }
    ngOnDestroy() {
        this.dataProvider.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(i1.DataProvider)); };
ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], features: [i0.ɵɵProvidersFeature([
            DataProvider,
            DataConverter,
            DisplayManager,
        ])], decls: 1, vars: 3, consts: [["type", "line", "height", "100%", 3, "data", "options", "plugins"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "p-chart", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
    } }, directives: [i2.UIChart], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                providers: [
                    DataProvider,
                    DataConverter,
                    DisplayManager,
                ],
                template: `
    <p-chart 
      type="line"
      [data]="data"
      [options]="options"
      [plugins]="plugins"
      height="100%">
    </p-chart>
  `
            }]
    }], function () { return [{ type: i1.DataProvider }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFvQi9ELE1BQU0sT0FBTyxjQUFjO0lBTXpCLFlBQXFCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRi9DLFlBQU8sR0FBRyxDQUFFLElBQUkscUJBQXFCLEVBQUUsQ0FBRSxDQUFBO1FBSXZDLElBQUk7YUFDRCxZQUFZO2FBQ1osS0FBSzthQUNMLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFHLENBQUE7UUFFbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7OzRFQWxCVSxjQUFjO21EQUFkLGNBQWMsNERBaEJmO1lBQ1IsWUFBWTtZQUNaLGFBQWE7WUFFYixjQUFjO1NBQ2Y7UUFFQyw2QkFNVTs7UUFKUiwrQkFBYSx3QkFBQSx3QkFBQTs7a0RBT04sY0FBYztjQWxCMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUM7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUViLGNBQWM7aUJBQ2Y7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYWNrYmFsbERyYXdlclBsdWdpbiB9IGZyb20gJy4vdmlldy9leHRlbnNpb25zL3RyYWNrYmFsbC1kcmF3ZXInO1xuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi92aWV3L2RhdGEvZGF0YS1wcm92aWRlcic7XG5pbXBvcnQgeyBPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuL3ZpZXcvb3B0aW9ucy1wcm92aWRlcic7XG5pbXBvcnQgeyBEYXRhQ29udmVydGVyIH0gZnJvbSAnLi92aWV3L2RhdGEvZGF0YS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnLi9jaGFydC5tJztcbmltcG9ydCB7IERpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi92aWV3L3JlbmRlci9kaXNwbGF5LW1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aWRnZXQnLFxuICBwcm92aWRlcnM6WyBcbiAgICBEYXRhUHJvdmlkZXIsXG4gICAgRGF0YUNvbnZlcnRlcixcblxuICAgIERpc3BsYXlNYW5hZ2VyLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwLWNoYXJ0IFxuICAgICAgdHlwZT1cImxpbmVcIlxuICAgICAgW2RhdGFdPVwiZGF0YVwiXG4gICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgIFtwbHVnaW5zXT1cInBsdWdpbnNcIlxuICAgICAgaGVpZ2h0PVwiMTAwJVwiPlxuICAgIDwvcC1jaGFydD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCB7XG4gIGRhdGE6IENoYXJ0RGF0YTtcbiAgb3B0aW9uczogYW55O1xuXG4gIHBsdWdpbnMgPSBbIG5ldyBUcmFja2JhbGxEcmF3ZXJQbHVnaW4oKSBdXG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIgKSB7XG5cbiAgICB0aGlzXG4gICAgICAuZGF0YVByb3ZpZGVyXG4gICAgICAuZGF0YSRcbiAgICAgIC5zdWJzY3JpYmUoIGQgPT4gdGhpcy5kYXRhID0gZCAgKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT3B0aW9uc1Byb3ZpZGVyLmdldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5kYXRhUHJvdmlkZXIuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=