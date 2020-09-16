import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import { PageTabsNavigationComponent } from './page/header/tabs/tabs';
import { PageDropdownNavigationComponent } from './page/header/dropdown';
import { LabelIconComponent } from './icon/label-icon';

import { PageComponent } from './page/page';
import { UilibModule2 } from 'uilib2';

@NgModule({
  declarations: [
    IconComponent,
    LabelIconComponent,
    
    RemoveHostDirective,

    PageComponent,
    PageHeaderComponent,
    PageTitleComponent,
    PageTabsNavigationComponent,
    PageDropdownNavigationComponent,
    

  ],
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,
    
    TooltipModule,
    TieredMenuModule,
    AutoCompleteModule,
    ToastModule,
    CheckboxModule,
    TabViewModule,

    UilibModule2

  ],
  exports:[
    IconComponent,
    RemoveHostDirective,

    PageComponent,
    PageHeaderComponent,
  ]
})
export class UilibModule {
 
}
