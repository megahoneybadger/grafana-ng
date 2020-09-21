import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService } from 'common';
import { DashboardsRoutingModule } from './dashboards.mod-r';
import { ManageDashboardsComponent } from './dashboards';

@NgModule({
  declarations:[
    ManageDashboardsComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardsRoutingModule,
    
    EdUilibModule,
    EdCommonModule,
  ],
  providers: [
   
    DashboardService
    
  ]
})
export class DashboardsModule{

}