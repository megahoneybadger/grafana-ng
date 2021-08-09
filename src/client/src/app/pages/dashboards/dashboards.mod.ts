import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore,
  UserService, TeamService } from 'common';
import { DashboardsRoutingModule } from './dashboards.mod-r';

import { FolderContentComponent } from './folder/content/folder-content';
import { FolderPermissionsComponent } from './folder/perms/folder-perms';
import { ManageDashboardsComponent } from './dashboards';
import { EditFolderComponent } from './folder/edit/edit-folder';
import { AddFolderComponent } from './folder/add/add-folder';
import { ImportDashboardComponent } from "./import/import";
import { ImportValidationComponent } from "./import/validator/validation";

@NgModule({
  declarations:[
    ManageDashboardsComponent,
    
    FolderContentComponent,
    FolderPermissionsComponent,
    EditFolderComponent,
    AddFolderComponent,

    ImportDashboardComponent,
    ImportValidationComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardsRoutingModule,
    
    EdUilibModule,
    EdCommonModule,
  ],
  providers: [
    DashboardService,
    FolderStore,
    UserService,
    TeamService
  ]
})
export class DashboardsModule{

}