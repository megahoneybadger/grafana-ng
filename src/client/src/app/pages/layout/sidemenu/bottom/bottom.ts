import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OrgUser, NavigationItem, AuthService, NavigationProvider, UserService, UserOrgMembership, Role } from 'common';

@Component({
  selector: 'sidebar-bottom',
  templateUrl: './bottom.html'
})
export class SidebarBottomComponent {
  user: OrgUser;
  userSubs: Subscription;
  items : NavigationItem[];

  orgs$: Observable<UserOrgMembership[]>;
  isSwitcheDialogOpened = false;

  RoleRef = Role;

  constructor( 
    private authService: AuthService,
    private userService: UserService,
    private menuProvider: NavigationProvider,
    public router: Router ){
      router
        .events
        .pipe(
          filter (event => event instanceof NavigationEnd ))
        .subscribe( x => menuProvider.closeMobile() );
  }

  ngOnInit(){
    this.orgs$ =  this
      .userService
      .getCurrentUserOrgs();

    this.userSubs = this
      .authService
      .user$
      .subscribe( x => {
        this.user = x;
        this.items = [ 
          this.menuProvider.profile( x ),
          this.menuProvider.help
        ];
       } );
  }

  ngOnDestroy() {
    this.userSubs?.unsubscribe();
  }

  onSwitchOrg( m: UserOrgMembership ){
    this.isSwitcheDialogOpened = false;

    this
			.userService
			.switchCurrentUserOrg( m.orgId )
			.subscribe( x => {
        this.authService.updateToken( x.token )
        window.location.reload();
      });
  }
}
