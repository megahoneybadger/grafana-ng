
import { BaseComponent } from '../base/base-component';
import { Subscription } from 'rxjs';
import { Directive } from '@angular/core';
import { PageNavigation, AuthService, NavigationProvider,
   UserService, DashboardService, OrgUser } from 'common';

@Directive()
export class BaseProfileComponent extends BaseComponent{
  userSubs: Subscription;
  navigation: PageNavigation;

  constructor( 
    protected authService: AuthService,
    protected navProvider: NavigationProvider,
    protected userService: UserService,
		protected dsService: DashboardService ){
    super();

    this.userSubs = authService
      .user$
      .subscribe( u => this.onUserLoaded( u ) );
  }

  onUserLoaded( _: OrgUser ){
    
  }

  ngOnDestroy(){
    this.userSubs?.unsubscribe();
  }
}