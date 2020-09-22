import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore } from 'common';
import { DashboardsRoutingModule } from './dashboards.mod-r';
import { ManageDashboardsComponent } from './dashboards';
import { FolderListComponent } from './list/folder-list/folder-list';
import { FolderContentComponent } from './folder/content/folder-content';
import { FolderPermissionsComponent } from './folder/perms/folder-perms';

@NgModule({
  declarations:[
    ManageDashboardsComponent,

    FolderListComponent,

    FolderContentComponent,
    FolderPermissionsComponent
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
    FolderStore
  ]
})
export class DashboardsModule{

}