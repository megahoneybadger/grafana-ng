import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PluginDetailsComponent } from './details/details';
import { PluginsComponent } from './list/plugins';

const routes: Routes = [
  { path: '',  component: PluginsComponent },
  { path: ':id/edit',  component: PluginDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
  
})
export class PluginsRoutingModule { }
