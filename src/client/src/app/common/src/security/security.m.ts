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

export class PermissionBindingHelper{
	static export( target: PermissionTarget, perm: Permission, team?: Team, user?: OrgUser ):PermissionBinding{
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

	static import( x: PermissionBinding ) : PermissionBinding{
		if( x.userId ){
			x.target = PermissionTarget.User;
			x.label = x.userLogin;
		} else if( x.teamId ){
			x.target = PermissionTarget.Team;
			x.label = x.team;
		} else {
			x.target = ( x.role == Role.Editor ) ? PermissionTarget.Editor : PermissionTarget.Viewer;
			x.label = Role[ x.role ];
		}

		return {...x};
	}

	static admin(){
		return PermissionBindingHelper.import({
			role: Role.Admin,
			permission: Permission.Admin,
			label: "Admin"
		} )
	}
}

export class PermissionBinding{

	label: string;
	
  userId?: number;
  userLogin?: string;
	userEmail?: string;
	
  teamId?: number;
	team?: string;
	
  //
	role?: Role;

	isFolder?: boolean;
	
  name?: string;
  inherited?: boolean;

	target?: PermissionTarget;
	permission: Permission;
}
