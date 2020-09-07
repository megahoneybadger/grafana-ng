import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { AdminRoutingModule } from './admin.mod-r';
import { AdminUsersComponent } from './users/users';
import { AdminOrgsComponent } from './orgs/orgs';
import { AdminSettingsComponent } from './settings/settings';
import { AdminAddUserComponent } from './users/add/add-user';
import { UserService } from 'src/app/core/services/users.s';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { AdminUserNameFilterPipe } from './pipes/user-name.p';
import { AdminEditUserComponent } from './users/edit/edit-user';
import { OrgService } from 'src/app/core/services/orgs.s';
import { AdminAddOrgComponent } from './orgs/add/add-org';
import { AdminEditOrgComponent } from './orgs/edit/edit-org';

@NgModule({
  declarations:[
    AdminUsersComponent,
    AdminAddUserComponent,
    AdminEditUserComponent,
    AdminUserNameFilterPipe,
    
    AdminOrgsComponent,
    AdminAddOrgComponent,
    AdminEditOrgComponent,
    AdminSettingsComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    
    UilibModule,
  ],
  providers: [
    UserService,
    OrgService,
    DashboardService
    
  ]
})
export class AdminModule{

}