import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { OrgRoutingModule } from './orgs.mod-r';
import { UserService } from 'src/app/core/services/users.s';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { OrgService } from 'src/app/core/services/orgs.s';
import { AdminAddOrgComponent } from './add/add-org';
import { AdminOrgsComponent } from './orgs';
import { AdminEditOrgComponent } from './edit/edit-org';

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
    
    UilibModule,
  ],
  providers: [
    UserService,
    OrgService,
    DashboardService
  ]
})
export class OrgModule{

}