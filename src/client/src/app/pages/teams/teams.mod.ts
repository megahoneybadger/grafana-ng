import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TeamsComponent } from './teams';
import { TeamMembersComponent } from './edit/members/team-members';
import { TeamSettingsComponent } from './edit/settings/team-settings';
import { TeamsRoutingModule } from './teams.mod-r';
import { TeamsNameFilterPipe } from './pipes/teams.p';
import { AddTeamComponent } from './add/add-team';
import { TeamMemberNameFilterPipe } from './pipes/team-members.p';
import { EdUilibModule } from 'uilib';
import { EdCommonModule, UserService, TeamService, TeamStore, DashboardService } from 'common';

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
    
    EdUilibModule,
    EdCommonModule,
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