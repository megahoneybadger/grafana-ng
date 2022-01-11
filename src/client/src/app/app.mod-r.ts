import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgSettingsComponent } from './pages/org/settings/org-settings';
import { UsersComponent } from './pages/users/org/org-users';
import { NotFoundComponent } from './pages/base/not-found/not-found';
import { LoginComponent } from './pages/layout/login/login';
import { LayoutComponent } from './pages/layout/layout';
import { AuthGuard, Role } from 'common';
import { BackendSettingsComponent } from './pages/profile/config/config';

const appRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent,   // {5},
  },

  {
    path: '',   
    component: LayoutComponent,
    canActivate: [AuthGuard],   
    
    children:[
      {
        path: 'org',
        component: OrgSettingsComponent,
      },
      {
        path: 'admin/orgs',
        canActivate: [AuthGuard],   
        data: {root: true},
        loadChildren: './pages/org/orgs.mod#OrgModule'
      },

      {
        path: 'admin/users',
        canActivate: [AuthGuard],   
        data: {root: true},
        loadChildren: './pages/users/users.mod#UsersModule'
      },

      {
        path: 'admin/settings',
        canActivate: [AuthGuard],
        data:{ root: true },
        component: BackendSettingsComponent,
      },
    
      {
        path: 'org/teams',
        canActivate: [AuthGuard],
        data:{ role: Role.Admin },
        loadChildren: './pages/teams/teams.mod#TeamsModule'
      },
    
      {
        path: 'plugins',
        canActivate: [AuthGuard],
        data:{ role: Role.Admin },
        loadChildren: './pages/plugins/plugins.mod#PluginsModule'
      },

      {
        path: 'playlists',
        canActivate: [AuthGuard],
        data:{ role: Role.Admin },
        loadChildren: './pages/playlists/playlists.mod#PlaylistsModule'
      },
      
      {
        path: 'org/users',
        canActivate: [AuthGuard],
        data:{ role: Role.Admin },
        component: UsersComponent,
      },
    
      {
        path: 'org/apikeys',
        canActivate: [AuthGuard],
        data:{ role: Role.Admin },
        loadChildren: './pages/api-keys/api-keys.mod#ApiKeysModule'
      },
    
      {
        path: 'alerting',
        canActivate: [AuthGuard],
        data:{ role: Role.Admin },
        loadChildren: './pages/alerts/alerts.mod#AlertsModule'
      },
    
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.mod#ProfileModule'
      },
    
      {
        path: 'datasources',
        canActivate: [AuthGuard],
        data:{ role: Role.Admin },
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

      {
        path: "",
        pathMatch:'full',
        redirectTo: "dashboards"
      },
      
      {path: "not-found", component: NotFoundComponent},
      {path: "**", redirectTo:'/not-found'}
    ]
  },
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
