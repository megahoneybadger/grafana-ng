import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddOrgComponent } from './add/add-org';
import { AdminOrgsComponent } from './orgs';
import { AdminEditOrgComponent } from './edit/edit-org';

const routes: Routes = [
  { path: '',  component: AdminOrgsComponent },
  { path: 'new',  component: AdminAddOrgComponent },
  { path: 'edit/:id',  component: AdminEditOrgComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
  
})
export class OrgRoutingModule { }
