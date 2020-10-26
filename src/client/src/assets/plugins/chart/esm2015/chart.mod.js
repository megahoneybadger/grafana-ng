import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { AxesEditorComponent } from './edit/axes/axes';
import { AxisXEditorComponent } from './edit/axes/x-axis/x-axis';
import { AxisYEditorComponent } from './edit/axes/y-axis/y-axis';
import { ChartEditorComponent } from './edit/editor';
import { GeneralEditorComponent } from './edit/general/general';
import { LegendEditorComponent } from './edit/legend/legend';
import { MetricsEditorComponent } from './edit/metrics/metrics';
import { ChartLegendComponent } from './view/legend/legend';
import * as i0 from "@angular/core";
export class ChartWidgetModule {
}
ChartWidgetModule.ɵmod = i0.ɵɵdefineNgModule({ type: ChartWidgetModule });
ChartWidgetModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ChartModule,
            EdCommonModule,
            EdUilibModule,
            PerfectScrollbarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent,
        ChartEditorComponent,
        ChartLegendComponent,
        AxesEditorComponent,
        AxisXEditorComponent,
        AxisYEditorComponent,
        GeneralEditorComponent,
        MetricsEditorComponent,
        LegendEditorComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule,
        EdCommonModule,
        EdUilibModule,
        PerfectScrollbarModule], exports: [ChartComponent,
        ChartEditorComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ChartComponent,
                    ChartEditorComponent,
                    ChartLegendComponent,
                    AxesEditorComponent,
                    AxisXEditorComponent,
                    AxisYEditorComponent,
                    GeneralEditorComponent,
                    MetricsEditorComponent,
                    LegendEditorComponent,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ChartModule,
                    EdCommonModule,
                    EdUilibModule,
                    PerfectScrollbarModule
                ],
                exports: [
                    ChartComponent,
                    ChartEditorComponent
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvY2hhcnQubW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFtQzVELE1BQU0sT0FBTyxpQkFBaUI7O3FEQUFqQixpQkFBaUI7aUhBQWpCLGlCQUFpQixrQkFoQm5CO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsV0FBVztZQUVYLGNBQWM7WUFDZCxhQUFhO1lBQ2Isc0JBQXNCO1NBQ3ZCO3dGQU9VLGlCQUFpQixtQkEvQjFCLGNBQWM7UUFDZCxvQkFBb0I7UUFFcEIsb0JBQW9CO1FBRXBCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBRXBCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFFdEIscUJBQXFCLGFBSXJCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFdBQVc7UUFFWCxjQUFjO1FBQ2QsYUFBYTtRQUNiLHNCQUFzQixhQUd0QixjQUFjO1FBQ2Qsb0JBQW9CO2tEQUlYLGlCQUFpQjtjQWpDN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLG9CQUFvQjtvQkFFcEIsb0JBQW9CO29CQUVwQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUVwQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFFdEIscUJBQXFCO2lCQUV0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFFWCxjQUFjO29CQUNkLGFBQWE7b0JBQ2Isc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxvQkFBb0I7aUJBQ3JCO2FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRWRDb21tb25Nb2R1bGUgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSB9IGZyb20gJ25neC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgRWRVaWxpYk1vZHVsZSB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jJztcbmltcG9ydCB7IEF4ZXNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvYXhlcy9heGVzJztcbmltcG9ydCB7IEF4aXNYRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2F4ZXMveC1heGlzL3gtYXhpcyc7XG5pbXBvcnQgeyBBeGlzWUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9heGVzL3ktYXhpcy95LWF4aXMnO1xuaW1wb3J0IHsgQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZWRpdG9yJztcbmltcG9ydCB7IEdlbmVyYWxFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZ2VuZXJhbC9nZW5lcmFsJztcbmltcG9ydCB7IExlZ2VuZEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9sZWdlbmQvbGVnZW5kJztcbmltcG9ydCB7IE1ldHJpY3NFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvbWV0cmljcy9tZXRyaWNzJztcbmltcG9ydCB7IENoYXJ0TGVnZW5kQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2xlZ2VuZC9sZWdlbmQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydEVkaXRvckNvbXBvbmVudCxcblxuICAgIENoYXJ0TGVnZW5kQ29tcG9uZW50LFxuXG4gICAgQXhlc0VkaXRvckNvbXBvbmVudCxcbiAgICBBeGlzWEVkaXRvckNvbXBvbmVudCxcbiAgICBBeGlzWUVkaXRvckNvbXBvbmVudCxcblxuICAgIEdlbmVyYWxFZGl0b3JDb21wb25lbnQsXG4gICAgTWV0cmljc0VkaXRvckNvbXBvbmVudCxcbiAgICBcbiAgICBMZWdlbmRFZGl0b3JDb21wb25lbnQsXG5cbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENoYXJ0TW9kdWxlLFxuXG4gICAgRWRDb21tb25Nb2R1bGUsXG4gICAgRWRVaWxpYk1vZHVsZSxcbiAgICBQZXJmZWN0U2Nyb2xsYmFyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydEVkaXRvckNvbXBvbmVudFxuICBdLFxuIFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydFdpZGdldE1vZHVsZSB7IH1cbiJdfQ==