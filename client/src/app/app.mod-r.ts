import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users';
import { DataSourcesComponent } from './pages/datasources/datasources';


const appRoutes: Routes = [
  {
    path: 'org/teams',
    loadChildren: './pages/teams/teams.mod#TeamsModule'
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
