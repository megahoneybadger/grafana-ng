import { NgModule } from '@angular/core';
import { InfluxSettingsEditorComponent } from './settings/settings';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfluxMetricsBuilder } from './query/builder';
import * as i0 from "@angular/core";
export class InfluxModule {
}
InfluxModule.ɵmod = i0.ɵɵdefineNgModule({ type: InfluxModule });
InfluxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InfluxModule_Factory(t) { return new (t || InfluxModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            EdCommonModule,
            EdUilibModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent,
        InfluxMetricsBuilder], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EdCommonModule,
        EdUilibModule], exports: [InfluxSettingsEditorComponent,
        InfluxMetricsBuilder] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InfluxModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    InfluxSettingsEditorComponent,
                    InfluxMetricsBuilder,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    EdCommonModule,
                    EdUilibModule
                ],
                exports: [
                    InfluxSettingsEditorComponent,
                    InfluxMetricsBuilder,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mbHV4Lm1vZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2VzL2luZmx1eC9zcmMvaW5mbHV4Lm1vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQW9CdkQsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxrQkFiZDtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBRW5CLGNBQWM7WUFDZCxhQUFhO1NBQ2Q7d0ZBTVUsWUFBWSxtQkFoQnJCLDZCQUE2QjtRQUM3QixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFFbkIsY0FBYztRQUNkLGFBQWEsYUFHYiw2QkFBNkI7UUFDN0Isb0JBQW9CO2tEQUdYLFlBQVk7Y0FsQnhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osNkJBQTZCO29CQUM3QixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUVuQixjQUFjO29CQUNkLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLDZCQUE2QjtvQkFDN0Isb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZmx1eFNldHRpbmdzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncyc7XG5cblxuaW1wb3J0IHsgRWRDb21tb25Nb2R1bGUgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgRWRVaWxpYk1vZHVsZSB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluZmx1eE1ldHJpY3NCdWlsZGVyIH0gZnJvbSAnLi9xdWVyeS9idWlsZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSW5mbHV4U2V0dGluZ3NFZGl0b3JDb21wb25lbnQsXG4gICAgSW5mbHV4TWV0cmljc0J1aWxkZXIsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgIEVkQ29tbW9uTW9kdWxlLFxuICAgIEVkVWlsaWJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEluZmx1eFNldHRpbmdzRWRpdG9yQ29tcG9uZW50LFxuICAgIEluZmx1eE1ldHJpY3NCdWlsZGVyLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEluZmx1eE1vZHVsZSB7IH1cbiJdfQ==