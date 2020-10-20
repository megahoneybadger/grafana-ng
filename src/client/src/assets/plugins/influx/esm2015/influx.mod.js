import { NgModule } from '@angular/core';
import { InfluxSettingsEditorComponent } from './settings/settings';
import { InfluxQueryCompiler } from './query/compiler';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
        InfluxQueryCompiler], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EdCommonModule,
        EdUilibModule], exports: [InfluxSettingsEditorComponent,
        InfluxQueryCompiler] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InfluxModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    InfluxSettingsEditorComponent,
                    InfluxQueryCompiler
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
                    InfluxQueryCompiler,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mbHV4Lm1vZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2VzL2luZmx1eC9zcmMvaW5mbHV4Lm1vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQW9CL0MsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxrQkFiZDtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBRW5CLGNBQWM7WUFDZCxhQUFhO1NBQ2Q7d0ZBTVUsWUFBWSxtQkFoQnJCLDZCQUE2QjtRQUM3QixtQkFBbUIsYUFHbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFFbkIsY0FBYztRQUNkLGFBQWEsYUFHYiw2QkFBNkI7UUFDN0IsbUJBQW1CO2tEQUdWLFlBQVk7Y0FsQnhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osNkJBQTZCO29CQUM3QixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUVuQixjQUFjO29CQUNkLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLDZCQUE2QjtvQkFDN0IsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZmx1eFNldHRpbmdzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeUNvbXBpbGVyIH0gZnJvbSAnLi9xdWVyeS9jb21waWxlcic7XG5cbmltcG9ydCB7IEVkQ29tbW9uTW9kdWxlIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEVkVWlsaWJNb2R1bGUgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEluZmx1eFNldHRpbmdzRWRpdG9yQ29tcG9uZW50LFxuICAgIEluZmx1eFF1ZXJ5Q29tcGlsZXJcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgRWRDb21tb25Nb2R1bGUsXG4gICAgRWRVaWxpYk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSW5mbHV4U2V0dGluZ3NFZGl0b3JDb21wb25lbnQsXG4gICAgSW5mbHV4UXVlcnlDb21waWxlcixcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbmZsdXhNb2R1bGUgeyB9XG4iXX0=