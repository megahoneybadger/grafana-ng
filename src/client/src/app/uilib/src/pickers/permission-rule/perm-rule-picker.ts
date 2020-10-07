import { Component, EventEmitter, Output } from '@angular/core';
import { Team, Permission, TeamService, PermissionRule, PermissionRuleHelper,
	UserService, OrgUser, PermissionTarget, availablePermissionTargets } from 'common';

import { defer, Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ErrorMessages } from '../../note/error-messages';
import { Notes } from '../../note/note-dispatcher';

@Component({
  selector: 'ed-permission-rule-picker',
	templateUrl: './perm-rule-picker.html',
	styleUrls: ['./perm-rule-picker.scss']
})
export class PermissionRulePickerComponent {
  teams$: Observable<Team[]>;
	users$: Observable<OrgUser[]>;

	selectedTeam: Team;
  selectedUser: OrgUser;
	selectedPermission: Permission;
	
	loading: boolean = false;

  availableTargets = [...availablePermissionTargets];
  
  _mode: PermissionTarget = PermissionTarget.Team;
	PermissionTargetRef = PermissionTarget;

	@Output() selected = new EventEmitter<PermissionRule>()

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
      
	}
  
  ngOnInit() {
		this.teams$ = defer(() => {
			this.loading = true;

			return this
				.teamService
				.getTeams()
				.pipe(
					finalize(() => this.loading = false ),
					catchError( x => {
						Notes.error( ErrorMessages.BAD_GET_TEAMS );
						return throwError(x);
					} ))
    });

		this.users$ = defer(() => {
			this.loading = true;

			return this
				.userService
				.getUsers()
				.pipe(
					finalize(() => this.loading = false),
					catchError( x => {
						Notes.error( ErrorMessages.BAD_GET_USERS );
						return throwError(x);
					} ))
			});
	}

	onSave(){
		const rule = PermissionRuleHelper.toRule( this.target,
			this.selectedPermission, this.selectedTeam, this.selectedUser );

		PermissionRuleHelper.adjust( rule );

		this.selected.emit(rule);
	}
}


