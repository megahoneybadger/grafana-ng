import { NgModule, SecurityContext } from '@angular/core';
import { DialogActionsComponent, DialogComponent } from './dialog/dialog';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreferencesComponent } from './blocks/prefs/prefs';
import { EmptyListComponent } from './blocks/empty-list/empty-list';
import { ProgressComponent } from './misc/progress';
import { FilterBoxComponent } from './input/filterbox/filterbox';
import { TextBoxComponent } from './input/textbox/textbox';
import { AutoFocusDirective, TextBoxValidationTemplate } from './input/textbox/directives';

import { CheckBoxComponent } from './input/checkbox/checkbox';
import { AvatarComponent } from './avatar/avatar';
import { GridComponent } from './grid/grid';
import { ColumnComponent } from './grid/data-column/column';
import { DeleteColumnComponent } from './grid/delete-column/delete-column';
import { SlideDownComponent } from './slidedown/slidedown';
import { TabStripComponent } from './tabstrip/tabstrip';
import { TabComponent, TabTitleTemplate, TabContentTemplate } from './tabstrip/tab';
import { LoadOrErrorComponent } from './load-or-error/load-or-error';
import { ErrorPopupComponent } from './load-or-error/error-popup';
import { NoteComponent } from './note/note';
import { ModuleLoaderComponent } from './module/module-loader';
import { UserPickerComponent } from './pickers/user/user-picker';
import { TeamPickerComponent } from './pickers/team/team-picker';

import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';

import { EdCommonModule } from 'common';
import { IconComponent } from './icon/icon';
import { LabelIconComponent } from './icon/label-icon';
import { RemoveHostDirective } from './misc/remove-host.dir';
import { PageComponent } from './page/page';
import { PageHeaderComponent } from './page/header/header';
import { PageTitleComponent } from './page/header/title';
import { PageTabsNavigationComponent } from './page/header/tabs/tabs';
import { PageDropdownNavigationComponent } from './page/header/dropdown';
import { InfoBoxComponent } from './blocks/info-box/info-box';
import { TagComponent } from './tags/tag';
import { PermissionPickerComponent } from './pickers/permission/perm-picker';
import { PermissionRulePickerComponent } from './pickers/permission-rule/perm-rule-picker';
import { PermissionIconComponent } from './pickers/permission-icon/perm-icon';
import { DashboardExplorerComponent } from './dashboard/explorer';
import { DashboardExplorerDeleterComponent } from './dashboard/delete/deleter';
import { DashboardExplorerMoverComponent } from './dashboard/move/mover';
import { TagPickerComponent } from './pickers/tag/tag-picker';
import { TimeRangePickerComponent } from './pickers/time/time-picker';

import {OverlayPanelModule} from 'primeng/overlaypanel';
import { PluginPickerComponent } from './pickers/plugin/plugin-picker';
import { CardsLayoutSwitcherComponent } from './blocks/cards/switcher/layout-switcher';
import { PopupComponent } from './dropdowns/popup/popup';
import { ContextMenuComponent } from './dropdowns/context-menu/context-menu';
import { HierarchicalDropDownComponent } from './dropdowns/hierarchical/hierarchical-dropdown';
import { DropDownComponent } from './dropdowns/dropdown/dropdown';
import { DropDownSelectedValueTemplate, DropDownValueTemplate } from './dropdowns/dropdown/directives';
import { SideTabStripComponent } from './tabstrip/side/side-tabstrip';
import { ColorPickerComponent, ColorPickerLightComponent } from './pickers/color/color-picker';
import { PaletteEditorComponent } from './pickers/color/palette-editor/palette-editor';
import { ColorCircleComponent } from './pickers/color/palette-editor/color-circle';
import { ErrorHintDirective, HintDirective, HintComponent } from './dropdowns/hint'
import { JsonExplorerComponent } from './json-explorer/json-explorer';
import { GeneralEditorComponent } from './editor/general/general';
import { MetricsEditorComponent } from './editor/metrics/metrics';
import { MetricsDesignerAnchorDirective } from './editor/metrics/anchor';
import { AutoCompleteComponent } from './dropdowns/autocomplete/autocomplete';
import { AutoCompletePickerComponent } from './pickers/autocomplete/autocomplete-picker';
import { MetricsInspectorComponent } from './editor/metrics/inspector/inspector';
import { TagBoxComponent } from './input/tagbox/tagbox';
import { TextAreaComponent } from './input/textarea/textarea';
import { FolderPickerComponent } from './pickers/folder/folder-picker';
import { PageFooterComponent } from './page/footer/footer';
import { CodeBoxComponent } from './input/codebox/codebox';
import { AceEditorModule } from 'ng2-ace-editor';
import { MarkdownModule } from 'ngx-markdown';
import { BaseEditorComponent } from './editor/host/host';
import { SliderComponent } from './input/slider/slider';
import {SliderModule} from 'primeng/slider';
import { ParameterPickerComponent } from './pickers/param/param-picker';
import { UnitPickerComponent } from './pickers/unit/unit-picker';
import { FontSizePickerComponent } from './pickers/font-size/font-size-picker';

