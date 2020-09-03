import { NavigationHelper } from '../services/navigation.s';
import { NavigationItem, PageNavigation } from './nav';

export interface Team {
  id: number;
  name: string;
  avatarUrl: string;
  email: string;
  memberCount: number;
}

export interface TeamMember {
  userId: number;
  teamId: number;
  avatarUrl: string;
  email: string;
  login: string;
  labels: string[];
}

export interface TeamGroup {
  groupId: string;
  teamId: number;
}

export interface TeamsState {
  teams: Team[];
  searchQuery: string;
  hasFetched: boolean;
}

export interface TeamState {
  team: Team;
  members: TeamMember[];
  groups: TeamGroup[];
  searchMemberQuery: string;
}

export class TeamNavigation {
  static getItem(team: Team): NavigationItem {
    return {
      img: team.avatarUrl,
      id: 'team-' + team.id,
      subTitle: 'Manage members & settings',
      url: '',
      text: team.name,
      breadcrumbs: [{ title: 'Teams', url: '/org/teams' }],
      children: [
        {
          active: false,
          icon: 'gicon-team',
          id: `members`,
          text: 'Members',
          url: `/org/teams/edit/${team.id}/members`,
        },
        {
          active: false,
          icon: 'fa fa-fw fa-sliders',
          id: `settings`,
          text: 'Settings',
          url: `/org/teams/edit/${team.id}/settings`,
        },
      ],
    };
  }

  static build( team: Team, id: string ) : PageNavigation {
    return NavigationHelper.createNavigationFromNode( this.getItem( team ), id );
  }
}

