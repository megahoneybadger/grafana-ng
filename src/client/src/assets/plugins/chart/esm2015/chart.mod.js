import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { AxesEditorComponent } from './edit/axes/axes';
import { ChartEditorComponent } from './edit/editor';
import { GeneralEditorComponent } from './edit/general/general';
import { LegendEditorComponent } from './edit/legend/legend';
import { MetricsEditorComponent } from './edit/metrics/metrics';
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent,
        ChartEditorComponent,
        GeneralEditorComponent,
        MetricsEditorComponent,
        AxesEditorComponent,
        LegendEditorComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule,
        EdCommonModule,
        EdUilibModule], exports: [ChartComponent,
        ChartEditorComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ChartComponent,
                    ChartEditorComponent,
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
                ],
                exports: [
                    ChartComponent,
                    ChartEditorComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvY2hhcnQubW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUEyQmhFLE1BQU0sT0FBTyxpQkFBaUI7O3FEQUFqQixpQkFBaUI7aUhBQWpCLGlCQUFpQixrQkFkbkI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixXQUFXO1lBRVgsY0FBYztZQUNkLGFBQWE7U0FDZDt3RkFNVSxpQkFBaUIsbUJBdkIxQixjQUFjO1FBQ2Qsb0JBQW9CO1FBRXBCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHFCQUFxQixhQUlyQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixXQUFXO1FBRVgsY0FBYztRQUNkLGFBQWEsYUFHYixjQUFjO1FBQ2Qsb0JBQW9CO2tEQUdYLGlCQUFpQjtjQXpCN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLG9CQUFvQjtvQkFFcEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUV0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFFWCxjQUFjO29CQUNkLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVkQ29tbW9uTW9kdWxlIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAncHJpbWVuZyc7XG5pbXBvcnQgeyBFZFVpbGliTW9kdWxlIH0gZnJvbSAndWlsaWInO1xuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmMnO1xuaW1wb3J0IHsgQXhlc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9heGVzL2F4ZXMnO1xuaW1wb3J0IHsgQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZWRpdG9yJztcbmltcG9ydCB7IEdlbmVyYWxFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZ2VuZXJhbC9nZW5lcmFsJztcbmltcG9ydCB7IExlZ2VuZEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9sZWdlbmQvbGVnZW5kJztcbmltcG9ydCB7IE1ldHJpY3NFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvbWV0cmljcy9tZXRyaWNzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRFZGl0b3JDb21wb25lbnQsXG5cbiAgICBHZW5lcmFsRWRpdG9yQ29tcG9uZW50LFxuICAgIE1ldHJpY3NFZGl0b3JDb21wb25lbnQsXG4gICAgQXhlc0VkaXRvckNvbXBvbmVudCxcbiAgICBMZWdlbmRFZGl0b3JDb21wb25lbnQsXG5cbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENoYXJ0TW9kdWxlLFxuXG4gICAgRWRDb21tb25Nb2R1bGUsXG4gICAgRWRVaWxpYk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0RWRpdG9yQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRXaWRnZXRNb2R1bGUgeyB9XG4iXX0=