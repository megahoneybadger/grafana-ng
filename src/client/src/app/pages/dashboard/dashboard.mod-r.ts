import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, Role } from 'common';
import { DashboardComponent } from './dashboard';
import { DashboardPanelEditorComponent } from './panel/edit/panel-editor';
import { DashboardSettingsComponent } from './settings/settings';

const routes: Routes = [
  {
    path: 'new',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { existing: false, role: Role.Editor },
  },

  {
    path: 'new/settings',
    component: DashboardSettingsComponent,
    canActivate: [AuthGuard],
    data: { existing: false,  role: Role.Editor },
  },

  {
    path: 'new/edit/:panelId',
    component: DashboardPanelEditorComponent,
    canActivate: [AuthGuard],
    data: { existing: false, editor: true, role: Role.Editor },
  },



  {
    path: ':uid/:title/edit/:panelId',
    component: DashboardPanelEditorComponent,
    // use 	AuthGuard.canEditDashboard( this.dashboard, this.router );
    data: { existing: true, editor: true },
  },

  {
    path: ':uid/:title/view/:panelId',
    component: DashboardPanelEditorComponent,
    data: { existing: true, editor: false },
  },

  {
    path: ':uid/:title/settings',
    component: DashboardSettingsComponent,
    // use 	AuthGuard.canEditDashboard( this.dashboard, this.router );
    data: { existing: true },
    
  },

  {
    path: ':uid/:title',
    component: DashboardComponent,
    // use 	backend DashboardHttpGet
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
