import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { AxesEditorComponent } from './edit/axes/axes';
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
        GeneralEditorComponent,
        MetricsEditorComponent,
        AxesEditorComponent,
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
                    GeneralEditorComponent,
                    MetricsEditorComponent,
                    AxesEditorComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvY2hhcnQubW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFnQzVELE1BQU0sT0FBTyxpQkFBaUI7O3FEQUFqQixpQkFBaUI7aUhBQWpCLGlCQUFpQixrQkFoQm5CO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsV0FBVztZQUVYLGNBQWM7WUFDZCxhQUFhO1lBQ2Isc0JBQXNCO1NBQ3ZCO3dGQU9VLGlCQUFpQixtQkE1QjFCLGNBQWM7UUFDZCxvQkFBb0I7UUFFcEIsb0JBQW9CO1FBR3BCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHFCQUFxQixhQUlyQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixXQUFXO1FBRVgsY0FBYztRQUNkLGFBQWE7UUFDYixzQkFBc0IsYUFHdEIsY0FBYztRQUNkLG9CQUFvQjtrREFJWCxpQkFBaUI7Y0E5QjdCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxvQkFBb0I7b0JBRXBCLG9CQUFvQjtvQkFHcEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUV0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFFWCxjQUFjO29CQUNkLGFBQWE7b0JBQ2Isc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxvQkFBb0I7aUJBQ3JCO2FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRWRDb21tb25Nb2R1bGUgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSB9IGZyb20gJ25neC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgRWRVaWxpYk1vZHVsZSB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jJztcbmltcG9ydCB7IEF4ZXNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvYXhlcy9heGVzJztcbmltcG9ydCB7IENoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2VkaXRvcic7XG5pbXBvcnQgeyBHZW5lcmFsRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2dlbmVyYWwvZ2VuZXJhbCc7XG5pbXBvcnQgeyBMZWdlbmRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvbGVnZW5kL2xlZ2VuZCc7XG5pbXBvcnQgeyBNZXRyaWNzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L21ldHJpY3MvbWV0cmljcyc7XG5pbXBvcnQgeyBDaGFydExlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vdmlldy9sZWdlbmQvbGVnZW5kJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRFZGl0b3JDb21wb25lbnQsXG5cbiAgICBDaGFydExlZ2VuZENvbXBvbmVudCxcblxuXG4gICAgR2VuZXJhbEVkaXRvckNvbXBvbmVudCxcbiAgICBNZXRyaWNzRWRpdG9yQ29tcG9uZW50LFxuICAgIEF4ZXNFZGl0b3JDb21wb25lbnQsXG4gICAgTGVnZW5kRWRpdG9yQ29tcG9uZW50LFxuXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDaGFydE1vZHVsZSxcblxuICAgIEVkQ29tbW9uTW9kdWxlLFxuICAgIEVkVWlsaWJNb2R1bGUsXG4gICAgUGVyZmVjdFNjcm9sbGJhck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRFZGl0b3JDb21wb25lbnRcbiAgXSxcbiBcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRXaWRnZXRNb2R1bGUgeyB9XG4iXX0=