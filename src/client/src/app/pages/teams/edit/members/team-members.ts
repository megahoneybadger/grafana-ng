import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamBaseComponent } from '../team-base';
import { tap, finalize } from 'rxjs/operators';
import { ErrorMessages, Notes, ObservableEx } from 'uilib';
import { TeamMember, OrgUser, UserService, TeamStore, AvatarHelper, TeamService } from 'common';
import { NavigationProvider } from 'common';
import { NavigationHelper } from 'src/app/common/src/nav/nav.s';
import { Team } from 'src/app/common/src/public-api';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.html'
})
export class TeamMembersComponent extends TeamBaseComponent {

  filter: string;
  teamMembersRequest: ObservableEx<TeamMember[]>;
  teamMembers: TeamMember[];

  showAddMemberBand: boolean = false;
  availableUsers : OrgUser[];
  availableUsersCandidates: OrgUser[];
  selectedUserCandidate: OrgUser;

  constructor(
    teamService: TeamService,
    userService: UserService,
    activatedRoute: ActivatedRoute,
    private navProvider: NavigationProvider,
    store: TeamStore) {
    super(teamService, activatedRoute, store);

    this.storeSubs = store
      .team$
      .subscribe(( team: Team ) => {
        this.navigation = NavigationHelper.createNavigationFromNode( 
          this.navProvider.team( team ), "members" );

        console.log( this.navigation );
        
        this.team = team;

        if (team.id) {
          userService
            .getUsers()
            .subscribe( x => {
              this.availableUsers = [...x];
              this.rebuildPossibleCandidates();
            } );
          
          this.teamMembersRequest = new ObservableEx(this
            .teamService
            .getTeamMembers(team.id)
            .pipe(
              tap(x => {
                this.teamMembers = [...x];
                
                this.rebuildPossibleCandidates();
              })
            ));
        }
      });
  }

  onAdd() {
    if( !this.selectedUserCandidate ){
      return;
    }

    const user = {...this.selectedUserCandidate};

    this.waiting = true;

    this
      .teamService
      .addTeamMember(this.team.id, user.id)
      .pipe(
        finalize(() => this.waiting = false))
      .subscribe(
        x => {
          Notes.success(x.message);

          this.teamMembers.push({
            userId: user.id,
            teamId: this.team.id,
            email: user.email,
            login: user.login,
            avatarUrl: AvatarHelper.getUrl( user.email )
          })

          this.rebuildPossibleCandidates();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_ADD_TEAM_MEMBER));
  }

  onRemove(m: TeamMember) {
    this.waiting = true;

    this
      .teamService
      .deleteTeamMember( m )
      .pipe(
        finalize(() => this.waiting = false))
      .subscribe(
        x => {
          delete (<any>m).confirmDeleteMembership;

          Notes.success(x.message);

          const index = this
            .teamMembers
            .findIndex(y => m.userId == y.userId)

          if (-1 !== index) {
            this.teamMembers.splice(index, 1);
            this.rebuildPossibleCandidates();
          }
        },
        e => Notes.error(e.error?.message ?? ErrorMessages.BAD_DELETE_TEAM_MEMBER))
  }

  rebuildPossibleCandidates() {
    if( !this.teamMembers ){
      return;
    }

    const ids = this
      .teamMembers
      .map(x => x.userId);

    const res = this
      .availableUsers
      .filter(x => !ids.includes(x.id))

    res.sort((a, b) => a.login.localeCompare(b.login));

    this.availableUsersCandidates = res;
  }
}
