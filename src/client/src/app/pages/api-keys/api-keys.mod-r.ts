import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiKeysComponent } from './api-keys';

const routes: Routes = [
  { path: '',  component: ApiKeysComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class ApiKeysRoutingModule { }
