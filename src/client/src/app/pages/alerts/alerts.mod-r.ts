import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertChannelEditorComponent } from './channels/edit/editor';
import { AlertChannelsComponent } from './channels/channels';

import { AlertRulesComponent } from './rules/alert-rules';

const routes: Routes = [
  { path: 'list', component: AlertRulesComponent },
  { path: 'notifications', component: AlertChannelsComponent },
  { 
    path: 'notifications/new',
    component: AlertChannelEditorComponent,
    data:{ isNew: true },
  },
  { 
    path: 'notifications/edit/:id',
    component: AlertChannelEditorComponent,
    data:{ isNew: false },
  },
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
