import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/users.s';
import { Router, ActivatedRoute } from '@angular/router';
import { OrgUser } from 'src/app/core/models/user';
import { ObservableEx } from 'src/app/uilib/load-or-error/load-wrapper';
import { tap, finalize } from 'rxjs/operators';
import { FadeInOutAnimation } from 'src/app/uilib/animations';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';
import { BaseComponent } from '../base/base-component';

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
		private router: Router,
		private activatedRoute: ActivatedRoute ) {
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
