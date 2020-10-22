import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgSettingsComponent } from './pages/org/settings/org-settings';
import { UsersComponent } from './pages/users/org/org-users';
import { NotFoundComponent } from './pages/base/not-found/not-found';

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
    path: 'plugins',
    loadChildren: './pages/plugins/plugins.mod#PluginsModule'
  },
  
  {
    path: 'org/users',
    component: UsersComponent,
  },

  {
    path: 'org/apikeys',
    loadChildren: './pages/api-keys/api-keys.mod#ApiKeysModule'
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
    loadChildren: './pages/datasources/datasources.mod#DatasourcesModule'
  },

  {
    path: 'dashboards',
    loadChildren: './pages/dashboards/dashboards.mod#DashboardsModule'
  },
  
  {
    path: 'd',
    loadChildren: './pages/dashboard/dashboard.mod#DashboardModule'
  },

  // {path: "not-found", component: NotFoundComponent},
  // {path: "**", redirectTo:'/not-found'}
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
