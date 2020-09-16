import { NgModule } from '@angular/core';
import { DialogActionsComponent, DialogComponent } from './dialog/dialog';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './dropdown/dropdown';
import { DropDownValueTemplate, DropDownSelectedValueTemplate } from './dropdown/directives';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreferencesComponent } from './blocks/prefs/prefs';
import { EmptyListComponent } from './blocks/empty-list/empty-list';
import { ProgressComponent } from './misc/progress';
import { FilterBoxComponent } from './input/filterbox/filterbox';
import { TextBoxComponent } from './input/textbox/textbox';
import { TextBoxValidationTemplate } from './input/textbox/directives';
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


@NgModule({
  declarations: [
    DialogActionsComponent,
    DialogComponent,

    DropDownComponent,
    DropDownValueTemplate,
    DropDownSelectedValueTemplate,

    PreferencesComponent,
    EmptyListComponent,

    ProgressComponent,

    FilterBoxComponent,
    TextBoxComponent,
    TextBoxValidationTemplate,
    CheckBoxComponent,

    AvatarComponent,

    GridComponent,
    ColumnComponent,
    DeleteColumnComponent,

    SlideDownComponent,

    TabStripComponent,
    TabComponent,
    TabTitleTemplate,
    TabContentTemplate,

    LoadOrErrorComponent,
    ErrorPopupComponent,

    NoteComponent,
    ModuleLoaderComponent,

    UserPickerComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DialogModule,
    DropdownModule,
    TooltipModule,
    TieredMenuModule,
    AutoCompleteModule,
    ToastModule,
    CheckboxModule,
    TabViewModule,
  ],
  exports: [
    DialogActionsComponent,
    DialogComponent,

    DropDownComponent,
    DropDownValueTemplate,
    DropDownSelectedValueTemplate,

    PreferencesComponent,
    EmptyListComponent,

    ProgressComponent,

    FilterBoxComponent,
    TextBoxComponent,
    TextBoxValidationTemplate,
    CheckBoxComponent,

    AvatarComponent,

    GridComponent,
    ColumnComponent,
    DeleteColumnComponent,

    SlideDownComponent,

    TabStripComponent,
    TabComponent,
    TabTitleTemplate,
    TabContentTemplate,

    LoadOrErrorComponent,
    ErrorPopupComponent,

    NoteComponent,

    ModuleLoaderComponent,

    UserPickerComponent,
  ]
})
export class UilibModule2{ }
