import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddUserComponent } from '../users/add/add-user';
import { AdminUsersComponent } from './users';
import { AdminEditUserComponent } from './edit/edit-user';

const routes: Routes = [
  { path: '',  component: AdminUsersComponent },
  { path: 'create',  component: AdminAddUserComponent },
  { path: 'edit/:id', component: AdminEditUserComponent  },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
  
})
export class UsersRoutingModule { }
