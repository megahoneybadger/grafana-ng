import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileChangePasswordComponent } from './change-password/change-pwd';
import { ProfilePreferencesComponent } from './prefs/prefs';

const routes: Routes = [
  { path: '',  component: ProfilePreferencesComponent },
  { path: 'password', component: ProfileChangePasswordComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
  
})
export class ProfileRoutingModule { }
