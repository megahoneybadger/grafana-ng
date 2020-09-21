import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDashboardsComponent } from './dashboards';


const routes: Routes = [
  { path: '', component: ManageDashboardsComponent },
  /*{ path: 'f/new', component: AddFolderComponent, canActivate: [AuthGuard],  data:{ role: Role.Editor } },*/
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
