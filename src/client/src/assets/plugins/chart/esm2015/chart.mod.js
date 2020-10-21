import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { ChartEditorComponent } from './edit/editor';
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
        ChartEditorComponent], imports: [CommonModule,
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
                    ChartEditorComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvY2hhcnQubW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFxQnJELE1BQU0sT0FBTyxpQkFBaUI7O3FEQUFqQixpQkFBaUI7aUhBQWpCLGlCQUFpQixrQkFkbkI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixXQUFXO1lBRVgsY0FBYztZQUNkLGFBQWE7U0FDZDt3RkFNVSxpQkFBaUIsbUJBakIxQixjQUFjO1FBQ2Qsb0JBQW9CLGFBR3BCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFdBQVc7UUFFWCxjQUFjO1FBQ2QsYUFBYSxhQUdiLGNBQWM7UUFDZCxvQkFBb0I7a0RBR1gsaUJBQWlCO2NBbkI3QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2Qsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFFWCxjQUFjO29CQUNkLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVkQ29tbW9uTW9kdWxlIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAncHJpbWVuZyc7XG5pbXBvcnQgeyBFZFVpbGliTW9kdWxlIH0gZnJvbSAndWlsaWInO1xuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmMnO1xuaW1wb3J0IHsgQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZWRpdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRFZGl0b3JDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENoYXJ0TW9kdWxlLFxuXG4gICAgRWRDb21tb25Nb2R1bGUsXG4gICAgRWRVaWxpYk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0RWRpdG9yQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRXaWRnZXRNb2R1bGUgeyB9XG4iXX0=