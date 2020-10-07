import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardStore, NavigationProvider } from 'common';
import { Subscription } from 'rxjs';
import { Dashboard } from 'src/app/common/src/public-api';

@Component({
  selector: 'toolbar',
	templateUrl: './toolbar.html',
	styleUrls:[ './toolbar.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class DashboardToolbarComponent {
	storeSubs: Subscription;
	dashboard: Dashboard;
	
  constructor( 
		private store: DashboardStore,
		private nav: NavigationProvider ){
		
	}

	ngOnInit(){
		this.storeSubs = this
			.store
			.dashboard$
			.subscribe( x => {
				if( x ){
					this.dashboard = x;
					/*DashboardsService.saveRecentDashboards( this.dashboard.id )*/
				}
			});
	}

	ngOnDestroy(){
    this.storeSubs?.unsubscribe();
	}
	
	onStarDashboard(){
		console.log( 'on star dashboard' );
	}
}
