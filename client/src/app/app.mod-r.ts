import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users';
import { DataSourcesComponent } from './pages/datasources/datasources';
import { OrgSettingsComponent } from './pages/org/org-settings';


const appRoutes: Routes = [
  {
    path: 'org',
    component: OrgSettingsComponent,
  },
  {
    path: 'org/teams',
    loadChildren: './pages/teams/teams.mod#TeamsModule'
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.mod#AdminModule'
  },
  
  {
    path: 'org/users',
    component: UsersComponent,
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
