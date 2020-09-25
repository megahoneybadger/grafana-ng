import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderContentComponent } from './folder/content/folder-content';
import { FolderPermissionsComponent } from './folder/perms/folder-perms';
import { ManageDashboardsComponent } from './dashboards';
import { EditFolderComponent } from './folder/edit/edit-folder';
import { AddFolderComponent } from './folder/add/add-folder';

const routes: Routes = [
  { path: '', component: ManageDashboardsComponent },
  { path: 'f/:uid/:name', component: FolderContentComponent },
  { path: 'f/:uid/:name/permissions', component: FolderPermissionsComponent },
  { path: 'f/:uid/:name/settings', component: EditFolderComponent },
  { path: 'f/:uid/:name/settings', component: EditFolderComponent },
  { path: 'f/new', component: AddFolderComponent },
    
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardsRoutingModule { }
