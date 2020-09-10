import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
import {CheckboxModule} from 'primeng/checkbox';

import {TieredMenuModule} from 'primeng/tieredmenu';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';

import { IconComponent } from './icon/icon';
import { RemoveHostDirective } from './remove-host.dir'
import { PageHeaderComponent } from './page/header/header';
import { PageTitleComponent } from './page/header/title';
import { TabStripComponent } from './tabstrip/tabstrip.c';
import { TabComponent, TabTitleTemplate, TabContentTemplate } from './tabstrip/tab.c';
import { DropDownComponent } from './dropdown/dropdown';
import { DropDownValueTemplate, DropDownSelectedValueTemplate } from './dropdown/directives';
import { PageTabsNavigationComponent } from './page/header/tabs/tabs';
import { PageDropdownNavigationComponent } from './page/header/dropdown';
import { LabelIconComponent } from './icon/label-icon';
import { FilterBoxComponent } from './input/filterbox/filterbox';
import { PageComponent } from './page/page';
import { GridComponent } from './grid/grid.c';
import { ColumnComponent } from './grid/data-column/column.c';
import { DeleteColumnComponent } from './grid/delete-column/delete-column';
import { AvatarComponent } from './avatar.c';
import { NoteComponent } from './note/note';
import { ProgressComponent } from './progress';
import { LoadOrErrorComponent } from './load-or-error/load-or-error.c';
import { ErrorPopupComponent } from './load-or-error/error-popup.c';
import { TextBoxComponent } from './input/textbox/textbox';
import { TextBoxValidationTemplate } from './input/textbox/directives';
import { SlideDownComponent } from './slidedown/slidedown';
import { UserPickerComponent } from './pickers/user/user-picker';
import { PreferencesComponent } from './blocks/prefs/prefs';
import { CheckBoxComponent } from './input/checkbox/checkbox';
import { DialogComponent, DialogActionsComponent } from './dialog/dialog';
import { EmptyListComponent } from './blocks/empty-list/empty-list';
import { ModuleLoaderComponent } from './module/module-loader';

@NgModule({
  declarations: [
    IconComponent,
    LabelIconComponent,
    
    AvatarComponent,
    NoteComponent,
    ProgressComponent,
    
    LoadOrErrorComponent,
    ErrorPopupComponent,
    
    RemoveHostDirective,

    PageComponent,
    PageHeaderComponent,
    PageTitleComponent,
    PageTabsNavigationComponent,
    PageDropdownNavigationComponent,
    ModuleLoaderComponent,

    FilterBoxComponent,
    TextBoxComponent,
    TextBoxValidationTemplate,
    CheckBoxComponent,

    DropDownComponent,
    DropDownValueTemplate,
    DropDownSelectedValueTemplate,

    GridComponent,
    ColumnComponent,
    DeleteColumnComponent,


    TabStripComponent,
    TabComponent,
    TabTitleTemplate,
    TabContentTemplate,

    SlideDownComponent,
    UserPickerComponent,

    PreferencesComponent,

    DialogComponent,
    DialogActionsComponent,

    EmptyListComponent
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,

    DropdownModule,
    DialogModule,
    TooltipModule,
    TieredMenuModule,
    AutoCompleteModule,
    ToastModule,
    CheckboxModule,
    TabViewModule,

  ],
  exports:[
    IconComponent,
    RemoveHostDirective,

    AvatarComponent,
    NoteComponent,
    ProgressComponent,

    LoadOrErrorComponent,
    ErrorPopupComponent,

    PageComponent,
    PageHeaderComponent,
    ModuleLoaderComponent,

    FilterBoxComponent,
    TextBoxComponent,
    TextBoxValidationTemplate,
    CheckBoxComponent,

    DropDownComponent,
    DropDownValueTemplate,
    DropDownSelectedValueTemplate,

    GridComponent,
    ColumnComponent,
    DeleteColumnComponent,

    TabStripComponent,
    TabComponent,
    TabTitleTemplate,
    TabContentTemplate,

    SlideDownComponent,
    UserPickerComponent,

    PreferencesComponent,

    DialogComponent,
    DialogActionsComponent,

    EmptyListComponent
  ]
})
export class UilibModule {
 
}
