import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';

const routes: Routes = [
  {
    path: 'new',
    component: DashboardComponent,
    //canActivate: [AuthGuard],
    data: { existing: false },
  },
  {
    path: ':uid/:title',
    component: DashboardComponent,
    data: { existing: true },
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
export class DashboardRoutingModule { }