@NgModule({
  declarations: [
    DialogActionsComponent,
    DialogComponent,

    DropDownComponent,
    DropDownValueTemplate,
    DropDownSelectedValueTemplate,
    PopupComponent,
    ContextMenuComponent,
    HierarchicalDropDownComponent,
    HintDirective,
    ErrorHintDirective,
    HintComponent,
    AutoCompleteComponent,

    PreferencesComponent,
    EmptyListComponent,
    InfoBoxComponent,

    ProgressComponent,

    FilterBoxComponent,
    TextBoxComponent,
    TextBoxValidationTemplate,
    CheckBoxComponent,
    AutoFocusDirective,
    TagBoxComponent,
    TextAreaComponent,
    CodeBoxComponent,
    SliderComponent,

    AvatarComponent,

    GridComponent,
    ColumnComponent,
    DeleteColumnComponent,

    SlideDownComponent,

    TabStripComponent,
    TabComponent,
    TabTitleTemplate,
    TabContentTemplate,
    SideTabStripComponent,

    LoadOrErrorComponent,
    ErrorPopupComponent,

    NoteComponent,
    ModuleLoaderComponent,

    UserPickerComponent,
    TeamPickerComponent,
    PermissionPickerComponent,
    PermissionRulePickerComponent,
    PermissionIconComponent,
    TagPickerComponent,
    TimeRangePickerComponent,
    PluginPickerComponent,
    ColorPickerComponent,
    ColorPickerLightComponent,
    AutoCompletePickerComponent,
    FolderPickerComponent,
    PaletteEditorComponent,
    ColorCircleComponent,
    ParameterPickerComponent,
    UnitPickerComponent,
    FontSizePickerComponent,

    IconComponent,
    LabelIconComponent,

    RemoveHostDirective,

    PageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageTitleComponent,
    PageTabsNavigationComponent,
    PageDropdownNavigationComponent,

    TagComponent,

    DashboardExplorerComponent,
    DashboardExplorerDeleterComponent,
    DashboardExplorerMoverComponent,

    
    CardsLayoutSwitcherComponent,

    JsonExplorerComponent,

    //BaseEditorComponent,
    GeneralEditorComponent,
    MetricsEditorComponent,
    MetricsDesignerAnchorDirective,
    MetricsInspectorComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,

    DialogModule,
    DropdownModule,
    TooltipModule,
    TieredMenuModule,
    AutoCompleteModule,
    ToastModule,
    TabViewModule,
    MultiSelectModule,
    CalendarModule,
    OverlayPanelModule,
    SliderModule,
    
    AceEditorModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
  ],
  exports: [
    DialogActionsComponent,
    DialogComponent,

    DropDownComponent,
    DropDownValueTemplate,
    DropDownSelectedValueTemplate,
    PopupComponent,
    ContextMenuComponent,
    HierarchicalDropDownComponent,
    HintDirective,
    ErrorHintDirective,
    HintComponent,
    AutoCompleteComponent,


    

    PreferencesComponent,
    EmptyListComponent,
    InfoBoxComponent,

    ProgressComponent,

    FilterBoxComponent,
    TextBoxComponent,
    TextBoxValidationTemplate,
    CheckBoxComponent,
    AutoFocusDirective,
    TagBoxComponent,
    TextAreaComponent,
    CodeBoxComponent,
    SliderComponent,

    AvatarComponent,

    GridComponent,
    ColumnComponent,
    DeleteColumnComponent,

    SlideDownComponent,

    TabStripComponent,
    TabComponent,
    TabTitleTemplate,
    TabContentTemplate,
    SideTabStripComponent,
    
    LoadOrErrorComponent,
    ErrorPopupComponent,

    NoteComponent,

    ModuleLoaderComponent,

    UserPickerComponent,
    TeamPickerComponent,
    PermissionPickerComponent,
    PermissionRulePickerComponent,
    PermissionIconComponent,
    TagPickerComponent,
    TimeRangePickerComponent,
    PluginPickerComponent,
    ColorPickerComponent,
    ColorPickerLightComponent,
    AutoCompletePickerComponent,
    FolderPickerComponent,
    PaletteEditorComponent,
    ColorCircleComponent,
    ParameterPickerComponent,
    UnitPickerComponent,
    FontSizePickerComponent,

    IconComponent,
    LabelIconComponent,

    RemoveHostDirective,

    PageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageTitleComponent,
    PageTabsNavigationComponent,
    PageDropdownNavigationComponent,

    TagComponent,

    DashboardExplorerComponent,
    DashboardExplorerDeleterComponent,
    DashboardExplorerMoverComponent,

    PopupComponent,
    CardsLayoutSwitcherComponent,

    ContextMenuComponent,

    JsonExplorerComponent,

    //BaseEditorComponent,
    GeneralEditorComponent,
    MetricsEditorComponent,
    MetricsDesignerAnchorDirective,
    MetricsInspectorComponent
  ]
})
export class EdUilibModule{ }
