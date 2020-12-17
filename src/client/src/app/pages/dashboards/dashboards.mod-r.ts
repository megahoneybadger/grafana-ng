import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderContentComponent } from './folder/content/folder-content';
import { FolderPermissionsComponent } from './folder/perms/folder-perms';
import { ManageDashboardsComponent } from './dashboards';
import { EditFolderComponent } from './folder/edit/edit-folder';
import { AddFolderComponent } from './folder/add/add-folder';
import { AuthGuard, Role } from 'common';

const routes: Routes = [
  { path: '', component: ManageDashboardsComponent },
  { 
    path: 'f/:uid/:name',
    component: FolderContentComponent,
    canActivate: [AuthGuard],
    data:{ role: Role.Editor },
  },

  { 
    path: 'f/:uid/:name/permissions',
    component: FolderPermissionsComponent
  },

  { 
    path: 'f/:uid/:name/settings',
    component: EditFolderComponent,
    canActivate: [AuthGuard],
    data:{ role: Role.Editor }
  },

  { 
    path: 'f/new',
    component: AddFolderComponent,
    canActivate: [AuthGuard],
    data:{ role: Role.Editor }
  },
    
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
