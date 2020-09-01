import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './config/teams/teams';
import { UsersComponent } from './config/users/users';
import { DataSourcesComponent } from './config/datasources/datasources';

const appRoutes: Routes = [
  {
    path: 'org/teams',
    component: TeamsComponent,
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
