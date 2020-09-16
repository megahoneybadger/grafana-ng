import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TeamsComponent } from './teams';
import { TeamMembersComponent } from './edit/members/team-members';
import { TeamSettingsComponent } from './edit/settings/team-settings';
import { TeamsRoutingModule } from './teams.mod-r';
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { TeamService } from 'src/app/core/services/teams.s';
import { TeamStore } from 'src/app/core/stores/team.store';
import { TeamsNameFilterPipe } from './pipes/teams.p';
import { AddTeamComponent } from './add/add-team';
import { UserService } from 'src/app/core/services/users.s';
import { TeamMemberNameFilterPipe } from './pipes/team-members.p';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { UilibModule2 } from 'uilib2';

@NgModule({
  declarations:[
    TeamsComponent,
    TeamMembersComponent,
    TeamSettingsComponent,
    
    AddTeamComponent,
    
    TeamsNameFilterPipe,
    TeamMemberNameFilterPipe,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TeamsRoutingModule,
    
    UilibModule,
    UilibModule2,
  ],
  providers: [
    TeamService,
    TeamStore,
    UserService,
    DashboardService
    
  ]
})
export class TeamsModule{

}