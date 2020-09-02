import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TeamsComponent } from '../teams';
import { TeamMembersComponent } from '../edit/members/team-members';
import { TeamSettingsComponent } from '../edit/settings/team-settings';
import { TeamsRoutingModule } from './teams.mod-r';
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { TeamService } from 'src/app/core/services/teams.s';
import { TeamStore } from 'src/app/core/stores/team.store';

@NgModule({
  declarations:[
    TeamsComponent,
    TeamMembersComponent,
    TeamSettingsComponent,
    
		// TeamsNameFilterPipe,
		// AddTeamComponent,
		// EditTeamComponent,
		
		// TeamMemberNameFilterPipe
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TeamsRoutingModule,
    
    UilibModule,
  ],
  providers: [
    TeamService,
    TeamStore
    // UsersService,
    // MessageService,
  ]
})
export class TeamsModule{

}