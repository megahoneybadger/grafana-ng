import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, finalize } from 'rxjs/operators';
import { BaseComponent } from '../base/base-component';
import { ObservableEx, Notes, ErrorMessages, FadeInOutAnimation  } from 'uilib';
import { UserService, OrgUser } from 'common';

@Component({
  selector: 'admin-users',
  templateUrl: './users.html',
  animations: [FadeInOutAnimation],
})
export class AdminUsersComponent extends BaseComponent {
	usersRequest: ObservableEx<OrgUser[]>
  users: OrgUser[];
  filter: string;
  
  constructor( 
		private userService: UserService,
		public router: Router,
		public activatedRoute: ActivatedRoute ) {
			super()
  }
  
  ngOnInit() {
		this.usersRequest = new ObservableEx<OrgUser[]>(this
			.userService
			.getUsers()
      .pipe(
        tap(x => this.users = [...x])));
  }
  
  onRemoveUser(user) {
		this.waiting = true;

		this
			.userService
			.deleteUser(user.id)
			.pipe(
				finalize( () =>  {
					this.waiting = false;
					delete user.confirmDelete;
				} ))
			.subscribe(
				x => {
					delete user.confirmDelete;
					Notes.success(x.message);

					const index = this
						.users
						.findIndex(y => user.id == y.id );

					if (-1 !== index) {
						this.users.splice(index, 1);
					}
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_USER ))
	}
}
