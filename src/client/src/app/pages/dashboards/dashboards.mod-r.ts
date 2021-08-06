import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderContentComponent } from './folder/content/folder-content';
import { FolderPermissionsComponent } from './folder/perms/folder-perms';
import { ManageDashboardsComponent } from './dashboards';
import { EditFolderComponent } from './folder/edit/edit-folder';
import { AddFolderComponent } from './folder/add/add-folder';
import { AuthGuard, Role } from 'common';
import { ImportDashboardComponent } from './import/import';

const routes: Routes = [
  { path: '', component: ManageDashboardsComponent },

  { 
    path: 'f/new',
    component: AddFolderComponent,
    canActivate: [AuthGuard],
    data:{ role: Role.Editor }
  },

  { 
    path: 'f/:uid/:name',
    component: FolderContentComponent,
    // canActivate: [AuthGuard],
    // data:{ role: Role.Editor },
  },

  { 
    path: 'f/:uid/:name/permissions',
    component: FolderPermissionsComponent,
    // canActivate: [AuthGuard],
    // data:{ role: Role.Admin },
  },

  { 
    path: 'f/:uid/:name/settings',
    component: EditFolderComponent,
    // canActivate: [AuthGuard],
    // data:{ role: Role.Editor }
  },

  { 
    path: 'import',
    component: ImportDashboardComponent,
    // canActivate: [AuthGuard],
    // data:{ role: Role.Editor }
  }
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
