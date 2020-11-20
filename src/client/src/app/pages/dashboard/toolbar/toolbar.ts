import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { DashboardStore, NavigationProvider, UserService } from 'common';
import { Subscription } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';
import { ErrorMessages, Notes } from 'uilib';
import { BaseDasboardComponent } from '../base/dashboard-base';

@Component({
  selector: 'dashboard-toolbar',
	templateUrl: './toolbar.html',
  styleUrls:[ './toolbar.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class DashboardToolbarComponent extends BaseDasboardComponent {

  previousUrl: string;
  routeSubs: Subscription;

  showSearch: boolean = false;
  showShare: boolean = false;
  @Input() fullscreen: boolean;
  @Input() settingsOpen: boolean;

  get returnUrl(): string{

    return ( this.fullscreen ) ? 
      this.dashboard?.url : ( this.previousUrl ?? this.dashboard?.url );
  }
	
  constructor( 
		store: DashboardStore,
    private nav: NavigationProvider,
    private router: Router,
    private activeRoute: ActivatedRoute,
		private userService: UserService ){
      super( store );

      this.routeSubs = router
        .events
        .pipe(
          filter(e => e instanceof NavigationEnd && undefined !== router.getCurrentNavigation().previousNavigation ),
          map(() => this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString()),
        )
        .subscribe( x => this.previousUrl = x?.split('?')[0]); 
  }

  ngOnDestroy(){
    super.ngOnDestroy()

    this.routeSubs?.unsubscribe();
  }
  
	onStar(){
		const id = this.dashboard.id;
    const meta = this.dashboard.meta;

    if( this.dashboard.meta.isStarred ){
      this
        .userService
        .unstarDashboard( id )
        .subscribe( x => {
            Notes.success( x.message ); 
            meta.isStarred = false
          },
          e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UNSTAR_DASHBOARD ));
    } else{ 
      this
        .userService
        .starDashboard( id )
        .subscribe( 
          x => {
            Notes.success( x.message ); 
            meta.isStarred = true;
          }, 
          e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UNSTAR_DASHBOARD ));
      
    }
	}

	onAddPanel(p: Plugin){
		console.log( 'add panel' );
		console.log( p );
	}
}
