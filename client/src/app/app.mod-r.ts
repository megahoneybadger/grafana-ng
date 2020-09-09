import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataSourcesComponent } from './pages/datasources/datasources';
import { OrgSettingsComponent } from './pages/org/settings/org-settings';
import { UsersComponent } from './pages/users/org/org-users';

const appRoutes: Routes = [
  {
    path: 'org',
    component: OrgSettingsComponent,
  },
  {
    path: 'admin/orgs',
    loadChildren: './pages/org/orgs.mod#OrgModule'
  },

  {
    path: 'org/teams',
    loadChildren: './pages/teams/teams.mod#TeamsModule'
  },
  
  {
    path: 'org/users',
    component: UsersComponent,
  },
  {
    path: 'admin/users',
    loadChildren: './pages/users/users.mod#UsersModule'
  },

  {
    path: 'profile',
    loadChildren: './pages/profile/profile.mod#ProfileModule'
  },


  {
    path: 'datasources',
    component: DataSourcesComponent,
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
