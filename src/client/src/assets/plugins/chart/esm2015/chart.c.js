import { Component } from '@angular/core';
import { PluginLoader } from 'common';
import { TrackballDrawerPlugin } from './extensions/trackball-drawer';
import { DataProvider } from './services/data-provider';
import { SeriesManager } from './services/series-manager';
import * as i0 from "@angular/core";
import * as i1 from "./services/data-provider";
import * as i2 from "./services/series-manager";
import * as i3 from "primeng";
export class ChartComponent {
    constructor(dataProvider, seriesManager) {
        this.dataProvider = dataProvider;
        this.seriesManager = seriesManager;
        this.plugins = [new TrackballDrawerPlugin()];
        seriesManager
            .dataSets$
            .subscribe(x => this.data = { datasets: x });
        const axisYa = {
            id: 'A',
            gridLines: {
                color: 'rgba( 255,255,255, 0.1)',
                zeroLineWidth: 3,
            },
        };
        const axisYb = {
            id: 'B',
            position: 'right'
        };
        this.options = {
            maintainAspectRatio: false,
            animation: false,
            legend: {
                display: false
            },
            spanGaps: true,
            scales: {
                xAxes: [{
                        type: 'time',
                        gridLines: {
                            color: 'rgba( 255,255,255, 0.1)',
                        },
                        ticks: {
                            autoSkip: true,
                            autoSkipPadding: 50,
                            maxRotation: 0,
                            minRotation: 0,
                        },
                        time: {
                            displayFormats: {
                                second: 'HH:mm:ss',
                                minute: 'HH:mm',
                                hour: 'HH:mm',
                                day: 'M/D HH:mm',
                                week: 'M/D',
                                month: 'M/D',
                                year: 'YYYY-M',
                            },
                        },
                    }],
                yAxes: /*!AxesManager.needSecondaryYAxis(widget)*/ true ? [axisYa] : [axisYa, axisYb]
            },
        };
    }
    ngOnDestroy() {
        this.dataProvider.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(i1.DataProvider), i0.ɵɵdirectiveInject(i2.SeriesManager)); };
ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], features: [i0.ɵɵProvidersFeature([
            DataProvider,
            SeriesManager,
            PluginLoader
        ])], decls: 1, vars: 3, consts: [["type", "line", "height", "100%", 3, "data", "options", "plugins"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "p-chart", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
    } }, directives: [i3.UIChart], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                providers: [
                    DataProvider,
                    SeriesManager,
                    PluginLoader
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
    }], function () { return [{ type: i1.DataProvider }, { type: i2.SeriesManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2NoYXJ0LmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBbUIxRCxNQUFNLE9BQU8sY0FBYztJQU16QixZQUNVLFlBQTBCLEVBQzFCLGFBQTRCO1FBRDVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSnRDLFlBQU8sR0FBRyxDQUFFLElBQUkscUJBQXFCLEVBQUUsQ0FBRSxDQUFBO1FBTXJDLGFBQWE7YUFDVixTQUFTO2FBQ1QsU0FBUyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBRS9DLE1BQU0sTUFBTSxHQUFHO1lBQ2IsRUFBRSxFQUFFLEdBQUc7WUFDUCxTQUFTLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsYUFBYSxFQUFFLENBQUM7YUFDakI7U0FDRixDQUFBO1FBRUQsTUFBTSxNQUFNLEdBQUc7WUFDYixFQUFFLEVBQUUsR0FBRztZQUNQLFFBQVEsRUFBRSxPQUFPO1NBQ2xCLENBQUE7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixTQUFTLEVBQUUsS0FBSztZQUVoQixNQUFNLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUVELFFBQVEsRUFBRSxJQUFJO1lBRWQsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO3dCQUNOLElBQUksRUFBRSxNQUFNO3dCQUNaLFNBQVMsRUFBRTs0QkFDVCxLQUFLLEVBQUUseUJBQXlCO3lCQUNqQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ0wsUUFBUSxFQUFFLElBQUk7NEJBQ2QsZUFBZSxFQUFFLEVBQUU7NEJBQ25CLFdBQVcsRUFBRSxDQUFDOzRCQUNkLFdBQVcsRUFBRSxDQUFDO3lCQUNmO3dCQUNELElBQUksRUFBRTs0QkFDSixjQUFjLEVBQUU7Z0NBQ2QsTUFBTSxFQUFFLFVBQVU7Z0NBQ2xCLE1BQU0sRUFBRSxPQUFPO2dDQUNmLElBQUksRUFBRSxPQUFPO2dDQUNiLEdBQUcsRUFBRSxXQUFXO2dDQUNoQixJQUFJLEVBQUUsS0FBSztnQ0FDWCxLQUFLLEVBQUUsS0FBSztnQ0FDWixJQUFJLEVBQUUsUUFBUTs2QkFDZDt5QkFHSDtxQkFJRixDQUFDO2dCQUNGLEtBQUssRUFBRSwyQ0FBMkMsQ0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzthQUVyRjtTQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7NEVBMUVVLGNBQWM7bURBQWQsY0FBYyw0REFmZjtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtTQUNiO1FBRUMsNkJBTVU7O1FBSlIsK0JBQWEsd0JBQUEsd0JBQUE7O2tEQU9OLGNBQWM7Y0FqQjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFDO29CQUNSLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixZQUFZO2lCQUNiO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW5Mb2FkZXIgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgVHJhY2tiYWxsRHJhd2VyUGx1Z2luIH0gZnJvbSAnLi9leHRlbnNpb25zL3RyYWNrYmFsbC1kcmF3ZXInO1xuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLXByb3ZpZGVyJztcbmltcG9ydCB7IFNlcmllc01hbmFnZXIgfSBmcm9tICcuL3NlcnZpY2VzL3Nlcmllcy1tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2lkZ2V0JyxcbiAgcHJvdmlkZXJzOlsgXG4gICAgRGF0YVByb3ZpZGVyLFxuICAgIFNlcmllc01hbmFnZXIsXG4gICAgUGx1Z2luTG9hZGVyXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHAtY2hhcnQgXG4gICAgICB0eXBlPVwibGluZVwiXG4gICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgW3BsdWdpbnNdPVwicGx1Z2luc1wiXG4gICAgICBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgPC9wLWNoYXJ0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGF0YTogYW55O1xuICBvcHRpb25zOiBhbnk7XG5cbiAgcGx1Z2lucyA9IFsgbmV3IFRyYWNrYmFsbERyYXdlclBsdWdpbigpIF1cblxuICBjb25zdHJ1Y3RvciggXG4gICAgcHJpdmF0ZSBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlcixcbiAgICBwcml2YXRlIHNlcmllc01hbmFnZXI6IFNlcmllc01hbmFnZXIgKSB7XG5cbiAgICAgIHNlcmllc01hbmFnZXJcbiAgICAgICAgLmRhdGFTZXRzJFxuICAgICAgICAuc3Vic2NyaWJlKCB4ID0+IHRoaXMuZGF0YSA9IHsgZGF0YXNldHM6IHggfSApO1xuXG4gICAgICAgIGNvbnN0IGF4aXNZYSA9IHtcbiAgICAgICAgICBpZDogJ0EnLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKCAyNTUsMjU1LDI1NSwgMC4xKScsXG4gICAgICAgICAgICB6ZXJvTGluZVdpZHRoOiAzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgYXhpc1liID0ge1xuICAgICAgICAgIGlkOiAnQicsXG4gICAgICAgICAgcG9zaXRpb246ICdyaWdodCdcbiAgICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBzcGFuR2FwczogdHJ1ZSxcblxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoIDI1NSwyNTUsMjU1LCAwLjEpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICBhdXRvU2tpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgYXV0b1NraXBQYWRkaW5nOiA1MCxcbiAgICAgICAgICAgICAgbWF4Um90YXRpb246IDAsXG4gICAgICAgICAgICAgIG1pblJvdGF0aW9uOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheUZvcm1hdHM6IHtcbiAgICAgICAgICAgICAgICBzZWNvbmQ6ICdISDptbTpzcycsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnSEg6bW0nLFxuICAgICAgICAgICAgICAgIGhvdXI6ICdISDptbScsXG4gICAgICAgICAgICAgICAgZGF5OiAnTS9EIEhIOm1tJyxcbiAgICAgICAgICAgICAgICB3ZWVrOiAnTS9EJyxcbiAgICAgICAgICAgICAgICBtb250aDogJ00vRCcsXG4gICAgICAgICAgICAgICAgeWVhcjogJ1lZWVktTScsXG4gICAgICAgICAgICAgICB9LFxuICBcbiAgICAgICAgICAgICAgIC8vc3RlcFNpemU6IDMwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIFxuICBcbiAgICAgICAgICBcbiAgICAgICAgICB9XSxcbiAgICAgICAgICB5QXhlczogLyohQXhlc01hbmFnZXIubmVlZFNlY29uZGFyeVlBeGlzKHdpZGdldCkqL3RydWUgPyBbYXhpc1lhXSA6IFtheGlzWWEsIGF4aXNZYl1cbiAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgIH07XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZGF0YVByb3ZpZGVyLmRlc3Ryb3koKTtcbiAgfVxuIFxufVxuIl19