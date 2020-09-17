import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OrgUser, NavigationItem, AuthService, NavigationProvider } from 'common';

@Component({
  selector: 'sidebar-bottom',
  templateUrl: './bottom.html'
})
export class SidebarBottomComponent {
  user: OrgUser;
  userSubs: Subscription;
  items : NavigationItem[];

  constructor( 
    private authService: AuthService,
    private menuProvider: NavigationProvider,
    public router: Router ){
      router
        .events
        .pipe(
          filter (event => event instanceof NavigationEnd ))
        .subscribe( x => menuProvider.closeMobile() );
  }

  ngOnInit(){
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

  onSwitchOrg(){
    console.log( 'onSwitchOrg' );
  }
}
