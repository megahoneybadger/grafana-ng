import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { DropDownComponent } from './dropdown/dropdown.c';
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

    FilterBoxComponent,

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
  ],
  imports: [
    CommonModule,
    
    FormsModule,

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

    FilterBoxComponent,

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
  ]
})
export class UilibModule {
 
}
