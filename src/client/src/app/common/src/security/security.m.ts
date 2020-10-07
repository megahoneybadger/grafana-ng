import { Team } from '../team/team.m';
import { OrgUser } from '../user/user.m';

export enum Role {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer"
}

export enum Permission{
	View = "View",
	Edit = "Edit",
	Admin = "Admin"
}

export enum PermissionTarget {
	Team = "Team",
	User = "User",
	Viewer = "Viewer",
	Editor = "Editor"
}

export interface PermissionTargetInfo{
	value: PermissionTarget;
	label: string;
}

export const availablePermissionTargets: PermissionTargetInfo[] = [
  { value: PermissionTarget.Team, label: 'Team' },
  { value: PermissionTarget.User, label: 'User' },
  { value: PermissionTarget.Viewer, label: 'Everyone With Viewer Role' },
  { value: PermissionTarget.Editor, label: 'Everyone With Editor Role' },
];

export class PermissionRuleHelper{
	static toRule( target: PermissionTarget, perm: Permission, team?: Team, user?: OrgUser ):PermissionRule{
		switch (target) {
			case PermissionTarget.Team:
				return {
					label: team.name,
					permission: perm,
					target: PermissionTarget.Team,

					teamId: team.id,
					team: team.name
				}

			case PermissionTarget.User:
				return {
					label: user.login,
					target: PermissionTarget.User,
					permission: perm,

					userId: user.id,
					userLogin: user.login,
					userEmail: user.email
				}

			case PermissionTarget.Viewer:
				return {
					label: Role[Role.Viewer],
					target: PermissionTarget.Viewer,
					permission: perm,
					role: Role.Viewer,
				}

			case PermissionTarget.Editor:
				return {
					label: Role[Role.Editor],
					target: PermissionTarget.Editor,
					permission: perm,
					role: Role.Editor,
				}
		}
	}

	static adjust( x: PermissionRule ) : PermissionRule{
		if( x.userId ){
			x.target = PermissionTarget.User;
			x.label = x.userLogin;
			x.sortRank = 0;
		} else if( x.teamId ){
			x.target = PermissionTarget.Team;
			x.label = x.team;
			x.sortRank = 1;
		} else {
			x.target = ( x.role == Role.Editor ) ? PermissionTarget.Editor : PermissionTarget.Viewer;
			x.label = Role[ x.role ];

			switch( x.role ){
				case Role.Viewer:
					x.sortRank = 2;
					break;

				case Role.Editor:
					x.sortRank = 3;
					break;

				case Role.Admin:
					x.sortRank = 4;
					break;
			}
		}

		return {...x};
	}

	static toAssignment( rule: PermissionRule ) : PermissionAssignment{
		switch( rule.target ){
			case PermissionTarget.User:
				return {
					userId: rule.userId,
					permission: rule.permission
				}

			case PermissionTarget.Team:
				return {
					teamId: rule.teamId,
					permission: rule.permission
				}

			case PermissionTarget.Editor:
				return {
					role: Role[Role.Editor],
					permission: rule.permission
				}

			case PermissionTarget.Viewer:
				return {
					role: Role[Role.Viewer],
					permission: rule.permission
				}
		}
	}

	static admin(){
		return PermissionRuleHelper.adjust({
			role: Role.Admin,
			permission: Permission.Admin,
			label: "Admin"
		} )
	}

	static sort( x: PermissionRule[] ){
		x.sort((a, b) => (a.sortRank > b.sortRank) ? -1 : 1);
	}
}

export class PermissionRule{

	label: string;
	
  userId?: number;
  userLogin?: string;
	userEmail?: string;
	
  teamId?: number;
	team?: string;
  
	role?: Role;

	isFolder?: boolean;
	
  name?: string;
  inherited?: boolean;

	target?: PermissionTarget;
	permission: Permission;
	sortRank?: number;
}

export interface PermissionAssignment{
	permission: Permission;
	userId?: number;
	teamId?: number;
	role?: Role;
}
