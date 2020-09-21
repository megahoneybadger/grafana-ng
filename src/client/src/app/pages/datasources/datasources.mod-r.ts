import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDataSourcesComponent } from './new/new-datasources';
import { DataSourcesComponent } from './list/datasources';
import { EditDataSourceComponent, DataSourceEditorMode } from './edit/edit-datasource';

const routes: Routes = [
  { path: '',  component: DataSourcesComponent },
  { path: 'new', component: NewDataSourcesComponent },
  { path: 'new/:type', component: EditDataSourceComponent, data: {mode: DataSourceEditorMode.Create }},
  { path: 'edit/:id', component: EditDataSourceComponent, data: {mode: DataSourceEditorMode.Update }},
  // { path: 'edit/:id/members', component: TeamMembersComponent},
  // { path: 'edit/:id/settings', component: TeamSettingsComponent },
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
export class DatasourcesRoutingModule { }
