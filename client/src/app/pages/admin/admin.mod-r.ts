import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from './users/users';
import { AdminOrgsComponent } from './orgs/orgs';
import { AdminSettingsComponent } from './settings/settings';
import { AdminAddUserComponent } from './users/add/add-user';
import { AdminEditUserComponent } from './users/edit/edit-user';
import { AdminAddOrgComponent } from './orgs/add/add-org';
import { AdminEditOrgComponent } from './orgs/edit/edit-org';

const routes: Routes = [
  { path: 'users',  component: AdminUsersComponent },
  { path: 'users/create',  component: AdminAddUserComponent },
  { path: 'users/edit/:id', component: AdminEditUserComponent},
  
  { path: 'orgs',  component: AdminOrgsComponent },
  { path: 'orgs/new',  component: AdminAddOrgComponent },
  { path: 'orgs/edit/:id',  component: AdminEditOrgComponent },
  { path: 'settings',  component: AdminSettingsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
  
})
export class AdminRoutingModule { }
