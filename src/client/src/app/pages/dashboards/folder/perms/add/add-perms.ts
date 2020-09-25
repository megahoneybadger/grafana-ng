import { Component } from '@angular/core';
import { Role, Team, User, Permission, TeamService, UserService, OrgUser } from 'common';

import { SelectItem } from 'primeng/api';
import { defer, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { DropDownComponent } from 'uilib';

@Component({
  selector: 'add-perm',
  templateUrl: './add-perms.html'
})
export class AddPermissionsComponent extends BaseComponent  {
  teams$: Observable<Team[]>;
	users$: Observable<OrgUser[]>;
	selectedTeam: Team;
  selectedUser: User;
  selectedPermission: Permission;

  availableTargets = [
		{label:'Team', value: AddPermissionTarget.Team },
		{label:'User', value: AddPermissionTarget.User },
		{label:'Everyone With Viewer Role', value: AddPermissionTarget.Viewer },
		{label:'Everyone With Editor Role', value: AddPermissionTarget.Editor }
  ]
  
  _mode: AddPermissionTarget = AddPermissionTarget.Team;
  AddPermissionTargetRef = AddPermissionTarget;

	get mode() {
		return this._mode;
	}

	set mode(m: AddPermissionTarget) {
		this._mode = m;
		this.selectedTeam = undefined;
		this.selectedUser = undefined;
  }

  constructor(
		private teamService: TeamService,
		private userService: UserService ) {
      super();
	}

  
  ngOnInit() {
		this.teams$ = defer(() => {
			this.waiting = true;

			return this
				.teamService
				.getTeams()
				.pipe(
          finalize(() => this.waiting = false ))
    });

		this.users$ = defer(() => {
			this.waiting = true;

			return this
				.userService
				.getUsers()
				.pipe(
					finalize(() => this.waiting = false))
			});
	}

}


enum AddPermissionTarget {
	Team,
	User,
	Viewer,
	Editor
}
