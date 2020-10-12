import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardStore, NavigationProvider, Dashboard, UserService } from 'common';
import { Subscription } from 'rxjs';
import { ErrorMessages, Notes } from 'uilib';


@Component({
  selector: 'dashboard-toolbar',
	templateUrl: './toolbar.html',
	styleUrls:[ './toolbar.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class DashboardToolbarComponent {
	storeSubs: Subscription;
	dashboard: Dashboard;

	showSearch: boolean = false;
	
  constructor( 
		private store: DashboardStore,
		private nav: NavigationProvider,
		private userService: UserService ){
		
	}

	ngOnInit(){
		this.storeSubs = this
			.store
			.dashboard$
			.subscribe( x => {
				if( x ){
					this.dashboard = x;
				}
			});
	}

	ngOnDestroy(){
    this.storeSubs?.unsubscribe();
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
}
