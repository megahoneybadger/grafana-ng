import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from './users.mod-r';
import { AdminAddUserComponent } from './add/add-user';
import { AdminUserNameFilterPipe } from './pipes/user-name.p';
import { AdminEditUserComponent } from './edit/edit-user';
import { AdminUsersComponent } from './users';
import { EdCommonModule, UserService, OrgService, DashboardService } from 'common';
import { EdUilibModule } from 'uilib';

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
    
    EdUilibModule,
    EdCommonModule,
  ],
  providers: [
    UserService,
    OrgService,
    DashboardService
    
  ]
})
export class UsersModule{

}