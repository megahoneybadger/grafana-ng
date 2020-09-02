import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CheckboxModule} from 'primeng/checkbox';

import {TieredMenuModule} from 'primeng/tieredmenu';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { IconComponent } from './icon/icon';
import { RemoveHostDirective } from './remove-host/remove-host.dir'
import { PageHeaderComponent } from './page-header/header';
import { PageTitleComponent } from './page-header/title';
import { TabStripComponent } from './tabstrip/tabstrip.c';
import { TabComponent, TabTitleTemplate, TabContentTemplate } from './tabstrip/tab.c';
import { DropDownComponent } from './dropdown/dropdown.c';
import { DropDownValueTemplate, DropDownSelectedValueTemplate } from './dropdown/directives';
import { PageTabsNavigationComponent } from './page-header/tabs/tabs';
import { PageDropdownNavigationComponent } from './page-header/dropdown';
import { LabelIconComponent } from './icon/label-icon';


@NgModule({
  declarations: [
    IconComponent,
    LabelIconComponent,

    RemoveHostDirective,

    PageHeaderComponent,
    PageTitleComponent,
    PageTabsNavigationComponent,
    PageDropdownNavigationComponent,

    DropDownComponent,
    DropDownValueTemplate,
    DropDownSelectedValueTemplate,


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

    FontAwesomeModule,
  ],
  exports:[
    IconComponent,
    RemoveHostDirective,
    PageHeaderComponent,

    DropDownComponent,
    DropDownValueTemplate,
    DropDownSelectedValueTemplate,

    TabStripComponent,
    TabComponent,
    TabTitleTemplate,
    TabContentTemplate,
  ]
})
export class UilibModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
