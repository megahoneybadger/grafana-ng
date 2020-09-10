import { AuthService } from 'src/app/core/services/auth-service';
import { NavigationProvider } from 'src/app/core/services/navigation.s';

import { BaseComponent } from '../base/base-component';
import { Subscription } from 'rxjs';
import { OrgUser } from 'src/app/core/models/user';
import { PageNavigation } from 'src/app/core/models/nav';
import { UserService } from 'src/app/core/services/users.s';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { Directive } from '@angular/core';

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