import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { DashboardPanelEditorComponent } from './panel/edit/panel-editor';


const routes: Routes = [
  {
    path: 'new',
    component: DashboardComponent,
    //canActivate: [AuthGuard],
    data: { existing: false },
  },
 

  {
    path: ':uid/:title/edit/:panelId',
    component: DashboardPanelEditorComponent,
    //canActivate: [AuthGuard],
    data: { existing: true, editor: true },
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
