import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationChannelsComponent } from './channels/notif-channels';

import { AlertRulesComponent } from './rules/alert-rules';

const routes: Routes = [
  { path: 'list', component: AlertRulesComponent },
  { path: 'notifications', component: NotificationChannelsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class AlertsRoutingModule { }
