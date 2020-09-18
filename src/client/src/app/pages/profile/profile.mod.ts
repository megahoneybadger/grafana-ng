import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProfileRoutingModule } from './profile.mod-r';
import { ProfileChangePasswordComponent } from './change-password/change-pwd';
import { ProfilePreferencesComponent } from './prefs/prefs';
import { EdUilibModule } from 'uilib';
import { EdCommonModule, UserService, DashboardService } from 'common';

@NgModule({
  declarations:[
    ProfilePreferencesComponent,
    ProfileChangePasswordComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileRoutingModule,
    
    EdUilibModule,
    EdCommonModule,
  ],
  providers: [
    UserService,
    DashboardService
    
  ]
})
export class ProfileModule{

}