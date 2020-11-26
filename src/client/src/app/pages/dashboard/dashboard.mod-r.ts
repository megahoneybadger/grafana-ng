import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { DashboardPanelEditorComponent } from './panel/edit/panel-editor';
import { DashboardSettingsComponent } from './settings/settings';


const routes: Routes = [
  {
    path: 'new',
    component: DashboardComponent,
    //canActivate: [AuthGuard],
    data: { existing: false },
  },

  {
    path: 'new/settings',
    component: DashboardSettingsComponent,
    data: { existing: false },
    //canActivate: [AuthGuard],
  },

  {
    path: 'new/edit/:panelId',
    component: DashboardPanelEditorComponent,
    //canActivate: [AuthGuard],
    data: { existing: false, editor: true },
  },

 
 

  {
    path: ':uid/:title/edit/:panelId',
    component: DashboardPanelEditorComponent,
    //canActivate: [AuthGuard],
    data: { existing: true, editor: true },
  },

  {
    path: ':uid/:title/view/:panelId',
    component: DashboardPanelEditorComponent,
    //canActivate: [AuthGuard],
    data: { existing: true, editor: false },
  },

  {
    path: ':uid/:title/settings',
    component: DashboardSettingsComponent,
    data: { existing: true },
    //canActivate: [AuthGuard],
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
