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
import { SeriesOverrideEditorComponent } from './edit/display/series-overrides/override';
import { SeriesOverridesEditorComponent } from './edit/display/series-overrides/overrides';
import { ThresholdEditorComponent } from './edit/display/thresholds/threshold';
import { ThresholdsEditorComponent } from './edit/display/thresholds/thresholds';
import { TimeRegionEditorComponent } from './edit/display/time-regions/time-region';
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
        SeriesOverrideEditorComponent,
        TimeRegionsEditorComponent,
        TimeRegionEditorComponent], imports: [CommonModule,
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
                    SeriesOverrideEditorComponent,
                    TimeRegionsEditorComponent,
                    TimeRegionEditorComponent
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
i0.ɵɵsetComponentScope(ChartComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i2.FormControlDirective, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName, i2.FormArrayName, i3.UIChart, i4.DialogActionsComponent, i4.DialogComponent, i4.DropDownComponent, i4.DropDownValueTemplate, i4.DropDownSelectedValueTemplate, i4.PopupComponent, i4.ContextMenuComponent, i4.HierarchicalDropDownComponent, i4.PreferencesComponent, i4.EmptyListComponent, i4.InfoBoxComponent, i4.ProgressComponent, i4.FilterBoxComponent, i4.TextBoxComponent, i4.TextBoxValidationTemplate, i4.CheckBoxComponent, i4.AutoFocusDirective, i4.AvatarComponent, i4.GridComponent, i4.ColumnComponent, i4.DeleteColumnComponent, i4.SlideDownComponent, i4.TabStripComponent, i4.TabComponent, i4.TabTitleTemplate, i4.TabContentTemplate, i4.SideTabStripComponent, i4.LoadOrErrorComponent, i4.ErrorPopupComponent, i4.NoteComponent, i4.ModuleLoaderComponent, i4.UserPickerComponent, i4.TeamPickerComponent, i4.PermissionPickerComponent, i4.PermissionRulePickerComponent, i4.PermissionIconComponent, i4.TagPickerComponent, i4.TimeRangePickerComponent, i4.PluginPickerComponent, i4.ColorPickerComponent, i4.PaletteEditorComponent, i4.ColorCircleComponent, i4.IconComponent, i4.LabelIconComponent, i4.RemoveHostDirective, i4.PageComponent, i4.PageHeaderComponent, i4.PageTitleComponent, i4.PageTabsNavigationComponent, i4.PageDropdownNavigationComponent, i4.TagComponent, i4.DashboardExplorerComponent, i4.DashboardExplorerDeleterComponent, i4.DashboardExplorerMoverComponent, i4.CardsLayoutSwitcherComponent, i5.PerfectScrollbarComponent, i5.PerfectScrollbarDirective, ChartComponent,
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
    SeriesOverrideEditorComponent,
    TimeRegionsEditorComponent,
    TimeRegionEditorComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvY2hhcnQubW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztBQWdENUQsTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLGtCQWpCbkI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixXQUFXO1lBRVgsY0FBYztZQUNkLGFBQWE7WUFDYixzQkFBc0I7U0FDdkI7d0ZBUVUsaUJBQWlCLG1CQTVDMUIsY0FBYztRQUNkLG9CQUFvQjtRQUVwQixvQkFBb0I7UUFFcEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFFcEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUV0QixxQkFBcUI7UUFFckIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUUxQix5QkFBeUI7UUFDekIsd0JBQXdCO1FBRXhCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFFN0IsMEJBQTBCO1FBQzFCLHlCQUF5QixhQUl6QixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixXQUFXO1FBRVgsY0FBYztRQUNkLGFBQWE7UUFDYixzQkFBc0IsYUFHdEIsY0FBYztRQUNkLG9CQUFvQjtrREFLWCxpQkFBaUI7Y0E5QzdCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxvQkFBb0I7b0JBRXBCLG9CQUFvQjtvQkFFcEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFFcEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBRXRCLHFCQUFxQjtvQkFFckIsc0JBQXNCO29CQUN0QiwwQkFBMEI7b0JBRTFCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUV4Qiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFFN0IsMEJBQTBCO29CQUMxQix5QkFBeUI7aUJBRTFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixXQUFXO29CQUVYLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLG9CQUFvQjtpQkFDckI7YUFHRjs7dUJBM0NHLGNBQWMsZ3NFQUFkLGNBQWM7SUFDZCxvQkFBb0I7SUFFcEIsb0JBQW9CO0lBRXBCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBRXBCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFFdEIscUJBQXFCO0lBRXJCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFFMUIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUV4Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBRTdCLDBCQUEwQjtJQUMxQix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRWRDb21tb25Nb2R1bGUgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSB9IGZyb20gJ25neC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgRWRVaWxpYk1vZHVsZSB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jJztcbmltcG9ydCB7IEF4ZXNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvYXhlcy9heGVzJztcbmltcG9ydCB7IEF4aXNYRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2F4ZXMveC1heGlzL3gtYXhpcyc7XG5pbXBvcnQgeyBBeGlzWUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9heGVzL3ktYXhpcy95LWF4aXMnO1xuaW1wb3J0IHsgRGlzcGxheUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9kaXNwbGF5L2Rpc3BsYXknO1xuaW1wb3J0IHsgRHJhd09wdGlvbnNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZGlzcGxheS9kcmF3LW9wdGlvbnMvb3B0aW9ucyc7XG5pbXBvcnQgeyBTZXJpZXNPdmVycmlkZUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9kaXNwbGF5L3Nlcmllcy1vdmVycmlkZXMvb3ZlcnJpZGUnO1xuaW1wb3J0IHsgU2VyaWVzT3ZlcnJpZGVzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvc2VyaWVzLW92ZXJyaWRlcy9vdmVycmlkZXMnO1xuaW1wb3J0IHsgVGhyZXNob2xkRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvdGhyZXNob2xkcy90aHJlc2hvbGQnO1xuaW1wb3J0IHsgVGhyZXNob2xkc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9kaXNwbGF5L3RocmVzaG9sZHMvdGhyZXNob2xkcyc7XG5pbXBvcnQgeyBUaW1lUmVnaW9uRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvdGltZS1yZWdpb25zL3RpbWUtcmVnaW9uJztcbmltcG9ydCB7IFRpbWVSZWdpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvdGltZS1yZWdpb25zL3RpbWUtcmVnaW9ucyc7XG5pbXBvcnQgeyBDaGFydEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9lZGl0b3InO1xuaW1wb3J0IHsgR2VuZXJhbEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9nZW5lcmFsL2dlbmVyYWwnO1xuaW1wb3J0IHsgTGVnZW5kRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2xlZ2VuZC9sZWdlbmQnO1xuaW1wb3J0IHsgTWV0cmljc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9tZXRyaWNzL21ldHJpY3MnO1xuaW1wb3J0IHsgQ2hhcnRMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvbGVnZW5kL2xlZ2VuZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0RWRpdG9yQ29tcG9uZW50LFxuXG4gICAgQ2hhcnRMZWdlbmRDb21wb25lbnQsXG5cbiAgICBBeGVzRWRpdG9yQ29tcG9uZW50LFxuICAgIEF4aXNYRWRpdG9yQ29tcG9uZW50LFxuICAgIEF4aXNZRWRpdG9yQ29tcG9uZW50LFxuXG4gICAgR2VuZXJhbEVkaXRvckNvbXBvbmVudCxcbiAgICBNZXRyaWNzRWRpdG9yQ29tcG9uZW50LFxuICAgIFxuICAgIExlZ2VuZEVkaXRvckNvbXBvbmVudCxcblxuICAgIERpc3BsYXlFZGl0b3JDb21wb25lbnQsXG4gICAgRHJhd09wdGlvbnNFZGl0b3JDb21wb25lbnQsXG5cbiAgICBUaHJlc2hvbGRzRWRpdG9yQ29tcG9uZW50LFxuICAgIFRocmVzaG9sZEVkaXRvckNvbXBvbmVudCxcblxuICAgIFNlcmllc092ZXJyaWRlc0VkaXRvckNvbXBvbmVudCxcbiAgICBTZXJpZXNPdmVycmlkZUVkaXRvckNvbXBvbmVudCxcbiAgICBcbiAgICBUaW1lUmVnaW9uc0VkaXRvckNvbXBvbmVudCxcbiAgICBUaW1lUmVnaW9uRWRpdG9yQ29tcG9uZW50XG5cbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENoYXJ0TW9kdWxlLFxuXG4gICAgRWRDb21tb25Nb2R1bGUsXG4gICAgRWRVaWxpYk1vZHVsZSxcbiAgICBQZXJmZWN0U2Nyb2xsYmFyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydEVkaXRvckNvbXBvbmVudFxuICBdLFxuIFxuIFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydFdpZGdldE1vZHVsZSB7IH1cbiJdfQ==