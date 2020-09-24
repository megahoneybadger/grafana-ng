import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore } from 'common';
import { DashboardsRoutingModule } from './dashboards.mod-r';


import { FolderContentComponent } from './folder/content/folder-content';
import { FolderPermissionsComponent } from './folder/perms/folder-perms';
import { ManageDashboardsComponent } from './dashboards';
import { DashboardExplorerComponent } from './explorer/explorer';
import { DashboardExplorerDeleterComponent } from './explorer/delete/deleter';
import { DashboardExplorerMoverComponent } from './explorer/move/mover';

@NgModule({
  declarations:[
    ManageDashboardsComponent,

    DashboardExplorerComponent,
    DashboardExplorerDeleterComponent,
    DashboardExplorerMoverComponent,

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