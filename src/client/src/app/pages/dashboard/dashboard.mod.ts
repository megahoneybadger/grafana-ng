import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore,
  UserService, TeamService, DashboardStore } from 'common';
import { DashboardRoutingModule } from './dashboard.mod-r';
import { DashboardComponent } from './dashboard';
import { DashboardToolbarComponent } from './toolbar/toolbar';


@NgModule({
  declarations:[
    DashboardComponent,
    DashboardToolbarComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    
    EdUilibModule,
    EdCommonModule,
  ],
  providers: [
    DashboardService,
    DashboardStore,
    FolderStore,
    UserService,
    TeamService,
  ]
})
export class DashboardModule{

}