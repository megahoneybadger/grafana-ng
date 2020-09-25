import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore, UserService, TeamService } from 'common';
import { DashboardsRoutingModule } from './dashboards.mod-r';


import { FolderContentComponent } from './folder/content/folder-content';
import { FolderPermissionsComponent } from './folder/perms/folder-perms';
import { ManageDashboardsComponent } from './dashboards';
import { DashboardExplorerComponent } from './explorer/explorer';
import { DashboardExplorerDeleterComponent } from './explorer/delete/deleter';
import { DashboardExplorerMoverComponent } from './explorer/move/mover';
import { EditFolderComponent } from './folder/edit/edit-folder';
import { AddFolderComponent } from './folder/add/add-folder';
import { AddPermissionsComponent } from './folder/perms/add/add-perms';

@NgModule({
  declarations:[
    ManageDashboardsComponent,

    DashboardExplorerComponent,
    DashboardExplorerDeleterComponent,
    DashboardExplorerMoverComponent,

    FolderContentComponent,
    FolderPermissionsComponent,
    AddPermissionsComponent,
    EditFolderComponent,
    AddFolderComponent,
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