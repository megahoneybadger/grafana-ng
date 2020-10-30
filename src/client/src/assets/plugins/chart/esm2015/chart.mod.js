import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { AlertEditorComponent } from './edit/alert/alert';
import { AlertConfigEditorComponent } from './edit/alert/config/alert-config';
import { AlertConditionEditorComponent } from './edit/alert/config/conditions/cond';
import { AlertHistoryEditorComponent } from './edit/alert/history/alert-history';
import { AlertNotificationsEditorComponent } from './edit/alert/notifications/alert-nots';
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
import { TimeEditorComponent } from './edit/time/time';
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
        TimeRegionEditorComponent,
        TimeEditorComponent,
        AlertEditorComponent,
        AlertConfigEditorComponent,
        AlertConditionEditorComponent,
        AlertHistoryEditorComponent,
        AlertNotificationsEditorComponent], imports: [CommonModule,
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
                    TimeRegionEditorComponent,
                    TimeEditorComponent,
                    AlertEditorComponent,
                    AlertConfigEditorComponent,
                    AlertConditionEditorComponent,
                    AlertHistoryEditorComponent,
                    AlertNotificationsEditorComponent,
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
i0.ɵɵsetComponentScope(ChartComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i2.FormControlDirective, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName, i2.FormArrayName, i3.UIChart, i4.DialogActionsComponent, i4.DialogComponent, i4.DropDownComponent, i4.DropDownValueTemplate, i4.DropDownSelectedValueTemplate, i4.PopupComponent, i4.ContextMenuComponent, i4.HierarchicalDropDownComponent, i4.HintComponent, i4.PreferencesComponent, i4.EmptyListComponent, i4.InfoBoxComponent, i4.ProgressComponent, i4.FilterBoxComponent, i4.TextBoxComponent, i4.TextBoxValidationTemplate, i4.CheckBoxComponent, i4.AutoFocusDirective, i4.AvatarComponent, i4.GridComponent, i4.ColumnComponent, i4.DeleteColumnComponent, i4.SlideDownComponent, i4.TabStripComponent, i4.TabComponent, i4.TabTitleTemplate, i4.TabContentTemplate, i4.SideTabStripComponent, i4.LoadOrErrorComponent, i4.ErrorPopupComponent, i4.NoteComponent, i4.ModuleLoaderComponent, i4.UserPickerComponent, i4.TeamPickerComponent, i4.PermissionPickerComponent, i4.PermissionRulePickerComponent, i4.PermissionIconComponent, i4.TagPickerComponent, i4.TimeRangePickerComponent, i4.PluginPickerComponent, i4.ColorPickerComponent, i4.PaletteEditorComponent, i4.ColorCircleComponent, i4.IconComponent, i4.LabelIconComponent, i4.RemoveHostDirective, i4.PageComponent, i4.PageHeaderComponent, i4.PageTitleComponent, i4.PageTabsNavigationComponent, i4.PageDropdownNavigationComponent, i4.TagComponent, i4.DashboardExplorerComponent, i4.DashboardExplorerDeleterComponent, i4.DashboardExplorerMoverComponent, i4.CardsLayoutSwitcherComponent, i4.JsonExplorerComponent, i5.PerfectScrollbarComponent, i5.PerfectScrollbarDirective, ChartComponent,
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
    TimeRegionEditorComponent,
    TimeEditorComponent,
    AlertEditorComponent,
    AlertConfigEditorComponent,
    AlertConditionEditorComponent,
    AlertHistoryEditorComponent,
    AlertNotificationsEditorComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvY2hhcnQubW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hF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QUFzQjtJQUN0QiwwQkFBMEI7SUFFMUIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUV4Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBRTdCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFFekIsbUJBQW1CO0lBRW5CLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRWRDb21tb25Nb2R1bGUgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSB9IGZyb20gJ25neC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcnO1xuaW1wb3J0IHsgRWRVaWxpYk1vZHVsZSB9IGZyb20gJ3VpbGliJztcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jJztcbmltcG9ydCB7IEFsZXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2FsZXJ0L2FsZXJ0JztcbmltcG9ydCB7IEFsZXJ0Q29uZmlnRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2FsZXJ0L2NvbmZpZy9hbGVydC1jb25maWcnO1xuaW1wb3J0IHsgQWxlcnRDb25kaXRpb25FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvYWxlcnQvY29uZmlnL2NvbmRpdGlvbnMvY29uZCc7XG5pbXBvcnQgeyBBbGVydEhpc3RvcnlFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvYWxlcnQvaGlzdG9yeS9hbGVydC1oaXN0b3J5JztcbmltcG9ydCB7IEFsZXJ0Tm90aWZpY2F0aW9uc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9hbGVydC9ub3RpZmljYXRpb25zL2FsZXJ0LW5vdHMnO1xuaW1wb3J0IHsgQXhlc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9heGVzL2F4ZXMnO1xuaW1wb3J0IHsgQXhpc1hFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvYXhlcy94LWF4aXMveC1heGlzJztcbmltcG9ydCB7IEF4aXNZRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2F4ZXMveS1heGlzL3ktYXhpcyc7XG5pbXBvcnQgeyBEaXNwbGF5RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvZGlzcGxheSc7XG5pbXBvcnQgeyBEcmF3T3B0aW9uc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9kaXNwbGF5L2RyYXctb3B0aW9ucy9vcHRpb25zJztcbmltcG9ydCB7IFNlcmllc092ZXJyaWRlRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvc2VyaWVzLW92ZXJyaWRlcy9vdmVycmlkZSc7XG5pbXBvcnQgeyBTZXJpZXNPdmVycmlkZXNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZGlzcGxheS9zZXJpZXMtb3ZlcnJpZGVzL292ZXJyaWRlcyc7XG5pbXBvcnQgeyBUaHJlc2hvbGRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZGlzcGxheS90aHJlc2hvbGRzL3RocmVzaG9sZCc7XG5pbXBvcnQgeyBUaHJlc2hvbGRzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2Rpc3BsYXkvdGhyZXNob2xkcy90aHJlc2hvbGRzJztcbmltcG9ydCB7IFRpbWVSZWdpb25FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZGlzcGxheS90aW1lLXJlZ2lvbnMvdGltZS1yZWdpb24nO1xuaW1wb3J0IHsgVGltZVJlZ2lvbnNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZGlzcGxheS90aW1lLXJlZ2lvbnMvdGltZS1yZWdpb25zJztcbmltcG9ydCB7IENoYXJ0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2VkaXRvcic7XG5pbXBvcnQgeyBHZW5lcmFsRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2dlbmVyYWwvZ2VuZXJhbCc7XG5pbXBvcnQgeyBMZWdlbmRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvbGVnZW5kL2xlZ2VuZCc7XG5pbXBvcnQgeyBNZXRyaWNzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L21ldHJpY3MvbWV0cmljcyc7XG5pbXBvcnQgeyBUaW1lRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L3RpbWUvdGltZSc7XG5pbXBvcnQgeyBDaGFydExlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vdmlldy9sZWdlbmQvbGVnZW5kJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRFZGl0b3JDb21wb25lbnQsXG5cbiAgICBDaGFydExlZ2VuZENvbXBvbmVudCxcblxuICAgIEF4ZXNFZGl0b3JDb21wb25lbnQsXG4gICAgQXhpc1hFZGl0b3JDb21wb25lbnQsXG4gICAgQXhpc1lFZGl0b3JDb21wb25lbnQsXG5cbiAgICBHZW5lcmFsRWRpdG9yQ29tcG9uZW50LFxuICAgIE1ldHJpY3NFZGl0b3JDb21wb25lbnQsXG4gICAgXG4gICAgTGVnZW5kRWRpdG9yQ29tcG9uZW50LFxuXG4gICAgRGlzcGxheUVkaXRvckNvbXBvbmVudCxcbiAgICBEcmF3T3B0aW9uc0VkaXRvckNvbXBvbmVudCxcblxuICAgIFRocmVzaG9sZHNFZGl0b3JDb21wb25lbnQsXG4gICAgVGhyZXNob2xkRWRpdG9yQ29tcG9uZW50LFxuXG4gICAgU2VyaWVzT3ZlcnJpZGVzRWRpdG9yQ29tcG9uZW50LFxuICAgIFNlcmllc092ZXJyaWRlRWRpdG9yQ29tcG9uZW50LFxuICAgIFxuICAgIFRpbWVSZWdpb25zRWRpdG9yQ29tcG9uZW50LFxuICAgIFRpbWVSZWdpb25FZGl0b3JDb21wb25lbnQsXG5cbiAgICBUaW1lRWRpdG9yQ29tcG9uZW50LFxuXG4gICAgQWxlcnRFZGl0b3JDb21wb25lbnQsXG4gICAgQWxlcnRDb25maWdFZGl0b3JDb21wb25lbnQsXG4gICAgQWxlcnRDb25kaXRpb25FZGl0b3JDb21wb25lbnQsXG4gICAgQWxlcnRIaXN0b3J5RWRpdG9yQ29tcG9uZW50LFxuICAgIEFsZXJ0Tm90aWZpY2F0aW9uc0VkaXRvckNvbXBvbmVudCxcblxuXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDaGFydE1vZHVsZSxcblxuICAgIEVkQ29tbW9uTW9kdWxlLFxuICAgIEVkVWlsaWJNb2R1bGUsXG4gICAgUGVyZmVjdFNjcm9sbGJhck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRFZGl0b3JDb21wb25lbnRcbiAgXSxcbiBcbiBcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRXaWRnZXRNb2R1bGUgeyB9XG4iXX0=