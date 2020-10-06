import { Component, EventEmitter, Output } from '@angular/core';
import { Team, User, Permission, TeamService, PermissionRule, PermissionRuleHelper,
	UserService, OrgUser, PermissionTarget, availablePermissionTargets } from 'common';

import { defer, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BaseComponent } from 'src/app/pages/base/base-component';

@Component({
  selector: 'add-perm',
	templateUrl: './add-perms.html',
	styleUrls: ['./add-perms.scss']
})
export class AddPermissionsComponent extends BaseComponent  {
  teams$: Observable<Team[]>;
	users$: Observable<OrgUser[]>;
	selectedTeam: Team;
  selectedUser: OrgUser;
  selectedPermission: Permission;

  availableTargets = [...availablePermissionTargets];
  
  _mode: PermissionTarget = PermissionTarget.Team;
	PermissionTargetRef = PermissionTarget;

	@Output() add = new EventEmitter<PermissionRule>()

	get target() : PermissionTarget {
		return this._mode;
	}

	set target(m: PermissionTarget ) {
		this._mode = m;
		this.selectedTeam = undefined;
		this.selectedUser = undefined;
	}
	
	get saveDisabled() {
		var cond = true;

		switch (this.target) {
			case PermissionTarget.Team:
				cond = this.selectedTeam != undefined;
				break;

			case PermissionTarget.User:
				cond = this.selectedUser != undefined;
				break;
		}

		return !this.selectedPermission || !cond;
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

	onSave(){
		const rule = PermissionRuleHelper.create( this.target,
			this.selectedPermission, this.selectedTeam, this.selectedUser );

		PermissionRuleHelper.adjust( rule );

		this.add.emit(rule);

		//console.log( binding );
	}
}


