import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
// import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import * as i0 from "@angular/core";
export class ChartWidgetModule {
}
ChartWidgetModule.ɵmod = i0.ɵɵdefineNgModule({ type: ChartWidgetModule });
ChartWidgetModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            EdCommonModule,
            EdUilibModule,
            ButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EdCommonModule,
        EdUilibModule,
        ButtonModule], exports: [ChartComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ChartComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    EdCommonModule,
                    EdUilibModule,
                    ButtonModule
                ],
                exports: [
                    ChartComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvY2hhcnQubW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hDLCtDQUErQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQW9CM0MsTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLGtCQWRuQjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBRW5CLGNBQWM7WUFDZCxhQUFhO1lBQ2IsWUFBWTtTQUViO3dGQUtVLGlCQUFpQixtQkFoQjFCLGNBQWMsYUFHZCxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUVuQixjQUFjO1FBQ2QsYUFBYTtRQUNiLFlBQVksYUFJWixjQUFjO2tEQUdMLGlCQUFpQjtjQWxCN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUVuQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtpQkFFYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsY0FBYztpQkFDZjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVkQ29tbW9uTW9kdWxlIH0gZnJvbSAnY29tbW9uJztcbi8vIGltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGFydCc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgRWRVaWxpYk1vZHVsZSB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhcnRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgRWRDb21tb25Nb2R1bGUsXG4gICAgRWRVaWxpYk1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGVcbiAgICBcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENoYXJ0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRXaWRnZXRNb2R1bGUgeyB9XG4iXX0=