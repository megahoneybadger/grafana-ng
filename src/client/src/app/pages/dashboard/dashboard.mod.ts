import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore,
  UserService, TeamService, DashboardStore, TimeStore } from 'common';
import { DashboardRoutingModule } from './dashboard.mod-r';
import { DashboardComponent } from './dashboard';
import { DashboardToolbarComponent } from './toolbar/toolbar';
import { DashboardSearchComponent } from './search/search';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TimePickerComponent } from './time/picker/time-picker';


@NgModule({
  declarations:[
    DashboardComponent,
    DashboardToolbarComponent,
    DashboardSearchComponent,

    TimePickerComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,

    PerfectScrollbarModule,
    
    EdUilibModule,
    EdCommonModule
  ],
  providers: [
    DashboardService,
    DashboardStore,
    TimeStore,
    FolderStore,
    UserService,
    TeamService,
  ]
})
export class DashboardModule{

}