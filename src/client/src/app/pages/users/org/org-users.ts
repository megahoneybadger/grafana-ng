import { Component } from '@angular/core';
import { OrgService, OrgUser, Role } from 'common';
import { finalize, tap } from 'rxjs/operators';
import { DropDownComponent, ErrorMessages, FadeInOutAnimation, Notes, ObservableEx } from 'uilib';
import { BaseComponent } from '../../base/base-component';

@Component({
  selector: 'users',
  templateUrl: './org-users.html',
  animations: [FadeInOutAnimation],
})
export class UsersComponent extends BaseComponent {

  usersRequest: ObservableEx<OrgUser[]>
  users: OrgUser[];
  filter: string;

  waitingDelete: boolean = false;
  waitingUpdate: boolean = false;
  updateUserId: number;

  availableRoles = DropDownComponent.wrapEnum( Role );

  constructor(	private orgService: OrgService ){
    super()
  }

  ngOnInit() {
		this.usersRequest = new ObservableEx<OrgUser[]>(this
			.orgService
			.getCurrentOrgMembers()
      .pipe(
        tap(x => this.users = [...x])));
  }

  
  onRoleChanged(value: any, user, ctrl: DropDownComponent): void {
    this.waitingUpdate = true;
    this.updateUserId = user.userId;
 
		var arg = {
			role: value.newValue
		}

		this
			.orgService
			.updateCurrentOrgMember( user.userId, arg )
			.pipe(
				finalize( () => {
					this.waitingUpdate = false;
					this.updateUserId = undefined;
				} ))
			.subscribe( 
				x => Notes.success( x.message ),
				e => {
					ctrl.forceValue( value.oldValue );
					Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_ORG_MEMBER );
				})

  }
  
  onRemoveMember(user) {
    this.waitingDelete = true;

		this
			.orgService
			.deleteCurrentOrgMember( user.userId)
			.pipe(
				finalize( () => this.waitingDelete = false ))
			.subscribe(
				x => {
					delete user.confirmDelete;
					Notes.success(x.message);

					const index = this
						.users
						.findIndex(y => user.userId == (<any>y).userId );

					if (-1 !== index) {
						this.users.splice(index, 1);
					}
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_ORG_MEMBER ))
	}
}
