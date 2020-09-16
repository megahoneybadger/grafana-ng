import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { UsersRoutingModule } from './users.mod-r';
import { AdminAddUserComponent } from './add/add-user';
import { UserService } from 'src/app/core/services/users.s';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { AdminUserNameFilterPipe } from './pipes/user-name.p';

import { OrgService } from 'src/app/core/services/orgs.s';
import { AdminEditUserComponent } from './edit/edit-user';
import { AdminUsersComponent } from './users';
import { UilibModule2 } from 'uilib2';



@NgModule({
  declarations:[
    AdminUsersComponent,
    AdminAddUserComponent,
    AdminEditUserComponent,
    AdminUserNameFilterPipe,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UsersRoutingModule,
    
    UilibModule,
    UilibModule2,
  ],
  providers: [
    UserService,
    OrgService,
    DashboardService
    
  ]
})
export class UsersModule{

}