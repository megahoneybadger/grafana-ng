import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { OrgRoutingModule } from './orgs.mod-r';
import { AdminAddOrgComponent } from './add/add-org';
import { AdminOrgsComponent } from './orgs';
import { AdminEditOrgComponent } from './edit/edit-org';
import { EdCommonModule, UserService, OrgService, DashboardService } from 'common';

@NgModule({
  declarations:[
    AdminOrgsComponent,
    AdminAddOrgComponent,
    AdminEditOrgComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OrgRoutingModule,
    
    EdUilibModule,
    EdCommonModule,
  ],
  providers: [
    UserService,
    OrgService,
    DashboardService
  ]
})
export class OrgModule{

}