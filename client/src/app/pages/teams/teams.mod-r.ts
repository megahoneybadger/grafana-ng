import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams';
import { TeamMembersComponent } from './edit/members/team-members';
import { TeamSettingsComponent } from './edit/settings/team-settings';

const routes: Routes = [
  { path: '',  component: TeamsComponent },
  //{ path: 'add', component: AddTeamComponent },
  { path: 'edit/:id', component: TeamMembersComponent},
  { path: 'edit/:id/members', component: TeamMembersComponent},
  { path: 'edit/:id/settings', component: TeamSettingsComponent },
  // { path: 'new/:type', component: DataSourceEditorComponent, data: {mode: 'Create'}}
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
  
})
export class TeamsRoutingModule { }
