import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDataSourceComponent } from './add/add-datasource';
import { DataSourcesComponent } from './list/datasources';
import { EditDataSourceComponent } from './edit/edit-datasource';

const routes: Routes = [
  { path: '',  component: DataSourcesComponent },
  { path: 'new', component: AddDataSourceComponent },
  { path: 'edit/:id', component: EditDataSourceComponent},
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
