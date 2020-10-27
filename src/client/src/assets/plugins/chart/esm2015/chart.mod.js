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
import { DisplayEditorComponent } from './edit/display/display';
import { DrawOptionsEditorComponent } from './edit/display/draw-options/options';
import { SeriesOverridesEditorComponent } from './edit/display/series-overrides/overrides';
import { ThresholdEditorComponent } from './edit/display/thresholds/threshold';
import { ThresholdsEditorComponent } from './edit/display/thresholds/thresholds';
import { TimeRegionsEditorComponent } from './edit/display/time-regions/time-regions';
import { ChartEditorComponent } from './edit/editor';
import { GeneralEditorComponent } from './edit/general/general';
import { LegendEditorComponent } from './edit/legend/legend';
import { MetricsEditorComponent } from './edit/metrics/metrics';
import { ChartLegendComponent } from './view/legend/legend';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "primeng";
import * as i4 from "uilib";
import * as i5 from "ngx-perfect-scrollbar";
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
        LegendEditorComponent,
        DisplayEditorComponent,
        DrawOptionsEditorComponent,
        ThresholdsEditorComponent,
        ThresholdEditorComponent,
        SeriesOverridesEditorComponent,
        TimeRegionsEditorComponent], imports: [CommonModule,
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
                    DisplayEditorComponent,
                    DrawOptionsEditorComponent,
                    ThresholdsEditorComponent,
                    ThresholdEditorComponent,
                    SeriesOverridesEditorComponent,
                    TimeRegionsEditorComponent
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
i0.ɵɵsetComponentScope(ChartComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i2.FormControlDirective, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName, i2.FormArrayName, i3.UIChart, i4.DialogActionsComponent, i4.DialogComponent, i4.DropDownComponent, i4.DropDownValueTemplate, i4.DropDownSelectedValueTemplate, i4.PopupComponent, i4.ContextMenuComponent, i4.HierarchicalDropDownComponent, i4.PreferencesComponent, i4.EmptyListComponent, i4.InfoBoxComponent, i4.ProgressComponent, i4.FilterBoxComponent, i4.TextBoxComponent, i4.TextBoxValidationTemplate, i4.CheckBoxComponent, i4.AutoFocusDirective, i4.AvatarComponent, i4.GridComponent, i4.ColumnComponent, i4.DeleteColumnComponent, i4.SlideDownComponent, i4.TabStripComponent, i4.TabComponent, i4.TabTitleTemplate, i4.TabContentTemplate, i4.SideTabStripComponent, i4.LoadOrErrorComponent, i4.ErrorPopupComponent, i4.NoteComponent, i4.ModuleLoaderComponent, i4.UserPickerComponent, i4.TeamPickerComponent, i4.PermissionPickerComponent, i4.PermissionRulePickerComponent, i4.PermissionIconComponent, i4.TagPickerComponent, i4.TimeRangePickerComponent, i4.PluginPickerComponent, i4.ColorPickerComponent, i4.IconComponent, i4.LabelIconComponent, i4.RemoveHostDirective, i4.PageComponent, i4.PageHeaderComponent, i4.PageTitleComponent, i4.PageTabsNavigationComponent, i4.PageDropdownNavigationComponent, i4.TagComponent, i4.DashboardExplorerComponent, i4.DashboardExplorerDeleterComponent, i4.DashboardExplorerMoverComponent, i4.CardsLayoutSwitcherComponent, i5.PerfectScrollbarComponent, i5.PerfectScrollbarDirective, ChartComponent,
    ChartEditorComponent,
    ChartLegendComponent,
    AxesEditorComponent,
    AxisXEditorComponent,
    AxisYEditorComponent,
    GeneralEditorComponent,
    MetricsEditorComponent,
    LegendEditorComponent,
    DisplayEditorComponent,
    DrawOptionsEditorComponent,
    ThresholdsEditorComponent,
    ThresholdEditorComponent,
    SeriesOverridesEditorComponent,
    TimeRegionsEditorComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvY2hhcnQubW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztBQTZDNUQsTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLGtCQWhCbkI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixXQUFXO1lBRVgsY0FBYztZQUNkLGFBQWE7WUFDYixzQkFBc0I7U0FDdkI7d0ZBT1UsaUJBQWlCLG1CQXpDMUIsY0FBYztRQUNkLG9CQUFvQjtRQUVwQixvQkFBb0I7UUFFcEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFFcEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUV0QixxQkFBcUI7UUFFckIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUUxQix5QkFBeUI7UUFDekIsd0JBQXdCO1FBRXhCLDhCQUE4QjtRQUU5QiwwQkFBMEIsYUFJMUIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsV0FBVztRQUVYLGNBQWM7UUFDZCxhQUFhO1FBQ2Isc0JBQXNCLGFBR3RCLGNBQWM7UUFDZCxvQkFBb0I7a0RBSVgsaUJBQWlCO2NBM0M3QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUVwQixvQkFBb0I7b0JBRXBCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBRXBCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUV0QixxQkFBcUI7b0JBRXJCLHNCQUFzQjtvQkFDdEIsMEJBQTBCO29CQUUxQix5QkFBeUI7b0JBQ3pCLHdCQUF3QjtvQkFFeEIsOEJBQThCO29CQUU5QiwwQkFBMEI7aUJBRTNCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixXQUFXO29CQUVYLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLG9CQUFvQjtpQkFDckI7YUFFRjs7dUJBeENHLGNBQWMsNG9FQUFkLGNBQWM7SUFDZCxvQkFBb0I7SUFFcEIsb0JBQW9CO0lBRXBCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBRXBCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFFdEIscUJBQXFCO0lBRXJCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFFMUIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUV4Qiw4QkFBOEI7SUFFOUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVkQ29tbW9uTW9kdWxlIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJNb2R1bGUgfSBmcm9tICduZ3gtcGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0IHsgQ2hhcnRNb2R1bGUgfSBmcm9tICdwcmltZW5nJztcbmltcG9ydCB7IEVkVWlsaWJNb2R1bGUgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQuYyc7XG5pbXBvcnQgeyBBeGVzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2F4ZXMvYXhlcyc7XG5pbXBvcnQgeyBBeGlzWEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9heGVzL3gtYXhpcy94LWF4aXMnO1xuaW1wb3J0IHsgQXhpc1lFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvYXhlcy95LWF4aXMveS1heGlzJztcbmltcG9ydCB7IERpc3BsYXlFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZGlzcGxheS9kaXNwbGF5JztcbmltcG9ydCB7IERyYXdPcHRpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvZHJhdy1vcHRpb25zL29wdGlvbnMnO1xuaW1wb3J0IHsgU2VyaWVzT3ZlcnJpZGVzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvc2VyaWVzLW92ZXJyaWRlcy9vdmVycmlkZXMnO1xuaW1wb3J0IHsgVGhyZXNob2xkRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvdGhyZXNob2xkcy90aHJlc2hvbGQnO1xuaW1wb3J0IHsgVGhyZXNob2xkc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9kaXNwbGF5L3RocmVzaG9sZHMvdGhyZXNob2xkcyc7XG5pbXBvcnQgeyBUaW1lUmVnaW9uc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9kaXNwbGF5L3RpbWUtcmVnaW9ucy90aW1lLXJlZ2lvbnMnO1xuaW1wb3J0IHsgQ2hhcnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZWRpdG9yJztcbmltcG9ydCB7IEdlbmVyYWxFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZ2VuZXJhbC9nZW5lcmFsJztcbmltcG9ydCB7IExlZ2VuZEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9sZWdlbmQvbGVnZW5kJztcbmltcG9ydCB7IE1ldHJpY3NFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvbWV0cmljcy9tZXRyaWNzJztcbmltcG9ydCB7IENoYXJ0TGVnZW5kQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2xlZ2VuZC9sZWdlbmQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydEVkaXRvckNvbXBvbmVudCxcblxuICAgIENoYXJ0TGVnZW5kQ29tcG9uZW50LFxuXG4gICAgQXhlc0VkaXRvckNvbXBvbmVudCxcbiAgICBBeGlzWEVkaXRvckNvbXBvbmVudCxcbiAgICBBeGlzWUVkaXRvckNvbXBvbmVudCxcblxuICAgIEdlbmVyYWxFZGl0b3JDb21wb25lbnQsXG4gICAgTWV0cmljc0VkaXRvckNvbXBvbmVudCxcbiAgICBcbiAgICBMZWdlbmRFZGl0b3JDb21wb25lbnQsXG5cbiAgICBEaXNwbGF5RWRpdG9yQ29tcG9uZW50LFxuICAgIERyYXdPcHRpb25zRWRpdG9yQ29tcG9uZW50LFxuXG4gICAgVGhyZXNob2xkc0VkaXRvckNvbXBvbmVudCxcbiAgICBUaHJlc2hvbGRFZGl0b3JDb21wb25lbnQsXG5cbiAgICBTZXJpZXNPdmVycmlkZXNFZGl0b3JDb21wb25lbnQsXG4gICAgXG4gICAgVGltZVJlZ2lvbnNFZGl0b3JDb21wb25lbnRcblxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ2hhcnRNb2R1bGUsXG5cbiAgICBFZENvbW1vbk1vZHVsZSxcbiAgICBFZFVpbGliTW9kdWxlLFxuICAgIFBlcmZlY3RTY3JvbGxiYXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0RWRpdG9yQ29tcG9uZW50XG4gIF0sXG4gXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0V2lkZ2V0TW9kdWxlIHsgfVxuIl19